import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './theme/theme.service';


@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
