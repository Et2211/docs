(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{217:function(t,n,e){"use strict";var r=e(99),i=e(118)(5),a=!0;"find"in[]&&Array(1).find(function(){a=!1}),r(r.P+r.F*a,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(147)("find")},243:function(t,n,e){"use strict";e.r(n);e(217),e(131);var r={components:{Layout:e(145).default},props:["examplePage"],computed:{template:function(){},exampleData:function(){return findPageByHtmlOrMarkdownPath(this.$props.examplePage).findPageByHtmlOrMarkdownPath}},methods:{findPageByHtmlOrMarkdownPath:function(t){var n=t.replace(/\.(html|md)$/,".html");return this.$site.pages.find(function(t){return t.regularPath===n})}}},i=e(2),a=Object(i.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"warning custom-block"},[n("p",[this._v("Work in progress")])])])}],!1,null,null,null);n.default=a.exports}}]);