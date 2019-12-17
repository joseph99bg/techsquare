import React from 'react'
import './style.css'

function Contacts() {
    return (
        <div className="contacts-page">
            <h1>Contacts Page</h1>
            <div className="half-col">
                <h3>Address and contacts:</h3>
                <div className="adress-info">
                    <span>
                        <i className="fas fa-map-pin"></i> Sliven, Bulgaria, Hristo Botev 27-A-12<br/>
                    </span>
                    <span>
                        <i className="fas fa-phone"></i> <a href="tel:0882745300">0882 74 53 00</a>
                    </span>
                </div>
            </div>
            <div className="half-col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1466.469204165047!2d26.32464638535452!3d42.68384698844658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6274608247037%3A0xd4ffb16c34fa1837!2z0LHRg9C7LiDigJ7QpdGA0LjRgdGC0L4g0JHQvtGC0LXQsuKAnCAyN9CQLCA4ODAxINCh0LvQuNCy0LXQvSDQptC10L3RgtGK0YAsINCh0LvQuNCy0LXQvQ!5e0!3m2!1sbg!2sbg!4v1576610847274!5m2!1sbg!2sbg" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
            </div>
        </div>
    )
}

export default Contacts