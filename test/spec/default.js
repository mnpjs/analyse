import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import analyse from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof analyse, 'function')
  },
  async 'calls package without error'() {
    await analyse()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await analyse({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T