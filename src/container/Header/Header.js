import React from 'react'
import './style_header.css'
import '../../styles/style.css'

const Header = () => {
    return (
        <>
            <header className="header-background">
                <div className="content-header">
                    <a href="#">
                        <img src="pics/logo.png" alt="Logo" />
                    </a>
                    <nav className="header-navigation">
                        <ul className="header-navigation-list">
                            <li>Home</li>
                            <li>How it works?</li>
                            <li>Help Center</li>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Buy now</li>
                        </ul>
                        <button className="header-button-search">
                            <span className="material-icons"> search </span>
                        </button>
                    </nav>

                    <div className="nav-mobile-menu">
                        <span className="material-icons"> menu </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
