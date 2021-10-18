import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import myResume from './Resume.pdf'
import './Navbar.css'
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
    return (
        <>
            <nav className="navBar">
                <div className="navBar-container md:sticky top-0 z-10">
                    {/* <div className="Paige font-cursive text-white">
                        <Link to='Home' href='#home'>
                            Paige Harland</Link>
                    </div> */}
                    <div className="left">
                    </div>
                    <div className='nav-item'>
                            <Link to='About' href='#About' className='nav-links'>
                            about</Link>
                    </div>
                    <div className='nav-item'>
                            <Link to='Work' href='#Work' className='nav-links'>
                            work</Link>
                    </div>
                    <div className='nav-item'>
                            <a href={myResume} target='_blank' className='nav-links' rel='noopener noreferrer'>
                            resume</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
