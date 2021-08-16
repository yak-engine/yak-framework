import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: '[app-project-hierarchy]',
  templateUrl: './project-hierarchy.component.html',
  styleUrls: ['./project-hierarchy.component.scss']
})
export class ProjectHierarchyComponent implements OnInit {
  public project?: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
