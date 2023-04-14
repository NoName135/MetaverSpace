import{M as w}from"./index-9908806f.js";import{_ as k,a as b,p as $,c as o,b as t,F as u,h as p,f as d,t as r,g as j,d as i,w as _,l as M,r as g,o as l,i as x,K as V,v as y}from"./index-f22d0492.js";import{c as C}from"./cartStore-f7c445b3.js";import{s as N}from"./swal-3e866175.js";import{_ as T}from"./Meta_Oculus_Quest2-a216da96.js";import{_ as U}from"./VIVE_XR_ELITE-13af5cce.js";const L={mixins:[N],data(){return{}},computed:{...b($,["loadings"]),...b(C,["cart","deleteCart"])},mounted(){const e={placement:"top-center",backdrop:"dynamic",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-40",closable:!0};this.favoriteModal=new w(this.$refs.favoriteModal,e)}},q={class:"mt-nav"},z={class:"container px-2 md:px-0 pt-8"},B={class:"border-2 rounded-lg overflow-hidden"},E={class:"flex justify-between items-center p-4 bg-black/50 border-b-2"},S=t("h1",{class:"text-xl font-bold"},"我的購物車",-1),O={class:"px-8"},D={key:0,class:"mt-10 text-center text-4xl"},F={key:1},I={class:"flex justify-between items-center"},G={type:"button",class:"w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-4 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3"},K=t("span",null,"移動至收藏",-1),Q={class:"grid grid-cols-12 md:gap-6 mt-6"},R=["src"],X={class:"col-span-full md:col-span-9 flex flex-col justify-between"},A={class:"flex flex-wrap justify-between items-center"},H={class:"text-lg lg:text-xl mr-4"},J={class:"text-xl lg:text-2xl mt-4 lg:mt-6 font-bold"},P={class:"flex flex-col sm:flex-row justify-between"},W=["id","onUpdate:modelValue"],Y=["value"],Z={class:"flex mt-3 sm:mt-0 sm:ml-4"},tt=t("span",{class:"sm:hidden flex items-center text-md lg:text-lg"},"數量：",-1),et=t("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm"}," － ",-1),st=["onUpdate:modelValue"],ot=t("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm"}," ＋ ",-1),lt=t("button",{type:"button",class:"hidden sm:block ml-8 w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3"}," 刪除 ",-1),at={class:"flex flex-col sm:flex-row justify-between items-center"},nt={key:0,class:"flex items-center self-start mt-6"},rt=t("span",{class:"text-md lg:text-lg"},"數量：",-1),dt={class:"flex sm:mt-0 sm:ml-4"},it=t("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm"}," － ",-1),ct=["onUpdate:modelValue"],mt=t("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm"}," ＋ ",-1),ut={key:1},pt={class:"self-end text-lg lg:text-xl mt-6"},xt={class:"font-bold"},ft={class:"flex flex-col items-end py-6"},ht={class:"mt-4 xs:mt-0 xs:ml-4 text-lg lg:text-xl text-end"},bt={class:"font-bold whitespace-nowrap"},_t=t("div",{class:"mt-4 flex items-center"},[t("input",{type:"text",placeholder:"請輸入優惠碼",class:"border text-sm rounded block w-28 sm:w-36 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-secondary focus:border-secondary"}),t("button",{type:"button",class:"ml-2 w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-secondary hover:bg-secondary2 focus:ring-secondary3"}," 套用 ")],-1),gt={key:0,class:"mt-4 text-warm text-lg lg:text-xl"},yt={class:"font-bold"},vt={class:"mt-4 text-primary0 text-xl lg:text-2xl text-end"},wt={class:"font-bold whitespace-nowrap"},kt={ref:"favoriteModal",id:"favoriteModal",tabindex:"-1","aria-hidden":"true",class:"fixed top-8 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full max-h-[calc(100vh-3rem)]"},$t={class:"w-full h-full max-w-2xl"},jt={class:"rounded-lg overflow-hidden shadow bg-dark"},Mt={class:"flex items-start justify-between p-4 border rounded-t-lg border-gray-600 bg-black fixed top-5 w-[calc(100%-2rem)] md:w-full max-w-2xl z-50"},Vt=t("h3",{class:"text-lg md:text-xl font-semibold text-white"}," 請選擇商品加入購物車 ",-1),Ct=t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Nt=[Ct],Tt=M('<div class="px-4 pt-6"><div class="py-8 grid grid-cols-4 gap-6"><img src="'+T+'" alt="" class="hidden md:flex self-center w-full h-28 object-cover rounded"><div class="col-span-full md:col-span-3 flex flex-col justify-between"><div><div class="flex justify-between items-center"><h2 class="text-lg lg:text-xl">Meta</h2><select id="spec1" class="border text-xs sm:text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"><option selected disabled>選擇規格</option><option value="黑色">黑色</option><option value="白色">白色</option></select></div><h3 class="text-xl lg:text-2xl mt-4"> Oculus Quest 2 256G </h3></div><div><div class="xs:flex justify-between items-end mt-4 md:mt-0"><h5 class="text-lg lg:text-xl"> 售價：<span class="font-bold">NT$ 17,500</span></h5><button type="button" class="mt-5 xs:mt-1 primary-button md:ml-3"> 加入購物車 </button></div></div></div></div><div class="py-8 grid grid-cols-4 gap-6 border-t"><img src="'+U+'" alt="" class="hidden md:flex self-center w-full h-20 md:h-28 object-cover rounded"><div class="col-span-full md:col-span-3 flex flex-col justify-between"><div><div class="flex justify-between items-center"><h2 class="text-lg lg:text-xl">VIVE</h2><select id="spec1" class="border text-xs sm:text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"><option selected disabled>選擇規格</option><option value="黑色">黑色</option><option value="白色">白色</option></select></div><h3 class="text-xl lg:text-2xl mt-4">XR_ELITE</h3></div><div><div class="xs:flex justify-between items-end mt-4 md:mt-0"><h5 class="text-lg lg:text-xl"> 售價：<span class="font-bold">NT$ 34,300</span></h5><button type="button" class="mt-5 xs:mt-1 primary-button md:ml-3"> 加入購物車 </button></div></div></div></div></div>',1);function Ut(e,c,Lt,qt,zt,Bt){var h;const m=g("font-awesome-icon"),f=g("router-link");return l(),o("div",q,[t("div",z,[t("div",B,[t("div",E,[S,t("button",{type:"button",class:"ml-2 dark-solid-button",onClick:c[0]||(c[0]=s=>e.favoriteModal.show())}," 收藏清單 ")]),t("div",O,[(h=Object.keys(e.cart))!=null&&h.length?(l(),o("ul",F,[(l(!0),o(u,null,p(e.cart.carts,s=>(l(),o("li",{class:"py-8 border-b",key:s.id},[t("div",I,[t("button",G,[i(m,{icon:["fas","heart"],class:"mr-2"}),K]),i(m,{icon:["fas","trash-can"],class:"text-xl lg:text-2xl hover:text-warm cursor-pointer",onClick:a=>e.deleteCart(s.id)},null,8,["onClick"])]),t("div",Q,[t("img",{src:s.product.imageUrl,alt:"",class:"col-span-3 hidden md:block w-full h-32 lg:h-40 xl:h-56 object-cover rounded bg-white"},null,8,R),t("div",X,[t("div",A,[t("h2",H,r(s.product.brand),1),i(f,{to:`/product/${s.product.id}`,target:"_blank",class:"mt-2 sm:mt-0 dark-solid-button py-2 relative whitespace-nowrap"},{default:_(()=>[d(" 查看商品 "),i(m,{icon:["fas","arrow-up-right-from-square"],class:"absolute top-1 right-1 text-sm lg:text-md"})]),_:2},1032,["to"])]),t("h3",J,r(s.product.title),1),(l(!0),o(u,null,p(s.cart_spec,(a,v)=>(l(),o("div",{class:"flex justify-between sm:justify-start items-start sm:items-center mt-8",key:a.title},[t("div",P,[x(t("select",{id:`spec${v}`,class:"border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary","onUpdate:modelValue":n=>a.title=n},[(l(!0),o(u,null,p(s.product.spec,n=>(l(),o("option",{class:"bg-dark/10",key:n,value:n},r(n),9,Y))),128))],8,W),[[V,a.title]]),t("div",Z,[tt,et,x(t("input",{type:"number",class:"w-12 bg-dark text-sm text-end focus:border-secondary",min:"1",max:"99","onUpdate:modelValue":n=>a.qty=n},null,8,st),[[y,a.qty]]),ot])]),i(m,{icon:["fas","xmark"],size:"2xl",class:"sm:hidden hover:text-warm"}),lt]))),128)),t("div",at,[s.cart_spec?(l(),o("div",ut)):(l(),o("div",nt,[rt,t("div",dt,[it,x(t("input",{type:"number",class:"w-12 bg-dark text-sm text-end focus:border-secondary",min:"1",max:"99","onUpdate:modelValue":a=>s.qty=a},null,8,ct),[[y,s.qty]]),mt])])),t("h5",pt,[d(" 總計："),t("span",xt,"NT$ "+r(e.$filters.currency(s.total)),1)])])])])]))),128))])):(l(),o("p",D," 購物車讀取中...... ")),t("div",ft,[t("h4",ht,[d(" 結帳小計："),t("span",bt,"NT$ "+r(e.$filters.currency(e.cart.total)),1)]),_t,e.cart.total-e.cart.final_total>0?(l(),o("h5",gt,[d(" 折扣："),t("span",yt,"NT$ "+r(e.$filters.currency(Math.ceil(e.cart.total-e.cart.final_total))),1)])):j("",!0),t("h3",vt,[d(" 總金額："),t("span",wt,"NT$ "+r(e.$filters.currency(e.cart.final_total)),1)]),i(f,{to:{name:"結帳"},class:"mt-8 primary-button"},{default:_(()=>[d("前往結帳")]),_:1})])])]),t("div",kt,[t("div",$t,[t("div",jt,[t("div",Mt,[Vt,t("button",{type:"button",class:"text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white",onClick:c[1]||(c[1]=s=>e.favoriteModal.hide())},Nt)]),Tt])])],512)])])}const Gt=k(L,[["render",Ut]]);export{Gt as default};
