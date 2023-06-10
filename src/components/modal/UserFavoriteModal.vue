<template>
  <div
    ref="favoriteModal"
    id="favoriteModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-8 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full max-h-[calc(100vh-3rem)]"
  >
    <div class="w-full h-full max-w-2xl">
      <!-- Modal content -->
      <div class="rounded-lg overflow-hidden shadow bg-dark">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border rounded-t-lg border-gray-600 bg-black fixed top-5 w-[calc(100%-2rem)] md:w-full max-w-2xl z-50"
        >
          <h3 class="text-lg md:text-xl font-semibold text-white">
            請選擇商品加入購物車
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
            @click="favoriteModal.hide()"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="px-4 pt-6">
          <div
            v-for="(item, i) in favorites"
            :key="item.id"
            class="py-8 grid grid-cols-4 gap-6"
            :class="{ 'border-t': i > 0 }"
          >
            <img
              :src="item.imageUrl"
              :alt="item.title"
              class="hidden md:flex self-center w-full h-28 object-cover rounded bg-white"
            />
            <div
              class="col-span-full md:col-span-3 flex flex-col justify-between"
            >
              <div>
                <div class="flex justify-between items-center">
                  <h2 class="text-lg lg:text-xl">{{ item.brand }}</h2>
                  <select
                    :id="`spec${i}`"
                    class="border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary"
                    v-if="item.spec"
                    v-model="cart_specs[i]"
                  >
                    <option selected disabled value="" class="bg-dark/10">
                      選擇規格
                    </option>
                    <option
                      v-for="(spec, i) in item.spec"
                      :key="i"
                      :value="spec"
                      class="bg-dark/10"
                    >
                      {{ spec }}
                    </option>
                  </select>
                </div>
                <h3 class="text-xl lg:text-2xl mt-6">{{ item.title }}</h3>
              </div>
              <div>
                <div class="xs:flex justify-between items-center mt-6">
                  <h5 class="text-lg lg:text-xl">
                    售價：<span class="font-bold"
                      >NT$ {{ $filters.currency(item.price) }}</span
                    >
                  </h5>
                  <button
                    type="button"
                    class="mt-4 xs:mt-0 primary-button sm:ml-3"
                    :disabled="
                      (item.spec && !cart_specs[i]) ||
                      cartLoading.cartId === item.id
                    "
                    @click="moveToCart(item, cart_specs[i])"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import flowbite components
import { Modal } from 'flowbite'

import favoriteStore from '@/stores/favoriteStore.js'
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'

import swalMixin from '@/mixins/swal.js'

export default {
  mixins: [swalMixin],
  methods: {
    openModal () {
      this.favoriteModal.show()
    },
    moveToCart (favorite, spec) {
      if (
        this.cart.carts.some((item) => {
          return item.product_id === favorite.id
        })
      ) {
        // Swal
        this.userToast('warning', '此商品已在購物車')
      } else {
        this.addCart(favorite, 1, spec)
      }
    },
    ...mapActions(favoriteStore, ['getFavorite', 'updateFavorite']),
    ...mapActions(cartStore, ['addCart'])
  },
  computed: {
    ...mapState(favoriteStore, ['favorites', 'cart_specs']),
    ...mapState(cartStore, ['cartLoading', 'cart'])
  },
  mounted () {
    // modal options
    const modalOptions = {
      placement: 'top-center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-black bg-opacity-80 fixed inset-0 z-40',
      closable: true
    }
    this.favoriteModal = new Modal(this.$refs.favoriteModal, modalOptions)
  }
}
</script>
