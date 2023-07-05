import { Link, Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Hamburger from "../Images/hamburger-menu-icon-png-white-10.jpg";
import LocationLog from "../Images/locate-us-grey.webp";
import Offer from "../Images/check-pre-approved-offers-v4.webp";
import Download from "../Images/download-our-apps-v4.webp";
import Search from "../Images/Search.icon.png";
import EMI from "../Images/EMI.png";
import Notification from "../Images/Notification.png";
import DownArrow from "../Images/PngItem_4211827.png";
import Cart from "../Images/Cart.png";
import Account from "../Images/Account.png";
import Partners from "../Images/Partners.png";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbarone fixed-top">
        <div class="container-fluid NavBgColoRset">
          <div className="AllMenuBar">
            <button
              class="Darkblue"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span>
                <img className="Hamburger" src={Hamburger} alt="" />
              </span>
            </button>

            <div
              class="offcanvas offcanvas-end ForAlignLeft"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5
                  class="offcanvas-title ColorTowhite"
                  id="offcanvasNavbarLabel"
                >
                  Menu
                </h5>
                <button
                  type="button"
                  class="btn-close CloseBt"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div class="offcanvas-body CanvaBody">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <div className="DivForMyAC">
                    <div>
                      <img
                        className="MyAccount"
                        src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/my-account-v4?scl=1&fmt=png-alpha"
                        alt=""
                      />
                    </div>
                    <div className="MyACandCNT">
                      <h5 id="cntinAc">My Account</h5>
                      <p className="cntinAc">
                        Make loan payments,drawdown funds, <br /> explore
                        personalised offers,earn rewards <br /> and more
                      </p>
                    </div>
                    <div className="ArrowBg">
                      <img
                        className="arrowicon"
                        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="ForMenuBArBox">
                    <div class="dropdown">
                      <button
                        class="btn btnBorderNone"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="AllMenuBTN">
                          <div className="AlignmentofImgandCNT">
                            <img
                              className="LogoInMenuBAr"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/our-companies-v4?scl=1&fmt=png-alpha"
                              alt=""
                            />

                            <div className="MenuBArTitleandCNT">
                              <span className="OURCMP">Our Companies</span>
                              <span className="OURCMPCNT">
                                Learn more about our companies
                              </span>
                            </div>
                          </div>
                          <img
                            className="DownArrow"
                            src="https://cdn-icons-png.flaticon.com/512/892/892627.png"
                            alt=""
                          />
                        </div>
                        <hr />
                      </button>

                      <ul class="dropdown-menu DRBORder">
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Finserv Limited
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Finance Limited
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Allianz General Insurance
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Allianz Life Insurance
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Finserv Direct Limited
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Housing Finance Limited
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Financial Securities Limited
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Finserv Health Limited
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Finserv Asset Management Limited
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                      </ul>
                    </div>

                    <div class="dropdown">
                      <button
                        class="btn btnBorderNone"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="AllMenuBTN">
                          <div className="AlignmentofImgandCNT">
                            <img
                              className="LogoInMenuBAr"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/help-and-support-v1-4?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <div className="MenuBArTitleandCNT">
                              <span className="OURCMP">Help and support</span>
                              <span className="OURCMPCNT">
                                query find answers to your quest
                              </span>
                            </div>
                          </div>
                          <img
                            className="DownArrow"
                            src="https://cdn-icons-png.flaticon.com/512/892/892627.png"
                            alt=""
                          />
                        </div>
                        <hr />
                      </button>

                      <ul class="dropdown-menu DRBORder">
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Reach Us
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Locate us
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Raise a request
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            FAQs
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                      </ul>
                    </div>

                    <div class="dropdown">
                      <button
                        class="btn btnBorderNone"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="AllMenuBTN">
                          <div className="AlignmentofImgandCNT">
                            <img
                              className="LogoInMenuBAr"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/pay-your-emi-v4?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <div className="MenuBArTitleandCNT">
                              <span className="OURCMP">Pay your dues</span>
                              <span className="OURCMPCNT">
                                Check overdue amunt pay online
                              </span>
                            </div>
                          </div>
                          <img
                            className="DownArrow"
                            src="https://cdn-icons-png.flaticon.com/512/892/892627.png"
                            alt=""
                          />
                        </div>
                        <hr />
                      </button>

                      <ul class="dropdown-menu DRBORder">
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Clear your overdue EMIs
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Manage SuperCard bill
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Pay your other bills
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Make Online Payment
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                      </ul>
                    </div>

                    <li class="nav-item">
                      <button
                        class="btn btnBorderNone"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="AllMenuBTN1">
                          <div className="AlignmentofImgandCNTone">
                            <img
                              className="LogoInMenuBAr"
                              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/rewards-hamburger-icon-v1?scl=1&fmt=png-alpha"
                              alt=""
                            />
                            <div className="MenuBArTitleandCNTone">
                              <span className="OURCMP">My Rewards</span>
                              <span className="OURCMPCNT1">
                                View all the rewards that you have earned so far
                              </span>
                            </div>
                          </div>
                        </div>

                        <hr />
                      </button>
                    </li>

                    <div class="dropdown">
                      <button
                        class="btn btnBorderNone"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="AllMenuBTN">
                          <div className="AlignmentofImgandCNT">
                            <img
                              className="LogoInMenuBAr"
                              src={LocationLog}
                              alt=""
                            />
                            <div className="MenuBArTitleandCNT">
                              <span className="OURCMP">Locate us</span>
                              <span className="OURCMPCNT">
                                Find a Bajaj Finserv branch near u
                              </span>
                            </div>
                          </div>
                          <img
                            className="DownArrow"
                            src="https://cdn-icons-png.flaticon.com/512/892/892627.png"
                            alt=""
                          />
                        </div>
                        <hr />
                      </button>

                      <ul class="dropdown-menu DRBORder">
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Branches
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            EMI Network Partner Stores
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Hospitals & Wellness Centres
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Insurance Network Hospitals
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Collection Centres
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                      </ul>
                    </div>

                    <li class="nav-item">
                      <button
                        class="btn btnBorderNone"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="AllMenuBTN1">
                          <div className="AlignmentofImgandCNTone">
                            <img className="LogoInMenuBAr" src={Offer} alt="" />
                            <div className="MenuBArTitleandCNTone">
                              <span className="OURCMP">
                                Check pre-approved offers
                              </span>
                              <span className="OURCMPCNT1">
                                Enter your basic details to see our exclusive
                                offer
                              </span>
                            </div>
                          </div>
                        </div>

                        <hr />
                      </button>
                    </li>

                    <div class="dropdown">
                      <button
                        class="btn btnBorderNone"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="AllMenuBTN">
                          <div className="AlignmentofImgandCNT">
                            <img
                              className="LogoInMenuBAr"
                              src={Download}
                              alt=""
                            />
                            <div className="MenuBArTitleandCNT">
                              <span className="OURCMP">Download our apps</span>
                              <span className="OURCMPCNT">
                                Downld app from Play/App Store
                              </span>
                            </div>
                          </div>
                          <img
                            className="DownArrow"
                            src="https://cdn-icons-png.flaticon.com/512/892/892627.png"
                            alt=""
                          />
                        </div>
                        <hr />
                      </button>

                      <ul class="dropdown-menu DRBORder">
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Finserv
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                        <li>
                          <a class="dropdown-item DropDownMenucnt" href="#">
                            Bajaj Finserv Health
                          </a>
                        </li>
                        <hr className="Hrlinindropmenu" />
                      </ul>
                    </div>

                    <div className="CopyrightTwo">
                      <div className="CopyrightOne">
                        <p className="CopyRight">
                          © Bajaj Finance Ltd. 1987-2023. © Bajaj Finserv Ltd.
                          2007-2023. All rights reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

            <div className="DivOfLogo">
              <img
                className="Logo"
                src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/bfl-logo-mobile-v6?scl=1&fmt=png-alpha"
                alt=""
              />
            </div>
          </div>

          <div className="Adivforborder">
            <div className="SearchBarBg">
              <div>
                <input
                  className="InputSearch"
                  placeholder="Search bajajfinserv.in"
                  type="search"
                />
              </div>
              <div className="SearchbarDivIcoonn">
                <img className="SearchiconLW" src={Search} alt="" />
              </div>
            </div>
          </div>

          <div className="Hovericondiv">
            <div className="EMIdiv">
              <img className="EMIicon" src={EMI} alt="" />
              <span className="EMItext">EMI Card</span>
            </div>

            <div>
              <div class="dropdown">
                <button
                  class="btn BtnColorForNotification NotificationBTN DropDownalertBTN"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="AlignmentofNotification">
                    <img
                      className="Notificationicon"
                      src={Notification}
                      alt=""
                    />
                    <div>
                      <span className="Alerttext">Alert Message </span>
                      <img className="DropArrowdownWD" src={DownArrow} alt="" />
                    </div>
                  </div>
                </button>

                <ul class="dropdown-menu ForwdhgClour">
                  <li>
                    <a class="dropdown-item NotificationNOn" href="#">
                      No Notification Message
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="EMIdiv">
              <img className="Carticon" src={Cart} alt="" />
              <span className="EMItext">Cart</span>
            </div>

            <div class="btn-group">
              <button
                type="button"
                class="btn BtnColorForNotification NotificationBTN DropDownalertBTN"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <div className="AlignmentofNotification">
                  <img className="Notificationicon" src={Account} alt="" />
                  <div>
                    <span className="Alerttext">My Account </span>
                    <img className="DropArrowdownWD" src={DownArrow} alt="" />
                  </div>
                </div>
              </button>
              <ul class="dropdown-menu dropdown-menu-lg-end ForwdhgClourOne">
                <li>
                  <a class="ForDecaration" href="#">
                    <div className="DarkBlueBG">
                    <Link className="LINkDecatrationLine" to={"./SignIN"}>
                      <div className="SignBG">

                        <h6 className="SignInColor">SIGN-IN</h6>
                        
                      </div>
                      </Link>
                    </div>
                  </a>
                </li>
                <div className="MyAcountDeatilsDiv">
                  <li>
                    <a class="dropdown-item ViewCNT" href="#">
                      View Online Details
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item ViewCNT" href="#">
                      Raise a Request
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item ViewCNT" href="#">
                      Update Contact Details
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item ViewCNTT" href="#">
                      View Payment Reports
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div class="btn-group">
              <button
                type="button"
                class="btn BtnColorForNotification NotificationBTN DropDownalertBTN"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <div className="AlignmentofNotification">
                  <img className="Notificationicon" src={Partners} alt="" />
                  <div>
                    <span className="Alerttext">Partners </span>
                    <img className="DropArrowdownWD" src={DownArrow} alt="" />
                  </div>
                </div>
              </button>
              <ul class="dropdown-menu dropdown-menu-lg-end ForwdhgClourTwo">
                <li>
                  <button class="BTNBgForpartnerIcon" type="button">
                    <div className="finalFIVEpartnersDiv">
                      <div className="ThreeIconOfpartnersAlighnFlex">
                        <div className="iconofpartnerwithText">
                          <img
                            className="PartnerIconThree"
                            src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/debt-management-service-v5?scl=1&fmt=png-alpha"
                            alt=""
                          />
                          <span className="TextForIconPartners">
                            Debt <br /> Management <br /> Partner
                          </span>
                        </div>
                        <div className="iconofpartnerwithText">
                          <img
                            className="PartnerIconThree"
                            src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/emi-network-partners-v5?scl=1&fmt=png-alpha"
                            alt=""
                          />
                          <span className="TextForIconPartners">
                            EMI <br /> Network <br /> Partner
                          </span>
                        </div>
                        <div className="iconofpartnerwithText">
                          <img
                            className="PartnerIconThree"
                            src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/fixed-desposit-v5?scl=1&fmt=png-alpha"
                            alt=""
                          />
                          <span className="TextForIconPartners">
                            Fixed <br /> Deposit <br /> Partner
                          </span>
                        </div>
                      </div>
                      <div className="ThreeIconOfpartnersAlighnFlexColume">
                        <div className="iconofpartnerwithTextONE">
                          <img
                            className="PartnerIconThree"
                            src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/merchant-qr-image-2883183?scl=1&fmt=png-alpha"
                            alt=""
                          />
                          <span className="TextForIconPartners">
                            Become a <br /> Merchant
                          </span>
                        </div>
                        <div className="iconofpartnerwithTextONE">
                          <img
                            className="PartnerIconThree"
                            src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/partner-one?scl=1&fmt=png-alpha"
                            alt=""
                          />
                          <span className="TextForIconPartners">
                            Partners <br /> Sign in
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="SecOndNAvBArAlignAllItemsfelx">
        <div className="TouchNavBArTwo">
          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  Loans
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">All Loans</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Personal Loan</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Insta Personal Loan</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Business Loan</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Gold Loan</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Loans for Doctors</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Medical Equipment Finance</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Loans for CAs</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Commercial Lending</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Business Loan</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Home Loan</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Loan Against Property</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Lease Rental Discounting</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Loan Against Securities</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Two-wheeler Loan</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">New Car Finance</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Gold Loan</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Used Car Finance</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Loan Against Car</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">
                      Car Loan Balance Transfer and Top-up
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  onEMI
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Electronics</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Two-wheelers</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Lifestyle</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Travel</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Offers & Promotions</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Shop on Ecommerce</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  Bajaj.
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Air Conditioners</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Smartphones</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Air Cooler</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Refrigerators</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Two-wheelers</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">LED TVs</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Washing Machines</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Smartwatches</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Water Purifiers</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Mattresses</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Furniture</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Cycles</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Laptops</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Kitchen Appliances</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Fintness Equipment</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Watches</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Audio Devices</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Camera Accessories</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  Cards
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">All Cards</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Insta EMI Card</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Health EMI Network Card</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">
                      Bajaj Finserv RBL Bank SuperCard
                    </a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">
                      Bajaj Finserv DBS Bank Credit Card
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  Investments
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">All investments</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Fixed deposit</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Systematic Deposit Plan</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Mutual Funds</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Stock Trading</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Partner Portal</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Become Our Partner</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  Insurance
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Insurance Mall</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Health Insurance</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Car Insurance</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Bike Insurance</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Pokcket Subscription</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Pocket Insurance</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Appliances Extended Warranty</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Life Insurance</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Manage your Insurance</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  Payments
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Pay Your EMI</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Manage SuperCard Bill</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Bills & Recharges</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Download Wallet</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Set UPI ID</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Repay your Loans</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  Offers
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">All offers</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Pre-approved</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Loans</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Bajaj Mall</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Cards</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Insurance</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  Locate
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Branches</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">EMI Network Partner Stores</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Hospitals & Wellness Centres</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Insurance Network Hospital</a>
                  </li>
                  <li
                    id="menu-item-14"
                    class="menu-item menu-item-type-post_type 
      menu-item-object-page menu-item-14"
                  >
                    <a href="/sample-page-2/">Collection Centres</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="wrapper">
            <ul class="main-menu">
              <li
                id="menu-item-16"
                class="menu-item menu-item-type-custom menu-item-object-custom 
  menu-item-has-children menu-item-16"
              >
                <a className="LinkOFNAvtwo" href="#">
                  Services
                </a>
                <ul class="sub-menu">
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">All Service Guides</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Raise a Request</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Manage your Profile</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Manage your Mandate</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Repay your Loans</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Manage your Cards</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Manage your Investments</a>
                  </li>
                  <li
                    id="menu-item-7"
                    class="menu-item menu-item-type-post_type menu-item-object-page 
      menu-item-7"
                  >
                    <a href="/sample-page/">Manage your Insurance</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="DownloadAndFeedbackDiv">
          <div className="FeedBackDiv">
            <img
              className="Feedbackimg"
              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/give-feedback-v2?scl=1&fmt=png-alpha"
              alt=""
            />
            <h6 className="Feedbacktext">Feedback</h6>
          </div>
          <div className="DownLoadDiv">
            <img
              className="Feedbackimg"
              src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/download-the-app-v1?scl=1&fmt=png-alpha"
              alt=""
            />
            <h6 className="Downloadtext">Download the app</h6>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default NavBar;
