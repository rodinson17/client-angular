import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { PostsComponent } from './components/component-post/posts/posts.component';
import { LoginComponent } from './components/component-auth/login/login.component';
import { UsersComponent } from './components/component-user/users/users.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/component-post/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginComponent,
    UsersComponent,
    NoFoundComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
