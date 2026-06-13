import Sidebar from "./Sidebar";

import Table from "./Table";

import { pupRecordsCall } from "../mockData/records";

const records = pupRecordsCall;
const Dashboard = () => {
    return (
        <>
        <div className="main-content">
            <Sidebar />
        <div style={{padding: "1%"}}>
            <Table records={records["records"]}/>
        </div>
        </div>
        </>
    );
}

export default Dashboard; 