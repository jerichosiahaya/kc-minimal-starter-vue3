import { defineStore } from 'pinia'
import { logout } from '~/plugins/keycloak'

interface User {
    name: string | null
    email: string | null
    roles: string[]
    token: string | null
    nickname: string | null
}

export const useUserStore = defineStore('user', {
    state: (): User => ({
        name: null,
        email: null,
        roles: [],
        token: null,
        nickname: null
    }),
    actions: {
        setUser(user: User ) {
            this.name = user.name
            this.email = user.email
            this.roles = user.roles
            this.token = user.token
            this.nickname = user.nickname
        },
        logout() {
            this.setUser({
                name: null,
                email: null,
                roles: [],
                token: null,
                nickname: null
            })
            logout()
        }
    }
})