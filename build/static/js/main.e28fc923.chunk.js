(this.webpackJsonptender=this.webpackJsonptender||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},129:function(e,t,a){e.exports=a(1307)},1307:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),c=a.n(r),l=(a(134),a(56)),i=a(38),o=a(22),m=a(23),u=a(25),g=a(24),d=a(26),p=a(27),f=(a(135),a(79)),h=(a(82),a(136),a(1313)),E=a(1314),b=a(1315),v=Object(p.g)((function(e){var t=e.isMatch,a=e.handleNewUser,n=(e.use,Object(p.f)());return t?s.a.createElement(h.a,null,s.a.createElement(E.a,null,s.a.createElement(b.a,{xs:12,md:12},s.a.createElement("div",{className:"noMatch"},s.a.createElement("p",{className:"text-center name"}," Sorry, they don't like you back. Better luck next time. ")),s.a.createElement("p",{className:"left searching",onClick:a}," Keep searching")))):s.a.createElement(h.a,null,s.a.createElement(E.a,null,s.a.createElement(b.a,{xs:12,md:12},s.a.createElement("div",{className:"noMatch"},s.a.createElement("p",{className:"text-center name"}," They like you back  ",s.a.createElement("img",{className:"matchText-tenderLogo",src:"https://res.cloudinary.com/ddoc8nfxb/image/upload/v1573925533/ff7854heart_mhabmy.png",alt:"Tender Logo"})," ")))),s.a.createElement(E.a,null,s.a.createElement(b.a,{xs:{span:12},md:{span:6,offset:3}},s.a.createElement("div",{className:"d-flex justify-content-center align-items-center married"},s.a.createElement("p",{className:"left searching",onClick:function(){n.push("/chat"),a()}}," Send them a message "),s.a.createElement("p",{className:"left searching",onClick:a}," Keep searching")))))})),N=function(e){var t=e.randomUser,a=e.newUser,r=e.onSelectUser,c=Object(n.useState)(!1),l=Object(f.a)(c,2),i=l[0],o=l[1],m=Object(n.useState)(!1),u=Object(f.a)(m,2),g=u[0],d=u[1],p=function(){a(),d(!1)};Object(n.useEffect)((function(){d(!1)}),[t]);var N=function(){var e=Math.round(Math.random());o(!!e),d(!0)};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"homeCentered"},s.a.createElement(h.a,null,void 0!==t.name&&s.a.createElement(E.a,null,s.a.createElement(b.a,{xs:12,md:12},s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{className:"arrow left"},s.a.createElement("i",{className:g?"off-buttons":"fas fa-chevron-left d-xl-none",onClick:p}),s.a.createElement("p",{className:g?"off-buttons":"left d-none d-xl-block",onClick:p}," ",s.a.createElement("sub",{className:"rose"})," Next!!! ",s.a.createElement("sub",{className:"rose"}))),s.a.createElement("img",{className:g?i?"mainImage-transparent":"mainImage-bright":"mainImage",onClick:function(){return r(t,"/profile")},src:t.picture.large,alt:"Tender user"}),s.a.createElement("div",{className:"arrow"},s.a.createElement("i",{className:g?"off-buttons":"fas fa-chevron-right d-xl-none",onClick:N}),s.a.createElement("p",{className:g?"off-buttons":"right d-none d-xl-block",onClick:N},"Marry me!"))))),s.a.createElement(E.a,null,s.a.createElement(b.a,{xs:12,md:12},s.a.createElement("div",{className:g?"off-buttons":"text-center name"},s.a.createElement("p",null," ",t.name.first,", ",t.dob.age," y.o. ")))),g&&s.a.createElement(v,{isMatch:i,handleNewUser:p,isDecided:g}))))},k=(a(83),a(1316)),O=(a(141),function(e){var t=e.settings,a=e.onChange;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"first-setting"},s.a.createElement("p",{className:"settingsItem"},"Female:"),s.a.createElement("span",null,s.a.createElement(k.a,{toggle:!0,checked:t.female,onChange:function(){return a("female")}}))),s.a.createElement("div",{className:"border"}),s.a.createElement("div",{className:"setting"},s.a.createElement("p",{className:"settingsItem"},"Male:")," ",s.a.createElement("span",null,s.a.createElement(k.a,{toggle:!0,checked:t.male,onChange:function(){return a("male")}}))))}),j=function(e){var t=e.settings,a=e.onChange;return s.a.createElement("div",{className:"settings-container"},s.a.createElement("div",{className:"looking-for"},s.a.createElement("p",{classname:"settingsTitle"},"I'm looking for...")),s.a.createElement(O,{settings:t,onChange:a}),s.a.createElement("div",{className:"setting"},s.a.createElement("p",{className:"settingsItem"},"Smoker:"),s.a.createElement("span",null,s.a.createElement(k.a,{toggle:!0,checked:t.smoker,onChange:function(){return a("smoker")}}))),s.a.createElement("div",{className:"setting"},s.a.createElement("p",{className:"settingsItem"},"Vegetarian:"),s.a.createElement("span",null,s.a.createElement(k.a,{toggle:!0,checked:t.vegetarian,onChange:function(){return a("vegetarian")}}))),s.a.createElement("div",{className:"last-setting"},s.a.createElement("p",{className:"settingsItem"},"Single:"),s.a.createElement("span",null,s.a.createElement(k.a,{toggle:!0,checked:t.single,onChange:function(){return a("single")}}))))},y=(a(111),Object(p.g)((function(e){var t=e.user,a=e.location,n=e.onSelectUser;return s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"message-pict",onClick:function(){return n(t,"/profile")}},s.a.createElement("img",{src:t.picture.thumbnail,alt:"Tender user",className:"avatar"})),s.a.createElement("div",{className:"message-name",onClick:function(){return n(t,"/profile")}},t.name.first," ",t.name.last),s.a.createElement("div",{className:"message-content",onClick:function(){return n(t,"/chat")}},"/messages"===a.pathname?"".concat(t.message.substring(0,130),"..."):"".concat(t.message.substring(0,15),"...")),s.a.createElement("div",{className:"message-date"},t.date?t.date:"29 oct."))}))),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.randomUsers,a=e.onSelectUser;return s.a.createElement("div",{className:"msg"},t.map((function(e){return s.a.createElement(y,{user:e,key:e.name.first,onSelectUser:a})})))}}]),t}(n.Component),C=a(6),U=(a(255),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(g.a)(t).call(this,e))).toggleCollapse=function(e){return function(){a.setState((function(t){return{collapseID:t.collapseID!==e?e:""}}))}},a.clickLogo=function(){a.props.newUser(),a.setState({collapseID:""})},a.state={collapseID:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("main",null,s.a.createElement(C.f,{className:"navBarCustom",color:"light-blue lighten-3",light:!0,fixed:"top"},s.a.createElement(C.k,{className:"nav-size",href:"/Tender",onClick:this.clickLogo},s.a.createElement("img",{className:"logo-tender",src:"https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574074799/ffffffheart_fhfafu.png",style:{width:50},alt:"Tender Logo"}),s.a.createElement("span",{className:"app-name"},"Tender")),s.a.createElement("div",{className:"navbar-ic"},s.a.createElement(C.g,{className:"navbar-icon",onClick:this.toggleCollapse("navbarCollapse1")})),s.a.createElement(C.c,{id:"navbarCollapse1",isOpen:this.state.collapseID,navbar:!0},s.a.createElement(C.l,{left:!0},s.a.createElement(C.d,null,s.a.createElement(C.e,{onClick:this.toggleCollapse("navbarCollapse1"),exact:!0,to:"/Tender"}," ",s.a.createElement("span",{className:"link-menu"},"Home"))),s.a.createElement(C.d,null,s.a.createElement(C.e,{onClick:this.toggleCollapse("navbarCollapse1"),exact:!0,to:"/Tender/settings"},s.a.createElement("span",{className:"link-menu"},"Settings"))),s.a.createElement(C.d,null,s.a.createElement(C.e,{onClick:this.toggleCollapse("navbarCollapse1"),exact:!0,to:"/Tender/messages"},s.a.createElement("span",{className:"link-menu"},"Messages"))),s.a.createElement(C.d,null,s.a.createElement(C.e,{onClick:this.toggleCollapse("navbarCollapse1"),exact:!0,to:"/Tender/chat"},s.a.createElement("span",{className:"link-menu"},"Chat"))))))))}}]),t}(n.Component)),M=(a(256),a(257),function(e){var t=e.sentMessages,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e;e=a,document.getElementById("chat-spaceForMessagesScroll-scrollable").scrollTo(0,e.current.offsetTop)}),[t]),s.a.createElement(h.a,null,s.a.createElement(E.a,{className:"sentMessagesRow"},s.a.createElement(b.a,{md:{span:4,offset:8},sm:{span:5,offset:7},xs:{span:8,offset:4}},t.map((function(e,t){return s.a.createElement("div",{className:"chatMessages-eachMessage",key:t},s.a.createElement("div",{className:"chatMessages-newMessage"},s.a.createElement("p",null," ",e," ")),s.a.createElement("div",{className:"chatMessages-spaceBetweenMessages"}))})),s.a.createElement("div",{ref:a}))))}),S=(a(258),function(){return s.a.createElement("div",{className:"chat-noMessages"},s.a.createElement("img",{className:"tenderLogo",src:"https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574167393/FE5963heart_t8shrn.png",alt:"Tender Logo"}),s.a.createElement("h1",null," Go ahead, send them a message. ",s.a.createElement("br",null)," Don't be shy! "))}),x=(a(259),function(e){var t=e.user;return s.a.createElement(h.a,null,s.a.createElement(E.a,{className:"tenderUserMessage-Row"},s.a.createElement(b.a,{md:4,sm:5,xs:8},s.a.createElement("div",null,s.a.createElement("div",{className:" tenderUserMessage"},s.a.createElement("p",null," ",t.message," ")),s.a.createElement("div",{className:"tenderUserMessage-spaceBetween"})))))}),I=function(e){var t=e.sentMessages,a=e.user;return a.message?s.a.createElement(s.a.Fragment,null,s.a.createElement(x,{user:a}),s.a.createElement(M,{sentMessages:t})):t[0]?s.a.createElement(M,{sentMessages:t}):s.a.createElement(S,null)};function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(g.a)(t).call(this,e))).showCurrentlyTyping=function(e){a.setState({userMessage:e.target.value})},a.sendMessageNow=function(e){e.preventDefault(),a.state.userMessage&&a.setState((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{sentMessages:[].concat(Object(l.a)(e.sentMessages),[[e.userMessage]]),userMessage:""})}))},a.state={userMessage:"",sentMessages:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.user!==e.user&&this.setState({sentMessages:[]})}},{key:"render",value:function(){return s.a.createElement("div",{className:"chat"},s.a.createElement("div",{className:"chat-contacts"},s.a.createElement(w,{randomUsers:this.props.randomUsers,onSelectUser:this.props.onSelectUser})),s.a.createElement("div",{className:"chat-spaceForMessages"},s.a.createElement("div",{className:"chat-spaceForMessagesScroll",id:"chat-spaceForMessagesScroll-scrollable"},s.a.createElement(I,{sentMessages:this.state.sentMessages,user:this.props.user})),s.a.createElement("form",{className:"chat-chatForm"},s.a.createElement("input",{type:"text",className:"chat-textArea",rows:"2",value:this.state.userMessage,onChange:this.showCurrentlyTyping}),s.a.createElement("input",{type:"submit",className:"chat-sendButton",value:"Send",onClick:this.sendMessageNow}))))}}]),t}(n.Component),D=(a(112),function(e){var t=e.user,a=e.settings;return s.a.createElement(h.a,null,s.a.createElement(E.a,null,s.a.createElement(b.a,{md:12,xs:12},s.a.createElement("div",{className:"profile-name profile-container"},s.a.createElement("div",{className:"description"},s.a.createElement("span",null,t.name.first," ",t.name.last),s.a.createElement("br",null),s.a.createElement("span",null,t.dob.age," y.o."),s.a.createElement("br",null),s.a.createElement("h4",{className:"profile-quote"}," ",function(){var e=t.description,a=t.name.first;return e.match(/chuck norris/gi)?e.replace(/chuck norris/gi,a):t.description}()))),"Ang\xe9lina"!==t.name.first&&"In\xeas"!==t.name.first&&"Elena"!==t.name.first&&"Alexandra"!==t.name.first&&s.a.createElement("div",{className:"profile-settings"},s.a.createElement("p",null,a.smoker?"-Smoker-":"-Non smoker-"),s.a.createElement("p",null,a.vegetarian?"-Vegetarian-":"-Carnivorous-"),s.a.createElement("p",null,a.single?"-Single-":"-Married-")))))}),L=Object(p.g)((function(e){var t=e.user,a=e.settings,n=Object(p.f)();return s.a.createElement("div",{className:"profile-container"},s.a.createElement("div",{className:"profile-pict"},s.a.createElement("img",{src:t.picture.large,alt:"Tender user",className:"pict"})),s.a.createElement("div",{className:"description-container"},s.a.createElement("div",{className:"profile-description-size"},s.a.createElement(D,{user:t,settings:a})),s.a.createElement("div",{className:"profile-social-links"},("Ang\xe9lina"===t.name.first||"Alexandra"===t.name.first||"In\xeas"===t.name.first||"Elena"===t.name.first)&&s.a.createElement("div",{className:"social-links"},s.a.createElement("div",null,s.a.createElement("a",{href:t.contact.LinkedIn,className:"social-link"},s.a.createElement("i",{className:"fab fa-linkedin-in "}))),s.a.createElement("div",null,s.a.createElement("a",{href:t.contact.GitHub,className:"social-link"},s.a.createElement("i",{className:"fab fa-github"}))))),s.a.createElement("div",{className:"chat-btn profile-container"},s.a.createElement("button",{className:"chatBtn-style",onClick:function(){n.push("/Tender/chat")}},"Chat"))))})),B=a(78),F=a.n(B);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=[{name:{first:"Alexandra",last:"Santos"},picture:{thumbnail:"https://i.imgur.com/EkLnHof.jpg",large:"https://i.imgur.com/fKVgPRR.jpg"},message:"Hey handsome! How are you?",date:"5 nov.",contact:{LinkedIn:"https://www.linkedin.com/in/alexandrapatriciosantos/",GitHub:"https://github.com/alexandrapatriciosantos"},description:'I like long walks on the beach, MDN web docs, and proper indentation. Dislikes: infinite loops, "failed to render" messages, and coding in the master branch.',dob:{age:25}},{name:{first:"Ang\xe9lina",last:"Riet"},picture:{thumbnail:"https://i.imgur.com/t4iBPv7.jpg",large:"https://i.imgur.com/knxzOV6.jpg"},message:"Voulez-vous coucher avec moi ce soir? ;)",date:"31 oct.",contact:{LinkedIn:"https://www.linkedin.com/in/angelinariet/",GitHub:"https://github.com/AngelinaRIET"},description:"Autodidacte passionn\xe9e par l\u2019informatique puis form\xe9e \xe0 la Wild Code School de Lisbonne, je suis \xe0 la recherche d\u2019un stage sur Paris en d\xe9veloppement web / mobile - React JS / React Native.",dob:{age:28}},{name:{first:"In\xeas",last:"Oliveira"},picture:{thumbnail:"https://i.imgur.com/v7zP5R8.jpg",large:"https://i.imgur.com/Brhn4Tn.jpg"},message:"You make my booleans come true!!",date:"4 nov.",contact:{LinkedIn:"https://www.linkedin.com/in/inesfpoliveira/",GitHub:"https://github.com/inespisca"},description:"blablabla",dob:{age:26}},{name:{first:"Elena",last:"Ortega"},picture:{thumbnail:"https://i.imgur.com/p9fIRKM.jpg",large:"https://i.imgur.com/wuUXt6P.jpg"},message:"Hol\xe0 que tal",date:"3 nov.",contact:{LinkedIn:"https://www.linkedin.com/in/elenaortegabaura/",GitHub:"https://github.com/eobwebdevelop"},description:"blablabla",dob:{age:28}}],G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(g.a)(t).call(this,e))).getGenderSelection=function(){return!0===a.state.settings.female&&!1===a.state.settings.male?"&gender=female":!1===a.state.settings.female&&!0===a.state.settings.male?"&gender=male":""},a.getUser=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(e){var t="https://randomuser.me/api/?inc=gender,name,dob,picture".concat(a.getGenderSelection());fetch(t).then((function(e){return e.json()})).then((function(t){a.setState({selectedUser:H({},t.results[0],{description:e.value})})}))}))},a.getUsers=function(){fetch("https://randomuser.me/api/?results=10").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return H({},e,{message:F.a.lorem.sentences(),description:F.a.lorem.sentences()})}));a.setState({randomUsers:[].concat(A,Object(l.a)(t))})}))},a.handleChangeSetting=function(e){a.setState((function(t){return H({},t,{settings:H({},t.settings,Object(i.a)({},e,!t.settings[e]))})}))},a.handleSelectUser=function(e,t){a.setState({selectedUser:e},(function(){t&&a.props.history.push(t)}))},a.state={selectedUser:{picture:{},name:{},dob:{},description:""},randomUsers:[],settings:{smoker:!1,vegetarian:!1,single:!1,female:!0,male:!0}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getUser(),this.getUsers()}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(U,{newUser:this.getUser}),s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/Tender",render:function(){return s.a.createElement(N,{randomUser:e.state.selectedUser,user:e.state.selectedUser,onSelectUser:e.handleSelectUser,newUser:e.getUser,settings:e.state.settings})}}),s.a.createElement(p.a,{exact:!0,path:"/Tender/settings",render:function(){return s.a.createElement(j,{settings:e.state.settings,onChange:e.handleChangeSetting})}}),s.a.createElement(p.a,{exact:!0,path:"/Tender/messages",render:function(){return s.a.createElement(w,{randomUsers:e.state.randomUsers,onSelectUser:e.handleSelectUser})}}),s.a.createElement(p.a,{exact:!0,path:"/Tender/chat",render:function(){return s.a.createElement(P,{randomUsers:e.state.randomUsers,user:e.state.selectedUser,onSelectUser:e.handleSelectUser})}}),s.a.createElement(p.a,{exact:!0,path:"/Tender/profile",render:function(){return s.a.createElement(L,{user:e.state.selectedUser,settings:e.state.settings})}})))}}]),t}(n.Component),z=Object(p.g)(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(1306);var V=a(12);c.a.render(s.a.createElement(V.a,null,s.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},141:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.e28fc923.chunk.js.map