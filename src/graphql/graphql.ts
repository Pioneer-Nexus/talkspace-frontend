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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AuthDto = {
  __typename?: 'AuthDto';
  _id: Scalars['String']['output'];
  accessToken: Scalars['String']['output'];
  authId?: Maybe<Scalars['String']['output']>;
  authSecret?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  refreshToken: Scalars['String']['output'];
  type: AuthType;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  username?: Maybe<Scalars['String']['output']>;
};

export enum AuthType {
  Google = 'GOOGLE',
  Password = 'PASSWORD'
}

export type ChatRoomDto = {
  __typename?: 'ChatRoomDto';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status: RoomType;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userRooms: Array<UserRoomDto>;
};

export type CreateMessageInput = {
  content: Scalars['String']['input'];
  files?: InputMaybe<Array<Scalars['String']['input']>>;
  isTagAll?: InputMaybe<Scalars['Boolean']['input']>;
  quoteMessageId?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['String']['input'];
  tagUsers?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateNotificationDto = {
  content?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  priority?: InputMaybe<NotificationPriority>;
  receiverUsers: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<NotificationType>;
};

export type CreatedAuthDto = {
  __typename?: 'CreatedAuthDto';
  _id: Scalars['String']['output'];
  authId?: Maybe<Scalars['String']['output']>;
  authSecret?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  type: AuthType;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  username?: Maybe<Scalars['String']['output']>;
};

export type CreatedChatRoomDto = {
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status: RoomType;
  type?: InputMaybe<Scalars['String']['input']>;
  userRooms: Array<UserRoomInputDto>;
  webhooks?: InputMaybe<Array<WebhookInputDto>>;
};

export type CreatedChatRoomResponseDto = {
  __typename?: 'CreatedChatRoomResponseDto';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status: RoomType;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userRooms: Array<UserRoomDto>;
};

export type CurrentAuthDto = {
  __typename?: 'CurrentAuthDto';
  _id: Scalars['String']['output'];
  authId?: Maybe<Scalars['String']['output']>;
  authSecret?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  type: AuthType;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  username?: Maybe<Scalars['String']['output']>;
};

export type MessageDto = {
  __typename?: 'MessageDto';
  _id: Scalars['String']['output'];
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  isTagAll?: Maybe<Scalars['Boolean']['output']>;
  quoteMessageId?: Maybe<Scalars['String']['output']>;
  roomId: Scalars['String']['output'];
  status: MessageStatus;
  tagUsers?: Maybe<Array<Scalars['String']['output']>>;
};

export enum MessageStatus {
  Edit = 'EDIT',
  Removed = 'REMOVED',
  Seen = 'SEEN',
  Sending = 'SENDING',
  Sent = 'SENT'
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptToJoinChatRoom: UserRoomDto;
  addNewUserToChatRoom: ChatRoomDto;
  createChatRoom: CreatedChatRoomResponseDto;
  createMessage: MessageDto;
  /** Login with username and password */
  loginWithCredential: AuthDto;
  /** Refresh token and rotate it */
  refreshToken: AuthDto;
  /** Register new user with username and password */
  registerUserWithCredential: CreatedAuthDto;
  removeChatRoom: Scalars['String']['output'];
  removeUserFromChatRoom: ChatRoomDto;
  sendNotification: NotificationDto;
  updateChatRoom: UpdatedChatRoomResponseDto;
};


export type MutationAcceptToJoinChatRoomArgs = {
  roomId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationAddNewUserToChatRoomArgs = {
  roomId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCreateChatRoomArgs = {
  chatRoom: CreatedChatRoomDto;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
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


export type MutationRemoveChatRoomArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserFromChatRoomArgs = {
  roomId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationSendNotificationArgs = {
  notification: CreateNotificationDto;
};


export type MutationUpdateChatRoomArgs = {
  chatRoom: UpdatedChatRoomDto;
};

export type NotificationDto = {
  __typename?: 'NotificationDto';
  _id: Scalars['String']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  notifyDate?: Maybe<Scalars['DateTimeISO']['output']>;
  priority?: Maybe<NotificationPriority>;
  status?: Maybe<NotificationStatus>;
  title: Scalars['String']['output'];
};

export enum NotificationPriority {
  High = 'HIGH',
  Low = 'LOW',
  Normal = 'NORMAL'
}

export enum NotificationStatus {
  Fail = 'FAIL',
  Read = 'READ',
  Received = 'RECEIVED',
  Sending = 'SENDING',
  Sent = 'SENT',
  Waiting = 'WAITING'
}

export enum NotificationType {
  AcceptToJoinRoom = 'ACCEPT_TO_JOIN_ROOM',
  BeingAcceptedToJoinRoom = 'BEING_ACCEPTED_TO_JOIN_ROOM',
  NewInvitationToJoinRoom = 'NEW_INVITATION_TO_JOIN_ROOM',
  NewMessage = 'NEW_MESSAGE',
  NewMessageTagged = 'NEW_MESSAGE_TAGGED',
  NewRequestToJoinRoom = 'NEW_REQUEST_TO_JOIN_ROOM',
  Notification = 'NOTIFICATION'
}

export type PaginatedChatRoomDto = {
  __typename?: 'PaginatedChatRoomDto';
  data: Array<ChatRoomDto>;
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  page: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalPage: Scalars['Float']['output'];
  totalRecord: Scalars['Float']['output'];
};

export type PaginatedMessageDto = {
  __typename?: 'PaginatedMessageDto';
  data: Array<MessageDto>;
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  page: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalPage: Scalars['Float']['output'];
  totalRecord: Scalars['Float']['output'];
};

export type PaginatedUserRoomDto = {
  __typename?: 'PaginatedUserRoomDto';
  data: Array<UserRoomDto>;
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  page: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalPage: Scalars['Float']['output'];
  totalRecord: Scalars['Float']['output'];
};

export type PaginationOptionDto = {
  page?: Scalars['Int']['input'];
  pageSize?: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getChatRoomPendingInvites: PaginatedUserRoomDto;
  /** Get paginated messages of a room by id of the room */
  getRoomMessages: PaginatedMessageDto;
  getUserChatRooms: PaginatedChatRoomDto;
  /** Just used to desmontrate the use of @CurrentUser */
  hello: CurrentAuthDto;
};


export type QueryGetChatRoomPendingInvitesArgs = {
  paginationOption?: InputMaybe<PaginationOptionDto>;
  roomId: Scalars['String']['input'];
};


export type QueryGetRoomMessagesArgs = {
  paginationOptionInput: PaginationOptionDto;
  roomIdInput: Scalars['String']['input'];
};


export type QueryGetUserChatRoomsArgs = {
  paginationOption?: InputMaybe<PaginationOptionDto>;
};

export type RegisterAuthLocalInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export enum RoomRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  PendingInvite = 'PENDING_INVITE',
  Viewer = 'VIEWER'
}

export enum RoomType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type UpdatedChatRoomDto = {
  _id: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<RoomType>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatedChatRoomResponseDto = {
  __typename?: 'UpdatedChatRoomResponseDto';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status: RoomType;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userRooms: Array<UserRoomDto>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserDto = {
  __typename?: 'UserDto';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserRoomDto = {
  __typename?: 'UserRoomDto';
  _id: Scalars['String']['output'];
  isNotify: Scalars['Boolean']['output'];
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  muteUntil?: Maybe<Scalars['DateTime']['output']>;
  role: RoomRole;
  room: ChatRoomDto;
  user: UserDto;
};

export type UserRoomInputDto = {
  user: Scalars['String']['input'];
};

export type WebhookInputDto = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};
