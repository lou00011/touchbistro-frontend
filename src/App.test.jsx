import React from 'react';
import { render, cleanup, fireEvent, waitForDomChange } from '@testing-library/react';
import App from './App';

describe('App integration tests', () => {
  let getByTestId
  let debug
  let getByText

//Setup
  beforeEach(() => {
    let queries = render(<App />)

    getByTestId = queries.getByTestId
    debug = queries.debug
    getByText = queries.getByText
  })

  afterEach(cleanup)

  test('App renders', async (done) => {
    const inputField = getByTestId('inputField')
    const outputText = getByTestId('outputText')

    // Assuming if these elements exists, the App is considered rendered
    expect(inputField).not.toEqual(null)
    expect(outputText).not.toEqual(null)
    done()
  })

  test('Invalid input is not displayed at output', async (done) => {
    const inputField = getByTestId('inputField')
    const outputText = getByTestId('outputText')

    fireEvent.change(inputField, {target: {value: "-10"}})
    expect(inputField.value).toStrictEqual("-10")
    expect(outputText.value).toEqual(undefined)
    done()
  })

  test('Valid input, answer exists within the App display', async (done) => {
    const inputField = getByTestId('inputField')

    fireEvent.change(inputField, {target: {value: "10"}})

    await waitForDomChange()
    expect(inputField.value).toStrictEqual("10")

    // There should exist some element with the answer
    expect(getByText(/[3,5]/)).toBeTruthy()
    done()
  })
})
