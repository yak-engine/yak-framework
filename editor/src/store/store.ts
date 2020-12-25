import { PaletteMode } from '@/enums/PaletteMode';
import { TransformMode } from '@/enums/TransformMode';
import Project from '@/models/project';
import Vue from 'vue';
import Vuex from 'vuex';
import Entity from '../../../engine/src/components/entity';
import Scene from '../../../engine/src/models/scene';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => {
    return {
      project: null,
      scene: null,
      entity: null,
      transformMode: TransformMode.MOVE,
      paletteMode: null
    }
  },

  mutations: {
    setProject(state, project) {
      state.project = project;
    },

    setScene(state, scene: Scene) {
      state.scene = scene;
    },

    setEntity(state, entity: Entity) {
      state.entity = entity;
    },

    setTransformMode(state, transformMode: TransformMode) {
      state.transformMode = transformMode;
    },    

    setPaletteMode(state, scene: Scene) {
      state.paletteMode = scene;
    },    
  },
  actions: {
    setProject(context, project: Project) {
      context.commit('setProject', project);
    },

    setScene(context, scene: Scene) {
      context.commit('setScene', scene);
    },

    setEntity(context, entity: Entity) {
      context.commit('setEntity', entity);
    },

    setTransformMode(context, transformMode: TransformMode) {
      context.commit('setTransformMode', transformMode);
    },

    setPaletteMode(context, paletteMode: PaletteMode) {
      context.commit('setPaletteMode', paletteMode);
    }
  }
});