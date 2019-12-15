import { 
  Machine,
  MachineConfig,
  assign
} from 'xstate'

import { InputForm, constraint } from '../InputForm';

import validate from 'validate.js'

interface UIStateSchema {
  states : {
    inactive: {}
    active: {
      states: {
        validating: {},
        invalid: {}
        valid: {}
      }
    }
  },
}

type UIEvent = { type: 'INTERACT' , value: string | number }

interface UIContext extends InputForm { }

const stateDef : MachineConfig<UIContext, UIStateSchema, UIEvent> = {
  initial: 'inactive',
  states: {
    inactive: {
      on: { 
        INTERACT: 'active' 
      },
    },
    active: {
      initial: 'validating',
      states: {
        validating: {
          entry: assign({
            input: (context, event) => event.value
          }),
          on: { 
            '': [
              {target: 'valid', cond: 'hasNoError'},
              {target: 'invalid'},
          ] }
        },
        invalid: {
          on: {
            INTERACT: 'validating'
          }
        },
        valid: {
          on: {
            INTERACT: 'validating'
          }
        },
      }
    },
  },
  context: {
    input: '',
  },
}

const config = {
  guards: {
    hasNoError: (context: UIContext, event: UIEvent) => validate(context, constraint) === undefined
  }
}

const initMachine = () => {
  let m = Machine(stateDef)
  let m2 =  m.withConfig(config)
  return m2
}

export {
  stateDef,
  config,
  initMachine
}
