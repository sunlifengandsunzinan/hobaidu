(function(t){function e(e){for(var o,a,l=e[0],c=e[1],s=e[2],f=0,d=[];f<l.length;f++)a=l[f],i[a]&&d.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3337:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("fb37"),n("f763"),n("4453");var o=n("5605"),i=(n("dac5"),n("6e26"),n("9604"),n("df67"),n("6e6d")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],l=(n("7c55"),n("17cc")),c={},s=Object(l["a"])(c,r,a,!1,null,null,null),u=s.exports,f=n("3bc2");n("bb51");i["a"].use(f["a"]);var d=new f["a"]({routes:[{path:"/",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}}]}),p=n("e1bc");Object(p["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=n("a6a6"),v=(n("b9f8"),n("4263")),g=(n("c51c"),n("de8e")),w=n("4878"),m=n.n(w);i["a"].config.productionTip=!1,i["a"].use(h["d"]),i["a"].use(h["a"]),i["a"].use(h["b"]),i["a"].use(h["c"]),i["a"].use(h["f"]),i["a"].use(h["e"]),i["a"].use(v["a"]),i["a"].use(g["a"]),i["a"].use(m.a,{ak:"hNT4WeW0AGvh2GuzuO92OfM6hCW25HhX"}),window.hassMap={get hass(){return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,n){var o,i,r,a,l,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,top.window.hassConnection;case 2:if(o=t.sent,null!=o){t.next=6;break}return n(new Error("请在Home Assistant中使用")),t.abrupt("return");case 6:i=o.conn,r=[],a=[],l=i._ent.state,Object.keys(l).forEach(function(t){var e=l[t];if(0===t.indexOf("zone.")){var n=e.attributes;n.latitude&&n.longitude&&r.push({id:e.entity_id,title:e.attributes.friendly_name,entity:e})}else if(0===t.indexOf("device_tracker.")){var o=e.attributes;o.latitude&&o.longitude&&a.push({id:e.entity_id,title:o.friendly_name,entity:e})}}),c=Object.create(null),c.zoneList=r,c.deviceList=a,e(c);case 15:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}())}},new i["a"]({router:d,render:function(t){return t(u)}}).$mount("#app")},7237:function(t,e,n){"use strict";var o=n("f8ca"),i=n.n(o);i.a},"7c55":function(t,e,n){"use strict";var o=n("3337"),i=n.n(o);i.a},bb51:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100vh","z-index":"1000",position:"fixed",top:"0",left:"0",width:"100%"}},[n("baidu-map",{staticStyle:{height:"100vh",position:"fixed",top:"0",left:"0",width:"100%"},attrs:{center:t.center,zoom:t.zoom,"scroll-wheel-zoom":!0},on:{ready:t.ready}},[n("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),n("bm-map-type",{attrs:{"map-types":["BMAP_NORMAL_MAP","BMAP_HYBRID_MAP"],anchor:"BMAP_ANCHOR_TOP_LEFT"}}),n("bm-control",[n("div",{staticStyle:{padding:"10px","margin-top":"30px"}},[n("mu-button",{on:{click:function(e){t.open=!0}}},[t._v("选择监测设备")]),n("mu-bottom-sheet",{attrs:{open:t.open},on:{"update:open":function(e){t.open=e}}},[n("mu-list",[n("mu-sub-header",[t._v("选择监测设备")]),t._l(t.allList,function(e,o){return n("mu-list-item",{key:o,attrs:{button:""},on:{click:function(n){return t.selectDevice(e)}}},[n("mu-list-item-action",[n("mu-icon",{attrs:{value:"grade",color:"orange"}})],1),n("mu-list-item-title",[t._v(t._s(e.title))])],1)})],2)],1)],1)]),t._l(t.zoneList,function(e,o){return[n("bm-circle",{key:o,attrs:{center:e.location,radius:100,"stroke-color":"orange","stroke-opacity":.5,"stroke-weight":2}}),n("my-overlay",{key:"zone"+o,attrs:{position:e.location,animation:"BMAP_ANIMATION_BOUNCE"}},[n("b",[t._v(t._s(e.title))]),n("br"),n("ul",{staticClass:"list-info"},[n("li",[t._v("\n            经度：\n            "),n("span",[t._v(t._s(e.location.lng))])]),n("li",[t._v("\n            纬度：\n            "),n("span",[t._v(t._s(e.location.lat))])])])])]}),t._l(t.deviceList,function(e,o){return[n("bm-circle",{key:"device-round"+o,attrs:{center:e.location,radius:30,"stroke-color":"blue","stroke-opacity":.5,"stroke-weight":2}}),n("my-overlay",{key:"device"+o,attrs:{icon:{url:e.icon,size:{width:50,height:50},opts:{imageSize:{width:50,height:50}}},position:e.location,animation:"BMAP_ANIMATION_BOUNCE"}},[n("b",[t._v(t._s(e.title))]),n("br"),n("ul",{staticClass:"list-info"},[n("li",[t._v("\n            经度：\n            "),n("span",[t._v(t._s(e.location.lng))])]),n("li",[t._v("\n            纬度：\n            "),n("span",[t._v(t._s(e.location.lat))])]),t._l(e.range,function(e,o){return n("li",{key:o},[t._v("\n            距离\n            "),n("b",{staticStyle:{color:"orange"}},[t._v(t._s(e.zone))]),n("span",[t._v(t._s(e.mi)+"米")])])})],2)])]})],2)],1)},i=[],r=(n("0eb5"),n("a4c5"),n("41c4")),a=(n("1c74"),n("f763"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bm-marker",t._b({attrs:{dragging:!1},on:{click:t.infoWindowOpen}},"bm-marker",t.$attrs,!1),[n("bm-info-window",{attrs:{show:t.show},on:{close:t.infoWindowClose,open:t.infoWindowOpen}},[t._t("default")],2)],1)}),l=[],c={data:function(){return{show:!1}},methods:{infoWindowOpen:function(){this.show=!0},infoWindowClose:function(){this.show=!1}}},s=c,u=(n("7237"),n("17cc")),f=Object(u["a"])(s,a,l,!1,null,null,null),d=f.exports,p={components:{MyOverlay:d},data:function(){return{open:!1,zoom:18,zoneList:[],deviceList:[],allList:[],center:{lng:121.848405,lat:31.739856}}},methods:{ready:function(t){var e=this,n=t.map;t.BMap;window.hassMap.hass.then(function(t){var o=[],i=[];t.zoneList.forEach(function(t){var n=t.entity.attributes;o.push({title:t.title,location:{lng:n.longitude,lat:n.latitude}}),i.push(new window.BMap.Point(n.longitude,n.latitude)),e.center={lng:n.longitude,lat:n.latitude}});var r=[];t.deviceList.forEach(function(t){var n=t.entity.attributes,o=e.getTextImage(t.title);r.push({title:t.title,location:{lng:n.longitude,lat:n.latitude},icon:n.picture||o,range:[]}),i.push(new window.BMap.Point(n.longitude,n.latitude))});var a=new window.BMap.Convertor;a.translate(i,0,5,function(t){if(0===t.status){t.points.forEach(function(t,n){n>=o.length?r[n-o.length].location={lng:t.lng,lat:t.lat}:(o[n].location={lng:t.lng,lat:t.lat},e.center={lng:t.lng,lat:t.lat})});for(var i=0,a=r;i<a.length;i++)for(var l=a[i],c=0,s=o;c<s.length;c++){var u=s[c],f=new window.BMap.Point(l.location.lng,l.location.lat),d=new window.BMap.Point(u.location.lng,u.location.lat);l.range.push({device:l.title,zone:u.title,mi:n.getDistance(f,d).toFixed(2)})}e.zoneList=o,e.deviceList=r,e.allList=[].concat(r,o),setInterval(function(){e.tick(n)},5e3)}else e.$toast.error("坐标转换出现异常！")})}).catch(function(t){e.$toast.error(t.message)})},getTextImage:function(t){if(!t)return"https://www.home-assistant.io/images/favicon-192x192.png";var e=document.createElement("canvas");e.width=50,e.height=50;var n=e.getContext("2d");return n.rect(0,0,50,50),n.fillStyle="white",n.fill(),n.save(),n.font="30px Georgia",n.textAlign="center",n.textBaseline="middle",n.strokeText(t[0],e.width/2,e.width/2),e.toDataURL("image/png")},tick:function(t){var e=this;window.hassMap.hass.then(function(n){var o=[],i=[];n.deviceList.forEach(function(t){var n=t.entity.attributes,r=e.getTextImage(t.title);o.push({title:t.title,location:{lng:n.longitude,lat:n.latitude},icon:n.picture||r,range:[]}),i.push(new window.BMap.Point(n.longitude,n.latitude))});var a=new window.BMap.Convertor;a.translate(i,0,5,function(n){if(0===n.status){n.points.forEach(function(t,e){o[e].location={lng:t.lng,lat:t.lat}});for(var i=0,a=o;i<a.length;i++){var l=a[i],c=!0,s=!1,u=void 0;try{for(var f,d=e.zoneList[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var p=f.value,h=new window.BMap.Point(l.location.lng,l.location.lat),v=new window.BMap.Point(p.location.lng,p.location.lat);l.range.push({device:l.title,zone:p.title,mi:t.getDistance(h,v).toFixed(2)})}}catch(g){s=!0,u=g}finally{try{c||null==d.return||d.return()}finally{if(s)throw u}}}e.deviceList=o,e.allList=[].concat(o,Object(r["a"])(e.zoneList))}else e.$toast.error("坐标转换出现异常！")})})},selectDevice:function(t){var e=this;this.center={lng:121.346405,lat:31.131856},this.open=!1;var n=this.$loading();setTimeout(function(){e.center=t.location,n.close()},1e3)}}},h=p,v=Object(u["a"])(h,o,i,!1,null,"01a50c8c",null);e["default"]=v.exports},f8ca:function(t,e,n){}});