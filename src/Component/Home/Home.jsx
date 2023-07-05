import React from "react";
import HomeImg from "../Images/HOme.png";
import HomeImgTwo from "../Images/HOmeTwo.png";
import AC from "../Images/acs-v1.webp";
import HomeSecond from "./HomeSecond";
import { Link } from "react-router-dom";

const Home = () => {


  
  return (
    <div>
      <div className="maInMeNuOfHomejsX">
        <div className="HomeItemsLeftAlignMain">
          <div className="DivForSliderCrousal">
            <div
              id="carouselExampleControlsNoTouching"
              class="carousel slide"
              data-bs-touch="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active DisplaFlextoColume">
                  <div className="TouchSilderDiv">
                    <div>
                      <img
                        className="HomeImgHEGightWiDth"
                        src={HomeImg}
                        alt=""
                      />
                      <div className="LoanCardDivInSideDiv">
                        <h6 className="LoansTextpositions">Loans</h6>
                        <div className="LoanCardFinalDivForSet">
                              <Link to={"/Personal"} >
                          <button  className="prsnlbtnfit"> </button>
                          </Link>

                          <div className="LogoOfvardOfLOan">
                        
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/personal-loan-v1-11?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            
                            <h6 className="PersonalTexTorange">Personal</h6>
                          </div>
                      


                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/home-loan-v1-5?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorange">Home</h6>
                          </div>
                        
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/doctor-loan-23?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorange">Doctor</h6>
                          </div>
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/business-loan-36?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorange">Business</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <img
                        className="HomeImgHEGightWiDth"
                        src={HomeImgTwo}
                        alt=""
                      />
                      <div className="LoanCardDivInSideDiv">
                        <h6 className="LoansTextpositionsEMI">
                          EMI Network Card
                        </h6>
                        <div className="LoanCardFinalDivForSet">
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/emi-card-21?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorangeText">EMI Card</h6>
                          </div>
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/bajaj-mall-7?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorangeText">
                              Bajaj Mall
                            </h6>
                          </div>
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/partner-2?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorangeText">Partners</h6>
                          </div>
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offers-12?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorangeText">Offers</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <img
                        className="HomeImgHEGightWiDth"
                        src={HomeImg}
                        alt=""
                      />
                      <div className="LoanCardDivInSideDiv">
                        <h6 className="LoansTextpositionsCO">
                          Co-brand Credit Card
                        </h6>
                        <div className="LoanCardFinalDivForSet">
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/check-offer-1?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorangeFont">
                              Check Offer
                            </h6>
                          </div>
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/joining-bonus?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorangeFont">
                              joing Bouns
                            </h6>
                          </div>
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offers-13?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorangeFont">Offers</h6>
                          </div>
                          <div className="LogoOfvardOfLOan">
                            <img
                              className="WidthOfcardLoanImg"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/card-benefits-v1?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <h6 className="PersonalTexTorangeFont">
                              Card Benifts
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon JustGavePadingtobtL"
                  aria-hidden="true"
                ></span>
              </button> */}
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon JustGavePadingtobtR"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>

          <div className="THeFinalDivForAlignBIllS">
            <div className="BackGRouNdCoLORForBIll">
              <div className="DivMainofbiLLSANDRG">
                <div className="BillsandREChargeDiv">
                  <h1 className="PAdiimg">Bills & Recharge</h1>

                  <h6 className="ViewAllClass">View All</h6>

                </div>
              </div>

              <div className="MenuOfBillsANdRechagrgeMAin">
                <div className="AllIcoNeInASingleDive">
                  <div className="MoBIKEIBBILLSText">
                    <img
                      className="BillsRecharGeiconS"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/mobile-v2-3?scl=1&fmt=png-alpha"
                      alt=""
                    />
                    <span className="Mobiletextspan">Mobile</span>
                  </div>

                  <div className="MoBIKEIBBILLSText">
                    <img
                      className="BillsRecharGeiconS"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/electricity-v1?scl=1&fmt=png-alpha"
                      alt=""
                    />
                    <span className="Mobiletextspan">Electricity</span>
                  </div>

                  <div className="MoBIKEIBBILLSText">
                    <img
                      className="BillsRecharGeiconS"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/loan-repayment?scl=1&fmt=png-alpha"
                      alt=""
                    />
                    <span className="Mobiletextspanv">Loan Repayment</span>
                  </div>

                  <div className="MoBIKEIBBILLSText">
                    <img
                      className="BillsRecharGeiconS"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/credit-card-v2-1?scl=1&fmt=png-alpha"
                      alt=""
                    />
                    <span className="Mobiletextspanv">Credit Card Bill</span>
                  </div>

                  <div className="MoBIKEIBBILLSText">
                    <img
                      className="BillsRecharGeiconS"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/lpg-v2?scl=1&fmt=png-alpha"
                      alt=""
                    />
                    <span className="Mobiletextspan">LPG Gas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="DivForBgInSilderThree">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div className="HGwbForSilberthings">
                    <img
                      // className="WIdthAdjustInSliders"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/fixed-deposite-v1?scl=1&fmt=png-alpha"
                      class="d-block WIdthAdjustInSliders"
                      alt="..."
                    />
                    <img
                      // className="WIdthAdjustInSliders"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/car-insurance-v1-5?scl=1&fmt=png-alpha"
                      class="d-block WIdthAdjustInSliders"
                      alt="..."
                    />
                    <img
                      // className="WIdthAdjustInSliders"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/bfsl-v1?scl=1&fmt=png-alpha"
                      class="d-block WIdthAdjustInSliders"
                      alt="..."
                    />
                  </div>
                </div>

                <div class="carousel-item" data-bs-interval="2000">
                  <div className="HGwbForSilberthings">
                    <img
                      // className="WIdthAdjustInSliders"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/doctor-loan-v1-5?scl=1&fmt=png-alpha"
                      class="d-block WIdthAdjustInSliders"
                      alt="..."
                    />
                    <img
                      // className="WIdthAdjustInSliders"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/mutual-fund-v1-1?scl=1&fmt=png-alpha"
                      class="d-block WIdthAdjustInSliders"
                      alt="..."
                    />
                    <img
                      // className="WIdthAdjustInSliders"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/new-car-finance-v2?scl=1&fmt=png-alpha"
                      class="d-block WIdthAdjustInSliders"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon BtnfunctionClAssL"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon BtnfunctionClAssR"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="FourthLineAligmentFibalDivFF">
            <div className="FourthLineAligmentFibalDiv">
              <div className="BillsandREChargeDiv">
                <h1 className="PAdiimg">Electronics on EMI</h1>
                <h6 className="ViewAllClass">Expolre</h6>
              </div>

              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="SevenElementsIsIOCn">
                      <div className="ClassingOFTExtANdIconOfAlider">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/acs-v1?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>ACs</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobile">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/smartphones-v1-4?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>Smartphone</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileWashingMachines">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/washing-machines-3?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6 className="WashingMachines">Washing Machines</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileWaterPurifiers">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/water-purifier-6?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>Water Purifiers</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileCoolers">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/cooler-v1?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>Coolers</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileLEDTV">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/sony-tv?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>LED TV</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileRefrigerators">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/refrigerator-v2?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>Refrigerators</h6>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="SevenElementsIsIOCn">
                      <div className="ClassingOFTExtANdIconOfAlidermobile">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/smartphones-v1-4?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>Smartphone</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileWashingMachines">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/washing-machines-3?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6 className="WashingMachines">Washing Machines</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileWaterPurifiers">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/water-purifier-6?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>Water Purifiers</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileCoolers">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/cooler-v1?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>Coolers</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileLEDTV">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/sony-tv?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>LED TV</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAlidermobileRefrigerators">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/refrigerator-v2?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>Refrigerators</h6>
                      </div>
                      <div className="ClassingOFTExtANdIconOfAliderLaptop">
                        <img
                          src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/laptop-17?scl=1&fmt=png-alpha"
                          class="d-block WidthAndHEgIHTOFACIcOnPng"
                          alt="..."
                        />
                        <h6>Laptop</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon PrevodbtnalignmentgL"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon PrevodbtnalignmentgR"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="HomePartLeftDiv">
          <div className="AllMainDivSideOfRIght">
            <div className="UseingDivOFLEFft">
              <h6 className="Superstaores">Superstores</h6>

              <div className="AllRigBBOXLIGN">
                <div className="SiDEbOXIconsAlinments">
                  <div className="RightBocIconWidth">
                    <img
                      className="wDOFsIDErGbOCimgiCON"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/shop-on-the-emi-store-v7?scl=1&fmt=png-alpha"
                      alt=""
                    />
                    <span className="BAJAJAJJmall">Bajaj Mall</span>
                  </div>
                </div>
                <div className="SiDEbOXIconsAlinments">
                  <div className="RightBocIconWidth">
                    <img
                      className="wDOFsIDErGbOCimgiCON"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/investments-v4?scl=1&fmt=png-alpha"
                      alt=""
                    />
                    <span className="BAJAJAJJmall">Investmnt</span>
                  </div>
                </div>

                <div className="SiDEbOXIconsAlinments">
                  <div className="RightBocIconWidth">
                    <img
                      className="wDOFsIDErGbOCimgiCON"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/insurance-icon-blue-v4?scl=1&fmt=png-alpha"
                      alt=""
                    />
                    <span className="BAJAJAJJmall">Insurance</span>
                  </div>
                </div>
                <div className="SiDEbOXIconsAlinments">
                  <div className="RightBocIconWidthT">
                    <img
                      className="wDOFsIDErGbOCimgiCON"
                      src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/securities-v4?scl=1&fmt=png-alpha"
                      alt=""
                    />
                    <span className="BAJAJAJJmall">Securities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="UseingDivOFLEFft">
              <div className="AllSecondBoxOfdRg">
                <img
                  className="WidthOfTickIcon"
                  src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/savdhan-rahein?scl=1&fmt=png-alpha"
                  alt=""
                />
                <h6 className="Savdhaan">Savdhaan Rahein. Safe Rahein</h6>
                <div className="DIvoFTexteleMsth">
                  <span className="PAragrahp">
                    Beware of fraud calls/ SMSes/ emails/ fake online and print
                    ads. Bajaj Finance never asks for advance payments for
                    providing loans.{" "}
                  </span>
                  <span className="KnowMIORE">Know More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeSecond />
    </div>
  );
};

export default Home;
