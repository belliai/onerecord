import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export default function RightSection() {
  return (
    <Accordion type="multiple" defaultValue={["scheduled"]} className="w-full">
      <AccordionItem value="scheduled" className="rounded-lg border-[1px] bg-transparent border-zinc-700 text-zinc-400 px-3 mb-4">
        <AccordionTrigger className="text-white hover:no-underline">Scheduled</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Route No</div>
            </div>
            <Input className="border-zinc-500" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Tail No</div>
            </div>
            <Input className="border-zinc-500" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Dept</div>
            </div>
            <Input className="border-zinc-500" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Arrival</div>
            </div>
            <Input className="border-zinc-500" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Capacity</div>
            </div>
            <Input className="border-zinc-500" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">IGM No</div>
            </div>
            <Input className="border-zinc-500" />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
