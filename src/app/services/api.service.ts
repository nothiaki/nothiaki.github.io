import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GithubRepository } from '../types/githubRepository';
import { Observable } from 'rxjs';
import { Article } from '../types/Article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  githubUrl: string = 'https://api.github.com/users/NotHiaki/repos';
  devUrl: string = 'https://dev.to/api/articles?username=hiaki';

  getGithubRepositories(): Observable<GithubRepository[]> {
    return this.http.get<GithubRepository[]>(this.githubUrl);
  };

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.devUrl);
  };
}
