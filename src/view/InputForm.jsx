import React, { useState } from 'react'

import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiPanel,
  EuiSpacer,
  EuiText
} from '@elastic/eui'


const View = () => {
  const [state, setState] = useState('')
  
  const errors = [
    'some err msg'
  ]

  return (
    <EuiForm>
      <EuiFormRow
        isInvalid={false}
        error={errors}
        hasEmptyLabelSpace={true}
      >
        <EuiFieldText
          placeholder="Enter a natural number"
          value={state}
          onChange={e => setState(e.target.value)}
          isInvalid={errors}
        />
      </EuiFormRow>
      <EuiSpacer 
        size='m'
      />
      <EuiPanel
        paddingSize='s'
      >
        <EuiText>
          <pre>
            <code>
              {state}
            </code>
          </pre>
        </EuiText>
      </EuiPanel>
    </EuiForm>
  )
}

export default View