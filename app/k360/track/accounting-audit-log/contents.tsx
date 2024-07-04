"use client"

import { useEffect, useState } from "react"
import { DataTable } from "@components/track//table"
import FilterDebouncedInput from "@components/track/filter-input"
import { Download, RefreshCw, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

import { columns } from "./columns"
import { dummyData } from "./dummy-data"

type ContentProps = {
  title: string
}

const initFilter = {
  prefix: "775",
  awbNo: "",
}
const Contents = (props: ContentProps) => {
  const { title } = props
  const [data, setData] = useState<Array<any>>(dummyData)
  const [filter, setFilter] = useState<any>(initFilter)

  const resetFilter = () => {
    setFilter(initFilter)
  }

  const onSelectFilter = (key: string, val: any) => {
    setFilter((prev: any) => ({
      ...prev,
      [key]: val,
    }))
  }

  useEffect(() => {
    if (filter.master) {
      const filtered = dummyData.filter((item) =>
        item.awbNo.includes(filter.awbNo)
      )
      setData(filtered)
    } else {
      setData(dummyData)
    }
  }, [filter])

  return (
    <div className="flex-col space-y-4">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex items-end space-x-2 rounded-md border border-zinc-800 p-2">
        <div className="h-8 opacity-40 hover:opacity-60">
          <SlidersHorizontal className="cursor-pointer" />
        </div>
        <FilterDebouncedInput
          onChange={(val: any) => onSelectFilter("prefix", val)}
          title="Prefix"
          value={filter.prefix}
          className="w-32"
        />

        <FilterDebouncedInput
          onChange={(val: any) => onSelectFilter("awbNo", val)}
          title="AWB Number"
          value={filter.awbNo}
          className="w-56"
        />
        <Button
          variant="outline"
          className="h-8 w-8 bg-indigo-600 p-1 hover:bg-indigo-700"
        >
          <Search size={18} />
        </Button>
        <Button
          onClick={resetFilter}
          variant="outline"
          className="h-8 w-8 bg-indigo-600 p-1 hover:bg-indigo-700"
        >
          <RefreshCw size={18} />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 bg-indigo-600 p-1 hover:bg-indigo-700"
        >
          <Download size={18} />
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Contents
