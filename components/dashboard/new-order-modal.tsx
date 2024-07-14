"use client"

import { PropsWithChildren, useEffect, useMemo, useRef, useState, ComponentType } from "react"
import { Customer } from "@/schemas/customer"
import { Order, orderSchema } from "@/schemas/order/order"
import { getDefaults } from "@/schemas/utils"
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import {
  Banknote,
  ChevronRight,
  HistoryIcon,
  PackageIcon,
  PlaneIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  SaveIcon,
  ScrollTextIcon,
  SquarePenIcon,
  Trash2Icon,
  UserIcon,
  XCircle,
} from "lucide-react"
import { useForm } from "react-hook-form"

import { useUpdateCustomer } from "@/lib/hooks/customers"
import { useAddOrder, useUpdateOrder } from "@/lib/hooks/orders"
import { mapJsonToSchema, mapSchemaToJson } from "@/lib/mapper/order"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Form } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { useBookingContext } from "@/components/dashboard/BookingContext"

import ActivityLog from "./activity-log"
import BalanceCard from "./balance-card"
import DimensionsCard from "./dimensions-card"
import ConsignmentDetailsForm from "./forms/consignment-details.form"
import CreateBookingForm from "./forms/create-booking-form"
import ProcessRatesForm from "./forms/process-rates-form"
import ShipperDetailsForm from "./forms/shipper-details-form"
import OrderSummaryCard from "./order-summary-card"
import { PaperAirplaneIcon } from "@heroicons/react/20/solid"
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useStatuses } from "@/lib/hooks/statuses"
import { Combobox } from "@/components/form/combobox"
import BookingTypeForm from "./forms/booking-type-form"
import BookingDetailsForm from "./forms/booking-details-form"
import ConsignorForm from "./forms/consignor-form"
import ConsigneeForm from "./forms/consignee-form"
import FreightForwarderForm from "./forms/freight-forwarder-form"
import PaymentForm from "./forms/payment-form"

type NewOrderModalProps = PropsWithChildren & {
  onOpenChange: (open: boolean) => void
  open?: boolean
  mode?: "edit" | "create"
}

const schemas = orderSchema.omit({ activity_logs: true })
const initialValues = getDefaults(schemas)

