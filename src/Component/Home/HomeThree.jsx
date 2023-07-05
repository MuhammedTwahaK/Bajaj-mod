import React from "react";
import HomeFour from "./HomeFour";

const HomeThree = () => {
  return (
    <div>
      <div className="HomeTHreeFinalDiv">
        <div className="THeFinalDivForAlignBIllS">
          <div className="BackGRouNdCoLORForBIll">
            <div className="DivMainofbiLLSANDRG">
              <div className="BillsandREChargeDiv">
                <h1 className="PAdiimg">Health Bazaar</h1>
                <h6 className="ViewAllClass">View All</h6>
              </div>
            </div>

            <div className="MenuOfBillsANdRechagrgeMAin">
              <div className="AllIcoNeInASingleDive">
                <div className="MoBIKEIBBILLSText" id="FOrHealthpans">
                  <img
                    className="BillsRecharGeiconS"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/health-plans?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="Mobiletextspan">Health Plans</span>
                </div>

                <div className="MoBIKEIBBILLSText" id="FOrHealthpans">
                  <img
                    className="BillsRecharGeiconS"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/abha-health?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="Mobiletextspan">ABHA Health ID</span>
                </div>

                <div className="MoBIKEIBBILLSText">
                  <img
                    className="BillsRecharGeiconS"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/health-emi-5?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="Mobiletextspanv">Health EMI Card</span>
                </div>

                <div className="MoBIKEIBBILLSText">
                  <img
                    className="BillsRecharGeiconS"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/doctor-consultation-v1?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="Mobiletextspanv">Doctor Consultation</span>
                </div>

                <div className="MoBIKEIBBILLSText">
                  <img
                    className="BillsRecharGeiconS"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/lab-test?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="Mobiletextspan">Lab Tests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeFour/>
    </div>
  );
};

export default HomeThree;
