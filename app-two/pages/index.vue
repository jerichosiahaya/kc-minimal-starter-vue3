<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { UserCircleIcon,BellIcon,ArticleIcon,LockIcon } from 'vue-tabler-icons';
import AccountTab from '@/components/pages/account-settings/AccountTab.vue';
import { useUserStore } from '~/stores/auth';

const tab = ref(null);
const userStore = useUserStore()
const page = computed(() => ({ title: `Welcome ${userStore.name} to App Two` }));
const breadcrumbs = ref([
    {
        text: 'Account Setting',
        disabled: true,
        href: '#'
    }
]);
</script>
    
    <template>
        <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
        <v-row class="justify-center">
            <!--Account Settings tabs-->
            <v-col cols="12" md="12">
                <v-card elevation="10" class=" " rounded="md">
                    <v-tabs v-model="tab" bg-color="transparent" min-height="70" height="70" color="primary">
                        <v-tab value="Account" class="text-medium-emphasis" ><UserCircleIcon class="mr-2" size="20"/> Account</v-tab>
                    </v-tabs>
                    <v-divider></v-divider>
                    <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                        <v-window v-model="tab">
                            <v-window-item value="Account">
                                <AccountTab/>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </template>
    