(this["webpackJsonpmybill-web"]=this["webpackJsonpmybill-web"]||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(23),i=n.n(r),s=(n(134),n(135),n(220)),l=n(75),o=n(76),u=n(97),d=n(91),j=n(126),h=n(219),b=n(216),f=n(217),O=n(41),m=n(222),p=n(17),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).update=function(){var e=a._getData();a.setState({data:e})},a.handleCopy=function(){var e=document.createElement("input");e.value=a._getData().map((function(e){return'"'.concat(e,'"')})).join(","),document.body.appendChild(e),e.select(),document.execCommand("Copy"),document.body.removeChild(e),j.b.success({duration:2,maxCount:3,rtl:!0,content:"\u590d\u5236\u6210\u529f",onClick:function(){return setTimeout((function(){return j.b.destroy()}))}})},a.clearAll=function(){a.setState({isModalVisible:!0})},a.handleOk=function(){localStorage.setItem("MBD",""),a.close()},a.close=function(){return a.setState({isModalVisible:!1})},a.state={data:[],isModalVisible:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.update()}},{key:"_getData",value:function(){var e=localStorage.getItem("MBD");try{e=JSON.parse(e).reverse()}catch(t){e=[]}return e}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.isModalVisible;return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.b,{size:"large",header:Object(p.jsxs)(b.a,{gutter:24,align:"middle",justify:"space-around",children:[Object(p.jsx)(f.a,{children:Object(p.jsx)(O.a,{type:"primary",onClick:this.clearAll,children:"\u5168\u90e8\u6e05\u7a7a"})}),Object(p.jsx)(f.a,{children:Object(p.jsx)(O.a,{type:"primary",onClick:this.handleCopy,children:"\u590d\u5236"})})]}),footer:Object(p.jsx)("div",{children:"Footer"}),dataSource:t,renderItem:function(e){return Object(p.jsx)(h.b.Item,{children:e})}}),Object(p.jsx)(m.a,{title:"Basic Modal",visible:n,onCancel:this.close,onOk:this.handleOk,children:Object(p.jsx)("p",{children:"\u786e\u5b9a\u8981\u6e05\u7a7a\u5417"})})]})}}]),n}(c.a.PureComponent),g=n(123),v=n(218),y=n(221),C=n(40),S=n.n(C),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleInput=function(e){return function(t){return a.setState(Object(g.a)({},e,t.target.value))}},a.onPressEnter=function(){a.refNum.current.focus()},a.handleDatePickerChange=function(e,t){a.setState({date:new Date(e.format())})},a.handleSubmit=function(){var e=a.state,t=e.date,n=e.details,c=e.num;if(console.log(t,n,c),""!==n&&""!==c){var r=localStorage.getItem("MBD");try{r=JSON.parse(r)}catch(i){r=[]}Array.isArray(r)||(r=[]),r.push("".concat(t.getMonth()+1,".").concat(t.getDate(),"@").concat(n,"@").concat(c)),localStorage.setItem("MBD",JSON.stringify(r)),j.b.success({duration:2,maxCount:3,rtl:!0,content:"\u5f55\u5165\u6210\u529f",onClick:function(){return setTimeout((function(){return j.b.destroy()}))}}),a.setState({details:"",num:""}),a.refDetails.current.focus()}else j.b.error("\u8bf7\u8f93\u5165")},a.state={date:new Date,details:"",num:""},a.refDetails=c.a.createRef(),a.refNum=c.a.createRef(),a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.date,n=e.details,a=e.num;return Object(p.jsxs)("div",{className:"Entering",children:[Object(p.jsxs)(b.a,{gutter:24,align:"middle",children:[Object(p.jsx)(f.a,{span:8,children:Object(p.jsx)("h3",{children:"\u65e5\u671f"})}),Object(p.jsx)(f.a,{span:16,children:Object(p.jsx)(v.a,{value:S()(t),onChange:this.handleDatePickerChange})})]}),Object(p.jsxs)(b.a,{gutter:24,align:"middle",children:[Object(p.jsx)(f.a,{span:8,children:Object(p.jsx)("h3",{children:"\u8be6\u60c5"})}),Object(p.jsx)(f.a,{span:16,children:Object(p.jsx)(y.a,{ref:this.refDetails,onChange:this.handleInput("details"),autoFocus:!0,value:n,onPressEnter:this.onPressEnter})})]}),Object(p.jsxs)(b.a,{gutter:24,align:"middle",children:[Object(p.jsx)(f.a,{span:8,children:Object(p.jsx)("h3",{children:"\u91d1\u989d"})}),Object(p.jsx)(f.a,{span:16,children:Object(p.jsx)(y.a,{ref:this.refNum,onChange:this.handleInput("num"),value:a,onPressEnter:this.handleSubmit})})]}),Object(p.jsx)(b.a,{gutter:24,align:"middle",justify:"center",style:{marginTop:"10px"},children:Object(p.jsx)(O.a,{type:"primary",onClick:this.handleSubmit,children:"\u5f55\u5165"})})]})}}]),n}(c.a.PureComponent),k=s.a.TabPane;var I=function(){var e=c.a.createRef();return Object(p.jsx)("div",{children:Object(p.jsxs)(s.a,{defaultActiveKey:"1",centered:!0,onChange:function(t){"2"===t&&e.current&&e.current.update()},children:[Object(p.jsx)(k,{tab:"\u5f55\u5165",children:Object(p.jsx)(D,{})},"1"),Object(p.jsx)(k,{tab:"\u8d26\u672c",children:Object(p.jsx)(x,{ref:e})},"2")]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,223)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(I,{}),document.getElementById("root")),M()}},[[212,1,2]]]);
//# sourceMappingURL=main.8522e43f.chunk.js.map