import React, { useState, createContext } from 'react'
import { useDebounce } from 'react-use'
import { constraint } from '../../model/InputForm'
import validate from 'validate.js'

const Context = createContext(undefined)

// Custom hook which contains all state and logic necessary for child components to render
const useDataContext = () => {
  const [state, setState] = useState({
    input: '',
    output: '',
    hadFocus: false
  })
  
  // if state is validation passing, validate.js returns undefined. Eui takes an array of strings as error messages
  const errorMsg  = !validate(state, constraint)? [] : validate(state, constraint).input
  const hasError  = state.hadFocus && validate(state, constraint) !== undefined

  // note: useDebounce allows side effects
  useDebounce(() => {
    if (!hasError){
      setState({...state, output: state.input})
    }
  }, 450 , [state])

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