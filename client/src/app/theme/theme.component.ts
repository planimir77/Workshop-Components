import { Component, OnInit } from '@angular/core';
import { ITheme } from '../theme.interface';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})


export class ThemeComponent implements OnInit {
  themes: ITheme[];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService
      .getThemes()
      .subscribe(result => { this.themes = result });
  }

}
