import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/component-auth/register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { PostsComponent } from './components/component-post/posts/posts.component';
import { LoginComponent } from './components/component-auth/login/login.component';
import { UsersComponent } from './components/component-user/users/users.component';
import { UserComponent } from './components/component-user/user/user.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/component-post/post/post.component';
import { EmailInputComponent } from './components/component-form/email-input/email-input.component';
import { LoginReactiveComponent } from './components/component-auth/login-reactive/login-reactive.component';
import { SliderComponent } from './components/component-home/slider/slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CardComponent } from './components/component-home/card/card.component';
import { NavComponent } from './components/component-home/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginComponent,
    UsersComponent,
    NoFoundComponent,
    HomeComponent,
    PostComponent,
    RegisterComponent,
    EmailInputComponent,
    LoginReactiveComponent,
    SliderComponent,
    CardComponent,
    NavComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
