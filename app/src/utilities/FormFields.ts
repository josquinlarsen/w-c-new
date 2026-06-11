export const USER_FORM = [
    { name:"username", label: "username", type: "text", },
    { name: "email", label: "email", type:"email", },
    { name: "first_name", label: "first_name", type:"text", },
    { name: "last_name", label: "last_name", type:"text", },
    { name: "password1", label: "password1", type:"text", },
    { name: "password2", label: "password2", type:"text", }
];

export const USER = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password1: '',
    password2: ''
};

export const LOGIN_FORM = [
    {name:"username", label:"username", type:"text", required:true},
    {name:"password", label:"password", type:"text", required:true}
];

export const LOGIN = {
    username: "",
    password: ""
};

export const PUP_FORM = [
    { name: "pup_name", label: "Pup Name", type: "text", placeholder: "Pup Name", required: true },
    { name: "pup_sex", label: "Pup Sex", type: "text", placeholder: "Pup Sex", required: true },
    { name: "microchip_number", label: "Microchip Number", type: "text", placeholder: "Microchip Number", required: true },
    { name: "akc_registration_number", label: "AKC Registration Number", type: "text", placeholder: "AKC Registration Number", required: true },
    { name: "akc_registration_name", label: "AKC Registration Name", type: "text", placeholder: "AKC Registration Name", required: false },
];

export const PUP = {        
    pup_name: '',
    pup_sex: '',
    microchip_number: '',
    akc_registration_number: '',
    akc_registration_name: ''
};

export const RECORD = {
    record_type: '',
    record_date: '',
    doctor_name: '',
    vet_address: '',
    vet_phone_number: '',
    cost: '',
    record_note: ''
};

export const PUP_RECORD_FORM = [
    { name: "record_type", label: "Record Type", type: "text", placeholder: "Record Type", required: true },
    { name: "record_date", label: "Record Date", type: "date", placeholder: "", required: true },
    { name: "doctor_name", label: "Doctor", type: "text", placeholder: "Doctor Name", required: true },
    { name: "vet_address", label: "Address", type: "text", placeholder: "Vet Address", required: true },
    { name: "vet_phone_number", label: "Phone Number", type: "text", placeholder: "Vet Phone Number", required: true },
    { name: "cost", label: "Cost", type: "text", placeholder: "Cost", required: true },
    { name: "record_note", label: "Note", type: "text", placeholder: "Record Note", required: false },
];

