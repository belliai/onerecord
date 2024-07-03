import { DataTable } from "@components/data-table/data-table"

import { getData } from "@/lib/reports/finance/UninvoicedAgentAwb/data"
import { columns } from "@/components/reports/finance/UninvoicedAgentAwb/columns"
import FilterSection from "@/components/reports/finance/UninvoicedAgentAwb/FilterSection"
import SummarySection from "@/components/reports/finance/UninvoicedAgentAwb/SummarySection"

export default async function UninvoicedAgentAwb() {
  const data = await getData()

  return (
    <div className="flex flex-col gap-5">
      <FilterSection />
      <SummarySection />
      <div className="rounded-lg border-[1px] border-zinc-700 p-5">
        <DataTable columns={columns} data={data} hideToolbar />
      </div>
    </div>
  )
}
