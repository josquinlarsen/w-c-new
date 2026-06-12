import Form from "../../components/Form"

import { useNavigate } from "react-router-dom";
import { useAuthForm } from "../../hooks/useAuthForm";
import { USER_FORM } from "../../utilities/FormFields";

export default function Register() {
    const navigate = useNavigate();
    const { formData, handleChange, handleRegister } = useAuthForm();
    return(
        <>
        <Form
            initialData={formData}
            httpType={"post"}
            onSubmit={handleRegister}
            onCancel={() => navigate('/')}
            onChange={handleChange}
            formFields={USER_FORM}
            title={"Register"}
            userAction={2}
        />
        </>
    )
}