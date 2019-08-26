(window.webpackJsonpQUIUC=window.webpackJsonpQUIUC||[]).push([[0],{139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(36),r=a.n(o),l=a(7),i=a(9),s=(a(51),a(52),function(){return c.a.createElement("div",{className:"headerContainer"},c.a.createElement(l.b,{to:"/"},c.a.createElement("img",{className:"headerLogo",src:"assets/logo.svg",alt:"QUIUC"})),c.a.createElement("li",{className:"headerLinks"},c.a.createElement(l.b,{to:"about"},c.a.createElement("div",{className:"headerLink"},"About")),c.a.createElement(l.b,{to:"people"},c.a.createElement("div",{className:"peopleLink headerLink"},"People")),c.a.createElement(l.b,{to:"calendar"},c.a.createElement("div",{className:"headerLink"},"Calendar")),c.a.createElement(l.b,{to:"contact"},c.a.createElement("div",{className:"headerLink"},"Contact"))))}),m=(a(58),a(59),function(e){return c.a.createElement("div",{className:"button",onClick:function(){"string"===typeof e.link?window.location.href=e.link:"function"===typeof e.action&&e.action()}},c.a.createElement("div",{className:"buttonText"},e.text))}),u=function(){return c.a.createElement("div",{className:"hero sectionContainer"},c.a.createElement("div",{className:"heroTitleArea"},c.a.createElement("h1",null,"The first and only undergraduate quantum computing organization at the"," ",c.a.createElement("span",{className:"orangeHighlight"},"University of Illinois")),c.a.createElement("p",null,"Aiming to eliminate the barrier of entry into the field for students of all backgrounds."),c.a.createElement("div",{className:"heroButtonPositioner"},c.a.createElement(m,{text:"Join Us",link:"https://quiuc.slack.com"}))),c.a.createElement("img",{className:"heroBlochSphere",src:"/assets/blochSphere.png",alt:""}))},d=a(16),f=a(15),E=a.n(f),p=(a(139),a(39)),h=a.n(p),b=a(40),v=a.n(b),w=a(41),g=a.n(w),N=Object(n.forwardRef)(function(e,t){var a=Object(n.useState)(null),o=Object(d.a)(a,2),r=o[0],i=o[1],s=Object(n.useState)(null),m=Object(d.a)(s,2),u=m[0],f=m[1],p=Object(n.useState)(null),b=Object(d.a)(p,2),w=b[0],N=b[1];return Object(n.useEffect)(function(){fetch(h.a).then(function(e){return e.text()}).then(function(e){return i(e)}),fetch(v.a).then(function(e){return e.text()}).then(function(e){return f(e)}),fetch(g.a).then(function(e){return e.text()}).then(function(e){return N(e)})}),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{ref:t,className:"sectionContainer"},c.a.createElement("div",{className:"aboutSection"},c.a.createElement(E.a,{source:r}),c.a.createElement("p",null,"If you would like to get involved or just want more information,"," ",c.a.createElement(l.b,{to:"/contact"},"get in touch."))),c.a.createElement("div",{className:"aboutSection"},c.a.createElement(E.a,{source:u})),c.a.createElement("div",{className:"aboutSection"},c.a.createElement(E.a,{source:w}))))}),k=(a(140),a(141),function(e){return c.a.createElement("div",{className:"personCard"},c.a.createElement("img",{className:"personImage",src:e.imageSrc,alt:e.name}),c.a.createElement("h4",{className:"personName"},e.name),c.a.createElement("div",{className:"personRole"},e.position))}),j=Object(n.forwardRef)(function(e,t){return c.a.createElement("div",{ref:t,className:"peopleSection sectionContainer"},c.a.createElement("h1",null,"People"),c.a.createElement("div",{className:"peopleList"},c.a.createElement(k,{name:"Bailey Tincher",position:"President",imageSrc:"/assets/people/bailey.jpg"}),c.a.createElement(k,{name:"Guangkuo Liu",position:"Education Committee",imageSrc:"/assets/people/guangkuo.jpg"}),c.a.createElement(k,{name:"Jenn Mueng",position:"Web Development",imageSrc:"/assets/people/jenn.jpg"})))}),S=a(42),R=a(43),C=(a(142),a(44)),O=Object(n.forwardRef)(function(e,t){return c.a.createElement("div",{ref:t,className:"sectionContainer"},c.a.createElement(S.a,{defaultView:"dayGridMonth",plugins:[R.a],events:C.a,eventColor:"#c96542",eventRender:function(e){var t=document.createElement("div");t.setAttribute("class","calendar-description"),t.innerHTML=e.event.extendedProps.location.text,e.el.append(t)}}))}),y=(a(143),Object(n.forwardRef)(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{ref:t,className:"contactSectionContainer"},c.a.createElement("div",{className:"line"}),c.a.createElement("h1",null,"Get in touch"),c.a.createElement("div",{className:"contactSections"},c.a.createElement("div",{className:"contactSection"},c.a.createElement("p",{className:"contactRow"},c.a.createElement("b",null,"Corporations: "),c.a.createElement("a",{href:"mailto:outreach@quiuc.org"},"outreach@quiuc.org")),c.a.createElement("p",{className:"contactRow"},c.a.createElement("b",null,"Education Team: "),c.a.createElement("a",{href:"mailto:education@quiuc.org"},"education@quiuc.org")),c.a.createElement("p",{className:"contactRow"},c.a.createElement("b",null,"General Inquiry: "),c.a.createElement("a",{href:"mailto:info@quiuc.org"},"info@quiuc.org"))),c.a.createElement("div",{className:"socialContact contactSection"},c.a.createElement("a",{href:"https://reddit.com/u/quiuc",className:"contactRow"},"Reddit"),c.a.createElement("a",{href:"https://www.facebook.com/uiucquantum/",className:"contactRow"},"Facebook"),c.a.createElement("a",{href:"https://www.instagram.com/quiuc_/",className:"contactRow"},"Instagram"),c.a.createElement("a",{href:"https://quiuc.slack.com",className:"contactRow"},"Slack")))))})),x=function(e){var t=e.location.pathname.split("/")[1],a=Object(n.useRef)(null),o=Object(n.useRef)(null),r=Object(n.useRef)(null),l=Object(n.useRef)(null);return Object(n.useEffect)(function(){switch(t){case"about":a.current.scrollIntoView({behavior:"auto",block:"start"}),window.scrollBy(0,-86);break;case"people":o.current.scrollIntoView({behavior:"auto",block:"start"}),window.scrollBy(0,-86);break;case"calendar":r.current.scrollIntoView({behavior:"auto",block:"start"}),window.scrollBy(0,-86);break;case"contact":l.current.scrollIntoView({behavior:"auto",block:"end"});break;default:window.scrollTo(0,0)}}),c.a.createElement("div",{className:"screenContainer"},c.a.createElement("div",{className:"background"}),c.a.createElement(s,null),c.a.createElement("div",{className:"headerOffset"}),c.a.createElement(u,null),c.a.createElement(N,{ref:a}),c.a.createElement(j,{ref:o}),c.a.createElement(O,{ref:r}),c.a.createElement(y,{ref:l}))},q=a(45),I=a.n(q);a(144);var L=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement(i.a,{path:["/","/home","/about","/people","/calendar","/contact"],component:x}),c.a.createElement(i.a,{path:"/workshops",component:I.a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(145),a(146),a(147);r.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},39:function(e,t,a){e.exports=a.p+"static/media/about.df758a25.md"},40:function(e,t,a){e.exports=a.p+"static/media/workshops.5d594ef3.md"},41:function(e,t,a){e.exports=a.p+"static/media/research.6195dbf9.md"},44:function(e){e.exports=JSON.parse('{"a":[{"title":"First General Meeting","date":"2019-09-01T16:00:00-05:00","location":{"text":"Siebel Room 1105"}}]}')},45:function(e,t){},46:function(e,t,a){e.exports=a(148)},51:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.848a03e5.chunk.js.map