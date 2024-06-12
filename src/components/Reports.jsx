import Sidebar from "./Sidebar"

const Reports = () => {
    return (
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <h1 style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>Reports</h1>
                    <div className="row">
                        <div class="col-lg-4 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Revenue by Biller</h4>
                                    <canvas id="revenueByBiller"></canvas>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Transactions by Biller</h4>
                                    <canvas id="transactionsByBiller"></canvas>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Mandates by Biller</h4>
                                    <canvas id="mandatesByBiller"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Revenue by Date Range</h4>
                                    <canvas id="revenueChart"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Transactions by Date Range</h4>
                                    <canvas id="transactionChart"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Mandates by Date Range</h4>
                                    <canvas id="lineChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports;