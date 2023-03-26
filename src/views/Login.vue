<template>
  <div class="container mt-40 flex flex-col justify-center">
    <h1
      class="w-full py-5 text-center text-3xl font-bold text-teal-600 border-b-4 border-teal-800"
    >
      後台管理系統
    </h1>

    <form class="pt-10 w-80 mx-auto">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-md font-medium text-gray-900"
          >帳號</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          placeholder="請輸入帳號"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-md font-medium text-gray-900"
          >密碼</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          placeholder="請輸入密碼"
          required
        />
      </div>
      <button type="submit" class="w-full admin-primary-button">登入</button>
    </form>
  </div>
</template>
