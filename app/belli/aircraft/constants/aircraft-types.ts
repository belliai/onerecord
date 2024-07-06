import { AircraftFormValues } from "@/schemas/aircraft/aircraft"

type AircraftType = {
  manufacturer: string
  types: {
    type: string
    versions: { version: string; details: Partial<AircraftFormValues> }[]
  }[]
}[]

const DEFAULT_BODY_TYPE_ID = "1161055d-0f85-48f4-844e-0c29add31ba8"
const DEFAULT_WEIGHT_UNIT_ID = "a708c7ab-c41a-45c3-a3f2-9ae6cb21f47c"
const DEFAULT_VOLUME_UNIT_ID = "aefd86d6-6fe7-4fcf-8a42-5ef860542401"
const DEFAULT_DIMENSION_UNIT_ID = "767c9495-c8f8-48fe-82cb-28d7a42a016d"

export const aircraftTypes: AircraftType = [
  {
    manufacturer: "Boeing",
    types: [
      {
        type: "737",
        versions: [
          {
            version: "700",
            details: {
              mtow: "70000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "800",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "900",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "MAX 8",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "MAX 9",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
        ],
      },
      {
        type: "747",
        versions: [
          {
            version: "400",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "8",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
        ],
      },
      {
        type: "757",
        versions: [
          {
            version: "200",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "300",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
        ],
      },
      {
        type: "767",
        versions: [
          {
            version: "300ER",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "400ER",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
        ],
      },
      {
        type: "777",
        versions: [
          {
            version: "200",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "200ER",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "300ER",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "777X",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
        ],
      },
      {
        type: "787",
        versions: [
          {
            version: "8",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "9",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "10",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
        ],
      },
    ],
  },
  {
    manufacturer: "Airbus",
    types: [
      {
        type: "A220",
        versions: [
          {
            version: "100",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "300",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
        ],
      },
      {
        type: "A320",
        versions: [
          {
            version: "A318",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
          {
            version: "A310",
            details: {
              mtow: "80000",
              mtow_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_zero_fuel_weight: "58000",
              max_zero_fuel_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              body_type_id: DEFAULT_BODY_TYPE_ID,
              passenger_capacity: "140",
              uld_position: "6",
              landing_weight: "62000",
              landing_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              cargo_capacity: "30000",
              cargo_capacity_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_bulk_capacity_weight: "15000",
              max_bulk_capacity_weight_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_bulk_capacity_volume: "200",
              max_bulk_capacity_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              max_volume: "300",
              max_volume_unit_id: DEFAULT_VOLUME_UNIT_ID,
              restricted_weight_piece: "200",
              restricted_weight_piece_unit_id: DEFAULT_WEIGHT_UNIT_ID,
              max_dimension_length: "2",
              max_dimension_breadth: "1.5",
              max_dimension_height: "1.5",
              max_dimension_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              aft_h: "5",
              aft_w: "4",
              fwd_h: "5",
              fwd_w: "4",
              bulk_h: "4",
              bulk_w: "3",
              bulk_unit_id: DEFAULT_DIMENSION_UNIT_ID,
              fwt: "15",
              fwd: "20",
              bulk: "30",
              bulk_cubic_id: DEFAULT_VOLUME_UNIT_ID,
            },
          },
        ],
      },
      //   {
      //     type: "A330",
      //     versions: ["A330-200", "A330-300", "A330-900neo"],
      //   },
      //   {
      //     type: "A340",
      //     versions: ["A340-300", "A340-500", "A340-600"],
      //   },
      //   {
      //     type: "A350",
      //     versions: ["A350-900", "A350-1000"],
      //   },
      //   {
      //     type: "A380",
      //     versions: ["A380-800"],
      //   },
    ],
  },
] as const
