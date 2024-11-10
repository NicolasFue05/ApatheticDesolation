// VirusWindow.js
import React, { useRef } from "react";
import Draggable from "react-draggable";
import XIcon from '../../assets/X.svg';
import { TypeAnimation } from "react-type-animation";
import './VirusWindow.css';

export function VirusWindow({
    StartingPosition,
    Styles,
    Title,
    TitleStyle,
    Content,
    isImage,
    Image,
    isVideo,
    Video,
    MovingText,
    TextSpeed,
    TextStyle,
    Repeat,
    Cursor,
    handleClose 
}) {
    const nodeRef = useRef(null);

    return (
        <Draggable
            handle=".VirusWindow-header"
            nodeRef={nodeRef}
            defaultPosition={StartingPosition}
            position={null}
            bounds="parent"
        >
            <div ref={nodeRef} className="VirusWindow" style={Styles}>
                <div className="VirusWindow-header">
                    <button className="VirusWindow-closebtn" onClick={handleClose}>
                        <img src={XIcon} alt="Close" />
                    </button>
                </div>
                <div className="VirusWindow-text-content">
                    <h2 style={TitleStyle}>{Title}</h2>
                    {isImage && <img src={Image} alt="Virus Window" />}
                    {isVideo && <video src={Video} autoPlay loop muted />}
                    {MovingText && (
                        <TypeAnimation
                            sequence={Content}
                            speed={TextSpeed}
                            style={TextStyle}
                            repeat={Repeat}
                            cursor={Cursor}
                        />
                    )}
                </div>
            </div>
        </Draggable>
    );
}
