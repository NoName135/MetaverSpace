<template>
  <!-- product table -->
  <div class="mt-8 px-6">
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-700">
        <thead class="text-sm text-dark uppercase bg-gray-300">
          <tr>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">姓名</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">電話</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">Email</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">
              <span class="sr-only">選項</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b hover:bg-teal-100"
            v-for="contact in contacts"
            :key="contact.id"
          >
            <td class="px-6 py-4 whitespace-nowrap">{{ contact.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ contact.tel }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ contact.email }}</td>
            <td
              class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
            >
              <button
                type="button"
                class="admin-secondary-button px-3.5 py-1.5"
                @click="contactModal.openModal(contact)"
              >
                檢視
              </button>
              <button
                type="button"
                class="admin-delete-button px-3.5 py-1.5"
                @click="deleteModal.openModal('留言', contact)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination class="mt-8" :page-obj="pagination" @emit-page="getContacts" />
  </div>
  <!-- contact modal -->
  <ContactModal
    ref="contactModal"
    :page="pagination.current_page"
  ></ContactModal>
  <!-- delete modal -->
  <DeleteModal
    ref="deleteModal"
    :page="
      contacts.length > 1
        ? pagination.current_page
        : pagination.current_page - 1
    "
    @update-contacts="getContacts"
  />
</template>

<script>
import Pagination from '@/components/AdminPagination.vue'
import ContactModal from '@/components/modal/ContactModal.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'

import loadingStore from '@/stores/loadingStore.js'

import { mapState } from 'pinia'

import swalMixin from '@/mixins/swal.js'

const { VITE_RENDER_API } = import.meta.env

export default {
  mixins: [swalMixin],
  data () {
    return {
      allContacts: [],
      contacts: [],
      pagination: {},
      titleBranch: ''
    }
  },
  methods: {
    getContacts (page = 1, process) {
      this.loadings.fullLoading = true
      this.$http
        .get(`${VITE_RENDER_API}/contacts`)
        .then((res) => {
          this.allContacts = res.data.sort((a, b) => b.id - a.id)
          this.filterContacts(page)

          this.loadings.fullLoading = false

          if (process === 'delete') {
            // SWal
            this.adminToast('success', '已刪除預約資料')
          }
        })
        .catch((err) => {
          this.loadings.fullLoading = false
          this.userToast('error', err.message)
        })
    },
    filterContacts (page = 1) {
      this.contacts = this.allContacts.filter(
        (item, i) => Math.ceil((i + 1) / 10) == page
      )
      // 頁碼物件處理
      const totalPages = Math.ceil(this.allContacts.length / 10)
      this.pagination = {
        total_pages: totalPages,
        current_page: page,
        has_pre: page !== 1,
        has_next: page !== totalPages
      }
      // 點擊頁碼後移動到上方
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    ...mapState(loadingStore, ['loadings'])
  },
  mounted () {
    this.contactModal = this.$refs.contactModal
    this.deleteModal = this.$refs.deleteModal
    this.getContacts()
  },
  components: {
    Pagination,
    ContactModal,
    DeleteModal
  }
}
</script>
