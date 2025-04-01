"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[68539],{90920:(n,e,a)=>{a.r(e),a.d(e,{registerFunctions:()=>d});var t=a(67253),r=a(9861),o=a(43036),i=a(64379);function c(n,e){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?t.A.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:i.At[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))},(0,o.K)(e)):t.A.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:i.At[n.field.type],min:n.domain.minValue,max:n.domain.maxValue},(0,o.K)(e)):null}function d(n){"async"===n.mode&&(n.functions.domain=function(e,a){return n.standardFunctionAsync(e,a,(async(n,t,i)=>{if((0,o.D)(i,2,3,e,a),(0,o.n)(i[0]))return c((0,o.O)(i[0],(0,o.f)(i[1]),void 0===i[2]?void 0:i[2]),e);if((0,o.p)(i[0]))return await i[0]._ensureLoaded(),c((0,o.a0)((0,o.f)(i[1]),i[0],null,void 0===i[2]?void 0:i[2]),e);throw new r.D$(e,r.TX.InvalidParameter,a)}))},n.functions.subtypes=function(e,a){return n.standardFunctionAsync(e,a,(async(n,i,c)=>{if((0,o.D)(c,1,1,e,a),(0,o.n)(c[0])){const n=(0,o.T)(c[0]);return n?t.A.convertObjectToArcadeDictionary(n,(0,o.K)(e)):null}if((0,o.p)(c[0])){await c[0]._ensureLoaded();const n=c[0].subtypeMetaData();return n?t.A.convertObjectToArcadeDictionary(n,(0,o.K)(e)):null}throw new r.D$(e,r.TX.InvalidParameter,a)}))},n.functions.domainname=function(e,a){return n.standardFunctionAsync(e,a,(async(n,t,i)=>{if((0,o.D)(i,2,4,e,a),(0,o.n)(i[0]))return(0,o.Q)(i[0],(0,o.f)(i[1]),i[2],void 0===i[3]?void 0:i[3]);if((0,o.p)(i[0])){await i[0]._ensureLoaded();const n=(0,o.a0)((0,o.f)(i[1]),i[0],null,void 0===i[3]?void 0:i[3]);return(0,o.a1)(n,i[2])}throw new r.D$(e,r.TX.InvalidParameter,a)}))},n.signatures.push({name:"domainname",min:2,max:4}),n.functions.domaincode=function(e,a){return n.standardFunctionAsync(e,a,(async(n,t,i)=>{if((0,o.D)(i,2,4,e,a),(0,o.n)(i[0]))return(0,o.P)(i[0],(0,o.f)(i[1]),i[2],void 0===i[3]?void 0:i[3]);if((0,o.p)(i[0])){await i[0]._ensureLoaded();const n=(0,o.a0)((0,o.f)(i[1]),i[0],null,void 0===i[3]?void 0:i[3]);return(0,o.a2)(n,i[2])}throw new r.D$(e,r.TX.InvalidParameter,a)}))},n.signatures.push({name:"domaincode",min:2,max:4}),n.functions.text=function(e,a){return n.standardFunctionAsync(e,a,(async(n,t,i)=>{if((0,o.D)(i,1,2,e,a),(0,o.p)(i[0])){const t=(0,o.J)(i[1],"");if(""===t)return i[0].castToText();if("schema"===t.toLowerCase())return i[0].convertToText("schema",n.abortSignal);if("featureset"===t.toLowerCase())return i[0].convertToText("featureset",n.abortSignal);throw new r.D$(e,r.TX.InvalidParameter,a)}return(0,o.s)(i[0],i[1])}))},n.functions.gdbversion=function(e,a){return n.standardFunctionAsync(e,a,(async(n,t,i)=>{if((0,o.D)(i,1,1,e,a),(0,o.n)(i[0]))return i[0].gdbVersion();if((0,o.p)(i[0]))return(await i[0].load()).gdbVersion;throw new r.D$(e,r.TX.InvalidParameter,a)}))},n.functions.schema=function(e,a){return n.standardFunctionAsync(e,a,(async(n,i,c)=>{if((0,o.D)(c,1,1,e,a),(0,o.p)(c[0]))return await c[0].load(),t.A.convertObjectToArcadeDictionary(c[0].schema(),(0,o.K)(e));if((0,o.n)(c[0])){const n=(0,o.S)(c[0]);return n?t.A.convertObjectToArcadeDictionary(n,(0,o.K)(e)):null}throw new r.D$(e,r.TX.InvalidParameter,a)}))})}}}]);
//# sourceMappingURL=68539.b1d2fac1.chunk.js.map