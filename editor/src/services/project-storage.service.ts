import Project from '@/models/project';
import AppDataService from './app-data.service';
import ApplicationConfig from '../../../engine/src/models/application-config';
import SettingsStorageService from './settings-storage.service';
import EditorSettings from '@/models/editor-settings';

const fs = window.require('fs');
const path = window.require('path');
const yaml = window.require('js-yaml');

export default class ProjectStorageService extends AppDataService {
    fileName: string = 'projects';

    public create(project: Project, isImport: boolean = false): void {
        let projects = this.load<Project[]>() || [];

        projects.push(project);

        this.save(projects);

        if (!isImport) {
            if (!fs.existsSync(project.path)){
                fs.mkdirSync(project.path, { recursive: true });
            }

            // TODO: These directories shouldn't alway be required. Let the user decide the project directory structure.
            // Create required directories.
            let requiredDirs = ['tilesets', 'scripts', 'scenes'];

            requiredDirs.map((requiredDir) => {
                if (!fs.existsSync(requiredDir)) {
                    fs.mkdirSync(requiredDir)
                }
            });

            let defaultEngineConfig: ApplicationConfig = new ApplicationConfig();

            defaultEngineConfig.name = 'default';
            defaultEngineConfig.scenes = [];

            fs.writeFileSync(project.path, JSON.stringify(defaultEngineConfig));
        }
    }

    public open(projectPath: string, isImport: boolean = false): Project {
        let engineConfigPath: string = path.join(projectPath, 'application.json');

        if (!fs.existsSync(engineConfigPath)){
            throw "Not a valid project folder.";
        }

        let engineConfig = yaml.safeLoad(fs.readFileSync(engineConfigPath, 'utf8'));

        if (!engineConfig) {
            throw "Engine config does not exist cannot open folder.";
        }

        let existingProject: Project = this.load<Project[]>().find(x => x.path == projectPath);

        if (isImport) {
            if (existingProject) {
                throw "Project already imported.";
            }
            else {
                let project = new Project();
    
                project.path = path;
                project.engineConfig = engineConfig;
    
                this.create(project, true);

                existingProject = project;
            }
        }
        else {
            existingProject.engineConfig = engineConfig;
        }

        let settingsStorageService: SettingsStorageService = new SettingsStorageService();
        let editorSettings: EditorSettings = settingsStorageService.load() || new EditorSettings();

        editorSettings.lastProjectPath = existingProject.path;
        settingsStorageService.save(editorSettings);

        const getDirectories = (path, projectTree) => {
            return fs.readdirSync(path, { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((directory) => {
                let directoryItem = {
                    title: directory.name,
                    children: []
                };

                getDirectories(`${path}\\${directory.name}`, directoryItem.children);

                projectTree.push(directoryItem);
            });
        }

        let projectTree = [];
        
        getDirectories(existingProject.path, projectTree)
        
        existingProject.tree = projectTree;

        return existingProject;
    }
}