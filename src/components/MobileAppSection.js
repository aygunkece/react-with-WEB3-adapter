function MobileAppSection() {
    return (<section className="features_section install_app padding-t-2 margin-t-10">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 mx-auto">
                    <div className="images" data-aos="fade-up" data-aos-delay="0">
                        <img src="../../assets/img/crypto/00415.png" width="300"/>
                    </div>
                </div>

                <div className="col-lg-6 ml-auto mt-4 mt-lg-0">
                    <div className="title_sections">
                        <div className="before_title">
                            <span>Rakon. Mobile</span>
                            <span>App 👌 </span>
                        </div>
                        <h2 className="c-white">
                            Install And Start Making Money Automatically
                        </h2>
                        <p>
                            All Rakon. users with at least 1 token can install the
                            Rakon. app and start making money from unused SMS messages
                            automatically, all while the app is operating in the
                            background.
                        </p>
                        <ul className="list-group">
                            <li className="list-group-item media border-0">
                                <i className="tio security mr-2"></i>
                                <div className="media-body">
                                    Secure transfers with verified Casinos.
                                </div>
                            </li>
                            <li className="list-group-item media border-0">
                                <i className="tio credit_card_outlined mr-2"></i>
                                <div className="media-body">
                                    Easily buy and sell CLV within the wallet
                                </div>
                            </li>
                            <li className="list-group-item media border-0">
                                <i className="tio saving_outlined mr-2"></i>
                                <div className="media-body">
                                    Pay as many as you want
                                </div>
                            </li>
                        </ul>
                        <div className="app_smartphone mt-4">
                            <div className="btn--app mb-3 mb-sm-0">
                                <a className="media" href="#" target="_blank">
                                    <div className="icon dev-apple">
                                        <i className="tio c-white apple"></i>
                                    </div>
                                    <div className="media-body txt">
                                        <div>
                                            <span>Download</span>
                                        </div>
                                        <h4>App Store</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="btn--app">
                                <a className="media" href="#" target="_blank">
                                    <div className="icon dev-google">
                                        <i className="tio c-magenta google_play"></i>
                                    </div>
                                    <div className="media-body txt">
                                        <div>
                                            <span>Download</span>
                                        </div>
                                        <h4>App Store</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="device_others margin-t-2">
                            <a href="#" className="d-block text-decoration-none">
                                <span>Download</span>
                                <p>
                                    Windows 8,9,10
                                </p>
                            </a>
                            <div className="soon">*Mac app coming soon</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default MobileAppSection