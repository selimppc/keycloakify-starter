import { lazy } from "react";
import { KcAccountUiLoader } from "@keycloakify/keycloak-account-ui";
import type { KcContext } from "./KcContext";
import kcBongoLogoUrl from "./assets/img/bongo_logo_light.svg";
const KcAccountUi = lazy(() => import("./KcAccountUi"));

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    console.log(kcContext.properties.MY_APP_API_URL);

    return (
        <KcAccountUiLoader 
            kcContext={kcContext} 
            KcAccountUi={KcAccountUi} 
            logoUrl={kcBongoLogoUrl}
            content={[
                {
                  "label": "personalInfo",
                  "path": ""
                },
                {
                  "label": "accountSecurity",
                  "children": [
                    {
                      "label": "signingIn",
                      "path": "account-security/signing-in"
                    },
                    {
                      "label": "deviceActivity",
                      "path": "account-security/device-activity"
                    },
                    {
                      "label": "linkedAccounts",
                      "path": "account-security/linked-accounts",
                      "isVisible": "isLinkedAccountsEnabled"
                    }
                  ]
                },
                {
                  "label": "applications",
                  "path": "applications"
                }
            ]}
        />
    );
}
