import { PaletteMode } from '@/enums/PaletteMode';
import { TransformMode } from '@/enums/TransformMode';
import Project from '@/models/project';
import SceneStorageService from '@/services/scene-storage.service';
import Vue from 'vue';
import Vuex from 'vuex';
import Entity from '../../../engine/src/models/entity';
import Scene from '../../../engine/src/models/scene';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => {
    return {
      project: null,
      scene: null,
      entity: null,
      transformMode: TransformMode.MOVE,
      paletteMode: null,
      isPlayMode: false,
      isExecutingSave: false
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

    setIsPlayMode(state, isPlayMode: boolean) {
      state.isPlayMode = isPlayMode;
    },

    setIsExecutingSave(state, isExecutingSave: boolean) {
      state.isExecutingSave = isExecutingSave;
    },

    saveScene(state, scene: Scene) {
      // Save the updated copy of the scene object back to the state then write the scene config to the file system.
      state.scene = scene;
      new SceneStorageService().save(state.scene, state.project.path)
    }
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
    },

    setIsPlayMode(context, isPlayMode: boolean) {
      context.commit('setIsPlayMode', isPlayMode);
    },

    saveScene(context, scene: Scene) {
      context.commit('setIsExecutingSave', true);
      context.commit('saveScene', scene);
      context.commit('setIsExecutingSave', false);
    }
  }
});