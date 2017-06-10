import * as types from './mutation-types'
const mutations = {
    [types.SET_ANSWERS](state, obj) {
        state.answers.push(obj)
    },
    [types.RESET_ANSWERS](state, resetObj) {
        state.answers[resetObj.objKey].aObj = resetObj.obj
    },
    [types.RESET_ALL](state) {
        state.answers = []
    }
}
export default mutations