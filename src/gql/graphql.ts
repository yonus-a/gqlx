import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Date custom scalar type */
  Date: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export enum Action {
  Abort = 'Abort',
  Add = 'Add',
  Any = 'Any',
  Collect = 'Collect',
  Commit = 'Commit',
  Create = 'Create',
  CreateClient = 'CreateClient',
  CreateGroup = 'CreateGroup',
  CreateOwn = 'CreateOwn',
  CreateShare = 'CreateShare',
  Delete = 'Delete',
  DeleteClient = 'DeleteClient',
  DeleteGroup = 'DeleteGroup',
  DeleteOwn = 'DeleteOwn',
  DeleteShare = 'DeleteShare',
  Destroy = 'Destroy',
  DestroyClient = 'DestroyClient',
  DestroyGroup = 'DestroyGroup',
  DestroyOwn = 'DestroyOwn',
  DestroyShare = 'DestroyShare',
  Download = 'Download',
  Generate = 'Generate',
  Init = 'Init',
  Payment = 'Payment',
  Publish = 'Publish',
  Read = 'Read',
  ReadClient = 'ReadClient',
  ReadGroup = 'ReadGroup',
  ReadOwn = 'ReadOwn',
  ReadShare = 'ReadShare',
  Resolve = 'Resolve',
  Restore = 'Restore',
  RestoreClient = 'RestoreClient',
  RestoreGroup = 'RestoreGroup',
  RestoreOwn = 'RestoreOwn',
  RestoreShare = 'RestoreShare',
  Search = 'Search',
  Send = 'Send',
  Share = 'Share',
  Start = 'Start',
  Subscribe = 'Subscribe',
  Update = 'Update',
  UpdateClient = 'UpdateClient',
  UpdateGroup = 'UpdateGroup',
  UpdateOwn = 'UpdateOwn',
  UpdateShare = 'UpdateShare',
  Upload = 'Upload',
  Verify = 'Verify',
}

export type AuthAptDataSerializer = {
  __typename?: 'AuthAptDataSerializer';
  data?: Maybe<AuthAptSerializer>;
};

export type AuthAptItemsSerializer = {
  __typename?: 'AuthAptItemsSerializer';
  items: Array<Maybe<AuthAptSerializer>>;
};

