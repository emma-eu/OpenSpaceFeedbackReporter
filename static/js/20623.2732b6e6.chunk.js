"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[20623],{20623:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>r});var a=s(50076);function r(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const r=t.signal;return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:r}).then((async n=>{let o,u,i,l,c;if(n.data)if(n.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(o=new Blob([n.data]),"json"!==s&&"text"!==s||(l=await o.text(),"json"!==s)))){try{u=JSON.parse(l||null)}catch(p){const s={...p,url:e,requestOptions:t};throw new a.A("request:server",p.message,s)}if(u.error){const s={...u.error,url:e,requestOptions:t};throw new a.A("request:server",u.error.message,s)}}}else"native"===s&&(n.data.signal=r,i=await fetch(n.data.url,n.data),n.httpStatus=i.status);switch(s){case"blob":c=o;break;case"json":c=u;break;case"native":c=i;break;case"text":c=l;break;default:c=n.data}return{data:c,httpStatus:n.httpStatus,requestOptions:t,ssl:n.ssl,url:e}}))}}}]);
//# sourceMappingURL=20623.2732b6e6.chunk.js.map