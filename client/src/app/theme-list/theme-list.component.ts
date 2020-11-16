import { Component, OnInit } from '@angular/core';
import { ITheme } from '../theme.interface';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})


export class ThemeListComponent implements OnInit {
  themes: ITheme[];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService
      .getThemes()
      .subscribe(result => { this.themes = result });
  }

}
