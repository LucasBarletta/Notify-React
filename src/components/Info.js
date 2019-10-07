import React from 'react';
import './scss/Info.scss';
import People from '../img/pessoa1.jpg';

const Info = () => {
    return(
        <section className="Info">
            <p></p>
            <h5></h5>
            <article>
               <img src={People} alt=""/>
               <img src={People} alt=""/>
               <img src={People} alt=""/>
               <img src={People} alt=""/>
               <img src={People} alt=""/>
            </article>
        </section>
    )
}

export default Info;