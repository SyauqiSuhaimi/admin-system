<template>
    <div class="inline-grid rounded-xl "
        :class="['items-center bg-primary text-primary-content transition-all duration-300']">
        <ul>
            <li class="group">
                <a class="flex items-center p-4 text-center hover:bg-purple-500 rounded-xl"
                    @click="this.setting.openSidebar()">
                    <span class="material-symbols-outlined cursor-pointer hover:text-neutral">
                        menu
                    </span>
                </a>
            </li>
            <li class="group" v-for="item in menuItems" :key="item.name">
                <a :href="item.url" class="flex items-center p-4 text-center group-hover:bg-purple-500 rounded-xl">
                    <span class="material-symbols-outlined cursor-pointer hover:text-neutral">
                        {{ item.icon }}
                    </span>
                    <span v-if="this.setting.setSidebar" class="ml-3">{{ item.name }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { webSettings } from '@/stores/webSettings';

export default {
    setup() {
        const setting = webSettings()
        return { setting };
    },
    data() {
        return {
            isExpanded: webSettings.setSidebar,
            menuItems: [
                { name: 'Dashboard', icon: 'dashboard', url: '/' },
                { name: 'User', icon: 'person', url: '/about' },
                { name: 'Component', icon: 'widgets', url: '/about' }
            ]
        };
    },
    methods: {
        toggleSidebar() {
            this.isExpanded = !this.isExpanded;
        }
    }
};
</script>
<style lang="">

</style>