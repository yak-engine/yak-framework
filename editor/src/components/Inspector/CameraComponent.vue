<template>
	<div class="camera-component">
		<div class="form-section">
			<div class="component-header">Viewport</div>
			<div class="viewport-values">
				<div class="viewport-value flex flex-r align-items-center">
					<div class="form-label text-small">X</div>
					<input type="text" v-model="inspectorComponentData.camera.viewport.x" />
				</div>
				<div class="viewport-value flex flex-r align-items-center">
					<div class="form-label text-small">Y</div>
					<input type="text" v-model="inspectorComponentData.camera.viewport.y" />
				</div>
				<div class="viewport-value flex flex-r align-items-center">
					<div class="form-label text-small">W</div>
					<input type="text" v-model="inspectorComponentData.camera.viewport.width" />
				</div>
				<div class="viewport-value flex flex-r align-items-center">
					<div class="form-label text-small">H</div>
					<input type="text" v-model="inspectorComponentData.camera.viewport.height" />
				</div>
			</div>
		</div>
		<div class="form-section">
			<div class="component-header">Max</div>
			<div class="viewport-values">
				<div class="viewport-value flex flex-r align-items-center">
					<div class="form-label text-small">X</div>
					<input type="text" v-model="inspectorComponentData.camera.max.x" />
				</div>
				<div class="viewport-value flex flex-r align-items-center">
					<div class="form-label text-small">Y</div>
					<input type="text" v-model="inspectorComponentData.camera.max.y" />
				</div>
				<div class="viewport-value flex flex-r align-items-center">
					<div class="form-label text-small">W</div>
					<input type="text" v-model="inspectorComponentData.camera.max.width" />
				</div>
				<div class="viewport-value flex flex-r align-items-center">
					<div class="form-label text-small">H</div>
					<input type="text" v-model="inspectorComponentData.camera.max.height" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CameraComponent extends Vue {
	@Prop() inspectorComponentData: any;
}
</script>

<style lang="scss" scoped>
.viewport-values {
	display: grid;
	grid-template-columns: repeat(4, 75px);
	grid-gap: 1em;
}

.viewport-values .viewport-value .form-label {
	padding-right: 10px;
}

.component-header {
	margin-bottom: 10px;
}
</style>
