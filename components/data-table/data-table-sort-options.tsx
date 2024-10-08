"use client"

import React, { ReactNode } from "react"
import { PopoverTrigger } from "@radix-ui/react-popover"
import { ColumnDef, Table } from "@tanstack/react-table"
import { ArrowDownAZIcon, ArrowUpAZIcon } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command"
import { Popover, PopoverContent } from "../ui/popover"
import {
  TableHeaderWithTooltip,
  TableHeaderWithTooltipProps,
} from "../ui/table"

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
  children: ReactNode
}

function isTableHeaderWithTooltip(
  element: any
): element is React.ReactElement<TableHeaderWithTooltipProps> {
  return (
    React.isValidElement(element) &&
    Object.hasOwn(element.props as object, "header")
  )
}
export function DataTableSortOptions<TData>({
  table,
  ...props
}: DataTableViewOptionsProps<TData>) {
  const sortableColumns = table
    .getAllColumns()
    .filter(
      (col) => Boolean(col.accessorFn) && col.getIsVisible() && col.getCanSort()
    )

  return (
    <Popover>
      <PopoverTrigger asChild>{props.children}</PopoverTrigger>
      <PopoverContent align="end" className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search for a column" />

          <CommandList className="custom-scrollbar">
            <CommandEmpty>No column found.</CommandEmpty>

            <CommandGroup>
              {sortableColumns.map((column) => {
                const sortDir = column.getIsSorted()
                const headerLabel =
                  typeof column?.columnDef?.header === "function"
                    ? (column?.columnDef?.header as () => string)()
                    : String(column.columnDef.header)
                return (
                  <CommandItem
                    key={column.id}
                    value={headerLabel}
                    onSelect={() => column.toggleSorting(undefined, true)}
                    className="flex flex-row items-center justify-between"
                  >
                    {headerLabel}
                    {sortDir === "asc" && (
                      <ArrowUpAZIcon className="size-4 text-muted-foreground" />
                    )}
                    {sortDir === "desc" && (
                      <ArrowDownAZIcon className="size-4 text-muted-foreground" />
                    )}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
