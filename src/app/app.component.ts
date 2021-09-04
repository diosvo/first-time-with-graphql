import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponse, ITask } from "./models/table.interface";
import { ADD_TASK, GET_TASK } from "./actions/tasks";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-time-with-graphql';

  tasks$!: Observable<Array<ITask>>;
  queryRef!: QueryRef<IResponse>;

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    author_id: ['2be9705c-52fe-4c7a-aed2-53a0088b2363', Validators.required]
  })

  constructor(
    private apollo: Apollo,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.queryRef = this.apollo
      .watchQuery<IResponse>({
        query: GET_TASK
      });
    this.loadTasks();
  }

  async onSubmit(): Promise<void> {
    await this.apollo.mutate({
      mutation: ADD_TASK,
      variables: this.form.value
    }).subscribe({
      next: () => {
        this.form.reset();
        this.queryRef.refetch();
      },
      error: ({error}) => console.error(error)
    })
  }

  private loadTasks(): void {
    this.tasks$ = this.queryRef.valueChanges
      .pipe(map(response => response.data.tasks))
  }
}
