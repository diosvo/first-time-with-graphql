import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { DashboardModule } from './feature/dashboard/dashboard.module';
import { TodoListComponent } from './feature/dashboard/todo-list/todo-list.component';
import { LoginComponent } from './feature/login/login.component';
import { LoginModule } from './feature/login/login.module';
import { RegisterComponent } from './feature/register/register.component';
import { RegisterModule } from './feature/register/register.module';
import { GraphQLModule } from './graphql.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),

    LoginModule,
    DashboardModule,
    RegisterModule,

    GraphQLModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
