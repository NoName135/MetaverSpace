import{_ as b,a as x,l as y,c as w,b as e,d as s,w as u,i as g,y as v,v as k,t as c,r as n,o as V,h as D,n as m}from"./index-6d712d14.js";import{s as T}from"./swal-e4da1902.js";const M={mixins:[T],data(){return{branches:[],branch:{},branchTitle:"台北館",date:null,num:1,allowDates:[]}},methods:{getBranches(){this.loadings.fullLoading=!0,this.$http.get("https://metarverspace-server.onrender.com/branches").then(o=>{this.branches=o.data,this.branch=o.data[0],this.loadings.fullLoading=!1}).catch(o=>{this.loadings.fullLoading=!1,this.userToast("error",o.message)})},getBranch(){this.branches.forEach(o=>{o.title===this.branchTitle&&(this.branch=o)})},createReserve(o){this.loadings.fullLoading=!0,this.$http.post("https://metarverspace-server.onrender.com/reserves",{title:this.branchTitle,reserve_time:Date.parse(this.date),num:this.num,name:o.姓名.trim(),tel:o.電話,email:o.email,message:o.備註,is_reserve:!1}).then(()=>{this.userToast("success","預約成功"),this.num=1,this.$refs.form.resetForm(),this.loadings.fullLoading=!1}).catch(r=>{this.loadings.fullLoading=!1,this.userToast("error",r.message)})}},computed:{...x(y,["loadings"])},mounted(){this.date=new Date(new Date(Date.now()+2*24*60*60*1e3).setHours(10,0,0,0)),this.allowDates=Array.from({length:14},(o,r)=>new Date(Date.now()+(r+2)*24*60*60*1e3)),this.getBranches()}},q={class:"container mt-nav px-2 lg:px-0"},B={class:"flex flex-col md:flex-row justify-between items-center pt-8"},L=e("h1",{class:"text-primary text-2xl md:text-3xl font-bold"}," MetaverSpace 預約體驗 ",-1),S={class:"mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6"},R=e("h3",{class:"bg-white/20 text-gray-300 p-3 rounded text-lg md:text-xl font-medium"}," 門市預約 ",-1),C={class:"mt-6 space-y-6"},E=e("label",{for:"district",class:"block mb-2 text-sm font-medium text-white"},"選擇門市",-1),H=e("option",{value:"台北館",class:"bg-white/20",selected:""}," 台北館 ",-1),j=e("option",{value:"台中館",class:"bg-white/20"},"台中館",-1),z=e("option",{value:"高雄館",class:"bg-white/20"},"高雄館",-1),N=[H,j,z],U={class:"grid grid-cols-3 gap-6"},F={class:"col-span-full sm:col-span-2"},P=e("label",{for:"time",class:"block mb-2 text-sm font-medium text-white"},"預約時間",-1),A={class:"col-span-full sm:col-span-1"},W=e("label",{for:"num",class:"block mb-2 text-sm font-medium text-white"},"人數 (1~10)",-1),G={class:"mt-10"},I=e("h3",{class:"bg-white/20 text-gray-300 p-3 rounded text-lg md:text-xl font-medium"}," 預約人資訊 ",-1),J=e("label",{for:"name",class:"block mb-2 text-sm font-medium text-white"},"姓名",-1),K=e("label",{for:"phone",class:"block mb-2 text-sm font-medium text-white"},"電話 (請輸入手機格式：09)",-1),O=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-white"},"Email",-1),Q=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},"備註",-1),X={class:"mt-8 flex flex-col"},Y={class:"flex items-center"},Z=e("label",{for:"agreeCheck",class:"ml-2 text-sm font-medium text-gray-300"},"我已詳閱並同意以下約定條款",-1),$=e("div",null,[e("p",{class:"text-sm"}," 1. 預約查詢經審核後顯示預約成功才算完成預約。 "),e("p",{class:"mt-2 text-sm"}," 2. 若需取消預約請於 1 小時前於線上或來電取消。 "),e("p",{class:"mt-2 text-sm"}," 3. 逾時 15 分鐘未入場將自動取消並列入黑名單。 ")],-1),ee=e("button",{type:"submit",class:"mt-6 w-full primary-button"}," 送出預約 ",-1),te={class:"lg:col-span-2 bg-black/50 rounded p-4"},se=["src"],oe={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},re={class:"text-xl md:text-2xl my-8 font-semibold"},le={class:"space-y-6"},ae={class:"text-lg md:text-xl"},ne={class:"ml-4"},ie={class:"text-lg md:text-xl"},ce={class:"ml-4"},de={class:"text-lg md:text-xl"},me={class:"ml-4"},he={class:"text-lg md:text-xl"},ue={class:"ml-5"},ge={class:"text-lg md:text-xl"},_e=["href"],pe=["src"];function fe(o,r,be,xe,t,h){const a=n("font-awesome-icon"),_=n("RouterLink"),p=n("VueDatePicker"),i=n("V-field"),d=n("ErrorMessage"),f=n("V-form");return V(),w("div",q,[e("div",B,[L,s(_,{to:"/ReserveHistory",class:"mt-4 md:mt-0 w-32 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-secondary hover:bg-secondary2 focus:ring-secondary3"},{default:u(()=>[D(" 預約查詢 "),s(a,{icon:["fas","arrow-up-right-from-square"],class:"ml-2"})]),_:1})]),e("div",S,[e("div",null,[R,e("div",C,[e("div",null,[E,g(e("select",{id:"district",class:"border text-sm rounded w-full p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary","onUpdate:modelValue":r[0]||(r[0]=l=>t.branchTitle=l),onChange:r[1]||(r[1]=l=>h.getBranch())},N,544),[[v,t.branchTitle]])]),e("div",U,[e("div",F,[P,s(p,{modelValue:t.date,"onUpdate:modelValue":r[2]||(r[2]=l=>t.date=l),format:"yyyy/MM/dd HH:mm","allowed-dates":t.allowDates,"week-start":"0","start-time":{hours:10,minutes:0},"min-time":{hours:10,minutes:0},"max-time":{hours:21,minutes:0},"minutes-increment":"30","no-minutes-overlay":"","select-text":"確定","cancel-text":"取消",locale:"zh-TW",dark:""},null,8,["modelValue","allowed-dates"])]),e("div",A,[W,g(e("input",{type:"number",id:"num",min:"1",class:"text-end border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary","onUpdate:modelValue":r[3]||(r[3]=l=>t.num=l),onBlur:r[4]||(r[4]=()=>{t.num<1&&(t.num=1),t.num>10&&(t.num=10)}),required:""},null,544),[[k,t.num,void 0,{number:!0}]])])])]),e("div",G,[I,s(f,{class:"mt-6 space-y-6",ref:"form",onSubmit:h.createReserve},{default:u(({errors:l})=>[e("div",null,[J,s(i,{type:"text",name:"姓名",id:"name",class:m(["border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary",{"border-warm":l.姓名}]),rules:"required",placeholder:"請輸入姓名",required:""},null,8,["class"]),s(d,{name:"姓名",class:"text-warm text-sm"})]),e("div",null,[K,s(i,{type:"tel",name:"電話",id:"name",class:m(["border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary",{"border-warm":l.電話}]),rules:"required|phone",placeholder:"請輸入電話",required:""},null,8,["class"]),s(d,{name:"電話",class:"text-warm text-sm"})]),e("div",null,[O,s(i,{type:"tel",name:"email",id:"name",class:m(["border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary",{"border-warm":l.email}]),rules:"required|email",placeholder:"請輸入email",required:""},null,8,["class"]),s(d,{name:"email",class:"text-warm text-sm"})]),e("div",null,[Q,s(i,{id:"message",as:"textarea",name:"備註",rows:"4",class:"block p-2.5 w-full text-sm bg-gray-600 border-gray-500 placeholder-gray-400 rounded-lg border focus:ring-primary focus:border-primary text-white",placeholder:"請輸入備註"})]),e("div",X,[e("div",Y,[s(i,{id:"agreeCheck",type:"checkbox",name:"同意",value:!0,class:m(["w-4 h-4 text-primary rounded focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600",{"border-warm":l.同意}]),rules:"agree"},null,8,["class"]),Z]),s(d,{name:"同意",class:"text-warm text-sm ml-6 mt-1"})]),$,ee]),_:1},8,["onSubmit"])])]),e("div",te,[e("iframe",{class:"w-full h-[240px] sm:h-[360px] md:h-[480px] mx-auto border-0 rounded",src:t.branch.src,loading:"lazy",allowfullscreen:"",referrerpolicy:"no-referrer-when-downgrade"},null,8,se),e("div",oe,[e("div",null,[e("h2",re," MetaverSpace "+c(t.branch.title),1),e("div",le,[e("h5",ae,[s(a,{icon:["fas","location-dot"],class:"ml-1"}),e("span",ne,c(t.branch.address),1)]),e("h5",ie,[s(a,{icon:["fas","phone"]}),e("span",ce,c(t.branch.tel),1)]),e("h5",de,[s(a,{icon:["fas","clock"]}),e("span",me,c(t.branch.open_time),1)]),e("h5",he,[s(a,{icon:["fas","dollar-sign"],class:"ml-1"}),e("span",ue,c(t.branch.price),1)]),e("h5",ge,[s(a,{icon:["fab","facebook"]}),e("a",{href:t.branch.facebook,target:"_blank",class:"ml-4 hover:underline hover:text-primary"},"前往 Facebook",8,_e)])])]),e("div",null,[e("img",{src:t.branch.image,class:"md:mt-8 w-full h-[420px] object-cover object-center"},null,8,pe)])])])])])}const ve=b(M,[["render",fe]]);export{ve as default};