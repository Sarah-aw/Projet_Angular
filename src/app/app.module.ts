import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// TP2
import { AppareilComponent } from'./appareil/appareil.component';
import { AppareilViewComponent } from'./appareil-view-component/appareil-view.component';
import { AppComponent } from './AppComponent/app.component';
import { BlogComponent } from './BlogComponent/blog.component';


// TP1
import { PostListItemComponent } from './component/post-list-item/post-list-item.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Materiel_Angular
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './HomeComponent/home.component';

@NgModule({
  declarations: [
    // TP2
    AppareilComponent,
    AppareilViewComponent,
    AppComponent,
    BlogComponent,
    HomeComponent,
    // TP1
    PostListItemComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
