(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2198],{30168:function(e,r,n){"use strict";var a=n(92809),s=n(85893);function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.Z=function(e){var r=e.placeholder_name,n=e.type_name,a=e.class_name,t=e.readOnly,i=e.input_name,l=e.onChange,c=e.value,d=e.maxLength,m=e.onKeyPress,u=e.disabled,p=e.register;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("input",o({type:n,placeholder:r,onChange:l,value:c,name:i,maxLength:d,autoComplete:"off","aria-describedby":"emailHelp ",className:a||"",onKeyPress:m,disabled:u,readOnly:t},p))})}},52198:function(e,r,n){"use strict";n.r(r);var a=n(83789),s=n(92809),t=n(30266),o=n(809),i=n.n(o),l=n(67294),c=n(30168),d=n(26462),m=n.n(d),u=n(87536),p=n(35027),h=n(56908),f=n(92253),x=n(9198),v=n.n(x),j=(n(7276),n(67555)),g=n.n(j),_=(n(68886),n(31123)),N=n(30381),y=n.n(N),b=n(11163),w=n(88266),k=n(67869),M=n(604),C=n(85893);function E(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?E(Object(n),!0).forEach((function(r){(0,s.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.default=function(){var e,r,n,o,d=(0,l.useState)(),x=d[0],j=d[1],N=(0,l.useState)(!1),E=N[0],D=N[1],S=(0,l.useState)(),T=S[0],B=S[1],A=(0,l.useState)(),Z=A[0],L=A[1],O=(0,l.useState)(!1),z=O[0],G=O[1],I=(0,l.useState)(!1),Y=I[0],W=I[1],q=(0,l.useState)([]),F=q[0],U=q[1],H=(0,l.useState)([]),V=H[0],$=H[1],R=(0,l.useState)(!1),K=R[0],X=R[1],Q=(0,l.useState)([]),J=Q[0],ee=Q[1],re=(0,l.useState)([]),ne=re[0],ae=re[1],se=(0,l.useState)({fullName:"",demoImg:"",addBy:"",role:"",licenseNo:"",expiryDate:"",joiningDate:"",landlineNumber:"",landline_country_Code:"",phoneNumber:"",country_Code:"",email:"",country:"",city:"",address:"",lat:"",long:"",startTime:"",startTimeMdn:"",endTime:"",endTimeMdn:"",timeZone:"",image:""}),te=se[0],oe=se[1],ie=(0,l.useState)({expiryDate:"",joiningDate:"",addBy:"",startTime:"",endTime:"",startTimeMdn:"",endTimeMdn:"",responseMsg:"",phoneNo:"",country:"",city:"",allAccess:"",activeDays:"",timezone:""}),le=ie[0],ce=ie[1],de=(0,u.cI)(),me=de.register,ue=de.handleSubmit,pe=de.formState.errors,he=(de.setError,de.setValue,function(){var e=(0,t.Z)(i().mark((function e(r){var n,a,t,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persist(),oe((function(e){return P(P({},e),{},(0,s.Z)({},r.target.name,r.target.value))})),ce(P(P({},le),{},(n={},(0,s.Z)(n,r.target.name,""),(0,s.Z)(n,"responseMsg",""),n))),a=r.target.value,"address"!=r.target.name){e.next=16;break}if(t={input:a,location:{lat:"28.6508353",lng:"77.267595"},key:k.UE,radius:"100"},!(a.length>=3)){e.next=13;break}return e.next=9,(0,M.B9)(t);case 9:o=e.sent,ee(o),e.next=14;break;case 13:ee([]);case 14:e.next=21;break;case 16:if("country"!=r.target.name){e.next=21;break}return e.next=19,(0,f.TL)(a);case 19:200==(l=e.sent).code&&ae(l.result);case 21:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),fe=function(){var e=(0,t.Z)(i().mark((function e(r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee([]),oe((function(e){return P(P({},e),{},{address:r.description})})),n={key:k.UE,place_id:r.place_id},e.next=5,(0,M.FG)(n);case 5:a=e.sent,oe((function(e){return P(P({},e),{},{lat:a.geometry.location.lat,long:a.geometry.location.lng})}));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),xe=J.map((function(e,r){return(0,C.jsx)("ul",{className:m().searchingList,children:(0,C.jsx)("li",{style:{cursor:"pointer"},onClick:function(){fe(e)},children:(0,C.jsx)("span",{children:null===e||void 0===e?void 0:e.description})})})})),ve=function(e){oe(P(P({},te),{},{demoImg:URL.createObjectURL(e.target.files[0]),image:e.target.files[0]}))};(0,l.useEffect)((function(){je(),ge()}),[]);var je=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 10,1,e.next=4,(0,f.Sn)(10,1);case 4:200==(r=e.sent).code&&j(r.result);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.zI)();case 2:r=e.sent,L(r.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=(0,l.useState)([{name:"Dashboard",id:11,status:!1},{name:"View Clients",id:12,status:!1},{name:"Reports",id:13,status:!1},{name:"CreateStaff",id:14,status:!1},{name:"Accounts",id:15,status:!1},{name:"Settings",id:16,status:!1},{name:"Client",id:17,status:!1}]),Ne=_e[0],ye=_e[1],be=(0,l.useState)([{name:"Monday",id:1,status:!1},{name:"Tuesday",id:2,status:!1},{name:"Wednesday",id:3,status:!1},{name:"Thursday",id:4,status:!1},{name:"Friday",id:5,status:!1},{name:"Saturday",id:6,status:!1},{name:"Sunday",id:7,status:!1}]),we=be[0],ke=be[1],Me=function(){var e=(0,t.Z)(i().mark((function e(r){var n,a,s,t,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y()(te.licenseExpiry).format("YYYY/MM/DD"),y()(te.dob).format("YYYY/MM/DD"),s=null===(n=te.phoneNumber)||void 0===n?void 0:n.substring(te.country_Code.length-1),t=null===(a=te.landlineNumber)||void 0===a?void 0:a.substring(te.landline_country_Code.length-1),(o=new FormData).append("image",te.image),o.append("fullName",te.fullName),o.append("addBy","businessOwner"),o.append("role",te.role),o.append("roleId",te.addBy),o.append("expiryDate",te.expiryDate),o.append("licenseNo",te.licenseNo),o.append("phoneNumberCountryCode",te.country_Code),o.append("phoneNumber",s),o.append("lineNumberCountryCode",te.landline_country_Code),o.append("landlineNumber",t),o.append("email",te.email),te.country&&o.append("country",te.country),te.country&&o.append("address",te.address),o.append("activeDays",V),o.append("startTime",te.startTime+" "+te.startTimeMdn),o.append("endTime",te.endTime+" "+te.endTimeMdn),o.append("timeZone",te.timeZone.value?te.timeZone.value:te.timeZone),o.append("lat",te.lat),0!=F.length&&o.append("acessRight",F),T&&o.append("link",T),o.append("joiningDate",te.joiningDate),o.append("long",te.long),o.append("city",te.city),te.addBy){e.next=33;break}ce(P(P({},le),{},{addBy:"Please select role"})),e.next=87;break;case 33:if(te.expiryDate){e.next=37;break}ce(P(P({},le),{},{expiryDate:"Please select license expiry date"})),e.next=87;break;case 37:if(te.joiningDate){e.next=41;break}ce(P(P({},le),{},{joiningDate:"Please select joining date"})),e.next=87;break;case 41:if(te.phoneNumber&&!(te.phoneNumber.length<10)){e.next=45;break}ce(P(P({},le),{},{phoneNo:"Please enter valid phone number"})),e.next=87;break;case 45:if("Select Country"!=te.country&&""!=te.country){e.next=49;break}ce(P(P({},le),{},{country:"Please select country"})),e.next=87;break;case 49:if("Select Country"!=te.city&&""!=te.city){e.next=53;break}ce(P(P({},le),{},{city:"Please select city"})),e.next=87;break;case 53:if(0!=F.length){e.next=57;break}ce(P(P({},le),{},{allAccess:"Please select access rights "})),e.next=87;break;case 57:if(0!=V.length){e.next=61;break}ce(P(P({},le),{},{activeDays:"Please select active days"})),e.next=87;break;case 61:if(te.timeZone){e.next=65;break}ce(P(P({},le),{},{timezone:"Please select timezone"})),e.next=87;break;case 65:if(te.startTime){e.next=69;break}ce(P(P({},le),{},{startTime:"Please select start time"})),e.next=87;break;case 69:if(te.startTimeMdn){e.next=73;break}ce(P(P({},le),{},{startTimeMdn:"Please select meridiem"})),e.next=87;break;case 73:if(te.endTime){e.next=77;break}ce(P(P({},le),{},{endTime:"Please select end time"})),e.next=87;break;case 77:if(te.endTimeMdn){e.next=81;break}ce(P(P({},le),{},{endTimeMdn:"Please select end meridiem"})),e.next=87;break;case 81:if(!te.endTime){e.next=87;break}return X(!0),e.next=85,(0,f.qS)(o);case 85:200==(l=e.sent).code?(X(!1),G(!0),W("Staff Created Successfully")):(X(!1),ce(P(P({},le),{},{responseMsg:l.message})),window.scrollTo(0,0));case 87:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),Ce=null===x||void 0===x?void 0:x.map((function(e,r){return(0,C.jsx)("option",{id:e.role,value:e._id,children:"liaAgent"===e.role?"LIA Agent":"manager"==e.role?"Manager":"worker"==e.role?"Worker":e.role},r)}));return(0,C.jsxs)(l.Fragment,{children:[(0,C.jsx)("div",{className:m().contentWrapper,children:(0,C.jsx)("div",{className:"container-fuild",children:(0,C.jsx)("div",{className:"row",children:(0,C.jsxs)("div",{className:"col-md-9 m-auto",children:[(0,C.jsx)("h3",{className:"",children:"Add New Staff"}),(0,C.jsx)("div",{className:m().formArea,children:(0,C.jsxs)("form",{children:[(0,C.jsxs)("div",{className:"row",children:[(0,C.jsxs)("div",{className:"col-md-6 px-0",children:[(0,C.jsx)("h4",{children:(0,C.jsx)("b",{children:"Basic Details"})}),(0,C.jsxs)("h4",{className:"text-center",style:{color:"red"},children:[" ",""]}),(0,C.jsx)("div",{className:m().NameDetail,children:(0,C.jsxs)("label",{htmlFor:"photo",children:[(0,C.jsx)("input",{id:"photo",type:"file",onChange:ve,style:{display:"none"},accept:".pdf, .jpeg , .jpg ,.png"}),(0,C.jsxs)("div",{className:m().avatarUpload,children:[(0,C.jsx)("h5",{children:"  Profile Picture "}),(0,C.jsx)("div",{className:m().avatarPreview,children:(0,C.jsx)("img",{onChange:ve,src:te.demoImg?te.demoImg:"/images/camera.svg"})})]})]})})]}),(0,C.jsx)("div",{className:"col-md-6 ".concat(m().staffMemberStatus),children:(0,C.jsx)("h2",{style:{fontSize:"1.5rem",color:"red"},children:le.responseMsg})})]}),(0,C.jsx)("div",{class:"row",children:(0,C.jsx)("div",{className:"col-md-12 px-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("label",{children:["Full Name ",(0,C.jsx)("span",{className:m().required,children:"*"}),(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",null===(e=pe.fullName)||void 0===e?void 0:e.message]})]}),(0,C.jsx)(c.Z,{type_name:"fullName",placeholder_name:"Your Name",inputId:"fullName",input_name:"fullName",value:te.fullName.trim(),register:me("fullName",P(P({},p.a.Name),{},{onChange:function(e){return he(e)}}))})]})})}),(0,C.jsxs)("div",{class:"row",children:[(0,C.jsx)("div",{className:"col-md-6 pl-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("label",{children:["Role",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",le.addBy]})]}),(0,C.jsxs)("select",{class:"form-control",onChange:function(e){!function(e){var r=e.target.selectedIndex,n=e.target.childNodes[r].getAttribute("id");oe(P(P({},te),{},{role:n,addBy:e.target.value})),ce(P(P({},le),{},{addBy:""}))}(e)},value:te.addBy,name:"addBy",size:"0",children:[(0,C.jsx)("option",{value:"",children:"Select "}),Ce]})]})}),(0,C.jsx)("div",{className:"col-6 pr-0",children:(0,C.jsx)("div",{className:"form-group ".concat(m().fromGroup),children:(0,C.jsx)(h.Z,{open:E,OpenModal:function(e){e.preventDefault(),D(!0)},closeModal:function(e){b.default.push("/busines/owner/lia's"),D(!1)},link:T,setLink:B,style:m()})})})]}),(0,C.jsxs)("div",{class:"row",children:[(0,C.jsx)("div",{className:"col-md-6 pl-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("label",{children:[" Licence/Membership Number",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",null===(r=pe.licenseNo)||void 0===r?void 0:r.message]})]}),(0,C.jsx)(c.Z,{type_name:"text",name:"licenseNo",input_name:"licenseNo",placeholder_name:" Enter Licence/Membership Number",value:te.licenseNo,register:me("licenseNo",P(P({},p.a.licenseNo),{},{onChange:function(e){return he(e)}})),maxLength:9})]})}),(0,C.jsx)("div",{className:"col-md-6 pr-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("label",{children:["Licence Expiry Date",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",le.expiryDate]})]}),(0,C.jsx)(v(),{className:"form-control",name:"expiryDate",selected:te.expiryDate?new Date(te.expiryDate):null,dateFormat:"MM/dd/yyyy",dropdownMode:"scroll",minDate:new Date,dateFormatCalendar:"MMMM",yearDropdownItemNumber:15,scrollableYearDropdown:!0,onChange:function(e){return r=e,oe(P(P({},te),{},(0,s.Z)({},"expiryDate",r))),void ce(P(P({},le),{},{expiryDate:""}));var r},onChangeRaw:function(e){e.preventDefault()},autoComplete:"off",value:te.expiryDate,showYearDropdown:!0}),(0,C.jsx)("img",{src:"/images/calendar.svg",alt:"email"})]})})]}),(0,C.jsxs)("div",{class:"row",children:[(0,C.jsx)("div",{className:"col-md-6 pl-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup," ").concat(m().fromGroupPhone),children:[(0,C.jsx)("label",{children:"Landline Number"}),(0,C.jsx)(g(),{country:"in",value:te.landlineNumber,name:"landlineNo",placeholder:"Enter Landline Number ",onChange:function(e,r,n,a){!function(e,r,n,a,s){var t="+".concat(r.dialCode);oe(P(P({},te),{},{landlineNumber:e,landline_country_Code:t}))}(e,r)},disableCountryCode:!1,copyNumbersOnly:!1,disableCountryGuess:!0,countryCodeEditable:!1})]})}),(0,C.jsx)("div",{className:"col-md-6 pr-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup," ").concat(m().fromGroupPhone),children:[(0,C.jsxs)("label",{children:["Phone Number",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",le.phoneNo]})]}),(0,C.jsx)(g(),{country:"in",value:te.phoneNumber,placeholder:"Enter phone number",name:"phoneNo",onChange:function(e,r,n,a){!function(e,r){var n="+".concat(r.dialCode);oe(P(P({},te),{},{phoneNumber:e,country_Code:n})),ce(P(P({},le),{},{phoneNo:""}))}(e,r)},disableCountryCode:!1,copyNumbersOnly:!1,disableCountryGuess:!0,countryCodeEditable:!1})]})})]}),(0,C.jsxs)("div",{class:"row",children:[(0,C.jsx)("div",{className:"col-md-6 pl-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("label",{children:["Date of Joining",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",le.joiningDate]})]}),(0,C.jsx)(v(),{className:"form-control",name:"joiningDate",selected:te.joiningDate?new Date(te.joiningDate):null,dateFormat:"MM/dd/yyyy",dropdownMode:"scroll",minDate:new Date,dateFormatCalendar:"MMMM",yearDropdownItemNumber:15,scrollableYearDropdown:!0,onChange:function(e){oe((function(r){return P(P({},r),{},{joiningDate:e})})),ce((function(e){return P(P({},e),{},{joiningDate:""})}))},onChangeRaw:function(e){e.preventDefault()},autoComplete:"off",value:te.joiningDate,showYearDropdown:!0})]})}),(0,C.jsx)("div",{className:"col-md-6 pr-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("label",{children:["Email",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",null===(n=pe.email)||void 0===n?void 0:n.message]})]}),(0,C.jsx)(c.Z,{type_name:"text",name:"email",input_name:"email",placeholder_name:"Email Address",value:te.email,register:me("email",P(P({},p.a.Email),{},{onChange:function(e){return he(e)}}))})]})})]}),(0,C.jsxs)("div",{class:"row",children:[(0,C.jsxs)("h4",{className:"col-md-12 pl-0",children:[(0,C.jsx)("b",{children:" Office Address "})," "]}),(0,C.jsx)("div",{className:"col-md-6 pl-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("label",{children:["Country",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",le.country]})]}),(0,C.jsxs)("select",{class:"form-control",onChange:function(e){he(e)},value:te.country,name:"country",size:"0",children:[(0,C.jsx)("option",{value:null,children:" Select Country "}),null===Z||void 0===Z?void 0:Z.map((function(e,r){return(0,C.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.countryName},r)}))]})]})}),(0,C.jsx)("div",{className:"col-md-6 pr-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("label",{children:["City",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",le.city]})]}),(0,C.jsxs)("select",{class:"form-control",onChange:function(e){he(e)},value:te.city,name:"city",size:"0",children:[(0,C.jsx)("option",{children:" Select City"}),null===ne||void 0===ne?void 0:ne.map((function(e){return null===e||void 0===e?void 0:e.map((function(e,r){return(0,C.jsx)("option",{value:e._id,children:e.cityName},r)}))}))]})]})})]}),(0,C.jsx)("div",{className:"row",children:(0,C.jsx)("div",{className:"col-md-12 pr-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("label",{children:["Address",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",null===(o=pe.address)||void 0===o?void 0:o.message]})," "]}),(0,C.jsx)(c.Z,{type_name:"text",name:"address",input_name:"address",placeholder_name:"Enter Address",value:te.address.trim(),register:me("address",P(P({},p.a.Address),{},{onChange:function(e){return he(e)}}))}),xe]})})}),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{class:"row",children:(0,C.jsx)("div",{className:"col-md-12 px-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("h6",{children:[" ",(0,C.jsx)("b",{children:" Access Rights"})]})," ",(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",0==F.length?le.allAccess:""]})]})})}),(0,C.jsx)("div",{class:"row",children:null===Ne||void 0===Ne?void 0:Ne.map((function(e,r){return(0,C.jsx)("div",{className:"col-md-3 px-1",children:(0,C.jsx)("div",{className:"form-group ".concat(m().fromGroup),children:(0,C.jsxs)("div",{className:m().CheckBox,children:[(0,C.jsx)("input",{id:e.id,checked:e.status?e.name:"",onChange:function(){!function(e){var r=Ne;r.map((function(r,n){r.id==e.id&&(r.status=!r.status)})),ye((0,a.Z)(r));var n=null===Ne||void 0===Ne?void 0:Ne.reduce((function(e,r){return r.status&&e.push(r.name),e}),[]);U(n)}(e)},name:e.name,type:"checkbox"},r),(0,C.jsxs)("label",{for:e.id,className:m().checkboxLabel,style:{color:"#0c101a"},children:[e.name," "]})]})})})}))})]}),(0,C.jsx)("div",{class:"row",children:(0,C.jsx)("div",{className:"col-md-12 px-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsxs)("h6",{children:[(0,C.jsx)("b",{children:" Active Days "})," "]}),(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",0==V.length?le.activeDays:""]})]})})}),(0,C.jsx)("div",{class:"row",children:null===we||void 0===we?void 0:we.map((function(e,r){return(0,C.jsx)("div",{className:"col-md-3 px-1",children:(0,C.jsx)("div",{className:"form-group ".concat(m().fromGroup),children:(0,C.jsxs)("div",{className:m().CheckBox,children:[(0,C.jsx)("input",{id:e.id,checked:e.status?e.name:"",onChange:function(){!function(e){var r=we;r.map((function(r,n){r.id==e.id&&(r.status=!r.status)})),ke((0,a.Z)(r));var n=null===we||void 0===we?void 0:we.reduce((function(e,r){return r.status&&e.push(r.name),e}),[]);$(n)}(e)},name:e.name,type:"checkbox"},r),(0,C.jsx)("label",{for:e.id,className:m().checkboxLabel,style:{color:"#0c101a"},children:e.name})]})})})}))}),(0,C.jsxs)("div",{class:"row mt-2",children:[(0,C.jsx)("div",{className:"col-md-2 pl-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsx)("label",{children:"Starting From"}),(0,C.jsxs)("select",{class:"form-control",onChange:function(e){he(e),ce((function(e){return P(P({},e),{},{endTime:"",startTime:"",startTimeMdn:"",endTimeMdn:""})}))},name:"startTime",value:te.startTime,size:"0",children:[(0,C.jsx)("option",{value:"",children:"Start Time"}),(0,C.jsx)("option",{value:"01:00",children:"01:00"}),(0,C.jsx)("option",{value:"02:00",children:"02:00"}),(0,C.jsx)("option",{value:"03:00",children:"03:00"}),(0,C.jsx)("option",{value:"04:00",children:"04:00"}),(0,C.jsx)("option",{value:"05:00",children:"05:00"}),(0,C.jsx)("option",{value:"06:00",children:"06:00"}),(0,C.jsx)("option",{value:"07:00",children:"07:00"}),(0,C.jsx)("option",{value:"08:00",children:"08:00"}),(0,C.jsx)("option",{value:"09:00",children:"09:00"}),(0,C.jsx)("option",{value:"10:00",children:"10:00"}),(0,C.jsx)("option",{value:"11:00",children:"11:00"}),(0,C.jsx)("option",{value:"11:59",children:"12:00"})]}),(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",le.startTime]})]})}),(0,C.jsx)("div",{className:"col-md-2 pl-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsx)("label",{style:{height:"16px"},children:" "}),(0,C.jsxs)("select",{class:"form-control",onChange:function(e){he(e),ce((function(e){return P(P({},e),{},{endTime:"",startTime:"",startTimeMdn:"",endTimeMdn:""})}))},name:"startTimeMdn",value:te.startTimeMdn,size:"0",children:[(0,C.jsx)("option",{value:"",children:"Select"}),(0,C.jsx)("option",{value:"AM",children:"AM"}),(0,C.jsx)("option",{value:"PM",children:"PM"})]}),(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",le.startTimeMdn]})]})}),(0,C.jsx)("div",{className:"col-md-2",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsx)("label",{children:"Till"}),(0,C.jsxs)("select",{class:"form-control",onChange:function(e){he(e),ce((function(e){return P(P({},e),{},{endTime:"",startTime:"",startTimeMdn:"",endTimeMdn:""})}))},name:"endTime",value:te.endTime,size:"0",children:[(0,C.jsx)("option",{value:"",children:"End Time"}),(0,C.jsx)("option",{value:"01:00",children:"01:00"}),(0,C.jsx)("option",{value:"02:00",children:"02:00"}),(0,C.jsx)("option",{value:"03:00",children:"03:00"}),(0,C.jsx)("option",{value:"04:00",children:"04:00"}),(0,C.jsx)("option",{value:"05:00",children:"05:00"}),(0,C.jsx)("option",{value:"06:00",children:"06:00"}),(0,C.jsx)("option",{value:"07:00",children:"07:00"}),(0,C.jsx)("option",{value:"08:00",children:"08:00"}),(0,C.jsx)("option",{value:"09:00",children:"09:00"}),(0,C.jsx)("option",{value:"10:00",children:"10:00"}),(0,C.jsx)("option",{value:"11:00",children:"11:00"}),(0,C.jsx)("option",{value:"11:59",children:"11:59"})]}),(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",le.endTime]})]})}),(0,C.jsx)("div",{className:"col-md-2 pl-0",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsx)("label",{style:{height:"16px"}}),(0,C.jsxs)("select",{class:"form-control",onChange:function(e){he(e),ce((function(e){return P(P({},e),{},{endTime:"",startTime:"",startTimeMdn:"",endTimeMdn:""})}))},name:"endTimeMdn",value:te.endTimeMdn,size:"0",children:[(0,C.jsx)("option",{value:"",children:"Select"}),(0,C.jsx)("option",{value:"AM",children:"AM"}),(0,C.jsx)("option",{value:"PM",children:"PM"})]}),(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",te.endTimeMdn?"":le.endTimeMdn]})]})}),(0,C.jsx)("div",{className:"col-md-4",children:(0,C.jsxs)("div",{className:"form-group ".concat(m().fromGroup),children:[(0,C.jsx)("label",{children:"Timezone"}),(0,C.jsx)(_.Z,{name:"timezone",value:te.timeZone,onChange:function(e){oe((function(r){return P(P({},r),{},{timeZone:e})}))}}),(0,C.jsxs)("span",{className:m().errorMsg,children:[" ",te.timeZone?"":le.timezone]})]})})]}),(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col-md-3"}),(0,C.jsx)("div",{className:"col-md-9 ".concat(m().ButtonGroup),children:(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col-md-4"}),(0,C.jsx)("div",{className:"col-md-4",children:(0,C.jsx)("button",{onClick:function(){route.push("/busines/owner/dashboard")},className:m().SaveBtn,children:"Cancel"})}),(0,C.jsx)("div",{className:"col-md-4 pr-0",children:K?(0,C.jsxs)("button",{disabled:!0,type:"submit",className:m().SandBtn,children:[" ",(0,C.jsxs)(C.Fragment,{children:[" ",(0,C.jsx)("i",{class:"fa fa-refresh fa-spin"}),"  Loading "]}),"  "]}):(0,C.jsx)("button",{type:"submit",className:m().SandBtn,onClick:ue(Me,(function(e){})),children:"Save "})})]})})]})]})})]})})})}),(0,C.jsx)(w.Z,{open:z,message:Y,closeModal:function(e){e.preventDefault(),b.default.push("/busines/owner/allStaffList")}})]})}},56908:function(e,r,n){"use strict";var a=n(67294),s=n(83253),t=n.n(s),o=n(96883),i=n.n(o),l=(n(11163),n(85893));r.Z=function(e){var r=e.open,n=e.closeModal,s=e.OpenModal,o=e.setLink,c=e.link,d=(e.style,(0,a.useState)()),m=(d[0],d[1]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("a",{style:{cursor:"pointer",color:"#00a2ff",display:"block",marginTop:"40px"},onClick:s,children:c||"Link your Licence/Membership"}),(0,l.jsx)("span",{onClick:s,children:c?(0,l.jsx)("a",{style:{cursor:"pointer",color:"#00ed97"},children:"  Edit"}):""})]})}),(0,l.jsxs)(t(),{className:"".concat(i().customeModal," ").concat(i().customeAccountModal),isOpen:r,style:{overflowY:"scroll"},children:[(0,l.jsx)("div",{class:i().modalHeader,children:(0,l.jsxs)("div",{class:"row",children:[(0,l.jsxs)("div",{class:"col-10",children:[(0,l.jsx)("h4",{children:"Link your License/Membership"})," ",(0,l.jsx)("span",{style:{color:"red"}})]}),(0,l.jsxs)("div",{class:"col-2",children:[(0,l.jsx)("button",{className:i().closeBtn,onClick:n,children:(0,l.jsx)("img",{src:"/images/popupcross.svg"})}),(0,l.jsx)("br",{})]})]})}),(0,l.jsx)("div",{className:i().genrateLink,children:(0,l.jsx)("div",{className:"".concat(i().genrateLinkSec," text-center"),children:(0,l.jsxs)("form",{children:[(0,l.jsx)("div",{class:"row",children:(0,l.jsx)("div",{class:"col-12",children:(0,l.jsxs)("div",{className:"form-group px-0 ".concat(i().customeFormGroup),children:[(0,l.jsx)("h3",{children:"Link your License/Membership"}),(0,l.jsx)("input",{type_name:"text",placeholder_name:"link",inputId:"link",input_name:"link",onChange:function(e){/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(e.target.value)?o(e.target.value):m("Please Enter Valid Link")},value:c,maxLength:35})]})})}),(0,l.jsx)("div",{class:"row",children:(0,l.jsx)("div",{class:"col-12",children:(0,l.jsx)("button",{onClick:function(e){e.preventDefault(),c&&n()},className:i().sendBtn,style:{float:"unset"},children:"Done"})})})]})})})]})]})}},88266:function(e,r,n){"use strict";n(67294);var a=n(83253),s=n.n(a),t=n(96883),o=n.n(t),i=n(11163),l=n(85893);r.Z=function(e){var r=e.open,n=e.closeModal,a=e.message;e.pathname,(0,i.useRouter)();return(0,l.jsx)("div",{children:(0,l.jsxs)(s(),{className:"".concat(o().customeModal," ").concat(o().customeAccountModal),isOpen:r,style:{overflowY:"scroll"},children:[(0,l.jsx)("div",{class:o().modalHeader,children:(0,l.jsx)("div",{class:"row",children:(0,l.jsx)("div",{class:"col-10"})})}),(0,l.jsx)("div",{className:o().genrateLink,children:(0,l.jsx)("div",{className:"".concat(o().genrateLinkSec," text-center"),children:(0,l.jsx)("form",{children:(0,l.jsxs)("div",{class:"row text-center",children:[(0,l.jsx)("h3",{class:"col-12 text-center mb-2",children:"Success"}),(0,l.jsx)("p",{className:"col-12 text-center mb-2",children:a}),(0,l.jsx)("div",{class:"col-12 text-center",children:(0,l.jsx)("button",{className:o().sendBtn,onClick:n,style:{float:"unset"},children:"OK"})})]})})})})]})})}},35027:function(e,r,n){"use strict";n.d(r,{a:function(){return u}});var a=n(92809),s=(n(85893),{EmailEmptyError:"Please enter email",EmailAddressErrors:"An email address must contain a single @ ",EmailAddressValidErrors:"Please enter valid email. ",EmailInvalidErrors:"The domain portion of the email address is invalid"}),t={PhoneError:"Please enter number",PhoneNumberError:"Phone number must be numbers only",PhoneInvalidError:"It is invalid phone number"},o={NameEmptyError:"Please enter the name",NameError:"Please provide valid name.",NameErrorWithNumber:"Name must contain alpha characters only."},i={AddressEmptyError:"Please enter the addess"},l={CompanyNameEmptyError:"Please enter the company name",CompanyNameError:"Please provide valid company name.",CompanyNameErrorWithNumber:"Name must contain alpha characters only."},c={NZBNEmptyError:"Please enter the NZBN or ABN number",NZBNError:"Please provide valid name.",NZBNErrorWithLength:"Too Many Numbers."},d={PasswordError:"Please enter the password",PasswordLengthError:"Your password must be between 8 and 30 characters",PasswordUppercaseError:" Password must be more than 6 characters with 1 uppercase & 1 number.",PasswordNotMatchOne:"Your password and confirm password do not match.",PasswordNotMatch:"Your New password and confirm New password do not match.",NewPasswordError:"Please enter the new password",NewPasswordUppercaseError:"New password must be more than 6 characters with 1 uppercase & 1 number.",ConfirmNewPasswordError:"Please enter the confirm password",ConfirmNewPasswordUppercaseError:"Confirm new password must be more than 6 characters with 1 uppercase & 1 number."},m={LicenseError:"Please enter the license",LisenceValidateError:"Your License No. must be 9 digits"},u=(0,a.Z)({Name:{required:{value:!0,message:o.NameEmptyError},pattern:{value:/^[a-zA-Z ]+$/,message:o.NameError}},Address:{required:{value:!0,message:i.AddressEmptyError}},licenseNo:{required:{value:!0,message:m.LicenseError},minLength:{value:9,message:m.LisenceValidateError}},NZBN_Number:{required:{value:!0,message:c.NZBNEmptyError},maxLength:{value:13,message:c.NZBNErrorWithLength}},PhoneNumber:{required:{value:!0,message:t.PhoneError}},CompanyName:{required:{value:!0,message:l.CompanyNameEmptyError}},Email:{required:{value:!0,message:s.EmailEmptyError},pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,message:s.EmailAddressValidErrors}},SecondaryEmail:{required:{value:!1,message:s.EmailEmptyError},pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,message:s.EmailAddressValidErrors}},Password:{required:{value:!0,message:d.PasswordError},pattern:{value:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,message:d.PasswordUppercaseError}},New_Password:{required:{value:!0,message:d.NewPasswordError},pattern:{value:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,message:d.NewPasswordUppercaseError}},Confirm_New_Password:{required:{value:!0,message:d.ConfirmNewPasswordError},pattern:{value:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,message:d.ConfirmNewPasswordUppercaseError}},Common:{required:{value:!0,message:d.ConfirmNewPasswordError}}},"Address",{required:{value:!0,message:i.AddressEmptyError}})},604:function(e,r,n){"use strict";n.d(r,{B9:function(){return l},_U:function(){return d},FG:function(){return m}});var a=n(30266),s=n(809),t=n.n(s),o=n(9669),i=n.n(o);function l(e){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)(t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().get("https://frozen-tundra-07943.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=".concat(r.input,"&key=").concat(r.key,"&radius=").concat(r.radius)).then((function(e){return e.data.predictions})).catch((function(e){return console.log("error",e),e.response})));case 4:return e.abrupt("return",new Error("Please check internet connection"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return i().get("https://frozen-tundra-07943.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=".concat(e.key,"&placeid=").concat(e.place_id)).then((function(e){return e}),(function(e){return console.log("error",e),e.status,e}))}function m(e){return i().get("https://frozen-tundra-07943.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=".concat(e.key,"&placeid=").concat(e.place_id)).then((function(e){return e.data.result}),(function(e){return console.log("error",e),e.status,e}))}},26462:function(e){e.exports={DashboardpageWrap:"form_DashboardpageWrap__ip1L-",pageWrap:"form_pageWrap__1Ac_N",contentWrapper:"form_contentWrapper__2pV-3",tableArea:"form_tableArea__1rY_Q",Btn1:"form_Btn1__2DS_f",Btn2:"form_Btn2__1Xo98",Btn3:"form_Btn3__1roCk",Btn4:"form_Btn4__3EvEM",Btn5:"form_Btn5__5AVnt",BtnWithoutImg:"form_BtnWithoutImg___vdZz",Nodata:"form_Nodata__2SzBs",searchSection:"form_searchSection__fb6oa",BtnGroup:"form_BtnGroup__2lsXw",btnBox:"form_btnBox__2klY1",dropDown:"form_dropDown__3TqsF",dropDownBtn:"form_dropDownBtn__3pGNs",Arrow:"form_Arrow__1BIEz",dropDown1:"form_dropDown1__3-bAk",caseDetailStatus:"form_caseDetailStatus__1zi3m",formArea:"form_formArea__3hnl3",staffMemberStatus:"form_staffMemberStatus__W1T3p",progressBar:"form_progressBar__MH2ck",Active:"form_Active__3scZI",titleSec:"form_titleSec__SBjiA",NameSec:"form_NameSec__1PkV1",avatarUpload:"form_avatarUpload__H4Qav",avatarPreview:"form_avatarPreview__3W1wj",NameDetail:"form_NameDetail__255-Q",LinkSec:"form_LinkSec__3UsLU",fromGroup:"form_fromGroup__1GrsY",required:"form_required__2x5_X",errorMsg:"form_errorMsg__1x-RB",list:"form_list__3FLYS",LinkLicence:"form_LinkLicence__3Ea4K",CustomeTimeZone:"form_CustomeTimeZone__H45if",radio:"form_radio__14waa",radioLabel:"form_radioLabel__1bt9T",CheckBox:"form_CheckBox__1OGd6",checkboxLabel:"form_checkboxLabel__3SEcH",fromGroupPhone:"form_fromGroupPhone__1rxMC",ButtonGroup:"form_ButtonGroup__3Q7CO",SaveBtn:"form_SaveBtn__3lf0S",SandBtn:"form_SandBtn__2m9zu",workingHoursSec:"form_workingHoursSec__1aM0N",weekButton:"form_weekButton__1bVLj",active:"form_active__eINoD",reportPage:"form_reportPage__2zDuw",clientDetail:"form_clientDetail__2gnyk",profileDetail:"form_profileDetail__YPV9N",profileImg:"form_profileImg__WkhUh",profileContent:"form_profileContent__34HHp",descriptionSec:"form_descriptionSec__2uhIm",ArrowImg:"form_ArrowImg__39ZVO",profileBtnGroup:"form_profileBtnGroup__2PWAl",NavTabs:"form_NavTabs__RLitn",TabContent:"form_TabContent__1KoH6",submitBtn:"form_submitBtn__2Ts-2",fileNote:"form_fileNote__2dKXu",sliderSec:"form_sliderSec__WM327",sliderBox:"form_sliderBox__nBCCf",templateSec:"form_templateSec__1xi97",searchingList:"form_searchingList__1X1iN",workingHourseSec:"form_workingHourseSec__8kIpw"}}}]);