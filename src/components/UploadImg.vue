<template>
  <slot name="main">
    <div class="mt-4 flex w-full">
      <label
        for="file"
        class="whitespace-nowrap admin-secondary-solid-button w-full cursor-pointer"
        >上傳圖片</label
      >
      <input
        id="file"
        type="file"
        accept="image/png, image/jpeg"
        class="absolute top-0 w-0"
        @change="(e) => handleFile(e, 'imageUrl')"
      />
    </div>
  </slot>
  <slot name="multi">
    <div class="mt-4 flex w-full">
      <label
        :for="`file${index}`"
        class="whitespace-nowrap admin-secondary-solid-button w-full cursor-pointer"
        >上傳圖片</label
      >
      <input
        :id="`file${index}`"
        type="file"
        accept="image/png, image/jpeg"
        class="absolute top-0 w-0"
        @change="(e) => handleFile(e, 'imagesUrl', index)"
      />
    </div>
  </slot>
  <slot name="detail">
    <div class="mt-4 flex w-full">
      <label
        :for="`fileDetail${index}`"
        class="whitespace-nowrap admin-secondary-solid-button w-full cursor-pointer"
        >上傳圖片</label
      >
      <input
        :id="`fileDetail${index}`"
        type="file"
        accept="image/png, image/jpeg"
        class="absolute top-0 w-0"
        @change="(e) => handleFile(e, 'contentImages', index)"
      />
    </div>
  </slot>
</template>

<script>
import swalMixin from '@/mixins/swal.js'

import { mapState } from 'pinia'
import loadingStore from '@/stores/loadingStore.js'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  props: ['index'],
  emits: ['changeImg'],
  mixins: [swalMixin],
  methods: {
    // 上傳圖片
    handleFile (event, target, index) {
      // console.log(event, target, index);
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      if (file) {
        this.loadings.fullLoading = true
        this.$http
          .post(`${VITE_API}/api/${VITE_PATH}/admin/upload`, formData)
          .then((res) => {
            // console.log(res.data);
            this.loadings.fullLoading = false
            const imgUrl = res.data.imageUrl
            this.$emit('changeImg', index, target, imgUrl)
          })
          .catch((err) => {
            // console.log(err);
            this.loadings.fullLoading = false
            // Swal
            this.adminAlert('error', '圖片上傳失敗', err.response.data.message)
          })
      }
    }
  },
  computed: {
    ...mapState(loadingStore, ['loadings'])
  }
}
</script>
