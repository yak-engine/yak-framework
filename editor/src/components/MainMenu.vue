<template>
	<div class="main-menu-component" ref="mainMenu">
		<div class="mb-0 fill-dark text-light is-shadowed" style="z-index: 1000; border-bottom: 1px solid black;">
			<div class="">
				<ul class="nav nav-menu">
					<div class="nav-left">
						<ul class="nav-item">
							<li class="menu-item item-has-children">
								<div role="button" tabindex="0" class="dropdown-toggle" @click="toggleDropdown($event)">File</div>
								<ul class="sub-menu">
									<li>
										<div role="button" tabindex="0" @click="$emit('on-new-project-clicked')">New project</div>
									</li>
									<li>
										<div role="button" tabindex="0" @click="$emit('on-open-project')">Open project</div>
									</li>
								</ul>
							</li>
							<li class="menu-item item-has-children">
								<div role="button" tabindex="0" class="dropdown-toggle" @click="toggleDropdown($event)">Project</div>
								<ul class="sub-menu">
									<li>
										<div role="button" tabindex="0" @click="$emit('on-new-project-clicked')">Scene configuration</div>
									</li>
									<li class="divider"></li>
									<li>
										<div role="button" tabindex="0" @click="$emit('on-open-settings')">Settings</div>
									</li>
								</ul>
							</li>
							<!-- <li class="menu-item item-has-children">
								<div role="button" tabindex="0" class="dropdown-toggle" @click="toggleDropdown($event)">View</div>
								<ul class="sub-menu">
									<li>
										<div>
											<input type="checkbox" id="toggle-layer-highlighting" name="toggle-layer-highlighting" class="chk-highlight-current-layer" />
											<label for="toggle-layer-highlighting">Toggle layer highlighting</label>
										</div>
									</li>
								</ul>
							</li>
							<li class="menu-item">
								<div role="button" tabindex="0" y-ref="/options">Options</div>
							</li> -->
						</ul>
					</div>
					<!-- <div class="nav-center" v-if="project && project.engineConfig">{{ project.engineConfig.name }} <span>/</span> Yak Engine</div> -->
					<div class="nav-right">
						<ul class="nav-item">
							<li class="menu-item">
								<div role="button" tabindex="0" @click="minimize()">
									<i class="fa fa-window-minimize"></i>
								</div>
							</li>
							<li class="menu-item">
								<div role="button" tabindex="0" @click="toggleWindowState()">
									<i class="fa fa-window-restore"></i>
								</div>
							</li>
							<li class="menu-item">
								<div role="button" tabindex="0" @click="close()">
									<i class="fa fa-close fa-lg text-red"></i>
								</div>
							</li>
						</ul>
					</div>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class MainMenu extends Vue {
	constructor() {
		super();

		document.addEventListener('click', (event: MouseEvent) => {
			let mainMenu = <HTMLElement>this.$refs.mainMenu;

			if (!mainMenu.contains(<HTMLElement>event.target)) {
				mainMenu.querySelectorAll('.menu-item.item-has-children.expanded').forEach((expandedMenuItem) => {
					expandedMenuItem.classList.remove('expanded');
				});
			}
		});
	}

	toggleWindowState(): void {
		let browserWindow = (window as any).electron.getCurrentWindow();

		if (browserWindow.isMaximized()) {
			this.minimize();
		} else {
			this.maximize();
		}
	}

	maximize(): void {
		(window as any).electron.getCurrentWindow().maximize();
	}

	minimize(): void {
		(window as any).electron.getCurrentWindow().minimize();
	}

	close(): void {
		(window as any).electron.getCurrentWindow().close();
	}

	toggleDropdown(event: MouseEvent) {
		let target = <HTMLElement>event.target;

		if (target.parentElement.classList.contains('item-has-children')) {
			target.parentElement.classList.add('expanded');
		}
	}
}
</script>

<style scoped lang="scss">
.menu-item {
	cursor: pointer;
}

.fill-dark {
	background-color: #323233;
}

.nav.nav-menu .nav-item > li div[role="button"] {
	font-size: 15px;
}
</style>
