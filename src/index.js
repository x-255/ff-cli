import { bq } from './utils/common'
import { resolve } from 'path'

// 执行src下的${action}.js
let apply = (action, ...args) => {
  bq(resolve(__dirname, `./${action}`))(...args)
}

export default apply