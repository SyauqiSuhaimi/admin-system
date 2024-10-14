import { defineStore } from 'pinia';

export const webSettings = defineStore('websettings', {
  state: () => ({
    setSidebar: true,
    gridStackReady: false, 
  }),
  actions: {
    openSidebar() {
      this.setSidebar = !this.setSidebar;
    },
    setGridStackReady(status) {
      this.gridStackReady = status;
    },
  },
  getters: {
    getSidebar: (state) => state.setSidebar,
    isGridStackReady: (state) => state.gridStackReady, 
  },
});
