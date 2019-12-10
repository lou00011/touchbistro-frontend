import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
//
import { DataContext } from './view/contexts/DataContext'
import Home from './view/Home'
// CSS imports
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div id='AppContainer'>
        <Route path='/*'>
          <DataContext>
            <Home />
          </DataContext>
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
