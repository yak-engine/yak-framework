const fs = window.require('fs');

export default abstract class ProjectDataService {
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
        fs.writeFileSync(this.filePath, JSON.stringify(entity));
    }

    public load<TEntity>(): TEntity {
        if (fs.existsSync(this.filePath)) {
            let fileData = fs.readFileSync(this.filePath);

            if (fileData) {
                return JSON.parse(fileData) as TEntity;
            }
        }
        
        return null;
    }
}