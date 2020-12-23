import Vue from 'vue';
import Vuex from 'vuex';
import Scene from '../../../engine/src/models/scene';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scene: null
  },

  mutations: {
    updateScene(state, scene: Scene) {
      state.scene = scene;
    }
  },
  actions: {
    updateScene(context, scene: Scene) {
      context.commit('updateScene', scene);
    }
  }
});