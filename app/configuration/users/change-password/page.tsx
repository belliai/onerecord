"use client"

import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TFormTextField } from "@/components/form/FormTextField"
import PageContainer from "@/components/layout/PageContainer"
import PageHeader from "@/components/layout/PageHeader"
import CreateFormTemplate from "@/app/k360/organize/masters/components/CreateFormTemplate"

export default function ChangePassword() {
  const formFields: TFormTextField[] = [
    {
      name: "userName",
      label: "User Name",
      required: true,
      type: "text",
    },
    {
      name: "oldPassword",
      label: "Old Password",
      required: true,
      type: "password",
    },
    {
      name: "newPassword",
      label: "New Password",
      required: true,
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      required: true,
      type: "password",
    },
  ]

  const changePasswordForm = useForm()

  return (
    <PageContainer className="flex flex-col gap-4">
      <PageHeader title="Change Password" />
      <Separator />
      <CreateFormTemplate
        hookForm={changePasswordForm}
        formFields={formFields}
        customDialogContent={
          <Button className="mt-4 bg-button-primary text-white hover:bg-button-primary/80">
            Change Password
          </Button>
        }
      />
    </PageContainer>
  )
}
