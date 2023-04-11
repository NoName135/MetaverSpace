import { defineStore } from "pinia";

export default defineStore("loading", {
  state: () => {
    return {
      loadings: {
        fullLoading: true,
        opacity: 0.8,
        progress: 0,
      },
    };
  },
  actions: {},
  getters: {},
});
