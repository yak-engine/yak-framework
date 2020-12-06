import Project from '@/models/project';
import AppDataService from './app-data.service';
import EngineConfig from '../../../engine/src/engine-config';

const fs = window.require('fs');
const fs_extra = window.require('fs-extra');
const path = window.require('path');
const yaml = window.require('js-yaml');

export default class ProjectStorageService extends AppDataService {
    fileName: string = 'projects';

    public static engineConfig: EngineConfig = new EngineConfig();
    public static currentProjectPath: string = '';

    public create(project: Project, isImport: boolean = false): void {
        let projects = this.load<Project[]>() || [];

        projects.push(project);

        this.save(projects);

        if (!isImport) {
            if (!fs.existsSync(project.path)){
                fs.mkdirSync(project.path, { recursive: true });
            }
    
            fs_extra.copy(path.join((window as any).dirname, "../public/default-project"), project.path, function(error) {
                if (error) {
                    throw error;
                } else {
                  console.log("Project directory created successfully!");
                }
            }); 
        }
    }

    public open(path: string, isImport: boolean = false): EngineConfig {
        let engineConfig: EngineConfig = this.loadEngineConfig(path);

        if (!engineConfig) {
            throw "Engine config does not exist cannot open folder.";
        }

        let existingProject: Project = this.load<Project[]>().find(x => x.path == path);        

        if (isImport) {
            if (existingProject) {
                throw "Project already imported.";
            }
            else {
                let project = new Project();
    
                project.name = engineConfig.name;
                project.path = path;
    
                this.create(project, true);
            }
        }

        return engineConfig;
    }

    private loadEngineConfig(projectPath: string): EngineConfig {
        let engineConfigPath: string = path.join(projectPath, 'engine.yaml');

        if (!fs.existsSync(engineConfigPath)){
            throw "Not a valid project folder.";
        }

        return yaml.safeLoad(fs.readFileSync(engineConfigPath, 'utf8'));
    }
}