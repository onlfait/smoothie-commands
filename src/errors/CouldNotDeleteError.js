import CommandError from './CommandError.js'
import { COULD_NOT_DELETE_ERROR } from '../error-types.js'

export default class CouldNotDeleteError extends CommandError {
  constructor (what) {
    super({
      name: 'CouldNotDeleteError',
      type: COULD_NOT_DELETE_ERROR,
      message: `Could not delete [${what}].`
    })
  }
}