export type AuthAptSerializer = {
  __typename?: 'AuthAptSerializer';
  aid?: Maybe<Scalars['String']['output']>;
  cid?: Maybe<Scalars['String']['output']>;
  client_id?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  coworkers?: Maybe<Array<Scalars['String']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Float']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  scopes?: Maybe<Array<Scope>>;
  session?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  strict?: Maybe<Scalars['Boolean']['output']>;
  subjects?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tz?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type AuthAuthenticationDto = {
  app_id?: InputMaybe<Scalars['String']['input']>;
  client_id: Scalars['String']['input'];
  client_secret?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  coworkers?: InputMaybe<Array<Scalars['String']['input']>>;
  domain?: InputMaybe<Scalars['String']['input']>;
  grant_type: GrantType;
  password?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  response_type?: InputMaybe<ResponseType>;
  scopes?: InputMaybe<Array<Scope>>;
  source?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  strict?: InputMaybe<Scalars['Boolean']['input']>;
  subjects?: InputMaybe<Array<Scalars['String']['input']>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type AuthAuthenticationSerializer = {
  __typename?: 'AuthAuthenticationSerializer';
  access_token?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  coworker?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  expires_in?: Maybe<Scalars['Float']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
};

export type AuthAuthorizationDto = {
  action?: InputMaybe<Action>;
  ip?: InputMaybe<Scalars['String']['input']>;
  object?: InputMaybe<Resource>;
  strict?: InputMaybe<Scalars['String']['input']>;
  subjects?: InputMaybe<Array<Scalars['String']['input']>>;
  time?: InputMaybe<Scalars['Date']['input']>;
  tz?: InputMaybe<Scalars['String']['input']>;
};

export type AuthAuthorizationPolicy = {
  __typename?: 'AuthAuthorizationPolicy';
  action: Scalars['String']['output'];
  field?: Maybe<Array<Scalars['String']['output']>>;
  filter?: Maybe<Array<Scalars['String']['output']>>;
  location?: Maybe<Array<Scalars['String']['output']>>;
  object: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  time?: Maybe<Array<AuthAuthorizationPolicyTime>>;
};

export type AuthAuthorizationPolicyTime = {
  __typename?: 'AuthAuthorizationPolicyTime';
  cron_exp: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
};

export type AuthAuthorizationSerializer = {
  __typename?: 'AuthAuthorizationSerializer';
  granted: Scalars['Boolean']['output'];
  policies?: Maybe<Array<AuthAuthorizationPolicy>>;
};

export type AuthGrantDataSerializer = {
  __typename?: 'AuthGrantDataSerializer';
  data?: Maybe<AuthGrantSerializer>;
};

export type AuthGrantItemsSerializer = {
  __typename?: 'AuthGrantItemsSerializer';
  items: Array<Maybe<AuthGrantSerializer>>;
};

export type AuthGrantSerializer = {
  __typename?: 'AuthGrantSerializer';
  action?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Array<Scalars['String']['output']>>;
  filter?: Maybe<Array<Scalars['String']['output']>>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Array<Scalars['String']['output']>>;
  object?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  subject?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  time?: Maybe<Array<GrantTimeSerializer>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CareerBranchDataSerializer = {
  __typename?: 'CareerBranchDataSerializer';
  data?: Maybe<CareerBranchSerializer>;
};

export type CareerBranchItemsSerializer = {
  __typename?: 'CareerBranchItemsSerializer';
  items: Array<Maybe<CareerBranchSerializer>>;
};

export type CareerBranchSerializer = {
  __typename?: 'CareerBranchSerializer';
  address?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Scalars['JSON']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  manager?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  opening_date?: Maybe<Scalars['Date']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['JSON']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CareerBranchType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
};

export enum CareerBranchType {
  Branch = 'BRANCH',
  Origin = 'ORIGIN',
}

export type CareerBusinessDataSerializer = {
  __typename?: 'CareerBusinessDataSerializer';
  data?: Maybe<CareerBusinessSerializer>;
};

export type CareerBusinessItemsSerializer = {
  __typename?: 'CareerBusinessItemsSerializer';
  items: Array<Maybe<CareerBusinessSerializer>>;
};

export type CareerBusinessSerializer = {
  __typename?: 'CareerBusinessSerializer';
  address?: Maybe<Scalars['String']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  co_founders?: Maybe<Array<Scalars['String']['output']>>;
  code?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  customers?: Maybe<Array<Scalars['String']['output']>>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  foundation_date?: Maybe<Scalars['Date']['output']>;
  founder?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  investors?: Maybe<Array<Scalars['String']['output']>>;
  location?: Maybe<Scalars['JSON']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  partners?: Maybe<Array<Scalars['String']['output']>>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  slogan?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  suppliers?: Maybe<Array<Scalars['String']['output']>>;
  support?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CareerBusinessType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export enum CareerBusinessType {
  Charity = 'CHARITY',
  Cooperative = 'COOPERATIVE',
  Corporation = 'CORPORATION',
  Government = 'GOVERNMENT',
  Individual = 'INDIVIDUAL',
  Insurance = 'INSURANCE',
  Nonprofit = 'NONPROFIT',
  Partnership = 'PARTNERSHIP',
}

export type CareerCustomerDataSerializer = {
  __typename?: 'CareerCustomerDataSerializer';
  data?: Maybe<CareerCustomerSerializer>;
};

export type CareerCustomerItemsSerializer = {
  __typename?: 'CareerCustomerItemsSerializer';
  items: Array<Maybe<CareerCustomerSerializer>>;
};

export type CareerCustomerSerializer = {
  __typename?: 'CareerCustomerSerializer';
  addresses?: Maybe<Scalars['JSON']['output']>;
  branch?: Maybe<Scalars['JSON']['output']>;
  business?: Maybe<Scalars['JSON']['output']>;
  certifications?: Maybe<Scalars['JSON']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Scalars['JSON']['output']>;
  employees?: Maybe<Scalars['JSON']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  profile?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  range?: Maybe<CareerLocationRange>;
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  services?: Maybe<Scalars['JSON']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status?: Maybe<Status>;
  stores?: Maybe<Scalars['JSON']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CareerCustomerType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
};

export enum CareerCustomerType {
  Loyal = 'LOYAL',
  Occasional = 'OCCASIONAL',
  Regular = 'REGULAR',
  Vip = 'VIP',
}

export type CareerEmployeeDataSerializer = {
  __typename?: 'CareerEmployeeDataSerializer';
  data?: Maybe<CareerEmployeeSerializer>;
};

export type CareerEmployeeItemsSerializer = {
  __typename?: 'CareerEmployeeItemsSerializer';
  items: Array<Maybe<CareerEmployeeSerializer>>;
};

export type CareerEmployeeSerializer = {
  __typename?: 'CareerEmployeeSerializer';
  branch?: Maybe<Scalars['JSON']['output']>;
  business?: Maybe<Scalars['JSON']['output']>;
  certifications?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['JSON']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Scalars['String']['output']>>;
  fire_date?: Maybe<Scalars['Date']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  hire_date?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  manager?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  profile?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  range?: Maybe<CareerLocationRange>;
  rate: Scalars['Float']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  salary?: Maybe<Scalars['Float']['output']>;
  services?: Maybe<Array<Scalars['String']['output']>>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  skills?: Maybe<Array<Scalars['String']['output']>>;
  state: State;
  status: Status;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CareerEmployeeType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
};

export enum CareerEmployeeType {
  Contract = 'CONTRACT',
  FullTime = 'FULL_TIME',
  PartTime = 'PART_TIME',
  Temporary = 'TEMPORARY',
}

export enum CareerLocationRange {
  City = 'CITY',
  Country = 'COUNTRY',
  County = 'COUNTY',
  District = 'DISTRICT',
  Municipality = 'MUNICIPALITY',
  Province = 'PROVINCE',
  Quarter = 'QUARTER',
  Road = 'ROAD',
  State = 'STATE',
  Suburb = 'SUBURB',
  Village = 'VILLAGE',
}

export type CareerProductDataSerializer = {
  __typename?: 'CareerProductDataSerializer';
  data?: Maybe<CareerProductSerializer>;
};

export type CareerProductFeatureSerializer = {
  __typename?: 'CareerProductFeatureSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CareerProductFeatureType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum CareerProductFeatureType {
  Categorical = 'CATEGORICAL',
  Discrete = 'DISCRETE',
  Ordinal = 'ORDINAL',
  Range = 'RANGE',
  Text = 'TEXT',
}

export type CareerProductItemsSerializer = {
  __typename?: 'CareerProductItemsSerializer';
  items: Array<Maybe<CareerProductSerializer>>;
};

export type CareerProductSerializer = {
  __typename?: 'CareerProductSerializer';
  alias?: Maybe<Scalars['String']['output']>;
  branch?: Maybe<Scalars['JSON']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Scalars['JSON']['output']>;
  categories?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  content?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<CareerProductFeatureSerializer>>;
  gallery?: Maybe<Scalars['JSON']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  store?: Maybe<Scalars['JSON']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
};

export type CareerServiceDataSerializer = {
  __typename?: 'CareerServiceDataSerializer';
  data?: Maybe<CareerServiceSerializer>;
};

export type CareerServiceItemsSerializer = {
  __typename?: 'CareerServiceItemsSerializer';
  items: Array<Maybe<CareerServiceSerializer>>;
};

export type CareerServiceSerializer = {
  __typename?: 'CareerServiceSerializer';
  branch?: Maybe<Scalars['JSON']['output']>;
  business?: Maybe<Scalars['JSON']['output']>;
  categories?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profit?: Maybe<Scalars['Float']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  range?: Maybe<CareerLocationRange>;
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CareerServiceType>;
  unit?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
};

export enum CareerServiceType {
  OnDemand = 'ON_DEMAND',
  Periodic = 'PERIODIC',
}

export type CareerStockDataSerializer = {
  __typename?: 'CareerStockDataSerializer';
  data?: Maybe<CareerStockSerializer>;
};

export type CareerStockItemsSerializer = {
  __typename?: 'CareerStockItemsSerializer';
  items: Array<Maybe<CareerStockSerializer>>;
};

export type CareerStockSerializer = {
  __typename?: 'CareerStockSerializer';
  branch?: Maybe<Scalars['JSON']['output']>;
  business?: Maybe<Scalars['JSON']['output']>;
  capacity?: Maybe<Scalars['Float']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  feature?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  inventory: Scalars['Float']['output'];
  location?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  place?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Scalars['JSON']['output']>;
  profit?: Maybe<Scalars['Float']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  store?: Maybe<Scalars['JSON']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  threshold?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CareerStockType>;
  unit?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum CareerStockType {
  Bulky = 'BULKY',
  Cold = 'COLD',
  Fragile = 'FRAGILE',
  Frozen = 'FROZEN',
  Hazardous = 'HAZARDOUS',
  Normal = 'NORMAL',
  Valuable = 'VALUABLE',
}

export type CareerStoreDataSerializer = {
  __typename?: 'CareerStoreDataSerializer';
  data?: Maybe<CareerStoreSerializer>;
};

export enum CareerStoreFork {
  Branch = 'BRANCH',
  Origin = 'ORIGIN',
}

export type CareerStoreItemsSerializer = {
  __typename?: 'CareerStoreItemsSerializer';
  items: Array<Maybe<CareerStoreSerializer>>;
};

export type CareerStoreSerializer = {
  __typename?: 'CareerStoreSerializer';
  address?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Scalars['JSON']['output']>;
  categories?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fork?: Maybe<CareerStoreFork>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  manager?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['JSON']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  range?: Maybe<CareerLocationRange>;
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CareerStoreType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
};

export enum CareerStoreType {
  Distributor = 'DISTRIBUTOR',
  Dropshipping = 'DROPSHIPPING',
  Franchise = 'FRANCHISE',
  Marketplace = 'MARKETPLACE',
  Retail = 'RETAIL',
  Wholesale = 'WHOLESALE',
}

export type ConjointAccountDataSerializer = {
  __typename?: 'ConjointAccountDataSerializer';
  data?: Maybe<ConjointAccountSerializer>;
};

export type ConjointAccountItemsSerializer = {
  __typename?: 'ConjointAccountItemsSerializer';
  items: Array<Maybe<ConjointAccountSerializer>>;
};

export type ConjointAccountSerializer = {
  __typename?: 'ConjointAccountSerializer';
  bio?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  profile?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ConjointAccountType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum ConjointAccountType {
  Human = 'HUMAN',
  Robot = 'ROBOT',
}

export type ConjointChannelDataSerializer = {
  __typename?: 'ConjointChannelDataSerializer';
  data?: Maybe<ConjointChannelSerializer>;
};

export type ConjointChannelItemsSerializer = {
  __typename?: 'ConjointChannelItemsSerializer';
  items: Array<Maybe<ConjointChannelSerializer>>;
};

export enum ConjointChannelScope {
  Private = 'PRIVATE',
  Protected = 'PROTECTED',
  Public = 'PUBLIC',
}

export type ConjointChannelSerializer = {
  __typename?: 'ConjointChannelSerializer';
  account?: Maybe<Scalars['JSON']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  pinned_messages?: Maybe<Array<Scalars['String']['output']>>;
  profile?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<ConjointChannelScope>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ConjointChannelType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum ConjointChannelType {
  Broadcast = 'BROADCAST',
  Conversation = 'CONVERSATION',
  Group = 'GROUP',
}

export type ConjointContactDataSerializer = {
  __typename?: 'ConjointContactDataSerializer';
  data?: Maybe<ConjointContactSerializer>;
};

export type ConjointContactItemsSerializer = {
  __typename?: 'ConjointContactItemsSerializer';
  items: Array<Maybe<ConjointContactSerializer>>;
};

export type ConjointContactSerializer = {
  __typename?: 'ConjointContactSerializer';
  account?: Maybe<Scalars['JSON']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ConjointContactType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum ConjointContactType {
  Home = 'HOME',
  Main = 'MAIN',
  Other = 'OTHER',
  Work = 'WORK',
}

export type ConjointCredentialSerializer = {
  __typename?: 'ConjointCredentialSerializer';
  pass?: Maybe<Scalars['String']['output']>;
  ttl?: Maybe<Scalars['Float']['output']>;
  urls?: Maybe<Array<Scalars['String']['output']>>;
  user?: Maybe<Scalars['String']['output']>;
};

export type ConjointMemberDataSerializer = {
  __typename?: 'ConjointMemberDataSerializer';
  data?: Maybe<ConjointMemberSerializer>;
};

export type ConjointMemberItemsSerializer = {
  __typename?: 'ConjointMemberItemsSerializer';
  items: Array<Maybe<ConjointMemberSerializer>>;
};

export type ConjointMemberSerializer = {
  __typename?: 'ConjointMemberSerializer';
  account?: Maybe<Scalars['JSON']['output']>;
  channel?: Maybe<Scalars['JSON']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  permissions?: Maybe<Array<Scalars['String']['output']>>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ConjointMessageDataSerializer = {
  __typename?: 'ConjointMessageDataSerializer';
  data?: Maybe<ConjointMessageSerializer>;
};

export type ConjointMessageItemsSerializer = {
  __typename?: 'ConjointMessageItemsSerializer';
  items: Array<Maybe<ConjointMessageSerializer>>;
};

export type ConjointMessageSerializer = {
  __typename?: 'ConjointMessageSerializer';
  account?: Maybe<Scalars['JSON']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['JSON']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  content?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  delivered_at?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  edited_at?: Maybe<Scalars['Date']['output']>;
  forwarded_from?: Maybe<Scalars['JSON']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  hashtags?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  mentions?: Maybe<Array<Scalars['String']['output']>>;
  originate_from?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  reactions?: Maybe<Array<ReactionSerializer>>;
  ref?: Maybe<Scalars['String']['output']>;
  reply_to?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  scheduled_at?: Maybe<Scalars['Date']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ConjointMessageType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  visited_at?: Maybe<Scalars['Date']['output']>;
};

export enum ConjointMessageType {
  Audio = 'AUDIO',
  Command = 'COMMAND',
  Contact = 'CONTACT',
  Document = 'DOCUMENT',
  File = 'FILE',
  Gallery = 'GALLERY',
  Image = 'IMAGE',
  Location = 'LOCATION',
  Pull = 'PULL',
  Sticker = 'STICKER',
  Text = 'TEXT',
  Video = 'VIDEO',
}

export enum ContentCommentStatus {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type ContentNoteDataSerializer = {
  __typename?: 'ContentNoteDataSerializer';
  data?: Maybe<ContentNoteSerializer>;
};

export type ContentNoteItemsSerializer = {
  __typename?: 'ContentNoteItemsSerializer';
  items: Array<Maybe<ContentNoteSerializer>>;
};

export type ContentNoteSerializer = {
  __typename?: 'ContentNoteSerializer';
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dislikes?: Maybe<Scalars['Float']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  likes?: Maybe<Scalars['Float']['output']>;
  loves?: Maybe<Scalars['Float']['output']>;
  mentions?: Maybe<Array<Scalars['String']['output']>>;
  owner?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  reactions?: Maybe<Array<ReactionSerializer>>;
  ref?: Maybe<Scalars['String']['output']>;
  relation?: Maybe<Scalars['JSON']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ContentNoteType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

export enum ContentNoteType {
  Comment = 'COMMENT',
  Feedback = 'FEEDBACK',
  Note = 'NOTE',
  Review = 'REVIEW',
}

export type ContentPostDataSerializer = {
  __typename?: 'ContentPostDataSerializer';
  data?: Maybe<ContentPostSerializer>;
};

export type ContentPostItemsSerializer = {
  __typename?: 'ContentPostItemsSerializer';
  items: Array<Maybe<ContentPostSerializer>>;
};

export type ContentPostSerializer = {
  __typename?: 'ContentPostSerializer';
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  categories?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dislikes?: Maybe<Scalars['Float']['output']>;
  featured_image?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  likes?: Maybe<Scalars['Float']['output']>;
  loves?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  publication_date?: Maybe<Scalars['Date']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reactions?: Maybe<Array<ReactionSerializer>>;
  ref?: Maybe<Scalars['String']['output']>;
  related_posts?: Maybe<Array<Scalars['String']['output']>>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  slug?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  status?: Maybe<ContentPostStatus>;
  subtitle?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
};

export enum ContentPostStatus {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type ContentTicketDataSerializer = {
  __typename?: 'ContentTicketDataSerializer';
  data?: Maybe<ContentTicketSerializer>;
};

export type ContentTicketItemsSerializer = {
  __typename?: 'ContentTicketItemsSerializer';
  items: Array<Maybe<ContentTicketSerializer>>;
};

export enum ContentTicketPriority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Urgent = 'URGENT',
}

export type ContentTicketSerializer = {
  __typename?: 'ContentTicketSerializer';
  assigned_to?: Maybe<Scalars['String']['output']>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  content: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['Date']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<ContentTicketPriority>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  related_tickets?: Maybe<Array<Scalars['String']['output']>>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  solution?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  status?: Maybe<ContentTicketStatus>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
};

export enum ContentTicketStatus {
  Closed = 'CLOSED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN',
  Resolved = 'RESOLVED',
}

export type ContextConfigDataSerializer = {
  __typename?: 'ContextConfigDataSerializer';
  data?: Maybe<ContextConfigSerializer>;
};

export type ContextConfigItemsSerializer = {
  __typename?: 'ContextConfigItemsSerializer';
  items: Array<Maybe<ContextConfigSerializer>>;
};

export type ContextConfigSerializer = {
  __typename?: 'ContextConfigSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eid?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ContextSettingDataSerializer = {
  __typename?: 'ContextSettingDataSerializer';
  data?: Maybe<ContextSettingSerializer>;
};

export type ContextSettingItemsSerializer = {
  __typename?: 'ContextSettingItemsSerializer';
  items: Array<Maybe<ContextSettingSerializer>>;
};

export type ContextSettingSerializer = {
  __typename?: 'ContextSettingSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ValueType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CreateAuthAptDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  coworkers?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  expires_at: Scalars['Float']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Array<Scope>>;
  secret: Scalars['String']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  strict?: InputMaybe<Scalars['Boolean']['input']>;
  subjects?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tz?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAuthAptItemsDto = {
  items: Array<CreateAuthAptDto>;
};

export type CreateAuthGrantDto = {
  action: Action;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Array<Scalars['String']['input']>>;
  object: Resource;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  subject: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  time?: InputMaybe<Array<CreateAuthGrantTimeDto>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAuthGrantItemsDto = {
  items: Array<CreateAuthGrantDto>;
};

export type CreateAuthGrantTimeDto = {
  cron_exp: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
};

export type CreateCareerBranchDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  business: Scalars['String']['input'];
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  manager?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  opening_date?: InputMaybe<Scalars['Date']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: CareerBranchType;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateCareerBranchItemsDto = {
  items: Array<CreateCareerBranchDto>;
};

export type CreateCareerBusinessDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  co_founders?: InputMaybe<Array<Scalars['String']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  customers?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  foundation_date?: InputMaybe<Scalars['Date']['input']>;
  founder?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  investors?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  partners?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  status: Status;
  suppliers?: InputMaybe<Array<Scalars['String']['input']>>;
  support?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: CareerBusinessType;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCareerBusinessItemsDto = {
  items: Array<CreateCareerBusinessDto>;
};

export type CreateCareerCustomerDto = {
  addresses?: InputMaybe<Array<Scalars['String']['input']>>;
  branch?: InputMaybe<Scalars['String']['input']>;
  business: Scalars['String']['input'];
  certifications?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Array<Scalars['String']['input']>>;
  employees?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  range?: InputMaybe<CareerLocationRange>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  services?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
  stores?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: CareerCustomerType;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateCareerCustomerItemsDto = {
  items: Array<CreateCareerCustomerDto>;
};

export type CreateCareerEmployeeDto = {
  branch?: InputMaybe<Scalars['String']['input']>;
  business: Scalars['String']['input'];
  certifications?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Array<Scalars['String']['input']>>;
  fire_date?: InputMaybe<Scalars['Date']['input']>;
  grade?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  hire_date?: InputMaybe<Scalars['Date']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  job_title: Scalars['String']['input'];
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  range?: InputMaybe<CareerLocationRange>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  salary?: InputMaybe<Scalars['Float']['input']>;
  services?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: CareerEmployeeType;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateCareerEmployeeItemsDto = {
  items: Array<CreateCareerEmployeeDto>;
};

export type CreateCareerProductDto = {
  alias?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Array<CreateCareerProductFeatureDto>>;
  gallery?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  store?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateCareerProductFeatureDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  type: CareerProductFeatureType;
  value: Scalars['JSON']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCareerProductItemsDto = {
  items: Array<CreateCareerProductDto>;
};

export type CreateCareerServiceDto = {
  branch?: InputMaybe<Scalars['String']['input']>;
  business: Scalars['String']['input'];
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  profit?: InputMaybe<Scalars['Float']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  range?: InputMaybe<CareerLocationRange>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: CareerServiceType;
  unit?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateCareerServiceItemsDto = {
  items: Array<CreateCareerServiceDto>;
};

export type CreateCareerStockDto = {
  branch?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  capacity?: InputMaybe<Scalars['Float']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  feature?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  inventory: Scalars['Float']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  product: Scalars['String']['input'];
  profit?: InputMaybe<Scalars['Float']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  store?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
  type: CareerStockType;
  unit?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCareerStockItemsDto = {
  items: Array<CreateCareerStockDto>;
};

export type CreateCareerStoreDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  business: Scalars['String']['input'];
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fork: CareerStoreFork;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  range?: InputMaybe<CareerLocationRange>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: CareerStoreType;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateCareerStoreItemsDto = {
  items: Array<CreateCareerStoreDto>;
};

export type CreateConjointAccountDto = {
  bio?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ConjointAccountType;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConjointAccountItemsDto = {
  items: Array<CreateConjointAccountDto>;
};

export type CreateConjointChannelDto = {
  account?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  pinned_messages?: InputMaybe<Array<Scalars['String']['input']>>;
  profile?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  scope: ConjointChannelScope;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type: ConjointChannelType;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConjointChannelItemsDto = {
  items: Array<CreateConjointChannelDto>;
};

export type CreateConjointContactDto = {
  account?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ConjointContactType;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConjointContactItemsDto = {
  items: Array<CreateConjointContactDto>;
};

export type CreateConjointMemberDto = {
  account: Scalars['String']['input'];
  channel: Scalars['String']['input'];
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConjointMemberItemsDto = {
  items: Array<CreateConjointMemberDto>;
};

export type CreateConjointMessageDto = {
  account?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  delivered_at: Scalars['Date']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  edited_at?: InputMaybe<Scalars['Date']['input']>;
  forwarded_from?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  hashtags?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  mentions?: InputMaybe<Array<Scalars['String']['input']>>;
  originate_from?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  reactions?: InputMaybe<Array<ReactionDto>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  reply_to?: InputMaybe<Scalars['String']['input']>;
  scheduled_at: Scalars['Date']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ConjointMessageType;
  version?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Float']['input']>;
  visited_at?: InputMaybe<Scalars['Date']['input']>;
};

export type CreateConjointMessageItemsDto = {
  items: Array<CreateConjointMessageDto>;
};

export type CreateContentNoteDto = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  dislikes?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Float']['input']>;
  likes?: InputMaybe<Scalars['Float']['input']>;
  loves?: InputMaybe<Scalars['Float']['input']>;
  mentions?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  reactions?: InputMaybe<Array<ReactionDto>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  relation?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ContentNoteType;
  version?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContentNoteItemsDto = {
  items: Array<CreateContentNoteDto>;
};

export type CreateContentPostDto = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  dislikes?: InputMaybe<Scalars['Float']['input']>;
  featured_image?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  likes?: InputMaybe<Scalars['Float']['input']>;
  loves?: InputMaybe<Scalars['Float']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  publication_date?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  reactions?: InputMaybe<Array<ReactionDto>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  related_posts?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  status: ContentPostStatus;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Float']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateContentPostItemsDto = {
  items: Array<CreateContentPostDto>;
};

export type CreateContentTicketDto = {
  assigned_to?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content: Scalars['String']['input'];
  department?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  priority: ContentTicketPriority;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  related_tickets?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  solution?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  status: ContentTicketStatus;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateContentTicketItemsDto = {
  items: Array<CreateContentTicketDto>;
};

export type CreateContextConfigDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  eid: Scalars['String']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContextConfigItemsDto = {
  items: Array<CreateContextConfigDto>;
};

export type CreateContextSettingDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ValueType;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContextSettingItemsDto = {
  items: Array<CreateContextSettingDto>;
};

export type CreateDomainAppChangeLogDto = {
  changes: Array<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  deprecation_date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  semver: Scalars['String']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDomainAppDto = {
  access_token_ttl?: InputMaybe<Scalars['Float']['input']>;
  change_logs?: InputMaybe<Array<CreateDomainAppChangeLogDto>>;
  cid: Scalars['String']['input'];
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  grant_types?: InputMaybe<Array<GrantType>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refresh_token_ttl?: InputMaybe<Scalars['Float']['input']>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  site?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: DomainAppType;
  url?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDomainAppItemsDto = {
  items: Array<CreateDomainAppDto>;
};

export type CreateDomainClientDomainDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDomainClientDto = {
  access_token_ttl?: InputMaybe<Scalars['Float']['input']>;
  client_id?: InputMaybe<Scalars['String']['input']>;
  client_secret: Scalars['String']['input'];
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  coworkers?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  domains: Array<CreateDomainClientDomainDto>;
  expiration_date?: InputMaybe<Scalars['Date']['input']>;
  grant_types: Array<GrantType>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  plan: DomainClientPlan;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refresh_token_ttl?: InputMaybe<Scalars['Float']['input']>;
  scopes: Array<Scalars['String']['input']>;
  services?: InputMaybe<Array<CreateDomainClientServiceDto>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  site?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  url?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  whitelist?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateDomainClientItemsDto = {
  items: Array<CreateDomainClientDto>;
};

export type CreateDomainClientServiceDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  config: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider: DomainClientServiceProvider;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: DomainClientServiceType;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEssentialSagaDto = {
  aborted_at?: InputMaybe<Scalars['Date']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  committed_at?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  job: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  pruned_at?: InputMaybe<Scalars['Date']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  session: Scalars['String']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state: EssentialSagaState;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  ttl: Scalars['Float']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEssentialSagaItemsDto = {
  items: Array<CreateEssentialSagaDto>;
};

export type CreateEssentialSagaStageDto = {
  action: EssentialSagaStageAction;
  bucket: Scalars['String']['input'];
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  req: CreateEssentialSagaStageReqDto;
  res?: InputMaybe<Scalars['JSON']['input']>;
  saga: Scalars['String']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEssentialSagaStageItemsDto = {
  items: Array<CreateEssentialSagaStageDto>;
};

export type CreateEssentialSagaStageReqDto = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  filter?: InputMaybe<FilterDto>;
  items?: InputMaybe<Array<Scalars['JSON']['input']>>;
  query?: InputMaybe<Scalars['JSON']['input']>;
  update?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateFinancialAccountDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  ownership: FinancialAccountOwnership;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: FinancialAccountType;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFinancialAccountItemsDto = {
  items: Array<CreateFinancialAccountDto>;
};

export type CreateFinancialCurrencyDto = {
  category?: InputMaybe<FinancialCurrencyCategory>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['String']['input']>;
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  explore?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  lib?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  nodes?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  precision: Scalars['Float']['input'];
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  subunits?: InputMaybe<Array<CreateFinancialCurrencyUnitDto>>;
  symbol: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  type: FinancialCurrencyType;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFinancialCurrencyItemsDto = {
  items: Array<CreateFinancialCurrencyDto>;
};

export type CreateFinancialCurrencyUnitDto = {
  name: Scalars['String']['input'];
  precision?: InputMaybe<Scalars['Float']['input']>;
  rate: Scalars['Float']['input'];
  symbol?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFinancialInvoiceDto = {
  amount: Scalars['Float']['input'];
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  closed_at?: InputMaybe<Scalars['Date']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  expires_at?: InputMaybe<Scalars['Date']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<CreateFinancialInvoiceItemDto>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  paid?: InputMaybe<Scalars['Float']['input']>;
  payees: Array<CreateFinancialPayDto>;
  payers?: InputMaybe<Array<CreateFinancialPayDto>>;
  profit?: InputMaybe<Scalars['Float']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  replication?: InputMaybe<Scalars['Float']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FinancialInvoiceType>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFinancialInvoiceItemDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  measurement?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  profit?: InputMaybe<Scalars['Float']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFinancialInvoiceItemsDto = {
  items: Array<CreateFinancialInvoiceDto>;
};

export type CreateFinancialPayDto = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fraction?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: FinancialPayType;
  version?: InputMaybe<Scalars['String']['input']>;
  wallet: Scalars['String']['input'];
};

export type CreateFinancialTransactionDto = {
  amount: Scalars['Float']['input'];
  canceled_at?: InputMaybe<Scalars['Date']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  failed_at?: InputMaybe<Scalars['Date']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  invoice?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  payees?: InputMaybe<Array<CreateFinancialPayDto>>;
  payers?: InputMaybe<Array<CreateFinancialPayDto>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  reason: FinancialTransactionReason;
  ref?: InputMaybe<Scalars['String']['input']>;
  saga: Scalars['String']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state: FinancialTransactionState;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<FinancialTransactionType>;
  verified_at?: InputMaybe<Scalars['Date']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFinancialTransactionItemsDto = {
  items: Array<CreateFinancialTransactionDto>;
};

export type CreateFinancialWalletDto = {
  account: Scalars['String']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['Float']['input'];
  blocked?: InputMaybe<Scalars['Float']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  currency: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  external?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  internal?: InputMaybe<Scalars['Float']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  strict?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFinancialWalletItemsDto = {
  items: Array<CreateFinancialWalletDto>;
};

export type CreateGeneralActivityDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  source?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: GeneralActivityType;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGeneralActivityItemsDto = {
  items: Array<CreateGeneralActivityDto>;
};

export type CreateGeneralArtifactDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ValueType;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGeneralArtifactItemsDto = {
  items: Array<CreateGeneralArtifactDto>;
};

export type CreateGeneralCommentDto = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  dislikes?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Float']['input']>;
  likes?: InputMaybe<Scalars['Float']['input']>;
  loves?: InputMaybe<Scalars['Float']['input']>;
  mentions?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  reactions?: InputMaybe<Array<ReactionDto>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<ContentCommentStatus>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Float']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateGeneralCommentItemsDto = {
  items: Array<CreateGeneralCommentDto>;
};

export type CreateGeneralEventDto = {
  attendees?: InputMaybe<Array<Scalars['String']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  color?: InputMaybe<Scalars['String']['input']>;
  correlation?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  e_date: Scalars['Date']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  organizers?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  s_date: Scalars['Date']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGeneralEventItemsDto = {
  items: Array<CreateGeneralEventDto>;
};

export type CreateGeneralWorkflowDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: GeneralWorkflowStatus;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens: Array<CreateGeneralWorkflowTokenDto>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGeneralWorkflowItemsDto = {
  items: Array<CreateGeneralWorkflowDto>;
};

export type CreateGeneralWorkflowStateDto = {
  name?: InputMaybe<Scalars['String']['input']>;
  ref: Scalars['String']['input'];
  status: GeneralWorkflowStatus;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateGeneralWorkflowTokenDto = {
  history: Array<CreateGeneralWorkflowStateDto>;
  id: Scalars['String']['input'];
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
};

export type CreateIdentityProfileDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['Date']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<Scalars['String']['input']>>;
  gender: Gender;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  national_code?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: IdentityProfileType;
  verified_at?: InputMaybe<Scalars['Date']['input']>;
  verified_by?: InputMaybe<Scalars['String']['input']>;
  verified_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateIdentityProfileItemsDto = {
  items: Array<CreateIdentityProfileDto>;
};

export type CreateIdentitySessionDto = {
  agent: Scalars['String']['input'];
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiration: Scalars['Int']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  ip: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateIdentitySessionItemsDto = {
  items: Array<CreateIdentitySessionDto>;
};

export type CreateIdentityUserDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: Status;
  subjects: Array<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tz?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateIdentityUserItemsDto = {
  items: Array<CreateIdentityUserDto>;
};

export type CreateLogisticCargoDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fragile?: InputMaybe<Scalars['Boolean']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  height: Scalars['Float']['input'];
  identity?: InputMaybe<Scalars['String']['input']>;
  length: Scalars['Float']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  perishable?: InputMaybe<Scalars['Boolean']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  travels?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  weight: Scalars['Float']['input'];
  width: Scalars['Float']['input'];
};

export type CreateLogisticCargoItemsDto = {
  items: Array<CreateLogisticCargoDto>;
};

export type CreateLogisticDriverDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiration_date: Scalars['Date']['input'];
  gender: Gender;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  license: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state: State;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: LogisticDriverType;
  verified_at?: InputMaybe<Scalars['Date']['input']>;
  verified_by?: InputMaybe<Scalars['String']['input']>;
  verified_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLogisticDriverItemsDto = {
  items: Array<CreateLogisticDriverDto>;
};

export type CreateLogisticLocationDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  geometry: CreateLogisticLocationGeometryDto;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<Scalars['JSON']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLogisticLocationGeometryDto = {
  bbox?: InputMaybe<Scalars['JSON']['input']>;
  coordinates: Scalars['JSON']['input'];
  type: Scalars['String']['input'];
};

export type CreateLogisticLocationItemsDto = {
  items: Array<CreateLogisticLocationDto>;
};

export type CreateLogisticTravelDto = {
  cargoes?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  drivers?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  locations: Array<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  vehicles?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLogisticTravelItemsDto = {
  items: Array<CreateLogisticTravelDto>;
};

export type CreateLogisticVehicleDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  drivers?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  plates: Array<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: LogisticVehicleType;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLogisticVehicleItemsDto = {
  items: Array<CreateLogisticVehicleDto>;
};

export type CreateSpecialFileDto = {
  acl: Scalars['String']['input'];
  bucket: Scalars['String']['input'];
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  encoding?: InputMaybe<Scalars['String']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  location: Scalars['String']['input'];
  mimetype: Scalars['String']['input'];
  original: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  size: Scalars['Float']['input'];
  state?: InputMaybe<State>;
  storage_class?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSpecialFileItemsDto = {
  items: Array<CreateSpecialFileDto>;
};

export type CreateSpecialStatDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  day?: InputMaybe<Scalars['Float']['input']>;
  days?: InputMaybe<Array<Scalars['Float']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  hours?: InputMaybe<Array<Scalars['Float']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  month?: InputMaybe<Scalars['Float']['input']>;
  months?: InputMaybe<Array<Scalars['Float']['input']>>;
  obj?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: SpecialStatType;
  version?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateSpecialStatItemsDto = {
  items: Array<CreateSpecialStatDto>;
};

export type CreateThingDeviceDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateThingDeviceItemsDto = {
  items: Array<CreateThingDeviceDto>;
};

export type CreateThingMetricDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  sensor: Scalars['String']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  value: Scalars['JSON']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateThingMetricItemsDto = {
  items: Array<CreateThingMetricDto>;
};

export type CreateThingSensorDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  device: Scalars['String']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateThingSensorItemsDto = {
  items: Array<CreateThingSensorDto>;
};

export type CreateTouchEmailDto = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  bcc?: InputMaybe<Array<Scalars['String']['input']>>;
  cc?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['String']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  html?: InputMaybe<Scalars['String']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  in_reply_to?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
  reply_to?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  smtp?: InputMaybe<CreateTouchEmailSmtpDto>;
  subject: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
  to: Array<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTouchEmailItemsDto = {
  items: Array<CreateTouchEmailDto>;
};

export type CreateTouchEmailSmtpDto = {
  accepted: Array<Scalars['String']['input']>;
  message_id: Scalars['String']['input'];
  message_size: Scalars['Float']['input'];
  message_time: Scalars['Float']['input'];
  rejected: Array<Scalars['String']['input']>;
  response: Scalars['String']['input'];
};

export type CreateTouchNoticeActionDto = {
  icon?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTouchNoticeDto = {
  actions?: InputMaybe<Array<CreateTouchNoticeActionDto>>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: TouchNoticeType;
  version?: InputMaybe<Scalars['String']['input']>;
  visited?: InputMaybe<Scalars['Boolean']['input']>;
  visited_at?: InputMaybe<Scalars['Date']['input']>;
  visited_by?: InputMaybe<Scalars['String']['input']>;
  visited_in?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTouchNoticeItemsDto = {
  items: Array<CreateTouchNoticeDto>;
};

export type CreateTouchPusHistoryContentDto = {
  badge?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  dir?: InputMaybe<TouchPusHistoryContentDir>;
  icon?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  require_interaction?: InputMaybe<Scalars['Boolean']['input']>;
  silent?: InputMaybe<Scalars['Boolean']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateTouchPusHistoryDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content: CreateTouchPusHistoryContentDto;
  description?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: Scalars['Float']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  timeout?: InputMaybe<Scalars['Float']['input']>;
  to: Scalars['String']['input'];
  topic?: InputMaybe<Scalars['String']['input']>;
  ttl?: InputMaybe<Scalars['Float']['input']>;
  urgency?: InputMaybe<TouchPushUrgency>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTouchPusHistoryItemsDto = {
  items: Array<CreateTouchPusHistoryDto>;
};

export type CreateTouchPushDto = {
  blacklist?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  endpoint: Scalars['String']['input'];
  expiration: Scalars['Float']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  keys: CreateTouchPushKeysDto;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  session: Scalars['String']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTouchPushItemsDto = {
  items: Array<CreateTouchPushDto>;
};

export type CreateTouchPushKeysDto = {
  auth: Scalars['String']['input'];
  p256dh: Scalars['String']['input'];
};

export type CreateTouchSmsDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider: TouchSmsProvider;
  receptors: Array<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  res?: InputMaybe<Scalars['JSON']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTouchSmsItemsDto = {
  items: Array<CreateTouchSmsDto>;
};

export type DomainAppChangeLogSerializer = {
  __typename?: 'DomainAppChangeLogSerializer';
  changes?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  deprecation_date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  semver?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type DomainAppDataSerializer = {
  __typename?: 'DomainAppDataSerializer';
  data?: Maybe<DomainAppSerializer>;
};

export type DomainAppItemsSerializer = {
  __typename?: 'DomainAppItemsSerializer';
  items: Array<Maybe<DomainAppSerializer>>;
};

export type DomainAppSerializer = {
  __typename?: 'DomainAppSerializer';
  access_token_ttl?: Maybe<Scalars['Float']['output']>;
  change_logs?: Maybe<Array<DomainAppChangeLogSerializer>>;
  cid?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  grant_types?: Maybe<Array<GrantType>>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  refresh_token_ttl?: Maybe<Scalars['Float']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  scopes?: Maybe<Array<Scope>>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  site?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<DomainAppType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum DomainAppType {
  Application = 'APPLICATION',
  Desktop = 'DESKTOP',
  Mobile = 'MOBILE',
  Web = 'WEB',
}

export type DomainClientDataSerializer = {
  __typename?: 'DomainClientDataSerializer';
  data?: Maybe<DomainClientSerializer>;
};

export type DomainClientDomainSerializer = {
  __typename?: 'DomainClientDomainSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type DomainClientItemsSerializer = {
  __typename?: 'DomainClientItemsSerializer';
  items: Array<Maybe<DomainClientSerializer>>;
};

export enum DomainClientPlan {
  Aluminum = 'ALUMINUM',
  Gold = 'GOLD',
  Platinum = 'PLATINUM',
}

export type DomainClientSerializer = {
  __typename?: 'DomainClientSerializer';
  access_token_ttl?: Maybe<Scalars['Float']['output']>;
  api_key?: Maybe<Scalars['String']['output']>;
  client_id?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  coworkers?: Maybe<Array<Scalars['String']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domains?: Maybe<Array<DomainClientDomainSerializer>>;
  expiration_date?: Maybe<Scalars['Date']['output']>;
  grant_types?: Maybe<Array<GrantType>>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  plan?: Maybe<DomainClientPlan>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  refresh_token_ttl?: Maybe<Scalars['Float']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
  services?: Maybe<Array<DomainClientServiceSerializer>>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  site?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  whitelist?: Maybe<Array<Scalars['String']['output']>>;
};

export enum DomainClientServiceProvider {
  Kavenegar = 'KAVENEGAR',
  Melipayamak = 'MELIPAYAMAK',
  Nodemailer = 'NODEMAILER',
  Webpush = 'WEBPUSH',
}

export type DomainClientServiceSerializer = {
  __typename?: 'DomainClientServiceSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  config?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  provider?: Maybe<DomainClientServiceProvider>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<DomainClientServiceType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum DomainClientServiceType {
  Email = 'EMAIL',
  Push = 'PUSH',
  Sms = 'SMS',
}

export type EssentialSagaDataSerializer = {
  __typename?: 'EssentialSagaDataSerializer';
  data?: Maybe<EssentialSagaSerializer>;
};

export type EssentialSagaItemsSerializer = {
  __typename?: 'EssentialSagaItemsSerializer';
  items: Array<Maybe<EssentialSagaSerializer>>;
};

export type EssentialSagaSerializer = {
  __typename?: 'EssentialSagaSerializer';
  aborted_at?: Maybe<Scalars['Date']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  committed_at?: Maybe<Scalars['Date']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  job?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  pruned_at?: Maybe<Scalars['Date']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  session?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<EssentialSagaState>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  ttl?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum EssentialSagaStageAction {
  CountDocuments = 'COUNT_DOCUMENTS',
  Find = 'FIND',
  FindOne = 'FIND_ONE',
  FindOneAndDelete = 'FIND_ONE_AND_DELETE',
  FindOneAndUpdate = 'FIND_ONE_AND_UPDATE',
  InsertMany = 'INSERT_MANY',
  UpdateMany = 'UPDATE_MANY',
}

export type EssentialSagaStageDataSerializer = {
  __typename?: 'EssentialSagaStageDataSerializer';
  data?: Maybe<EssentialSagaStageSerializer>;
};

export type EssentialSagaStageItemsSerializer = {
  __typename?: 'EssentialSagaStageItemsSerializer';
  items: Array<Maybe<EssentialSagaStageSerializer>>;
};

export type EssentialSagaStageReqSerializer = {
  __typename?: 'EssentialSagaStageReqSerializer';
  data?: Maybe<Scalars['JSON']['output']>;
  filter?: Maybe<FilterSerializer>;
  items?: Maybe<Array<Scalars['JSON']['output']>>;
  query?: Maybe<Scalars['JSON']['output']>;
  update?: Maybe<Scalars['JSON']['output']>;
};

export type EssentialSagaStageSerializer = {
  __typename?: 'EssentialSagaStageSerializer';
  action?: Maybe<EssentialSagaStageAction>;
  bucket?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  req?: Maybe<EssentialSagaStageReqSerializer>;
  res?: Maybe<Scalars['JSON']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  saga?: Maybe<Scalars['JSON']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum EssentialSagaState {
  Aborted = 'ABORTED',
  Awaiting = 'AWAITING',
  Committed = 'COMMITTED',
}

export type FilterDto = {
  pagination?: InputMaybe<PaginationDto>;
  populate?: InputMaybe<Array<PopulateDto>>;
  projection?: InputMaybe<Scalars['JSON']['input']>;
  query: Scalars['JSON']['input'];
};

export type FilterSerializer = {
  __typename?: 'FilterSerializer';
  pagination?: Maybe<PaginationSerializer>;
  populate?: Maybe<PopulateSerializer>;
  projection?: Maybe<Scalars['JSON']['output']>;
  query: Scalars['JSON']['output'];
};

export type FinancialAccountDataSerializer = {
  __typename?: 'FinancialAccountDataSerializer';
  data?: Maybe<FinancialAccountSerializer>;
};

export type FinancialAccountItemsSerializer = {
  __typename?: 'FinancialAccountItemsSerializer';
  items: Array<Maybe<FinancialAccountSerializer>>;
};

export enum FinancialAccountOwnership {
  Common = 'COMMON',
  Government = 'GOVERNMENT',
  Personal = 'PERSONAL',
}

export type FinancialAccountSerializer = {
  __typename?: 'FinancialAccountSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  members?: Maybe<Array<Scalars['String']['output']>>;
  owner?: Maybe<Scalars['JSON']['output']>;
  ownership?: Maybe<FinancialAccountOwnership>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FinancialAccountType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum FinancialAccountType {
  Business = 'BUSINESS',
  Checking = 'CHECKING',
  FixedDeposit = 'FIXED_DEPOSIT',
  Joint = 'JOINT',
  MoneyMarket = 'MONEY_MARKET',
  Savings = 'SAVINGS',
  Student = 'STUDENT',
}

export enum FinancialCurrencyCategory {
  Coin = 'COIN',
  Token = 'TOKEN',
}

export type FinancialCurrencyDataSerializer = {
  __typename?: 'FinancialCurrencyDataSerializer';
  data?: Maybe<FinancialCurrencySerializer>;
};

export type FinancialCurrencyItemsSerializer = {
  __typename?: 'FinancialCurrencyItemsSerializer';
  items: Array<Maybe<FinancialCurrencySerializer>>;
};

export enum FinancialCurrencyLib {
  AvalabsAvalanchejs = 'AVALABS_AVALANCHEJS',
  BitcoinjsLib = 'BITCOINJS_LIB',
  BnbChainJavascriptSdk = 'BNB_CHAIN_JAVASCRIPT_SDK',
  Ethers = 'ETHERS',
  SolanaWeb3Js = 'SOLANA_WEB3_JS',
  TonconnectSdk = 'TONCONNECT_SDK',
  Tronweb = 'TRONWEB',
  Web3 = 'WEB3',
}

export type FinancialCurrencySerializer = {
  __typename?: 'FinancialCurrencySerializer';
  category?: Maybe<FinancialCurrencyCategory>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  code?: Maybe<Scalars['String']['output']>;
  contract?: Maybe<Scalars['String']['output']>;
  countries?: Maybe<Array<Scalars['String']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  explore?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  lib?: Maybe<FinancialCurrencyLib>;
  name?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Scalars['String']['output']>>;
  owner?: Maybe<Scalars['JSON']['output']>;
  precision?: Maybe<Scalars['Float']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  subunits?: Maybe<Array<FinancialCurrencyUnitSerializer>>;
  symbol?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FinancialCurrencyType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum FinancialCurrencyType {
  Real = 'REAL',
  Virtual = 'VIRTUAL',
}

export type FinancialCurrencyUnitSerializer = {
  __typename?: 'FinancialCurrencyUnitSerializer';
  name?: Maybe<Scalars['String']['output']>;
  precision?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

export type FinancialInvoiceDataSerializer = {
  __typename?: 'FinancialInvoiceDataSerializer';
  data?: Maybe<FinancialInvoiceSerializer>;
};

export type FinancialInvoiceItemSerializer = {
  __typename?: 'FinancialInvoiceItemSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  measurement?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  profit?: Maybe<Scalars['Float']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type FinancialInvoiceItemsSerializer = {
  __typename?: 'FinancialInvoiceItemsSerializer';
  items: Array<Maybe<FinancialInvoiceSerializer>>;
};

export type FinancialInvoiceSerializer = {
  __typename?: 'FinancialInvoiceSerializer';
  amount?: Maybe<Scalars['Float']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  closed_at?: Maybe<Scalars['Date']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['JSON']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  expires_at?: Maybe<Scalars['Date']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<FinancialInvoiceItemSerializer>>;
  owner?: Maybe<Scalars['JSON']['output']>;
  paid?: Maybe<Scalars['Float']['output']>;
  payees?: Maybe<Array<FinancialPaySerializer>>;
  payers?: Maybe<Array<FinancialPaySerializer>>;
  profit?: Maybe<Scalars['Float']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  replication?: Maybe<Scalars['Float']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  subscription?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FinancialInvoiceType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum FinancialInvoiceType {
  Repeatable = 'REPEATABLE',
  Replication = 'REPLICATION',
  Subscription = 'SUBSCRIPTION',
  Transaction = 'TRANSACTION',
}

export type FinancialPaySerializer = {
  __typename?: 'FinancialPaySerializer';
  amount?: Maybe<Scalars['Float']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fraction?: Maybe<Scalars['Float']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FinancialPayType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  wallet?: Maybe<Scalars['JSON']['output']>;
};

export enum FinancialPayType {
  Amount = 'AMOUNT',
  Blocked = 'BLOCKED',
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
}

export type FinancialTransactionDataSerializer = {
  __typename?: 'FinancialTransactionDataSerializer';
  data?: Maybe<FinancialTransactionSerializer>;
};

export type FinancialTransactionItemsSerializer = {
  __typename?: 'FinancialTransactionItemsSerializer';
  items: Array<Maybe<FinancialTransactionSerializer>>;
};

export enum FinancialTransactionReason {
  Deposit = 'DEPOSIT',
  Payment = 'PAYMENT',
  Sync = 'SYNC',
  Transfer = 'TRANSFER',
  Withdraw = 'WITHDRAW',
}

export type FinancialTransactionSerializer = {
  __typename?: 'FinancialTransactionSerializer';
  amount?: Maybe<Scalars['Float']['output']>;
  canceled_at?: Maybe<Scalars['Date']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  failed_at?: Maybe<Scalars['Date']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  invoice?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  payees?: Maybe<Array<FinancialPaySerializer>>;
  payers?: Maybe<Array<FinancialPaySerializer>>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<FinancialTransactionReason>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  saga?: Maybe<Scalars['JSON']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<FinancialTransactionState>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FinancialTransactionType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  verified_at?: Maybe<Scalars['Date']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum FinancialTransactionState {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Verified = 'VERIFIED',
}

export enum FinancialTransactionType {
  Deposit = 'DEPOSIT',
  Transfer = 'TRANSFER',
  Withdraw = 'WITHDRAW',
}

export type FinancialWalletDataSerializer = {
  __typename?: 'FinancialWalletDataSerializer';
  data?: Maybe<FinancialWalletSerializer>;
};

export type FinancialWalletItemsSerializer = {
  __typename?: 'FinancialWalletItemsSerializer';
  items: Array<Maybe<FinancialWalletSerializer>>;
};

export type FinancialWalletSerializer = {
  __typename?: 'FinancialWalletSerializer';
  account?: Maybe<Scalars['JSON']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  blocked?: Maybe<Scalars['Float']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['JSON']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  external?: Maybe<Scalars['Float']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  strict?: Maybe<Scalars['Boolean']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Unknown = 'UNKNOWN',
}

export type GeneralActivityDataSerializer = {
  __typename?: 'GeneralActivityDataSerializer';
  data?: Maybe<GeneralActivitySerializer>;
};

export type GeneralActivityItemsSerializer = {
  __typename?: 'GeneralActivityItemsSerializer';
  items: Array<Maybe<GeneralActivitySerializer>>;
};

export type GeneralActivitySerializer = {
  __typename?: 'GeneralActivitySerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  source?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<GeneralActivityType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum GeneralActivityType {
  External = 'EXTERNAL',
  System = 'SYSTEM',
  User = 'USER',
}

export type GeneralArtifactDataSerializer = {
  __typename?: 'GeneralArtifactDataSerializer';
  data?: Maybe<GeneralArtifactSerializer>;
};

export type GeneralArtifactItemsSerializer = {
  __typename?: 'GeneralArtifactItemsSerializer';
  items: Array<Maybe<GeneralArtifactSerializer>>;
};

export type GeneralArtifactSerializer = {
  __typename?: 'GeneralArtifactSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ValueType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type GeneralCommentDataSerializer = {
  __typename?: 'GeneralCommentDataSerializer';
  data?: Maybe<GeneralCommentSerializer>;
};

export type GeneralCommentItemsSerializer = {
  __typename?: 'GeneralCommentItemsSerializer';
  items: Array<Maybe<GeneralCommentSerializer>>;
};

export type GeneralCommentSerializer = {
  __typename?: 'GeneralCommentSerializer';
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  content: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dislikes?: Maybe<Scalars['Float']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  likes?: Maybe<Scalars['Float']['output']>;
  loves?: Maybe<Scalars['Float']['output']>;
  mentions?: Maybe<Array<Scalars['String']['output']>>;
  owner?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reactions?: Maybe<Array<ReactionSerializer>>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<ContentCommentStatus>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  ticket?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
  votes?: Maybe<Scalars['Float']['output']>;
};

export type GeneralEventDataSerializer = {
  __typename?: 'GeneralEventDataSerializer';
  data?: Maybe<GeneralEventSerializer>;
};

export type GeneralEventItemsSerializer = {
  __typename?: 'GeneralEventItemsSerializer';
  items: Array<Maybe<GeneralEventSerializer>>;
};

export type GeneralEventSerializer = {
  __typename?: 'GeneralEventSerializer';
  attendees?: Maybe<Array<Scalars['JSON']['output']>>;
  category?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  color?: Maybe<Scalars['String']['output']>;
  correlation?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  e_date: Scalars['Date']['output'];
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  organizers?: Maybe<Array<Scalars['JSON']['output']>>;
  owner?: Maybe<Scalars['JSON']['output']>;
  place?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  s_date: Scalars['Date']['output'];
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type GeneralWorkflowDataSerializer = {
  __typename?: 'GeneralWorkflowDataSerializer';
  data?: Maybe<GeneralWorkflowSerializer>;
};

export type GeneralWorkflowItemsSerializer = {
  __typename?: 'GeneralWorkflowItemsSerializer';
  items: Array<Maybe<GeneralWorkflowSerializer>>;
};

export type GeneralWorkflowSerializer = {
  __typename?: 'GeneralWorkflowSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status?: Maybe<GeneralWorkflowStatus>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Array<GeneralWorkflowTokenSerializer>>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type GeneralWorkflowStateSerializer = {
  __typename?: 'GeneralWorkflowStateSerializer';
  name?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  status?: Maybe<GeneralWorkflowStatus>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export enum GeneralWorkflowStatus {
  Completed = 'completed',
  Failed = 'failed',
  Paused = 'paused',
  Ready = 'ready',
  Running = 'running',
  Terminated = 'terminated',
}

export type GeneralWorkflowTokenSerializer = {
  __typename?: 'GeneralWorkflowTokenSerializer';
  history?: Maybe<Array<GeneralWorkflowStateSerializer>>;
  id?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
};

export type GrantTimeSerializer = {
  __typename?: 'GrantTimeSerializer';
  cron_exp?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
};

export enum GrantType {
  AuthorizationCode = 'authorization_code',
  ClientCredential = 'client_credential',
  Password = 'password',
  RefreshToken = 'refresh_token',
}

export type IdentityProfileDataSerializer = {
  __typename?: 'IdentityProfileDataSerializer';
  data?: Maybe<IdentityProfileSerializer>;
};

export type IdentityProfileItemsSerializer = {
  __typename?: 'IdentityProfileItemsSerializer';
  items: Array<Maybe<IdentityProfileSerializer>>;
};

export type IdentityProfileSerializer = {
  __typename?: 'IdentityProfileSerializer';
  avatar?: Maybe<Scalars['String']['output']>;
  birthdate?: Maybe<Scalars['Date']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  cover?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Array<Scalars['String']['output']>>;
  gender?: Maybe<Gender>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  national_code?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<IdentityProfileType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  verified_at?: Maybe<Scalars['Date']['output']>;
  verified_by?: Maybe<Scalars['String']['output']>;
  verified_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum IdentityProfileType {
  Govern = 'GOVERN',
  Legal = 'LEGAL',
  Real = 'REAL',
}

export type IdentitySessionDataSerializer = {
  __typename?: 'IdentitySessionDataSerializer';
  data?: Maybe<IdentitySessionSerializer>;
};

export type IdentitySessionItemsSerializer = {
  __typename?: 'IdentitySessionItemsSerializer';
  items: Array<Maybe<IdentitySessionSerializer>>;
};

export type IdentitySessionSerializer = {
  __typename?: 'IdentitySessionSerializer';
  agent?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expiration?: Maybe<Scalars['Float']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type IdentityUserDataSerializer = {
  __typename?: 'IdentityUserDataSerializer';
  data?: Maybe<IdentityUserSerializer>;
};

export type IdentityUserItemsSerializer = {
  __typename?: 'IdentityUserItemsSerializer';
  items: Array<Maybe<IdentityUserSerializer>>;
};

export type IdentityUserSerializer = {
  __typename?: 'IdentityUserSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status?: Maybe<Status>;
  subjects?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  tz?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type JwtTokenSerializer = {
  __typename?: 'JwtTokenSerializer';
  aid?: Maybe<Scalars['String']['output']>;
  cid: Scalars['String']['output'];
  client_id: Scalars['String']['output'];
  coworker?: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  lang: Scalars['String']['output'];
  scope: Scalars['String']['output'];
  session: Scalars['String']['output'];
  strict?: Maybe<Scalars['Boolean']['output']>;
  subject: Scalars['String']['output'];
  type: Scalars['String']['output'];
  tz: Scalars['String']['output'];
  uid?: Maybe<Scalars['String']['output']>;
};

export type LogisticCargoDataSerializer = {
  __typename?: 'LogisticCargoDataSerializer';
  data?: Maybe<LogisticCargoSerializer>;
};

export type LogisticCargoItemsSerializer = {
  __typename?: 'LogisticCargoItemsSerializer';
  items: Array<Maybe<LogisticCargoSerializer>>;
};

export type LogisticCargoSerializer = {
  __typename?: 'LogisticCargoSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fragile?: Maybe<Scalars['Boolean']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  perishable?: Maybe<Scalars['Boolean']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  travels?: Maybe<Array<Scalars['JSON']['output']>>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type LogisticDeviceItemsSerializer = {
  __typename?: 'LogisticDeviceItemsSerializer';
  items: Array<Maybe<ThingDeviceSerializer>>;
};

export type LogisticDriverDataSerializer = {
  __typename?: 'LogisticDriverDataSerializer';
  data?: Maybe<LogisticDriverSerializer>;
};

export type LogisticDriverItemsSerializer = {
  __typename?: 'LogisticDriverItemsSerializer';
  items: Array<Maybe<LogisticDriverSerializer>>;
};

export type LogisticDriverSerializer = {
  __typename?: 'LogisticDriverSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expiration_date?: Maybe<Scalars['Date']['output']>;
  gender?: Maybe<Gender>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<LogisticDriverType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  verified_at?: Maybe<Scalars['Date']['output']>;
  verified_by?: Maybe<Scalars['String']['output']>;
  verified_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum LogisticDriverType {
  ClassA = 'CLASS_A',
  ClassB = 'CLASS_B',
  ClassC = 'CLASS_C',
  ClassE = 'CLASS_E',
  ClassM = 'CLASS_M',
}

export type LogisticLocationDataSerializer = {
  __typename?: 'LogisticLocationDataSerializer';
  data?: Maybe<LogisticLocationSerializer>;
};

export type LogisticLocationGeometrySerializer = {
  __typename?: 'LogisticLocationGeometrySerializer';
  bbox?: Maybe<Array<Scalars['Float']['output']>>;
  coordinates?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<LogisticLocationGeometryType>;
};

export enum LogisticLocationGeometryType {
  LineString = 'LineString',
  MultiLineString = 'MultiLineString',
  MultiPoint = 'MultiPoint',
  MultiPolygon = 'MultiPolygon',
  Point = 'Point',
  Polygon = 'Polygon',
}

export type LogisticLocationItemsSerializer = {
  __typename?: 'LogisticLocationItemsSerializer';
  items: Array<Maybe<LogisticLocationSerializer>>;
};

export type LogisticLocationSerializer = {
  __typename?: 'LogisticLocationSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  geometry?: Maybe<LogisticLocationGeometrySerializer>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  properties?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type LogisticMetricItemsSerializer = {
  __typename?: 'LogisticMetricItemsSerializer';
  items: Array<Maybe<ThingMetricSerializer>>;
};

export type LogisticSensorItemsSerializer = {
  __typename?: 'LogisticSensorItemsSerializer';
  items: Array<Maybe<ThingSensorSerializer>>;
};

export type LogisticTravelDataSerializer = {
  __typename?: 'LogisticTravelDataSerializer';
  data?: Maybe<LogisticTravelSerializer>;
};

export type LogisticTravelItemsSerializer = {
  __typename?: 'LogisticTravelItemsSerializer';
  items: Array<Maybe<LogisticTravelSerializer>>;
};

export type LogisticTravelSerializer = {
  __typename?: 'LogisticTravelSerializer';
  cargoes?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  drivers?: Maybe<Array<Scalars['String']['output']>>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<Scalars['JSON']['output']>>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  vehicles?: Maybe<Array<Scalars['String']['output']>>;
  version?: Maybe<Scalars['String']['output']>;
};

export type LogisticVehicleDataSerializer = {
  __typename?: 'LogisticVehicleDataSerializer';
  data?: Maybe<LogisticVehicleSerializer>;
};

export type LogisticVehicleItemsSerializer = {
  __typename?: 'LogisticVehicleItemsSerializer';
  items: Array<Maybe<LogisticVehicleSerializer>>;
};

export type LogisticVehicleSerializer = {
  __typename?: 'LogisticVehicleSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  drivers?: Maybe<Array<Scalars['JSON']['output']>>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  plates?: Maybe<Array<Scalars['String']['output']>>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status: Status;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type: LogisticVehicleType;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum LogisticVehicleType {
  Car = 'CAR',
  Motorcycle = 'MOTORCYCLE',
  Truck = 'TRUCK',
}

export type Mutation = {
  __typename?: 'Mutation';
  can: AuthAuthorizationSerializer;
  createAuthApt: AuthAptDataSerializer;
  createAuthAptBulk: AuthAptItemsSerializer;
  createAuthGrant: AuthGrantDataSerializer;
  createAuthGrantBulk: AuthGrantItemsSerializer;
  createCareerBranch: CareerBranchDataSerializer;
  createCareerBranchBulk: CareerBranchItemsSerializer;
  createCareerBusiness: CareerBusinessDataSerializer;
  createCareerBusinessBulk: CareerBusinessItemsSerializer;
  createCareerCustomer: CareerCustomerDataSerializer;
  createCareerCustomerBulk: CareerCustomerItemsSerializer;
  createCareerEmployee: CareerEmployeeDataSerializer;
  createCareerEmployeeBulk: CareerEmployeeItemsSerializer;
  createCareerProduct: CareerProductDataSerializer;
  createCareerProductBulk: CareerProductItemsSerializer;
  createCareerService: CareerServiceDataSerializer;
  createCareerServiceBulk: CareerServiceItemsSerializer;
  createCareerStock: CareerStockDataSerializer;
  createCareerStockBulk: CareerStockItemsSerializer;
  createCareerStore: CareerStoreDataSerializer;
  createCareerStoreBulk: CareerStoreItemsSerializer;
  createConjointAccount: ConjointAccountDataSerializer;
  createConjointAccountBulk: ConjointAccountItemsSerializer;
  createConjointChannel: ConjointChannelDataSerializer;
  createConjointChannelBulk: ConjointChannelItemsSerializer;
  createConjointContact: ConjointContactDataSerializer;
  createConjointContactBulk: ConjointContactItemsSerializer;
  createConjointMember: ConjointMemberDataSerializer;
  createConjointMemberBulk: ConjointMemberItemsSerializer;
  createConjointMessage: ConjointMessageDataSerializer;
  createConjointMessageBulk: ConjointMessageItemsSerializer;
  createContentNote: ContentNoteDataSerializer;
  createContentNoteBulk: ContentNoteItemsSerializer;
  createContentPost: ContentPostDataSerializer;
  createContentPostBulk: ContentPostItemsSerializer;
  createContentTicket: ContentTicketDataSerializer;
  createContentTicketBulk: ContentTicketItemsSerializer;
  createContextConfig: ContextConfigDataSerializer;
  createContextConfigBulk: ContextConfigItemsSerializer;
  createContextSetting: ContextSettingDataSerializer;
  createContextSettingBulk: ContextSettingItemsSerializer;
  createDomainApp: DomainAppDataSerializer;
  createDomainAppBulk: DomainAppItemsSerializer;
  createDomainClient: DomainClientDataSerializer;
  createDomainClientBulk: DomainClientItemsSerializer;
  createEssentialSaga: EssentialSagaDataSerializer;
  createEssentialSagaBulk: EssentialSagaItemsSerializer;
  createEssentialSagaStage: EssentialSagaStageDataSerializer;
  createEssentialSagaStageBulk: EssentialSagaStageItemsSerializer;
  createFinancialAccount: FinancialAccountDataSerializer;
  createFinancialAccountBulk: FinancialAccountItemsSerializer;
  createFinancialCurrency: FinancialCurrencyDataSerializer;
  createFinancialCurrencyBulk: FinancialCurrencyItemsSerializer;
  createFinancialInvoice: FinancialInvoiceDataSerializer;
  createFinancialInvoiceBulk: FinancialInvoiceItemsSerializer;
  createFinancialTransaction: FinancialTransactionDataSerializer;
  createFinancialTransactionBulk: FinancialTransactionItemsSerializer;
  createFinancialWallet: FinancialWalletDataSerializer;
  createFinancialWalletBulk: FinancialWalletItemsSerializer;
  createGeneralActivity: GeneralActivityDataSerializer;
  createGeneralActivityBulk: GeneralActivityItemsSerializer;
  createGeneralArtifact: GeneralArtifactDataSerializer;
  createGeneralArtifactBulk: GeneralArtifactItemsSerializer;
  createGeneralComment: GeneralCommentDataSerializer;
  createGeneralCommentBulk: GeneralCommentItemsSerializer;
  createGeneralEvent: GeneralEventDataSerializer;
  createGeneralEventBulk: GeneralEventItemsSerializer;
  createGeneralWorkflow: GeneralWorkflowDataSerializer;
  createGeneralWorkflowBulk: GeneralWorkflowItemsSerializer;
  createIdentityProfile: IdentityProfileDataSerializer;
  createIdentityProfileBulk: IdentityProfileItemsSerializer;
  createIdentitySession: IdentitySessionDataSerializer;
  createIdentitySessionBulk: IdentitySessionItemsSerializer;
  createIdentityUser: IdentityUserDataSerializer;
  createIdentityUserBulk: IdentityUserItemsSerializer;
  createLogisticCargo: LogisticCargoDataSerializer;
  createLogisticCargoBulk: LogisticCargoItemsSerializer;
  createLogisticDriver: LogisticDriverDataSerializer;
  createLogisticDriverBulk: LogisticDriverItemsSerializer;
  createLogisticLocation: LogisticLocationDataSerializer;
  createLogisticLocationBulk: LogisticLocationItemsSerializer;
  createLogisticTravel: LogisticTravelDataSerializer;
  createLogisticTravelBulk: LogisticTravelItemsSerializer;
  createLogisticVehicle: LogisticVehicleDataSerializer;
  createLogisticVehicleBulk: LogisticVehicleItemsSerializer;
  createSpecialFile: SpecialFileDataSerializer;
  createSpecialFileBulk: SpecialFileItemsSerializer;
  createSpecialStat: SpecialStatDataSerializer;
  createSpecialStatBulk: SpecialStatItemsSerializer;
  createThingDevice: ThingDeviceDataSerializer;
  createThingDeviceBulk: LogisticDeviceItemsSerializer;
  createThingMetric: ThingMetricDataSerializer;
  createThingMetricBulk: LogisticMetricItemsSerializer;
  createThingSensor: ThingSensorDataSerializer;
  createThingSensorBulk: LogisticSensorItemsSerializer;
  createTouchEmail: TouchEmailDataSerializer;
  createTouchEmailBulk: TouchEmailItemsSerializer;
  createTouchNotice: TouchNoticeDataSerializer;
  createTouchNoticeBulk: TouchNoticeItemsSerializer;
  createTouchPusHistory: TouchPusHistoryDataSerializer;
  createTouchPusHistoryBulk: TouchPusHistoryItemsSerializer;
  createTouchPush: TouchPushDataSerializer;
  createTouchPushBulk: TouchPushItemsSerializer;
  createTouchSms: TouchSmsDataSerializer;
  createTouchSmsBulk: TouchSmsItemsSerializer;
  deleteAuthAptById: AuthAptDataSerializer;
  deleteAuthGrantById: AuthGrantDataSerializer;
  deleteCareerBranchById: CareerBranchDataSerializer;
  deleteCareerBusinessById: CareerBusinessDataSerializer;
  deleteCareerCustomerById: CareerCustomerDataSerializer;
  deleteCareerEmployeeById: CareerEmployeeDataSerializer;
  deleteCareerProductById: CareerProductDataSerializer;
  deleteCareerServiceById: CareerServiceDataSerializer;
  deleteCareerStockById: CareerStockDataSerializer;
  deleteCareerStoreById: CareerStoreDataSerializer;
  deleteConjointAccountById: ConjointAccountDataSerializer;
  deleteConjointChannelById: ConjointChannelDataSerializer;
  deleteConjointContactById: ConjointContactDataSerializer;
  deleteConjointMemberById: ConjointMemberDataSerializer;
  deleteConjointMessageById: ConjointMessageDataSerializer;
  deleteContentNoteById: ContentNoteDataSerializer;
  deleteContentPostById: ContentPostDataSerializer;
  deleteContentTicketById: ContentTicketDataSerializer;
  deleteContextConfigById: ContextConfigDataSerializer;
  deleteContextSettingById: ContextSettingDataSerializer;
  deleteDomainAppById: DomainAppDataSerializer;
  deleteDomainClientById: DomainClientDataSerializer;
  deleteEssentialSagaById: EssentialSagaDataSerializer;
  deleteEssentialSagaStageById: EssentialSagaStageDataSerializer;
  deleteFinancialAccountById: FinancialAccountDataSerializer;
  deleteFinancialCurrencyById: FinancialCurrencyDataSerializer;
  deleteFinancialInvoiceById: FinancialInvoiceDataSerializer;
  deleteFinancialTransactionById: FinancialTransactionDataSerializer;
  deleteFinancialWalletById: FinancialWalletDataSerializer;
  deleteGeneralActivityById: GeneralActivityDataSerializer;
  deleteGeneralArtifactById: GeneralArtifactDataSerializer;
  deleteGeneralCommentById: GeneralCommentDataSerializer;
  deleteGeneralEventById: GeneralEventDataSerializer;
  deleteGeneralWorkflowById: GeneralWorkflowDataSerializer;
  deleteIdentityProfileById: IdentityProfileDataSerializer;
  deleteIdentitySessionById: IdentitySessionDataSerializer;
  deleteIdentityUserById: IdentityUserDataSerializer;
  deleteLogisticCargoById: LogisticCargoDataSerializer;
  deleteLogisticDriverById: LogisticDriverDataSerializer;
  deleteLogisticLocationById: LogisticLocationDataSerializer;
  deleteLogisticTravelById: LogisticTravelDataSerializer;
  deleteLogisticVehicleById: LogisticVehicleDataSerializer;
  deleteSpecialFileById: SpecialFileDataSerializer;
  deleteSpecialStatById: SpecialStatDataSerializer;
  deleteThingDeviceById: ThingDeviceDataSerializer;
  deleteThingMetricById: ThingMetricDataSerializer;
  deleteThingSensorById: ThingSensorDataSerializer;
  deleteTouchEmailById: TouchEmailDataSerializer;
  deleteTouchNoticeById: TouchNoticeDataSerializer;
  deleteTouchPusHistoryById: TouchPusHistoryDataSerializer;
  deleteTouchPushById: TouchPushDataSerializer;
  deleteTouchSmsById: TouchSmsDataSerializer;
  destroyAuthAptById: AuthAptDataSerializer;
  destroyAuthGrantById: AuthGrantDataSerializer;
  destroyCareerBranchById: CareerBranchDataSerializer;
  destroyCareerBusinessById: CareerBusinessDataSerializer;
  destroyCareerCustomerById: CareerCustomerDataSerializer;
  destroyCareerEmployeeById: CareerEmployeeDataSerializer;
  destroyCareerProductById: CareerProductDataSerializer;
  destroyCareerServiceById: CareerServiceDataSerializer;
  destroyCareerStockById: CareerStockDataSerializer;
  destroyCareerStoreById: CareerStoreDataSerializer;
  destroyConjointAccountById: ConjointAccountDataSerializer;
  destroyConjointChannelById: ConjointChannelDataSerializer;
  destroyConjointContactById: ConjointContactDataSerializer;
  destroyConjointMemberById: ConjointMemberDataSerializer;
  destroyConjointMessageById: ConjointMessageDataSerializer;
  destroyContentNoteById: ContentNoteDataSerializer;
  destroyContentPostById: ContentPostDataSerializer;
  destroyContentTicketById: ContentTicketDataSerializer;
  destroyContextConfigById: ContextConfigDataSerializer;
  destroyContextSettingById: ContextSettingDataSerializer;
  destroyDomainAppById: DomainAppDataSerializer;
  destroyDomainClientById: DomainClientDataSerializer;
  destroyEssentialSagaById: EssentialSagaDataSerializer;
  destroyEssentialSagaStageById: EssentialSagaStageDataSerializer;
  destroyFinancialAccountById: FinancialAccountDataSerializer;
  destroyFinancialCurrencyById: FinancialCurrencyDataSerializer;
  destroyFinancialInvoiceById: FinancialInvoiceDataSerializer;
  destroyFinancialTransactionById: FinancialTransactionDataSerializer;
  destroyFinancialWalletById: FinancialWalletDataSerializer;
  destroyGeneralActivityById: GeneralActivityDataSerializer;
  destroyGeneralArtifactById: GeneralArtifactDataSerializer;
  destroyGeneralCommentById: GeneralCommentDataSerializer;
  destroyGeneralEventById: GeneralEventDataSerializer;
  destroyGeneralWorkflowById: GeneralWorkflowDataSerializer;
  destroyIdentityProfileById: IdentityProfileDataSerializer;
  destroyIdentitySessionById: IdentitySessionDataSerializer;
  destroyIdentityUserById: IdentityUserDataSerializer;
  destroyLogisticCargoById: LogisticCargoDataSerializer;
  destroyLogisticDriverById: LogisticDriverDataSerializer;
  destroyLogisticLocationById: LogisticLocationDataSerializer;
  destroyLogisticTravelById: LogisticTravelDataSerializer;
  destroyLogisticVehicleById: LogisticVehicleDataSerializer;
  destroySpecialFileById: SpecialFileDataSerializer;
  destroySpecialStatById: SpecialStatDataSerializer;
  destroyThingDeviceById: ThingDeviceDataSerializer;
  destroyThingMetricById: ThingMetricDataSerializer;
  destroyThingSensorById: ThingSensorDataSerializer;
  destroyTouchEmailById: TouchEmailDataSerializer;
  destroyTouchNoticeById: TouchNoticeDataSerializer;
  destroyTouchPusHistoryById: TouchPusHistoryDataSerializer;
  destroyTouchPushById: TouchPushDataSerializer;
  destroyTouchSmsById: TouchSmsDataSerializer;
  logout: ResultSerializer;
  restoreAuthAptById: AuthAptDataSerializer;
  restoreAuthGrantById: AuthGrantDataSerializer;
  restoreCareerBranchById: CareerBranchDataSerializer;
  restoreCareerBusinessById: CareerBusinessDataSerializer;
  restoreCareerCustomerById: CareerCustomerDataSerializer;
  restoreCareerEmployeeById: CareerEmployeeDataSerializer;
  restoreCareerProductById: CareerProductDataSerializer;
  restoreCareerServiceById: CareerServiceDataSerializer;
  restoreCareerStockById: CareerStockDataSerializer;
  restoreCareerStoreById: CareerStoreDataSerializer;
  restoreConjointAccountById: ConjointAccountDataSerializer;
  restoreConjointChannelById: ConjointChannelDataSerializer;
  restoreConjointContactById: ConjointContactDataSerializer;
  restoreConjointMemberById: ConjointMemberDataSerializer;
  restoreConjointMessageById: ConjointMessageDataSerializer;
  restoreContentNoteById: ContentNoteDataSerializer;
  restoreContentPostById: ContentPostDataSerializer;
  restoreContentTicketById: ContentTicketDataSerializer;
  restoreContextConfigById: ContextConfigDataSerializer;
  restoreContextSettingById: ContextSettingDataSerializer;
  restoreDomainAppById: DomainAppDataSerializer;
  restoreDomainClientById: DomainClientDataSerializer;
  restoreEssentialSagaById: EssentialSagaDataSerializer;
  restoreEssentialSagaStageById: EssentialSagaStageDataSerializer;
  restoreFinancialAccountById: FinancialAccountDataSerializer;
  restoreFinancialCurrencyById: FinancialCurrencyDataSerializer;
  restoreFinancialInvoiceById: FinancialInvoiceDataSerializer;
  restoreFinancialTransactionById: FinancialTransactionDataSerializer;
  restoreFinancialWalletById: FinancialWalletDataSerializer;
  restoreGeneralActivityById: GeneralActivityDataSerializer;
  restoreGeneralArtifactById: GeneralArtifactDataSerializer;
  restoreGeneralCommentById: GeneralCommentDataSerializer;
  restoreGeneralEventById: GeneralEventDataSerializer;
  restoreGeneralWorkflowById: GeneralWorkflowDataSerializer;
  restoreIdentityProfileById: IdentityProfileDataSerializer;
  restoreIdentitySessionById: IdentitySessionDataSerializer;
  restoreIdentityUserById: IdentityUserDataSerializer;
  restoreLogisticCargoById: LogisticCargoDataSerializer;
  restoreLogisticDriverById: LogisticDriverDataSerializer;
  restoreLogisticLocationById: LogisticLocationDataSerializer;
  restoreLogisticTravelById: LogisticTravelDataSerializer;
  restoreLogisticVehicleById: LogisticVehicleDataSerializer;
  restoreSpecialFileById: SpecialFileDataSerializer;
  restoreSpecialStatById: SpecialStatDataSerializer;
  restoreThingDeviceById: ThingDeviceDataSerializer;
  restoreThingMetricById: ThingMetricDataSerializer;
  restoreThingSensorById: ThingSensorDataSerializer;
  restoreTouchEmailById: TouchEmailDataSerializer;
  restoreTouchNoticeById: TouchNoticeDataSerializer;
  restoreTouchPusHistoryById: TouchPusHistoryDataSerializer;
  restoreTouchPushById: TouchPushDataSerializer;
  restoreTouchSmsById: TouchSmsDataSerializer;
  token: AuthAuthenticationSerializer;
  updateAuthGrantBulk: TotalSerializer;
  updateAuthGrantById: AuthGrantDataSerializer;
  updateCareerBranchBulk: TotalSerializer;
  updateCareerBranchById: CareerBranchDataSerializer;
  updateCareerBusinessBulk: TotalSerializer;
  updateCareerBusinessById: CareerBusinessDataSerializer;
  updateCareerCustomerBulk: TotalSerializer;
  updateCareerCustomerById: CareerCustomerDataSerializer;
  updateCareerEmployeeBulk: TotalSerializer;
  updateCareerEmployeeById: CareerEmployeeDataSerializer;
  updateCareerProductBulk: TotalSerializer;
  updateCareerProductById: CareerProductDataSerializer;
  updateCareerServiceBulk: TotalSerializer;
  updateCareerServiceById: CareerServiceDataSerializer;
  updateCareerStockBulk: TotalSerializer;
  updateCareerStockById: CareerStockDataSerializer;
  updateCareerStoreBulk: TotalSerializer;
  updateCareerStoreById: CareerStoreDataSerializer;
  updateConjointAccountBulk: TotalSerializer;
  updateConjointAccountById: ConjointAccountDataSerializer;
  updateConjointChannelBulk: TotalSerializer;
  updateConjointChannelById: ConjointChannelDataSerializer;
  updateConjointContactBulk: TotalSerializer;
  updateConjointContactById: ConjointContactDataSerializer;
  updateConjointMemberBulk: TotalSerializer;
  updateConjointMemberById: ConjointMemberDataSerializer;
  updateConjointMessageBulk: TotalSerializer;
  updateConjointMessageById: ConjointMessageDataSerializer;
  updateContentNoteBulk: TotalSerializer;
  updateContentNoteById: ContentNoteDataSerializer;
  updateContentPostBulk: TotalSerializer;
  updateContentPostById: ContentPostDataSerializer;
  updateContentTicketBulk: TotalSerializer;
  updateContentTicketById: ContentTicketDataSerializer;
  updateContextConfigBulk: TotalSerializer;
  updateContextConfigById: ContextConfigDataSerializer;
  updateContextSettingBulk: TotalSerializer;
  updateContextSettingById: ContextSettingDataSerializer;
  updateDomainAppBulk: TotalSerializer;
  updateDomainAppById: DomainAppDataSerializer;
  updateDomainClientBulk: TotalSerializer;
  updateDomainClientById: DomainClientDataSerializer;
  updateEssentialSagaBulk: TotalSerializer;
  updateEssentialSagaById: EssentialSagaDataSerializer;
  updateEssentialSagaStageBulk: TotalSerializer;
  updateEssentialSagaStageById: EssentialSagaStageDataSerializer;
  updateFinancialAccountBulk: TotalSerializer;
  updateFinancialAccountById: FinancialAccountDataSerializer;
  updateFinancialCurrencyBulk: TotalSerializer;
  updateFinancialCurrencyById: FinancialCurrencyDataSerializer;
  updateFinancialInvoiceBulk: TotalSerializer;
  updateFinancialInvoiceById: FinancialInvoiceDataSerializer;
  updateFinancialTransactionBulk: TotalSerializer;
  updateFinancialTransactionById: FinancialTransactionDataSerializer;
  updateFinancialWalletBulk: TotalSerializer;
  updateFinancialWalletById: FinancialWalletDataSerializer;
  updateGeneralActivityBulk: TotalSerializer;
  updateGeneralActivityById: GeneralActivityDataSerializer;
  updateGeneralArtifactBulk: TotalSerializer;
  updateGeneralArtifactById: GeneralArtifactDataSerializer;
  updateGeneralCommentBulk: TotalSerializer;
  updateGeneralCommentById: GeneralCommentDataSerializer;
  updateGeneralEventBulk: TotalSerializer;
  updateGeneralEventById: GeneralEventDataSerializer;
  updateGeneralWorkflowBulk: TotalSerializer;
  updateGeneralWorkflowById: GeneralWorkflowDataSerializer;
  updateIdentityProfileBulk: TotalSerializer;
  updateIdentityProfileById: IdentityProfileDataSerializer;
  updateIdentitySessionBulk: TotalSerializer;
  updateIdentitySessionById: IdentitySessionDataSerializer;
  updateIdentityUserBulk: TotalSerializer;
  updateIdentityUserById: IdentityUserDataSerializer;
  updateLogisticCargoBulk: TotalSerializer;
  updateLogisticCargoById: LogisticCargoDataSerializer;
  updateLogisticDriverBulk: TotalSerializer;
  updateLogisticDriverById: LogisticDriverDataSerializer;
  updateLogisticLocationBulk: TotalSerializer;
  updateLogisticLocationById: LogisticLocationDataSerializer;
  updateLogisticTravelBulk: TotalSerializer;
  updateLogisticTravelById: LogisticTravelDataSerializer;
  updateLogisticVehicleBulk: TotalSerializer;
  updateLogisticVehicleById: LogisticVehicleDataSerializer;
  updateSpecialFileBulk: TotalSerializer;
  updateSpecialFileById: SpecialFileDataSerializer;
  updateSpecialStatBulk: TotalSerializer;
  updateSpecialStatById: SpecialStatDataSerializer;
  updateThingDeviceBulk: TotalSerializer;
  updateThingDeviceById: ThingDeviceDataSerializer;
  updateThingMetricBulk: TotalSerializer;
  updateThingMetricById: ThingMetricDataSerializer;
  updateThingSensorBulk: TotalSerializer;
  updateThingSensorById: ThingSensorDataSerializer;
  updateTouchEmailBulk: TotalSerializer;
  updateTouchEmailById: TouchEmailDataSerializer;
  updateTouchNoticeBulk: TotalSerializer;
  updateTouchNoticeById: TouchNoticeDataSerializer;
  updateTouchPusHistoryBulk: TotalSerializer;
  updateTouchPusHistoryById: TouchPusHistoryDataSerializer;
  updateTouchPushBulk: TotalSerializer;
  updateTouchPushById: TouchPushDataSerializer;
  updateTouchSmsBulk: TotalSerializer;
  updateTouchSmsById: TouchSmsDataSerializer;
  verify: JwtTokenSerializer;
};

export type MutationCanArgs = {
  data: AuthAuthorizationDto;
};

export type MutationCreateAuthAptArgs = {
  data: CreateAuthAptDto;
};

export type MutationCreateAuthAptBulkArgs = {
  data: CreateAuthAptItemsDto;
};

export type MutationCreateAuthGrantArgs = {
  data: CreateAuthGrantDto;
};

export type MutationCreateAuthGrantBulkArgs = {
  data: CreateAuthGrantItemsDto;
};

export type MutationCreateCareerBranchArgs = {
  data: CreateCareerBranchDto;
};

export type MutationCreateCareerBranchBulkArgs = {
  data: CreateCareerBranchItemsDto;
};

export type MutationCreateCareerBusinessArgs = {
  data: CreateCareerBusinessDto;
};

export type MutationCreateCareerBusinessBulkArgs = {
  data: CreateCareerBusinessItemsDto;
};

export type MutationCreateCareerCustomerArgs = {
  data: CreateCareerCustomerDto;
};

export type MutationCreateCareerCustomerBulkArgs = {
  data: CreateCareerCustomerItemsDto;
};

export type MutationCreateCareerEmployeeArgs = {
  data: CreateCareerEmployeeDto;
};

export type MutationCreateCareerEmployeeBulkArgs = {
  data: CreateCareerEmployeeItemsDto;
};

export type MutationCreateCareerProductArgs = {
  data: CreateCareerProductDto;
};

export type MutationCreateCareerProductBulkArgs = {
  data: CreateCareerProductItemsDto;
};

export type MutationCreateCareerServiceArgs = {
  data: CreateCareerServiceDto;
};

export type MutationCreateCareerServiceBulkArgs = {
  data: CreateCareerServiceItemsDto;
};

export type MutationCreateCareerStockArgs = {
  data: CreateCareerStockDto;
};

export type MutationCreateCareerStockBulkArgs = {
  data: CreateCareerStockItemsDto;
};

export type MutationCreateCareerStoreArgs = {
  data: CreateCareerStoreDto;
};

export type MutationCreateCareerStoreBulkArgs = {
  data: CreateCareerStoreItemsDto;
};

export type MutationCreateConjointAccountArgs = {
  data: CreateConjointAccountDto;
};

export type MutationCreateConjointAccountBulkArgs = {
  data: CreateConjointAccountItemsDto;
};

export type MutationCreateConjointChannelArgs = {
  data: CreateConjointChannelDto;
};

export type MutationCreateConjointChannelBulkArgs = {
  data: CreateConjointChannelItemsDto;
};

export type MutationCreateConjointContactArgs = {
  data: CreateConjointContactDto;
};

export type MutationCreateConjointContactBulkArgs = {
  data: CreateConjointContactItemsDto;
};

export type MutationCreateConjointMemberArgs = {
  data: CreateConjointMemberDto;
};

export type MutationCreateConjointMemberBulkArgs = {
  data: CreateConjointMemberItemsDto;
};

export type MutationCreateConjointMessageArgs = {
  data: CreateConjointMessageDto;
};

export type MutationCreateConjointMessageBulkArgs = {
  data: CreateConjointMessageItemsDto;
};

export type MutationCreateContentNoteArgs = {
  data: CreateContentNoteDto;
};

export type MutationCreateContentNoteBulkArgs = {
  data: CreateContentNoteItemsDto;
};

export type MutationCreateContentPostArgs = {
  data: CreateContentPostDto;
};

export type MutationCreateContentPostBulkArgs = {
  data: CreateContentPostItemsDto;
};

export type MutationCreateContentTicketArgs = {
  data: CreateContentTicketDto;
};

export type MutationCreateContentTicketBulkArgs = {
  data: CreateContentTicketItemsDto;
};

export type MutationCreateContextConfigArgs = {
  data: CreateContextConfigDto;
};

export type MutationCreateContextConfigBulkArgs = {
  data: CreateContextConfigItemsDto;
};

export type MutationCreateContextSettingArgs = {
  data: CreateContextSettingDto;
};

export type MutationCreateContextSettingBulkArgs = {
  data: CreateContextSettingItemsDto;
};

export type MutationCreateDomainAppArgs = {
  data: CreateDomainAppDto;
};

export type MutationCreateDomainAppBulkArgs = {
  data: CreateDomainAppItemsDto;
};

export type MutationCreateDomainClientArgs = {
  data: CreateDomainClientDto;
};

export type MutationCreateDomainClientBulkArgs = {
  data: CreateDomainClientItemsDto;
};

export type MutationCreateEssentialSagaArgs = {
  data: CreateEssentialSagaDto;
};

export type MutationCreateEssentialSagaBulkArgs = {
  data: CreateEssentialSagaItemsDto;
};

export type MutationCreateEssentialSagaStageArgs = {
  data: CreateEssentialSagaStageDto;
};

export type MutationCreateEssentialSagaStageBulkArgs = {
  data: CreateEssentialSagaStageItemsDto;
};

export type MutationCreateFinancialAccountArgs = {
  data: CreateFinancialAccountDto;
};

export type MutationCreateFinancialAccountBulkArgs = {
  data: CreateFinancialAccountItemsDto;
};

export type MutationCreateFinancialCurrencyArgs = {
  data: CreateFinancialCurrencyDto;
};

export type MutationCreateFinancialCurrencyBulkArgs = {
  data: CreateFinancialCurrencyItemsDto;
};

export type MutationCreateFinancialInvoiceArgs = {
  data: CreateFinancialInvoiceDto;
};

export type MutationCreateFinancialInvoiceBulkArgs = {
  data: CreateFinancialInvoiceItemsDto;
};

export type MutationCreateFinancialTransactionArgs = {
  data: CreateFinancialTransactionDto;
};

export type MutationCreateFinancialTransactionBulkArgs = {
  data: CreateFinancialTransactionItemsDto;
};

export type MutationCreateFinancialWalletArgs = {
  data: CreateFinancialWalletDto;
};

export type MutationCreateFinancialWalletBulkArgs = {
  data: CreateFinancialWalletItemsDto;
};

export type MutationCreateGeneralActivityArgs = {
  data: CreateGeneralActivityDto;
};

export type MutationCreateGeneralActivityBulkArgs = {
  data: CreateGeneralActivityItemsDto;
};

export type MutationCreateGeneralArtifactArgs = {
  data: CreateGeneralArtifactDto;
};

export type MutationCreateGeneralArtifactBulkArgs = {
  data: CreateGeneralArtifactItemsDto;
};

export type MutationCreateGeneralCommentArgs = {
  data: CreateGeneralCommentDto;
};

export type MutationCreateGeneralCommentBulkArgs = {
  data: CreateGeneralCommentItemsDto;
};

export type MutationCreateGeneralEventArgs = {
  data: CreateGeneralEventDto;
};

export type MutationCreateGeneralEventBulkArgs = {
  data: CreateGeneralEventItemsDto;
};

export type MutationCreateGeneralWorkflowArgs = {
  data: CreateGeneralWorkflowDto;
};

export type MutationCreateGeneralWorkflowBulkArgs = {
  data: CreateGeneralWorkflowItemsDto;
};

export type MutationCreateIdentityProfileArgs = {
  data: CreateIdentityProfileDto;
};

export type MutationCreateIdentityProfileBulkArgs = {
  data: CreateIdentityProfileItemsDto;
};

export type MutationCreateIdentitySessionArgs = {
  data: CreateIdentitySessionDto;
};

export type MutationCreateIdentitySessionBulkArgs = {
  data: CreateIdentitySessionItemsDto;
};

export type MutationCreateIdentityUserArgs = {
  data: CreateIdentityUserDto;
};

export type MutationCreateIdentityUserBulkArgs = {
  data: CreateIdentityUserItemsDto;
};

export type MutationCreateLogisticCargoArgs = {
  data: CreateLogisticCargoDto;
};

export type MutationCreateLogisticCargoBulkArgs = {
  data: CreateLogisticCargoItemsDto;
};

export type MutationCreateLogisticDriverArgs = {
  data: CreateLogisticDriverDto;
};

export type MutationCreateLogisticDriverBulkArgs = {
  data: CreateLogisticDriverItemsDto;
};

export type MutationCreateLogisticLocationArgs = {
  data: CreateLogisticLocationDto;
};

export type MutationCreateLogisticLocationBulkArgs = {
  data: CreateLogisticLocationItemsDto;
};

export type MutationCreateLogisticTravelArgs = {
  data: CreateLogisticTravelDto;
};

export type MutationCreateLogisticTravelBulkArgs = {
  data: CreateLogisticTravelItemsDto;
};

export type MutationCreateLogisticVehicleArgs = {
  data: CreateLogisticVehicleDto;
};

export type MutationCreateLogisticVehicleBulkArgs = {
  data: CreateLogisticVehicleItemsDto;
};

export type MutationCreateSpecialFileArgs = {
  data: CreateSpecialFileDto;
};

export type MutationCreateSpecialFileBulkArgs = {
  data: CreateSpecialFileItemsDto;
};

export type MutationCreateSpecialStatArgs = {
  data: CreateSpecialStatDto;
};

export type MutationCreateSpecialStatBulkArgs = {
  data: CreateSpecialStatItemsDto;
};

export type MutationCreateThingDeviceArgs = {
  data: CreateThingDeviceDto;
};

export type MutationCreateThingDeviceBulkArgs = {
  data: CreateThingDeviceItemsDto;
};

export type MutationCreateThingMetricArgs = {
  data: CreateThingMetricDto;
};

export type MutationCreateThingMetricBulkArgs = {
  data: CreateThingMetricItemsDto;
};

export type MutationCreateThingSensorArgs = {
  data: CreateThingSensorDto;
};

export type MutationCreateThingSensorBulkArgs = {
  data: CreateThingSensorItemsDto;
};

export type MutationCreateTouchEmailArgs = {
  data: CreateTouchEmailDto;
};

export type MutationCreateTouchEmailBulkArgs = {
  data: CreateTouchEmailItemsDto;
};

export type MutationCreateTouchNoticeArgs = {
  data: CreateTouchNoticeDto;
};

export type MutationCreateTouchNoticeBulkArgs = {
  data: CreateTouchNoticeItemsDto;
};

export type MutationCreateTouchPusHistoryArgs = {
  data: CreateTouchPusHistoryDto;
};

export type MutationCreateTouchPusHistoryBulkArgs = {
  data: CreateTouchPusHistoryItemsDto;
};

export type MutationCreateTouchPushArgs = {
  data: CreateTouchPushDto;
};

export type MutationCreateTouchPushBulkArgs = {
  data: CreateTouchPushItemsDto;
};

export type MutationCreateTouchSmsArgs = {
  data: CreateTouchSmsDto;
};

export type MutationCreateTouchSmsBulkArgs = {
  data: CreateTouchSmsItemsDto;
};

export type MutationDeleteAuthAptByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteAuthGrantByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCareerBranchByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCareerBusinessByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCareerCustomerByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCareerEmployeeByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCareerProductByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCareerServiceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCareerStockByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCareerStoreByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteConjointAccountByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteConjointChannelByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteConjointContactByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteConjointMemberByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteConjointMessageByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteContentNoteByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteContentPostByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteContentTicketByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteContextConfigByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteContextSettingByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteDomainAppByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteDomainClientByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteEssentialSagaByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteEssentialSagaStageByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteFinancialAccountByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteFinancialCurrencyByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteFinancialInvoiceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteFinancialTransactionByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteFinancialWalletByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteGeneralActivityByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteGeneralArtifactByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteGeneralCommentByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteGeneralEventByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteGeneralWorkflowByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteIdentityProfileByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteIdentitySessionByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteIdentityUserByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteLogisticCargoByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteLogisticDriverByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteLogisticLocationByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteLogisticTravelByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteLogisticVehicleByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteSpecialFileByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteSpecialStatByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteThingDeviceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteThingMetricByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteThingSensorByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteTouchEmailByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteTouchNoticeByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteTouchPusHistoryByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteTouchPushByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteTouchSmsByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyAuthAptByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyAuthGrantByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyCareerBranchByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyCareerBusinessByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyCareerCustomerByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyCareerEmployeeByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyCareerProductByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyCareerServiceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyCareerStockByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyCareerStoreByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyConjointAccountByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyConjointChannelByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyConjointContactByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyConjointMemberByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyConjointMessageByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyContentNoteByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyContentPostByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyContentTicketByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyContextConfigByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyContextSettingByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyDomainAppByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyDomainClientByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyEssentialSagaByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyEssentialSagaStageByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyFinancialAccountByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyFinancialCurrencyByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyFinancialInvoiceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyFinancialTransactionByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyFinancialWalletByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyGeneralActivityByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyGeneralArtifactByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyGeneralCommentByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyGeneralEventByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyGeneralWorkflowByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyIdentityProfileByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyIdentitySessionByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyIdentityUserByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyLogisticCargoByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyLogisticDriverByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyLogisticLocationByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyLogisticTravelByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyLogisticVehicleByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroySpecialFileByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroySpecialStatByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyThingDeviceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyThingMetricByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyThingSensorByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyTouchEmailByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyTouchNoticeByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyTouchPusHistoryByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyTouchPushByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDestroyTouchSmsByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreAuthAptByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreAuthGrantByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreCareerBranchByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreCareerBusinessByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreCareerCustomerByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreCareerEmployeeByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreCareerProductByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreCareerServiceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreCareerStockByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreCareerStoreByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreConjointAccountByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreConjointChannelByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreConjointContactByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreConjointMemberByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreConjointMessageByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreContentNoteByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreContentPostByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreContentTicketByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreContextConfigByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreContextSettingByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreDomainAppByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreDomainClientByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreEssentialSagaByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreEssentialSagaStageByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreFinancialAccountByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreFinancialCurrencyByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreFinancialInvoiceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreFinancialTransactionByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreFinancialWalletByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreGeneralActivityByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreGeneralArtifactByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreGeneralCommentByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreGeneralEventByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreGeneralWorkflowByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreIdentityProfileByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreIdentitySessionByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreIdentityUserByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreLogisticCargoByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreLogisticDriverByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreLogisticLocationByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreLogisticTravelByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreLogisticVehicleByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreSpecialFileByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreSpecialStatByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreThingDeviceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreThingMetricByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreThingSensorByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreTouchEmailByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreTouchNoticeByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreTouchPusHistoryByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreTouchPushByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreTouchSmsByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTokenArgs = {
  data: AuthAuthenticationDto;
};

export type MutationUpdateAuthGrantBulkArgs = {
  data: UpdateAuthGrantDto;
  filter: QueryFilterDto;
};

export type MutationUpdateAuthGrantByIdArgs = {
  data: UpdateAuthGrantDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateCareerBranchBulkArgs = {
  data: UpdateCareerBranchDto;
  filter: QueryFilterDto;
};

export type MutationUpdateCareerBranchByIdArgs = {
  data: UpdateCareerBranchDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateCareerBusinessBulkArgs = {
  data: UpdateCareerBusinessDto;
  filter: QueryFilterDto;
};

export type MutationUpdateCareerBusinessByIdArgs = {
  data: UpdateCareerBusinessDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateCareerCustomerBulkArgs = {
  data: UpdateCareerCustomerDto;
  filter: QueryFilterDto;
};

export type MutationUpdateCareerCustomerByIdArgs = {
  data: UpdateCareerCustomerDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateCareerEmployeeBulkArgs = {
  data: UpdateCareerEmployeeDto;
  filter: QueryFilterDto;
};

export type MutationUpdateCareerEmployeeByIdArgs = {
  data: UpdateCareerEmployeeDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateCareerProductBulkArgs = {
  data: UpdateCareerProductDto;
  filter: QueryFilterDto;
};

export type MutationUpdateCareerProductByIdArgs = {
  data: UpdateCareerProductDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateCareerServiceBulkArgs = {
  data: UpdateCareerServiceDto;
  filter: QueryFilterDto;
};

export type MutationUpdateCareerServiceByIdArgs = {
  data: UpdateCareerServiceDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateCareerStockBulkArgs = {
  data: UpdateCareerStockDto;
  filter: QueryFilterDto;
};

export type MutationUpdateCareerStockByIdArgs = {
  data: UpdateCareerStockDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateCareerStoreBulkArgs = {
  data: UpdateCareerStoreDto;
  filter: QueryFilterDto;
};

export type MutationUpdateCareerStoreByIdArgs = {
  data: UpdateCareerStoreDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateConjointAccountBulkArgs = {
  data: UpdateConjointAccountDto;
  filter: QueryFilterDto;
};

export type MutationUpdateConjointAccountByIdArgs = {
  data: UpdateConjointAccountDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateConjointChannelBulkArgs = {
  data: UpdateConjointChannelDto;
  filter: QueryFilterDto;
};

export type MutationUpdateConjointChannelByIdArgs = {
  data: UpdateConjointChannelDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateConjointContactBulkArgs = {
  data: UpdateConjointContactDto;
  filter: QueryFilterDto;
};

export type MutationUpdateConjointContactByIdArgs = {
  data: UpdateConjointContactDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateConjointMemberBulkArgs = {
  data: UpdateConjointMemberDto;
  filter: QueryFilterDto;
};

export type MutationUpdateConjointMemberByIdArgs = {
  data: UpdateConjointMemberDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateConjointMessageBulkArgs = {
  data: UpdateConjointMessageDto;
  filter: QueryFilterDto;
};

export type MutationUpdateConjointMessageByIdArgs = {
  data: UpdateConjointMessageDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateContentNoteBulkArgs = {
  data: UpdateContentNoteDto;
  filter: QueryFilterDto;
};

export type MutationUpdateContentNoteByIdArgs = {
  data: UpdateContentNoteDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateContentPostBulkArgs = {
  data: UpdateContentPostDto;
  filter: QueryFilterDto;
};

export type MutationUpdateContentPostByIdArgs = {
  data: UpdateContentPostDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateContentTicketBulkArgs = {
  data: UpdateContentTicketDto;
  filter: QueryFilterDto;
};

export type MutationUpdateContentTicketByIdArgs = {
  data: UpdateContentTicketDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateContextConfigBulkArgs = {
  data: UpdateContextConfigDto;
  filter: QueryFilterDto;
};

export type MutationUpdateContextConfigByIdArgs = {
  data: UpdateContextConfigDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateContextSettingBulkArgs = {
  data: UpdateContextSettingDto;
  filter: QueryFilterDto;
};

export type MutationUpdateContextSettingByIdArgs = {
  data: UpdateContextSettingDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateDomainAppBulkArgs = {
  data: UpdateDomainAppDto;
  filter: QueryFilterDto;
};

export type MutationUpdateDomainAppByIdArgs = {
  data: UpdateDomainAppDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateDomainClientBulkArgs = {
  data: UpdateDomainClientDto;
  filter: QueryFilterDto;
};

export type MutationUpdateDomainClientByIdArgs = {
  data: UpdateDomainClientDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateEssentialSagaBulkArgs = {
  data: UpdateEssentialSagaDto;
  filter: QueryFilterDto;
};

export type MutationUpdateEssentialSagaByIdArgs = {
  data: UpdateEssentialSagaDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateEssentialSagaStageBulkArgs = {
  data: UpdateEssentialSagaStageDto;
  filter: QueryFilterDto;
};

export type MutationUpdateEssentialSagaStageByIdArgs = {
  data: UpdateEssentialSagaStageDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateFinancialAccountBulkArgs = {
  data: UpdateFinancialAccountDto;
  filter: QueryFilterDto;
};

export type MutationUpdateFinancialAccountByIdArgs = {
  data: UpdateFinancialAccountDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateFinancialCurrencyBulkArgs = {
  data: UpdateFinancialCurrencyDto;
  filter: QueryFilterDto;
};

export type MutationUpdateFinancialCurrencyByIdArgs = {
  data: UpdateFinancialCurrencyDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateFinancialInvoiceBulkArgs = {
  data: UpdateFinancialInvoiceDto;
  filter: QueryFilterDto;
};

export type MutationUpdateFinancialInvoiceByIdArgs = {
  data: UpdateFinancialInvoiceDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateFinancialTransactionBulkArgs = {
  data: UpdateFinancialTransactionDto;
  filter: QueryFilterDto;
};

export type MutationUpdateFinancialTransactionByIdArgs = {
  data: UpdateFinancialTransactionDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateFinancialWalletBulkArgs = {
  data: UpdateFinancialWalletDto;
  filter: QueryFilterDto;
};

export type MutationUpdateFinancialWalletByIdArgs = {
  data: UpdateFinancialWalletDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateGeneralActivityBulkArgs = {
  data: UpdateGeneralActivityDto;
  filter: QueryFilterDto;
};

export type MutationUpdateGeneralActivityByIdArgs = {
  data: UpdateGeneralActivityDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateGeneralArtifactBulkArgs = {
  data: UpdateGeneralArtifactDto;
  filter: QueryFilterDto;
};

export type MutationUpdateGeneralArtifactByIdArgs = {
  data: UpdateGeneralArtifactDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateGeneralCommentBulkArgs = {
  data: UpdateGeneralCommentDto;
  filter: QueryFilterDto;
};

export type MutationUpdateGeneralCommentByIdArgs = {
  data: UpdateGeneralCommentDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateGeneralEventBulkArgs = {
  data: UpdateGeneralEventDto;
  filter: QueryFilterDto;
};

export type MutationUpdateGeneralEventByIdArgs = {
  data: UpdateGeneralEventDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateGeneralWorkflowBulkArgs = {
  data: UpdateGeneralWorkflowDto;
  filter: QueryFilterDto;
};

export type MutationUpdateGeneralWorkflowByIdArgs = {
  data: UpdateGeneralWorkflowDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateIdentityProfileBulkArgs = {
  data: UpdateIdentityProfileDto;
  filter: QueryFilterDto;
};

export type MutationUpdateIdentityProfileByIdArgs = {
  data: UpdateIdentityProfileDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateIdentitySessionBulkArgs = {
  data: UpdateIdentitySessionDto;
  filter: QueryFilterDto;
};

export type MutationUpdateIdentitySessionByIdArgs = {
  data: UpdateIdentitySessionDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateIdentityUserBulkArgs = {
  data: UpdateIdentityUserDto;
  filter: QueryFilterDto;
};

export type MutationUpdateIdentityUserByIdArgs = {
  data: UpdateIdentityUserDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateLogisticCargoBulkArgs = {
  data: UpdateLogisticCargoDto;
  filter: QueryFilterDto;
};

export type MutationUpdateLogisticCargoByIdArgs = {
  data: UpdateLogisticCargoDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateLogisticDriverBulkArgs = {
  data: UpdateLogisticDriverDto;
  filter: QueryFilterDto;
};

export type MutationUpdateLogisticDriverByIdArgs = {
  data: UpdateLogisticDriverDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateLogisticLocationBulkArgs = {
  data: UpdateLogisticLocationDto;
  filter: QueryFilterDto;
};

export type MutationUpdateLogisticLocationByIdArgs = {
  data: UpdateLogisticLocationDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateLogisticTravelBulkArgs = {
  data: UpdateLogisticTravelDto;
  filter: QueryFilterDto;
};

export type MutationUpdateLogisticTravelByIdArgs = {
  data: UpdateLogisticTravelDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateLogisticVehicleBulkArgs = {
  data: UpdateLogisticVehicleDto;
  filter: QueryFilterDto;
};

export type MutationUpdateLogisticVehicleByIdArgs = {
  data: UpdateLogisticVehicleDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateSpecialFileBulkArgs = {
  data: UpdateSpecialFileDto;
  filter: QueryFilterDto;
};

export type MutationUpdateSpecialFileByIdArgs = {
  data: UpdateSpecialFileDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateSpecialStatBulkArgs = {
  data: UpdateSpecialStatDto;
  filter: QueryFilterDto;
};

export type MutationUpdateSpecialStatByIdArgs = {
  data: UpdateSpecialStatDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateThingDeviceBulkArgs = {
  data: UpdateThingDeviceDto;
  filter: QueryFilterDto;
};

export type MutationUpdateThingDeviceByIdArgs = {
  data: UpdateThingDeviceDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateThingMetricBulkArgs = {
  data: UpdateThingMetricDto;
  filter: QueryFilterDto;
};

export type MutationUpdateThingMetricByIdArgs = {
  data: UpdateThingMetricDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateThingSensorBulkArgs = {
  data: UpdateThingSensorDto;
  filter: QueryFilterDto;
};

export type MutationUpdateThingSensorByIdArgs = {
  data: UpdateThingSensorDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateTouchEmailBulkArgs = {
  data: UpdateTouchEmailDto;
  filter: QueryFilterDto;
};

export type MutationUpdateTouchEmailByIdArgs = {
  data: UpdateTouchEmailDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateTouchNoticeBulkArgs = {
  data: UpdateTouchNoticeDto;
  filter: QueryFilterDto;
};

export type MutationUpdateTouchNoticeByIdArgs = {
  data: UpdateTouchNoticeDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateTouchPusHistoryBulkArgs = {
  data: UpdateTouchPusHistoryDto;
  filter: QueryFilterDto;
};

export type MutationUpdateTouchPusHistoryByIdArgs = {
  data: UpdateTouchPusHistoryDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateTouchPushBulkArgs = {
  data: UpdateTouchPushDto;
  filter: QueryFilterDto;
};

export type MutationUpdateTouchPushByIdArgs = {
  data: UpdateTouchPushDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateTouchSmsBulkArgs = {
  data: UpdateTouchSmsDto;
  filter: QueryFilterDto;
};

export type MutationUpdateTouchSmsByIdArgs = {
  data: UpdateTouchSmsDto;
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type NominatimPlaceAddressSerializer = {
  __typename?: 'NominatimPlaceAddressSerializer';
  city?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  county: Scalars['String']['output'];
  district: Scalars['String']['output'];
  municipality?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  quarter?: Maybe<Scalars['String']['output']>;
  road?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  village?: Maybe<Scalars['String']['output']>;
};

export type NominatimPlaceSerializer = {
  __typename?: 'NominatimPlaceSerializer';
  address?: Maybe<NominatimPlaceAddressSerializer>;
  bbox: Array<Scalars['Float']['output']>;
  category: Scalars['String']['output'];
  display_name: Scalars['String']['output'];
  lat: Scalars['Float']['output'];
  lon: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PaginationDto = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};

export type PaginationSerializer = {
  __typename?: 'PaginationSerializer';
  limit?: Maybe<Scalars['Float']['output']>;
  skip?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['JSON']['output']>;
};

export type PopulateDto = {
  match?: InputMaybe<Scalars['JSON']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<PaginationDto>;
  path: Scalars['String']['input'];
  select?: InputMaybe<Scalars['JSON']['input']>;
};

export type PopulateSerializer = {
  __typename?: 'PopulateSerializer';
  match?: Maybe<Scalars['JSON']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  options?: Maybe<PaginationSerializer>;
  path: Scalars['String']['output'];
  select?: Maybe<Scalars['JSON']['output']>;
};

export type Query = {
  __typename?: 'Query';
  countAuthApt: TotalSerializer;
  countAuthGrant: TotalSerializer;
  countCareerBranch: TotalSerializer;
  countCareerBusiness: TotalSerializer;
  countCareerCustomer: TotalSerializer;
  countCareerEmployee: TotalSerializer;
  countCareerProduct: TotalSerializer;
  countCareerService: TotalSerializer;
  countCareerStock: TotalSerializer;
  countCareerStore: TotalSerializer;
  countConjointAccount: TotalSerializer;
  countConjointChannel: TotalSerializer;
  countConjointContact: TotalSerializer;
  countConjointMember: TotalSerializer;
  countConjointMessage: TotalSerializer;
  countContentNote: TotalSerializer;
  countContentPost: TotalSerializer;
  countContentTicket: TotalSerializer;
  countContextConfig: TotalSerializer;
  countContextSetting: TotalSerializer;
  countDomainApp: TotalSerializer;
  countDomainClient: TotalSerializer;
  countEssentialSaga: TotalSerializer;
  countEssentialSagaStage: TotalSerializer;
  countFinancialAccount: TotalSerializer;
  countFinancialCurrency: TotalSerializer;
  countFinancialInvoice: TotalSerializer;
  countFinancialTransaction: TotalSerializer;
  countFinancialWallet: TotalSerializer;
  countGeneralActivity: TotalSerializer;
  countGeneralArtifact: TotalSerializer;
  countGeneralComment: TotalSerializer;
  countGeneralEvent: TotalSerializer;
  countGeneralWorkflow: TotalSerializer;
  countIdentityProfile: TotalSerializer;
  countIdentitySession: TotalSerializer;
  countIdentityUser: TotalSerializer;
  countLogisticCargo: TotalSerializer;
  countLogisticDriver: TotalSerializer;
  countLogisticLocation: TotalSerializer;
  countLogisticTravel: TotalSerializer;
  countLogisticVehicle: TotalSerializer;
  countSpecialFile: TotalSerializer;
  countSpecialStat: TotalSerializer;
  countThingDevice: TotalSerializer;
  countThingMetric: TotalSerializer;
  countThingSensor: TotalSerializer;
  countTouchEmail: TotalSerializer;
  countTouchNotice: TotalSerializer;
  countTouchPusHistory: TotalSerializer;
  countTouchPush: TotalSerializer;
  countTouchSms: TotalSerializer;
  findAuthApt: AuthAptItemsSerializer;
  findAuthAptById: AuthAptDataSerializer;
  findAuthGrant: AuthGrantItemsSerializer;
  findAuthGrantById: AuthGrantDataSerializer;
  findCareerBranch: CareerBranchItemsSerializer;
  findCareerBranchById: CareerBranchDataSerializer;
  findCareerBusiness: CareerBusinessItemsSerializer;
  findCareerBusinessById: CareerBusinessDataSerializer;
  findCareerCustomer: CareerCustomerItemsSerializer;
  findCareerCustomerById: CareerCustomerDataSerializer;
  findCareerEmployee: CareerEmployeeItemsSerializer;
  findCareerEmployeeById: CareerEmployeeDataSerializer;
  findCareerProduct: CareerProductItemsSerializer;
  findCareerProductById: CareerProductDataSerializer;
  findCareerService: CareerServiceItemsSerializer;
  findCareerServiceById: CareerServiceDataSerializer;
  findCareerStock: CareerStockItemsSerializer;
  findCareerStockById: CareerStockDataSerializer;
  findCareerStore: CareerStoreItemsSerializer;
  findCareerStoreById: CareerStoreDataSerializer;
  findConjointAccount: ConjointAccountItemsSerializer;
  findConjointAccountById: ConjointAccountDataSerializer;
  findConjointChannel: ConjointChannelItemsSerializer;
  findConjointChannelById: ConjointChannelDataSerializer;
  findConjointContact: ConjointContactItemsSerializer;
  findConjointContactById: ConjointContactDataSerializer;
  findConjointMember: ConjointMemberItemsSerializer;
  findConjointMemberById: ConjointMemberDataSerializer;
  findConjointMessage: ConjointMessageItemsSerializer;
  findConjointMessageById: ConjointMessageDataSerializer;
  findContentNote: ContentNoteItemsSerializer;
  findContentNoteById: ContentNoteDataSerializer;
  findContentPost: ContentPostItemsSerializer;
  findContentPostById: ContentPostDataSerializer;
  findContentTicket: ContentTicketItemsSerializer;
  findContentTicketById: ContentTicketDataSerializer;
  findContextConfig: ContextConfigItemsSerializer;
  findContextConfigById: ContextConfigDataSerializer;
  findContextSetting: ContextSettingItemsSerializer;
  findContextSettingById: ContextSettingDataSerializer;
  findDomainApp: DomainAppItemsSerializer;
  findDomainAppById: DomainAppDataSerializer;
  findDomainClient: DomainClientItemsSerializer;
  findDomainClientById: DomainClientDataSerializer;
  findEssentialSaga: EssentialSagaItemsSerializer;
  findEssentialSagaById: EssentialSagaDataSerializer;
  findEssentialSagaStage: EssentialSagaStageItemsSerializer;
  findEssentialSagaStageById: EssentialSagaStageDataSerializer;
  findFinancialAccount: FinancialAccountItemsSerializer;
  findFinancialAccountById: FinancialAccountDataSerializer;
  findFinancialCurrency: FinancialCurrencyItemsSerializer;
  findFinancialCurrencyById: FinancialCurrencyDataSerializer;
  findFinancialInvoice: FinancialInvoiceItemsSerializer;
  findFinancialInvoiceById: FinancialInvoiceDataSerializer;
  findFinancialTransaction: FinancialTransactionItemsSerializer;
  findFinancialTransactionById: FinancialTransactionDataSerializer;
  findFinancialWallet: FinancialWalletItemsSerializer;
  findFinancialWalletById: FinancialWalletDataSerializer;
  findGeneralActivity: GeneralActivityItemsSerializer;
  findGeneralActivityById: GeneralActivityDataSerializer;
  findGeneralArtifact: GeneralArtifactItemsSerializer;
  findGeneralArtifactById: GeneralArtifactDataSerializer;
  findGeneralComment: GeneralCommentItemsSerializer;
  findGeneralCommentById: GeneralCommentDataSerializer;
  findGeneralEvent: GeneralEventItemsSerializer;
  findGeneralEventById: GeneralEventDataSerializer;
  findGeneralWorkflow: GeneralWorkflowItemsSerializer;
  findGeneralWorkflowById: GeneralWorkflowDataSerializer;
  findIdentityProfile: IdentityProfileItemsSerializer;
  findIdentityProfileById: IdentityProfileDataSerializer;
  findIdentitySession: IdentitySessionItemsSerializer;
  findIdentitySessionById: IdentitySessionDataSerializer;
  findIdentityUser: IdentityUserItemsSerializer;
  findIdentityUserById: IdentityUserDataSerializer;
  findLogisticCargo: LogisticCargoItemsSerializer;
  findLogisticCargoById: LogisticCargoDataSerializer;
  findLogisticDriver: LogisticDriverItemsSerializer;
  findLogisticDriverById: LogisticDriverDataSerializer;
  findLogisticLocation: LogisticLocationItemsSerializer;
  findLogisticLocationById: LogisticLocationDataSerializer;
  findLogisticTravel: LogisticTravelItemsSerializer;
  findLogisticTravelById: LogisticTravelDataSerializer;
  findLogisticVehicle: LogisticVehicleItemsSerializer;
  findLogisticVehicleById: LogisticVehicleDataSerializer;
  findSpecialFile: SpecialFileItemsSerializer;
  findSpecialFileById: SpecialFileDataSerializer;
  findSpecialStat: SpecialStatItemsSerializer;
  findSpecialStatById: SpecialStatDataSerializer;
  findThingDevice: LogisticDeviceItemsSerializer;
  findThingDeviceById: ThingDeviceDataSerializer;
  findThingMetric: LogisticMetricItemsSerializer;
  findThingMetricById: ThingMetricDataSerializer;
  findThingSensor: LogisticSensorItemsSerializer;
  findThingSensorById: ThingSensorDataSerializer;
  findTouchEmail: TouchEmailItemsSerializer;
  findTouchEmailById: TouchEmailDataSerializer;
  findTouchNotice: TouchNoticeItemsSerializer;
  findTouchNoticeById: TouchNoticeDataSerializer;
  findTouchPusHistory: TouchPusHistoryItemsSerializer;
  findTouchPusHistoryById: TouchPusHistoryDataSerializer;
  findTouchPush: TouchPushItemsSerializer;
  findTouchPushById: TouchPushDataSerializer;
  findTouchSms: TouchSmsItemsSerializer;
  findTouchSmsById: TouchSmsDataSerializer;
};

export type QueryCountAuthAptArgs = {
  filter: QueryFilterDto;
};

export type QueryCountAuthGrantArgs = {
  filter: QueryFilterDto;
};

export type QueryCountCareerBranchArgs = {
  filter: QueryFilterDto;
};

export type QueryCountCareerBusinessArgs = {
  filter: QueryFilterDto;
};

export type QueryCountCareerCustomerArgs = {
  filter: QueryFilterDto;
};

export type QueryCountCareerEmployeeArgs = {
  filter: QueryFilterDto;
};

export type QueryCountCareerProductArgs = {
  filter: QueryFilterDto;
};

export type QueryCountCareerServiceArgs = {
  filter: QueryFilterDto;
};

export type QueryCountCareerStockArgs = {
  filter: QueryFilterDto;
};

export type QueryCountCareerStoreArgs = {
  filter: QueryFilterDto;
};

export type QueryCountConjointAccountArgs = {
  filter: QueryFilterDto;
};

export type QueryCountConjointChannelArgs = {
  filter: QueryFilterDto;
};

export type QueryCountConjointContactArgs = {
  filter: QueryFilterDto;
};

export type QueryCountConjointMemberArgs = {
  filter: QueryFilterDto;
};

export type QueryCountConjointMessageArgs = {
  filter: QueryFilterDto;
};

export type QueryCountContentNoteArgs = {
  filter: QueryFilterDto;
};

export type QueryCountContentPostArgs = {
  filter: QueryFilterDto;
};

export type QueryCountContentTicketArgs = {
  filter: QueryFilterDto;
};

export type QueryCountContextConfigArgs = {
  filter: QueryFilterDto;
};

export type QueryCountContextSettingArgs = {
  filter: QueryFilterDto;
};

export type QueryCountDomainAppArgs = {
  filter: QueryFilterDto;
};

export type QueryCountDomainClientArgs = {
  filter: QueryFilterDto;
};

export type QueryCountEssentialSagaArgs = {
  filter: QueryFilterDto;
};

export type QueryCountEssentialSagaStageArgs = {
  filter: QueryFilterDto;
};

export type QueryCountFinancialAccountArgs = {
  filter: QueryFilterDto;
};

export type QueryCountFinancialCurrencyArgs = {
  filter: QueryFilterDto;
};

export type QueryCountFinancialInvoiceArgs = {
  filter: QueryFilterDto;
};

export type QueryCountFinancialTransactionArgs = {
  filter: QueryFilterDto;
};

export type QueryCountFinancialWalletArgs = {
  filter: QueryFilterDto;
};

export type QueryCountGeneralActivityArgs = {
  filter: QueryFilterDto;
};

export type QueryCountGeneralArtifactArgs = {
  filter: QueryFilterDto;
};

export type QueryCountGeneralCommentArgs = {
  filter: QueryFilterDto;
};

export type QueryCountGeneralEventArgs = {
  filter: QueryFilterDto;
};

export type QueryCountGeneralWorkflowArgs = {
  filter: QueryFilterDto;
};

export type QueryCountIdentityProfileArgs = {
  filter: QueryFilterDto;
};

export type QueryCountIdentitySessionArgs = {
  filter: QueryFilterDto;
};

export type QueryCountIdentityUserArgs = {
  filter: QueryFilterDto;
};

export type QueryCountLogisticCargoArgs = {
  filter: QueryFilterDto;
};

export type QueryCountLogisticDriverArgs = {
  filter: QueryFilterDto;
};

export type QueryCountLogisticLocationArgs = {
  filter: QueryFilterDto;
};

export type QueryCountLogisticTravelArgs = {
  filter: QueryFilterDto;
};

export type QueryCountLogisticVehicleArgs = {
  filter: QueryFilterDto;
};

export type QueryCountSpecialFileArgs = {
  filter: QueryFilterDto;
};

export type QueryCountSpecialStatArgs = {
  filter: QueryFilterDto;
};

export type QueryCountThingDeviceArgs = {
  filter: QueryFilterDto;
};

export type QueryCountThingMetricArgs = {
  filter: QueryFilterDto;
};

export type QueryCountThingSensorArgs = {
  filter: QueryFilterDto;
};

export type QueryCountTouchEmailArgs = {
  filter: QueryFilterDto;
};

export type QueryCountTouchNoticeArgs = {
  filter: QueryFilterDto;
};

export type QueryCountTouchPusHistoryArgs = {
  filter: QueryFilterDto;
};

export type QueryCountTouchPushArgs = {
  filter: QueryFilterDto;
};

export type QueryCountTouchSmsArgs = {
  filter: QueryFilterDto;
};

export type QueryFindAuthAptArgs = {
  filter: FilterDto;
};

export type QueryFindAuthAptByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindAuthGrantArgs = {
  filter: FilterDto;
};

export type QueryFindAuthGrantByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindCareerBranchArgs = {
  filter: FilterDto;
};

export type QueryFindCareerBranchByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindCareerBusinessArgs = {
  filter: FilterDto;
};

export type QueryFindCareerBusinessByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindCareerCustomerArgs = {
  filter: FilterDto;
};

export type QueryFindCareerCustomerByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindCareerEmployeeArgs = {
  filter: FilterDto;
};

export type QueryFindCareerEmployeeByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindCareerProductArgs = {
  filter: FilterDto;
};

export type QueryFindCareerProductByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindCareerServiceArgs = {
  filter: FilterDto;
};

export type QueryFindCareerServiceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindCareerStockArgs = {
  filter: FilterDto;
};

export type QueryFindCareerStockByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindCareerStoreArgs = {
  filter: FilterDto;
};

export type QueryFindCareerStoreByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindConjointAccountArgs = {
  filter: FilterDto;
};

export type QueryFindConjointAccountByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindConjointChannelArgs = {
  filter: FilterDto;
};

export type QueryFindConjointChannelByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindConjointContactArgs = {
  filter: FilterDto;
};

export type QueryFindConjointContactByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindConjointMemberArgs = {
  filter: FilterDto;
};

export type QueryFindConjointMemberByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindConjointMessageArgs = {
  filter: FilterDto;
};

export type QueryFindConjointMessageByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindContentNoteArgs = {
  filter: FilterDto;
};

export type QueryFindContentNoteByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindContentPostArgs = {
  filter: FilterDto;
};

export type QueryFindContentPostByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindContentTicketArgs = {
  filter: FilterDto;
};

export type QueryFindContentTicketByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindContextConfigArgs = {
  filter: FilterDto;
};

export type QueryFindContextConfigByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindContextSettingArgs = {
  filter: FilterDto;
};

export type QueryFindContextSettingByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindDomainAppArgs = {
  filter: FilterDto;
};

export type QueryFindDomainAppByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindDomainClientArgs = {
  filter: FilterDto;
};

export type QueryFindDomainClientByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindEssentialSagaArgs = {
  filter: FilterDto;
};

export type QueryFindEssentialSagaByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindEssentialSagaStageArgs = {
  filter: FilterDto;
};

export type QueryFindEssentialSagaStageByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindFinancialAccountArgs = {
  filter: FilterDto;
};

export type QueryFindFinancialAccountByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindFinancialCurrencyArgs = {
  filter: FilterDto;
};

export type QueryFindFinancialCurrencyByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindFinancialInvoiceArgs = {
  filter: FilterDto;
};

export type QueryFindFinancialInvoiceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindFinancialTransactionArgs = {
  filter: FilterDto;
};

export type QueryFindFinancialTransactionByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindFinancialWalletArgs = {
  filter: FilterDto;
};

export type QueryFindFinancialWalletByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindGeneralActivityArgs = {
  filter: FilterDto;
};

export type QueryFindGeneralActivityByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindGeneralArtifactArgs = {
  filter: FilterDto;
};

export type QueryFindGeneralArtifactByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindGeneralCommentArgs = {
  filter: FilterDto;
};

export type QueryFindGeneralCommentByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindGeneralEventArgs = {
  filter: FilterDto;
};

export type QueryFindGeneralEventByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindGeneralWorkflowArgs = {
  filter: FilterDto;
};

export type QueryFindGeneralWorkflowByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindIdentityProfileArgs = {
  filter: FilterDto;
};

export type QueryFindIdentityProfileByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindIdentitySessionArgs = {
  filter: FilterDto;
};

export type QueryFindIdentitySessionByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindIdentityUserArgs = {
  filter: FilterDto;
};

export type QueryFindIdentityUserByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindLogisticCargoArgs = {
  filter: FilterDto;
};

export type QueryFindLogisticCargoByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindLogisticDriverArgs = {
  filter: FilterDto;
};

export type QueryFindLogisticDriverByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindLogisticLocationArgs = {
  filter: FilterDto;
};

export type QueryFindLogisticLocationByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindLogisticTravelArgs = {
  filter: FilterDto;
};

export type QueryFindLogisticTravelByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindLogisticVehicleArgs = {
  filter: FilterDto;
};

export type QueryFindLogisticVehicleByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindSpecialFileArgs = {
  filter: FilterDto;
};

export type QueryFindSpecialFileByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindSpecialStatArgs = {
  filter: FilterDto;
};

export type QueryFindSpecialStatByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindThingDeviceArgs = {
  filter: FilterDto;
};

export type QueryFindThingDeviceByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindThingMetricArgs = {
  filter: FilterDto;
};

export type QueryFindThingMetricByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindThingSensorArgs = {
  filter: FilterDto;
};

export type QueryFindThingSensorByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindTouchEmailArgs = {
  filter: FilterDto;
};

export type QueryFindTouchEmailByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindTouchNoticeArgs = {
  filter: FilterDto;
};

export type QueryFindTouchNoticeByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindTouchPusHistoryArgs = {
  filter: FilterDto;
};

export type QueryFindTouchPusHistoryByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindTouchPushArgs = {
  filter: FilterDto;
};

export type QueryFindTouchPushByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFindTouchSmsArgs = {
  filter: FilterDto;
};

export type QueryFindTouchSmsByIdArgs = {
  id: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFilterDto = {
  query: Scalars['JSON']['input'];
};

export type ReactionDto = {
  count: Scalars['Float']['input'];
  emoji: Scalars['String']['input'];
};

export type ReactionSerializer = {
  __typename?: 'ReactionSerializer';
  count: Scalars['Int']['output'];
  emoji: Scalars['String']['output'];
};

export enum Resource {
  All = 'All',
  Auth = 'Auth',
  AuthApts = 'AuthApts',
  AuthGrants = 'AuthGrants',
  Career = 'Career',
  CareerBranches = 'CareerBranches',
  CareerBusinesses = 'CareerBusinesses',
  CareerCustomers = 'CareerCustomers',
  CareerEmployees = 'CareerEmployees',
  CareerProducts = 'CareerProducts',
  CareerServices = 'CareerServices',
  CareerStocks = 'CareerStocks',
  CareerStores = 'CareerStores',
  Conjoint = 'Conjoint',
  ConjointAccounts = 'ConjointAccounts',
  ConjointChannels = 'ConjointChannels',
  ConjointContacts = 'ConjointContacts',
  ConjointMembers = 'ConjointMembers',
  ConjointMessages = 'ConjointMessages',
  Content = 'Content',
  ContentNotes = 'ContentNotes',
  ContentPosts = 'ContentPosts',
  ContentTickets = 'ContentTickets',
  Context = 'Context',
  ContextConfigs = 'ContextConfigs',
  ContextSettings = 'ContextSettings',
  Domain = 'Domain',
  DomainApps = 'DomainApps',
  DomainClients = 'DomainClients',
  Essential = 'Essential',
  EssentialSagaStages = 'EssentialSagaStages',
  EssentialSagas = 'EssentialSagas',
  Financial = 'Financial',
  FinancialAccounts = 'FinancialAccounts',
  FinancialCurrencies = 'FinancialCurrencies',
  FinancialInvoices = 'FinancialInvoices',
  FinancialTransactions = 'FinancialTransactions',
  FinancialWallets = 'FinancialWallets',
  General = 'General',
  GeneralActivities = 'GeneralActivities',
  GeneralArtifacts = 'GeneralArtifacts',
  GeneralComments = 'GeneralComments',
  GeneralEvents = 'GeneralEvents',
  GeneralWorkflows = 'GeneralWorkflows',
  Identity = 'Identity',
  IdentityProfiles = 'IdentityProfiles',
  IdentitySessions = 'IdentitySessions',
  IdentityUsers = 'IdentityUsers',
  Logistic = 'Logistic',
  LogisticCargoes = 'LogisticCargoes',
  LogisticDrivers = 'LogisticDrivers',
  LogisticLocations = 'LogisticLocations',
  LogisticTravels = 'LogisticTravels',
  LogisticVehicles = 'LogisticVehicles',
  Special = 'Special',
  SpecialFiles = 'SpecialFiles',
  SpecialStats = 'SpecialStats',
  Thing = 'Thing',
  ThingDevices = 'ThingDevices',
  ThingMetrics = 'ThingMetrics',
  ThingSensors = 'ThingSensors',
  Touch = 'Touch',
  TouchEmails = 'TouchEmails',
  TouchNotices = 'TouchNotices',
  TouchPusHistories = 'TouchPusHistories',
  TouchPushes = 'TouchPushes',
  TouchSmss = 'TouchSmss',
}

export enum ResponseType {
  Code = 'code',
  Token = 'token',
}

export type ResultSerializer = {
  __typename?: 'ResultSerializer';
  result: Scalars['String']['output'];
};

export type RoutingSerializer = {
  __typename?: 'RoutingSerializer';
  /** Raw Valhalla response (unchanged) */
  options?: Maybe<Scalars['JSON']['output']>;
  /** Which Valhalla service produced this response */
  service: ValhallaServiceType;
};

export enum Scope {
  Abort = 'Abort',
  AbortEssentialSagas = 'AbortEssentialSagas',
  AbortFinancialTransaction = 'AbortFinancialTransaction',
  Add = 'Add',
  AddConjoint = 'AddConjoint',
  AddConjointContacts = 'AddConjointContacts',
  AddConjointMembers = 'AddConjointMembers',
  AddEssentialSagas = 'AddEssentialSagas',
  Collect = 'Collect',
  CollectSpecialStats = 'CollectSpecialStats',
  Commit = 'Commit',
  CommitEssentialSagas = 'CommitEssentialSagas',
  Download = 'Download',
  DownloadSpecialFiles = 'DownloadSpecialFiles',
  Generate = 'Generate',
  GenerateConjointAccounts = 'GenerateConjointAccounts',
  Init = 'Init',
  InitFinancialTransaction = 'InitFinancialTransaction',
  Manage = 'Manage',
  ManageAuth = 'ManageAuth',
  ManageAuthApts = 'ManageAuthApts',
  ManageAuthGrants = 'ManageAuthGrants',
  ManageCareer = 'ManageCareer',
  ManageCareerBranches = 'ManageCareerBranches',
  ManageCareerBusinesses = 'ManageCareerBusinesses',
  ManageCareerCustomers = 'ManageCareerCustomers',
  ManageCareerEmployees = 'ManageCareerEmployees',
  ManageCareerProducts = 'ManageCareerProducts',
  ManageCareerServices = 'ManageCareerServices',
  ManageCareerStocks = 'ManageCareerStocks',
  ManageCareerStores = 'ManageCareerStores',
  ManageConjoint = 'ManageConjoint',
  ManageConjointAccounts = 'ManageConjointAccounts',
  ManageConjointChannels = 'ManageConjointChannels',
  ManageConjointContacts = 'ManageConjointContacts',
  ManageConjointMembers = 'ManageConjointMembers',
  ManageConjointMessages = 'ManageConjointMessages',
  ManageContent = 'ManageContent',
  ManageContentNotes = 'ManageContentNotes',
  ManageContentPosts = 'ManageContentPosts',
  ManageContentTickets = 'ManageContentTickets',
  ManageContext = 'ManageContext',
  ManageContextConfigs = 'ManageContextConfigs',
  ManageContextSettings = 'ManageContextSettings',
  ManageDomain = 'ManageDomain',
  ManageDomainApps = 'ManageDomainApps',
  ManageDomainClients = 'ManageDomainClients',
  ManageEssential = 'ManageEssential',
  ManageEssentialSagaStages = 'ManageEssentialSagaStages',
  ManageEssentialSagas = 'ManageEssentialSagas',
  ManageFinancial = 'ManageFinancial',
  ManageFinancialAccounts = 'ManageFinancialAccounts',
  ManageFinancialCurrencies = 'ManageFinancialCurrencies',
  ManageFinancialInvoices = 'ManageFinancialInvoices',
  ManageFinancialTransactions = 'ManageFinancialTransactions',
  ManageFinancialWallets = 'ManageFinancialWallets',
  ManageGeneral = 'ManageGeneral',
  ManageGeneralActivities = 'ManageGeneralActivities',
  ManageGeneralArtifacts = 'ManageGeneralArtifacts',
  ManageGeneralComments = 'ManageGeneralComments',
  ManageGeneralEvents = 'ManageGeneralEvents',
  ManageGeneralWorkflows = 'ManageGeneralWorkflows',
  ManageIdentity = 'ManageIdentity',
  ManageIdentityProfiles = 'ManageIdentityProfiles',
  ManageIdentitySessions = 'ManageIdentitySessions',
  ManageIdentityUsers = 'ManageIdentityUsers',
  ManageLogistic = 'ManageLogistic',
  ManageLogisticCargoes = 'ManageLogisticCargoes',
  ManageLogisticDrivers = 'ManageLogisticDrivers',
  ManageLogisticLocations = 'ManageLogisticLocations',
  ManageLogisticTravels = 'ManageLogisticTravels',
  ManageLogisticVehicles = 'ManageLogisticVehicles',
  ManageSpecial = 'ManageSpecial',
  ManageSpecialFiles = 'ManageSpecialFiles',
  ManageSpecialStats = 'ManageSpecialStats',
  ManageThing = 'ManageThing',
  ManageThingDevices = 'ManageThingDevices',
  ManageThingMetrics = 'ManageThingMetrics',
  ManageThingSensors = 'ManageThingSensors',
  ManageTouch = 'ManageTouch',
  ManageTouchEmails = 'ManageTouchEmails',
  ManageTouchNotices = 'ManageTouchNotices',
  ManageTouchPusHistories = 'ManageTouchPusHistories',
  ManageTouchPushes = 'ManageTouchPushes',
  ManageTouchSmss = 'ManageTouchSmss',
  None = 'None',
  Payment = 'Payment',
  PaymentFinancialInvoices = 'PaymentFinancialInvoices',
  Publish = 'Publish',
  Read = 'Read',
  ReadAuth = 'ReadAuth',
  ReadAuthApts = 'ReadAuthApts',
  ReadAuthGrants = 'ReadAuthGrants',
  ReadCareer = 'ReadCareer',
  ReadCareerBranches = 'ReadCareerBranches',
  ReadCareerBusinesses = 'ReadCareerBusinesses',
  ReadCareerCustomers = 'ReadCareerCustomers',
  ReadCareerEmployees = 'ReadCareerEmployees',
  ReadCareerProducts = 'ReadCareerProducts',
  ReadCareerServices = 'ReadCareerServices',
  ReadCareerStocks = 'ReadCareerStocks',
  ReadCareerStores = 'ReadCareerStores',
  ReadConjoint = 'ReadConjoint',
  ReadConjointAccounts = 'ReadConjointAccounts',
  ReadConjointChannels = 'ReadConjointChannels',
  ReadConjointContacts = 'ReadConjointContacts',
  ReadConjointMembers = 'ReadConjointMembers',
  ReadConjointMessages = 'ReadConjointMessages',
  ReadContent = 'ReadContent',
  ReadContentNotes = 'ReadContentNotes',
  ReadContentPosts = 'ReadContentPosts',
  ReadContentTickets = 'ReadContentTickets',
  ReadContext = 'ReadContext',
  ReadContextConfigs = 'ReadContextConfigs',
  ReadContextSettings = 'ReadContextSettings',
  ReadDomain = 'ReadDomain',
  ReadDomainApps = 'ReadDomainApps',
  ReadDomainClients = 'ReadDomainClients',
  ReadEssential = 'ReadEssential',
  ReadEssentialSagaStages = 'ReadEssentialSagaStages',
  ReadEssentialSagas = 'ReadEssentialSagas',
  ReadFinancial = 'ReadFinancial',
  ReadFinancialAccounts = 'ReadFinancialAccounts',
  ReadFinancialCurrencies = 'ReadFinancialCurrencies',
  ReadFinancialInvoices = 'ReadFinancialInvoices',
  ReadFinancialTransactions = 'ReadFinancialTransactions',
  ReadFinancialWallets = 'ReadFinancialWallets',
  ReadGeneral = 'ReadGeneral',
  ReadGeneralActivities = 'ReadGeneralActivities',
  ReadGeneralArtifacts = 'ReadGeneralArtifacts',
  ReadGeneralComments = 'ReadGeneralComments',
  ReadGeneralEvents = 'ReadGeneralEvents',
  ReadGeneralWorkflows = 'ReadGeneralWorkflows',
  ReadIdentity = 'ReadIdentity',
  ReadIdentityProfiles = 'ReadIdentityProfiles',
  ReadIdentitySessions = 'ReadIdentitySessions',
  ReadIdentityUsers = 'ReadIdentityUsers',
  ReadLogistic = 'ReadLogistic',
  ReadLogisticCargoes = 'ReadLogisticCargoes',
  ReadLogisticDrivers = 'ReadLogisticDrivers',
  ReadLogisticLocations = 'ReadLogisticLocations',
  ReadLogisticTravels = 'ReadLogisticTravels',
  ReadLogisticVehicles = 'ReadLogisticVehicles',
  ReadSpecial = 'ReadSpecial',
  ReadSpecialFiles = 'ReadSpecialFiles',
  ReadSpecialStats = 'ReadSpecialStats',
  ReadThing = 'ReadThing',
  ReadThingDevices = 'ReadThingDevices',
  ReadThingMetrics = 'ReadThingMetrics',
  ReadThingSensors = 'ReadThingSensors',
  ReadTouch = 'ReadTouch',
  ReadTouchEmails = 'ReadTouchEmails',
  ReadTouchNotices = 'ReadTouchNotices',
  ReadTouchPusHistories = 'ReadTouchPusHistories',
  ReadTouchPushes = 'ReadTouchPushes',
  ReadTouchSmss = 'ReadTouchSmss',
  Resolve = 'Resolve',
  ResolveLogistic = 'ResolveLogistic',
  ResolveLogisticLocations = 'ResolveLogisticLocations',
  ResolveLogisticTravels = 'ResolveLogisticTravels',
  Search = 'Search',
  SearchCareerProducts = 'SearchCareerProducts',
  SearchConjointMessages = 'SearchConjointMessages',
  SearchContentPosts = 'SearchContentPosts',
  Send = 'Send',
  SendConjoint = 'SendConjoint',
  SendConjointMessages = 'SendConjointMessages',
  SendTouch = 'SendTouch',
  SendTouchEmails = 'SendTouchEmails',
  SendTouchPushes = 'SendTouchPushes',
  SendTouchSmss = 'SendTouchSmss',
  Share = 'Share',
  ShareSpecial = 'ShareSpecial',
  ShareSpecialFiles = 'ShareSpecialFiles',
  Start = 'Start',
  StartEssentialSagas = 'StartEssentialSagas',
  Subscribe = 'Subscribe',
  Upload = 'Upload',
  UploadSpecialFiles = 'UploadSpecialFiles',
  Verify = 'Verify',
  VerifyFinancialTransaction = 'VerifyFinancialTransaction',
  Whole = 'Whole',
  Write = 'Write',
  WriteAuth = 'WriteAuth',
  WriteAuthApts = 'WriteAuthApts',
  WriteAuthGrants = 'WriteAuthGrants',
  WriteCareer = 'WriteCareer',
  WriteCareerBranches = 'WriteCareerBranches',
  WriteCareerBusinesses = 'WriteCareerBusinesses',
  WriteCareerCustomers = 'WriteCareerCustomers',
  WriteCareerEmployees = 'WriteCareerEmployees',
  WriteCareerProducts = 'WriteCareerProducts',
  WriteCareerServices = 'WriteCareerServices',
  WriteCareerStocks = 'WriteCareerStocks',
  WriteCareerStores = 'WriteCareerStores',
  WriteConjoint = 'WriteConjoint',
  WriteConjointAccounts = 'WriteConjointAccounts',
  WriteConjointChannels = 'WriteConjointChannels',
  WriteConjointContacts = 'WriteConjointContacts',
  WriteConjointMembers = 'WriteConjointMembers',
  WriteConjointMessages = 'WriteConjointMessages',
  WriteContent = 'WriteContent',
  WriteContentNotes = 'WriteContentNotes',
  WriteContentPosts = 'WriteContentPosts',
  WriteContentTickets = 'WriteContentTickets',
  WriteContext = 'WriteContext',
  WriteContextConfigs = 'WriteContextConfigs',
  WriteContextSettings = 'WriteContextSettings',
  WriteDomain = 'WriteDomain',
  WriteDomainApps = 'WriteDomainApps',
  WriteDomainClients = 'WriteDomainClients',
  WriteEssential = 'WriteEssential',
  WriteEssentialSagaStages = 'WriteEssentialSagaStages',
  WriteEssentialSagas = 'WriteEssentialSagas',
  WriteFinancial = 'WriteFinancial',
  WriteFinancialAccounts = 'WriteFinancialAccounts',
  WriteFinancialCurrencies = 'WriteFinancialCurrencies',
  WriteFinancialInvoices = 'WriteFinancialInvoices',
  WriteFinancialTransactions = 'WriteFinancialTransactions',
  WriteFinancialWallets = 'WriteFinancialWallets',
  WriteGeneral = 'WriteGeneral',
  WriteGeneralActivities = 'WriteGeneralActivities',
  WriteGeneralArtifacts = 'WriteGeneralArtifacts',
  WriteGeneralComments = 'WriteGeneralComments',
  WriteGeneralEvents = 'WriteGeneralEvents',
  WriteGeneralWorkflows = 'WriteGeneralWorkflows',
  WriteIdentity = 'WriteIdentity',
  WriteIdentityProfiles = 'WriteIdentityProfiles',
  WriteIdentitySessions = 'WriteIdentitySessions',
  WriteIdentityUsers = 'WriteIdentityUsers',
  WriteLogistic = 'WriteLogistic',
  WriteLogisticCargoes = 'WriteLogisticCargoes',
  WriteLogisticDrivers = 'WriteLogisticDrivers',
  WriteLogisticLocations = 'WriteLogisticLocations',
  WriteLogisticTravels = 'WriteLogisticTravels',
  WriteLogisticVehicles = 'WriteLogisticVehicles',
  WriteSpecial = 'WriteSpecial',
  WriteSpecialFiles = 'WriteSpecialFiles',
  WriteSpecialStats = 'WriteSpecialStats',
  WriteThing = 'WriteThing',
  WriteThingDevices = 'WriteThingDevices',
  WriteThingMetrics = 'WriteThingMetrics',
  WriteThingSensors = 'WriteThingSensors',
  WriteTouch = 'WriteTouch',
  WriteTouchEmails = 'WriteTouchEmails',
  WriteTouchNotices = 'WriteTouchNotices',
  WriteTouchPusHistories = 'WriteTouchPusHistories',
  WriteTouchPushes = 'WriteTouchPushes',
  WriteTouchSmss = 'WriteTouchSmss',
}

export type SearcHitSerializer = {
  __typename?: 'SearcHitSerializer';
  id: Scalars['String']['output'];
  score?: Maybe<Scalars['Float']['output']>;
  source: Scalars['JSON']['output'];
};

export type SearchSerializer = {
  __typename?: 'SearchSerializer';
  hits?: Maybe<Array<SearcHitSerializer>>;
  suggest?: Maybe<Scalars['JSON']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type SpecialFileDataSerializer = {
  __typename?: 'SpecialFileDataSerializer';
  data?: Maybe<SpecialFileSerializer>;
};

export type SpecialFileItemsSerializer = {
  __typename?: 'SpecialFileItemsSerializer';
  items: Array<Maybe<SpecialFileSerializer>>;
};

export type SpecialFileSerializer = {
  __typename?: 'SpecialFileSerializer';
  acl?: Maybe<Scalars['String']['output']>;
  bucket?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  encoding?: Maybe<Scalars['String']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  size?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<State>;
  storage_class?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SpecialStatDataSerializer = {
  __typename?: 'SpecialStatDataSerializer';
  data?: Maybe<SpecialStatSerializer>;
};

export type SpecialStatItemsSerializer = {
  __typename?: 'SpecialStatItemsSerializer';
  items: Array<Maybe<SpecialStatSerializer>>;
};

export enum SpecialStatKey {
  AuthCountCreateApts = 'AUTH_COUNT__CREATE_APTS',
  AuthCountCreateGrants = 'AUTH_COUNT__CREATE_GRANTS',
  AuthCountDeleteApts = 'AUTH_COUNT__DELETE_APTS',
  AuthCountDeleteGrants = 'AUTH_COUNT__DELETE_GRANTS',
  AuthCountUpdateApts = 'AUTH_COUNT__UPDATE_APTS',
  AuthCountUpdateGrants = 'AUTH_COUNT__UPDATE_GRANTS',
  CareerCountCreateBranches = 'CAREER_COUNT__CREATE_BRANCHES',
  CareerCountCreateBusinesses = 'CAREER_COUNT__CREATE_BUSINESSES',
  CareerCountCreateCustomers = 'CAREER_COUNT__CREATE_CUSTOMERS',
  CareerCountCreateEmployees = 'CAREER_COUNT__CREATE_EMPLOYEES',
  CareerCountCreateProducts = 'CAREER_COUNT__CREATE_PRODUCTS',
  CareerCountCreateServices = 'CAREER_COUNT__CREATE_SERVICES',
  CareerCountCreateStocks = 'CAREER_COUNT__CREATE_STOCKS',
  CareerCountCreateStores = 'CAREER_COUNT__CREATE_STORES',
  CareerCountDeleteBranches = 'CAREER_COUNT__DELETE_BRANCHES',
  CareerCountDeleteBusinesses = 'CAREER_COUNT__DELETE_BUSINESSES',
  CareerCountDeleteCustomers = 'CAREER_COUNT__DELETE_CUSTOMERS',
  CareerCountDeleteEmployees = 'CAREER_COUNT__DELETE_EMPLOYEES',
  CareerCountDeleteProducts = 'CAREER_COUNT__DELETE_PRODUCTS',
  CareerCountDeleteServices = 'CAREER_COUNT__DELETE_SERVICES',
  CareerCountDeleteStocks = 'CAREER_COUNT__DELETE_STOCKS',
  CareerCountDeleteStores = 'CAREER_COUNT__DELETE_STORES',
  CareerCountUpdateBranches = 'CAREER_COUNT__UPDATE_BRANCHES',
  CareerCountUpdateBusinesses = 'CAREER_COUNT__UPDATE_BUSINESSES',
  CareerCountUpdateCustomers = 'CAREER_COUNT__UPDATE_CUSTOMERS',
  CareerCountUpdateEmployees = 'CAREER_COUNT__UPDATE_EMPLOYEES',
  CareerCountUpdateProducts = 'CAREER_COUNT__UPDATE_PRODUCTS',
  CareerCountUpdateServices = 'CAREER_COUNT__UPDATE_SERVICES',
  CareerCountUpdateStocks = 'CAREER_COUNT__UPDATE_STOCKS',
  CareerCountUpdateStores = 'CAREER_COUNT__UPDATE_STORES',
  ConjointCountCreateAccounts = 'CONJOINT_COUNT__CREATE_ACCOUNTS',
  ConjointCountCreateChannels = 'CONJOINT_COUNT__CREATE_CHANNELS',
  ConjointCountCreateContacts = 'CONJOINT_COUNT__CREATE_CONTACTS',
  ConjointCountCreateMembers = 'CONJOINT_COUNT__CREATE_MEMBERS',
  ConjointCountCreateMessages = 'CONJOINT_COUNT__CREATE_MESSAGES',
  ConjointCountDeleteAccounts = 'CONJOINT_COUNT__DELETE_ACCOUNTS',
  ConjointCountDeleteChannels = 'CONJOINT_COUNT__DELETE_CHANNELS',
  ConjointCountDeleteContacts = 'CONJOINT_COUNT__DELETE_CONTACTS',
  ConjointCountDeleteMembers = 'CONJOINT_COUNT__DELETE_MEMBERS',
  ConjointCountDeleteMessages = 'CONJOINT_COUNT__DELETE_MESSAGES',
  ConjointCountUpdateAccounts = 'CONJOINT_COUNT__UPDATE_ACCOUNTS',
  ConjointCountUpdateChannels = 'CONJOINT_COUNT__UPDATE_CHANNELS',
  ConjointCountUpdateContacts = 'CONJOINT_COUNT__UPDATE_CONTACTS',
  ConjointCountUpdateMembers = 'CONJOINT_COUNT__UPDATE_MEMBERS',
  ConjointCountUpdateMessages = 'CONJOINT_COUNT__UPDATE_MESSAGES',
  ContentCountCreateNotes = 'CONTENT_COUNT__CREATE_NOTES',
  ContentCountCreatePosts = 'CONTENT_COUNT__CREATE_POSTS',
  ContentCountCreateTickets = 'CONTENT_COUNT__CREATE_TICKETS',
  ContentCountDeleteNotes = 'CONTENT_COUNT__DELETE_NOTES',
  ContentCountDeletePosts = 'CONTENT_COUNT__DELETE_POSTS',
  ContentCountDeleteTickets = 'CONTENT_COUNT__DELETE_TICKETS',
  ContentCountUpdateNotes = 'CONTENT_COUNT__UPDATE_NOTES',
  ContentCountUpdatePosts = 'CONTENT_COUNT__UPDATE_POSTS',
  ContentCountUpdateTickets = 'CONTENT_COUNT__UPDATE_TICKETS',
  ContextCountCreateConfigs = 'CONTEXT_COUNT__CREATE_CONFIGS',
  ContextCountCreateSettings = 'CONTEXT_COUNT__CREATE_SETTINGS',
  ContextCountDeleteConfigs = 'CONTEXT_COUNT__DELETE_CONFIGS',
  ContextCountDeleteSettings = 'CONTEXT_COUNT__DELETE_SETTINGS',
  ContextCountUpdateConfigs = 'CONTEXT_COUNT__UPDATE_CONFIGS',
  ContextCountUpdateSettings = 'CONTEXT_COUNT__UPDATE_SETTINGS',
  DomainCountCreateApps = 'DOMAIN_COUNT__CREATE_APPS',
  DomainCountCreateClients = 'DOMAIN_COUNT__CREATE_CLIENTS',
  DomainCountDeleteApps = 'DOMAIN_COUNT__DELETE_APPS',
  DomainCountDeleteClients = 'DOMAIN_COUNT__DELETE_CLIENTS',
  DomainCountUpdateApps = 'DOMAIN_COUNT__UPDATE_APPS',
  DomainCountUpdateClients = 'DOMAIN_COUNT__UPDATE_CLIENTS',
  EssentialCountCreateSagas = 'ESSENTIAL_COUNT__CREATE_SAGAS',
  EssentialCountCreateSagaStages = 'ESSENTIAL_COUNT__CREATE_SAGA_STAGES',
  EssentialCountDeleteSagas = 'ESSENTIAL_COUNT__DELETE_SAGAS',
  EssentialCountDeleteSagaStages = 'ESSENTIAL_COUNT__DELETE_SAGA_STAGES',
  EssentialCountUpdateSagas = 'ESSENTIAL_COUNT__UPDATE_SAGAS',
  EssentialCountUpdateSagaStages = 'ESSENTIAL_COUNT__UPDATE_SAGA_STAGES',
  FinancialCountCreateAccounts = 'FINANCIAL_COUNT__CREATE_ACCOUNTS',
  FinancialCountCreateCurrencies = 'FINANCIAL_COUNT__CREATE_CURRENCIES',
  FinancialCountCreateInvoices = 'FINANCIAL_COUNT__CREATE_INVOICES',
  FinancialCountCreateTransactions = 'FINANCIAL_COUNT__CREATE_TRANSACTIONS',
  FinancialCountCreateWallets = 'FINANCIAL_COUNT__CREATE_WALLETS',
  FinancialCountDeleteAccounts = 'FINANCIAL_COUNT__DELETE_ACCOUNTS',
  FinancialCountDeleteCurrencies = 'FINANCIAL_COUNT__DELETE_CURRENCIES',
  FinancialCountDeleteInvoices = 'FINANCIAL_COUNT__DELETE_INVOICES',
  FinancialCountDeleteTransactions = 'FINANCIAL_COUNT__DELETE_TRANSACTIONS',
  FinancialCountDeleteWallets = 'FINANCIAL_COUNT__DELETE_WALLETS',
  FinancialCountDeposit = 'FINANCIAL_COUNT__DEPOSIT',
  FinancialCountDiscount = 'FINANCIAL_COUNT__DISCOUNT',
  FinancialCountPayment = 'FINANCIAL_COUNT__PAYMENT',
  FinancialCountProfit = 'FINANCIAL_COUNT__PROFIT',
  FinancialCountSync = 'FINANCIAL_COUNT__SYNC',
  FinancialCountTransfer = 'FINANCIAL_COUNT__TRANSFER',
  FinancialCountUpdateAccounts = 'FINANCIAL_COUNT__UPDATE_ACCOUNTS',
  FinancialCountUpdateCurrencies = 'FINANCIAL_COUNT__UPDATE_CURRENCIES',
  FinancialCountUpdateInvoices = 'FINANCIAL_COUNT__UPDATE_INVOICES',
  FinancialCountUpdateTransactions = 'FINANCIAL_COUNT__UPDATE_TRANSACTIONS',
  FinancialCountUpdateWallets = 'FINANCIAL_COUNT__UPDATE_WALLETS',
  FinancialCountWithdraw = 'FINANCIAL_COUNT__WITHDRAW',
  FinancialSumDeposit = 'FINANCIAL_SUM__DEPOSIT',
  FinancialSumDiscount = 'FINANCIAL_SUM__DISCOUNT',
  FinancialSumPayment = 'FINANCIAL_SUM__PAYMENT',
  FinancialSumProfit = 'FINANCIAL_SUM__PROFIT',
  FinancialSumSync = 'FINANCIAL_SUM__SYNC',
  FinancialSumTransfer = 'FINANCIAL_SUM__TRANSFER',
  FinancialSumWithdraw = 'FINANCIAL_SUM__WITHDRAW',
  GeneralCountCreateActivities = 'GENERAL_COUNT__CREATE_ACTIVITIES',
  GeneralCountCreateArtifacts = 'GENERAL_COUNT__CREATE_ARTIFACTS',
  GeneralCountCreateComments = 'GENERAL_COUNT__CREATE_COMMENTS',
  GeneralCountCreateEvents = 'GENERAL_COUNT__CREATE_EVENTS',
  GeneralCountCreateWorkflows = 'GENERAL_COUNT__CREATE_WORKFLOWS',
  GeneralCountDeleteActivities = 'GENERAL_COUNT__DELETE_ACTIVITIES',
  GeneralCountDeleteArtifacts = 'GENERAL_COUNT__DELETE_ARTIFACTS',
  GeneralCountDeleteComments = 'GENERAL_COUNT__DELETE_COMMENTS',
  GeneralCountDeleteEvents = 'GENERAL_COUNT__DELETE_EVENTS',
  GeneralCountDeleteWorkflows = 'GENERAL_COUNT__DELETE_WORKFLOWS',
  GeneralCountUpdateActivities = 'GENERAL_COUNT__UPDATE_ACTIVITIES',
  GeneralCountUpdateArtifacts = 'GENERAL_COUNT__UPDATE_ARTIFACTS',
  GeneralCountUpdateComments = 'GENERAL_COUNT__UPDATE_COMMENTS',
  GeneralCountUpdateEvents = 'GENERAL_COUNT__UPDATE_EVENTS',
  GeneralCountUpdateWorkflows = 'GENERAL_COUNT__UPDATE_WORKFLOWS',
  IdentityCountCreateProfiles = 'IDENTITY_COUNT__CREATE_PROFILES',
  IdentityCountCreateSessions = 'IDENTITY_COUNT__CREATE_SESSIONS',
  IdentityCountCreateUsers = 'IDENTITY_COUNT__CREATE_USERS',
  IdentityCountDeleteProfiles = 'IDENTITY_COUNT__DELETE_PROFILES',
  IdentityCountDeleteSessions = 'IDENTITY_COUNT__DELETE_SESSIONS',
  IdentityCountDeleteUsers = 'IDENTITY_COUNT__DELETE_USERS',
  IdentityCountUpdateProfiles = 'IDENTITY_COUNT__UPDATE_PROFILES',
  IdentityCountUpdateSessions = 'IDENTITY_COUNT__UPDATE_SESSIONS',
  IdentityCountUpdateUsers = 'IDENTITY_COUNT__UPDATE_USERS',
  LogisticCountCreateCargoes = 'LOGISTIC_COUNT__CREATE_CARGOES',
  LogisticCountCreateDrivers = 'LOGISTIC_COUNT__CREATE_DRIVERS',
  LogisticCountCreateLocations = 'LOGISTIC_COUNT__CREATE_LOCATIONS',
  LogisticCountCreateTravels = 'LOGISTIC_COUNT__CREATE_TRAVELS',
  LogisticCountCreateVehicles = 'LOGISTIC_COUNT__CREATE_VEHICLES',
  LogisticCountDeleteCargoes = 'LOGISTIC_COUNT__DELETE_CARGOES',
  LogisticCountDeleteDrivers = 'LOGISTIC_COUNT__DELETE_DRIVERS',
  LogisticCountDeleteLocations = 'LOGISTIC_COUNT__DELETE_LOCATIONS',
  LogisticCountDeleteTravels = 'LOGISTIC_COUNT__DELETE_TRAVELS',
  LogisticCountDeleteVehicles = 'LOGISTIC_COUNT__DELETE_VEHICLES',
  LogisticCountResolveLocations = 'LOGISTIC_COUNT__RESOLVE_LOCATIONS',
  LogisticCountResolveTravels = 'LOGISTIC_COUNT__RESOLVE_TRAVELS',
  LogisticCountUpdateCargoes = 'LOGISTIC_COUNT__UPDATE_CARGOES',
  LogisticCountUpdateDrivers = 'LOGISTIC_COUNT__UPDATE_DRIVERS',
  LogisticCountUpdateLocations = 'LOGISTIC_COUNT__UPDATE_LOCATIONS',
  LogisticCountUpdateTravels = 'LOGISTIC_COUNT__UPDATE_TRAVELS',
  LogisticCountUpdateVehicles = 'LOGISTIC_COUNT__UPDATE_VEHICLES',
  SpecialCountCreateFiles = 'SPECIAL_COUNT__CREATE_FILES',
  SpecialCountCreateStats = 'SPECIAL_COUNT__CREATE_STATS',
  SpecialCountDeleteFiles = 'SPECIAL_COUNT__DELETE_FILES',
  SpecialCountDeleteStats = 'SPECIAL_COUNT__DELETE_STATS',
  SpecialCountLinkFiles = 'SPECIAL_COUNT__LINK_FILES',
  SpecialCountUpdateFiles = 'SPECIAL_COUNT__UPDATE_FILES',
  SpecialCountUpdateStats = 'SPECIAL_COUNT__UPDATE_STATS',
  SpecialSizeDeleteFiles = 'SPECIAL_SIZE__DELETE_FILES',
  SpecialSizeUploadFiles = 'SPECIAL_SIZE__UPLOAD_FILES',
  ThingCountCreateDevices = 'THING_COUNT__CREATE_DEVICES',
  ThingCountCreateMetrics = 'THING_COUNT__CREATE_METRICS',
  ThingCountCreateSensors = 'THING_COUNT__CREATE_SENSORS',
  ThingCountDeleteDevices = 'THING_COUNT__DELETE_DEVICES',
  ThingCountDeleteMetrics = 'THING_COUNT__DELETE_METRICS',
  ThingCountDeleteSensors = 'THING_COUNT__DELETE_SENSORS',
  ThingCountUpdateDevices = 'THING_COUNT__UPDATE_DEVICES',
  ThingCountUpdateMetrics = 'THING_COUNT__UPDATE_METRICS',
  ThingCountUpdateSensors = 'THING_COUNT__UPDATE_SENSORS',
  TouchCountCreateEmails = 'TOUCH_COUNT__CREATE_EMAILS',
  TouchCountCreateNotices = 'TOUCH_COUNT__CREATE_NOTICES',
  TouchCountCreatePushes = 'TOUCH_COUNT__CREATE_PUSHES',
  TouchCountCreatePushHistories = 'TOUCH_COUNT__CREATE_PUSH_HISTORIES',
  TouchCountCreateSmss = 'TOUCH_COUNT__CREATE_SMSS',
  TouchCountDeleteEmails = 'TOUCH_COUNT__DELETE_EMAILS',
  TouchCountDeleteNotices = 'TOUCH_COUNT__DELETE_NOTICES',
  TouchCountDeletePushes = 'TOUCH_COUNT__DELETE_PUSHES',
  TouchCountDeletePushHistories = 'TOUCH_COUNT__DELETE_PUSH_HISTORIES',
  TouchCountDeleteSmss = 'TOUCH_COUNT__DELETE_SMSS',
  TouchCountSendEmails = 'TOUCH_COUNT__SEND_EMAILS',
  TouchCountSendPushes = 'TOUCH_COUNT__SEND_PUSHES',
  TouchCountSendSmss = 'TOUCH_COUNT__SEND_SMSS',
  TouchCountUpdateEmails = 'TOUCH_COUNT__UPDATE_EMAILS',
  TouchCountUpdateNotices = 'TOUCH_COUNT__UPDATE_NOTICES',
  TouchCountUpdatePushes = 'TOUCH_COUNT__UPDATE_PUSHES',
  TouchCountUpdatePushHistories = 'TOUCH_COUNT__UPDATE_PUSH_HISTORIES',
  TouchCountUpdateSmss = 'TOUCH_COUNT__UPDATE_SMSS',
}

export type SpecialStatSerializer = {
  __typename?: 'SpecialStatSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  day?: Maybe<Scalars['Float']['output']>;
  days?: Maybe<Array<Scalars['Float']['output']>>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flag?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  hours?: Maybe<Array<Scalars['Float']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  key?: Maybe<SpecialStatKey>;
  month?: Maybe<Scalars['Float']['output']>;
  months?: Maybe<Array<Scalars['Float']['output']>>;
  obj?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SpecialStatType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export enum SpecialStatType {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Yearly = 'YEARLY',
}

export enum State {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Unknown = 'UNKNOWN',
  Verified = 'VERIFIED',
}

export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type ThingDeviceDataSerializer = {
  __typename?: 'ThingDeviceDataSerializer';
  data?: Maybe<ThingDeviceSerializer>;
};

export type ThingDeviceSerializer = {
  __typename?: 'ThingDeviceSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ThingMetricDataSerializer = {
  __typename?: 'ThingMetricDataSerializer';
  data?: Maybe<ThingMetricSerializer>;
};

export type ThingMetricSerializer = {
  __typename?: 'ThingMetricSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  sensor?: Maybe<Scalars['JSON']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ThingSensorDataSerializer = {
  __typename?: 'ThingSensorDataSerializer';
  data?: Maybe<ThingSensorSerializer>;
};

export type ThingSensorSerializer = {
  __typename?: 'ThingSensorSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  device?: Maybe<Scalars['JSON']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  metric?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  state?: Maybe<State>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type TotalSerializer = {
  __typename?: 'TotalSerializer';
  total: Scalars['Int']['output'];
};

export type TouchEmailDataSerializer = {
  __typename?: 'TouchEmailDataSerializer';
  data?: Maybe<TouchEmailSerializer>;
};

export type TouchEmailItemsSerializer = {
  __typename?: 'TouchEmailItemsSerializer';
  items: Array<Maybe<TouchEmailSerializer>>;
};

export type TouchEmailSerializer = {
  __typename?: 'TouchEmailSerializer';
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  bcc?: Maybe<Array<Scalars['String']['output']>>;
  cc?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  html?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  in_reply_to?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  reply_to?: Maybe<Array<Scalars['String']['output']>>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  smtp?: Maybe<TouchEmailSmtpSerializer>;
  subject?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  text?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Array<Scalars['String']['output']>>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type TouchEmailSmtpSerializer = {
  __typename?: 'TouchEmailSmtpSerializer';
  accepted?: Maybe<Array<Scalars['String']['output']>>;
  message_id?: Maybe<Scalars['String']['output']>;
  message_size?: Maybe<Scalars['Float']['output']>;
  message_time?: Maybe<Scalars['Float']['output']>;
  rejected?: Maybe<Array<Scalars['String']['output']>>;
  response?: Maybe<Scalars['String']['output']>;
};

export type TouchNoticeActionSerializer = {
  __typename?: 'TouchNoticeActionSerializer';
  icon?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type TouchNoticeDataSerializer = {
  __typename?: 'TouchNoticeDataSerializer';
  data?: Maybe<TouchNoticeSerializer>;
};

export type TouchNoticeItemsSerializer = {
  __typename?: 'TouchNoticeItemsSerializer';
  items: Array<Maybe<TouchNoticeSerializer>>;
};

export type TouchNoticeSerializer = {
  __typename?: 'TouchNoticeSerializer';
  actions?: Maybe<Array<TouchNoticeActionSerializer>>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  category?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TouchNoticeType>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  visited?: Maybe<Scalars['Boolean']['output']>;
  visited_at?: Maybe<Scalars['Date']['output']>;
  visited_by?: Maybe<Scalars['String']['output']>;
  visited_in?: Maybe<Scalars['String']['output']>;
};

export enum TouchNoticeType {
  Alert = 'ALERT',
  Error = 'ERROR',
  Event = 'EVENT',
  Info = 'INFO',
  Message = 'MESSAGE',
  Notice = 'NOTICE',
  Success = 'SUCCESS',
  Warning = 'WARNING',
}

export enum TouchPusHistoryContentDir {
  Auto = 'auto',
  Ltr = 'ltr',
  Rtl = 'rtl',
}

export type TouchPusHistoryDataSerializer = {
  __typename?: 'TouchPusHistoryDataSerializer';
  data?: Maybe<TouchPusHistorySerializer>;
};

export type TouchPusHistoryItemsSerializer = {
  __typename?: 'TouchPusHistoryItemsSerializer';
  items: Array<Maybe<TouchPusHistorySerializer>>;
};

export type TouchPusHistorySerializer = {
  __typename?: 'TouchPusHistorySerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  content?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  status?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timeout?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['JSON']['output']>;
  topic?: Maybe<Scalars['String']['output']>;
  ttl?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  urgency?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type TouchPushDataSerializer = {
  __typename?: 'TouchPushDataSerializer';
  data?: Maybe<TouchPushSerializer>;
};

export type TouchPushItemsSerializer = {
  __typename?: 'TouchPushItemsSerializer';
  items: Array<Maybe<TouchPushSerializer>>;
};

export type TouchPushSerializer = {
  __typename?: 'TouchPushSerializer';
  blacklist?: Maybe<Array<Scalars['String']['output']>>;
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  expiration?: Maybe<Scalars['Int']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  rand?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  session?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum TouchPushUrgency {
  High = 'high',
  Low = 'low',
  Normal = 'normal',
  VeryLow = 'very_low',
}

export type TouchSmsDataSerializer = {
  __typename?: 'TouchSmsDataSerializer';
  data?: Maybe<TouchSmsSerializer>;
};

export type TouchSmsItemsSerializer = {
  __typename?: 'TouchSmsItemsSerializer';
  items: Array<Maybe<TouchSmsSerializer>>;
};

export enum TouchSmsProvider {
  Kavenegar = 'KAVENEGAR',
  Melipayamak = 'MELIPAYAMAK',
}

export type TouchSmsSerializer = {
  __typename?: 'TouchSmsSerializer';
  clients?: Maybe<Array<Scalars['JSON']['output']>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  provider?: Maybe<TouchSmsProvider>;
  rand?: Maybe<Scalars['String']['output']>;
  receptors?: Maybe<Array<Scalars['String']['output']>>;
  ref?: Maybe<Scalars['String']['output']>;
  res?: Maybe<Scalars['JSON']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['JSON']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  timestamp?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type UpdateAuthGrantDto = {
  action?: InputMaybe<Action>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Array<Scalars['String']['input']>>;
  object?: InputMaybe<Resource>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  subject?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  time?: InputMaybe<Array<UpdateAuthGrantTimeDto>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAuthGrantTimeDto = {
  cron_exp: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
};

export type UpdateCareerBranchDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  opening_date?: InputMaybe<Scalars['Date']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<CareerBranchType>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateCareerBusinessDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  co_founders?: InputMaybe<Array<Scalars['String']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  customers?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  foundation_date?: InputMaybe<Scalars['Date']['input']>;
  founder?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  investors?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  partners?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  suppliers?: InputMaybe<Array<Scalars['String']['input']>>;
  support?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<CareerBusinessType>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCareerCustomerDto = {
  addresses?: InputMaybe<Array<Scalars['String']['input']>>;
  branch?: InputMaybe<Scalars['String']['input']>;
  business: Scalars['String']['input'];
  certifications?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Array<Scalars['String']['input']>>;
  employees?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  range?: InputMaybe<CareerLocationRange>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  services?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
  stores?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: CareerCustomerType;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateCareerEmployeeDto = {
  branch?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Array<Scalars['String']['input']>>;
  fire_date?: InputMaybe<Scalars['Date']['input']>;
  grade?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  hire_date?: InputMaybe<Scalars['Date']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  range?: InputMaybe<CareerLocationRange>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  salary?: InputMaybe<Scalars['Float']['input']>;
  services?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<CareerEmployeeType>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateCareerProductDto = {
  alias?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Array<UpdateCareerProductFeatureDto>>;
  gallery?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  store?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateCareerProductFeatureDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  type: CareerProductFeatureType;
  value: Scalars['JSON']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCareerServiceDto = {
  branch?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  profit?: InputMaybe<Scalars['Float']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  range?: InputMaybe<CareerLocationRange>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<CareerServiceType>;
  unit?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateCareerStockDto = {
  branch?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  capacity?: InputMaybe<Scalars['Float']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  feature?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  inventory?: InputMaybe<Scalars['Float']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  profit?: InputMaybe<Scalars['Float']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  store?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<CareerStockType>;
  unit?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCareerStoreDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fork?: InputMaybe<CareerStoreFork>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  range?: InputMaybe<CareerLocationRange>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<CareerStoreType>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateConjointAccountDto = {
  bio?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<ConjointAccountType>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConjointChannelDto = {
  account?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  pinned_messages?: InputMaybe<Array<Scalars['String']['input']>>;
  profile?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<ConjointChannelScope>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ConjointChannelType>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConjointContactDto = {
  account?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<ConjointContactType>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConjointMemberDto = {
  account: Scalars['String']['input'];
  channel: Scalars['String']['input'];
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConjointMessageDto = {
  account?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  delivered_at: Scalars['Date']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  edited_at?: InputMaybe<Scalars['Date']['input']>;
  forwarded_from?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  hashtags?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  mentions?: InputMaybe<Array<Scalars['String']['input']>>;
  originate_from?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  reactions?: InputMaybe<Array<ReactionDto>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  reply_to?: InputMaybe<Scalars['String']['input']>;
  scheduled_at: Scalars['Date']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<ConjointMessageType>;
  version?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Float']['input']>;
  visited_at?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateContentNoteDto = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dislikes?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Float']['input']>;
  likes?: InputMaybe<Scalars['Float']['input']>;
  loves?: InputMaybe<Scalars['Float']['input']>;
  mentions?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  reactions?: InputMaybe<Array<ReactionDto>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  relation?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<ContentNoteType>;
  version?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContentPostDto = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dislikes?: InputMaybe<Scalars['Float']['input']>;
  featured_image?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  likes?: InputMaybe<Scalars['Float']['input']>;
  loves?: InputMaybe<Scalars['Float']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  publication_date?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  reactions?: InputMaybe<Array<ReactionDto>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  related_posts?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  status?: InputMaybe<ContentPostStatus>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Float']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateContentTicketDto = {
  assigned_to?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<ContentTicketPriority>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  related_tickets?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  solution?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  status?: InputMaybe<ContentTicketStatus>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateContextConfigDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  eid?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContextSettingDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<ValueType>;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDomainAppChangeLogDto = {
  changes: Array<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  deprecation_date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  semver: Scalars['String']['input'];
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDomainAppDto = {
  access_token_ttl?: InputMaybe<Scalars['Float']['input']>;
  change_logs?: InputMaybe<Array<UpdateDomainAppChangeLogDto>>;
  cid?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  grant_types?: InputMaybe<Array<GrantType>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refresh_token_ttl?: InputMaybe<Scalars['Float']['input']>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  site?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<DomainAppType>;
  url?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDomainClientDomainDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDomainClientDto = {
  access_token_ttl?: InputMaybe<Scalars['Float']['input']>;
  client_id?: InputMaybe<Scalars['String']['input']>;
  client_secret?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  coworkers?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  domains?: InputMaybe<Array<UpdateDomainClientDomainDto>>;
  expiration_date?: InputMaybe<Scalars['Date']['input']>;
  grant_types?: InputMaybe<Array<GrantType>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  plan?: InputMaybe<DomainClientPlan>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refresh_token_ttl?: InputMaybe<Scalars['Float']['input']>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
  services?: InputMaybe<Array<UpdateDomainClientServiceDto>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  site?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  url?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  whitelist?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateDomainClientServiceDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  config: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider: DomainClientServiceProvider;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: DomainClientServiceType;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEssentialSagaDto = {
  aborted_at?: InputMaybe<Scalars['Date']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  committed_at?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  job?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  pruned_at?: InputMaybe<Scalars['Date']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  session?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<EssentialSagaState>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  ttl?: InputMaybe<Scalars['Float']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEssentialSagaStageDto = {
  action?: InputMaybe<EssentialSagaStageAction>;
  bucket?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  req?: InputMaybe<UpdateEssentialSagaStageReqDto>;
  res?: InputMaybe<Scalars['JSON']['input']>;
  saga?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEssentialSagaStageReqDto = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  filter?: InputMaybe<FilterDto>;
  items?: InputMaybe<Array<Scalars['JSON']['input']>>;
  query?: InputMaybe<Scalars['JSON']['input']>;
  update?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateFinancialAccountDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  ownership?: InputMaybe<FinancialAccountOwnership>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<FinancialAccountType>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFinancialCurrencyDto = {
  category?: InputMaybe<FinancialCurrencyCategory>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['String']['input']>;
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  explore?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  lib?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  nodes?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Float']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  subunits?: InputMaybe<Array<UpdateFinancialCurrencyUnitDto>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FinancialCurrencyType>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFinancialCurrencyUnitDto = {
  name: Scalars['String']['input'];
  precision?: InputMaybe<Scalars['Float']['input']>;
  rate: Scalars['Float']['input'];
  symbol?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFinancialInvoiceDto = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  closed_at?: InputMaybe<Scalars['Date']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  expires_at?: InputMaybe<Scalars['Date']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<UpdateFinancialInvoiceItemDto>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  paid?: InputMaybe<Scalars['Float']['input']>;
  payees?: InputMaybe<Array<UpdateFinancialPayDto>>;
  payers?: InputMaybe<Array<UpdateFinancialPayDto>>;
  profit?: InputMaybe<Scalars['Float']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  replication?: InputMaybe<Scalars['Float']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  subscription?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<FinancialInvoiceType>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFinancialInvoiceItemDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  measurement?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  profit?: InputMaybe<Scalars['Float']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFinancialPayDto = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fraction?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: FinancialPayType;
  version?: InputMaybe<Scalars['String']['input']>;
  wallet: Scalars['String']['input'];
};

export type UpdateFinancialTransactionDto = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  canceled_at?: InputMaybe<Scalars['Date']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  failed_at?: InputMaybe<Scalars['Date']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  invoice?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  payees?: InputMaybe<Array<UpdateFinancialPayDto>>;
  payers?: InputMaybe<Array<UpdateFinancialPayDto>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  reason?: InputMaybe<FinancialTransactionReason>;
  ref?: InputMaybe<Scalars['String']['input']>;
  saga?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<FinancialTransactionState>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<FinancialTransactionType>;
  verified_at?: InputMaybe<Scalars['Date']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFinancialWalletDto = {
  account?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  blocked?: InputMaybe<Scalars['Float']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  external?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  internal?: InputMaybe<Scalars['Float']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  strict?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGeneralActivityDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  source?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<State>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<GeneralActivityType>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGeneralArtifactDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<ValueType>;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGeneralCommentDto = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dislikes?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Float']['input']>;
  likes?: InputMaybe<Scalars['Float']['input']>;
  loves?: InputMaybe<Scalars['Float']['input']>;
  mentions?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  reactions?: InputMaybe<Array<ReactionDto>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<ContentCommentStatus>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Float']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateGeneralEventDto = {
  attendees?: InputMaybe<Array<Scalars['String']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  color?: InputMaybe<Scalars['String']['input']>;
  correlation?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  e_date?: InputMaybe<Scalars['Date']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  organizers?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  s_date?: InputMaybe<Scalars['Date']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGeneralWorkflowDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<GeneralWorkflowStatus>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens?: InputMaybe<Array<UpdateGeneralWorkflowTokenDto>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGeneralWorkflowStateDto = {
  name?: InputMaybe<Scalars['String']['input']>;
  ref: Scalars['String']['input'];
  status: GeneralWorkflowStatus;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateGeneralWorkflowTokenDto = {
  history: Array<UpdateGeneralWorkflowStateDto>;
  id: Scalars['String']['input'];
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateIdentityProfileDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['Date']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<Scalars['String']['input']>>;
  gender?: InputMaybe<Gender>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  national_code?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<IdentityProfileType>;
  verified_at?: InputMaybe<Scalars['Date']['input']>;
  verified_by?: InputMaybe<Scalars['String']['input']>;
  verified_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateIdentitySessionDto = {
  agent?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateIdentityUserDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
  subjects?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tz?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLogisticCargoDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fragile?: InputMaybe<Scalars['Boolean']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  height?: InputMaybe<Scalars['Float']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  perishable?: InputMaybe<Scalars['Boolean']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  travels?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateLogisticDriverDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiration_date?: InputMaybe<Scalars['Date']['input']>;
  gender?: InputMaybe<Gender>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  license?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<LogisticDriverType>;
  verified_at?: InputMaybe<Scalars['Date']['input']>;
  verified_by?: InputMaybe<Scalars['String']['input']>;
  verified_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLogisticLocationDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  geometry?: InputMaybe<UpdateLogisticLocationGeometryDto>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<Scalars['JSON']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLogisticLocationGeometryDto = {
  bbox?: InputMaybe<Scalars['JSON']['input']>;
  coordinates: Scalars['JSON']['input'];
  type: Scalars['String']['input'];
};

export type UpdateLogisticTravelDto = {
  cargoes?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  drivers?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<Scalars['String']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  vehicles?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLogisticVehicleDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  drivers?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  plates?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<LogisticVehicleType>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSpecialFileDto = {
  acl?: InputMaybe<Scalars['String']['input']>;
  bucket?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  encoding?: InputMaybe<Scalars['String']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  mimetype?: InputMaybe<Scalars['String']['input']>;
  original?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  size?: InputMaybe<Scalars['Float']['input']>;
  state?: InputMaybe<State>;
  storage_class?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSpecialStatDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  day?: InputMaybe<Scalars['Float']['input']>;
  days?: InputMaybe<Array<Scalars['Float']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  hours?: InputMaybe<Array<Scalars['Float']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Float']['input']>;
  months?: InputMaybe<Array<Scalars['Float']['input']>>;
  obj?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<SpecialStatType>;
  version?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateThingDeviceDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateThingMetricDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  sensor?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateThingSensorDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<State>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTouchEmailDto = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  bcc?: InputMaybe<Array<Scalars['String']['input']>>;
  cc?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  html?: InputMaybe<Scalars['String']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  in_reply_to?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  reply_to?: InputMaybe<Array<Scalars['String']['input']>>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  smtp?: InputMaybe<UpdateTouchEmailSmtpDto>;
  subject?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTouchEmailSmtpDto = {
  accepted: Array<Scalars['String']['input']>;
  message_id: Scalars['String']['input'];
  message_size: Scalars['Float']['input'];
  message_time: Scalars['Float']['input'];
  rejected: Array<Scalars['String']['input']>;
  response: Scalars['String']['input'];
};

export type UpdateTouchNoticeActionDto = {
  icon?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTouchNoticeDto = {
  actions?: InputMaybe<Array<UpdateTouchNoticeActionDto>>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TouchNoticeType>;
  version?: InputMaybe<Scalars['String']['input']>;
  visited?: InputMaybe<Scalars['Boolean']['input']>;
  visited_at?: InputMaybe<Scalars['Date']['input']>;
  visited_by?: InputMaybe<Scalars['String']['input']>;
  visited_in?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTouchPusHistoryContentDto = {
  badge?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  dir?: InputMaybe<TouchPusHistoryContentDir>;
  icon?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  require_interaction?: InputMaybe<Scalars['Boolean']['input']>;
  silent?: InputMaybe<Scalars['Boolean']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateTouchPusHistoryDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<UpdateTouchPusHistoryContentDto>;
  description?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  timeout?: InputMaybe<Scalars['Float']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  ttl?: InputMaybe<Scalars['Float']['input']>;
  urgency?: InputMaybe<TouchPushUrgency>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTouchPushDto = {
  blacklist?: InputMaybe<Array<Scalars['String']['input']>>;
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  endpoint?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Float']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  keys?: InputMaybe<UpdateTouchPushKeysDto>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  session?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTouchPushKeysDto = {
  auth: Scalars['String']['input'];
  p256dh: Scalars['String']['input'];
};

export type UpdateTouchSmsDto = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  identity?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<TouchSmsProvider>;
  receptors?: InputMaybe<Array<Scalars['String']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  res?: InputMaybe<Scalars['JSON']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum ValhallaServiceType {
  Isochrone = 'ISOCHRONE',
  Matrix = 'MATRIX',
  OptimizedRoute = 'OPTIMIZED_ROUTE',
  Route = 'ROUTE',
}

export enum ValueType {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Null = 'NULL',
  Number = 'NUMBER',
  Object = 'OBJECT',
  String = 'STRING',
}

export type FindConjointAccountByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type FindConjointAccountByIdQuery = {
  __typename?: 'Query';
  account: {
    __typename?: 'ConjointAccountDataSerializer';
    data?: { __typename?: 'ConjointAccountSerializer'; id?: string | null } | null;
  };
};

export type FetchAccountsQueryVariables = Exact<{
  findFilter: FilterDto;
}>;

export type FetchAccountsQuery = {
  __typename?: 'Query';
  accounts: {
    __typename?: 'ConjointAccountItemsSerializer';
    items: Array<{ __typename?: 'ConjointAccountSerializer'; id?: string | null } | null>;
  };
};

export type FetchActivitiesQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchActivitiesQuery = {
  __typename?: 'Query';
  activities: {
    __typename?: 'GeneralActivityItemsSerializer';
    items: Array<{
      __typename?: 'GeneralActivitySerializer';
      id?: string | null;
      type?: GeneralActivityType | null;
      state?: State | null;
      message?: string | null;
      created_at?: any | null;
    } | null>;
  };
};

export type FindCareerBranchByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type FindCareerBranchByIdQuery = {
  __typename?: 'Query';
  branch: {
    __typename?: 'CareerBranchDataSerializer';
    data?: {
      __typename?: 'CareerBranchSerializer';
      id?: string | null;
      name?: string | null;
      code?: string | null;
      type?: CareerBranchType | null;
      phone?: string | null;
      props?: any | null;
      address?: string | null;
      location?: any | null;
      opening_date?: any | null;
    } | null;
  };
};

export type FetchBranchesQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchBranchesQuery = {
  __typename?: 'Query';
  total: { __typename?: 'TotalSerializer'; total: number };
  branches: {
    __typename?: 'CareerBranchItemsSerializer';
    items: Array<{
      __typename?: 'CareerBranchSerializer';
      id?: string | null;
      name?: string | null;
      type?: CareerBranchType | null;
      code?: string | null;
      state?: State | null;
      address?: string | null;
      location?: any | null;
      deleted_at?: any | null;
      restored_at?: any | null;
      opening_date?: any | null;
    } | null>;
  };
};

export type FindCareerBusinessByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type FindCareerBusinessByIdQuery = {
  __typename?: 'Query';
  business: {
    __typename?: 'CareerBusinessDataSerializer';
    data?: {
      __typename?: 'CareerBusinessSerializer';
      id?: string | null;
      logo?: string | null;
      name?: string | null;
      code?: string | null;
      type?: CareerBusinessType | null;
      cover?: string | null;
      alias?: string | null;
      props?: any | null;
      slogan?: string | null;
      website?: string | null;
      support?: string | null;
      address?: string | null;
      location?: any | null;
      foundation_date?: any | null;
    } | null;
  };
};

export type FetchBusinessesQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchBusinessesQuery = {
  __typename?: 'Query';
  count: { __typename?: 'TotalSerializer'; total: number };
  businesses: {
    __typename?: 'CareerBusinessItemsSerializer';
    items: Array<{
      __typename?: 'CareerBusinessSerializer';
      id?: string | null;
      name?: string | null;
      logo?: string | null;
      type?: CareerBusinessType | null;
      cover?: string | null;
      alias?: string | null;
      state?: State | null;
      slogan?: string | null;
      location?: any | null;
      deleted_at?: any | null;
      restored_at?: any | null;
      foundation_date?: any | null;
    } | null>;
  };
};

export type FetchChangelogByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type FetchChangelogByIdQuery = {
  __typename?: 'Query';
  changelog: {
    __typename?: 'DomainAppDataSerializer';
    data?: {
      __typename?: 'DomainAppSerializer';
      change_logs?: Array<{
        __typename?: 'DomainAppChangeLogSerializer';
        semver?: string | null;
        changes?: Array<string> | null;
        created_at?: any | null;
      }> | null;
    } | null;
  };
};

export type FetchCollaborationArtifactsQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchCollaborationArtifactsQuery = {
  __typename?: 'Query';
  count: { __typename?: 'TotalSerializer'; total: number };
  collaborations: {
    __typename?: 'GeneralArtifactItemsSerializer';
    items: Array<{
      __typename?: 'GeneralArtifactSerializer';
      id?: string | null;
      key?: string | null;
      type?: ValueType | null;
      value?: any | null;
      props?: any | null;
      created_at?: any | null;
      updated_at?: any | null;
    } | null>;
  };
};

export type FetchProfileBusinessByIdQueryVariables = Exact<{
  profileId: Scalars['String']['input'];
  businessId: Scalars['String']['input'];
}>;

export type FetchProfileBusinessByIdQuery = {
  __typename?: 'Query';
  profile: {
    __typename?: 'IdentityProfileDataSerializer';
    data?: {
      __typename?: 'IdentityProfileSerializer';
      id?: string | null;
      first_name?: string | null;
      last_name?: string | null;
    } | null;
  };
  business: {
    __typename?: 'CareerBusinessDataSerializer';
    data?: { __typename?: 'CareerBusinessSerializer'; id?: string | null; name?: string | null } | null;
  };
};

export type FindCareerEmployeeByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type FindCareerEmployeeByIdQuery = {
  __typename?: 'Query';
  employee: {
    __typename?: 'CareerEmployeeDataSerializer';
    data?: {
      __typename?: 'CareerEmployeeSerializer';
      id?: string | null;
      type?: CareerEmployeeType | null;
      props?: any | null;
      range?: CareerLocationRange | null;
      salary?: number | null;
      skills?: Array<string> | null;
      profile?: any | null;
      currency?: any | null;
      business?: any | null;
      location?: any | null;
      job_title?: string | null;
      hire_date?: any | null;
    } | null;
  };
};

export type FetchEmployeesQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchEmployeesQuery = {
  __typename?: 'Query';
  total: { __typename?: 'TotalSerializer'; total: number };
  employees: {
    __typename?: 'CareerEmployeeItemsSerializer';
    items: Array<{
      __typename?: 'CareerEmployeeSerializer';
      id?: string | null;
      state: State;
      branch?: any | null;
      salary?: number | null;
      status: Status;
      profile?: any | null;
      business?: any | null;
      currency?: any | null;
    } | null>;
  };
};

export type FetchFilesQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchFilesQuery = {
  __typename?: 'Query';
  total: { __typename?: 'TotalSerializer'; total: number };
  files: {
    __typename?: 'SpecialFileItemsSerializer';
    items: Array<{
      __typename?: 'SpecialFileSerializer';
      id?: string | null;
      size?: number | null;
      title?: string | null;
      original?: string | null;
      mimetype?: string | null;
      timestamp?: string | null;
    } | null>;
  };
};

export type FetchInvoicesQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchInvoicesQuery = {
  __typename?: 'Query';
  total: { __typename?: 'TotalSerializer'; total: number };
  invoices: {
    __typename?: 'FinancialInvoiceItemsSerializer';
    items: Array<{
      __typename?: 'FinancialInvoiceSerializer';
      id?: string | null;
      rand?: string | null;
      paid?: number | null;
      props?: any | null;
      state?: State | null;
      amount?: number | null;
      currency?: any | null;
      created_at?: any | null;
      items?: Array<{
        __typename?: 'FinancialInvoiceItemSerializer';
        price?: number | null;
        title?: string | null;
        quantity?: number | null;
        discount?: number | null;
      }> | null;
    } | null>;
  };
};

export type FetchLocationsQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchLocationsQuery = {
  __typename?: 'Query';
  total: { __typename?: 'TotalSerializer'; total: number };
  locations: {
    __typename?: 'LogisticLocationItemsSerializer';
    items: Array<{
      __typename?: 'LogisticLocationSerializer';
      id?: string | null;
      title?: string | null;
      tags?: Array<string> | null;
      props?: any | null;
      properties?: any | null;
      description?: string | null;
      geometry?: {
        __typename?: 'LogisticLocationGeometrySerializer';
        type?: LogisticLocationGeometryType | null;
        coordinates?: any | null;
      } | null;
    } | null>;
  };
};

export type FetchNoticesQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchNoticesQuery = {
  __typename?: 'Query';
  total: { __typename?: 'TotalSerializer'; total: number };
  notices: {
    __typename?: 'TouchNoticeItemsSerializer';
    items: Array<{
      __typename?: 'TouchNoticeSerializer';
      id?: string | null;
      type?: TouchNoticeType | null;
      title?: string | null;
      content?: string | null;
      subtitle?: string | null;
      visited?: boolean | null;
      thumbnail?: string | null;
      created_at?: any | null;
    } | null>;
  };
};

export type FetchSchemasQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchSchemasQuery = {
  __typename?: 'Query';
  schemas: {
    __typename?: 'CareerBranchItemsSerializer';
    items: Array<{ __typename?: 'CareerBranchSerializer'; id?: string | null } | null>;
  };
};

export type FindCareerServiceByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type FindCareerServiceByIdQuery = {
  __typename?: 'Query';
  service: {
    __typename?: 'CareerServiceDataSerializer';
    data?: {
      __typename?: 'CareerServiceSerializer';
      id?: string | null;
      name?: string | null;
      type?: CareerServiceType | null;
      unit?: string | null;
      range?: CareerLocationRange | null;
      price?: number | null;
      branch?: any | null;
      profit?: number | null;
      status?: Status | null;
      discount?: number | null;
      currency?: string | null;
      business?: any | null;
    } | null;
  };
};

export type FetchServicesQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchServicesQuery = {
  __typename?: 'Query';
  total: { __typename?: 'TotalSerializer'; total: number };
  services: {
    __typename?: 'CareerServiceItemsSerializer';
    items: Array<{
      __typename?: 'CareerServiceSerializer';
      id?: string | null;
      name?: string | null;
      state?: State | null;
      price?: number | null;
      range?: CareerLocationRange | null;
      status?: Status | null;
      profit?: number | null;
      branch?: any | null;
      business?: any | null;
      currency?: string | null;
      discount?: number | null;
      deleted_at?: any | null;
      restored_at?: any | null;
    } | null>;
  };
};

export type FetchEventShiftsQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchEventShiftsQuery = {
  __typename?: 'Query';
  total: { __typename?: 'TotalSerializer'; total: number };
  shifts: {
    __typename?: 'GeneralEventItemsSerializer';
    items: Array<{
      __typename?: 'GeneralEventSerializer';
      id?: string | null;
      title: string;
      s_date: any;
      e_date: any;
      organizers?: Array<any> | null;
      correlation?: string | null;
    } | null>;
  };
};

export type FetchTransactionsQueryVariables = Exact<{
  countFilter: QueryFilterDto;
  findFilter: FilterDto;
}>;

export type FetchTransactionsQuery = {
  __typename?: 'Query';
  total: { __typename?: 'TotalSerializer'; total: number };
  transactions: {
    __typename?: 'FinancialTransactionItemsSerializer';
    items: Array<{
      __typename?: 'FinancialTransactionSerializer';
      id?: string | null;
      type?: FinancialTransactionType | null;
      state?: FinancialTransactionState | null;
      amount?: number | null;
      reason?: FinancialTransactionReason | null;
      description?: string | null;
      created_at?: any | null;
    } | null>;
  };
};

export type FetchWorkflowsQueryVariables = Exact<{
  findFilter: FilterDto;
}>;

export type FetchWorkflowsQuery = {
  __typename?: 'Query';
  workflows: {
    __typename?: 'GeneralWorkflowItemsSerializer';
    items: Array<{
      __typename?: 'GeneralWorkflowSerializer';
      id?: string | null;
      tokens?: Array<{
        __typename?: 'GeneralWorkflowTokenSerializer';
        history?: Array<{
          __typename?: 'GeneralWorkflowStateSerializer';
          name?: string | null;
          status?: GeneralWorkflowStatus | null;
        }> | null;
      }> | null;
    } | null>;
  };
};

export const FindConjointAccountByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindConjointAccountById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'account' },
            name: { kind: 'Name', value: 'findConjointAccountById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindConjointAccountByIdQuery, FindConjointAccountByIdQueryVariables>;
export const FetchAccountsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchAccounts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'accounts' },
            name: { kind: 'Name', value: 'findConjointAccount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchAccountsQuery, FetchAccountsQueryVariables>;
export const FetchActivitiesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchActivities' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'activities' },
            name: { kind: 'Name', value: 'findGeneralActivity' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchActivitiesQuery, FetchActivitiesQueryVariables>;
export const FindCareerBranchByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindCareerBranchById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'branch' },
            name: { kind: 'Name', value: 'findCareerBranchById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'props' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'opening_date' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindCareerBranchByIdQuery, FindCareerBranchByIdQueryVariables>;
export const FetchBranchesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchBranches' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'countCareerBranch' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'branches' },
            name: { kind: 'Name', value: 'findCareerBranch' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'deleted_at' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'restored_at' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'opening_date' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchBranchesQuery, FetchBranchesQueryVariables>;
export const FindCareerBusinessByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindCareerBusinessById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'business' },
            name: { kind: 'Name', value: 'findCareerBusinessById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'logo' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'alias' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'props' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slogan' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'website' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'support' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'foundation_date' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindCareerBusinessByIdQuery, FindCareerBusinessByIdQueryVariables>;
export const FetchBusinessesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchBusinesses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'count' },
            name: { kind: 'Name', value: 'countCareerBusiness' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'businesses' },
            name: { kind: 'Name', value: 'findCareerBusiness' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'logo' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'alias' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slogan' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'deleted_at' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'restored_at' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'foundation_date' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchBusinessesQuery, FetchBusinessesQueryVariables>;
export const FetchChangelogByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchChangelogById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'changelog' },
            name: { kind: 'Name', value: 'findDomainAppById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'change_logs' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'semver' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'changes' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchChangelogByIdQuery, FetchChangelogByIdQueryVariables>;
export const FetchCollaborationArtifactsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchCollaborationArtifacts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'count' },
            name: { kind: 'Name', value: 'countGeneralArtifact' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'collaborations' },
            name: { kind: 'Name', value: 'findGeneralArtifact' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'props' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchCollaborationArtifactsQuery, FetchCollaborationArtifactsQueryVariables>;
export const FetchProfileBusinessByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchProfileBusinessById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'profileId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'businessId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'profile' },
            name: { kind: 'Name', value: 'findIdentityProfileById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'profileId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'business' },
            name: { kind: 'Name', value: 'findCareerBusinessById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'businessId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchProfileBusinessByIdQuery, FetchProfileBusinessByIdQueryVariables>;
export const FindCareerEmployeeByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindCareerEmployeeById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'employee' },
            name: { kind: 'Name', value: 'findCareerEmployeeById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'props' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'range' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'profile' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'business' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'job_title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'hire_date' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindCareerEmployeeByIdQuery, FindCareerEmployeeByIdQueryVariables>;
export const FetchEmployeesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchEmployees' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'countCareerEmployee' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'employees' },
            name: { kind: 'Name', value: 'findCareerEmployee' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'profile' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'business' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchEmployeesQuery, FetchEmployeesQueryVariables>;
export const FetchFilesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchFiles' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'countSpecialFile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'files' },
            name: { kind: 'Name', value: 'findSpecialFile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'mimetype' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchFilesQuery, FetchFilesQueryVariables>;
export const FetchInvoicesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchInvoices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'countFinancialInvoice' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'invoices' },
            name: { kind: 'Name', value: 'findFinancialInvoice' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rand' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'paid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'props' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'discount' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchInvoicesQuery, FetchInvoicesQueryVariables>;
export const FetchLocationsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchLocations' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'countLogisticLocation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'locations' },
            name: { kind: 'Name', value: 'findLogisticLocation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'tags' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'props' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'properties' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'geometry' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'coordinates' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchLocationsQuery, FetchLocationsQueryVariables>;
export const FetchNoticesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchNotices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'countTouchNotice' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'notices' },
            name: { kind: 'Name', value: 'findTouchNotice' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'visited' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchNoticesQuery, FetchNoticesQueryVariables>;
export const FetchSchemasDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchSchemas' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'schemas' },
            name: { kind: 'Name', value: 'findCareerBranch' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchSchemasQuery, FetchSchemasQueryVariables>;
export const FindCareerServiceByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindCareerServiceById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'service' },
            name: { kind: 'Name', value: 'findCareerServiceById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'unit' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'range' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'profit' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'discount' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'business' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindCareerServiceByIdQuery, FindCareerServiceByIdQueryVariables>;
export const FetchServicesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchServices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'countCareerService' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'services' },
            name: { kind: 'Name', value: 'findCareerService' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'range' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'profit' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'business' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'discount' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'deleted_at' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'restored_at' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchServicesQuery, FetchServicesQueryVariables>;
export const FetchEventShiftsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchEventShifts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'countGeneralEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'shifts' },
            name: { kind: 'Name', value: 'findGeneralEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 's_date' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'e_date' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'organizers' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'correlation' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchEventShiftsQuery, FetchEventShiftsQueryVariables>;
export const FetchTransactionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchTransactions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'QueryFilterDto' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'countFinancialTransaction' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'countFilter' } },
              },
            ],
            selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total' } }] },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'transactions' },
            name: { kind: 'Name', value: 'findFinancialTransaction' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchTransactionsQuery, FetchTransactionsQueryVariables>;
export const FetchWorkflowsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchWorkflows' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'FilterDto' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'workflows' },
            name: { kind: 'Name', value: 'findGeneralWorkflow' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'findFilter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokens' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'history' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchWorkflowsQuery, FetchWorkflowsQueryVariables>;
