import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GithubRepository } from '../types/githubRepository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  githubUrl: string = 'https://api.github.com/users/NotHiaki/repos';

  getGithubRepositories(): Observable<GithubRepository[]> {
    return this.http.get<GithubRepository[]>(this.githubUrl);
  }
}
