import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {stateAnimal:null, 
  },
  mutations: {['STORE_ANIMALS'] (state, payload) 
  {  state.stateAnimal = payload;  
  console.log('state=',state)
 },
  },
  actions: {storeAnimals: ({commit}, data) => 
  { console.log('storeanim-data-',data);
    commit(  'STORE_ANIMALS', data   );  
  },
  },
  modules: {
  }
})
