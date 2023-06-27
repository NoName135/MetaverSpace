import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/front/UserIndex.vue')
      },
      {
        path: 'article',
        component: () => import('../views/front/UserArticles.vue'),
        children: [
          {
            path: ':id',
            name: '最新消息',
            component: () => import('../views/front/UserArticle.vue')
          }
        ]
      },
      {
        path: 'products',
        name: '商品列表',
        component: () => import('../views/front/UserProducts.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/UserProduct.vue')
      },
      {
        path: 'favorite',
        name: '收藏清單',
        component: () => import('../views/front/UserFavorite.vue')
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/front/UserCart.vue')
      },
      {
        path: 'order',
        name: '交易紀錄',
        component: () => import('../views/front/UserOrder.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/front/UserCheckout.vue'),
        children: [
          {
            path: 'information',
            name: '結帳',
            component: () => import('../views/front/checkout/UserInfo.vue')
          },
          {
            path: 'check/:id',
            component: () => import('../views/front/checkout/UserCheck.vue')
          },
          {
            path: 'send/:id',
            component: () => import('../views/front/checkout/UserSend.vue')
          }
        ]
      },
      {
        path: 'reserve',
        name: '預約體驗',
        component: () => import('../views/front/UserReserve.vue')
      },
      {
        path: 'ReserveHistory',
        name: '預約紀錄',
        component: () => import('../views/front/ReserveHistory.vue')
      },
      {
        path: 'contact',
        name: '聯絡我們',
        component: () => import('../views/front/UserContact.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'order',
        component: () => import('../views/admin/AdminOrder.vue')
      },
      {
        path: 'article',
        component: () => import('../views/admin/AdminArticle.vue')
      },
      {
        path: 'reserve',
        component: () => import('../views/admin/AdminReserve.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/admin/AdminCoupon.vue')
      },
      {
        path: 'contact',
        component: () => import('../views/admin/AdminContact.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

// 判斷切換頁面時 scrollTop 按鈕是否存在，有就移除此 HTML 區塊避免複製
router.beforeEach((to, from, next) => {
  const scrollTopBtn = document.querySelector('#scrollTop')
  if (scrollTopBtn) {
    scrollTopBtn.remove(scrollTopBtn)
  }
  next()
})

export default router
