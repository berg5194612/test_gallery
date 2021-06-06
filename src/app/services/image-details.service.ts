import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../image';

@Injectable({
  providedIn: 'root',
})
export class ImageDetailsService {
  constructor(private httpClient: HttpClient) {}

  getDetails(url: string): Observable<Image> {
    return this.httpClient.get<Image>(url);
  }
}
