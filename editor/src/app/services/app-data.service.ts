export default abstract class AppDataService {
    // The application folder in the AppData.
    userDataPath: string;

    get filePath(): string {
        return `${this.userDataPath}/${this.fileName}.json`;
    }

    abstract fileName: string;

    constructor() {
        this.userDataPath = window.electron.app.getPath('userData');
    }

    public save<TEntity>(entity: TEntity): void {
        const fs = window.require('fs');
        fs.writeFileSync(this.filePath, JSON.stringify(entity));
    }

    public load<TEntity>(): TEntity {
        const fs = window.require('fs');

        if (fs.existsSync(this.filePath)) {
            let fileData = fs.readFileSync(this.filePath);

            if (fileData) {
                return JSON.parse(fileData) as TEntity;
            }
        }
        
        return null;
    }
}