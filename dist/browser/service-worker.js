if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,o)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=o(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-b31a511d"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"803314a50912218b9c412f642a80e986"},{url:"manifest.05537d65.webmanifest",revision:"3c887a6b3844e276c24ab68f05537d65"},{url:"service-worker.js.map",revision:"e1a043d8e706b1b4889aab2c10b34e89"},{url:"tasky.36d96deb.css",revision:"b8e5995295e7be156fdb2261928f47f3"},{url:"tasky.36d96deb.css.map",revision:"f0eec62b4b0012a14c88224642c41e12"},{url:"tasky.7e1b580c.js",revision:"570c5e1615497dcafedd73e467a312c1"},{url:"workbox-b31a511d.js.map",revision:"21cf9b62ef5d5a12dc58ab50d327a2fe"},{url:"workbox-f52ab642.js.map",revision:"e28c1abfc2c4f3d1b4f5e55fe35ef31f"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
