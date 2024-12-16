import {
  KeycloakMasthead,
  label,
  useEnvironment,
} from "@keycloakify/keycloak-account-ui/ui-shared";
import { Button } from "@patternfly/react-core";
import { ExternalLinkSquareAltIcon } from "@patternfly/react-icons";
import { useTranslation } from "react-i18next";
import { useHref } from "react-router-dom";

import { environment } from "@keycloakify/keycloak-account-ui/environment";
import { joinPath } from "@keycloakify/keycloak-account-ui/utils/joinPath";

import style from "@keycloakify/keycloak-account-ui/root/header.module.css";

const ReferrerLink = () => {
  const { t } = useTranslation();

  return environment.referrerUrl ? (
    <Button
      data-testid="referrer-link"
      component="a"
      href={environment.referrerUrl.replace("_hash_", "#")}
      variant="link"
      icon={<ExternalLinkSquareAltIcon />}
      iconPosition="right"
      isInline
    >
      {t("backTo", {
        app: label(t, environment.referrerName, environment.referrerUrl),
      })}
    </Button>
  ) : null;
};

export const Header = () => {
  const { environment, keycloak } = useEnvironment();
  const { t } = useTranslation();

  const brandImage = environment.logo || "logo.svg";
  const logoUrl = environment.logoUrl ? environment.logoUrl : "/";
  const internalLogoHref = useHref(logoUrl);

  // User can indicate that he wants an internal URL by starting it with "/"
  const indexHref = logoUrl.startsWith("/") ? internalLogoHref : logoUrl;

  return (
    <KeycloakMasthead
      data-testid="page-header"
      keycloak={keycloak}
      features={{ hasManageAccount: false }}
      brand={{
        href: indexHref,
        src: /https?:/.test(brandImage) || brandImage.startsWith("data:") || brandImage.startsWith("/") ? brandImage : joinPath(environment.resourceUrl, brandImage),
        alt: t("logo"),
        className: style.brand,
      }}
      toolbarItems={[<ReferrerLink key="link" />]}
    />
  );
};
