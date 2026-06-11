import Sidebar from "./Sidebar";
import Form from "./Form";
import Table from "./Table";
import Login from "./Login";

import { USER_FORM, PUP_FORM, PUP_RECORD_FORM, USER, PUP, RECORD } from '../utilities/FormFields';
import { pupRecordsCall } from "../mockData/records";

const records = pupRecordsCall;
const Dashboard = () => {
    return (
        <>
        <div className="main-content">
            <Sidebar />
        <div style={{padding: "1%"}}>
            {/* <Login/> */}
            {/* <Form 
                initialData={RECORD}
                httpType={"post"}
                onSubmit={() => console.log("Submitted!")}
                onCancel={() => console.log("Cancelled")}
                formFields={PUP_RECORD_FORM}
                title={"RECORD"}
                login={false}
                register={false}
            /> */}
            <Table records={records["records"]}/>
        </div>
        </div>
        </>
    );
}

export default Dashboard; 