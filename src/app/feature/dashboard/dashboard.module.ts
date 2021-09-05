import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModuleModule
  ]
})
export class DashboardModule { }
