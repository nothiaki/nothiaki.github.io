import { Component, inject } from '@angular/core';
import { RepositoriesService } from '../../services/repositories.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private repositoriesServive = inject(RepositoriesService);
  protected repositories$ = this.repositoriesServive.getRepositories();
}
