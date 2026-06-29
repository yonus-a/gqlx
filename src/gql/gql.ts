/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  'query FindConjointAccountById($id: String!) {\n  account: findConjointAccountById(id: $id) {\n    data {\n      id\n    }\n  }\n}': typeof types.FindConjointAccountByIdDocument;
  'query FetchAccounts($findFilter: FilterDto!) {\n  accounts: findConjointAccount(filter: $findFilter) {\n    items {\n      id\n    }\n  }\n}': typeof types.FetchAccountsDocument;
  'query FetchActivities($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  activities: findGeneralActivity(filter: $findFilter) {\n    items {\n      id\n      type\n      state\n      message\n      created_at\n    }\n  }\n}': typeof types.FetchActivitiesDocument;
  'query FindCareerBranchById($id: String!) {\n  branch: findCareerBranchById(id: $id) {\n    data {\n      id\n      name\n      code\n      type\n      phone\n      props\n      address\n      location\n      opening_date\n    }\n  }\n}': typeof types.FindCareerBranchByIdDocument;
  'query FetchBranches($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerBranch(filter: $countFilter) {\n    total\n  }\n  branches: findCareerBranch(filter: $findFilter) {\n    items {\n      id\n      name\n      type\n      code\n      state\n      address\n      location\n      deleted_at\n      restored_at\n      opening_date\n    }\n  }\n}': typeof types.FetchBranchesDocument;
  'query FindCareerBusinessById($id: String!) {\n  business: findCareerBusinessById(id: $id) {\n    data {\n      id\n      logo\n      name\n      code\n      type\n      cover\n      alias\n      props\n      slogan\n      website\n      support\n      address\n      location\n      foundation_date\n    }\n  }\n}': typeof types.FindCareerBusinessByIdDocument;
  'query FetchBusinesses($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  count: countCareerBusiness(filter: $countFilter) {\n    total\n  }\n  businesses: findCareerBusiness(filter: $findFilter) {\n    items {\n      id\n      name\n      logo\n      type\n      cover\n      alias\n      state\n      slogan\n      location\n      deleted_at\n      restored_at\n      foundation_date\n    }\n  }\n}': typeof types.FetchBusinessesDocument;
  'query FetchChangelogById($id: String!) {\n  changelog: findDomainAppById(id: $id) {\n    data {\n      change_logs {\n        semver\n        changes\n        created_at\n      }\n    }\n  }\n}': typeof types.FetchChangelogByIdDocument;
  'query FetchCollaborationArtifacts($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  count: countGeneralArtifact(filter: $countFilter) {\n    total\n  }\n  collaborations: findGeneralArtifact(filter: $findFilter) {\n    items {\n      id\n      key\n      type\n      value\n      props\n      created_at\n      updated_at\n    }\n  }\n}': typeof types.FetchCollaborationArtifactsDocument;
  'query FetchProfileBusinessById($profileId: String!, $businessId: String!) {\n  profile: findIdentityProfileById(id: $profileId) {\n    data {\n      id\n      first_name\n      last_name\n    }\n  }\n  business: findCareerBusinessById(id: $businessId) {\n    data {\n      id\n      name\n    }\n  }\n}': typeof types.FetchProfileBusinessByIdDocument;
  'query FindCareerEmployeeById($id: String!) {\n  employee: findCareerEmployeeById(id: $id) {\n    data {\n      id\n      type\n      props\n      range\n      salary\n      skills\n      profile\n      currency\n      business\n      location\n      job_title\n      hire_date\n    }\n  }\n}': typeof types.FindCareerEmployeeByIdDocument;
  'query FetchEmployees($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerEmployee(filter: $countFilter) {\n    total\n  }\n  employees: findCareerEmployee(filter: $findFilter) {\n    items {\n      id\n      state\n      branch\n      salary\n      status\n      profile\n      business\n      currency\n    }\n  }\n}': typeof types.FetchEmployeesDocument;
  'query FetchFiles($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countSpecialFile(filter: $countFilter) {\n    total\n  }\n  files: findSpecialFile(filter: $findFilter) {\n    items {\n      id\n      size\n      title\n      original\n      mimetype\n      timestamp\n    }\n  }\n}': typeof types.FetchFilesDocument;
  'query FetchInvoices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countFinancialInvoice(filter: $countFilter) {\n    total\n  }\n  invoices: findFinancialInvoice(filter: $findFilter) {\n    items {\n      id\n      rand\n      paid\n      props\n      items {\n        price\n        title\n        quantity\n        discount\n      }\n      state\n      amount\n      currency\n      created_at\n    }\n  }\n}': typeof types.FetchInvoicesDocument;
  'query FetchLocations($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countLogisticLocation(filter: $countFilter) {\n    total\n  }\n  locations: findLogisticLocation(filter: $findFilter) {\n    items {\n      id\n      title\n      tags\n      props\n      properties\n      description\n      geometry {\n        type\n        coordinates\n      }\n    }\n  }\n}': typeof types.FetchLocationsDocument;
  'query FetchNotices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countTouchNotice(filter: $countFilter) {\n    total\n  }\n  notices: findTouchNotice(filter: $findFilter) {\n    items {\n      id\n      type\n      title\n      content\n      subtitle\n      visited\n      thumbnail\n      created_at\n    }\n  }\n}': typeof types.FetchNoticesDocument;
  'query FetchSchemas($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  schemas: findCareerBranch(filter: $findFilter) {\n    items {\n      id\n    }\n  }\n}': typeof types.FetchSchemasDocument;
  'query FindCareerServiceById($id: String!) {\n  service: findCareerServiceById(id: $id) {\n    data {\n      id\n      name\n      type\n      unit\n      range\n      price\n      branch\n      profit\n      status\n      discount\n      currency\n      business\n    }\n  }\n}': typeof types.FindCareerServiceByIdDocument;
  'query FetchServices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerService(filter: $countFilter) {\n    total\n  }\n  services: findCareerService(filter: $findFilter) {\n    items {\n      id\n      name\n      state\n      price\n      range\n      status\n      profit\n      branch\n      business\n      currency\n      discount\n      deleted_at\n      restored_at\n    }\n  }\n}': typeof types.FetchServicesDocument;
  'query FetchEventShifts($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countGeneralEvent(filter: $countFilter) {\n    total\n  }\n  shifts: findGeneralEvent(filter: $findFilter) {\n    items {\n      id\n      title\n      s_date\n      e_date\n      organizers\n      correlation\n    }\n  }\n}': typeof types.FetchEventShiftsDocument;
  'query FetchTransactions($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countFinancialTransaction(filter: $countFilter) {\n    total\n  }\n  transactions: findFinancialTransaction(filter: $findFilter) {\n    items {\n      id\n      type\n      state\n      amount\n      reason\n      description\n      created_at\n    }\n  }\n}': typeof types.FetchTransactionsDocument;
  'query FetchWorkflows($findFilter: FilterDto!) {\n  workflows: findGeneralWorkflow(filter: $findFilter) {\n    items {\n      id\n      tokens {\n        history {\n          name\n          status\n        }\n      }\n    }\n  }\n}': typeof types.FetchWorkflowsDocument;
};
const documents: Documents = {
  'query FindConjointAccountById($id: String!) {\n  account: findConjointAccountById(id: $id) {\n    data {\n      id\n    }\n  }\n}':
    types.FindConjointAccountByIdDocument,
  'query FetchAccounts($findFilter: FilterDto!) {\n  accounts: findConjointAccount(filter: $findFilter) {\n    items {\n      id\n    }\n  }\n}':
    types.FetchAccountsDocument,
  'query FetchActivities($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  activities: findGeneralActivity(filter: $findFilter) {\n    items {\n      id\n      type\n      state\n      message\n      created_at\n    }\n  }\n}':
    types.FetchActivitiesDocument,
  'query FindCareerBranchById($id: String!) {\n  branch: findCareerBranchById(id: $id) {\n    data {\n      id\n      name\n      code\n      type\n      phone\n      props\n      address\n      location\n      opening_date\n    }\n  }\n}':
    types.FindCareerBranchByIdDocument,
  'query FetchBranches($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerBranch(filter: $countFilter) {\n    total\n  }\n  branches: findCareerBranch(filter: $findFilter) {\n    items {\n      id\n      name\n      type\n      code\n      state\n      address\n      location\n      deleted_at\n      restored_at\n      opening_date\n    }\n  }\n}':
    types.FetchBranchesDocument,
  'query FindCareerBusinessById($id: String!) {\n  business: findCareerBusinessById(id: $id) {\n    data {\n      id\n      logo\n      name\n      code\n      type\n      cover\n      alias\n      props\n      slogan\n      website\n      support\n      address\n      location\n      foundation_date\n    }\n  }\n}':
    types.FindCareerBusinessByIdDocument,
  'query FetchBusinesses($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  count: countCareerBusiness(filter: $countFilter) {\n    total\n  }\n  businesses: findCareerBusiness(filter: $findFilter) {\n    items {\n      id\n      name\n      logo\n      type\n      cover\n      alias\n      state\n      slogan\n      location\n      deleted_at\n      restored_at\n      foundation_date\n    }\n  }\n}':
    types.FetchBusinessesDocument,
  'query FetchChangelogById($id: String!) {\n  changelog: findDomainAppById(id: $id) {\n    data {\n      change_logs {\n        semver\n        changes\n        created_at\n      }\n    }\n  }\n}':
    types.FetchChangelogByIdDocument,
  'query FetchCollaborationArtifacts($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  count: countGeneralArtifact(filter: $countFilter) {\n    total\n  }\n  collaborations: findGeneralArtifact(filter: $findFilter) {\n    items {\n      id\n      key\n      type\n      value\n      props\n      created_at\n      updated_at\n    }\n  }\n}':
    types.FetchCollaborationArtifactsDocument,
  'query FetchProfileBusinessById($profileId: String!, $businessId: String!) {\n  profile: findIdentityProfileById(id: $profileId) {\n    data {\n      id\n      first_name\n      last_name\n    }\n  }\n  business: findCareerBusinessById(id: $businessId) {\n    data {\n      id\n      name\n    }\n  }\n}':
    types.FetchProfileBusinessByIdDocument,
  'query FindCareerEmployeeById($id: String!) {\n  employee: findCareerEmployeeById(id: $id) {\n    data {\n      id\n      type\n      props\n      range\n      salary\n      skills\n      profile\n      currency\n      business\n      location\n      job_title\n      hire_date\n    }\n  }\n}':
    types.FindCareerEmployeeByIdDocument,
  'query FetchEmployees($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerEmployee(filter: $countFilter) {\n    total\n  }\n  employees: findCareerEmployee(filter: $findFilter) {\n    items {\n      id\n      state\n      branch\n      salary\n      status\n      profile\n      business\n      currency\n    }\n  }\n}':
    types.FetchEmployeesDocument,
  'query FetchFiles($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countSpecialFile(filter: $countFilter) {\n    total\n  }\n  files: findSpecialFile(filter: $findFilter) {\n    items {\n      id\n      size\n      title\n      original\n      mimetype\n      timestamp\n    }\n  }\n}':
    types.FetchFilesDocument,
  'query FetchInvoices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countFinancialInvoice(filter: $countFilter) {\n    total\n  }\n  invoices: findFinancialInvoice(filter: $findFilter) {\n    items {\n      id\n      rand\n      paid\n      props\n      items {\n        price\n        title\n        quantity\n        discount\n      }\n      state\n      amount\n      currency\n      created_at\n    }\n  }\n}':
    types.FetchInvoicesDocument,
  'query FetchLocations($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countLogisticLocation(filter: $countFilter) {\n    total\n  }\n  locations: findLogisticLocation(filter: $findFilter) {\n    items {\n      id\n      title\n      tags\n      props\n      properties\n      description\n      geometry {\n        type\n        coordinates\n      }\n    }\n  }\n}':
    types.FetchLocationsDocument,
  'query FetchNotices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countTouchNotice(filter: $countFilter) {\n    total\n  }\n  notices: findTouchNotice(filter: $findFilter) {\n    items {\n      id\n      type\n      title\n      content\n      subtitle\n      visited\n      thumbnail\n      created_at\n    }\n  }\n}':
    types.FetchNoticesDocument,
  'query FetchSchemas($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  schemas: findCareerBranch(filter: $findFilter) {\n    items {\n      id\n    }\n  }\n}':
    types.FetchSchemasDocument,
  'query FindCareerServiceById($id: String!) {\n  service: findCareerServiceById(id: $id) {\n    data {\n      id\n      name\n      type\n      unit\n      range\n      price\n      branch\n      profit\n      status\n      discount\n      currency\n      business\n    }\n  }\n}':
    types.FindCareerServiceByIdDocument,
  'query FetchServices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerService(filter: $countFilter) {\n    total\n  }\n  services: findCareerService(filter: $findFilter) {\n    items {\n      id\n      name\n      state\n      price\n      range\n      status\n      profit\n      branch\n      business\n      currency\n      discount\n      deleted_at\n      restored_at\n    }\n  }\n}':
    types.FetchServicesDocument,
  'query FetchEventShifts($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countGeneralEvent(filter: $countFilter) {\n    total\n  }\n  shifts: findGeneralEvent(filter: $findFilter) {\n    items {\n      id\n      title\n      s_date\n      e_date\n      organizers\n      correlation\n    }\n  }\n}':
    types.FetchEventShiftsDocument,
  'query FetchTransactions($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countFinancialTransaction(filter: $countFilter) {\n    total\n  }\n  transactions: findFinancialTransaction(filter: $findFilter) {\n    items {\n      id\n      type\n      state\n      amount\n      reason\n      description\n      created_at\n    }\n  }\n}':
    types.FetchTransactionsDocument,
  'query FetchWorkflows($findFilter: FilterDto!) {\n  workflows: findGeneralWorkflow(filter: $findFilter) {\n    items {\n      id\n      tokens {\n        history {\n          name\n          status\n        }\n      }\n    }\n  }\n}':
    types.FetchWorkflowsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FindConjointAccountById($id: String!) {\n  account: findConjointAccountById(id: $id) {\n    data {\n      id\n    }\n  }\n}',
): (typeof documents)['query FindConjointAccountById($id: String!) {\n  account: findConjointAccountById(id: $id) {\n    data {\n      id\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchAccounts($findFilter: FilterDto!) {\n  accounts: findConjointAccount(filter: $findFilter) {\n    items {\n      id\n    }\n  }\n}',
): (typeof documents)['query FetchAccounts($findFilter: FilterDto!) {\n  accounts: findConjointAccount(filter: $findFilter) {\n    items {\n      id\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchActivities($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  activities: findGeneralActivity(filter: $findFilter) {\n    items {\n      id\n      type\n      state\n      message\n      created_at\n    }\n  }\n}',
): (typeof documents)['query FetchActivities($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  activities: findGeneralActivity(filter: $findFilter) {\n    items {\n      id\n      type\n      state\n      message\n      created_at\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FindCareerBranchById($id: String!) {\n  branch: findCareerBranchById(id: $id) {\n    data {\n      id\n      name\n      code\n      type\n      phone\n      props\n      address\n      location\n      opening_date\n    }\n  }\n}',
): (typeof documents)['query FindCareerBranchById($id: String!) {\n  branch: findCareerBranchById(id: $id) {\n    data {\n      id\n      name\n      code\n      type\n      phone\n      props\n      address\n      location\n      opening_date\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchBranches($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerBranch(filter: $countFilter) {\n    total\n  }\n  branches: findCareerBranch(filter: $findFilter) {\n    items {\n      id\n      name\n      type\n      code\n      state\n      address\n      location\n      deleted_at\n      restored_at\n      opening_date\n    }\n  }\n}',
): (typeof documents)['query FetchBranches($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerBranch(filter: $countFilter) {\n    total\n  }\n  branches: findCareerBranch(filter: $findFilter) {\n    items {\n      id\n      name\n      type\n      code\n      state\n      address\n      location\n      deleted_at\n      restored_at\n      opening_date\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FindCareerBusinessById($id: String!) {\n  business: findCareerBusinessById(id: $id) {\n    data {\n      id\n      logo\n      name\n      code\n      type\n      cover\n      alias\n      props\n      slogan\n      website\n      support\n      address\n      location\n      foundation_date\n    }\n  }\n}',
): (typeof documents)['query FindCareerBusinessById($id: String!) {\n  business: findCareerBusinessById(id: $id) {\n    data {\n      id\n      logo\n      name\n      code\n      type\n      cover\n      alias\n      props\n      slogan\n      website\n      support\n      address\n      location\n      foundation_date\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchBusinesses($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  count: countCareerBusiness(filter: $countFilter) {\n    total\n  }\n  businesses: findCareerBusiness(filter: $findFilter) {\n    items {\n      id\n      name\n      logo\n      type\n      cover\n      alias\n      state\n      slogan\n      location\n      deleted_at\n      restored_at\n      foundation_date\n    }\n  }\n}',
): (typeof documents)['query FetchBusinesses($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  count: countCareerBusiness(filter: $countFilter) {\n    total\n  }\n  businesses: findCareerBusiness(filter: $findFilter) {\n    items {\n      id\n      name\n      logo\n      type\n      cover\n      alias\n      state\n      slogan\n      location\n      deleted_at\n      restored_at\n      foundation_date\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchChangelogById($id: String!) {\n  changelog: findDomainAppById(id: $id) {\n    data {\n      change_logs {\n        semver\n        changes\n        created_at\n      }\n    }\n  }\n}',
): (typeof documents)['query FetchChangelogById($id: String!) {\n  changelog: findDomainAppById(id: $id) {\n    data {\n      change_logs {\n        semver\n        changes\n        created_at\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchCollaborationArtifacts($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  count: countGeneralArtifact(filter: $countFilter) {\n    total\n  }\n  collaborations: findGeneralArtifact(filter: $findFilter) {\n    items {\n      id\n      key\n      type\n      value\n      props\n      created_at\n      updated_at\n    }\n  }\n}',
): (typeof documents)['query FetchCollaborationArtifacts($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  count: countGeneralArtifact(filter: $countFilter) {\n    total\n  }\n  collaborations: findGeneralArtifact(filter: $findFilter) {\n    items {\n      id\n      key\n      type\n      value\n      props\n      created_at\n      updated_at\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchProfileBusinessById($profileId: String!, $businessId: String!) {\n  profile: findIdentityProfileById(id: $profileId) {\n    data {\n      id\n      first_name\n      last_name\n    }\n  }\n  business: findCareerBusinessById(id: $businessId) {\n    data {\n      id\n      name\n    }\n  }\n}',
): (typeof documents)['query FetchProfileBusinessById($profileId: String!, $businessId: String!) {\n  profile: findIdentityProfileById(id: $profileId) {\n    data {\n      id\n      first_name\n      last_name\n    }\n  }\n  business: findCareerBusinessById(id: $businessId) {\n    data {\n      id\n      name\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FindCareerEmployeeById($id: String!) {\n  employee: findCareerEmployeeById(id: $id) {\n    data {\n      id\n      type\n      props\n      range\n      salary\n      skills\n      profile\n      currency\n      business\n      location\n      job_title\n      hire_date\n    }\n  }\n}',
): (typeof documents)['query FindCareerEmployeeById($id: String!) {\n  employee: findCareerEmployeeById(id: $id) {\n    data {\n      id\n      type\n      props\n      range\n      salary\n      skills\n      profile\n      currency\n      business\n      location\n      job_title\n      hire_date\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchEmployees($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerEmployee(filter: $countFilter) {\n    total\n  }\n  employees: findCareerEmployee(filter: $findFilter) {\n    items {\n      id\n      state\n      branch\n      salary\n      status\n      profile\n      business\n      currency\n    }\n  }\n}',
): (typeof documents)['query FetchEmployees($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerEmployee(filter: $countFilter) {\n    total\n  }\n  employees: findCareerEmployee(filter: $findFilter) {\n    items {\n      id\n      state\n      branch\n      salary\n      status\n      profile\n      business\n      currency\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchFiles($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countSpecialFile(filter: $countFilter) {\n    total\n  }\n  files: findSpecialFile(filter: $findFilter) {\n    items {\n      id\n      size\n      title\n      original\n      mimetype\n      timestamp\n    }\n  }\n}',
): (typeof documents)['query FetchFiles($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countSpecialFile(filter: $countFilter) {\n    total\n  }\n  files: findSpecialFile(filter: $findFilter) {\n    items {\n      id\n      size\n      title\n      original\n      mimetype\n      timestamp\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchInvoices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countFinancialInvoice(filter: $countFilter) {\n    total\n  }\n  invoices: findFinancialInvoice(filter: $findFilter) {\n    items {\n      id\n      rand\n      paid\n      props\n      items {\n        price\n        title\n        quantity\n        discount\n      }\n      state\n      amount\n      currency\n      created_at\n    }\n  }\n}',
): (typeof documents)['query FetchInvoices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countFinancialInvoice(filter: $countFilter) {\n    total\n  }\n  invoices: findFinancialInvoice(filter: $findFilter) {\n    items {\n      id\n      rand\n      paid\n      props\n      items {\n        price\n        title\n        quantity\n        discount\n      }\n      state\n      amount\n      currency\n      created_at\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchLocations($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countLogisticLocation(filter: $countFilter) {\n    total\n  }\n  locations: findLogisticLocation(filter: $findFilter) {\n    items {\n      id\n      title\n      tags\n      props\n      properties\n      description\n      geometry {\n        type\n        coordinates\n      }\n    }\n  }\n}',
): (typeof documents)['query FetchLocations($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countLogisticLocation(filter: $countFilter) {\n    total\n  }\n  locations: findLogisticLocation(filter: $findFilter) {\n    items {\n      id\n      title\n      tags\n      props\n      properties\n      description\n      geometry {\n        type\n        coordinates\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchNotices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countTouchNotice(filter: $countFilter) {\n    total\n  }\n  notices: findTouchNotice(filter: $findFilter) {\n    items {\n      id\n      type\n      title\n      content\n      subtitle\n      visited\n      thumbnail\n      created_at\n    }\n  }\n}',
): (typeof documents)['query FetchNotices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countTouchNotice(filter: $countFilter) {\n    total\n  }\n  notices: findTouchNotice(filter: $findFilter) {\n    items {\n      id\n      type\n      title\n      content\n      subtitle\n      visited\n      thumbnail\n      created_at\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchSchemas($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  schemas: findCareerBranch(filter: $findFilter) {\n    items {\n      id\n    }\n  }\n}',
): (typeof documents)['query FetchSchemas($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  schemas: findCareerBranch(filter: $findFilter) {\n    items {\n      id\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FindCareerServiceById($id: String!) {\n  service: findCareerServiceById(id: $id) {\n    data {\n      id\n      name\n      type\n      unit\n      range\n      price\n      branch\n      profit\n      status\n      discount\n      currency\n      business\n    }\n  }\n}',
): (typeof documents)['query FindCareerServiceById($id: String!) {\n  service: findCareerServiceById(id: $id) {\n    data {\n      id\n      name\n      type\n      unit\n      range\n      price\n      branch\n      profit\n      status\n      discount\n      currency\n      business\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchServices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerService(filter: $countFilter) {\n    total\n  }\n  services: findCareerService(filter: $findFilter) {\n    items {\n      id\n      name\n      state\n      price\n      range\n      status\n      profit\n      branch\n      business\n      currency\n      discount\n      deleted_at\n      restored_at\n    }\n  }\n}',
): (typeof documents)['query FetchServices($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countCareerService(filter: $countFilter) {\n    total\n  }\n  services: findCareerService(filter: $findFilter) {\n    items {\n      id\n      name\n      state\n      price\n      range\n      status\n      profit\n      branch\n      business\n      currency\n      discount\n      deleted_at\n      restored_at\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchEventShifts($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countGeneralEvent(filter: $countFilter) {\n    total\n  }\n  shifts: findGeneralEvent(filter: $findFilter) {\n    items {\n      id\n      title\n      s_date\n      e_date\n      organizers\n      correlation\n    }\n  }\n}',
): (typeof documents)['query FetchEventShifts($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countGeneralEvent(filter: $countFilter) {\n    total\n  }\n  shifts: findGeneralEvent(filter: $findFilter) {\n    items {\n      id\n      title\n      s_date\n      e_date\n      organizers\n      correlation\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchTransactions($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countFinancialTransaction(filter: $countFilter) {\n    total\n  }\n  transactions: findFinancialTransaction(filter: $findFilter) {\n    items {\n      id\n      type\n      state\n      amount\n      reason\n      description\n      created_at\n    }\n  }\n}',
): (typeof documents)['query FetchTransactions($countFilter: QueryFilterDto!, $findFilter: FilterDto!) {\n  total: countFinancialTransaction(filter: $countFilter) {\n    total\n  }\n  transactions: findFinancialTransaction(filter: $findFilter) {\n    items {\n      id\n      type\n      state\n      amount\n      reason\n      description\n      created_at\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query FetchWorkflows($findFilter: FilterDto!) {\n  workflows: findGeneralWorkflow(filter: $findFilter) {\n    items {\n      id\n      tokens {\n        history {\n          name\n          status\n        }\n      }\n    }\n  }\n}',
): (typeof documents)['query FetchWorkflows($findFilter: FilterDto!) {\n  workflows: findGeneralWorkflow(filter: $findFilter) {\n    items {\n      id\n      tokens {\n        history {\n          name\n          status\n        }\n      }\n    }\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
