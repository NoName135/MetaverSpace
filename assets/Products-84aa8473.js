import{N as q,S as D,a as E}from"./navigation.min-b5c07727.js";import{m as F,a as j,l as N,_ as z,r as f,o as l,c as a,b as e,d,w as _,s as B,F as y,g as v,j as T,t as c,i as n,u as W,f as O,v as k,h as P,n as S,e as M,x as g}from"./index-3ca5acb4.js";import{P as H,A as G}from"./pagination.min-e20f7dac.js";import{M as J,D as K}from"./index-9908806f.js";import{c as I}from"./cartStore-0cbde26b.js";import{s as X}from"./swal-3e866175.js";import{f as A}from"./favoriteStore-e38983bf.js";const Q={props:["page"],mixins:[X],data(){return{productModules:[q,H],tempProduct:[],cartSpec:"",qty:1}},methods:{openModal(o){this.tempProduct={...o},this.$refs.productSwiper.$el.swiper.slideTo(0),this.cartSpec="",this.qty=1,this.productModal.show()},...F(I,["getCart","addCart","createModalRef"])},computed:{...j(N,["loadings"]),...j(I,["cart","cartLoading"])},watch:{qty(){this.qty<1&&(this.qty=1),this.qty>99&&(this.qty=99)}},mounted(){const o={placement:"center",backdrop:"dynamic",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-30",closable:!0};this.productModal=new J(this.$refs.productModal,o),this.createModalRef(this.productModal)},components:{Swiper:D,SwiperSlide:E}},Y={ref:"productModal",id:"productModal","data-modal-backdrop":"static",tabindex:"-1","aria-hidden":"true",class:"fixed top-8 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full max-h-[calc(100vh-3rem)]"},Z={class:"relative w-full h-full max-w-2xl xl:h-auto"},ee={class:"rounded-lg overflow-hidden shadow bg-dark"},te={class:"flex items-start justify-between p-4 border rounded-t-lg border-gray-600 bg-black fixed xl:static top-5 w-[calc(100%-2rem)] md:w-full max-w-2xl z-50"},re=e("h3",{class:"text-lg md:text-xl font-semibold text-white"}," 請選擇商品及數量 ",-1),se=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),oe=[se],le={class:"p-6 space-x-2 bg-dark border-t border-gray-400"},ie={class:"flex items-center"},ne={class:"col-span-2 text-lg md:text-xl mr-3"},ae={class:"bg-white/30 px-3 py-2 rounded text-xs"},de={class:"mt-2 text-xl md:text-2xl font-bold"},ce=["innerHTML"],ue={class:"text-primary text-lg md:text-xl font-bold mt-4"},pe={class:"p-6 space-x-2 border-t rounded-b border-gray-400 bg-white/10"},me=e("template",null,null,-1),ge={key:0,class:"flex flex-wrap items-center"},he=e("h5",{class:"text-lg mr-3 mb-6"},"規格：",-1),fe={class:"mb-6"},ye=["id","value"],be=["for"],xe={key:1,class:"text-sm"},_e={class:"sm:flex items-center mt-2"},ve={class:"flex items-center"},we={class:"flex"},ke=["disabled"],Pe=["disabled"],Me=["disabled"],Ce={key:0,class:"animate-spin h-5 w-5 mr-3 text-white absolute",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Ve=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),Ue=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),Se=[Ve,Ue];function je(o,t,i,C,r,h){var U,p;const u=f("swiper-slide"),V=f("swiper");return l(),a("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[re,e("button",{type:"button",class:"text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white",onClick:t[0]||(t[0]=m=>o.productModal.hide())},oe)]),e("div",le,[d(V,{ref:"productSwiper",spaceBetween:30,centeredSlides:!0,navigation:!0,observer:!0,pagination:{clickable:!0},modules:r.productModules,class:"productModalSwiper h-56 sm:h-80 md:h-96 bg-white"},{default:_(()=>[d(u,{class:"relative"},{default:_(()=>[e("div",{class:"h-full bg-cover bg-center",style:B({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${r.tempProduct.imageUrl})`})},null,4)]),_:1}),(l(!0),a(y,null,v(r.tempProduct.imagesUrl,(m,b)=>(l(),T(u,{key:b,class:"relative"},{default:_(()=>[e("div",{class:"h-full bg-cover bg-center",style:B({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${m})`})},null,4)]),_:2},1024))),128))]),_:1},8,["modules"]),e("div",ie,[e("h4",ne,c(r.tempProduct.brand),1),e("div",ae,c(r.tempProduct.category),1)]),e("h3",de,c(r.tempProduct.title),1),e("p",{class:"mt-2 ellipse5",innerHTML:r.tempProduct.description},null,8,ce),e("p",ue," NT$ "+c(o.$filters.currency(r.tempProduct.price)),1)]),e("div",pe,[me,r.tempProduct.spec?(l(),a("div",ge,[he,(l(!0),a(y,null,v(r.tempProduct.spec,(m,b)=>(l(),a("ul",{class:"flex flex-wrap text-sm",key:b},[e("li",fe,[n(e("input",{type:"radio",id:`spec${b}`,name:"spec",value:m,"onUpdate:modelValue":t[1]||(t[1]=L=>r.cartSpec=L),class:"hidden peer",required:""},null,8,ye),[[W,r.cartSpec]]),e("label",{for:`spec${b}`,class:"mr-2 bg-black hover:bg-primary2 peer-checked:bg-primary peer-checked:hover:bg-primary2 peer-checked:ring-1 peer-checked:ring-white px-3 py-2 rounded cursor-pointer"},c(m),9,be)])]))),128))])):O("",!0),(U=r.tempProduct.spec)!=null&&U.length?(l(),a("p",xe," ※ 選擇規格後才能加入購物車 ")):O("",!0),e("div",_e,[e("div",ve,[e("div",we,[e("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed",onClick:t[2]||(t[2]=m=>r.qty-=1),disabled:r.qty===1}," － ",8,ke),n(e("input",{type:"number",class:"w-12 bg-dark text-sm text-end focus:border-secondary",min:"1",max:"99","onUpdate:modelValue":t[3]||(t[3]=m=>r.qty=m)},null,512),[[k,r.qty,void 0,{lazy:!0}]]),e("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed",onClick:t[4]||(t[4]=m=>r.qty+=1),disabled:r.qty===99}," ＋ ",8,Pe)])]),e("button",{type:"button",class:"w-full primary-button sm:ml-2 mt-4 sm:mt-0 relative",disabled:o.cartLoading.productModal||((p=r.tempProduct.spec)!=null&&p.length?!r.cartSpec:!1),onClick:t[5]||(t[5]=m=>o.addCart(r.tempProduct,r.qty,r.cartSpec))},[o.cartLoading.productModal?(l(),a("svg",Ce,Se)):O("",!0),P(" 加入購物車 ")],8,Me)])])])])],512)}const Le=z(Q,[["render",je]]),Oe={props:{pageObj:Object},emits:["emitPage"],methods:{changePage(o){this.$emit("emitPage",o)}}},$e={class:"inline-flex items-center -space-x-px"},Re=e("span",{class:"sr-only"},"Previous",-1),Be=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),Te=[Re,Be],ze=["onClick"],Ie=e("span",{class:"sr-only"},"Next",-1),Ae=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),qe=[Ie,Ae];function De(o,t,i,C,r,h){return l(),a("ul",$e,[e("li",null,[e("a",{href:"#",class:S(["block px-2 py-2 leading-tight border rounded-l-lg border-primary2",[i.pageObj.has_pre?"bg-primary3 text-gray-400 hover:bg-primary2 hover:text-white":"pointer-events-none bg-gray-600 text-gray-500"]]),onClick:t[0]||(t[0]=M(u=>h.changePage(i.pageObj.current_page-1),["prevent"]))},Te,2)]),(l(!0),a(y,null,v(i.pageObj.total_pages,u=>(l(),a("li",{key:u},[e("a",{href:"#",class:S(["px-3 py-1.5 leading-tight border border-primary2",[u===i.pageObj.current_page?"pointer-events-none bg-primary text-white":"bg-primary3 text-gray-400 hover:bg-primary2 hover:text-white"]]),onClick:M(V=>h.changePage(u),["prevent"])},c(u),11,ze)]))),128)),e("li",null,[e("a",{href:"#",class:S(["block px-2 py-2 leading-tight border rounded-r-lg border-primary2",[i.pageObj.has_next?"bg-primary3 text-gray-400 hover:bg-primary2 hover:text-white":"pointer-events-none bg-gray-600 text-gray-500"]]),onClick:t[1]||(t[1]=M(u=>h.changePage(i.pageObj.current_page+1),["prevent"]))},qe,2)])])}const Ee=z(Oe,[["render",De]]),{VITE_API:$,VITE_PATH:R}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Fe={mixins:[X],data(){return{articles:[],allProducts:[],filterProducts:[],products:[],pagination:{},filtersBrand:[],filters:{title:"",brand:[],category:[],minPrice:null,maxPrice:null},windowWidth:0,articleModules:[q,H,G],productImages:[]}},methods:{async getAll(){this.loadings.fullLoading=!0,await Promise.all([this.$http.get(`${$}/api/${R}/products/all`),this.$http.get(`${$}/api/${R}/articles`)]).then(o=>{this.allProducts=Object.values(o[0].data.products).reverse(),this.allProducts.forEach(t=>{this.filtersBrand.indexOf(t.brand)===-1&&this.filtersBrand.push(t.brand)}),this.getFilterProducts(),this.articles=o[1].data.articles}).catch(o=>{this.loadings.fullLoading=!1,this.userToast("error",o.response.data.message)})},async getProducts(){this.loadings.fullLoading=!0,await this.$http.get(`${$}/api/${R}/products/all`).then(o=>{this.allProducts=Object.values(o.data.products).reverse(),this.allProducts.forEach(t=>{this.filtersBrand.indexOf(t.brand)===-1&&this.filtersBrand.push(t.brand)}),this.getFilterProducts()}).catch(o=>{this.loadings.fullLoading=!1,this.userToast("error",o.response.data.message)})},getFilterProducts(o=1){this.filterProducts=this.allProducts.filter(i=>(this.filters.title?i.title.toLowerCase().indexOf(this.filters.title.toLowerCase().trim())>-1:!0)&&(this.filters.brand.length>0?this.filters.brand.indexOf(i.brand)>-1:!0)&&(this.filters.category.length>0?this.filters.category.indexOf(i.category)>-1:!0)&&(this.filters.minPrice?this.filters.minPrice<=i.price:!0)&&(this.filters.maxPrice?this.filters.maxPrice>=i.price:!0)),this.products=this.filterProducts.filter((i,C)=>Math.ceil((C+1)/12)==o),this.productImages=[],this.products.forEach(i=>{this.productImages.push(i.imageUrl)});const t=Math.ceil(Object.keys(this.filterProducts).length/12);this.pagination={total_pages:t,current_page:o,has_pre:o!==1,has_next:o!==t},this.loadings.fullLoading=!1},changePages(o=1){this.products=Object.values(this.filterProducts).filter((t,i)=>Math.ceil((i+1)/12)==o),this.productImages=[],this.products.forEach(t=>{this.productImages.push(t.imageUrl)}),this.pagination.current_page=o,this.pagination.has_pre=o!==1,this.pagination.has_next=o!==this.pagination.total_pages,window.scrollTo({top:400,behavior:"smooth"})},...F(A,["updateFavorite"])},computed:{...j(N,["loadings"]),...j(A,["favorites"])},watch:{filters:{handler(){this.filters.minPrice&&(this.filters.minPrice<1?this.filters.minPrice=1:this.filters.minPrice),this.filters.maxPrice&&(this.filters.maxPrice<this.filters.minPrice?this.filters.maxPrice=this.filters.minPrice:this.filters.maxPrice)},deep:!0}},mounted(){this.windowWidth=window.innerWidth,this.productModal=this.$refs.productModal;const o={placement:"left",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-30"};this.filterDrawer=new K(this.$refs.filterDrawer,o),this.getAll()},components:{Swiper:D,SwiperSlide:E,UserProductModal:Le,ProductsPagination:Ee}},Ne={class:"container mt-nav"},He={class:"px-10 sm:px-20 md:px-24 lg:px-32 h-full flex flex-col justify-around"},Xe={class:"font-bold text-2xl lg:text-3xl"},We=["innerHTML"],Ge={class:"grid grid-cols-4 gap-2 mx-2 lg:mx-0"},Je={ref:"filterDrawer",id:"filterDrawer",class:"fixed lg:hidden top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full w-60 bg-dark",tabindex:"-1","aria-labelledby":"drawer-label"},Ke={class:"sticky top-0 bg-dark p-5 flex justify-between items-center"},Qe={class:"text-xl font-bold"},Ye=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ze=e("span",{class:"sr-only"},"Close menu",-1),et=[Ye,Ze],tt={class:"px-5 pb-5"},rt=e("p",{class:"text-lg mt-1"},"類別",-1),st={class:"flex items-center mt-4"},ot=e("label",{for:"m-ar",class:"ml-2 text-sm font-medium text-gray-300"},"AR (擴增實境)",-1),lt={class:"flex items-center mt-4"},it=e("label",{for:"m-vr",class:"ml-2 text-sm font-medium text-gray-300"},"VR (虛擬實境)",-1),nt={class:"flex items-center mt-4"},at=e("label",{for:"m-mr",class:"ml-2 text-sm font-medium text-gray-300"},"MR (混合實境)",-1),dt={class:"flex items-center mt-4"},ct=e("label",{for:"m-xr",class:"ml-2 text-sm font-medium text-gray-300"},"XR (延展實境)",-1),ut={class:"flex items-center mt-4"},pt=e("label",{for:"m-accessory",class:"ml-2 text-sm font-medium text-gray-300"},"商品配件",-1),mt=e("p",{class:"text-lg mt-6"},"品牌",-1),gt=["id","value","onUpdate:modelValue"],ht=["for"],ft=e("p",{class:"text-lg mt-6"},"價格區間",-1),yt={class:"flex items-center mt-4"},bt={class:"flex mt-6"},xt={class:"hidden lg:block col-span-1"},_t={class:"py-8 top-nav"},vt={class:"text-xl font-bold"},wt=e("p",{class:"text-lg mt-6"},"類別",-1),kt={class:"flex items-center mt-4"},Pt=e("label",{for:"ar",class:"ml-2 text-sm font-medium text-gray-300"},"AR (擴增實境)",-1),Mt={class:"flex items-center mt-4"},Ct=e("label",{for:"vr",class:"ml-2 text-sm font-medium text-gray-300"},"VR (虛擬實境)",-1),Vt={class:"flex items-center mt-4"},Ut=e("label",{for:"mr",class:"ml-2 text-sm font-medium text-gray-300"},"MR (混合實境)",-1),St={class:"flex items-center mt-4"},jt=e("label",{for:"xr",class:"ml-2 text-sm font-medium text-gray-300"},"XR (延展實境)",-1),Lt={class:"flex items-center mt-4"},Ot=e("label",{for:"accessory",class:"ml-2 text-sm font-medium text-gray-300"},"商品配件",-1),$t=e("p",{class:"text-lg mt-6"},"品牌",-1),Rt=["id","value","onUpdate:modelValue"],Bt=["for"],Tt=e("p",{class:"text-lg mt-6"},"價格區間",-1),zt={class:"flex items-center mt-4"},It={class:"flex mt-6"},At={class:"col-span-full lg:col-span-3"},qt={class:"my-8 flex items-center"},Dt={class:"grow"},Et=e("label",{for:"search",class:"text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),Ft={class:"relative"},Nt=e("div",{class:"hidden lg:flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),Ht=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1),Xt=e("span",{class:"sr-only"},"Search",-1),Wt=[Ht,Xt],Gt={key:0,class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4"},Jt={class:"h-[300px] md:h-[420px] rounded-lg border overflow-hidden relative"},Kt=["src"],Qt={class:"absolute top-2 left-3 sm:top-3 sm:left-4"},Yt={class:"bg-dark px-3 py-2 rounded text-xs mr-1"},Zt={class:"hidden lg:group-hover:flex absolute top-[45%] justify-center w-full"},er=["onClick"],tr={class:"p-4 md:p-5 h-1/2 md:h-2/5 flex flex-col justify-between",style:{background:`linear-gradient(
                      142.88deg,
                      rgba(255, 255, 255, 0.16) 8.09%,
                      rgba(255, 255, 255, 0.064) 27.24%,
                      rgba(255, 255, 255, 0.064) 34.42%,
                      rgba(255, 255, 255, 0.1088) 48.78%,
                      rgba(255, 255, 255, 0) 100%
                    )`}},rr={class:"grid grid-cols-3"},sr={class:"col-span-2 text-xl"},or={class:"flex justify-between lg:justify-end text-2xl"},lr={class:"mt-2 text-xl font-bold"},ir={class:"mt-2 flex justify-between items-end"},nr={class:"text-gray-400 line-through"},ar={class:"text-primary text-lg font-bold"},dr={key:1,class:"ml-4"},cr={class:"mt-8 flex justify-center"};function ur(o,t,i,C,r,h){const u=f("router-link"),V=f("swiper-slide"),U=f("swiper"),p=f("font-awesome-icon"),m=f("ProductsPagination"),b=f("UserProductModal"),L=f("ScrollTop");return l(),a(y,null,[e("div",Ne,[d(U,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,pagination:{clickable:!0},observer:!0,modules:r.articleModules,class:"productsArticleSwiper h-96"},{default:_(()=>[(l(!0),a(y,null,v(r.articles,s=>(l(),T(V,{key:s.id},{default:_(()=>[e("div",{class:"h-full bg-cover bg-center",style:B({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${s.image})`})},[e("div",He,[e("div",null,[e("h2",Xe,c(s.title),1),e("p",{class:"mt-8 text-lg lg:text-xl",innerHTML:s.description},null,8,We)]),d(u,{to:`/article/${s.id}`,class:"primary-button w-24"},{default:_(()=>[P("查看詳情")]),_:2},1032,["to"])])],4)]),_:2},1024))),128))]),_:1},8,["modules"]),e("div",Ge,[e("div",Je,[e("div",Ke,[e("h3",Qe,[d(p,{icon:["fas","filter"]}),P(" 條件篩選 ")]),e("button",{type:"button","aria-controls":"filterDrawer",class:"text-gray-400 bg-transparent rounded-lg text-sm p-1.5 hover:bg-black/50 hover:text-white",onClick:t[0]||(t[0]=s=>o.filterDrawer.hide())},et)]),e("div",tt,[rt,e("div",st,[n(e("input",{id:"m-ar",type:"checkbox",value:"AR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[1]||(t[1]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),ot]),e("div",lt,[n(e("input",{id:"m-vr",type:"checkbox",value:"VR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[2]||(t[2]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),it]),e("div",nt,[n(e("input",{id:"m-mr",type:"checkbox",value:"MR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[3]||(t[3]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),at]),e("div",dt,[n(e("input",{id:"m-xr",type:"checkbox",value:"XR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[4]||(t[4]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),ct]),e("div",ut,[n(e("input",{id:"m-accessory",type:"checkbox",value:"配件",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[5]||(t[5]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),pt]),mt,(l(!0),a(y,null,v(r.filtersBrand,s=>(l(),a("div",{key:s,class:"flex items-center mt-4"},[n(e("input",{id:`m-${s}`,type:"checkbox",value:s,class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":x=>r.filters.brand=x},null,8,gt),[[g,r.filters.brand]]),e("label",{for:`m-${s}`,class:"ml-2 text-sm font-medium text-gray-300"},c(s),9,ht)]))),128)),ft,e("div",yt,[n(e("input",{type:"number",placeholder:"$最小值",min:"1",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[6]||(t[6]=s=>r.filters.minPrice=s)},null,512),[[k,r.filters.minPrice]]),d(p,{icon:["fas","minus"],class:"text-3xl mx-3"}),n(e("input",{type:"number",placeholder:"$最大值",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[7]||(t[7]=s=>r.filters.maxPrice=s)},null,512),[[k,r.filters.maxPrice]])]),e("div",bt,[e("button",{type:"button",class:"w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3",onClick:t[8]||(t[8]=()=>{this.filters={title:"",brand:[],category:[],minPrice:null,maxPrice:null},h.getFilterProducts()})}," 清除 "),e("button",{type:"button",class:"ml-8 w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3",onClick:t[9]||(t[9]=s=>h.getFilterProducts())}," 搜尋 ")])])],512),e("div",xt,[e("div",_t,[e("h3",vt,[d(p,{icon:["fas","filter"]}),P(" 條件篩選 ")]),wt,e("div",kt,[n(e("input",{id:"ar",type:"checkbox",value:"AR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[10]||(t[10]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),Pt]),e("div",Mt,[n(e("input",{id:"vr",type:"checkbox",value:"VR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[11]||(t[11]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),Ct]),e("div",Vt,[n(e("input",{id:"mr",type:"checkbox",value:"MR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[12]||(t[12]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),Ut]),e("div",St,[n(e("input",{id:"xr",type:"checkbox",value:"XR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[13]||(t[13]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),jt]),e("div",Lt,[n(e("input",{id:"accessory",type:"checkbox",value:"配件",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[14]||(t[14]=s=>r.filters.category=s)},null,512),[[g,r.filters.category]]),Ot]),$t,(l(!0),a(y,null,v(r.filtersBrand,s=>(l(),a("div",{key:s,class:"flex items-center mt-4"},[n(e("input",{id:s,type:"checkbox",value:s,class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":x=>r.filters.brand=x},null,8,Rt),[[g,r.filters.brand]]),e("label",{for:s,class:"ml-2 text-sm font-medium text-gray-300"},c(s),9,Bt)]))),128)),Tt,e("div",zt,[n(e("input",{type:"number",placeholder:"$最小值",min:"1",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[15]||(t[15]=s=>r.filters.minPrice=s)},null,512),[[k,r.filters.minPrice,void 0,{lazy:!0}]]),d(p,{icon:["fas","minus"],class:"text-3xl mx-3"}),n(e("input",{type:"number",placeholder:"$最大值",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[16]||(t[16]=s=>r.filters.maxPrice=s)},null,512),[[k,r.filters.maxPrice,void 0,{lazy:!0}]])]),e("div",It,[e("button",{type:"button",class:"w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3",onClick:t[17]||(t[17]=()=>{this.filters={title:"",brand:[],category:[],minPrice:null,maxPrice:null},h.getFilterProducts()})}," 清除 "),e("button",{type:"button",class:"ml-8 w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3",onClick:t[18]||(t[18]=s=>h.getFilterProducts())}," 搜尋 ")])])]),e("div",At,[e("div",qt,[e("button",{type:"button",class:"block lg:hidden whitespace-nowrap font-medium rounded-l-lg text-sm px-4 py-3 border border-secondary2 bg-secondary",onClick:t[19]||(t[19]=s=>o.filterDrawer.show())},[d(p,{icon:["fas","filter"]}),P(" 篩選 ")]),e("form",Dt,[Et,e("div",Ft,[Nt,n(e("input",{type:"search",id:"search",class:"block w-full p-3 lg:pl-10 text-sm rounded-r-lg lg:rounded-l-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-primary-0 focus:border-primary",placeholder:"請輸入關鍵字","onUpdate:modelValue":t[20]||(t[20]=s=>r.filters.title=s)},null,512),[[k,r.filters.title]]),e("button",{type:"button",class:"absolute top-0 right-0 p-3 text-sm font-medium text-white rounded-r-lg border border-primary2 focus:ring focus:outline-none bg-primary hover:bg-primary2 focus:ring-primary3",onClick:t[21]||(t[21]=s=>h.getFilterProducts())},Wt),e("button",{type:"button",class:"hidden md:block text-white absolute right-12 bottom-1.5 hover:text-gray-300",onClick:t[22]||(t[22]=s=>r.filters.title="")},[d(p,{icon:["fas","delete-left"],class:"cursor-pointer text-3xl mr-2"})])])])]),r.products.length?(l(),a("div",Gt,[(l(!0),a(y,null,v(r.products,(s,x)=>(l(),T(u,{key:s.id,to:`./product/${s.id}`,class:"group",onMouseover:w=>r.productImages[x]=s.imagesUrl?s.imagesUrl[0]:s.imageUrl,onMouseleave:w=>r.productImages[x]=s.imageUrl},{default:_(()=>[e("div",Jt,[e("img",{class:"h-1/2 md:h-3/5 w-full object-cover bg-white group-hover:opacity-30 ease-in-out duration-300",src:r.productImages[x],alt:"商品圖片"},null,8,Kt),e("div",Qt,[e("div",Yt,c(s.category),1)]),e("div",Zt,[e("button",{type:"button",class:"focus:outline-none focus:ring-4 font-medium rounded text-md px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3",onClick:M(w=>o.productModal.openModal(s),["prevent","stop"])},[d(p,{icon:["fas","cart-plus"],class:"cursor-pointer text-lg mr-2"}),P(" 加入購物車 ")],8,er)]),e("div",tr,[e("div",rr,[e("h4",sr,c(s.brand),1),e("div",or,[d(p,{icon:["fas","cart-plus"],class:"cursor-pointer block lg:hidden",onClick:M(w=>o.productModal.openModal(s),["prevent","stop"])},null,8,["onClick"]),d(p,{icon:["fas","heart"],class:S(["cursor-pointer",[o.favorites.some(w=>w.id===s.id)?"text-primary2":"text-white hover:text-primary"]]),onClick:M(w=>o.updateFavorite(s),["prevent","stop"])},null,8,["class","onClick"])])]),e("h3",lr,c(s.title),1),e("div",ir,[e("p",nr," NT$ "+c(o.$filters.currency(s.origin_price)),1),e("p",ar," NT$ "+c(o.$filters.currency(s.price)),1)])])])]),_:2},1032,["to","onMouseover","onMouseleave"]))),128))])):(l(),a("p",dr,"搜尋不到相符的商品！")),e("div",cr,[d(m,{"page-obj":r.pagination,onEmitPage:h.changePages},null,8,["page-obj","onEmitPage"])])]),d(b,{ref:"productModal",page:r.pagination.current_page},null,8,["page"])])]),d(L)],64)}const xr=z(Fe,[["render",ur]]);export{xr as default};
