(this["webpackJsonpcode-editor"]=this["webpackJsonpcode-editor"]||[]).push([[0],{11:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(5),s=n.n(a),i=(n(11),n(2)),r=(n(12),n(13),n(14),n(15),n(16),n(6)),l=n(0),u=function(e){var t=e.language,n=e.value,o=e.onChange,a=Object(c.useState)(!0),s=Object(i.a)(a,2),u=s[0];s[1];return Object(l.jsxs)("div",{className:"editor-container ".concat(u?"":"collapsed"),children:[Object(l.jsx)("div",{className:"editor-title"}),Object(l.jsx)(r.Controlled,{onBeforeChange:function(e,t,n){o(n)},value:n,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})]})};n(19);function d(e,t){var n="DYTE-"+e,o=Object(c.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),a=Object(i.a)(o,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,r]}var j=function(){var e,t=document.getElementById("LiveView");function n(n){var c=e-n.y;e=n.y,t.style.height=parseInt(getComputedStyle(t,"").height)+c+"px"}t.addEventListener("mousedown",(function(t){t.offsetY<400&&(e=t.y,document.addEventListener("mousemove",n,!1))}),!1),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",n,!1)}),!1)};var b=function(){var e=o.a.useState(2),t=Object(i.a)(e,2);t[0],t[1],document.addEventListener("DOMContentLoaded",j,!1);var n="<html>\n <body>\n  Write Your Code Here \n </body>\n</html>",a="body\n{\n color: red;\n}",s="console.log('Start')",r=d(n,n),b=Object(i.a)(r,2),m=b[0],O=b[1],v=d(a,a),f=Object(i.a)(v,2),g=f[0],h=f[1],p=d(s,s),x=Object(i.a)(p,2),y=x[0],N=x[1],S=Object(c.useState)(""),C=Object(i.a)(S,2),L=C[0],E=C[1];Object(c.useEffect)((function(){var e=setTimeout((function(){E("\n        <html>\n          <body>".concat(m,"</body>\n          <style>").concat(g,"</style>\n          <script>").concat(y,"<\/script>\n        </html>\n      "))}),250);return function(){return clearTimeout(e)}}),[m,g,y]);var T=Object(c.useState)(!0),w=Object(i.a)(T,2),I=w[0],B=w[1],J=Object(c.useState)(!1),k=Object(i.a)(J,2),F=k[0],M=k[1],D=Object(c.useState)(!1),H=Object(i.a)(D,2),V=H[0],Y=H[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"Editor",children:[Object(l.jsxs)("div",{className:"FileExplorer",children:[Object(l.jsx)("button",{className:"Button",onClick:function(){M(!1),Y(!1),B(!0)},children:"Index.html"}),Object(l.jsx)("button",{className:"Button",onClick:function(){Y(!1),B(!1),M(!0)},children:"Index.css"}),Object(l.jsx)("button",{className:"Button",onClick:function(){M(!1),B(!1),Y(!0)},children:"Index.js"})]}),Object(l.jsxs)("div",{className:"CodeEditor",children:[I?Object(l.jsx)(u,{language:"xml",displayName:"HTML",value:m,onChange:O}):console.log("NOT HTML"),F?Object(l.jsx)(u,{language:"css",displayName:"CSS",value:g,onChange:h}):console.log("NOT HTML"),V?Object(l.jsx)(u,{language:"javascript",displayName:"JS",value:y,onChange:N}):console.log("NOT JS")]})]}),Object(l.jsx)("div",{id:"LiveView",children:Object(l.jsx)("iframe",{srcDoc:L,height:"100%",width:"100%",title:"LiveView",sandbox:"allow-scripts"})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),m()}},[[20,1,2]]]);
//# sourceMappingURL=main.f51a9565.chunk.js.map