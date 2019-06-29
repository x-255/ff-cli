import program from 'commander'
import { VERSION } from './utils/constants'
import main from './index'

let actionMap = {
  install: {
    alias: 'i',
    description: 'install ff-cli template',
    examples: [
      'ff-cli install',
      'ff-cli i'
    ]
  },
  config: {
    alias: 'c',
    description: 'config .ffclirc',
    examples: [
      'ff-cli config set <k> <v>',
      'ff-cli config get <k>',
      'ff-cli config remove <k>'
    ]
  },
  '*': {
    description: 'not found',
    examples: []
  }
}

Object.entries(actionMap).forEach(v => {
  let [action, obj] = v
  program.command(action).description(obj.description).alias(obj.alias)
    .action(() => {
      if (action === 'config') {
        main(action, ...process.argv.slice(3))
      } else if (action === 'install') {
        main(action)
      }
    })
})

function help () {
  console.log('\r\n' + 'commands config:')
  Object.entries(actionMap).forEach(v => {
    let [, obj] = v
    obj.examples.forEach(ex => {
      console.log('   - ' + ex)
    })
  })
}

program.on('-h', help)
program.on('--help', help)

program.version(VERSION, '-v --version').parse(process.argv)