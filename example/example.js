/* yarn example/ */
import analyse from '../src'

(async () => {
  const res = await analyse({
    text: 'example',
  })
  console.log(res)
})()