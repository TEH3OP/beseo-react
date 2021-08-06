import React from 'react'
import './style_header.css'
import '../../assets/styles/style.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="header-background">
                <div className="content-header">
                    <Link Link to="/">
                        <img src="/images/logo.png" alt="Logo" />
                    </Link>
                    <nav className="header-navigation">
                        <ul className="header-navigation-list">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="#"> How it works?</Link>
                            </li>
                            <li>
                                <Link to="#">Help Center</Link>
                            </li>
                            <li>
                                <Link to="#">Careers</Link>
                            </li>
                            <li>
                                <Link to="#">Contact</Link>
                            </li>
                            <li>
                                <Link to="#">Buy now</Link>
                            </li>
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
