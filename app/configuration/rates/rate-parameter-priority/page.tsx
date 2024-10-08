"use client"

import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/data-table/data-table"
import { TFormTextField } from "@/components/form/FormTextField"
import CreateFormPageTemplate from "@/components/page-template/CreateFormPageTemplate"

export default function RateParameterPriorityPage() {
  const form = useForm()

  const formFields: TFormTextField[] = [
    {
      name: "rateParam",
      label: "Rate Parameter",
      type: "text",
      orientation: "horizontal",
    },
    {
      name: "rateName",
      label: "Rate Name",
      type: "text",
      orientation: "horizontal",
    },
    {
      name: "ratePriority",
      type: "text",
      label: "Rate Priority",
      orientation: "horizontal",
    },
    {
      name: "isActive",
      type: "checkbox",
      label: "Is Active",
    },
  ]

  return (
    <CreateFormPageTemplate
      heading="Rate Parameter Priority"
      hookForm={form}
      formFields={formFields}
      customDialogContent={
        <div className="mt-8 flex gap-2">
          <Button variant="button-primary">Save</Button>
          <Button variant="button-primary">List</Button>
          <Button variant="button-primary">Clear</Button>
        </div>
      }
    />
  )
}
