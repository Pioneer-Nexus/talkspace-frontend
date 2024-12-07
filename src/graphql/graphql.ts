/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AuthDto = {
  __typename?: 'AuthDto';
  _id: Scalars['String']['output'];
  accessToken: Scalars['String']['output'];
  authId?: Maybe<Scalars['String']['output']>;
  authSecret?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  refreshToken: Scalars['String']['output'];
  type: AuthType;
  updatedAt: Scalars['String']['output'];
  user: User;
  username?: Maybe<Scalars['String']['output']>;
};

export enum AuthType {
  Google = 'GOOGLE',
  Password = 'PASSWORD'
}

export type CreatedAuthDto = {
  __typename?: 'CreatedAuthDto';
  _id: Scalars['String']['output'];
  authId?: Maybe<Scalars['String']['output']>;
  authSecret?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  type: AuthType;
  updatedAt: Scalars['String']['output'];
  user: User;
  username?: Maybe<Scalars['String']['output']>;
};

export type CurrentAuthDto = {
  __typename?: 'CurrentAuthDto';
  _id: Scalars['String']['output'];
  authId?: Maybe<Scalars['String']['output']>;
  authSecret?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  type: AuthType;
  updatedAt: Scalars['String']['output'];
  user: User;
  username?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Login with username and password */
  loginWithCredential: AuthDto;
  /** Refresh token and rotate it */
  refreshToken: AuthDto;
  /** Register new user with username and password */
  registerUserWithCredential: CreatedAuthDto;
};


export type MutationLoginWithCredentialArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationRegisterUserWithCredentialArgs = {
  input: RegisterAuthLocalInput;
};

export type Query = {
  __typename?: 'Query';
  /** Just used to desmontrate the use of @CurrentUser */
  hello: CurrentAuthDto;
};

export type RegisterAuthLocalInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};
