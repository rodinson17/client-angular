import { UserComponent } from './components/component-user/user/user.component';
import { UsersComponent } from './components/component-user/users/users.component';
import { LoginReactiveComponent } from './components/component-auth/login-reactive/login-reactive.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/component-auth/login/login.component';
import { RegisterComponent } from './components/component-auth/register/register.component';
import { PostsComponent } from './components/component-post/posts/posts.component';
import { PostComponent } from './components/component-post/post/post.component';
import { NoFoundComponent } from './components/no-found/no-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  /* { path: 'login', component: LoginComponent }, */
  { path: 'login', component: LoginReactiveComponent }, /* login-reactive */
  { path: 'registrase', component: RegisterComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'usuario/:id', component: UserComponent },
  { path: '**', component: NoFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
