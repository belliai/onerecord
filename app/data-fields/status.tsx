import { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { FieldValues, useForm } from "react-hook-form"
import { useLocalStorage } from "usehooks-ts"

import {
  useAddStatus,
  useRemoveStatus,
  useStatuses,
  useUpdateStatus,
} from "@/lib/hooks/statuses"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { InputSwitchProps } from "@/components/form/InputSwitch"

import CrudTable, { FormDialog, FormDropdown } from "./components/crud-table"
import {
  DataFields,
  DataFieldsItem,
  DataFieldsItemContent,
} from "./components/data-fields"

interface GroupDefinition {
  id: string
  name: string
  startIndex: number
  endIndex: number
}

const statusGroupDef: GroupDefinition[] = [
  {
    id: "sales",
    name: "Sales",
    startIndex: 0,
    endIndex: 3,
  },
  {
    id: "operations",
    name: "Before Airport",
    startIndex: 3,
    endIndex: 7,
  },
  {
    id: "during-airport",
    name: "During Airport",
    startIndex: 7,
    endIndex: 14,
  },
  {
    id: "after-airport",
    name: "After Airport",
    startIndex: 14,
    endIndex: 22,
  },
  {
    id: "unassigned",
    name: "Unassigned",
    startIndex: 22,
    endIndex: 9999,
  },
]

function groupData(data: any[], groupsDef: GroupDefinition[]) {
  const statusWithGroup = data.map((status, index) => {
    const group = groupsDef.find(
      (g) => index >= g.startIndex && index < g.endIndex
    )

    return {
      ...status,
      groupId: group?.id || "unassigned",
    }
  })

  return statusWithGroup
}

const Status = ({ tabComponent }: { tabComponent?: React.ReactNode }) => {
  const [savedStatuses, setSavedStatuses] = useLocalStorage<any[]>(
    "statuses_with_group",
    []
  )

  const [open, setOpen] = useState(false)
  const [selectedEditing, setSelectedEditing] = useState<string | null>(null)
  const [selectedGroup, setSelectedGroup] = useState<string[]>([])
  const [selectedAddgroup, setSelectedAddGroup] = useState<string | null>(null)
  const [selectedEditingGroup, setSelectedEditingGroup] = useState<
    string | null
  >(null)
  const [grouppedData, setGrouppedData] = useState<any[]>([])
  const [statusesData, setStatusesData] = useState<any[]>([])
  const [statusGroups, setStatusGroups] =
    useState<GroupDefinition[]>(statusGroupDef)

  const groupStatusOptions = statusGroups?.map((status) => ({
    value: status.id,
    label: status.name,
  }))

  const { isLoading, isPending, error, data: apiStatusesData } = useStatuses()
  const update = useUpdateStatus()
  const add = useAddStatus()
  const remove = useRemoveStatus()

  const statusForm = useForm({
    defaultValues: { name: "" },
  })

  const fieldGroupForm = useForm({
    defaultValues: { name: "" },
  })

  const secondForm: InputSwitchProps<{ name: string }>[] = [
    {
      name: "name",
      type: "text",
      label: "Group Name",
    },
  ]

  useEffect(() => {
    if (apiStatusesData) {
      const statusesDataWithDescription = apiStatusesData?.map(
        (status: any) => ({
          ...status,
          description: "Description for " + status.name, // Hardcoded for now, should change once API is ready
        })
      )

      // This is a hacky way to sort the statuses. A better way would be to define order with a separate field
      const data = statusesDataWithDescription?.sort((a: any, b: any) => {
        const numA = parseInt(a.name.split(")")[0])
        const numB = parseInt(b.name.split(")")[0])

        // Check if the values are valid numbers
        const isNumAValid = !isNaN(numA)
        const isNumBValid = !isNaN(numB)

        if (isNumAValid && isNumBValid) {
          // Both are valid numbers, sort them
          return numA - numB
        } else if (isNumAValid) {
          // Only `a` is valid, so it should come before `b`
          return -1
        } else if (isNumBValid) {
          // Only `b` is valid, so it should come before `a`
          return 1
        } else {
          // Neither is a valid number, do not change their order
          return 0
        }
      })

      if (!savedStatuses.length) {
        // Set initial saved statuses
        const statusWithGroup = groupData(data, statusGroupDef)

        setSavedStatuses(statusWithGroup)
      } else {
        const updatedStatuses = statusesDataWithDescription.map(
          (status: any) => {
            const savedStatus = savedStatuses.find(
              (saved) => saved.ID === status.ID
            )

            if (savedStatus) {
              return {
                ...status,
                groupId: savedStatus.groupId,
              }
            } else {
              // Set unassigned group for new statuses
              return {
                ...status,
                groupId: "unassigned",
              }
            }
          }
        )

        setStatusesData(updatedStatuses)
      }
    }
  }, [apiStatusesData, savedStatuses])

  if (error) return "An error has occurred: " + error.message

  const form: InputSwitchProps<FieldValues>[] = [
    { name: "id", type: "hidden" },
    { name: "name", type: "text", label: "Status" },
    {
      name: "groupId",
      type: "combobox",
      label: "Group",
      selectOptions: groupStatusOptions,
    },
    { name: "description", type: "text", label: "Description" },
  ]

  const shouldUseModal = form.filter((f) => f.name !== "id").length > 1

  return (
    <div className="flex flex-col gap-8 py-4">
      <Form {...statusForm}>
        <div className="flex justify-between">
          {tabComponent && tabComponent}
          <div className={cn("", { "flex justify-end": shouldUseModal })}>
            {shouldUseModal ? (
              <>
                <FormDialog
                  form={form}
                  open={shouldUseModal && open}
                  setOpen={setOpen}
                  title="Status"
                  onSave={(data) => {
                    const { id, name } = data

                    console.log("Save", data)

                    if (id) {
                      update.mutate({ id, name })
                    } else {
                      add.mutate(
                        { name },
                        {
                          onSuccess: (resData) => {
                            console.log("resData: ", resData)

                            if (resData?.id) {
                              // Save the new status to local storage
                              setSavedStatuses((prev) => [
                                ...prev,
                                {
                                  ...resData,
                                  ID: resData?.id,
                                  groupId: data?.groupId,
                                },
                              ])
                            }

                            setOpen(false)
                          },
                        }
                      )
                    }
                  }}
                />
                <Button
                  variant="button-primary"
                  size="sm"
                  onClick={() => setOpen(true)}
                >
                  Add New
                </Button>
              </>
            ) : (
              <FormDropdown
                form={form}
                onSave={(data) => {
                  const { id, name } = data
                  if (id) {
                    update.mutate({ id, name })
                  } else {
                    add.mutate({ name })
                  }
                }}
              />
            )}
          </div>
        </div>

        <Accordion
          type="multiple"
          className="flex flex-col gap-2"
          value={selectedGroup}
          onValueChange={setSelectedGroup}
        >
          {statusGroups.map((group) => {
            const statuses: any[] =
              group.id === "unassigned"
                ? statusesData.filter(
                    (status) =>
                      !status.groupId || status.groupId === "unassigned"
                  )
                : statusesData.filter((status) => status.groupId === group.id)

            if (statuses.length === 0) return null

            return (
              <AccordionItem
                key={group.name}
                value={group.name}
                className="rounded-sm border bg-zinc-900/50"
              >
                <Form {...fieldGroupForm}>
                  <AccordionTrigger
                    value={group.name}
                    className="group/trigger flex flex-row-reverse justify-between gap-2 px-3 py-1.5"
                  >
                    {/* <Button
                      size="icon"
                      className="h-8 w-8 bg-transparent p-0 text-gray-400 opacity-0 transition-opacity duration-200 hover:bg-transparent group-hover/trigger:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log("Add new field")
                      }}
                    >
                      <Plus size={16} />
                    </Button> */}
                    <DataFieldsItemContent
                      selectedEditing={selectedEditingGroup}
                      setSelectedEditing={setSelectedEditingGroup}
                      columnSpans={[12, 0, 0]}
                      data={{ name: group.name }}
                      title={group.name}
                      form={secondForm}
                      // onSave={(data) => {
                      //   console.log("Save group", data)
                      // }}
                      // onDelete={() => deleteFieldGroup(fieldGroup.id)}
                      actionsClassName="group/trigger:opacity-0 group-hover/trigger:opacity-100 group-hover:opacity-0"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="py-2">
                    {statuses?.map((item: any) => {
                      const { groupId, ...rest } = item

                      return (
                        <DataFieldsItem
                          key={rest.id}
                          className="rounded-none border-0 bg-transparent pl-9 hover:bg-white/5"
                        >
                          <DataFieldsItemContent
                            selectedEditing={selectedEditing}
                            setSelectedEditing={setSelectedEditing}
                            columnSpans={[4, 8, 0]}
                            data={rest}
                            form={form}
                            title={rest.name}
                            onSave={(data) => {
                              const { id, option } = data

                              const actualId = id || data.ID
                              const payload = option || data.name

                              if (actualId) {
                                update.mutate({ id: actualId, name: payload })
                              } else {
                                add.mutate({ name: option })
                              }
                            }}
                            onDelete={() => {
                              const actualId = rest.id || rest.ID

                              if (actualId) {
                                remove.mutate({ id: actualId })
                              }
                            }}
                          />
                        </DataFieldsItem>
                      )
                    })}
                    {/* {selectedAddgroup === fieldGroup.id && (
                      <DataFieldsItem className="group/item border-0 bg-transparent pl-9">
                        <DataFieldsItemContent
                          selectedEditing={selectedAddgroup}
                          setSelectedEditing={setSelectedAddGroup}
                          columnSpans={[4, 4, 4]}
                          data={{
                            id: fieldGroup.id,
                            field_name: "",
                            field_type: "",
                          }}
                          actionsClassName="group-hover:opacity-0 opacity-0 group-hover/item:opacity-100"
                          form={[
                            {
                              name: "id",
                              type: "hidden",
                            },
                            {
                              name: "field_name",
                              type: "text",
                              label: "Field Name*",
                            },
                            {
                              name: "field_type",
                              type: "combobox",
                              label: "Field Type",
                              placeholder: "Field Type*",
                              className: "min-w-[200px]",
                              selectOptions: DUMMY_FIELD_TYPES,
                            },
                          ]}
                          title={`New Field to ${fieldGroup.name}`}
                          isNew
                          onSave={(data) => {
                            addCustomField({
                              ...data,
                              field_group: fieldGroup.id,
                            })
                            setSelectedAddGroup(null)
                          }}
                          onDelete={() => {}}
                        />
                      </DataFieldsItem>
                    )} */}
                  </AccordionContent>
                </Form>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Form>
    </div>
  )
}
export default Status
