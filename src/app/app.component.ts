import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddTaskGQL, TasksGQL, TasksQuery } from "../generated/graphql";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tasks$!: Observable<TasksQuery['tasks']>;
  queryRef!: QueryRef<TasksQuery, {}>;

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    author_id: ['2be9705c-52fe-4c7a-aed2-53a0088b2363', Validators.required]
  })

  constructor(
    private tasks: TasksGQL,
    private addTask: AddTaskGQL,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.queryRef = this.tasks.watch();
    this.loadTasks();
  }

  async onSubmit(): Promise<void> {
    await this.addTask.mutate(this.form.value).subscribe({
      next: () => {
        this.form.reset();
        this.queryRef.refetch();
      },
      error: ({ error }) => console.error(error)
    })
  }

  private loadTasks(): void {
    this.tasks$ = this.queryRef.valueChanges
      .pipe(map(response => response.data.tasks))
  }
}
