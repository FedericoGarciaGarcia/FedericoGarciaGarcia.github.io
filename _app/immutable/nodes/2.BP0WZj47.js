import"../chunks/DsnmJJEf.js";import"../chunks/DPzN5HPL.js";import{i as ne,h as k,X as Ee,k as we,b as Ce,d as Me,C as P,am as Le,r as Ve,H as Ie,g as he,j as ie,q as X,Y as Pe,a0 as He,l as ve,n as Re,m as Ne,a4 as ye,R as ke,aw as De,aA as pe,aB as Fe,o as be,p as $e,aC as qe,aD as oe,aE as xe,aF as Ue,aG as Ze,_ as Oe,aH as Be,a3 as Ge,aI as je,V as ze,aJ as We,aK as Je,aL as Ke,an as D,G as W,ax as F,I as H,J as B,a as y,K as J,ao as $,L as C,s as te,M as S,f as q,aM as j,az as z,N as T,aN as ce,c as me,ay as Ye,aO as Xe}from"../chunks/XA-waEqe.js";import{o as K,s as ee}from"../chunks/CMafCRf-.js";import{b as U,i as se}from"../chunks/QKOwfPLd.js";function Qe(t,r,e){for(var a=t.items,i=[],o=r.length,s=0;s<o;s++)Be(r[s].e,i,!0);var l=o>0&&i.length===0&&e!==null;if(l){var n=e.parentNode;Ge(n),n.append(e),a.clear(),N(t,r[0].prev,r[o-1].next)}je(i,()=>{for(var v=0;v<o;v++){var d=r[v];l||(a.delete(d.k),N(t,d.prev,d.next)),xe(d.e,!l)}})}function er(t,r,e,a,i,o=null){var s=t,l={flags:r,items:new Map,first:null};{var n=t;s=k?ne(Ee(n)):n.appendChild(we())}k&&Ce();var v=null,d=!1,f=new Map,u=Le(()=>{var h=e();return ke(h)?h:h==null?[]:ye(h)}),m,c;function p(){rr(c,m,l,f,s,i,r,a,e),o!==null&&(m.length===0?v?be(v):v=ve(()=>o(s)):v!==null&&$e(v,()=>{v=null}))}Me(()=>{c??=ze,m=P(u);var h=m.length;if(d&&h===0)return;d=h===0;let V=!1;if(k){var b=Ve(s)===Ie;b!==(h===0)&&(s=he(),ne(s),ie(!1),V=!0)}if(k){for(var _=null,x,g=0;g<h;g++){if(X.nodeType===Pe&&X.data===He){s=X,V=!0,ie(!1);break}var M=m[g],w=a(M,g);x=fe(X,l,_,null,M,w,g,i,r,e),l.items.set(w,x),_=x}h>0&&ne(he())}if(k)h===0&&o&&(v=ve(()=>o(s)));else if(Re()){var E=new Set,A=Ne;for(g=0;g<h;g+=1){M=m[g],w=a(M,g);var L=l.items.get(w)??f.get(w);L?Ae(L,M,g):(x=fe(null,l,null,null,M,w,g,i,r,e,!0),f.set(w,x)),E.add(w)}for(const[I,R]of l.items)E.has(I)||A.skipped_effects.add(R.e);A.add_callback(p)}else p();V&&ie(!0),P(u)}),k&&(s=X)}function rr(t,r,e,a,i,o,s,l,n){var v=r.length,d=e.items,f=e.first,u=f,m,c=null,p=[],h=[],V,b,_,x;for(x=0;x<v;x+=1){if(V=r[x],b=l(V,x),_=d.get(b),_===void 0){var g=a.get(b);if(g!==void 0){a.delete(b),d.set(b,g);var M=c?c.next:u;N(e,c,g),N(e,g,M),le(g,M,i),c=g}else{var w=u?u.e.nodes_start:i;c=fe(w,e,c,c===null?e.first:c.next,V,b,x,o,s,n)}d.set(b,c),p=[],h=[],u=c.next;continue}if(Ae(_,V,x),(_.e.f&oe)!==0&&be(_.e),_!==u){if(m!==void 0&&m.has(_)){if(p.length<h.length){var E=h[0],A;c=E.prev;var L=p[0],I=p[p.length-1];for(A=0;A<p.length;A+=1)le(p[A],E,i);for(A=0;A<h.length;A+=1)m.delete(h[A]);N(e,L.prev,I.next),N(e,c,L),N(e,I,E),u=E,c=I,x-=1,p=[],h=[]}else m.delete(_),le(_,u,i),N(e,_.prev,_.next),N(e,_,c===null?e.first:c.next),N(e,c,_),c=_;continue}for(p=[],h=[];u!==null&&u.k!==b;)(u.e.f&oe)===0&&(m??=new Set).add(u),h.push(u),u=u.next;if(u===null)continue;_=u}p.push(_),c=_,u=_.next}if(u!==null||m!==void 0){for(var R=m===void 0?[]:ye(m);u!==null;)(u.e.f&oe)===0&&R.push(u),u=u.next;var G=R.length;if(G>0){var Y=v===0?i:null;Qe(e,R,Y)}}t.first=e.first&&e.first.e,t.last=c&&c.e;for(var Se of a.values())xe(Se.e);a.clear()}function Ae(t,r,e,a){Fe(t.v,r),t.i=e}function fe(t,r,e,a,i,o,s,l,n,v,d){var f=(n&Ue)!==0,u=(n&Ze)===0,m=f?u?De(i,!1,!1):pe(i):i,c=(n&qe)===0?s:pe(s),p={i:c,v:m,k:o,a:null,e:null,prev:e,next:a};try{if(t===null){var h=document.createDocumentFragment();h.append(t=we())}return p.e=ve(()=>l(t,m,c,v),k),p.e.prev=e&&e.e,p.e.next=a&&a.e,e===null?d||(r.first=p):(e.next=p,e.e.next=p.e),a!==null&&(a.prev=p,a.e.prev=p.e),p}finally{}}function le(t,r,e){for(var a=t.next?t.next.e.nodes_start:e,i=r?r.e.nodes_start:e,o=t.e.nodes_start;o!==null&&o!==a;){var s=Oe(o);i.before(o),o=s}}function N(t,r,e){r===null?t.first=e:(r.next=e,r.e.next=e&&e.e),e!==null&&(e.prev=r,e.e.prev=r&&r.e)}function Te(t){var r,e,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(e=Te(t[r]))&&(a&&(a+=" "),a+=e)}else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function tr(){for(var t,r,e=0,a="",i=arguments.length;e<i;e++)(t=arguments[e])&&(r=Te(t))&&(a&&(a+=" "),a+=r);return a}function re(t){return typeof t=="object"?tr(t):t??""}function ar(t,r,e){var a=t==null?"":""+t;return r&&(a=a?a+" "+r:r),a===""?null:a}function Z(t,r,e,a,i,o){var s=t.__className;if(k||s!==e||s===void 0){var l=ar(e,a);(!k||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):t.className=l),t.__className=e}return o}const nr=Symbol("is custom element"),ir=Symbol("is html");function ue(t,r,e,a){var i=or(t);k&&(i[r]=t.getAttribute(r),t.nodeName==="LINK")||i[r]!==(i[r]=e)&&(e==null?t.removeAttribute(r):typeof e!="string"&&sr(t).includes(r)?t[r]=e:t.setAttribute(r,e))}function or(t){return t.__attributes??={[nr]:t.nodeName.includes("-"),[ir]:t.namespaceURI===We}}var _e=new Map;function sr(t){var r=_e.get(t.nodeName);if(r)return r;_e.set(t.nodeName,r=[]);for(var e,a=t,i=Element.prototype;i!==a;){e=Ke(a);for(var o in e)e[o].set&&r.push(o);a=Je(a)}return r}const lr=`attribute vec4 a_position;\r
void main() {\r
  gl_Position = a_position;\r
}`,vr=`precision mediump float;\r
uniform vec2 u_resolution;\r
uniform float u_hue;\r
uniform float u_waveTime1;\r
uniform float u_waveTime2;\r
uniform float u_waveTime3;\r
\r
float hue2rgb(float p, float q, float t) {\r
  if (t < 0.0) t += 1.0;\r
  if (t > 1.0) t -= 1.0;\r
\r
  if (t < 1.0 / 6.0) return p + (q - p) * 6.0 * t;\r
  if (t < 1.0 / 2.0) return q;\r
  if (t < 2.0 / 3.0) return p + (q - p) * (2.0 / 3.0 - t) * 6.0;\r
\r
  return p;\r
}\r
\r
vec3 hslToRgb(float h, float s, float l) {\r
  float r, g, b;\r
\r
  if (s == 0.0) {\r
    r = l;\r
    g = l;\r
    b = l;\r
  } else {\r
    float q = l < 0.5 ? l * (1.0 + s) : l + s - l * s;\r
    float p = 2.0 * l - q;\r
    r = hue2rgb(p, q, h + 1.0 / 3.0);\r
    g = hue2rgb(p, q, h);\r
    b = hue2rgb(p, q, h - 1.0 / 3.0);\r
  }\r
\r
  return vec3(r, g, b);\r
}\r
\r
vec3 createColor(float x, float y, float offset, float s, float l) {\r
  vec3 color1 = hslToRgb(mod(offset + x + 284.0 / 360.0, 1.0), s, l);\r
  vec3 color2 = hslToRgb(mod(offset + x + 356.0 / 360.0, 1.0), s, l);\r
  vec3 color3 = hslToRgb(mod(offset + x + 34.0 / 360.0, 1.0), s, l);\r
\r
  float a = 0.0;\r
  float b = 0.0;\r
  float c = 0.0;\r
\r
  if(y > 0.5) {\r
    float _y = (y - 0.5) * 2.0;\r
    a = _y;\r
    b = 1.0 - a;\r
  }\r
  else {\r
    float _y = y * 2.0;\r
    b = _y;\r
    c = 1.0 - b;\r
  }\r
\r
  return vec3(color1 * a + color2 * b + color3 * c);\r
}\r
\r
void main() {\r
  vec2 uv = gl_FragCoord.xy / u_resolution;\r
  float wavyCoefficient = 0.004;\r
    \r
  float wave1 = 0.075 * sin(gl_FragCoord.x * wavyCoefficient + u_waveTime1);\r
  float wave2 = 0.075 * sin(gl_FragCoord.x * wavyCoefficient + u_waveTime2);\r
  float wave3 = 0.075 * sin(gl_FragCoord.x * wavyCoefficient + u_waveTime3); // Unused for now\r
  vec3 color = createColor(uv.x / 20.0, uv.y, u_hue, 0.9, 0.56);\r
  float offset = 0.1;\r
  float opacity;\r
  \r
  // 3 waves\r
  /*\r
  if (uv.y <= 0.3 + wave1) {\r
    opacity = 1.0 - uv.y / 2.0;\r
  }\r
  else if (uv.y <= 0.5 + wave2) {\r
    opacity = 1.0 - uv.y / 3.0;\r
  }\r
  else if (uv.y <= 0.65 + wave3) {\r
    opacity = 1.0 - uv.y / 4.0;\r
  }\r
  else {\r
    opacity = 1.0;\r
  }\r
  */\r
\r
  float intensity = 0.06;\r
\r
  if (uv.y > 0.25 + wave1 && uv.y < 0.75 + wave2) {\r
    opacity = 1.0;\r
  }\r
  else if (uv.y <= 0.25 + wave1) {\r
    opacity = 1.0 - (uv.y / (0.25 + wave1)) * intensity;\r
  }\r
  else { // uv.y >= 0.75 + wave2\r
    opacity = (1.0 - intensity) + (uv.y - (0.75 + wave2)) / (1.0 - (0.75 + wave2)) * intensity;\r
  }\r
\r
  gl_FragColor = vec4(color * opacity, 1.0);\r
}`;function O(t){const r=D({isVisible:!1}),e=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(e.unobserve(i.target),r.isVisible=!0)})});return e.observe(t),r}var fr=H("<canvas></canvas>");function cr(t,r){W(r,!0);let e,a=F(D({isVisible:!1}));function i(n,v,d){const f=n.createShader(v);if(!f)throw new Error('"shader" was null');if(n.shaderSource(f,d),n.compileShader(f),!n.getShaderParameter(f,n.COMPILE_STATUS))throw console.error("Shader compilation failed:",n.getShaderInfoLog(f)),n.deleteShader(f),new Error;return f}function o(n,v,d){const f=n.createProgram();if(n.attachShader(f,v),n.attachShader(f,d),n.linkProgram(f),!n.getProgramParameter(f,n.LINK_STATUS))throw console.error("Program linking failed:",n.getProgramInfoLog(f)),new Error;return f}function s(){e.width=window.innerWidth,e.height=window.innerHeight;const n=e.getContext("webgl");if(!n){console.error("WebGL not supported");return}const v=i(n,n.VERTEX_SHADER,lr),d=i(n,n.FRAGMENT_SHADER,vr),f=o(n,v,d);n.useProgram(f);const u=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,u);const m=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];n.bufferData(n.ARRAY_BUFFER,new Float32Array(m),n.STATIC_DRAW);const c=n.getAttribLocation(f,"a_position");n.enableVertexAttribArray(c),n.vertexAttribPointer(c,2,n.FLOAT,!1,0,0);const p=n.getUniformLocation(f,"u_resolution"),h=n.getUniformLocation(f,"u_waveTime1"),V=n.getUniformLocation(f,"u_waveTime2"),b=n.getUniformLocation(f,"u_waveTime3"),_=n.getUniformLocation(f,"u_hue");let x=0,g=0,M=0,w=0,E=0,A=0;const L=document.querySelector("#app");if(!L){console.warn('"#app" not in the DOM; cannoy append background');return}L.addEventListener("scroll",R=>{g=R.target.scrollTop});function I(R){if(!n)throw new Error("gl should exist");if(!L)throw new Error('"#app" should be in the DOM');n.uniform2f(p,e.width,e.height),n.uniform1f(h,w),n.uniform1f(V,E),n.uniform1f(b,A),n.uniform1f(_,x),n.drawArrays(n.TRIANGLES,0,6),requestAnimationFrame(I);let G=0;g>L.clientHeight*2.5?G=-.35:g>L.clientHeight/2&&(G=-.2),x=x*.985+G*.015;const Y=(R-M)/1e3;w+=Y*.5,E+=Y*.4,A+=Y*.3,w>Math.PI*2&&(w-=Math.PI*2),E>Math.PI*2&&(E-=Math.PI*2),A>Math.PI*2&&(A-=Math.PI*2),M=R}requestAnimationFrame(I)}K(()=>{s(),setTimeout(()=>{$(a,O(e),!0)},200)});var l=fr();U(l,n=>e=n,()=>e),B(()=>Z(l,1,re(P(a).isVisible?"visible":""),"svelte-1s10orc")),y(t,l),J()}var ur=H('<div><a target="_blank" class="svelte-17jrq3c"><!></a></div>');function ge(t,r){W(r,!0);let e=F(D({isVisible:!1})),a;K(()=>{$(e,O(a),!0)});var i=ur(),o=C(i),s=C(o);te(s,()=>r.children),S(o),S(i),U(i,l=>a=l,()=>a),B(()=>{Z(i,1,re(P(e).isVisible?"visible":""),"svelte-17jrq3c"),ue(o,"href",r.href)}),y(t,i),J()}var dr=H('<div class="svelte-3mw3z8"><!></div>');function ae(t,r){var e=dr(),a=C(e);te(a,()=>r.children),S(e),y(t,e)}var hr=H("<h2><!></h2>");function de(t,r){W(r,!0);let e=F(D({isVisible:!1})),a;K(()=>{$(e,O(a),!0)});var i=hr(),o=C(i);te(o,()=>r.children),S(i),U(i,s=>a=s,()=>a),B(()=>Z(i,1,re(P(e).isVisible?"visible":""),"svelte-3ny4ay")),y(t,i),J()}var pr=H('<!> <div class="links svelte-1z2zby"><!> <!></div>',1);function mr(t){ae(t,{children:(r,e)=>{var a=pr(),i=q(a);de(i,{children:(n,v)=>{j();var d=z("CONTACT");y(n,d)},$$slots:{default:!0}});var o=T(i,2),s=C(o);ge(s,{href:"https://www.linkedin.com/in/federico-garcia-garcia/",children:(n,v)=>{j();var d=z("LinkedIn");y(n,d)},$$slots:{default:!0}});var l=T(s,2);ge(l,{href:"https://github.com/FedericoGarciaGarcia",children:(n,v)=>{j();var d=z("GitHub");y(n,d)},$$slots:{default:!0}}),S(o),y(r,a)}})}var _r=ce('<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path></svg>');function gr(t){var r=_r();y(t,r)}var wr=ce('<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M200,112a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h40A8,8,0,0,1,200,112Zm-8,24H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm40-80V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Zm-80.26-34a8,8,0,1,1-15.5,4c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,1,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,135.75,166ZM96,136a16,16,0,1,0-16-16A16,16,0,0,0,96,136Z"></path></svg>');function yr(t){var r=wr();y(t,r)}var br=ce('<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>');function xr(t){var r=br();y(t,r)}var Ar=H('<div><div class="year svelte-116mxsy"> <br/> </div> <div class="type-connector svelte-116mxsy"><div class="type svelte-116mxsy"><!></div></div> <div class="details svelte-116mxsy"><div class="title svelte-116mxsy"> </div> <a class="location svelte-116mxsy" target="_blank"><span>@&thinsp;</span> </a></div></div>');function Q(t,r){W(r,!0);let e=F(D({isVisible:!1})),a;K(()=>{$(e,O(a),!0)});var i=Ar(),o=C(i),s=C(o,!0),l=T(s,2,!0);S(o);var n=T(o,2),v=C(n),d=C(v);{var f=b=>{gr(b)},u=b=>{var _=me(),x=q(_);{var g=w=>{yr(w)},M=w=>{var E=me(),A=q(E);{var L=I=>{xr(I)};se(A,I=>{r.type==="graduation"&&I(L)},!0)}y(w,E)};se(x,w=>{r.type==="internship"?w(g):w(M,!1)},!0)}y(b,_)};se(d,b=>{r.type==="work"?b(f):b(u,!1)})}S(v),S(n);var m=T(n,2),c=C(m),p=C(c,!0);S(c);var h=T(c,2),V=T(C(h),1,!0);S(h),S(m),S(i),U(i,b=>a=b,()=>a),B(()=>{Z(i,1,`experience ${P(e).isVisible?"visible":""}`,"svelte-116mxsy"),ee(s,r.to),ee(l,r.from),ee(p,r.experience),ue(h,"href",r.link),ee(V,r.place)}),y(t,i),J()}var Tr=H('<!> <div class="svelte-lavdlb"><!> <!> <!> <!> <!></div>',1);function Sr(t){ae(t,{children:(r,e)=>{var a=Tr(),i=q(a);de(i,{children:(f,u)=>{j();var m=z("EXPERIENCE");y(f,m)},$$slots:{default:!0}});var o=T(i,2),s=C(o);Q(s,{type:"work",from:"2023 Apr",to:"Present",experience:"Frontend Developer",place:"Citadel AI",link:"https://citadel-ai.com/"});var l=T(s,2);Q(l,{type:"work",from:"2022 Sep",to:"2023 Mar",experience:"Frontend Developer",place:"TEKsystems at Apple",link:"https://www.teksystems.com/"});var n=T(l,2);Q(n,{type:"work",from:"2020 Sep",to:"2022 Aug",experience:"Frontend Developer",place:"Skeleton Crew Studio",link:"https://skeletoncrew.co.jp/"});var v=T(n,2);Q(v,{type:"internship",from:"2018 Jan",to:"2018 Dec",experience:"Web Developer Internship",place:"University of Granada",link:"https://www.ugr.es/en"});var d=T(v,2);Q(d,{type:"graduation",from:"2015 Sep",to:"2019 Nov",experience:"Bachelor in CS",place:"University of Granada",link:"https://www.ugr.es/en"}),S(o),y(r,a)}})}var Er=H('<div><a target="_blank" class="svelte-tv3wsr"><!></a></div>');function Cr(t,r){W(r,!0);let e,a=F(D({isVisible:!1}));K(()=>{$(a,O(e),!0)});var i=Er(),o=C(i),s=C(o);te(s,()=>r.children),S(o),S(i),U(i,l=>e=l,()=>e),B(()=>{Z(i,1,re(P(a).isVisible?"visible":""),"svelte-tv3wsr"),ue(o,"href",r.href)}),y(t,i),J()}var Mr=H('<!> <div class="skills svelte-1vn80rt"></div>',1);function Lr(t){const r=[["HTML","https://developer.mozilla.org/en-US/docs/Web/HTML"],["JavaScript","https://developer.mozilla.org/en-US/docs/Web/JavaScript"],["TypeScript","https://www.typescriptlang.org/"],["CSS","https://developer.mozilla.org/en-US/docs/Web/CSS"],["Svelte","https://svelte.dev/"],["React","https://react.dev/"],["Next.js","https://nextjs.org/"],["Vite","https://vitejs.dev/"],["Rollup","https://rollupjs.org/"],["Jest","https://jestjs.io/"],["D3.js","https://d3js.org/"],["Three.js","https://threejs.org/"],["Zod","https://zod.dev/"],["Playwright","https://playwright.dev/"],["Git","https://git-scm.com/"],["Bootstrap","https://getbootstrap.com/"],["Tailwind","https://tailwindcss.com/"],["jQuery","https://jquery.com/"],["ASP.NET","https://dotnet.microsoft.com/en-us/apps/aspnet"],["AWS","https://aws.amazon.com/"],["Python","https://www.python.org/"]];ae(t,{children:(e,a)=>{var i=Mr(),o=q(i);de(o,{children:(l,n)=>{j();var v=z("SKILLS");y(l,v)},$$slots:{default:!0}});var s=T(o,2);er(s,5,()=>r,([l,n])=>l,(l,n)=>{var v=Ye(()=>Xe(P(n),2));let d=()=>P(v)[0],f=()=>P(v)[1];Cr(l,{get href(){return f()},children:(u,m)=>{j();var c=z();B(()=>ee(c,d())),y(u,c)},$$slots:{default:!0}})}),S(s),y(e,i)}})}var Vr=H('<h1><span class="first-name svelte-1qtu1w9">FEDERICO</span><br/>GARCíA</h1> <h2>FRONTEND DEVELOPER</h2>',1);function Ir(t,r){W(r,!0);let e=F(D({isVisible:!1})),a=F(D({isVisible:!1})),i,o;K(()=>{$(e,O(i),!0),$(a,O(o),!0)}),ae(t,{children:(s,l)=>{var n=Vr(),v=q(n);U(v,f=>i=f,()=>i);var d=T(v,2);U(d,f=>o=f,()=>o),B(()=>{Z(v,1,re(P(e).isVisible?"visible":""),"svelte-1qtu1w9"),Z(d,1,`subtitle ${P(a).isVisible?"visible":""}`,"svelte-1qtu1w9")}),y(s,n)}}),J()}var Pr=H("<!> <!> <!> <!> <!>",1);function Fr(t){var r=Pr(),e=q(r);cr(e,{});var a=T(e,2);Ir(a,{});var i=T(a,2);Sr(i);var o=T(i,2);Lr(o);var s=T(o,2);mr(s),y(t,r)}export{Fr as component};
