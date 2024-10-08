import {
  MagnifyingGlassIcon,
  PlusIcon,
  ReloadIcon,
} from "@radix-ui/react-icons"

import { getDataCreateDialog } from "@/lib/operation/MotherBag/data"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/dashboard/dashtable"
import { createDialogColumn } from "@/components/operation/MotherBag/columns"

const CreateDialog = async () => {
  const data = await getDataCreateDialog()

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-button-primary text-white hover:bg-button-primary/80">
            <span className="mr-1 h-4 w-4">
              <PlusIcon />
            </span>
            Create Mother Bag
          </Button>
        </DialogTrigger>
        <DialogContent className="!max-w-7xl border-none bg-zinc-900">
          <DialogHeader>
            <DialogTitle className="flex justify-between">
              <div className="text-lg font-bold">Create Mother Bag</div>
            </DialogTitle>
            <DialogDescription className="flex w-full flex-col gap-5 pb-5 pt-5">
              <div className="flex gap-4">
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
                  placeholder="AXB"
                  rightIcon={
                    <MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />
                  }
                />
                <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
                  <span className="mr-1 h-4 w-4">
                    <MagnifyingGlassIcon />
                  </span>
                  Search
                </Button>
                <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
                  <span className="mr-1 h-4 w-4">
                    <ReloadIcon />
                  </span>
                  Refresh
                </Button>
              </div>

              <Separator className="bg-zinc-700 pl-2 pr-2" />

              <div className="text-base font-bold text-white">Booking List</div>

              <DataTable columns={createDialogColumn} data={data} />

              <Separator className="bg-zinc-700 pl-2 pr-2" />

              <div className="flex justify-between">
                <div className="flex gap-4">
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
                  <Button className="bg-button-primary text-white hover:bg-button-primary/80">
                    Create MB
                  </Button>
                </div>
                <div className="text-base font-semibold text-white">
                  Total: 0
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreateDialog
