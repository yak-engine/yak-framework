import Application from '../../engine/src/application';

export default class SpaceInvaders extends Application {
    constructor() {
        super();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    let spaceInvaders = new SpaceInvaders();
    spaceInvaders.start();
});