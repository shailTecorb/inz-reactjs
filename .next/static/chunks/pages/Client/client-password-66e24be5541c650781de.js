(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2733,8350],{30168:function(e,r,s){"use strict";var a=s(92809),t=s(85893);function n(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?n(Object(s),!0).forEach((function(r){(0,a.Z)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}r.Z=function(e){var r=e.placeholder_name,s=e.type_name,a=e.class_name,n=e.readOnly,o=e.input_name,l=e.onChange,c=e.value,d=e.maxLength,u=e.onKeyPress,m=e.disabled,f=e.register;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("input",i({type:s,placeholder:r,onChange:l,value:c,name:o,maxLength:d,autoComplete:"off","aria-describedby":"emailHelp ",className:a||"",onKeyPress:u,disabled:m,readOnly:n},f))})}},48903:function(e,r,s){"use strict";var a=s(65523),t=s(67294),n=s(10686),i=s.n(n),o=s(85893);r.Z=function(e){return(0,a.Z)(e),(0,o.jsx)(t.Fragment,{children:(0,o.jsx)("div",{className:"col-lg-6 pl-0 d-none d-lg-block",children:(0,o.jsx)("div",{className:"".concat(i().leftBanner),children:(0,o.jsx)("div",{className:i().leftImage,children:(0,o.jsx)("img",{src:"/images/leftBanner.png",className:"img-fluid"})})})})})}},99199:function(e,r,s){"use strict";s.d(r,{Ol:function(){return i},YN:function(){return o},oH:function(){return l},uo:function(){return c},mE:function(){return d},Qx:function(){return u},a$:function(){return m}});s(67294);var a=s(85893),t={},n="alert alert-login",i=function(e){return""===e||void 0===e||null===e?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,children:"Please enter your Name. "})}:/^[a-zA-Z ]+$/.test(e)?e.length<2?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,children:"Please provide valid name"})}:{status:!0,isDisabled:!0,error:""}:{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,children:"Please provide valid name"})}},o=function(e){return""===e||void 0===e||null===e?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,children:"Please enter your Address. "})}:/^[a-zA-Z ]+$/.test(e)?e.length<5?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,children:"Please provide valid Address"})}:{status:!0,isDisabled:!0,error:""}:{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,children:"Please provide valid Address"})}},l=function(e){return""===e||void 0===e||null===e?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,style:t,children:"Please enter Email ID."})}:/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i.test(e)?{status:!0,isDisabled:!0,error:""}:{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,style:t,children:"Please enter valid Email Address."})}},c=function(e){return""===e||void 0===e||null===e?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,style:t,children:"Please enter valid password."})}:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/.test(e)?e.length<6?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,style:t,children:"Password must contain 6 or more than 6 characters."})}:{status:!0,isDisabled:!0,error:""}:{isDisabled:!1,error:"Password must be more than 6 characters with 1 uppercase & 1 number."}},d=function(e){return""===(e=e.trim())||void 0===e||null===e?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,style:t,children:"Please enter Phone number."})}:{status:!0,isDisabled:!0,error:""}},u=function(e){return""===e||void 0===e||null===e?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,style:t,children:"Please enter valid date."})}:{status:!0,isDisabled:!0,error:""}},m=function(e){return!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9/d{10}]*$/.test(e)||e.length<8?{status:!1,isDisabled:!1,error:(0,a.jsx)("div",{className:n,style:t,children:"Please enter valid Phone Number."})}:{status:!0,isDisabled:!0,error:""}}},60267:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return g}});var a=s(30266),t=s(92809),n=s(809),i=s.n(n),o=s(67294),l=s(10686),c=s.n(l),d=s(99199),u=s(30168),m=s(48903),f=s(13833),p=s(11163),h=s(85893);function b(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,a)}return s}function w(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?b(Object(s),!0).forEach((function(r){(0,t.Z)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}var _=function(){var e=(0,p.useRouter)();console.log(e);var r=(0,o.useState)({password:"",confirmPassword:""}),s=r[0],t=r[1],n=(0,o.useState)(!0),l=n[0],b=n[1],_=(0,o.useState)({passwordErrorMsg:"",isDisabledPassword:!1,confirmPasswordErrorMsg:"",isDisabledConfirmPassword:!1}),g=_[0],v=_[1],j=function(e,r){var s=g.passwordErrorMsg,a=g.passwordErrorMsg,t=g.confirmPasswordErrorMsg,n=g.isDisabledConfirmPassword;switch(e){case"password":s=(0,d.uo)(r).error,a=(0,d.uo)(r).isDisabled;break;case"confirmPassword":t=(0,d.uo)(r).error,n=(0,d.uo)(r).isDisabled}v((function(e){return w(w({},e),{},{passwordErrorMsg:s,isDisabledPassword:a,confirmPasswordErrorMsg:t,isDisabledConfirmPassword:n})}))},P=function(){b(!l)},x=function(){var r=(0,a.Z)(i().mark((function r(a){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),s.password){r.next=5;break}v((function(e){return w(w({},e),{},{passwordErrorMsg:"Please enter password",isDisabledPassword:!1})})),r.next=14;break;case 5:if(s.confirmPassword){r.next=9;break}v((function(e){return w(w({},e),{},{confirmPasswordErrorMsg:"Please enter confirm password",isDisabledConfirmPassword:!1})})),r.next=14;break;case 9:return console.log(e.query),v((function(e){return w(w({},e),{},{passwordErrorMsg:"",isDisabledPassword:!0,EmailErrorMsg:"",isDisabledEmail:!0})})),r.next=13,(0,f.cY)(e.query.id,s.password);case 13:r.sent;case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,h.jsx)(o.Fragment,{children:(0,h.jsx)("section",{className:c().auth,children:(0,h.jsx)("div",{className:c().container,children:(0,h.jsxs)("div",{className:"row mx-0",children:[(0,h.jsx)(m.Z,{}),(0,h.jsx)("div",{className:"col-md-12 col-lg-6 bg-white",children:(0,h.jsxs)("div",{className:c().formSection,children:[(0,h.jsx)("h3",{className:"pb-3",children:"Set Password"}),(0,h.jsxs)("form",{children:[(0,h.jsxs)("div",{className:"form-group  ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:[" Password ",(0,h.jsx)("span",{className:c().required,children:"*"})," ",(0,h.jsx)("span",{children:!g.isDisabledPassword&&g.passwordErrorMsg})]}),(0,h.jsx)(u.Z,{type_name:l?"password":"text",placeholder_name:"Password",inputId:"Password",input_name:"password",onChange:function(e){t((function(r){return w(w({},r),{},{password:e.target.value})})),j("password",s.password)}}),l?(0,h.jsx)("img",{src:"/images/password.svg",alt:"password",onClick:P}):(0,h.jsx)("img",{src:"/images/eye.svg",alt:"password",onClick:P})]}),(0,h.jsxs)("div",{className:"form-group ".concat(c().fromGroup),children:[(0,h.jsxs)("label",{children:["Confirm Password ",(0,h.jsx)("span",{className:c().required,children:"*"})," ",(0,h.jsx)("span",{children:!g.isDisabledConfirmPassword&&g.confirmPasswordErrorMsg})," "]}),(0,h.jsx)(u.Z,{type_name:l?"password":"text",placeholder_name:"Confirm Password",inputId:"confirmPassword",input_name:"confirmPassword",onChange:function(e){t((function(r){return w(w({},r),{},{confirmPassword:e.target.value})})),j("confirmPassword",s.email)}}),l?(0,h.jsx)("img",{src:"/images/password.svg",alt:"password",onClick:P}):(0,h.jsx)("img",{src:"/images/eye.svg",alt:"password",onClick:P})]}),(0,h.jsx)("div",{className:"d-flex align-items-center justify-content-between mt-4",children:(0,h.jsx)("div",{className:"d-flex align-items-center",children:(0,h.jsx)("button",{type:"submit",className:"btn ",onClick:x,children:"Set Password"})})})]})]})})]})})})})},g=(s(53431),function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(_,{})})})},94830:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Client/client-password",function(){return s(60267)}])},10686:function(e){e.exports={auth:"auth_auth__XHRKA",leftBanner:"auth_leftBanner__1IuaW",leftImage:"auth_leftImage__ohlkA",formSection:"auth_formSection__2dRgC",edit:"auth_edit__3F14L",userExist:"auth_userExist__3HEZ4",editBtn:"auth_editBtn__12eFu",info:"auth_info__3utoQ",emailImg:"auth_emailImg__1iFQR",remeber:"auth_remeber__Mzm1O",fromGroup:"auth_fromGroup__2lD99",required:"auth_required__3Y4LQ",errorMsg:"auth_errorMsg__1wg-k",verifyNZBN:"auth_verifyNZBN__1g4qn",invalid:"auth_invalid__19DyK",fromVerifiGroup:"auth_fromVerifiGroup__CasxV",captchCodeSec:"auth_captchCodeSec__37abV",captchCodeDiv:"auth_captchCodeDiv__16U1K",refresh:"auth_refresh__19JQC",sideline:"auth_sideline__1NXQ5"}},65523:function(e,r,s){"use strict";function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}s.d(r,{Z:function(){return a}})}},function(e){e.O(0,[9774,2888,179],(function(){return r=94830,e(e.s=r);var r}));var r=e.O();_N_E=r}]);