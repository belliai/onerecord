import { z } from 'zod';

export const customerSchema = z.object({
    ID: z.string().optional(),
    id: z.string().optional(),
    account_email: z.string()
        .min(1, { message: "This field has to be filled." })
        .email(),
    address1: z.string().min(1),
    address2: z.string(),
    agent_type: z.string(),
    allowed_payment_id: z.string(),
    auto_allocate_stock: z.string(),
    auto_generate_invoice: z.string(),
    base_vol_rate: z.string().min(1),
    bill_to: z.string(),
    bill_type: z.string(),
    billing_address: z.string(),
    billing_adress2: z.string(),
    billing_city: z.string(),
    billing_contact_person: z.string(),
    billing_controller_code: z.string(),
    billing_country: z.string(),
    billing_on_gross: z.string(),
    billing_phone_no: z.string(),
    billing_state: z.string(),
    billing_zip: z.string(),
    city: z.string().min(1),
    code: z.string().min(1),
    comission: z.string(),
    contact_person: z.string(),
    country: z.string().min(1),
    credit_controller: z.string(),
    credit_controller_code: z.string(),
    currency_id: z.string(),
    customer_type: z.string(),
    d2d: z.string(),
    deal_pli: z.string(),
    default_pay_mode: z.string(),
    gl_code: z.string(),
    gross_weight: z.string(),
    iata_agent_code: z.string(),
    incentive: z.string(),
    invoice_due: z.string(),
    is_active: z.boolean(),
    is_bonded: z.boolean(),
    is_charter: z.boolean(),
    is_foc: z.boolean(),
    is_po_mail: z.boolean(),
    is_walkin: z.boolean(),
    mobile_number: z.string(),
    name: z.string().min(1),
    ops_email: z.string(),
    participate_in_cass: z.string(),
    participation_type: z.string(),
    phone_no: z.string(),
    po_number: z.string(),
    pp: z.string(),
    rateline_preference: z.string(),
    sales_email: z.string(),
    sap_customer_code: z.string(),
    select_allow_paymode: z.string(),
    shipper_type: z.string().min(1),
    sr_number_required: z.string(),
    stock_controller: z.string(),
    stock_controller_code: z.string(),
    valid_from: z.string(),
    valid_to: z.string(),
    validate_credit: z.boolean()
});

export type Customer = z.infer<typeof customerSchema>;
