(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{278:function(t,n,e){t.exports=e.p+"img/logo-esf.845e5d7.png"},281:function(t,n,e){t.exports=e.p+"img/boleto.95cb762.svg"},287:function(t,n,e){t.exports=e.p+"img/credit-card.66e7a81.svg"},308:function(t,n){},309:function(t,n){},311:function(t,n){},312:function(t,n){},314:function(t,n){},315:function(t,n){},316:function(t,n){},317:function(t,n){},318:function(t,n){},319:function(t,n){},320:function(t,n){},322:function(t,n){},324:function(t,n){},325:function(t,n){},327:function(t,n,e){"use strict";e.r(n);e(46),e(288);var o={data:function(){return{paymentData:null}},props:{plan:{type:Object,default:function(){}},callback:{type:Function,default:function(){return function(){}}}},methods:{getFormatedPrice:function(){if(this.plan){var t=""+this.plan.amount,n=t.slice(-t.length-1,-2);n=n||0;var e=t.substring(t.length-2),o=parseFloat(n+"."+e);return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(o)}return""},getPaymentIcon:function(t){return{credit_card:"../assets/images/credit-card.svg",boleto:"../assets/images/boleto.svg"}[t]},callCheckout:function(){var t=this,n=new PagarMeCheckout.Checkout({encryption_key:"ek_test_74qy492ku6R0gb1bJk5aQNoSTlJKgK",success:function(data){t.callback(data,t.plan.id,null)},error:function(n){t.callback(null,null,n)},close:function(){}}),e=new Date;e.setDate(e.getDate()+5);var o=e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear(),c=this.plan.payment_methods.reduce((function(t,n){return""!==t&&(n=","+n),t+=n}),"");n.open({amount:this.plan.amount,customerData:"true",paymentMethods:c,paymentButtonText:"Doar",boletoExpirationDate:o,createToken:"false",uiColor:"#2aa879",headerText:"Valor da doação: {price_info}",items:[{id:""+this.plan.id,title:"Doação",unit_price:this.plan.amount,quantity:1,tangible:"false"}]})}}},c=e(67),r=e(142),l=e.n(r),f=e(270),m=e(579),d=e(585),v=e(580),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-card",{staticClass:"py-5 px-5",attrs:{elevation:"2"}},[o("v-img",{attrs:{contain:"","aspect-ratio":"2",src:e(278)}}),t._v(" "),o("div",{staticClass:"my-10"},[o("h1",{staticClass:"font-sans"},[t._v("Doação mensal no valor de")]),t._v(" "),o("h1",{staticClass:"font-sans text-green-600"},[t._v(t._s(t.getFormatedPrice()))])]),t._v(" "),o("div",[o("v-btn",{staticClass:"my-2",attrs:{outlined:"",color:"#2aa879"},on:{click:function(n){return t.callCheckout()}}},[t._v("\n      Preencher dados\n    ")])],1),t._v(" "),o("div",{staticClass:"mt-2 text-xs"},[o("p",[t._v("Formas de pagamento:")]),t._v(" "),o("v-row",{attrs:{justify:"center"}},[t.plan.payment_methods.includes("credit_card")?o("v-img",{staticClass:"mt-6 mx-2",attrs:{contain:"","max-width":"40",src:e(287)}}):t._e(),t._v(" "),t.plan.payment_methods.includes("boleto")?o("v-img",{staticClass:"mt-6 mx-2",attrs:{contain:"","max-width":"40",src:e(281)}}):t._e()],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:f.a,VCard:m.a,VImg:d.a,VRow:v.a})}}]);