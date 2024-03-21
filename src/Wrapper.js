import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import SidebarMenu from "./components/SidebarMenu";
import BannerSection from "./components/BannerSection";
import ProductSection from "./components/ProductSection";
import MobileAppSection from "./components/MobileAppSection";
import PrivacyAndTokenSection from "./components/PrivacyAndTokenSection";

function Wrapper() {
  return (
        <div id="wrapper">
          <div id="content">
            <div id="particles-js"></div>
              <Header/>
              <SidebarMenu/>
            <main data-spy="scroll" data-target="#navbar-example2" data-offset="0">
              <BannerSection/>

              <ProductSection/>
             <MobileAppSection/>
              <PrivacyAndTokenSection/>

              <section className="roadmap_secrtion padding-t-2 margin-t-10" id="Roadmap">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-lg-6 text-center">
                      <div className="title_sections">
                        <h2 className="c-white">Road Map</h2>
                        <p className="c-currency-p">
                          Any Successful Project Needs A Plan Of Action In Place In
                          Order To Ensure That It Sees Through The Finish Line.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-box">

                    <div className="item_timeline">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="details active">
                            <div className="data">
                              <time>Jan 2019</time>
                              <h4>Blockchain Node software development</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="details active">
                            <div className="data">
                              <time>Feb 2020</time>
                              <h4>Creation of the first Masternodes</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="details active">
                            <div className="data">
                              <time>Mar 2020</time>
                              <h4>Atomic Swap <br/>ERC-20/LKSCOIN</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="details active">
                            <div className="data">
                              <time>Jun 2020</time>
                              <h4>
                                Goal of 2000<br/>
                                Masternodes
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item_timeline itemTwo">
                      <div className="row reverse">
                        <div className="col-md-3">
                          <div className="details active">
                            <div className="data">
                              <time>Jul 2020</time>
                              <h4>
                                Pre-mining 49% <br/>
                                of token
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="details active">
                            <div className="data">
                              <time>Aug 2020</time>
                              <h4>
                                Goal of the 400 <br/>
                                masternodes
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="details active">
                            <div className="data">
                              <time>Oct 2020</time>
                              <h4>
                                LKS can be deposited in the social networks
                                integrated
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="details">
                            <div className="data">
                              <time>Nov 2020</time>
                              <h4>Blockchain Node software development</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item_timeline itemThree">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="details">
                            <div className="data">
                              <time>Dec 2020</time>
                              <h4>Creation of the first Masternodes</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="details">
                            <div className="data">
                              <time>Jan 2021</time>
                              <h4>Net-Zero Display home with HEPEK integration.</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="faq_section faq_demodark padding-t-2 margin-t-10" id="FAQ">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-md-8 col-lg-6 text-center">
                      <div className="title_sections">
                        <h2 className="c-white">Have Any Question ?</h2>
                        <p className="c-currency-p">
                          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
                          Sed Eiu Lorem Ipsum Dolor Lorem Ipsum Dolor
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="block_faq">
                    <div className="accordion" id="accordionExample">
                      <div className="row justify-content-md-center">
                        <div className="col-md-10 col-lg-5">
                          <div className="card">
                            <div className="card-header active" id="headingOne">
                              <h3 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                  What is Rakon. Coin?
                                </button>
                              </h3>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                 data-parent="#accordionExample">
                              <div className="card-body">
                                <p>
                                  Serenity Is Multi-Faceted Blockchain Based
                                  Ecosystem, Energy Retailer For The People,
                                  Focusing On The Promotion Of Sustainable Living,
                                  Renewable Energy Production And Smart Energy Grid
                                  Utility Services.
                                </p>
                                <p>
                                  We Aim To Become The Incubator For New Renewable
                                  Energy-Related Projects By Using The Power Of
                                  Crowd.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="headingTwo">
                              <h3 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseTwo"
                                        aria-expanded="true" aria-controls="collapseTwo">
                                  Can I have team members on different plans?
                                </button>
                              </h3>
                            </div>

                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                 data-parent="#accordionExample">
                              <div className="card-body">
                                <p>
                                  Serenity Is Multi-Faceted Blockchain Based
                                  Ecosystem, Energy Retailer For The People,
                                  Focusing On The Promotion Of Sustainable Living,
                                  Renewable Energy Production And Smart Energy Grid
                                  Utility Services.
                                </p>
                                <p>
                                  We Aim To Become The Incubator For New Renewable
                                  Energy-Related Projects By Using The Power Of
                                  Crowd.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="headingThree">
                              <h3 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseThree"
                                        aria-expanded="true" aria-controls="collapseThree">
                                  How this technology works?
                                </button>
                              </h3>
                            </div>

                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                 data-parent="#accordionExample">
                              <div className="card-body">
                                <p>
                                  Serenity Is Multi-Faceted Blockchain Based
                                  Ecosystem, Energy Retailer For The People,
                                  Focusing On The Promotion Of Sustainable Living,
                                  Renewable Energy Production And Smart Energy Grid
                                  Utility Services.
                                </p>
                                <p>
                                  We Aim To Become The Incubator For New Renewable
                                  Energy-Related Projects By Using The Power Of
                                  Crowd.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="headingFour">
                              <h3 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseFour"
                                        aria-expanded="true" aria-controls="collapseFour">
                                  What is the comunity benefit?
                                </button>
                              </h3>
                            </div>

                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                 data-parent="#accordionExample">
                              <div className="card-body">
                                <p>
                                  Serenity Is Multi-Faceted Blockchain Based
                                  Ecosystem, Energy Retailer For The People,
                                  Focusing On The Promotion Of Sustainable Living,
                                  Renewable Energy Production And Smart Energy Grid
                                  Utility Services.
                                </p>
                                <p>
                                  We Aim To Become The Incubator For New Renewable
                                  Energy-Related Projects By Using The Power Of
                                  Crowd.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-10 col-lg-5">
                          <div className="card">
                            <div className="card-header" id="headingFive">
                              <h3 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseFive"
                                        aria-expanded="true" aria-controls="collapseFive">
                                  What payment types do you accept?
                                </button>
                              </h3>
                            </div>

                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                 data-parent="#accordionExample">
                              <div className="card-body">
                                <p>
                                  Serenity Is Multi-Faceted Blockchain Based
                                  Ecosystem, Energy Retailer For The People,
                                  Focusing On The Promotion Of Sustainable Living,
                                  Renewable Energy Production And Smart Energy Grid
                                  Utility Services.
                                </p>
                                <p>
                                  We Aim To Become The Incubator For New Renewable
                                  Energy-Related Projects By Using The Power Of
                                  Crowd.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="headingSix">
                              <h3 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseSix"
                                        aria-expanded="true" aria-controls="collapseSix">
                                  Website reponse taking time, how to improve?
                                </button>
                              </h3>
                            </div>

                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                                 data-parent="#accordionExample">
                              <div className="card-body">
                                <p>
                                  Serenity Is Multi-Faceted Blockchain Based
                                  Ecosystem, Energy Retailer For The People,
                                  Focusing On The Promotion Of Sustainable Living,
                                  Renewable Energy Production And Smart Energy Grid
                                  Utility Services.
                                </p>
                                <p>
                                  We Aim To Become The Incubator For New Renewable
                                  Energy-Related Projects By Using The Power Of
                                  Crowd.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="headingSeven">
                              <h3 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseSeven"
                                        aria-expanded="true" aria-controls="collapseSeven">
                                  How to contact with Customer Service?
                                </button>
                              </h3>
                            </div>

                            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven"
                                 data-parent="#accordionExample">
                              <div className="card-body">
                                <p>
                                  Serenity Is Multi-Faceted Blockchain Based
                                  Ecosystem, Energy Retailer For The People,
                                  Focusing On The Promotion Of Sustainable Living,
                                  Renewable Energy Production And Smart Energy Grid
                                  Utility Services.
                                </p>
                                <p>
                                  We Aim To Become The Incubator For New Renewable
                                  Energy-Related Projects By Using The Power Of
                                  Crowd.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="team_section padding-t-2 margin-t-12" id="Team">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-md-8 col-lg-6 text-center">
                      <div className="title_sections">
                        <h2 className="c-white">Rakon. Team</h2>
                        <p className="c-currency-p">
                          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
                          Sed Eiu Lorem Ipsum Dolor Lorem Ipsum Dolor
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="switch_team">

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                           role="tab"
                           aria-controls="pills-home" aria-selected="true">Team Member</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                           role="tab"
                           aria-controls="pills-profile" aria-selected="false">Founders</a>
                      </li>
                    </ul>

                    <div className="particl_colors">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="tab-content content_team" id="pills-tabContent">
                      <div className="tab-pane itemperson fade show active" id="pills-home" role="tabpanel"
                           aria-labelledby="pills-home-tab">
                        <div className="row">
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/01.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Brian M. Williams</h4>
                                <p>
                                  CEO Founder
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/07.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Jerry N. White</h4>
                                <p>
                                  President
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/15.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Laurie Cunningham</h4>
                                <p>
                                  Secretary & Founder
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/08.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Joseph Manders</h4>
                                <p>
                                  Project Manager
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/04.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Janie A. Cain</h4>
                                <p>
                                  Head Of Marketing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/03.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>James T. Ridgley</h4>
                                <p>
                                  Full Stack Developer
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane itemperson fade" id="pills-profile" role="tabpanel"
                           aria-labelledby="pills-profile-tab">
                        <div className="row">
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/02.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Brian M. Williams</h4>
                                <p>
                                  CEO Founder
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/16.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Jerry N. White</h4>
                                <p>
                                  President
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/06.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Laurie Cunningham</h4>
                                <p>
                                  Secretary & Founder
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/15.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Joseph Manders</h4>
                                <p>
                                  Project Manager
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/03.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>Janie A. Cain</h4>
                                <p>
                                  Head Of Marketing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="av_person">
                              <div className="avatar🐱">
                                <img className="rounded-circle" src="../../assets/img/persons/05.png"/>
                                <a href="#" target="_blank" className="social">
                                  <i className="tio linkedin_square"></i>
                                </a>
                              </div>
                              <div className="info_name">
                                <h4>James T. Ridgley</h4>
                                <p>
                                  Full Stack Developer
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              <section className="contact_section padding-t-2" id="Contact">
                <img className="img-fluid" src="../../assets/img/crypto/02.png"/>
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-md-8 col-lg-3 text-center">
                      <div className="title_sections">
                        <h2 className="c-white">Contact</h2>
                        <p className="c-currency-p">
                          Lorem Ipsum Dolor Sit Amet Consectetur
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="form-row justify-content-md-center margin-t-2">
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group dark-form">
                        <input type="text" className="form-control" placeholder="Your name"/>
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group dark-form">
                        <input type="email" className="form-control" placeholder="Your email address"/>
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6 col-lg-4">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" checked id="customRadioInline1" name="customRadioInline1"
                               className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="customRadioInline1">Send me Rakon.
                          Token</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline2" name="customRadioInline1"
                               className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="customRadioInline2">More Information</label>
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group dark-form">
                        <textarea className="form-control" placeholder="type something here..." rows="3"></textarea>
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6 col-lg-4">
                      <div className="button--click">
                        <button type="button" className="btn btn-token scale c-gradient">
                          Say Hello 👋
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="newsletter_section padding-t-2 margin-t-10">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-md-8 col-lg-5 text-center">
                      <div className="title_sections margin-b-3">
                        <h2 className="c-white">Get Started Mining now!</h2>
                        <p className="c-currency-p">
                          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
                          Sed Eiusmod Tempor Incididunt Labore Dolore
                        </p>
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6 col-lg-4 d-flex justify-content-center">
                      <div className="col-md-11">
                        <div className="form-group dark-form">
                          <input type="email" className="form-control" placeholder="Enter email address"/>
                        </div>
                        <div className="button--click">
                          <button type="button" className="btn btn-token btn_xl_primary scale c-gradient">
                            Get Access
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </main>

          </div>

          <footer className="footer_short theme_crypto padding-t-2 margin-t-10">
            <div className="container">
              <div className="row justify-content-md-center text-center">
                <div className="col-md-8">
                  <a className="logo c-white" href="crypto-dark.html">
                    <img src="../../assets/img/logo.svg" alt=""/>
                  </a>
                  <div className="social--media">
                    <a href="#" className="btn so-link">
                      <i className="tio appstore"></i>
                    </a>
                    <a href="#" className="btn so-link">
                      <i className="tio github"></i>
                    </a>
                    <a href="#" className="btn so-link">
                      <i className="tio instagram"></i>
                    </a>
                    <a href="#" className="btn so-link">
                      <i className="tio google"></i>
                    </a>
                    <a href="#" className="btn so-link">
                      <i className="tio twitter"></i>
                    </a>
                    <a href="#" className="btn so-link">
                      <i className="tio facebook_square"></i>
                    </a>
                  </div>
                  <div className="other--links">
                    <a href="#">White paper</a>
                    <a href="#">Support</a>
                    <a href="#">API</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                  </div>
                  <div className="opyright">
                    <p>
                      © 2020
                      <a href="https://themeforest.net/user/orinostu" target="_blank">OrinoStu.</a>
                      All Right Reseved
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img className="img-fluid img-footer" src="../../assets/img/crypto/footer_grid.png"/>
          </footer>

          <div className="prgoress_indicator">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
            </svg>
          </div>


          <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center">
            <div className="toast toast_demo" id="myTost" role="alert" aria-live="assertive" aria-atomic="true"
                 data-animation="true" data-autohide="false">
              <div className="toast-body">
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                  <i className="tio clear"></i>
                </button>
                <h5>Hi there 👋</h5>
                <p>We are glad you joined us <a href="#">Join us</a></p>
              </div>
            </div>
          </div>


          <section className="loading_overlay">
            <div className="loader_logo">
              <img className="logo" src="../../assets/img/logo.svg"/>
            </div>
          </section>

          <div className="modal mdllaccount fade" id="mdllLogin" tabIndex="-1" role="dialog"
               aria-labelledby="exampleModalLabel"
               aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <i className="tio clear"></i>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form_account">
                    <div className="head_account">
                      <div className="img_profile">
                        <img src="../../assets/img/gif/avatar_01.jpg"/>
                      </div>
                      <div className="title">
                        <h4>Rakon.</h4>
                        <p>
                          Welcome back again,<br/>
                          Please sign in
                        </p>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Email / Username</label>
                              <input type="email" className="form-control" placeholder="E-mail / Username"/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-1 --password" id="show_hide_password">
                              <label>Password</label>
                              <div className="input-group">
                                <input type="password" className="form-control" data-toggle="password"
                                       placeholder="+6 Characters"
                                       required=""/>
                                <div className="input-group-prepend hide_show">
                                  <a href=""><span className="input-group-text tio hidden_outlined"></span></a>
                                </div>
                              </div>
                            </div>
                            <a href="#" className="btn mt-2 font-s-12 font-w-400 c-gray p-0">Forgot Passowrd?</a>
                          </div>
                          <div className="col-12 mt-4">
                            <a href="#" className="btn rounded-8 btn_xl_primary btn_login effect-letter">Sign in</a>
                            <a href="#" className="btn mt-3 font-s-15 c-dark text-center w-100">Create new account</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
  );
}

export default Wrapper;
