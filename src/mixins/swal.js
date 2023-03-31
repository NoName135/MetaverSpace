export default {
  methods: {
    adminAlert(icon, title, text) {
      this.$swal.fire({
        icon,
        title,
        text,
        confirmButtonColor: "#0694A2",
      });
    },
    adminToast(icon, title) {
      this.$swal.fire({
        icon,
        title,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
        customClass: {
          timerProgressBar: "admin-progress-bar",
        },
      });
    },
  },
};
