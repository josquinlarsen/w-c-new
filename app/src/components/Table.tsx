import type { PupRecordAPIResponse } from "../types";
import FormatDate from "../utilities/FormatDate";

const Table = ({records}: PupRecordAPIResponse) => {
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Doctor</th>
                    <th>Vet Address</th>
                    <th>Vet Number</th>
                    <th>Cost</th>
                    <th>Notes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {records.map(record => (
                    <tr key={record.id}>
                        <td>{record.record_type}</td>
                        <td><FormatDate date={record.record_date}/></td>
                        <td>{record.doctor_name}</td>
                        <td>{record.vet_address}</td>
                        <td>{record.vet_phone_number}</td>
                        <td>${record.cost}</td>
                        <td>{record.record_note}</td>
                        <td>
                            <p>Edit</p>
                            <p>Delete</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default Table;