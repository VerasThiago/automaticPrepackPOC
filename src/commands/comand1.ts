import { Command, flags } from '@oclif/command'
import { CustomCommand } from 'vtex'

export default class Command1 extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ oclif-example commadn1
commadn1 world from ./src/commadn1.ts!
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
    const { args, flags } = this.parse(Command1)

    const name = flags.name ?? 'world'

    this.log(`commadn1 ${name} from ./src/commands/commadn1.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
