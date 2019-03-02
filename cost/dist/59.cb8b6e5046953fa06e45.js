(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/TileLayer":438,"esri/layers/support/arcgisLayers":1426,"esri/views/3d/layers/ElevationLayerView3D":1450,"esri/core/HandleOwner":1512,"esri/views/layers/LayerView":1532,"esri/views/3d/layers/support/layerViewUpdatingProperties":1547,"esri/views/3d/layers/LayerView3D":1552,"esri/layers/support/lazyLayerLoader":1569,"esri/layers/support/sublayerUtils":1638,"esri/layers/mixins/ArcGISMapService":1657,"esri/layers/mixins/SublayersOwner":1658,"esri/views/3d/terrain/terrainUtils":1759,"esri/views/3d/layers/TiledLayerView3D":1771,"esri/views/3d/terrain/terrainUtilsPlanar":1772,"esri/views/3d/terrain/terrainUtilsSpherical":1773,"esri/views/3d/layers/support/tiledLayerUtils":1897})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[59,24,25,69,80],{1426:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(10),t(29),t(9),t(6),t(142),t(142),t(1569)],void 0===(i=function(e,r,n,i,a,o,l,s,u){function p(e){return(0,u.layerLookupMap[e])()}function c(e){return i(e,{responseType:"json",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromUrl=function(e){return function(e){var r=s.parse(e);if(!r)return o.reject(new a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var t,n=r.serverType,i=r.sublayer;switch(n){case"MapServer":t=null!=i?"FeatureLayer":function(e){return c(e).then(function(e){return e.tileInfo})}(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":t=c(e).then(function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?r&&"LERC"===r.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":t=c(r.url.path).then(function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var t=e.layers[0].layerType;if(null!=r[t])return r[t]}return"SceneLayer"});break;default:t={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"}[n]}var l,u={FeatureLayer:!0,SceneLayer:!0},y={parsedUrl:r,Constructor:null,sublayerIds:null};return o.when(t).then(function(r){if(l=r,u[r]&&null==i)return function(e){return c(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}(e).then(function(e){1!==e.length&&(y.sublayerIds=e)})}).then(function(){return p(l)}).then(function(e){return y.Constructor=e,y})}(e.url).then(function(r){var i=function(e,r){var t=e.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===t||"esri.layers.StreamLayer"===t?n({outFields:["*"]},r):r}(r,n({},e.properties,{url:e.url}));return r.sublayerIds?o.create(function(e){return t.e(16).then(function(){var r=[t(1425)];e.apply(null,r)}.bind(this)).catch(t.oe)}).then(function(e){var t=new e({title:r.parsedUrl.title});return function(e,r){return e.sublayerIds.map(function(t){return new e.Constructor(n({},r,{layerId:t,sublayerTitleMode:"service-name"}))})}(r,i).forEach(function(e){return t.add(e)}),o.resolve(t)}):o.resolve(new r.Constructor(i))})},r.fetchServerVersion=function(e){if(!l.test(e))return o.reject();var r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return i(r,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:o.reject()})}}.apply(null,n))||(e.exports=i)},1450:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(9),t(6),t(14),t(2),t(1771),t(1897)],void 0===(i=function(e,r,t,n,i,a,o,l,s,u){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.initialize=function(){var e=this,r=this.get("view.map.ground.layers"),t=this.get("view.map.allLayers"),n=t&&t.includes(this.layer),l=r&&r.includes(this.layer);if(n&&!l){var s=new i("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added in the map ground");this.addResolvingPromise(a.reject(s))}var p=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);if(p)this.addResolvingPromise(a.reject(p));else{var c=o.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var r=e.view.basemapTerrain.tilingScheme;u.throwIfError(e._getTileInfoCompatibilityError(e.tileInfo,r))});this.addResolvingPromise(c)}this.addResolvingPromise(u.checkArcGISServiceVersionCompatibility(this.layer)),this._updateMinMaxDataLevel()},n([l.property({aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),n([l.property()],r.prototype,"layer",void 0),n([l.property({aliasOf:"layer.tileInfo"})],r.prototype,"tileInfo",void 0),n([l.subclass("esri.views.3d.layers.ElevationLayerView3D")],r)}(l.declared(s))}.apply(null,n))||(e.exports=i)},1512:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(5),t(17),t(2)],void 0===(i=function(e,r,t,n,i,a,o){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var n=e.call(this)||this;return n.handles=new a,n}return t(r,e),r.prototype.destroy=function(){this.handles.destroy()},n([o.property({readOnly:!0})],r.prototype,"handles",void 0),n([o.subclass("esri.core.HandleOwner")],r)}(o.declared(i))}.apply(null,n))||(e.exports=i)},1532:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(42),t(1512),t(95),t(7),t(191),t(6),t(2)],void 0===(i=function(e,r,t,n,i,a,o,l,s,u,p){return function(e){function r(r){var t=e.call(this)||this;return t.layer=null,t.parent=null,t.view=null,t}return t(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(r){if("layerview:create-error"!==r.name){var t=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";return l.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+n+"', id: '"+t+"')",r),u.reject(r)}})},r.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(r.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),r.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},r.prototype.isUpdating=function(){return!1},n([p.property()],r.prototype,"layer",void 0),n([p.property()],r.prototype,"parent",void 0),n([p.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],r.prototype,"suspended",null),n([p.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],r.prototype,"updating",null),n([p.property()],r.prototype,"view",void 0),n([p.property({dependsOn:["layer.visible"]})],r.prototype,"visible",null),n([p.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],r.prototype,"fullOpacity",null),n([p.subclass("esri.views.layers.LayerView")],r)}(p.declared(a,i,o.Identifiable,s))}.apply(null,n))||(e.exports=i)},1547:function(e,r,t){var n,i;n=[t.dj.c(e.i),r],void 0===(i=function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.updatingPercentageValue={value:100,readOnly:!0},r.updatingPercentage={dependsOn:["updating","updatingPercentageValue"],readOnly:!0,value:0,get:function(){return this.updating?this.updatingPercentageValue:0}}}.apply(null,n))||(e.exports=i)},1552:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(6),t(14),t(2),t(465),t(1532)],void 0===(i=function(e,r,t,n,i,a,o,l,s){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.slicePlaneEnabled=!1,r.supportsHeightUnitConversion=!1,r}return t(r,e),r.prototype.postscript=function(e){this.inherited(arguments),l.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},r.prototype._validateHeightModelInfo=function(){var e=this;return i.create(function(r,t){a.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",function(){var n=l.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);n?t(n):r()})})},n([o.property()],r.prototype,"view",void 0),n([o.property()],r.prototype,"slicePlaneEnabled",void 0),n([o.subclass("esri.views.3d.layers.LayerView3D")],r)}(o.declared(s))}.apply(null,n))||(e.exports=i)},1569:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(6)],void 0===(i=function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0}),r.layerLookupMap={CSVLayer:function(){return n.create(function(e){return Promise.resolve().then(function(){var r=[t(296)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ElevationLayer:function(){return n.create(function(e){return Promise.resolve().then(function(){var r=[t(198)];e.apply(null,r)}.bind(this)).catch(t.oe)})},FeatureLayer:function(){return n.create(function(e){return Promise.resolve().then(function(){var r=[t(86)];e.apply(null,r)}.bind(this)).catch(t.oe)})},GroupLayer:function(){return n.create(function(e){return t.e(16).then(function(){var r=[t(1425)];e.apply(null,r)}.bind(this)).catch(t.oe)})},GeoRSSLayer:function(){return n.create(function(e){return t.e(35).then(function(){var r=[t(1434)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ImageryLayer:function(){return n.create(function(e){return t.e(21).then(function(){var r=[t(1430)];e.apply(null,r)}.bind(this)).catch(t.oe)})},KMLLayer:function(){return n.create(function(e){return t.e(31).then(function(){var r=[t(1436)];e.apply(null,r)}.bind(this)).catch(t.oe)})},MapImageLayer:function(){return n.create(function(e){return t.e(23).then(function(){var r=[t(1431)];e.apply(null,r)}.bind(this)).catch(t.oe)})},MapNotesLayer:function(){return n.create(function(e){return t.e(84).then(function(){var r=[t(1766)];e.apply(null,r)}.bind(this)).catch(t.oe)})},OpenStreetMapLayer:function(){return n.create(function(e){return t.e(33).then(function(){var r=[t(1437)];e.apply(null,r)}.bind(this)).catch(t.oe)})},PointCloudLayer:function(){return n.create(function(e){return t.e(19).then(function(){var r=[t(1438)];e.apply(null,r)}.bind(this)).catch(t.oe)})},SceneLayer:function(){return n.create(function(e){return Promise.resolve().then(function(){var r=[t(297)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BuildingSceneLayer:function(){return n.create(function(e){return t.e(28).then(function(){var r=[t(1433)];e.apply(null,r)}.bind(this)).catch(t.oe)})},IntegratedMeshLayer:function(){return n.create(function(e){return t.e(36).then(function(){var r=[t(1435)];e.apply(null,r)}.bind(this)).catch(t.oe)})},StreamLayer:function(){return n.create(function(e){return t.e(37).then(function(){var r=[t(1432)];e.apply(null,r)}.bind(this)).catch(t.oe)})},TileLayer:function(){return n.create(function(e){return t.e(69).then(function(){var r=[t(438)];e.apply(null,r)}.bind(this)).catch(t.oe)})},UnknownLayer:function(){return n.create(function(e){return t.e(85).then(function(){var r=[t(1767)];e.apply(null,r)}.bind(this)).catch(t.oe)})},UnsupportedLayer:function(){return n.create(function(e){return t.e(86).then(function(){var r=[t(1768)];e.apply(null,r)}.bind(this)).catch(t.oe)})},VectorTileLayer:function(){return n.create(function(e){return t.e(5).then(function(){var r=[t(1427)];e.apply(null,r)}.bind(this)).catch(t.oe)})},WebTileLayer:function(){return n.create(function(e){return t.e(38).then(function(){var r=[t(1428)];e.apply(null,r)}.bind(this)).catch(t.oe)})},WMSLayer:function(){return n.create(function(e){return t.e(29).then(function(){var r=[t(1439)];e.apply(null,r)}.bind(this)).catch(t.oe)})},WMTSLayer:function(){return n.create(function(e){return t.e(65).then(function(){var r=[t(1769)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BingMapsLayer:function(){return n.create(function(e){return t.e(11).then(function(){var r=[t(293)];e.apply(null,r)}.bind(this)).catch(t.oe)})}}}.apply(null,n))||(e.exports=i)},1638:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(295)],void 0===(i=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.isExportDynamic=function(e,r,n){return!!e.some(function(e){var r=e.source;return!(!r||r.type===t.MAPLAYER&&r.mapLayerId===e.id&&(!r.gdbVersion||r.gdbVersion===n.gdbVersion))||null!=e.renderer||null!=e.labelingInfo||e.hasOwnProperty("opacity")&&null!=e.opacity||e.hasOwnProperty("labelsVisible")&&null!=e.labelsVisible})||!function(e,r){if(!e||!e.length)return!0;var t=[];if(r.forEach(function e(r){var n=r.id,i=r.sublayers;t.unshift(n),i&&i.forEach(e)}),e.length>t.length)return!1;for(var n=0,i=t.length,a=0,o=e;a<o.length;a++){for(var l=o[a].id;n<i&&t[n]!==l;)n++;if(n>=i)return!1}return!0}(e,r)},r.sameStructureAsService=function(e,r){return r.flatten(function(e){var r=e.sublayers;return r&&r.toArray().reverse()}).toArray().reverse().every(function(r,t){var n=e[t];return n&&r.id===n.id&&(null==r.sublayers&&null==n.sublayers||null!=r.sublayers&&null!=n.sublayers&&r.sublayers.map(function(e){return e.id}).join(",")===n.sublayers.map(function(e){return e.id}).join(","))})}}.apply(null,n))||(e.exports=i)},1657:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(2),t(19),t(24),t(207),t(93)],void 0===(i=function(e,r,t,n,i,a,o,l,s){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.capabilities=void 0,r.copyright=null,r.fullExtent=null,r.legendEnabled=!0,r.spatialReference=null,r.version=null,r}return t(r,e),r.prototype.readCapabilities=function(e,r){var t=r.capabilities&&r.capabilities.split(",").map(function(e){return e.toLowerCase().trim()});if(!t)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var n=this.type,i=-1!==t.indexOf("query"),a=-1!==t.indexOf("map"),o=!!r.exportTilesAllowed,l=-1!==t.indexOf("tilemap"),s="tile"!==n&&!!r.supportsDynamicLayers,u="tile"!==n&&(!r.tileInfo||s),p="tile"!==n&&(!r.tileInfo||s);return{operations:{supportsQuery:i,supportsExportMap:a,supportsExportTiles:o,supportsTileMap:l},exportMap:a?{supportsSublayersChanges:"tile"!==n,supportsDynamicLayers:s,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:p}:null,exportTiles:o?{maxExportTilesCount:+r.maxExportTilesCount}:null}},r.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t},n([i.property({readOnly:!0})],r.prototype,"capabilities",void 0),n([i.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),n([i.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),n([i.property({type:a})],r.prototype,"fullExtent",void 0),n([i.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],r.prototype,"id",void 0),n([i.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),n([i.property(s.popupEnabled)],r.prototype,"popupEnabled",void 0),n([i.property({type:o})],r.prototype,"spatialReference",void 0),n([i.property()],r.prototype,"version",void 0),n([i.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),n([i.subclass("esri.layers.mixins.ArcGISMapService")],r)}(i.declared(l))}.apply(null,n))||(e.exports=i)},1658:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(10),t(1),t(0),t(5),t(16),t(291),t(9),t(3),t(7),t(2),t(21),t(88),t(456),t(1638)],void 0===(i=function(e,r,t,n,i,a,o,l,s,u,p,c,y,d,f,v){function h(e,r,t){var n=[],i={};return e.forEach(function(e){var a=new f;if(a.read(e,r),t&&(-1===t.indexOf(a.id)?a.visible=!1:a.visible=!0),i[a.id]=a,null!=e.parentLayerId&&-1!==e.parentLayerId){var o=i[e.parentLayerId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(a)}else n.unshift(a)}),n}function b(e){return e.__accessor__.store._values}function g(e){return e.__accessor__.overridden}Object.defineProperty(r,"__esModule",{value:!0});var m=p.getLogger("esri.layers.TileLayer"),w=function(e){function r(){var r=e.call(this)||this;return r.allSublayers=new l({root:r,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),r.watch("sublayers",function(e,t){return r._handleSublayersChange(e,t)},!0),r}return n(r,e),r.prototype.readServiceSublayers=function(e,r,t){return h(r.layers,t)},r.prototype.readSublayersFromItemOrWebMap=function(e,r,t){return!r.layers&&r.visibleLayers?r.visibleLayers.map(function(e){return{id:e}}):h(r.layers,t,r.visibleLayers)},r.prototype.readSublayers=function(e,r,t){var n=h(r.layers,t);return this._updateSublayersForOrigin(d.OriginId.PORTAL_ITEM,n),this._updateSublayersForOrigin(d.OriginId.WEB_MAP,n),this._updateSublayersForOrigin(d.OriginId.WEB_SCENE,n),n},r.prototype.writeSublayers=function(e,r,n,i){var a=e.flatten(function(e){var r=e.sublayers;return r&&r.toArray().reverse()}).toArray().reverse(),o=this.serviceSublayers.flatten(function(e){var r=e.sublayers;return r&&r.toArray().reverse()}).toArray().reduce(function(e,r){return e.set(r.id,r),e},new Map),l=!1,s=!0;this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers?(l=v.isExportDynamic(a,this.serviceSublayers,this),s=!l&&v.sameStructureAsService(a,this.serviceSublayers)):s=v.sameStructureAsService(a,this.serviceSublayers),r.layers=[],a.forEach(function(e){var n=o.get(e.id),a=t({writeAsDynamic:l,writeOverridesOnly:s,serviceSublayer:n},i),u=e.write({},a);(!s||s&&Object.keys(u).length>1)&&r.layers.push(u)}),r.visibleLayers=a.filter(function(e){return e.visible}).map(function(e){return e.id})},r.prototype.findSublayerById=function(e){return this.allSublayers.find(function(r){return r.id===e})},r.prototype.createServiceSublayers=function(){return this.serviceSublayers.map(function(e){return e.clone()})},r.prototype._updateSublayersForOrigin=function(e,r){var t=this.__accessor__.store;if(t.has("sublayers",e)){var n=t.get("sublayers",e).flatten(function(e){return e.sublayers});if(n.every(function(e){return!b(e).hasOwnProperty("minScale")})){var i=n.reduce(function(e,r){return e.set(r.id,r),e},new Map),a=r.map(function(e){return function e(r,t){var n=t.get(r.id);return n?(u.mixin(b(r),b(n)),g(n)&&(r.__accessor__.overridden=u.mixin(g(r)||{},g(n))),n.sublayers&&(r.sublayers=n.sublayers.map(function(r){return e(r,t)}))):r.sublayers&&r.sublayers.forEach(function(r){return e(r,t)}),r}(e.clone(),i)});t.set("sublayers",new(o.ofType(f))(a),e)}}},r.prototype._handleSublayersChange=function(e,r){var t=this;r&&(r.forEach(function(e){e.parent=null,e.layer=null}),this._sublayersHandles.forEach(function(e){return e.remove()}),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=t,e.layer=t}),this._sublayersHandles=[e.on("after-add",function(e){var r=e.item;r.parent=t,r.layer=t}),e.on("after-remove",function(e){var r=e.item;r.parent=null,r.layer=null})],"tile"===this.type&&this._sublayersHandles.push(e.on("before-changes",function(e){m.error(new s("tilelayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:t})),e.preventDefault()})))},i([c.property({readOnly:!0})],r.prototype,"allSublayers",void 0),i([c.property({readOnly:!0,type:o.ofType(f)})],r.prototype,"serviceSublayers",void 0),i([c.reader("service","serviceSublayers",["layers"])],r.prototype,"readServiceSublayers",null),i([c.property({value:null,type:o.ofType(f),json:{type:[Number],write:{target:"subLayerIds",allowNull:!0}}})],r.prototype,"sublayers",void 0),i([c.reader(["web-map","web-scene","portal-item"],"sublayers",["layers","visibleLayers"])],r.prototype,"readSublayersFromItemOrWebMap",null),i([c.reader("service","sublayers",["layers"])],r.prototype,"readSublayers",null),i([c.writer(["web-map","web-scene","portal-item"],"sublayers",{layers:{type:[f]},visibleLayers:{type:[y.Integer]}})],r.prototype,"writeSublayers",null),i([c.subclass("esri.layers.mixins.SublayersOwner")],r)}(c.declared(a));r.default=w}.apply(null,n))||(e.exports=i)},1759:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(198),t(438),t(1427),t(303),t(1772),t(1773)],void 0===(i=function(e,r,t,n,i,a,o,l){function s(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function u(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function p(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}function c(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function y(){for(var e in v={},a)a[e].baseMapLayers.forEach(function(e){v[e.url]=19});v["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}function d(e,r,t,n){return f["local"===n||"planar"===n?"planar":"spherical"].checkIfTileInfoSupportedForViewSR(e,r,t)}Object.defineProperty(r,"__esModule",{value:!0});var f={planar:o,spherical:l};r.weakAssert=function(e,r){e||console.warn("Terrain: "+r)},r.autoUpdateSkirtsVisibility=function(e,r,t){var n,i=f[e.manifold],a=i.isInsideExtent(e,r);if(a)n=e.getElevation(r);else{var o=e.getElevationBounds();n=.5*(o[0]+o[1])}var l=r[2]-n,s=.9*Math.abs(l)<t?0:l<0?-1:1;if(!a)if(i.isInsideExtent(e,r,e.hideSkirtsDistanceFromExtentMargin)){var u=i.tiltToExtentEdge(e,r);u>e.hideSkirtsMinimumCameraTilt&&u<e.hideSkirtsMaximumCameraTilt&&(s=0)}else s=0;e.skirtScale=s},r.isTiledLayer=function(e){return e&&"base-tile"===e.type||"tile"===e.type||"elevation"===e.type||"base-elevation"===e.type||"open-street-map"===e.type||"web-tile"===e.type||"wmts"===e.type||"vector-tile"===e.type},r.isVectorTileLayer=function(e){return e&&e.isInstanceOf(i)},r.isTileLayerView=s,r.isVectorTileLayerView=u,r.isWMTSLayerView=p,r.isElevationLayerView=c,r.isTiledLayerView=function(e){return e&&(s(e)||c(e)||u(e)||p(e))},r.useFetchTileForLayer=function(e){return e.fetchTile&&!(e.fetchTile===n.prototype.fetchTile||e.fetchTile===t.prototype.fetchTile)};var v=null;r.getKnownTiledServiceLevelCap=function(e){v||y();var r=e&&e.replace(/https?:/,"");return r in v?v[r]:1/0},r.prepareKnownTiledServiceLevelCaps=y,r.checkIfTileInfoSupportedForView=d,r.getTiledLayerInfo=function(e,r,t){var n,i;if("wmts"===e.type){var a=e.activeLayer;if(a){var o=a.tileMatrixSet;if(o)n=o.tileInfo,i=o.fullExtent;else{var l=a.tileMatrixSets;if(l){var s=l.find(function(e){return null==d(e.tileInfo,e.fullExtent,r,t)});if(s)return{tileInfo:s.tileInfo,fullExtent:s.fullExtent}}}}}else n="vector-tile"===e.type?e.compatibleTileInfo256:e.tileInfo,i=e.fullExtent;return n&&i&&null==d(n,i,r,t)?{tileInfo:n,fullExtent:i}:{tileInfo:null,fullExtent:null}}}.apply(null,n))||(e.exports=i)},1771:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(9),t(2),t(1552),t(1547),t(1759)],void 0===(i=function(e,r,t,n,i,a,o,l,s){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.minDataLevel=0,r.maxDataLevel=1/0,r._isUpdating=!1,r}return t(r,e),Object.defineProperty(r.prototype,"imageFormatIsOpaque",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isOpaque",{get:function(){return this.fullOpacity>=1&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0}),r.prototype.getTileUrl=function(e,r,t){return this.layer.getTileUrl(e,r,t)},r.prototype.updatingChanged=function(e){this._isUpdating=e,this.notifyChange("updating")},r.prototype.isUpdating=function(){return this._isUpdating},r.prototype._getTileInfoSupportError=function(e,r){var t=s.checkIfTileInfoSupportedForView(e,r,this.view.spatialReference,this.view.basemapTerrain.manifold);if(t){var n={layer:this.layer,error:t},a=void 0;switch(t.name){case"tilingscheme:local-gcs-not-supported":a=new i("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",n);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":a=new i("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",n);break;default:a=new i("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",n)}return a}return null},r.prototype._getTileInfoCompatibilityError=function(e,r){return r.compatibleWith(e)?null:new i("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")},r.prototype._updateMinMaxDataLevel=function(){var e,r=1/0,t=0;this.tileInfo.lods.forEach(function(e){r=Math.min(e.level,r),t=Math.max(e.level,t)}),e=[r,t],this.minDataLevel=e[0],this.maxDataLevel=e[1]},n([a.property({readOnly:!0})],r.prototype,"imageFormatIsOpaque",null),n([a.property(l.updatingPercentage)],r.prototype,"updatingPercentage",void 0),n([a.property(l.updatingPercentageValue)],r.prototype,"updatingPercentageValue",void 0),n([a.property()],r.prototype,"fullExtent",void 0),n([a.property({readOnly:!0,dependsOn:["fullOpacity","imageFormatIsOpaque"]})],r.prototype,"isOpaque",null),n([a.property()],r.prototype,"layer",void 0),n([a.property()],r.prototype,"minDataLevel",void 0),n([a.property()],r.prototype,"maxDataLevel",void 0),n([a.property()],r.prototype,"tileInfo",void 0),n([a.subclass("esri.views.3d.layers.TiledLayerView3D")],r)}(a.declared(o))}.apply(null,n))||(e.exports=i)},1772:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(9),t(36),t(82),t(471),t(451)],void 0===(i=function(e,r,t,n,i,a,o){function l(e,r,t,i){n.vec3.copy(u,t),u[i]=r[i];var a,o=n.vec3.subtract(u,u,r),l=n.vec3.subtract(p,e,r),s=n.vec3.dot(l,o),c=n.vec3.dot(o,o);a=s<=0?r:c<=s?t:n.vec3.add(u,r,n.vec3.scale(o,o,s/c));var y=n.vec3.subtract(u,e,a);return Math.PI/2-Math.atan(y[2]/Math.sqrt(y[0]*y[0]+y[1]*y[1]))}function s(e,r){var n=e.lods,l=n[0].resolution*Math.pow(2,n[0].level),s=[l*e.size[0],l*e.size[1]],u=[e.origin.x,e.origin.y],p=i.fromExtent(r),c=i.create();o.computeRowColExtent(p,s,u,c);var y=(c[2]-c[0])*(c[3]-c[1]);if(y>a.MAX_ROOT_TILES){var d=n[0].scale*Math.pow(2,n[0].level),f=Math.max((p[3]-p[1])/e.size[1],(p[2]-p[0])/e.size[0])*d/l,v=Math.floor(Math.log(f)/Math.log(10));return f=Math.ceil(f/Math.pow(10,v))*Math.pow(10,v),new t("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(d).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+f.toLocaleString()+".",{level0Scale:d,suggestedLevel0Scale:f,requiredNumRootTiles:y,allowedNumRootTiles:a.MAX_ROOT_TILES})}return null}Object.defineProperty(r,"__esModule",{value:!0});var u=n.vec3f64.create(),p=n.vec3f64.create(),c=n.vec3f64.create(),y=n.vec3f64.create();r.isInsideExtent=function(e,r,t){void 0===t&&(t=0);var n=e.extent;if(0===t)return i.containsPoint(n,r);var a=Math.min(n[2]-n[0],n[3]-n[1]);return i.containsPointWithMargin(n,r,t*a)},r.tiltOnEdge=l,r.tiltToExtentEdge=function(e,r){var t=e.getElevationBounds(),n=e.extent,i=.5*(t[0]+t[1]);c[0]=n[0],c[1]=n[1],c[2]=i,y[0]=n[2],y[1]=n[3],y[2]=i;var a=1/0,o=1/0;return r[0]<c[0]?a=l(r,c,y,0):r[0]>y[0]&&(a=l(r,y,c,0)),r[1]<c[1]?o=l(r,c,y,1):r[1]>y[1]&&(o=l(r,y,c,1)),Math.min(a,o)},r.checkIfTileInfoSupportedForViewSR=function(e,r,n){if(e.spatialReference.isGeographic)return new t("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var i=o.checkUnsupported(e);return i||s(e,r)||(n&&!e.spatialReference.equals(n)?new t("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}}.apply(null,n))||(e.exports=i)},1773:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(9),t(451)],void 0===(i=function(e,r,t,n){Object.defineProperty(r,"__esModule",{value:!0}),r.isInsideExtent=function(e,r,t){return void 0===t&&(t=0),!0},r.tiltToExtentEdge=function(e,r){return 0},r.checkIfTileInfoSupportedForViewSR=function(e,r,i){var a=e.lods.length-1;if(e.spatialReference.isWebMercator){if(!n.makeWebMercatorAuxiliarySphere(a).compatibleWith(e))return new t("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!e.spatialReference.isWGS84)return new t("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!n.makeWGS84WithTileSize(e.size[1],a).compatibleWith(e))return new t("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme")}if(i&&!e.spatialReference.equals(i))return new t("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}}.apply(null,n))||(e.exports=i)},1897:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(301),t(9),t(6),t(142)],void 0===(i=function(e,r,t,n,i,a){Object.defineProperty(r,"__esModule",{value:!0}),r.checkArcGISServiceVersionCompatibility=function(e){if(!a.isHostedAgolService(e.url)){if(e.version<10.22){var r=new n("layerview:service-version-too-old","Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: "+e.version,{minVersion:10.22,detectedVersion:e.version});return i.reject(r)}if(10.22!==e.version||a.isHostedSecuredProxyService(e.url,e.get("portalItem.id")))return i.resolve();var o=function(e){var r=null,t=e.search(/\/rest\/services\//i);return t>0&&(r=e.substring(0,t+6)),r}(e.url),l=new n("tiledlayerview3d:service-missing-cors-patch","Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied.");return t(o+"self?f=json",{headers:{"X-Requested-With":null},timeout:1e4,handleAs:"json"}).then(function(e){if(!e||e.error)throw l}).catch(function(){throw l})}},r.throwIfError=function(e){if(e)throw e}}.apply(null,n))||(e.exports=i)},438:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(10),t(1),t(0),t(72),t(33),t(29),t(6),t(23),t(2),t(69),t(455),t(1657),t(194),t(192),t(440),t(439),t(1658),t(1426),t(142),t(93)],void 0===(i=function(e,r,n,i,a,o,l,s,u,p,c,y,d,f,v,h,b,g,m,w,S,L){var T=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(e){function r(r,t){var n=e.call(this)||this;return n.spatialReference=null,n.sublayers=null,n.type="tile",n.url=null,n}return i(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?n({url:e},r):e},r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()})),this.when()},Object.defineProperty(r.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"operationalLayerType",{get:function(){if(this.capabilities)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),r.prototype.readSpatialReference=function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&l.SpatialReference.fromJSON(e)},Object.defineProperty(r.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),r.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return p.urlToObject(e).path}):null},r.prototype.fetchTile=function(e,r,t,n){var i=this.getTileUrl(e,r,t),a={responseType:"image"};return n&&n.timestamp&&(a.query={_ts:n.timestamp}),s(i,a).then(function(e){return e.data})},r.prototype.getTileUrl=function(e,r,t){var i=!this.tilemapCache&&this.supportsBlankTile,a=o.objectToQuery(n({},this.parsedUrl.query,{blankTile:!i&&null,token:this.token?encodeURIComponent(this.token):null})),l=this.tileServers;return(l&&l.length?l[r%l.length]:this.parsedUrl.path)+"/tile/"+e+"/"+r+"/"+t+(a?"?"+a:"")},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return u.create(function(e){return t.e(13).then(function(){var r=[t(1725)];e.apply(null,r)}.bind(this)).catch(t.oe)});case"3d":return u.create(function(e){return Promise.all([t.e(5),t.e(12)]).then(function(){var r=[t(1726)];e.apply(null,r)}.bind(this)).catch(t.oe)})}},r.prototype._fetchService=function(){var e=this;return u.create(function(r,t){e.resourceInfo?r({data:e.resourceInfo}):s(e.parsedUrl.path,{query:n({f:"json"},e.parsedUrl.query),responseType:"json"}).then(r,t)}).then(function(r){if(r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl}),10.1===e.version&&!S.isHostedAgolService(e.url))return w.fetchServerVersion(e.url).then(function(r){e.read({currentVersion:r})}).catch(function(){})})},r.prototype._getMapName=function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},r.prototype._getDefaultAttribution=function(e){if(e){var r;e=e.toLowerCase();for(var t=0,n=T.length;t<n;t++)if((r=T[t]).toLowerCase().indexOf(e)>-1)return p.makeAbsolute("//static.arcgis.com/attribution/"+r)}},r.prototype._getDefaultTileServers=function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]},a([c.property({readOnly:!0,dependsOn:["parsedUrl"]})],r.prototype,"attributionDataUrl",null),a([c.property({readOnly:!0})],r.prototype,"operationalLayerType",null),a([c.property()],r.prototype,"popupTemplates",void 0),a([c.property({type:l.SpatialReference})],r.prototype,"spatialReference",void 0),a([c.reader("spatialReference",["spatialReference","tileInfo"])],r.prototype,"readSpatialReference",null),a([c.property()],r.prototype,"resourceInfo",void 0),a([c.property({readOnly:!0})],r.prototype,"sublayers",void 0),a([c.property({dependsOn:["parsedUrl"],readOnly:!0})],r.prototype,"tileServers",null),a([c.cast("tileServers")],r.prototype,"castTileServers",null),a([c.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),a([c.property(L.url)],r.prototype,"url",void 0),a([c.subclass("esri.layers.TileLayer")],r)}(c.declared(y,m.default,f,d,g,v,h,b))}.apply(null,n))||(e.exports=i)}}]);