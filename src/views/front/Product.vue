<template>
  <div class="mt-nav">
    <!-- 加入購物車區塊 -->
    <div
      class="container grid grid-cols-1 lg:grid-cols-2 gap-7 pt-8 px-2 md:px-0"
    >
      <!-- 圖片區塊 -->
      <div>
        <img
          :src="targetImage"
          class="h-[240px] sm:h-[360px] xl:h-[480px] object-contain mx-auto"
          alt=""
        />
        <swiper
          ref="productSwiper"
          :slidesPerView="3"
          :breakpoints="{
            480: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
          }"
          :spaceBetween="30"
          :navigation="true"
          :modules="productModules"
          class="productSwiper mt-6 px-12"
        >
          <swiper-slide v-for="image in images" :key="image.id">
            <div class="cursor-pointer" @click="changeImg(image.img)">
              <img
                class="h-20 object-contain mx-auto"
                :src="image.img"
                alt=""
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 產品簡介 -->
      <section>
        <div class="flex items-center">
          <h4 class="col-span-2 text-2xl mr-3">Meta</h4>
          <div class="bg-white/30 px-3.5 py-2 rounded text-sm">VR</div>
        </div>
        <h3 class="mt-2 text-3xl font-bold">Oculus Quest 2 256G</h3>
        <div class="mt-3 text-lg">
          <ul class="leading-loose">
            <li>■ 硬體全面升級 輕鬆設定 安全使用</li>
            <li>■ 雙眼皆提供 1832 x 1920 解析度</li>
            <li>■ 支援 60、72、90 Hz 更新率</li>
            <li>■ 定位音訊3D 定位音效 3.5mm 音訊插孔</li>
            <li>■ 與朋友創造更精采的VR生活</li>
            <li>■ 相容眼鏡 遊戲、健身、娛樂更多樂趣及中在一起</li>
            <li>■ ⚡原廠公司貨 一年保固⚡</li>
          </ul>
        </div>
        <div class="flex justify-between items-center mt-6">
          <div class="flex items-end">
            <p class="text-primary text-2xl font-bold">NT$ 17,500</p>
            <p class="ml-2 line-through">NT$ 17,900</p>
          </div>
          <div class="flex items-center cursor-pointer hover:text-primary2">
            <font-awesome-icon :icon="['fas', 'heart']" class="text-2xl" />
            <p class="ml-2 hidden sm:block text-xl">未加入收藏</p>
          </div>
        </div>
        <div class="flex flex-wrap items-center mt-8">
          <h5 class="text-lg mr-4 mb-6">規格：</h5>
          <ul class="flex flex-wrap text-sm">
            <li class="mb-6">
              <input
                type="radio"
                id="spec1"
                name="spec"
                value=""
                class="hidden peer"
                required=""
              />
              <label
                for="spec1"
                class="mr-3 bg-black hover:bg-primary2 peer-checked:bg-primary peer-checked:hover:bg-primary2 peer-checked:ring-1 peer-checked:ring-white px-3 py-2 rounded cursor-pointer"
              >
                黑色
              </label>
            </li>
            <li class="mb-6">
              <input
                type="radio"
                id="spec2"
                name="spec"
                value=""
                class="hidden peer"
                required=""
              />
              <label
                for="spec2"
                class="mr-3 bg-black hover:bg-primary2 peer-checked:bg-primary peer-checked:hover:bg-primary2 peer-checked:ring-1 peer-checked:ring-white px-3 py-2 rounded cursor-pointer"
              >
                白色
              </label>
            </li>
          </ul>
        </div>
        <div class="sm:flex items-center mt-2">
          <div class="flex items-center">
            <div class="flex">
              <button
                type="button"
                class="bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm"
              >
                －
              </button>
              <input
                type="number"
                class="w-12 bg-dark text-sm text-end focus:border-secondary"
                min="1"
                max="99"
                value="1"
              />
              <button
                type="button"
                class="bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm"
              >
                ＋
              </button>
            </div>
            <p class="ml-2 mr-4 whitespace-nowrap">還剩 10 件</p>
          </div>
          <button
            type="button"
            class="w-full primary-button sm:ml-2 mt-4 sm:mt-0"
            @click="productModal.hide()"
          >
            加入購物車
          </button>
        </div>
      </section>
    </div>
    <!-- 加購區塊 -->
    <div class="mt-8 bg-black/50 px-2 md:px-0">
      <div class="container py-8">
        <h3 class="text-xl font-bold pb-3 border-b">加購配件</h3>
        <div class="flex flex-wrap mt-4 px-2">
          <div class="border rounded w-64 mt-6 mx-3">
            <div class="bg-white">
              <img
                src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.8562-6/272188674_294895389338070_4390989989588038235_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6825c5&_nc_ohc=rVjRjWDBvQkAX_evmTx&_nc_ht=scontent-tpe1-1.xx&oh=00_AfA3fq5Rygz94wmIb7sJ3V5WMVJqoFn63JvYcswCEYK5xw&oe=6411F47B"
                alt=""
                class="w-full h-48 object-contain object-center"
              />
            </div>
            <div class="flex flex-col px-2 py-4 h-[calc(100%-192px)]">
              <h4 class="text-lg font-bold">Meta Quest 2 收納盒</h4>
              <p class="mt-4 text-md">
                無論是在家中存放或攜帶外出，隨時助您保護遊戲系統。
              </p>
              <div class="flex-auto flex flex-col justify-end">
                <div class="flex">
                  <select
                    id="accessorySpec1"
                    class="mt-6 border text-sm rounded w-full p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected disabled>選擇規格</option>
                    <option value="黑色">黑色</option>
                    <option value="白色">白色</option>
                  </select>
                  <select
                    id="accessoryNum1"
                    class="ml-1 mt-6 border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div class="flex justify-between items-end mt-4">
                  <div class="flex items-center">
                    <input
                      id="accessoryCheck1"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-primary rounded focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                    />
                    <label
                      for="accessoryCheck1"
                      class="ml-2 text-sm font-medium text-white"
                      >加購</label
                    >
                  </div>
                  <p class="text-xl font-bold text-primary">NT$ 1,899</p>
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded w-64 mt-6 mx-3">
            <div class="bg-white">
              <img
                src="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.8562-6/310594663_8088305627909132_8783615667161731967_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6825c5&_nc_ohc=FT_D8TLB8kAAX92TguT&_nc_ht=scontent.frmq2-2.fna&oh=00_AfBFLfRyYp2tyeG06tuy3Tess4GU7YNfxDpff1TfAoH5Ug&oe=6411AB49"
                alt=""
                class="w-full h-48 object-contain object-center"
              />
            </div>
            <div class="flex flex-col px-2 py-4 h-[calc(100%-192px)]">
              <h4 class="text-lg font-bold">Link 連接線</h4>
              <p class="mt-4 text-md">
                只要將連接線從電腦連接到 Meta Quest
                頭戴式裝置，就能在遊玩時存取最強的電腦 VR 遊戲。
              </p>
              <div class="flex-auto flex flex-col justify-end">
                <div class="flex">
                  <select
                    id="accessorySpec2"
                    class="mt-6 border text-sm rounded w-full p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected disabled>選擇規格</option>
                    <option value="黑色">黑色</option>
                    <option value="白色">白色</option>
                  </select>
                  <select
                    id="accessoryNum2"
                    class="ml-1 mt-6 border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div class="flex justify-between items-end mt-4">
                  <div class="flex items-center">
                    <input
                      id="accessoryCheck2"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-primary rounded focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                    />
                    <label
                      for="accessoryCheck2"
                      class="ml-2 text-sm font-medium text-white"
                      >加購</label
                    >
                  </div>
                  <p class="text-xl font-bold text-primary">NT$ 2,499</p>
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded w-64 mt-6 mx-3">
            <div class="bg-white">
              <img
                src="https://scontent.frmq2-2.fna.fbcdn.net/v/t39.8562-6/300570751_1210718196387794_597323196944757362_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6825c5&_nc_ohc=ABppkcQBAXgAX8LfpWs&_nc_ht=scontent.frmq2-2.fna&oh=00_AfDz2PIhtUDLVeCicqmboFmXwJHpEFATzX8lQNKk15jGgQ&oe=6412B2DE"
                alt=""
                class="w-full h-48 object-contain object-center"
              />
            </div>
            <div class="flex flex-col px-2 py-4 h-[calc(100%-192px)]">
              <h4 class="text-lg font-bold">Meta Quest Pro 全方位遮光罩</h4>
              <p class="mt-4 text-md">
                全方位遮光臉部靠墊可輕鬆吸附在 Meta Quest Pro
                上，讓用戶享有更身歷其境的體驗。
              </p>
              <div class="flex-auto flex flex-col justify-end">
                <div class="flex">
                  <select
                    id="accessorySpec3"
                    class="mt-6 border text-sm rounded w-full p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected disabled>選擇規格</option>
                    <option value="黑色">黑色</option>
                    <option value="白色">白色</option>
                  </select>
                  <select
                    id="accessoryNum3"
                    class="ml-1 mt-6 border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div class="flex justify-between items-end mt-4">
                  <div class="flex items-center">
                    <input
                      id="accessoryCheck3"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-primary rounded focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                    />
                    <label
                      for="accessoryCheck3"
                      class="ml-2 text-sm font-medium text-white"
                      >加購</label
                    >
                  </div>
                  <p class="text-xl font-bold text-primary">NT$ 1,599</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品詳細區塊 -->
    <div class="px-2 md:px-0">
      <div class="container py-8">
        <h3 class="text-xl font-bold pb-3 border-b">商品詳細資訊</h3>
        <p class="mt-4 leading-loose">
          【使用注意】<br />升級系統時千萬不要中斷或者關機重啟，以免死機。<br />Quest
          2需要您的Facebook帳戶才能登錄，從而可以輕鬆與VR中的朋友見面並發現世界各地的社區<br />簡易設置-只需打開盒子，使用智能手機應用進行設置，然後跳入VR。無需PC或控制台。需要無線互聯網訪問和Oculus應用（免費下載）才能設置設備<br />若要用steam
          VR遊戲，也要先確認自己的電腦設備夠不夠新，否則會有與裝置不相容無法玩的問題發生。
        </p>
        <img
          src="https://img1.momoshop.com.tw/expertimg/0010/482/084/mobile/87b51e6e859cdbd02aa2787b01365f9bca4bb1ab_800x448.jpeg?t=1663756505621"
          alt=""
          class="mt-4"
        />
        <img
          src="https://img1.momoshop.com.tw/expertimg/0010/482/084/mobile/5005b6e1f405c9f8fc563541bdf5bb3cf087f41b_800x450.jpeg?t=1663756505621"
          alt=""
          class="mt-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import Swiper required modules
import { Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  data() {
    return {
      productModules: [Navigation],
      targetImage: "",
      images: [
        {
          id: 0,
          img: "https://img1.momoshop.com.tw/expertimg/0010/482/084/mobile/ffo.jpg?t=1663756505621",
        },
        {
          id: 1,
          img: "https://img1.momoshop.com.tw/expertimg/0010/482/084/mobile/oculus01-750.jpg?t=1663756505621",
        },
        {
          id: 2,
          img: "https://img1.momoshop.com.tw/expertimg/0010/482/084/mobile/001.jpg?t=1663756505621",
        },
        {
          id: 3,
          img: "https://img1.momoshop.com.tw/expertimg/0010/482/084/mobile/002.jpg?t=1663756505621",
        },
        {
          id: 4,
          img: "https://img1.momoshop.com.tw/expertimg/0010/482/084/mobile/003.jpg?t=1663756505621",
        },
        {
          id: 5,
          img: "https://img1.momoshop.com.tw/expertimg/0010/482/084/mobile/004.jpg?t=1663756505621",
        },
        {
          id: 6,
          img: "https://img1.momoshop.com.tw/expertimg/0010/482/084/mobile/ds.jpg?t=1663756505621",
        },
      ],
    };
  },
  methods: {
    changeImg(img) {
      this.targetImage = img;
    },
  },
  mounted() {
    this.targetImage = this.images[0].img;
  },
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon,
  },
};
</script>
