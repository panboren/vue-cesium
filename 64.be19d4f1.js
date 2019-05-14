(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{UvsI:function(s,t,a){var v,_,n;_=[t],void 0===(n="function"==typeof(v=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{mapId:"mapbox.streets",options:[{value:"mapbox.satellite",label:"卫星"},{value:"mapbox.streets",label:"地图"}],alpha:1,brightness:1,contrast:1}},methods:{ready:function(s){s.Cesium,s.viewer}}},s.exports=t.default})?v.apply(t,_):v)||(s.exports=n)},dMkY:function(s,t,a){s.exports=a("jDn/")},"jDn/":function(s,t,a){"use strict";a.r(t);var v=a("UvsI"),_=a.n(v);for(var n in v)"default"!==n&&function(s){a.d(t,s,function(){return v[s]})}(n);var r=a("jofZ"),l=a("JFUb"),e=Object(l.a)(_.a,r.a,r.b,!1,null,null,null);t.default=e.exports},jofZ:function(s,t,a){"use strict";a.d(t,"a",function(){return v}),a.d(t,"b",function(){return _});var v=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("影像图层")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加影像图层到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("imagery-layer",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[a("mapbox-imagery-provider",{attrs:{mapId:s.mapId}})],1)],1),s._v(" "),a("div",{staticClass:"demo-tool"},[a("span",[s._v("透明度")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:s.alpha,callback:function(t){s.alpha=t},expression:"alpha"}}),s._v(" "),a("span",[s._v("亮度")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.brightness,callback:function(t){s.brightness=t},expression:"brightness"}}),s._v(" "),a("span",[s._v("对比度")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.contrast,callback:function(t){s.contrast=t},expression:"contrast"}}),s._v(" "),a("span",[s._v("切换服务")]),s._v(" "),a("md-select",{attrs:{placeholder:"切换影像"},model:{value:s.mapId,callback:function(t){s.mapId=t},expression:"mapId"}},s._l(s.options,function(t){return a("md-option",{key:t.value,attrs:{value:t.value}},[s._v("\n            "+s._s(t.label)+"\n          ")])}))],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)},_=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("imagery-layer")]),this._v("可以加载影像图层到场景，需要结合imagery provider使用。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mapbox-imagery-provider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":mapId")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mapId"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mapbox-imagery-provider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("透明度"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v("  >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("亮度"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v("  >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("对比度"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v("  >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("切换服务"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mapId"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"切换影像"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("mapId")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'mapbox.streets'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'mapbox.satellite'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'卫星'")]),s._v("\n        }, {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'mapbox.streets'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'地图'")]),s._v("\n        }],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("rectangle")]),s._v(" "),a("td",[s._v("Cesium.Rectangle")]),s._v(" "),a("td",[s._v("imageryProvider.rectangle")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层的矩形范围,此矩形限制了影像可见范围。")])]),s._v(" "),a("tr",[a("td",[s._v("alpha")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层透明度值，取值范围为0.0~1.0。")])]),s._v(" "),a("tr",[a("td",[s._v("brightness")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层亮度值。值为1.0表示使用原图；值大于1.0时图像将变亮；值小于1.0时图像将变暗。")])]),s._v(" "),a("tr",[a("td",[s._v("contrast")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层对比度。值为1.0表示使用原图；值大于1.0表示增加对比度；值小于1.0表示降低对比度。")])]),s._v(" "),a("tr",[a("td",[s._v("hue")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("0.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层色调。值为0.0表示使用原图。")])]),s._v(" "),a("tr",[a("td",[s._v("saturation")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层饱和度。值为1.0表示使用原图；值大于1.0表示增加饱和度；值小于1.0表示降低饱和度。")])]),s._v(" "),a("tr",[a("td",[s._v("gamma")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层伽马校正。值为1.0表示使用原图。")])]),s._v(" "),a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("指定图层是否显示，true表示显示此图层，false表示不显示。")])]),s._v(" "),a("tr",[a("td",[s._v("splitDirection")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("指定影像图层分割方向。0始终显示影像图层，-1在Scene#imagerySplitPosition的左侧显示影像图层，1在Scene#imagerySplitPosition右侧显示影像图层。")])]),s._v(" "),a("tr",[a("td",[s._v("minificationFilter")]),s._v(" "),a("td",[s._v("TextureMinificationFilter")]),s._v(" "),a("td",[s._v("TextureMinificationFilter.LINEAR")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图层纹理缩小过滤器。 可能的值是TextureMinificationFilter.LINEAR和TextureMinificationFilter.NEAREST。")])]),s._v(" "),a("tr",[a("td",[s._v("magnificationFilter")]),s._v(" "),a("td",[s._v("TextureMagnificationFilter")]),s._v(" "),a("td",[s._v("TextureMagnificationFilter.LINEAR")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图层纹理缩小过滤器。 可能的值是TextureMagnificationFilter.LINEAR和TextureMagnificationFilter.NEAREST。")])]),s._v(" "),a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图层是否显示，如果显示图层，则为true; 否则，false。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumAnisotropy")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("maximum supported")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定纹理过滤的最大各向异性级别。 如果未指定此参数，则将使用WebGL堆栈支持的最大各向异性。 较大的值使图像在水平视图中看起来更好。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumTerrainLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("最小地形细节层次。level 0是最小细节层次。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumTerrainLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("最大地形细节层次。")])]),s._v(" "),a("tr",[a("td",[s._v("cutoutRectangle")]),s._v(" "),a("td",[s._v("Rectangle")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定裁剪此影像图层的矩形范围。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])])])])}]}}]);