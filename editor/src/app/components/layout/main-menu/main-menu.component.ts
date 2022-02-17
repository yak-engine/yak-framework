import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-main-menu]',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
	constructor() {
		document.addEventListener('click', (event: MouseEvent) => {
			// let mainMenu = <HTMLElement>this.$refs.mainMenu;

			// if (!mainMenu.contains(<HTMLElement>event.target)) {
			// 	mainMenu.querySelectorAll('.menu-item.item-has-children.expanded').forEach((expandedMenuItem) => {
			// 		expandedMenuItem.classList.remove('expanded');
			// 	});
			// }
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

		// if (target.parentElement.classList.contains('item-has-children')) {
		// 	target.parentElement.classList.add('expanded');
		// }
	}
}
