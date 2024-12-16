import { lazy } from "react";
import type { IndexRouteObject, RouteObject } from "react-router-dom";

import { environment } from "@keycloakify/keycloak-account-ui/environment";
import { Organizations } from "@keycloakify/keycloak-account-ui/organizations/Organizations";
import { ErrorPage } from "@keycloakify/keycloak-account-ui/root/ErrorPage";
import { Root } from "@keycloakify/keycloak-account-ui/root/Root";

const DeviceActivity = lazy(() => import("@keycloakify/keycloak-account-ui/account-security/DeviceActivity"));
const LinkedAccounts = lazy(() => import("@keycloakify/keycloak-account-ui/account-security/LinkedAccounts"));
const SigningIn = lazy(() => import("@keycloakify/keycloak-account-ui/account-security/SigningIn"));
const Applications = lazy(() => import("@keycloakify/keycloak-account-ui/applications/Applications"));
const Groups = lazy(() => import("@keycloakify/keycloak-account-ui/groups/Groups"));
const PersonalInfo = lazy(() => import("@keycloakify/keycloak-account-ui/personal-info/PersonalInfo"));
const Resources = lazy(() => import("@keycloakify/keycloak-account-ui/resources/Resources"));
const ContentComponent = lazy(() => import("@keycloakify/keycloak-account-ui/content/ContentComponent"));
const Oid4Vci = lazy(() => import("@keycloakify/keycloak-account-ui/oid4vci/Oid4Vci"));

export const DeviceActivityRoute: RouteObject = {
  path: "account-security/device-activity",
  element: <DeviceActivity />,
};

export const LinkedAccountsRoute: RouteObject = {
  path: "account-security/linked-accounts",
  element: <LinkedAccounts />,
};

export const SigningInRoute: RouteObject = {
  path: "account-security/signing-in",
  element: <SigningIn />,
};

export const ApplicationsRoute: RouteObject = {
  path: "applications",
  element: <Applications />,
};

export const GroupsRoute: RouteObject = {
  path: "groups",
  element: <Groups />,
};

export const ResourcesRoute: RouteObject = {
  path: "resources",
  element: <Resources />,
};

export type ContentComponentParams = {
  componentId: string;
};

export const ContentRoute: RouteObject = {
  path: "content/:componentId",
  element: <ContentComponent />,
};

export const PersonalInfoRoute: IndexRouteObject = {
  index: true,
  element: <PersonalInfo />,
};

export const OrganizationsRoute: RouteObject = {
  path: "organizations",
  element: <Organizations />,
};

export const Oid4VciRoute: RouteObject = {
  path: "oid4vci",
  element: <Oid4Vci />,
};

export const RootRoute: RouteObject = {
  path: decodeURIComponent(new URL(environment.baseUrl).pathname),
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    PersonalInfoRoute,
    DeviceActivityRoute,
    LinkedAccountsRoute,
    SigningInRoute,
    ApplicationsRoute,
    GroupsRoute,
    OrganizationsRoute,
    PersonalInfoRoute,
    ResourcesRoute,
    ContentRoute,
    Oid4VciRoute,
  ],
};

export const routes: RouteObject[] = [RootRoute];
