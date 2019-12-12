import React from 'react'
import './style.css'

const About = () => {
    return (
        <div className="about-page">
            <h1>About TechSquare</h1>
            <p>TechSquare is a blog about all recent news and trends around technology, gadgets and programming.</p>
            <p>It is open for public use and anyone can post in it. But there are some requirements:</p>
            <ol>
                <li>
                    You should only post relevant to the site theme news and trends.
                </li>
                <li>
                    You should not be violent to other users.
                </li>
                <li>
                    You should write in English.
                </li>
                <li>
                    You should be friendly :)
                </li>
                <li>
                    It is good if you add and image to your post (optional)
                </li>
            </ol>
            <p>
                Thank you for your attention. Happy blogging!
            </p>
        </div>
    )
}

export default About