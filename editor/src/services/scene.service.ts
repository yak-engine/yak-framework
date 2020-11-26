import BaseService from "./base.service";

export default class SceneService extends BaseService<any> {
    get api(): string {
        return `${this.baseUrl}/scene`;
    }

    // add

    // update

    // delete

    // get
    async getScene(sceneName: string): Promise<any> {
        return this.get(`${this.api}/get/${sceneName}`);
    }

    // list
}