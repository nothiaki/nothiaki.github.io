import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from "../projects/projects.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProjectsComponent]
})
export class HomeComponent implements OnInit {
  face: string = '';

  ngOnInit(): void {
    const arr: string[] = [':)', ';)', ':3', ':D', ':P', '<3'];
    
    this.face = arr[Math.floor(Math.random() * arr.length)];
  }
}
