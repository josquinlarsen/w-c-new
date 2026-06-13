import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";

import { PUP, PUP_FORM } from "../../utilities/FormFields";

interface PupFormProps {
    httpType: string;
    title:string;
}

const PupForm = ({httpType, title}: PupFormProps) => {
    const navigate = useNavigate();
    return(
        <Form 
            initialData={PUP}
            httpType={httpType}
            onSubmit={console.log('added!')}
            onCancel={() => navigate('/home')}
            // onChange={}
            formFields={PUP_FORM}
            title={title}
        />
    );
}

export default PupForm;