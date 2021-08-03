import React from 'react'
import '../../../assets/styles/style.css'
import '../../../assets/styles/style_grid.css'
import './style_result_page.css'

const Home2Results = () => (
    <div className="result-page-background">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <img
                        className="result-page-image-browser"
                        src="images/home_seo_browser.png"
                        alt="browser"
                    />
                </div>
                <div className="col-sm-6 col-xs-12">
                    <div className="result-page-title">Pay only for result</div>
                    <div className="result-page-frame">
                        <div className="result-page-icon result-page-icon1"></div>
                        <div>
                            <div className="result-page-decription-title">
                                Attract more customers
                            </div>
                            <div className="result-page-decription">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Consequatur delectus eveniet
                                corrupti at ad sapiente, maxime, voluptas
                                recusandae facilis magni reprehenderit debitis
                                accusantium illo impedit
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
                                adipisicing elit. Consequatur delectus eveniet
                                corrupti at ad sapiente, maxime, voluptas
                                recusandae facilis magni reprehenderit debitis
                                accusantium illo impedit
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
)

export default Home2Results
