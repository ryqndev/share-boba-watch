(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(t,e,a){t.exports=a(261)},179:function(t,e,a){},186:function(t,e,a){},250:function(t,e,a){},261:function(t,e,a){"use strict";a.r(e);var o,n=a(0),i=a.n(n),r=a(66),c=a.n(r),s=(a(179),a(18)),l=a(19),u=a(21),d=a(20),h=a(22),p=a(14),m=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,"This is the default page")}}]),e}(n.Component),f=a(31),b=(a(182),{init:function(t){o=f.firestore(),sessionStorage.setItem("uid",t)},getStats:function(t,e){o.collection("users").doc(sessionStorage.getItem("uid")).collection("user").doc("stats").get().then(function(e){t(e.data())}).catch(function(t){e(t)})}}),F=a(13),g=(a(186),function(t){function e(t){var a;Object(s.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).getUserData=function(t){b.init(t),b.getStats(a.foundUser,a.didNotFindUser)},a.foundUser=function(t){console.log(t);var e=i.a.createElement(F.a,null,t.fn,"'s boba watch profile",i.a.createElement("br",null),"Average cost of a drink: ",t.ad/100,i.a.createElement("br",null),"Total spent this month: ",t.tc,i.a.createElement("br",null),"# of drinks this month: ",t.td);a.setState({display:e})},a.didNotFindUser=function(t){var e=i.a.createElement(F.a,{variant:"body1"},"Sorry! This person doesn't exist or has their profile set to private. If this is your profile and would like to change it, please access your user settings in your Boba Watch account. You can find more information here -",i.a.createElement("a",{href:"https://info.boba.watch/"},"https://info.boba.watch/"));a.setState({display:e})};var o=a.props.match.params.user;return sessionStorage.setItem("uid",o),a.getUserData(o),a.state={display:i.a.createElement(F.a,null," Loading data... ")},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"statistics-page--container"},i.a.createElement("div",{className:"statistics-title--holder",onClick:function(){window.location="https://boba.watch/"}},i.a.createElement("div",{className:"statistics-title--logo"}),i.a.createElement(F.a,{variant:"h1"},"boba watch")),this.state.display)}}]),e}(n.Component)),y=(a(250),function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/",component:m}),i.a.createElement(p.a,{path:"/:user",component:g}))}}]),e}(n.Component)),w=a(43),v=a(9),E=Object(v.createMuiTheme)({overrides:{MuiButton:{text:{backgroundColor:"#F68080",borderRadius:3,border:0,color:"white",height:30,padding:"0 30px",margin:"20px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, 0.3)",fontFamily:"Poppins",fontWeight:700,fontSize:14,"&:hover":{backgroundColor:"#FFDCDC"}}},MuiBottomNavigation:{root:{backgroundColor:"#FFAFA4"}},MuiBottomNavigationAction:{root:{color:"#000000"},iconOnly:{color:"#FF0000"},wrapper:{color:"#FFFFFF "}},MuiDialogActions:{action:{color:"#FFFFFF"}}},palette:{primary:{main:"#F68080",light:"#FFDCDC",contrastText:"#FFFFFF"},secondary:{main:"#FFFFFF",contrastText:"#F68080"}},typography:{useNextVariants:!0,h1:{fontFamily:"Poppins",fontWeight:700,color:"#000000",fontSize:44,marginBottom:20},h2:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:48,margin:0},body1:{fontFamily:"Poppins",color:"#FFFFFF",fontSize:18}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.initializeApp({apiKey:"AIzaSyBePNJQYVteyh1Ll9fqnXbXc-S8fmJlbTQ",authDomain:"boba-watch-firebase.firebaseapp.com",databaseURL:"https://boba-watch-firebase.firebaseio.com",projectId:"boba-watch-firebase",storageBucket:"",messagingSenderId:"674375234614",appId:"1:674375234614:web:fdaf98c291204b9c"}),c.a.render(i.a.createElement(v.MuiThemeProvider,{theme:E},i.a.createElement(w.a,{basename:""},i.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[174,1,2]]]);
//# sourceMappingURL=main.24412999.chunk.js.map