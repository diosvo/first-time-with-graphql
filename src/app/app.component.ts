import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_TASK = gql`
  query Tasks {
    tasks {
      uuid
      title
      description
      user {
        uuid
        full_name
      }
    }
  }
`;

interface User {
  uuid: string;
  full_name: string;
}

interface Task {
  uuid: string;
  title: string;
  description: string;
  user: User;
}

interface Response {
  tasks: Array<Task>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-time-with-graphql';

  tasks$!: Observable<Array<Task>>;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.tasks$ = this.apollo
      .watchQuery<Response>({
        query: GET_TASK
      }).valueChanges
      .pipe(
        map(response => response.data.tasks)
      )
  }
}
