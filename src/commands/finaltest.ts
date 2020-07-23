import { Command, flags } from '@oclif/command'
import { CustomCommand } from 'vtex'

export default class FinalTest extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ oclif-example finalTest
finalTest world from ./src/finalTest.ts!
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
    const { args, flags } = this.parse(FinalTest)

    const name = flags.name ?? 'world'

    this.log(`finalTest ${name} from ./src/commands/finalTest.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
