import React from 'react'
import '../../../assets/styles/style.css'
import '../../../assets/styles/style_grid.css'
import './style_the_best.css'

const Home4TheBest = () => (
    <div className="the-best-background">
        <div className="container">
            <div className="row">
                <div className="col-sm-5 col-xs-12">
                    <div className="the-best-title">We work for the best</div>
                    <div className="the-best-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sint, odit blanditiis autem dolorem, earum itaque
                        libero accusantium sapiente assumenda dolores nostrum.
                        Fugit vel tenetur sapiente nulla? Consequuntur voluptate
                        excepturi fugit.
                    </div>
                    <a href="#" className="the-best-button">
                        See case studies
                    </a>
                </div>
                <div className="col-sm-7 col-xs-12">
                    <img
                        src="images/home_seo_logos.png"
                        alt="Logos"
                        className="the-best-image"
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Home4TheBest
