(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=(a(86),a(41)),i=a.n(l),u=a(50),s=a(34),m=a(63),p=a(48),d=a(64),h=a.n(d),b=a(18),E=a(65),f=a(66),O=a(51),g=a(30),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"AUTH_USER_ID",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.a.SET_AUTH_USER:return t.id;default:return e}},v=a(12);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(v.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j={books:[],currentBook:[],bookName:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.b.GET_DRB_BOOKS:return k({},e,{books:t.booklist});case g.b.GET_BOOK_BY_ID:return k({},e,{currentBook:t.book,bookName:t.book[0].book_name});case g.b.CLEAN_GET_BOOK_BY_ID:return k({},e,{currentBook:[],bookName:""});default:return e}},B={key:"root",storage:h.a,blacklist:["loadingBar","drbReducer"]},T=Object(E.createLogger)({diff:!0,duration:!0,collapsed:!0,logErrors:!0}),C=Object(p.a)(B,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{auth:y(e.auth,t,e),drbReducer:_(e.drbReducer,t,e),loadingBar:Object(O.loadingBarReducer)(e.loadingBar,t,e)}}),S=function(){var e=Object(b.d)(C,Object(b.a)(T,f.a));return{store:e,persistor:Object(p.b)(e)}},D=a(36),A=a(24),R=a(67),N=a.n(R),P=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement(N.a,{type:"Oval",color:"black",width:"56",height:"56"}))},x=a(2),U=a(39),G=a(22),I=a(68),K=a(69),M=a(76),z=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,error:""},a}return Object(M.a)(t,e),Object(G.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log({error:e,info:t})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Something went wrong. Unable to render this part.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(n.Component),L=a(49),H=a(166),Y=a(25),J=a(170),q=a(171),F=a(168),W=a(172),Q=a(169),V=a(174),X=a(173),Z=a(73),$=a.n(Z),ee=a(72),te=a.n(ee),ae=a(70),ne=a.n(ae),re=a(71),oe=a.n(re),ce=a(75),le=a.n(ce),ie=Object(H.a)(function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(v.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Y.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(v.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(v.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}),ue=function(){var e=ie(),t=r.a.useState(null),a=Object(L.a)(t,2),n=a[0],o=a[1],c=r.a.useState(null),l=Object(L.a)(c,2),i=l[0],u=l[1],s=Boolean(n),m=Boolean(i);function p(){u(null)}function d(){o(null),p()}var h=r.a.createElement(X.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:d},r.a.createElement(V.a,{onClick:d},"Profile"),r.a.createElement(V.a,{onClick:d},"My account")),b=r.a.createElement(X.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:p},r.a.createElement(V.a,null,r.a.createElement(F.a,{"aria-label":"Show 4 new mails",color:"inherit"},r.a.createElement(Q.a,{badgeContent:4,color:"secondary"},r.a.createElement(ne.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(V.a,null,r.a.createElement(F.a,{"aria-label":"Show 11 new notifications",color:"inherit"},r.a.createElement(Q.a,{badgeContent:11,color:"secondary"},r.a.createElement(oe.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(V.a,{onClick:function(e){o(e.currentTarget)}},r.a.createElement(F.a,{"aria-label":"Account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(te.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(J.a,{position:"static"},r.a.createElement(q.a,null,r.a.createElement(F.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement($.a,null)),r.a.createElement(W.a,{className:e.title,variant:"h5",noWrap:!0},r.a.createElement(D.b,{to:"/",className:"branding"},"Ethodoxy")),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(F.a,{"aria-label":"Show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(le.a,null))))),b,h)},se=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Built with React and material UI by orjichidi95@gmail.com. My"," ",r.a.createElement("a",{href:"https://chidimo.github.io/portfolio/"},"Portfolio")))},me=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return r.a.createElement(A.a,Object.assign({},a,{render:function(e){return r.a.createElement(z,null,r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement("main",{className:"container",id:"public-route-layout"},r.a.createElement(t,e))),r.a.createElement(se,null))}}))},pe=function(e){var t=e.location;return r.a.createElement("section",{className:"container",id:"error404"},r.a.createElement("h1",null,"Error: 404"),r.a.createElement("p",null,"The requested url ",r.a.createElement("span",{id:"address404"},t.pathname)," ","was not found on the server."))},de=Object(n.lazy)(function(){return a.e(4).then(a.bind(null,186))}),he=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,187))}),be=Object(n.lazy)(function(){return a.e(5).then(a.bind(null,188))}),Ee=function(){return r.a.createElement(D.a,{basename:"/Ethodoxy"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(P,null)},r.a.createElement(A.c,null,r.a.createElement(me,{exact:!0,path:"/",component:de}),r.a.createElement(me,{exact:!0,path:"/douay-rheims-bible",component:he}),r.a.createElement(me,{exact:!0,path:"/douay-rheims-bible/:book/:id",component:be}),r.a.createElement(A.a,{component:pe}))))},fe=a(26),Oe=a.n(fe),ge={axiosDefaults:function(){Oe.a.defaults.headers.post["Content-Type"]="application/json",Oe.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",Oe.a.defaults.headers.common["Access-Control-Allow-Methods"]="PUT, GET, PATCH, POST",Oe.a.defaults.headers.common["Access-Control-Allow-Headers"]="Content-Type",Oe.a.defaults.headers.common["Access-Control-Max-Age"]="3000",Oe.a.defaults.baseURL="https://ethodoxy.herokuapp.com/api/v1"}},ye=S(),ve=ye.store,we=ye.persistor,ke=function(){return Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:ge.axiosDefaults();case 1:case"end":return e.stop()}},e)}))(),r.a.createElement(s.Provider,{store:ve},r.a.createElement(m.a,{loading:null,persistor:we},r.a.createElement(Ee,null)))};c.a.render(r.a.createElement(ke,null),document.getElementById("root"))},30:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n={SET_AUTH_USER:"SET_AUTH_USER"},r={GET_DRB_BOOKS:"GET_DRB_BOOKS",GET_BOOK_BY_ID:"GET_BOOK_BY_ID",CLEAN_GET_BOOK_BY_ID:"CLEAN_GET_BOOK_BY_ID"}},81:function(e,t,a){e.exports=a(137)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.dea7b9f0.chunk.js.map