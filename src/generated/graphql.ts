import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
}

export interface SignUpCredentials {
  display_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
}

/** columns and relationships of "comments" */
export interface Comments {
  __typename?: 'comments';
  comment: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  photo_id: Scalars['uuid'];
}

/** aggregated selection of "comments" */
export interface CommentsAggregate {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<CommentsAggregateFields>;
  nodes: Array<Comments>;
}

/** aggregate fields of "comments" */
export interface CommentsAggregateFields {
  __typename?: 'comments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CommentsMaxFields>;
  min?: Maybe<CommentsMinFields>;
}


/** aggregate fields of "comments" */
export interface CommentsAggregateFieldsCountArgs {
  columns?: Maybe<Array<CommentsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "comments" */
export interface CommentsAggregateOrderBy {
  count?: Maybe<OrderBy>;
  max?: Maybe<CommentsMaxOrderBy>;
  min?: Maybe<CommentsMinOrderBy>;
}

/** input type for inserting array relation for remote table "comments" */
export interface CommentsArrRelInsertInput {
  data: Array<CommentsInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<CommentsOnConflict>;
}

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export interface CommentsBoolExp {
  _and?: Maybe<Array<CommentsBoolExp>>;
  _not?: Maybe<CommentsBoolExp>;
  _or?: Maybe<Array<CommentsBoolExp>>;
  comment?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  photo_id?: Maybe<UuidComparisonExp>;
}

/** unique or primary key constraints on table "comments" */
export enum CommentsConstraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey'
}

