import { AwbMovementType } from "@/components/reports/Standard/AwbMovement/columns"

export const DUMMY_DATA: AwbMovementType[] = [
  {
    awb_prefix: "123",
    awb_number: "45678901",
    from_date: "2024-05-14",
    to_date: "2024-05-14",
    flight_prefix: "AA",
    flight_id: "1234",
    origin: "LAX",
    destination: "JFK",
    country: "US",
    region: "North America",
    agent_code: "A123",
    status: "In Transit",
  },
  {
    awb_prefix: "124",
    awb_number: "45678902",
    from_date: "2024-05-14",
    to_date: "2024-05-14",
    flight_prefix: "DL",
    flight_id: "5678",
    origin: "JFK",
    destination: "LAX",
    country: "US",
    region: "North America",
    agent_code: "B234",
    status: "Delivered",
  },
  {
    awb_prefix: "125",
    awb_number: "45678903",
    from_date: "2024-05-14",
    to_date: "2024-05-14",
    flight_prefix: "UA",
    flight_id: "9101",
    origin: "ORD",
    destination: "DFW",
    country: "US",
    region: "North America",
    agent_code: "C345",
    status: "Pending",
  },
  {
    awb_prefix: "126",
    awb_number: "45678904",
    from_date: "2024-05-14",
    to_date: "2024-05-14",
    flight_prefix: "AA",
    flight_id: "1213",
    origin: "ATL",
    destination: "MIA",
    country: "US",
    region: "North America",
    agent_code: "D456",
    status: "Cancelled",
  },
  {
    awb_prefix: "127",
    awb_number: "45678905",
    from_date: "2024-05-14",
    to_date: "2024-05-14",
    flight_prefix: "DL",
    flight_id: "1415",
    origin: "SEA",
    destination: "SFO",
    country: "US",
    region: "North America",
    agent_code: "E567",
    status: "In Transit",
  },
]

export async function getData() {
  return DUMMY_DATA
}
