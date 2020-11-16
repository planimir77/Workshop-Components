import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './theme-list/theme.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { AsideComponent } from './aside/aside.component';


@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    HeaderComponent,
    HomeComponent,
    ThemeListItemComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ThemeService],
  bootstrap: [
    AppComponent,
    HeaderComponent,]
})
export class AppModule {
}
