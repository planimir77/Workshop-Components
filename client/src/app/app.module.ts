import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './theme/theme.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    HeaderComponent,
    HomeComponent,
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
