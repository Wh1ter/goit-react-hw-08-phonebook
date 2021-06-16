(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{106:function(t,e,r){"use strict";r.r(e);var c,n,a,o,s,u,i=r(0),l=r.n(i),b=r(24),j=r.n(b),d=r(12),O=r(20),h=r(66),f=r(34),g=r(4),p=r(67),x=r.n(p),v=r(68),m=r.n(v),C=r(23),y=r(3),k=r(10),S=r(13),E=Object(g.c)([],(c={},Object(y.a)(c,S.a.fetchContactSuccess,(function(t,e){return e.payload})),Object(y.a)(c,S.a.addContactSuccess,(function(t,e){var r=e.payload;return t.find((function(t){return t.name===r.name}))?(alert("".concat(r.name," - \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 :)")),t):[r].concat(Object(f.a)(t))})),Object(y.a)(c,S.a.deleteContactSuccess,(function(t,e){e.types;var r=e.payload,c=t.filter((function(t){return t.id!==r}));return Object(f.a)(c)})),c)),R=Object(g.c)(!1,(n={},Object(y.a)(n,S.a.addContactRequest,(function(){return!0})),Object(y.a)(n,S.a.addContactSuccess,(function(){return!1})),Object(y.a)(n,S.a.addContactError,(function(){return!1})),Object(y.a)(n,S.a.deleteContactRequest,(function(){return!0})),Object(y.a)(n,S.a.deleteContactSuccess,(function(){return!1})),Object(y.a)(n,S.a.deleteContactError,(function(){return!1})),Object(y.a)(n,S.a.fetchContactRequest,(function(){return!0})),Object(y.a)(n,S.a.fetchContactSuccess,(function(){return!1})),Object(y.a)(n,S.a.fetchContactError,(function(){return!1})),n)),q=Object(g.c)("",Object(y.a)({},S.a.filterSet,(function(t,e){return e.payload}))),U=Object(k.b)({contacts:E,filters:q,loading:R}),w=r(5),A={name:null,email:null},L=Object(g.c)(A,(a={},Object(y.a)(a,w.a.registerSuccess,(function(t,e){return e.payload.user})),Object(y.a)(a,w.a.loginSuccess,(function(t,e){return e.payload.user})),Object(y.a)(a,w.a.logoutSuccess,(function(){return A})),Object(y.a)(a,w.a.getCurrentUserSuccess,(function(t,e){return e.payload})),a)),T=Object(g.c)(null,(o={},Object(y.a)(o,w.a.registerSuccess,(function(t,e){return e.payload.token})),Object(y.a)(o,w.a.loginSuccess,(function(t,e){return e.payload.token})),Object(y.a)(o,w.a.logoutSuccess,(function(){return null})),o)),z=function(t,e){return e.payload},B=Object(g.c)(null,(s={},Object(y.a)(s,w.a.registerError,z),Object(y.a)(s,w.a.loginError,z),Object(y.a)(s,w.a.logoutError,z),Object(y.a)(s,w.a.getCurrentUserError,z),s)),I=Object(g.c)(!1,(u={},Object(y.a)(u,w.a.registerSuccess,(function(){return!0})),Object(y.a)(u,w.a.loginSuccess,(function(){return!0})),Object(y.a)(u,w.a.getCurrentUserSuccess,(function(){return!0})),Object(y.a)(u,w.a.registerError,(function(){return!1})),Object(y.a)(u,w.a.loginError,(function(){return!1})),Object(y.a)(u,w.a.logoutError,(function(){return!1})),Object(y.a)(u,w.a.getCurrentUserError,(function(){return!1})),Object(y.a)(u,w.a.logoutSuccess,(function(){return!1})),u)),P=Object(k.b)({user:L,token:T,isAuthenticated:I,error:B}),D=[].concat(Object(f.a)(Object(g.d)({serializableCheck:{ignoredActions:[C.a,C.f,C.b,C.c,C.d,C.e]}})),[x.a]),F={key:"auth",storage:m.a,whitelist:["token"]},G=Object(g.a)({reducer:{app:U,auth:Object(C.g)(F,P)},middleware:D,devTools:!1}),J={store:G,persistor:Object(C.h)(G)},M=r(49),W=r(50),H=r(52),N=r(51),K=r(7),Q=r(122),V=r(2),X={link:{margin:5,display:"block",color:"white"},activeLink:{margin:5,display:"block",color:"red"}},Y=function(){return Object(V.jsxs)("div",{children:[Object(V.jsx)(Q.a,{type:"click",variant:"contained",color:"primary",style:{height:30},children:Object(V.jsx)(O.b,{to:"/register",exact:!0,style:X.link,activeStyle:X.activeLink,children:"Registration"})}),Object(V.jsx)(Q.a,{style:{marginLeft:15,height:30},type:"click",variant:"contained",color:"primary",children:Object(V.jsx)(O.b,{to:"/login",exact:!0,style:X.link,activeStyle:X.activeLink,children:"Login"})})]})},Z=function(t){return t.auth.isAuthenticated},$=function(t){return t.auth.user.name},_=function(t){return t.auth.user.email},tt=r(39),et={container:{display:"flex",alignItems:"center"},mail:{marginRight:10},name:{fontWeight:700,marginRight:20}},rt={onLogout:tt.a.logOut},ct=Object(d.b)((function(t){return{name:$(t),mail:_(t)}}),rt)((function(t){var e=t.mail,r=t.name,c=t.onLogout;return Object(V.jsxs)("div",{style:et.container,children:[Object(V.jsxs)("span",{style:et.mail,children:["User e-mail: ",e]}),Object(V.jsxs)("span",{style:et.name,children:["User name: ",r]}),Object(V.jsx)(Q.a,{type:"button",onClick:c,variant:"contained",color:"primary",children:"Logout \ud83d\udfe5"})]})})),nt={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},at=Object(d.b)((function(t){return{isAuthenticated:Z(t)}}))((function(t){var e=t.isAuthenticated;return Object(V.jsxs)("nav",{children:[Object(V.jsx)(O.b,{to:"/",exact:!0,style:nt.link,activeStyle:nt.activeLink,children:"Home"}),e&&Object(V.jsx)(O.b,{to:"/contacts",exact:!0,style:nt.link,activeStyle:nt.activeLink,children:"Contacts"})]})})),ot={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}},st=Object(d.b)((function(t){return{isAuthenticated:Z(t)}}))((function(t){var e=t.isAuthenticated;return Object(V.jsxs)("header",{style:ot.header,children:[Object(V.jsx)(at,{}),e?Object(V.jsx)(ct,{}):Object(V.jsx)(Y,{})]})})),ut=r(32),it=r(43);function lt(t){var e=t.children,r=t.redirectTo,c=void 0===r?"/":r,n=Object(it.a)(t,["children","redirectTo"]),a=Object(d.c)(Z);return Object(V.jsx)(K.b,Object(ut.a)(Object(ut.a)({},n),{},{children:a?e:Object(V.jsx)(K.a,{to:c})}))}function bt(t){var e=t.children,r=t.restricted,c=void 0!==r&&r,n=t.redirectTo,a=void 0===n?"/":n,o=Object(it.a)(t,["children","restricted","redirectTo"]),s=Object(d.c)(Z)&&c;return Object(V.jsx)(K.b,Object(ut.a)(Object(ut.a)({},o),{},{children:s?Object(V.jsx)(K.a,{to:a}):e}))}var jt=Object(i.lazy)((function(){return r.e(5).then(r.bind(null,146))})),dt=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,147))})),Ot=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,148))})),ht=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,150))})),ft=function(t){Object(H.a)(r,t);var e=Object(N.a)(r);function r(){return Object(M.a)(this,r),e.apply(this,arguments)}return Object(W.a)(r,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)(st,{}),Object(V.jsx)(i.Suspense,{fallback:Object(V.jsx)("p",{children:"Loading..."}),children:Object(V.jsxs)(K.d,{children:[Object(V.jsx)(K.b,{exact:!0,path:"/",component:jt}),Object(V.jsx)(bt,{path:"/register",redirectTo:"/contacts",restricted:!0,children:Object(V.jsx)(K.b,{path:"/register",component:Ot})}),Object(V.jsx)(bt,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(V.jsx)(K.b,{path:"/login",component:dt})}),Object(V.jsx)(lt,{path:"/contacts",redirectTo:"/login",children:Object(V.jsx)(K.b,{path:"/contacts",component:ht})})]})})]})}}]),r}(i.Component),gt={onGetCurrentUser:tt.a.getCurrentUser},pt=Object(d.b)(null,gt)(ft);j.a.render(Object(V.jsx)(l.a.StrictMode,{children:Object(V.jsx)(d.a,{store:J.store,children:Object(V.jsx)(h.a,{loading:null,persistor:J.persistor,children:Object(V.jsx)(O.a,{children:Object(V.jsx)(pt,{})})})})}),document.getElementById("root"))},13:function(t,e,r){"use strict";var c=r(4),n=Object(c.b)("contacts/addContactRequest"),a=Object(c.b)("contacts/addContactSuccess"),o=Object(c.b)("contacts/addContactError"),s=Object(c.b)("contacts/deleteContactRequest"),u=Object(c.b)("contacts/deleteContactSuccess"),i=Object(c.b)("contacts/deleteContactError"),l=Object(c.b)("contacts/fetchContactRequest"),b=Object(c.b)("contacts/fetchContactSuccess"),j=Object(c.b)("contacts/fetchContactError"),d=Object(c.b)("app/setFilterArr");e.a={filterSet:d,addContactRequest:n,addContactSuccess:a,addContactError:o,deleteContactRequest:s,deleteContactSuccess:u,deleteContactError:i,fetchContactRequest:l,fetchContactSuccess:b,fetchContactError:j}},39:function(t,e,r){"use strict";var c=r(22),n=r.n(c),a=r(37),o=r(25),s=r.n(o),u=r(5);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var i=function(t){s.a.defaults.headers.common.Authorization="Bearer ".concat(t)},l=function(){s.a.defaults.headers.common.Authorization=""};e.a={register:function(t){return function(){var e=Object(a.a)(n.a.mark((function e(r){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(u.a.registerRequest()),e.prev=1,e.next=4,s.a.post("/users/signup",t);case 4:c=e.sent,r(u.a.registerSuccess(c.data)),i(c.data.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(u.a.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.a.logoutRequest()),t.prev=1,t.next=4,s.a.post("/users/logout");case 4:e(u.a.logoutSuccess()),l(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.a.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(n.a.mark((function e(r){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(u.a.loginRequest()),e.prev=1,e.next=4,s.a.post("/users/login",t);case 4:c=e.sent,r(u.a.loginSuccess(c.data)),i(c.data.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(u.a.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(n.a.mark((function t(e,r){var c,a,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=r(),a=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return i(a),e(u.a.getCurrentUserRequest()),t.prev=5,t.next=8,s.a.get("/users/current");case 8:o=t.sent,e(u.a.getCurrentUserSuccess(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(u.a.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,r){return t.apply(this,arguments)}}()}}},5:function(t,e,r){"use strict";var c=r(4),n=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),o=Object(c.b)("auth/registerError"),s=Object(c.b)("auth/loginRequest"),u=Object(c.b)("auth/loginSuccess"),i=Object(c.b)("auth/loginError"),l=Object(c.b)("auth/logoutRequest"),b=Object(c.b)("auth/logoutSuccess"),j=Object(c.b)("auth/logoutError"),d=Object(c.b)("auth/getCurrentUserRequest"),O=Object(c.b)("auth/getCurrentUserSuccess"),h=Object(c.b)("auth/getCurrentUserError");e.a={registerRequest:n,registerSuccess:a,registerError:o,logoutRequest:l,logoutSuccess:b,logoutError:j,loginRequest:s,loginSuccess:u,loginError:i,getCurrentUserRequest:d,getCurrentUserSuccess:O,getCurrentUserError:h}}},[[106,2,3]]]);
//# sourceMappingURL=main.cc0a3752.chunk.js.map