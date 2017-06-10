import * as types from './mutation-types'

export const dealObj = function({ commit, state }, { obj, objIndex }) {
    if (!state.answers.length) {
        let answerObj = {
            objIndex: objIndex,
            aObj: obj
        }
        commit(types.SET_ANSWERS, answerObj)
    } else {
        for (let key in state.answers) {
            if (state.answers[key].objIndex === objIndex) {
                let resetObj = {
                    obj: obj,
                    objKey: key
                }
                commit(types.RESET_ANSWERS, resetObj)
                return
            } else if (key < state.answers.length - 1) {
                continue
            } else {
                let answerObj = {
                    objIndex: objIndex,
                    aObj: obj
                }
                commit(types.SET_ANSWERS, answerObj)
            }
        }
    }
}