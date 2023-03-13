<template>
  <div class="container mt-nav">
    <div class="pt-8">
      <router-link
        to="../products"
        class="cursor-pointer hover:text-primary text-xl mx-2 lg:mx-0 hover:underline"
      >
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        返回商品列表
      </router-link>

      <div
        class="h-[480px] lg:h-[720px] bg-cover bg-center mx-2 lg:mx-0 mt-10 rounded"
        :style="{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${article.img})`,
        }"
      >
        <div class="flex flex-col justify-around h-full items-center">
          <div>
            <h2 class="font-bold text-3xl lg:text-4xl">{{ article.title }}</h2>
            <p
              class="mt-8 text-xl leading-relaxed lg:text-2xl lg:leading-loose text-center"
              v-html="article.content"
            ></p>
          </div>
          <p
            class="mt-8 text-lg leading-relaxed lg:text-xl lg:leading-loose text-center"
            v-html="article.description"
          ></p>
        </div>
      </div>

      <div class="flex justify-end mt-8 mb-6">
        <a
          href="#"
          class="pr-4 cursor-pointer hover:text-primary text-xl lg:mx-0 hover:underline"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
          上一篇
        </a>
        <a
          href="#"
          class="pl-4 cursor-pointer hover:text-primary text-xl lg:mx-0 hover:underline"
        >
          下一篇
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        id: 1,
        title: "歡慶開幕",
        content: "~限時折扣~<br>全館9折優惠",
        description:
          "即日起至 2023/06/30 止<br>結帳輸入折扣碼 Metaverse<br>即可享有 9 折優惠<br>一起進入自由自在的元宇宙世界 ✧◝(⁰▿⁰)◜✧",
        img: "https://storage.googleapis.com/vue-course-api.appspot.com/weekhomeworks/1678191797417.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=L1XAs71p34dfbvfcswNctBS00%2B7pVJ3T4Hk8%2F2It8VLb%2FFS%2BHhLTpX4ZQYiaU1hkNesmoBMCwobts4dNCADTPTLK3KOTVHfL3wZXVAfSu3VpCrDm%2BbcFB95AwC3DloL71RkgRTr68EcWr0WmxRt0y0tQZg7PLQ2%2BQqymfYu89YZbfj3EKa06BFh6uDCHS8MEg%2F90ut%2FFshiJ0%2FjhcUyBWBEG%2FeFhrgNYSSV8GKZcmSt%2BGhfJiuzvizDAQj4xy%2Fjr9kUo6U2yxC2ZiKM7lTWr4%2BFaAzSylD%2FJgOWPhywUQNuCPnC3U5jl2Xh7zSzRnSzdET06UuwG0bfkB7o954%2FbQw%3D%3D",
      },
    };
  },
};
</script>
