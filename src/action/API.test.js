import {postData} from './API'

describe('API fetch/POST tests', () => {
  test('Valid - return json contain right properties', async (done) => {
    const actual = await postData({input: 10})
    const expected = 'output'
    expect(actual).toHaveProperty(expected)
    done()
  })

  test('Valid - return json return correct calculations', async (done) => {
    const actual = await postData({input: 10})
    const expected = {output: [3,5]}
    expect(actual).toStrictEqual(expected)
    done()
  })

  test('Valid - return json return correct calculations #2', async (done) => {
    const actual = await postData({input: 12})
    const expected = {output: [5]}
    expect(actual).toStrictEqual(expected)
    done()
  })

  test('Valid - return json return correct calculations #3', async (done) => {
    const actual = await postData({input: 11})
    const expected = {output: [3,5]}
    expect(actual).toStrictEqual(expected)
    done()
  })

  test('Valid - return json return correct calculations #4', async (done) => {
    const actual = await postData({input: 3})
    const expected = {output: [2]}
    expect(actual).toStrictEqual(expected)
    done()
  })
})