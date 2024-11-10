import React, { useState } from 'react';
import './styles/App.css';
import { Home } from './scenes/Home/Home';
import FirstScene  from './scenes/FirstScene/FirstScene';
import { SecondScene } from './scenes/SecondScene/SecondScene';
import { ThirdScene } from './scenes/ThirdScene/ThirdScene';

function App() {
  const [currentScene, setCurrentScene] = useState('home');

  const onSceneChange = () => {
    if (currentScene === 'home') {
      setCurrentScene('first');
    } else if (currentScene === 'first') {
      setCurrentScene('second');
    } else if (currentScene === 'second') {
      setCurrentScene('third');
    }
  };

  return (
    <>
      {currentScene === 'home' && <Home onSceneChange={onSceneChange} />}
      {currentScene === 'first' && <FirstScene onSceneChange={onSceneChange} />}
      {currentScene === 'second' && <SecondScene onSceneChange={onSceneChange} />}
      {currentScene === 'third' && <ThirdScene />}
    </>
  );
}

export default App;