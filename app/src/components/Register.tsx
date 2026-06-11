import Form from "./Form"

import { useAuthForm } from "../hooks/useAuthForm";
import { USER_FORM } from "../utilities/FormFields";

export default function Register() {
    const { formData, handleChange, handleRegister, handleCancel } = useAuthForm();
    return(
        <>
        <Form
            initialData={formData}
            httpType={"post"}
            onSubmit={handleRegister}
            onCancel={handleCancel}
            onChange={handleChange}
            formFields={USER_FORM}
            title={"Register"}
            userAction={2}
        />
        </>
    )
}