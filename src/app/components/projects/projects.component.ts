import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private apiService = inject(ApiService);
  protected repositories$ = this.apiService.getGithubRepositories();
}
