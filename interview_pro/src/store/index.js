import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

//vuex插件 使用vuex的时候会在控制台打印出相应日志
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
    //开启vuex调试工具
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})