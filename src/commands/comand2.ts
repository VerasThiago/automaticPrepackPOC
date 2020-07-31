import { Command, flags } from '@oclif/command'
import { CustomCommand } from 'vtex'

export default class Command2 extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ oclif-example command2
command2 world from ./src/command2.ts!
`,
  ]

  static flags = {
    ...CustomCommand.globalFlags,
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Command2)

    const name = flags.name ?? 'world'

    this.log(`command2 ${name} from ./src/commands/command2.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
