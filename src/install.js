import { repoList, tagList, downloadLocal } from './utils/git'
import ora from 'ora'
import inquirer from 'inquirer'
import { init } from './utils/rc'

export default async () => {
  // 初始化配置文件
  await init()
  // 获取项目名
  let loading = ora('获取模板中...')
  loading.start()
  let list = await repoList()
  loading.succeed()
  list = list.map(({name}) => name)
  let answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      choices: list,
      questions: 'choice template'
    }
  ])
  let project = answer.project // 项目名

  // 获取版本号
  loading = ora('获取版本号中...')
  loading.start()
  list = await tagList(project)
  loading.succeed()
  let tag = ''
  if (list.length > 0) {
    list = list.map(({name}) => name)
    answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'tag',
        choices: list,
        questions: 'choice tag'
      }
    ])
    tag = answer.tag
  }
  // 下载
  loading = ora('少女祈祷中...')
  loading.start()
  await downloadLocal(project, tag)
  loading.succeed()
}