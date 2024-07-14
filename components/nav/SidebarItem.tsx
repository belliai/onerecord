import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"

export type TSidebarItem = {
  name: string
  icon?: any
  href: string
  current?: boolean
  children?: TSidebarItem[]
  isCanCreate?: boolean
}

interface SidebarItemProps {
  item: TSidebarItem
  active: boolean
  disabled?: boolean
}

export default function SidebarItem({
  item,
  active,
  disabled,
}: SidebarItemProps) {
  function getBaseItemClassName(currentActive: boolean) {
    const className = cn(
      "group flex [&_svg]:text-[#949496] [&[data-state=open]>div]:text-white text-[#E2E3E5] justify-start text-[13px] hover:bg-zinc-800 hover:text-white items-center gap-x-1 !h-7 rounded-sm px-2 py-0 font-medium leading-normal hover:no-underline hover:bg-zinc-800",
      currentActive
        ? "text-white bg-zinc-900 [&_svg]:text-white"
        : ""
    )

    return className
  }

  const pathname = usePathname()

  return (
    <AccordionItem value={item.name} className="border-none">
      {item.children ? (
        <AccordionTrigger
          className={cn(
            getBaseItemClassName(!!item.current || active),
            "[&[data-state=open]>svg]:rotate-90"
          )}
          customarrow={
            <ChevronRight className="h-4 w-4 shrink-0 text-[#949496] transition-transform duration-200" />
          }
        >
          <div className="flex items-center gap-x-[7px]">
            {item.icon && (
              <span className="flex items-center justify-center rounded-sm p-0.5 transition-colors duration-200">
                <item.icon
                  className="h-[18px] w-[18px] shrink-0"
                  aria-hidden="true"
                />
              </span>
            )}
            {item.name}
          </div>
        </AccordionTrigger>
      ) : (
        <Link
          href={item.href}
          className={cn(
            getBaseItemClassName(!!item.current || active),
            disabled && "pointer-events-none"
          )}
        >
          <div className="flex items-center gap-x-[7px]">
            {item.icon && (
              <span className="flex items-center justify-center rounded-sm p-0.5 transition-colors duration-200">
                <item.icon
                  className="h-[18px] w-[18px] shrink-0"
                  aria-hidden="true"
                />
              </span>
            )}
            {item.name}
          </div>
        </Link>
      )}
      <AccordionContent className="relative pb-0">
        {item?.children?.map((childMenu) => {
          if (childMenu?.children) {
            return (
              <Accordion
                type="single"
                collapsible
                key={childMenu.name}
                className="relative"
              >
                <AccordionItem value={childMenu.name} className="border-none">
                  <AccordionTrigger
                    className={cn(
                      getBaseItemClassName(!!childMenu.current || active),
                      "pl-6",
                      "[&[data-state=open]>svg]:rotate-90"
                    )}
                    customarrow={
                      <ChevronRight className="h-4 w-4 shrink-0 text-white/60 transition-transform duration-200" />
                    }
                  >
                    <div className="flex items-center gap-x-2.5">
                      {childMenu.icon && (
                        <childMenu.icon
                          className="h-4 w-4 shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      {childMenu.name}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="relative pb-0 pl-[46px]">
                    <span className="absolute left-8 top-0 my-0.5 h-full w-[1px] bg-border" />
                    {childMenu.children.map((submenu) => (
                      <Link
                        key={submenu.name}
                        href={submenu.href}
                        className={cn(getBaseItemClassName(!!submenu.current))}
                      >
                        {submenu?.children ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild className="w-full">
                              <div className="flex items-center justify-between gap-x-3 text-[13px]">
                                {submenu.name}
                                <ChevronRight
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="right" align="start">
                              {submenu.children.map((subsubmenu) => {
                                if (subsubmenu?.children) {
                                  return (
                                    <DropdownMenuSub key={subsubmenu.name}>
                                      <DropdownMenuSubTrigger>
                                        <span>{subsubmenu.name}</span>
                                      </DropdownMenuSubTrigger>
                                      <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                          {subsubmenu.children.map(
                                            (subsubsubmenu) => {
                                              return (
                                                <DropdownMenuItem
                                                  key={subsubsubmenu.name}
                                                  className="h-7 cursor-pointer py-1 text-[13px] leading-normal"
                                                  asChild
                                                >
                                                  <Link
                                                    href={subsubsubmenu.href}
                                                  >
                                                    {subsubsubmenu.name}
                                                  </Link>
                                                </DropdownMenuItem>
                                              )
                                            }
                                          )}
                                        </DropdownMenuSubContent>
                                      </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                  )
                                }

                                return (
                                  <DropdownMenuItem
                                    key={subsubmenu.name}
                                    className="h-7 cursor-pointer py-1 text-[13px] leading-normal"
                                    asChild
                                  >
                                    <Link href={subsubmenu.href}>
                                      {subsubmenu.name}
                                    </Link>
                                  </DropdownMenuItem>
                                )
                              })}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <div className="flex items-center gap-x-3">
                            {submenu.name}
                          </div>
                        )}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          }

          return (
            <Link
              key={childMenu.name}
              href={childMenu.href}
              className={cn(
                getBaseItemClassName(childMenu.href === pathname),
                "gap-2.5 pl-6 my-1"
              )}
            >
              {childMenu.icon && (
                <childMenu.icon
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
              )}
              <div className="flex items-center gap-x-3">{childMenu.name}</div>
            </Link>
          )
        })}
      </AccordionContent>
    </AccordionItem>
  )
}
