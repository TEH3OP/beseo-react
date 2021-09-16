import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import '../../assets/styles/style.css'
import './title_carousel.css'

const TitleCarousel = () => {
    return (
        <div className="carousel-page-background">
            <div className="container carousel-container">
                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    <div>
                        <img src="images/slider_seo-logo.jpg" />
                        <p className="legend">SEO is your way to success</p>
                    </div>
                    <div>
                        <img src="images/slider_search-engine-optimization.jpg" />
                        <p className="legend">
                            Our methods of achieving the goal
                        </p>
                    </div>
                    <div>
                        <img src="images/slider_digital-marketing.jpg" />
                        <p className="legend">
                            Traffic analysis and performance improvement
                        </p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default TitleCarousel
