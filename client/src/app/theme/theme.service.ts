import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITheme } from '../theme.interface';

import {environment} from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  getThemes(): Observable<ITheme[]>{
    return this.http.get<ITheme[]>(`${apiUrl}/themes`);
  }
}
