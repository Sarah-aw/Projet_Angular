import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppareilViewComponent } from './appareil-view-component/appareil-view.component';

import { BlogComponent } from './BlogComponent/blog.component';
import { HomeComponent } from './HomeComponent/home.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'blogs', component: BlogComponent,canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'devices', component: AppareilViewComponent,canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'', pathMatch:'full',redirectTo:'conexion'},
  { path: 'connexion', component: ConnexionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
