import BaseService from "./base.service";

export default class SceneService extends BaseService<any> {
    get api(): string {
        return `${this.baseUrl}/scene`;
    }

    // add
    async addScene(scene: any): Promise<any> {
        return this.post(`${this.api}/add`, scene);
    }

    // update
    async updateScene(scene: any): Promise<any> {
        return this.post(`${this.api}/update`, scene);
    }

    // delete
    async deleteScene(sceneName: string): Promise<any> {
        return this.get(`${this.api}/delete/${sceneName}`);
    }

    // get
    async getScene(sceneName: string): Promise<any> {
        return this.get(`${this.api}/get/${sceneName}`);
    }

    // list
    async listScenes(): Promise<Array<any>> {
        return this.get(`${this.api}/list`);
    }
}