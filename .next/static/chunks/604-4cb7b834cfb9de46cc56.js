(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{46608:function(e,r,a){"use strict";var s=a(77678),n=a(67294),t=a(85893);r.Z=function(e){var r=e.handleCaptch,a=e.setReference,o=n.useRef();return(0,t.jsx)(s.Z,{ref:o,sitekey:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",onChange:function(e){console.log("Captcha value:",e),r(e),a(o)}})}},30168:function(e,r,a){"use strict";var s=a(92809),n=a(85893);function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){(0,s.Z)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}r.Z=function(e){var r=e.placeholder_name,a=e.type_name,s=e.class_name,t=e.readOnly,c=e.input_name,i=e.onChange,l=e.value,u=e.maxLength,m=e.onKeyPress,d=e.disabled,p=e.register;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("input",o({type:a,placeholder:r,onChange:i,value:l,name:c,maxLength:u,autoComplete:"off","aria-describedby":"emailHelp ",className:s||"",onKeyPress:m,disabled:d,readOnly:t},p))})}},48903:function(e,r,a){"use strict";var s=a(65523),n=a(67294),t=a(10686),o=a.n(t),c=a(85893);r.Z=function(e){return(0,s.Z)(e),(0,c.jsx)(n.Fragment,{children:(0,c.jsx)("div",{className:"col-lg-6 pl-0 d-none d-lg-block",children:(0,c.jsx)("div",{className:"".concat(o().leftBanner),children:(0,c.jsx)("div",{className:o().leftImage,children:(0,c.jsx)("img",{src:"/images/leftBanner.png",className:"img-fluid"})})})})})}},55739:function(e,r,a){"use strict";var s=a(30266),n=a(92809),t=a(809),o=a.n(t),c=a(67294),i=a(10686),l=a.n(i),u=a(30168),m=a(48903),d=a(92253),p=a(11163),h=a(4878),f=a(2827),N=a(3728),g=a(41664),b=a(46608),v=a(87536),y=a(35027),_=a(85893);function w(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,s)}return a}function E(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?w(Object(a),!0).forEach((function(r){(0,n.Z)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}r.Z=function(){var e,r,a,t,i=(0,p.useRouter)(),w=(0,c.useState)(!1),j=w[0],x=w[1],P=(0,c.useState)({NZBNumber:"",companyName:"",email:"",password:"",captcha:""}),Z=P[0],F=P[1],C=(0,c.useState)(""),O=C[0],S=C[1],A=(0,c.useState)(""),B=A[0],q=A[1],I=(0,c.useState)({}),k=I[0],L=I[1],D=(0,v.cI)(),V=D.register,z=D.handleSubmit,U=D.formState.errors,M=(D.setError,D.setValue),G=(0,c.useContext)(h.B).setEmail,$=(0,c.useState)("NZBN or ABN"),R=$[0],K=$[1],Q=(0,c.useState)({}),W=Q[0],H=Q[1],Y=(0,c.useState)({NZBNStatus:!1,CompanyNameStatus:!1}),T=Y[0],X=Y[1];(0,c.useEffect)((function(){var e;if(null!==(e=i.query)&&void 0!==e&&e.verified){var r=i.query.verified,a=(0,N.zP)(r);if(a){var s=(0,N.oO)(a);console.log("Decoded data, ",s),H(s),F((function(e){return E(E({},e),{},{companyName:s.company,NZBNumber:s.number,email:s.email})})),M("companyName",s.company),M("NZBNumber",s.number),M("email",s.email),K(null===s||void 0===s?void 0:s.type),""!==s.company&&X((function(e){return E(E({},e),{},{CompanyNameStatus:!0})})),""!==s.number&&X((function(e){return E(E({},e),{},{NZBNStatus:!0})}))}else i.replace(f.Z.Auth.CompanyVerify.href)}else i.replace(f.Z.Auth.CompanyVerify.href)}),[]),(0,c.useEffect)((function(){localStorage.token&&(localStorage.token&&"true"==localStorage.approved?i.replace("/busines/owner/dashboard"):localStorage.token&&"false"==localStorage.approved&&i.replace("/busines/owner/visa/selectCountry"))}),[]);var J=function(){var e=(0,s.Z)(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.persist(),F((function(e){return E(E({},e),{},(0,n.Z)({},r.target.name,r.target.value))}));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),ee=function(){var e=(0,s.Z)(o().mark((function e(r){var a,s,n,t,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z.captcha){e.next=8;break}return x(!0),e.next=4,(0,d.zX)(Z);case 4:200==(a=e.sent).code?(G(Z.email),s=(0,N.U_)(Z.email),n=(0,N.P0)(s),i.replace("/auth/OptVerification?verified=".concat(n)),x(!1)):400==a.code?(null===k||void 0===k||null===(t=k.current)||void 0===t||t.reset(),S(a.message),x(!1)):(null===k||void 0===k||null===(c=k.current)||void 0===c||c.reset(),S(a.message),x(!1)),e.next=10;break;case 8:console.log("Key Data",Z),q("Please check captcha");case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,_.jsx)(c.Fragment,{children:(0,_.jsx)("section",{className:l().auth,children:(0,_.jsx)("div",{className:l().container,children:(0,_.jsxs)("div",{className:"row mx-0",children:[(0,_.jsx)(m.Z,{}),(0,_.jsx)("div",{className:"col-md-12 col-lg-6 bg-white",children:(0,_.jsxs)("div",{className:l().formSection,children:[(0,_.jsx)("h3",{className:"pb-3",children:"Sign Up"}),(0,_.jsxs)("h2",{className:l().userExist,children:[O," "]}),(0,_.jsxs)("form",{children:[(0,_.jsxs)("div",{className:"form-group ".concat(l().fromGroup),children:[(0,_.jsxs)("label",{children:[R||"NZBN or ABN"," ",(0,_.jsx)("span",{className:l().required,children:"*"}),(0,_.jsx)("span",{className:l().errorMsg,children:null===(e=U.NZBNumber)||void 0===e?void 0:e.message})]}),(0,_.jsx)(u.Z,{type_name:"text",placeholder_name:"NZBN or ABN",inputId:"",input_name:"NZBNumber",class_name:"loading",value:Z.NZBNumber,maxLength:"13",disabled:T.NZBNStatus,register:V("NZBNumber",E(E({},y.a.NZBN_Number),{},{onChange:function(e){return J(e)}}))}),(0,_.jsx)("button",{onClick:function(){return function(){console.log("________DecryptedData________",W);var e=(0,N.U_)(W),r=(0,N.P0)(e);console.log("----------",r),i.push("".concat(f.Z.Auth.CompanyVerify.href,"?verified=").concat(r))}()},type:"button",className:l().edit,children:(0,_.jsx)("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})})]}),(0,_.jsxs)("div",{className:"form-group ".concat(l().fromGroup),children:[(0,_.jsxs)("label",{children:["Company Name ",(0,_.jsx)("span",{className:l().required,children:"*"}),(0,_.jsx)("small",{className:l().errorMsg,children:null===(r=U.companyName)||void 0===r?void 0:r.message})]}),(0,_.jsx)(u.Z,{type_name:"companyName",placeholder_name:"Company Name",inputId:"companyName",input_name:"companyName",value:Z.companyName,disabled:T.CompanyNameStatus,register:V("companyName",E(E({},y.a.CompanyName),{},{onChange:function(e){return J(e)}}))}),(0,_.jsx)("img",{src:"/images/password.svg",alt:"password"})]}),(0,_.jsxs)("div",{className:"form-group ".concat(l().fromGroup),children:[(0,_.jsxs)("label",{children:["Email ",(0,_.jsx)("span",{className:l().required,children:"*"})," ",(0,_.jsx)("span",{className:l().errorMsg,children:null===(a=U.email)||void 0===a?void 0:a.message})]}),(0,_.jsx)(u.Z,{type_name:"email",placeholder_name:"Email",inputId:"email",input_name:"email",value:Z.email.toLocaleLowerCase(),register:V("email",E(E({},y.a.Email),{},{onChange:function(e){return J(e)}}))}),(0,_.jsx)("img",{src:"/images/email.svg",alt:"email"})]}),(0,_.jsxs)("div",{className:"form-group ".concat(l().fromGroup),children:[(0,_.jsxs)("label",{children:["Password ",(0,_.jsx)("span",{className:l().required,children:"*"}),(0,_.jsx)("small",{className:l().errorMsg,children:null===(t=U.password)||void 0===t?void 0:t.message})]}),(0,_.jsx)(u.Z,{type_name:"password",placeholder_name:"Password",inputId:"password",input_name:"password",value:Z.password,register:V("password",E(E({},y.a.Password),{},{onChange:function(e){return J(e)}}))}),(0,_.jsx)("img",{src:"/images/password.svg",alt:"password"})]}),(0,_.jsxs)("div",{className:"form-group col-12 pl-0 ".concat(l().fromGroup," ").concat(l().captchCodeSec," mb-2"),children:[(0,_.jsxs)("label",{children:["Captcha"," ",(0,_.jsx)("span",{className:l().errorMsg,children:B})]}),(0,_.jsx)("h6",{children:(0,_.jsx)(b.Z,{handleCaptch:function(e){console.log("Handle Captcha ",k),F((function(r){return E(E({},r),{},{captcha:e})})),q("")},setReference:L})})]}),(0,_.jsx)("div",{className:"form-group col-12 pl-0 ".concat(l().fromGroup," ").concat(l().captchCodeSec," mb-2"),children:(0,_.jsxs)("p",{className:l().info,children:["By Clicking sign up ,I you agree to the T&Cs of Immitech and its polices.",(0,_.jsx)("br",{})," Click on the hyperlink to review"]})}),(0,_.jsxs)("div",{className:"d-flex align-items-center justify-content-between mt-4",children:[(0,_.jsxs)("div",{className:l().remeber,children:[" ","Already Account? \xa0",(0,_.jsx)(g.default,{href:f.Z.Auth.login.href,as:f.Z.Auth.login.as,replace:!0,children:(0,_.jsx)("a",{children:"SIGN IN"})})]}),(0,_.jsx)("div",{className:"d-flex align-items-center",children:(0,_.jsxs)("button",{type:"submit",onClick:z(ee,(function(e){})),children:[j&&(0,_.jsx)("i",{className:"fa fa-spinner fa-spin",style:{marginRight:"5px"}}),j&&(0,_.jsx)("span",{children:"Wait"}),!j&&(0,_.jsx)("span",{children:"Sign Up"})]})})]})]})]})})]})})})})}},3728:function(e,r,a){"use strict";a.d(r,{P0:function(){return u},zP:function(){return m},U_:function(){return d},oO:function(){return p}});var s=a(40452),n=a.n(s),t=a(81354),o=a.n(t),c=a(80208),i=a.n(c),l=a(96245),u=function(e){var r;isNaN(e)||(e=e.toString());try{r=n().encrypt(e,"INZLiveBO").toString().replace("+","aFaFa").replace("+","aFaFa").replace("+","aFaFa").replace("/","bFbFb").replace("=","cFcFc").replace("/","bFbFb").replace("/","bFbFb").replace("/","bFbFb").replace("/","bFbFb").replace("/","bFbFb").replace("+","aFaFa").replace("+","aFaFa").replace("+","aFaFa")}catch(a){r=!1}return r},m=function(e){console.log("DataString",e);try{var r=e.toString().replace("aFaFa","+").replace("aFaFa","+").replace("aFaFa","+").replace("bFbFb","/").replace("cFcFc","=").replace("bFbFb","/").replace("bFbFb","/").replace("bFbFb","/").replace("bFbFb","/").replace("bFbFb","/").replace("aFaFa","+").replace("aFaFa","+").replace("aFaFa","+"),a=n().decrypt(r,"INZLiveBO").toString(o().enc.Utf8)}catch(s){a=!1}return a},d=function(e){var r=i()(e,"INZLiveBO");return console.log(r),r},p=function(e){var r=(0,l.Z)(e);return console.log(r),r}},35027:function(e,r,a){"use strict";a.d(r,{a:function(){return d}});var s=a(92809),n=(a(85893),{EmailEmptyError:"Please enter email",EmailAddressErrors:"An email address must contain a single @ ",EmailAddressValidErrors:"Please enter valid email. ",EmailInvalidErrors:"The domain portion of the email address is invalid"}),t={PhoneError:"Please enter number",PhoneNumberError:"Phone number must be numbers only",PhoneInvalidError:"It is invalid phone number"},o={NameEmptyError:"Please enter the name",NameError:"Please provide valid name.",NameErrorWithNumber:"Name must contain alpha characters only."},c={AddressEmptyError:"Please enter the addess"},i={CompanyNameEmptyError:"Please enter the company name",CompanyNameError:"Please provide valid company name.",CompanyNameErrorWithNumber:"Name must contain alpha characters only."},l={NZBNEmptyError:"Please enter the NZBN or ABN number",NZBNError:"Please provide valid name.",NZBNErrorWithLength:"Too Many Numbers."},u={PasswordError:"Please enter the password",PasswordLengthError:"Your password must be between 8 and 30 characters",PasswordUppercaseError:" Password must be more than 6 characters with 1 uppercase & 1 number.",PasswordNotMatchOne:"Your password and confirm password do not match.",PasswordNotMatch:"Your New password and confirm New password do not match.",NewPasswordError:"Please enter the new password",NewPasswordUppercaseError:"New password must be more than 6 characters with 1 uppercase & 1 number.",ConfirmNewPasswordError:"Please enter the confirm password",ConfirmNewPasswordUppercaseError:"Confirm new password must be more than 6 characters with 1 uppercase & 1 number."},m={LicenseError:"Please enter the license",LisenceValidateError:"Your License No. must be 9 digits"},d=(0,s.Z)({Name:{required:{value:!0,message:o.NameEmptyError},pattern:{value:/^[a-zA-Z ]+$/,message:o.NameError}},Address:{required:{value:!0,message:c.AddressEmptyError}},licenseNo:{required:{value:!0,message:m.LicenseError},minLength:{value:9,message:m.LisenceValidateError}},NZBN_Number:{required:{value:!0,message:l.NZBNEmptyError},maxLength:{value:13,message:l.NZBNErrorWithLength}},PhoneNumber:{required:{value:!0,message:t.PhoneError}},CompanyName:{required:{value:!0,message:i.CompanyNameEmptyError}},Email:{required:{value:!0,message:n.EmailEmptyError},pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,message:n.EmailAddressValidErrors}},SecondaryEmail:{required:{value:!1,message:n.EmailEmptyError},pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,message:n.EmailAddressValidErrors}},Password:{required:{value:!0,message:u.PasswordError},pattern:{value:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,message:u.PasswordUppercaseError}},New_Password:{required:{value:!0,message:u.NewPasswordError},pattern:{value:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,message:u.NewPasswordUppercaseError}},Confirm_New_Password:{required:{value:!0,message:u.ConfirmNewPasswordError},pattern:{value:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,message:u.ConfirmNewPasswordUppercaseError}},Common:{required:{value:!0,message:u.ConfirmNewPasswordError}}},"Address",{required:{value:!0,message:c.AddressEmptyError}})},10686:function(e){e.exports={auth:"auth_auth__XHRKA",leftBanner:"auth_leftBanner__1IuaW",leftImage:"auth_leftImage__ohlkA",formSection:"auth_formSection__2dRgC",edit:"auth_edit__3F14L",userExist:"auth_userExist__3HEZ4",editBtn:"auth_editBtn__12eFu",info:"auth_info__3utoQ",emailImg:"auth_emailImg__1iFQR",remeber:"auth_remeber__Mzm1O",fromGroup:"auth_fromGroup__2lD99",required:"auth_required__3Y4LQ",errorMsg:"auth_errorMsg__1wg-k",verifyNZBN:"auth_verifyNZBN__1g4qn",invalid:"auth_invalid__19DyK",fromVerifiGroup:"auth_fromVerifiGroup__CasxV",captchCodeSec:"auth_captchCodeSec__37abV",captchCodeDiv:"auth_captchCodeDiv__16U1K",refresh:"auth_refresh__19JQC",sideline:"auth_sideline__1NXQ5"}},42480:function(){}}]);