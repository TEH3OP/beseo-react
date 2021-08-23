import React from 'react'
import PropTypes from 'prop-types'
import BooksList from '../../components/Books/BooksList'
import Home1Welcome from './Home1Welcome/Home1Welcome'
import Home2Results from './Home2Results/Home2Results'
import Home3Offer from './Home3Offer/Home3Offer'
import Home4TheBest from './Home4TheBest/Home4TheBest'
import Home5Customers from './Home5Customers/Home5Customers'
import Home6Boost from './Home6Boost/Home6Boost'
import Home7GetFreePricing from './Home7GetFreePricing/Home7GetFreePricing'
import TitleCarousel from '../../components/TitleCaorusel/TitleCarousel'

const HomePage = ({ onFilterButtonClick }) => {
    return (
        <main>
            <TitleCarousel />

            <Home1Welcome />

            <Home2Results />

            <BooksList onFilterButtonClick={onFilterButtonClick} />

            <Home3Offer />

            <Home4TheBest />

            <Home5Customers />

            <Home6Boost />

            <Home7GetFreePricing />
        </main>
    )
}

HomePage.propTypes = {
    onFilterButtonClick: PropTypes.func,
}

export default HomePage
