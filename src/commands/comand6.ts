import { Command, flags } from '@oclif/command'
import { CustomCommand } from 'vtex'

export default class Command6 extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ oclif-example command6
command6 world from ./src/command6.ts!
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
    const { args, flags } = this.parse(Command6)

    const name = flags.name ?? 'world'

    this.log(`command6 ${name} from ./src/commands/command6.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
