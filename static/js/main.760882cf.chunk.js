(this["webpackJsonpip-stuff"]=this["webpackJsonpip-stuff"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(15),r=a.n(s),u=(a(21),a(4)),j=a(2),i=(a(22),a(23),a(29)),b=a(30),l=a(31),O=function(e){for(var t=[],a=e;;){var c=a%2;if(a=Math.floor(a/2),t.push(c),0===a)break}return t.reverse(),t.join("")},o=function(e){var t=0;return Object(u.a)(e).reverse().forEach((function(e,a){"1"===e&&(t+=Math.pow(2,a))})),t},d=function(e,t){for(var a=t||8,c=Object(u.a)(e);c.length<a;)c.unshift("0");return c.join("")},f=a(0),x=function(e){var t=function(t,a){var n=""===t.target.value?"0":t.target.value,s=e.mehStuff[a].setDezi,r=parseInt(n);if(r>=0&&r<=255&&function(e){return Object(u.a)(e).every((function(e){return["0","1","2","3","4","5","6","7","8","9"].includes(e)}))}(n)){s(r);var j=O(r);c(j,a)}},a=function(t,a){var c=t.target.value,n=e.mehStuff[a],s=n.setDezi,r=n.setOctet;Object(u.a)(c).every((function(e){return["0","1"].includes(e)}))&&(r(c),s(o(c)))},c=function(t,a){(0,e.mehStuff[a].setOctet)(d(t))},n=Object(j.a)(e.mehStuff,4),s=n[0],r=n[1],i=n[2],x=n[3],h=e.mehStuff,m=e.restricted,v="",p=Object(u.a)(h).map((function(e){return m?(v+=e.octet,(t=v).split("0").filter((function(e){return""!==e})).length<=1&&("0"!==t[0]||Object(u.a)(t).every((function(e){return"0"===e})))?{}:{border:"solid red 1px"}):{};var t})),y=Object(j.a)(p,4),g=y[0],S=y[1],z=y[2],D=y[3];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:e.title}),Object(f.jsxs)(b.a,{className:"mb-3",children:[Object(f.jsx)(b.a.Text,{children:"Dezimal"}),Object(f.jsx)(l.a,{style:g,value:s.dezi,type:"text",onChange:function(e){t(e,0)}}),Object(f.jsx)(l.a,{style:S,value:r.dezi,type:"text",onChange:function(e){t(e,1)}}),Object(f.jsx)(l.a,{style:z,value:i.dezi,type:"text",onChange:function(e){t(e,2)}}),Object(f.jsx)(l.a,{style:D,value:x.dezi,type:"text",onChange:function(e){t(e,3)}})]}),Object(f.jsxs)(b.a,{className:"mb-3",children:[Object(f.jsx)(b.a.Text,{children:"Binary"}),Object(f.jsx)(l.a,{style:g,value:s.octet,type:"text",onChange:function(e){return a(e,0)},onBlur:function(e){c(e.target.value,0)}}),Object(f.jsx)(l.a,{style:S,value:r.octet,type:"text",onChange:function(e){return a(e,1)},onBlur:function(e){c(e.target.value,1)}}),Object(f.jsx)(l.a,{style:z,value:i.octet,type:"text",onChange:function(e){return a(e,2)},onBlur:function(e){c(e.target.value,2)}}),Object(f.jsx)(l.a,{style:D,value:x.octet,type:"text",onChange:function(e){return a(e,3)},onBlur:function(e){c(e.target.value,3)}})]})]})},h=function(e){var t=Object(j.a)(e.mehStuff,2),a=t[0],c=t[1],n=a.map((function(e){return e.dezi})),s=Object(j.a)(n,4),r=(s[0],s[1],s[2],s[3],a.map((function(e,t){return function(e,t){for(var a=[e,t].sort((function(e,t){return e.length>t.length?1:-1}));a[0].length<a[1].length;)a[0]="0"+a[0];var c="";return Object(u.a)(a[0]).forEach((function(e,t){"1"===e&&"1"===a[1][t]?c+="1":c+="0"})),c}(e.octet,c[t].octet)}))),i=Object(j.a)(r,4),x=i[0],h=i[1],m=i[2],v=i[3],p=c.map((function(e){return e.octet})),y=Object(j.a)(p,4),g=y[0],S=y[1],z=y[2],D=y[3],C=c.map((function(e,t){return function(e,t){var a=Object(u.a)(e).filter((function(e){return"0"===e})).length;return 0===a?o(t):Math.pow(2,a)-1}(e.octet,a[t].octet)})),B=([g,S,z,D].forEach((function(e,t){Object(u.a)(e).some((function(e){return"0"===e}))&&(C[t]+=o(a[t].octet))})),Object(j.a)(C,4)),T=B[0],N=B[1],w=B[2],F=B[3];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:e.title}),Object(f.jsxs)(b.a,{className:"mb-3",children:[Object(f.jsx)(b.a.Text,{children:"Dezimal"}),Object(f.jsx)(l.a,{type:"number",min:"0",max:"255",value:o(x),disabled:!0}),Object(f.jsx)(l.a,{type:"number",min:"0",max:"255",value:o(h),disabled:!0}),Object(f.jsx)(l.a,{type:"number",min:"0",max:"255",value:o(m),disabled:!0}),Object(f.jsx)(l.a,{type:"number",min:"0",max:"255",value:o(v),disabled:!0})]}),Object(f.jsxs)(b.a,{className:"mb-3",children:[Object(f.jsx)(b.a.Text,{children:"Binary"}),Object(f.jsx)(l.a,{type:"text",value:x,disabled:!0}),Object(f.jsx)(l.a,{type:"text",value:h,disabled:!0}),Object(f.jsx)(l.a,{type:"text",value:m,disabled:!0}),Object(f.jsx)(l.a,{type:"text",value:v,disabled:!0})]}),Object(f.jsx)("h3",{children:"Broadcast Address"}),Object(f.jsxs)(b.a,{className:"mb-3",children:[Object(f.jsx)(b.a.Text,{children:"Dezimal"}),Object(f.jsx)(l.a,{type:"number",min:"0",max:"255",value:T,disabled:!0}),Object(f.jsx)(l.a,{type:"number",min:"0",max:"255",value:N,disabled:!0}),Object(f.jsx)(l.a,{type:"number",min:"0",max:"255",value:w,disabled:!0}),Object(f.jsx)(l.a,{type:"number",min:"0",max:"255",value:F,disabled:!0})]}),Object(f.jsxs)(b.a,{className:"mb-3",children:[Object(f.jsx)(b.a.Text,{children:"Binary"}),Object(f.jsx)(l.a,{type:"text",value:d(O(T)),disabled:!0}),Object(f.jsx)(l.a,{type:"text",value:d(O(N)),disabled:!0}),Object(f.jsx)(l.a,{type:"text",value:d(O(w)),disabled:!0}),Object(f.jsx)(l.a,{type:"text",value:d(O(F)),disabled:!0})]})]})},m=function(){var e=Object(c.useState)("00000000"),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("00000000"),r=Object(j.a)(s,2),b=r[0],l=r[1],O=Object(c.useState)("00000000"),o=Object(j.a)(O,2),d=o[0],m=o[1],v=Object(c.useState)("00000000"),p=Object(j.a)(v,2),y=p[0],g=p[1],S=Object(c.useState)(0),z=Object(j.a)(S,2),D=z[0],C=z[1],B=Object(c.useState)(0),T=Object(j.a)(B,2),N=T[0],w=T[1],F=Object(c.useState)(0),M=Object(j.a)(F,2),k=M[0],I=M[1],A=Object(c.useState)(0),E=Object(j.a)(A,2),P=E[0],J=E[1],L=Object(c.useState)("11111111"),q=Object(j.a)(L,2),G=q[0],H=q[1],K=Object(c.useState)("11111111"),Q=Object(j.a)(K,2),R=Q[0],U=Q[1],V=Object(c.useState)("11111111"),W=Object(j.a)(V,2),X=W[0],Y=W[1],Z=Object(c.useState)("00000000"),$=Object(j.a)(Z,2),_=$[0],ee=$[1],te=Object(c.useState)(255),ae=Object(j.a)(te,2),ce=ae[0],ne=ae[1],se=Object(c.useState)(255),re=Object(j.a)(se,2),ue=re[0],je=re[1],ie=Object(c.useState)(255),be=Object(j.a)(ie,2),le=be[0],Oe=be[1],oe=Object(c.useState)(0),de=Object(j.a)(oe,2),fe=de[0],xe=[[{setOctet:n,setDezi:C,octet:a,dezi:D},{setOctet:l,setDezi:w,octet:b,dezi:N},{setOctet:m,setDezi:I,octet:d,dezi:k},{setOctet:g,setDezi:J,octet:y,dezi:P}],[{setOctet:H,setDezi:ne,octet:G,dezi:ce},{setOctet:U,setDezi:je,octet:R,dezi:ue},{setOctet:Y,setDezi:Oe,octet:X,dezi:le},{setOctet:ee,setDezi:de[1],octet:_,dezi:fe}]],he=Math.pow(2,[].concat(Object(u.a)(G),Object(u.a)(R),Object(u.a)(X),Object(u.a)(_)).filter((function(e){return"0"===e})).length)-2;return Object(f.jsxs)(i.a,{children:[Object(f.jsx)(x,{title:"IP-Address",mehStuff:xe[0]}),Object(f.jsx)(x,{title:"Subnet Mask",mehStuff:xe[1],restricted:!0}),Object(f.jsxs)("h3",{children:["There is a total number of ",he," IP Addresses available"]}),Object(f.jsx)(h,{title:"Network Address",mehStuff:xe})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),v()}},[[28,1,2]]]);
//# sourceMappingURL=main.760882cf.chunk.js.map