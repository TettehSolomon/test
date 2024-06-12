import React from "react"
import Sidebar from "./Sidebar"

const Settings = () => {
    return (
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <h1 style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>Settings</h1>
                    <div className="row">
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">API Credentials</h4>
                                    <form className="forms-sample">
                                        <div className="form-group">
                                            <label for="exampleInputUsername1">Mandate Creation API</label>
                                            <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Direct Debit API</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="" />
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Scheduler Settings</h4>
                                    <form className="forms-sample">
                                        <div className="form-group">
                                            <label for="exampleInputUsername1">Biller Details</label>
                                            <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Mandate Duration</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="" />
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">User Account Settings</h4>
                                    <form className="forms-sample">
                                        <div class="form-group">
                                            <label for="exampleInputPassword4">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword4" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Contact Information</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="" />
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Save</button>
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

export default Settings;