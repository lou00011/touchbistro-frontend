import React, { useContext } from 'react'
import { Context } from '../../view/contexts/DataContext'

import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
} from '@elastic/eui'

const Component = () => {

  const { sendEvent, hasError, errorMsg, currentValue } = useContext(Context)

  return (
    <EuiForm>
      <EuiFormRow
        //visual
        hasEmptyLabelSpace={true}
        fullWidth
        //logic
        isInvalid={hasError}
        error={errorMsg}
      >
        <EuiFieldText
          data-testid='inputField'
          //visual 
          fullWidth
          //logic
          placeholder="Enter a natural number"
          value={currentValue}
          onChange={e => sendEvent(e.target.value)}
          isInvalid={hasError}
        />
      </EuiFormRow>
    </EuiForm>
  )
}

export default Component