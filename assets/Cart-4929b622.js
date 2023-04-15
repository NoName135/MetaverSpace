import{M as B}from"./index-9908806f.js";import{f as w,c as C}from"./favoriteStore-aee8d803.js";import{m as k,a as g,_ as S,o,c as a,b as t,F as _,g as x,n as F,t as n,i as v,K as U,f as I,h as f,l as z,v as T,d as m,w as j,r as L,j as q}from"./index-8216c991.js";import{s as A}from"./swal-3e866175.js";const E={mixins:[A],methods:{openModal(){this.favoriteModal.show()},moveToCart(e,d){this.cart.carts.some(u=>u.product_id===e.id)?this.userToast("warning","此商品已在購物車"):this.addCart(e,1,d)},...k(w,["getFavorite","updateFavorite"]),...k(C,["addCart"])},computed:{...g(w,["favorites","cart_specs"]),...g(C,["cartLoading","cart"])},mounted(){const e={placement:"top-center",backdrop:"dynamic",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-40",closable:!0};this.favoriteModal=new B(this.$refs.favoriteModal,e)}},N={ref:"favoriteModal",id:"favoriteModal",tabindex:"-1","aria-hidden":"true",class:"fixed top-8 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full max-h-[calc(100vh-3rem)]"},D={class:"w-full h-full max-w-2xl"},P={class:"rounded-lg overflow-hidden shadow bg-dark"},O={class:"flex items-start justify-between p-4 border rounded-t-lg border-gray-600 bg-black fixed top-5 w-[calc(100%-2rem)] md:w-full max-w-2xl z-50"},H=t("h3",{class:"text-lg md:text-xl font-semibold text-white"}," 請選擇商品加入購物車 ",-1),R=t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),K=[R],G={class:"px-4 pt-6"},J=["src"],Q={class:"col-span-full md:col-span-3 flex flex-col justify-between"},W={class:"flex justify-between items-center"},X={class:"text-lg lg:text-xl"},Y=["id","onUpdate:modelValue"],Z=t("option",{selected:"",disabled:"",value:"",class:"bg-dark/10"}," 選擇規格 ",-1),tt=["value"],et={class:"text-xl lg:text-2xl mt-4"},st={class:"xs:flex justify-between items-end mt-4 md:mt-0"},ot={class:"text-lg lg:text-xl"},at={class:"font-bold"},dt=["disabled","onClick"];function lt(e,d,u,$,M,p){return o(),a("div",N,[t("div",D,[t("div",P,[t("div",O,[H,t("button",{type:"button",class:"text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white",onClick:d[0]||(d[0]=l=>e.favoriteModal.hide())},K)]),t("div",G,[(o(!0),a(_,null,x(e.favorites,(l,c)=>(o(),a("div",{class:F(["py-8 grid grid-cols-4 gap-6",{"border-t":c>0}]),key:l.id},[t("img",{src:l.imageUrl,alt:"",class:"hidden md:flex self-center w-full h-28 object-cover rounded"},null,8,J),t("div",Q,[t("div",null,[t("div",W,[t("h2",X,n(l.brand),1),l.spec?v((o(),a("select",{key:0,id:`spec${c}`,class:"mt-4 sm:mt-0 border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary","onUpdate:modelValue":h=>e.cart_specs[c]=h},[Z,(o(!0),a(_,null,x(l.spec,(h,y)=>(o(),a("option",{key:y,value:h,class:"bg-dark/10"},n(h),9,tt))),128))],8,Y)),[[U,e.cart_specs[c]]]):I("",!0)]),t("h3",et,n(l.title),1)]),t("div",null,[t("div",st,[t("h5",ot,[f(" 售價："),t("span",at,"NT$ "+n(e.$filters.currency(l.price)),1)]),t("button",{type:"button",class:"mt-5 sm:mt-0 primary-button sm:ml-3",disabled:l.spec&&!e.cart_specs[c]||e.cartLoading.cartId===l.id,onClick:h=>p.moveToCart(l,e.cart_specs[c])}," 加入購物車 ",8,dt)])])])],2))),128))])])])],512)}const rt=S(E,[["render",lt]]),{VITE_API:nt,VITE_PATH:it}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},ct={mixins:[A],data(){return{coupon:""}},methods:{deleteAlert(e,d){let u="";d>=0&&(u=`(${e.cart_spec[d].title})`),this.$swal.fire({title:"刪除購物車商品",text:`確定要刪除 ${e.product.title} ${u}？`,icon:"warning",confirmButtonColor:"#FE5F50",confirmButtonText:"確定刪除",backdrop:" rgba(0,0,0,0.8)",showCancelButton:!0,cancelButtonColor:"#6b7280"}).then($=>{$.isConfirmed&&(d>=0?this.deleteCartSpec(e,d):this.deleteCart(e.id))})},async moveToFavorite(e,d){this.favorites.some(u=>u.id===d.id)?this.userToast("warning","商品已在收藏清單"):(await this.deleteCart(e),this.updateFavorite(d))},addCoupon(){this.$http.post(`${nt}/api/${it}/coupon`,{data:{code:this.coupon}}).then(e=>{this.userToast("success",e.data.message),this.getCart()}).catch(e=>{this.userToast("error",e.response.data.message)})},...k(C,["getCart","updateCart","updateCartSpec","deleteCart","deleteCartSpec"]),...k(w,["updateFavorite"])},computed:{...g(z,["loadings"]),...g(C,["cart","cartLoading"]),...g(w,["favorites"])},mounted(){this.favoriteModal=this.$refs.favoriteModal},components:{UserFavoriteModal:rt}},ut={class:"mt-nav"},pt={class:"container px-2 md:px-0 pt-8"},ht={class:"border-2 rounded-lg xl:mx-48 overflow-hidden"},bt={class:"flex justify-between items-center px-4 py-2.5 bg-black/50 border-b-2"},ft=t("h1",{class:"text-xl font-bold"},"我的購物車",-1),mt={class:"px-8 pb-4"},gt={key:0,class:"mt-10 text-center text-3xl"},_t={key:1},xt={class:"flex justify-between items-center"},yt=["disabled","onClick"],vt=t("span",null,"移動至收藏",-1),wt={key:1,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Ct=t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),kt=t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),$t=[Ct,kt],Mt={class:"grid grid-cols-12 md:gap-6 mt-6"},Tt=["src"],Lt={class:"col-span-full md:col-span-9 flex flex-col justify-between"},It={class:"flex flex-wrap justify-between items-center"},Vt={class:"text-lg lg:text-xl mr-4"},jt={class:"text-xl lg:text-2xl mt-4 lg:mt-6 font-bold"},St={class:"flex flex-col sm:flex-row justify-between"},At=["id","value","onChange","disabled"],Bt=["value"],Ft={class:"flex mt-3 sm:mt-0 sm:ml-4"},Ut=t("span",{class:"sm:hidden flex items-center text-md lg:text-lg"},"數量：",-1),zt=["onClick","disabled"],qt=["onUpdate:modelValue","onChange","disabled"],Et=["onClick","disabled"],Nt=["onClick","disabled"],Dt={class:"flex flex-col sm:flex-row justify-between items-center"},Pt={key:0,class:"flex items-center self-start mt-6"},Ot=t("span",{class:"text-md lg:text-lg"},"數量：",-1),Ht={class:"flex sm:mt-0 sm:ml-4"},Rt=["onClick","disabled"],Kt=["onUpdate:modelValue","onChange","disabled"],Gt=["onClick","disabled"],Jt={key:1},Qt={class:"self-end text-lg lg:text-xl mt-6"},Wt={class:"font-bold"},Xt={class:"flex flex-col items-end py-6"},Yt={class:"mt-4 xs:mt-0 xs:ml-4 text-lg lg:text-xl text-end"},Zt={class:"font-bold whitespace-nowrap"},te={class:"mt-4 flex items-center"},ee={key:0,class:"mt-4 text-warm text-lg lg:text-xl"},se={class:"font-bold"},oe={class:"mt-4 text-primary0 text-xl lg:text-2xl text-end"},ae={class:"font-bold whitespace-nowrap"};function de(e,d,u,$,M,p){var y;const l=L("font-awesome-icon"),c=L("router-link"),h=L("user-favorite-modal");return o(),a("div",ut,[t("div",pt,[t("div",ht,[t("div",bt,[ft,t("button",{type:"button",class:"ml-2 dark-solid-button",onClick:d[0]||(d[0]=s=>e.favoriteModal.openModal())}," 收藏清單 ")]),t("div",mt,[(y=Object.keys(e.cart))!=null&&y.length?(o(),a("ul",_t,[(o(!0),a(_,null,x(e.cart.carts,s=>(o(),a("li",{class:"py-8 border-b",key:s.id},[t("div",xt,[t("button",{type:"button",class:"w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-4 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3 disabled:bg-primary2 disabled:text-gray-400 disabled:cursor-not-allowed",disabled:e.cartLoading.cartId===s.id,onClick:r=>p.moveToFavorite(s.id,s.product)},[m(l,{icon:["fas","heart"],class:"mr-2"}),vt],8,yt),e.cartLoading.cartId!==s.id?(o(),q(l,{key:0,icon:["fas","trash-can"],class:"text-xl lg:text-2xl hover:text-warm cursor-pointer",onClick:r=>p.deleteAlert(s)},null,8,["onClick"])):(o(),a("svg",wt,$t))]),t("div",Mt,[t("img",{src:s.product.imageUrl,alt:"",class:"col-span-3 hidden md:block w-full h-28 lg:h-32 xl:h-40 object-cover rounded bg-white"},null,8,Tt),t("div",Lt,[t("div",It,[t("h2",Vt,n(s.product.brand),1),m(c,{to:`/product/${s.product.id}`,target:"_blank",class:"mt-2 sm:mt-0 dark-solid-button py-2 relative whitespace-nowrap"},{default:j(()=>[f(" 查看商品 "),m(l,{icon:["fas","arrow-up-right-from-square"],class:"absolute top-1 right-1 text-sm lg:text-md"})]),_:2},1032,["to"])]),t("h3",jt,n(s.product.title),1),(o(!0),a(_,null,x(s.cart_spec,(r,b)=>{var V;return o(),a("div",{class:"flex justify-between sm:justify-start items-start sm:items-center mt-8",key:r.title},[t("div",St,[t("select",{id:`spec${b}`,class:"border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary",value:r.title,onChange:i=>e.updateCartSpec(s,i.target.value,b),disabled:e.cartLoading.cartId===s.id},[(o(!0),a(_,null,x(s.product.spec,i=>(o(),a("option",{class:"bg-dark/10",key:i,value:i},n(i),9,Bt))),128))],40,At),t("div",Ft,[Ut,t("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm disabled:bg-secondary disabled:text-gray-300 disabled:cursor-not-allowed",onClick:()=>{r.qty-=1,e.updateCart(s,b)},disabled:e.cartLoading.cartId===s.id}," － ",8,zt),v(t("input",{type:"number",class:"w-12 bg-dark text-sm text-end focus:border-secondary disabled:text-gray-500",min:"1",max:"99","onUpdate:modelValue":i=>r.qty=i,onChange:i=>e.updateCart(s,b),disabled:e.cartLoading.cartId===s.id},null,40,qt),[[T,r.qty,void 0,{lazy:!0}]]),t("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm disabled:bg-secondary disabled:text-gray-300 disabled:cursor-not-allowed",onClick:()=>{r.qty+=1,e.updateCart(s,b)},disabled:e.cartLoading.cartId===s.id}," ＋ ",8,Et)])]),m(l,{icon:["fas","xmark"],size:"2xl",class:"sm:hidden hover:text-warm",onClick:i=>p.deleteAlert(s,b)},null,8,["onClick"]),((V=s.cart_spec)==null?void 0:V.length)>1?(o(),a("button",{key:0,type:"button",class:"hidden sm:block ml-8 w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3 disabled:bg-warm2 disabled:text-gray-300 disabled:cursor-not-allowed",onClick:i=>p.deleteAlert(s,b),disabled:e.cartLoading.cartId===s.id}," 刪除 ",8,Nt)):I("",!0)])}),128)),t("div",Dt,[s.cart_spec?(o(),a("div",Jt)):(o(),a("div",Pt,[Ot,t("div",Ht,[t("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm disabled:bg-secondary disabled:text-gray-300 disabled:cursor-not-allowed",onClick:()=>{s.qty-=1,e.updateCart(s,e.i)},disabled:e.cartLoading.cartId===s.id}," － ",8,Rt),v(t("input",{type:"number",class:"w-12 bg-dark text-sm text-end focus:border-secondary disabled:text-gray-500",min:"1",max:"99","onUpdate:modelValue":r=>s.qty=r,onChange:r=>e.updateCart(s,e.i),disabled:e.cartLoading.cartId===s.id},null,40,Kt),[[T,s.qty,void 0,{lazy:!0}]]),t("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm disabled:bg-secondary disabled:text-gray-300 disabled:cursor-not-allowed",onClick:()=>{s.qty+=1,e.updateCart(s,e.i)},disabled:e.cartLoading.cartId===s.id}," ＋ ",8,Gt)])])),t("h5",Qt,[f(" 總計："),t("span",Wt,"NT$ "+n(e.$filters.currency(s.total)),1)])])])])]))),128))])):(o(),a("p",gt," 購物車沒有商品 ")),t("div",Xt,[t("h4",Yt,[f(" 結帳小計："),t("span",Zt,"NT$ "+n(e.$filters.currency(e.cart.total)),1)]),t("div",te,[v(t("input",{type:"text",placeholder:"請輸入優惠碼",class:"border text-sm rounded block w-28 sm:w-36 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-secondary focus:border-secondary","onUpdate:modelValue":d[1]||(d[1]=s=>M.coupon=s)},null,512),[[T,M.coupon]]),t("button",{type:"button",class:"ml-2 w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-secondary hover:bg-secondary2 focus:ring-secondary3",onClick:d[2]||(d[2]=(...s)=>p.addCoupon&&p.addCoupon(...s))}," 套用 ")]),e.cart.total-e.cart.final_total>0?(o(),a("h5",ee,[f(" 折扣："),t("span",se,"NT$ "+n(e.$filters.currency(Math.ceil(e.cart.total-e.cart.final_total))),1)])):I("",!0),t("h3",oe,[f(" 總金額："),t("span",ae,"NT$ "+n(e.$filters.currency(e.cart.final_total)),1)]),m(c,{to:{name:"結帳"},class:"mt-8 primary-button"},{default:j(()=>[f("前往結帳")]),_:1})])])])]),m(h,{ref:"favoriteModal"},null,512)])}const ce=S(ct,[["render",de]]);export{ce as default};
