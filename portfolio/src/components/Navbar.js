import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import myResume from './Resume.pdf'
import './Navbar.css'
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
    return (
        <>
            <nav className="navBar">
                <div className="navBar-container">
                    <div classname="left">
                        <div className="upper"> </div>
                        <div className="lower"> </div>
                    </div>
                    <ul className="nav-menu">
                        <li className='nav-item'>
                            <Link to='About' href='#about' className='nav-links'>
                            about</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='work' href='#work' className='nav-links'>
                            work</Link>
                        </li>
                        <li className='nav-item'>
                            <a href={myResume} target='_blank' className='nav-links' rel='noopener noreferrer'>
                            resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
