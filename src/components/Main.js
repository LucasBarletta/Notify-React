import React from 'react';
import './scss/Main.scss';


const Main = () => {
    return (
        <main>
            <div id='cont'>
                <h3>Get Notified of Any Updates!</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illo vitae, suscipit obcaecati eius modi maxime commodi, culpa explicabo asperiores iure reprehenderit dolore excepturi consequatur a beatae officiis tempore. Commodi!ae, suscipit obcaecati eius modi maxime commodi, culpa explicabo asperiores iure reprehenderit dolore excepturi consequatur a beatae officiis tempore. Commodi!</p>
                    <div>
                        <input class="email" type="email" placeholder="Email Address"/>
                        <input class="bnt" type="button" value="Notify"/>
                    </div>
            </div>
            <div>
                <span>

                <iframe id="video" src="https://www.youtube.com/embed/Je3okNO_atc" width="450"    height="360" frameborder="0" 
                    allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </span>
            </div>
    </main>
    )
    
}


export default Main;