"use client";

import { DataTable } from "@/components/data-table/data-table";
import FormTextField, {
  FormTextFieldProps,
} from "@/components/form/FormTextField";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Download, Plus, Search } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface MastersPageTemplateProps {
  heading: string;
  buttonText?: string;
  hookForm: UseFormReturn<any>;
  filterHookForm: UseFormReturn<any>;
  formFields: Omit<FormTextFieldProps, "form">[];
  filterFormFields: Omit<FormTextFieldProps, "form">[];
  columns: ColumnDef<any>[];
  data: any[];
}

export default function MastersPageTemplate({
  heading,
  buttonText,
  hookForm,
  filterHookForm,
  formFields,
  filterFormFields,
  columns,
  data,
}: MastersPageTemplateProps) {
  return (
    <PageContainer className="gap-6">
      <PageHeader
        title={heading}
        actions={
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-button-primary hover:bg-button-primary/80 text-white">
                <Plus size={16} className="mr-2" />
                {buttonText}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Create Cart</DialogTitle>
              <Form {...hookForm}>
                <div
                  className={cn(
                    "grid grid-cols-2 gap-4 gap-x-6 max-h-[75dvh] overflow-auto pr-2 py-2",
                    {
                      "grid-cols-1": formFields.length < 8,
                    }
                  )}
                >
                  {formFields.map((field) => {
                    return (
                      <FormTextField
                        key={field.name}
                        {...field}
                        form={hookForm}
                        endIcon={null}
                      />
                    );
                  })}
                </div>
              </Form>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className="bg-button-primary hover:bg-button-primary/80 text-white">
                    Create
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />
      <div className="p-4 border rounded-md">
        <Form {...hookForm}>
          <form className="flex gap-4 items-end">
            {filterFormFields.map((field) => {
              return (
                <FormTextField
                  key={field.name}
                  {...field}
                  form={filterHookForm}
                />
              );
            })}
            <div className="flex gap-2">
              <Button
                size="icon"
                type="button"
                className="bg-button-primary  text-white hover:bg-button-primary/80"
              >
                <Search size={16} />
              </Button>
              <Button
                size="icon"
                type="button"
                className="bg-button-secondary  text-white hover:bg-button-secondary/80"
              >
                <Download size={16} />
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <DataTable columns={columns} data={data} hideToolbar />
    </PageContainer>
  );
}
