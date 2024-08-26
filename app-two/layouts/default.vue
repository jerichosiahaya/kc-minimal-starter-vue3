<script setup lang="ts">
import LayoutFullMain from '@/components/layout/Main.vue';

const title = ref("App Two - Harian Kompas CMS");
useHead({
    meta: [{ content: title }],
    titleTemplate: (titleChunk) => {
    return titleChunk
        ? `${titleChunk} - App Two - Harian Kompas CMS`
        : "App Two - Harian Kompas CMS";
    },
});
</script>
    
<template>
    <v-locale-provider >
        <v-app>
            <LayoutFullMain/>
            <v-main>
                <v-container fluid class="page-wrapper">
                    <div class="maxWidth">
                        <NuxtPage  />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
    