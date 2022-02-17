// Third party imports.
import { Component, OnInit } from '@angular/core';

// Local imports.
import { Project } from 'models/project';

@Component({
    selector: '[app-project-hierarchy]',
    templateUrl: './project-hierarchy.component.html',
    styleUrls: ['./project-hierarchy.component.scss']
})
export class ProjectHierarchyComponent implements OnInit {
    public project?: Project;

    constructor() { }

    public ngOnInit(): void {

    }
}
