import Keycloak from 'keycloak-js'
import { useUserStore } from '~/stores/auth'
import { useNuxtApp } from '#app'

let keycloakInstance: Keycloak

export function initKeycloak() {
    const nuxtApp = useNuxtApp()
    // const KEYCLOAK_URL = nuxtApp.$config.KEYCLOAK_URL as string
    // const KEYCLOAK_REALM = nuxtApp.$config.KEYCLOAK_REALM as string
    // const KEYCLOAK_CLIENT_ID = nuxtApp.$config.KEYCLOAK_CLIENT_ID as string

    // Check if the user is already authenticated
    if (keycloakInstance && keycloakInstance.authenticated) {
        return 
    }

    keycloakInstance = new Keycloak({
        url: "https://ai.kompas.id/kc",
        realm: "assistant",
        clientId: "demo-app-one-nuxt-local",
    })

    keycloakInstance.init({ 
        onLoad: 'login-required', 
        scope: 'offline_access', 
        checkLoginIframe: false, 
    })
    .then((auth) => {
        if (!auth) {
            console.log('Authenticated Failed')
            window.location.reload()
            
        } else {
            console.log('Authenticated Success')
            const userStore = useUserStore()

            // For the first login, the attribute is not set. The 'nickname' attribute should be set either manually or via REST.
            // curl -X PUT "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/users/${USER_ID}" \
            //     -H "Authorization: Bearer ${ACCESS_TOKEN}" \
            //     -H "Content-Type: application/json" \
            //     -d '[
            //             {
            //             "op": "add",
            //             "path": "/attributes/'${CUSTOM_ATTRIBUTE_NAME}'",
            //             "value": "'${CUSTOM_ATTRIBUTE_VALUE}'"
            //             }
            //         ]'

            userStore.setUser({
                name: keycloakInstance.tokenParsed?.name || null,
                email: keycloakInstance.tokenParsed?.email || null,
                roles: keycloakInstance.tokenParsed?.realm_access?.roles || [],
                token: keycloakInstance.token || null,
                nickname: keycloakInstance.tokenParsed?.nickname || null
            })
        }
    })
    .catch(() => {
        console.log('Authenticated Failed')
    })
}

export function logout() {
    keycloakInstance.logout()
}

export default defineNuxtPlugin((nuxtApp) => {
    initKeycloak()
});