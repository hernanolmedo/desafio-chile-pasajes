import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {}

  getRandomImage(): Observable<{ url: string; message: string }> {
    return this.http.get<{ url: string; message: string }>(`/api/random`);
  }

  getImageList(): Observable<{ images: string[]; gifs: string[] }> {
    return this.http.get<{ images: string[]; gifs: string[] }>(`/api/list`);
  }

  getImageUrl(filename: string): string {
    return `/api/images/${filename}`;
  }
}
