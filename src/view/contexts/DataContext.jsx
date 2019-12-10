import React, { useState, createContext } from 'react'
import { useDebounce } from 'react-use'
import { constraint } from '../../model/InputForm'
import { postData } from '../../action/API'
import { prettyPrint } from '../../helper/printer'
import validate from 'validate.js'

const Context = createContext(undefined)

// Custom hook which contains all state and logic necessary for child components to render
const useDataContext = () => {
  const [state, setState] = useState({
    input: '',
    hadFocus: false
  })

  const [display, setDisplay] = useState()

  // if state is validation passing, validate.js returns undefined. Eui takes an array of strings as error messages
  const errorMsg  = !validate(state, constraint)? [] : validate(state, constraint).input
  const hasError  = state.hadFocus && validate(state, constraint) !== undefined

  // note: useDebounce allows side effects
  useDebounce( () => {
    // This makes sure the display is only set when
    // 1. The input has been interacted with at least once
    // 2. It does not have any errors
    if(state.hadFocus && !hasError){
      (async () => { 
        try{
          const { output }  =  await postData({input: parseInt(state.input)})
          setDisplay(prettyPrint(state.input, JSON.stringify(output)))
        } catch (err) {
          // swallow
          // I can't think of a way to actually get here, but in case somehow validation is bypassed and I am doing a parseInt on a str
        }
      })()
    }
  }, 450 , [state])

  return {
    state,
    setState,
    errorMsg,
    hasError,
    display,
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