<script setup lang="ts">
import { ref } from 'vue';
// import QuickLinks from './QuickLinks.vue';
import AppsLink from './AppsLink.vue';
import { HelpIcon, ChevronDownIcon } from 'vue-tabler-icons';
</script>
    
<template>
    <v-menu open-on-hover :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="hidden-sm-and-down" rounded="sm" variant="text" color="primary" v-bind="props">
                Apps <ChevronDownIcon size="16" class="mt-1 ml-1" />
            </v-btn>
        </template>
        <AppsLink />
    </v-menu>
</template>
    