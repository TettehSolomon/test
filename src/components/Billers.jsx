import Sidebar from "./Sidebar"


const Billers = () => {
    return (
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Billers</h4>
                                    <button type="button" className="btn btn-secondary" style={{ fontSize: "0.8rem" }}>Add Biller</button>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Name
                                                    </th>
                                                    <th>
                                                        Contact Information
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
                                                        Billers 1
                                                    </td>
                                                    <td>
                                                        Contact Info 1
                                                    </td>
                                                    <td>
                                                        Active
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Edit</button>
                                                        <button type="button" className="btn btn-secondary mx-1" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-1">
                                                        Billers 2
                                                    </td>
                                                    <td>
                                                        Contact Info 2
                                                    </td>
                                                    <td>
                                                        Active
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Edit</button>
                                                        <button type="button" className="btn btn-secondary mx-1" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Delete</button>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-1">
                                                        Billers 3
                                                    </td>
                                                    <td>
                                                        Contact Info 3
                                                    </td>
                                                    <td>
                                                        Active
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Edit</button>
                                                        <button type="button" className="btn btn-secondary mx-1" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                <td class="py-1">
                                                        Billers 4
                                                    </td>
                                                    <td>
                                                        Contact Info 4
                                                    </td>
                                                    <td>
                                                        Active
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Edit</button>
                                                        <button type="button" className="btn btn-secondary mx-1" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Delete</button>
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

export default Billers