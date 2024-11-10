import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Draggable from "react-draggable";
import XIcon from '../../assets/X.svg'
import TeslaCar from '../../assets/TeslaCar.png'
import ErrorIcon from '../../assets/ErrorIcon.svg'
import './FloatingWindow.css';

export function FloatingWindow({ Title, StartingPosition, Content, isErrorWindow, isVirusWindowCar, TextStyles, Styles, TextSpeed, Cursor , handleCloseButton }) {

    const nodeRef = useRef(null);

    return (
        <Draggable
            handle=".title-bar-closebtn" // Hace que solo se pueda arrastrar desde la barra de título
            nodeRef={nodeRef}   // Usamos la referencia para el nodo
            defaultPosition={StartingPosition} // Posición inicial
            position={null}     // No controlamos la posición externamente
        >
            <div ref={nodeRef} className="floating-window" style={ Styles }>
                <div className="title-bar-closebtn">
                    <h3>{Title}</h3>
                    <button className="closebtn-floatingwindow" onClick={handleCloseButton}>
                        <img src={XIcon} alt="Close Button" />
                    </button>
                </div>
                <div className="window-content">
                    {isErrorWindow ? 
                        <img src={ErrorIcon}  />
                        : null} 
                    {isVirusWindowCar ?
                        <img src={TeslaCar} width={350} />
                    : null}
                        <div className="window-text-content">
                            {Content.length > 0 && 
                                <TypeAnimation 
                                    sequence={Content}
                                    speed={TextSpeed}
                                    style={TextStyles}
                                    repeat={false}
                                    cursor={Cursor}
                                />
                            }
                        </div>
                </div>
            </div>
        </Draggable>
    );
}
