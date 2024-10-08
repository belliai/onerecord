import { z } from "zod"

export const aircraftGeneralFieldsFormSchema = z.object({
  aft_h: z.string().optional(),
  aft_w: z.string().optional(),
  body_type_id: z.string().uuid().optional(),
  bulk: z.string().optional(),
  bulk_h: z.string().optional(),
  bulk_w: z.string().optional(),
  cargo_capacity: z.string().optional(),
  count: z.number().optional(),
  fwd: z.string().optional(),
  fwd_h: z.string().optional(),
  fwd_w: z.string().optional(),
  fwt: z.string().optional(),
  gl_code_id: z.string().uuid().optional(),
  landing_weight: z.string().optional(),
  max_bulk_capacity_volume: z.string().optional(),
  max_bulk_capacity_weight: z.string().optional(),
  max_dimension_breadth: z.string().optional(),
  max_dimension_height: z.string().optional(),
  max_dimension_length: z.string().optional(),
  max_volume: z.string().optional(),
  max_zero_fuel_weight: z.string().optional(),
  mtow: z.string().optional(),
  passenger_capacity: z.string().optional(),
  restricted_weight_piece: z.string().optional(),
  uld_position: z.string().optional(),
})

export type AircraftGeneralFields = z.infer<
  typeof aircraftGeneralFieldsFormSchema
>
