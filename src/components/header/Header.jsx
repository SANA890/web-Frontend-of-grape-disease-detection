import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [hideMobileMenu, setHideMobileMenu] = useState(true);
  function handleMobileMenuToggle() {
    setHideMobileMenu((state) => !state);
  }
  return (
    <>
      <header>
        <div className="header-area">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 d-flex align-items-center justify-content-between">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="/assets/img/logo/Grape Detection System (500 × 200 px) (500 × 130 px).png"
                        style={{ height: "60px" }}
                        alt=""
                      />
                    </Link>
                  </div>
                  <a
                    className="custom-hamburger-icon d-flex d-lg-none"
                    onClick={handleMobileMenuToggle}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <a href="#detect">detect</a>
                          </li>
                          <li>
                            <a href="#benefits">Benefits</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-right-btn f-right d-none d-lg-block ml-15">
                      <a href="#" className="btn header-btn">
                        Grape Detection System
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu">
                    <div
                      className="slicknav_nav d-block d-lg-none"
                      style={{
                        height: hideMobileMenu ? "0" : "150px",
                        paddingBlock: hideMobileMenu ? "0" : "19px",
                        transition: "all 300ms ease-in-out",
                      }}
                    >
                      <ul id="navigation" className="ml-0">
                        <li>
                          <Link onClick={handleMobileMenuToggle} to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <a onClick={handleMobileMenuToggle} href="#detect">
                            detect
                          </a>
                        </li>
                        <li>
                          <a onClick={handleMobileMenuToggle} href="#benefits">
                            Benefits
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
