import React from 'react';

import { DataContext } from './view/contexts/DataContext'
import InputComponent from './view/components/UserInputField'
import OutputComponent from './view/components/TextOutputPanel'

// UI lib imports
import { EuiFlexGroup } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';
// CSS imports
import './App.css'

const App = () => {
  return (
    <div id='AppContainer'>
      <DataContext>
        <EuiFlexGroup 
          direction="column"
          gutterSize='m'
          responsive={false}
        >
          <EuiFlexItem>
            <InputComponent />
          </EuiFlexItem>
          <EuiFlexItem>
            <OutputComponent />
          </EuiFlexItem>
        </EuiFlexGroup>
      </DataContext>
    </div>
  )
}

export default App;
