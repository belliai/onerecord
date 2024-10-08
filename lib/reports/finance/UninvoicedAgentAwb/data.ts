import { UninvoicedAgentAwbType } from "@/components/reports/finance/UninvoicedAgentAwb/columns"

export const DUMMY_DATA: UninvoicedAgentAwbType[] = [
  {
    org: "JFK",
    dest: "LAX",
    agent_code: "AG001",
    agent_name: "Agent One",
    airport_type: "Airport",
    awb_number: "AWB12345678",
    paymode: "Credit",
    execution_date: "2023-05-10",
    product_type: "General Cargo",
    comm_code: "GC123",
    comm_desc: "General Cargo",
    shc_code: "GEN",
    first_flight_date: "2023-05-11",
    first_flight: "FL123",
    flight_details: "Direct",
    aircraft_type: "Boeing 777",
    freighter_tail_no: "FTN123",
    pieces: "10",
    gross_wt: "1000 kg",
    charged_wt: "950 kg",
    frt_iata: "5000",
    frt_mkt: "5500",
    oc_due_car: "200",
    oc_due_agent: "150",
    iata_cgst: "100",
    iata_sgst: "100",
    iata_utgst: "0",
    iata_igst: "50",
    gst_tax: "250",
    mkt_cgst: "110",
    mkt_sgst: "110",
    mkt_utgst: "0",
    mkt_igst: "60",
    mkt_gst: "280",
    total: "5750",
    mkt_total: "6100",
    status: "Executed",
  },
  {
    org: "ORD",
    dest: "DFW",
    agent_code: "AG002",
    agent_name: "Agent Two",
    airport_type: "Warehouse",
    awb_number: "AWB87654321",
    paymode: "Cash",
    execution_date: "2023-05-12",
    product_type: "Perishables",
    comm_code: "PER123",
    comm_desc: "Perishables",
    shc_code: "PER",
    first_flight_date: "2023-05-13",
    first_flight: "FL456",
    flight_details: "Direct",
    aircraft_type: "Airbus A330",
    freighter_tail_no: "FTN456",
    pieces: "15",
    gross_wt: "1500 kg",
    charged_wt: "1450 kg",
    frt_iata: "7000",
    frt_mkt: "7500",
    oc_due_car: "250",
    oc_due_agent: "200",
    iata_cgst: "150",
    iata_sgst: "150",
    iata_utgst: "0",
    iata_igst: "75",
    gst_tax: "375",
    mkt_cgst: "160",
    mkt_sgst: "160",
    mkt_utgst: "0",
    mkt_igst: "80",
    mkt_gst: "400",
    total: "7625",
    mkt_total: "8000",
    status: "Accepted",
  },
  {
    org: "LAX",
    dest: "JFK",
    agent_code: "AG003",
    agent_name: "Agent Three",
    airport_type: "Airport",
    awb_number: "AWB12349876",
    paymode: "Bank Transfer",
    execution_date: "2023-05-14",
    product_type: "Dangerous Goods",
    comm_code: "DG123",
    comm_desc: "Dangerous Goods",
    shc_code: "DGR",
    first_flight_date: "2023-05-15",
    first_flight: "FL789",
    flight_details: "Direct",
    aircraft_type: "Boeing 747",
    freighter_tail_no: "FTN789",
    pieces: "8",
    gross_wt: "800 kg",
    charged_wt: "750 kg",
    frt_iata: "4000",
    frt_mkt: "4500",
    oc_due_car: "150",
    oc_due_agent: "100",
    iata_cgst: "80",
    iata_sgst: "80",
    iata_utgst: "0",
    iata_igst: "40",
    gst_tax: "200",
    mkt_cgst: "90",
    mkt_sgst: "90",
    mkt_utgst: "0",
    mkt_igst: "45",
    mkt_gst: "225",
    total: "4450",
    mkt_total: "4775",
    status: "Void",
  },
]

export async function getData() {
  return DUMMY_DATA
}
