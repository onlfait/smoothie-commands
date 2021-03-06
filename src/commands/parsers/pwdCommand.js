// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L390
const command = 'pwd'
const usage = 'pwd'
const description = 'Get (print) current working directory'

function parse ({ args, response }) {
  return { path: response }
}

export const pwdCommand = {
  command,
  usage,
  description,
  parse
}
