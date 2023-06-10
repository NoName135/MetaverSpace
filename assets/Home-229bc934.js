import{C as F}from"./index-9908806f.js";import{c as B}from"./cartStore-7450e7eb.js";import{f as I}from"./favoriteStore-7a0d908d.js";import{m as M,a as R,_ as A,r as _,o as r,c as a,b as e,d as l,w as d,e as w,t as v,f as k,F as q,g as N,n as f,h as c,i as S,v as T,j as P,k as U,l as E}from"./index-727fbaff.js";const H={data(){return{windowTop:0,navToggled:!1,navCollapse:"",cartCollapse:"",favCollapse:"",targetLink:""}},methods:{onScroll(s){this.windowTop=s.target.documentElement.scrollTop},hideCollapse(){this.navCollapse.collapse(),this.cartCollapse.collapse(),this.favCollapse.collapse()},toggleNav(){this.cartCollapse.collapse(),this.favCollapse.collapse()},toggleCart(){this.navCollapse.collapse(),this.favCollapse.collapse()},toggleFav(){this.navCollapse.collapse(),this.cartCollapse.collapse()},...M(B,["getCart","updateCart","deleteCart","deleteCartSpec"]),...M(I,["getFavorite","updateFavorite"])},computed:{...R(B,["cart","cartLoading"]),...R(I,["favorites"])},watch:{$route(s,o){s.fullPath!==o.fullPath&&(this.$route.fullPath==="/reserve"?this.targetLink="reserve":this.$route.fullPath==="/order"?this.targetLink="order":this.$route.fullPath.includes("/products")?this.targetLink="products":this.targetLink="")}},mounted(){window.addEventListener("scroll",this.onScroll);const{navMenu:s,navBtn:o,navCart:C,navCartBtn:L,navFav:i,navFavBtn:n}=this.$refs,h={onExpand:()=>{this.navToggled=!0},onCollapse:()=>{this.navToggled=!1}};this.navCollapse=new F(s,o,h),this.cartCollapse=new F(C,L),this.favCollapse=new F(i,n),this.$route.fullPath==="/reserve"?this.targetLink="reserve":this.$route.fullPath==="/order"?this.targetLink="order":this.$route.fullPath.includes("/products")?this.targetLink="products":this.targetLink="",this.getCart(),this.getFavorite()},beforeUnmount(){window.removeEventListener("scroll",this.onScroll)}},D={class:"w-full px-4 lg:px-24 py-4 bg-white/10"},O={class:"container flex flex-wrap items-center justify-between"},X=e("img",{src:U,class:"h-16 mr-3",alt:"MetaverSpace"},null,-1),G=e("span",{class:"hidden sm:block self-center text-2xl font-bold whitespace-nowrap text-white"},"MetaverSpace",-1),J={class:"flex items-center lg:order-2 ml-auto lg:ml-0 relative"},K={class:"group"},Q={key:0,class:"absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-warm2 border-2 border-white rounded-full -top-2 -right-2 cursor-pointer"},W={class:"p-2 bg-white/10"},Y={class:"text-sm text-white max-h-80 overflow-y-auto"},Z={class:"basis-1/6 ml-2 hidden sm:flex justify-center items-center"},ee=["src","alt"],te={class:"flex flex-col flex-1 h-14 ml-2 justify-between overflow-hidden"},se={class:"basis text-left font-bold whitespace-nowrap truncate"},oe={class:"basis text-gray-300 text-left"},le={class:"basis-1/12 flex justify-center items-center mx-1"},re={class:"flex justify-between items-center mt-2 mb-1 mx-1 pt-2 text-white border-t"},ae={key:0,class:"text-sm"},ne={key:1,class:"text-sm"},ie={class:"group"},de={key:0,class:"absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-warm2 border-2 border-white rounded-full -top-2 -right-2 cursor-pointer"},ce={class:"p-2 bg-white/10"},ue={class:"text-sm text-white max-h-80 overflow-y-auto"},pe={class:"basis-1/6 ml-2 hidden sm:flex justify-center mt-1"},he=["src","alt"],ge={class:"flex flex-col flex-1 ml-2 justify-between overflow-hidden"},ve={class:"flex justify-between items-end text-gray-300 mb-4"},fe={class:"basis text-left font-bold truncate"},me={class:"mx-2 whitespace-nowrap"},be={class:"truncate"},_e=["onClick","disabled"],xe={class:"flex items-center ml-2 whitespace-nowrap"},we=e("span",null,"數量：",-1),ye=["onUpdate:modelValue","onChange","disabled"],ke={class:"hidden sm:flex flex-col -mt-1"},Ce=["onClick","disabled"],Le=["onClick","disabled"],$e={key:1,class:"flex justify-end items-center"},je=e("span",null,"數量：",-1),Fe=["onUpdate:modelValue","onChange","disabled"],qe={class:"hidden sm:flex flex-col -mt-1"},Ne=["onClick","disabled"],Re=["onClick","disabled"],ze={class:"basis-1/12 flex justify-center mx-1 mt-1"},Ve={key:1,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Be=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),Ie=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),Me=[Be,Ie],Se={class:"flex justify-between items-center mt-2 mb-1 mx-1 pt-2 text-white border-t"},Te={key:0,class:"text-sm"},Ae={key:1,class:"text-sm"},Pe=e("span",{class:"sr-only"},"Open main menu",-1),Ue=e("svg",{class:"w-8 h-8","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1),Ee=[Pe,Ue],He={class:"items-center justify-between hidden w-full lg:flex lg:w-auto",ref:"navMenu"},De={class:"flex flex-col p-4 mt-4 text-white text-lg text-center lg:flex-row lg:space-x-8 lg:mt-0 lg:text-md lg:items-center lg:font-medium rounded gap-2.5 border lg:border-0 border-white/87 nav-menu-shadow"};function Oe(s,o,C,L,i,n){var g,m,y,z;const h=_("RouterLink"),u=_("FontAwesomeIcon");return r(),a("nav",{class:f(["w-full gap-2.5 fixed z-30 top-0 left-0 flex justify-center backdrop-opacity-[2px] border border-white/38",{"bg-dark":i.windowTop>100||i.navToggled||s.$route.fullPath!="/"}])},[e("div",D,[e("div",O,[l(h,{to:"/",class:"flex items-center",onClick:o[0]||(o[0]=t=>i.targetLink="")},{default:d(()=>[X,G]),_:1}),e("div",J,[e("div",{ref:"navFavBtn",class:"relative",onClick:o[3]||(o[3]=w((...t)=>n.toggleFav&&n.toggleFav(...t),["stop"]))},[e("div",K,[l(u,{icon:["fas","heart"],class:"text-white text-2xl text-center cursor-pointer group-hover:text-primary"}),s.favorites.length>0?(r(),a("div",Q,v(s.favorites.length),1)):k("",!0)]),e("div",{ref:"navFav",class:"w-[240px] sm:w-[360px] z-10 hidden rounded-md shadow absolute top-[68px] sm:top-16 lg:top-[72px] -right-36 backdrop-opacity-[2px] border border-white/38 bg-dark",onClick:o[2]||(o[2]=w((...t)=>n.toggleFav&&n.toggleFav(...t),["stop"]))},[e("div",W,[e("ul",Y,[(r(!0),a(q,null,N(s.favorites,(t,x)=>(r(),a("li",{key:t.id},[e("div",{class:f(["flex py-2 border-dashed",{"border-t":x!==0}])},[e("div",Z,[e("img",{src:t.imageUrl,class:"w-14 h-14 object-cover bg-white",alt:t.title},null,8,ee)]),e("div",te,[e("p",se,v(t.title),1),e("p",oe," NT$ "+v(s.$filters.currency(t.price)),1)]),e("div",le,[l(u,{icon:["fas","xmark"],size:"2x",class:"text-center cursor-pointer hover:text-warm",onClick:$=>s.updateFavorite(t)},null,8,["onClick"])])],2)]))),128))]),e("div",re,[s.favorites.length>0?(r(),a("p",ae," 共 "+v(s.favorites.length)+" 種商品 ",1)):(r(),a("p",ne,"沒有收藏商品")),l(h,{to:{name:"收藏清單"},onClick:o[1]||(o[1]=()=>{n.hideCollapse(),i.targetLink=""}),class:"relative primary-solid-button"},{default:d(()=>[c("查看收藏")]),_:1})])])],512)],512),e("div",{ref:"navCartBtn",class:"ml-8 relative",onClick:o[6]||(o[6]=w((...t)=>n.toggleCart&&n.toggleCart(...t),["stop"]))},[e("div",ie,[l(u,{icon:["fas","shopping-cart"],class:"text-white text-2xl text-center cursor-pointer group-hover:text-primary"}),((g=s.cart.carts)==null?void 0:g.length)>0?(r(),a("div",de,v((m=s.cart.carts)==null?void 0:m.length),1)):k("",!0)]),e("div",{ref:"navCart",class:"w-[240px] sm:w-[360px] z-10 hidden rounded-md shadow absolute top-[68px] sm:top-16 lg:top-[72px] -right-20 backdrop-opacity-[2px] border border-white/38 bg-dark",onClick:o[5]||(o[5]=w((...t)=>n.toggleCart&&n.toggleCart(...t),["stop"]))},[e("div",ce,[e("ul",ue,[(r(!0),a(q,null,N(s.cart.carts,(t,x)=>{var $;return r(),a("li",{key:t.id},[e("div",{class:f(["flex py-2 border-dashed",{"border-t":x!==0}])},[e("div",pe,[e("img",{src:t.product.imageUrl,class:"w-14 h-14 object-cover bg-white",alt:t.product.title},null,8,he)]),e("div",ge,[e("div",ve,[e("p",fe,v(t.product.title),1),e("p",me," NT$ "+v(s.$filters.currency(t.final_total)),1)]),($=t.cart_spec)!=null&&$.length?(r(!0),a(q,{key:0},N(t.cart_spec,(p,b)=>{var V;return r(),a("div",{class:f(["flex justify-between items-center",{"mt-2":b>0}]),key:b},[e("div",be,[((V=t.cart_spec)==null?void 0:V.length)>1?(r(),a("button",{key:0,type:"button",class:"mr-1 cursor-pointer hover:text-warm disabled:text-gray-400 disabled:cursor-not-allowed",onClick:j=>s.deleteCartSpec(t,b),disabled:s.cartLoading.cartId===t.id},[l(u,{icon:["fas","circle-xmark"]})],8,_e)):k("",!0),e("span",null,"規格："+v(p.title),1)]),e("div",xe,[we,S(e("input",{type:"number",min:"1",class:"rounded text-sm text-dark text-center focus:ring-primary0 focus:border-primary0 h-6 w-11 mr-1 disabled:text-gray-400","onUpdate:modelValue":j=>p.qty=j,onChange:j=>s.updateCart(t,b),disabled:s.cartLoading.cartId===t.id},null,40,ye),[[T,p.qty,void 0,{lazy:!0}]]),e("div",ke,[e("button",{type:"button",class:"text-xs h-3 disabled:text-gray-400 disabled:cursor-not-allowed",onClick:()=>{p.qty+=1,s.updateCart(t,b)},disabled:p.qty===99||s.cartLoading.cartId===t.id},[l(u,{icon:["fas","fa-caret-up"]})],8,Ce),e("button",{type:"button",class:"text-xs h-3 disabled:text-gray-400 disabled:cursor-not-allowed",onClick:()=>{p.qty-=1,s.updateCart(t,b)},disabled:p.qty===1||s.cartLoading.cartId===t.id},[l(u,{icon:["fas","fa-caret-down"]})],8,Le)])])],2)}),128)):(r(),a("div",$e,[je,S(e("input",{type:"number",min:"1",class:"rounded text-sm text-dark text-center focus:ring-primary0 focus:border-primary0 h-6 w-11 mr-1 disabled:text-gray-400","onUpdate:modelValue":p=>t.qty=p,onChange:p=>s.updateCart(t),disabled:s.cartLoading.cartId===t.id},null,40,Fe),[[T,t.qty,void 0,{lazy:!0}]]),e("div",qe,[e("button",{type:"button",class:"text-xs h-3 disabled:text-gray-400 disabled:cursor-not-allowed",onClick:()=>{t.qty+=1,s.updateCart(t,x)},disabled:t.qty===99||s.cartLoading.cartId===t.id},[l(u,{icon:["fas","fa-caret-up"]})],8,Ne),e("button",{type:"button",class:"text-xs h-3 disabled:text-gray-400 disabled:cursor-not-allowed",onClick:()=>{t.qty-=1,s.updateCart(t,x)},disabled:t.qty===1||s.cartLoading.cartId===t.id},[l(u,{icon:["fas","fa-caret-down"]})],8,Re)])]))]),e("div",ze,[s.cartLoading.cartId!==t.id?(r(),P(u,{key:0,icon:["fas","trash-can"],size:"lg",class:"text-center cursor-pointer hover:text-warm",onClick:p=>s.deleteCart(t.id)},null,8,["onClick"])):(r(),a("svg",Ve,Me))])],2)])}),128))]),e("div",Se,[((y=s.cart.carts)==null?void 0:y.length)>0?(r(),a("p",Te," 共 "+v((z=s.cart.carts)==null?void 0:z.length)+" 種商品 ",1)):(r(),a("p",Ae,"購物車沒有商品")),l(h,{to:{name:"購物車"},onClick:o[4]||(o[4]=()=>{n.hideCollapse(),i.targetLink=""}),class:"relative primary-solid-button"},{default:d(()=>[c("前往購物車")]),_:1})])])],512)],512),e("button",{ref:"navBtn",type:"button",class:"inline-flex items-center p-2 ml-8 text-sm text-white hover:text-dark rounded-lg lg:hidden hover:bg-primary",onClick:o[7]||(o[7]=w((...t)=>n.toggleNav&&n.toggleNav(...t),["stop"]))},Ee,512)]),e("div",He,[e("ul",De,[e("li",null,[l(h,{to:{name:"預約體驗"},class:f(["block py-2 pl-3 pr-4 lg:border-b-4 lg:mt-0 lg:p-0",[i.targetLink==="reserve"?"bg-primary text-dark lg:text-white lg:bg-transparent lg:border-primary rounded-lg lg:rounded-none":"hover:text-primary lg:border-transparent"]]),onClick:o[8]||(o[8]=t=>i.targetLink="reserve")},{default:d(()=>[c("預約體驗 ")]),_:1},8,["class"])]),e("li",null,[l(h,{to:{name:"交易紀錄"},class:f(["block py-2 pl-3 pr-4 lg:border-b-4 lg:mt-0 lg:p-0",[i.targetLink==="order"?"bg-primary text-dark lg:text-white lg:bg-transparent lg:border-primary rounded-lg lg:rounded-none":"hover:text-primary lg:border-transparent"]]),onClick:o[9]||(o[9]=t=>i.targetLink="order")},{default:d(()=>[c("交易記錄 ")]),_:1},8,["class"])]),e("li",null,[l(h,{to:{name:"商品列表"},class:f(["block py-2 pl-3 pr-4 lg:border-b-4 lg:mt-0 lg:p-0",[i.targetLink==="products"?"bg-primary text-dark lg:text-white lg:bg-transparent lg:border-primary rounded-lg lg:rounded-none":"hover:text-primary lg:border-transparent"]]),onClick:o[10]||(o[10]=t=>i.targetLink="products")},{default:d(()=>[c("商品列表 ")]),_:1},8,["class"])])])],512)])])],2)}const Xe=A(H,[["render",Oe]]);const Ge={methods:{hideNavCollapse(){this.$refs.navbar.hideCollapse()}},computed:{...R(E,["loadings"])},components:{Navbar:Xe}},Je={class:"main-area"},Ke={key:0,class:"bg-black/50 mt-8"},Qe={class:"py-20 px-2 lg:px-40"},We={class:"container grid grid-cols-1 sm:grid-cols-3 gap-6"},Ye=e("h3",{class:"text-2xl font-bold"},"商品專區",-1),Ze={class:"grid grid-cols-1 gap-2 mt-6"},et=e("h3",{class:"text-2xl font-bold"},"記錄查詢",-1),tt={class:"grid grid-cols-1 gap-2 mt-6"},st=e("h3",{class:"text-2xl font-bold"},"聯絡我們",-1),ot={class:"grid grid-cols-1 gap-2 mt-6"},lt={class:"whitespace-nowrap"},rt=e("span",null,"(01) 2345 6789",-1),at={class:"mr-6 md:mr-0"},nt=e("div",{class:"flex justify-center items-center bg-black py-6"},[e("p",{class:"mx-6"},"Copyright © 2023 Ezekiel Lin. All Rights Reserved")],-1);function it(s,o,C,L,i,n){const h=_("Navbar"),u=_("RouterView"),g=_("RouterLink"),m=_("FontAwesomeIcon");return r(),a("div",{class:"bg-dark text-white main-height-full",onClick:o[0]||(o[0]=(...y)=>n.hideNavCollapse&&n.hideNavCollapse(...y))},[e("div",Je,[l(h,{ref:"navbar"},null,512),e("main",null,[l(u)])]),!s.loadings.fullLoading&&s.loadings.opacity!==1?(r(),a("footer",Ke,[e("section",Qe,[e("div",We,[e("div",null,[Ye,e("div",Ze,[e("div",null,[l(g,{to:{name:"商品列表",query:{category:"AR"}},class:"hover:underline"},{default:d(()=>[c(" 擴增實境 (AR) ")]),_:1})]),e("div",null,[l(g,{to:{name:"商品列表",query:{category:"MR"}},class:"hover:underline"},{default:d(()=>[c("混合實境 (MR) ")]),_:1})]),e("div",null,[l(g,{to:{name:"商品列表",query:{category:"VR"}},class:"hover:underline"},{default:d(()=>[c("虛擬實境 (VR) ")]),_:1})]),e("div",null,[l(g,{to:{name:"商品列表",query:{category:"XR"}},class:"hover:underline"},{default:d(()=>[c("延展實境 (XR) ")]),_:1})])])]),e("div",null,[et,e("div",tt,[e("div",null,[l(g,{to:"./order",class:"hover:underline"},{default:d(()=>[c("交易記錄")]),_:1})]),e("div",null,[l(g,{to:"./reserve",class:"hover:underline"},{default:d(()=>[c("預約記錄")]),_:1})])])]),e("div",null,[st,e("div",ot,[e("div",null,[l(g,{to:"/contact",target:"_blank",class:"hover:underline"},{default:d(()=>[c("留言板 ")]),_:1})]),e("div",lt,[l(m,{icon:["fas","phone"],class:"mr-2"}),rt]),e("div",at,[l(m,{icon:["fab","facebook"],class:"cursor-pointer text-3xl mr-2"}),l(m,{icon:["fab","instagram"],class:"cursor-pointer text-3xl"})])])])])]),nt])):k("",!0)])}const ht=A(Ge,[["render",it]]);export{ht as default};
