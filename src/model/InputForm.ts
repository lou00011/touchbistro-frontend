export interface InputForm {
  input: string | number
}

//validate.js constraint variable
const constraint = {
  input: {
    numericality: {
      onlyInteger: true,
      greaterThan: 2,
      lessThan: 99999
    }
  }
}

export { 
  constraint
}