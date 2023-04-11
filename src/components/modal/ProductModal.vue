<template>
  <div
    ref="productModal"
    id="productModal"
    tabindex="-1"
    class="hidden fixed z-40 w-full px-4 overflow-x-hidden overflow-y-auto top-28 left-0 right-0 h-auto"
  >
    <div class="w-full max-w-7xl h-full max-h-[calc(100vh-8.5rem)]">
      <!-- Modal description -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b bg-black top-[6rem] w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] max-w-7xl z-50 rounded-t-lg fixed"
        >
          <h3 class="text-xl font-semibold text-gray-300">編輯商品</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="
              () => {
                productModal.hide();
                tempProduct.brand = ''; // 重置 watch tempProduct.brand
              }
            "
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
        <div class="p-6 grid grid-cols-3 gap-6 mt-12">
          <div class="col-span-1">
            <label for="mainImgLink" class="font-medium"
              >主要圖片 (輸入網址或上傳圖片)<span
                class="font-bold text-rose-500"
                >*</span
              ></label
            >
            <div class="relative mt-4">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="mainImgLink"
                class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                placeholder="請輸入圖片網址"
                required
                v-model.lazy="tempProduct.imageUrl"
              />
            </div>
            <UploadImg @change-img="changeImage">
              <!-- 清空 multi slot -->
              <template #multi><span /></template>
              <!-- 清空 detail slot -->
              <template #detail><span /></template>
            </UploadImg>
            <img
              :src="tempProduct.imageUrl"
              class="mt-4 w-full h-80 object-cover object-center"
              v-if="tempProduct.imageUrl"
            />
            <div class="mt-8 space-y-4">
              <h3 class="font-medium">多圖新增 (輸入網址或上傳圖片)</h3>
              <template v-for="(images, i) in tempProduct.imagesUrl" :key="i">
                <div class="relative mt-4">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="mainImgLink"
                    class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="請輸入圖片網址"
                    v-model.lazy="tempProduct.imagesUrl[i]"
                  />
                </div>
                <UploadImg :index="i" @change-img="changeImage">
                  <!-- 清空 main slot -->
                  <template #main><span /></template>
                  <!-- 清空 detail slot -->
                  <template #detail><span /></template>
                </UploadImg>
                <img
                  :src="tempProduct.imagesUrl[i]"
                  class="mt-4 w-full h-80 object-cover object-center"
                  v-if="tempProduct.imagesUrl[i]"
                />
                <button
                  type="button"
                  class="mt-4 admin-delete-button w-full"
                  @click="tempProduct.imagesUrl.splice(i, 1)"
                  v-if="!tempProduct.imagesUrl[i]"
                >
                  刪除區塊
                </button>
              </template>
              <button
                type="button"
                class="mt-4 admin-secondary-button w-full"
                @click="tempProduct.imagesUrl.push('')"
                v-if="
                  !tempProduct.imagesUrl?.length ||
                  tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                "
              >
                新增圖片
              </button>
            </div>
          </div>
          <div class="col-span-2 space-y-6">
            <div>
              <label for="name" class="block mb-2 font-medium"
                >商品名稱<span class="font-bold text-rose-500">*</span></label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
                v-model="tempProduct.title"
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="modalDistrict"
                  class="block mb-2 text-md font-medium text-gray-900"
                  >類別<span class="font-bold text-rose-500">*</span></label
                >
                <select
                  id="modalDistrict"
                  class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5"
                  v-model="tempProduct.category"
                >
                  <option value="" selected disabled>請選擇商品類別</option>
                  <option value="AR">AR (擴增實境)</option>
                  <option value="VR">VR (虛擬實境)</option>
                  <option value="MR">MR (混合實境)</option>
                  <option value="XR">XR (延展實境)</option>
                  <option value="配件">商品配件</option>
                </select>
              </div>
              <div>
                <label for="brand" class="block mb-2 font-medium"
                  >品牌<span class="font-bold text-rose-500">*</span></label
                >
                <input
                  type="text"
                  id="brand"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                  required
                  v-model.lazy="tempProduct.brand"
                  @change="changeAccessory()"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="origin_price" class="block mb-2 font-medium"
                  >原價<span class="font-bold text-rose-500">*</span></label
                >
                <input
                  type="number"
                  id="origin_price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                  min="1"
                  required
                  v-model.lazy="tempProduct.origin_price"
                />
              </div>
              <div>
                <label for="price" class="block mb-2 font-medium"
                  >售價 (請先輸入原價)<span class="font-bold text-rose-500"
                    >*</span
                  ></label
                >
                <input
                  type="number"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                  min="1"
                  required
                  v-model.lazy="tempProduct.price"
                />
              </div>
            </div>
            <div>
              <label for="spec" class="font-medium">商品規格</label>
              <div class="grid grid-cols-6 gap-1 mt-2">
                <div
                  class="relative"
                  v-for="(item, i) in tempProduct.spec"
                  :key="i"
                >
                  <div class="border rounded">
                    <input
                      type="text"
                      class="w-[calc(100%-1.9rem)] rounded-l-lg text-sm border-gray-300 focus:ring-violet-300"
                      id="spec"
                      v-model="tempProduct.spec[i]"
                      placeholder="請輸入規格"
                    />
                    <button
                      type="button"
                      class="absolute w-8 top-0 right-0 px-3 py-2 admin-delete-solid-button rounded-l-none rounded-r-lg border text-sm"
                      @click="tempProduct.spec.splice(i, 1)"
                    >
                      <font-awesome-icon :icon="['fas', 'xmark']" />
                    </button>
                  </div>
                </div>
                <div
                  v-if="
                    !tempProduct.spec?.length ||
                    tempProduct.spec[tempProduct.spec.length - 1]
                  "
                >
                  <button
                    type="button"
                    class="admin-secondary-solid-button w-full py-2"
                    @click="tempProduct.spec.push('')"
                  >
                    新增規格
                  </button>
                </div>
              </div>
            </div>
            <div v-if="tempProduct.category != '配件'">
              <label class="typo__label">選擇配件</label>
              <multiselect
                v-model="tempProduct.accessory"
                label="name"
                track-by="id"
                :multiple="true"
                :placeholder="accessoryPlaceholder"
                :options="accessoryOptions"
                :disabled="accessoryDisable"
                class="mt-2"
              ></multiselect>
            </div>
            <div>
              <h3 for="message" class="mb-2 font-medium text-gray-900">
                商品功能簡介
              </h3>
              <ckeditor
                :editor="editor"
                :config="editorConfig"
                v-model="tempProduct.description"
              ></ckeditor>
            </div>
            <div>
              <h3 for="message" class="mb-2 font-medium text-gray-900">
                商品詳細內容
              </h3>
              <ckeditor
                :editor="editor"
                :config="detailConfig"
                v-model="tempProduct.content"
              ></ckeditor>
            </div>
            <div class="mt-8 space-y-4">
              <h3 class="font-medium">商品詳細內容圖庫</h3>
              <div class="grid grid-cols-4 gap-3">
                <div v-for="(images, i) in tempProduct.contentImages" :key="i">
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 text-gray-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="mainImgLink"
                      class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="請輸入圖片網址"
                      v-model.lazy="tempProduct.contentImages[i]"
                    />
                  </div>
                  <UploadImg :index="i" @change-img="changeImage">
                    <!-- 清空 main slot -->
                    <template #main><span /></template>
                    <!-- 清空 multi slot -->
                    <template #multi><span /></template>
                  </UploadImg>
                  <img
                    :src="tempProduct.contentImages[i]"
                    class="mt-4 w-full h-36 object-cover object-center rounded"
                    v-if="tempProduct.contentImages[i]"
                  />
                  <button
                    type="button"
                    class="mt-4 admin-delete-button w-full"
                    @click="tempProduct.contentImages.splice(i, 1)"
                    v-if="!tempProduct.contentImages[i]"
                  >
                    刪除區塊
                  </button>
                </div>
                <button
                  type="button"
                  class="admin-secondary-button w-full h-11"
                  @click="tempProduct.contentImages.push('')"
                  v-if="
                    !tempProduct.contentImages?.length ||
                    tempProduct.contentImages[
                      tempProduct.contentImages.length - 1
                    ]
                  "
                >
                  新增圖片
                </button>
              </div>
            </div>
            <div
              class="pt-4 flex justify-between items-center border-t-2 border-gray-300"
            >
              <div class="flex">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="sr-only peer"
                    :true-value="1"
                    :false-value="0"
                    :checked="tempProduct.is_enabled"
                    v-model="tempProduct.is_enabled"
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
                  ></div>
                  <span class="ml-3 text-md font-medium text-gray-900"
                    >上架商品</span
                  >
                </label>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  class="admin-delete-button"
                  @click="
                    () => {
                      productModal.hide();
                      tempProduct.brand = ''; // 重置 watch tempProduct.brand
                    }
                  "
                >
                  取消
                </button>
                <button
                  type="button"
                  class="ml-6 admin-primary-button"
                  :disabled="
                    !tempProduct.imageUrl ||
                    !tempProduct.title ||
                    !tempProduct.brand ||
                    !tempProduct.category ||
                    !tempProduct.origin_price ||
                    !tempProduct.price
                  "
                  :title="[
                    !tempProduct.imageUrl ||
                    !tempProduct.title ||
                    !tempProduct.brand ||
                    !tempProduct.category ||
                    !tempProduct.origin_price ||
                    !tempProduct.price
                      ? '&quot;*&quot;號為必填欄位'
                      : '',
                  ]"
                  @click="updateProduct()"
                >
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UploadImg from "@/components/UploadImg.vue";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Modal } from "flowbite";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";

