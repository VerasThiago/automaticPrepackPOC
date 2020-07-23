cli-plugin-template
===================

vtex plugin template

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm](https://img.shields.io/npm/v/@vtex/cli-plugin-template)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @vtex/cli-plugin-template
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@vtex/cli-plugin-template/0.0.1-0 linux-x64 node-v12.18.1
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example hello [FILE]`](#oclif-example-hello-file)
* [`oclif-example test2 [FILE]`](#oclif-example-test2-file)

## `oclif-example hello [FILE]`

describe the command here

```
USAGE
  $ oclif-example hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
  -v, --verbose    Show debug level logs
  --trace          Ensure all requests to VTEX IO are traced

EXAMPLE
  $ oclif-example test
  test world from ./src/test.ts!
```

_See code: [build/commands/hello.ts](https://github.com/vtex/cli-plugin-template/blob/v0.0.1-0/build/commands/hello.ts)_

## `oclif-example test2 [FILE]`

describe the command here

```
USAGE
  $ oclif-example test2 [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
  -v, --verbose    Show debug level logs
  --trace          Ensure all requests to VTEX IO are traced

EXAMPLE
  $ oclif-example hello
  hello world from ./src/hello.ts!
```

_See code: [build/commands/test2.ts](https://github.com/vtex/cli-plugin-template/blob/v0.0.1-0/build/commands/test2.ts)_
<!-- commandsstop -->
