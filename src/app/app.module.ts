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
import { GraphQLModule } from './graphql.module';

const routes: Routes = [
  {
    path: '', component: TodoListComponent
  } ,
  {
    path: 'login', component: LoginComponent
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

    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
