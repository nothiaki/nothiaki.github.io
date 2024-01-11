import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: []
})
export class HomeComponent implements OnInit {
  face: string = '';

  ngOnInit(): void {
    const arr: string[] = [':)', ';)', ':3', ':D', ':P', '<3'];
    
    this.face = arr[Math.floor(Math.random() * arr.length)];
  }
}
