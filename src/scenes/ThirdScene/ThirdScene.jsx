import Glitch1 from '../../assets/Glitch1.mp4'
import Terminal from '../../components/Terminal/Terminal';
import { terminalDialog } from '../../constants/CurrentConstants';
import './ThirdScene.css'

export function ThirdScene() {

    return (
        <div className="ThirdScene">
            {/*Video de fondo*/}
            <video autoPlay loop muted className='ThirdScene-bgvideo'>
                <source src={Glitch1} type="video/mp4" />
            </video>
            <Terminal 
                Content={terminalDialog[0].TextContent}
                TextStyle={terminalDialog[0].TextStyles}
                TextSpeed={99}
                Cursor={false}
            />
        </div>
    );
}