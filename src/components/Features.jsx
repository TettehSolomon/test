import React from "react"
import Sidebar from "./Sidebar"

const Features = () => {
    return (
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <h1 style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>Features</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Balance Check</h4>
                                    <form className="forms-sample">
                                        <div className="form-group">
                                            <label for="exampleInputUsername1">Account Number</label>
                                            <input type="number" className="form-control" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">PIN</label>
                                            <input type="password" className="form-control" id="exampleInputEmail1" placeholder="" />
                                        </div>
                                        <button type="button" className="btn btn-primary">Check Balance</button>
                                        <button type="button" className="btn btn-secondary mx-1">Refresh</button>
                                        <div className="form-group my-3">
                                            <label for="exampleInputUsername1">Account Balance</label>
                                            <input type="number" className="form-control" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Real-Time Debit and Credit</h4>
                                    <form className="forms-sample">
                                        <div className="form-group">
                                            <label for="exampleInputUsername1">Account Number</label>
                                            <input type="number" className="form-control" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">PIN</label>
                                            <input type="password" className="form-control" id="exampleInputEmail1" placeholder="" />
                                        </div>
                                        <div className="form-group my-3">
                                            <label for="exampleInputUsername1">Amount</label>
                                            <input type="number" className="form-control" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "8x" }}>Debit</button>
                                        <button type="button" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "8x", margin: "0 6px" }}>Credit</button>
                                        <button type="button" className="btn btn-secondary" style={{ fontSize: "0.7rem", padding: "8x" }}>Refresh</button>
                                        <div className="form-group my-3">
                                            <label for="exampleInputUsername1">Account Balance</label>
                                            <input type="number" className="form-control" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">e-Mandate</h4>
                                    <form className="forms-sample">
                                        <div className="form-group">
                                            <label for="exampleInputUsername1">Account Number</label>
                                            <input type="number" className="form-control" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">PIN</label>
                                            <input type="password" className="form-control" id="exampleInputEmail1" placeholder="" />
                                        </div>
                                        <div className="form-group my-3">
                                            <label for="exampleInputUsername1">Amount</label>
                                            <input type="number" className="form-control" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <button type="button" className="btn-primary" style={{
                                                fontSize: "11px",
                                                paddingBlock: "0px",
                                                borderRadius: "13px",
                                                border: "none"

                                            }}>Set up e-mandate</button>
                                            <button type="button" className="btn btn-primary" style={{
                                                fontSize: "11px",
                                                paddingBlock: "0px",
                                                borderRadius: "13px",
                                                marginRight: "2px", marginLeft: "2px"
                                            }}>Edit</button>
                                            <button type="button" className="btn btn-secondary" style={{ fontSize: "11px" }}>Cancel</button></div>
                                        <div className="form-group my-3">
                                            <label for="exampleInputUsername1">e-Mandate Details</label>
                                            <textarea className="form-control" rows="7" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;