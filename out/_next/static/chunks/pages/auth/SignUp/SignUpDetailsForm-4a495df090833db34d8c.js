(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7467],{30168:function(e,r,n){"use strict";var s=n(92809),o=n(85893);function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,s)}return n}function t(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){(0,s.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.Z=function(e){var r=e.placeholder_name,n=e.type_name,s=e.class_name,a=e.readOnly,i=e.input_name,l=e.onChange,c=e.value,u=e.maxLength,d=e.onKeyPress,m=e.disabled,p=e.register;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("input",t({type:n,placeholder:r,onChange:l,value:c,name:i,maxLength:u,autoComplete:"off","aria-describedby":"emailHelp ",className:s||"",onKeyPress:d,disabled:m,readOnly:a},p))})}},27472:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return g}});var s=n(67294),o=n(30266),a=n(92809),t=n(809),i=n.n(t),l=n(26462),c=n.n(l),u=n(11163),d=n(30168),m=n(67555),p=n.n(m),f=(n(68886),n(92253)),_=n(9669),b=n.n(_),h=n(85893);function v(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,s)}return n}function x(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?v(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var j=function(){(0,u.useRouter)();var e=/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i,r=(0,s.useState)([]),n=r[0],t=r[1],l=(0,s.useState)({fullName:"",businessType:"",companyName:"",subscriptionType:"",subscriptionTenure:"",gender:"",email:"",address:""}),m=l[0],_=l[1],v=(0,s.useState)([]),j=v[0],N=v[1],g=(0,s.useState)(),y=g[0],w=g[1],S=(0,s.useState)(""),C=S[0],k=S[1],T=(0,s.useState)({fullName:"",businessType:"",companyName:"",subscriptionType:"",subscriptionTenure:"",mobileNo:"",landlineNo:"",gender:"",email:"",address:""}),B=T[0],O=T[1],P=(0,s.useState)(),D=P[0],G=P[1],L=(0,s.useState)(!1),A=L[0],M=L[1],Z=(0,s.useState)(""),E=Z[0],W=Z[1],I=(0,s.useState)("+91"),H=I[0],z=I[1],F=(0,s.useState)(null),U=F[0],X=F[1],Y=(0,s.useState)("+91"),V=Y[0],K=Y[1],R=function(e){var r=e.target,n=r.name,s=r.value;console.log(s),_(x(x({},m),{},(0,a.Z)({},n,s)))},q=function(e){G(URL.createObjectURL(e.target.files[0])),w(e.target.files[0])};(0,s.useEffect)((function(){$(),J(),ee(),Q()}),[]);var Q=function(){b().get("https://ipapi.co/json/").then((function(e){var r=e.data;console.log(r,"data"),_((function(e){return x(x({},e),{},{countryCode:r.country_code})})),K(r.country_calling_code),z(r.country_calling_code)})).catch((function(e){}))},$=function(){var e=(0,o.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.on)();case 2:200==(r=e.sent).code&&t(r.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,o.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 20,1,e.next=4,(0,f.LJ)(20,1);case 4:200==(r=e.sent).code&&N(r.result);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=(0,o.Z)(i().mark((function e(){var r,n,s,o,a,t,l,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.aO)();case 2:200==(r=e.sent).code&&(_({fullName:null===r||void 0===r||null===(n=r.result)||void 0===n?void 0:n.ownerName,businessType:null===r||void 0===r||null===(s=r.result)||void 0===s?void 0:s.businessType,companyName:null===r||void 0===r||null===(o=r.result)||void 0===o?void 0:o.companyName,subscriptionType:null===r||void 0===r||null===(a=r.result)||void 0===a?void 0:a.subscriptionType,subscriptionTenure:null===r||void 0===r||null===(t=r.result)||void 0===t?void 0:t.subscriptionTenure,gender:null===r||void 0===r||null===(l=r.result)||void 0===l?void 0:l.gender,email:null===r||void 0===r||null===(c=r.result)||void 0===c?void 0:c.email,address:null===r||void 0===r||null===(u=r.result)||void 0===u?void 0:u.address}),G(r.result.image?r.result.image:null),r.result.mobileNumberCountryCode&&W(String(r.result.mobileNumberCountryCode)+String(r.result.mobileNumber)),z(String(r.result.mobileNumberCountryCode)),K(String(r.result.landlineCountryCode)),r.result.landlineNumber&&X(String(r.result.landlineCountryCode)+String(r.result.landlineNumber)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var r=(0,o.Z)(i().mark((function r(n){var s,o,a,t,l,c,u,d;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),a=H.length,t=null===(s=t=E)||void 0===s?void 0:s.substring(a-1),l=V.length,c=null===(o=c=U)||void 0===o?void 0:o.substring(l-1),(u=new FormData).append("image",y),u.append("ownerName",m.fullName),u.append("businessType",m.businessType),u.append("companyName",m.companyName),u.append("address",m.address),u.append("subscriptionType",m.subscriptionType),u.append("subscriptionTenure",m.subscriptionTenure),u.append("mobileNumberCountryCode",H),u.append("mobileNumber",t),u.append("landlineCountryCode",V),u.append("landlineNumber",c),u.append("email",m.email),u.append("gender",m.gender),u.append("phoneCountryCodeName","IN"),m.fullName){r.next=26;break}O(x(x({},B),{},{fullName:"Please enter full name"})),r.next=63;break;case 26:if(m.businessType){r.next=30;break}O(x(x({},B),{},{businessType:"Please select business type"})),r.next=63;break;case 30:if(m.companyName){r.next=34;break}O(x(x({},B),{},{companyName:"Please enter company name "})),r.next=63;break;case 34:if(m.subscriptionType){r.next=38;break}O(x(x({},B),{},{subscriptionType:"Please select subscriptionType "})),r.next=63;break;case 38:if(m.subscriptionTenure){r.next=42;break}O(x(x({},B),{},{subscriptionTenure:"Please select subscriptionTenure"})),r.next=63;break;case 42:if(e.test(m.email)){r.next=46;break}O(x(x({},B),{},{email:"Please enter valid email"})),r.next=63;break;case 46:if(E){r.next=50;break}O(x(x({},B),{},{mobileNo:"Please enter mobile number"})),r.next=63;break;case 50:if(m.gender){r.next=54;break}O(x(x({},B),{},{gender:"Please select gender"})),r.next=63;break;case 54:if(m.address){r.next=58;break}O(x(x({},B),{},{address:"Please enter address"})),r.next=63;break;case 58:return M(!0),r.next=61,(0,f.Fm)(u);case 61:200==(d=r.sent).code?(localStorage.setItem("profileDetails","true"),M(!1),window.location.href="/busines/owner/dashboard"):(M(!1),k(d.message));case 63:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,h.jsx)("div",{className:c().contentWrapper,children:(0,h.jsx)("div",{className:"container-fuild",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("div",{className:"col-md-9 m-auto",children:[(0,h.jsx)("h3",{className:"",children:"Profile "}),C||"",(0,h.jsx)("div",{className:c().formArea,children:(0,h.jsxs)("form",{children:[(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-md-6",children:(0,h.jsx)("div",{className:c().NameDetail,children:(0,h.jsxs)("label",{htmlFor:"photo",children:[(0,h.jsx)("input",{id:"photo",type:"file",onChange:q,style:{display:"none"},accept:".pdf, .jpeg , .jpg ,.png"}),(0,h.jsxs)("div",{className:c().avatarUpload,children:[(0,h.jsx)("h5",{children:" Profile Picture "}),(0,h.jsx)("div",{className:c().avatarPreview,children:(0,h.jsx)("img",{onChange:q,src:D||"/images/camera.svg"})})]})]})})})}),(0,h.jsx)("div",{class:"row",children:(0,h.jsx)("div",{className:"col-md-12",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:["Full Name ",(0,h.jsx)("span",{className:c().required,children:"*"}),(0,h.jsxs)("span",{className:c().errorMsg,children:[" ",m.fullName?"":B.fullName]})]}),(0,h.jsx)(d.Z,{type_name:"text",placeholder_name:"Full Name",inputId:"fullName",value:m.fullName,input_name:"fullName",onChange:function(e){R(e)}})]})})}),(0,h.jsxs)("div",{class:"row",children:[(0,h.jsx)("div",{className:"col-md-6",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:["Businees Type",(0,h.jsxs)("span",{className:c().errorMsg,children:[" ",m.businessType?"":B.businessType]})]}),(0,h.jsxs)("select",{class:"form-control",value:m.businessType,onChange:function(e){R(e)},name:"businessType",size:"0",children:[(0,h.jsx)("option",{value:"",children:"Select"}),null===n||void 0===n?void 0:n.map((function(e,r){return(0,h.jsx)("option",{value:e._id,children:e.title})}))]})]})}),(0,h.jsx)("div",{className:"col-md-6",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:["Company Name",(0,h.jsxs)("span",{className:c().errorMsg,children:[" ",m.companyName?"":B.companyName]})]}),(0,h.jsx)(d.Z,{type_name:"text",name:"companyName",input_name:"companyName",placeholder_name:"Company Name",value:m.companyName,onChange:function(e){R(e)}})]})})]}),(0,h.jsxs)("div",{class:"row",children:[(0,h.jsx)("div",{className:"col-md-6",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:["Subscription Type",(0,h.jsxs)("span",{className:c().errorMsg,children:[" ",m.subscriptionType?"":B.subscriptionType]})]}),(0,h.jsxs)("select",{class:"form-control",name:"subscriptionType",value:m.subscriptionType,onChange:function(e){R(e)},size:"0",children:[(0,h.jsx)("option",{value:"",children:"Select "}),null===j||void 0===j?void 0:j.map((function(e,r){return(0,h.jsx)("option",{value:e._id,children:e.title},r)}))]})]})}),(0,h.jsx)("div",{className:"col-md-6",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:[" ","Subscription Tenure",(0,h.jsxs)("span",{className:c().errorMsg,children:[" ",m.subscriptionTenure?"":B.subscriptionTenure]})]}),(0,h.jsxs)("select",{class:"form-control",value:m.subscriptionTenure,onChange:function(e){R(e)},name:"subscriptionTenure",size:"0",children:[(0,h.jsx)("option",{value:"",children:"Select "}),(0,h.jsx)("option",{value:"Monthly",children:"Monthly"}),(0,h.jsx)("option",{value:"Weekly",children:"Weekly"}),(0,h.jsx)("option",{value:"Yearly",children:" Yearly"})]})]})})]}),console.log(E),(0,h.jsxs)("div",{class:"row",children:[(0,h.jsx)("div",{className:"col-md-6",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup," ").concat(c().fromGroupPhone),children:[(0,h.jsx)("label",{children:"Landline Number"}),(0,h.jsx)(p(),{country:"in",value:U,name:"landlineNo",placeholder:"Enter Landline Number ",onChange:function(e,r,n,s){!function(e,r,n,s,o){var a="+".concat(r.dialCode);r.countryCode,K(a),X(e)}(e,r)},disableCountryCode:!1,copyNumbersOnly:!1,disableCountryGuess:!0,countryCodeEditable:!1})]})}),(0,h.jsx)("div",{className:"col-md-6",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup," ").concat(c().fromGroupPhone),children:[(0,h.jsxs)("label",{children:[" ","Mobile Number",(0,h.jsxs)("span",{className:c().errorMsg,children:[" ",/^[0-9\b]+$/.test(m.mobileNo)?"":B.mobileNo]})]}),(0,h.jsx)(p(),{country:"in",value:E,placeholder:"Enter phone number",name:"phoneNo",onChange:function(e,r,n,s){!function(e,r,n,s,o){var a="+".concat(r.dialCode);r.countryCode,z(a),W(e),O((function(e){return x(x({},e),{},{mobileNo:""})}))}(e,r)},countryCodeEditable:!1})]})})]}),(0,h.jsxs)("div",{class:"row",children:[(0,h.jsx)("div",{className:"col-md-6",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:["Gender",(0,h.jsxs)("span",{className:c().errorMsg,children:[" ",m.gender?"":B.gender]})]}),(0,h.jsxs)("select",{class:"form-control",name:"gender",onChange:function(e){R(e)},value:m.gender,size:"0",children:[(0,h.jsx)("option",{value:"",children:"Select "}),(0,h.jsx)("option",{value:"male",children:"Male"}),(0,h.jsx)("option",{value:"female",children:"Female"})]})]})}),(0,h.jsx)("div",{className:"col-md-6",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:["Email",(0,h.jsx)("span",{className:c().errorMsg,children:e.test(m.email)?"":B.email})]}),(0,h.jsx)(d.Z,{placeholder_name:"Email Address",value:m.email,readonly:!0,disabled:!0})]})})]}),(0,h.jsx)("div",{children:(0,h.jsx)("div",{class:"row"})}),(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-md-12",children:(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:["Address",(0,h.jsxs)("span",{className:c().errorMsg,children:[" ",m.address?"":B.address]})," "]}),(0,h.jsx)(d.Z,{type_name:"text",placeholder_name:"Address",inputId:"address",value:m.address,input_name:"address",name:"address",onChange:function(e){R(e)}})]})})}),(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-md-3"}),(0,h.jsx)("div",{className:"col-md-9 ".concat(c().ButtonGroup),children:(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-md-4 ml-auto",children:A?(0,h.jsx)("button",{disabled:!0,className:c().SandBtn,children:(0,h.jsxs)(h.Fragment,{children:[" ",(0,h.jsx)("i",{class:"fa fa-refresh fa-spin"})," Loading"," "]})}):(0,h.jsxs)("button",{className:c().SandBtn,onClick:re,children:["Save"," "]})})})})]})]})})]})})})})},N=n(54865),g=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(N.Z,{}),(0,h.jsx)(j,{})]})}},25445:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/SignUp/SignUpDetailsForm",function(){return n(27472)}])},26462:function(e){e.exports={DashboardpageWrap:"form_DashboardpageWrap__ip1L-",pageWrap:"form_pageWrap__1Ac_N",contentWrapper:"form_contentWrapper__2pV-3",tableArea:"form_tableArea__1rY_Q",Btn1:"form_Btn1__2DS_f",Btn2:"form_Btn2__1Xo98",Btn3:"form_Btn3__1roCk",Btn4:"form_Btn4__3EvEM",Btn5:"form_Btn5__5AVnt",BtnWithoutImg:"form_BtnWithoutImg___vdZz",Nodata:"form_Nodata__2SzBs",searchSection:"form_searchSection__fb6oa",BtnGroup:"form_BtnGroup__2lsXw",btnBox:"form_btnBox__2klY1",dropDown:"form_dropDown__3TqsF",dropDownBtn:"form_dropDownBtn__3pGNs",Arrow:"form_Arrow__1BIEz",dropDown1:"form_dropDown1__3-bAk",caseDetailStatus:"form_caseDetailStatus__1zi3m",formArea:"form_formArea__3hnl3",staffMemberStatus:"form_staffMemberStatus__W1T3p",progressBar:"form_progressBar__MH2ck",Active:"form_Active__3scZI",titleSec:"form_titleSec__SBjiA",NameSec:"form_NameSec__1PkV1",avatarUpload:"form_avatarUpload__H4Qav",avatarPreview:"form_avatarPreview__3W1wj",NameDetail:"form_NameDetail__255-Q",LinkSec:"form_LinkSec__3UsLU",fromGroup:"form_fromGroup__1GrsY",required:"form_required__2x5_X",errorMsg:"form_errorMsg__1x-RB",list:"form_list__3FLYS",LinkLicence:"form_LinkLicence__3Ea4K",CustomeTimeZone:"form_CustomeTimeZone__H45if",radio:"form_radio__14waa",radioLabel:"form_radioLabel__1bt9T",CheckBox:"form_CheckBox__1OGd6",checkboxLabel:"form_checkboxLabel__3SEcH",fromGroupPhone:"form_fromGroupPhone__1rxMC",ButtonGroup:"form_ButtonGroup__3Q7CO",SaveBtn:"form_SaveBtn__3lf0S",SandBtn:"form_SandBtn__2m9zu",workingHoursSec:"form_workingHoursSec__1aM0N",weekButton:"form_weekButton__1bVLj",active:"form_active__eINoD",reportPage:"form_reportPage__2zDuw",clientDetail:"form_clientDetail__2gnyk",profileDetail:"form_profileDetail__YPV9N",profileImg:"form_profileImg__WkhUh",profileContent:"form_profileContent__34HHp",descriptionSec:"form_descriptionSec__2uhIm",ArrowImg:"form_ArrowImg__39ZVO",profileBtnGroup:"form_profileBtnGroup__2PWAl",NavTabs:"form_NavTabs__RLitn",TabContent:"form_TabContent__1KoH6",submitBtn:"form_submitBtn__2Ts-2",fileNote:"form_fileNote__2dKXu",sliderSec:"form_sliderSec__WM327",sliderBox:"form_sliderBox__nBCCf",templateSec:"form_templateSec__1xi97",searchingList:"form_searchingList__1X1iN",workingHourseSec:"form_workingHourseSec__8kIpw"}}},function(e){e.O(0,[9133,5982,9774,2888,179],(function(){return r=25445,e(e.s=r);var r}));var r=e.O();_N_E=r}]);