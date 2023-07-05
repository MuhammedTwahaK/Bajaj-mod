import React from "react";
import BLUE from "../Images/Blue.png";
import OfferForYou from "./OfferForYou";

const HomeEleven = () => {
  return (
    <div>
      <div className="FinalDIVELVEN">
        <div className="ElvenFinalOne">
          <div className="ElevenMAinDivONE">
            <img
              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/savdhan-v1?scl=1&fmt=png-alpha"
              alt=""
            />
            <h4 className="Savdhan">Savdhan Rahein! Safe Rehein!</h4>
          </div>
        </div>
      </div>

      <div className="BlueANdDiv">
        <img className="BLueBlue" src={BLUE} alt="" />

        <div className="TExtNADICnContaimi">
          <h5 className="hthreecalculators">Calculators</h5>
          <div className="PersonalLoadAndItsDivWithCAlculator">
            <div className="PersOnalLOAnAndITsDiv">
              <img
                className="Widthofcalculatortexticon"
                src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/personal-loan-41?scl=1&fmt=png-alpha"
                alt=""
              />
              <h6 className="PersonalLOnanTExtx">Personal Loan</h6>
            </div>
            <div className="PersOnalLOAnAndITsDiv">
              <img
                className="Widthofcalculatortexticon"
                src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/home-loan-28?scl=1&fmt=png-alpha"
                alt=""
              />
              <h6 className="PersonalLOnanTExtx">Home Loan</h6>
            </div>
            <div className="PersOnalLOAnAndITsDiv">
              <img
                className="Widthofcalculatortexticon"
                src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/business-loan-34?scl=1&fmt=png-alpha"
                alt=""
              />
              <h6 className="PersonalLOnanTExtx">Business Loan</h6>
            </div>
            <div className="PersOnalLOAnAndITsDiv">
              <img
                className="Widthofcalculatortexticon"
                src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/fixed-deposit-48?scl=1&fmt=png-alpha"
                alt=""
              />
              <h6 className="PersonalLOnanTExtx">Fixed Deposit</h6>
            </div>
            <div className="PersOnalLOAnAndITsDiv">
              <img
                className="Widthofcalculatortexticon"
                src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/systematic-deposit-plan-13?scl=1&fmt=png-alpha"
                alt=""
              />
              <h6 className="PersonalLOnanTExtx">Systematic Deposit</h6>
            </div>
          </div>
        </div>
      </div>
      <OfferForYou/>
    </div>
  );
};

export default HomeEleven;
