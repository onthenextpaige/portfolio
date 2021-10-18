import React from 'react'
import { projects } from "./projectdata"
import './work.css'
import devduel_image from "./DevDuel_image.PNG"
import twitter_image from "./Twitter_image.PNG"

const work = () => {
    return (
        <section id="Work" className="Work">
            <div className="empty block"></div>
            <div className="container px-5 py-10 mx-auto text-left lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="title text-center font-abril text-green-400">
                        A few things I've built
                    </h1>
                </div>
                <div className="flex flex-wrap">
                    <a
                    key={devduel_image}
                    className="w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                            alt="DevDuel image"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={devduel_image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-md title-font font-abril text-green-400 mb-1">
                            JS, HTML, CSS, and Node
                            </h2>
                            <h1 className="title-font text-2xl font-abril text-white mb-3">
                            DevDuel
                            </h1>
                            <p className="leading-relaxed font-cursive text-white">A site that pulls developers' info from GitHub's API and compares them in a 'duel'.</p>
                            </div>
                        </div>
                    </a>
                    <a
                    key={devduel_image}
                    className="w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                            alt="DevDuel image"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={twitter_image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-md title-font font-abril text-green-400 mb-1">
                            Java, Springboot, SQL, and Postman
                            </h2>
                            <h1 className="title-font text-2xl font-abril text-white mb-3">
                            Twitter Clone API
                            </h1>
                            <p className="leading-relaxed font-cursive text-white">A clone of Twitter's API that handles 30 GET, POST, DELETE, and PATCH endpoints.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )}

export default work
