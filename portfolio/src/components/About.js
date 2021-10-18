import React, { useEffect, useState } from 'react'
import './About.css'
import token from './token'

// const github = async () => {
//     const data = await fetch('https://api.github.com/users/onthenextpaige', {
//         headers: {
//             Authorization: token
//         }
//     })
// }

// fetch('https://api.github.com/users/onthenextpaige', {
//     headers: {
//         Authorization: token
//     }
// })
// .then(response => response.json())
// .then(data => {
//     const github = document.querySelector('#github')
// })

const About = () => {
    const fetchGithub = async () => {
        return await fetch('https://api.github.com/users/onthenextpaige', {
            headers: {
                Authorization: token
            }
        }).then(data => data.json())
    }

    const [githubData, setGithubData] = useState({})
    useEffect(() => {
        fetchGithub().then(data => setGithubData(data))
    }, [])

    return (
        <section className='About' id='About'>
            <div className="text">
                <header className="hello px-15 text-green-400">Hello!</header>
                <p className="firstPar font-cursive text-white text-xl">I’m a freshly minted software developer with an eye for detail and a passion for figuring out what makes things tick.</p>
                <p className="secondPar font-cursive text-white text-xl">I speak Turkish, Spanish, Persian, and a little French. On the keyboard, my languages are Java, C#, Python, Javascript, and SQL.</p>
                <p className="thirdPar font-cursive text-white text-xl">On weekends you’ll find me climbing rocks, walking slacklines, eating a homemade pizza, or planning my next adventure.</p>
                <p className="hireable font-cursive text-white text-xl">{githubData.hireable ? 'I’m open to opportunities right now, so please get in touch!' : 'I’m not looking for new opportunities at the moment, but still happy to connect!'}</p>
                <div className="flex justify-center">
                    <a
                    href="https://www.linkedin.com/in/paigeharland/"
                    className="connect font-cursive inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-xl">
                    find me on LinkedIn
                    </a>
                </div>
            </div>
            <div className="image">
                <img src={githubData.avatar_url} alt='headshot'></img>
                <a className="bio text-white font-cursive">{githubData.bio}</a>
            </div>
        </section>
    )
}

export default About
