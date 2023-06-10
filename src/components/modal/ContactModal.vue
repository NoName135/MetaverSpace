<template>
  <div
    ref="contactModal"
    id="contactModal"
    tabindex="-1"
    class="hidden fixed z-40 w-full px-4 overflow-x-hidden overflow-y-auto top-28 left-0 right-0 h-auto"
  >
    <div class="w-full max-w-2xl h-full max-h-[calc(100vh-8.5rem)]">
      <!-- Modal content -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b bg-black top-[6rem] w-[calc(100%-2rem)] max-w-2xl z-50 rounded-t-lg fixed"
        >
          <h3 class="text-xl font-semibold text-gray-300">檢視留言</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="contactModal.hide()"
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
        <div class="p-6 mt-12">
          <div class="w-full max-w-xl mx-auto space-y-6">
            <div>
              <h2 class="text-lg">
                姓名：<span class="ml-6">{{ tempContact.name }}</span>
              </h2>
            </div>
            <div>
              <h2 class="text-lg">
                電話：<span class="ml-6">{{ tempContact.tel }}</span>
              </h2>
            </div>
            <div>
              <h2 class="text-lg">
                Email：<span class="ml-4">{{ tempContact.email }}</span>
              </h2>
            </div>
            <div v-if="tempContact.images?.length">
              <h2 class="text-lg">圖片檢視</h2>
              <ul class="grid grid-cols-5 gap-3">
                <li
                  v-for="(image, i) in tempContact.images"
                  :key="i"
                  class="mt-4"
                >
                  <button
                    type="button"
                    class="admin-secondary-button w-full py-2 relative"
                  >
                    <a :href="image.src" target="_blank">
                      <FontAwesomeIcon
                        :icon="['fas', 'arrow-up-right-from-square']"
                        class="absolute top-1 right-1 text-md"
                      />
                      查看圖片
                    </a>
                  </button>
                  <img
                    :src="image.src"
                    class="w-full h-28 object-cover rounded-sm mt-2"
                    :alt="`上傳的圖片${i}`"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-lg">遇到的問題：</h2>
              <p class="mt-2 text-md">{{ tempContact.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "flowbite";

export default {
  data() {
    return {
      tempContact: {},
    };
  },
  methods: {
    openModal(contact) {
      this.tempContact = { ...contact };
      this.contactModal.show();
    },
  },
  mounted() {
    // modal options
    const modalOptions = {
      placement: "center",
      backdrop: "dynamic",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
      closable: true,
    };
    this.contactModal = new Modal(this.$refs.contactModal, modalOptions);
  },
};
</script>
