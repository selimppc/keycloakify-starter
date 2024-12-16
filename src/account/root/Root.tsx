import { KeycloakProvider } from "@keycloakify/keycloak-account-ui/ui-shared";
import { Page, Spinner } from "@patternfly/react-core";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { environment } from "@keycloakify/keycloak-account-ui/environment";
import { Header } from "@keycloakify/keycloak-account-ui/root/Header";
import { PageNav } from "@keycloakify/keycloak-account-ui/root/PageNav";

export const Root = () => {
  return (
    <KeycloakProvider environment={environment}>
      <Page header={<Header />} sidebar={<PageNav />} isManagedSidebar>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Page>
    </KeycloakProvider>
  );
};
