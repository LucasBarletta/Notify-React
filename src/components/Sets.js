import React from 'react';
import './scss/Sets.scss';
import icone1  from '../img/icone1.png';
import icone2  from '../img/icone2.png';
import icone3  from '../img/icone3.png';




const Sets = () => {

    return(
        <div className="Section">
           <section>
                <div>
                    <a href="#"><img src={icone1} alt="ico1"/></a>
                    <h2>Editable Theme</h2>
                    <p>jdaskjnasdnkj</p>
                </div>

                <div>
                    <a href="#"><img src={icone2} alt="ico2"/></a>
                    <h2>Flat Design</h2>
                    <p>hjkasdkbjhasdbkjdas</p>
                </div>

                <div>
                    <a href="#"><img src={icone3} alt="ico3"/></a>
                    <h2>Editable Theme</h2>
                    <p>hjkasdkbjhasdbkjdas</p>
                </div>

               
               
               </section> 

            
        </div>
    )
    
}

export default Sets;