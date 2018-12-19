import { Component, OnInit } from '@angular/core';
// REMEMBER to Import our service
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title = 'This is the project page';
  projects;

  // to implement the service to call our projects
  // with a constructor we initialize an object
  constructor(service: ProjectsService) {
    this.projects = service.getProjects();
  }

  ngOnInit() {
  }

}
