import { defineStore } from 'pinia';

export const webSettings = defineStore('websettings', {
  state: () => ({
    setSidebar: true,
  }),
  actions: {
    openSidebar() {
        this.setSidebar = !this.setSidebar;
    },
  },
  getters: {
    getSidebar: () => this.setSidebar,
  },
});
