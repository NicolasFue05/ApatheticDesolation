/* eslint-disable react/prop-types */
import LogoWindows from '../../assets/logoWindowsASCII.png'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef, useState } from 'react'
import './Terminal.css'

// Continuar con la terminal
// 
/**
 * 
 */
export default function Terminal({ Content, TextStyle, Repeat, Cursor }) {
    // Iniciar un estado con el unknowUser que despues cambiara al nombre que nos de el jugador en el input
    const [username, setUsername] = useState("ų̮͈͍̫͈͓̠͎͚͊̾̎̔ͭ̊̈ͣ͟͝_̷̶̨͇̦͂̃̈́̎ͫͮ́̈ͨ̕n̟k̵̷̨̨̼͖̩̟̖̺̦͔͚̺̳̦̖̺̐̓̅̍͂ͫͩͤ̑ͣͨͯͩ̓ͮ͛̏͘̚n͍̬̺͙̯ͩ_̶̸̡̫̪̮͇̫̠̝̻̭̖͎̀ͪ̓͋̑̀͂̓͛͊ͨͬ͋̆̚͜͜͠͞ơ̶̴̵̧̨̭͎̜͎̲̯͉͔ͭ̓̃ͦͥ̈ͫ̒͊̀̚͢ͅw̵̢̨̮̲̙̐̆̇ͬ̇̂̓̑ͅU̼̒ͬ̊s̡̯ͫͫẻ̴͕̭̪̤͓͕̱͍̪͗̊ͭ̇́̈̏͋̋̈́̑̋̃ͦ̀̚͜͜͜r̸̸̴̢̧̛̛̖̻̯͚̪̤̟̲̖̮̪̺̝̺͓̘ͮ̈́̅̔̇ͭ̔ͫ͆̋̔̾̌ͩͩ̓̋̽͠͝")
    const inputRef = useRef(null)

    // Funcion para cambiar el estado del username a el nombre que da el jugador en el input 
    const handleSubmit = (event) => {
        event.preventDefault()
        const newUsername = inputRef.current.value.trim()
        if (newUsername) {
            setUsername(`C:/Users/${newUsername}`)
        }
        inputRef.current.value = ''
    }
    
    // Funcion para figar el focu al input despues de un tiempo
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus()
            }
        }, 46000);
        
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="terminal-container">
                <div className="terminal-logo-text-container">
                    {/*Aca va la imagen de windows en ASCII*/}
                    <img src={LogoWindows} alt="logo-windows-ascii" className='logo-windows'/>
                    {/*Contenedor de los textos*/}
                    <div className="terminal-text-content">
                        <TypeAnimation
                            sequence={Content}
                            style={TextStyle}
                            repeat={Repeat}
                            cursor={Cursor}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
                {/*Aca ira el text input que represente los comandos que va a poner el usuario en la terminal*/}
                <form className="terminal-image-input" onSubmit={handleSubmit}>
                    <p>{username}</p>
                    <input type="text" name='terminal-input' ref={inputRef} />
                </form>
            </div> 
        </>
    )
}