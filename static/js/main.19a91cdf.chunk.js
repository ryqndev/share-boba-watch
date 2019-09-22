(window["webpackJsonpshare-boba-watch"]=window["webpackJsonpshare-boba-watch"]||[]).push([[0],{190:function(e,t,a){e.exports=a(279)},195:function(e,t,a){},272:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n,o=a(1),i=a.n(o),r=a(81),c=a.n(r),s=(a(195),a(14)),l=a(15),h=a(17),u=a(16),m=a(18),d=a(19),p=a(3),b=(a(60),function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"statistics-page--container"},i.a.createElement("div",{className:"statistics-title--holder",onClick:function(){window.location="https://boba.watch/"}},i.a.createElement("div",{className:"statistics-title--logo"}),i.a.createElement(p.a,{variant:"h1"},"boba watch")),i.a.createElement("div",{className:"notice-container"},i.a.createElement(p.a,{variant:"subtitle1"},"Share your boba watch profile with your friends!"),i.a.createElement("br",null),i.a.createElement(p.a,{variant:"body1"},"Start keeping track of your finances now. Login with your Facebook account and get started ",i.a.createElement("a",{href:"https://boba.watch"}," here."),i.a.createElement("br",null),i.a.createElement("br",null),"To view someone else's profile, visit their unique share link found on their profile. Find out how here: ",i.a.createElement("a",{href:"https://info.boba.watch"},"FAQ page"))))}}]),t}(o.Component)),f=a(36),F=(a(259),{init:function(e){(n=f.firestore()).enablePersistence(),sessionStorage.setItem("uid",e)},getStats:function(e,t){n.collection("users").doc(sessionStorage.getItem("uid")).collection("user").doc("stats").get().then((function(t){e(t.data())})).catch((function(e){t(e)}))}}),g=a(28),v=(a(271),["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),E=["1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","12 PM"],w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={time:e.data,width:e.width},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"parseTimeData",value:function(e){var t=[],a=[];e.forEach((function(e){a.push(Math.max.apply(null,e))}));var n=Math.max.apply(null,a);return e.forEach((function(e,a){e.forEach((function(e,o){t.push({x:v[a],y:E[o],color:"rgba(246, 128, 128, ".concat(0===e?.1:e/n,")")})}))})),t}},{key:"render",value:function(){var e=this.state;return i.a.createElement("div",{className:"daily-chart"},i.a.createElement(p.a,{variant:"h3"},"Common Drinking Times"),i.a.createElement(g.c,{xType:"ordinal",yType:"ordinal",margin:60,width:e.width,height:1.8*e.width},i.a.createElement(g.b,{orientation:"top"}),i.a.createElement(g.d,null),i.a.createElement(g.a,{colorType:"literal",style:{stroke:"#F68080",strokeWidth:"2px"},data:this.parseTimeData(e.time)})))}}]),t}(o.Component),y=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).getUserData=function(e){F.init(e),F.getStats(a.foundUser,a.didNotFindUser)},a.foundUser=function(e){var t=i.a.createElement("div",{className:"statistics-content--holder"},i.a.createElement(p.a,{variant:"h2"},e.fn,"'s stats"),i.a.createElement("br",null),i.a.createElement(p.a,{variant:"h3"},"...in a nutshell"),i.a.createElement("br",null),i.a.createElement(p.a,{variant:"subtitle1",component:"p"},"Drink Average: ",i.a.createElement("span",null,"$",parseInt(e.ad)/100)),i.a.createElement(p.a,{variant:"subtitle1",component:"p"},"Monthly Total: ",i.a.createElement("span",null,"$",e.tc/100)),i.a.createElement(p.a,{variant:"subtitle1",component:"p"},"Drinks this month: ",i.a.createElement("span",null,e.td)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(w,{data:JSON.parse(e.d),width:window.innerWidth>=800?800:window.innerWidth}));a.setState({display:t})},a.didNotFindUser=function(e){var t=i.a.createElement("div",{className:"notice-container"},i.a.createElement(p.a,{variant:"subtitle1"},"This person either doesn't exist or has their profile set to private."),i.a.createElement("br",null),i.a.createElement(p.a,{variant:"body1"},"If this is your profile and would like to change it, please access your user settings in your Boba Watch account. You can find more information at",i.a.createElement("a",{href:"https://info.boba.watch/"}," our FAQ page ")));a.setState({display:t})};var n=a.props.match.params.user;return sessionStorage.setItem("uid",n),a.getUserData(n),a.state={display:i.a.createElement("div",{className:"statistics-content--in-progress"},i.a.createElement(p.a,{variant:"h3"}," Loading data... "))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"statistics-page--container"},i.a.createElement("div",{className:"statistics-title--holder",onClick:function(){window.location="https://boba.watch/"}},i.a.createElement("div",{className:"statistics-title--logo"}),i.a.createElement(p.a,{variant:"h1"},"boba watch")),this.state.display)}}]),t}(o.Component),M=(a(272),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).componentDidCatch=function(){window.location.reload(!0)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/",component:b}),i.a.createElement(d.a,{path:"/:user",component:y}))}}]),t}(o.Component)),k=a(55),O=a(13),j=Object(O.createMuiTheme)({overrides:{MuiButton:{text:{backgroundColor:"#F68080",borderRadius:3,border:0,color:"white",height:30,padding:"0 30px",margin:"20px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, 0.3)",fontFamily:"Poppins",fontWeight:700,fontSize:14,"&:hover":{backgroundColor:"#FFDCDC"}}},MuiBottomNavigation:{root:{backgroundColor:"#FFAFA4"}},MuiBottomNavigationAction:{root:{color:"#000000"},iconOnly:{color:"#FF0000"},wrapper:{color:"#FFFFFF "}},MuiDialogActions:{action:{color:"#FFFFFF"}}},palette:{primary:{main:"#F68080",light:"#FFDCDC",contrastText:"#FFFFFF"},secondary:{main:"#FFFFFF",contrastText:"#F68080"}},typography:{useNextVariants:!0,h1:{fontFamily:"Poppins",fontWeight:700,color:"#000000",fontSize:44,marginBottom:20},h2:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:48,margin:0},h3:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:20},subtitle1:{fontFamily:"Poppins",fontSize:22,fontWeight:"bold",color:"#333333"},body1:{fontFamily:"Poppins",color:"#FFFFFF",fontSize:16}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.initializeApp({apiKey:"AIzaSyBePNJQYVteyh1Ll9fqnXbXc-S8fmJlbTQ",authDomain:"boba-watch-firebase.firebaseapp.com",databaseURL:"https://boba-watch-firebase.firebaseio.com",projectId:"boba-watch-firebase",storageBucket:"",messagingSenderId:"674375234614",appId:"1:674375234614:web:fdaf98c291204b9c"}),c.a.render(i.a.createElement(O.MuiThemeProvider,{theme:j},i.a.createElement(k.a,{basename:""},i.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},60:function(e,t,a){}},[[190,1,2]]]);
//# sourceMappingURL=main.19a91cdf.chunk.js.map