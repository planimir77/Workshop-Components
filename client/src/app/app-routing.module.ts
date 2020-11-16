import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  { path: 'theme', component: ThemeComponent },
  { path: '', redirectTo: '/theme', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };
