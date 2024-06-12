import React from "react"
import Sidebar from "./Sidebar"


const Mandates = () => {
    return (
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Mandates</h4>
                                    <button type="button" className="btn btn-secondary" style={{ fontSize: "0.8rem" }}>Create Mandate</button>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Biller
                                                    </th>
                                                    <th>
                                                        Start Date
                                                    </th>
                                                    <th>
                                                        End Date
                                                    </th>
                                                    <th>
                                                        Status
                                                    </th>
                                                    <th>
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="py-1">
                                                        Biller 1
                                                    </td>
                                                    <td>
                                                        Start Date 1
                                                    </td>
                                                    <td>
                                                        End Date 1
                                                    </td>
                                                    <td>
                                                        Active
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Edit</button>
                                                        <button type="button" className="btn btn-secondary mx-1" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Cancel</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-1">
                                                        Biller 2
                                                    </td>
                                                    <td>
                                                        Start Date 2
                                                    </td>
                                                    <td>
                                                        End Date 2
                                                    </td>
                                                    <td>
                                                        Inactive
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Edit</button>
                                                        <button type="button" className="btn btn-secondary mx-1" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Cancel</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-1">
                                                        Biller 3
                                                    </td>
                                                    <td>
                                                        Start Date 3
                                                    </td>
                                                    <td>
                                                        End Date 3
                                                    </td>
                                                    <td>
                                                        Active
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Edit</button>
                                                        <button type="button" className="btn btn-secondary mx-1" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Cancel</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                <td class="py-1">
                                                        Biller 4
                                                    </td>
                                                    <td>
                                                        Start Date 4
                                                    </td>
                                                    <td>
                                                        End Date 4
                                                    </td>
                                                    <td>
                                                        Inactive
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Edit</button>
                                                        <button type="button" className="btn btn-secondary mx-1" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Cancel</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mandates;