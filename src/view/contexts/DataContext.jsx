import React, { useState, createContext } from 'react'
import { constraint } from '../../model/InputForm'
import validate from 'validate.js'

const Context = createContext(undefined)

// Custom hook which contains all state and logic necessary for child components to render
const useDataContext = () => {
  const [state, setState] = useState({ input: '' })
  const errorMsg = [validate(state, constraint)]

  // if state is validation passing, validate.js returns undefined
  const hasError = errorMsg !== undefined

  return {
    state,
    setState,
    errorMsg,
    hasError
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