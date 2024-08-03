"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  companyFormSchema,
  CompanyFormValues,
} from "@/schemas/partners/company"
import { zodResolver } from "@hookform/resolvers/zod"
import { Building2Icon, CogIcon, Contact2Icon, PlusIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "@/components/data-table/data-table"
import PageContainer from "@/components/layout/PageContainer"

import { companiesColumns } from "./components/columns/companies-columns"
import { peopleColumns } from "./components/columns/people-columns"
import CompanyForm from "./components/forms/company-form"
import { companyFormDefaultValues } from "./constants/company-form-default-values"
import { DUMMY_COMPANIES_DATA, PEOPLE_DUMMY_DATA } from "./constants/dummy-data"
import { onExport } from "@/lib/utils/export"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import PaymentMode from "@/app/data-fields/payment-mode"
import Currency from "@/app/data-fields/currency"
import PartnerPrefix from "@/app/data-fields/partner-prefix"
import PartnerCode from "@/app/data-fields/partner-code"
import PartnerType from "@/app/data-fields/partner-type"
import CustomersOrganizationsCrud from "@/app/data-fields/customers/customers-organizations.crud"
import CustomersPeopleCrud from "@/app/data-fields/customers/customers-people-crud"

const SETTING_OPTIONS = [
  {
    label: "Payments",
    value: "",
    child: [
      {
        label: "Payment Mode",
        value: "payment-mode",
      },
      {
        label: "Currency",
        value: "currency",
      },
    ],
  },
  {
    label: "Organizations",
    value: "organizations",
    child: [
      {
        label: "Airline AWB Prefix",
        value: "Airline-AWB-Prefix",
      },
      {
        label: "IATA Airline Code",
        value: "IATA-airline-code",
      },
      {
        label: "Partner Type",
        value: "partner-type",
      },
    ],
  },
  {
    label: "Customers",
    value: "customers",
    child: [
      {
        label: "Organizations",
        value: "organizations",
      },
      {
        label: "People",
        value: "setting-people",
      },
    ],
  },
]

const PartnersTabsList = ({ tabValue }: { tabValue: string }) => (
  <TabsList className="gap-2 bg-transparent p-0">
    <TabsTrigger
      className="h-8 border border-secondary data-[state=active]:border-muted-foreground/40 data-[state=active]:bg-secondary"
      value="companies"
    >
      <Building2Icon className="mr-2 size-4" />
      Companies
    </TabsTrigger>
    <TabsTrigger
      className="h-8 border border-secondary data-[state=active]:border-muted-foreground/40 data-[state=active]:bg-secondary"
      value="people"
    >
      <Contact2Icon className="mr-2 size-4" />
      People
    </TabsTrigger>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`h-8 border border-secondary ${tabValue !== 'companies' && tabValue !== 'people' ? 'border-muted-foreground/40 bg-secondary text-white' : ''}`}
        >
          <CogIcon className="mr-2 size-4" />
          Settings
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit" align="start">
        <DropdownMenuGroup>
          {SETTING_OPTIONS.map((item, index) => {
            if (item.child) {
              return (
                <DropdownMenuSub key={`setting-${index}`}>
                  <DropdownMenuSubTrigger>
                    <span>{item.label}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="ml-2">
                      {item.child.map((childMenu, childId) => (
                        <DropdownMenuItem key={`child-${index}-${childId}`} className="cursor-pointer">
                          <TabsTrigger
                            value={childMenu.value}
                            className="data-[state=active]:bg-transparent"
                          >
                            {childMenu.label}
                          </TabsTrigger>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              )
            }
            return (
              <DropdownMenuItem key={`setting-${index}`} className="cursor-pointer">
                <TabsTrigger
                  value={item.value}
                >
                  {item.label}
                </TabsTrigger>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </TabsList>
)

export default function MasterAircraftPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")

  const [tabValue, setTabValue] = useState("companies") // If no tabParam, default to companies

  // Set initial tab value from searchParams
  useEffect(() => {
    if (tabParam) {
      setTabValue(tabParam)
    }
  }, [tabParam])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const setSearchParams = (key: string, value: string) => {
    /**
     * Note:
     * There was a bug before where the searchParams were not updating properly.
     * It was caused by a conflict with another function that was updating the searchParams
     * in the data-table-pagination.tsx file, which is nested inside the DataTable component used below.
     * I have since removed the conflicting function in data-table-pagination.tsx and the bug is now fixed.
     */
    router.push(pathname + "?" + createQueryString(key, value))
  }

  useEffect(() => {
    setSearchParams("tab", tabValue)
  }, [tabValue])

  // Memoize to prevent re-rendering
  const memoizedTabsList = useMemo(() => <PartnersTabsList tabValue={tabValue} />, [tabValue])

  return (
    <PageContainer>
      <div>
        <Tabs
          value={tabValue}
          onValueChange={setTabValue}
          className="space-y-4"
        >
          <TabsContent value="companies" asChild>
            <CompanyDataTable
              leftComponents={memoizedTabsList} // Pass tabsList as props to prevent re-rendering
            />
          </TabsContent>
          <TabsContent value="people" asChild>
            <DataTable
              showToolbarOnlyOnHover={true}
              columns={peopleColumns}
              data={PEOPLE_DUMMY_DATA ?? []}
              // onRowClick={handleAircraftRowClick}
              menuId="people"
              extraRightComponents={
                <Button
                  size={"sm"}
                  variant={"button-primary"}
                  className="p-2 text-sm"
                >
                  <PlusIcon className="mr-2 size-4" />
                  New Person
                </Button>
              }
              extraLeftComponents={memoizedTabsList}
              isCanExport={true}
              onExport={() =>
                onExport({ data: PEOPLE_DUMMY_DATA, filename: "PartnersPeopleData" })
              }
            />
          </TabsContent>
          <TabsContent value="payment-mode" asChild>
            <PaymentMode tabComponent={memoizedTabsList} />
          </TabsContent>
          <TabsContent value="currency" asChild>
            <Currency tabComponent={memoizedTabsList} />
          </TabsContent>
          <TabsContent value="Airline-AWB-Prefix" asChild>
            <PartnerPrefix tabComponent={memoizedTabsList} />
          </TabsContent>
          <TabsContent value="IATA-airline-code" asChild>
            <PartnerCode tabComponent={memoizedTabsList} />
          </TabsContent>
          <TabsContent value="partner-type" asChild>
            <PartnerType tabComponent={memoizedTabsList} />
          </TabsContent>
          <TabsContent value="organizations" asChild>
            <CustomersOrganizationsCrud tabComponent={memoizedTabsList} />
          </TabsContent>
          <TabsContent value="setting-people" asChild>
            <CustomersPeopleCrud tabComponent={memoizedTabsList} />
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  )
}

function CompanyDataTable({
  leftComponents,
}: {
  leftComponents?: React.ReactNode
}) {
  const [currentOpen, setCurrentOpen] = useState<string | boolean>(false)

  const form = useForm<CompanyFormValues>({
    defaultValues: companyFormDefaultValues,
    resolver: zodResolver(companyFormSchema),
  })

  return (
    <>
      <DataTable
        showToolbarOnlyOnHover={true}
        columns={companiesColumns}
        data={DUMMY_COMPANIES_DATA ?? []}
        // onRowClick={handleAircraftRowClick}
        menuId="companies"
        extraRightComponents={
          <Button
            size={"sm"}
            variant={"button-primary"}
            className="p-2 text-sm"
            onClick={() => setCurrentOpen(true)}
          >
            <PlusIcon className="mr-2 size-4" />
            New Company
          </Button>
        }
        extraLeftComponents={leftComponents}
        isCanExport={true}
              onExport={() =>
                onExport({ data: DUMMY_COMPANIES_DATA, filename: "PartnersCompanyData" })
              }
      />
      <CompanyForm
        form={form}
        currentOpen={currentOpen}
        onOpenChange={(open) => {
          if (open) {
            setCurrentOpen(currentOpen)
          } else {
            if (typeof currentOpen === "string") {
              form.reset(companyFormDefaultValues)
            }
            setCurrentOpen(false)
          }
        }}
      />
    </>
  )
}
