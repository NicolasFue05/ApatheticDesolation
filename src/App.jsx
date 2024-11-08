import React, { useState } from 'react';
import './styles/App.css';
import FirstScene from './scenes/FirstScene/FirstScene';
import { SecondScene } from './scenes/SecondScene/SecondScene';

function App() {
  const [currentScene, setCurrentScene] = useState('first'); // Estado que controla la escena actual

  // Función para cambiar la escena
  const onSceneChange = () => {
    setCurrentScene('second'); // Cambiar a la segunda escena
  };

  return (
    <>
      {currentScene === 'first' && <FirstScene onSceneChange={onSceneChange} />} {/* Renderiza la primera escena */}
      {currentScene === 'second' && <SecondScene />} {/* Renderiza la segunda escena */}
    </>
  );
}

export default App;