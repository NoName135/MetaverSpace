import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/",
        component: () => import("../views/front/Index.vue"),
      },
      {
        path: "article/:id",
        name: "最新消息",
        component: () => import("../views/front/Article.vue"),
      },
      {
        path: "products",
        name: "商品列表",
        component: () => import("../views/front/Products.vue"),
      },
      {
        path: "product/:id",
        component: () => import("../views/front/Product.vue"),
      },
      {
        path: "favorite",
        name: "收藏清單",
        component: () => import("../views/front/Favorite.vue"),
      },
      {
        path: "cart",
        name: "購物車",
        component: () => import("../views/front/Cart.vue"),
      },
      {
        path: "order",
        name: "交易紀錄",
        /* Explicitly tell the router to redirect to default children */
        redirect: "/order",
        component: () => import("../views/front/Order.vue"),
        children: [
          {
            path: "",
            name: "交易明細",
            component: () => import("../views/front/OrderDetail.vue"),
          },
        ],
      },
      {
        path: "checkout",
        component: () => import("../views/front/Checkout.vue"),
        children: [
          {
            path: "information",
            name: "結帳",
            component: () => import("../views/front/checkout/Information.vue"),
          },
          {
            path: "check/:id",
            component: () => import("../views/front/checkout/Check.vue"),
          },
          {
            path: "send/:id",
            component: () => import("../views/front/checkout/Send.vue"),
          },
        ],
      },
      {
        path: "reserve",
        name: "預約體驗",
        component: () => import("../views/front/Reserve.vue"),
      },
      {
        path: "search/:id",
        component: () => import("../views/front/Search.vue"),
      },
      {
        path: "contact",
        name: "聯絡我們",
        component: () => import("../views/front/Contact.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/admin/Products.vue"),
      },
      {
        path: "order",
        component: () => import("../views/admin/Order.vue"),
      },
      {
        path: "coupon",
        component: () => import("../views/admin/Coupon.vue"),
      },
      {
        path: "article",
        component: () => import("../views/admin/Article.vue"),
      },
      {
        path: "reserve",
        component: () => import("../views/admin/Reserve.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

// 判斷切換頁面時 scrollTop 按鈕是否存在，有就移除此 HTML 區塊避免複製
router.beforeEach((to, from, next) => {
  const scrollTopBtn = document.querySelector("#scrollTop");
  if (scrollTopBtn) {
    scrollTopBtn.remove(scrollTopBtn);
  }
  next();
});

export default router;
