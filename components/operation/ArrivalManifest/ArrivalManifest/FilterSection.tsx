import { CalendarDaysIcon } from "@heroicons/react/24/solid"
import { MagnifyingGlassIcon, ReloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const STATUS_LIST = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Not Arrived",
  },
  {
    id: 3,
    label: "Partial",
  },
  {
    id: 4,
    label: "Completed",
  },
]

const CARGO_TYPE_LIST = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "DESTFRT",
  },
  {
    id: 3,
    label: "TRANSIT",
  },
  {
    id: 4,
    label: "TRANSFER",
  },
]

export default function FilterSection() {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Arrival Manifest</h1>
        <div className="flex gap-4">
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            <span className="mr-1 h-4 w-4">
              <ReloadIcon />
            </span>
            Refresh
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg border-[1px] border-zinc-700 p-5">
        <div className="text-base font-semibold text-white">Filter</div>
        <div className="flex w-2/3 gap-4">
          <div className="w-2/12">
            <Input
              className="border-zinc-500"
              placeholder="Flight"
              rightIcon={
                <MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />
              }
            />
          </div>

          <div className="w-2/12">
            <Input
              className="border-zinc-500"
              placeholder="Flight ID"
              rightIcon={
                <MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />
              }
            />
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={`flex w-2/12 justify-between border-zinc-500 bg-zinc-900 pl-3 pr-3`}
              >
                <span>Flight Date</span>
                <CalendarDaysIcon className="h-4 w-4 text-zinc-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={new Date()}
                // onSelect={() => {}}
                disabled={false}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <div className="w-2/12">
            <Select>
              <SelectTrigger className="w-full border-zinc-700">
                <SelectValue placeholder="Arrival Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {STATUS_LIST.map((statusList) => (
                    <SelectItem key={statusList.id} value={statusList.label}>
                      {statusList.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="w-2/12">
            <Select>
              <SelectTrigger className="w-full border-zinc-700">
                <SelectValue placeholder="Cargo Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {CARGO_TYPE_LIST.map((statusList) => (
                    <SelectItem key={statusList.id} value={statusList.label}>
                      {statusList.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            <span className="mr-1 h-4 w-4">
              <MagnifyingGlassIcon />
            </span>
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}
