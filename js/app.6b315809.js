(function(e){function t(t){for(var a,o,l=t[0],s=t[1],d=t[2],u=0,g=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&g.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(g.length)g.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/ns-wandelingen/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03e5":function(e,t,n){},"3c3f":function(e,t,n){"use strict";n("ab04")},"3f4e":function(e,t,n){},"41c5":function(e,t,n){"use strict";n("4b61")},"4b61":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,i,o){var l=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])(l)}var i={name:"App",components:{}};n("baf0");i.render=r;var o=i,l=n("6c02"),s=Object(a["E"])("data-v-97093538");Object(a["s"])("data-v-97093538");var d={id:"container"},p={id:"main"},u={id:"map",ref:"map-root"},g={class:"popup",ref:"popup"};Object(a["q"])();var c=s((function(e,t,n,r,i,o){var l=Object(a["w"])("toggle-color");return Object(a["p"])(),Object(a["d"])("div",d,[Object(a["f"])("div",p,[Object(a["f"])("div",u,null,512),Object(a["D"])(Object(a["f"])("div",g,[Object(a["f"])("div",{class:"content",innerHTML:e.featureInfo},null,8,["innerHTML"])],512),[[a["B"],e.showFeatureInfo]])]),Object(a["f"])(l)])})),w=(n("b0c0"),n("5bc0"),n("a2e1")),h=n("3e6b"),m=n("5831"),f=n("0710"),y=n("6411"),b=n("5eee"),v=n("21bc"),j=n("c320"),x=n("9d47"),k=n("480c"),O=n("a2c7"),P=n("256f"),F=n("6c77"),S=n("ce2c"),N=n("83a6"),M=n("8682"),L=n("8295"),I=n("2ef1"),H="https://tile.thunderforest.com/outdoors/{z}/{x}/{y}@2x.png?apikey=7d5495f3d58a43fc8d42f962bded0cd8",T=new k["a"]({className:"ol-layer basemapLayer bw",preload:1/0,source:new I["a"]({url:H,tilePixelRatio:2,attributions:'achtergrondkaart: <a rel="noopener" target="_blank" href="https://www.openstreetmap.org">© OpenStreetMap contributors</a>'})}),z=function(e){var t=new b["a"]({controls:Object(v["a"])().extend([new j["a"],new x["a"]({units:"metric"})]),target:e,layers:[T],view:new O["a"]({zoom:8,center:Object(P["d"])([5.43,52.18])})});return t},_="red",E={Point:new F["b"]({image:new S["a"]({fill:new N["a"]({color:_}),radius:5,stroke:new M["a"]({color:"#ffffff",width:2})})}),LineString:new F["b"]({stroke:new M["a"]({color:_,lineDash:[2,6,6],width:4})}),MultiLineString:new F["b"]({stroke:new M["a"]({color:_,lineDash:[2,6,6],lineCap:"square",width:4})}),Label:new F["b"]({text:new L["a"]({offsetX:12,offsetY:-12,textAlign:"left",font:"small-caps bold  13px NS Sans,Segoe UI,Myriad,Verdana,sans-serif",overflow:!1,fill:new N["a"]({color:"#000"}),stroke:new M["a"]({color:"#fff",width:3})})})},G={getMap:z,styles:E},D=Object(a["E"])("data-v-56652aa8");Object(a["s"])("data-v-56652aa8");var B={id:"toggle-colour"},C={class:"switch"};Object(a["q"])();var A=D((function(e,t,n,r,i,o){return Object(a["p"])(),Object(a["d"])("div",B,[Object(a["f"])("label",C,[Object(a["D"])(Object(a["f"])("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.colour=t})},null,512),[[a["A"],e.colour]]),Object(a["f"])("span",{class:"slider round",title:e.colour?"Kaart grijswaardes":"Kaart kleur"},null,8,["title"])])])})),V={name:"ToggleColor",props:{},data:function(){return{colour:null}},methods:{},mounted:function(){console.log(this.hike)},watch:{colour:function(){console.log(this.colour),this.colour?document.getElementsByClassName("basemapLayer")[0].classList.remove("bw"):document.getElementsByClassName("basemapLayer")[0].classList.add("bw")}}};n("659a");V.render=A,V.__scopeId="data-v-56652aa8";var R=V,K={components:{ToggleColor:R},name:"Hikes",setup:function(){var e=Object(a["u"])(null);return Object(a["n"])((function(){})),{popup:e}},data:function(){return{geolocation:null,positionFeature:null,olMap:{},overlay:null,featureInfo:"",showFeatureInfo:!1,style:G.styles}},methods:{closePopup:function(){this.overlay.setPosition(void 0),this.showFeatureInfo=!1},labelStyleFunction:function(e,t){return this.style.Label.getText().setText(e.get("title")),[this.style[e.getGeometry().getType()],this.style.Label]},styleFunction:function(e,t){return t<50?this.labelStyleFunction(e,t):[this.style[e.getGeometry().getType()]]}},mounted:function(){var e=this,t=new m["a"]({format:new w["a"],attributions:', wandelingen: <a rel="noopener" target="_blank" href="https://www.ns.nl/dagje-uit/wandelen">© NS-Wandelingen</a>'}),n=t.getFormat().readFeatures(y,{dataProjection:"EPSG:3857"});t.addFeatures(n),this.overlay=new f["a"]({element:this.popup,autoPan:!0,autoPanAnimation:{duration:250}});var a=new h["a"]({source:t,zIndex:100,declutter:!0});this.olMap=G.getMap("map"),this.olMap.addOverlay(this.overlay),this.olMap.addLayer(a),a.setStyle(this.styleFunction),this.olMap.on("singleclick",(function(t){console.log("singleclick",t);var n=e.olMap.getFeaturesAtPixel(t.pixel),a=n.length>0?n[0]:null;if(a){var r=a.getProperties(),i=r.name;e.$router.push({name:"ns-wandeling",params:{hikeId:i}})}})),this.olMap.on("pointermove",(function(t){var n=t.coordinate,a=e.olMap.getFeaturesAtPixel(t.pixel),r=a.length>0?a[0]:null;if(!(e.olMap.getView().getResolution()<50)){if(!r)return e.showFeatureInfo=!1,void(e.featureInfo="");var i=r.getProperties(),o=i.title;if(!o)return e.showFeatureInfo=!1,void(e.featureInfo="");e.featureInfo="<div><b>".concat(o,"</b></div>"),e.showFeatureInfo=!0,setTimeout((function(){e.overlay.setPosition([n[0],n[1]])}),0)}})),setTimeout((function(){e.olMap.updateSize()}),200)}};n("3c3f");K.render=c,K.__scopeId="data-v-97093538";var q=K,W=Object(a["E"])("data-v-d466975c");Object(a["s"])("data-v-d466975c");var J={id:"container"},U=Object(a["f"])("div",{id:"main"},[Object(a["f"])("div",{id:"map-2"})],-1);Object(a["q"])();var X=W((function(e,t,n,r,i,o){var l=Object(a["w"])("hike-info"),s=Object(a["w"])("toggle-color");return Object(a["p"])(),Object(a["d"])("div",J,[U,e.hike?(Object(a["p"])(),Object(a["d"])(l,{key:0,hike:e.hike},null,8,["hike"])):Object(a["e"])("",!0),Object(a["f"])(s)])})),$=n("1da1"),Y=(n("96cf"),n("1276"),n("ac1f"),n("d81d"),n("159b"),n("d3b7"),n("3ca3"),n("ddb0"),n("7db0"),n("cbcb")),Q=n("bc3a"),Z=n.n(Q),ee=n("715e"),te=n("f53f"),ne=n("4cdf"),ae=n("f403"),re=Object(a["E"])("data-v-1f1fe0d9");Object(a["s"])("data-v-1f1fe0d9");var ie={id:"hike-info",class:"ol-control"};Object(a["q"])();var oe=re((function(e,t,n,r,i,o){return Object(a["p"])(),Object(a["d"])("div",ie,[Object(a["f"])("h2",null,Object(a["y"])(n.hike.properties.title),1),Object(a["f"])("p",null,[Object(a["f"])("ul",null,[Object(a["f"])("li",null,[Object(a["f"])("a",{href:n.hike.properties.url,rel:"noopener",target:"_blank"},"Beschrijving",8,["href"])]),(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(n.hike.properties.gpxfiles.split(","),(function(e,t){return Object(a["p"])(),Object(a["d"])("li",{key:e},[Object(a["f"])("a",{download:"",href:"../data/"+e,rel:"noopener",target:"_blank"}," Download GPX bestand "+Object(a["y"])(n.hike.properties.gpxfiles.split(",").length>1?t+1:""),9,["href"])])})),128))])])])})),le={name:"HikeInfo",props:{hike:{required:!0,type:Object}},methods:{},mounted:function(){console.log(this.hike)}};n("41c5");le.render=oe,le.__scopeId="data-v-1f1fe0d9";var se=le,de=n("617d"),pe={components:{HikeInfo:se,ToggleColor:R},name:"Hike",props:{},data:function(){return{geolocation:null,positionFeature:null,olMap:{},gpxLayer:null,hikeId:"",hike:null,style:G.styles}},methods:{getGPXLayer:function(){var e=this,t=this.hike.properties.gpxfiles.split(",");t=t.map((function(e){return"../data/".concat(e)}));var n=new h["a"]({zIndex:100,declutter:!0}),a=new m["a"]({attributions:', wandeling: <a  rel="noopener" target="_blank" href="'+this.hike.properties.url+'">© '+this.hike.properties.title+"</a>",format:new Y["a"],loader:function(){function n(e){return r.apply(this,arguments)}function r(){return r=Object($["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.map(i),e.next=3,Promise.all(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),r.apply(this,arguments)}function i(e){return Z.a.get(e).then((function(e){return{success:!0,data:e.data}})).catch((function(){return{success:!1}}))}n(t).then((function(t){t.forEach((function(t){a.addFeatures(a.getFormat().readFeatures(t.data,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"})),e.olMap.getView().fit(a.getExtent(),{padding:[50,50,50,50]})}))})).catch((function(e){console.log(e)}))},strategy:ee["a"]});return n.setSource(a),n.setStyle((function(t,n){return n<10?(e.style.Label.getText().setText(t.get("name")),[e.style[t.getGeometry().getType()],e.style.Label]):[e.style[t.getGeometry().getType()]]})),n}},mounted:function(){var e=this;this.hike=y.features.find((function(t){return t.properties.name===e.$route.params.hikeId})),this.olMap=G.getMap("map-2"),this.gpxLayer=this.getGPXLayer(),this.olMap.addLayer(this.gpxLayer),this.geolocation=new te["a"]({trackingOptions:{enableHighAccuracy:!1},projection:this.olMap.getView().getProjection()}),this.geolocation.on("error",(function(e){var t=document.getElementById("info");t.innerHTML=e.message,t.style.display=""})),this.positionFeature=new ne["a"],this.positionFeature.setStyle(new F["b"]({image:new S["a"]({fill:new N["a"]({color:"#2BC0F1"}),radius:8,stroke:new M["a"]({color:"#ffffff",width:2})})})),this.geolocation.on("change:position",(function(){console.log("changepos"),console.log(de["a"]);var t=e.geolocation.getPosition();e.positionFeature.setGeometry(t?new ae["a"](t):null)})),this.geolocation.setTracking(!0);var t=new h["a"]({source:new m["a"]({features:[this.positionFeature]})});this.olMap.addLayer(t),setTimeout((function(){e.olMap.updateSize()}),200)}};n("5aaf");pe.render=X,pe.__scopeId="data-v-d466975c";var ue=pe,ge=[{path:"/",component:q,name:"ns-wandelingen"},{path:"/#/ns-wandeling/:hikeId",component:ue,name:"ns-wandeling"},{path:"/:pathMatch(.*)*",redirect:"/"}],ce=Object(l["a"])({history:Object(l["b"])("/ns-wandelingen/"),routes:ge});Object(a["c"])(o).use(ce).mount("#app")},"5aaf":function(e,t,n){"use strict";n("03e5")},6411:function(e){e.exports=JSON.parse('{"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG::3857"}},"features":[{"type":"Feature","properties":{"name":"ns-wandeling-blauwe-kamer-rhenen","title":"NS-wandeling Blauwe Kamer Rhenen","url":"https://www.ns.nl/dagje-uit/wandelen/blauwe-kamer-rhenen.html","gpxfiles":"ns-wandeling-blauwe-kamer-rhenen.gpx"},"geometry":{"type":"Point","coordinates":[622530.553974114,6790721.418861558]}},{"type":"Feature","properties":{"name":"ns-wandeling-krickenbecker-seen","title":"NS-wandeling Krickenbecker Seen","url":"https://www.ns.nl/dagje-uit/wandelen/krickenbecker-seen.html","gpxfiles":"krickenbecker-seen-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[691956.3887964488,6682416.742375096]}},{"type":"Feature","properties":{"name":"ns-wandeling-gein-en-vecht","title":"NS-wandeling Gein en Vecht","url":"https://www.ns.nl/dagje-uit/wandelen/gein-en-vecht.html","gpxfiles":"ns-wandeling-gein-en-vecht.gpx"},"geometry":{"type":"Point","coordinates":[558445.9141109901,6852748.365001431]}},{"type":"Feature","properties":{"name":"ns-wandeling-helderse-duinen","title":"NS-wandeling Helderse Duinen","url":"https://www.ns.nl/dagje-uit/wandelen/helderse-duinen.html","gpxfiles":"helderse-duinen-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[528683.5350525005,6973238.238796337]}},{"type":"Feature","properties":{"name":"overijsselse-buitenplaatsen","title":"Overijsselse Buitenplaatsen","url":"https://www.ns.nl/dagje-uit/wandelen/overijsselse-buitenplaatsen.html","gpxfiles":"ns-wandeling-overijsselse-buitenplaatsen-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[687491.920618184,6890974.979443688]}},{"type":"Feature","properties":{"name":"hart-van-het-groene-woud","title":"Hart van Het Groene Woud","url":"https://www.ns.nl/dagje-uit/wandelen/hart-van-het-groene-woud.html","gpxfiles":"ns-wandeling-hart-van-het-groene-woud-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[595591.5583963436,6718654.024374656]}},{"type":"Feature","properties":{"name":"schiedam-jeneverstad","title":"Schiedam Jeneverstad","url":"https://www.ns.nl/dagje-uit/wandelen/schiedam-jeneverstad.html","gpxfiles":"schiedam-jeneverstad-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[491770.548502905,6791355.36000023]}},{"type":"Feature","properties":{"name":"uiterwaarden-van-cortenoever","title":"Uiterwaarden van Cortenoever","url":"https://www.ns.nl/dagje-uit/wandelen/uiterwaarden-van-cortenoever.html","gpxfiles":"uiterwaarden-van-cortenoever-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[687927.1798271863,6821094.348507044]}},{"type":"Feature","properties":{"name":"ns-wandeling-waterlinie-culemborg","title":"NS-wandeling Waterlinie Culemborg","url":"https://www.ns.nl/dagje-uit/wandelen/waterlinie-culemborg.html","gpxfiles":"waterlinie-culemborg-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[577864.4860849689,6797297.131925986]}},{"type":"Feature","properties":{"name":"ns-wandeling-hierdense-poort","title":"NS-wandeling Hierdense Poort","url":"https://www.ns.nl/dagje-uit/wandelen/hierdense-poort.html","gpxfiles":"ns-wandeling-hierdense-poort.gpx"},"geometry":{"type":"Point","coordinates":[634803.2924308202,6864436.335543372]}},{"type":"Feature","properties":{"name":"ns-wandeling-limburgs-plateau","title":"NS-wandeling Limburgs Plateau","url":"https://www.ns.nl/dagje-uit/wandelen/limburgs-plateau.html","gpxfiles":"ns-wandeling-limburgs-plateau.gpx"},"geometry":{"type":"Point","coordinates":[653428.1564354429,6616452.8299654]}},{"type":"Feature","properties":{"name":"ns-wandeling-eiland-van-dordrecht","title":"NS-wandeling Eiland van Dordrecht","url":"https://www.ns.nl/dagje-uit/wandelen/eiland-van-dordrecht.html","gpxfiles":"ns-wandeling-eiland-van-dordrecht.gpx"},"geometry":{"type":"Point","coordinates":[521696.5672128606,6766004.803100642]}},{"type":"Feature","properties":{"name":"ns-wandeling-kennemerduinen","title":"NS-wandeling Kennemerduinen","url":"https://www.ns.nl/dagje-uit/wandelen/kennermerduinen.html","gpxfiles":"kennemerduinen-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[511257.5819637216,6876002.572846255]}},{"type":"Feature","properties":{"name":"ns-wandeling-strabrechtse-heide","title":"NS-wandeling Strabrechtse Heide","url":"https://www.ns.nl/dagje-uit/wandelen/strabrechtse-heide.html","gpxfiles":"ns-wandeling-strabrechtse-heide-ns-route-gpx.gpx"},"geometry":{"type":"Point","coordinates":[621397.0861545864,6692394.798028213]}},{"type":"Feature","properties":{"name":"ns-wandeling-wezepsche-heide","title":"NS-wandeling Wezepsche Heide","url":"https://www.ns.nl/dagje-uit/wandelen/wezepsche-heide.html","gpxfiles":"ns-wandeling-wezepsche-heide-zwolle-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[673150.8532582688,6887214.870497865]}},{"type":"Feature","properties":{"name":"ns-wandeling-den-haag","title":"NS-wandeling Den Haag","url":"https://www.ns.nl/dagje-uit/wandelen/den-haag.html","gpxfiles":"ns-wandeling-den-haag-route.gpx"},"geometry":{"type":"Point","coordinates":[480392.02675147104,6817405.19080257]}},{"type":"Feature","properties":{"name":"ns-wandeling-park-lingezegen","title":"NS-wandeling Park Lingezegen","url":"https://www.ns.nl/dagje-uit/wandelen/park-lingezegen.html","gpxfiles":"park-lingezegen-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[653646.3426373978,6791105.209208371]}},{"type":"Feature","properties":{"name":"ns-wandeling-utrechtse-heuvelrug","title":"NS-wandeling Utrechtse Heuvelrug","url":"https://www.ns.nl/dagje-uit/wandelen/utrechtse-heuvelrug.html","gpxfiles":"ns-wandeling-utrechtse-heuvelrug-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[591819.5744006075,6813478.645597711]}},{"type":"Feature","properties":{"name":"ns-wandeling-warnsborn","title":"NS-wandeling Warnsborn","url":"https://www.ns.nl/dagje-uit/wandelen/warnsborn.html","gpxfiles":"warnsborn-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[650190.4290457205,6800100.140641346]}},{"type":"Feature","properties":{"name":"ns-wandeling-noord-hollands-duinreservaat","title":"NS-wandeling Noord-Hollands Duinreservaat","url":"https://www.ns.nl/dagje-uit/wandelen/noord-hollands-duinreservaat.html","gpxfiles":"noord-hollands-duinreservaat-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[516439.5042601484,6905829.677391051]}},{"type":"Feature","properties":{"name":"ns-wandeling-sint-pietersberg","title":"NS-wandeling Sint-Pietersberg","url":"https://www.ns.nl/dagje-uit/wandelen/sint-pietersberg.html","gpxfiles":"ns-wandeling-sint-pietersberg-maastricht.gpx"},"geometry":{"type":"Point","coordinates":[633534.1389162863,6593154.898189044]}},{"type":"Feature","properties":{"name":"ns-wandeling-land-van-ravenstein","title":"NS-wandeling Land van Ravenstein","url":"https://www.ns.nl/dagje-uit/wandelen/land-van-ravenstein.html","gpxfiles":"land-van-ravenstein-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[625769.7157529462,6765689.71615088]}},{"type":"Feature","properties":{"name":"ns-wandeling-heiligenbergerbeek","title":"NS-wandeling Heiligenbergerbeek","url":"https://www.ns.nl/dagje-uit/wandelen/heiligenbergerbeek.html","gpxfiles":"heiligenbergerbeek-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[602786.6936837669,6821564.789590948]}},{"type":"Feature","properties":{"name":"ns-wandeling-fort-de-roovere","title":"NS-wandeling Fort de Roovere","url":"https://www.ns.nl/dagje-uit/wandelen/fort-de-roovere.html","gpxfiles":"ns-wandeling-fort-de-roovere-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[479587.5207915076,6711688.509005516]}},{"type":"Feature","properties":{"name":"ns-wandeling-amsterdam","title":"NS-wandeling Amsterdam","url":"https://www.ns.nl/dagje-uit/wandelen/amsterdam.html","gpxfiles":"amsterdam-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[546258.6562589427,6866666.5794021115]}},{"type":"Feature","properties":{"name":"ns-wandeling-landgoed-groeneveld","title":"NS-wandeling Landgoed Groeneveld","url":"https://www.ns.nl/dagje-uit/wandelen/landgoed-groeneveld.html","gpxfiles":"ns-wandeling-landgoed-groeneveld.gpx"},"geometry":{"type":"Point","coordinates":[581842.488088466,6841921.500773806]}},{"type":"Feature","properties":{"name":"ns-wandeling-mastbos","title":"NS-wandeling Mastbos","url":"https://www.ns.nl/dagje-uit/wandelen/mastbos.html","gpxfiles":"ns-wandeling-mastbos-breda-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[531899.4438220274,6723126.860365843]}},{"type":"Feature","properties":{"name":"ns-wandeling-beukenburg","title":"NS-wandeling Beukenburg","url":"https://www.ns.nl/dagje-uit/wandelen/beukenburg.html","gpxfiles":"beukenburg-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[574295.5832101364,6819802.815815125]}},{"type":"Feature","properties":{"name":"ns-wandeling-elsterberg","title":"NS-wandeling Elsterberg","url":"https://www.ns.nl/dagje-uit/wandelen/elsterberg.html","gpxfiles":"ns-wandeling-elsterberg.gpx"},"geometry":{"type":"Point","coordinates":[616735.5824776171,6798684.504446875]}},{"type":"Feature","properties":{"name":"ns-wandeling-veluwezoom","title":"NS-wandeling Veluwezoom","url":"https://www.ns.nl/dagje-uit/wandelen/veluwezoom.html","gpxfiles":"ns-wandeling-veluwezoom.gpx"},"geometry":{"type":"Point","coordinates":[672545.2495537925,6803844.89449718]}},{"type":"Feature","properties":{"name":"ns-wandeling-de-vuursche","title":"NS-wandeling De Vuursche","url":"https://www.ns.nl/dagje-uit/wandelen/de-vuursche.html","gpxfiles":"ns-wandeling-de-vuursche.gpx"},"geometry":{"type":"Point","coordinates":[582586.102286967,6834685.62707384]}},{"type":"Feature","properties":{"name":"ns-wandeling-meijendel","title":"NS-wandeling Meijendel","url":"https://www.ns.nl/dagje-uit/wandelen/meijendel.html","gpxfiles":"ns-wandeling-meijendel-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[483533.4627816559,6819644.2207661355]}},{"type":"Feature","properties":{"name":"ns-wandeling-drentsche-aa","title":"NS-wandeling Drentsche Aa","url":"https://www.ns.nl/dagje-uit/wandelen/drentsche-aa.html","gpxfiles":"drentsche-aa-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[735801.2400377415,6981009.708839566]}},{"type":"Feature","properties":{"name":"ns-wandeling-kampina","title":"NS-wandeling Kampina","url":"https://www.ns.nl/dagje-uit/wandelen/kampina.html","gpxfiles":"ns-wandeling-kampina-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[585150.3831318595,6723295.632915648]}},{"type":"Feature","properties":{"name":"ns-wandeling-vughtse-lunetten","title":"NS-wandeling Vughtse Lunetten","url":"https://www.ns.nl/dagje-uit/wandelen/vughtse-lunetten.html","gpxfiles":"vughtse-lunetten-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[588349.6689227873,6741210.660905486]}},{"type":"Feature","properties":{"name":"ns-wandeling-belmonte","title":"NS-wandeling Belmonte","url":"https://www.ns.nl/dagje-uit/wandelen/belmonte.html","gpxfiles":"belmonte-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[634605.1437372083,6799418.507123914]}},{"type":"Feature","properties":{"name":"ns-wandeling-leeuwarden","title":"NS-wandeling Leeuwarden","url":"https://www.ns.nl/dagje-uit/wandelen/leeuwarden.html","gpxfiles":"leeuwarden-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[646477.3674303108,7019745.895115877]}},{"type":"Feature","properties":{"name":"ns-wandeling-hemelse-berg","title":"NS-wandeling Hemelse Berg","url":"https://www.ns.nl/dagje-uit/wandelen/hemelse-berg.html","gpxfiles":"hemelse-berg-arnhem-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[651719.4022517661,6796953.714854622]}},{"type":"Feature","properties":{"name":"ns-wandeling-rotterdam-maasstad","title":"NS-wandeling Rotterdam Maasstad","url":"https://www.ns.nl/dagje-uit/wandelen/rotterdam-maasstad.html","gpxfiles":"rotterdam-maasstad-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[497958.79899610317,6784440.677838549]}},{"type":"Feature","properties":{"name":"ns-wandeling-hollandse-kade","title":"NS-wandeling Hollandse Kade","url":"https://www.ns.nl/dagje-uit/wandelen/hollandse-kade.html","gpxfiles":"hollandse-kade-ns-route.gpx"},"geometry":{"type":"Point","coordinates":[550044.0755433679,6823282.721333797]}},{"type":"Feature","properties":{"name":"ns-wandeling-lange-duinen","title":"NS-wandeling Lange Duinen","url":"https://www.ns.nl/dagje-uit/wandelen/lange-duinen.html","gpxfiles":"ns-wandeling-lange-duinen.gpx"},"geometry":{"type":"Point","coordinates":[587489.72585641,6829667.199738121]}},{"type":"Feature","properties":{"name":"ns-wandeling-woldberg","title":"NS-wandeling Woldberg","url":"https://www.ns.nl/dagje-uit/wandelen/woldberg.html","gpxfiles":"ns-wandeling-woldberg-steenwijk-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[680077.2632949171,6947686.273959572]}},{"type":"Feature","properties":{"name":"ns-wandeling-de-bretten","title":"NS-wandeling De Bretten","url":"https://www.ns.nl/dagje-uit/wandelen/de-bretten.html","gpxfiles":"ns-wandeling-de-bretten-gps-route.gpx"},"geometry":{"type":"Point","coordinates":[533425.63177205,6870730.636502313]}}]}')},"659a":function(e,t,n){"use strict";n("3f4e")},"8b33":function(e,t,n){},ab04:function(e,t,n){},baf0:function(e,t,n){"use strict";n("8b33")}});
//# sourceMappingURL=app.6b315809.js.map