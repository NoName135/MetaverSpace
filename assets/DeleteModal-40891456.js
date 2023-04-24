import{_ as m,o as d,c as h,b as e,n as g,e as c,F as f,g as v,t as p,a as b,l as x}from"./index-6d712d14.js";import{M as _}from"./index-9908806f.js";import{s as w}from"./swal-e4da1902.js";const y={props:{pageObj:Object},emits:["emitPage"],methods:{changePage(t){this.$emit("emitPage",t)}}},$={class:"inline-flex items-center -space-x-px"},M=e("span",{class:"sr-only"},"Previous",-1),I=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),k=[M,I],C=["onClick"],P=e("span",{class:"sr-only"},"Next",-1),O=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),j=[P,O];function L(t,s,r,u,a,o){return d(),h("ul",$,[e("li",null,[e("a",{href:"#",class:g(["block px-1.5 py-2 leading-tight border rounded-l-lg border-gray-300",[r.pageObj.has_pre?"bg-white text-gray-600 hover:bg-teal-400 hover:text-white":"pointer-events-none bg-gray-50 text-gray-300"]]),onClick:s[0]||(s[0]=c(i=>o.changePage(r.pageObj.current_page-1),["prevent"]))},k,2)]),(d(!0),h(f,null,v(r.pageObj.total_pages,i=>(d(),h("li",{key:i},[e("a",{href:"#",class:g(["px-3 py-1.5 leading-tight border border-gray-300",[i===r.pageObj.current_page?"pointer-events-none bg-teal-500 text-white":"bg-white text-gray-600 hover:bg-teal-400 hover:text-white"]]),onClick:c(q=>o.changePage(i),["prevent"])},p(i),11,C)]))),128)),e("li",null,[e("a",{href:"#",class:g(["block px-1.5 py-2 leading-tight border rounded-r-lg border-gray-300",[r.pageObj.has_next?"bg-white text-gray-600 hover:bg-teal-400 hover:text-white":"pointer-events-none bg-gray-50 text-gray-300"]]),onClick:s[1]||(s[1]=c(i=>o.changePage(r.pageObj.current_page+1),["prevent"]))},j,2)])])}const Q=m(y,[["render",L]]),{VITE_API:l,VITE_PATH:n}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},E={props:["page"],mixins:[w],data(){return{target:"",tempItem:{}}},methods:{openModal(t,s){this.target=t,this.tempItem=s,this.deleteModal.show()},deleteItem(){let t="";this.target=="商品"?t=`${l}/api/${n}/admin/product/${this.tempItem.id}`:this.target=="訂單"?t=`${l}/api/${n}/admin/order/${this.tempItem.id}`:this.target=="優惠券"?t=`${l}/api/${n}/admin/coupon/${this.tempItem.id}`:this.target=="文章"?t=`${l}/api/${n}/admin/article/${this.tempItem.id}`:this.target=="預約"?t=`https://metarverspace-server.onrender.com/reserves/${this.tempItem.id}`:this.target=="留言"&&(t=`https://metarverspace-server.onrender.com/contacts/${this.tempItem.id}`),this.loadings.fullLoading=!0,this.$http.delete(t).then(()=>{this.target=="商品"?this.$emit("updateProducts",this.page,"delete"):this.target=="訂單"?this.$emit("updateOrders",this.page,"delete"):this.target=="優惠券"?this.$emit("updateCoupons",this.page,"delete"):this.target=="文章"?this.$emit("updateArticles",this.page,"delete"):this.target=="預約"?this.$emit("updateReserves",this.page,"delete"):this.target=="留言"&&this.$emit("updateContacts",this.page,"delete"),this.deleteModal.hide()}).catch(s=>{this.target==="預約"||this.target==="留言"?this.adminToast("error",s.message):this.adminToast("error",s.response.data.message)})}},computed:{...b(x,["loadings"])},mounted(){const t={placement:"top-center",backdrop:"dynamic",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-30",closable:!0};this.deleteModal=new _(this.$refs.deleteModal,t)}},T={id:"deleteModal",ref:"deleteModal",tabindex:"-1","aria-hidden":"true",class:"fixed top-20 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full"},z={class:"relative w-full max-w-lg h-auto"},B={class:"relative bg-white rounded-lg shadow"},S={class:"flex items-start justify-between p-4 border-b rounded-t-lg border-gray-600 bg-rose-700"},A={class:"text-xl font-semibold text-white"},D=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),V=e("span",{class:"sr-only"},"Close modal",-1),R=[D,V],F={class:"p-6"},H={class:"text-lg leading-relaxed text-gray-900"},N={class:"flex justify-end items-center p-4 space-x-2 border-t border-gray-300 rounded-b"};function U(t,s,r,u,a,o){return d(),h("div",T,[e("div",z,[e("div",B,[e("div",S,[e("h3",A,"刪除"+p(a.target),1),e("button",{type:"button",class:"text-white bg-transparent hover:bg-gray-300 hover:text-rose-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",onClick:s[0]||(s[0]=i=>t.deleteModal.hide())},R)]),e("div",F,[e("p",H," 是否刪除 "+p(a.target==="預約"||a.target==="留言"?`${a.tempItem.name}的${a.target}`:a.tempItem.title||a.tempItem.id)+" (刪除後無法恢復) ",1)]),e("div",N,[e("button",{"data-modal-hide":"small-modal",type:"button",class:"text-gray-500 bg-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10",onClick:s[1]||(s[1]=i=>t.deleteModal.hide())}," 取消 "),e("button",{"data-modal-hide":"small-modal",type:"button",class:"text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",onClick:s[2]||(s[2]=i=>o.deleteItem())}," 確定刪除 ")])])])],512)}const W=m(E,[["render",U]]);export{W as D,Q as P};