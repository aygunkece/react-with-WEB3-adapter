function BannerSection() {
    return (<section className="demo_2 demo_4 banner_section" id="Vision">
        <div className="container">
            <div className="row justify-content-md-center text-center">
                <div className="col-md-10 col-lg-6">
                    <div className="banner_title">
                        <div className="offer">
                            <span className="c-white">35% Discount </span>
                            <span className="c-magenta">Purchase</span>
                        </div>
                        <h1 className="c-white">A Decentralized Rakon Gateway</h1>
                        <p>
                            The Rakon coin. project is designed to create a reliable
                            interconnected framework between Telecom companies
                        </p>
                    </div>
                    <div className="button--click">
                        <button type="button"
                                className="btn btn-token wd-140 btn_md_primary scale effect-letter c-gradient mb-3 mb-sm-0">
                            Get Token
                        </button>
                        <button type="button" className="btn btn-token wd-140 btn_md_primary effect-letter defalult">
                            WhitePaper
                        </button>
                    </div>
                </div>
                <div className="img__head">
                    <img className="illy" src="../../assets/img/crypto/crypto-head02.png"/>
                </div>
                <div className="col-md-10 col-lg-6">
                    <div className="Countdown-timer">
                        <div countdown data-date="Feb 15 2022 23:59:59">
                            <div className="item">
                                <span data-days>0</span>
                                <p>days</p>
                            </div>
                            <span className="cuot">:</span>
                            <div className="item">
                                <span data-hours>0</span>
                                <p>hours</p>
                            </div>
                            <span className="cuot">:</span>
                            <div className="item">
                                <span data-minutes>0</span>
                                <p>minutes</p>
                            </div>
                            <span className="cuot">:</span>
                            <div className="item">
                                <span data-seconds>0</span>
                                <p>seconds</p>
                            </div>
                        </div>
                    </div>
                    <div className="button--click margin-t-5">
                        <button type="button" className="btn btn_md_primary btn-token scale effect-letter c-gradient">
                            Pre Order Now
                        </button>
                        <div className="avaliable">
                            <span>Avaliable</span>
                            <span>150,140</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_currency padding-t-12">
                <div className="row justify-content-md-center">
                    <div className="col-md-10 col-lg-6 text-center">
                        <div className="title_sections mb-0">
                            <h2>Our Vision</h2>
                            <p>
                                A sustainable world, where every household is
                                organically fitted with a renewable energy production
                                and storage capabilities, being a small-scale energy
                                generator connected to the distributed grid.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default BannerSection