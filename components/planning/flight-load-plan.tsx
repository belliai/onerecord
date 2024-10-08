"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function FlightLoad() {
  const [date, setDate] = React.useState(new Date())

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center">
        <Label htmlFor="flight-number" className="mr-2">
          Flight
        </Label>
        <Input id="flight-number" className="mr-4 w-20" placeholder="" />
        <Input id="flight-number" className="mr-4 w-20" placeholder="" />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[200px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "dd/MM/yyyy") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(day) => setDate(day as Date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button variant="outline" className="ml-4">
          List
        </Button>
        <Button variant="outline" className="ml-4">
          Clear
        </Button>
        <span className="ml-4 text-green-600">Flt Unlocked</span>
      </div>
      <div className="flex">
        <div className="w-1/3">
          <div className="border p-2">
            <div className="mb-2">Lower Deck</div>
            <div className="h-64 bg-green-100 text-center">BULK</div>
          </div>
        </div>
        <div className="w-2/3 pl-4">
          <div className="border p-2">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-red-600">FBL is not received.</span>
              <span>Dep.Airport: KUL</span>
            </div>
            <div className="mb-4 h-48 border p-2">Flight Load Plan</div>
            <div className="mb-4">
              <Button variant="outline" className="mr-2">
                Save
              </Button>
              <Button variant="outline" className="mr-2">
                Print Load Plan
              </Button>
              <Button variant="outline" className="mr-2">
                Export Excel
              </Button>
              <Button variant="outline" className="mr-2">
                Finalize
              </Button>
              <Button variant="outline">Send Load Plan</Button>
            </div>
            <div className="h-48 border p-2">Assigned AWBs</div>
            <div className="mt-4 border-t pt-2">
              <span>Total Awbs: 0</span>
              <span className="ml-4">Total Pieces: 0</span>
              <span className="ml-4">Total Weight: 0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
