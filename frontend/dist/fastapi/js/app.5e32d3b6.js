(function(){"use strict";var t={466:function(t,e,n){n(7658);var o=n(9242),a=n(4311),s=n(3396);const r={id:"app"},l={class:"main container"};function i(t,e,n,o,a,i){const u=(0,s.up)("NavBar"),c=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(u),(0,s._)("div",l,[(0,s.Wm)(c)])])}const u=t=>((0,s.dD)("data-v-046b84f8"),t=t(),(0,s.Cn)(),t),c={class:"navbar navbar-expand-md navbar-dark bg-dark"},d={class:"container"},m=u((()=>(0,s._)("a",{class:"navbar-brand",href:"/"},"FastAPI + Vue",-1))),p=u((()=>(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1))),f={class:"collapse navbar-collapse",id:"navbarCollapse"},h={key:0,class:"navbar-nav me-auto mb-2 mb-md-0"},_={class:"nav-item"},b={class:"nav-item"},g={class:"nav-item"},v={class:"nav-item"},w={key:1,class:"navbar-nav me-auto mb-2 mb-md-0"},y={class:"nav-item"},k={class:"nav-item"},N={class:"nav-item"};function U(t,e,n,o,a,r){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("nav",c,[(0,s._)("div",d,[m,p,(0,s._)("div",f,[t.isLoggedIn?((0,s.wg)(),(0,s.iD)("ul",h,[(0,s._)("li",_,[(0,s.Wm)(l,{class:"nav-link",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1})]),(0,s._)("li",b,[(0,s.Wm)(l,{class:"nav-link",to:"/dashboard"},{default:(0,s.w5)((()=>[(0,s.Uk)("Dashboard")])),_:1})]),(0,s._)("li",g,[(0,s.Wm)(l,{class:"nav-link",to:"/profile"},{default:(0,s.w5)((()=>[(0,s.Uk)("My Profile")])),_:1})]),(0,s._)("li",v,[(0,s._)("a",{class:"nav-link",onClick:e[0]||(e[0]=(...e)=>t.logout&&t.logout(...e))},"Log Out")])])):((0,s.wg)(),(0,s.iD)("ul",w,[(0,s._)("li",y,[(0,s.Wm)(l,{class:"nav-link",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1})]),(0,s._)("li",k,[(0,s.Wm)(l,{class:"nav-link",to:"/register"},{default:(0,s.w5)((()=>[(0,s.Uk)("Register")])),_:1})]),(0,s._)("li",N,[(0,s.Wm)(l,{class:"nav-link",to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("Log In")])),_:1})])]))])])])])}var Z=(0,s.aZ)({name:"NavBar",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}},methods:{async logout(){await this.$store.dispatch("logOut"),this.$router.push("/login")}}}),D=n(89);const A=(0,D.Z)(Z,[["render",U],["__scopeId","data-v-046b84f8"]]);var O=A,S={components:{NavBar:O}};const V=(0,D.Z)(S,[["render",i]]);var I=V,$=n(2483);const C=(0,s._)("p",null,"This site is built with FastAPI and Vue. (VS Code)",-1),x={key:0,id:"logout"},E={id:"logout"},P={key:1},W=(0,s._)("span",null," or ",-1);function L(t,e,n,o,a,r){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",null,[C,t.isLoggedIn?((0,s.wg)(),(0,s.iD)("div",x,[(0,s._)("p",E,[(0,s.Uk)("Click "),(0,s.Wm)(l,{class:"link",to:"/dashboard"},{default:(0,s.w5)((()=>[(0,s.Uk)("here")])),_:1}),(0,s.Uk)(" to view all notes.")])])):((0,s.wg)(),(0,s.iD)("p",P,[(0,s._)("span",null,[(0,s.Wm)(l,{class:"link",to:"/register"},{default:(0,s.w5)((()=>[(0,s.Uk)("Register")])),_:1})]),W,(0,s._)("span",null,[(0,s.Wm)(l,{class:"link",to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("Log In")])),_:1})])]))])}var T=(0,s.aZ)({name:"HomeView",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}},mounted(){console.log(this.$store.getters.isAuthenticated)}});const z=(0,D.Z)(T,[["render",L]]);var F=z;const M={class:"mb-3"},R=(0,s._)("label",{for:"username",class:"form-label"},"Username:",-1),q={class:"mb-3"},j=(0,s._)("label",{for:"full_name",class:"form-label"},"Full Name:",-1),B={class:"mb-3"},H=(0,s._)("label",{for:"password",class:"form-label"},"Password:",-1),J=(0,s._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function G(t,e,n,a,r,l){return(0,s.wg)(),(0,s.iD)("section",null,[(0,s._)("form",{onSubmit:e[3]||(e[3]=(0,o.iM)(((...e)=>t.submit&&t.submit(...e)),["prevent"]))},[(0,s._)("div",M,[R,(0,s.wy)((0,s._)("input",{type:"text",name:"username","onUpdate:modelValue":e[0]||(e[0]=e=>t.user.username=e),class:"form-control"},null,512),[[o.nr,t.user.username]])]),(0,s._)("div",q,[j,(0,s.wy)((0,s._)("input",{type:"text",name:"full_name","onUpdate:modelValue":e[1]||(e[1]=e=>t.user.full_name=e),class:"form-control"},null,512),[[o.nr,t.user.full_name]])]),(0,s._)("div",B,[H,(0,s.wy)((0,s._)("input",{type:"password",name:"password","onUpdate:modelValue":e[2]||(e[2]=e=>t.user.password=e),class:"form-control"},null,512),[[o.nr,t.user.password]])]),J],32)])}var Y=n(65),K=(0,s.aZ)({name:"RegisterView",data(){return{user:{username:"",full_name:"",password:""}}},methods:{...(0,Y.nv)(["register"]),async submit(){try{await this.register(this.user),this.$router.push("/dashboard")}catch(t){throw"Username already exists. Please try again."}}}});const Q=(0,D.Z)(K,[["render",G]]);var X=Q;const tt={class:"mb-3"},et=(0,s._)("label",{for:"username",class:"form-label"},"Username:",-1),nt={class:"mb-3"},ot=(0,s._)("label",{for:"password",class:"form-label"},"Password:",-1),at=(0,s._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function st(t,e,n,a,r,l){return(0,s.wg)(),(0,s.iD)("section",null,[(0,s._)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)(((...e)=>t.submit&&t.submit(...e)),["prevent"]))},[(0,s._)("div",tt,[et,(0,s.wy)((0,s._)("input",{type:"text",name:"username","onUpdate:modelValue":e[0]||(e[0]=e=>t.form.username=e),class:"form-control"},null,512),[[o.nr,t.form.username]])]),(0,s._)("div",nt,[ot,(0,s.wy)((0,s._)("input",{type:"password",name:"password","onUpdate:modelValue":e[1]||(e[1]=e=>t.form.password=e),class:"form-control"},null,512),[[o.nr,t.form.password]])]),at],32)])}var rt=(0,s.aZ)({name:"LoginView",data(){return{form:{username:"",password:""}}},methods:{...(0,Y.nv)(["logIn"]),async submit(){const t=new FormData;t.append("username",this.form.username),t.append("password",this.form.password),await this.logIn(t)}}});const lt=(0,D.Z)(rt,[["render",st]]);var it=lt,ut=n(7139);const ct=(0,s._)("h1",null,"Add new note",-1),dt=(0,s._)("hr",null,null,-1),mt=(0,s._)("br",null,null,-1),pt={class:"mb-3"},ft=(0,s._)("label",{for:"title",class:"form-label"},"Title:",-1),ht={class:"mb-3"},_t=(0,s._)("label",{for:"content",class:"form-label"},"Content:",-1),bt=(0,s._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),gt=(0,s._)("br",null,null,-1),vt=(0,s._)("br",null,null,-1),wt=(0,s._)("h1",null,"Notes",-1),yt=(0,s._)("hr",null,null,-1),kt=(0,s._)("br",null,null,-1),Nt={key:0},Ut={class:"card",style:{width:"18rem"}},Zt={class:"card-body"},Dt=(0,s._)("strong",null,"Note Title:",-1),At=(0,s._)("strong",null,"Author:",-1),Ot=(0,s._)("strong",null,"Update in:",-1),St=(0,s._)("br",null,null,-1),Vt={key:1},It=(0,s._)("p",null,"Nothing to see. Check back later.",-1),$t=[It];function Ct(t,e,n,a,r,l){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("section",null,[ct,dt,mt,(0,s._)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)(((...e)=>t.submit&&t.submit(...e)),["prevent"]))},[(0,s._)("div",pt,[ft,(0,s.wy)((0,s._)("input",{type:"text",name:"title","onUpdate:modelValue":e[0]||(e[0]=e=>t.form.title=e),class:"form-control"},null,512),[[o.nr,t.form.title]])]),(0,s._)("div",ht,[_t,(0,s.wy)((0,s._)("textarea",{name:"content","onUpdate:modelValue":e[1]||(e[1]=e=>t.form.content=e),class:"form-control"},null,512),[[o.nr,t.form.content]])]),bt],32)]),gt,vt,(0,s._)("section",null,[wt,yt,kt,t.notes.length?((0,s.wg)(),(0,s.iD)("div",Nt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.notes,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,class:"notes"},[(0,s._)("div",Ut,[(0,s._)("div",Zt,[(0,s._)("ul",null,[(0,s._)("li",null,[Dt,(0,s.Uk)(" "+(0,ut.zw)(t.title),1)]),(0,s._)("li",null,[At,(0,s.Uk)(" "+(0,ut.zw)(t.author.username),1)]),(0,s._)("li",null,[Ot,(0,s.Uk)(" "+(0,ut.zw)(t.modified_at),1)]),(0,s._)("li",null,[(0,s.Wm)(i,{to:{name:"Note",params:{id:t.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)("View")])),_:2},1032,["to"])])])])]),St])))),128))])):((0,s.wg)(),(0,s.iD)("div",Vt,$t))])])}var xt=(0,s.aZ)({name:"DashboardView",data(){return{form:{title:"",content:""}}},created:function(){return this.$store.dispatch("getNotes")},computed:{...(0,Y.Se)({notes:"stateNotes"})},methods:{...(0,Y.nv)(["createNote"]),async submit(){await this.createNote(this.form)}}});const Et=(0,D.Z)(xt,[["render",Ct]]);var Pt=Et;const Wt=(0,s._)("h1",null,"Your Profile",-1),Lt=(0,s._)("hr",null,null,-1),Tt=(0,s._)("br",null,null,-1),zt=(0,s._)("strong",null,"Full Name:",-1),Ft=(0,s._)("strong",null,"Username:",-1);function Mt(t,e,n,o,a,r){return(0,s.wg)(),(0,s.iD)("section",null,[Wt,Lt,Tt,(0,s._)("div",null,[(0,s._)("p",null,[zt,(0,s.Uk)(),(0,s._)("span",null,(0,ut.zw)(t.user.full_name),1)]),(0,s._)("p",null,[Ft,(0,s.Uk)(),(0,s._)("span",null,(0,ut.zw)(t.user.username),1)]),(0,s._)("p",null,[(0,s._)("button",{onClick:e[0]||(e[0]=e=>t.deleteAccount()),class:"btn btn-primary"},"Delete Account")])])])}var Rt=(0,s.aZ)({name:"ProfileView",created:function(){return this.$store.dispatch("viewMe")},computed:{...(0,Y.Se)({user:"stateUser"})},methods:{...(0,Y.nv)(["deleteUser"]),async deleteAccount(){try{await this.deleteUser(this.user.id),await this.$store.dispatch("logOut"),this.$router.push("/")}catch(t){console.error(t)}}}});const qt=(0,D.Z)(Rt,[["render",Mt]]);var jt=qt;const Bt={key:0},Ht=(0,s._)("strong",null,"Title:",-1),Jt=(0,s._)("strong",null,"Content:",-1),Gt=(0,s._)("strong",null,"Author:",-1),Yt=(0,s._)("strong",null,"Update in:",-1),Kt={key:0};function Qt(t,e,n,o,a,r){const l=(0,s.up)("router-link");return t.note?((0,s.wg)(),(0,s.iD)("div",Bt,[(0,s._)("p",null,[Ht,(0,s.Uk)(" "+(0,ut.zw)(t.note.title),1)]),(0,s._)("p",null,[Jt,(0,s.Uk)(" "+(0,ut.zw)(t.note.content),1)]),(0,s._)("p",null,[Gt,(0,s.Uk)(" "+(0,ut.zw)(t.note.author.username),1)]),(0,s._)("p",null,[Yt,(0,s.Uk)(" "+(0,ut.zw)(t.note.modified_at),1)]),t.user.id===t.note.author.id?((0,s.wg)(),(0,s.iD)("div",Kt,[(0,s._)("p",null,[(0,s.Wm)(l,{to:{name:"EditNote",params:{id:t.note.id}},class:"btn btn-primary"},{default:(0,s.w5)((()=>[(0,s.Uk)("Edit")])),_:1},8,["to"])]),(0,s._)("p",null,[(0,s._)("button",{onClick:e[0]||(e[0]=e=>t.removeNote()),class:"btn btn-secondary"},"Delete")])])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)}var Xt=(0,s.aZ)({name:"NoteView",props:["id"],async created(){try{await this.viewNote(this.id)}catch(t){console.error(t),this.$router.push("/dashboard")}},computed:{...(0,Y.Se)({note:"stateNote",user:"stateUser"})},methods:{...(0,Y.nv)(["viewNote","deleteNote"]),async removeNote(){try{await this.deleteNote(this.id),this.$router.push("/dashboard")}catch(t){console.error(t)}}}});const te=(0,D.Z)(Xt,[["render",Qt]]);var ee=te;const ne=(0,s._)("h1",null,"Edit note",-1),oe=(0,s._)("hr",null,null,-1),ae=(0,s._)("br",null,null,-1),se={class:"mb-3"},re=(0,s._)("label",{for:"title",class:"form-label"},"Title:",-1),le={class:"mb-3"},ie=(0,s._)("label",{for:"content",class:"form-label"},"Content:",-1),ue=(0,s._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function ce(t,e,n,a,r,l){return(0,s.wg)(),(0,s.iD)("section",null,[ne,oe,ae,(0,s._)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)(((...e)=>t.submit&&t.submit(...e)),["prevent"]))},[(0,s._)("div",se,[re,(0,s.wy)((0,s._)("input",{type:"text",name:"title","onUpdate:modelValue":e[0]||(e[0]=e=>t.form.title=e),class:"form-control"},null,512),[[o.nr,t.form.title]])]),(0,s._)("div",le,[ie,(0,s.wy)((0,s._)("textarea",{name:"content","onUpdate:modelValue":e[1]||(e[1]=e=>t.form.content=e),class:"form-control"},null,512),[[o.nr,t.form.content]])]),ue],32)])}var de=(0,s.aZ)({name:"EditNoteView",props:["id"],data(){return{form:{title:"",content:""}}},created:function(){this.GetNote()},computed:{...(0,Y.Se)({note:"stateNote"})},methods:{...(0,Y.nv)(["updateNote","viewNote"]),async submit(){try{let t={id:this.id,form:this.form};await this.updateNote(t),this.$router.push({name:"Note",params:{id:this.note.id}})}catch(t){console.log(t)}},async GetNote(){try{await this.viewNote(this.id),this.form.title=this.note.title,this.form.content=this.note.content}catch(t){console.error(t),this.$router.push("/dashboard")}}}});const me=(0,D.Z)(de,[["render",ce]]);var pe=me;const fe={notes:{},note:{author:{}}},he={stateNotes:t=>t.notes,stateNote:t=>t.note},_e={async createNote({dispatch:t},e){await a.Z.post("notes",e),await t("getNotes")},async getNotes({commit:t}){let{data:e}=await a.Z.get("notes");t("setNotes",e)},async viewNote({commit:t},e){let{data:n}=await a.Z.get(`note/${e}`);t("setNote",n)},async updateNote({},t){await a.Z.patch(`note/${t.id}`,t.form)},async deleteNote({},t){await a.Z["delete"](`note/${t}`)}},be={setNotes(t,e){t.notes=e},setNote(t,e){t.note=e}};var ge={state:fe,getters:he,actions:_e,mutations:be};const ve={user:JSON.parse(sessionStorage.getItem("USER_INFO"))||null},we={isAuthenticated:t=>!!t.user,stateUser:t=>t.user},ye={async register({dispatch:t},e){await a.Z.post("register",e);let n=new FormData;n.append("username",e.username),n.append("password",e.password),await t("logIn",n)},async logIn({dispatch:t},e){await a.Z.post("login",e).then((e=>{200===e.status&&t("viewMe",!0)})).catch((t=>{console.log(t)}))},async viewMe({commit:t},e){let{data:n}=await a.Z.get("users/me");await t("setUser",n),!0===e&&Ae.push("/dashboard")},async deleteUser({},t){await a.Z["delete"](`user/${t}`)},async logOut({commit:t}){ve.user&&await a.Z.get("logout"),t("logout")}},ke={setUser(t,e){t.user=e,sessionStorage.setItem("USER_INFO",JSON.stringify(e))},logout(t){t.user=null,document.cookie="Authorization=Bearer; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",sessionStorage.setItem("USER_INFO",null),console.log("logout:",!!t.user,t.user)}};var Ne={state:ve,getters:we,actions:ye,mutations:ke},Ue=(0,Y.MT)({modules:{notes:ge,users:Ne}});const Ze=[{path:"/",name:"Home",component:F},{path:"/register",name:"Register",component:X},{path:"/login",name:"Login",component:it},{path:"/dashboard",name:"Dashboard",component:Pt,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:jt,meta:{requiresAuth:!0}},{path:"/note/:id",name:"Note",component:ee,meta:{requiresAuth:!0},props:!0},{path:"/editnote/:id",name:"EditNote",component:pe,meta:{requiresAuth:!0},props:!0}],De=(0,$.p7)({history:(0,$.PO)("/fastapi/"),routes:Ze});De.beforeEach(((t,e,n)=>{if(t.matched.some((t=>t.meta.requiresAuth))){if(Ue.getters.isAuthenticated)return void n();n("/login")}else n()}));var Ae=De;const Oe=(0,o.ri)(I);a.Z.defaults.withCredentials=!0,a.Z.defaults.baseURL="/fastapi",console.log({NODE_ENV:"production",VUE_APP_BASE_API:"/fastapi",BASE_URL:"/fastapi/"}),a.Z.interceptors.response.use(void 0,(function(t){if(t){const e=t.config;if(401===t.response.status&&!e._retry)return console.log(t.response),e._retry=!0,Ue.dispatch("logOut"),Ae.push("/login")}})),Oe.use(Ae),Oe.use(Ue),Oe.mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,s){if(!o){var r=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],s=t[c][2];for(var l=!0,i=0;i<o.length;i++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[i])}))?o.splice(i--,1):(l=!1,s<r&&(r=s));if(l){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,s,r=o[0],l=o[1],i=o[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(i)var c=i(n)}for(e&&e(o);u<r.length;u++)s=r[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(466)}));o=n.O(o)})();