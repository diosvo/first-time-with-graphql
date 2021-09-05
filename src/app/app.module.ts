import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from './feature/dashboard/dashboard.module';
import { TodoListComponent } from './feature/dashboard/todo-list/todo-list.component';
import { LoginComponent } from './feature/login/login.component';
import { LoginModule } from './feature/login/login.module';
import { RegisterComponent } from './feature/register/register.component';
import { RegisterModule } from './feature/register/register.module';
import { GraphQLModule } from './graphql.module';

const routes: Routes = [
  {
    path: '', component: TodoListComponent
  } ,
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

    LoginModule,
    DashboardModule,
    RegisterModule,

    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
