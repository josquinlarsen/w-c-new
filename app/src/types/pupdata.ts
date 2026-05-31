export interface Pup {
    id: string;
    pup_name: string;
    pup_sex: string;
    microchip_number: string;
    akc_registration_number: string | null;
    akc_registration_name: string | null;
    owner_id: string;
}

export interface PupFormData {
    pup_name: string;
    pup_sex: string;
    microchip_number: string;
    akc_registration_number: string | null;
    akc_registration_name: string | null;
}

export interface PupRecord {
    id: string;
    record_type: string;
    record_date: string;
    doctor_name: string;
    vet_address: string;
    vet_phone_number: string;
    cost: number;
    record_note: string;
    pup_id: string;
}

export interface PupRecordData {
    record_type: string;
    record_date: string;
    doctor_name: string;
    vet_address: string;
    vet_phone_number: string;
    cost: number;
    record_note: string;
}

// for mock data
export interface PupAPIResponse {
    pups: Pup[];
}

export interface PupRecordAPIResponse {
    records: PupRecord[];
}