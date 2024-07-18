"use client"

import { useState } from "react"
import {
  Binary,
  Building2,
  CalendarDays,
  CaseUpper,
  DollarSign,
  Home,
  ListChecks,
  ListTodo,
  Phone,
  User2,
} from "lucide-react"

import { useCustomFields } from "@/lib/hooks/custom-fields"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CardHeader, CardTitle } from "@/components/ui/card"
import { ComboboxProps } from "@/components/form/combobox"
import { InputSwitchProps } from "@/components/form/InputSwitch"

import CrudTable, { FormDropdown } from "./components/crud-table"

export type FieldGroupType = {
  id: string
  name: string
  data: CustomFieldsSettingsType[]
}

export type CustomFieldsSettingsType = {
  id: string
  field_name: string
  field_type: string
  field_group: string
}

interface CustomFieldsSettingsProps {
  title?: string
  data: FieldGroupType[]
  groups: Required<ComboboxProps>["options"]
}

const DUMMY_FIELD_TYPES: Required<ComboboxProps>["options"] = [
  {
    icon: <CaseUpper />,
    label: "Text",
    value: "text",
  },
  {
    icon: <Binary />,
    label: "Numerical",
    value: "number",
  },
  {
    icon: <ListTodo />,
    label: "Single Option",
    value: "single_option",
  },
  {
    icon: <ListChecks />,
    label: "Multiple Option",
    value: "multiple_option",
  },
  {
    icon: <DollarSign />,
    label: "Monetary",
    value: "monetary",
  },
  {
    icon: <User2 />,
    label: "User",
    value: "user",
  },
  {
    icon: <Building2 />,
    label: "Organization",
    value: "organization",
  },
  {
    icon: <Phone />,
    label: "Phone",
    value: "phone",
  },
  {
    icon: <CalendarDays />,
    label: "Date & Time",
    value: "date_time",
  },
  {
    icon: <Home />,
    label: "Address",
    value: "address",
  },
]

export default function CustomFieldsSettings({
  data,
  groups,
}: CustomFieldsSettingsProps) {
  const {
    deleteCustomField,
    addCustomField,
    fieldGroups,
    addFieldGroup,
    updateCustomField,
    customFields,
    setCustomFields,
  } = useCustomFields({
    defaultCustomFields: data,
    defaultFieldGroups: groups,
  })

  const form: InputSwitchProps<CustomFieldsSettingsType>[] = [
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
      name: "field_group",
      type: "combobox-admin",
      label: "Field Group",
      placeholder: "Field Group",
      onCreate: addFieldGroup,
      onEdit: updateCustomField,
      onDelete: () => {},
      itemName: "Field Group",
      className: "min-w-[200px]",
      selectOptions: fieldGroups, // Hardcoded value, should be replaced with the actual value
    },
    {
      name: "field_type",
      type: "combobox",
      label: "Field Type",
      placeholder: "Field Type*",
      className: "min-w-[200px]",
      selectOptions: DUMMY_FIELD_TYPES,
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      <FormDropdown form={form} onSave={addCustomField} />
      <Accordion type="multiple" className="flex flex-col gap-4">
        {customFields.map((fieldGroup) => {
          return (
            <AccordionItem
              value={fieldGroup.id}
              className="rounded-md border"
              key={fieldGroup.id}
            >
              <AccordionTrigger
                className="flex flex-row items-center justify-between space-y-0 rounded-md bg-card px-4 py-2 data-[state=open]:rounded-b-none"
                value={fieldGroup.id}
              >
                <CardTitle className="text-lg font-bold">
                  {fieldGroup.name}
                </CardTitle>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <CrudTable
                  title={fieldGroup.name}
                  hideCardHeader
                  columns={[
                    {
                      accessorKey: "field_name",
                      header: "Field Name",
                    },
                    {
                      accessorKey: "field_group",
                      header: "Field Group",
                      cell: ({ row }) =>
                        fieldGroups.find(
                          (field) => field.value === row.original.field_group
                        )?.label,
                    },
                    {
                      accessorKey: "field_type",
                      header: "Field Type",
                      cell: ({ row }) =>
                        DUMMY_FIELD_TYPES.find(
                          (field) => field.value === row.original.field_type
                        )?.label,
                    },
                  ]}
                  hideAddForm
                  form={form}
                  data={fieldGroup.data}
                  onDelete={deleteCustomField}
                  onSave={addCustomField}
                />
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
