import React from 'react'
import Sidebar from './Sidebar'

const Transactions = () => {
    return (
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Transactions</h4>
                                    <form className="forms-sample">
                                        <div class="form-group">
                                            <label for="exampleInputPassword4">Date Range:</label>
                                            <input type="date" class="form-control" id="exampleInputPassword4" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Amount:</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="All Billers" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Mandate:</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="All Mandates" />
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Amount
                                                    </th>
                                                    <th>
                                                        Mandate
                                                    </th>
                                                    <th>
                                                        Amount
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
                                                        Amount 1
                                                    </td>
                                                    <td>
                                                        Mandate 1
                                                    </td>
                                                    <td>
                                                        Amount 1
                                                    </td>
                                                    <td>
                                                        Successful
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Resubmit</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-1">
                                                        Amount 2
                                                    </td>
                                                    <td>
                                                        Mandate 2
                                                    </td>
                                                    <td>
                                                        Amount 2
                                                    </td>
                                                    <td>
                                                        Failed
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.45rem 0.97rem" }}>Resubmit</button>
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

export default Transactions;