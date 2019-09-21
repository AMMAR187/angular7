import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view', component: ViewComponent },
  { path: 'display', component: DisplayComponent },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
