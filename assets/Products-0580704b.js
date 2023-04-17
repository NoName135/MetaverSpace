import{N as q,S as O,a as $}from"./navigation.min-49d424f3.js";import{m as D,a as C,l as E,_ as F,r as g,o as i,c as a,b as e,d as n,w as b,s as B,F as x,g as k,j as I,t as d,i as l,u as X,f as L,v,h as w,x as p,e as R,n as W}from"./index-7ece7855.js";import{P as N,A as G}from"./pagination.min-5f233c44.js";import{M as J,D as K}from"./index-9908806f.js";import{c as z}from"./cartStore-34a3ad62.js";import{s as H}from"./swal-3e866175.js";import{P as Q}from"./UserPagination-95a59607.js";import{f as A}from"./favoriteStore-db9f74f6.js";const Y={props:["page"],mixins:[H],data(){return{productModules:[q,N],tempProduct:[],cartSpec:"",qty:1}},methods:{openModal(o){this.tempProduct={...o},console.log(this.tempProduct),this.$refs.productSwiper.$el.swiper.slideTo(0),this.cartSpec="",this.qty=1,this.productModal.show()},...D(z,["getCart","addCart","createModalRef"])},computed:{...C(E,["loadings"]),...C(z,["cart","cartLoading"])},watch:{qty(){this.qty<1&&(this.qty=1),this.qty>99&&(this.qty=99)}},mounted(){const o={placement:"center",backdrop:"dynamic",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-30",closable:!0};this.productModal=new J(this.$refs.productModal,o),this.createModalRef(this.productModal)},components:{Swiper:O,SwiperSlide:$}},Z={ref:"productModal",id:"productModal","data-modal-backdrop":"static",tabindex:"-1","aria-hidden":"true",class:"fixed top-8 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full max-h-[calc(100vh-3rem)]"},ee={class:"relative w-full h-full max-w-2xl xl:h-auto"},te={class:"rounded-lg overflow-hidden shadow bg-dark"},se={class:"flex items-start justify-between p-4 border rounded-t-lg border-gray-600 bg-black fixed xl:static top-5 w-[calc(100%-2rem)] md:w-full max-w-2xl z-50"},re=e("h3",{class:"text-lg md:text-xl font-semibold text-white"}," 請選擇商品及數量 ",-1),oe=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),le=[oe],ie={class:"p-6 space-x-2 bg-dark border-t border-gray-400"},ne={class:"flex items-center"},ae={class:"col-span-2 text-lg md:text-xl mr-3"},de={class:"bg-white/30 px-3 py-2 rounded text-xs"},ce={class:"mt-2 text-xl md:text-2xl font-bold"},ue=["innerHTML"],me={class:"text-primary text-lg md:text-xl font-bold mt-4"},pe={class:"p-6 space-x-2 border-t rounded-b border-gray-400 bg-white/10"},ge=e("template",null,null,-1),fe={key:0,class:"flex flex-wrap items-center"},he=e("h5",{class:"text-lg mr-3 mb-6"},"規格：",-1),ye={class:"mb-6"},xe=["id","value"],be=["for"],_e={key:1,class:"text-sm"},ve={class:"sm:flex items-center mt-2"},we={class:"flex items-center"},ke={class:"flex"},Pe=["disabled"],Me=["disabled"],Ce=["disabled"],Ve={key:0,class:"animate-spin h-5 w-5 mr-3 text-white absolute",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Ue=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),Se=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),Le=[Ue,Se];function Re(o,t,c,V,s,f){var M,u;const P=g("swiper-slide"),U=g("swiper");return i(),a("div",Z,[e("div",ee,[e("div",te,[e("div",se,[re,e("button",{type:"button",class:"text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white",onClick:t[0]||(t[0]=m=>o.productModal.hide())},le)]),e("div",ie,[n(U,{ref:"productSwiper",spaceBetween:30,centeredSlides:!0,navigation:!0,observer:!0,pagination:{clickable:!0},modules:s.productModules,class:"productModalSwiper h-56 sm:h-80 md:h-96 bg-white"},{default:b(()=>[n(P,{class:"relative"},{default:b(()=>[e("div",{class:"h-full bg-cover bg-center",style:B({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${s.tempProduct.imageUrl})`})},null,4)]),_:1}),(i(!0),a(x,null,k(s.tempProduct.imagesUrl,(m,h)=>(i(),I(P,{key:h,class:"relative"},{default:b(()=>[e("div",{class:"h-full bg-cover bg-center",style:B({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${m})`})},null,4)]),_:2},1024))),128))]),_:1},8,["modules"]),e("div",ne,[e("h4",ae,d(s.tempProduct.brand),1),e("div",de,d(s.tempProduct.category),1)]),e("h3",ce,d(s.tempProduct.title),1),e("p",{class:"mt-2 ellipse5",innerHTML:s.tempProduct.description},null,8,ue),e("p",me," NT$ "+d(o.$filters.currency(s.tempProduct.price)),1)]),e("div",pe,[ge,s.tempProduct.spec?(i(),a("div",fe,[he,(i(!0),a(x,null,k(s.tempProduct.spec,(m,h)=>(i(),a("ul",{class:"flex flex-wrap text-sm",key:h},[e("li",ye,[l(e("input",{type:"radio",id:`spec${h}`,name:"spec",value:m,"onUpdate:modelValue":t[1]||(t[1]=S=>s.cartSpec=S),class:"hidden peer",required:""},null,8,xe),[[X,s.cartSpec]]),e("label",{for:`spec${h}`,class:"mr-2 bg-black hover:bg-primary2 peer-checked:bg-primary peer-checked:hover:bg-primary2 peer-checked:ring-1 peer-checked:ring-white px-3 py-2 rounded cursor-pointer"},d(m),9,be)])]))),128))])):L("",!0),(M=s.tempProduct.spec)!=null&&M.length?(i(),a("p",_e," ※ 選擇規格後才能加入購物車 ")):L("",!0),e("div",ve,[e("div",we,[e("div",ke,[e("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed",onClick:t[2]||(t[2]=m=>s.qty-=1),disabled:s.qty===1}," － ",8,Pe),l(e("input",{type:"number",class:"w-12 bg-dark text-sm text-end focus:border-secondary",min:"1",max:"99","onUpdate:modelValue":t[3]||(t[3]=m=>s.qty=m)},null,512),[[v,s.qty,void 0,{lazy:!0}]]),e("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed",onClick:t[4]||(t[4]=m=>s.qty+=1),disabled:s.qty===99}," ＋ ",8,Me)])]),e("button",{type:"button",class:"w-full primary-button sm:ml-2 mt-4 sm:mt-0 relative",disabled:o.cartLoading.productModal||((u=s.tempProduct.spec)!=null&&u.length?!s.cartSpec:!1),onClick:t[5]||(t[5]=m=>o.addCart(s.tempProduct,s.qty,s.cartSpec))},[o.cartLoading.productModal?(i(),a("svg",Ve,Le)):L("",!0),w(" 加入購物車 ")],8,Ce)])])])])],512)}const Te=F(Y,[["render",Re]]),{VITE_API:T,VITE_PATH:j}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},je={mixins:[H],data(){return{articles:[],allProducts:[],filterProducts:[],products:[],pagination:{},filtersBrand:[],filters:{title:"",brand:[],category:[],minPrice:null,maxPrice:null},windowWidth:0,articleModules:[q,N,G],productImages:[]}},methods:{async getAll(){this.loadings.fullLoading=!0,await Promise.all([this.$http.get(`${T}/api/${j}/products/all`),this.$http.get(`${T}/api/${j}/articles`)]).then(o=>{this.allProducts=Object.values(o[0].data.products).reverse(),this.allProducts.forEach(t=>{this.filtersBrand.indexOf(t.brand)===-1&&this.filtersBrand.push(t.brand)}),this.getFilterProducts(),this.articles=o[1].data.articles,console.log(this.articles)}).catch(o=>{this.loadings.fullLoading=!1,this.userToast("error",o.response.data.message)})},async getProducts(){this.loadings.fullLoading=!0,await this.$http.get(`${T}/api/${j}/products/all`).then(o=>{this.allProducts=Object.values(o.data.products).reverse(),this.allProducts.forEach(t=>{this.filtersBrand.indexOf(t.brand)===-1&&this.filtersBrand.push(t.brand)}),this.getFilterProducts()}).catch(o=>{this.loadings.fullLoading=!1,this.userToast("error",o.response.data.message)})},getFilterProducts(o=1){this.filterProducts=this.allProducts.filter(c=>(this.filters.title?c.title.toLowerCase().indexOf(this.filters.title.toLowerCase().trim())>-1:!0)&&(this.filters.brand.length>0?this.filters.brand.indexOf(c.brand)>-1:!0)&&(this.filters.category.length>0?this.filters.category.indexOf(c.category)>-1:!0)&&(this.filters.minPrice?this.filters.minPrice<=c.price:!0)&&(this.filters.maxPrice?this.filters.maxPrice>=c.price:!0)),this.products=this.filterProducts.filter((c,V)=>Math.ceil((V+1)/12)==o),this.productImages=[],this.products.forEach(c=>{this.productImages.push(c.imageUrl)});const t=Math.ceil(Object.keys(this.filterProducts).length/12);this.pagination={total_pages:t,current_page:o,has_pre:o!==1,has_next:o!==t},this.loadings.fullLoading=!1,console.log(this.products)},changePages(o=1){this.products=Object.values(this.filterProducts).filter((t,c)=>Math.ceil((c+1)/12)==o),this.productImages=[],this.products.forEach(t=>{this.productImages.push(t.imageUrl)}),this.pagination.current_page=o,this.pagination.has_pre=o!==1,this.pagination.has_next=o!==this.pagination.total_pages},...D(A,["updateFavorite"])},computed:{...C(E,["loadings"]),...C(A,["favorites"])},watch:{filters:{handler(){this.filters.minPrice&&(this.filters.minPrice<1?this.filters.minPrice=1:this.filters.minPrice),this.filters.maxPrice&&(this.filters.maxPrice<this.filters.minPrice?this.filters.maxPrice=this.filters.minPrice:this.filters.maxPrice)},deep:!0}},mounted(){this.windowWidth=window.innerWidth,this.productModal=this.$refs.productModal;const o={placement:"left",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-30"};this.filterDrawer=new K(this.$refs.filterDrawer,o),this.getAll()},components:{Swiper:O,SwiperSlide:$,UserProductModal:Te,ProductsPagination:Q}},Be={class:"container mt-nav"},Ie={class:"px-10 sm:px-20 md:px-24 lg:px-32 h-full flex flex-col justify-around"},ze={class:"font-bold text-2xl lg:text-3xl"},Ae=["innerHTML"],qe={class:"grid grid-cols-4 gap-2 mx-2 lg:mx-0"},Oe={ref:"filterDrawer",id:"filterDrawer",class:"fixed lg:hidden top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full w-60 bg-dark",tabindex:"-1","aria-labelledby":"drawer-label"},$e={class:"sticky top-0 bg-dark p-5 flex justify-between items-center"},De={class:"text-xl font-bold"},Ee=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Fe=e("span",{class:"sr-only"},"Close menu",-1),Ne=[Ee,Fe],He={class:"px-5 pb-5"},Xe=e("p",{class:"text-lg mt-1"},"類別",-1),We={class:"flex items-center mt-4"},Ge=e("label",{for:"m-ar",class:"ml-2 text-sm font-medium text-gray-300"},"AR (擴增實境)",-1),Je={class:"flex items-center mt-4"},Ke=e("label",{for:"m-vr",class:"ml-2 text-sm font-medium text-gray-300"},"VR (虛擬實境)",-1),Qe={class:"flex items-center mt-4"},Ye=e("label",{for:"m-mr",class:"ml-2 text-sm font-medium text-gray-300"},"MR (混合實境)",-1),Ze={class:"flex items-center mt-4"},et=e("label",{for:"m-xr",class:"ml-2 text-sm font-medium text-gray-300"},"XR (延展實境)",-1),tt={class:"flex items-center mt-4"},st=e("label",{for:"m-accessory",class:"ml-2 text-sm font-medium text-gray-300"},"商品配件",-1),rt=e("p",{class:"text-lg mt-6"},"品牌",-1),ot=["id","value","onUpdate:modelValue"],lt=["for"],it=e("p",{class:"text-lg mt-6"},"價格區間",-1),nt={class:"flex items-center mt-4"},at={class:"flex mt-6"},dt={class:"hidden lg:block col-span-1"},ct={class:"py-8 top-nav"},ut={class:"text-xl font-bold"},mt=e("p",{class:"text-lg mt-6"},"類別",-1),pt={class:"flex items-center mt-4"},gt=e("label",{for:"ar",class:"ml-2 text-sm font-medium text-gray-300"},"AR (擴增實境)",-1),ft={class:"flex items-center mt-4"},ht=e("label",{for:"vr",class:"ml-2 text-sm font-medium text-gray-300"},"VR (虛擬實境)",-1),yt={class:"flex items-center mt-4"},xt=e("label",{for:"mr",class:"ml-2 text-sm font-medium text-gray-300"},"MR (混合實境)",-1),bt={class:"flex items-center mt-4"},_t=e("label",{for:"xr",class:"ml-2 text-sm font-medium text-gray-300"},"XR (延展實境)",-1),vt={class:"flex items-center mt-4"},wt=e("label",{for:"accessory",class:"ml-2 text-sm font-medium text-gray-300"},"商品配件",-1),kt=e("p",{class:"text-lg mt-6"},"品牌",-1),Pt=["id","value","onUpdate:modelValue"],Mt=["for"],Ct=e("p",{class:"text-lg mt-6"},"價格區間",-1),Vt={class:"flex items-center mt-4"},Ut={class:"flex mt-6"},St={class:"col-span-full lg:col-span-3"},Lt={class:"my-8 flex items-center"},Rt={class:"grow"},Tt=e("label",{for:"search",class:"text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),jt={class:"relative"},Bt=e("div",{class:"hidden lg:flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),It=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1),zt=e("span",{class:"sr-only"},"Search",-1),At=[It,zt],qt={key:0,class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4"},Ot={class:"h-[300px] md:h-[420px] rounded-lg border overflow-hidden relative"},$t=["src"],Dt={class:"absolute top-2 left-3 sm:top-3 sm:left-4"},Et={class:"bg-dark px-3 py-2 rounded text-xs mr-1"},Ft={class:"hidden lg:group-hover:flex absolute top-[45%] justify-center w-full"},Nt=["onClick"],Ht={class:"p-4 md:p-5 h-1/2 md:h-2/5 flex flex-col justify-between",style:{background:`linear-gradient(
                      142.88deg,
                      rgba(255, 255, 255, 0.16) 8.09%,
                      rgba(255, 255, 255, 0.064) 27.24%,
                      rgba(255, 255, 255, 0.064) 34.42%,
                      rgba(255, 255, 255, 0.1088) 48.78%,
                      rgba(255, 255, 255, 0) 100%
                    )`}},Xt={class:"grid grid-cols-3"},Wt={class:"col-span-2 text-xl"},Gt={class:"flex justify-between lg:justify-end text-2xl"},Jt={class:"mt-2 text-xl font-bold"},Kt={class:"mt-2 flex justify-between items-end"},Qt={class:"text-gray-400 line-through"},Yt={class:"text-primary text-lg font-bold"},Zt={key:1,class:"ml-4"},es={class:"mt-8 flex justify-center"};function ts(o,t,c,V,s,f){const P=g("router-link"),U=g("swiper-slide"),M=g("swiper"),u=g("font-awesome-icon"),m=g("ProductsPagination"),h=g("UserProductModal"),S=g("ScrollTop");return i(),a(x,null,[e("div",Be,[n(M,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,pagination:{clickable:!0},observer:!0,modules:s.articleModules,class:"productsArticleSwiper h-96"},{default:b(()=>[(i(!0),a(x,null,k(s.articles,r=>(i(),I(U,{key:r.id},{default:b(()=>[e("div",{class:"h-full bg-cover bg-center",style:B({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${r.image})`})},[e("div",Ie,[e("div",null,[e("h2",ze,d(r.title),1),e("p",{class:"mt-8 text-lg lg:text-xl",innerHTML:r.description},null,8,Ae)]),n(P,{to:`/article/${r.id}`,class:"primary-button w-24"},{default:b(()=>[w("查看詳情")]),_:2},1032,["to"])])],4)]),_:2},1024))),128))]),_:1},8,["modules"]),e("div",qe,[e("div",Oe,[e("div",$e,[e("h3",De,[n(u,{icon:["fas","filter"]}),w(" 條件篩選 ")]),e("button",{type:"button","aria-controls":"filterDrawer",class:"text-gray-400 bg-transparent rounded-lg text-sm p-1.5 hover:bg-black/50 hover:text-white",onClick:t[0]||(t[0]=r=>o.filterDrawer.hide())},Ne)]),e("div",He,[Xe,e("div",We,[l(e("input",{id:"m-ar",type:"checkbox",value:"AR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[1]||(t[1]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),Ge]),e("div",Je,[l(e("input",{id:"m-vr",type:"checkbox",value:"VR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[2]||(t[2]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),Ke]),e("div",Qe,[l(e("input",{id:"m-mr",type:"checkbox",value:"MR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[3]||(t[3]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),Ye]),e("div",Ze,[l(e("input",{id:"m-xr",type:"checkbox",value:"XR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[4]||(t[4]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),et]),e("div",tt,[l(e("input",{id:"m-accessory",type:"checkbox",value:"配件",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[5]||(t[5]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),st]),rt,(i(!0),a(x,null,k(s.filtersBrand,r=>(i(),a("div",{key:r,class:"flex items-center mt-4"},[l(e("input",{id:`m-${r}`,type:"checkbox",value:r,class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":y=>s.filters.brand=y},null,8,ot),[[p,s.filters.brand]]),e("label",{for:`m-${r}`,class:"ml-2 text-sm font-medium text-gray-300"},d(r),9,lt)]))),128)),it,e("div",nt,[l(e("input",{type:"number",placeholder:"$最小值",min:"1",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[6]||(t[6]=r=>s.filters.minPrice=r)},null,512),[[v,s.filters.minPrice]]),n(u,{icon:["fas","minus"],class:"text-3xl mx-3"}),l(e("input",{type:"number",placeholder:"$最大值",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[7]||(t[7]=r=>s.filters.maxPrice=r)},null,512),[[v,s.filters.maxPrice]])]),e("div",at,[e("button",{type:"button",class:"w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3",onClick:t[8]||(t[8]=()=>{this.filters={title:"",brand:[],category:[],minPrice:null,maxPrice:null},f.getFilterProducts()})}," 清除 "),e("button",{type:"button",class:"ml-8 w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3",onClick:t[9]||(t[9]=r=>f.getFilterProducts())}," 搜尋 ")])])],512),e("div",dt,[e("div",ct,[e("h3",ut,[n(u,{icon:["fas","filter"]}),w(" 條件篩選 ")]),mt,e("div",pt,[l(e("input",{id:"ar",type:"checkbox",value:"AR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[10]||(t[10]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),gt]),e("div",ft,[l(e("input",{id:"vr",type:"checkbox",value:"VR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[11]||(t[11]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),ht]),e("div",yt,[l(e("input",{id:"mr",type:"checkbox",value:"MR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[12]||(t[12]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),xt]),e("div",bt,[l(e("input",{id:"xr",type:"checkbox",value:"XR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[13]||(t[13]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),_t]),e("div",vt,[l(e("input",{id:"accessory",type:"checkbox",value:"配件",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[14]||(t[14]=r=>s.filters.category=r)},null,512),[[p,s.filters.category]]),wt]),kt,(i(!0),a(x,null,k(s.filtersBrand,r=>(i(),a("div",{key:r,class:"flex items-center mt-4"},[l(e("input",{id:r,type:"checkbox",value:r,class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":y=>s.filters.brand=y},null,8,Pt),[[p,s.filters.brand]]),e("label",{for:r,class:"ml-2 text-sm font-medium text-gray-300"},d(r),9,Mt)]))),128)),Ct,e("div",Vt,[l(e("input",{type:"number",placeholder:"$最小值",min:"1",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[15]||(t[15]=r=>s.filters.minPrice=r)},null,512),[[v,s.filters.minPrice,void 0,{lazy:!0}]]),n(u,{icon:["fas","minus"],class:"text-3xl mx-3"}),l(e("input",{type:"number",placeholder:"$最大值",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[16]||(t[16]=r=>s.filters.maxPrice=r)},null,512),[[v,s.filters.maxPrice,void 0,{lazy:!0}]])]),e("div",Ut,[e("button",{type:"button",class:"w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3",onClick:t[17]||(t[17]=()=>{this.filters={title:"",brand:[],category:[],minPrice:null,maxPrice:null},f.getFilterProducts()})}," 清除 "),e("button",{type:"button",class:"ml-8 w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3",onClick:t[18]||(t[18]=r=>f.getFilterProducts())}," 搜尋 ")])])]),e("div",St,[e("div",Lt,[e("button",{type:"button",class:"block lg:hidden whitespace-nowrap font-medium rounded-l-lg text-sm px-4 py-3 border border-secondary2 bg-secondary",onClick:t[19]||(t[19]=r=>o.filterDrawer.show())},[n(u,{icon:["fas","filter"]}),w(" 篩選 ")]),e("form",Rt,[Tt,e("div",jt,[Bt,l(e("input",{type:"search",id:"search",class:"block w-full p-3 lg:pl-10 text-sm rounded-r-lg lg:rounded-l-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-primary-0 focus:border-primary",placeholder:"請輸入關鍵字","onUpdate:modelValue":t[20]||(t[20]=r=>s.filters.title=r)},null,512),[[v,s.filters.title]]),e("button",{type:"button",class:"absolute top-0 right-0 p-3 text-sm font-medium text-white rounded-r-lg border border-primary2 focus:ring focus:outline-none bg-primary hover:bg-primary2 focus:ring-primary3",onClick:t[21]||(t[21]=r=>f.getFilterProducts())},At),e("button",{type:"button",class:"hidden md:block text-white absolute right-12 bottom-1.5 hover:text-gray-300",onClick:t[22]||(t[22]=r=>s.filters.title="")},[n(u,{icon:["fas","delete-left"],class:"cursor-pointer text-3xl mr-2"})])])])]),s.products.length?(i(),a("div",qt,[(i(!0),a(x,null,k(s.products,(r,y)=>(i(),I(P,{key:r.id,to:`./product/${r.id}`,class:"group",onMouseover:_=>s.productImages[y]=r.imagesUrl?r.imagesUrl[0]:r.imageUrl,onMouseleave:_=>s.productImages[y]=r.imageUrl},{default:b(()=>[e("div",Ot,[e("img",{class:"h-1/2 md:h-3/5 w-full object-cover bg-white group-hover:opacity-30 ease-in-out duration-300",src:s.productImages[y],alt:"商品圖片"},null,8,$t),e("div",Dt,[e("div",Et,d(r.category),1)]),e("div",Ft,[e("button",{type:"button",class:"focus:outline-none focus:ring-4 font-medium rounded text-md px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3",onClick:R(_=>o.productModal.openModal(r),["prevent","stop"])},[n(u,{icon:["fas","cart-plus"],class:"cursor-pointer text-lg mr-2"}),w(" 加入購物車 ")],8,Nt)]),e("div",Ht,[e("div",Xt,[e("h4",Wt,d(r.brand),1),e("div",Gt,[n(u,{icon:["fas","cart-plus"],class:"cursor-pointer block lg:hidden",onClick:R(_=>o.productModal.openModal(r),["prevent","stop"])},null,8,["onClick"]),n(u,{icon:["fas","heart"],class:W(["cursor-pointer",[o.favorites.some(_=>_.id===r.id)?"text-primary2":"text-white hover:text-primary"]]),onClick:R(_=>o.updateFavorite(r),["prevent","stop"])},null,8,["class","onClick"])])]),e("h3",Jt,d(r.title),1),e("div",Kt,[e("p",Qt," NT$ "+d(o.$filters.currency(r.origin_price)),1),e("p",Yt," NT$ "+d(o.$filters.currency(r.price)),1)])])])]),_:2},1032,["to","onMouseover","onMouseleave"]))),128))])):(i(),a("p",Zt,"搜尋不到相符的商品！")),e("div",es,[n(m,{"page-obj":s.pagination,onEmitPage:f.changePages},null,8,["page-obj","onEmitPage"])])]),n(h,{ref:"productModal",page:s.pagination.current_page},null,8,["page"])])]),n(S)],64)}const cs=F(je,[["render",ts]]);export{cs as default};
