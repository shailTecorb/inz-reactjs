(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7150,549,7e3],{30168:function(e,t,n){"use strict";var r=n(92809),o=n(85893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.placeholder_name,n=e.type_name,r=e.class_name,a=e.readOnly,i=e.input_name,l=e.onChange,c=e.value,p=e.maxLength,u=e.onKeyPress,h=e.disabled,d=e.register;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("input",s({type:n,placeholder:t,onChange:l,value:c,name:i,maxLength:p,autoComplete:"off","aria-describedby":"emailHelp ",className:r||"",onKeyPress:u,disabled:h,readOnly:a},d))})}},75673:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(92809),o=n(83789),a=n(30266),s=n(809),i=n.n(s),l=n(67294),c=n(54767),p=n.n(c),u=n(30168),h=n(92253),d=n(11163),f=n(58533),m=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(){var e=(0,d.useRouter)(),t=(0,l.useState)(),n=t[0],r=t[1],s=(0,l.useState)(""),c=s[0],g=(s[1],(0,l.useState)([])),_=g[0],y=g[1],b=(0,l.useState)(),w=(b[0],b[1]),S=(0,l.useState)({page:1,per_page:10,hashMore:!0}),j=S[0],x=S[1];(0,l.useEffect)((function(){T()}),[c]);var E=function(){var e=(0,a.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.WW)(j.page+1,j.per_page);case 2:200===(t=e.sent).code&&(n=t.result,y([].concat((0,o.Z)(n),(0,o.Z)(_))),0==t.result.length?x((function(e){return v(v({},e),{},{hashMore:!1})})):setTimeout((function(){y(_.concat(n))}),1500));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.WW)(j.page,j.per_page,localStorage.role,n);case 2:200==(t=e.sent).code?y(t.result):w(t.message);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=null===_||void 0===_?void 0:_.map((function(e,t){return(0,m.jsxs)("div",{className:"panel panel-default ".concat(p().panelArea),children:[(0,m.jsx)("div",{className:"panel-heading  active ".concat(p().panelHeading),role:"tab",id:"heading".concat(t+1),children:(0,m.jsx)("h4",{className:"panel-title",children:(0,m.jsx)("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseOne".concat(t+1),"aria-expanded":"true","aria-controls":"collapseOne".concat(t+1,"}"),children:e.question})})}),(0,m.jsx)("div",{id:"collapseOne".concat(t+1),className:"panel-collapse collapse ",role:"tabpanel","aria-labelledby":"heading".concat(t+1),children:(0,m.jsx)("div",{className:"panel-body ".concat(p().panelBody),children:(0,m.jsx)("p",{children:e.answer})})})]},t)}));return(0,m.jsx)(l.Fragment,{children:(0,m.jsx)("div",{className:p().contentWrapper,children:(0,m.jsx)("div",{className:"container-fuild",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col-md-9 m-auto",children:[(0,m.jsx)("h3",{children:"FAQs and Support"}),(0,m.jsx)("div",{className:p().formArea,children:(0,m.jsx)("section",{className:p().FaqSection,children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-md-7",children:(0,m.jsx)("div",{className:p().searchSection,children:(0,m.jsx)("form",{children:(0,m.jsxs)("div",{className:"input-group",children:[(0,m.jsx)(u.Z,{type_name:"text",placeholder_name:"Search anything",inputId:"search",input_name:"",onChange:function(e){r(e.target.value)},value:n,class_name:"form-control"}),(0,m.jsx)("div",{className:"input-group-append",children:(0,m.jsx)("a",{className:"btn btn-secondary",onClick:function(e){T(e)},children:(0,m.jsx)("i",{className:"fa fa-search"})})})]})})})})}),(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col-12 ".concat(p().faqSec),children:[(0,m.jsx)("div",{className:"panel-group ".concat(p().panelGroup),id:"accordion",role:"tablist","aria-multiselectable":"true",children:(0,m.jsx)(f.Z,{dataLength:_.length,next:function(){E(),x((function(e){return v(v({},e),{},{page:j.page+1})}))},hasMore:j.hashMore,endMessage:0==j.hashMore?(0,m.jsx)("h3",{}):"",children:O})}),(0,m.jsx)("a",{style:{color:"blue",cursor:"pointer"},onClick:function(){e.push("/Client/reportAnIssue")},children:"Didn't got what you're looking for ? Report An Issue"})]})})]})})})]})})})})})},y=(n(54865),n(53431),function(){var e=(0,l.useState)(!1),t=(e[0],e[1]);return(0,l.useEffect)((function(){"liaAgent"==localStorage.role?t(!0):t(!1)}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(_,{})})})},86686:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Faq",function(){return n(75673)}])},54767:function(e){e.exports={DashboardpageWrap:"faq_DashboardpageWrap__WFpzx",pageWrap:"faq_pageWrap__1HUOg",contentWrapper:"faq_contentWrapper__30ctd",tableArea:"faq_tableArea__1zpsW",Btn1:"faq_Btn1__4JWrs",Btn2:"faq_Btn2__3_uLL",Btn3:"faq_Btn3___XZA3",Btn4:"faq_Btn4__3StUM",Btn5:"faq_Btn5__6CYsC",BtnWithoutImg:"faq_BtnWithoutImg__3CiXf",Nodata:"faq_Nodata__qCi6E",searchSection:"faq_searchSection__MW5nx",BtnGroup:"faq_BtnGroup__1htWK",btnBox:"faq_btnBox__Aqkct",dropDown:"faq_dropDown__2El6n",dropDownBtn:"faq_dropDownBtn__u4tW6",Arrow:"faq_Arrow__3nY5b",dropDown1:"faq_dropDown1__4M8rZ",formArea:"faq_formArea__2mg5C",FaqSection:"faq_FaqSection__GA_mD",faqSec:"faq_faqSec__1iI-0",panelGroup:"faq_panelGroup__Fqczm",panelArea:"faq_panelArea__1K4dP",panelHeading:"faq_panelHeading__1Mzte",active:"faq_active__1vEmv",panelBody:"faq_panelBody__xunJF"}},58533:function(e,t,n){"use strict";var r=n(67294),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var s="Pixel",i="Percent",l={unit:i,value:.8};function c(e){return"number"===typeof e?{unit:i,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:s,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:i,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),l):(console.warn("scrollThreshold should be string or number"),l)}var p=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,r){var o,a=!1,s=0;function i(){o&&clearTimeout(o)}function l(){var l=this,c=Date.now()-s,p=arguments;function u(){s=Date.now(),n.apply(l,p)}function h(){o=void 0}a||(r&&!o&&u(),i(),void 0===r&&c>e?u():!0!==t&&(o=setTimeout(r?h:u,void 0===r?e-c:e)))}return"boolean"!==typeof t&&(r=n,n=t,t=void 0),l.cancel=function(){i(),a=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?a(a({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=c(t);return r.unit===s?e.scrollTop<=r.value+n-e.scrollHeight+1:e.scrollTop<=r.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=c(t);return r.unit===s?e.scrollTop+n>=e.scrollHeight-r.value:e.scrollTop+n>=r.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=a({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(r.Component);t.Z=p},56586:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},83789:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(56586);var o=n(16988);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},16988:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(56586);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},function(e){e.O(0,[9774,2888,179],(function(){return t=86686,e(e.s=t);var t}));var t=e.O();_N_E=t}]);