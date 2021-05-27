import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponent } from './appareil-view-component/appareil-view.component';

import { BlogComponent } from './BlogComponent/blog.component';
import { HomeComponent } from './HomeComponent/home.component';


const routes: Routes = [
  { path: 'blogs', component: BlogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'devices', component: AppareilViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }