import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  projects = [{
    title: "Super Mario Bros 3 - Memory Game",
    image: "assets/images/super-mario-bros-memory-game.jpg",
    description: "Making use of Bootstrap, I reimagined that famous mini game",
    link: "https://github.com/FDMcreative/Super-Mario-Bros-3-Memory-Card-Game-Bootstrap"
  }, {
    title: "EJS Instagram-like App",
    image: "assets/images/instagram-clone-ejs.jpg",
    description: "A single page app similar to Instagram which makes use of EJS",
    link: "https://github.com/FDMcreative/instagram-clone-ejs"
  }, {
    title: "Angular Instagram-like App",
    image: "assets/images/instagram-clone-angularjs.jpg",
    description: "This is an instagram-like single page app which makes use of AngularJS.",
    link: "https://github.com/FDMcreative/instagram-clone-angularjs"
  }];

  getProjects() {
    return this.projects;
  }

  constructor() { }
}
