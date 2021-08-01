import React from 'react'
import '../../styles/style.css'
import '../../styles/style_grid.css'
import './style_boost_your_pos.css'
import './style_customers.css'
import './style_get_free_pricing.css'
import './style_love_us.css'
import './style_offer_page.css'
import './style_result_page.css'
import './style_the_best.css'
import './style_welcome_page.css'

const Main = () => {
    return (
        <main>
            <div className="welcome-page-background">
                <div className="content-welcome-page">
                    <div className="welcome-page-text">
                        We are SEO/SEM agency.
                    </div>
                    <div className="welcome-page-text">
                        We can make your business visible.
                    </div>
                    <img
                        className="welcome-page-image-chart"
                        src="pics/chart.png"
                        alt="chart"
                    />
                    <img
                        className="welcome-page-image-right"
                        src="pics/home_seo_slider_woman.png"
                        alt="Woman"
                    />
                </div>
            </div>
            <div className="result-page-background">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <img
                                className="result-page-image-browser"
                                src="pics/home_seo_browser.png"
                                alt="browser"
                            />
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <div className="result-page-title">
                                Pay only for result
                            </div>
                            <div className="result-page-frame">
                                <div className="result-page-icon result-page-icon1"></div>
                                <div>
                                    <div className="result-page-decription-title">
                                        Attract more customers
                                    </div>
                                    <div className="result-page-decription">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Consequatur delectus
                                        eveniet corrupti at ad sapiente, maxime,
                                        voluptas recusandae facilis magni
                                        reprehenderit debitis accusantium illo
                                        impedit
                                    </div>
                                </div>
                            </div>
                            <div className="result-page-frame">
                                <div className="result-page-icon result-page-icon2"></div>
                                <div>
                                    <div className="result-page-decription-title">
                                        Start with any budget
                                    </div>
                                    <div className="result-page-decription">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Consequatur delectus
                                        eveniet corrupti at ad sapiente, maxime,
                                        voluptas recusandae facilis magni
                                        reprehenderit debitis accusantium illo
                                        impedit
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="result-page-button">
                                Get free pricing
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container offer-page-background">
                    <div className="offer-page-title">What we offer?</div>
                    <div className="row offer-page-margin-top">
                        <div className="col-sm-3 col-xs-12 offer-page-right-line">
                            <div className="offer-page-icon offer-page-icon1"></div>
                            <div className="offer-page-description-title">
                                Optimizations
                            </div>
                            <div className="description">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Magni laborum quibusdam ut
                                minus commodi
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-12 offer-page-right-line">
                            <div className="offer-page-icon offer-page-icon2"></div>
                            <div className="offer-page-description-title">
                                SEO Audits
                            </div>
                            <div className="description">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Magni laborum quibusdam ut
                                minus commodi
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-12 offer-page-right-line">
                            <div className="offer-page-icon offer-page-icon3"></div>
                            <div className="offer-page-description-title">
                                Best links techniques
                            </div>
                            <div className="description">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Magni laborum quibusdam ut
                                minus commodi
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <div className="offer-page-icon offer-page-icon4"></div>
                            <div className="offer-page-description-title">
                                Quick support
                            </div>
                            <div className="description">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Magni laborum quibusdam ut
                                minus commodi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="the-best-background">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-xs-12">
                            <div className="the-best-title">
                                We work for the best
                            </div>
                            <div className="the-best-description">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Sint, odit blanditiis autem
                                dolorem, earum itaque libero accusantium
                                sapiente assumenda dolores nostrum. Fugit vel
                                tenetur sapiente nulla? Consequuntur voluptate
                                excepturi fugit.
                            </div>
                            <a href="#" className="the-best-button">
                                See case studies
                            </a>
                        </div>
                        <div className="col-sm-7 col-xs-12">
                            <img
                                src="pics/home_seo_logos.png"
                                alt="Logos"
                                className="the-best-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="customers-background">
                <div className="container">
                    <div className="customers-title">
                        Meet our customers and read their opinions
                    </div>
                    <div className="customers-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt at, inventore
                    </div>
                    <div className="customers-triangle"></div>
                </div>
            </div>
            <div className="customers-background-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div className="customers-human-frame">
                                <img
                                    src="pics/home_seo_client1.jpg"
                                    alt="Client 1"
                                />
                                <div className="customers-human-name-title">
                                    Maya Thomas
                                    <span className="customers-human-occupation-title">
                                        Photographer
                                    </span>
                                </div>
                                <div className="description">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Reprehenderit quo
                                    aspernatur consectetur assumenda culpa,
                                    minus labore ratione
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="customers-human-frame">
                                <img
                                    src="pics/home_seo_client2.jpg"
                                    alt="Client 2"
                                />
                                <div className="customers-human-name-title">
                                    Maya Thomas
                                    <span className="customers-human-occupation-title">
                                        Musician
                                    </span>
                                </div>
                                <div className="description">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Reprehenderit quo
                                    aspernatur consectetur assumenda culpa,
                                    minus labore ratione
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="customers-human-frame">
                                <img
                                    src="pics/home_seo_client3.jpg"
                                    alt="Client 3"
                                />
                                <div className="customers-human-name-title">
                                    Maya Thomas
                                    <span className="customers-human-occupation-title">
                                        Doctor
                                    </span>
                                </div>
                                <div className="description">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Reprehenderit quo
                                    aspernatur consectetur assumenda culpa,
                                    minus labore ratione
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="love-us-background">
                <div className="container">
                    <div className="love-us-main-title">
                        Why customers love us?
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div className="love-us-grid-frame">
                                <span className="material-icons">
                                    signal_cellular_alt
                                </span>
                                <div>
                                    <div className="love-us-grid-title">
                                        High positions
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Modi quidem voluptatem
                                        quia!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="love-us-grid-frame">
                                <span className="material-icons">
                                    {' '}
                                    storage{' '}
                                </span>
                                <div>
                                    <div className="love-us-grid-title">
                                        Long term effects
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Modi quidem voluptatem
                                        quia!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="love-us-grid-frame">
                                <span className="material-icons"> people </span>
                                <div>
                                    <div className="love-us-grid-title">
                                        Qualified workers
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Modi quidem voluptatem
                                        quia!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div className="love-us-grid-frame">
                                <span className="material-icons">
                                    question_answer
                                </span>
                                <div>
                                    <div className="love-us-grid-title">
                                        Online support
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Modi quidem voluptatem
                                        quia!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="love-us-grid-frame">
                                <span className="material-icons">
                                    perm_data_setting
                                </span>
                                <div>
                                    <div className="love-us-grid-title">
                                        Powerful tools
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Modi quidem voluptatem
                                        quia!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="love-us-grid-frame">
                                <span className="material-icons">
                                    business_center
                                </span>
                                <div>
                                    <div className="love-us-grid-title">
                                        Confidential agreement
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Modi quidem voluptatem
                                        quia!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="boost-your-pos-background">
                <div className="container">
                    <div className="boost-your-pos-frame">
                        <div>Boost your position in</div>
                        <img src="pics/home_seo_google.png" alt="Google" />
                        <div>or</div>
                        <img src="pics/home_seo_bing.png" alt="Bing" />
                    </div>
                </div>
            </div>
            <div className="get-free-pricing-background">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div className="get-free-pricing-title">
                                Get free pricing
                            </div>
                            <div className="get-free-pricing-description">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </div>
                            <div className="get-free-pricing-call-us-at">
                                Or call us at:
                            </div>
                            <div className="get-free-pricing-tel-num-title">
                                +38(012)3456789
                            </div>
                        </div>
                        <div className="col-sm-8 col-xs-12">
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <div className="get-free-pricing-input-frame">
                                        <div>Name:</div>
                                        <input
                                            type="text"
                                            className="heigth-input"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div className="get-free-pricing-input-frame">
                                        <div>E-mail address:</div>
                                        <input
                                            type="text"
                                            className="heigth-input"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div className="get-free-pricing-input-frame">
                                        <div>Subject:</div>
                                        <input
                                            type="text"
                                            className="heigth-input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="get-free-pricing-input-frame">
                                <div>Message:</div>
                                <input type="text" className="heigth-input2" />
                            </div>
                            <button className="get-fix-pricing-form-button">
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
