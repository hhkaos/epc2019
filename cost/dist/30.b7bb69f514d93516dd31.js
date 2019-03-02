(function(){(this||window).webpackJsonp.registerAbsMids({"esri/portal/support/layersCreator":498,"esri/portal/support/portalLayers":1442,"esri/layers/support/lazyLayerLoader":1569,"esri/portal/support/mapNotesUtils":1873})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[30,75],{1442:function(e,r,n){var t,a;t=[n.dj.c(e.i),r,n(10),n(29),n(16),n(9),n(6),n(1569),n(106),n(1873)],void 0===(a=function(e,r,n,t,a,i,o,c,u,l){function y(e){switch(e.type){case"Map Service":return function(e){return p(e).then(function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}})}(e);case"Feature Service":return function(e){return L(e).then(function(e){if("object"==typeof e){var r={outFields:["*"]};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}})}(e);case"Feature Collection":return function(e){return e.load().then(function(){return e.fetchData()}).then(function(e){if(e&&Array.isArray(e.layers)){if(l.isMapNotesLayer(e))return{className:"MapNotesLayer"};if(1===e.layers.length)return{className:"FeatureLayer"}}return{className:"GroupLayer"}})}(e);case"Scene Service":return function(e){return L(e).then(function(r){if("object"==typeof r){var n={},t=void 0;if(null!=r.id?(n.layerId=r.id,t=e.url+"/layers/"+r.id):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},i=0,o=Object.keys(a);i<o.length;i++){var c=o[i];if(-1!==e.typeKeywords.indexOf(c))return{className:a[c]}}return f(t).then(function(e){var r="SceneLayer",t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:n}})}return{className:"GroupLayer"}})}(e);case"Image Service":return function(e){return p(e).then(function(r){var n=new a(e.typeKeywords);return r?n.find(function(e){return"elevation 3d layer"===e.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return o.reject(new i("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function s(e){return(0,c.layerLookupMap[e.className])().then(function(r){return{constructor:r,properties:e.properties}})}function p(e){return f(e.url).then(function(e){return e.tileInfo})}function L(e){return!e.url||e.url.match(/\/\d+$/)?o.resolve({}):e.load().then(function(){return e.fetchData()}).then(function(r){return r&&Array.isArray(r.layers)?1===r.layers.length&&{id:r.layers[0].id}:f(e.url).then(function(e){return e&&Array.isArray(e.layers)?1===e.layers.length&&{id:e.layers[0].id}:{}})})}function f(e){return t(e,{responseType:"json",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromItem=function(e){return!e.portalItem||e.portalItem instanceof u||e.portalItem.constructor&&e.portalItem.constructor._meta||(e=n({},e,{portalItem:new u(e.portalItem)})),function(e){return e.load().then(y).then(s)}(e.portalItem).then(function(r){var t=n({portalItem:e.portalItem},r.properties),a=r.constructor;return"esri.layers.FeatureLayer"===a.declaredClass&&(t.outFields=["*"]),o.resolve(new a(t))})},r.selectLayerClassPath=y}.apply(null,t))||(e.exports=a)},1569:function(e,r,n){var t,a;t=[n.dj.c(e.i),r,n(6)],void 0===(a=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.layerLookupMap={CSVLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var r=[n(296)];e.apply(null,r)}.bind(this)).catch(n.oe)})},ElevationLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var r=[n(198)];e.apply(null,r)}.bind(this)).catch(n.oe)})},FeatureLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var r=[n(86)];e.apply(null,r)}.bind(this)).catch(n.oe)})},GroupLayer:function(){return t.create(function(e){return n.e(16).then(function(){var r=[n(1425)];e.apply(null,r)}.bind(this)).catch(n.oe)})},GeoRSSLayer:function(){return t.create(function(e){return n.e(35).then(function(){var r=[n(1434)];e.apply(null,r)}.bind(this)).catch(n.oe)})},ImageryLayer:function(){return t.create(function(e){return n.e(21).then(function(){var r=[n(1430)];e.apply(null,r)}.bind(this)).catch(n.oe)})},KMLLayer:function(){return t.create(function(e){return n.e(31).then(function(){var r=[n(1436)];e.apply(null,r)}.bind(this)).catch(n.oe)})},MapImageLayer:function(){return t.create(function(e){return n.e(23).then(function(){var r=[n(1431)];e.apply(null,r)}.bind(this)).catch(n.oe)})},MapNotesLayer:function(){return t.create(function(e){return n.e(84).then(function(){var r=[n(1766)];e.apply(null,r)}.bind(this)).catch(n.oe)})},OpenStreetMapLayer:function(){return t.create(function(e){return n.e(33).then(function(){var r=[n(1437)];e.apply(null,r)}.bind(this)).catch(n.oe)})},PointCloudLayer:function(){return t.create(function(e){return n.e(19).then(function(){var r=[n(1438)];e.apply(null,r)}.bind(this)).catch(n.oe)})},SceneLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var r=[n(297)];e.apply(null,r)}.bind(this)).catch(n.oe)})},BuildingSceneLayer:function(){return t.create(function(e){return n.e(28).then(function(){var r=[n(1433)];e.apply(null,r)}.bind(this)).catch(n.oe)})},IntegratedMeshLayer:function(){return t.create(function(e){return n.e(36).then(function(){var r=[n(1435)];e.apply(null,r)}.bind(this)).catch(n.oe)})},StreamLayer:function(){return t.create(function(e){return n.e(37).then(function(){var r=[n(1432)];e.apply(null,r)}.bind(this)).catch(n.oe)})},TileLayer:function(){return t.create(function(e){return n.e(69).then(function(){var r=[n(438)];e.apply(null,r)}.bind(this)).catch(n.oe)})},UnknownLayer:function(){return t.create(function(e){return n.e(85).then(function(){var r=[n(1767)];e.apply(null,r)}.bind(this)).catch(n.oe)})},UnsupportedLayer:function(){return t.create(function(e){return n.e(86).then(function(){var r=[n(1768)];e.apply(null,r)}.bind(this)).catch(n.oe)})},VectorTileLayer:function(){return t.create(function(e){return n.e(5).then(function(){var r=[n(1427)];e.apply(null,r)}.bind(this)).catch(n.oe)})},WebTileLayer:function(){return t.create(function(e){return n.e(38).then(function(){var r=[n(1428)];e.apply(null,r)}.bind(this)).catch(n.oe)})},WMSLayer:function(){return t.create(function(e){return n.e(29).then(function(){var r=[n(1439)];e.apply(null,r)}.bind(this)).catch(n.oe)})},WMTSLayer:function(){return t.create(function(e){return n.e(65).then(function(){var r=[n(1769)];e.apply(null,r)}.bind(this)).catch(n.oe)})},BingMapsLayer:function(){return t.create(function(e){return n.e(11).then(function(){var r=[n(293)];e.apply(null,r)}.bind(this)).catch(n.oe)})}}}.apply(null,t))||(e.exports=a)},1873:function(e,r,n){var t,a;t=[n.dj.c(e.i),r],void 0===(a=function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.isMapNotesLayer=function(e){var r=["TITLE","DESCRIPTION","IMAGE_URL","IMAGE_LINK_URL"],n=e.layers||e.featureCollection&&e.featureCollection.layers;if(n&&Array.isArray(n)){var t=n[0];return t.layerDefinition&&Array.isArray(t.layerDefinition.fields)&&t.layerDefinition.fields.forEach(function(e){var n=r.indexOf(e.name);n>-1&&r.splice(n,1)}),!r.length}}}.apply(null,t))||(e.exports=a)},498:function(e,r,n){var t,a;t=[n.dj.c(e.i),r,n(18),n(6),n(69),n(1569),n(106),n(1873),n(1442),n(314)],void 0===(a=function(e,r,n,t,a,i,o,c,u,l){function y(e,r){return function(e,r){var n=r.context,t=function(e){var r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=h;break;case"ground":r=d;break;default:r=f}break;default:switch(e.layerContainerType){case"basemap":r=S;break;default:r=v}}return r}(n),a=e.layerType||e.type;!a&&r&&r.defaultLayerType&&(a=r.defaultLayerType);var l=t[a],y=l?i.layerLookupMap[l]:i.layerLookupMap.UnknownLayer;if("Feature Collection"===e.type){if(e.itemId){var s=new o({id:e.itemId,portal:n&&n.portal});return s.load().then(u.selectLayerClassPath).then(function(e){var r=e.className||"UnknownLayer";return i.layerLookupMap[r]}).then(function(e){return e()})}}else"ArcGISFeatureLayer"===a&&c.isMapNotesLayer(e)&&(y=i.layerLookupMap.MapNotesLayer);return e.wmtsInfo&&(y=i.layerLookupMap.WMTSLayer),y()}(e,r).then(function(n){return function(e,r,n){var a,i,o={};return r.itemId&&(o.portalItem={id:r.itemId,portal:n.context.portal}),(i=a=new e(o)).read(r,n.context),l.loadStyleRenderer(i,n.context).then(function(){return t.resolve(a)})}(n,e,r)})}function s(e,r,n){return r&&r.filter?n.then(function(e){var n=r.filter(e);return void 0===n?t.resolve(e):n instanceof a?t.resolve(n):n}):n}function p(e,r,n){if(!r)return[];for(var a=[],i=[],o=0;o<r.length;o++){var c=r[o],u=y(c,n);if(a.push(u),i.push(null),"GroupLayer"===c.layerType){var l=c;if(l.layers&&Array.isArray(l.layers)&&l.layers.length>0){var p=l.layers.map(function(e){return y(e,n)});a.push.apply(a,p);for(var f=0;f<p.length;f++)i.push(u)}}}var d={};return a.map(function(r,a){var o=function(e,r){d[r.id]=a;var n=e.findIndex(function(e){if(!e.id)return!1;var r=d[e.id];return void 0!==r&&a<r});n<0&&(n=void 0),e.add(r,n)},c=s(0,n,r).then(function(r){return null!==i[a]?i[a].then(function(e){return o(e.layers,r),t.resolve(r)}):(o(e,r),t.resolve(r))});return L&&(c=c.catch(function(e){return console.error(e.toString?e.toString():e),t.reject(e)})),c})}Object.defineProperty(r,"__esModule",{value:!0});var L=n("dojo-debug-messages"),f={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer"},h={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},v={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};r.createLayer=y,r.processLayer=s,r.populateLayers=p,r.populateOperationalLayers=function(e,r,n){return p(e,r,n)}}.apply(null,t))||(e.exports=a)}}]);