/** input type for inserting data into table "comments" */
export interface CommentsInsertInput {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  photo_id?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface CommentsMaxFields {
  __typename?: 'comments_max_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  photo_id?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "comments" */
export interface CommentsMaxOrderBy {
  comment?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  photo_id?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface CommentsMinFields {
  __typename?: 'comments_min_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  photo_id?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "comments" */
export interface CommentsMinOrderBy {
  comment?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  photo_id?: Maybe<OrderBy>;
}

/** response of any mutation on the table "comments" */
export interface CommentsMutationResponse {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
}

/** on conflict condition type for table "comments" */
export interface CommentsOnConflict {
  constraint: CommentsConstraint;
  update_columns?: Array<CommentsUpdateColumn>;
  where?: Maybe<CommentsBoolExp>;
}

/** Ordering options when selecting data from "comments". */
export interface CommentsOrderBy {
  comment?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  photo_id?: Maybe<OrderBy>;
}

/** primary key columns input for table: comments */
export interface CommentsPkColumnsInput {
  id: Scalars['uuid'];
}

/** select columns of table "comments" */
export enum CommentsSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoId = 'photo_id'
}

/** input type for updating data in table "comments" */
export interface CommentsSetInput {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  photo_id?: Maybe<Scalars['uuid']>;
}

/** update columns of table "comments" */
export enum CommentsUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoId = 'photo_id'
}

/** mutation root */
export interface MutationRoot {
  __typename?: 'mutation_root';
  create_user?: Maybe<User>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<CommentsMutationResponse>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "photos" */
  delete_photos?: Maybe<PhotosMutationResponse>;
  /** delete single row from the table: "photos" */
  delete_photos_by_pk?: Maybe<Photos>;
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<TasksMutationResponse>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<CommentsMutationResponse>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "photos" */
  insert_photos?: Maybe<PhotosMutationResponse>;
  /** insert a single row into the table: "photos" */
  insert_photos_one?: Maybe<Photos>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<TasksMutationResponse>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<CommentsMutationResponse>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "photos" */
  update_photos?: Maybe<PhotosMutationResponse>;
  /** update single row of the table: "photos" */
  update_photos_by_pk?: Maybe<Photos>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<TasksMutationResponse>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
}


/** mutation root */
export interface MutationRootCreateUserArgs {
  credentials: SignUpCredentials;
}


/** mutation root */
export interface MutationRootDeleteCommentsArgs {
  where: CommentsBoolExp;
}


/** mutation root */
export interface MutationRootDeleteCommentsByPkArgs {
  id: Scalars['uuid'];
}


/** mutation root */
export interface MutationRootDeletePhotosArgs {
  where: PhotosBoolExp;
}


/** mutation root */
export interface MutationRootDeletePhotosByPkArgs {
  id: Scalars['uuid'];
}


/** mutation root */
export interface MutationRootDeleteTasksArgs {
  where: TasksBoolExp;
}


/** mutation root */
export interface MutationRootDeleteTasksByPkArgs {
  uuid: Scalars['uuid'];
}


/** mutation root */
export interface MutationRootDeleteUserArgs {
  where: UserBoolExp;
}


/** mutation root */
export interface MutationRootDeleteUserByPkArgs {
  uuid: Scalars['uuid'];
}


/** mutation root */
export interface MutationRootInsertCommentsArgs {
  objects: Array<CommentsInsertInput>;
  on_conflict?: Maybe<CommentsOnConflict>;
}


/** mutation root */
export interface MutationRootInsertCommentsOneArgs {
  object: CommentsInsertInput;
  on_conflict?: Maybe<CommentsOnConflict>;
}


/** mutation root */
export interface MutationRootInsertPhotosArgs {
  objects: Array<PhotosInsertInput>;
  on_conflict?: Maybe<PhotosOnConflict>;
}


/** mutation root */
export interface MutationRootInsertPhotosOneArgs {
  object: PhotosInsertInput;
  on_conflict?: Maybe<PhotosOnConflict>;
}


/** mutation root */
export interface MutationRootInsertTasksArgs {
  objects: Array<TasksInsertInput>;
  on_conflict?: Maybe<TasksOnConflict>;
}


/** mutation root */
export interface MutationRootInsertTasksOneArgs {
  object: TasksInsertInput;
  on_conflict?: Maybe<TasksOnConflict>;
}


/** mutation root */
export interface MutationRootInsertUserArgs {
  objects: Array<UserInsertInput>;
  on_conflict?: Maybe<UserOnConflict>;
}


/** mutation root */
export interface MutationRootInsertUserOneArgs {
  object: UserInsertInput;
  on_conflict?: Maybe<UserOnConflict>;
}


/** mutation root */
export interface MutationRootUpdateCommentsArgs {
  _set?: Maybe<CommentsSetInput>;
  where: CommentsBoolExp;
}


/** mutation root */
export interface MutationRootUpdateCommentsByPkArgs {
  _set?: Maybe<CommentsSetInput>;
  pk_columns: CommentsPkColumnsInput;
}


/** mutation root */
export interface MutationRootUpdatePhotosArgs {
  _set?: Maybe<PhotosSetInput>;
  where: PhotosBoolExp;
}


/** mutation root */
export interface MutationRootUpdatePhotosByPkArgs {
  _set?: Maybe<PhotosSetInput>;
  pk_columns: PhotosPkColumnsInput;
}


/** mutation root */
export interface MutationRootUpdateTasksArgs {
  _set?: Maybe<TasksSetInput>;
  where: TasksBoolExp;
}


/** mutation root */
export interface MutationRootUpdateTasksByPkArgs {
  _set?: Maybe<TasksSetInput>;
  pk_columns: TasksPkColumnsInput;
}


/** mutation root */
export interface MutationRootUpdateUserArgs {
  _set?: Maybe<UserSetInput>;
  where: UserBoolExp;
}


/** mutation root */
export interface MutationRootUpdateUserByPkArgs {
  _set?: Maybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * This is all photos uploaded by users
 *
 *
 * columns and relationships of "photos"
 *
 */
export interface Photos {
  __typename?: 'photos';
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: CommentsAggregate;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  photo_url: Scalars['String'];
  updated_at: Scalars['timestamptz'];
}


/**
 * This is all photos uploaded by users
 *
 *
 * columns and relationships of "photos"
 *
 */
export interface PhotosCommentsArgs {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
}


/**
 * This is all photos uploaded by users
 *
 *
 * columns and relationships of "photos"
 *
 */
export interface PhotosCommentsAggregateArgs {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
}

/** aggregated selection of "photos" */
export interface PhotosAggregate {
  __typename?: 'photos_aggregate';
  aggregate?: Maybe<PhotosAggregateFields>;
  nodes: Array<Photos>;
}

/** aggregate fields of "photos" */
export interface PhotosAggregateFields {
  __typename?: 'photos_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PhotosMaxFields>;
  min?: Maybe<PhotosMinFields>;
}


/** aggregate fields of "photos" */
export interface PhotosAggregateFieldsCountArgs {
  columns?: Maybe<Array<PhotosSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** Boolean expression to filter rows from the table "photos". All fields are combined with a logical 'AND'. */
export interface PhotosBoolExp {
  _and?: Maybe<Array<PhotosBoolExp>>;
  _not?: Maybe<PhotosBoolExp>;
  _or?: Maybe<Array<PhotosBoolExp>>;
  comments?: Maybe<CommentsBoolExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  photo_url?: Maybe<StringComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
}

/** unique or primary key constraints on table "photos" */
export enum PhotosConstraint {
  /** unique or primary key constraint */
  PhotosPkey = 'photos_pkey'
}

/** input type for inserting data into table "photos" */
export interface PhotosInsertInput {
  comments?: Maybe<CommentsArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** aggregate max on columns */
export interface PhotosMaxFields {
  __typename?: 'photos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** aggregate min on columns */
export interface PhotosMinFields {
  __typename?: 'photos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** response of any mutation on the table "photos" */
export interface PhotosMutationResponse {
  __typename?: 'photos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Photos>;
}

/** on conflict condition type for table "photos" */
export interface PhotosOnConflict {
  constraint: PhotosConstraint;
  update_columns?: Array<PhotosUpdateColumn>;
  where?: Maybe<PhotosBoolExp>;
}

/** Ordering options when selecting data from "photos". */
export interface PhotosOrderBy {
  comments_aggregate?: Maybe<CommentsAggregateOrderBy>;
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  photo_url?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
}

/** primary key columns input for table: photos */
export interface PhotosPkColumnsInput {
  id: Scalars['uuid'];
}

/** select columns of table "photos" */
export enum PhotosSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "photos" */
export interface PhotosSetInput {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** update columns of table "photos" */
export enum PhotosUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

export interface QueryRoot {
  __typename?: 'query_root';
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "photos" */
  photos: Array<Photos>;
  /** fetch aggregated fields from the table: "photos" */
  photos_aggregate: PhotosAggregate;
  /** fetch data from the table: "photos" using primary key columns */
  photos_by_pk?: Maybe<Photos>;
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** An aggregate relationship */
  tasks_aggregate: TasksAggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
}


export interface QueryRootCommentsArgs {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
}


export interface QueryRootCommentsAggregateArgs {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
}


export interface QueryRootCommentsByPkArgs {
  id: Scalars['uuid'];
}


export interface QueryRootPhotosArgs {
  distinct_on?: Maybe<Array<PhotosSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PhotosOrderBy>>;
  where?: Maybe<PhotosBoolExp>;
}


export interface QueryRootPhotosAggregateArgs {
  distinct_on?: Maybe<Array<PhotosSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PhotosOrderBy>>;
  where?: Maybe<PhotosBoolExp>;
}


export interface QueryRootPhotosByPkArgs {
  id: Scalars['uuid'];
}


export interface QueryRootTasksArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}


export interface QueryRootTasksAggregateArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}


export interface QueryRootTasksByPkArgs {
  uuid: Scalars['uuid'];
}


export interface QueryRootUserArgs {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
}


export interface QueryRootUserAggregateArgs {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
}


export interface QueryRootUserByPkArgs {
  uuid: Scalars['uuid'];
}

export interface SubscriptionRoot {
  __typename?: 'subscription_root';
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "photos" */
  photos: Array<Photos>;
  /** fetch aggregated fields from the table: "photos" */
  photos_aggregate: PhotosAggregate;
  /** fetch data from the table: "photos" using primary key columns */
  photos_by_pk?: Maybe<Photos>;
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** An aggregate relationship */
  tasks_aggregate: TasksAggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
}


export interface SubscriptionRootCommentsArgs {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
}


export interface SubscriptionRootCommentsAggregateArgs {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
}


export interface SubscriptionRootCommentsByPkArgs {
  id: Scalars['uuid'];
}


export interface SubscriptionRootPhotosArgs {
  distinct_on?: Maybe<Array<PhotosSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PhotosOrderBy>>;
  where?: Maybe<PhotosBoolExp>;
}


export interface SubscriptionRootPhotosAggregateArgs {
  distinct_on?: Maybe<Array<PhotosSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PhotosOrderBy>>;
  where?: Maybe<PhotosBoolExp>;
}


export interface SubscriptionRootPhotosByPkArgs {
  id: Scalars['uuid'];
}


export interface SubscriptionRootTasksArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}


export interface SubscriptionRootTasksAggregateArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}


export interface SubscriptionRootTasksByPkArgs {
  uuid: Scalars['uuid'];
}


export interface SubscriptionRootUserArgs {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
}


export interface SubscriptionRootUserAggregateArgs {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
}


export interface SubscriptionRootUserByPkArgs {
  uuid: Scalars['uuid'];
}

/** columns and relationships of "tasks" */
export interface Tasks {
  __typename?: 'tasks';
  author_id: Scalars['uuid'];
  description: Scalars['String'];
  title: Scalars['String'];
  /** An object relationship */
  user: User;
  uuid: Scalars['uuid'];
}

/** aggregated selection of "tasks" */
export interface TasksAggregate {
  __typename?: 'tasks_aggregate';
  aggregate?: Maybe<TasksAggregateFields>;
  nodes: Array<Tasks>;
}

/** aggregate fields of "tasks" */
export interface TasksAggregateFields {
  __typename?: 'tasks_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TasksMaxFields>;
  min?: Maybe<TasksMinFields>;
}


/** aggregate fields of "tasks" */
export interface TasksAggregateFieldsCountArgs {
  columns?: Maybe<Array<TasksSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "tasks" */
export interface TasksAggregateOrderBy {
  count?: Maybe<OrderBy>;
  max?: Maybe<TasksMaxOrderBy>;
  min?: Maybe<TasksMinOrderBy>;
}

/** input type for inserting array relation for remote table "tasks" */
export interface TasksArrRelInsertInput {
  data: Array<TasksInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<TasksOnConflict>;
}

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export interface TasksBoolExp {
  _and?: Maybe<Array<TasksBoolExp>>;
  _not?: Maybe<TasksBoolExp>;
  _or?: Maybe<Array<TasksBoolExp>>;
  author_id?: Maybe<UuidComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  user?: Maybe<UserBoolExp>;
  uuid?: Maybe<UuidComparisonExp>;
}

/** unique or primary key constraints on table "tasks" */
export enum TasksConstraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey'
}

/** input type for inserting data into table "tasks" */
export interface TasksInsertInput {
  author_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<UserObjRelInsertInput>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface TasksMaxFields {
  __typename?: 'tasks_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "tasks" */
export interface TasksMaxOrderBy {
  author_id?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface TasksMinFields {
  __typename?: 'tasks_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "tasks" */
export interface TasksMinOrderBy {
  author_id?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** response of any mutation on the table "tasks" */
export interface TasksMutationResponse {
  __typename?: 'tasks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tasks>;
}

/** on conflict condition type for table "tasks" */
export interface TasksOnConflict {
  constraint: TasksConstraint;
  update_columns?: Array<TasksUpdateColumn>;
  where?: Maybe<TasksBoolExp>;
}

/** Ordering options when selecting data from "tasks". */
export interface TasksOrderBy {
  author_id?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** primary key columns input for table: tasks */
export interface TasksPkColumnsInput {
  uuid: Scalars['uuid'];
}

/** select columns of table "tasks" */
export enum TasksSelectColumn {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Description = 'description',
  /** column name */
  Title = 'title',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "tasks" */
export interface TasksSetInput {
  author_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** update columns of table "tasks" */
export enum TasksUpdateColumn {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Description = 'description',
  /** column name */
  Title = 'title',
  /** column name */
  Uuid = 'uuid'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
}

/** columns and relationships of "user" */
export interface User {
  __typename?: 'user';
  full_name: Scalars['String'];
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** An aggregate relationship */
  tasks_aggregate: TasksAggregate;
  uuid: Scalars['uuid'];
}


/** columns and relationships of "user" */
export interface UserTasksArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}


/** columns and relationships of "user" */
export interface UserTasksAggregateArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}

/** aggregated selection of "user" */
export interface UserAggregate {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
}

/** aggregate fields of "user" */
export interface UserAggregateFields {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
}


/** aggregate fields of "user" */
export interface UserAggregateFieldsCountArgs {
  columns?: Maybe<Array<UserSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface UserBoolExp {
  _and?: Maybe<Array<UserBoolExp>>;
  _not?: Maybe<UserBoolExp>;
  _or?: Maybe<Array<UserBoolExp>>;
  full_name?: Maybe<StringComparisonExp>;
  tasks?: Maybe<TasksBoolExp>;
  uuid?: Maybe<UuidComparisonExp>;
}

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export interface UserInsertInput {
  full_name?: Maybe<Scalars['String']>;
  tasks?: Maybe<TasksArrRelInsertInput>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface UserMaxFields {
  __typename?: 'user_max_fields';
  full_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate min on columns */
export interface UserMinFields {
  __typename?: 'user_min_fields';
  full_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** response of any mutation on the table "user" */
export interface UserMutationResponse {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
}

/** input type for inserting object relation for remote table "user" */
export interface UserObjRelInsertInput {
  data: UserInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<UserOnConflict>;
}

/** on conflict condition type for table "user" */
export interface UserOnConflict {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: Maybe<UserBoolExp>;
}

/** Ordering options when selecting data from "user". */
export interface UserOrderBy {
  full_name?: Maybe<OrderBy>;
  tasks_aggregate?: Maybe<TasksAggregateOrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** primary key columns input for table: user */
export interface UserPkColumnsInput {
  uuid: Scalars['uuid'];
}

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  FullName = 'full_name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "user" */
export interface UserSetInput {
  full_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  FullName = 'full_name',
  /** column name */
  Uuid = 'uuid'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
}

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'query_root', tasks: Array<{ __typename?: 'tasks', uuid: any, title: string, description: string, user: { __typename?: 'user', uuid: any, full_name: string } }> };

export type AddTaskMutationVariables = Exact<{
  author_id: Scalars['uuid'];
  description: Scalars['String'];
  title: Scalars['String'];
}>;


export type AddTaskMutation = { __typename?: 'mutation_root', insert_tasks?: Maybe<{ __typename?: 'tasks_mutation_response', returning: Array<{ __typename?: 'tasks', author_id: any, title: string, description: string, user: { __typename?: 'user', uuid: any, full_name: string } }> }> };

export const TasksDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class TasksGQL extends Apollo.Query<TasksQuery, TasksQueryVariables> {
    document = TasksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddTaskDocument = gql`
    mutation AddTask($author_id: uuid!, $description: String!, $title: String!) {
  insert_tasks(
    objects: {author_id: $author_id, title: $title, description: $description}
  ) {
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

  @Injectable({
    providedIn: 'root'
  })
  export class AddTaskGQL extends Apollo.Mutation<AddTaskMutation, AddTaskMutationVariables> {
    document = AddTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }