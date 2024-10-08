"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "userCode",
    header: "User Code",
  },
  {
    accessorKey: "updatedBy",
    header: "Updated By",
  },
  {
    accessorKey: "fieldName",
    header: "Field Name",
  },
  {
    accessorKey: "oldValue",
    header: "Old Value",
  },
  {
    accessorKey: "newValue",
    header: "New Value",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    size: 300,
  },
]
