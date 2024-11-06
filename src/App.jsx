import './styles/App.css';
import React, { useState } from 'react';
import { Notification } from './components/Notification/Notification'
import { notification } from './Constants/CurrentConstants.jsx';

function App() {
  return (
    <Notification 
      Username={notification[0].Username}
      Message={notification[0].Message}
    />
  )
}

export default App;
