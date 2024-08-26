<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '~/stores/auth';

const userStore = useUserStore();
const name = computed(() => userStore.name);
const roles = computed(() => userStore.roles);
const email = computed(() => userStore.email);
</script>
    
<template>
    <v-card elevation="10" >
        <v-row class="ma-sm-n2 ma-n1" fill-height>
            <v-col cols="12" sm="6">
                <v-card elevation="10">
                    <v-card-item>
                        <h5 class="text-h5">Profile</h5>
                        <div class="text-subtitle-1 text-medium-emphasis mt-2">{{ name }}</div>
                        <div class="text-center mt-6 mb-6">
                            <v-avatar size="120">
                                <img src="@/assets/images/profile/user-1.jpeg" height="120" alt="image" />
                            </v-avatar>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card elevation="10">
                    <v-card-item>
                        <h5 class="text-h5">Your Credentials from keycloak</h5>
                        <div class="mt-5">
                            <v-label class="mb-2 font-weight-medium">Email</v-label>
                            <v-text-field
                                color="primary"
                                variant="outlined"
                                type="text"
                                :value="email"
                                readonly
                            />
                            <v-label class="mb-1 font-weight-medium">Rules</v-label>
                            <div class="d-flex flex-wrap align-center gap-3">
                                <v-chip color="primary" v-for="(item, index) in roles" :key="index">
                                    <MoodSmileIcon class="mr-2" start size="20" />
                                    {{ item }}
                                    <ChecksIcon class="ml-2" start size="20" />
                                </v-chip>
                            </div>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>
    