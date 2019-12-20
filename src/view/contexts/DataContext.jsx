import React, { useState, createContext } from 'react'
import { useDebounce } from 'react-use'
import { constraint } from '../../model/InputForm'
import { postData } from '../../action/API'
import { prettyPrint } from '../../helper/printer'
import validate from 'validate.js'
// fsm imports
import { useMachine } from '@xstate/react'
import { initMachine } from '../../model/StateMachines/UI'

const Context = createContext(undefined)

const useDataContext = () => {

  //Core states
  const [current, send] = useMachine(initMachine())
  const [display, setDisplay] = useState()

  // Derived/computed values
  const currentValue = current.context.input
  const hasNoError = current.matches({ active: 'valid' })
  const hasError = current.matches({ active: 'invalid' })
  const errorMsg = hasNoError ? [] : validate(current.context, constraint).input

  useDebounce(() => {
    if (hasNoError) {
      (async () => {
        const data = await postData({ input: parseInt(current.context.input) })
        setDisplay(
          prettyPrint(currentValue, JSON.stringify(data.output)))
      })()
    }
  }, 400, [current])

  // Event dispatch fx
  function sendEvent(inputFieldValue) {
    send({ type: 'INTERACT', value: inputFieldValue })
  }

  return {
    sendEvent,
    hasError,
    errorMsg,
    // displayStates
    currentValue,
    display
  }
}

const DataContext = (props) => {
  const stateObj = useDataContext()

  return (
    <Context.Provider value={stateObj}>
      {props.children}
    </Context.Provider>
  )
}

export {
  Context,
  DataContext
}