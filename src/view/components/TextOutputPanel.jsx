import React, { useContext } from 'react'
import { Context } from '../../view/contexts/DataContext'

import {
  EuiPanel,
  EuiText, } from '@elastic/eui'

const Component = () => {
  const {state, setState, errorMsg, hasError } = useContext(Context)


  return(
    <EuiPanel
      max-width='400px'
      grow={true}
    >
      <EuiText>
        <pre>
          <code>
              { state.input }
          </code>
        </pre>
      </EuiText>
    </EuiPanel>
  )
}

export default Component