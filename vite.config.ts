import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            accountThemeImplementation: "Single-Page",
            artifactId: "saas-theme",
            themeName: ["saas-account-v3", "saas-login-v3"],
            environmentVariables: [
                { name: "MY_APP_API_URL", default: "" },
                { name: "MY_APP_PALETTE", default: "dracula" }
            ],
            //themeVersion: "v3"
            keycloakVersionTargets: {
                "22-to-25": false,
                "all-other-versions": "saas-theme.jar"
            }
        })
    ]
});
