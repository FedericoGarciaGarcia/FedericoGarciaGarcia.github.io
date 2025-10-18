import"../chunks/DsnmJJEf.js";import{A as ne,v as H,aa as Ie,C as Ae,w as Le,x as ke,i as V,T as Me,y as He,H as Re,z as me,B as se,K as X,ab as Ne,af as De,D as ue,G as Fe,F as $e,aj as Te,a8 as Ue,ax as Be,aB as ge,aC as qe,I as Se,J as Ze,aD as ze,aE as oe,aF as xe,aG as Oe,aH as Ge,ad as je,aI as We,ai as Ye,aJ as Je,Y as Ke,aK as Xe,aL as Qe,aM as er,aN as rr,p as W,l as R,t as q,a as w,m as Y,W as L,ay as D,V as $,n as x,s as re,o as S,f as j,aO as U,aA as B,q as A,aP as he,c as _e,az as tr,aQ as ar}from"../chunks/v5cH1W2G.js";import{o as J,s as ee,d as Ee,e as ir}from"../chunks/BNpiodRr.js";import{p as nr,b as F,i as le}from"../chunks/DWp6o7kn.js";import"../chunks/IQqheiRZ.js";function sr(t,e,r){for(var a=t.items,i=[],n=e.length,l=0;l<n;l++)We(e[l].e,i,!0);var v=n>0&&i.length===0&&r!==null;if(v){var d=r.parentNode;Ye(d),d.append(r),a.clear(),N(t,e[0].prev,e[n-1].next)}Je(i,()=>{for(var c=0;c<n;c++){var p=e[c];v||(a.delete(p.k),N(t,p.prev,p.next)),xe(p.e,!v)}})}function or(t,e,r,a,i,n=null){var l=t,v={flags:e,items:new Map,first:null};{var d=t;l=H?ne(Ie(d)):d.appendChild(Ae())}H&&Le();var c=null,p=!1,s=new Map,f=Me(()=>{var g=r();return Ue(g)?g:g==null?[]:Te(g)}),h,o;function m(){lr(o,h,v,s,l,i,e,a,r),n!==null&&(h.length===0?c?Se(c):c=ue(()=>n(l)):c!==null&&Ze(c,()=>{c=null}))}ke(()=>{o??=Ke,h=V(f);var g=h.length;if(p&&g===0)return;p=g===0;let C=!1;if(H){var b=He(l)===Re;b!==(g===0)&&(l=me(),ne(l),se(!1),C=!0)}if(H){for(var u=null,y,_=0;_<g;_++){if(X.nodeType===Ne&&X.data===De){l=X,C=!0,se(!1);break}var I=h[_],T=a(I,_);y=de(X,v,u,null,I,T,_,i,e,r),v.items.set(T,y),u=y}g>0&&ne(me())}if(H)g===0&&n&&(c=ue(()=>n(l)));else if(Fe()){var P=new Set,E=$e;for(_=0;_<g;_+=1){I=h[_],T=a(I,_);var k=v.items.get(T)??s.get(T);k?Ce(k,I,_):(y=de(null,v,null,null,I,T,_,i,e,r,!0),s.set(T,y)),P.add(T)}for(const[M,Z]of v.items)P.has(M)||E.skipped_effects.add(Z.e);E.add_callback(m)}else m();C&&se(!0),V(f)}),H&&(l=X)}function lr(t,e,r,a,i,n,l,v,d){var c=e.length,p=r.items,s=r.first,f=s,h,o=null,m=[],g=[],C,b,u,y;for(y=0;y<c;y+=1){if(C=e[y],b=v(C,y),u=p.get(b),u===void 0){var _=a.get(b);if(_!==void 0){a.delete(b),p.set(b,_);var I=o?o.next:f;N(r,o,_),N(r,_,I),ve(_,I,i),o=_}else{var T=f?f.e.nodes_start:i;o=de(T,r,o,o===null?r.first:o.next,C,b,y,n,l,d)}p.set(b,o),m=[],g=[],f=o.next;continue}if(Ce(u,C,y),(u.e.f&oe)!==0&&Se(u.e),u!==f){if(h!==void 0&&h.has(u)){if(m.length<g.length){var P=g[0],E;o=P.prev;var k=m[0],M=m[m.length-1];for(E=0;E<m.length;E+=1)ve(m[E],P,i);for(E=0;E<g.length;E+=1)h.delete(g[E]);N(r,k.prev,M.next),N(r,o,k),N(r,M,P),f=P,o=M,y-=1,m=[],g=[]}else h.delete(u),ve(u,f,i),N(r,u.prev,u.next),N(r,u,o===null?r.first:o.next),N(r,o,u),o=u;continue}for(m=[],g=[];f!==null&&f.k!==b;)(f.e.f&oe)===0&&(h??=new Set).add(f),g.push(f),f=f.next;if(f===null)continue;u=f}m.push(u),o=u,f=u.next}if(f!==null||h!==void 0){for(var Z=h===void 0?[]:Te(h);f!==null;)(f.e.f&oe)===0&&Z.push(f),f=f.next;var ie=Z.length;if(ie>0){var K=c===0?i:null;sr(r,Z,K)}}t.first=r.first&&r.first.e,t.last=o&&o.e;for(var Ve of a.values())xe(Ve.e);a.clear()}function Ce(t,e,r,a){qe(t.v,e),t.i=r}function de(t,e,r,a,i,n,l,v,d,c,p){var s=(d&Oe)!==0,f=(d&Ge)===0,h=s?f?Be(i,!1,!1):ge(i):i,o=(d&ze)===0?l:ge(l),m={i:o,v:h,k:n,a:null,e:null,prev:r,next:a};try{if(t===null){var g=document.createDocumentFragment();g.append(t=Ae())}return m.e=ue(()=>v(t,h,o,c),H),m.e.prev=r&&r.e,m.e.next=a&&a.e,r===null?p||(e.first=m):(r.next=m,r.e.next=m.e),a!==null&&(a.prev=m,a.e.prev=m.e),m}finally{}}function ve(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,i=e?e.e.nodes_start:r,n=t.e.nodes_start;n!==null&&n!==a;){var l=je(n);i.before(n),n=l}}function N(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Pe(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(r=Pe(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function vr(){for(var t,e,r=0,a="",i=arguments.length;r<i;r++)(t=arguments[r])&&(e=Pe(t))&&(a&&(a+=" "),a+=e);return a}function G(t){return typeof t=="object"?vr(t):t??""}function fr(t,e,r){var a=t==null?"":""+t;return e&&(a=a?a+" "+e:e),a===""?null:a}function we(t,e=!1){var r=e?" !important;":";",a="";for(var i in t){var n=t[i];n!=null&&n!==""&&(a+=" "+i+": "+n+r)}return a}function cr(t,e){if(e){var r="",a,i;return Array.isArray(e)?(a=e[0],i=e[1]):a=e,a&&(r+=we(a)),i&&(r+=we(i,!0)),r=r.trim(),r===""?null:r}return String(t)}function z(t,e,r,a,i,n){var l=t.__className;if(H||l!==r||l===void 0){var v=fr(r,a);(!H||v!==t.getAttribute("class"))&&(v==null?t.removeAttribute("class"):t.className=v),t.__className=r}return n}function fe(t,e={},r,a){for(var i in r){var n=r[i];e[i]!==n&&(r[i]==null?t.style.removeProperty(i):t.style.setProperty(i,n,a))}}function ur(t,e,r,a){var i=t.__style;if(H||i!==e){var n=cr(e,a);(!H||n!==t.getAttribute("style"))&&(n==null?t.removeAttribute("style"):t.style.cssText=n),t.__style=e}else a&&(Array.isArray(a)?(fe(t,r?.[0],a[0]),fe(t,r?.[1],a[1],"important")):fe(t,r,a));return a}const dr=Symbol("is custom element"),hr=Symbol("is html");function te(t,e,r,a){var i=pr(t);H&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=r)&&(e==="loading"&&(t[er]=r),r==null?t.removeAttribute(e):typeof r!="string"&&mr(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function pr(t){return t.__attributes??={[dr]:t.nodeName.includes("-"),[hr]:t.namespaceURI===Xe}}var be=new Map;function mr(t){var e=be.get(t.nodeName);if(e)return e;be.set(t.nodeName,e=[]);for(var r,a=t,i=Element.prototype;i!==a;){r=rr(a);for(var n in r)r[n].set&&e.push(n);a=Qe(a)}return e}const gr=`attribute vec4 a_position;\r
void main() {\r
  gl_Position = a_position;\r
}`,_r=`precision mediump float;\r
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
}`;var wr=R('<canvas class="svelte-1k8wd7r"></canvas>');function br(t,e){W(e,!0);let r=nr(e,"hue",11,0),a=D(0),i=0,n;function l(s,f,h){const o=s.createShader(f);if(!o)throw new Error('"shader" was null');if(s.shaderSource(o,h),s.compileShader(o),!s.getShaderParameter(o,s.COMPILE_STATUS))throw console.error("Shader compilation failed:",s.getShaderInfoLog(o)),s.deleteShader(o),new Error;return o}function v(s,f,h){const o=s.createProgram();if(s.attachShader(o,f),s.attachShader(o,h),s.linkProgram(o),!s.getProgramParameter(o,s.LINK_STATUS))throw console.error("Program linking failed:",s.getProgramInfoLog(o)),new Error;return o}function d(){n.width=window.innerWidth,n.height=window.innerHeight;const s=n.getContext("webgl");if(!s){console.error("WebGL not supported");return}const f=l(s,s.VERTEX_SHADER,gr),h=l(s,s.FRAGMENT_SHADER,_r),o=v(s,f,h);s.useProgram(o);const m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m);const g=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];s.bufferData(s.ARRAY_BUFFER,new Float32Array(g),s.STATIC_DRAW);const C=s.getAttribLocation(o,"a_position");s.enableVertexAttribArray(C),s.vertexAttribPointer(C,2,s.FLOAT,!1,0,0);const b=s.getUniformLocation(o,"u_resolution"),u=s.getUniformLocation(o,"u_waveTime1"),y=s.getUniformLocation(o,"u_waveTime2"),_=s.getUniformLocation(o,"u_waveTime3"),I=s.getUniformLocation(o,"u_hue");let T=0,P=0,E=0,k=0;function M(Z){if(!s)throw new Error("gl should exist");s.uniform2f(b,n.width,n.height),s.uniform1f(u,P),s.uniform1f(y,E),s.uniform1f(_,k),s.uniform1f(I,i),s.drawArrays(s.TRIANGLES,0,6),requestAnimationFrame(M);const ie=r();i=i*.985+ie*.015;const K=(Z-T)/1e3;P+=K*.5,E+=K*.4,k+=K*.3,P>Math.PI*2&&(P-=Math.PI*2),E>Math.PI*2&&(E-=Math.PI*2),k>Math.PI*2&&(k-=Math.PI*2),T=Z}requestAnimationFrame(M)}J(()=>{i=r(),d(),setTimeout(()=>{L(a,1)})});var c=wr();let p;F(c,s=>n=s,()=>n),q(s=>p=ur(c,"",p,s),[()=>({opacity:V(a)})]),w(t,c),Y()}function O(t){const e=$({isVisible:!1}),r=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(r.unobserve(i.target),e.isVisible=!0)})});return r.observe(t),e}var yr=R('<div><a target="_blank" class="svelte-17jrq3c"><!></a></div>');function ye(t,e){W(e,!0);let r=D($({isVisible:!1})),a;J(()=>{L(r,O(a),!0)});var i=yr(),n=x(i),l=x(n);re(l,()=>e.children),S(n),S(i),F(i,v=>a=v,()=>a),q(()=>{z(i,1,G(V(r).isVisible?"visible":""),"svelte-17jrq3c"),te(n,"href",e.href)}),w(t,i),Y()}var Ar=R('<div class="svelte-siy0dp"><!></div>');function ae(t,e){var r=Ar(),a=x(r);re(a,()=>e.children),S(r),q(()=>te(r,"id",e.id)),w(t,r)}var Tr=R("<h2><!></h2>");function pe(t,e){W(e,!0);let r=D($({isVisible:!1})),a;J(()=>{L(r,O(a),!0)});var i=Tr(),n=x(i);re(n,()=>e.children),S(i),F(i,l=>a=l,()=>a),q(()=>z(i,1,G(V(r).isVisible?"visible":""),"svelte-3ny4ay")),w(t,i),Y()}var Sr=R('<!> <div class="links svelte-1z2zby"><!> <!></div>',1);function xr(t){ae(t,{id:"contact",children:(e,r)=>{var a=Sr(),i=j(a);pe(i,{children:(d,c)=>{U();var p=B("CONTACT");w(d,p)},$$slots:{default:!0}});var n=A(i,2),l=x(n);ye(l,{href:"https://www.linkedin.com/in/federico-garcia-garcia/",children:(d,c)=>{U();var p=B("LinkedIn");w(d,p)},$$slots:{default:!0}});var v=A(l,2);ye(v,{href:"https://github.com/FedericoGarciaGarcia",children:(d,c)=>{U();var p=B("GitHub");w(d,p)},$$slots:{default:!0}}),S(n),w(e,a)}})}var Er=he('<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path></svg>');function Cr(t){var e=Er();w(t,e)}var Pr=he('<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M200,112a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h40A8,8,0,0,1,200,112Zm-8,24H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm40-80V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Zm-80.26-34a8,8,0,1,1-15.5,4c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,1,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,135.75,166ZM96,136a16,16,0,1,0-16-16A16,16,0,0,0,96,136Z"></path></svg>');function Vr(t){var e=Pr();w(t,e)}var Ir=he('<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>');function Lr(t){var e=Ir();w(t,e)}var kr=R('<div><div class="year svelte-116mxsy"> <br/> </div> <div class="type-connector svelte-116mxsy"><div class="type svelte-116mxsy"><!></div></div> <div class="details svelte-116mxsy"><div class="title svelte-116mxsy"> </div> <a class="location svelte-116mxsy" target="_blank"><span>@&thinsp;</span> </a></div></div>');function Q(t,e){W(e,!0);let r=D($({isVisible:!1})),a;J(()=>{L(r,O(a),!0)});var i=kr(),n=x(i),l=x(n,!0),v=A(l,2,!0);S(n);var d=A(n,2),c=x(d),p=x(c);{var s=b=>{Cr(b)},f=b=>{var u=_e(),y=j(u);{var _=T=>{Vr(T)},I=T=>{var P=_e(),E=j(P);{var k=M=>{Lr(M)};le(E,M=>{e.type==="graduation"&&M(k)},!0)}w(T,P)};le(y,T=>{e.type==="internship"?T(_):T(I,!1)},!0)}w(b,u)};le(p,b=>{e.type==="work"?b(s):b(f,!1)})}S(c),S(d);var h=A(d,2),o=x(h),m=x(o,!0);S(o);var g=A(o,2),C=A(x(g),1,!0);S(g),S(h),S(i),F(i,b=>a=b,()=>a),q(()=>{z(i,1,`experience ${V(r).isVisible?"visible":""}`,"svelte-116mxsy"),ee(l,e.to),ee(v,e.from),ee(m,e.experience),te(g,"href",e.link),ee(C,e.place)}),w(t,i),Y()}var Mr=R('<!> <div class="svelte-lavdlb"><!> <!> <!> <!> <!></div>',1);function Hr(t){ae(t,{id:"experience",children:(e,r)=>{var a=Mr(),i=j(a);pe(i,{children:(s,f)=>{U();var h=B("EXPERIENCE");w(s,h)},$$slots:{default:!0}});var n=A(i,2),l=x(n);Q(l,{type:"work",from:"2023 Apr",to:"Present",experience:"Frontend Developer",place:"Citadel AI",link:"https://citadel-ai.com/"});var v=A(l,2);Q(v,{type:"work",from:"2022 Sep",to:"2023 Mar",experience:"Frontend Developer",place:"TEKsystems at Apple",link:"https://www.teksystems.com/"});var d=A(v,2);Q(d,{type:"work",from:"2020 Sep",to:"2022 Aug",experience:"Frontend Developer",place:"Skeleton Crew Studio",link:"https://skeletoncrew.co.jp/"});var c=A(d,2);Q(c,{type:"internship",from:"2018 Jan",to:"2018 Dec",experience:"Web Developer Internship",place:"University of Granada",link:"https://www.ugr.es/en"});var p=A(c,2);Q(p,{type:"graduation",from:"2015 Sep",to:"2019 Nov",experience:"Bachelor in CS",place:"University of Granada",link:"https://www.ugr.es/en"}),S(n),w(e,a)}})}var Rr=R('<div><a target="_blank" class="svelte-166k0lj"><!></a></div>');function Nr(t,e){W(e,!0);let r,a=D($({isVisible:!1}));J(()=>{L(a,O(r),!0)});var i=Rr(),n=x(i),l=x(n);re(l,()=>e.children),S(n),S(i),F(i,v=>r=v,()=>r),q(()=>{z(i,1,G({visible:V(a).isVisible}),"svelte-166k0lj"),te(n,"href",e.href)}),w(t,i),Y()}var Dr=R('<!> <div class="skills svelte-1vn80rt"></div>',1);function Fr(t){const e=[["HTML","https://developer.mozilla.org/en-US/docs/Web/HTML"],["JavaScript","https://developer.mozilla.org/en-US/docs/Web/JavaScript"],["TypeScript","https://www.typescriptlang.org/"],["CSS","https://developer.mozilla.org/en-US/docs/Web/CSS"],["Svelte","https://svelte.dev/"],["React","https://react.dev/"],["Next.js","https://nextjs.org/"],["Vite","https://vitejs.dev/"],["Rollup","https://rollupjs.org/"],["Jest","https://jestjs.io/"],["D3.js","https://d3js.org/"],["Three.js","https://threejs.org/"],["Zod","https://zod.dev/"],["Playwright","https://playwright.dev/"],["Git","https://git-scm.com/"],["Bootstrap","https://getbootstrap.com/"],["Tailwind","https://tailwindcss.com/"],["jQuery","https://jquery.com/"],["ASP.NET","https://dotnet.microsoft.com/en-us/apps/aspnet"],["AWS","https://aws.amazon.com/"],["Python","https://www.python.org/"]];ae(t,{id:"skills",children:(r,a)=>{var i=Dr(),n=j(i);pe(n,{children:(v,d)=>{U();var c=B("SKILLS");w(v,c)},$$slots:{default:!0}});var l=A(n,2);or(l,5,()=>e,([v,d])=>v,(v,d)=>{var c=tr(()=>ar(V(d),2));let p=()=>V(c)[0],s=()=>V(c)[1];Nr(v,{get href(){return s()},children:(f,h)=>{U();var o=B();q(()=>ee(o,p())),w(f,o)},$$slots:{default:!0}})}),S(l),w(r,i)}})}function $r(t,e){e.id&&(t.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth"}),this.blur())}var Ur=R('<div><a class="svelte-ztbzz4"><!></a></div>');function ce(t,e){W(e,!0);let r,a=D($({isVisible:!1}));J(()=>{L(a,O(r),!0)});var i=Ur(),n=x(i);n.__click=[$r,e];var l=x(n);re(l,()=>e.children),S(n),S(i),F(i,v=>r=v,()=>r),q(()=>{z(i,1,G({visible:V(a).isVisible}),"svelte-ztbzz4"),te(n,"href",e.href)}),w(t,i),Y()}Ee(["click"]);var Br=R('<h1><span class="first-name svelte-1wlrn8t">FEDERICO</span><br/>GARCíA</h1> <h2>FRONTEND DEVELOPER</h2> <div><!> <!> <!></div>',1);function qr(t,e){W(e,!0);let r=D($({isVisible:!1})),a=D($({isVisible:!1})),i=D($({isVisible:!1})),n,l,v;J(()=>{L(r,O(n),!0),L(a,O(l),!0),L(i,O(v),!0)});let d=0;function c(){localStorage.setItem("umami.disabled","1")}ae(t,{children:(p,s)=>{var f=Br(),h=j(f);h.__click=()=>{d++,d>=10&&(c(),console.log(localStorage.getItem("umami.disabled")))},F(h,u=>n=u,()=>n);var o=A(h,2);F(o,u=>l=u,()=>l);var m=A(o,2),g=x(m);ce(g,{id:"experience",href:"#experience",children:(u,y)=>{U();var _=B("Experience");w(u,_)},$$slots:{default:!0}});var C=A(g,2);ce(C,{id:"skills",href:"#skills",children:(u,y)=>{U();var _=B("Skills");w(u,_)},$$slots:{default:!0}});var b=A(C,2);ce(b,{id:"contact",href:"#contact",children:(u,y)=>{U();var _=B("Contact");w(u,_)},$$slots:{default:!0}}),S(m),F(m,u=>v=u,()=>v),q(()=>{z(h,1,G({visible:V(r).isVisible}),"svelte-1wlrn8t"),z(o,1,G(["subtitle",{visible:V(a).isVisible}]),"svelte-1wlrn8t"),z(m,1,G(["links",{visible:V(i).isVisible}]),"svelte-1wlrn8t")}),w(p,f)}}),Y()}Ee(["click"]);var Zr=R('<!> <div class="svelte-fd5he5"><!> <!> <!> <!></div>',1);function Yr(t){let e,r=0,a=D(0);function i(f){r=f.target.scrollTop,r>e.clientHeight*2.5?L(a,-.35):r>e.clientHeight/2?L(a,-.2):L(a,0)}var n=Zr(),l=j(n);br(l,{get hue(){return V(a)},set hue(f){L(a,f,!0)}});var v=A(l,2),d=x(v);qr(d,{});var c=A(d,2);Hr(c);var p=A(c,2);Fr(p);var s=A(p,2);xr(s),S(v),F(v,f=>e=f,()=>e),ir("scroll",v,i),w(t,n)}export{Yr as component};
