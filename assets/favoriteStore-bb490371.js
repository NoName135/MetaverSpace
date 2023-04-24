import{L as o,M as i}from"./index-48565484.js";import{S as a}from"./cartStore-21d5139c.js";const{VITE_API:c,VITE_PATH:p}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},n=o("favorite",{state:()=>({favorites:[],favLoading:{},cart_specs:[]}),actions:{userToast(r,e){a.fire({icon:r,title:e,toast:!0,position:"top-end",background:"#080909",color:"#FFF",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",a.stopTimer),t.addEventListener("mouseleave",a.resumeTimer)},customClass:{timerProgressBar:"progress-bar",popup:"swal2-top"}})},async getFavorite(){const e=(JSON.parse(localStorage.getItem("favorites"))||[]).map(t=>i.get(`${c}/api/${p}/product/${t}`));try{const t=await Promise.allSettled(e);this.favorites=t.filter(s=>s.status==="fulfilled").map(s=>s.value.data.product),t.some(s=>s.status==="rejected")&&localStorage.setItem("favorites",JSON.stringify(this.favorites.map(s=>s.id))),this.cart_specs=[],this.favorites.forEach(()=>{this.cart_specs.push("")})}catch(t){this.userToast("error",t.response.data.message)}},updateFavorite(r){const e=this.favorites.findIndex(t=>t.id===r.id);e<0?(this.favorites.push(r),localStorage.setItem("favorites",JSON.stringify(this.favorites.map(t=>t.id))),this.userToast("success","已將商品加入收藏"),this.cart_specs.push("")):(this.favorites.splice(e,1),localStorage.setItem("favorites",JSON.stringify(this.favorites.map(t=>t.id))),this.userToast("success","已將商品移除收藏"),this.cart_specs.splice(e,1))}},getters:{}});export{n as f};