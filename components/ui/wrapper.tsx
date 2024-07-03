"use client"

import { Fragment, Suspense, useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Dialog, Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"

import { fetchTooltips } from "@/lib/contentful"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import SideBar from "@/components/nav/sidebar"
import { CollaborativeApp } from "@/app/CollaborativeApp"

import { Room } from "../liveblocks/room"
import BreadCrumbSection from "../nav/breadcrumb-section"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable"

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
]

export default function UIWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    fetchTooltips()
  }, [])

  return (
    <Suspense>
      <div id="main">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-zinc-900" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <SideBar />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            defaultSize={20}
            minSize={12}
            className="custom-scrollbar hidden h-1 min-h-[100dvh] overflow-y-auto sm:grid"
          >
            <SideBar />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={80} minSize={33}>
            <main className="custom-scrollbar relative h-1 min-h-[100dvh] w-full overflow-y-auto">
              <BreadCrumbSection />
              <div className="px-4 py-4">{children}</div>
            </main>
          </ResizablePanel>
        </ResizablePanelGroup>
        {/* Static sidebar for desktop */}
      </div>
    </Suspense>
  )
}
