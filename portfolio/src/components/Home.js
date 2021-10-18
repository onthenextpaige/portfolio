import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <section id="home" className="home">
            <div className='homeText'>
                <a className="empty line py-10"></a>
                <a className="firstLine text-green-400">Hi, my name is</a>
                <a className="secondLine">Paige Harland.</a>
                <a className="thirdLine">I'm a <span data-scroll id="highlight">full-stack software developer.</span></a>
                <a className="empty line py-12"></a>
                <div className="flex justify-center">
                    <a
                    href="#About"
                    className="font-cursive inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-xl">
                    get to know me
                    </a>
                    <a
                    href="#Work"
                    className="font-cursive ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-xl">
                    see my work
                    </a>
                </div>
                <a className="empty line py-3"></a>
            </div>
        </section>
    )
}

export default Home
