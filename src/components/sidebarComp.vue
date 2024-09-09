<template>
    <aside class="flex"
        :class="['bg-gray-100 h-screen transition-all duration-300', this.setting.setSidebar ? 'w-64' : 'w-16']">
        <div class="flex flex-col items-center">
            <button @click="this.setting.openSidebar()" class="p-4">
                <span class="material-icons">menu</span>
            </button>
            <ul class="mt-4 w-full">
                <li class="group" v-for="item in menuItems" :key="item.name">
                    <a href="#"
                        class="flex items-center p-4 w-full text-left focus:outline-none group-hover:bg-gray-200">
                        <span class="material-icons">{{ item.icon }}</span>
                        <span v-if="this.setting.setSidebar" class="ml-3">{{ item.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
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
                { name: 'Dashboard', icon: 'dashboard' },
                { name: 'User', icon: 'person' },
                { name: 'Component', icon: 'widgets' }
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