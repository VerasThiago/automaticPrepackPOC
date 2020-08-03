import { Command, flags } from '@oclif/command'
import { CustomCommand } from 'vtex'

export default class Command4 extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ oclif-example command4
command4 world from ./src/command4.ts!
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
    const { args, flags } = this.parse(Command4)

    const name = flags.name ?? 'world'

    this.log(`command4 ${name} from ./src/commands/command4.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
