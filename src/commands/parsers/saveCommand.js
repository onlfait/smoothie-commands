// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L563
import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'save'
const usage = 'save <file>'
const description = 'Saves the specified config-override file'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (!response.startsWith('Settings Stored to ')) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // always return data object
  return { file: response.slice(19) }
}

export const saveCommand = {
  command,
  usage,
  description,
  parse
}
