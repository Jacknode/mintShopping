/**
 * Created by leibo on 2018/7/27.
 */
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mutations
  }, actions
})
