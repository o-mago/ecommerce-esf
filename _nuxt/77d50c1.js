(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5,7,10],{267:function(t,e,n){"use strict";var r=n(270);e.a=r.a},278:function(t,e,n){t.exports=n.p+"img/logo-esf.845e5d7.png"},281:function(t,e,n){t.exports=n.p+"img/boleto.95cb762.svg"},287:function(t,e,n){t.exports=n.p+"img/credit-card.66e7a81.svg"},292:function(t,e,n){"use strict";n.r(e);var r={props:{boleto_url:{type:String,default:""}}},o=n(67),l=n(142),c=n.n(l),d=n(367),v=n(270),h=n(579),m=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"py-5 px-5",attrs:{elevation:"2"}},[r("v-img",{attrs:{contain:"","aspect-ratio":"2",src:n(278)}}),t._v(" "),r("div",{staticClass:"my-10"},[r("h1",{staticClass:"font-sans"},[t._v("Doação cadastrada com sucesso")]),t._v(" "),""!==t.boleto_url?r("h1",{staticClass:"font-sans inline-block"},[t._v("\n        Link para o boleto:  \n        "),r("v-btn",{attrs:{icon:"",href:t.boleto_url,target:"_blank"}},[r("v-img",{attrs:{contain:"","max-width":"40",src:n(281)}})],1)],1):t._e(),t._v(" "),r("h1",{staticClass:"font-sans"},[t._v("Em caso de dúvidas contate:")]),t._v(" "),r("h1",{staticClass:"font-sans text-green-600"},[t._v("financeiro.jf@esf-brasil.org")])])],1),t._v(" "),""===t.boleto_url?r("v-alert",{attrs:{type:"success"}},[t._v("Doação confirmada")]):t._e(),t._v(" "),""!==t.boleto_url?r("v-alert",{attrs:{type:"success"}},[t._v("A doação será confirmada após o pagamento")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a,VBtn:v.a,VCard:h.a,VImg:m.a})},293:function(t,e,n){"use strict";n.r(e);var r={},o=n(67),l=n(142),c=n.n(l),d=n(138),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("v-progress-circular",{attrs:{size:80,color:"#FFFFFF",indeterminate:""}})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VProgressCircular:d.a})},296:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("1c8f4490",content,!0,{sourceMap:!1})},297:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{\n  background:rgba(0,0,0,.12)\n}\n\n.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{\n  background:hsla(0,0%,100%,.12)\n}\n\n.v-sheet.v-alert{\n  border-radius:4px\n}\n\n.v-sheet.v-alert:not(.v-sheet--outlined){\n  box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)\n}\n\n.v-sheet.v-alert.v-sheet--shaped{\n  border-radius:24px 4px\n}\n\n.v-alert{\n  display:block;\n  font-size:16px;\n  margin-bottom:16px;\n  padding:16px;\n  position:relative;\n  transition:.3s cubic-bezier(.25,.8,.5,1)\n}\n\n.v-alert:not(.v-sheet--tile){\n  border-radius:4px\n}\n\n.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{\n  margin-right:16px\n}\n\n.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{\n  margin-left:16px\n}\n\n.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{\n  margin-right:0\n}\n\n.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{\n  margin-left:0\n}\n\n.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{\n  margin-right:0\n}\n\n.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{\n  margin-left:0\n}\n\n.v-alert__border{\n  border-style:solid;\n  border-width:4px;\n  content:"";\n  position:absolute\n}\n\n.v-alert__border:not(.v-alert__border--has-color){\n  opacity:.26\n}\n\n.v-alert__border--left,.v-alert__border--right{\n  bottom:0;\n  top:0\n}\n\n.v-alert__border--bottom,.v-alert__border--top{\n  left:0;\n  right:0\n}\n\n.v-alert__border--bottom{\n  border-bottom-left-radius:inherit;\n  border-bottom-right-radius:inherit;\n  bottom:0\n}\n\n.v-application--is-ltr .v-alert__border--left{\n  border-top-left-radius:inherit;\n  border-bottom-left-radius:inherit;\n  left:0\n}\n\n.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{\n  border-top-right-radius:inherit;\n  border-bottom-right-radius:inherit;\n  right:0\n}\n\n.v-application--is-rtl .v-alert__border--right{\n  border-top-left-radius:inherit;\n  border-bottom-left-radius:inherit;\n  left:0\n}\n\n.v-alert__border--top{\n  border-top-left-radius:inherit;\n  border-top-right-radius:inherit;\n  top:0\n}\n\n.v-alert__content{\n  flex:1 1 auto\n}\n\n.v-application--is-ltr .v-alert__dismissible{\n  margin:-16px -8px -16px 8px\n}\n\n.v-application--is-rtl .v-alert__dismissible{\n  margin:-16px 8px -16px -8px\n}\n\n.v-alert__icon{\n  align-self:flex-start;\n  border-radius:50%;\n  height:24px;\n  min-width:24px;\n  position:relative\n}\n\n.v-application--is-ltr .v-alert__icon{\n  margin-right:16px\n}\n\n.v-application--is-rtl .v-alert__icon{\n  margin-left:16px\n}\n\n.v-alert__icon.v-icon{\n  font-size:24px\n}\n\n.v-alert__wrapper{\n  align-items:center;\n  border-radius:inherit;\n  display:flex\n}\n\n.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{\n  margin-left:8px\n}\n\n.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{\n  margin-right:8px\n}\n\n.v-alert--dense{\n  padding-top:8px;\n  padding-bottom:8px\n}\n\n.v-alert--dense .v-alert__border{\n  border-width:medium\n}\n\n.v-alert--outlined{\n  background:transparent!important;\n  border:thin solid!important\n}\n\n.v-alert--outlined .v-alert__icon{\n  color:inherit!important\n}\n\n.v-alert--prominent .v-alert__icon{\n  align-self:center;\n  height:48px;\n  min-width:48px\n}\n\n.v-alert--prominent .v-alert__icon.v-icon{\n  font-size:32px\n}\n\n.v-alert--prominent .v-alert__icon.v-icon:after{\n  background:currentColor!important;\n  border-radius:50%;\n  bottom:0;\n  content:"";\n  left:0;\n  opacity:.16;\n  position:absolute;\n  right:0;\n  top:0\n}\n\n.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{\n  transform:scale(1)\n}\n\n.v-alert--text{\n  background:transparent!important\n}\n\n.v-alert--text:before{\n  background-color:currentColor;\n  border-radius:inherit;\n  bottom:0;\n  content:"";\n  left:0;\n  opacity:.12;\n  position:absolute;\n  pointer-events:none;\n  right:0;\n  top:0\n}',""]),t.exports=r},298:function(t,e,n){"use strict";n.r(e);var r={},o=n(67),l=n(142),c=n.n(l),d=n(579),v=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"py-5 px-5",attrs:{elevation:"2"}},[r("v-img",{attrs:{contain:"","aspect-ratio":"2",src:n(278)}}),t._v(" "),r("div",{staticClass:"my-10"},[r("h1",{staticClass:"font-sans"},[t._v("Nenhuma doação cadastrada")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VImg:v.a})},308:function(t,e){},309:function(t,e){},311:function(t,e){},312:function(t,e){},314:function(t,e){},315:function(t,e){},316:function(t,e){},317:function(t,e){},318:function(t,e){},319:function(t,e){},320:function(t,e){},322:function(t,e){},324:function(t,e){},325:function(t,e){},326:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6e4c1340",content,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";n(326)},363:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".centered-input input{\n  text-align:center;\n  font-size:1.125rem;\n  line-height:1.75rem\n}",""]),t.exports=r},364:function(t,e,n){"use strict";n.r(e);n(32),n(53),n(288);var r=n(428),o={data:function(){return{paymentData:null,price:0,money:{decimal:",",thousands:".",prefix:"R$ ",suffix:"",precision:2,masked:!1}}},props:{callback:{type:Function,default:function(){return function(){}}}},computed:{rawPrice:function(){return parseInt(this.price.substring(2).replace(",",""))}},methods:{getPaymentIcon:function(t){return{credit_card:"../assets/images/credit-card.svg",boleto:"../assets/images/boleto.svg"}[t]},callCheckout:function(){if(!(this.rawPrice<=0)){var t=this,e=new PagarMeCheckout.Checkout({api_key:"ak_test_da9EBspLj2XskyrSasulLsi1q8PVuc",encryption_key:"ek_test_74qy492ku6R0gb1bJk5aQNoSTlJKgK",success:function(data){t.callback(data,t.rawPrice,null)},error:function(e){t.callback(null,t.rawPrice,e)},close:function(){}}),n=new Date;n.setDate(n.getDate()+5);var r=n.getDate()+"/"+(n.getMonth()+1)+"/"+n.getFullYear();e.open({amount:this.rawPrice,customerData:"true",paymentMethods:"credit_card,boleto",paymentButtonText:"Doar",boletoExpirationDate:r,createToken:"false",uiColor:"#2aa879",headerText:"Valor da doação: {price_info}",items:[{id:"1",title:"Doação Pontual",unit_price:this.rawPrice,quantity:1,tangible:"false"}]})}}},directives:{money:r.VMoney}},l=(n(362),n(67)),c=n(142),d=n.n(c),v=n(270),h=n(579),m=n(585),f=n(580),_=n(581),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"py-5 px-5",attrs:{elevation:"2"}},[r("v-img",{attrs:{contain:"","aspect-ratio":"2",src:n(278)}}),t._v(" "),r("div",{staticClass:"my-5 inline-block w-6/12"},[r("h1",{staticClass:"font-sans mb-5"},[t._v("Valor da doação")]),t._v(" "),r("v-text-field",{directives:[{name:"money",rawName:"v-money",value:t.money,expression:"money"}],staticClass:"text-white centered-input text-xl",attrs:{"background-color":"#424242",solo:"",dark:"","text-center":""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}},[t._v(t._s(t.price))])],1),t._v(" "),r("div",[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#2aa879"},on:{click:function(e){return t.callCheckout()}}},[t._v("\n      Preencher dados\n    ")])],1),t._v(" "),r("div",{staticClass:"mt-2 text-xs"},[r("p",[t._v("Formas de pagamento:")]),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-img",{staticClass:"mt-6 mx-2",attrs:{contain:"","max-width":"40",src:n(287)}}),t._v(" "),r("v-img",{staticClass:"mt-6 mx-2",attrs:{contain:"","max-width":"40",src:n(281)}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VImg:m.a,VRow:f.a,VTextField:_.a})},367:function(t,e,n){"use strict";n(18),n(11),n(19),n(25),n(17),n(26);var r=n(2),o=(n(45),n(296),n(143)),l=n(267),c=n(268),d=n(144),v=n(90),h=n(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=n(41),f=n(9);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(m.a)(o.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(r.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},583:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(15),l=(n(24),n(18),n(11),n(19),n(25),n(17),n(26),n(77),n(288)),c=n.n(l),d=n(364),v=n(292),h=n(298),m=n(293);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={components:{SingleTransactionCard:d.default,FinishTransaction:v.default,Loader:m.default,EmptyState:h.default},data:function(){return{client:null,plans:null,paymentData:null,loading:!0,status:null,error:null,boleto_url:""}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://assets.pagar.me/checkout/1.1.0/checkout.js"),document.head.appendChild(t)},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.client.connect({api_key:"ak_test_da9EBspLj2XskyrSasulLsi1q8PVuc"});case 2:t.client=e.sent,t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},methods:{endTransaction:function(data,t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,dd,l,c,d,v,h,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((o=new Date).setDate(o.getDate()+5),dd=o.getDate(),l=o.getMonth()+1,c=o.getFullYear(),dd+"/"+l+"/"+c,data.customer.external_id=""+n.generateHash(),data.customer.country="br",d=null,11===data.customer.document_number.length?(d="cpf",data.customer.type="individual"):(d="cnpj",data.customer.type="corporation"),data.customer.documents=[{type:d,number:data.customer.document_number}],data.customer.phone_numbers=["+55"+data.customer.phone.ddd+data.customer.phone.number],data.billing={},data.billing.address=data.customer.address,data.billing.name=data.customer.name,data.billing.address.country="br",data.boleto_expiration_date=o,delete data.customer.address,delete data.customer.document_number,delete data.customer.phone,""===data.billing.address.complementary&&delete data.billing.address.complementary,data.items=[{id:"1",title:"Doação Pontual",unit_price:t,quantity:1,tangible:"false"}],!e){r.next=26;break}return n.error=null==e||null===(v=e.response)||void 0===v?void 0:v.errors[0].message,n.status="error",r.abrupt("return");case 26:return r.prev=26,r.next=29,n.client.transactions.create(_({},data));case 29:"refused"===(h=r.sent).status?(n.error="Problema na transação: "+h.refuse_reason,n.status="error"):(n.status="ok",null!=h&&h.boleto_url&&(n.boleto_url=h.boleto_url,window.open(h.boleto_url,"_blank"))),r.next=37;break;case 33:r.prev=33,r.t0=r.catch(26),n.error=null===r.t0||void 0===r.t0||null===(m=r.t0.response)||void 0===m?void 0:m.errors[0].message,n.status="error";case 37:case"end":return r.stop()}}),r,null,[[26,33]])})))()},generateHash:function(){var i,t=0;if(0===this.length)return t;for(i=0;i<this.length;i++)t=(t<<5)-t+this.charCodeAt(i),t|=0;return t}}},y=n(67),w=n(142),k=n.n(w),C=n(367),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"max-w-full"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.status||"ok"!==t.status,expression:"!status || status !== 'ok'"}],staticClass:"lg:w-500"},[n("single-transaction-card",{staticClass:"mx-4 my-4 px-8 flex-grow-0 overflow-hidden",attrs:{callback:t.endTransaction}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.status&&"error"===t.status,expression:"status && status === 'error'"}]},[n("v-alert",{attrs:{type:"error"}},[t._v(t._s(this.error))])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.status&&"ok"===t.status,expression:"status && status === 'ok'"}],staticClass:"lg:w-500"},[n("finish-transaction",{attrs:{boleto_url:t.boleto_url}})],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[n("loader")],1)])}),[],!1,null,null,null);e.default=component.exports;k()(component,{SingleTransactionCard:n(364).default,FinishTransaction:n(292).default,Loader:n(293).default}),k()(component,{VAlert:C.a})}}]);