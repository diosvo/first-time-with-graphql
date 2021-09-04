interface IUser {
  uuid: string;
  full_name: string;
}

interface ITask {
  uuid: string;
  title: string;
  description: string;
  user: IUser;
}

interface IResponse {
  tasks: Array<ITask>;
}

export { ITask, IResponse }
