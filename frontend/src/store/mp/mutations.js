import { START_FIND_PREFERENCE, SUCCESS_FIND_PREFERENCE, FAILURE_FIND_PREFERENCE } from './constants'

export default {
  [START_FIND_PREFERENCE] (state) {
    state.waiting = true
    state.preferenceId = null
    state.error = null
  },

  [SUCCESS_FIND_PREFERENCE] (state, payload) {
    state.waiting = false
    state.preferenceId = payload.preferenceId
    state.error = null
  },

  [FAILURE_FIND_PREFERENCE] (state, payload) {
    state.waiting = false
    state.preferenceId = null
    state.error = payload.error
  }
}
