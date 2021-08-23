import React from 'react'
import '../../../assets/styles/style.css'
import '../../../assets/styles/style_grid.css'
import './style_welcome_page.css'

const Welcome = () => (
    <div className="welcome-page-background">
        <div className="container">
            <div className="content-welcome-page">
                <div className="welcome-page-text">We are SEO/SEM agency.</div>
                <div className="welcome-page-text">
                    We can make your business visible.
                </div>
                <img
                    className="welcome-page-image-chart"
                    src="images/chart.png"
                    alt="chart"
                />
                <img
                    className="welcome-page-image-right"
                    src="images/home_seo_slider_woman.png"
                    alt="Woman"
                />
            </div>
        </div>
    </div>
)

export default Welcome
