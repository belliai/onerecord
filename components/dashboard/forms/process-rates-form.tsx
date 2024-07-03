"use client"

import React from "react"
import { Order } from "@/schemas/order/order"
import { ListIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"

import { useCurrencies } from "@/lib/hooks/currencies"
import { Card } from "@/components/ui/card"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ProcessRatesForm = React.forwardRef<HTMLDivElement, {}>((_, ref) => {
  const form = useFormContext()
  const { data: currencies } = useCurrencies()

  return (
    <Card className="p-4" ref={ref}>
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        <FormField
          control={form.control}
          name="volume_kg"
          render={({ field }) => (
            <FormItem>
              <FormLabel info="hello this is info here">Vol (KG)</FormLabel>
              <FormControl>
                <Input {...field} className="border-2 border-foreground/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currency_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel info="hello this is info here">Currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-2 border-foreground/30">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {currencies &&
                    currencies.map((currency: any) => (
                      <SelectItem value={currency.ID} key={currency.ID}>
                        {currency.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel info="hello this is info here">Rate</FormLabel>
              <FormControl>
                <Input {...field} className="border-2 border-foreground/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="s_rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel info="hello this is info here">S Rate</FormLabel>
              <FormControl>
                <Input {...field} className="border-2 border-foreground/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="s_freight"
          render={({ field }) => (
            <FormItem>
              <FormLabel info="hello this is info here">S Freight</FormLabel>
              <FormControl>
                <Input {...field} className="border-2 border-foreground/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="spot_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel info="hello this is info here">Spot ID</FormLabel>
              <FormControl>
                <Input {...field} className="border-2 border-foreground/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gs_weight_kg"
          render={({ field }) => (
            <FormItem>
              <FormLabel info="Gross Weight in Kg">GS Wt.KG</FormLabel>
              <FormControl>
                <Input {...field} className="border-2 border-foreground/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ch_weight_kg"
          render={({ field }) => (
            <FormItem>
              <FormLabel info="hello this is info here">CH Wt.KG</FormLabel>
              <FormControl>
                <Input {...field} className="border-2 border-foreground/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount_due"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel info="hellow world!, this is info">
                Amount Due
              </FormLabel>
              <FormControl>
                <div className="relative h-fit">
                  <Input {...field} className="border-2 border-foreground/30" />
                  <div className="absolute right-0 top-0 inline-flex h-full items-center justify-center px-3">
                    <ListIcon className="h-3 w-3" />
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mode"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel info="Mode">Mode</FormLabel>
              <FormControl>
                <Input {...field} className="border-2 border-foreground/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="total"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel info="Total">Total</FormLabel>
              <FormControl>
                <Input {...field} className="border-2 border-foreground/30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Card>
  )
})

ProcessRatesForm.displayName = "ProcessRatesForm"

export default ProcessRatesForm
