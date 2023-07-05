import React from "react";
import Layout from "../Images/Background.png";
import Close from "../Images/close.png";
import { Link } from "react-router-dom";

const SignIN = () => {
  return (
    <div>
      <div>
        <img className="LayoutImmg" src={Layout} alt="" />

        <div className="LoginCenterPage">



          <div className="MAinAndITsSignIN">
            <div className="InsideofCenterdivsign">

            <div id="MYACCOUNTTEXTINSIGNinDIV">
                  <span className="MYACCOUNTTEXTINSIGNin">MY ACCOUNT</span>
                </div>
                <div id="MYACCOUNTTEXTINSIGNinDIVTWooo">
                  <span id="MYACCOUNTTEXTINSIGNin">
                    Here’s what we have in store for you:
                  </span>
                </div>



              <div className="LeftSideSignINPAgeAlignMEntWithMAinDIv">
   

                <div id="SpantextONeinsignleft">
                  <img
                    className="Blubimg"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/blue-bulb?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <div className="SpantextONeinsignleft">
                    <span className="PreApprovedSignPAge">
                      PRE-APPROVED OFFERS
                    </span>
                    <span className="PreApprovedSignPAgetwo">
                      Get personalised offers on loans, cards, etc.
                    </span>
                  </div>
                </div>

                <div id="SpantextONeinsignleftTWo">
                  <img
                    className="Blubimg"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/red-bulb?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <div className="SpantextONeinsignleft">
                    <span className="PreApprovedSignPAge">DOWNLOADS</span>
                    <span className="PreApprovedSignPAgetwo">
                      Download statements, NOCs and other related documents
                    </span>
                  </div>
                </div>

                <div id="SpantextONeinsignleftThree">
                  <img
                    className="Blubimg"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/yellow-bulb?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <div className="SpantextONeinsignleft">
                    <span className="PreApprovedSignPAge">PAYMENTS</span>
                    <span className="PreApprovedSignPAgetwo">
                      Pay bills or part-prepay your loan without hassles
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="SecondDivinSideofLogin">
              <div className="ButtonAligmentOfMArk">
                <div className="ButtonAligmentS">
                  <Link to={"/"}>
                    <img className="clsoebuttonimgwidth" src={Close} alt="" />
                  </Link>
                </div>

                <h2 className="RegisterDIVSIGn">
                  Register or Sign-in to My Account
                </h2>
                <span className="SelectanAccounttype">
                  Select an account type to proceed
                </span>
                <div className="NriIndividualBusinessdiv">
                  <span id="Individual">Individual</span>
                  <span id="Corporate">Corporate/Business</span>
                  <span id="NRI">NRI</span>
                </div>
<div className="InputAnditstext">
                <input
                  className="InoutForNUmberSg"
                  type="text"
                  placeholder="Mobile Number"
                />
                <span className="EnterYourTenDigital">Enter your 10-digit mobile number</span>
</div>

<div>
  <div className="GETOTPSIZZANDColorER"> 
    <h6 className="GETOTPSIZZANDColor">GET OTP</h6>
  </div>
</div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIN;
