(this["webpackJsonpmybill-web"]=this["webpackJsonpmybill-web"]||[]).push([[0],{148:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Bill}));var _Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(100),_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(163),_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(58),_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(59),_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(82),_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(60),_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(66),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(328),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(108),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(166),antd__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(51),antd__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(32),antd__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(167),antd__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(327),_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(57),_ant_design_icons__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(329),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(7),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__),confirm=antd__WEBPACK_IMPORTED_MODULE_8__.a.confirm,Bill=function(_React$PureComponent){Object(_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Bill,_React$PureComponent);var _super=Object(_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.a)(Bill);function Bill(props){var _this;return Object(_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,Bill),_this=_super.call(this,props),_this.update=function(){var _=_this._getData();_this.setState({data:_})},_this.getMax=function(){return _this.state.data.reduce((function(r,i){var money=i.split("@")[2];try{r+=eval(money)}catch(err){console.log(err,i),r+=0}return r}),0)},_this.handleCopy=function(){var _=document.createElement("input");_.value=_this._getData().map((function(_){return'"'.concat(_,'"')})).join(","),document.body.appendChild(_),_.select(),document.execCommand("Copy"),document.body.removeChild(_),antd__WEBPACK_IMPORTED_MODULE_9__.b.success({duration:2,maxCount:3,rtl:!0,content:"\u590d\u5236\u6210\u529f",onClick:function(){return setTimeout((function(){return antd__WEBPACK_IMPORTED_MODULE_9__.b.destroy()}))}})},_this.clearAll=function(){confirm({title:"\u786e\u5b9a\u8981\u6e05\u7a7a\u5417?",icon:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__.a,{}),content:"\u6e05\u7a7a\u540e\u5c06\u65e0\u6cd5\u6062\u590d",maskClosable:!0,onOk:function(){return new Promise((function(_){localStorage.setItem(_this.props.storeKey,""),_this.setState({data:[]}),_()}))}})},_this.handleItem=function(_,e){confirm({title:"\u60a8\u8981\u5220\u9664\u8be5\u6761\u6570\u636e\u5417?",icon:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__.a,{}),content:"\u6e05\u7a7a\u540e\u5c06\u65e0\u6cd5\u6062\u590d",maskClosable:!0,onOk:function(){return new Promise((function(_){var t=_this.state.data;t.splice(e,1),localStorage.setItem(_this.props.storeKey,JSON.stringify(t)),_this.setState({data:Object(_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(t)}),_()}))}})},_this.renderHeader=function(){var _=_this.state,e=_.data,t=_.isShowSetting;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("header",{children:[t?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_16__.a,{className:"Setting",onClick:function(){return _this.setState({isShowSetting:!_this.state.isShowSetting})}}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_10__.a,{gutter:24,align:"middle",justify:"space-around",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__.a,{type:"primary",onClick:_this.clearAll,disabled:0===e.length,children:"\u5168\u90e8\u6e05\u7a7a"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__.a,{type:"primary",onClick:_this.handleCopy,disabled:0===e.length,children:"\u590d\u5236"})})]}),0!==e.length&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_10__.a,{gutter:24,style:{margin:"24px 0 0 0",padding:"0 24px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.a,{style:{padding:0},span:8,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3",{children:"\u65e5\u671f"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.a,{style:{padding:0},span:8,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3",{children:"\u8be6\u60c5"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.a,{style:{padding:0},span:8,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3",{children:"\u91d1\u989d"})})]})]})},_this.renderItem=function(_,e){var t=_.split("@"),r=Object(_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t,3),n=r[0],a=r[1],s=r[2];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_13__.b.Item,{onClick:_this.handleItem.bind(Object(_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_this),_,e),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.a,{span:8,children:n}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.a,{span:8,children:a}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.a,{span:8,children:s})]})},_this.state={data:[],isShowSetting:!0},_this}return Object(_Users_zzb_WEB_mybill_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(Bill,[{key:"componentDidMount",value:function(){this.update()}},{key:"_getData",value:function(){var _=localStorage.getItem(this.props.storeKey);try{_=JSON.parse(_).reverse()}catch(e){_=[]}return _}},{key:"render",value:function(){var _=this.state.data;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__.b,{size:"large",header:this.renderHeader(),footer:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{style:{margin:"0 24px"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(antd__WEBPACK_IMPORTED_MODULE_14__.a,{title:"\u603b\u8bb0",value:this.getMax()})}),dataSource:_,rowKey:function(_){return _},renderItem:this.renderItem})})}}]),Bill}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent)},230:function(_,e,t){},231:function(_,e,t){},325:function(_,e,t){"use strict";t.r(e);var r=t(0),n=t.n(r),a=t(23),s=t.n(a),i=(t(230),t(100)),c=(t(231),t(67)),l=t(334),o=t(58),u=t(59),E=t(60),d=t(66),O=t(148),b=t(157),m=t(108),p=t(166),D=t(51),h=t(335),P=t(336),j=t(337),M=t(32),C=t(36),B=t.n(C),x=t(7),I=function(_){Object(E.a)(t,_);var e=Object(d.a)(t);function t(_){var r;return Object(o.a)(this,t),(r=e.call(this,_)).handleInput=function(_){return function(e){r.setState(Object(b.a)({},_,"object"===typeof e?e.target.value:e))}},r.onPressEnter=function(){r.refDetails.current.focus()},r.handleDatePickerChange=function(_,e){r.setState({date:new Date(_?_.format():Date.now())})},r.handleSubmit=function(){var _=r.state,e=_.date,t=_.details,n=_.num;if(console.log(e,t,n),""===t||""===n)return m.b.error("\u8bf7\u8f93\u5165"),void(""===t?r.refDetails.current.focus():""===n&&r.refNum.current.focus());var a=localStorage.getItem(r.props.storeKey);try{a=JSON.parse(a)}catch(s){a=[]}Array.isArray(a)||(a=[]),a.push("".concat(e.getMonth()+1,".").concat(e.getDate(),"@").concat(t,"@").concat(n)),localStorage.setItem(r.props.storeKey,JSON.stringify(a)),m.b.success({duration:2,maxCount:3,rtl:!0,content:"\u5f55\u5165\u6210\u529f",onClick:function(){return setTimeout((function(){return m.b.destroy()}))}}),r.setState({details:"",num:""}),r.refDetails.current.focus()},r.state={date:new Date,details:"",num:""},r.refDetails=n.a.createRef(),r.refNum=n.a.createRef(),r}return Object(u.a)(t,[{key:"render",value:function(){var _=this.state,e=_.date,t=_.details,r=_.num;return Object(x.jsxs)("div",{className:"Entering",children:[Object(x.jsxs)(p.a,{gutter:24,style:{marginTop:"12px"},align:"middle",children:[Object(x.jsx)(D.a,{span:8,children:Object(x.jsx)("h3",{children:"\u65e5\u671f"})}),Object(x.jsx)(D.a,{span:16,children:Object(x.jsx)(h.a,{value:B()(e),onChange:this.handleDatePickerChange})})]}),Object(x.jsxs)(p.a,{gutter:24,style:{marginTop:"24px",marginBottom:"24px"},align:"middle",children:[Object(x.jsx)(D.a,{span:8,children:Object(x.jsx)("h3",{children:"\u91d1\u989d"})}),Object(x.jsx)(D.a,{span:16,children:Object(x.jsx)(P.a,{ref:this.refNum,onChange:this.handleInput("num"),value:r,onPressEnter:this.onPressEnter,autoFocus:!0})})]}),Object(x.jsxs)(p.a,{gutter:24,align:"middle",children:[Object(x.jsx)(D.a,{span:8,children:Object(x.jsx)("h3",{children:"\u8be6\u60c5"})}),Object(x.jsx)(D.a,{span:16,children:Object(x.jsx)(j.a,{ref:this.refDetails,onChange:this.handleInput("details"),value:t,onPressEnter:this.handleSubmit})})]}),Object(x.jsx)(p.a,{gutter:24,align:"middle",justify:"center",style:{marginTop:"24px"},children:Object(x.jsx)(M.a,{type:"primary",onClick:this.handleSubmit,children:"\u5f55\u5165"})})]})}}]),t}(n.a.PureComponent),K=c.b.TabPane,U=function(_){Object(E.a)(t,_);var e=Object(d.a)(t);function t(_){var r;return Object(o.a)(this,t),(r=e.call(this,_)).onChange=function(_){"2"===_&&r.refBill.current&&r.refBill.current.update()},r.refBill=n.a.createRef(),r}return Object(u.a)(t,[{key:"render",value:function(){return Object(x.jsx)("div",{style:this.props.style,children:Object(x.jsxs)(c.b,{defaultActiveKey:"1",centered:!0,onChange:this.onChange,children:[Object(x.jsx)(K,{title:"\u5f55\u5165",children:Object(x.jsx)(I,{storeKey:this.props.storeKey})},"1"),Object(x.jsx)(K,{title:"\u8d26\u672c",children:Object(x.jsx)(O.a,{storeKey:this.props.storeKey,ref:this.refBill})},"2")]})})}}]),t}(n.a.PureComponent);var W=function(){var _=[{key:"home",title:"\u603b\u4f53",renderComp:function(){return Object(x.jsx)(U,{})},icon:Object(x.jsx)(l.a,{})},{key:"home2",title:"\u6512\u94b1",enderComp:function(){return Object(x.jsx)(U,{})},icon:Object(x.jsx)(l.a,{})}],e=Object(r.useState)("home"),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)(U,{storeKey:"MBD",style:{display:"home"==n?"block":"none"}}),Object(x.jsx)(U,{storeKey:"ACD",style:{display:"home2"==n?"block":"none"}}),Object(x.jsx)(c.a,{style:{position:"fixed",width:"100%",bottom:0},activeKey:n,onChange:a,children:_.map((function(_){return Object(x.jsx)(c.a.Item,{icon:_.icon,title:_.title},_.key)}))})]})},f=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,338)).then((function(e){var t=e.getCLS,r=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;t(_),r(_),n(_),a(_),s(_)}))};s.a.render(Object(x.jsx)(W,{}),document.getElementById("root")),f()}},[[325,1,2]]]);
//# sourceMappingURL=main.85c9b6b9.chunk.js.map