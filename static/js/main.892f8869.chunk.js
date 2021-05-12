(this["webpackJsonpshopify-front-end-challenge"]=this["webpackJsonpshopify-front-end-challenge"]||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(10),i=a.n(n),o=a(41),r=(a(57),a(58),a(59),a(60),a(61),a(62),a(19)),l=a(7),j=a(6),d=a(1);function b(){var e=Object(s.useState)("none"),t=Object(j.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)("0"),i=Object(j.a)(n,2),o=i[0],l=i[1],b=Object(s.useState)("none"),m=Object(j.a)(b,2),u=m[0],h=m[1],O=Object(s.useState)("0"),g=Object(j.a)(O,2),p=g[0],x=g[1];return Object(d.jsx)("header",{className:"App-header",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)("img",{className:"mahadflix-logo",src:"resources/img/mahadflix-logo.svg"}),Object(d.jsx)(r.b,{to:"/Share",children:Object(d.jsx)("img",{className:"gift-icon",src:"resources/img/gift.svg"})}),Object(d.jsxs)("div",{className:"notifications-container",children:[Object(d.jsx)("img",{className:"bell-icon",src:"resources/img/bellwhite.svg",onMouseEnter:function(){l("1"),c("visible")},onMouseLeave:function(){l("0"),c("hidden")}}),Object(d.jsx)("div",{className:"notifications",style:{visibility:a,opacity:o},children:"No new notifications"})]}),Object(d.jsxs)("div",{className:"account-container",children:[Object(d.jsx)("img",{className:"profile-photo",src:"resources/img/MahadRehan.jpg"}),Object(d.jsx)("div",{className:"account-menu",style:{visibility:u,opacity:p},children:"MahadR"})]}),Object(d.jsx)("div",{className:"arrow",onMouseEnter:function(){x("1"),h("visible")},onMouseLeave:function(){x("0"),h("hidden")}})]})})}var m=a(33);function u(){var e=Object(s.useState)([Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("input",{onClick:function(){n(0)},type:"image",src:"./resources/img/home.svg",className:"nav-icon"},0)}),Object(d.jsx)("div",{className:"selected",style:{width:"100%"}},"selected"),Object(d.jsx)(r.b,{to:"/Search",children:Object(d.jsx)("input",{onClick:function(){n(1)},type:"image",src:"./resources/img/search.svg",className:"nav-icon"},1)}),Object(d.jsx)(r.b,{to:"/Flix",children:Object(d.jsx)("input",{onClick:function(){n(2)},type:"image",src:"./resources/img/movie.svg",className:"nav-icon"},2)}),Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("input",{onClick:function(){n(4)},type:"image",src:"./resources/img/add.svg",className:"nav-icon"},4)})]),t=Object(j.a)(e,2),a=t[0],c=t[1];function n(e){for(var t=-1,s=0;s<a.length;s++)if("selected"==a[s].key){t=s;break}var n=a[t];t>-1&&a.splice(t,1),a.splice(e+1,0,n),c(Object(m.a)(a))}return Object(d.jsx)("div",{className:"nav-bar",children:Object(d.jsx)(r.a,{children:a})})}var h=a(16),O=a.n(h);a(25);function g(){return Object(s.useEffect)((function(){O.a.init({duration:1500})}),[]),Object(d.jsxs)("div",{className:"home-page",children:[Object(d.jsx)("div",{className:"gradient",style:{background:"radial-gradient(circle, rgba(0,0,0,0) 35%, rgba(0,0,0,0.70) 100%)"}}),Object(d.jsxs)("div",{className:"home-page-title-container",children:[Object(d.jsx)("h1",{className:"home-page-title","data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"50",children:"All your favourite titles on"}),Object(d.jsx)("img",{className:"home-page-title-logo",src:"resources/img/mahadflix-logo.svg","data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"50"})]}),Object(d.jsxs)("p",{className:"home-page-description","data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"500",children:["Browse through your favourite movies and nominate your top 5 flix for Shopify's movie award show. See the ",Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:"/resources/img/search.svg"})})," tab to browse for movies you would like to nominate then submit at the ",Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:"/resources/img/add.svg"})})," tab."]}),Object(d.jsxs)("div",{className:"dev-links",children:[Object(d.jsx)("a",{href:"https://github.com/mahaaad",target:"_blank",children:Object(d.jsx)("img",{className:"nav-icon",src:"resources/img/githublogo.svg"})}),Object(d.jsx)("a",{href:"https://mahaaad.github.io/website/",target:"_blank",children:Object(d.jsx)("img",{className:"nav-icon",src:"resources/img/mrlogo.svg",style:{backgroundColor:"white",borderRadius:"50%"}})})]}),Object(d.jsx)("div",{className:"home-page-background"})]})}var p=a(44),x=a.n(p),f=a(48);var v=function(e){var t=e.array;return Object(d.jsxs)("div",{className:"search-results",children:[Object(d.jsx)("div",{className:"gradient"}),t]})},y=a(98),N=a(97),w=a(96),S=a(95),k=a(99);function C(e){var t=Object(s.useState)("0"),a=Object(j.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)("7.5vw"),o=Object(j.a)(i,2),r=o[0],l=o[1],b=Object(s.useState)(["1.5s","2s"]),m=Object(j.a)(b,2),u=m[0],h=m[1],g=Object(s.useState)("1"),p=Object(j.a)(g,2),x=p[0],f=p[1],v=Object(s.useState)(e.nom),C=Object(j.a)(v,2),A=C[0],E=C[1],M=Object(s.useState)(Object(d.jsxs)("p",{children:["You have nominated 5 films! ",Object(d.jsx)("br",{})," See the submit tab to send in your picks."]})),T=Object(j.a)(M,2),I=T[0],R=T[1],J=Object(s.useState)(!1),L=Object(j.a)(J,2),D=L[0],F=L[1],Y=function(){F(!0)},_=function(){F(!1)},W=String(e.plot);function z(){h(["0.75s","1s"]),n("0"),l("7.5vw"),f("1")}return W.length>170&&(W=W.substring(0,169)+"..."),Object(s.useEffect)((function(){O.a.init({duration:1500})}),[]),Object(d.jsxs)("div",{className:"movie",onMouseEnter:A?"":function(){h(["1s","1.5s"]),n("1"),l("0"),f("0.25")},onMouseLeave:A?"":z,disabled:A,children:[Object(d.jsxs)(N.a,{className:"alert-dialog",open:D,onClose:_,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(d.jsx)(S.a,{children:Object(d.jsx)(k.a,{id:"alert-dialog-description",children:I})}),Object(d.jsx)(w.a,{children:Object(d.jsx)(y.a,{onClick:_,color:"primary",children:"Close"})})]}),Object(d.jsxs)("div",{"data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"50",style:{height:"27.5vw",width:"100%"},children:[Object(d.jsxs)("div",{className:"nominated",style:{display:A?"flex":"none"},children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("img",{src:"/resources/img/nominatewhite.svg"}),"NOMINATED"]}),Object(d.jsx)(y.a,{onClick:function(){for(var t=JSON.parse(localStorage.getItem("nominated")),a=-1,s=0;s<t.length;s++)if(t[s].title===e.title){a=s;break}a>-1&&(t.splice(a,1),localStorage.setItem("nominated",JSON.stringify(t)),E(!1),f("1"))},className:"nominate-button",color:"secondary",variant:"outlined",size:"medium",style:{color:"white",fontWeight:"bold",marginTop:"5%",marginLeft:"2.5%"},children:"REMOVE NOMINATION"})]}),Object(d.jsxs)("div",{className:"hover-info",style:{marginTop:A?"-7.5vw":r,opacity:c,transition:"margin-top ease-in-out ".concat(u[0],", opacity ease-in-out ").concat(u[1])},children:[Object(d.jsx)(y.a,{onClick:function(){var t=JSON.parse(localStorage.getItem("nominated"));5==t.length?(R(Object(d.jsxs)("p",{children:["You have already nominated 5 films. ",Object(d.jsx)("br",{})," See the Flix tab to edit your nominations."]})),Y()):(4==t.length&&(R(Object(d.jsxs)("p",{className:"complete-message",children:["You have nominated 5 films! ",Object(d.jsx)("br",{})," See the ",Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:"/resources/img/add.svg"})})," tab to send in your picks."]})),Y()),console.log(this),t.push(e),localStorage.setItem("nominated",JSON.stringify(t)),E(!0),f("0.25")),z(),l("-7.5vw")},className:"nominate-button",color:"secondary",variant:"outlined",size:"medium",style:{color:"white",fontWeight:"bold",marginTop:"5%",marginLeft:"2.5%"},children:"NOMINATE"}),Object(d.jsxs)("h2",{className:"movie-title",children:[e.title," ",e.year]}),Object(d.jsxs)("div",{className:"movie-info",children:[Object(d.jsxs)("small",{className:"imdb-rating",style:{display:"N/A"==e.rated||"Not Rated"==e.rated?"none ":" default"},children:["\u2605",e.rating]}),Object(d.jsx)("small",{className:"content-rating",style:{display:"N/A"==e.rating?"none ":" default"},children:e.rated}),Object(d.jsx)("small",{className:"run-time",style:{display:"N/A"==e.runtime?"none ":" default"},children:e.runtime})]}),Object(d.jsx)("p",{className:"movie-plot",style:{display:"N/A"==e.plot?"none":"default"},children:W})]}),Object(d.jsx)("img",{className:"movie-wallpaper",src:e.wallpaper,style:{opacity:A?"0.25":x,transition:"ease-in-out 0.5s"}})]})]})}var A=function(){var e="3918a29a",t=[],a=Object(s.useState)(""),n=Object(j.a)(a,2),i=n[0],o=n[1],r=Object(s.useState)([]),l=Object(j.a)(r,2),b=l[0],u=l[1];function h(){console.log("SEARCH ARRAY"),console.log(t),""!==i&&(t.length<1?u([Object(d.jsx)("p",{className:"no-results",children:"No results found"})]):t.forEach((function(e){if("N/A"!==e.Poster&&void 0!==e.Poster){for(var t=JSON.parse(localStorage.getItem("nominated")),a=!1,s=0;s<t.length;s++)if(t[s].title===e.Title){a=!0;break}b.push(Object(d.jsx)(C,{wallpaper:e.Poster,title:e.Title,year:"("+e.Year+")",plot:e.Plot,rating:e.imdbRating,rated:e.Rated,runtime:e.Runtime,nom:a},e.Title+e.Year+String(Math.random())))}u(Object(m.a)(b),(function(){console.log("error")}))})))}function g(){return(g=Object(f.a)(x.a.mark((function a(){var s,c,n;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(i.length<1)){a.next=2;break}return a.abrupt("return");case 2:s=[],c=[],n=1;case 5:if(!(n<3)){a.next=14;break}return a.next=8,fetch("https://www.omdbapi.com/?s=".concat(i,"&i=tt3896198&apikey=").concat(e,"&page=").concat(n)).then((function(e){return e.json()})).then((function(e){return e.Search}));case 8:void 0!=(c=a.sent)&&s.push.apply(s,Object(m.a)(c)),console.log(c);case 11:n++,a.next=5;break;case 14:s.forEach((function(a){fetch("https://www.omdbapi.com/?t=".concat(String(a.Title),"&i=tt3896198&apikey=").concat(e)).then((function(e){return e.json()})).then((function(e){console.log("--DATA--"),console.log(e),t.push(e)}))})),console.log(t);case 16:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(s.useEffect)((function(){O.a.init({duration:1500})}),[]),Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsxs)("div",{className:"search-bar-container","data-aos":"fade-up","data-aos-once":"true",children:[Object(d.jsx)("input",{type:"image",className:"nav-icon search-icon",src:"/resources/img/searchblack.svg",onClick:function(){console.log("clicked"),h()}}),[Object(d.jsx)("input",{type:"text",className:"search-bar",onChange:function(e){return o(e.target.value)},onKeyUp:function(e){""===i&&"Backspace"===e.key&&u([]),"Enter"===e.key&&(t=[],u([]),setTimeout((function(){h()}),1e3)),t=[],function(){g.apply(this,arguments)}()}})]]}),Object(d.jsx)(v,{array:b,onSearchChange:u})]})};function E(){return Object(s.useEffect)((function(){O.a.init({duration:1500})}),[]),Object(d.jsx)("div",{className:"search-page",children:Object(d.jsxs)("body",{children:[Object(d.jsx)("h2",{className:"search-page-title","data-aos":"fade-up","data-aos-once":"true",children:"Search for your favourite flix"}),Object(d.jsx)(A,{})]})})}function M(e){var t=Object(s.useState)("0"),a=Object(j.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)("7.5vw"),o=Object(j.a)(i,2),r=o[0],l=o[1],b=Object(s.useState)(["1.5s","2s"]),m=Object(j.a)(b,2),u=m[0],h=m[1],g=Object(s.useState)("1"),p=Object(j.a)(g,2),x=p[0],f=p[1],v=String(e.plot);return v.length>170&&(v=v.substring(0,169)+"..."),Object(s.useEffect)((function(){O.a.init({duration:1500})}),[]),Object(d.jsx)("div",{className:"movie flix-movie",onMouseEnter:function(){h(["1s","1.5s"]),n("1"),l("0"),f("0.25")},onMouseLeave:function(){h(["0.75s","1s"]),n("0"),l("7.5vw"),f("1")},children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"hover-info",style:{marginTop:r,opacity:c,transition:"margin-top ease-in-out ".concat(u[0],", opacity ease-in-out ").concat(u[1])},children:[Object(d.jsxs)("h2",{className:"movie-title",children:[e.title," ",e.year]}),Object(d.jsxs)("div",{className:"movie-info",children:[Object(d.jsxs)("small",{className:"imdb-rating",style:{display:"N/A"==e.rated||"Not Rated"==e.rated?"none ":" default"},children:["\u2605",e.rating]}),Object(d.jsx)("small",{className:"content-rating",style:{display:"N/A"==e.rating?"none ":" default"},children:e.rated}),Object(d.jsx)("small",{className:"run-time",style:{display:"N/A"==e.runtime?"none ":" default"},children:e.runtime})]}),Object(d.jsx)("p",{className:"movie-plot",style:{display:"N/A"==e.plot?"none":"default"},children:v})]}),Object(d.jsx)("img",{className:"movie-wallpaper",src:e.wallpaper,style:{opacity:x,transition:"ease-in-out 0.5s"}})]})})}function T(){var e=JSON.parse(localStorage.getItem("nominated"));console.log("arrayyyy: "+e);var t=Object(s.useState)(i),a=Object(j.a)(t,2),c=a[0],n=a[1];function i(){for(var t=[],a=function(a){var s="";s=0===a?"3rem":1===a?"2.75rem":"2.5rem",t.push(Object(d.jsxs)("li",{className:"empty-flix",style:{fontSize:s},"data-aos":"fade-up","data-aos-once":"true","data-aos-delay":100*a,children:[e.length>a?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y.a,{onClick:function(){!function(t){for(var a=[],s=0;s<e.length;s++)e[s].title!==t.title&&a.push(e[s]);e=a,localStorage.setItem("nominated",JSON.stringify(e)),n(i)}(e[a])},className:"remove-movie",color:"secondary",variant:"outlined",size:"small",style:{zIndex:"5",color:"white",fontWeight:"bold",margin:"3%",position:"absolute",top:"0",right:"0",width:"1.5rem",height:"1.5rem"},children:"X"}),Object(d.jsx)(M,{wallpaper:e[a].wallpaper,title:e[a].title,year:e[a].year,plot:e[a].plot,rating:e[a].rating,runtime:e[a].Runtime,rated:e[a].rated},e[a].title+e[a].year+String(Math.random()))]}):"",Object(d.jsx)("div",{className:"home-page-background"})]}))},s=0;s<5;s++)a(s);return t}return console.log(c),Object(s.useEffect)((function(){O.a.init({duration:1500})}),[]),Object(d.jsxs)("div",{className:"flix-page",children:[Object(d.jsx)("h1",{className:"flix-page-title","data-aos":"fade-up","data-aos-once":"true",children:"Nominated Flix"}),Object(d.jsxs)("div",{className:"nominated-flix-container","data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"250",children:[Object(d.jsx)("ol",{className:"nominated-list",style:{color:e.length>0?"white":"rgb(70, 70, 70)"},children:c}),Object(d.jsxs)("p",{className:"empty-message",children:["Nominated movies will be shown here!",Object(d.jsx)("br",{}),"See the search tab to find movies to nominate"]})]})]})}function I(){return Object(d.jsxs)("div",{className:"share-page",children:[Object(d.jsxs)("div",{className:"share-page-title-container",children:[Object(d.jsx)("img",{className:"chat-bubble-icon",src:"./resources/img/chat-bubble.svg"}),Object(d.jsx)("h2",{className:"share-page-title",children:"Tell friends about MahadFlix."})]}),Object(d.jsxs)("div",{className:"share-container",children:[Object(d.jsx)("p",{className:"share-info",children:"Share this link so your friends can join the conversation around all your favorite TV shows and movies."}),Object(d.jsxs)("div",{className:"share-links",children:[Object(d.jsxs)("p",{className:"share-url",children:["https://mahaaad.github.io/mahadflix/i2303...",Object(d.jsx)(y.a,{onClick:function(){var e="https://mahaaad.github.io/mahadflix/i2303...";if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(a){return console.warn("Copy to clipboard failed.",a),!1}finally{document.body.removeChild(t)}}},variant:"contained",style:{float:"right",color:"white",backgroundColor:"red",marginLeft:"1rem"},children:"Copy Link"})]}),Object(d.jsx)("a",{href:"https://mail.google.com/mail/u/0/#inbox",target:"_blank",children:Object(d.jsx)("button",{className:"share-link-button","data-tooltip":"email",children:Object(d.jsx)("img",{src:"./resources/img/mail-icon.png"})})}),Object(d.jsx)("a",{href:"https://web.whatsapp.com/",target:"_blank",children:Object(d.jsx)("button",{className:"share-link-button","data-tooltip":"whatsapp",children:Object(d.jsx)("img",{src:"./resources/img/whatsapp-icon.svg"})})}),Object(d.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:Object(d.jsx)("button",{className:"share-link-button","data-tooltip":"facebook",children:Object(d.jsx)("img",{src:"./resources/img/facebook-icon.svg"})})}),Object(d.jsx)("a",{href:"https://twitter.com/home",target:"_blank",children:Object(d.jsx)("button",{className:"share-link-button","data-tooltip":"twitter",children:Object(d.jsx)("img",{src:"./resources/img/twitter-icon.svg"})})}),Object(d.jsx)("a",{href:"https://www.messenger.com/",target:"_blank",children:Object(d.jsx)("button",{className:"share-link-button","data-tooltip":"messenger",children:Object(d.jsx)("img",{src:"./resources/img/messenger-icon.svg"})})})]})]}),Object(d.jsx)("h3",{className:"how-it-works",children:"HOW IT WORKS"}),Object(d.jsxs)("div",{className:"share-steps-container",children:[Object(d.jsxs)("div",{className:"share-step",children:[Object(d.jsx)("img",{src:"./resources/img/share-icon.svg"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Step 1"}),Object(d.jsx)("br",{}),"Share your link with friends by",Object(d.jsx)("br",{})," copying the link or choose an icon."]})]}),Object(d.jsxs)("div",{className:"share-step",children:[Object(d.jsx)("img",{src:"./resources/img/chat-bubble.svg"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Step 2"}),Object(d.jsx)("br",{}),"We\u2019ll let you know when a friend",Object(d.jsx)("br",{})," signs up."]})]}),Object(d.jsxs)("div",{className:"share-step",children:[Object(d.jsx)("img",{src:"./resources/img/chat-bubble.svg"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Step 3"}),Object(d.jsx)("br",{}),"You can share with as many friends",Object(d.jsx)("br",{})," and family as you like!"]})]})]})]})}var R=function(){return Object(d.jsx)(g,{})},J=function(){return Object(d.jsx)(E,{})},L=function(){return Object(d.jsx)(T,{})},D=function(){return Object(d.jsx)(I,{})},F=function(){var e;return localStorage.setItem("nominated",JSON.stringify([])),Object(d.jsx)(r.a,{basename:"/",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)(u,{}),Object(d.jsx)(l.a,{path:"/Search",component:J}),Object(d.jsx)(l.a,{path:"/Flix",component:L}),Object(d.jsx)(l.a,{path:"/Share",component:D}),Object(d.jsx)(l.a,(e={exact:!0,path:"/"},Object(o.a)(e,"exact",!0),Object(o.a)(e,"component",R),e))]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.892f8869.chunk.js.map