import { Component, Input, OnInit } from '@angular/core';
import { ITheme } from '../theme.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Input() theme: ITheme;

  constructor() { }

  ngOnInit(): void { }

}
