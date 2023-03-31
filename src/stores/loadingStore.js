import { defineStore } from "pinia";

export default defineStore("loading", {
  state: () => {
    return {
      loadings: {
        fullLoading: false,
      },
    };
  },
  actions: {},
  getters: {},
});