import swalMixin from "@/mixins/swal.js";

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  props: ["page", "accessories"],
  mixins: [swalMixin],
  data() {
    return {
      isNew: true,
      tempProduct: {},
      isNewAccessory: false,
      accessoryPlaceholder: "",
      accessoryDisable: false,
      accessoryOptions: [],
      // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html#editor
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          "heading",
          "bold",
          "italic",
          "|",
          "undo",
          "redo",
          "|",
          "numberedList",
          "bulletedList",
          "|",
          "link",
        ],
      },
      detailConfig: {
        toolbar: [
          "heading",
          "bold",
          "italic",
          "|",
          "undo",
          "redo",
          "|",
          "numberedList",
          "bulletedList",
          "outdent",
          "indent",
          "|",
          "link",
          "insertTable",
        ],
      },
    };
  },
  methods: {
    openModal(type, item) {
      if (type === "new") {
        this.isNew = true;
        this.tempProduct = {
          imagesUrl: [],
          category: "",
          unit: "件",
          spec: [],
          accessory: [],
          contentImages: [],
          is_enabled: 0,
        };
        this.productModal.show();
      } else {
        this.isNewAccessory = true; // 避免 watch tempProduct.brand 清空
        this.isNew = false;
        this.tempProduct = { ...item };
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = [];
        }
        if (!this.tempProduct.spec) {
          this.tempProduct.spec = [];
        }
        if (!this.tempProduct.accessory) {
          this.tempProduct.accessory = [];
        }
        if (!this.tempProduct.contentImages) {
          this.tempProduct.contentImages = [];
        }

        this.productModal.show();
      }
      // modal 移到最上方
      this.$refs.productModal.scrollTop = 0;
      this.changeAccessory();
    },
    // 更新產品資料
    updateProduct() {
      let httpVerb = "post";
      let url = `${VITE_API}/api/${VITE_PATH}/admin/product`;

      if (!this.isNew) {
        httpVerb = "put";
        url = `${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
      }

      this.loadings.fullLoading = true;
      this.$http[httpVerb](url, {
        data: this.tempProduct,
      })
        .then(() => {
          // console.log(res.data);
          this.$emit("updateProducts", this.page, "update");
          this.productModal.hide();
          this.tempProduct.brand = ""; // 重置 watch tempProduct.brand
        })
        .catch((err) => {
          // console.log(err);
          // Swal
          this.adminToast("error", err.response.data.message);
        });
    },
    // 判斷上傳到主要圖片、多圖區塊或詳細內容圖庫
    changeImage(index, target, imgUrl) {
      // console.log(index, target, imgUrl);
      if (target === "imageUrl") {
        this.tempProduct[target] = imgUrl;
      } else if (target === "imagesUrl") {
        this.tempProduct[target][index] = imgUrl;
      } else {
        this.tempProduct[target][index] = imgUrl;
      }
      // 主要圖片變更之外 modal 移到最下方
      if (target !== "imageUrl") {
        this.$refs.productModal.scrollTo({
          top: this.$refs.productModal.scrollHeight,
          // behavior: "smooth",
        });
      }
    },
    changeAccessory() {
      this.accessoryOptions = [];
      this.accessories.forEach((item) => {
        if (
          item.brand.toLowerCase() === this.tempProduct.brand?.toLowerCase()
        ) {
          this.accessoryOptions.push({ id: item.id, name: item.title });
        }
      });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  watch: {
    "tempProduct.brand"() {
      // 確認配件是否存在
      this.tempProduct.accessory.forEach((item, i) => {
        if (!this.accessories.some((data) => data.id === item.id)) {
          this.tempProduct.accessory.splice(i, 1);
          // 判斷 modal 是否為開啟狀態 (開啟 modal 才會傳入 accessories)
          if (this.accessories.length > 0) {
            this.adminAlert(
              "warning",
              "請更新商品",
              "已刪除不存在的配件，請記得點擊確認更新商品資訊！"
            );
          }
        }
      });
      // 如果有在 modal 變更 brand，將清空 accessory
      if (!this.isNewAccessory) {
        this.tempProduct.accessory = [];
      }
      this.isNewAccessory = false;
    },
    tempProduct: {
      handler() {
        if (!this.tempProduct.brand || !this.tempProduct.category) {
          this.accessoryPlaceholder = "請先輸入品牌及類別";
          this.accessoryDisable = true;
        } else {
          this.accessoryPlaceholder = "關鍵字搜尋";
          this.accessoryDisable = false;
        }

        if (this.tempProduct.origin_price < 1) {
          this.tempProduct.origin_price = null;
        }
        if (this.tempProduct.price > this.tempProduct.origin_price) {
          this.tempProduct.price = this.tempProduct.origin_price;
        }
      },
      deep: true,
      // immediate: true,
    },
  },
  mounted() {
    // modal options
    const modalOptions = {
      placement: "center",
      backdrop: "static",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
      closable: true,
    };
    this.productModal = new Modal(this.$refs.productModal, modalOptions);
  },
  components: {
    UploadImg,
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>
/* CKEditor */
.ck-editor__editable_inline {
  min-height: 300px;
}
.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
  --tw-border-opacity: 1;
  border-color: rgb(6 148 162 / var(--tw-border-opacity));
}
/* multiselect */
.typo__label {
  font-weight: 500;
}
.multiselect__tags {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.multiselect__content {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-radius: 0.25rem /* 4px */;
  --tw-border-opacity: 1;
  border-color: rgb(6 148 162 / var(--tw-border-opacity));
}
.multiselect--active:not(.multiselect--above) .multiselect__current,
.multiselect--active:not(.multiselect--above) .multiselect__input,
.multiselect--active:not(.multiselect--above) .multiselect__tags {
  border-radius: 3px;
  border-radius: 3px;
  border-color: teal;
}
[type="text"]:focus,
[type="email"]:focus,
[type="url"]:focus,
[type="password"]:focus,
[type="number"]:focus,
[type="date"]:focus,
[type="datetime-local"]:focus,
[type="month"]:focus,
[type="search"]:focus,
[type="tel"]:focus,
[type="time"]:focus,
[type="week"]:focus,
[multiple]:focus,
textarea:focus,
select:focus {
  --tw-ring-color: transparent;
}
.multiselect {
  border-radius: 0.5rem /* 8px */;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.multiselect__placeholder {
  color: #6b7285;
}
.multiselect--disabled {
  opacity: 1;
}
</style>
