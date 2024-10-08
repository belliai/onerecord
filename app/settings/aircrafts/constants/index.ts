import { AircraftFormValues } from "@/schemas/aircraft/aircraft"
import { TailNumberFormValues } from "@/schemas/aircraft/tail-numbers"

export const aircraftFormDefaultValues: AircraftFormValues = {
  aft_h: "",
  aft_w: "",
  aircraft_type_id: "",
  body_type_id: "",
  bulk: "",
  bulk_h: "",
  bulk_w: "",
  cargo_capacity: "",
  fwd: "",
  fwd_h: "",
  fwd_w: "",
  count: 0,
  fwt: "",
  gl_code_id: "",
  landing_weight: "",
  max_bulk_capacity_volume: "",
  max_bulk_capacity_weight: "",
  max_dimension_breadth: "",
  max_dimension_height: "",
  manufacturer_id: "",
  max_dimension_length: "",
  max_volume: "",
  max_zero_fuel_weight: "",
  mtow: "",
  passenger_capacity: "",
  restricted_weight_piece: "",
  uld_position: "",
  version_id: "",
}

export const tailNumberFormDefaultValues: TailNumberFormValues = {
  aircraft_id: "",
  tail_number: "",
  status_id: "a2a781e6-c892-46e4-ab3e-fb344727cfd8",
}
