import gql from "graphql-tag";

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

const ADD_TASK = gql`
  mutation AddTask($author_id: uuid!, $description: String!, $title: String!) {
  insert_tasks(objects: {author_id: $author_id, title: $title, description: $description}) {
    returning {
      author_id
      title
      description
      user {
        uuid
        full_name
      }
    }
  }
}
`;

export { GET_TASK, ADD_TASK }
