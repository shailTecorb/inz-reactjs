(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4695],{30168:function(e,t,n){"use strict";var r=n(92809),a=n(85893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.placeholder_name,n=e.type_name,r=e.class_name,s=e.readOnly,o=e.input_name,i=e.onChange,l=e.value,u=e.maxLength,d=e.onKeyPress,p=e.disabled,_=e.register;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("input",c({type:n,placeholder:t,onChange:i,value:l,name:o,maxLength:u,autoComplete:"off","aria-describedby":"emailHelp ",className:r||"",onKeyPress:d,disabled:p,readOnly:s},_))})}},47846:function(e,t,n){"use strict";var r=n(92809),a=n(83789),s=n(30266),c=n(809),o=n.n(c),i=n(67294),l=n(89665),u=n.n(l),d=n(11163),p=n(30168),_=n(92253),h=n(4878),f=n(30381),j=n.n(f),x=n(58533),m=n(85893);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.type,n=(0,i.useState)([]),r=n[0],c=n[1],l=(0,i.useContext)(h.B),f=l.setEmail,v=l.setStaffId,b=l.setTpe,g=(0,i.useState)(0),w=g[0],O=g[1],q=(0,i.useState)(0),N=q[0],S=q[1],B=(0,d.useRouter)(),D=(0,i.useState)(""),C=D[0],P=D[1],I=(0,i.useState)(!1),k=(I[0],I[1]);(0,i.useEffect)((function(){Z()}),[]);var A=(0,i.useState)({page:1,per_page:10,hashMore:!0}),L=A[0],E=A[1],Z=function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,(0,_.Qf)(L.page,L.per_page,localStorage.role,C);case 3:200==(t=e.sent).code?(c(t.result),O(t.result1.allLia),S(t.result1.otherStaff),k(!1)):t.code;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,s.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.Qf)(L.page+1,L.per_page);case 2:200===(t=e.sent).code&&(n=t.result,c((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(n))})),0==t.result.length?E((function(e){return y(y({},e),{},{hashMore:!1})})):setTimeout((function(){c((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(n))}))}),1500));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(n),b(t),n&&B.push("/busines/owner/editLia");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=null===r||void 0===r?void 0:r.filter((function(e){var t,n;return""==C||null!==e&&void 0!==e&&null!==(t=e.fullName)&&void 0!==t&&t.toLowerCase().includes(null===C||void 0===C?void 0:C.toLowerCase())||null!==e&&void 0!==e&&null!==(n=e.internalId)&&void 0!==n&&n.toLowerCase().includes(null===C||void 0===C?void 0:C.toLowerCase())?e:void 0})).map((function(e,t){var n,r;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{scope:"row",children:e.internalId}),(0,m.jsx)("td",{children:"liaAgent"==(null===(n=e.roleId)||void 0===n?void 0:n.role)?"LIA Agent":null===(r=e.roleId)||void 0===r?void 0:r.role}),(0,m.jsx)("td",{children:(0,m.jsxs)("a",{onClick:function(){f(e._id)},children:[e.fullName," "]})}),(0,m.jsxs)("td",{children:[" ",e.phoneNumberCountryCode," ",e.phoneNumber," ",(0,m.jsx)("br",{}),(0,m.jsx)("a",{onClick:function(){f(e._id)},children:e.email})]}),(0,m.jsx)("td",{children:j()(e.dob).format("Do MMM YYYY")}),(0,m.jsx)("td",{children:e.isActive?(0,m.jsx)("span",{style:{color:"#05CE84"},children:"Active "}):(0,m.jsxs)("span",{style:{color:"red"},children:[e.liveStatus," "]})}),(0,m.jsx)("td",{children:(0,m.jsx)("button",{className:"".concat(u().Btn1," ").concat(u().BtnWithoutImg),onClick:function(){G(e._id)},children:"View"})})]})}));return(0,m.jsx)(i.Fragment,{children:(0,m.jsx)("div",{className:u().contentWrapper,children:(0,m.jsx)("div",{className:"container-fuild",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)("h3",{children:"All Staffs"})}),(0,m.jsx)("div",{className:"col-12 ".concat(u().clientStatus),children:(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:["LIA Staffs ",(0,m.jsx)("span",{children:w})]}),(0,m.jsxs)("li",{children:["Other Staffs ",(0,m.jsx)("span",{children:N})]})]})}),(0,m.jsx)("div",{className:"col-12",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-7",children:(0,m.jsx)("div",{className:u().searchSection,children:(0,m.jsx)("form",{children:(0,m.jsx)("div",{className:"col-md-7 pl-0",children:(0,m.jsx)("div",{className:u().searchSection,children:(0,m.jsx)("form",{children:(0,m.jsxs)("div",{className:"input-group",children:[(0,m.jsx)(p.Z,{type_name:"text",placeholder_name:"Search by name, id",inputId:"",input_name:"",class_name:"form-control",value:C,onChange:function(e){e.preventDefault(),P(e.target.value)}}),(0,m.jsx)("div",{className:"input-group-append",children:(0,m.jsx)("a",{className:"btn btn-secondary",children:(0,m.jsx)("button",{onClick:function(e){e.preventDefault()},children:(0,m.jsx)("i",{className:"fa fa-search"})})})})]})})})})})})}),(0,m.jsxs)("div",{className:"col-sm-5 ".concat(u().buttonGroup),children:[(0,m.jsx)("button",{children:"Print"}),(0,m.jsx)("button",{onClick:function(){B.push("/busines/owner/addLia")},children:"+ Add Staff"})]}),0==r.length?(0,m.jsx)("div",{className:u().noDataSection,children:(0,m.jsx)("div",{className:u().staffImage,children:(0,m.jsx)("img",{src:"/images/nostaff.svg"})})}):(0,m.jsx)("div",{className:"col-12 ".concat(u().tableArea),children:(0,m.jsx)("div",{className:"table-responsive ",children:(0,m.jsx)(x.Z,{dataLength:r.length,next:function(){M(),E((function(e){return y(y({},e),{},{page:L.page+1})}))},hasMore:L.hashMore,endMessage:0==L.hashMore?(0,m.jsx)("h3",{}):"",children:(0,m.jsxs)("table",{class:"table table-striped",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"#ID"}),(0,m.jsx)("th",{children:"Role"}),(0,m.jsx)("th",{children:"Full Name"}),(0,m.jsxs)("th",{children:["Mobile",(0,m.jsx)("br",{}),"Email"]}),(0,m.jsx)("th",{children:"DOB"}),(0,m.jsx)("th",{children:"Status"}),(0,m.jsx)("th",{children:"Action"})]})}),(0,m.jsx)("tbody",{children:W})]})})})})]})})]})})})})}},51350:function(e,t,n){"use strict";n.r(t);var r=n(47846),a=(n(54865),n(85893));t.default=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{type:"staff"})})}},30911:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/busines/owner/allStaffList",function(){return n(51350)}])},89665:function(e){e.exports={DashboardpageWrap:"query_DashboardpageWrap__OOAVE",pageWrap:"query_pageWrap__26-zG",contentWrapper:"query_contentWrapper__3_zIA",tableArea:"query_tableArea__33VWn",Btn1:"query_Btn1__3QUMI",Btn2:"query_Btn2__3UBgh",Btn3:"query_Btn3__1Gx_t",Btn4:"query_Btn4__LfX1e",Btn5:"query_Btn5__31xXH",BtnWithoutImg:"query_BtnWithoutImg__3VpwM",Nodata:"query_Nodata__28Uxq",searchSection:"query_searchSection__1VC3M",BtnGroup:"query_BtnGroup__2maZ5",btnBox:"query_btnBox__PE6HP",dropDown:"query_dropDown__2x5N6",dropDownBtn:"query_dropDownBtn__1YcwJ",Arrow:"query_Arrow__B77Qw",dropDown1:"query_dropDown1__3oVq_",clientStatus:"query_clientStatus__3Ylo0",NavTabs:"query_NavTabs__1cCPe",active:"query_active__3v4-C",TabContent:"query_TabContent__nWqsm",buttonGroup:"query_buttonGroup__1cRR_",downloadBtn:"query_downloadBtn__q4G8a",noDataSection:"query_noDataSection__169rq",staffImage:"query_staffImage__i8tfD",visaStatus:"query_visaStatus__4Yyz1",visaStatusDiv:"query_visaStatusDiv__1X1fX",fromGroup:"query_fromGroup__3cXT7",selectinputBox:"query_selectinputBox__3-l50",checkboxLabel:"query_checkboxLabel__yMdVn",submitBtn:"query_submitBtn__1R00a",templateBtnGroup:"query_templateBtnGroup__1gfcf"}}},function(e){e.O(0,[4885,7e3,9774,2888,179],(function(){return t=30911,e(e.s=t);var t}));var t=e.O();_N_E=t}]);