"use client"

import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TFormTextField } from "@/components/form/FormTextField"
import CreateFormPageTemplate from "@/components/page-template/CreateFormPageTemplate"
import FilterActions from "@/components/page-template/FilterActions"

export default function AgentMgpPage() {
  const formFields: TFormTextField[] = [
    {
      name: "agentCode",
      label: "Agent Code",
      orientation: "horizontal",
      type: "text",
    },
  ]

  const form = useForm()

  return (
    <CreateFormPageTemplate
      heading="Agent MGP Contract"
      className="max-h-none"
      formFields={formFields}
      hookForm={form}
      customDialogContent={
        <div className="flex flex-col gap-4">
          <div className="mt-8 flex max-w-96">
            <FilterActions />
          </div>
          <Separator />
          <div className="flex gap-2">
            <Button variant="button-primary">Save</Button>
            <Button variant="button-primary">Add</Button>
            <Button variant="button-primary">Clear</Button>
          </div>
        </div>
      }
    />
  )
}
