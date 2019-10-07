import React from 'react';
import './scss/Header.scss';
import imgApple from '../img/icone-ios.png';
import imgAndroid from '../img/icone-android.png';
import imgWindows from '../img/icone-windows.png';
import hand from '../img/hand.png'

const Header =() => {
    return (
      <div className="Header">
          <header>

              <div id="info">
                <h1>Notify</h1>
                <p>A great new free psd theme to showcase your new aplication</p>
                <div>
                    <a href="#"><img src={imgApple} alt="icone apple"/></a>
                    <a href="#"><img src={imgAndroid} alt="icone android"/></a>
                    <a href="#"><img src={imgWindows} alt="icone Windows"/></a>
                </div>
              </div>

              <div id="hand">
                <img src={hand} alt="imagem mão"/>
              </div>
          </header>
      </div>
    );
  }
  
  export default Header;

