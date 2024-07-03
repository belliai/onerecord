import { DoReportType } from "@/components/reports/operation/DoReport/columns"

export const DUMMY_DATA: DoReportType[] = [
  {
    do_number: "1234567890",
    date_shipped: "2024-05-01",
    shipper_name: "ABC Company",
    consignee_name: "XYZ Corporation",
    origin: "New York",
    destination: "Los Angeles",
    weight_kg: 50,
    dimensions: "100x50x30",
    service_type: "Express",
    estimated_charge: 200,
  },
  {
    do_number: "0987654321",
    date_shipped: "2024-05-05",
    shipper_name: "DEF Corp",
    consignee_name: "PQR Ltd",
    origin: "London",
    destination: "Tokyo",
    weight_kg: 30,
    dimensions: "80x40x20",
    service_type: "Economy",
    estimated_charge: 150,
  },
  {
    do_number: "1357924680",
    date_shipped: "2024-05-10",
    shipper_name: "GHI Ltd",
    consignee_name: "MNO Inc",
    origin: "Sydney",
    destination: "Shanghai",
    weight_kg: 70,
    dimensions: "120x60x40",
    service_type: "Priority",
    estimated_charge: 300,
  },
  {
    do_number: "2468013579",
    date_shipped: "2024-05-15",
    shipper_name: "JKL Corporation",
    consignee_name: "STU Enterprises",
    origin: "Paris",
    destination: "Dubai",
    weight_kg: 45,
    dimensions: "90x55x35",
    service_type: "Standard",
    estimated_charge: 180,
  },
  {
    do_number: "9876543210",
    date_shipped: "2024-05-20",
    shipper_name: "VWX Ltd",
    consignee_name: "YZ Corp",
    origin: "Berlin",
    destination: "Beijing",
    weight_kg: 60,
    dimensions: "110x45x25",
    service_type: "Priority",
    estimated_charge: 250,
  },
  {
    do_number: "0123456789",
    date_shipped: "2024-05-25",
    shipper_name: "123 Company",
    consignee_name: "456 Corporation",
    origin: "Moscow",
    destination: "Cairo",
    weight_kg: 55,
    dimensions: "105x65x50",
    service_type: "Express",
    estimated_charge: 280,
  },
  {
    do_number: "5678901234",
    date_shipped: "2024-05-30",
    shipper_name: "789 Inc",
    consignee_name: "012 Enterprises",
    origin: "Rio de Janeiro",
    destination: "Mexico City",
    weight_kg: 40,
    dimensions: "85x35x15",
    service_type: "Economy",
    estimated_charge: 120,
  },
  {
    do_number: "2345678901",
    date_shipped: "2024-06-05",
    shipper_name: "345 Corporation",
    consignee_name: "678 Ltd",
    origin: "Toronto",
    destination: "Vancouver",
    weight_kg: 65,
    dimensions: "95x75x60",
    service_type: "Standard",
    estimated_charge: 220,
  },
  {
    do_number: "9012345678",
    date_shipped: "2024-06-10",
    shipper_name: "901 Enterprises",
    consignee_name: "234 Ltd",
    origin: "Singapore",
    destination: "Hong Kong",
    weight_kg: 75,
    dimensions: "115x70x45",
    service_type: "Express",
    estimated_charge: 320,
  },
  {
    do_number: "7890123456",
    date_shipped: "2024-06-15",
    shipper_name: "567 Corp",
    consignee_name: "890 Inc",
    origin: "Seoul",
    destination: "Tokyo",
    weight_kg: 35,
    dimensions: "75x40x20",
    service_type: "Economy",
    estimated_charge: 140,
  },
]

export async function getData() {
  return DUMMY_DATA
}
