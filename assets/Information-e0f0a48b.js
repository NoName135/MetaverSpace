import{_ as v,m as k,a as f,l as $,c as a,b as e,F as h,g as x,h as d,t as o,f as T,d as r,w as _,r as u,o as l,n}from"./index-7ece7855.js";import{c as b}from"./cartStore-34a3ad62.js";import{s as V}from"./swal-3e866175.js";const{VITE_API:S,VITE_PATH:q}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},z={mixins:[V],data(){return{}},methods:{createOrder(t){this.loadings.fullLoading=!0,this.$http.post(`${S}/api/${q}/order`,{data:{user:{name:t.姓名,email:t.email,tel:t.電話,address:t.地址,pay:t.支付方式},message:t.留言}}).then(p=>{this.$refs.form.resetForm(),this.loadings.fullLoading=!1,this.getCart(),this.userToast("success",p.data.message),this.$router.replace("/checkout/check/id")}).catch(p=>{this.loadings.fullLoading=!1,this.userToast("error",p.response.data.message)})},...k(b,["getCart"])},computed:{...f($,["loadings"]),...f(b,["cart"])},mounted(){this.$emit("emit-step",1)}},E={class:"grid grid-cols-3 gap-6"},C={class:"col-span-full lg:col-span-2 lg:mt-8"},N={class:"border-2 rounded-lg overflow-hidden"},I=e("h1",{class:"p-4 bg-black/50 text-xl font-bold border-b-2"},"訂單內容",-1),A={class:"px-8"},M=["src"],L={class:"col-span-full md:col-span-4 flex flex-col justify-between"},P={class:"text-md xl:text-lg"},j={class:"text-lg xl:text-xl font-bold mt-2 lg:mt-3"},B={class:"flex flex-col sm:flex-row justify-between"},D={class:"flex mt-1 sm:mt-0 sm:ml-4"},O={class:"flex flex-col sm:flex-row justify-between items-center"},F={key:0,class:"flex items-center self-start mt-4"},R={class:"text-md lg:text-lg"},H={key:1},U={class:"self-end text-lg lg:text-xl mt-4"},G={class:"font-bold"},J={class:"flex flex-col items-end py-6 border-t"},K={class:"mt-4 xs:mt-0 xs:ml-4 text-lg xl:text-xl text-end"},Q={class:"font-bold whitespace-nowrap"},W={key:0,class:"mt-4 text-warm text-lg lg:text-xl"},X={class:"font-bold"},Y={class:"mt-4 text-primary0 text-xl lg:text-2xl text-end"},Z={class:"font-bold whitespace-nowrap"},ee={class:"col-span-full lg:col-span-1"},te={class:"lg:pt-8 sticky top-nav"},se={class:"border-2 rounded-lg overflow-hidden"},re=e("h1",{class:"p-4 bg-black/50 text-xl font-bold border-b-2"}," 訂單資料 ",-1),oe={class:"px-8 py-8"},ae={class:"relative z-0 w-full mb-6 group"},le=e("label",{for:"name",class:"text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"姓名",-1),ce={class:"relative z-0 w-full mb-6 group"},ne=e("label",{for:"phone",class:"text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"電話 (請輸入手機格式：09)",-1),ie={class:"relative z-0 w-full mb-6 group"},de=e("label",{for:"address",class:"text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"地址",-1),pe={class:"relative z-0 w-full mb-6 group"},me=e("label",{for:"email",class:"text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Email",-1),ue={class:"relative z-0 w-full mb-6 group"},fe=e("option",{selected:"",disabled:"",value:"",class:"text-white bg-dark/50"}," -- 請選擇支付方式 -- ",-1),he=e("option",{class:"text-white bg-dark/50",value:"信用卡"}," 信用卡 ",-1),xe=e("option",{class:"text-white bg-dark/50",value:"銀行轉帳"}," 銀行轉帳 ",-1),_e=e("option",{class:"text-white bg-dark/50",value:"行動支付"}," 行動支付 ",-1),be=e("label",{for:"paySelect",class:"text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"支付方式",-1),ge=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-primary"},"備註",-1),ye={class:"mb-4"},we={class:"flex items-center"},ve=e("label",{for:"agreeCheck",class:"ml-2 text-sm font-medium text-gray-300"},"我已詳閱並同意此網站約定條款",-1),ke=e("button",{type:"submit",class:"w-full primary-button"}," 送出訂單 ",-1);function $e(t,p,Te,Ve,Se,g){const c=u("V-field"),i=u("ErrorMessage"),y=u("V-form");return l(),a("div",null,[e("div",E,[e("div",C,[e("section",N,[I,e("div",A,[(l(!0),a(h,null,x(t.cart.carts,(s,w)=>(l(),a("div",{key:s.id,class:n(["py-8 grid grid-cols-5 gap-6",{"border-t":w>0}])},[e("img",{src:s.product.imageUrl,alt:"",class:"hidden md:flex w-full h-24 xl:h-32 object-cover rounded bg-white"},null,8,M),e("div",L,[e("h2",P,o(s.product.brand),1),e("h3",j,o(s.product.title),1),(l(!0),a(h,null,x(s.cart_spec,m=>(l(),a("div",{class:"flex items-start sm:items-center mt-4 text-md xl:text-lg",key:m.title},[e("div",B,[d(" 規格："+o(m.title)+" ",1),e("div",D," 數量："+o(m.qty),1)])]))),128)),e("div",O,[s.cart_spec?(l(),a("div",H)):(l(),a("div",F,[e("span",R,"數量："+o(s.qty),1)])),e("h5",U,[d(" 總計："),e("span",G,"NT$ "+o(t.$filters.currency(s.total)),1)])])])],2))),128)),e("div",J,[e("h4",K,[d(" 結帳小計："),e("span",Q,"NT$ "+o(t.$filters.currency(t.cart.total)),1)]),t.cart.total-t.cart.final_total>0?(l(),a("h5",W,[d(" 折扣："),e("span",X,"NT$ "+o(t.$filters.currency(Math.ceil(t.cart.total-t.cart.final_total))),1)])):T("",!0),e("h3",Y,[d(" 總金額："),e("span",Z,"NT$ "+o(t.$filters.currency(t.cart.final_total)),1)])])])])]),e("div",ee,[e("div",te,[e("section",se,[re,e("div",oe,[r(y,{ref:"form",onSubmit:g.createOrder},{default:_(({errors:s})=>[e("div",ae,[r(c,{type:"text",name:"姓名",id:"name",class:n(["block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer",{"border-warm":s.姓名}]),rules:"required",required:""},null,8,["class"]),le,r(i,{name:"姓名",class:"text-warm text-sm"})]),e("div",ce,[r(c,{type:"tel",name:"電話",id:"phone",class:n(["block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer",{"border-warm":s.電話}]),rules:"required|phone",required:""},null,8,["class"]),ne,r(i,{name:"電話",class:"text-warm text-sm"})]),e("div",ie,[r(c,{type:"text",name:"地址",id:"address",class:n(["block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer overflow-x-auto",{"border-warm":s.地址}]),rules:"required",required:""},null,8,["class"]),de,r(i,{name:"地址",class:"text-warm text-sm"})]),e("div",pe,[r(c,{type:"email",name:"email",id:"email",class:n(["block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer",{"border-warm":s.email}]),rules:"required|email",required:""},null,8,["class"]),me,r(i,{name:"email",class:"text-warm text-sm"})]),e("div",ue,[r(c,{id:"paySelect",as:"select",name:"支付方式",class:n(["block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer",{"border-warm":s.支付方式}]),rules:"required"},{default:_(()=>[fe,he,xe,_e]),_:2},1032,["class"]),be,r(i,{name:"支付方式",class:"text-warm text-sm"})]),ge,r(c,{id:"message",as:"textarea",name:"留言",rows:"4",class:"block p-2.5 w-full mb-6 text-md rounded-lg border bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary",placeholder:"請輸入備註內容"}),e("div",ye,[e("div",we,[r(c,{id:"agreeCheck",type:"checkbox",name:"同意",value:!0,class:n(["w-4 h-4 text-primary rounded focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600",{"border-warm":s.同意}]),rules:"agree"},null,8,["class"]),ve]),r(i,{name:"同意",class:"text-warm text-sm ml-6"})]),ke]),_:1},8,["onSubmit"])])])])])])])}const Ce=v(z,[["render",$e]]);export{Ce as default};
