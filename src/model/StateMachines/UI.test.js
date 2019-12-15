import { Machine } from 'xstate'
import { stateDef, config } from './UI'

describe('UI Finite State Machine Tests', () => {
  let m
  beforeEach(() => {
    m = Machine(stateDef)
    m = m.withConfig(config)
  })

  test('#1 fsm exists', () => {
    expect(m).toBeTruthy()
  })

  test('#2 fsm starts inactive', () => {
    const actual = m.initialState.value
    const expected = 'inactive'
    expect(actual).toStrictEqual(expected)
  })

  test('#3 on INTERACT, fsm is validating', () => {
    const nextState = m.transition(m.initialState, 'INTERACT')
    const actual = nextState.value
    const expected = { active: 'invalid' }
    expect(actual).toStrictEqual(expected)
  })

  test('#3 on INTERACT, but with context value of 10 ,fsm is valid', () => {
    const actual = m.transition(m.initialState, { type: 'INTERACT', value: 10 })
    const expected = { active: 'valid' }
    console.log(actual.context)
    expect(actual.value).toStrictEqual(expected)
  })

  test('#4 on INTERACT, with context value of 10, made the context invalid, get state invalid', () => {
    const firstState = m.transition(m.initialState, { type: 'INTERACT', value: 10 })
    expect(firstState.value).toStrictEqual({"active": "valid"})
    const secondState = m.transition(firstState, {type: "INTERACT", value: -10} )
    expect(secondState.value).toStrictEqual({"active": "invalid"})
  })
})