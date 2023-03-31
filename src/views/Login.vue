<template>
  <div class="container mt-40 flex flex-col justify-center">
    <h1
      class="w-full py-5 text-center text-3xl font-bold text-teal-600 border-b-4 border-teal-800"
    >
      後台管理系統
    </h1>

    <V-form class="pt-10 w-80 mx-auto" v-slot="{ errors }" @submit="login">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-md font-medium text-gray-900"
          >帳號</label
        >
        <V-field
          type="email"
          id="email"
          name="email"
          placeholder="請輸入Email"
          v-model="user.username"
          autofocus
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          :class="[errors['email'] ? 'bg-rose-100 border-rose-500' : '']"
          rules="required|email"
        >
        </V-field>
        <ErrorMessage
          name="email"
          class="mt-2 ml-2 text-sm text-rose-500"
        ></ErrorMessage>
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-md font-medium text-gray-900"
          >密碼</label
        >
        <V-field
          type="password"
          id="password"
          name="password"
          v-model="user.password"
          placeholder="Password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          :class="[errors['password'] ? 'bg-rose-100 border-rose-500' : '']"
          rules="required"
        >
        </V-field>
        <ErrorMessage
          name="password"
          class="mt-2 ml-2 text-sm text-rose-500"
        ></ErrorMessage>
      </div>
      <button
        type="submit"
        class="w-full admin-primary-button"
        :disabled="Object.keys(errors).length"
      >
        登入
      </button>
    </V-form>
  </div>
</template>

<script>
import swalMixin from "@/mixins/swal.js";

import loadingStore from "@/stores/loadingStore.js";
import { mapState } from "pinia";

const { VITE_API } = import.meta.env;

export default {
  mixins: [swalMixin],
  data() {
    return {
      user: {},
    };
  },
  methods: {
    login() {
      const api = `${VITE_API}/admin/signin`;
      this.loadings.fullLoading = true;
      this.$http
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `loginToken=${token};expires=${new Date(expired)};`;
          this.$router.push("/admin/products");
        })
        .catch((err) => {
          this.loadings.fullLoading = false;
          //Swal
          this.adminToast("error", err.response.data.message);
        });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
};
</script>
