import Sidebar from "./Sidebar"
import Footer from "./Footer"


const Dashboard = () => {
  return (
    <div className="container-fluid page-body-wrapper">
      <Sidebar />
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="col-lg-12 grid-margin">
            <div className="card" style={{border: '1px solid black', borderRadius: '0px', textAlign: 'center'}}>
              <div className="card-body">
                <h1 className="card-title" style={{ fontSize: '1.8rem'}}>
                  NIBSS Direct Debit &nbsp;
                    <span style={{ fontWeight: '100' }}>
                      Mandate Instructions Handled Brilliantly
                    </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 grid-margin">
              <div className="card" style={{border: '0px solid black', borderRadius: '0px'}}>
                <div className="card-body">
                  <h4 className="card-title">Total Billers</h4>
                  <h3 className="card-title">100</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 grid-margin">
              <div className="card" style={{border: '0px solid black', borderRadius: '0px'}}>
                <div className="card-body">
                  <h4 className="card-title">Total Mandates</h4>
                  <h3 className="card-title">500</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 grid-margin">
              <div className="card" style={{border: '0px solid black', borderRadius: '0px'}}>
                <div className="card-body">
                  <h4 className="card-title">Total Transactions</h4>
                  <h3 className="card-title">1000</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 grid-margin">
              <div className="card" style={{border: '0px solid black', borderRadius: '0px'}}>
                <div className="card-body">
                  <h4 className="card-title">Total Revenues</h4>
                  <h3 className="card-title">$1,000,000</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Revenue</h4>
                  <canvas id="revenueChart"></canvas>
                </div>
              </div>
            </div>

            <div className="col-lg-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Transactions</h4>
                  <canvas id="transactionChart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;