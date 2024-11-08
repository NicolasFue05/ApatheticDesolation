import React, { useRef } from "react";
import Draggable from "react-draggable";
import './FloatingWindow.css';
import { TypeAnimation } from "react-type-animation";
import XIcon from '../../assets/X.svg'
import ErrorIcon from '../../assets/ErrorIcon.svg'

export function FloatingWindow({ Title, StartingPosition, Content, isWarningWindow, Styles, TextSpeed, Cursor , handleCloseButton }) {

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
                    {isWarningWindow ? 
                        <img src={ErrorIcon} alt="" />
                        : null} 
                        <div className="window-text-content">
                            {Content.length > 0 && isWarningWindow ? 
                                <TypeAnimation 
                                    sequence={Content}
                                    speed={TextSpeed}
                                    style={{fontSize: '20px'}}
                                    repeat={null}
                                    cursor={Cursor}
                                />
                            : null}
                        </div>
                </div>
            </div>
        </Draggable>
    );
}
