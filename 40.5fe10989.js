(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{ASLn:function(s,a,t){var e,r,n;r=[a],void 0===(n="function"==typeof(e=function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{modelUrl:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",distanceMeasuring:!1,areaMeasuring:!1,heightMeasuring:!1}},methods:{ready:function(s){s.Cesium;var a=s.viewer;this.cesiumInstance=s,a.scene.globe.depthTestAgainstTerrain=!0},toggle:function(s){this.$refs[s].measuring=!this.$refs[s].measuring},clear:function(){this.$refs.measureDistance.clear(),this.$refs.measureArea.clear(),this.$refs.measureHeight.clear()},activeEvt:function(s){this[s.type]=s.isActive},readyPromise:function(s){var a=this.cesiumInstance.viewer;a.zoomTo(s,new Cesium.HeadingPitchRange(0,-.5,2*s.boundingSphere.radius))}}},s.exports=a.default})?e.apply(a,r):e)||(s.exports=n)},"CB/E":function(s,a,t){s.exports=t("Zpvu")},HqJt:function(s,a,t){"use strict";t.d(a,"a",function(){return e}),t.d(a,"b",function(){return r});var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("MeasureTool")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("div",{staticClass:"demo-tool"},[t("md-button",{staticClass:"md-raised md-accent",on:{click:function(a){s.toggle("measureDistance")}}},[s._v(s._s(s.distanceMeasuring?"Stop":"Distance"))]),s._v(" "),t("md-button",{staticClass:"md-raised md-accent",on:{click:function(a){s.toggle("measureArea")}}},[s._v(s._s(s.areaMeasuring?"Stop":"Area"))]),s._v(" "),t("md-button",{staticClass:"md-raised md-accent",on:{click:function(a){s.toggle("measureHeight")}}},[s._v(s._s(s.heightMeasuring?"Stop":"Height"))]),s._v(" "),t("md-button",{staticClass:"md-raised md-accent",on:{click:s.clear}},[s._v("Clear")])],1),s._v(" "),t("cesium-viewer",{attrs:{scene3DOnly:""},on:{ready:s.ready}},[t("cesium-3dtileset",{attrs:{url:s.modelUrl},on:{readyPromise:s.readyPromise}}),s._v(" "),t("measure-distance",{ref:"measureDistance",on:{activeEvt:s.activeEvt}}),s._v(" "),t("measure-area",{ref:"measureArea",attrs:{perPositionHeight:!0},on:{activeEvt:s.activeEvt}}),s._v(" "),t("measure-height",{ref:"measureHeight",on:{activeEvt:s.activeEvt}})],1)],1)]],2),s._v(" "),t("h3",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),t("h3",[s._v("measure-area")]),s._v(" "),s._m(2)],1)},r=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("measure-distance")]),this._v(" "),a("code",{pre:!0},[this._v("measure-area")]),this._v(" "),a("code",{pre:!0},[this._v("measure-height")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"toggle('measureDistance')\"")]),s._v(">")]),s._v("{{ distanceMeasuring ? 'Stop' : 'Distance' }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"toggle('measureArea')\"")]),s._v(">")]),s._v("{{ areaMeasuring ? 'Stop' : 'Area' }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"toggle('measureHeight')\"")]),s._v(">")]),s._v("{{ heightMeasuring ? 'Stop' : 'Height' }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"clear"')]),s._v(">")]),s._v("Clear"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("scene3DOnly")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":terrainProvider")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"terrainProvider"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-3dtileset")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"modelUrl"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@readyPromise")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"readyPromise"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-3dtileset")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("measure-distance")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"measureDistance"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("measure-distance")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("measure-area")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":perPositionHeight")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"measureArea"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("measure-area")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("measure-height")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"measureHeight"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("measure-height")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("modelUrl")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("distanceMeasuring")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("areaMeasuring")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("heightMeasuring")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      },\n      toggle (type) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs[type].measuring = !"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs[type].measuring\n      },\n      clear () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.measureDistance.clear()\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.measureArea.clear()\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.measureHeight.clear()\n      },\n      activeEvt (_) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("[_.type] = _.isActive\n      },\n      readyPromise (tileset) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {viewer} = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.zoomTo(tileset, "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.HeadingPitchRange("),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("-0.5")]),s._v(", tileset.boundingSphere.radius * "),t("span",{attrs:{class:"hljs-number"}},[s._v("2.0")]),s._v("))\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("perPositionHeight")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("true")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("A boolean specifying whether or not the the height of each position is used.")])])])])}]},Zpvu:function(s,a,t){"use strict";t.r(a);var e=t("ASLn"),r=t.n(e);for(var n in e)"default"!==n&&function(s){t.d(a,s,function(){return e[s]})}(n);var l=t("HqJt"),v=t("JFUb"),_=Object(v.a)(r.a,l.a,l.b,!1,null,null,null);a.default=_.exports}}]);