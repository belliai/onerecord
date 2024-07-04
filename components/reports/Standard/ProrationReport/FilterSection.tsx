import { CalendarDaysIcon } from "@heroicons/react/24/solid"
import {
  DownloadIcon,
  MagnifyingGlassIcon,
  ReloadIcon,
} from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
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

const AIRPORT_LIST = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "CGK",
  },
  {
    id: 3,
    label: "SIN",
  },
]

const FLIGHT_TYPE = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Domestic",
  },
  {
    id: 3,
    label: "International",
  },
]

const CARRIER_LIST = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "AK",
  },
  {
    id: 3,
    label: "I5",
  },
  {
    id: 4,
    label: "8K",
  },
  {
    id: 5,
    label: "DJ",
  },
  {
    id: 6,
    label: "6P",
  },
  {
    id: 7,
    label: "Z2",
  },
  {
    id: 8,
    label: "XT",
  },
  {
    id: 9,
    label: "D7",
  },
  {
    id: 10,
    label: "FD",
  },
  {
    id: 11,
    label: "XJ",
  },
  {
    id: 12,
    label: "QZ",
  },
]

export default function FilterSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Proration Report</h1>
        <div className="flex gap-4">
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            <span className="mr-1 h-4 w-4">
              <ReloadIcon />
            </span>
            Refresh
          </Button>
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            <span className="mr-1 h-4 w-4">
              <DownloadIcon />
            </span>
            Export
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg border-[1px] border-zinc-700 p-5">
        <div className="text-base font-semibold text-white">Filter</div>
        <div className="flex w-full gap-4">
          <div className="flex w-1/6 flex-col gap-2">
            <div className="flex items-center gap-1 text-white">
              <div className="text-sm">From Date</div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`flex w-full justify-between border-zinc-700 bg-zinc-900 pl-3 pr-3`}
                >
                  <span>From Date</span>
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
          </div>

          <div className="flex w-1/6 flex-col gap-2">
            <div className="flex items-center gap-1 text-white">
              <div className="text-sm">To Date</div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`flex w-full justify-between border-zinc-700 bg-zinc-900 pl-3 pr-3`}
                >
                  <span>To Date</span>
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
          </div>

          <div className="flex w-1/6 flex-col gap-2">
            <div className="flex items-center gap-1 text-white">
              <div className="text-sm">Flight</div>
            </div>
            <Select>
              <SelectTrigger className="w-full border-zinc-700">
                <SelectValue placeholder="Flight" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {FLIGHT_TYPE.map((flightType) => (
                    <SelectItem key={flightType.id} value={flightType.label}>
                      {flightType.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-1/6 flex-col gap-2">
            <div className="flex items-center gap-1 text-white">
              <div className="text-sm">Station</div>
            </div>
            <Select>
              <SelectTrigger className="w-full border-zinc-700">
                <SelectValue placeholder="Origin" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {AIRPORT_LIST.map((airportList) => (
                    <SelectItem key={airportList.id} value={airportList.label}>
                      {airportList.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-1/6 flex-col gap-2">
            <div className="flex items-center gap-1 text-white">
              <div className="text-sm">Carrier</div>
            </div>
            <Select>
              <SelectTrigger className="w-full border-zinc-700">
                <SelectValue placeholder="Carrier" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {CARRIER_LIST.map((carrierList) => (
                    <SelectItem key={carrierList.id} value={carrierList.label}>
                      {carrierList.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-5 flex w-1/6 items-center space-x-2">
            <Checkbox id="include-awb" />
            <label
              htmlFor="include-awb"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Including Booked AWB
            </label>
          </div>
        </div>

        <Button className="w-fit bg-zinc-800 text-white hover:bg-zinc-700">
          <span className="mr-1 h-4 w-4">
            <MagnifyingGlassIcon />
          </span>
          Search
        </Button>
      </div>
    </div>
  )
}
