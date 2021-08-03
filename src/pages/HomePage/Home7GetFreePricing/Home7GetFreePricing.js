import React from 'react'
import '../../../assets/styles/style.css'
import '../../../assets/styles/style_grid.css'
import './style_get_free_pricing.css'

const Home7GetFreePricing = () => (
    <div className="get-free-pricing-background">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-xs-12">
                    <div className="get-free-pricing-title">
                        Get free pricing
                    </div>
                    <div className="get-free-pricing-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
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
                                <input type="text" className="heigth-input" />
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="get-free-pricing-input-frame">
                                <div>E-mail address:</div>
                                <input type="text" className="heigth-input" />
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="get-free-pricing-input-frame">
                                <div>Subject:</div>
                                <input type="text" className="heigth-input" />
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
)

export default Home7GetFreePricing
