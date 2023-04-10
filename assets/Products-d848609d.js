import{N as B,S as D,a as z}from"./navigation.min-7a18d1c4.js";import{b as F,s as L,_ as T,r as g,o as a,e as p,f as e,g as i,w as x,x as U,F as y,k as _,y as S,t as d,l,z as A,j as O,v as b,u as N,i as w,A as m,h as C}from"./index-d366a128.js";import{P as E,A as q}from"./pagination.min-076b3ee6.js";import{M as G,D as H}from"./index-9908806f.js";import{s as I}from"./swal-3e866175.js";import{P as Q}from"./UserPagination-90f4034b.js";const X={props:["page"],mixins:[I],data(){return{productModules:[B,E],tempProduct:[],cartSpec:"",qty:1}},methods:{openModal(o){this.tempProduct={...o},console.log(this.tempProduct),this.$refs.productSwiper.$el.swiper.slideTo(0),this.cartSpec="",this.qty=1,this.productModal.show()}},computed:{...F(L,["loadings"])},watch:{qty(){this.qty<1&&(this.qty=1),this.qty>99&&(this.qty=99)}},mounted(){const o={placement:"center",backdrop:"dynamic",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-30",closable:!0};this.productModal=new G(this.$refs.productModal,o)},components:{Swiper:D,SwiperSlide:z}},W={ref:"productModal",id:"productModal","data-modal-backdrop":"static",tabindex:"-1","aria-hidden":"true",class:"fixed top-8 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full max-h-[calc(100vh-3rem)]"},Z={class:"relative w-full h-full max-w-2xl xl:h-auto"},J={class:"rounded-lg overflow-hidden shadow bg-dark"},K={class:"flex items-start justify-between p-4 border rounded-t-lg border-gray-600 bg-black fixed xl:static top-5 w-[calc(100%-2rem)] md:w-full max-w-2xl z-50"},$=e("h3",{class:"text-lg md:text-xl font-semibold text-white"}," 請選擇商品及數量 ",-1),Y=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ee=[Y],te={class:"p-6 space-x-2 bg-dark border-t border-gray-400"},se={class:"flex items-center"},re={class:"col-span-2 text-lg md:text-xl mr-3"},oe={class:"bg-white/30 px-3 py-2 rounded text-xs"},le={class:"mt-2 text-xl md:text-2xl font-bold"},ie=["innerHTML"],ne={class:"text-primary text-lg md:text-xl font-bold mt-4"},ae={class:"p-6 space-x-2 border-t rounded-b border-gray-400 bg-white/10"},de=e("template",null,null,-1),ce={key:0,class:"flex flex-wrap items-center"},ue=e("h5",{class:"text-lg mr-3 mb-6"},"規格：",-1),me={class:"mb-6"},pe=["id","value"],ge=["for"],fe={class:"sm:flex items-center mt-2"},he={class:"flex items-center"},ye={class:"flex"};function xe(o,t,c,P,r,f){const v=g("swiper-slide"),M=g("swiper");return a(),p("div",W,[e("div",Z,[e("div",J,[e("div",K,[$,e("button",{type:"button",class:"text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white",onClick:t[0]||(t[0]=u=>o.productModal.hide())},ee)]),e("div",te,[i(M,{ref:"productSwiper",spaceBetween:30,centeredSlides:!0,navigation:!0,observer:!0,pagination:{clickable:!0},modules:r.productModules,class:"productModalSwiper h-56 sm:h-80 md:h-96 bg-white"},{default:x(()=>[i(v,{class:"relative"},{default:x(()=>[e("div",{class:"h-full bg-cover bg-center",style:U({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${r.tempProduct.imageUrl})`})},null,4)]),_:1}),(a(!0),p(y,null,_(r.tempProduct.imagesUrl,(u,n)=>(a(),S(v,{key:n,class:"relative"},{default:x(()=>[e("div",{class:"h-full bg-cover bg-center",style:U({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${u})`})},null,4)]),_:2},1024))),128))]),_:1},8,["modules"]),e("div",se,[e("h4",re,d(r.tempProduct.brand),1),e("div",oe,d(r.tempProduct.category),1)]),e("h3",le,d(r.tempProduct.title),1),e("p",{class:"mt-2 ellipse5",innerHTML:r.tempProduct.description},null,8,ie),e("p",ne," NT$ "+d(o.$filters.currency(r.tempProduct.price)),1)]),e("div",ae,[de,r.tempProduct.spec?(a(),p("div",ce,[ue,(a(!0),p(y,null,_(r.tempProduct.spec,(u,n)=>(a(),p("ul",{class:"flex flex-wrap text-sm",key:n},[e("li",me,[l(e("input",{type:"radio",id:`spec${n}`,name:"spec",value:u,"onUpdate:modelValue":t[1]||(t[1]=V=>r.cartSpec=V),class:"hidden peer",required:""},null,8,pe),[[A,r.cartSpec]]),e("label",{for:`spec${n}`,class:"mr-2 bg-black hover:bg-primary2 peer-checked:bg-primary peer-checked:hover:bg-primary2 peer-checked:ring-1 peer-checked:ring-white px-3 py-2 rounded cursor-pointer"},d(u),9,ge)])]))),128))])):O("",!0),e("div",fe,[e("div",he,[e("div",ye,[e("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm",onClick:t[2]||(t[2]=u=>r.qty-=1)}," － "),l(e("input",{type:"number",class:"w-12 bg-dark text-sm text-end focus:border-secondary",min:"1",max:"99","onUpdate:modelValue":t[3]||(t[3]=u=>r.qty=u)},null,512),[[b,r.qty,void 0,{lazy:!0}]]),e("button",{type:"button",class:"bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm",onClick:t[4]||(t[4]=u=>r.qty+=1)}," ＋ ")])]),e("button",{type:"button",class:"w-full primary-button sm:ml-2 mt-4 sm:mt-0",onClick:t[5]||(t[5]=u=>o.productModal.hide())}," 加入購物車 ")])])])])],512)}const be=T(X,[["render",xe]]),{VITE_API:_e,VITE_PATH:ve}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},we={mixins:[N,I],data(){return{allProducts:[],filterProducts:[],products:[],pagination:{},filtersBrand:[],filters:{title:"",brand:[],category:[],minPrice:null,maxPrice:null},windowWidth:0,articleModules:[B,E,q],productImages:[],articles:[{id:1,title:"歡慶開幕",content:"~限時折扣~<br>全館9折優惠",img:"https://storage.googleapis.com/vue-course-api.appspot.com/weekhomeworks/1678191797417.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=L1XAs71p34dfbvfcswNctBS00%2B7pVJ3T4Hk8%2F2It8VLb%2FFS%2BHhLTpX4ZQYiaU1hkNesmoBMCwobts4dNCADTPTLK3KOTVHfL3wZXVAfSu3VpCrDm%2BbcFB95AwC3DloL71RkgRTr68EcWr0WmxRt0y0tQZg7PLQ2%2BQqymfYu89YZbfj3EKa06BFh6uDCHS8MEg%2F90ut%2FFshiJ0%2FjhcUyBWBEG%2FeFhrgNYSSV8GKZcmSt%2BGhfJiuzvizDAQj4xy%2Fjr9kUo6U2yxC2ZiKM7lTWr4%2BFaAzSylD%2FJgOWPhywUQNuCPnC3U5jl2Xh7zSzRnSzdET06UuwG0bfkB7o954%2FbQw%3D%3D"},{id:2,title:"還沒想到",content:"這個內容我不知道要打什麼",img:"https://storage.googleapis.com/vue-course-api.appspot.com/weekhomeworks/1678190390342.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MjgRHPJoefbWd0YHnCszl1RH1qDhsZknTl1IhN01Q0bMVlZ%2B%2FnUsbOvB6q%2B%2BBcz58DXvoifVilxEGFr4L%2FCldfpGO1MrTJRVic7i2mnPPo9wk7m2%2B2D9OfGlGl8ibNDhGNKnOzqrtIkrOk9uD1tidKmwkSlimzVf0PQcql6k%2BtXpknDPvglgv9Ez2VNGWuZ8MEfxX3VLGLI4QcokPgTv4MLEeDGuNoamyX4YFezNdMHsJMLjlA%2Fr45yPm5aZyDkrxpJiPQXkWgrC%2BFDR6fiD9ECMPyu64I3Hraar82Efbs04Q2IoYxeJ7IJfrkaYhtGlEvauEKxrOsqoKwZQEddIbw%3D%3D"}]}},methods:{getProducts(){this.loadings.fullLoading=!0,this.$http.get(`${_e}/api/${ve}/products/all`).then(o=>{this.allProducts=Object.values(o.data.products).reverse(),this.allProducts.forEach(t=>{this.filtersBrand.indexOf(t.brand)===-1&&this.filtersBrand.push(t.brand)}),this.getFilterProducts()}).catch(o=>{this.userToast("error",o.response.data.message)})},getFilterProducts(o=1){this.filterProducts=this.allProducts.filter(c=>(this.filters.title?c.title.toLowerCase().indexOf(this.filters.title.toLowerCase().trim())>-1:!0)&&(this.filters.brand.length>0?this.filters.brand.indexOf(c.brand)>-1:!0)&&(this.filters.category.length>0?this.filters.category.indexOf(c.category)>-1:!0)&&(this.filters.minPrice?this.filters.minPrice<=c.price:!0)&&(this.filters.maxPrice?this.filters.maxPrice>=c.price:!0)),this.products=this.filterProducts.filter((c,P)=>Math.ceil((P+1)/12)==o),this.productImages=[],this.products.forEach(c=>{this.productImages.push(c.imageUrl)});const t=Math.ceil(Object.keys(this.filterProducts).length/12);this.pagination={total_pages:t,current_page:o,has_pre:o!==1,has_next:o!==t},this.loadings.fullLoading=!1,console.log(this.products)},changePages(o=1){this.products=Object.values(this.filterProducts).filter((t,c)=>Math.ceil((c+1)/12)==o),this.productImages=[],this.products.forEach(t=>{this.productImages.push(t.imageUrl)}),this.pagination.current_page=o,this.pagination.has_pre=o!==1,this.pagination.has_next=o!==this.pagination.total_pages}},computed:{...F(L,["loadings"])},watch:{filters:{handler(){this.filters.minPrice&&(this.filters.minPrice<1?this.filters.minPrice=1:this.filters.minPrice),this.filters.maxPrice&&(this.filters.maxPrice<this.filters.minPrice?this.filters.maxPrice=this.filters.minPrice:this.filters.maxPrice)},deep:!0}},mounted(){this.windowWidth=window.innerWidth,this.productModal=this.$refs.productModal;const o={placement:"left",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-30"};this.filterDrawer=new H(this.$refs.filterDrawer,o),this.getProducts()},components:{Swiper:D,SwiperSlide:z,UserProductModal:be,ProductsPagination:Q}},ke={class:"container mt-nav"},Pe={class:"px-10 sm:px-20 md:px-24 lg:px-32 h-full flex flex-col justify-around"},Me={class:"font-bold text-2xl lg:text-3xl"},Ve=["innerHTML"],Ce={class:"grid grid-cols-4 gap-2 mx-2 lg:mx-0"},Ue={ref:"filterDrawer",id:"filterDrawer",class:"fixed lg:hidden top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full w-60 bg-dark",tabindex:"-1","aria-labelledby":"drawer-label"},Se={class:"sticky top-0 bg-dark p-5 flex justify-between items-center"},Be={class:"text-xl font-bold"},De=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ze=e("span",{class:"sr-only"},"Close menu",-1),Fe=[De,ze],Le={class:"px-5 pb-5"},Te=e("p",{class:"text-lg mt-1"},"類別",-1),Ee={class:"flex items-center mt-4"},Ie=e("label",{for:"m-ar",class:"ml-2 text-sm font-medium text-gray-300"},"AR (擴增實境)",-1),Re={class:"flex items-center mt-4"},je=e("label",{for:"m-vr",class:"ml-2 text-sm font-medium text-gray-300"},"VR (虛擬實境)",-1),Ae={class:"flex items-center mt-4"},Oe=e("label",{for:"m-mr",class:"ml-2 text-sm font-medium text-gray-300"},"MR (混合實境)",-1),Ne={class:"flex items-center mt-4"},qe=e("label",{for:"m-xr",class:"ml-2 text-sm font-medium text-gray-300"},"XR (延展實境)",-1),Ge={class:"flex items-center mt-4"},He=e("label",{for:"m-accessory",class:"ml-2 text-sm font-medium text-gray-300"},"商品配件",-1),Qe=e("p",{class:"text-lg mt-6"},"品牌",-1),Xe=["id","value","onUpdate:modelValue"],We=["for"],Ze=e("p",{class:"text-lg mt-6"},"價格區間",-1),Je={class:"flex items-center mt-4"},Ke={class:"flex mt-6"},$e={class:"hidden lg:block col-span-1"},Ye={class:"py-8 top-nav"},et={class:"text-xl font-bold"},tt=e("p",{class:"text-lg mt-6"},"類別",-1),st={class:"flex items-center mt-4"},rt=e("label",{for:"ar",class:"ml-2 text-sm font-medium text-gray-300"},"AR (擴增實境)",-1),ot={class:"flex items-center mt-4"},lt=e("label",{for:"vr",class:"ml-2 text-sm font-medium text-gray-300"},"VR (虛擬實境)",-1),it={class:"flex items-center mt-4"},nt=e("label",{for:"mr",class:"ml-2 text-sm font-medium text-gray-300"},"MR (混合實境)",-1),at={class:"flex items-center mt-4"},dt=e("label",{for:"xr",class:"ml-2 text-sm font-medium text-gray-300"},"XR (延展實境)",-1),ct={class:"flex items-center mt-4"},ut=e("label",{for:"accessory",class:"ml-2 text-sm font-medium text-gray-300"},"商品配件",-1),mt=e("p",{class:"text-lg mt-6"},"品牌",-1),pt=["id","value","onUpdate:modelValue"],gt=["for"],ft=e("p",{class:"text-lg mt-6"},"價格區間",-1),ht={class:"flex items-center mt-4"},yt={class:"flex mt-6"},xt={class:"col-span-full lg:col-span-3"},bt={class:"my-8 flex items-center"},_t={class:"grow"},vt=e("label",{for:"search",class:"text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),wt={class:"relative"},kt=e("div",{class:"hidden lg:flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),Pt=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1),Mt=e("span",{class:"sr-only"},"Search",-1),Vt=[Pt,Mt],Ct={class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4"},Ut={class:"h-[300px] md:h-[420px] rounded-lg border overflow-hidden relative"},St=["src"],Bt={class:"absolute top-2 left-3 sm:top-3 sm:left-4"},Dt={class:"bg-dark px-3 py-2 rounded text-xs mr-1"},zt={class:"hidden lg:group-hover:flex absolute top-[45%] justify-center w-full"},Ft=["onClick"],Lt={class:"p-4 md:p-5 h-1/2 md:h-2/5 flex flex-col justify-between",style:{background:`linear-gradient(
                      142.88deg,
                      rgba(255, 255, 255, 0.16) 8.09%,
                      rgba(255, 255, 255, 0.064) 27.24%,
                      rgba(255, 255, 255, 0.064) 34.42%,
                      rgba(255, 255, 255, 0.1088) 48.78%,
                      rgba(255, 255, 255, 0) 100%
                    )`}},Tt={class:"grid grid-cols-3"},Et={class:"col-span-2 text-xl"},It={class:"flex justify-between lg:justify-end text-2xl"},Rt={class:"mt-2 text-xl font-bold"},jt={class:"mt-2 flex justify-between items-end"},At={class:"text-gray-400 line-through"},Ot={class:"text-primary text-lg font-bold"},Nt={class:"mt-8 flex justify-center"};function qt(o,t,c,P,r,f){const v=g("router-link"),M=g("swiper-slide"),u=g("swiper"),n=g("font-awesome-icon"),V=g("ProductsPagination"),R=g("UserProductModal"),j=g("ScrollTop");return a(),p(y,null,[e("div",ke,[i(u,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,pagination:{clickable:!0},modules:r.articleModules,class:"productsArticleSwiper h-96"},{default:x(()=>[(a(!0),p(y,null,_(r.articles,s=>(a(),S(M,{key:s.id},{default:x(()=>[e("div",{class:"h-full bg-cover bg-center",style:U({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${s.img})`})},[e("div",Pe,[e("div",null,[e("h2",Me,d(s.title),1),e("p",{class:"mt-8 text-lg lg:text-xl",innerHTML:s.content},null,8,Ve)]),i(v,{to:"./article/id",class:"primary-button w-24"},{default:x(()=>[w("查看詳情")]),_:1})])],4)]),_:2},1024))),128))]),_:1},8,["modules"]),e("div",Ce,[e("div",Ue,[e("div",Se,[e("h3",Be,[i(n,{icon:["fas","filter"]}),w(" 條件篩選 ")]),e("button",{type:"button","aria-controls":"filterDrawer",class:"text-gray-400 bg-transparent rounded-lg text-sm p-1.5 hover:bg-black/50 hover:text-white",onClick:t[0]||(t[0]=s=>o.filterDrawer.hide())},Fe)]),e("div",Le,[Te,e("div",Ee,[l(e("input",{id:"m-ar",type:"checkbox",value:"AR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[1]||(t[1]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),Ie]),e("div",Re,[l(e("input",{id:"m-vr",type:"checkbox",value:"VR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[2]||(t[2]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),je]),e("div",Ae,[l(e("input",{id:"m-mr",type:"checkbox",value:"MR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[3]||(t[3]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),Oe]),e("div",Ne,[l(e("input",{id:"m-xr",type:"checkbox",value:"XR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[4]||(t[4]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),qe]),e("div",Ge,[l(e("input",{id:"m-accessory",type:"checkbox",value:"配件",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[5]||(t[5]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),He]),Qe,(a(!0),p(y,null,_(r.filtersBrand,s=>(a(),p("div",{key:s,class:"flex items-center mt-4"},[l(e("input",{id:`m-${s}`,type:"checkbox",value:s,class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":h=>r.filters.brand=h},null,8,Xe),[[m,r.filters.brand]]),e("label",{for:`m-${s}`,class:"ml-2 text-sm font-medium text-gray-300"},d(s),9,We)]))),128)),Ze,e("div",Je,[l(e("input",{type:"number",placeholder:"$最小值",min:"1",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[6]||(t[6]=s=>r.filters.minPrice=s)},null,512),[[b,r.filters.minPrice]]),i(n,{icon:["fas","minus"],class:"text-3xl mx-3"}),l(e("input",{type:"number",placeholder:"$最大值",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[7]||(t[7]=s=>r.filters.maxPrice=s)},null,512),[[b,r.filters.maxPrice]])]),e("div",Ke,[e("button",{type:"button",class:"w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3",onClick:t[8]||(t[8]=()=>{this.filters={title:"",brand:[],category:[],minPrice:null,maxPrice:null},f.getFilterProducts()})}," 清除 "),e("button",{type:"button",class:"ml-8 w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3",onClick:t[9]||(t[9]=s=>f.getFilterProducts())}," 搜尋 ")])])],512),e("div",$e,[e("div",Ye,[e("h3",et,[i(n,{icon:["fas","filter"]}),w(" 條件篩選 ")]),tt,e("div",st,[l(e("input",{id:"ar",type:"checkbox",value:"AR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[10]||(t[10]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),rt]),e("div",ot,[l(e("input",{id:"vr",type:"checkbox",value:"VR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[11]||(t[11]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),lt]),e("div",it,[l(e("input",{id:"mr",type:"checkbox",value:"MR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[12]||(t[12]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),nt]),e("div",at,[l(e("input",{id:"xr",type:"checkbox",value:"XR",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[13]||(t[13]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),dt]),e("div",ct,[l(e("input",{id:"accessory",type:"checkbox",value:"配件",class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":t[14]||(t[14]=s=>r.filters.category=s)},null,512),[[m,r.filters.category]]),ut]),mt,(a(!0),p(y,null,_(r.filtersBrand,s=>(a(),p("div",{key:s,class:"flex items-center mt-4"},[l(e("input",{id:s,type:"checkbox",value:s,class:"w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0","onUpdate:modelValue":h=>r.filters.brand=h},null,8,pt),[[m,r.filters.brand]]),e("label",{for:s,class:"ml-2 text-sm font-medium text-gray-300"},d(s),9,gt)]))),128)),ft,e("div",ht,[l(e("input",{type:"number",placeholder:"$最小值",min:"1",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[15]||(t[15]=s=>r.filters.minPrice=s)},null,512),[[b,r.filters.minPrice,void 0,{lazy:!0}]]),i(n,{icon:["fas","minus"],class:"text-3xl mx-3"}),l(e("input",{type:"number",placeholder:"$最大值",class:"border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0","onUpdate:modelValue":t[16]||(t[16]=s=>r.filters.maxPrice=s)},null,512),[[b,r.filters.maxPrice,void 0,{lazy:!0}]])]),e("div",yt,[e("button",{type:"button",class:"w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3",onClick:t[17]||(t[17]=()=>{this.filters={title:"",brand:[],category:[],minPrice:null,maxPrice:null},f.getFilterProducts()})}," 清除 "),e("button",{type:"button",class:"ml-8 w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3",onClick:t[18]||(t[18]=s=>f.getFilterProducts())}," 搜尋 ")])])]),e("div",xt,[e("div",bt,[e("button",{type:"button",class:"block lg:hidden whitespace-nowrap font-medium rounded-l-lg text-sm px-4 py-3 border border-secondary2 bg-secondary",onClick:t[19]||(t[19]=s=>o.filterDrawer.show())},[i(n,{icon:["fas","filter"]}),w(" 篩選 ")]),e("form",_t,[vt,e("div",wt,[kt,l(e("input",{type:"search",id:"search",class:"block w-full p-3 lg:pl-10 text-sm rounded-r-lg lg:rounded-l-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-primary-0 focus:border-primary",placeholder:"請輸入關鍵字","onUpdate:modelValue":t[20]||(t[20]=s=>r.filters.title=s)},null,512),[[b,r.filters.title]]),e("button",{type:"button",class:"absolute top-0 right-0 p-3 text-sm font-medium text-white rounded-r-lg border border-primary2 focus:ring focus:outline-none bg-primary hover:bg-primary2 focus:ring-primary3",onClick:t[21]||(t[21]=s=>f.getFilterProducts())},Vt),e("button",{type:"button",class:"hidden md:block text-white absolute right-12 bottom-1.5 hover:text-gray-300",onClick:t[22]||(t[22]=s=>r.filters.title="")},[i(n,{icon:["fas","delete-left"],class:"cursor-pointer text-3xl mr-2"})])])])]),e("div",Ct,[(a(!0),p(y,null,_(r.products,(s,h)=>(a(),S(v,{key:s.id,to:`./product/${s.id}`,class:"group",onMouseover:k=>r.productImages[h]=s.imagesUrl?s.imagesUrl[0]:s.imageUrl,onMouseleave:k=>r.productImages[h]=s.imageUrl},{default:x(()=>[e("div",Ut,[e("img",{class:"h-1/2 md:h-3/5 w-full object-cover bg-white group-hover:opacity-30 ease-in-out duration-300",src:r.productImages[h],alt:"商品圖片"},null,8,St),e("div",Bt,[e("div",Dt,d(s.category),1)]),e("div",zt,[e("button",{type:"button",class:"focus:outline-none focus:ring-4 font-medium rounded text-md px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3",onClick:C(k=>o.productModal.openModal(s),["prevent","stop"])},[i(n,{icon:["fas","cart-plus"],class:"cursor-pointer text-lg mr-2"}),w(" 加入購物車 ")],8,Ft)]),e("div",Lt,[e("div",Tt,[e("h4",Et,d(s.brand),1),e("div",It,[i(n,{icon:["fas","cart-plus"],class:"cursor-pointer block lg:hidden",onClick:C(k=>o.productModal.openModal(s),["prevent","stop"])},null,8,["onClick"]),i(n,{icon:["fas","heart"],class:"cursor-pointer hover:text-primary2",onClick:t[23]||(t[23]=C(k=>o.click("favorite"),["prevent","stop"]))})])]),e("h3",Rt,d(s.title),1),e("div",jt,[e("p",At," NT$ "+d(o.$filters.currency(s.origin_price)),1),e("p",Ot," NT$ "+d(o.$filters.currency(s.price)),1)])])])]),_:2},1032,["to","onMouseover","onMouseleave"]))),128))]),e("div",Nt,[i(V,{"page-obj":r.pagination,onEmitPage:f.changePages},null,8,["page-obj","onEmitPage"])])]),i(R,{ref:"productModal",page:r.pagination.current_page},null,8,["page"])])]),i(j)],64)}const Jt=T(we,[["render",qt]]);export{Jt as default};