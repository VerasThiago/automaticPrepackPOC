import { Command, flags } from '@oclif/command'
import { CustomCommand } from 'vtex'

export default class Command3 extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ oclif-example command3
command3 world from ./src/command3.ts!
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
    const { args, flags } = this.parse(Command3)

    const name = flags.name ?? 'world'

    this.log(`command3 ${name} from ./src/commands/command3.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
