(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"1wwT":function(s,a,t){var n,l,r;l=[a],void 0===(r="function"==typeof(n=function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{description:"Hello Vue Cesium",position1:{},planeEntity1:{},plane1:void 0,dimensions1:{},material1:{},position2:{},planeEntity2:{},plane2:void 0,dimensions2:{},material2:{},outlineColor2:{},position3:{},planeEntity3:{},plane3:void 0,dimensions3:{},outlineColor3:{}}},methods:{ready:function(s){var a=s.Cesium;s.viewer,this.position1=a.Cartesian3.fromDegrees(114,40,3e5),this.plane1=new a.Plane(a.Cartesian3.UNIT_X,0),this.dimensions1=new a.Cartesian2(4e5,3e5),this.material1=a.Color.BLUE,this.position2=a.Cartesian3.fromDegrees(107,40,3e5),this.plane2=new a.Plane(a.Cartesian3.UNIT_Y,0),this.dimensions2=new a.Cartesian2(4e5,3e5),this.material2=a.Color.RED.withAlpha(.5),this.outlineColor2=a.Color.BLACK,this.position3=a.Cartesian3.fromDegrees(100,40,3e5),this.plane3=new a.Plane(a.Cartesian3.UNIT_Z,0),this.dimensions3=new a.Cartesian2(4e5,3e5),this.outlineColor3=a.Color.YELLOW},subReady:function(s){s.Cesium;var a=s.viewer;a.zoomTo(a.entities)}}},s.exports=a.default})?n.apply(a,l):n)||(s.exports=r)},PsNx:function(s,a,t){"use strict";t.r(a);var n=t("1wwT"),l=t.n(n);for(var r in n)"default"!==r&&function(s){t.d(a,s,function(){return n[s]})}(r);var e=t("q6sa"),i=t("JFUb"),v=Object(i.a)(l.a,e.a,e.b,!1,null,null,null);a.default=v.exports},iQD3:function(s,a,t){s.exports=t("PsNx")},q6sa:function(s,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return l});var n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("平面")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("添加平面到场景")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("cesium-viewer",{on:{ready:s.ready}},[t("entity",{attrs:{position:s.position1,description:s.description,plane:s.planeEntity1},on:{"update:plane":function(a){s.planeEntity1=a}}},[t("plane-graphics",{attrs:{plane:s.plane1,dimensions:s.dimensions1,material:s.material1}})],1),s._v(" "),t("entity",{attrs:{position:s.position2,description:s.description,plane:s.planeEntity2},on:{"update:plane":function(a){s.planeEntity2=a}}},[t("plane-graphics",{attrs:{plane:s.plane2,dimensions:s.dimensions2,material:s.material2,outline:!0,outlineColor:s.outlineColor2}})],1),s._v(" "),t("entity",{attrs:{position:s.position3,description:s.description,plane:s.planeEntity3},on:{"update:plane":function(a){s.planeEntity3=a}}},[t("plane-graphics",{attrs:{plane:s.plane3,dimensions:s.dimensions3,fill:!1,outline:!0,outlineColor:s.outlineColor3},on:{ready:s.subReady}})],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)},l=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("plane-graphics")]),this._v(" 平面组件，作为"),a("code",{pre:!0},[this._v("entity")]),this._v("的子组件添加包含平面的实体到场景。描述一个平面，中心位置和方向由包含实体确定。如示例所示。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":plane.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"planeEntity1"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":plane")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"plane1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":plane.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"planeEntity2"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":plane")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"plane2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor2"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"position3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":plane.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"planeEntity3"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":plane")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"plane3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":fill")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("planeEntity1")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("plane1")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions1")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("planeEntity2")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("plane2")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions2")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor2")]),s._v(": {},\n\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position3")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("planeEntity3")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("plane3")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions3")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor3")]),s._v(": {}\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position1 = Cesium.Cartesian3.fromDegrees("),t("span",{attrs:{class:"hljs-number"}},[s._v("114.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".plane1 = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Plane(Cesium.Cartesian3.UNIT_X, "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".dimensions1 = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.BLUE\n\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position2 = Cesium.Cartesian3.fromDegrees("),t("span",{attrs:{class:"hljs-number"}},[s._v("107.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".plane2 = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Plane(Cesium.Cartesian3.UNIT_Y, "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".dimensions2 = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.RED.withAlpha("),t("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor2 = Cesium.Color.BLACK\n\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position3 = Cesium.Cartesian3.fromDegrees("),t("span",{attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".plane3 = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Plane(Cesium.Cartesian3.UNIT_Z, "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".dimensions3= "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(")\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor3 = Cesium.Color.YELLOW\n      },\n      subReady (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        viewer.zoomTo(viewer.entities)\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("参考官方文档 "),a("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/PlaneGraphics.html"}},[this._v("PlaneGraphics")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])]),s._v(" "),t("tr",[t("td",[s._v("definitionChanged")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}]}}]);