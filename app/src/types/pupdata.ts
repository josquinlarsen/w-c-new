export interface PupFormData {
    pup_name: string;
    pup_sex: string;
    microchip_number: string;
    akc_registration_number: string;
    akc_registration_name: string;
}

export interface PupRecordData {
    record_type: string;
    record_date: Date;
    doctor_name: string;
    vet_address: string;
    vet_phone_number: string;
    cost: number;
    record_note: string;
}