export default function NewOrderModal(props: NewOrderModalProps) {
  const { children, onOpenChange, mode = "create" } = props
  const { selectedBooking, setSelectedBooking } = useBookingContext()
  const [open, setOpen] = useState(props.open ?? false)
  const [isFullScreen, setFullScreen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [closeWarningOpen, setCloseWarningOpen] = useState(false)
  const [currentTab, setCurrentTab] = useState('booking-type')

  const add = useAddOrder()
  const update = useUpdateOrder()
  const updateCustomer = useUpdateCustomer()
  const { data: statuses } = useStatuses()

  const defaultValues = useMemo(
    () => ({
      ...initialValues,
      ...(selectedBooking && { ...mapJsonToSchema(selectedBooking) }),
    }),
    [selectedBooking]
  )

  const form = useForm<Order>({
    // TODO : implement later
    resolver: zodResolver(schemas),
    defaultValues,
  })

  // Watch the entire form for changes
  const formValues = form.watch()
  useEffect(() => {
    // Log the updated form values whenever they change
    //console.log("Form Values Changed:", formValues);
  }, [formValues])

  const isLastIndex = () => {
    const currentTabIndex = TAB_LIST.findIndex(tab => tab.value === currentTab)

    return (currentTabIndex + 1) === TAB_LIST.length
  }

  const nextTab = () => {
    const currentTabIndex = TAB_LIST.findIndex(tab => tab.value === currentTab)
    const fieldList = TAB_LIST[currentTabIndex].fieldList || []
    form.trigger(fieldList as any)
    .then((success) => {
      const isLast = isLastIndex();
      if(success && !isLast) setCurrentTab(TAB_LIST[currentTabIndex + 1].value)
    })
  }

  const TAB_LIST: {
    label: string;
    value: string;
    icon: any;
    content: JSX.Element;
    fieldList: string[];
  }[] = [
    {
      label: 'Booking Type',
      value: 'booking-type',
      icon: PlaneIcon,
      content: <BookingTypeForm onValueChange={nextTab} />,
      fieldList: ['booking_type_id'],
    },
    {
      label: 'Booking Details',
      value: 'booking-details',
      icon: SquarePenIcon,
      content: <BookingDetailsForm />,
      fieldList: ['partner_prefix_id', 'awb', 'partner_code_id', 'is_physical', 'commodity_code_id', 'commodity_name', 'pieces', 'gs_weight_kg', 'volume_kg'],
    },
    {
      label: 'Consignor (Sender)',
      value: 'consignor',
      icon: PlaneTakeoffIcon,
      content: <ConsignorForm />,
      fieldList: ['origin_id', 'shipper_id'],
    },
    {
      label: 'Consignee (Receiver)',
      value: 'consignee',
      icon: PlaneLandingIcon,
      content: <ConsigneeForm />,
      fieldList: ['destination_id', 'consignee_id'],
    },
    {
      label: 'Freight Forwarder',
      value: 'freight-forwarder',
      icon: PackageIcon,
      content: <FreightForwarderForm />,
      fieldList: ['freight_forwarder_id', 'organization_id'],
    },
    {
      label: 'Payment',
      value: 'payment',
      icon: Banknote,
      content: <PaymentForm />,
      fieldList: ['bill_to_id', 'bill_to_name', 'customer_id', 'customer_name', 'partner_prefix_id', 'rate', 's_rate', 's_freight', 'spot_id', 'gs_weight_kg', 'ch_weight_kg']
    }
  ]

  useEffect(() => {
    setOpen(props.open ?? false)
    if (!props.open && mode === "edit") {
      setSelectedBooking(initialValues)
    }
  }, [props.open])

  useEffect(() => {}, [selectedBooking])

  useEffect(() => {
    if (selectedBooking) {
      form.reset(defaultValues)
    }
  }, [selectedBooking, defaultValues, form])

  const toggleFullScreen = () => {
    setFullScreen((prev) => !prev)
  }

  const statusOptions = statuses?.map((status: any) => ({
    value: status.ID,
    label: status.name,
  }))

  const renderSaveButtons = () => (
    <Button
      type={isLastIndex() ? "submit" : "button"}
      variant={"button-primary"}
      onClick={isLastIndex() ? undefined : nextTab}
    >
      {isLastIndex() ? <><SaveIcon className="mr-2 size-4" />Save</> : <>Next<ChevronRight className="size-4" /></>}
    </Button>
  )

  const onSubmit = async (data: Order) => {
    const { bill_to_name, bill_to_old_name, bill_to_id } = data

    try {
      const mappedShipperDetails = data.shipper_details?.map((item) => ({
        ...item,
        date: item.date ? format(item.date, "yyyy-MM-dd") : "",
      }))
      data.shipper_details = mappedShipperDetails
      setIsLoading(true)

      const dataMapped = mapSchemaToJson(data)
      //update bill to name if the value changes
      if (bill_to_id && bill_to_name && bill_to_old_name !== bill_to_name) {
        await updateCustomer.mutateAsync({ id: bill_to_id, name: bill_to_name })
      }

      try {
        if (!data.ID) {
          await add.mutateAsync(dataMapped as Order)
          toast({
            title: "Success!",
            description: "Your order has been created",
          })
        } else {
          await update.mutateAsync({ ...(dataMapped as Order), id: data.ID })
          toast({
            title: "Success!",
            description: "Your order has been updated",
          })
        }
        setOpen(false)
        form.reset()
      } catch (e) {
        toast({
          title: "Failed!",
          variant: "destructive",
          description: "Your request failed",
        })
      }
    } catch (error) {
      console.error({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        hideCloseButton
        className={
          isFullScreen
            ? "h-screen w-screen max-w-none"
            : "top-8 max-w-[1100px] h-[90dvh] translate-y-0"
        }
        onInteractOutside={(e) => e.preventDefault()}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-full w-full flex-col justify-start gap-4">
            <DialogHeader className="flex flex-row items-center justify-between space-y-0">
              <DialogTitle>
                {mode === "create" ? "New Orders" : "Edit Order"}
              </DialogTitle>
              <div className="flex flex-row items-center justify-end gap-2 text-muted-foreground">
                <Button
                  onClick={toggleFullScreen}
                  variant={"ghost"}
                  size={"icon"}
                  className="h-6 w-6"
                  type="button"
                >
                  <ArrowsPointingOutIcon className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setCloseWarningOpen(true)}
                  variant={"ghost"}
                  size={"icon"}
                  className="h-6 w-6"
                  type="button"
                >
                  <XMarkIcon className="h-5 w-5" />
                </Button>
              </div>
            </DialogHeader>
            <Tabs value={currentTab} onValueChange={(val) => { setCurrentTab(val) }} className="grow">
              <div className="flex w-full flex-row items-stretch gap-4">
                <div className="min-w-[220px] flex flex-col gap-4 grow-0">
                  <TabsList className="h-fit w-full flex-col">
                    {TAB_LIST.map(list => (
                      <TabsTrigger
                        key={`list-${list.value}`}
                        className="w-full justify-start py-1.5"
                        value={list.value}
                        // disabled={!formValues.booking_type_id}
                      >
                        <list.icon className="mr-2 h-4 w-4" />
                        {list.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <Combobox
                    name="status_id"
                    options={statusOptions}
                    label="Status"
                    info="Select the Status"
                    editLink="/settings/data-fields?tab=status"
                  />
                </div>
                <div className="grid flex-1">
                  {TAB_LIST.map(item => (
                    <TabsContent key={`tab-${item.value}`} value={item.value} asChild>
                      {item.content}
                    </TabsContent>
                  ))}
                  <TabsContent value="activity-log" asChild>
                    <ActivityLog />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
            <DialogFooter>
              <Button
                type="button"
                variant={"secondary"}
                onClick={() => setCloseWarningOpen(true)}
              >
                <XCircle className="mr-2 size-4" />
                Cancel
              </Button>
              {renderSaveButtons()}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
      <AlertDialog open={closeWarningOpen} onOpenChange={setCloseWarningOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              You may have unsaved changes. Continue?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, continue editing</AlertDialogCancel>
            <AlertDialogAction
              variant={"button-primary"}
              onClick={() => {
                onOpenChange(false)
                setCloseWarningOpen(false)
                form.reset(defaultValues)
                setCurrentTab('booking-type')
              }}
            >
              Yes, discard changes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Dialog>
  )
}
