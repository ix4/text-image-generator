(function(t){function e(e){for(var a,o,l=e[0],s=e[1],u=e[2],c=0,d=[];c<l.length;c++)o=l[c],i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},1466:function(t,e,n){},"19b8":function(t,e,n){"use strict";var a=n("1466"),i=n.n(a);i.a},"24d3":function(t,e,n){},2839:function(t,e,n){},"4e98":function(t,e,n){"use strict";var a=n("e25a"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("AppHeader",{attrs:{text:"Text Image Generator"}}),n("AppInput",{attrs:{labelText:"text",inputType:"text",value:t.text},on:{input:function(e){t.text=e}}}),n("AppDatalist",{attrs:{labelText:"font",datalist:t.fonts,value:t.font},on:{input:function(e){t.font=e}}}),n("AppInput",{attrs:{labelText:"size",inputType:"number",value:t.size},on:{input:function(e){t.size=e}}}),n("AppSelect",{attrs:{labelText:"baseline",optionList:t.baselineList},on:{select:function(e){t.updateBaseline(e)}}}),n("AppInput",{attrs:{labelText:"foreground color",inputType:"text",value:t.foregroundColor},on:{input:function(e){t.foregroundColor=e}}}),n("AppInput",{attrs:{labelText:"background color",inputType:"text",value:t.backgroundColor},on:{input:function(e){t.backgroundColor=e}}}),n("AppInput",{attrs:{labelText:"height",inputType:"number",value:t.height},on:{input:function(e){t.height=e}}}),n("AppInput",{attrs:{labelText:"width",inputType:"number",value:t.width},on:{input:function(e){t.width=e}}}),n("AppSelect",{attrs:{labelText:"size",optionList:t.sizeList},on:{select:function(e){t.updateSize(e)}}}),n("AppInput",{attrs:{labelText:"rotate",inputType:"number",value:t.angle},on:{input:function(e){t.angle=e}}}),n("AppInput",{attrs:{labelText:"transparent",inputType:"checkbox",value:t.isTransparent},on:{change:function(e){t.isTransparent=e}}}),n("AppAnchor",{attrs:{href:t.dataURL,download:"image.png",text:"download"}}),n("AppCanvas",{attrs:{height:parseInt(t.height),width:parseInt(t.width),foregroundColor:t.foregroundColor,backgroundColor:t.backgroundColor,text:t.text,size:parseInt(t.size),font:t.font,baseline:t.baseline,angle:parseInt(t.angle),isTransparent:t.isTransparent},on:{updated:function(e){t.updateDataURL(e)}}})],1),n("hr"),n("a",{attrs:{href:"https://github.com/sakihet/text-image-generator",target:"_blank"}},[t._v("github")]),n("p",[t._v("version: "+t._s(t.version))])])},r=[],o=(n("7f7f"),n("e814")),l=n.n(o),s=(n("7514"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"cell form-label"},[n("label",{attrs:{for:t.labelText}},[t._v("\n      "+t._s(t.labelText)+"\n    ")])]),n("div",{staticClass:"cell form-input"},[n("a",{staticClass:"button",attrs:{href:t.href,download:t.download}},[t._v("\n      "+t._s(t.text)+"\n    ")])])])}),u=[],p={name:"AppInput",props:{labelText:String,text:String,href:String,download:String}},c=p,d=(n("a3f9"),n("2877")),f=Object(d["a"])(c,s,u,!1,null,"2e8674aa",null),h=f.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[t._m(0),n("div",{staticClass:"cell form-input"},[n("button",{on:{click:t.onClick}},[t._v("\n      "+t._s(t.text)+"\n    ")])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell form-label"},[n("label")])}],v={name:"AppButton",props:{text:String,onClick:{type:Function,required:!1}}},m=v,x=(n("58eb"),Object(d["a"])(m,g,b,!1,null,"5ca6a68c",null)),_=x.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{attrs:{id:"cv",height:t.height,width:t.width}}),n("div",{attrs:{hidden:""}},[t._v("\n    "+t._s(t.backgroundColor)+"\n    "+t._s(t.foregroundColor)+"\n    "+t._s(t.text)+"\n    "+t._s(t.size)+"\n    "+t._s(t.font)+"\n    "+t._s(t.baseline)+"\n    "+t._s(t.isTransparent)+"\n    "+t._s(t.angle)+"\n  ")])])},C=[],w=(n("c5f6"),{name:"AppCanvas",props:{height:Number,width:Number,foregroundColor:String,backgroundColor:String,text:String,size:Number,font:String,baseline:String,angle:Number,isTransparent:Boolean},mounted:function(){this.draw(),this.emitDataURL()},methods:{draw:function(){var t=document.getElementById("cv"),e=t.getContext("2d");e.clearRect(0,0,this.width,this.height),e.font=this.size+"px "+this.font,this.isTransparent?e.clearRect(0,0,this.width,this.height):(e.fillStyle=this.backgroundColor,e.fillRect(0,0,this.width,this.height)),e.fillStyle=this.foregroundColor,e.textAlign="center",e.textBaseline=this.baseline,e.save(),e.translate(this.width/2,this.height/2),e.rotate(this.angle*Math.PI/180),e.fillText(this.text,0,0),e.restore()},emitDataURL:function(){var t=document.getElementById("cv").toDataURL("image/png");this.$emit("updated",t)}},updated:function(){this.draw(),this.emitDataURL()}}),y=w,A=(n("4e98"),Object(d["a"])(y,T,C,!1,null,"d9656e24",null)),S=A.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"cell form-label"},[n("label",{attrs:{for:t.labelText}},[t._v("\n      "+t._s(t.labelText)+"\n    ")])]),n("div",{staticClass:"cell form-input"},[n("input",{attrs:{list:"fonts"},on:{input:function(e){t.$emit("input",e.target.value)}}}),n("datalist",{attrs:{id:"fonts"}},t._l(t.datalist,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})))])])},I=[],L={name:"AppDatalist",props:{labelText:String,inputType:String,value:String,datalist:Array}},O=L,j=(n("58ec"),Object(d["a"])(O,k,I,!1,null,"da76e158",null)),z=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.text))])])},R=[],E={name:"AppHeader",props:{text:String}},P=E,B=Object(d["a"])(P,$,R,!1,null,"62b35806",null),D=B.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"cell form-label"},[n("label",{attrs:{for:t.labelText}},[t._v("\n      "+t._s(t.labelText)+"\n    ")])]),n("div",{staticClass:"cell form-input"},[n("input",{attrs:{id:t.labelText,type:t.inputType},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)},change:function(e){t.$emit("change",e.target.checked)}}})])])},M=[],N={name:"AppInput",props:{labelText:String,inputType:String,value:[String,Number,Boolean]}},H=N,J=(n("19b8"),Object(d["a"])(H,U,M,!1,null,"7a5e529a",null)),q=J.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"cell form-label"},[n("label",{attrs:{for:t.labelText}},[t._v("\n      "+t._s(t.labelText)+"\n    ")])]),n("div",{staticClass:"cell form-input"},[n("select",{on:{change:function(e){t.$emit("select",e.target.value)}}},[n("option",{attrs:{selected:""}},[t._v("-")]),t._l(t.optionList,(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])])},G=[],K={name:"AppSelect",props:{labelText:String,optionList:Array}},Q=K,V=(n("c3ee"),Object(d["a"])(Q,F,G,!1,null,"2c504d31",null)),W=V.exports,X=n("9224"),Y={name:"app",components:{AppAnchor:h,AppButton:_,AppCanvas:S,AppDatalist:z,AppHeader:D,AppInput:q,AppSelect:W},data:function(){return{text:"hello.",size:64,font:"sans-serif",baseline:"middle",foregroundColor:"#000000",backgroundColor:"#ffffff",height:256,width:256,angle:0,fonts:["arial","verdana","tahoma","georgia","times new roman","courier new","andale mono"],isTransparent:!1,version:X["a"],dataURL:"",selectedSizeId:null,sizeList:[{id:1,name:"favicon (32 x 32)",height:32,width:32},{id:2,name:"128 x 128",height:128,width:128},{id:3,name:"256 x 256",height:256,width:256}],baselineList:[{id:1,name:"top"},{id:2,name:"hanging"},{id:3,name:"middle"},{id:4,name:"alphabetic"},{id:5,name:"ideographic"},{id:6,name:"bottom"}]}},methods:{updateDataURL:function(t){this.dataURL=t},updateSize:function(t){if(0<t){var e=this.sizeList.find((function(e){return e.id===l()(t)}));this.width=e.width,this.height=e.height}},updateBaseline:function(t){0<t&&(this.baseline=this.baselineList.find((function(e){return e.id===l()(t)})).name)}}},Z=Y,tt=(n("034f"),Object(d["a"])(Z,i,r,!1,null,null,null)),et=tt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(et)}}).$mount("#app")},"58eb":function(t,e,n){"use strict";var a=n("60b3"),i=n.n(a);i.a},"58ec":function(t,e,n){"use strict";var a=n("2839"),i=n.n(a);i.a},"60b3":function(t,e,n){},"64a9":function(t,e,n){},9224:function(t){t.exports={a:"0.1.1"}},a0c8:function(t,e,n){},a3f9:function(t,e,n){"use strict";var a=n("a0c8"),i=n.n(a);i.a},c3ee:function(t,e,n){"use strict";var a=n("24d3"),i=n.n(a);i.a},e25a:function(t,e,n){}});
//# sourceMappingURL=app.f474b364.js.map