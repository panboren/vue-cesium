(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"2QDp":function(s,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return n});var l=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("CesiumWindMap")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("Add a CesiumWindMap to viewer")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("cesium-viewer",{attrs:{scene3DOnly:"",animation:"",timeline:""},on:{ready:s.ready}},[t("imagery-layer",[t("singletile-imagery-provider",{attrs:{url:s.urlLayer}})],1),s._v(" "),t("cesium-windmap",{ref:"windmap",attrs:{data:s.windData,particleSystemOptions:s.particleSystemOptions}})],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("maxParticles")]),s._v(" "),t("vue-slider",{attrs:{min:1,max:65536,interval:1},model:{value:s.particleSystemOptions.maxParticles,callback:function(a){s.$set(s.particleSystemOptions,"maxParticles",a)},expression:"particleSystemOptions.maxParticles"}}),s._v(" "),t("span",[s._v("particleHeight")]),s._v(" "),t("vue-slider",{attrs:{min:1,max:1e4,interval:1},model:{value:s.particleSystemOptions.particleHeight,callback:function(a){s.$set(s.particleSystemOptions,"particleHeight",a)},expression:"particleSystemOptions.particleHeight"}}),s._v(" "),t("span",[s._v("fadeOpacity")]),s._v(" "),t("vue-slider",{attrs:{min:.9,max:.999,interval:.001},model:{value:s.particleSystemOptions.fadeOpacity,callback:function(a){s.$set(s.particleSystemOptions,"fadeOpacity",a)},expression:"particleSystemOptions.fadeOpacity"}}),s._v(" "),t("span",[s._v("dropRate")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:.1,interval:.001},model:{value:s.particleSystemOptions.dropRate,callback:function(a){s.$set(s.particleSystemOptions,"dropRate",a)},expression:"particleSystemOptions.dropRate"}}),s._v(" "),t("span",[s._v("dropRateBump")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:.2,interval:.001},model:{value:s.particleSystemOptions.dropRateBump,callback:function(a){s.$set(s.particleSystemOptions,"dropRateBump",a)},expression:"particleSystemOptions.dropRateBump"}}),s._v(" "),t("span",[s._v("speedFactor")]),s._v(" "),t("vue-slider",{attrs:{min:.5,max:100,interval:.1},model:{value:s.particleSystemOptions.speedFactor,callback:function(a){s.$set(s.particleSystemOptions,"speedFactor",a)},expression:"particleSystemOptions.speedFactor"}}),s._v(" "),t("span",[s._v("lineWidth")]),s._v(" "),t("vue-slider",{attrs:{min:.01,max:16,interval:.01},model:{value:s.particleSystemOptions.lineWidth,callback:function(a){s.$set(s.particleSystemOptions,"lineWidth",a)},expression:"particleSystemOptions.lineWidth"}}),s._v(" "),t("span",[s._v("switch data")]),s._v(" "),t("md-select",{attrs:{placeholder:"切换数据"},on:{selected:s.switchData},model:{value:s.data,callback:function(a){s.data=a},expression:"data"}},s._l(s.options,function(a){return t("md-option",{key:a.value,attrs:{value:a.value}},[s._v("\n            "+s._s(a.label)+"\n          ")])}))],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("Vue Methods")]),s._v(" "),s._m(4),s._v(" "),t("h2",[s._v("Instructions")]),s._v(" "),s._m(5)],1)},n=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("cesium-windmap")]),this._v(" CesiumWindMap")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("scene3DOnly")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("timeline")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("singletile-imagery-provider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"urlLayer"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("singletile-imagery-provider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-windmap")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"windmap"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"windData"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":particleSystemOptions")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-windmap")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("maxParticles"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.maxParticles"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"65536"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("particleHeight"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.particleHeight"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"10000"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("fadeOpacity"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.fadeOpacity"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.90"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.999"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.001"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("dropRate"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.dropRate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.001"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("dropRateBump"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.dropRateBump"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.001"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("speedFactor"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.speedFactor"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.5"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.1"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("lineWidth"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.lineWidth"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"16"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("switch data"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"切换数据"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@selected")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"switchData"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" NetCDFReader = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'netcdfjs'")]),s._v(")\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("urlLayer")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/worldimage.jpg'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("urlNetCDF")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/windData/demo.nc'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("windData")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Global Data'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n        }, {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'China Data'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n        }],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("particleSystemOptions")]),s._v(": {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("maxParticles")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("128")]),s._v(" * "),t("span",{attrs:{class:"hljs-number"}},[s._v("128")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("particleHeight")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("fadeOpacity")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.996")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dropRate")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.003")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dropRateBump")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.01")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("speedFactor")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("4.0")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("4.0")]),s._v("\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("colorTableParam")]),s._v(": {\n          "),t("span",{attrs:{class:"hljs-string"}},[s._v("'ncolors'")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("16")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-string"}},[s._v("'colorTable'")]),s._v(": [\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.015686")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.054902")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.847059")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.12549")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.313725")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.254902")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.588235")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.427451")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.756863")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.52549")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.85098")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.611765")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.933333")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.686275")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.960784")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.807843")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.996078")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.278431")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.921569")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.768627")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.564706")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.282353")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.835294")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.619608")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v("\n          ]\n        }\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".data = "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".switchData("),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")\n      },\n      switchData (val) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" _this = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (val === "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("){\n          "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loadNetCDF("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".urlNetCDF).then("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("data")]),s._v(")=>")]),s._v("{\n            data.colorTable = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loadColorTable()\n            _this.windData = data\n          })\n        } "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (val === "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("){\n          Cesium.Resource.fetchJson({ "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'./statics/data/wind.json'")]),s._v(" }).then("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("data")]),s._v(") =>")]),s._v(" {\n            data.colorTable = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loadColorTable()\n            data.lat.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.lon.array)\n            data.lat.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.lat.array)\n            data.lev.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.lev.array)\n            data.U.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.U.array)\n            data.V.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.V.array)\n            _this.windData = data\n          })\n        }\n      },\n      loadColorTable (filePath) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" json = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".colorTableParam\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" colorNum = json["),t("span",{attrs:{class:"hljs-string"}},[s._v("'ncolors'")]),s._v("]\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" colorTable = json["),t("span",{attrs:{class:"hljs-string"}},[s._v("'colorTable'")]),s._v("]\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" colorsArray = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("("),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" * colorNum)\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < colorNum; i++) {\n          colorsArray["),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" * i] = colorTable["),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" * i]\n          colorsArray["),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" * i + "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("] = colorTable["),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" * i + "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]\n          colorsArray["),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" * i + "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("] = colorTable["),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" * i + "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("]\n        }\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" result = {}\n        result.colorNum = colorNum\n        result.array = colorsArray\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" result\n      },\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("async")]),s._v(" loadNetCDF (filePath) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" _this = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}},[s._v("resolve")]),s._v(") ")]),s._v("{\n          "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" request = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" XMLHttpRequest()\n          request.open("),t("span",{attrs:{class:"hljs-string"}},[s._v("'GET'")]),s._v(", filePath)\n          request.responseType = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'arraybuffer'")]),s._v("\n          request.onload = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" arrayToMap = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}},[s._v("array")]),s._v(") ")]),s._v("{\n              "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" array.reduce("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}},[s._v("map, object")]),s._v(") ")]),s._v("{\n                map[object.name] = object\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" map\n              }, {})\n            }\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" NetCDF = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" NetCDFReader(request.response)\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" data = {}\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" dimensions = arrayToMap(NetCDF.dimensions)\n            data.dimensions = {}\n            data.dimensions.lon = dimensions["),t("span",{attrs:{class:"hljs-string"}},[s._v("'lon'")]),s._v("].size\n            data.dimensions.lat = dimensions["),t("span",{attrs:{class:"hljs-string"}},[s._v("'lat'")]),s._v("].size\n            data.dimensions.lev = dimensions["),t("span",{attrs:{class:"hljs-string"}},[s._v("'lev'")]),s._v("].size\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" variables = arrayToMap(NetCDF.variables)\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" uAttributes = arrayToMap(variables["),t("span",{attrs:{class:"hljs-string"}},[s._v("'U'")]),s._v("].attributes)\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" vAttributes = arrayToMap(variables["),t("span",{attrs:{class:"hljs-string"}},[s._v("'V'")]),s._v("].attributes)\n            data.lon = {}\n            data.lon.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'lon'")]),s._v(").flat())\n            data.lon.min = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min(...data.lon.array)\n            data.lon.max = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".max(...data.lon.array)\n            data.lat = {}\n            data.lat.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'lat'")]),s._v(").flat())\n            data.lat.min = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min(...data.lat.array)\n            data.lat.max = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".max(...data.lat.array)\n            data.lev = {}\n            data.lev.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'lev'")]),s._v(").flat())\n            data.lev.min = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min(...data.lev.array)\n            data.lev.max = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".max(...data.lev.array)\n            data.U = {}\n            data.U.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'U'")]),s._v(").flat())\n            data.U.min = uAttributes["),t("span",{attrs:{class:"hljs-string"}},[s._v("'min'")]),s._v("].value\n            data.U.max = uAttributes["),t("span",{attrs:{class:"hljs-string"}},[s._v("'max'")]),s._v("].value\n            data.V = {}\n            data.V.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'V'")]),s._v(").flat())\n            data.V.min = vAttributes["),t("span",{attrs:{class:"hljs-string"}},[s._v("'min'")]),s._v("].value\n            data.V.max = vAttributes["),t("span",{attrs:{class:"hljs-string"}},[s._v("'max'")]),s._v("].value\n            resolve(data)\n          }\n          request.send()\n        })\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("data")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v(" set windmap data.")])]),s._v(" "),t("tr",[t("td",[s._v("particleSystemOptions")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" set particleSystemOptions.")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("Triggers when CesiumWindMap is ready. It returns a core class of Cesium, a viewer instance.")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("destroy")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("destroy windmap.")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("Reference from "),a("a",{attrs:{href:"https://github.com/RaymanNg/3D-Wind-Field"}},[this._v("3D-Wind-Field")]),this._v(".")])])}]},PUOT:function(s,a,t){var l,n,r;n=[a,t("2Pi3")],void 0===(r="function"==typeof(l=function(a,t){"use strict";function l(s){if(Array.isArray(s)){for(var a=0,t=Array(s.length);a<s.length;a++)t[a]=s[a];return t}return Array.from(s)}Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{urlLayer:"./statics/SampleData/worldimage.jpg",urlNetCDF:"./statics/SampleData/windData/demo.nc",windData:{},options:[{label:"Global Data",value:1},{label:"China Data",value:2}],data:0,particleSystemOptions:{maxParticles:16384,particleHeight:100,fadeOpacity:.996,dropRate:.003,dropRateBump:.01,speedFactor:4,lineWidth:4},colorTableParam:{ncolors:16,colorTable:[.015686,.054902,.847059,.12549,.313725,1,.254902,.588235,1,.427451,.756863,1,.52549,.85098,1,.611765,.933333,1,.686275,.960784,1,.807843,1,1,1,.996078,.278431,1,.921569,0,1,.768627,0,1,.564706,0,1,.282353,0,1,0,0,.835294,0,0,.619608,0,0]}}},methods:{ready:function(s){this.cesiumInstance=s,this.data=2,this.switchData(2)},switchData:function(s){var a=this,t=this.cesiumInstance,l=t.Cesium,n=(t.viewer,this);1===s?this.loadNetCDF(this.urlNetCDF).then(function(s){s.colorTable=a.loadColorTable(),n.windData=s}):2===s&&l.Resource.fetchJson({url:"./statics/SampleData/windData/wind.json"}).then(function(s){s.colorTable=a.loadColorTable(),s.lat.array=new Float32Array(s.lon.array),s.lat.array=new Float32Array(s.lat.array),s.lev.array=new Float32Array(s.lev.array),s.U.array=new Float32Array(s.U.array),s.V.array=new Float32Array(s.V.array),n.windData=s})},loadColorTable:function(s){for(var a=this.colorTableParam,t=a.ncolors,l=a.colorTable,n=new Float32Array(3*t),r=0;r<t;r++)n[3*r]=l[3*r],n[3*r+1]=l[3*r+1],n[3*r+2]=l[3*r+2];var v={};return v.colorNum=t,v.array=n,v},loadNetCDF:async function(s){return new Promise(function(a){var n=new XMLHttpRequest;n.open("GET",s),n.responseType="arraybuffer",n.onload=function(){var s=function(s){return s.reduce(function(s,a){return s[a.name]=a,s},{})},r=new t(n.response),v={},e=s(r.dimensions);v.dimensions={},v.dimensions.lon=e.lon.size,v.dimensions.lat=e.lat.size,v.dimensions.lev=e.lev.size;var _=s(r.variables),c=s(_.U.attributes),p=s(_.V.attributes);v.lon={},v.lon.array=new Float32Array(r.getDataVariable("lon").flat()),v.lon.min=Math.min.apply(Math,l(v.lon.array)),v.lon.max=Math.max.apply(Math,l(v.lon.array)),v.lat={},v.lat.array=new Float32Array(r.getDataVariable("lat").flat()),v.lat.min=Math.min.apply(Math,l(v.lat.array)),v.lat.max=Math.max.apply(Math,l(v.lat.array)),v.lev={},v.lev.array=new Float32Array(r.getDataVariable("lev").flat()),v.lev.min=Math.min.apply(Math,l(v.lev.array)),v.lev.max=Math.max.apply(Math,l(v.lev.array)),v.U={},v.U.array=new Float32Array(r.getDataVariable("U").flat()),v.U.min=c.min.value,v.U.max=c.max.value,v.V={},v.V.array=new Float32Array(r.getDataVariable("V").flat()),v.V.min=p.min.value,v.V.max=p.max.value,a(v)},n.send()})}}},s.exports=a.default})?l.apply(a,n):l)||(s.exports=r)},ghrQ:function(s,a,t){"use strict";t.r(a);var l=t("PUOT"),n=t.n(l);for(var r in l)"default"!==r&&function(s){t.d(a,s,function(){return l[s]})}(r);var v=t("2QDp"),e=t("JFUb"),_=Object(e.a)(n.a,v.a,v.b,!1,null,null,null);a.default=_.exports},oEdO:function(s,a,t){s.exports=t("ghrQ")}}]);