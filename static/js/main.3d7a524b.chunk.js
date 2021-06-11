(this["webpackJsonptodo-app-toolkit"]=this["webpackJsonptodo-app-toolkit"]||[]).push([[0],{105:function(t,e,r){},106:function(t,e,r){},132:function(t,e,r){"use strict";r.r(e);var a={};r.r(a),r.d(a,"selectIsLoggedIn",(function(){return xt}));var n=r(0),s=r.n(n),i=r(11),o=r.n(i);r(105),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(106);var c,d,u=r(176),l=r(177),p=r(178),f=r(169),j=r(134),b=r(172),h=r(180),v=r(181),O=r(179),x=r(10),m=r(8),k=r.n(m),g=r(16),y=r(82),C=r.n(y).a.create(Object(x.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"bcdf24e0-2cad-40e4-be67-f9d4eea9b547"}})),w=function(){return C.get("todo-lists")},I=function(t){return C.post("todo-lists",{title:t})},T=function(t){return C.delete("todo-lists/".concat(t))},S=function(t,e){return C.put("todo-lists/".concat(t),{title:e})},E=function(t){return C.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return C.delete("todo-lists/".concat(t,"/tasks/").concat(e))},L=function(t,e){return C.post("todo-lists/".concat(t,"/tasks"),{title:e})},z=function(t,e,r){return C.put("todo-lists/".concat(t,"/tasks/").concat(e),r)},P=function(t){return C.post("auth/login",t)},F=function(){return C.delete("auth/login")},N=function(){return C.get("auth/me")},W=r(15),D={setAppStatus:Object(W.b)("appActions/setAppStatus"),setAppError:Object(W.b)("appActions/setAppError")},M=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r&&e.dispatch(D.setAppError({error:t.messages.length?t.messages[0]:"Some error occurred"})),e.dispatch(D.setAppStatus({status:"failed"})),e.rejectWithValue({errors:t.messages,fieldsErrors:t.fieldsErrors})},R=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r&&e.dispatch(D.setAppError({error:t.message?t.message:"Some error occurred"})),e.dispatch(D.setAppStatus({status:"failed"})),e.rejectWithValue({errors:[t.message],fieldsErrors:void 0})},V=D.setAppStatus,q=Object(W.c)("todolists/fetchTodolists",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(V({status:"loading"})),t.prev=1,t.next=4,w();case 4:return a=t.sent,r.dispatch(V({status:"succeeded"})),t.abrupt("return",{todolists:a.data});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",R(t.t0,r));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,r){return t.apply(this,arguments)}}()),B=Object(W.c)("todolists/removeTodolist",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.dispatch,r.rejectWithValue,a(V({status:"loading"})),a(Y({id:e,status:"loading"})),t.next=5,T(e);case 5:return t.sent,a(V({status:"succeeded"})),t.abrupt("return",{id:e});case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),H=Object(W.c)("todolists/addTodolist",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(V({status:"loading"})),t.prev=1,t.next=4,I(e);case 4:if(0!==(a=t.sent).data.resultCode){t.next=10;break}return r.dispatch(V({status:"succeeded"})),t.abrupt("return",{todolist:a.data.data.item});case 10:return t.abrupt("return",M(a.data,r,!1));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",R(t.t0,r,!1));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,r){return t.apply(this,arguments)}}()),U=Object(W.c)("todolists/changeTodolistTitle",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e.id,e.title);case 3:if(0!==(a=t.sent).data.resultCode){t.next=9;break}return r.dispatch(V({status:"succeeded"})),t.abrupt("return",{id:e.id,title:e.title});case 9:return t.abrupt("return",M(a.data,r));case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",R(t.t0,r,!1));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()),J={fetchTodolistsTC:q,removeTodolistTC:B,addTodolistTC:H,changeTodolistTitleTC:U},K=Object(W.d)({name:"todolists",initialState:[],reducers:{changeTodolistFilter:function(t,e){var r=t.findIndex((function(t){return t.id===e.payload.id}));t[r].filter=e.payload.filter},changeTodolistEntityStatus:function(t,e){var r=t.findIndex((function(t){return t.id===e.payload.id}));t[r].entityStatus=e.payload.status}},extraReducers:function(t){t.addCase(q.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(x.a)(Object(x.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(B.fulfilled,(function(t,e){var r=t.findIndex((function(t){return t.id===e.payload.id}));r>-1&&t.splice(r,1)})).addCase(H.fulfilled,(function(t,e){t.unshift(Object(x.a)(Object(x.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(U.fulfilled,(function(t,e){var r=t.findIndex((function(t){return t.id===e.payload.id}));t[r].title=e.payload.title}))}}),X=K.actions,Y=(X.changeTodolistFilter,X.changeTodolistEntityStatus),$=Object(W.c)("tasks/fetchTasks",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(D.setAppStatus({status:"loading"})),t.prev=1,t.next=4,E(e);case 4:return a=t.sent,n=a.data.items,r.dispatch(D.setAppStatus({status:"succeeded"})),t.abrupt("return",{tasks:n,todolistId:e});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",R(t.t0,r));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,r){return t.apply(this,arguments)}}()),_=Object(W.c)("tasks/removeTask",function(){var t=Object(g.a)(k.a.mark((function t(e,r){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e.todolistId,e.taskId);case 2:return t.sent,t.abrupt("return",{taskId:e.taskId,todolistId:e.todolistId});case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),G=Object(W.c)("tasks/addTask",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(D.setAppStatus({status:"loading"})),t.prev=1,t.next=4,L(e.todolistId,e.title);case 4:if(0!==(a=t.sent).data.resultCode){t.next=10;break}return r.dispatch(D.setAppStatus({status:"succeeded"})),t.abrupt("return",a.data.data.item);case 10:return M(a.data,r,!1),t.abrupt("return",r.rejectWithValue({errors:a.data.messages,fieldsErrors:a.data.fieldsErrors}));case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",R(t.t0,r,!1));case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,r){return t.apply(this,arguments)}}()),Q=Object(W.c)("tasks/updateTask",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a,n,s,i;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r.getState(),n=a.tasks[e.todolistId].find((function(t){return t.id===e.taskId}))){t.next=4;break}return t.abrupt("return",r.rejectWithValue("task not found in the state"));case 4:return s=Object(x.a)({deadline:n.deadline,description:n.description,priority:n.priority,startDate:n.startDate,title:n.title,status:n.status},e.model),t.next=7,z(e.todolistId,e.taskId,s);case 7:if(i=t.sent,t.prev=8,0!==i.data.resultCode){t.next=13;break}return t.abrupt("return",e);case 13:return t.abrupt("return",M(i.data,r));case 14:t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(8),t.abrupt("return",R(t.t0,r));case 19:case"end":return t.stop()}}),t,null,[[8,16]])})));return function(e,r){return t.apply(this,arguments)}}()),Z={fetchTasks:$,removeTask:_,addTask:G,updateTask:Q},tt=Object(W.d)({name:"tasks",initialState:{},reducers:{},extraReducers:function(t){t.addCase(J.addTodolistTC.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(J.removeTodolistTC.fulfilled,(function(t,e){delete t[e.payload.id]})).addCase(J.fetchTodolistsTC.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase($.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(_.fulfilled,(function(t,e){var r=t[e.payload.todolistId],a=r.findIndex((function(t){return t.id===e.payload.taskId}));a>-1&&r.splice(a,1)})).addCase(G.fulfilled,(function(t,e){t[e.payload.todoListId].unshift(e.payload)})).addCase(Q.fulfilled,(function(t,e){var r=t[e.payload.todolistId],a=r.findIndex((function(t){return t.id===e.payload.taskId}));a>-1&&(r[a]=Object(x.a)(Object(x.a)({},r[a]),e.payload.model))}))}}),et=r(22),rt=r(173),at=r(46),nt=r(182),st=r(170),it=r(4),ot=s.a.memo((function(t){var e=t.addItem,r=t.disabled,a=void 0!==r&&r,s=Object(n.useState)(""),i=Object(at.a)(s,2),o=i[0],c=i[1],d=Object(n.useState)(null),u=Object(at.a)(d,2),l=u[0],p=u[1],j=function(){var t=Object(g.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""!==o.trim()?e(o,{setError:p,setTitle:c}):p("Title is required");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(it.jsxs)("div",{children:[Object(it.jsx)(nt.a,{variant:"outlined",disabled:a,error:!!l,value:o,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){null!==l&&p(null),13===t.charCode&&j()},label:"Title",helperText:l}),Object(it.jsx)(f.a,{color:"primary",onClick:j,disabled:a,style:{marginLeft:"5px"},children:Object(it.jsx)(st.a,{})})]})})),ct=r(90),dt=s.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),r=Object(at.a)(e,2),a=r[0],s=r[1],i=Object(n.useState)(t.value),o=Object(at.a)(i,2),c=o[0],d=o[1];return a?Object(it.jsx)(nt.a,{value:c,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.onChange(c)}}):Object(it.jsx)("span",{onDoubleClick:function(){s(!0),d(t.value)},children:t.value})})),ut=r(133),lt=r(171),pt=r(184);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(c||(c={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(d||(d={}));var ft=r(25),jt=function(){return Object(et.b)()};function bt(t){var e=jt();return Object(n.useMemo)((function(){return Object(ft.b)(t,e)}),[])}var ht=s.a.memo((function(t){var e=bt(gt),r=e.updateTask,a=e.removeTask,s=Object(n.useCallback)((function(){return a({taskId:t.task.id,todolistId:t.todolistId})}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){r({taskId:t.task.id,model:{status:e.currentTarget.checked?c.Completed:c.New},todolistId:t.todolistId})}),[t.task.id,t.todolistId]),o=Object(n.useCallback)((function(e){r({taskId:t.task.id,model:{title:e},todolistId:t.todolistId})}),[t.task.id,t.todolistId]);return Object(it.jsxs)("div",{className:t.task.status===c.Completed?"is-done":"",style:{position:"relative"},children:[Object(it.jsx)(pt.a,{checked:t.task.status===c.Completed,color:"primary",onChange:i}),Object(it.jsx)(dt,{value:t.task.title,onChange:o}),Object(it.jsx)(f.a,{size:"small",onClick:s,style:{position:"absolute",top:"2px",right:"2px"},children:Object(it.jsx)(lt.a,{fontSize:"small"})})]},t.task.id)})),vt=s.a.memo((function(t){var e=t.demo,r=void 0!==e&&e,a=Object(ct.a)(t,["demo"]),s=bt(gt).fetchTasks,i=bt(kt),o=i.changeTodolistFilter,d=i.removeTodolistTC,u=i.changeTodolistTitleTC,l=jt();Object(n.useEffect)((function(){r||s(a.todolist.id)}),[]);var p=Object(n.useCallback)(function(){var t=Object(g.a)(k.a.mark((function t(e,r){var n,s,i,o,c,d;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=gt.addTask({title:e,todolistId:a.todolist.id}),t.next=3,l(n);case 3:s=t.sent,gt.addTask.rejected.match(s)?(null===(i=s.payload)||void 0===i||null===(o=i.errors)||void 0===o?void 0:o.length)?(d=null===(c=s.payload)||void 0===c?void 0:c.errors[0],r.setError(d)):r.setError("Some error occured"):r.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),[a.todolist.id]),j=Object(n.useCallback)((function(t){u({id:a.todolist.id,title:t})}),[a.todolist.id]),h=Object(n.useCallback)((function(t){return o({filter:t,id:a.todolist.id})}),[a.todolist.id]),v=a.tasks;"active"===a.todolist.filter&&(v=a.tasks.filter((function(t){return t.status===c.New}))),"completed"===a.todolist.filter&&(v=a.tasks.filter((function(t){return t.status===c.Completed})));var O=function(t,e,r){return Object(it.jsx)(b.a,{variant:a.todolist.filter===t?"outlined":"text",onClick:function(){return h(t)},color:e,children:r})};return Object(it.jsxs)(ut.a,{style:{padding:"10px",position:"relative"},children:[Object(it.jsx)(f.a,{size:"small",onClick:function(){d(a.todolist.id)},disabled:"loading"===a.todolist.entityStatus,style:{position:"absolute",right:"5px",top:"5px"},children:Object(it.jsx)(lt.a,{fontSize:"small"})}),Object(it.jsx)("h3",{children:Object(it.jsx)(dt,{value:a.todolist.title,onChange:j})}),Object(it.jsx)(ot,{addItem:p,disabled:"loading"===a.todolist.entityStatus}),Object(it.jsxs)("div",{children:[v.map((function(t){return Object(it.jsx)(ht,{task:t,todolistId:a.todolist.id},t.id)})),!v.length&&Object(it.jsx)("div",{style:{padding:"10px",color:"grey"},children:"No task"})]}),Object(it.jsxs)("div",{style:{paddingTop:"10px"},children:[O("all","default","All"),O("active","primary","Active"),O("completed","secondary","Completed")]})]})})),Ot=r(17),xt=function(t){return t.auth.isLoggedIn},mt=function(t){var e=t.demo,r=void 0!==e&&e,a=Object(et.c)((function(t){return t.todolists})),s=Object(et.c)((function(t){return t.tasks})),i=Object(et.c)(xt),o=jt(),c=bt(kt),d=c.fetchTodolistsTC,u=(c.addTodolistTC,Object(n.useCallback)(function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a,n,s,i,c,d;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=kt.addTodolistTC(e),t.next=3,o(a);case 3:n=t.sent,kt.addTodolistTC.rejected.match(n)?(null===(s=n.payload)||void 0===s||null===(i=s.errors)||void 0===i?void 0:i.length)?(d=null===(c=n.payload)||void 0===c?void 0:c.errors[0],r.setError(d)):r.setError("Some error occured"):r.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),[]));return Object(n.useEffect)((function(){!r&&i&&d()}),[]),i?Object(it.jsxs)(it.Fragment,{children:[Object(it.jsx)(rt.a,{container:!0,style:{padding:"20px"},children:Object(it.jsx)(ot,{addItem:u})}),Object(it.jsx)(rt.a,{container:!0,spacing:3,style:{flexWrap:"nowrap",overflowX:"scroll"},children:a.map((function(t){var e=s[t.id];return Object(it.jsx)(rt.a,{item:!0,children:Object(it.jsx)("div",{style:{width:"300px"},children:Object(it.jsx)(vt,{todolist:t,tasks:e,demo:r})})},t.id)}))})]}):Object(it.jsx)(Ot.a,{to:"/login"})},kt=Object(x.a)(Object(x.a)({},J),K.actions),gt=Object(x.a)(Object(x.a)({},Z),tt.actions),yt=K.reducer,Ct=tt.reducer,wt=r(186),It=r(183);function Tt(t){return Object(it.jsx)(It.a,Object(x.a)({elevation:6,variant:"filled"},t))}function St(){var t=Object(et.c)((function(t){return t.app.error})),e=bt(D).setAppError,r=function(t,r){"clickaway"!==r&&e({error:null})},a=null!==t;return Object(it.jsx)(wt.a,{open:a,autoHideDuration:6e3,onClose:r,children:Object(it.jsx)(Tt,{onClose:r,severity:"error",children:t})})}var Et=function(t){return t.app.status},At=function(t){return t.app.isInitialized},Lt=r(187),zt=r(168),Pt=r(174),Ft=r(175),Nt=r(89),Wt=D.setAppStatus,Dt=Object(W.c)("auth/login",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(Wt({status:"loading"})),t.prev=1,t.next=4,P(e);case 4:if(0!==(a=t.sent).data.resultCode){t.next=10;break}return r.dispatch(Wt({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",M(a.data,r));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",R(t.t0,r));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,r){return t.apply(this,arguments)}}()),Mt=Object(W.c)("auth/logout",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(Wt({status:"loading"})),t.prev=1,t.next=4,F();case 4:if(0!==(a=t.sent).data.resultCode){t.next=10;break}return r.dispatch(Wt({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",M(a.data,r));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",R(t.t0,r));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,r){return t.apply(this,arguments)}}()),Rt={login:Dt,logout:Mt},Vt=Object(W.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedIn:function(t,e){t.isLoggedIn=e.payload.value}},extraReducers:function(t){t.addCase(Dt.fulfilled,(function(t){t.isLoggedIn=!0})).addCase(Mt.fulfilled,(function(t){t.isLoggedIn=!1}))}}),qt=(Vt.reducer,Vt.actions.setIsLoggedIn,function(){var t=jt(),e=Object(et.c)(xt),r=Object(Nt.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(){var e=Object(g.a)(k.a.mark((function e(r,a){var n,s,i,o,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Bt.login(r));case 2:n=e.sent,Dt.rejected.match(n)&&(null===(s=n.payload)||void 0===s||null===(i=s.fieldsErrors)||void 0===i?void 0:i.length)&&(c=null===(o=n.payload)||void 0===o?void 0:o.fieldsErrors[0],a.setFieldError(c.field,c.error));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()});return e?Object(it.jsx)(Ot.a,{to:"/"}):Object(it.jsx)(rt.a,{container:!0,justify:"center",children:Object(it.jsx)(rt.a,{item:!0,xs:4,children:Object(it.jsx)("form",{onSubmit:r.handleSubmit,children:Object(it.jsxs)(Lt.a,{children:[Object(it.jsxs)(zt.a,{children:[Object(it.jsxs)("p",{children:["To log in get registered ",Object(it.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(it.jsx)("p",{children:"or use common test account credentials:"}),Object(it.jsx)("p",{children:" Email: free@samuraijs.com"}),Object(it.jsx)("p",{children:"Password: free"})]}),Object(it.jsxs)(Pt.a,{children:[Object(it.jsx)(nt.a,Object(x.a)({label:"Email",margin:"normal"},r.getFieldProps("email"))),r.errors.email?Object(it.jsx)("div",{children:r.errors.email}):null,Object(it.jsx)(nt.a,Object(x.a)({type:"password",label:"Password",margin:"normal"},r.getFieldProps("password"))),r.errors.password?Object(it.jsx)("div",{children:r.errors.password}):null,Object(it.jsx)(Ft.a,{label:"Remember me",control:Object(it.jsx)(pt.a,Object(x.a)(Object(x.a)({},r.getFieldProps("rememberMe")),{},{checked:r.values.rememberMe}))}),Object(it.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})}),Bt=Object(x.a)(Object(x.a)({},Rt),Vt.actions),Ht=Vt.reducer,Ut=Object(W.c)("application/initializeApp",function(){var t=Object(g.a)(k.a.mark((function t(e,r){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.dispatch,t.next=3,N();case 3:0===t.sent.data.resultCode&&a(Bt.setIsLoggedIn({value:!0}));case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),Jt={initializeApp:Ut},Kt=Object(W.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{},extraReducers:function(t){t.addCase(Ut.fulfilled,(function(t,e){t.isInitialized=!0})).addCase(D.setAppStatus,(function(t,e){t.status=e.payload.status})).addCase(D.setAppError,(function(t,e){t.error=e.payload.error}))}}),Xt=Kt.reducer,Yt=Kt.actions,$t=Object(x.a)(Object(x.a)({},Yt),Jt);var _t=function(t){var e=t.demo,r=void 0!==e&&e,s=Object(et.c)(Et),i=Object(et.c)(At),o=Object(et.c)(a.selectIsLoggedIn),c=bt(Bt).logout,d=bt($t).initializeApp;Object(n.useEffect)((function(){r||d()}),[]);var x=Object(n.useCallback)((function(){c()}),[]);return i?Object(it.jsxs)("div",{className:"App",children:[Object(it.jsx)(St,{}),Object(it.jsxs)(l.a,{position:"static",children:[Object(it.jsxs)(p.a,{children:[Object(it.jsx)(f.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(it.jsx)(O.a,{})}),Object(it.jsx)(j.a,{variant:"h6",children:"News"}),o&&Object(it.jsx)(b.a,{color:"inherit",onClick:x,children:"Log out"})]}),"loading"===s&&Object(it.jsx)(h.a,{})]}),Object(it.jsxs)(v.a,{fixed:!0,children:[Object(it.jsx)(Ot.b,{exact:!0,path:"/",render:function(){return Object(it.jsx)(mt,{demo:r})}}),Object(it.jsx)(Ot.b,{path:"/login",render:function(){return Object(it.jsx)(qt,{})}})]})]}):Object(it.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(it.jsx)(u.a,{})})},Gt=r(49),Qt=Object(ft.c)({app:Xt,auth:Ht,todolists:yt,tasks:Ct}),Zt=Object(W.a)({reducer:Qt,middleware:function(t){return t().prepend(Gt.a)}});window.store=Zt;var te=r(48);o.a.render(Object(it.jsx)(et.a,{store:Zt,children:Object(it.jsx)(te.a,{basename:"/todo-app-toolkit",children:Object(it.jsx)(_t,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[132,1,2]]]);
//# sourceMappingURL=main.3d7a524b.chunk.js.map