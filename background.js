import{O as A,P as x,Q as d,R,T,V as L,J as P,X as q,Z as F,K as E,S as B,B as C,A as I,g as U,a5 as H}from"./assets/use_visible.svelte-DarOMP3s.js";const V=`attribute vec4 a_position;\r
void main() {\r
  gl_Position = a_position;\r
}`,k=`precision mediump float;\r
uniform vec2 u_resolution;\r
uniform float u_time;\r
uniform float u_hue;\r
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
\r
  float x = uv.x / 20.0;\r
    \r
  float wave1 = 0.1 * sin(uv.x * 2.0 + u_time * 0.5);\r
  float wave2 = 0.1 * sin(uv.x * 2.5 + u_time * 0.4);\r
  vec3 color = createColor(x, uv.y, u_hue, 0.9, 0.56);\r
  float opacity;\r
  \r
  if (uv.y > 0.25 + wave1 && uv.y < 0.75 + wave2) {\r
    opacity = 1.0;\r
  }\r
  else {\r
    opacity = 0.94;\r
  }\r
\r
  gl_FragColor = vec4(color * opacity, 1.0);\r
}`;var D=P("<canvas></canvas>");function M(a,g){A(g,!0);let o,c=x(d({isVisible:!1}));function f(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),r.getShaderParameter(n,r.COMPILE_STATUS)?n:(console.error("Shader compilation failed:",r.getShaderInfoLog(n)),r.deleteShader(n),null)}function p(r,e,t){const n=r.createProgram();return r.attachShader(n,e),r.attachShader(n,t),r.linkProgram(n),r.getProgramParameter(n,r.LINK_STATUS)?n:(console.error("Program linking failed:",r.getProgramInfoLog(n)),null)}function v(){o.width=window.innerWidth,o.height=window.innerHeight;const r=o.getContext("webgl");if(!r){console.error("WebGL not supported");return}const e=f(r,r.VERTEX_SHADER,V),t=f(r,r.FRAGMENT_SHADER,k),n=p(r,e,t);r.useProgram(n);const b=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,b);const _=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];r.bufferData(r.ARRAY_BUFFER,new Float32Array(_),r.STATIC_DRAW);const u=r.getAttribLocation(n,"a_position");r.enableVertexAttribArray(u),r.vertexAttribPointer(u,2,r.FLOAT,!1,0,0);const S=r.getUniformLocation(n,"u_resolution"),y=r.getUniformLocation(n,"u_time"),w=r.getUniformLocation(n,"u_hue");let s=0;function m(h){h*=.001;let l=0;window.scrollY>window.innerHeight*2.5?l=-.35:window.scrollY>window.innerHeight/2&&(l=-.2),s=s*.985+l*.015,r.uniform2f(S,o.width,o.height),r.uniform1f(y,h),r.uniform1f(w,s),r.drawArrays(r.TRIANGLES,0,6),requestAnimationFrame(m)}requestAnimationFrame(m)}R(()=>{v(),setTimeout(()=>{T(c,d(L(o)))},200)});var i=D();q(i,r=>o=r,()=>o),F(()=>C(i,1,I(U(c).isVisible?"visible":""),"svelte-1s10orc")),E(a,i),B()}function Y(a){M(a,{})}H(Y,{target:document.getElementById("background")});
