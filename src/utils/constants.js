export { version as VERSION } from '../../package'

// 找到用户的根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME ']

// 配置文件
export const RC = `${HOME}/.ffclirc`

// RC配置下载（模板）的地方，给GitHub的api用
export const DEFAULTS = {
  registry: 'ekesaitin',
  type: 'users'
}

// 下载目录
export const  DOWNLOAD = `${HOME}/.template`