import BaseService from './base.service';

export default class SceneService extends BaseService<any> {
    get api(): string {
        return `${this.baseUrl}/scene`;
    }

    public async addScene(scene: any): Promise<any> {
        return this.post(`${this.api}/add`, scene);
    }

    public async updateScene(scene: any): Promise<any> {
        return this.post(`${this.api}/update`, scene);
    }

    public async deleteScene(sceneName: string): Promise<any> {
        return this.get(`${this.api}/delete/${sceneName}`);
    }

    public async getScene(sceneName: string): Promise<any> {
        return this.get(`${this.api}/get/${sceneName}`);
    }

    public async listScenes(): Promise<any[]> {
        return this.get(`${this.api}/list`);
    }
}