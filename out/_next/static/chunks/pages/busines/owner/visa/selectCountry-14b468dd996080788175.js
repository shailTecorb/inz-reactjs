(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1383],{30168:function(e,t,n){"use strict";var r=n(92809),o=n(85893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.placeholder_name,n=e.type_name,r=e.class_name,a=e.readOnly,s=e.input_name,i=e.onChange,l=e.value,u=e.maxLength,d=e.onKeyPress,_=e.disabled,h=e.register;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("input",c({type:n,placeholder:t,onChange:i,value:l,name:s,maxLength:u,autoComplete:"off","aria-describedby":"emailHelp ",className:r||"",onKeyPress:d,disabled:_,readOnly:a},h))})}},50266:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});n(53431),n(54865);var r=n(67294),o=n(83789),a=n(92809),c=n(30266),s=n(809),i=n.n(s),l=n(30168),u=n(89665),d=n.n(u),_=n(11163),h=n(92253),p=n(67018),f=n(89700),v=n(37041),m=n(85893);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(){var e=(0,_.useRouter)(),t=(0,r.useState)(!1),n=(t[0],t[1]),a=(0,r.useState)(!1),s=a[0],u=a[1],y=(0,r.useState)(""),g=y[0],x=y[1],j=(0,r.useState)([]),S=j[0],w=j[1],k=(0,r.useState)(0),O=k[0],N=k[1],C=(0,r.useState)(0),q=C[0],B=C[1],P=(0,r.useState)(!1),D=(P[0],P[1]),I=(0,r.useState)(""),G=I[0],E=I[1],L=(0,r.useState)(!1),A=L[0],W=L[1],Z=(0,r.useState)(!1),T=Z[0],X=Z[1];(0,r.useEffect)((function(){z(),"liaAgent"==localStorage.role?D(!0):"businessOwner"==localStorage.role?D(!1):localStorage.token||(window.location.href="/")}),[]);var V,z=function(){U()},U=function(){var e=(0,c.Z)(i().mark((function e(){var t,n,r,o,a,c,s,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W(!0),t=localStorage.countryId?localStorage.countryId:[],"businessOwner"!=localStorage.role){e.next=9;break}return e.next=5,(0,h.eN)(g);case 5:200==(n=e.sent).code&&(W(!1),a=null===n||void 0===n||null===(r=n.result)||void 0===r||null===(o=r.countries)||void 0===o?void 0:o.map((function(e,t){return b(b({},e),{},{isChecked:e.select})})),w(a),a.filter((function(e){return e.select})).length==a.length&&u(!0),B(a.filter((function(e){return e.select})).length),N(a.length-a.filter((function(e){return e.select})).length)),e.next=16;break;case 9:if("liaAgent"!=localStorage.role){e.next=16;break}return e.next=12,(0,p.Bb)(g);case 12:200==(c=e.sent).code?(B(c.totalCountry),W(!1),l=null===c||void 0===c||null===(s=c.result)||void 0===s?void 0:s.countryId.map((function(e,n){return b(b({},e),{},{isChecked:!(null===t||void 0===t||!t.includes(e._id))})})),w(l)):W(!1),e.next=16;break;case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var t=(0,c.Z)(i().mark((function t(n){var r,o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=(r=S.map((function(e){var t;return{countryId:null===(t=e.countryId)||void 0===t?void 0:t._id,select:e.isChecked}}))).length){t.next=6;break}n.preventDefault(),E("Please Select Country"),t.next=19;break;case 6:if(X(!0),"businessOwner"!=localStorage.role||0===r.length){t.next=14;break}return t.next=10,(0,h.hj)(r);case 10:200==(o=t.sent).code?(X(!1),e.push("/busines/owner/dashboard")):400==o.code?(E(o.message),X(!1)):E("Please Select Country"),t.next=19;break;case 14:if("liaAgent"!=localStorage.role||""!=!r){t.next=19;break}return t.next=17,(0,p.GU)(r);case 17:200==(a=t.sent).code?(X(!1),localStorage.setItem("countryId",JSON.stringify(r)),e.push("/LIA/Selectvisa")):400==a.code?(E(a.message),X(!1)):E("Please Select Country");case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(e){e?(N(O-1),B(q+1)):(N(O+1),B(q-1))},F=null===S||void 0===S?void 0:S.filter((function(e){var t,n;return""==g||null!==(t=e.countryId)&&void 0!==t&&null!==(n=t.countryName)&&void 0!==n&&n.toLowerCase().includes(g.toLowerCase())?e:void 0}));return V=F.length>0?null===F||void 0===F?void 0:F.map((function(e,t){var r,a,c,s;return(0,m.jsx)("div",{className:"form-group ".concat(d().fromGroup),children:(0,m.jsxs)("div",{className:d().selectinputBox,children:[(0,m.jsx)("input",{id:null===(r=e.countryId)||void 0===r?void 0:r._id,name:"checkbox",type:"checkbox",checked:!0===e.isChecked?null===(a=e.countryId)||void 0===a?void 0:a._id:"",onChange:function(t){!function(e,t){for(var r=S,a=0;a<S.length;a++)r[a]._id===e?r[a].isChecked=!r[a].isChecked:r[a].isChecked=r[a].isChecked;r.map((function(t){return b(b({},t),{},{isChecked:t._id==e?!t.isChecked:t.isChecked})})).filter((function(e){return e.isChecked}));var c=r.reduce((function(e,t){return t.isChecked&&e.push(t._id),e}),[]);w((0,o.Z)(r)),n(!1),E(""),c.length==r.length?u(!0):u(!1)}(e._id,e.isChecked),e.isChecked?R(!0):R(!1)}}),(0,m.jsx)("label",{for:null===(c=e.countryId)||void 0===c?void 0:c._id,className:d().checkboxLabel,children:null===(s=e.countryId)||void 0===s?void 0:s.countryName})]})})})):[],(0,m.jsx)(r.Fragment,{children:(0,m.jsx)("div",{className:d().contentWrapper,children:(0,m.jsx)("div",{className:"container-fuild",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col-md-9 m-auto",children:[(0,m.jsx)("h3",{className:"",children:" Countries I'm workiing for "}),(0,m.jsxs)("div",{className:d().visaStatus,children:[V.length>0?(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-8 m-auto  ".concat(d().clientStatus),children:(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:["Total Selected Countries ",(0,m.jsx)("span",{children:q})]}),(0,m.jsxs)("li",{children:["Not Selected Countries ",(0,m.jsxs)("span",{children:[O," "]})]})]})})}):"",(0,m.jsxs)("span",{style:{color:"red",marginLeft:"178px"},children:[" ",G]}),(0,m.jsx)("div",{className:"row mt-3",children:(0,m.jsx)("div",{className:"col-md-8 m-auto",children:(0,m.jsx)("div",{className:d().searchSection,children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsx)(l.Z,{type_name:"",placeholder_name:"Search by name, id, or internal",inputId:"",input_name:"",class_name:"form-control",value:g,onChange:function(e){x(e.target.value)}})})})})}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-8 m-auto",children:(0,m.jsxs)("div",{className:d().visaStatusDiv,children:[(0,m.jsx)("div",{className:"form-group ".concat(d().fromGroup),children:V.length>0&&0==g.length?(0,m.jsxs)("div",{className:d().selectinputBox,children:[(0,m.jsx)("input",{id:"allselect",name:"allselect",type:"checkbox",checked:s,onChange:function(e){!function(e,t){u(!s);var r=e.target,o=r.name;if(r.checked,"allselect"==o){var a=null===S||void 0===S?void 0:S.map((function(e){return b(b({},e),{},{isChecked:!s})}));w(a),n(s),s?(N(S.length),B(0),E("")):s||(B(S.length),N(0))}}(e)}}),(0,m.jsx)("label",{for:"allselect",className:d().checkboxLabel,children:"Select all countries"})]}):""}),A?(0,m.jsx)(f.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:open,children:(0,m.jsx)(v.Z,{color:"inherit"})}):V.length>0?V:(0,m.jsx)("p",{style:{color:"red"},children:" No data found"})]})}),V.length>0?(0,m.jsx)("div",{className:"col-md-7 text-right  m-auto ".concat(d().buttonGroup),children:T?(0,m.jsx)("button",{disabled:!0,className:"mt-5",children:" Loading... "}):(0,m.jsx)("button",{onClick:M,className:"mt-5",children:"Update "})}):""]})]})]})})})})})},x=function(){var e=(0,r.useState)(!1),t=(e[0],e[1]),n=(0,r.useState)(!1),o=(n[0],n[1]);return(0,r.useEffect)((function(){"businessOwner"==localStorage.role?t(!0):"liaAgent"==localStorage.role&&"true"==localStorage.approved&&o(!0)})),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(g,{})})}},46806:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/busines/owner/visa/selectCountry",function(){return n(50266)}])},89665:function(e){e.exports={DashboardpageWrap:"query_DashboardpageWrap__OOAVE",pageWrap:"query_pageWrap__26-zG",contentWrapper:"query_contentWrapper__3_zIA",tableArea:"query_tableArea__33VWn",Btn1:"query_Btn1__3QUMI",Btn2:"query_Btn2__3UBgh",Btn3:"query_Btn3__1Gx_t",Btn4:"query_Btn4__LfX1e",Btn5:"query_Btn5__31xXH",BtnWithoutImg:"query_BtnWithoutImg__3VpwM",Nodata:"query_Nodata__28Uxq",searchSection:"query_searchSection__1VC3M",BtnGroup:"query_BtnGroup__2maZ5",btnBox:"query_btnBox__PE6HP",dropDown:"query_dropDown__2x5N6",dropDownBtn:"query_dropDownBtn__1YcwJ",Arrow:"query_Arrow__B77Qw",dropDown1:"query_dropDown1__3oVq_",clientStatus:"query_clientStatus__3Ylo0",NavTabs:"query_NavTabs__1cCPe",active:"query_active__3v4-C",TabContent:"query_TabContent__nWqsm",buttonGroup:"query_buttonGroup__1cRR_",downloadBtn:"query_downloadBtn__q4G8a",noDataSection:"query_noDataSection__169rq",staffImage:"query_staffImage__i8tfD",visaStatus:"query_visaStatus__4Yyz1",visaStatusDiv:"query_visaStatusDiv__1X1fX",fromGroup:"query_fromGroup__3cXT7",selectinputBox:"query_selectinputBox__3-l50",checkboxLabel:"query_checkboxLabel__yMdVn",submitBtn:"query_submitBtn__1R00a",templateBtnGroup:"query_templateBtnGroup__1gfcf"}}},function(e){e.O(0,[9163,5568,9774,2888,179],(function(){return t=46806,e(e.s=t);var t}));var t=e.O();_N_E=t}]);