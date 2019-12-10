import React from 'react'
import InputComponent from './components/UserInputField'
import OutputComponent from './components/TextOutputPanel'

// UI lib imports
import { EuiFlexGroup } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';

const View = () => {
  return (
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
  )
}

export default View