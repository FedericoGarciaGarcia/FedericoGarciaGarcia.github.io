import"../chunks/DsnmJJEf.js";import{A as ne,v as H,aa as Pe,C as Ae,w as Ve,x as Ie,i as P,T as Me,y as ke,H as He,z as ge,B as se,K as X,ab as Ne,af as Re,D as ue,G as De,F as $e,aj as Te,a8 as Fe,ax as Ue,aB as me,aC as Be,I as xe,J as qe,aD as Ze,aE as oe,aF as Se,aG as ze,aH as Oe,ad as je,aI as Ge,ai as We,aJ as Ye,Y as Je,aK as Ke,aL as Xe,aM as Qe,aN as er,p as W,l as N,t as q,a as _,m as Y,W as I,ay as D,V as F,n as S,s as re,o as x,f as G,aO as U,aA as B,q as A,aP as he,c as _e,az as rr,aQ as tr}from"../chunks/v5cH1W2G.js";import{o as J,s as ee,d as ar,e as ir}from"../chunks/BNpiodRr.js";import{p as nr,b as $,i as le}from"../chunks/DWp6o7kn.js";import"../chunks/IQqheiRZ.js";function sr(t,e,r){for(var a=t.items,i=[],n=e.length,l=0;l<n;l++)Ge(e[l].e,i,!0);var f=n>0&&i.length===0&&r!==null;if(f){var d=r.parentNode;We(d),d.append(r),a.clear(),R(t,e[0].prev,e[n-1].next)}Ye(i,()=>{for(var c=0;c<n;c++){var h=e[c];f||(a.delete(h.k),R(t,h.prev,h.next)),Se(h.e,!f)}})}function or(t,e,r,a,i,n=null){var l=t,f={flags:e,items:new Map,first:null};{var d=t;l=H?ne(Pe(d)):d.appendChild(Ae())}H&&Ve();var c=null,h=!1,s=new Map,v=Me(()=>{var g=r();return Fe(g)?g:g==null?[]:Te(g)}),u,o;function m(){lr(o,u,f,s,l,i,e,a,r),n!==null&&(u.length===0?c?xe(c):c=ue(()=>n(l)):c!==null&&qe(c,()=>{c=null}))}Ie(()=>{o??=Je,u=P(v);var g=u.length;if(h&&g===0)return;h=g===0;let w=!1;if(H){var b=ke(l)===He;b!==(g===0)&&(l=ge(),ne(l),se(!1),w=!0)}if(H){for(var p=null,E,y=0;y<g;y++){if(X.nodeType===Ne&&X.data===Re){l=X,w=!0,se(!1);break}var V=u[y],T=a(V,y);E=de(X,f,p,null,V,T,y,i,e,r),f.items.set(T,E),p=E}g>0&&ne(ge())}if(H)g===0&&n&&(c=ue(()=>n(l)));else if(De()){var C=new Set,L=$e;for(y=0;y<g;y+=1){V=u[y],T=a(V,y);var M=f.items.get(T)??s.get(T);M?Ee(M,V,y):(E=de(null,f,null,null,V,T,y,i,e,r,!0),s.set(T,E)),C.add(T)}for(const[k,Z]of f.items)C.has(k)||L.skipped_effects.add(Z.e);L.add_callback(m)}else m();w&&se(!0),P(v)}),H&&(l=X)}function lr(t,e,r,a,i,n,l,f,d){var c=e.length,h=r.items,s=r.first,v=s,u,o=null,m=[],g=[],w,b,p,E;for(E=0;E<c;E+=1){if(w=e[E],b=f(w,E),p=h.get(b),p===void 0){var y=a.get(b);if(y!==void 0){a.delete(b),h.set(b,y);var V=o?o.next:v;R(r,o,y),R(r,y,V),ve(y,V,i),o=y}else{var T=v?v.e.nodes_start:i;o=de(T,r,o,o===null?r.first:o.next,w,b,E,n,l,d)}h.set(b,o),m=[],g=[],v=o.next;continue}if(Ee(p,w,E),(p.e.f&oe)!==0&&xe(p.e),p!==v){if(u!==void 0&&u.has(p)){if(m.length<g.length){var C=g[0],L;o=C.prev;var M=m[0],k=m[m.length-1];for(L=0;L<m.length;L+=1)ve(m[L],C,i);for(L=0;L<g.length;L+=1)u.delete(g[L]);R(r,M.prev,k.next),R(r,o,M),R(r,k,C),v=C,o=k,E-=1,m=[],g=[]}else u.delete(p),ve(p,v,i),R(r,p.prev,p.next),R(r,p,o===null?r.first:o.next),R(r,o,p),o=p;continue}for(m=[],g=[];v!==null&&v.k!==b;)(v.e.f&oe)===0&&(u??=new Set).add(v),g.push(v),v=v.next;if(v===null)continue;p=v}m.push(p),o=p,v=p.next}if(v!==null||u!==void 0){for(var Z=u===void 0?[]:Te(u);v!==null;)(v.e.f&oe)===0&&Z.push(v),v=v.next;var ie=Z.length;if(ie>0){var K=c===0?i:null;sr(r,Z,K)}}t.first=r.first&&r.first.e,t.last=o&&o.e;for(var Ce of a.values())Se(Ce.e);a.clear()}function Ee(t,e,r,a){Be(t.v,e),t.i=r}function de(t,e,r,a,i,n,l,f,d,c,h){var s=(d&ze)!==0,v=(d&Oe)===0,u=s?v?Ue(i,!1,!1):me(i):i,o=(d&Ze)===0?l:me(l),m={i:o,v:u,k:n,a:null,e:null,prev:r,next:a};try{if(t===null){var g=document.createDocumentFragment();g.append(t=Ae())}return m.e=ue(()=>f(t,u,o,c),H),m.e.prev=r&&r.e,m.e.next=a&&a.e,r===null?h||(e.first=m):(r.next=m,r.e.next=m.e),a!==null&&(a.prev=m,a.e.prev=m.e),m}finally{}}function ve(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,i=e?e.e.nodes_start:r,n=t.e.nodes_start;n!==null&&n!==a;){var l=je(n);i.before(n),n=l}}function R(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Le(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(r=Le(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function vr(){for(var t,e,r=0,a="",i=arguments.length;r<i;r++)(t=arguments[r])&&(e=Le(t))&&(a&&(a+=" "),a+=e);return a}function j(t){return typeof t=="object"?vr(t):t??""}function fr(t,e,r){var a=t==null?"":""+t;return e&&(a=a?a+" "+e:e),a===""?null:a}function we(t,e=!1){var r=e?" !important;":";",a="";for(var i in t){var n=t[i];n!=null&&n!==""&&(a+=" "+i+": "+n+r)}return a}function cr(t,e){if(e){var r="",a,i;return Array.isArray(e)?(a=e[0],i=e[1]):a=e,a&&(r+=we(a)),i&&(r+=we(i,!0)),r=r.trim(),r===""?null:r}return String(t)}function z(t,e,r,a,i,n){var l=t.__className;if(H||l!==r||l===void 0){var f=fr(r,a);(!H||f!==t.getAttribute("class"))&&(f==null?t.removeAttribute("class"):t.className=f),t.__className=r}return n}function fe(t,e={},r,a){for(var i in r){var n=r[i];e[i]!==n&&(r[i]==null?t.style.removeProperty(i):t.style.setProperty(i,n,a))}}function ur(t,e,r,a){var i=t.__style;if(H||i!==e){var n=cr(e,a);(!H||n!==t.getAttribute("style"))&&(n==null?t.removeAttribute("style"):t.style.cssText=n),t.__style=e}else a&&(Array.isArray(a)?(fe(t,r?.[0],a[0]),fe(t,r?.[1],a[1],"important")):fe(t,r,a));return a}const dr=Symbol("is custom element"),hr=Symbol("is html");function te(t,e,r,a){var i=pr(t);H&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=r)&&(e==="loading"&&(t[Qe]=r),r==null?t.removeAttribute(e):typeof r!="string"&&gr(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function pr(t){return t.__attributes??={[dr]:t.nodeName.includes("-"),[hr]:t.namespaceURI===Ke}}var be=new Map;function gr(t){var e=be.get(t.nodeName);if(e)return e;be.set(t.nodeName,e=[]);for(var r,a=t,i=Element.prototype;i!==a;){r=er(a);for(var n in r)r[n].set&&e.push(n);a=Xe(a)}return e}const mr=`attribute vec4 a_position;\r
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
}`;var wr=N('<canvas class="svelte-1k8wd7r"></canvas>');function br(t,e){W(e,!0);let r=nr(e,"hue",11,0),a=D(0),i=0,n;function l(s,v,u){const o=s.createShader(v);if(!o)throw new Error('"shader" was null');if(s.shaderSource(o,u),s.compileShader(o),!s.getShaderParameter(o,s.COMPILE_STATUS))throw console.error("Shader compilation failed:",s.getShaderInfoLog(o)),s.deleteShader(o),new Error;return o}function f(s,v,u){const o=s.createProgram();if(s.attachShader(o,v),s.attachShader(o,u),s.linkProgram(o),!s.getProgramParameter(o,s.LINK_STATUS))throw console.error("Program linking failed:",s.getProgramInfoLog(o)),new Error;return o}function d(){n.width=window.innerWidth,n.height=window.innerHeight;const s=n.getContext("webgl");if(!s){console.error("WebGL not supported");return}const v=l(s,s.VERTEX_SHADER,mr),u=l(s,s.FRAGMENT_SHADER,_r),o=f(s,v,u);s.useProgram(o);const m=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,m);const g=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];s.bufferData(s.ARRAY_BUFFER,new Float32Array(g),s.STATIC_DRAW);const w=s.getAttribLocation(o,"a_position");s.enableVertexAttribArray(w),s.vertexAttribPointer(w,2,s.FLOAT,!1,0,0);const b=s.getUniformLocation(o,"u_resolution"),p=s.getUniformLocation(o,"u_waveTime1"),E=s.getUniformLocation(o,"u_waveTime2"),y=s.getUniformLocation(o,"u_waveTime3"),V=s.getUniformLocation(o,"u_hue");let T=0,C=0,L=0,M=0;function k(Z){if(!s)throw new Error("gl should exist");s.uniform2f(b,n.width,n.height),s.uniform1f(p,C),s.uniform1f(E,L),s.uniform1f(y,M),s.uniform1f(V,i),s.drawArrays(s.TRIANGLES,0,6),requestAnimationFrame(k);const ie=r();i=i*.985+ie*.015;const K=(Z-T)/1e3;C+=K*.5,L+=K*.4,M+=K*.3,C>Math.PI*2&&(C-=Math.PI*2),L>Math.PI*2&&(L-=Math.PI*2),M>Math.PI*2&&(M-=Math.PI*2),T=Z}requestAnimationFrame(k)}J(()=>{i=r(),d(),setTimeout(()=>{I(a,1)})});var c=wr();let h;$(c,s=>n=s,()=>n),q(s=>h=ur(c,"",h,s),[()=>({opacity:P(a)})]),_(t,c),Y()}function O(t){const e=F({isVisible:!1}),r=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(r.unobserve(i.target),e.isVisible=!0)})});return r.observe(t),e}var yr=N('<div><a target="_blank" class="svelte-17jrq3c"><!></a></div>');function ye(t,e){W(e,!0);let r=D(F({isVisible:!1})),a;J(()=>{I(r,O(a),!0)});var i=yr(),n=S(i),l=S(n);re(l,()=>e.children),x(n),x(i),$(i,f=>a=f,()=>a),q(()=>{z(i,1,j(P(r).isVisible?"visible":""),"svelte-17jrq3c"),te(n,"href",e.href)}),_(t,i),Y()}var Ar=N('<div class="svelte-siy0dp"><!></div>');function ae(t,e){var r=Ar(),a=S(r);re(a,()=>e.children),x(r),q(()=>te(r,"id",e.id)),_(t,r)}var Tr=N("<h2><!></h2>");function pe(t,e){W(e,!0);let r=D(F({isVisible:!1})),a;J(()=>{I(r,O(a),!0)});var i=Tr(),n=S(i);re(n,()=>e.children),x(i),$(i,l=>a=l,()=>a),q(()=>z(i,1,j(P(r).isVisible?"visible":""),"svelte-3ny4ay")),_(t,i),Y()}var xr=N('<!> <div class="links svelte-1z2zby"><!> <!></div>',1);function Sr(t){ae(t,{id:"contact",children:(e,r)=>{var a=xr(),i=G(a);pe(i,{children:(d,c)=>{U();var h=B("CONTACT");_(d,h)},$$slots:{default:!0}});var n=A(i,2),l=S(n);ye(l,{href:"https://www.linkedin.com/in/federico-garcia-garcia/",children:(d,c)=>{U();var h=B("LinkedIn");_(d,h)},$$slots:{default:!0}});var f=A(l,2);ye(f,{href:"https://github.com/FedericoGarciaGarcia",children:(d,c)=>{U();var h=B("GitHub");_(d,h)},$$slots:{default:!0}}),x(n),_(e,a)}})}var Er=he('<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path></svg>');function Lr(t){var e=Er();_(t,e)}var Cr=he('<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M200,112a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h40A8,8,0,0,1,200,112Zm-8,24H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm40-80V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Zm-80.26-34a8,8,0,1,1-15.5,4c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,1,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,135.75,166ZM96,136a16,16,0,1,0-16-16A16,16,0,0,0,96,136Z"></path></svg>');function Pr(t){var e=Cr();_(t,e)}var Vr=he('<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>');function Ir(t){var e=Vr();_(t,e)}var Mr=N('<div><div class="year svelte-116mxsy"> <br/> </div> <div class="type-connector svelte-116mxsy"><div class="type svelte-116mxsy"><!></div></div> <div class="details svelte-116mxsy"><div class="title svelte-116mxsy"> </div> <a class="location svelte-116mxsy" target="_blank"><span>@&thinsp;</span> </a></div></div>');function Q(t,e){W(e,!0);let r=D(F({isVisible:!1})),a;J(()=>{I(r,O(a),!0)});var i=Mr(),n=S(i),l=S(n,!0),f=A(l,2,!0);x(n);var d=A(n,2),c=S(d),h=S(c);{var s=b=>{Lr(b)},v=b=>{var p=_e(),E=G(p);{var y=T=>{Pr(T)},V=T=>{var C=_e(),L=G(C);{var M=k=>{Ir(k)};le(L,k=>{e.type==="graduation"&&k(M)},!0)}_(T,C)};le(E,T=>{e.type==="internship"?T(y):T(V,!1)},!0)}_(b,p)};le(h,b=>{e.type==="work"?b(s):b(v,!1)})}x(c),x(d);var u=A(d,2),o=S(u),m=S(o,!0);x(o);var g=A(o,2),w=A(S(g),1,!0);x(g),x(u),x(i),$(i,b=>a=b,()=>a),q(()=>{z(i,1,`experience ${P(r).isVisible?"visible":""}`,"svelte-116mxsy"),ee(l,e.to),ee(f,e.from),ee(m,e.experience),te(g,"href",e.link),ee(w,e.place)}),_(t,i),Y()}var kr=N('<!> <div class="svelte-lavdlb"><!> <!> <!> <!> <!></div>',1);function Hr(t){ae(t,{id:"experience",children:(e,r)=>{var a=kr(),i=G(a);pe(i,{children:(s,v)=>{U();var u=B("EXPERIENCE");_(s,u)},$$slots:{default:!0}});var n=A(i,2),l=S(n);Q(l,{type:"work",from:"2023 Apr",to:"Present",experience:"Frontend Developer",place:"Citadel AI",link:"https://citadel-ai.com/"});var f=A(l,2);Q(f,{type:"work",from:"2022 Sep",to:"2023 Mar",experience:"Frontend Developer",place:"TEKsystems at Apple",link:"https://www.teksystems.com/"});var d=A(f,2);Q(d,{type:"work",from:"2020 Sep",to:"2022 Aug",experience:"Frontend Developer",place:"Skeleton Crew Studio",link:"https://skeletoncrew.co.jp/"});var c=A(d,2);Q(c,{type:"internship",from:"2018 Jan",to:"2018 Dec",experience:"Web Developer Internship",place:"University of Granada",link:"https://www.ugr.es/en"});var h=A(c,2);Q(h,{type:"graduation",from:"2015 Sep",to:"2019 Nov",experience:"Bachelor in CS",place:"University of Granada",link:"https://www.ugr.es/en"}),x(n),_(e,a)}})}var Nr=N('<div><a target="_blank" class="svelte-166k0lj"><!></a></div>');function Rr(t,e){W(e,!0);let r,a=D(F({isVisible:!1}));J(()=>{I(a,O(r),!0)});var i=Nr(),n=S(i),l=S(n);re(l,()=>e.children),x(n),x(i),$(i,f=>r=f,()=>r),q(()=>{z(i,1,j({visible:P(a).isVisible}),"svelte-166k0lj"),te(n,"href",e.href)}),_(t,i),Y()}var Dr=N('<!> <div class="skills svelte-1vn80rt"></div>',1);function $r(t){const e=[["HTML","https://developer.mozilla.org/en-US/docs/Web/HTML"],["JavaScript","https://developer.mozilla.org/en-US/docs/Web/JavaScript"],["TypeScript","https://www.typescriptlang.org/"],["CSS","https://developer.mozilla.org/en-US/docs/Web/CSS"],["Svelte","https://svelte.dev/"],["React","https://react.dev/"],["Next.js","https://nextjs.org/"],["Vite","https://vitejs.dev/"],["Rollup","https://rollupjs.org/"],["Jest","https://jestjs.io/"],["D3.js","https://d3js.org/"],["Three.js","https://threejs.org/"],["Zod","https://zod.dev/"],["Playwright","https://playwright.dev/"],["Git","https://git-scm.com/"],["Bootstrap","https://getbootstrap.com/"],["Tailwind","https://tailwindcss.com/"],["jQuery","https://jquery.com/"],["ASP.NET","https://dotnet.microsoft.com/en-us/apps/aspnet"],["AWS","https://aws.amazon.com/"],["Python","https://www.python.org/"]];ae(t,{id:"skills",children:(r,a)=>{var i=Dr(),n=G(i);pe(n,{children:(f,d)=>{U();var c=B("SKILLS");_(f,c)},$$slots:{default:!0}});var l=A(n,2);or(l,5,()=>e,([f,d])=>f,(f,d)=>{var c=rr(()=>tr(P(d),2));let h=()=>P(c)[0],s=()=>P(c)[1];Rr(f,{get href(){return s()},children:(v,u)=>{U();var o=B();q(()=>ee(o,h())),_(v,o)},$$slots:{default:!0}})}),x(l),_(r,i)}})}function Fr(t,e){e.id&&(t.preventDefault(),document.getElementById(e.id)?.scrollIntoView({behavior:"smooth"}),this.blur())}var Ur=N('<div><a class="svelte-ztbzz4"><!></a></div>');function ce(t,e){W(e,!0);let r,a=D(F({isVisible:!1}));J(()=>{I(a,O(r),!0)});var i=Ur(),n=S(i);n.__click=[Fr,e];var l=S(n);re(l,()=>e.children),x(n),x(i),$(i,f=>r=f,()=>r),q(()=>{z(i,1,j({visible:P(a).isVisible}),"svelte-ztbzz4"),te(n,"href",e.href)}),_(t,i),Y()}ar(["click"]);var Br=N('<h1><span class="first-name svelte-1wlrn8t">PLACE</span><br/>HOLDER</h1> <h2>PLACEHOLDER PLACEHOLDER</h2> <div><!> <!> <!></div>',1);function qr(t,e){W(e,!0);let r=D(F({isVisible:!1})),a=D(F({isVisible:!1})),i=D(F({isVisible:!1})),n,l,f;J(()=>{I(r,O(n),!0),I(a,O(l),!0),I(i,O(f),!0)}),ae(t,{children:(d,c)=>{var h=Br(),s=G(h);$(s,w=>n=w,()=>n);var v=A(s,2);$(v,w=>l=w,()=>l);var u=A(v,2),o=S(u);ce(o,{id:"experience",href:"#experience",children:(w,b)=>{U();var p=B("Nav 1");_(w,p)},$$slots:{default:!0}});var m=A(o,2);ce(m,{id:"skills",href:"#skills",children:(w,b)=>{U();var p=B("Nav 2");_(w,p)},$$slots:{default:!0}});var g=A(m,2);ce(g,{id:"contact",href:"#contact",children:(w,b)=>{U();var p=B("Nav 3");_(w,p)},$$slots:{default:!0}}),x(u),$(u,w=>f=w,()=>f),q(()=>{z(s,1,j({visible:P(r).isVisible}),"svelte-1wlrn8t"),z(v,1,j(["subtitle",{visible:P(a).isVisible}]),"svelte-1wlrn8t"),z(u,1,j(["links",{visible:P(i).isVisible}]),"svelte-1wlrn8t")}),_(d,h)}}),Y()}var Zr=N('<!> <div class="svelte-fd5he5"><!> <!> <!> <!></div>',1);function Yr(t){let e,r=0,a=D(0);function i(v){r=v.target.scrollTop,r>e.clientHeight*2.5?I(a,-.35):r>e.clientHeight/2?I(a,-.2):I(a,0)}var n=Zr(),l=G(n);br(l,{get hue(){return P(a)},set hue(v){I(a,v,!0)}});var f=A(l,2),d=S(f);qr(d,{});var c=A(d,2);Hr(c);var h=A(c,2);$r(h);var s=A(h,2);Sr(s),x(f),$(f,v=>e=v,()=>e),ir("scroll",f,i),_(t,n)}export{Yr as component};
