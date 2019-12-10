import React, { useContext } from 'react'
import { Context } from '../../view/contexts/DataContext'

import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
} from '@elastic/eui'

const Component = () => {

  const { state, setState, errorMsg, hasError } = useContext(Context)

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
          //visual 
          fullWidth
          //logic
          placeholder="Enter a natural number"
          value={state.input}
          onChange={e => setState({ ...state, hadFocus: true, input: e.target.value })}
          isInvalid={hasError}
        />
      </EuiFormRow>
    </EuiForm>
  )
}

export default Component