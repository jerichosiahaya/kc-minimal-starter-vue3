<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import appLinkItems from '@/components/layout/full/vertical-header/appLinkItem';

const appsLink = shallowRef(appLinkItems);
</script>

<template>
    <v-row>
        <v-col cols="12" lg="6" v-for="(item, i) in appsLink" :key="i">
            <nuxt-link :to="item.href" class="text-decoration-none custom-text-primary">
                <div class="d-flex align-center">
                    <v-avatar size="45" color="grey100" rounded="md">
                        <v-img :src="item.avatar" width="24" height="24" :alt="item.avatar" />
                    </v-avatar>
                    <div class="ml-3">
                        <h6 class="text-subtitle-1 mb-1 textPrimary font-weight-semibold custom-title">{{ item.title }}</h6>
                        <p class="text-subtitle-2 textSecondary">{{ item.subtext }}</p>
                    </div>
                </div>
            </nuxt-link>
        </v-col>
    </v-row>
</template>