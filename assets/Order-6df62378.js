import{A as $,a as A}from"./index-9908806f.js";import{_ as E,r as h,o as l,c as a,b as e,f as g,i as u,s as y,v as D,F as _,g as v,t as n,e as T,h as O,d as p,w as V,j as C,n as k}from"./index-727fbaff.js";import{s as L}from"./swal-e4da1902.js";const M={props:["orders"],data(){return{filter:{day:30,title:""},filterOrders:[]}},methods:{payLink(r,o){let i;o?i=this.$router.resolve(`/checkout/send/${r}`):i=this.$router.resolve(`/checkout/check/${r}`),window.open(i.href)},getFilterOrders(){this.filterOrders=[];for(let r=0;r<this.orders.length;r++)Object.values(this.orders[r].products).some(o=>o.product.title.toLowerCase().includes(this.filter.title.toLocaleLowerCase().trim()))&&this.orders[r].create_at>=new Date(new Date().getTime()-this.filter.day*24*60*60*1e3).getTime()/1e3&&this.filterOrders.push(this.orders[r])},getAccordion(){this.$nextTick(()=>{const r=this.filterOrders.map(i=>({id:i.id,triggerEl:this.$refs[`detailAccordionBtn${i.id}`][0],targetEl:this.$refs[`detailAccordionTable${i.id}`][0],active:!1})),o={activeClasses:"bg-secondary text-white",inactiveClasses:"bg-secondary2 text-gray-400",onToggle:function(i){i._items.forEach(d=>{d.active?d.triggerEl.querySelector("[data-accordion-icon]").classList.add("-rotate-180"):d.triggerEl.querySelector("[data-accordion-icon]").classList.remove("-rotate-180")})}};this.detailAccordion=new $(r,o)})}},mounted(){const r={placement:"bottom",triggerType:"click",offsetSkidding:28,offsetDistance:10,delay:300};this.daysDropdown=new A(this.$refs.dropdownDaysMenu,this.$refs.dropdownDaysBtn,r)},watch:{orders:{handler(){this.filter.title="",this.getFilterOrders(),this.getAccordion()},immediate:!0},filter:{handler(){this.filterOrders.forEach(r=>{this.detailAccordion.close(r.id)}),this.getFilterOrders(),this.getAccordion()},deep:!0}}},B={class:"sm:flex items-center justify-between pb-4"},S={type:"button",id:"dropdownDaysBtn",ref:"dropdownDaysBtn",class:"inline-flex items-center border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"},F=e("svg",{class:"w-4 h-4 mr-2 text-gray-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z","clip-rule":"evenodd"})],-1),I=e("span",{class:"mr-1"},"最近",-1),z={key:0},j={key:1},q={key:2},N={key:3},P=e("svg",{class:"w-3 h-3 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),R={id:"dropdownDaysMenu",ref:"dropdownDaysMenu",class:"z-10 hidden w-48 divide-y rounded-lg shadow bg-gray-700 divide-gray-600 absolute m-0",style:{inset:"auto auto 0px 0px",transform:"translate3d(522.5px, 3847.5px, 0px)"}},U={class:"p-3 space-y-1 text-sm text-gray-200"},H={class:"flex items-center p-2 rounded hover:bg-gray-600"},G=e("label",{for:"filter-radio-example-2",class:"w-full ml-2 text-sm font-medium rounded text-gray-300"},"最近 7 天",-1),J={class:"flex items-center p-2 rounded hover:bg-gray-600"},K=e("label",{for:"filter-radio-example-3",class:"w-full ml-2 text-sm font-medium rounded text-gray-300"},"最近 30 天",-1),Q={class:"flex items-center p-2 rounded hover:bg-gray-600"},W=e("label",{for:"filter-radio-example-4",class:"w-full ml-2 text-sm font-medium rounded text-gray-300"},"最近 6 個月",-1),X={class:"flex items-center p-2 rounded hover:bg-gray-600"},Y=e("label",{for:"filter-radio-example-5",class:"w-full ml-2 text-sm font-medium rounded text-gray-300"},"最近 1 年",-1),Z=e("label",{for:"table-search",class:"sr-only"},"搜尋",-1),ee={class:"relative"},te=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{class:"w-5 h-5 text-gray-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),se={key:0,class:"text-center text-2xl md:text-3xl py-8"},re={class:"relative overflow-x-auto sm:rounded-lg"},oe={class:"w-full text-sm text-left"},ie=e("thead",{class:"uppercase bg-white/20 text-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"},"訂單編號"),e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"},"訂單日期"),e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"},"訂單總額"),e("th",{scope:"col",class:"px-5 py-3 whitespace-nowrap"},"付款方式"),e("th",{scope:"col",class:"px-5 py-3 whitespace-nowrap"},"付款狀態")])],-1),le={class:"text-md text-gray-400"},ae={class:"border-b bg-gray-800 border-gray-700"},ne={scope:"row",class:"px-6 py-4 font-medium whitespace-nowrap text-white"},de={class:"px-6 py-4 whitespace-nowrap"},ce={class:"px-6 py-4 whitespace-nowrap"},pe={class:"px-5 py-4 whitespace-nowrap"},he={class:"px-5 py-4 whitespace-nowrap text-primary"},ue=["onClick"],fe=e("p",null,"查看明細",-1),me=e("svg",{"data-accordion-icon":"",class:"w-6 h-6 shrink-0 duration-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ye=[fe,me],ge={class:"w-full text-left"},_e=e("thead",{class:"text-xs uppercase bg-white/20 text-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"},"類別"),e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"},"品牌"),e("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"},"商品名稱"),e("th",{scope:"col",class:"px-4 py-3 whitespace-nowrap"},"數量"),e("th",{scope:"col",class:"px-5 py-3 whitespace-nowrap"},"總金額")])],-1),we={class:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600"},xe={class:"px-6 py-4 whitespace-nowrap text-white"},be={class:"px-6 py-4 whitespace-nowrap text-white"},ve={class:"px-6 py-4 whitespace-nowrap text-white"},ke={class:"px-4 py-4 whitespace-nowrap"},Ee={class:"px-5 py-4 whitespace-nowrap font-bold text-white"};function Oe(r,o,i,d,t,w){const f=h("FontAwesomeIcon");return l(),a(_,null,[e("div",B,[e("div",null,[e("button",S,[F,I,t.filter.day===7?(l(),a("span",z,"7 天")):t.filter.day===30?(l(),a("span",j,"30 天")):t.filter.day===180?(l(),a("span",q,"6 個月")):t.filter.day===365?(l(),a("span",N,"1 年")):g("",!0),P],512),e("div",R,[e("ul",U,[e("li",null,[e("div",H,[u(e("input",{checked:"",id:"filter-radio-example-2",type:"radio",value:7,name:"filter-radio",class:"w-4 h-4 text-primary2 focus:ring-primary2 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600","onUpdate:modelValue":o[0]||(o[0]=s=>t.filter.day=s)},null,512),[[y,t.filter.day,void 0,{number:!0}]]),G])]),e("li",null,[e("div",J,[u(e("input",{id:"filter-radio-example-3",type:"radio",value:30,name:"filter-radio",class:"w-4 h-4 text-primary2 focus:ring-primary2 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600","onUpdate:modelValue":o[1]||(o[1]=s=>t.filter.day=s)},null,512),[[y,t.filter.day,void 0,{number:!0}]]),K])]),e("li",null,[e("div",Q,[u(e("input",{id:"filter-radio-example-4",type:"radio",value:180,name:"filter-radio",class:"w-4 h-4 text-primary2 focus:ring-primary2 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600","onUpdate:modelValue":o[2]||(o[2]=s=>t.filter.day=s)},null,512),[[y,t.filter.day,void 0,{number:!0}]]),W])]),e("li",null,[e("div",X,[u(e("input",{id:"filter-radio-example-5",type:"radio",value:365,name:"filter-radio",class:"w-4 h-4 text-primary2 focus:ring-primary2 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600","onUpdate:modelValue":o[3]||(o[3]=s=>t.filter.day=s)},null,512),[[y,t.filter.day,void 0,{number:!0}]]),Y])])])],512)]),Z,e("div",ee,[te,u(e("input",{type:"text",id:"table-search",class:"block p-2 pl-10 text-sm border rounded-lg w-full sm:w-72 mt-4 sm:mt-0 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary focus:border-primary",placeholder:"搜尋已購買商品","onUpdate:modelValue":o[4]||(o[4]=s=>t.filter.title=s)},null,512),[[D,t.filter.title]])])]),i.orders.length?(l(!0),a(_,{key:1},v(t.filterOrders,s=>{var m;return l(),a("div",{class:"mb-10",key:s.id},[e("div",re,[e("table",oe,[ie,e("tbody",le,[e("tr",ae,[e("th",ne,n(s.id),1),e("td",de,n(r.$filters.date(s.create_at)),1),e("td",ce," NT$ "+n(r.$filters.currency(s.total)),1),e("td",pe,n((m=s.user)==null?void 0:m.pay),1),e("td",he,[e("a",{href:"#",class:"hover:underline",onClick:T(c=>w.payLink(s.id,s.is_paid),["prevent"])},[O(n(s.is_paid?"已付款":"未付款")+" ",1),p(f,{icon:["fas","arrow-up-right-from-square"],class:"ml-1"})],8,ue)])])])])]),e("button",{type:"button",ref_for:!0,ref:`detailAccordionBtn${s.id}`,class:"flex justify-around items-center mt-1 w-32 focus:outline-none font-medium rounded-sm text-sm text-gray-400 p-1.5 bg-secondary2 hover:bg-secondary2/70"},ye,512),e("div",{ref_for:!0,ref:`detailAccordionTable${s.id}`,class:"hidden relative overflow-x-auto shadow-md"},[e("table",ge,[_e,(l(!0),a(_,null,v(s.products,(c,x)=>(l(),a("tbody",{key:x,class:"text-sm text-gray-400"},[e("tr",we,[e("td",xe,n(c.product.category),1),e("td",be,n(c.product.brand),1),e("td",ve,n(c.product.title),1),e("td",ke,n(c.qty)+"件",1),e("td",Ee," NT$ "+n(r.$filters.currency(c.final_total)),1)])]))),128))])],512)])}),128)):(l(),a("p",se," 沒有任何交易記錄 "))],64)}const $e=E(M,[["render",Oe]]),{VITE_API:Ae,VITE_PATH:De}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",VITE_RENDER_API:"https://metarverspace-server.onrender.com",BASE_URL:"/MetaverSpace/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Te={mixins:[L],data(){return{searchLoading:!1,orders:{},filterOrders:{}}},methods:{getOrders(r){const o=r.姓名.trim(),i=r.電話或Email.trim();this.searchLoading=!0,this.$http.get(`${Ae}/api/${De}/orders`).then(d=>{this.orders=d.data.orders,this.filterOrders=this.orders.filter(t=>t.user.name===o&&(t.user.email===i||t.user.tel===i)),this.searchLoading=!1}).catch(d=>{this.searchLoading=!1,this.userToast("error",d.response.data.message)})}},components:{OrderDetail:$e}},Ve={class:"mt-nav"},Ce={class:"container px-2 md:px-0 pt-8"},Le={class:"border-2 rounded-lg overflow-hidden"},Me=e("h1",{class:"p-4 bg-black/50 text-xl font-bold border-b-2"},"交易記錄",-1),Be={class:"px-8"},Se={class:"py-8 flex justify-center"},Fe=e("label",{for:"name",class:"block mb-2 text-sm font-medium text-white"},"姓名",-1),Ie={class:"mt-8"},ze=e("label",{for:"phoneOrEmail",class:"block mb-2 text-sm font-medium text-white"},"電話或Email",-1),je=["disabled"],qe={key:0,class:"animate-spin h-5 w-5 mr-3 text-white absolute",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Ne=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),Pe=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),Re=[Ne,Pe],Ue={key:0,class:"my-20 border-b border-2"};function He(r,o,i,d,t,w){const f=h("VField"),s=h("ErrorMessage"),m=h("VForm"),c=h("OrderDetail"),x=h("ScrollTop");return l(),a(_,null,[e("div",Ve,[e("div",Ce,[e("div",Le,[Me,e("div",Be,[e("div",Se,[p(m,{class:"w-96",ref:"form",onSubmit:w.getOrders},{default:V(({errors:b})=>[e("div",null,[Fe,p(f,{type:"text",id:"name",name:"姓名",class:k(["border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary focus:border-primary",{"border-warm":b.姓名}]),rules:"required",placeholder:"請輸入姓名",required:""},null,8,["class"]),p(s,{name:"姓名",class:"text-warm text-sm"})]),e("div",Ie,[ze,p(f,{type:"text",id:"name",name:"電話或Email",class:k(["border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary focus:border-primary",{"border-warm":b.電話或Email}]),rules:"required",placeholder:"請輸入電話或Email",required:""},null,8,["class"]),p(s,{name:"電話或Email",class:"text-warm text-sm"})]),e("button",{type:"submit",class:"mt-12 primary-button w-full relative",disabled:t.searchLoading},[t.searchLoading?(l(),a("svg",qe,Re)):g("",!0),O(" 訂單查詢 ")],8,je)]),_:1},8,["onSubmit"])])])]),Object.keys(t.orders).length?(l(),a("div",Ue)):g("",!0),Object.keys(t.orders).length?(l(),C(c,{key:1,orders:t.filterOrders},null,8,["orders"])):g("",!0)])]),p(x)],64)}const Qe=E(Te,[["render",He]]);export{Qe as default};
