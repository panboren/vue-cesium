(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/Ym7":function(e,i,t){"use strict";t.d(i,"a",function(){return r}),t.d(i,"b",function(){return n});var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"viewer",staticStyle:{width:"100%",height:"100%"},attrs:{id:"cesiumContainer"}},[this._t("default")],2)},n=[]},BJZl:function(e,i,t){var r,n,o;n=[i,t("iwog")],void 0===(o="function"==typeof(r=function(i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r,n=(r=t)&&r.__esModule?r:{default:r},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i.default={inject:{$services:"services"},provide:function(){return e={},i="services",t=this.getServices(),i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e;var e,i,t},methods:{getServices:function(){return(0,n.default)({},this.$services||{})},isEmptyObj:function(e){for(var i in e)return!1;return!0},processArray:function(e){for(var i=e.length-1;i>=0;i--)"object"===o(e[i])&&this.removeNullItem(e[i],e,i);return 0===e.length},proccessObject:function(e){for(var i in e)null===e[i]||void 0===e[i]?delete e[i]:"object"===o(e[i])&&this.isEmptyObj(e[i])&&delete e[i]},removeNullItem:function(e,i,t){var r={}.toString.call(e);"[object Array]"===r?this.processArray(e):"[object Object]"===r&&this.proccessObject(e)}},beforeCreate:function(){for(var e=this.$parent;e&&(null==e._provided||null==e._provided.services);)e=e.$parent;null!=e&&null!=e._provided.services||delete this.$options.inject.$services}},e.exports=i.default})?r.apply(i,n):r)||(e.exports=o)},CyRr:function(e,i,t){"use strict";t.r(i);var r=t("ji+2"),n=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(i,e,function(){return r[e]})}(o);var a=t("/Ym7"),s=t("JFUb"),c=Object(s.a)(n.a,a.a,a.b,!1,null,null,null);i.default=c.exports},DgvE:function(e,i,t){var r,n,o;n=[i],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isFunction=function(e){return"function"==typeof e},e.checkType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},e.toKebabCase=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).replace(/^-/,"")},e.getDocumentByClassName=function(e,i){var t=void 0,r={};try{Array.prototype.slice.call(e).forEach(function(e){if(e.className===i)throw t=e,r})}catch(e){if(e!==r)throw e}return t}})?r.apply(i,n):r)||(e.exports=o)},HgmE:function(e,i,t){var r,n,o;n=[i,t("WprB"),t("DgvE")],void 0===(o="function"==typeof(r=function(i,t,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,i){var n=this,o=i||t.Events[(0,r.toKebabCase)(this.$options._componentTag)];o&&o.forEach(function(i){if(e[i]){var t="on"===i.slice(0,2),r=t?i.slice(2):i,o=n.$listeners[r];o&&e[i].addEventListener(o.fns)}})},e.exports=i.default})?r.apply(i,n):r)||(e.exports=o)},WprB:function(e,i,t){var r,n,o;n=[i],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Events={"cesium-viewer":["selectedEntityChanged","trackedEntityChanged"],"cesium-3dtileset":["allTilesLoaded","initialTilesLoaded","loadProgress","tileFailed","tileLoad","tileUnload","tileVisible"],"imagery-layer-events":["errorEvent"],"entity-events":["definitionChanged"],"viewer-mouse-events":["LEFT_CLICK","LEFT_DOUBLE_CLICK","LEFT_DOWN","LEFT_UP","MIDDLE_CLICK","MIDDLE_DOWN","MIDDLE_UP","MOUSE_MOVE","PINCH_END","PINCH_MOVE","PINCH_START","RIGHT_CLICK","RIGHT_DOWN","RIGHT_UP","WHEEL"],"viewer-children-events":[{name:"imageryLayers",events:["layerAdded","layerMoved","layerRemoved","layerShownOrHidden"]},{name:"dataSources",events:["dataSourceAdded","dataSourceMoved","dataSourceRemoved"]},{name:"entities",events:["collectionChanged"]},{name:"scene",events:["morphComplete","morphStart","postRender","postUpdate","preRender","preUpdate","renderError","terrainProviderChanged"]},{name:"camera",events:["changed","moveEnd","moveStart"]},{name:"clock",events:["onStop","onTick"]},{name:"terrainProvider",events:["errorEvent"]}]}})?r.apply(i,n):r)||(e.exports=o)},iwog:function(e,i,t){var r,n,o;n=[i,t("pHxd")],void 0===(o="function"==typeof(r=function(i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(){for(var e=void 0,i=arguments.length,t=Array(i),r=0;r<i;r++)t[r]=arguments[r];return"object"!==o(t[t.length-1])&&(e=t.pop()),t.slice(1).reduce(function(i,t,r){return(0,n.default)(i,t,e)},t[0])};var r,n=(r=t)&&r.__esModule?r:{default:r},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=i.default})?r.apply(i,n):r)||(e.exports=o)},"ji+2":function(e,i,t){(function(r){var n,o,a,s;s=function(i,t,n,o,a,s,c){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var d=v(t),l=v(o),u=v(a);function v(e){return e&&e.__esModule?e:{default:e}}i.default={name:"cesium-viewer",mixins:[l.default],props:{cesiumPath:String,animation:{type:Boolean,default:!1},baseLayerPicker:{type:Boolean,default:!1},fullscreenButton:{type:Boolean,default:!1},vrButton:{type:Boolean,default:!1},geocoder:{type:Boolean,default:!1},homeButton:{type:Boolean,default:!1},infoBox:{type:Boolean,default:!0},sceneModePicker:{type:Boolean,default:!1},selectionIndicator:{type:Boolean,default:!0},timeline:{type:Boolean,default:!1},navigationHelpButton:{type:Boolean,default:!1},navigationInstructionsInitiallyVisible:{type:Boolean,default:!1},scene3DOnly:{type:Boolean,default:!1},shouldAnimate:{type:Boolean,default:!1},clockViewModel:Object,selectedImageryProviderViewModel:Object,imageryProviderViewModels:Object,selectedTerrainProviderViewModel:Object,terrainProviderViewModels:Object,imageryProvider:Object,terrainProvider:Object,skyBox:Object,skyAtmosphere:Object,fullscreenElement:{type:Element|String},useDefaultRenderLoop:{type:Boolean,default:!0},targetFrameRate:Number,showRenderLoopErrors:{type:Boolean,default:!0},automaticallyTrackDataSourceClocks:{type:Boolean,default:!0},contextOptions:Object,sceneMode:{type:Number,default:3},mapProjection:Object,globe:Object,orderIndependentTranslucency:{type:Boolean,default:!0},creditContainer:String,creditViewport:String,dataSources:Object,terrainExaggeration:{type:Number,default:1},shadows:{type:Boolean,default:!1},terrainShadows:{type:Number,default:3},mapMode2D:{type:Number,default:1},projectionPicker:{type:Boolean,default:!1},requestRenderMode:{type:Boolean,default:!1},maximumRenderTimeChange:{type:Number,default:0},navigation:{type:Boolean,default:!1},logo:{type:Boolean,default:!0},accessToken:String,camera:{type:Object,default:function(){return{position:{longitude:105,latitude:29.999999999999993,height:19059568.497290563},heading:360,pitch:-90,roll:0}}}},watch:{selectionIndicator:function(e){var i=this.Cesium,t=this.viewer,r=this.viewerContainer;if(!i.defined(t.selectionIndicator)||t.selectionIndicator.isDestroyed()||e){if(!i.defined(t.selectionIndicator)||t.selectionIndicator.isDestroyed()){var n=document.createElement("div");n.className="cesium-viewer-selectionIndicatorContainer",r.appendChild(n);var o=new i.SelectionIndicator(n,t.scene);t._selectionIndicator=o}}else{t.selectionIndicator.destroy(),t._selectionIndicator=void 0;var a=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-selectionIndicatorContainer");r.removeChild(a)}},infoBox:function(e){var i=this.Cesium,t=this.viewer,r=this.viewerContainer;if(!i.defined(t.infoBox)||t.infoBox.isDestroyed()||e){if(!i.defined(t.infoBox)||t.infoBox.isDestroyed()){var n=document.createElement("div");n.className="cesium-viewer-infoBoxContainer",r.appendChild(n);var o=new i.InfoBox(n),a=o.viewModel;t._eventHelper.add(a.cameraClicked,t._onInfoBoxCameraClicked,t),t._eventHelper.add(a.closeClicked,t._onInfoBoxClockClicked,t),t._infoBox=o,t._forceResize=!0,t.resize()}}else{t.infoBox.destroy(),t._infoBox=void 0;var c=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-infoBoxContainer");r.removeChild(c)}},geocoder:function(e){var i=this.Cesium,t=this.viewer,r=this.resizeToolbar,n=this.viewerContainer,o=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-toolbar");if(!i.defined(t.geocoder)||t.geocoder.isDestroyed()||e){if(!i.defined(t.geocoder)||t.geocoder.isDestroyed()){var a=document.createElement("div");a.className="cesium-viewer-geocoderContainer",o.appendChild(a);var c=new i.Geocoder({container:a,geocoderServices:i.defined(this.geocoder)?i.isArray(this.geocoder)?this.geocoder:[this.geocoder]:void 0,scene:t.scene,viewer:t});t._eventHelper.add(c.viewModel.search.beforeExecute,t._clearObjects,t),t._geocoder=c,r(o,a)}}else{t.geocoder.destroy(),t._geocoder=void 0;var d=(0,s.getDocumentByClassName)(o.children,"cesium-viewer-geocoderContainer");o.removeChild(d)}},homeButton:function(e){var i=this.Cesium,t=this.viewer,r=this.resizeToolbar,n=this.viewerContainer,o=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-toolbar");if(!i.defined(t.homeButton)||t.homeButton.isDestroyed()||e){if(!i.defined(t.homeButton)||t.homeButton.isDestroyed()){var a=new i.HomeButton(o,t.scene);i.defined(t.geocoder)&&t._eventHelper.add(a.viewModel.command.afterExecute,function(){var e=t.geocoder.viewModel;e.searchText="",e.isSearchInProgress&&e.search()}),t._eventHelper.add(a.viewModel.command.beforeExecute,t._clearTrackedObject,t),t._homeButton=a,r(o,a)}}else t.homeButton.destroy(),t._homeButton=void 0},sceneModePicker:function(e){var i=this.Cesium,t=this.viewer,r=this.resizeToolbar,n=this.viewerContainer,o=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-toolbar");if(!i.defined(t.sceneModePicker)||t.sceneModePicker.isDestroyed()||e){if(!i.defined(t.sceneModePicker)||t.sceneModePicker.isDestroyed()){if(!0===this.sceneModePicker&&this.scene3DOnly)throw new i.DeveloperError("options.sceneModePicker is not available when options.scene3DOnly is set to true.");if(!this.scene3DOnly&&!0===this.sceneModePicker){var a=new i.SceneModePicker(o,t.scene);t._sceneModePicker=a,r(o,a)}}}else t.sceneModePicker.destroy(),t._sceneModePicker=void 0},projectionPicker:function(e){var i=this.Cesium,t=this.viewer,r=this.resizeToolbar,n=this.viewerContainer,o=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-toolbar");if(!i.defined(t.projectionPicker)||t.projectionPicker.isDestroyed()||e){if(!i.defined(t.projectionPicker)||t.projectionPicker.isDestroyed()){var a=new i.ProjectionPicker(o,t.scene);t._projectionPicker=a,r(o,a)}}else t.projectionPicker.destroy(),t._projectionPicker=void 0},baseLayerPicker:function(e){var i=this.Cesium,t=this.viewer,r=this.resizeToolbar,n=this.viewerContainer,o=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-toolbar");if(!i.defined(t.baseLayerPicker)||t.baseLayerPicker.isDestroyed()||e){if(!i.defined(t.baseLayerPicker)||t.baseLayerPicker.isDestroyed()){var a=!(i.defined(t.globe)&&!1===this.globe||i.defined(t.baseLayerPicker)&&!1===this.baseLayerPicker);if(a&&i.defined(this.imageryProvider))throw new i.DeveloperError("options.imageryProvider is not available when using the BaseLayerPicker widget.\nEither specify options.selectedImageryProviderViewModel instead or set options.baseLayerPicker to false.");if(!a&&i.defined(this.selectedImageryProviderViewModel))throw new i.DeveloperError("options.selectedImageryProviderViewModel is not available when not using the BaseLayerPicker widget.\nEither specify options.imageryProvider instead or set options.baseLayerPicker to true.");if(a&&i.defined(this.terrainProvider))throw new i.DeveloperError("options.terrainProvider is not available when using the BaseLayerPicker widget.\nEither specify options.selectedTerrainProviderViewModel instead or set options.baseLayerPicker to false.");if(!a&&i.defined(this.selectedTerrainProviderViewModel))throw new i.DeveloperError("options.selectedTerrainProviderViewModel is not available when not using the BaseLayerPicker widget.\nEither specify options.terrainProvider instead or set options.baseLayerPicker to true.");if(a){t.imageryLayers.removeAll();var c=i.defaultValue(this.imageryProviderViewModels,i.createDefaultImageryProviderViewModels()),d=i.defaultValue(this.terrainProviderViewModels,i.createDefaultTerrainProviderViewModels()),l=new i.BaseLayerPicker(o,{globe:t.scene.globe,imageryProviderViewModels:c,selectedImageryProviderViewModel:c[0],terrainProviderViewModels:d,selectedTerrainProviderViewModel:d[0]}),u=o.getElementsByClassName("cesium-baseLayerPicker-dropDown")[0];t._baseLayerPickerDropDown=u,t._baseLayerPicker=l,r(o,l)}}}else t.imageryLayers.removeAll(),t.baseLayerPicker.destroy(),t._baseLayerPicker=void 0,i.defined(i.SuperMapImageryProvider)?t.imageryLayers.add(new i.ImageryLayer(new i.SingleTileImageryProvider({url:i.buildModuleUrl("Assets/Textures/GlobalBkLayer.jpg")}))):t.imageryLayers.addImageryProvider(i.createTileMapServiceImageryProvider({url:i.buildModuleUrl("Assets/Textures/NaturalEarthII")}))},navigationHelpButton:function(e){var i=this.Cesium,t=this.viewer,r=this.resizeToolbar,n=this.viewerContainer,o=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-toolbar");if(!i.defined(t.navigationHelpButton)||t.navigationHelpButton.isDestroyed()||e){if(!i.defined(t.navigationHelpButton)||t.navigationHelpButton.isDestroyed()){var a=!0;try{if(i.defined(window.localStorage)){var c=window.localStorage.getItem("cesium-hasSeenNavHelp");i.defined(c)&&Boolean(c)?a=!1:window.localStorage.setItem("cesium-hasSeenNavHelp","true")}}catch(e){}var d=new i.NavigationHelpButton({container:o,instructionsInitiallyVisible:i.defaultValue(this.navigationInstructionsInitiallyVisible,a)});t._navigationHelpButton=d,r(o,d)}}else t.navigationHelpButton.destroy(),t._navigationHelpButton=void 0},animation:function(e){var i=this.Cesium,t=this.viewer,r=this.viewerContainer;if(!i.defined(t.animation)||t.animation.isDestroyed()||e){if(!i.defined(t.animation)||t.animation.isDestroyed()){var n=document.createElement("div");n.className="cesium-viewer-animationContainer",this.viewerContainer.appendChild(n);var o=new i.Animation(n,new i.AnimationViewModel(t.clockViewModel));t._animation=o,t._forceResize=!0,t.resize()}}else{t.animation.destroy();var a=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-animationContainer");r.removeChild(a),t._animation=void 0,t._forceResize=!0,t.resize()}},timeline:function(e){var i=this.Cesium,t=this.viewer,r=this.viewerContainer,n=this.onTimelineScrubfunction;if(!i.defined(t.timeline)||t.timeline.isDestroyed()||e){if(!i.defined(t.timeline)||t.timeline.isDestroyed()){var o=document.createElement("div");o.className="cesium-viewer-timelineContainer",r.appendChild(o);var a=new i.Timeline(o,t.clock);a.addEventListener("settime",n,!1),a.zoomTo(t.clock.startTime,t.clock.stopTime),t._timeline=a,t._forceResize=!0,t.resize()}}else{t.timeline.destroy(),t._timeline=void 0;var c=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-timelineContainer");r.removeChild(c),t._forceResize=!0,t.resize()}},fullscreenButton:function(e){var i=this.Cesium,t=this.viewer,r=this.viewerContainer;if(!i.defined(t.fullscreenButton)||t.fullscreenButton.isDestroyed()||e){if(!i.defined(t.fullscreenButton)||t.fullscreenButton.isDestroyed()){var n=document.createElement("div");n.className="cesium-viewer-fullscreenContainer",r.appendChild(n);var o=new i.FullscreenButton(n,this.$refs.viewer);t._fullscreenButton=o,t._forceResize=!0,t.resize()}}else{t.fullscreenButton.destroy(),t._fullscreenButton=void 0;var a=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-fullscreenContainer");r.removeChild(a),t._forceResize=!0,t.resize()}},fullscreenElement:function(e){var i=this.Cesium,t=this.viewer;i.defined(t.fullscreenButton)&&i.defined(e)&&(this.viewer.fullscreenButton.viewModel.fullscreenElement=e)},vrButton:function(e){var i=this.Cesium,t=this.viewer,r=this.viewerContainer,n=this.enableVRUI;if(!i.defined(t.vrButton)||t.vrButton.isDestroyed()||e){if(!i.defined(t.vrButton)||t.vrButton.isDestroyed()){var o=document.createElement("div");o.className="cesium-viewer-vrContainer",r.appendChild(o);var a=new i.VRButton(o,t.scene,r),c=a.viewModel._command;a.viewModel._command=function(e){c(),n(t,e.isVRMode)},t._vrButton=a,t._forceResize=!0,t.resize()}}else{t.vrButton.destroy(),t._vrButton=void 0;var d=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-vrContainer");r.removeChild(d),t._forceResize=!0,t.resize()}},useDefaultRenderLoop:function(e){this.viewer.useDefaultRenderLoop=e},navigation:function(e){var i=this.Cesium,t=this.viewer,r=this.viewerContainer;if(i.defined(t.navigation)&&!e){t.navigation.viewModel.eventHelper.removeAll(),i.destroyObject(t.navigation.viewModel),t._navigation=void 0;var n=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-navigationContainer");r.removeChild(n)}else if(!i.defined(t.navigation)){var o=document.createElement("div");o.className="cesium-viewer-navigationContainer",r.appendChild(o);var a=new i.Navigation({container:o,viewer:t,scene:t.scene});t._navigation=a,t._forceResize=!0,t.resize()}},sceneMode:function(e){var i=this.Cesium,t=this.viewer;i.SceneMode.COLUMBUS_VIEW!==e&&i.SceneMode.MORPHING!==e&&i.SceneMode.SCENE2D!==e&&i.SceneMode.SCENE3D!==e||(t.scene.mode=e)},shouldAnimate:function(e){this.viewer.clock.shouldAnimate=e},terrainExaggeration:function(e){this.viewer.scene._terrainExaggeration=e},shadows:function(e){this.viewer.scene.shadowMap.enabled=e},terrainProvider:function(e){this.viewer.terrainProvider=e},camera:{handler:function(e){var i=this.Cesium;this.viewer.camera.setView({destination:i.Cartesian3.fromDegrees(e.position.longitude,e.position.latitude,e.position.height),orientation:{heading:i.Math.toRadians(e.heading),pitch:i.Math.toRadians(e.pitch),roll:i.Math.toRadians(e.roll)}})},deep:!0},imageryProvider:function(e,i){var t=this.Cesium,r=this.viewer;if(t.defined(e)){for(var n=0;n<r.imageryLayers.length;n++)r.imageryLayers[n].imageryProvider===i&&r.imageryLayers.remove(r.imageryLayers[n]);r.imageryLayers.addImageryProvider(e)}}},methods:{onTimelineScrubfunction:function(e){var i=e.clock;i.currentTime=e.timeJulian,i.shouldAnimate=!1},resizeToolbar:function(e,i){Array.prototype.slice.call(e.children).forEach(function(e){switch(e.className){case"cesium-viewer-geocoderContainer":e.customIndex=1;break;case"cesium-button cesium-toolbar-button cesium-home-button":e.customIndex=2;break;case"cesium-sceneModePicker-wrapper cesium-toolbar-button":e.customIndex=3;break;case"cesium-projectionPicker-wrapper cesium-toolbar-button":e.customIndex=4;break;case"cesium-button cesium-toolbar-button":case"cesium-baseLayerPicker-dropDown":e.customIndex=5;break;case"cesium-navigationHelpButton-wrapper":e.customIndex=6}});var t=[];Array.prototype.slice.call(e.children).forEach(function(e){t.push(e)}),t.sort(function(e,i){return e.customIndex-i.customIndex});for(var r=0;r<t.length;r++)e.appendChild(t[r])},enableVRUI:function(e,i){var t=this.Cesium,r=e._geocoder,n=e._homeButton,o=e._sceneModePicker,a=e._projectionPicker,s=e._baseLayerPicker,c=e._animation,d=e._timeline,l=e._fullscreenButton,u=e._infoBox,v=e._selectionIndicator,m=i?"hidden":"visible";if(t.defined(r)&&(r.container.style.visibility=m),t.defined(n)&&(n.container.style.visibility=m),t.defined(o)&&(o.container.style.visibility=m),t.defined(a)&&(a.container.style.visibility=m),t.defined(s)&&(s.container.style.visibility=m),t.defined(c)&&(c.container.style.visibility=m),t.defined(d)&&(d.container.style.visibility=m),t.defined(l)&&l.viewModel.isFullscreenEnabled&&(l.container.style.visibility=m),t.defined(u)&&(u.container.style.visibility=m),t.defined(v)&&(v.container.style.visibility=m),e._container){var f=i||!t.defined(l)?0:l.container.clientWidth;e._vrButton.container.style.right=f+"px",e.forceResize()}},init:function(e){var i=this;if(!this.viewer){var t=this.$refs.viewer;if(!e.defined(e.SuperMapImageryProvider)){var r=void 0;r=this._Cesium?this._Cesium().accessToken:this.accessToken,e.Ion.defaultAccessToken=r}var o=this.animation,a=this.baseLayerPicker,c=this.fullscreenButton,l=this.vrButton,u=this.geocoder,v=this.homeButton,m=this.infoBox,f=this.sceneModePicker,h=this.selectionIndicator,y=this.timeline,p=this.navigationHelpButton,g=this.navigationInstructionsInitiallyVisible,w=this.scene3DOnly,b=this.shouldAnimate,C=this.clockViewModel,P=this.selectedImageryProviderViewModel,B=this.imageryProviderViewModels,_=this.selectedTerrainProviderViewModel,M=this.terrainProviderViewModels,k=this.imageryProvider,E=this.terrainProvider,D=this.skyBox,I=this.skyAtmosphere,S=this.fullscreenElement,L=this.useDefaultRenderLoop,x=this.targetFrameRate,j=this.showRenderLoopErrors,T=this.automaticallyTrackDataSourceClocks,N=this.contextOptions,O=this.sceneMode,V=this.mapProjection,R=this.globe,H=this.orderIndependentTranslucency,z=this.creditContainer,A=this.creditViewport,U=this.dataSources,$=this.terrainExaggeration,W=this.shadows,F=this.terrainShadows,G=this.mapMode2D,J=this.projectionPicker,K=this.requestRenderMode,q=this.maximumRenderTimeChange,Z=this.navigation,Y={animation:o,baseLayerPicker:a,fullscreenButton:c,vrButton:l,geocoder:u,homeButton:v,infoBox:m,sceneModePicker:f,selectionIndicator:h,timeline:y,navigationHelpButton:p,navigationInstructionsInitiallyVisible:g,scene3DOnly:w,shouldAnimate:b,clockViewModel:C,selectedImageryProviderViewModel:P,imageryProviderViewModels:B,selectedTerrainProviderViewModel:_,terrainProviderViewModels:M,imageryProvider:this.isEmptyObj(k)?e.createTileMapServiceImageryProvider({url:e.buildModuleUrl("Assets/Textures/NaturalEarthII")}):k,terrainProvider:E,skyBox:D,skyAtmosphere:I,fullscreenElement:this.isEmptyObj(S)?this.$refs.viewer:S,useDefaultRenderLoop:L,targetFrameRate:x,showRenderLoopErrors:j,automaticallyTrackDataSourceClocks:T,contextOptions:N,sceneMode:O,mapProjection:V,globe:R,orderIndependentTranslucency:H,creditContainer:z,creditViewport:A,dataSources:U,terrainExaggeration:$,shadows:W,terrainShadows:F,mapMode2D:G,projectionPicker:J,requestRenderMode:K,maximumRenderTimeChange:q,navigation:Z};this.removeNullItem(Y);var Q=new e.Viewer(t,Y);this.viewer=Q,d.default.call(this,Q),n.Events["viewer-children-events"].forEach(function(e){d.default.call(i,Q[e.name],e.events)});var X=new e.ScreenSpaceEventHandler(Q.canvas);if(n.Events["viewer-mouse-events"].forEach(function(t){var r=i.$listeners[t];r&&X.setInputAction(r.fns,e.ScreenSpaceEventType[t])}),e.defined(this.camera)&&Q.camera.setView({destination:e.Cartesian3.fromDegrees(this.camera.position.longitude,this.camera.position.latitude,this.camera.position.height),orientation:{heading:e.Math.toRadians(this.camera.heading),pitch:e.Math.toRadians(this.camera.pitch),roll:e.Math.toRadians(this.camera.roll)}}),this.viewerContainer=(0,s.getDocumentByClassName)(this.$refs.viewer.children,"cesium-viewer"),e.defined(e.SuperMapImageryProvider)&&!this.logo){var ee=Q.scene.frameState.creditDisplay;ee.container.removeChild(ee._imageContainer)}this.logo||(Q.cesiumWidget.creditContainer.style.display="none"),this.$emit("ready",{Cesium:e,viewer:Q})}},initViewer:function(e){this.Cesium=e,this.init(e)},getCesiumScript:function(){if(r.Cesium)return r.Cesium._preloader?r.Cesium._preloader:Promise.resolve(r.Cesium);var e=this.cesiumPath?this.cesiumPath:this._Cesium().cesiumPath;return r.Cesium={},r.Cesium._preloader=new Promise(function(i,t){r._initCesium=function(){i(r.Cesium),r.Cesium._preloader=null,r._initCesium=null};var n=c.dirname(e),o=document.createElement("link");o.rel="stylesheet",r.document.head.appendChild(o),o.href=n+"/Widgets/widgets.css";var a=document.createElement("script");r.document.body.appendChild(a),a.src=e,a.onload=function(){if(r._initCesium(),r.Cesium.SuperMapImageryProvider){var e=document.createElement("script");r.document.body.appendChild(e),e.src=n+"/Workers/zlib.min.js"}}}),r.Cesium._preloader},reset:function(){var e=this.getCesiumScript,i=this.initViewer;e().then(i)},getServices:function(){var e=this;return(0,u.default)({},{get Cesium(){return e.Cesium},get viewer(){return e.viewer}})}},mounted:function(){this.reset()},destroyed:function(){if(r.Cesium){var e=document.getElementsByTagName("script"),i=[],t=!0,n=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var c=a.value;c.src.indexOf("/Cesium.js")>-1&&i.push(c),r.Cesium.SuperMapImageryProvider&&c.src.indexOf("/Workers/zlib.min.js")>-1&&i.push(c)}}catch(e){n=!0,o=e}finally{try{!t&&s.return&&s.return()}finally{if(n)throw o}}i.forEach(function(e){document.getElementsByTagName("body")[0].removeChild(e)});var d=document.getElementsByTagName("link"),l=!0,u=!1,v=void 0;try{for(var m,f=d[Symbol.iterator]();!(l=(m=f.next()).done);l=!0){var h=m.value;h.href.indexOf("Widgets/widgets.css")>-1&&document.getElementsByTagName("head")[0].removeChild(h)}}catch(e){u=!0,v=e}finally{try{!l&&f.return&&f.return()}finally{if(u)throw v}}r.Cesium=null}},data:function(){return{viewer:null,viewerContainer:null}}},e.exports=i.default},o=[i,t("HgmE"),t("WprB"),t("BJZl"),t("iwog"),t("DgvE"),t("33yf")],void 0===(a="function"==typeof(n=s)?n.apply(i,o):n)||(e.exports=a)}).call(this,t("yLpj"))}}]);