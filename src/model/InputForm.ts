export interface InputForm {
  input: string | number
}

//validate.js constraint variable
const constraint = {
  input: {
    numericality: {
      onlyInteger: true,
      greaterThan: 1,
    }
  }
}

export { 
  constraint
}