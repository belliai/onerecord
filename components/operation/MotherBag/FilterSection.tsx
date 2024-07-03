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

import CreateDialog from "./CreateDialog"

export default function FilterSection() {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Mother Bag List</h1>
        <div className="flex gap-4">
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
            <span className="mr-1 h-4 w-4">
              <ReloadIcon />
            </span>
            Refresh
          </Button>
          <CreateDialog />
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg border-[1px] border-zinc-700 p-5">
        <div className="text-base font-semibold text-white">Filter</div>
        <div className="flex gap-4">
          <Input
            className="border-zinc-500"
            placeholder="MB No From"
            rightIcon={
              <MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />
            }
          />
          <Input
            className="border-zinc-500"
            placeholder="MB No To"
            rightIcon={
              <MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />
            }
          />
          <Input
            className="border-zinc-500"
            placeholder="Origin"
            rightIcon={
              <MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />
            }
          />
          <Input
            className="border-zinc-500"
            placeholder="Destination"
            rightIcon={
              <MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />
            }
          />
          <Input
            className="border-zinc-500"
            placeholder="MWB"
            rightIcon={
              <MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />
            }
          />
        </div>

        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={`flex w-1/4 justify-between border-zinc-500 bg-zinc-900 pl-3 pr-3`}
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

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={`flex w-1/4 justify-between border-zinc-500 bg-zinc-900 pl-3 pr-3`}
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
