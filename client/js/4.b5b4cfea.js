(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0565":function(t,s,e){"use strict";var a=e("16f0"),c=e.n(a);c.a},"16f0":function(t,s,e){},"8b24":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"flex flex-center"},[e("div",{staticClass:"text-h3"},[t._v("Smartphones")]),e("div",{staticClass:"q-pa-md row items-start full-width"},t._l(t.products,(function(s,a){return e("div",{key:"prod-"+a,staticClass:"col-xs-12 col-md-6 col-lg-4"},[e("q-card",{staticClass:"product-card q-pa-lg",attrs:{flat:""}},[e("img",{staticClass:"product-img",attrs:{src:s.image,alt:s.title}}),e("q-card-section",[e("div",{staticClass:"text-h4 text-center"},[t._v(t._s(s.title))]),e("div",{staticClass:"text-subtitle2 text-center"},[t._v(t._s(s.subtitle))])]),e("q-card-section",[e("div",{staticClass:"product-description"},[t._v(t._s(s.description))])]),e("q-card-section",{staticClass:"product-price-container"},[e("div",{staticClass:"text-h4 text-center product-price"},[e("span",{staticClass:"currency-symbol"},[t._v(t._s(t.currencySymbol))]),e("span",{staticClass:"price-value"},[t._v(t._s(s.price))])])]),e("q-separator",{attrs:{dark:""}}),e("q-card-actions",{attrs:{align:"center"}},[e("q-btn",{staticClass:"q-mb-md",attrs:{size:"lg",color:"primary",padding:"4px 20px",to:"/buy/"+s.id}},[t._v("Comprar")]),e("q-btn",{staticClass:"q-mb-md",attrs:{size:"lg",color:"primary",outline:"",padding:"4px 20px",to:"/item/"+s.id}},[t._v("Más Info")])],1)],1)],1)})),0)])},c=[],r=e("2563"),i={name:"PageIndex",data:function(){return{currencySymbol:this.$store.getters[r["e"]]}},computed:{products:function(){return this.$store.getters[r["h"]]}},methods:{buyProduct:function(t){console.log(t)}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://www.mercadopago.com/v2/security.js"),t.setAttribute("view","home"),document.head.appendChild(t)}},n=i,o=(e("0565"),e("2877")),l=e("9989"),d=e("f09f"),u=e("a370"),p=e("eb85"),m=e("4b7e"),v=e("9c40"),b=e("eebe"),f=e.n(b),C=Object(o["a"])(n,a,c,!1,null,null,null);s["default"]=C.exports;f()(C,"components",{QPage:l["a"],QCard:d["a"],QCardSection:u["a"],QSeparator:p["a"],QCardActions:m["a"],QBtn:v["a"]})}}]);