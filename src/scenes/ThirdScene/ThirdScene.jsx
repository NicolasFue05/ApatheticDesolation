import React, { useState } from 'react';
import './ThirdScene.css'
import Glitch1 from '../../assets/Glitch1.mp4'


export function ThirdScene() {

    return (
        <div className="ThirdScene">
            {/*Video de fondo*/}
            <video autoPlay loop muted className='ThirdScene-bgvideo'>
                <source src={Glitch1} type="video/mp4" />
            </video>
        </div>
    );
}