import React, { useState } from 'react';
import './styles/App.css';
import FirstScene from './scenes/FirstScene/FirstScene';
import { SecondScene } from './scenes/SecondScene/SecondScene';
import { ThirdScene } from './scenes/ThirdScene/ThirdScene';

function App() {
  // Estado para controlar la escena actual
  const [currentScene, setCurrentScene] = useState('first');

  // Función para cambiar la escena
  const onSceneChange = () => {
    // Cambiar a switch para manejo de mas escenas
    if(currentScene === 'first'){
      setCurrentScene('second');
    } else if(currentScene === 'second'){
      setCurrentScene('third');
    }
    
  };

  return (
    <>
      {currentScene === 'first' && <FirstScene onSceneChange={onSceneChange} />} 
      {currentScene === 'second' && <SecondScene  onSceneChange={onSceneChange} />}
      {currentScene === 'third' && <ThirdScene />}
      {/* <ThirdScene /> */}
    </>
  );
}

export default App;