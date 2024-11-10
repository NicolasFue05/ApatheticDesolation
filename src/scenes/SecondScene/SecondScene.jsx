import React, { useState, useEffect } from "react";
import './SecondScene.css';
import { FloatingWindow } from '../../components/Window/FloatingWindow';
import { floatingWindow } from '../../Constants/CurrentConstants';
import { VirusWindow } from '../../components/VirusWindow/VirusWindow';
import PureVideo from '../../assets/DoYouWannaBePure.mp4';
import PornAd from '../../assets/PornAd.png';
import PornAd2 from '../../assets/PornAd2.png';
import Creepy1 from '../../assets/creepy1.png';
import Creepy2 from '../../assets/creepy2.png';
import Creepy3 from '../../assets/creepy3.png';
import Creepy4 from '../../assets/creepy4.png';

export function SecondScene({ onSceneChange }) {
    const [showNotification1, setShowNotification1] = useState(false);
    const [showNotification2, setShowNotification2] = useState(false);
    const [showNotification3, setShowNotification3] = useState(false);
    const [showNotification4, setShowNotification4] = useState(false);
    const [showNotification5, setShowNotification5] = useState(false);
    const [showNotification6, setShowNotification6] = useState(false);
    const [showNotification7, setShowNotification7] = useState(false);
    const [showNotification8, setShowNotification8] = useState(false);
    const [showNotification9, setShowNotification9] = useState(false);
    const [showNotification10, setShowNotification10] = useState(false);

    useEffect(() => {
        console.log("Iniciando secuencia de ventanas...");
    
        setTimeout(() => setShowNotification1(true), 500); 
        setTimeout(() => setShowNotification2(true), 800);
        setTimeout(() => setShowNotification3(true), 1000);
        setTimeout(() => setShowNotification4(true), 1200);
        setTimeout(() => setShowNotification5(true), 1600);
        setTimeout(() => setShowNotification6(true), 1900);
        setTimeout(() => setShowNotification7(true), 2100);
        setTimeout(() => setShowNotification8(true), 2500);
        setTimeout(() => setShowNotification9(true), 3000);
        setTimeout(() => setShowNotification10(true), 3200);
    
        // Cerrar todas las ventanas
        setTimeout(() => setShowNotification1(false), 20000);
        setTimeout(() => setShowNotification2(false), 20100);
        setTimeout(() => setShowNotification3(false), 20200);
        setTimeout(() => setShowNotification4(false), 20300);
        setTimeout(() => setShowNotification5(false), 20400);
        setTimeout(() => setShowNotification6(false), 20500);
        setTimeout(() => setShowNotification7(false), 20600);
        setTimeout(() => setShowNotification8(false), 20700);
        setTimeout(() => setShowNotification9(false), 20800);
        setTimeout(() => {
            setShowNotification10(false);
            onSceneChange();
        }, 20900);
    
    
    }, []);
    
    

    return (
        <div className="SecondScene">
            {showNotification1 && 
                <VirusWindow 
                    Title={"You are alone"}
                    StartingPosition={{x: 800, y: 400}}
                    Styles={{ width: 300 }}
                    handleClose={() => setShowNotification1(false)}
                />
            }
            {showNotification2 && 
                <FloatingWindow 
                    Title={floatingWindow[1].Title}
                    StartingPosition={floatingWindow[1].StartingPosition}
                    isVirusWindowCar={true}
                    Content={floatingWindow[1].TextContent}
                    Styles={floatingWindow[1].Styles}
                    handleCloseButton={() => setShowNotification2(false)}
                    TextSpeed={99}
                    TextStyles={floatingWindow[1].TextStyles}
                    Cursor={false}
                />
            }
            {showNotification3 && 
                <VirusWindow
                    Title={floatingWindow[2].Title}
                    Styles={floatingWindow[2].Styles}
                    StartingPosition={floatingWindow[2].StartingPosition}
                    isVideo={true}
                    Video={PureVideo}
                    handleClose={() => setShowNotification3(false)}
                />
            }
            {showNotification4 &&
                <VirusWindow
                    Title={floatingWindow[3].Title}
                    Styles={floatingWindow[3].Styles}
                    StartingPosition={floatingWindow[3].StartingPosition}
                    Content={floatingWindow[3].TextContent}
                    isImage={true}
                    Image={PornAd}
                    handleClose={() => setShowNotification4(false)}
                />
            }
            {showNotification5 &&
                <VirusWindow
                    Title={floatingWindow[4].Title}
                    TitleStyle={floatingWindow[4].TitleStyles}
                    Styles={floatingWindow[4].Styles}
                    StartingPosition={floatingWindow[4].StartingPosition}
                    isImage={true}
                    Image={PornAd2}
                    handleClose={() => setShowNotification5(false)}
                />
            }
            {showNotification6 &&
                <VirusWindow 
                    isImage={true}
                    Image={Creepy1}
                    StartingPosition={floatingWindow[5].StartingPosition}
                    Styles={floatingWindow[6].Styles}
                    handleClose={() => setShowNotification6(false)}
                />
            }
            {showNotification7 &&
                <VirusWindow 
                    Title={"ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha"}
                    StartingPosition={{x: 1000, y: 200}}
                    Styles={{ width: 400 }}
                    handleClose={() => setShowNotification7(false)}
                />
            }
            {showNotification8 &&
                <VirusWindow
                    isImage={true}
                    Image={Creepy3}
                    StartingPosition={floatingWindow[7].StartingPosition}
                    Styles={floatingWindow[7].Styles}
                    handleClose={() => setShowNotification8(false)}
                />
            }
            {showNotification9 &&
                <VirusWindow
                    isImage={true}
                    Image={Creepy4}
                    StartingPosition={floatingWindow[8].StartingPosition}
                    Styles={floatingWindow[8].Styles}
                    handleClose={() => setShowNotification9(false)}
                />
            }
            {showNotification10 &&
                <VirusWindow 
                isImage={true}
                Image={Creepy2}
                StartingPosition={floatingWindow[6].StartingPosition}
                Styles={floatingWindow[6].Styles}
                handleClose={() => setShowNotification10(false)}
            />
            }
        </div>
    );
}
