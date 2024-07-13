import {
  BanknotesIcon,
  BoltIcon,
  CalendarIcon,
  ChartBarIcon,
  CircleStackIcon,
  ClipboardIcon,
  CurrencyDollarIcon,
  CursorArrowRippleIcon,
  GlobeAmericasIcon,
  HandThumbUpIcon,
  HomeIcon,
  PresentationChartLineIcon,
  ReceiptPercentIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline"
import { CubeIcon, DashboardIcon, PaperPlaneIcon, ReaderIcon } from "@radix-ui/react-icons"
import { PlaneIcon } from "lucide-react"

import { TSidebarItem } from "@/components/nav/SidebarItem"

export const operationsNavigation: TSidebarItem[] = [
  {
    name: "Belli",
    href: "/belli",
    current: false,
    children: [
      {
        name: "Airway Bill Dashboard",
        href: "/belli/airway-bill-dashboard",
        icon: HomeIcon,
        current: false,
        isCanCreate: false,
      },
      {
        name: "Flight Schedule Editor",
        href: "/belli/flight-schedule-editor",
        icon: PaperPlaneIcon,
        current: false,
        isCanCreate: true,
      },
      {
        name: "Flights Dashboard",
        href: "/belli/flights-dashboard",
        icon: DashboardIcon,
        current: false,
        isCanCreate: false,
      },
      {
        name: "Data Sync",
        href: "/belli/data-sync",
        icon: CubeIcon,
        current: false,
        isCanCreate: false,
      },
      {
        name: "Load Planner",
        href: "/belli/load-planner",
        icon: ReaderIcon,
        current: false,
        isCanCreate: false,
      },
    ],
  },
]

export const getIconByHref = (href: string): React.ElementType | null => {
  for (const section of operationsNavigation) {
    if (section.children) {
      const foundItem = section.children.find((item) => item.href === href)
      if (foundItem) {
        return foundItem.icon
      }
    }
  }
  return null // Return null if href is not found
}
