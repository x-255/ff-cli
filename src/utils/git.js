import request from 'request'
import { getAll } from './rc'
import downloadGit from 'download-git-repo'
import { DOWNLOAD } from './constants'

const fetch = (url) => {
  return new Promise((resolve, reject) => {
    let config = {
      url,
      method: 'get',
      headers: {
        'user-agent': 'fff'
      }
    }
    request(config, (err, response, body) => {
      if (err) reject(err)
      resolve(JSON.parse(body))
    })
  })
}

export const repoList = async () => {
  let config = await getAll()
  let api = `https://api.github.com/${config.type}/${config.registry}/repos` // https://api.github.com/users/ekesaitin/repos
  return await fetch(api)
}

export const tagList = async (repo) => {
  let config = await getAll()
  let api = `https://api.github.com/repos/${config.registry}/${repo}/tags` // https://api.github.com/repos/ekesaitin/ff-vuecli3/tags
  return await fetch(api)
}

export const download = (src, dest) => {
  return new Promise((resolve, reject) => {
    downloadGit(src, dest, err => {
      if (err) reject(err)
      resolve()
    })
  })
}

export const downloadLocal = async (project, version) => {
  let config = await getAll()
  let api = `${config.registry}/${project}`
  if (version) {
    api += `#${version}`
  }
  return await download(api, `${process.cwd()}/${project}`)
}