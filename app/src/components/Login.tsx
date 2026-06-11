
import { useNavigate } from "react-router-dom";

import { useAuthForm } from "../hooks/useAuthForm";
import Form from "./Form";
import { LOGIN_FORM } from "../utilities/FormFields";

export default function Login(){
    const navigate = useNavigate();
    const { loginData, handleLoginChange, handleLogin } = useAuthForm();
    return(
        <>
        <Form 
            initialData={loginData}
            httpType={"post"}
            onSubmit={handleLogin} // type?
            onCancel={() => {navigate('/')}}
            handleLoginChange={handleLoginChange}
            formFields={LOGIN_FORM}
            title={"Login"}
            userAction={1}
        />
        </>
    );
}

