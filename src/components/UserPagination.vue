<template>
  <ul class="inline-flex items-center -space-x-px">
    <li>
      <a
        href="#"
        class="block px-2 py-2 leading-tight border rounded-l-lg border-primary2"
        :class="[
          !pageObj.has_pre
            ? 'pointer-events-none bg-gray-600 text-gray-500'
            : 'bg-primary3 text-gray-400 hover:bg-primary2 hover:text-white',
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
        class="px-3 py-1.5 leading-tight border border-primary2"
        :class="[
          page === pageObj.current_page
            ? 'pointer-events-none bg-primary text-dark'
            : 'bg-primary3 text-white hover:bg-primary2',
        ]"
        @click.prevent="changePage(page)"
      >
        {{ page }}</a
      >
    </li>
    <li>
      <a
        href="#"
        class="block px-2 py-2 leading-tight border rounded-r-lg border-primary2"
        :class="[
          !pageObj.has_next
            ? 'pointer-events-none bg-gray-600 text-gray-500'
            : 'bg-primary3 text-gray-400 hover:bg-primary2 hover:text-white',
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
  emits: ["emitPage"],
  methods: {
    changePage(page) {
      this.$emit("emitPage", page);
    },
  },
};
</script>
