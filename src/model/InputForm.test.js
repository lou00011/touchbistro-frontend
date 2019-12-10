import { constraint }  from './InputForm'
import validate from 'validate.js'

describe('Input form validator tests', () => {

  test('Valid input - natural number as number', () => {
    const form = {input: 10}
    const actual = validate(form, constraint)
    const expected = undefined
    expect(actual).toStrictEqual(expected)
  })

  test('Valid input - natural number as string', () => {
    const form = {input: '10'}
    const actual = validate(form, constraint)
    const expected = undefined
    expect(actual).toStrictEqual(expected)
  })


  test('Invalid input - alphabetic', () => {
    const form = {input: 'abc'}
    const actual = validate(form, constraint)
    const expected = undefined
    expect(actual).not.toStrictEqual(expected)
  })

  test('Invalid input - negative number', () => {
    const form = {input: -100}
    const actual = validate(form, constraint)
    const expected = undefined
    expect(actual).not.toStrictEqual(expected)
  })

  test('Invalid input - decimals number', () => {
    const form = {input: 1.5} 
    const actual = validate(form, constraint)
    const expected = undefined
    expect(actual).not.toStrictEqual(expected)
  })


  test('Invalid input - decimals number as string', () => {
    const form = {input: '1.5'} 
    const actual = validate(form, constraint)
    const expected = undefined
    expect(actual).not.toStrictEqual(expected)
  })

  test('Invalid input - 0', () => {
    const form = {input: 0}
    const actual = validate(form, constraint)
    const expected = undefined
    expect(actual).not.toStrictEqual(expected)
  })

  test('Invalid input - 1', () => {
    const form = {input: 1}
    const actual = validate(form, constraint)
    const expected = undefined
    expect(actual).not.toStrictEqual(expected)
  })

  test('Valid input - 3', () => {
    const form = {input: 3}
    const actual = validate(form, constraint)
    const expected = undefined
    expect(actual).toStrictEqual(expected)
  })
})