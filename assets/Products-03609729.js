import{P as O,D as z}from"./DeleteModal-8db7e60a.js";import{C as R,U as N}from"./ckeditor-876ae823.js";import{M as H}from"./index-9908806f.js";import{a as E,l as j,_ as S,r as b,o as r,c as n,b as e,i as m,v as _,d,w,f as h,F as P,g as M,y as q,u as I,h as g,z as F,n as X,t as x}from"./index-82baa51a.js";import{s as D}from"./swal-e4da1902.js";const{VITE_API:A,VITE_PATH:B}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},G={props:["page","accessories"],mixins:[D],data(){return{isNew:!0,tempProduct:{},isNewAccessory:!1,accessoryPlaceholder:"",accessoryDisable:!1,accessoryOptions:[],editor:R,descriptionConfig:{toolbar:["heading","bold","italic","|","undo","redo","|","numberedList","bulletedList","|","link"]},contentConfig:{toolbar:["heading","bold","italic","|","undo","redo","|","numberedList","bulletedList","outdent","indent","|","link","insertTable"]}}},methods:{openModal(o,s){o==="new"?(this.isNew=!0,this.tempProduct={imagesUrl:[],category:"",unit:"件",spec:[],accessory:[],contentImages:[],is_enabled:0},this.productModal.show()):(this.isNewAccessory=!0,this.isNew=!1,this.tempProduct={...s},this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.spec||(this.tempProduct.spec=[]),this.tempProduct.accessory||(this.tempProduct.accessory=[]),this.tempProduct.contentImages||(this.tempProduct.contentImages=[]),this.productModal.show()),this.$refs.productModal.scrollTop=0,this.changeAccessory()},updateProduct(){let o="post",s=`${A}/api/${B}/admin/product`;this.isNew||(o="put",s=`${A}/api/${B}/admin/product/${this.tempProduct.id}`),this.loadings.fullLoading=!0,this.$http[o](s,{data:this.tempProduct}).then(()=>{this.$emit("updateProducts",this.page,"update"),this.productModal.hide(),this.tempProduct.brand=""}).catch(a=>{this.adminToast("error",a.response.data.message)})},changeImage(o,s,a){s==="imageUrl"?this.tempProduct[s]=a:s==="imagesUrl"?this.tempProduct[s][o]=a:this.tempProduct[s][o]=a,s!=="imageUrl"&&this.$refs.productModal.scrollTo({top:this.$refs.productModal.scrollHeight})},changeAccessory(){this.accessoryOptions=[],this.accessories.forEach(o=>{var s;o.brand.toLowerCase()===((s=this.tempProduct.brand)==null?void 0:s.toLowerCase())&&this.accessoryOptions.push({id:o.id,name:o.title})})}},computed:{...E(j,["loadings"])},watch:{"tempProduct.brand"(){this.tempProduct.accessory.forEach((o,s)=>{this.accessories.some(a=>a.id===o.id)||(this.tempProduct.accessory.splice(s,1),this.accessories.length>0&&this.adminAlert("warning","請更新商品","已刪除不存在的配件，請記得點擊確認更新商品資訊！"))}),this.isNewAccessory||(this.tempProduct.accessory=[]),this.isNewAccessory=!1},tempProduct:{handler(){!this.tempProduct.brand||!this.tempProduct.category?(this.accessoryPlaceholder="請先輸入品牌及類別",this.accessoryDisable=!0):(this.accessoryPlaceholder="關鍵字搜尋",this.accessoryDisable=!1),this.tempProduct.origin_price<1&&(this.tempProduct.origin_price=null),this.tempProduct.price>this.tempProduct.origin_price&&(this.tempProduct.price=this.tempProduct.origin_price)},deep:!0}},mounted(){const o={placement:"center",backdrop:"static",backdropClasses:"bg-black bg-opacity-80 fixed inset-0 z-30",closable:!0};this.productModal=new H(this.$refs.productModal,o)},components:{UploadImg:N}},J={ref:"productModal",id:"productModal",tabindex:"-1",class:"hidden fixed z-40 w-full px-4 overflow-x-hidden overflow-y-auto top-28 left-0 right-0 h-auto"},K={class:"w-full max-w-7xl h-full max-h-[calc(100vh-8.5rem)]"},Q={class:"bg-white shadow rounded-lg overflow-hidden"},W={class:"flex items-start justify-between p-4 border-b bg-black top-[6rem] w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] max-w-7xl z-50 rounded-t-lg fixed"},Y=e("h3",{class:"text-xl font-semibold text-gray-300"},"編輯商品",-1),Z=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),$=[Z],ee={class:"p-6 grid grid-cols-3 gap-6 mt-12"},te={class:"col-span-1"},se=e("label",{for:"mainImgLink",class:"font-medium"},[g("主要圖片 (輸入網址或上傳圖片)"),e("span",{class:"font-bold text-rose-500"},"*")],-1),oe={class:"relative mt-4"},re=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 text-gray-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})])],-1),ne=e("span",null,null,-1),le=e("span",null,null,-1),ie=["src"],ce={class:"mt-8 space-y-4"},de=e("h3",{class:"font-medium"},"多圖新增 (輸入網址或上傳圖片)",-1),ae={class:"relative mt-4"},pe=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 text-gray-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})])],-1),ue=["onUpdate:modelValue"],me=e("span",null,null,-1),he=e("span",null,null,-1),ge=["src"],fe=["onClick"],_e={class:"col-span-2 space-y-6"},be=e("label",{for:"name",class:"block mb-2 font-medium"},[g("商品名稱"),e("span",{class:"font-bold text-rose-500"},"*")],-1),ye={class:"grid grid-cols-2 gap-4"},we=e("label",{for:"modalDistrict",class:"block mb-2 text-md font-medium text-gray-900"},[g("類別"),e("span",{class:"font-bold text-rose-500"},"*")],-1),Pe=F('<option value="" selected disabled>請選擇商品類別</option><option value="AR">AR (擴增實境)</option><option value="VR">VR (虛擬實境)</option><option value="MR">MR (混合實境)</option><option value="XR">XR (延展實境)</option><option value="配件">商品配件</option>',6),xe=[Pe],ve=e("label",{for:"brand",class:"block mb-2 font-medium"},[g("品牌"),e("span",{class:"font-bold text-rose-500"},"*")],-1),ke={class:"grid grid-cols-2 gap-4"},Me=e("label",{for:"origin_price",class:"block mb-2 font-medium"},[g("原價"),e("span",{class:"font-bold text-rose-500"},"*")],-1),Ce=e("label",{for:"price",class:"block mb-2 font-medium"},[g("售價 (請先輸入原價)"),e("span",{class:"font-bold text-rose-500"},"*")],-1),Ue=e("label",{for:"spec",class:"font-medium"},"商品規格",-1),Ie={class:"grid grid-cols-6 gap-1 mt-2"},Ve={class:"border rounded"},Ae=["onUpdate:modelValue"],Be=["onClick"],Le={key:0},Te={key:0},Ee=e("label",{class:"typo__label"},"選擇配件",-1),je=e("h3",{for:"message",class:"mb-2 font-medium text-gray-900"}," 商品功能簡介 ",-1),Se={class:"prose max-w-full prose-p:my-0"},De=e("h3",{for:"message",class:"mb-2 font-medium text-gray-900"}," 商品詳細內容 ",-1),Oe={class:"prose max-w-full prose-p:my-0"},ze={class:"mt-8 space-y-4"},Re=e("h3",{class:"font-medium"},"商品詳細內容圖庫",-1),Ne={class:"grid grid-cols-4 gap-3"},He={class:"relative"},qe=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 text-gray-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})])],-1),Fe=["onUpdate:modelValue"],Xe=e("span",null,null,-1),Ge=e("span",null,null,-1),Je=["src"],Ke=["onClick"],Qe={class:"pt-4 flex justify-between items-center border-t-2 border-gray-300"},We={class:"flex"},Ye={class:"relative inline-flex items-center cursor-pointer"},Ze=["checked"],$e=e("div",{class:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"},null,-1),et=e("span",{class:"ml-3 text-md font-medium text-gray-900"},"上架商品",-1),tt={class:"flex justify-end"},st=["disabled","title"];function ot(o,s,a,v,t,u){var l,y,V;const p=b("UploadImg"),C=b("font-awesome-icon"),U=b("multiselect"),k=b("ckeditor");return r(),n("div",J,[e("div",K,[e("div",Q,[e("div",W,[Y,e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",onClick:s[0]||(s[0]=()=>{o.productModal.hide(),t.tempProduct.brand=""})},$)]),e("div",ee,[e("div",te,[se,e("div",oe,[re,m(e("input",{type:"text",id:"mainImgLink",class:"block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500",placeholder:"請輸入圖片網址",required:"","onUpdate:modelValue":s[1]||(s[1]=i=>t.tempProduct.imageUrl=i)},null,512),[[_,t.tempProduct.imageUrl,void 0,{lazy:!0}]])]),d(p,{onChangeImg:u.changeImage},{multi:w(()=>[ne]),detail:w(()=>[le]),_:1},8,["onChangeImg"]),t.tempProduct.imageUrl?(r(),n("img",{key:0,src:t.tempProduct.imageUrl,class:"mt-4 w-full h-80 object-cover object-center"},null,8,ie)):h("",!0),e("div",ce,[de,(r(!0),n(P,null,M(t.tempProduct.imagesUrl,(i,c)=>(r(),n(P,{key:c},[e("div",ae,[pe,m(e("input",{type:"text",id:"mainImgLink",class:"block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500",placeholder:"請輸入圖片網址","onUpdate:modelValue":f=>t.tempProduct.imagesUrl[c]=f},null,8,ue),[[_,t.tempProduct.imagesUrl[c],void 0,{lazy:!0}]])]),d(p,{index:c,onChangeImg:u.changeImage},{main:w(()=>[me]),detail:w(()=>[he]),_:2},1032,["index","onChangeImg"]),t.tempProduct.imagesUrl[c]?(r(),n("img",{key:0,src:t.tempProduct.imagesUrl[c],class:"mt-4 w-full h-80 object-cover object-center"},null,8,ge)):h("",!0),t.tempProduct.imagesUrl[c]?h("",!0):(r(),n("button",{key:1,type:"button",class:"mt-4 admin-delete-button w-full",onClick:f=>t.tempProduct.imagesUrl.splice(c,1)}," 刪除區塊 ",8,fe))],64))),128)),!((l=t.tempProduct.imagesUrl)!=null&&l.length)||t.tempProduct.imagesUrl[t.tempProduct.imagesUrl.length-1]?(r(),n("button",{key:0,type:"button",class:"mt-4 admin-secondary-button w-full",onClick:s[2]||(s[2]=i=>t.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):h("",!0)])]),e("div",_e,[e("div",null,[be,m(e("input",{type:"text",id:"name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5",required:"","onUpdate:modelValue":s[3]||(s[3]=i=>t.tempProduct.title=i)},null,512),[[_,t.tempProduct.title]])]),e("div",ye,[e("div",null,[we,m(e("select",{id:"modalDistrict",class:"w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5","onUpdate:modelValue":s[4]||(s[4]=i=>t.tempProduct.category=i)},xe,512),[[q,t.tempProduct.category]])]),e("div",null,[ve,m(e("input",{type:"text",id:"brand",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5",required:"","onUpdate:modelValue":s[5]||(s[5]=i=>t.tempProduct.brand=i),onChange:s[6]||(s[6]=i=>u.changeAccessory())},null,544),[[_,t.tempProduct.brand,void 0,{lazy:!0}]])])]),e("div",ke,[e("div",null,[Me,m(e("input",{type:"number",id:"origin_price",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5",min:"1",required:"","onUpdate:modelValue":s[7]||(s[7]=i=>t.tempProduct.origin_price=i)},null,512),[[_,t.tempProduct.origin_price,void 0,{lazy:!0}]])]),e("div",null,[Ce,m(e("input",{type:"number",id:"price",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5",min:"1",required:"","onUpdate:modelValue":s[8]||(s[8]=i=>t.tempProduct.price=i)},null,512),[[_,t.tempProduct.price,void 0,{lazy:!0}]])])]),e("div",null,[Ue,e("div",Ie,[(r(!0),n(P,null,M(t.tempProduct.spec,(i,c)=>(r(),n("div",{class:"relative",key:c},[e("div",Ve,[m(e("input",{type:"text",class:"w-[calc(100%-1.9rem)] rounded-l-lg text-sm border-gray-300 focus:ring-violet-300",id:"spec","onUpdate:modelValue":f=>t.tempProduct.spec[c]=f,placeholder:"請輸入規格"},null,8,Ae),[[_,t.tempProduct.spec[c]]]),e("button",{type:"button",class:"absolute w-8 top-0 right-0 px-3 py-2 admin-delete-solid-button rounded-l-none rounded-r-lg border text-sm",onClick:f=>t.tempProduct.spec.splice(c,1)},[d(C,{icon:["fas","xmark"]})],8,Be)])]))),128)),!((y=t.tempProduct.spec)!=null&&y.length)||t.tempProduct.spec[t.tempProduct.spec.length-1]?(r(),n("div",Le,[e("button",{type:"button",class:"admin-secondary-solid-button w-full py-2",onClick:s[9]||(s[9]=i=>t.tempProduct.spec.push(""))}," 新增規格 ")])):h("",!0)])]),t.tempProduct.category!="配件"?(r(),n("div",Te,[Ee,d(U,{modelValue:t.tempProduct.accessory,"onUpdate:modelValue":s[10]||(s[10]=i=>t.tempProduct.accessory=i),label:"name","track-by":"id",multiple:!0,placeholder:t.accessoryPlaceholder,options:t.accessoryOptions,disabled:t.accessoryDisable,class:"mt-2"},null,8,["modelValue","placeholder","options","disabled"])])):h("",!0),e("div",null,[je,e("div",Se,[d(k,{editor:t.editor,config:t.descriptionConfig,modelValue:t.tempProduct.description,"onUpdate:modelValue":s[11]||(s[11]=i=>t.tempProduct.description=i)},null,8,["editor","config","modelValue"])])]),e("div",null,[De,e("div",Oe,[d(k,{editor:t.editor,config:t.contentConfig,modelValue:t.tempProduct.content,"onUpdate:modelValue":s[12]||(s[12]=i=>t.tempProduct.content=i)},null,8,["editor","config","modelValue"])])]),e("div",ze,[Re,e("div",Ne,[(r(!0),n(P,null,M(t.tempProduct.contentImages,(i,c)=>(r(),n("div",{key:c},[e("div",He,[qe,m(e("input",{type:"text",id:"mainImgLink",class:"block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500",placeholder:"請輸入圖片網址","onUpdate:modelValue":f=>t.tempProduct.contentImages[c]=f},null,8,Fe),[[_,t.tempProduct.contentImages[c],void 0,{lazy:!0}]])]),d(p,{index:c,onChangeImg:u.changeImage},{main:w(()=>[Xe]),multi:w(()=>[Ge]),_:2},1032,["index","onChangeImg"]),t.tempProduct.contentImages[c]?(r(),n("img",{key:0,src:t.tempProduct.contentImages[c],class:"mt-4 w-full h-36 object-cover object-center rounded"},null,8,Je)):h("",!0),t.tempProduct.contentImages[c]?h("",!0):(r(),n("button",{key:1,type:"button",class:"mt-4 admin-delete-button w-full",onClick:f=>t.tempProduct.contentImages.splice(c,1)}," 刪除區塊 ",8,Ke))]))),128)),!((V=t.tempProduct.contentImages)!=null&&V.length)||t.tempProduct.contentImages[t.tempProduct.contentImages.length-1]?(r(),n("button",{key:0,type:"button",class:"admin-secondary-button w-full h-11",onClick:s[13]||(s[13]=i=>t.tempProduct.contentImages.push(""))}," 新增圖片 ")):h("",!0)])]),e("div",Qe,[e("div",We,[e("label",Ye,[m(e("input",{type:"checkbox",class:"sr-only peer","true-value":1,"false-value":0,checked:t.tempProduct.is_enabled,"onUpdate:modelValue":s[14]||(s[14]=i=>t.tempProduct.is_enabled=i)},null,8,Ze),[[I,t.tempProduct.is_enabled]]),$e,et])]),e("div",tt,[e("button",{type:"button",class:"admin-delete-button",onClick:s[15]||(s[15]=()=>{o.productModal.hide(),t.tempProduct.brand=""})}," 取消 "),e("button",{type:"button",class:"ml-6 admin-primary-button",disabled:!t.tempProduct.imageUrl||!t.tempProduct.title||!t.tempProduct.brand||!t.tempProduct.category||!t.tempProduct.origin_price||!t.tempProduct.price,title:[!t.tempProduct.imageUrl||!t.tempProduct.title||!t.tempProduct.brand||!t.tempProduct.category||!t.tempProduct.origin_price||!t.tempProduct.price?'"*"號為必填欄位':""],onClick:s[16]||(s[16]=i=>u.updateProduct())}," 確認 ",8,st)])])])])])])],512)}const rt=S(G,[["render",ot]]),{VITE_API:L,VITE_PATH:T}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},nt={mixins:[D],data(){return{ascending:!1,sortBy:"",allProducts:[],products:[],pagination:{},showAccessory:!0,accessories:[],productLoading:[]}},methods:{getProducts(o=1,s){this.accessories=[],this.loadings.fullLoading=!0,this.$http.get(`${L}/api/${T}/admin/products/all`).then(a=>{this.allProducts=Object.values(a.data.products).reverse(),this.showAccessory||(this.allProducts=this.allProducts.filter(t=>t.category!=="配件")),this.products=this.allProducts.filter((t,u)=>Math.ceil((u+1)/10)==o),this.accessories=Object.values(a.data.products).filter(t=>t.category==="配件");const v=Math.ceil(Object.keys(this.allProducts).length/10);this.pagination={total_pages:v,current_page:o,has_pre:o!==1,has_next:o!==v},this.loadings.fullLoading=!1,s==="update"?this.adminToast("success","已更新商品資料"):s==="delete"&&this.adminToast("success","已刪除商品資料")}).catch(a=>{this.loadings.fullLoading=!1,this.adminToast("error",a.response.data.message)})},changePages(o=1){this.products=Object.values(this.allProducts).filter((s,a)=>Math.ceil((a+1)/10)==o),this.pagination.current_page=o,this.pagination.has_pre=o!==1,this.pagination.has_next=o!==this.pagination.total_pages,window.scrollTo({top:0,behavior:"smooth"})},updateEnable(o){this.productLoading.push(o.id),this.$http.put(`${L}/api/${T}/admin/product/${o.id}`,{data:o}).then(()=>{this.productLoading.shift(),this.adminToast("success","已更新啟用狀態")}).catch(s=>{this.productLoading.shift(),this.adminToast("error",s.response.data.message),this.getProducts(this.page.current_page)})}},mounted(){this.productModal=this.$refs.productModal,this.deleteModal=this.$refs.deleteModal,this.getProducts()},computed:{...E(j,["loadings"]),sortProducts(){return this.sortBy==="category"||this.sortBy==="brand"?[...this.products].sort((o,s)=>this.ascending?o[this.sortBy].localeCompare(s[this.sortBy],"zh-hant"):s[this.sortBy].localeCompare(o[this.sortBy],"zh-hant")):this.sortBy?[...this.products].sort((o,s)=>this.ascending?o[this.sortBy]-s[this.sortBy]:s[this.sortBy]-o[this.sortBy]):this.products}},components:{Pagination:O,ProductModal:rt,DeleteModal:z}},lt={class:"mt-8 px-6"},it={class:"flex justify-between items-center"},ct={class:"flex"},dt={class:"relative inline-flex items-center cursor-pointer"},at=["checked"],pt=e("div",{class:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"},null,-1),ut=e("span",{class:"ml-3 text-md font-medium text-gray-900"},"顯示配件",-1),mt={class:"mt-6 relative overflow-x-auto shadow-md sm:rounded-lg"},ht={class:"w-full text-md text-left text-gray-700"},gt={class:"text-sm text-dark uppercase bg-gray-300"},ft=e("th",{scope:"col",class:"sr-only"},"Loading",-1),_t={key:0,class:"text-xs"},bt={key:0},yt={key:1},wt={key:1},Pt={key:0},xt={key:0},vt={key:1},kt={key:1},Mt={key:0,class:"text-xs"},Ct={key:0},Ut={key:1},It={key:1},Vt=e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"},"商品名稱",-1),At=e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"},"原價",-1),Bt={key:0,class:"text-xs"},Lt={key:0},Tt={key:1},Et={key:1},jt=e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"},[e("span",{class:"sr-only"},"選項")],-1),St={class:"px-3 w-6 max-w-[1.5rem]"},Dt={key:0,class:"animate-spin h-5 w-5 mr-3 text-dark",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Ot=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),zt=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),Rt=[Ot,zt],Nt={class:"px-6 font-medium whitespace-nowrap"},Ht={class:"w-9"},qt=["disabled","checked","onUpdate:modelValue","onChange"],Ft=e("div",{class:"w-full h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-300 peer-checked:bg-teal-600"},null,-1),Xt={class:"px-6 py-4 whitespace-nowrap"},Gt={class:"px-6 py-4 whitespace-nowrap"},Jt={class:"px-6 py-4 whitespace-nowrap"},Kt={class:"px-6 py-4 whitespace-nowrap"},Qt={class:"px-6 py-4 whitespace-nowrap"},Wt={class:"px-6 py-4 whitespace-nowrap flex justify-center space-x-6"},Yt=["disabled","onClick"],Zt=["disabled","onClick"];function $t(o,s,a,v,t,u){const p=b("font-awesome-icon"),C=b("Pagination"),U=b("ProductModal"),k=b("DeleteModal");return r(),n(P,null,[e("div",lt,[e("div",it,[e("button",{type:"button",class:"admin-primary-button",onClick:s[0]||(s[0]=l=>o.productModal.openModal("new"))}," 新增商品 "),e("div",ct,[e("label",dt,[m(e("input",{type:"checkbox",class:"sr-only peer",checked:t.showAccessory,"onUpdate:modelValue":s[1]||(s[1]=l=>t.showAccessory=l),onChange:s[2]||(s[2]=l=>u.getProducts())},null,40,at),[[I,t.showAccessory]]),pt,ut])])]),e("div",mt,[e("table",ht,[e("thead",gt,[e("tr",null,[ft,e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap cursor-pointer",onClick:s[3]||(s[3]=l=>{t.sortBy="is_enabled",t.ascending=t.sortBy==="is_enabled"?!t.ascending:!0})},[g(" 上架 "),t.sortBy==="is_enabled"?(r(),n("span",_t,[t.ascending?(r(),n("span",bt,[d(p,{icon:["fas","sort-up"]})])):(r(),n("span",yt,[d(p,{icon:["fas","sort-down"]})]))])):(r(),n("span",wt,[d(p,{icon:["fas","sort"]})]))]),e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap cursor-pointer",onClick:s[4]||(s[4]=l=>{t.sortBy="category",t.ascending=t.sortBy==="category"?!t.ascending:!0})},[g(" 類別 "),t.sortBy==="category"?(r(),n("span",Pt,[t.ascending?(r(),n("span",xt,[d(p,{icon:["fas","sort-up"]})])):(r(),n("span",vt,[d(p,{icon:["fas","sort-down"]})]))])):(r(),n("span",kt,[d(p,{icon:["fas","sort"]})]))]),e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap cursor-pointer",onClick:s[5]||(s[5]=l=>{t.sortBy="brand",t.ascending=t.sortBy==="brand"?!t.ascending:!0})},[g(" 品牌 "),t.sortBy==="brand"?(r(),n("span",Mt,[t.ascending?(r(),n("span",Ct,[d(p,{icon:["fas","sort-up"]})])):(r(),n("span",Ut,[d(p,{icon:["fas","sort-down"]})]))])):(r(),n("span",It,[d(p,{icon:["fas","sort"]})]))]),Vt,At,e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap cursor-pointer",onClick:s[6]||(s[6]=l=>{t.sortBy="price",t.ascending=t.sortBy==="price"?!t.ascending:!0})},[g(" 售價 "),t.sortBy==="price"?(r(),n("span",Bt,[t.ascending?(r(),n("span",Lt,[d(p,{icon:["fas","sort-up"]})])):(r(),n("span",Tt,[d(p,{icon:["fas","sort-down"]})]))])):(r(),n("span",Et,[d(p,{icon:["fas","sort"]})]))]),jt])]),e("tbody",null,[(r(!0),n(P,null,M(u.sortProducts,l=>(r(),n("tr",{class:"bg-white border-b hover:bg-teal-100",key:l.id},[e("td",St,[t.productLoading.indexOf(l.id)>-1?(r(),n("svg",Dt,Rt)):h("",!0)]),e("td",Nt,[e("div",Ht,[e("label",{class:X(["relative",t.productLoading.indexOf(l.id)>-1?"cursor-not-allowed":" cursor-pointer"])},[m(e("input",{type:"checkbox",class:"sr-only peer disabled:ring-4","true-value":1,"false-value":0,disabled:t.productLoading.indexOf(l.id)>-1,checked:l.is_enabled,"onUpdate:modelValue":y=>l.is_enabled=y,onChange:y=>u.updateEnable(l)},null,40,qt),[[I,l.is_enabled]]),Ft],2)])]),e("td",Xt,x(l.category),1),e("td",Gt,x(l.brand),1),e("td",Jt,x(l.title),1),e("td",Kt,x(o.$filters.currency(l.origin_price)),1),e("td",Qt,x(o.$filters.currency(l.price)),1),e("td",Wt,[e("button",{type:"button",disabled:t.productLoading.indexOf(l.id)>-1,class:"admin-secondary-button px-3.5 py-1.5",onClick:y=>o.productModal.openModal("edit",l)}," 編輯 ",8,Yt),e("button",{type:"button",disabled:t.productLoading.indexOf(l.id)>-1,class:"admin-delete-button px-3.5 py-1.5",onClick:y=>o.deleteModal.openModal("商品",l)}," 刪除 ",8,Zt)])]))),128))])])]),d(C,{class:"mt-8","page-obj":t.pagination,onEmitPage:u.changePages},null,8,["page-obj","onEmitPage"])]),d(U,{ref:"productModal",page:t.pagination.current_page,accessories:t.accessories,onUpdateProducts:u.getProducts},null,8,["page","accessories","onUpdateProducts"]),d(k,{ref:"deleteModal",page:t.products.length>1?t.pagination.current_page:t.pagination.current_page-1,onUpdateProducts:u.getProducts},null,8,["page","onUpdateProducts"])],64)}const ns=S(nt,[["render",$t]]);export{ns as default};
