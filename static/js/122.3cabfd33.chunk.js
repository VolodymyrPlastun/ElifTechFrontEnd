"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[122],{1687:function(n,e,r){r.d(e,{Dg:function(){return p},LV:function(){return u},jC:function(){return d},l8:function(){return l}});var t=r(5861),i=r(4687),a=r.n(i),s=r(1243),o=r(8867),c=r(5218);s.Z.defaults.baseURL="https://eliftech-testtask.onrender.com/";var d=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/api/products");case 3:return e=n.sent,n.abrupt("return",e.data.data.products);case 7:throw n.prev=7,n.t0=n.catch(0),c.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432:",n.t0.message),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("/api/products/sushi");case 3:return e=n.sent,n.abrupt("return",e.data.data.products);case 7:throw n.prev=7,n.t0=n.catch(0),c.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432:",n.t0.message),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.post("/api/products/order",{userData:e,selectedProducts:r});case 3:c.Am.success("Your order accepted!"),n.next=10;break;case 6:n.prev=6,n.t0=n.catch(0),(t=n.t0.response.data.message).includes("duplicate key error collection")?c.Am.success("You are already registered, your order accepted"):console.log(t);case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r();case 3:t=n.sent,e((0,o.Xp)(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}()},6981:function(n,e,r){r.d(e,{Z:function(){return on}});var t,i,a,s,o,c,d,l,u,p=r(9439),h=r(8008),x=r(4395),m=r(4554),f=r(4708),Z=r(7924),v=r(9953),j=r(3400),g=r(493),y=r(5021),b=r(6278),P=r(4663),w=r(890),k=r(4942),C=r(1413),z=r(1907),S=r(6151),A=r(2791),D=r(9434),E=r(8867),I=r(168),F=r(7133),M=r(7691),H=M.ZP.form(t||(t=(0,I.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),L=(0,M.ZP)(F.Z)(i||(i=(0,I.Z)(["\n  margin-bottom: 5px;\n"]))),U=r(5218),T=r(184),_=function(){var n=(0,A.useState)({name:"",email:"",phone:"380",address:""}),e=(0,p.Z)(n,2),r=e[0],t=e[1],i=(0,D.I0)(),a=function(n){var e=n.target,r=e.id,i=e.value;t((function(n){return(0,C.Z)((0,C.Z)({},n),{},(0,k.Z)({},r,i))}))};return(0,T.jsxs)(H,{onSubmit:function(n){n.preventDefault();var e={name:r.name,email:r.email,phone:r.phone,address:r.address};""!==e.email&&"380"!==e.phone&&""!==e.address&&""!==e.name?(i((0,E.lg)(e)),t({name:"",email:"",phone:"",address:""})):U.Am.error("Enter your data")},children:[(0,T.jsx)(L,{htmlFor:"name",children:"Name"}),(0,T.jsx)(z.Z,{type:"text",variant:"outlined",placeholder:"Enter your name",id:"name",value:r.name,onChange:a}),(0,T.jsx)(L,{htmlFor:"email",children:"Email"}),(0,T.jsx)(z.Z,{type:"text",variant:"outlined",placeholder:"Enter your email",id:"email",value:r.email,onChange:a}),(0,T.jsx)(L,{htmlFor:"phone",children:"Phone"}),(0,T.jsx)(z.Z,{type:"number",variant:"outlined",placeholder:"Enter your phone",id:"phone",value:r.phone,onChange:a}),(0,T.jsx)(L,{htmlFor:"address",children:"Address"}),(0,T.jsx)(z.Z,{type:"text",variant:"outlined",placeholder:"Enter your Address",id:"address",value:r.address,onChange:a}),(0,T.jsx)(S.Z,{sx:{marginTop:"10px"},variant:"contained",type:"submit",children:"Save my data"})]})},G=r(5370),N=r(8087),O=r(1889),Q=r(6647),R=r(9504),V=r(2363),W=r(2169),Y=r(7621),B=(0,M.ZP)(W.Z)(a||(a=(0,I.Z)(["\n  transition: transform 0.2s ease-out;\n"]))),J=(0,M.ZP)(Y.Z)(s||(s=(0,I.Z)(["\n  &:hover {\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  }\n  &:hover Img {\n    transform: scale(1.05);\n  }\n"]))),X=M.ZP.div(o||(o=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  overflow: hidden;\n"]))),q=M.ZP.div(c||(c=(0,I.Z)(["\n  display: flex;\n  align-items: center;\n"]))),K=M.ZP.p(d||(d=(0,I.Z)(["\n  color: blue;\n  font-size: 1.5rem;\n  margin: 0;\n"]))),$=function(){var n=(0,D.I0)(),e=(0,D.v9)((function(n){return n.cart})).selectedItems;return(0,T.jsx)("div",{children:(0,T.jsx)(O.ZP,{container:!0,spacing:2,children:null===e||void 0===e?void 0:e.map((function(e){return(0,T.jsx)(O.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,T.jsx)(J,{style:{height:"100%"},children:(0,T.jsxs)(X,{children:[(0,T.jsxs)(Q.Z,{children:[(0,T.jsx)(B,{component:"img",image:e.image,title:e.title}),(0,T.jsxs)(R.Z,{children:[(0,T.jsx)(w.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),(0,T.jsx)(w.Z,{variant:"body2",color:"textSecondary",component:"p",children:e.description}),(0,T.jsxs)(w.Z,{variant:"h6",component:"p",children:[e.price," UAH"]})]})]}),(0,T.jsx)(V.Z,{sx:{display:"flex",alignItems:"flex-end"},children:e.amount<1?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(S.Z,{onClick:function(){n((0,E.Rl)({id:e._id,title:e.title,description:e.description,image:e.image,price:e.price,amount:e.amount}))},variant:"contained",size:"small",color:"primary",children:"Add to cart"})," "]}):(0,T.jsxs)(q,{children:[(0,T.jsx)(S.Z,{onClick:function(){return n((0,E.QZ)(e.id))},children:(0,T.jsx)(G.Z,{})}),(0,T.jsx)(K,{children:e.amount}),(0,T.jsx)(S.Z,{onClick:function(){n((0,E.QJ)(e.id))},children:(0,T.jsx)(N.Z,{})})]})})]})})},e.id)}))})})},nn=r(1687),en=function(){var n=(0,D.I0)(),e=(0,D.v9)((function(n){return n.cart})),r=e.selectedShop,t=e.isActive,i=function(e){var r=e.target.id;n((0,E.gS)({shop:r}))};return(0,A.useEffect)((function(){"sushi"===r?(0,nn.Dg)(n,nn.l8):"pizza"===r&&(0,nn.Dg)(n,nn.jC)}),[n,r]),(0,T.jsx)(m.Z,{children:(0,T.jsx)("nav",{"aria-label":"secondary mailbox folders",children:(0,T.jsxs)(g.Z,{children:[(0,T.jsx)(y.ZP,{disablePadding:!0,children:(0,T.jsx)(b.Z,{children:(0,T.jsx)(S.Z,{disabled:t.isPizzaActive,sx:{width:"150px"},variant:"contained",onClick:i,id:"pizza",children:"Pizza"})})}),(0,T.jsx)(y.ZP,{disablePadding:!0,children:(0,T.jsx)(b.Z,{children:(0,T.jsx)(S.Z,{disabled:t.isSushiActive,sx:{width:"150px"},variant:"contained",onClick:i,id:"sushi",children:"Sushi"})})})]})})})},rn=r(7689),tn=r(1087),an=(0,M.ZP)(tn.OL)(l||(l=(0,I.Z)(["\n  text-decoration: none;\n  font-size: 1.25rem;\n  line-height: 1.6;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: inherit;\n  font-family: monospace;\n  font-weight: 700;\n\n  &."," {\n    color: darkblue;\n    text-decoration: underline;\n  }\n"])),(function(n){return n.activeclassname})),sn=(M.ZP.div(u||(u=(0,I.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 100%;\n"]))),(0,A.lazy)((function(){return r.e(152).then(r.bind(r,152))})));var on=function(n){var e=n.window,r=(0,A.useState)(!1),t=(0,p.Z)(r,2),i=t[0],a=t[1],s=(0,D.v9)((function(n){return n.cart})).formData,o=(0,rn.TH)(),c="/cart"===o.pathname?300:200,d=function(){a(!i)},l=(0,T.jsxs)("div",{children:[(0,T.jsx)(P.Z,{}),(0,T.jsx)(Z.Z,{}),(0,T.jsxs)(g.Z,{children:[(0,T.jsx)(y.ZP,{disablePadding:!0,children:(0,T.jsx)(b.Z,{children:(0,T.jsx)(an,{to:"/",activeclassname:"active",children:"Shop"})})}),(0,T.jsx)(y.ZP,{disablePadding:!0,children:(0,T.jsx)(b.Z,{children:(0,T.jsx)(an,{to:"/cart",activeclassname:"active",children:"Shopping cart"})})})]}),(0,T.jsx)(Z.Z,{}),"/cart"===o.pathname?(0,T.jsx)(_,{}):(0,T.jsx)(en,{})]}),u=void 0!==e?function(){return e().document.body}:void 0;return(0,T.jsxs)(m.Z,{sx:{display:"flex"},children:[(0,T.jsx)(f.ZP,{}),(0,T.jsx)(x.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(c,"px)")},ml:{sm:"".concat(c,"px")}},children:(0,T.jsxs)(P.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,T.jsx)(j.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:d,sx:{mr:2,display:{sm:"none"}},children:(0,T.jsx)(h.Z,{})}),(0,T.jsx)(w.Z,{variant:"h5",noWrap:!0,component:"div",children:"Good|Food"}),(0,T.jsx)(w.Z,{variant:"p",noWrap:!0,component:"div",children:s.name&&"Hello, ".concat(s.name)})]})}),(0,T.jsxs)(m.Z,{component:"nav",sx:{width:{sm:c},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,T.jsx)(v.ZP,{container:u,variant:"temporary",open:i,onClose:d,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:c}},children:l}),(0,T.jsx)(v.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:c}},open:!0,children:l})]}),(0,T.jsxs)(m.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(c,"px)")}},children:[(0,T.jsx)(P.Z,{}),"/cart"===o.pathname?(0,T.jsx)($,{}):(0,T.jsx)(sn,{})]})]})}},122:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,i,a,s,o,c,d,l,u,p,h=r(4554),x=r(6151),m=r(890),f=r(6981),Z=r(2791),v=r(9434),j=r(1087),g=r(8867),y=r(1687),b=r(5218),P=r(168),w=r(2169),k=r(7621),C=r(7691),z=C.ZP.div(t||(t=(0,P.Z)(["\npadding: 20px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n"]))),S=((0,C.ZP)(w.Z)(i||(i=(0,P.Z)(["\n  transition: transform 0.2s ease-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),(0,C.ZP)(k.Z)(a||(a=(0,P.Z)(["\n  &:hover {\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  }\n"]))),C.ZP.div(s||(s=(0,P.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))),A=C.ZP.div(o||(o=(0,P.Z)(["\n  height: 100vh;\n"]))),D=(C.ZP.div(c||(c=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n"]))),C.ZP.p(d||(d=(0,P.Z)(["\n  color: blue;\n  font-size: 1.5rem;\n  margin: 0;\n"]))),C.ZP.h2(l||(l=(0,P.Z)(["\nmargin: 0;\nmargin-right: 10px;\n  color: #0288d1;\n"])))),E=C.ZP.span(u||(u=(0,P.Z)(["\n  margin-left: 10px;\n"]))),I=(C.ZP.div(p||(p=(0,P.Z)(["\ndisplay: flex;\njustify-content: space-around;\n"]))),r(184)),F=function(){var n=(0,v.I0)(),e=(0,v.v9)((function(n){return n.cart})),r=e.selectedItems,t=e.total,i=e.formData;(0,Z.useEffect)((function(){n((0,g.tf)())}),[n,r]);return(0,I.jsx)(A,{children:r.length>0?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f.Z,{}),(0,I.jsx)(z,{children:(0,I.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:[(0,I.jsxs)(D,{variant:"h4",children:["Total price: ",(0,I.jsxs)(E,{children:[t," UAH"]})]}),(0,I.jsx)(x.Z,{variant:"contained",color:"primary",onClick:function(){0!==Object.keys(i).length?((0,y.LV)(i,r),n((0,g.dN)())):b.Am.error("Please enter your data before order")},children:"Make an order"})]})})]}):(0,I.jsx)(S,{children:(0,I.jsxs)(m.Z,{style:{fontSize:"30px"},children:["Choose products ",(0,I.jsx)(j.rU,{to:"/",children:"here"})]})})})}}}]);
//# sourceMappingURL=122.3cabfd33.chunk.js.map