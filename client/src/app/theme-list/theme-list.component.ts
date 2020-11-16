import { Component, OnInit } from '@angular/core';
import { ITheme } from '../theme.interface';
import { ThemeService } from './theme.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})


export class ThemeListComponent implements OnInit {
  themes: ITheme[];
  lastThemes: ITheme[];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService
      .getThemes()
      .subscribe(result => { this.themes = result; });

    this.themeService
      .getThemes()
      .pipe(
        map(events => events
          .sort((a, b) =>
           new Date(b.created_at).getTime() - 
           new Date(a.created_at).getTime())))
      .subscribe(result => { this.lastThemes = result; });
  }

}
