import { FIND_PREFERENCE, START_FIND_PREFERENCE, SUCCESS_FIND_PREFERENCE, FAILURE_FIND_PREFERENCE } from './constants'

export default {
  [FIND_PREFERENCE] ({ commit }, payload) {
    commit(START_FIND_PREFERENCE, payload)
    return this.$api.findPreference(payload.itemId)
      .then((res) => {
        commit(SUCCESS_FIND_PREFERENCE, { prefernceId: res.dataPreferenceId })
        return res.dataPreferenceId
      })
      .catch((error) => {
        commit(FAILURE_FIND_PREFERENCE, { error })
        return Promise.reject(error)
      })
  }
}
