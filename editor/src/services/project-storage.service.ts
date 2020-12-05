import AppDataService from './app-data.service';

const fs = window.require('fs');
const fs_extra = window.require('fs-extra');
const path = window.require('path');

export default class ProjectStorageService extends AppDataService {
    fileName: string = 'projects';

    constructor() {
        super();
    }

    create(project: any): void {
        let projects = this.load<any[]>() || [];
        projects.push(project);
        this.save(projects);

        this.copyDefaultProject(project);
    }

    copyDefaultProject(project: any): void {
        let source = path.join((window as any).dirname, "../public/default-project");
        let destination = project.path;

        if (!fs.existsSync(destination)){
            fs.mkdirSync(destination, { recursive: true });
        }

        fs_extra.copy(source, destination, function(error) {
            if (error) {
                throw error;
            } else {
              console.log("success!");
            }
        }); 
    }
}