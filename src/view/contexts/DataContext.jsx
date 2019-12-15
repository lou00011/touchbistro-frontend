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

  const [current, send] = useMachine(initMachine())
  const [display, setDisplay] = useState()

  useDebounce(() => {
    if (hasNoError()) {
      (async () => {
        const data = await postData({ input: parseInt(current.context.input) })
        setDisplay(
          prettyPrint(getCurrentValue(), JSON.stringify(data.output)))
      })()
    }
  }, 400, [current])

  function sendEvent(inputFieldValue) {
    send({ type: 'INTERACT', value: inputFieldValue })
  }

  function hasNoError() {
    return current.matches({ active: 'valid' })
  }

  function hasError() {
    return current.matches({ active: 'invalid' })
  }

  function errorMsg() {
    return hasNoError() ? [] : validate(current.context, constraint).input
  }

  function getCurrentValue() {
    return current.context.input
  }

  return {
    sendEvent,
    hasError,
    errorMsg,
    // displayStates
    getCurrentValue,
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