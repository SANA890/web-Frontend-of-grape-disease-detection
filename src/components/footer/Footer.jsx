import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="footer-wrappr section-bg3 wow fadeInup"
        style={{
          backgroundImage: "/assets/img/gallery/footer-bg.png !importantjpx",
        }}
        data-wow-delay="0.6s"
      >
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                <div className="single-footer-caption mb-50">
                  {/* logo  */}
                  <div className="footer-logo mb-25">
                    <Link to="/">
                      <img
                        src="/assets/img/logo/Grape Detection System (500 × 200 px) (500 × 130 px).png"
                        style={{ height: "60px" }}
                        alt=""
                      />
                    </Link>
                  </div>
                  <d iv className="header-area">
                    <div className="main-header main-header2">
                      <div className="menu-main d-flex align-items-center justify-content-start">
                        {/* Main-menu  */}
                        <div className="main-menu main-menu2">
                          <nav>
                            <ul>
                              <li>
                                <Link to="/">Home</Link>
                              </li>
                              <li>
                                <a href="#detect">Detect</a>
                              </li>
                              <li>
                                <a href="#benefits">Benefits</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </d>
                  {/* social  */}
                  <div className="footer-social mt-50">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="single-footer-caption">
                  <div className="footer-tittle mb-50">
                  
                  </div>
                  {/* Form  */}
                  <div className="footer-form">
                    <div id="mc_embed_signup">
                      <form
                        target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get"
                        className="subscribe_form relative mail_part"
                        novalidate="true"
                      >
                      
                        <div className="form-icon">
                          
                        </div>
                        <div className="mt-10 info"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-bottom area  */}
        <div className="footer-bottom-area">
          <div className="container overflow-hidden">
            <div className="footer-border">
              <div className="row">
                <div className="col-xl-10">
                  <div className="footer-copy-right">
                    <p>
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>
                      <Link to="/">Grape Detection System,</Link> All rights
                      reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
