import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { repository } from '../types/repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private http = inject(HttpClient);
  url: string = 'https://api.github.com/users/NotHiaki/repos';

  getRepositories(): Observable<repository[]> {
    return this.http.get<repository[]>(this.url);
  }
}
