
import { useAuthForm } from "../hooks/useAuthForm";
import { LOGIN_FORM } from "../utilities/FormFields";

import Form from "./Form";

export default function Login(){
    const { loginData, handleLoginChange, handleLogin, handleCancel } = useAuthForm();

    return(
        <>
        <Form 
            initialData={loginData}
            httpType={"post"}
            onSubmit={handleLogin}
            onCancel={handleCancel}
            onChange={handleLoginChange}
            formFields={LOGIN_FORM}
            title={"Login"}
            userAction={1}
        />
        </>
    );
}

