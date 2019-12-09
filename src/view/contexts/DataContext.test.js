import React from 'react'
import { DataContext } from './DataContext'
import { shallow, mount } from 'enzyme'

describe("Data Context Testing", () => {

  test('Valid - Control', () => {
    expect(true).toEqual(true)
  })

  test('Valid - Context component renders successfully', () => {
    shallow(<DataContext />)
  })

  test('Valid - Context value container contains the right attributes', () => {
    const wrapper = shallow(<DataContext />)
    const actual = wrapper.instance()
    console.log(JSON.stringify(actual))
    const expected = {
      state: {},
      setState: () => {},
      errorMsg: [],
      hasError: undefined
    }
    expect(actual).toMatchObject(expected)
  })
})