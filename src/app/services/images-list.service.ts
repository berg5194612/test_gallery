import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../image';

@Injectable({
  providedIn: 'root',
})
export class ImagesListService {
  constructor(private httpClient: HttpClient) {}

  private _url = 'https://picsum.photos/v2/list';

  getImages(): Observable<any[]> {
    return this.httpClient.get<Image[]>(this._url);
  }
}
