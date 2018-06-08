import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { MusicObject } from './music-object';
import { MusicData } from './music-data';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  content: Observable<MusicObject[]>;

  constructor() { }

  sendAll(): Observable<MusicObject[]> {
    return of (MusicData);
  }
}
