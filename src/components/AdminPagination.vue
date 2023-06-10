<template>
  <ul class="inline-flex items-center -space-x-px">
    <li>
      <a
        href="#"
        class="block px-1.5 py-2 leading-tight border rounded-l-lg border-gray-300"
        :class="[
          !pageObj.has_pre
            ? 'pointer-events-none bg-gray-50 text-gray-300'
            : 'bg-white text-gray-600 hover:bg-teal-400 hover:text-white',
        ]"
        @click.prevent="changePage(pageObj.current_page - 1)"
      >
        <span class="sr-only">Previous</span>
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </li>
    <li v-for="page in pageObj.total_pages" :key="page">
      <a
        href="#"
        class="px-3 py-1.5 leading-tight border border-gray-300"
        :class="[
          page === pageObj.current_page
            ? 'pointer-events-none bg-teal-500 text-white'
            : 'bg-white text-gray-600 hover:bg-teal-400 hover:text-white',
        ]"
        @click.prevent="changePage(page)"
      >
        {{ page }}</a
      >
    </li>
    <li>
      <a
        href="#"
        class="block px-1.5 py-2 leading-tight border rounded-r-lg border-gray-300"
        :class="[
          !pageObj.has_next
            ? 'pointer-events-none bg-gray-50 text-gray-300'
            : 'bg-white text-gray-600 hover:bg-teal-400 hover:text-white',
        ]"
        @click.prevent="changePage(pageObj.current_page + 1)"
      >
        <span class="sr-only">Next</span>
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: { pageObj: Object },
  emits: ['emitPage'],
  methods: {
    changePage (page) {
      this.$emit('emitPage', page)
    }
  }
}
</script>
