import { useNavigate } from "react-router-dom";
import { useAuthForm } from "../../hooks/useAuthForm";
import { LOGIN_FORM } from "../../utilities/FormFields";

import Form from "../../components/Form";

export default function Login(){
    const navigate = useNavigate();
    const { loginData, handleLoginChange, handleLogin } = useAuthForm();

    return(
        <>
        <Form 
            initialData={loginData}
            httpType={"post"}
            onSubmit={handleLogin}
            onCancel={() => navigate('/')}
            onChange={handleLoginChange}
            formFields={LOGIN_FORM}
            title={"Login"}
            userAction={1}
        />
        </>
    );
}

