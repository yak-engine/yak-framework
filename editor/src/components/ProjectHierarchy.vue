<template>
	<div class="project-hierarchy-component" v-if="project">
		<div class="scene-editor-panel-header is-shadowed">
			<span class="title">Project Hierarchy</span>
			<div class="actions"></div>
		</div>
		<div class="tree-component">
			<tree :items="project.tree"></tree>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';

import Tree from './Tree.vue';

@Component({
	components: {
		Tree
	}
})
export default class ProjectHierarchy extends Vue {
	@State project;
}
</script>

<style lang="scss" scoped>
.project-hierarchy-component {
	flex: 1;
}
</style>
