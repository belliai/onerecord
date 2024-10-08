import { DataTable } from "@components/data-table/data-table"

import { getData } from "@/lib/operation/PlanFlight/FlightPlanning/data"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { uldColumn } from "@/components/operation/PlanFlight/FlightPlanning/columns"

const BULK_ACTION_LIST = [
  {
    id: "save",
    label: "Save ULD",
  },
  {
    id: "finalize",
    label: "Finalize",
  },
  {
    id: "delete",
    label: "Delete ULD",
  },
  {
    id: "reopen",
    label: "Reopen",
  },
  {
    id: "print_uld",
    label: "Print ULD Plan",
  },
  {
    id: "reassign",
    label: "Reassign",
  },
  {
    id: "print_wt_st",
    label: "Print Wt St",
  },
  {
    id: "print_load",
    label: "Print Load Plan",
  },
]

export default async function UldLoadSection() {
  const data = await getData("uld")
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-lg border-[1px] border-zinc-700 p-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit bg-zinc-800 text-white hover:bg-zinc-700">
            Bulk Action
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {BULK_ACTION_LIST.map((bulk) => (
            <DropdownMenuItem key={bulk.id}>{bulk.label}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DataTable columns={uldColumn} data={data} hideToolbar />
    </div>
  )
}
