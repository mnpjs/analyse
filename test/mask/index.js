import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import analyse from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await analyse({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts