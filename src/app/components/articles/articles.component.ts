import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  private apiService = inject(ApiService);
  protected articles$ = this.apiService.getArticles();
}
