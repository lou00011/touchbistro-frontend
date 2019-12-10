import React from 'react';

//
import { DataContext } from './view/contexts/DataContext'
import  Home  from './view/Home'
// CSS imports
import './App.css'

const App = () => {
  return (
    <div id='AppContainer'>
      <DataContext>
        <Home />
      </DataContext>
    </div>
  )
}

export default App;
