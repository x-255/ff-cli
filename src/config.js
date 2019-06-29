/* 专门管理.ffclirc文件 （当前用户目录下） */
import { get, set, remove, getAll } from './utils/rc'
export default async (action, k, v) => {
  switch (action) {
    case 'get':
      if (k) {
        let key = await get (k)
        console.log(key)
      } else {
        let obj = await getAll()
        Object.entries(obj).forEach(en => {
          console.log(`${en[0]}=${en[1]}`)
        })
      }
      break
    case 'set':
      set(k, v)
      break
    case 'remove':
      remove(k)
      break
  }
}