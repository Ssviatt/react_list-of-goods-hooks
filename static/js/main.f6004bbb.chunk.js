(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function h(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);return o.sort((function(t,e){switch(n){case s.NONE:return 0;case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),r=Object(i.a)(o,2),u=r[0],j=r[1],N=u===s.NONE&&!1===n,O=l()("button","is-info",{"is-light":u!==s.ALPHABET}),p=l()("button","is-success",{"is-light":u!==s.LENGTH}),E=l()("button","is-warning",{"is-light":!n});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:O,onClick:function(){j(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:p,onClick:function(){j(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:E,onClick:function(){c((function(t){return!t}))},children:"Reverse"}),Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(!1),j(s.NONE)},style:N?{display:"none"}:{},children:"Reset"})]}),Object(b.jsx)("ul",{children:h(d,{sortType:u,isReversed:n}).map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f6004bbb.chunk.js.map