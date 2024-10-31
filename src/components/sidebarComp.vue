<template>
    <div class="inline-grid rounded-lg items-center bg-primary text-primary-content ">
        <ul>
            <li class="group">
                <a v-if="!isMobile" class="flex items-center p-4 text-center hover:bg-purple-500 rounded-lg"
                    @click="setting.openSidebar()">
                    <span class="material-symbols-outlined cursor-pointer hover:text-neutral">
                        menu
                    </span>
                </a>
            </li>
            <li class="group transition-all duration-300" v-for="(item, index) in menuItems" :key="index">
                <router-link :to="{ name: item.routename }"
                    class="flex items-center p-4 text-center group-hover:bg-purple-500 rounded-lg">
                    <span class="material-symbols-outlined cursor-pointer hover:text-neutral">
                        {{ item.icon }}
                    </span>
                    <span v-if="!isMobile && setting.setSidebar" class="ml-3">{{ item.name }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { webSettings } from '@/stores/webSettings';

export default {
    setup() {
        const setting = webSettings();
        const isMobile = ref(false);

        const checkScreenSize = () => {
            isMobile.value = window.matchMedia('(max-width: 768px)').matches;
        };

        onMounted(() => {
            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', checkScreenSize);
        });

        return { setting, isMobile };
    },
    data() {
        return {
            menuItems: [
                { name: 'Dashboard', icon: 'dashboard', url: '/', routename: 'home' },
                { name: 'Table', icon: 'table_chart', url: '/about', routename: 'about' },
            ]
        };
    }
};
</script>
