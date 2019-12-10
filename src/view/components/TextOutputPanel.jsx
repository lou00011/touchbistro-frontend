import React, { useContext } from 'react'
import { Context } from '../../view/contexts/DataContext'

import {
  EuiPanel,
  EuiText, } from '@elastic/eui'

const Component = () => {
  const { display } = useContext(Context)


  return(
    <EuiPanel
      grow={true}
    >
      <EuiText
        data-testid='outputText'
      >
        <pre>
          <code>
              { display }
          </code>
        </pre>
      </EuiText>
    </EuiPanel>
  )
}

export default Component