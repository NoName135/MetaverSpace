import{_ as a,a as i,l as r,c as o,b as e,t as n,q as c,o as d}from"./index-09e68c4e.js";const{VITE_API:g,VITE_PATH:u}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"metaverspace",BASE_URL:"/MetaverSpace",MODE:"production",DEV:!1,PROD:!0,SSR:!1},h={data(){return{article:{}}},methods:{getArticle(t){this.$emit("emitId",this.$route.params.id),this.loadings.fullLoading=!0,this.$http.get(`${g}/api/${u}/article/${t}`).then(l=>{this.article=l.data.article,this.loadings.fullLoading=!1}).catch(l=>{this.loadings.fullLoading=!1,this.userToast("error",l.response.data.message)})}},computed:{...i(r,["loadings"])},watch:{$route(t){t.fullPath.includes("article")&&this.getArticle(this.$route.params.id)}},mounted(){this.getArticle(this.$route.params.id)}},p={class:"flex flex-col justify-around h-full items-center"},x={class:"font-bold text-3xl lg:text-4xl text-center"},m=["innerHTML"],_=["innerHTML"];function f(t,l,T,$,s,A){return d(),o("div",{class:"h-[480px] lg:h-[720px] bg-cover bg-center mx-2 lg:mx-0 mt-10 rounded",style:c({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${s.article.image})`})},[e("div",p,[e("div",null,[e("h2",x,n(s.article.title),1),e("p",{class:"mt-8 text-xl leading-relaxed lg:text-2xl lg:leading-loose text-center",innerHTML:s.article.description},null,8,m)]),e("p",{class:"mt-8 text-lg leading-relaxed lg:text-xl lg:leading-loose text-center",innerHTML:s.article.content},null,8,_)])],4)}const E=a(h,[["render",f]]);export{E as default};
