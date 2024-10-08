import { ColumnDef } from "@tanstack/react-table"

import { DataTableRowActions } from "@/components/data-table/data-table-row-actions"
import DataTableSelectHead from "@/components/data-table/DataTableSelectHead"
import DataTableSelectRow from "@/components/data-table/DataTableSelectRow"

export const selectColumn: ColumnDef<any> = {
  id: "select",
  header: ({ table }) => <DataTableSelectHead table={table} />,
  cell: ({ row }) => <DataTableSelectRow row={row} />,
  enableSorting: false,
  enableHiding: false,
}

export const actionColumn: ColumnDef<any> = {
  accessorKey: "id",
  header: "Action",
  cell: ({ row }) => <DataTableRowActions />,
}

const createActionColumn = (props: any): ColumnDef<any> => {
  const items = props.items
  return {
    accessorKey: "id",
    header: "Actions",
    cell: ({ row }) => <DataTableRowActions row={row.original} items={items} />,
    enablePinning: true,
  }
}

export default createActionColumn
