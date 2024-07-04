import { StationWiseTonnageType } from "@/components/reports/Standard/StationWiseTonnage/columns"

export const DUMMY_DATA: StationWiseTonnageType[] = [
  {
    flight_date: "2024-05-01",
    flight_no: "FL001",
    origin: "JFK",
    destination: "LAX",
    airport_type: "Airport",
    aircraft_type: "Boeing 777",
    aircraft_capacity: "30000 kg",
    booked_ch_wt: "15000 kg",
    manifested_ch_wt: "14500 kg",
    planned_ch_wt: "14800 kg",
    flight_load_factor: "50%",
    gross_tonnage: "15000 kg",
    total_vol_cbm: "70",
    chargeable_tonnage: "14000 kg",
    actual_tail_no: "N12345",
    actual_aircraft_type: "Boeing 777",
  },
  {
    flight_date: "2024-05-02",
    flight_no: "FL002",
    origin: "ORD",
    destination: "DFW",
    airport_type: "Airport",
    aircraft_type: "Airbus A330",
    aircraft_capacity: "25000 kg",
    booked_ch_wt: "13000 kg",
    manifested_ch_wt: "12500 kg",
    planned_ch_wt: "12800 kg",
    flight_load_factor: "52%",
    gross_tonnage: "13000 kg",
    total_vol_cbm: "60",
    chargeable_tonnage: "12500 kg",
    actual_tail_no: "N67890",
    actual_aircraft_type: "Airbus A330",
  },
  {
    flight_date: "2024-05-03",
    flight_no: "FL003",
    origin: "LAX",
    destination: "JFK",
    airport_type: "Warehouse",
    aircraft_type: "Boeing 747",
    aircraft_capacity: "40000 kg",
    booked_ch_wt: "20000 kg",
    manifested_ch_wt: "19500 kg",
    planned_ch_wt: "19800 kg",
    flight_load_factor: "50%",
    gross_tonnage: "20000 kg",
    total_vol_cbm: "90",
    chargeable_tonnage: "19000 kg",
    actual_tail_no: "N54321",
    actual_aircraft_type: "Boeing 747",
  },
  {
    flight_date: "2024-05-04",
    flight_no: "FL004",
    origin: "ATL",
    destination: "MIA",
    airport_type: "Airport",
    aircraft_type: "Airbus A380",
    aircraft_capacity: "50000 kg",
    booked_ch_wt: "30000 kg",
    manifested_ch_wt: "29500 kg",
    planned_ch_wt: "29800 kg",
    flight_load_factor: "60%",
    gross_tonnage: "30000 kg",
    total_vol_cbm: "120",
    chargeable_tonnage: "29000 kg",
    actual_tail_no: "N98765",
    actual_aircraft_type: "Airbus A380",
  },
  {
    flight_date: "2024-05-05",
    flight_no: "FL005",
    origin: "SFO",
    destination: "SEA",
    airport_type: "Warehouse",
    aircraft_type: "Boeing 737",
    aircraft_capacity: "20000 kg",
    booked_ch_wt: "10000 kg",
    manifested_ch_wt: "9500 kg",
    planned_ch_wt: "9800 kg",
    flight_load_factor: "50%",
    gross_tonnage: "10000 kg",
    total_vol_cbm: "40",
    chargeable_tonnage: "9000 kg",
    actual_tail_no: "N11223",
    actual_aircraft_type: "Boeing 737",
  },
  {
    flight_date: "2024-05-06",
    flight_no: "FL006",
    origin: "DEN",
    destination: "PHX",
    airport_type: "Airport",
    aircraft_type: "Boeing 767",
    aircraft_capacity: "25000 kg",
    booked_ch_wt: "15000 kg",
    manifested_ch_wt: "14500 kg",
    planned_ch_wt: "14800 kg",
    flight_load_factor: "60%",
    gross_tonnage: "15000 kg",
    total_vol_cbm: "70",
    chargeable_tonnage: "14000 kg",
    actual_tail_no: "N44556",
    actual_aircraft_type: "Boeing 767",
  },
]

export async function getData() {
  return DUMMY_DATA
}
