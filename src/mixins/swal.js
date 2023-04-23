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
          timerProgressBar: "admin-progress-bar", // all.scss 變更 progress-bar color
          popup: "admin-swal2-top", // all.scss 變更 top 位置
        },
      });
    },
    userAlert(icon, title, text) {
      this.$swal.fire({
        icon,
        title,
        text,
        confirmButtonColor: "#39B7DF",
      });
    },
    userToast(icon, title) {
      this.$swal.fire({
        icon,
        title,
        toast: true,
        position: "top-end",
        background: "#080909",
        color: "#FFF",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
        customClass: {
          timerProgressBar: "progress-bar", // all.scss 變更 progress-bar color
          popup: "swal2-top", // all.scss 變更 top 位置
        },
      });
    },
  },
};
