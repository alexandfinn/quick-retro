var S_=Object.defineProperty,x_=Object.defineProperties;var R_=Object.getOwnPropertyDescriptors;var vu=Object.getOwnPropertySymbols;var P_=Object.prototype.hasOwnProperty,A_=Object.prototype.propertyIsEnumerable;var bu=(t,e,n)=>e in t?S_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,yu=(t,e)=>{for(var n in e||(e={}))P_.call(e,n)&&bu(t,n,e[n]);if(vu)for(var n of vu(e))A_.call(e,n)&&bu(t,n,e[n]);return t},wu=(t,e)=>x_(t,R_(e));var k_=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Zk=k_((It,St)=>{const N_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};N_();function jl(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const O_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",M_=jl(O_);function zh(t){return!!t||t===""}function ds(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=tt(r)?F_(r):ds(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(tt(t))return t;if(qe(t))return t}}const D_=/;(?![^(]*\))/g,L_=/:(.+)/;function F_(t){const e={};return t.split(D_).forEach(n=>{if(n){const r=n.split(L_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function br(t){let e="";if(tt(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=br(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tn=t=>tt(t)?t:t==null?"":Z(t)||qe(t)&&(t.toString===qh||!ie(t.toString))?JSON.stringify(t,Wh,2):String(t),Wh=(t,e)=>e&&e.__v_isRef?Wh(t,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:jh(e)?{[`Set(${e.size})`]:[...e.values()]}:qe(e)&&!Z(e)&&!Kh(e)?String(e):e,Ae={},Mr=[],$t=()=>{},$_=()=>!1,B_=/^on[^a-z]/,Do=t=>B_.test(t),Vl=t=>t.startsWith("onUpdate:"),lt=Object.assign,ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},U_=Object.prototype.hasOwnProperty,me=(t,e)=>U_.call(t,e),Z=Array.isArray,Dr=t=>Lo(t)==="[object Map]",jh=t=>Lo(t)==="[object Set]",ie=t=>typeof t=="function",tt=t=>typeof t=="string",Kl=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Vh=t=>qe(t)&&ie(t.then)&&ie(t.catch),qh=Object.prototype.toString,Lo=t=>qh.call(t),H_=t=>Lo(t).slice(8,-1),Kh=t=>Lo(t)==="[object Object]",Gl=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qs=jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},z_=/-(\w)/g,zr=Fo(t=>t.replace(z_,(e,n)=>n?n.toUpperCase():"")),W_=/\B([A-Z])/g,ni=Fo(t=>t.replace(W_,"-$1").toLowerCase()),Gh=Fo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ea=Fo(t=>t?`on${Gh(t)}`:""),Vi=(t,e)=>!Object.is(t,e),Ks=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ro=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},io=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cu;const j_=()=>Cu||(Cu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let jt;class V_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&jt&&(this.parent=jt,this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function q_(t,e=jt){e&&e.active&&e.effects.push(t)}const Yl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Yh=t=>(t.w&kn)>0,Xh=t=>(t.n&kn)>0,K_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kn},G_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Yh(i)&&!Xh(i)?i.delete(t):e[n++]=i,i.w&=~kn,i.n&=~kn}e.length=n}},Ya=new WeakMap;let ki=0,kn=1;const Xa=30;let Dt;const nr=Symbol(""),Ja=Symbol("");class Xl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,q_(this,r)}run(){if(!this.active)return this.fn();let e=Dt,n=Sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,Sn=!0,kn=1<<++ki,ki<=Xa?K_(this):Eu(this),this.fn()}finally{ki<=Xa&&G_(this),kn=1<<--ki,Dt=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Eu(this),this.onStop&&this.onStop(),this.active=!1)}}function Eu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Sn=!0;const Jh=[];function ri(){Jh.push(Sn),Sn=!1}function ii(){const t=Jh.pop();Sn=t===void 0?!0:t}function Rt(t,e,n){if(Sn&&Dt){let r=Ya.get(t);r||Ya.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Yl()),Qh(i)}}function Qh(t,e){let n=!1;ki<=Xa?Xh(t)||(t.n|=kn,n=!Yh(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function an(t,e,n,r,i,s){const o=Ya.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?Gl(n)&&a.push(o.get("length")):(a.push(o.get(nr)),Dr(t)&&a.push(o.get(Ja)));break;case"delete":Z(t)||(a.push(o.get(nr)),Dr(t)&&a.push(o.get(Ja)));break;case"set":Dr(t)&&a.push(o.get(nr));break}if(a.length===1)a[0]&&Qa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Qa(Yl(l))}}function Qa(t,e){for(const n of Z(t)?t:[...t])(n!==Dt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Y_=jl("__proto__,__v_isRef,__isVue"),Zh=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Kl)),X_=Jl(),J_=Jl(!1,!0),Q_=Jl(!0),Tu=Z_();function Z_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ye(this);for(let s=0,o=this.length;s<o;s++)Rt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ye)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ri();const r=ye(this)[e].apply(this,n);return ii(),r}}),t}function Jl(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?gv:sf:e?rf:nf).get(r))return r;const o=Z(r);if(!t&&o&&me(Tu,i))return Reflect.get(Tu,i,s);const a=Reflect.get(r,i,s);return(Kl(i)?Zh.has(i):Y_(i))||(t||Rt(r,"get",i),e)?a:et(a)?!o||!Gl(i)?a.value:a:qe(a)?t?ec(a):un(a):a}}const ev=ef(),tv=ef(!0);function ef(t=!1){return function(n,r,i,s){let o=n[r];if(qi(o)&&et(o)&&!et(i))return!1;if(!t&&!qi(i)&&(of(i)||(i=ye(i),o=ye(o)),!Z(n)&&et(o)&&!et(i)))return o.value=i,!0;const a=Z(n)&&Gl(r)?Number(r)<n.length:me(n,r),l=Reflect.set(n,r,i,s);return n===ye(s)&&(a?Vi(i,o)&&an(n,"set",r,i):an(n,"add",r,i)),l}}function nv(t,e){const n=me(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&an(t,"delete",e,void 0),r}function rv(t,e){const n=Reflect.has(t,e);return(!Kl(e)||!Zh.has(e))&&Rt(t,"has",e),n}function iv(t){return Rt(t,"iterate",Z(t)?"length":nr),Reflect.ownKeys(t)}const tf={get:X_,set:ev,deleteProperty:nv,has:rv,ownKeys:iv},sv={get:Q_,set(t,e){return!0},deleteProperty(t,e){return!0}},ov=lt({},tf,{get:J_,set:tv}),Ql=t=>t,$o=t=>Reflect.getPrototypeOf(t);function Ps(t,e,n=!1,r=!1){t=t.__v_raw;const i=ye(t),s=ye(e);e!==s&&!n&&Rt(i,"get",e),!n&&Rt(i,"get",s);const{has:o}=$o(i),a=r?Ql:n?nc:Ki;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function As(t,e=!1){const n=this.__v_raw,r=ye(n),i=ye(t);return t!==i&&!e&&Rt(r,"has",t),!e&&Rt(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function ks(t,e=!1){return t=t.__v_raw,!e&&Rt(ye(t),"iterate",nr),Reflect.get(t,"size",t)}function Iu(t){t=ye(t);const e=ye(this);return $o(e).has.call(e,t)||(e.add(t),an(e,"add",t,t)),this}function Su(t,e){e=ye(e);const n=ye(this),{has:r,get:i}=$o(n);let s=r.call(n,t);s||(t=ye(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Vi(e,o)&&an(n,"set",t,e):an(n,"add",t,e),this}function xu(t){const e=ye(this),{has:n,get:r}=$o(e);let i=n.call(e,t);i||(t=ye(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&an(e,"delete",t,void 0),s}function Ru(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&an(t,"clear",void 0,void 0),n}function Ns(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ye(o),l=e?Ql:t?nc:Ki;return!t&&Rt(a,"iterate",nr),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Os(t,e,n){return function(...r){const i=this.__v_raw,s=ye(i),o=Dr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Ql:e?nc:Ki;return!e&&Rt(s,"iterate",l?Ja:nr),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function gn(t){return function(...e){return t==="delete"?!1:this}}function av(){const t={get(s){return Ps(this,s)},get size(){return ks(this)},has:As,add:Iu,set:Su,delete:xu,clear:Ru,forEach:Ns(!1,!1)},e={get(s){return Ps(this,s,!1,!0)},get size(){return ks(this)},has:As,add:Iu,set:Su,delete:xu,clear:Ru,forEach:Ns(!1,!0)},n={get(s){return Ps(this,s,!0)},get size(){return ks(this,!0)},has(s){return As.call(this,s,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Ns(!0,!1)},r={get(s){return Ps(this,s,!0,!0)},get size(){return ks(this,!0)},has(s){return As.call(this,s,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Ns(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Os(s,!1,!1),n[s]=Os(s,!0,!1),e[s]=Os(s,!1,!0),r[s]=Os(s,!0,!0)}),[t,n,e,r]}const[lv,cv,uv,dv]=av();function Zl(t,e){const n=e?t?dv:uv:t?cv:lv;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(me(n,i)&&i in r?n:r,i,s)}const hv={get:Zl(!1,!1)},fv={get:Zl(!1,!0)},pv={get:Zl(!0,!1)},nf=new WeakMap,rf=new WeakMap,sf=new WeakMap,gv=new WeakMap;function mv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _v(t){return t.__v_skip||!Object.isExtensible(t)?0:mv(H_(t))}function un(t){return qi(t)?t:tc(t,!1,tf,hv,nf)}function vv(t){return tc(t,!1,ov,fv,rf)}function ec(t){return tc(t,!0,sv,pv,sf)}function tc(t,e,n,r,i){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=_v(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Lr(t){return qi(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function qi(t){return!!(t&&t.__v_isReadonly)}function of(t){return!!(t&&t.__v_isShallow)}function af(t){return Lr(t)||qi(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function lf(t){return ro(t,"__v_skip",!0),t}const Ki=t=>qe(t)?un(t):t,nc=t=>qe(t)?ec(t):t;function cf(t){Sn&&Dt&&(t=ye(t),Qh(t.dep||(t.dep=Yl())))}function uf(t,e){t=ye(t),t.dep&&Qa(t.dep)}function et(t){return!!(t&&t.__v_isRef===!0)}function ue(t){return bv(t,!1)}function bv(t,e){return et(t)?t:new yv(t,e)}class yv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:Ki(e)}get value(){return cf(this),this._value}set value(e){e=this.__v_isShallow?e:ye(e),Vi(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ki(e),uf(this))}}function De(t){return et(t)?t.value:t}const wv={get:(t,e,n)=>De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return et(i)&&!et(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function df(t){return Lr(t)?t:new Proxy(t,wv)}class Cv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Bo(t,e,n){const r=t[e];return et(r)?r:new Cv(t,e,n)}class Ev{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Xl(e,()=>{this._dirty||(this._dirty=!0,uf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ye(this);return cf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hf(t,e,n=!1){let r,i;const s=ie(t);return s?(r=t,i=$t):(r=t.get,i=t.set),new Ev(r,i,s||!i,n)}function xn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Uo(s,e,n)}return i}function Ot(t,e,n,r){if(ie(t)){const s=xn(t,e,n,r);return s&&Vh(s)&&s.catch(o=>{Uo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ot(t[s],e,n,r));return i}function Uo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){xn(l,null,10,[t,o,a]);return}}Tv(t,n,i,r)}function Tv(t,e,n,r=!0){console.error(t)}let so=!1,Za=!1;const Tt=[];let en=0;const Mi=[];let Ni=null,Pr=0;const Di=[];let bn=null,Ar=0;const ff=Promise.resolve();let rc=null,el=null;function pf(t){const e=rc||ff;return t?e.then(this?t.bind(this):t):e}function Iv(t){let e=en+1,n=Tt.length;for(;e<n;){const r=e+n>>>1;Gi(Tt[r])<t?e=r+1:n=r}return e}function gf(t){(!Tt.length||!Tt.includes(t,so&&t.allowRecurse?en+1:en))&&t!==el&&(t.id==null?Tt.push(t):Tt.splice(Iv(t.id),0,t),mf())}function mf(){!so&&!Za&&(Za=!0,rc=ff.then(bf))}function Sv(t){const e=Tt.indexOf(t);e>en&&Tt.splice(e,1)}function _f(t,e,n,r){Z(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),mf()}function xv(t){_f(t,Ni,Mi,Pr)}function Rv(t){_f(t,bn,Di,Ar)}function ic(t,e=null){if(Mi.length){for(el=e,Ni=[...new Set(Mi)],Mi.length=0,Pr=0;Pr<Ni.length;Pr++)Ni[Pr]();Ni=null,Pr=0,el=null,ic(t,e)}}function vf(t){if(Di.length){const e=[...new Set(Di)];if(Di.length=0,bn){bn.push(...e);return}for(bn=e,bn.sort((n,r)=>Gi(n)-Gi(r)),Ar=0;Ar<bn.length;Ar++)bn[Ar]();bn=null,Ar=0}}const Gi=t=>t.id==null?1/0:t.id;function bf(t){Za=!1,so=!0,ic(t),Tt.sort((n,r)=>Gi(n)-Gi(r));const e=$t;try{for(en=0;en<Tt.length;en++){const n=Tt[en];n&&n.active!==!1&&xn(n,null,14)}}finally{en=0,Tt.length=0,vf(),so=!1,rc=null,(Tt.length||Mi.length||Di.length)&&bf(t)}}function Pv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||Ae;h?i=n.map(_=>_.trim()):d&&(i=n.map(io))}let a,l=r[a=Ea(e)]||r[a=Ea(zr(e))];!l&&s&&(l=r[a=Ea(ni(e))]),l&&Ot(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(c,t,6,i)}}function yf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ie(t)){const l=c=>{const u=yf(c,e,!0);u&&(a=!0,lt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(Z(s)?s.forEach(l=>o[l]=null):lt(o,s),r.set(t,o),o)}function Ho(t,e){return!t||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,ni(e))||me(t,e))}let mt=null,zo=null;function oo(t){const e=mt;return mt=t,zo=t&&t.type.__scopeId||null,e}function Av(t){zo=t}function kv(){zo=null}function sc(t,e=mt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&$u(-1);const s=oo(e),o=t(...i);return oo(s),r._d&&$u(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ta(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:_,ctx:p,inheritAttrs:C}=t;let b,k;const F=oo(t);try{if(n.shapeFlag&4){const H=i||r;b=Vt(u.call(H,H,d,s,_,h,p)),k=l}else{const H=e;b=Vt(H.length>1?H(s,{attrs:l,slots:a,emit:c}):H(s,null)),k=e.props?l:Nv(l)}}catch(H){Li.length=0,Uo(H,t,1),b=je(xt)}let B=b;if(k&&C!==!1){const H=Object.keys(k),{shapeFlag:q}=B;H.length&&q&7&&(o&&H.some(Vl)&&(k=Ov(k,o)),B=cr(B,k))}return n.dirs&&(B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),b=B,oo(F),b}const Nv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Do(n))&&((e||(e={}))[n]=t[n]);return e},Ov=(t,e)=>{const n={};for(const r in t)(!Vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Mv(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Pu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Ho(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Pu(r,o,c):!0:!!o;return!1}function Pu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Ho(n,s))return!0}return!1}function Dv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Lv=t=>t.__isSuspense;function Fv(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):Rv(t)}function Wr(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function Ve(t,e,n=!1){const r=at||mt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ie(e)?e.call(r.proxy):e}}function jr(t,e){return Wo(t,null,e)}function $v(t,e){return Wo(t,null,{flush:"post"})}const Au={};function Kt(t,e,n){return Wo(t,e,n)}function Wo(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ae){const a=at;let l,c=!1,u=!1;if(et(t)?(l=()=>t.value,c=of(t)):Lr(t)?(l=()=>t,r=!0):Z(t)?(u=!0,c=t.some(Lr),l=()=>t.map(k=>{if(et(k))return k.value;if(Lr(k))return Xn(k);if(ie(k))return xn(k,a,2)})):ie(t)?e?l=()=>xn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Ot(t,a,3,[h])}:l=$t,e&&r){const k=l;l=()=>Xn(k())}let d,h=k=>{d=b.onStop=()=>{xn(k,a,4)}};if(Ji)return h=$t,e?n&&Ot(e,a,3,[l(),u?[]:void 0,h]):l(),$t;let _=u?[]:Au;const p=()=>{if(!!b.active)if(e){const k=b.run();(r||c||(u?k.some((F,B)=>Vi(F,_[B])):Vi(k,_)))&&(d&&d(),Ot(e,a,3,[k,_===Au?void 0:_,h]),_=k)}else b.run()};p.allowRecurse=!!e;let C;i==="sync"?C=p:i==="post"?C=()=>wt(p,a&&a.suspense):C=()=>{!a||a.isMounted?xv(p):p()};const b=new Xl(l,C);return e?n?p():_=b.run():i==="post"?wt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&ql(a.scope.effects,b)}}function Bv(t,e,n){const r=this.proxy,i=tt(t)?t.includes(".")?wf(r,t):()=>r[t]:t.bind(r,r);let s;ie(e)?s=e:(s=e.handler,n=e);const o=at;Vr(this);const a=Wo(i,s.bind(r),n);return o?Vr(o):ir(),a}function wf(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Xn(t,e){if(!qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),et(t))Xn(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(jh(t)||Dr(t))t.forEach(n=>{Xn(n,e)});else if(Kh(t))for(const n in t)Xn(t[n],e);return t}function Uv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yr(()=>{t.isMounted=!0}),Ko(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],Hv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},setup(t,{slots:e}){const n=cc(),r=Uv();let i;return()=>{const s=e.default&&Tf(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const C of s)if(C.type!==xt){o=C;break}}const a=ye(t),{mode:l}=a;if(r.isLeaving)return Ia(o);const c=ku(o);if(!c)return Ia(o);const u=tl(c,a,r,n);nl(c,u);const d=n.subTree,h=d&&ku(d);let _=!1;const{getTransitionKey:p}=c.type;if(p){const C=p();i===void 0?i=C:C!==i&&(i=C,_=!0)}if(h&&h.type!==xt&&(!Gn(c,h)||_)){const C=tl(h,a,r,n);if(nl(h,C),l==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},Ia(o);l==="in-out"&&c.type!==xt&&(C.delayLeave=(b,k,F)=>{const B=Ef(r,h);B[String(h.key)]=h,b._leaveCb=()=>{k(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return o}}},Cf=Hv;function Ef(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function tl(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:p,onBeforeAppear:C,onAppear:b,onAfterAppear:k,onAppearCancelled:F}=e,B=String(t.key),H=Ef(n,t),q=(E,S)=>{E&&Ot(E,r,9,S)},ve={mode:s,persisted:o,beforeEnter(E){let S=a;if(!n.isMounted)if(i)S=C||a;else return;E._leaveCb&&E._leaveCb(!0);const D=H[B];D&&Gn(t,D)&&D.el._leaveCb&&D.el._leaveCb(),q(S,[E])},enter(E){let S=l,D=c,K=u;if(!n.isMounted)if(i)S=b||l,D=k||c,K=F||u;else return;let ee=!1;const L=E._enterCb=se=>{ee||(ee=!0,se?q(K,[E]):q(D,[E]),ve.delayedLeave&&ve.delayedLeave(),E._enterCb=void 0)};S?(S(E,L),S.length<=1&&L()):L()},leave(E,S){const D=String(t.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return S();q(d,[E]);let K=!1;const ee=E._leaveCb=L=>{K||(K=!0,S(),L?q(p,[E]):q(_,[E]),E._leaveCb=void 0,H[D]===t&&delete H[D])};H[D]=t,h?(h(E,ee),h.length<=1&&ee()):ee()},clone(E){return tl(E,e,n,r)}};return ve}function Ia(t){if(jo(t))return t=cr(t),t.children=null,t}function ku(t){return jo(t)?t.children?t.children[0]:void 0:t}function nl(t,e){t.shapeFlag&6&&t.component?nl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Tf(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===We?(o.patchFlag&128&&i++,r=r.concat(Tf(o.children,e,a))):(e||o.type!==xt)&&r.push(a!=null?cr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Fe(t){return ie(t)?{setup:t,name:t.name}:t}const ao=t=>!!t.type.__asyncLoader,jo=t=>t.type.__isKeepAlive;function zv(t,e){If(t,"a",e)}function Wv(t,e){If(t,"da",e)}function If(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Vo(e,r,n),n){let i=n.parent;for(;i&&i.parent;)jo(i.parent.vnode)&&jv(r,e,n,i),i=i.parent}}function jv(t,e,n,r){const i=Vo(e,t,r,!0);Go(()=>{ql(r[e],i)},n)}function Vo(t,e,n=at,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ri(),Vr(n);const a=Ot(e,n,t,o);return ir(),ii(),a});return r?i.unshift(s):i.push(s),s}}const dn=t=>(e,n=at)=>(!Ji||t==="sp")&&Vo(t,e,n),qo=dn("bm"),yr=dn("m"),Vv=dn("bu"),qv=dn("u"),Ko=dn("bum"),Go=dn("um"),Kv=dn("sp"),Gv=dn("rtg"),Yv=dn("rtc");function Xv(t,e=at){Vo("ec",t,e)}let rl=!0;function Jv(t){const e=xf(t),n=t.proxy,r=t.ctx;rl=!1,e.beforeCreate&&Nu(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:_,updated:p,activated:C,deactivated:b,beforeDestroy:k,beforeUnmount:F,destroyed:B,unmounted:H,render:q,renderTracked:ve,renderTriggered:E,errorCaptured:S,serverPrefetch:D,expose:K,inheritAttrs:ee,components:L,directives:se,filters:Ce}=e;if(c&&Qv(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const oe=o[ge];ie(oe)&&(r[ge]=oe.bind(n))}if(i){const ge=i.call(n,n);qe(ge)&&(t.data=un(ge))}if(rl=!0,s)for(const ge in s){const oe=s[ge],ze=ie(oe)?oe.bind(n,n):ie(oe.get)?oe.get.bind(n,n):$t,bt=!ie(oe)&&ie(oe.set)?oe.set.bind(n):$t,$e=de({get:ze,set:bt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>$e.value,set:ht=>$e.value=ht})}if(a)for(const ge in a)Sf(a[ge],r,n,ge);if(l){const ge=ie(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(oe=>{Wr(oe,ge[oe])})}u&&Nu(u,t,"c");function fe(ge,oe){Z(oe)?oe.forEach(ze=>ge(ze.bind(n))):oe&&ge(oe.bind(n))}if(fe(qo,d),fe(yr,h),fe(Vv,_),fe(qv,p),fe(zv,C),fe(Wv,b),fe(Xv,S),fe(Yv,ve),fe(Gv,E),fe(Ko,F),fe(Go,H),fe(Kv,D),Z(K))if(K.length){const ge=t.exposed||(t.exposed={});K.forEach(oe=>{Object.defineProperty(ge,oe,{get:()=>n[oe],set:ze=>n[oe]=ze})})}else t.exposed||(t.exposed={});q&&t.render===$t&&(t.render=q),ee!=null&&(t.inheritAttrs=ee),L&&(t.components=L),se&&(t.directives=se)}function Qv(t,e,n=$t,r=!1){Z(t)&&(t=il(t));for(const i in t){const s=t[i];let o;qe(s)?"default"in s?o=Ve(s.from||i,s.default,!0):o=Ve(s.from||i):o=Ve(s),et(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Nu(t,e,n){Ot(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sf(t,e,n,r){const i=r.includes(".")?wf(n,r):()=>n[r];if(tt(t)){const s=e[t];ie(s)&&Kt(i,s)}else if(ie(t))Kt(i,t.bind(n));else if(qe(t))if(Z(t))t.forEach(s=>Sf(s,e,n,r));else{const s=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(s)&&Kt(i,s,t)}}function xf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>lo(l,c,o,!0)),lo(l,e,o)),s.set(e,l),l}function lo(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&lo(t,s,n,!0),i&&i.forEach(o=>lo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Zv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Zv={data:Ou,props:Vn,emits:Vn,methods:Vn,computed:Vn,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Vn,directives:Vn,watch:tb,provide:Ou,inject:eb};function Ou(t,e){return e?t?function(){return lt(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function eb(t,e){return Vn(il(t),il(e))}function il(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vn(t,e){return t?lt(lt(Object.create(null),t),e):e}function tb(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function nb(t,e,n,r=!1){const i={},s={};ro(s,Yo,1),t.propsDefaults=Object.create(null),Rf(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:vv(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function rb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ye(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Ho(t.emitsOptions,h))continue;const _=e[h];if(l)if(me(s,h))_!==s[h]&&(s[h]=_,c=!0);else{const p=zr(h);i[p]=sl(l,a,p,_,t,!1)}else _!==s[h]&&(s[h]=_,c=!0)}}}else{Rf(t,e,i,s)&&(c=!0);let u;for(const d in a)(!e||!me(e,d)&&((u=ni(d))===d||!me(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=sl(l,a,d,void 0,t,!0)):delete i[d]);if(s!==a)for(const d in s)(!e||!me(e,d)&&!0)&&(delete s[d],c=!0)}c&&an(t,"set","$attrs")}function Rf(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(qs(l))continue;const c=e[l];let u;i&&me(i,u=zr(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ho(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=ye(n),c=a||Ae;for(let u=0;u<s.length;u++){const d=s[u];n[d]=sl(i,l,d,c[d],t,!me(c,d))}}return o}function sl(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ie(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Vr(i),r=c[n]=l.call(null,e),ir())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ni(n))&&(r=!0))}return r}function Pf(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ie(t)){const u=d=>{l=!0;const[h,_]=Pf(d,e,!0);lt(o,h),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,Mr),Mr;if(Z(s))for(let u=0;u<s.length;u++){const d=zr(s[u]);Mu(d)&&(o[d]=Ae)}else if(s)for(const u in s){const d=zr(u);if(Mu(d)){const h=s[u],_=o[d]=Z(h)||ie(h)?{type:h}:h;if(_){const p=Fu(Boolean,_.type),C=Fu(String,_.type);_[0]=p>-1,_[1]=C<0||p<C,(p>-1||me(_,"default"))&&a.push(d)}}}const c=[o,a];return r.set(t,c),c}function Mu(t){return t[0]!=="$"}function Du(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Lu(t,e){return Du(t)===Du(e)}function Fu(t,e){return Z(e)?e.findIndex(n=>Lu(n,t)):ie(e)&&Lu(e,t)?0:-1}const Af=t=>t[0]==="_"||t==="$stable",oc=t=>Z(t)?t.map(Vt):[Vt(t)],ib=(t,e,n)=>{const r=sc((...i)=>oc(e(...i)),n);return r._c=!1,r},kf=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Af(i))continue;const s=t[i];if(ie(s))e[i]=ib(i,s,r);else if(s!=null){const o=oc(s);e[i]=()=>o}}},Nf=(t,e)=>{const n=oc(e);t.slots.default=()=>n},sb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),ro(e,"_",n)):kf(e,t.slots={})}else t.slots={},e&&Nf(t,e);ro(t.slots,Yo,1)},ob=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(lt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,kf(e,i)),o=e}else e&&(Nf(t,e),o={default:1});if(s)for(const a in i)!Af(a)&&!(a in o)&&delete i[a]};function ab(t,e){const n=mt;if(n===null)return t;const r=Jo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ae]=e[s];ie(o)&&(o={mounted:o,updated:o}),o.deep&&Xn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function zn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(ri(),Ot(l,n,8,[t.el,a,t,e]),ii())}}function Of(){return{app:null,config:{isNativeTag:$_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lb=0;function cb(t,e){return function(r,i=null){ie(r)||(r=Object.assign({},r)),i!=null&&!qe(i)&&(i=null);const s=Of(),o=new Set;let a=!1;const l=s.app={_uid:lb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Rb,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ie(c.install)?(o.add(c),c.install(l,...u)):ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=je(r,i);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Jo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ol(t,e,n,r,i=!1){if(Z(t)){t.forEach((h,_)=>ol(h,e&&(Z(e)?e[_]:e),n,r,i));return}if(ao(r)&&!i)return;const s=r.shapeFlag&4?Jo(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(tt(c)?(u[c]=null,me(d,c)&&(d[c]=null)):et(c)&&(c.value=null)),ie(l))xn(l,a,12,[o,u]);else{const h=tt(l),_=et(l);if(h||_){const p=()=>{if(t.f){const C=h?u[l]:l.value;i?Z(C)&&ql(C,s):Z(C)?C.includes(s)||C.push(s):h?(u[l]=[s],me(d,l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,me(d,l)&&(d[l]=o)):et(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,wt(p,n)):p()}}}const wt=Fv;function ub(t){return db(t)}function db(t,e){const n=j_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:_=$t,cloneNode:p,insertStaticContent:C}=t,b=(f,g,v,y=null,w=null,A=null,M=!1,R=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!Gn(f,g)&&(y=fn(f),ft(f,w,A,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:T,ref:W,shapeFlag:U}=g;switch(T){case ac:k(f,g,v,y);break;case xt:F(f,g,v,y);break;case Gs:f==null&&B(g,v,y,M);break;case We:se(f,g,v,y,w,A,M,R,N);break;default:U&1?ve(f,g,v,y,w,A,M,R,N):U&6?Ce(f,g,v,y,w,A,M,R,N):(U&64||U&128)&&T.process(f,g,v,y,w,A,M,R,N,At)}W!=null&&w&&ol(W,f&&f.ref,A,g||f,!g)},k=(f,g,v,y)=>{if(f==null)r(g.el=a(g.children),v,y);else{const w=g.el=f.el;g.children!==f.children&&c(w,g.children)}},F=(f,g,v,y)=>{f==null?r(g.el=l(g.children||""),v,y):g.el=f.el},B=(f,g,v,y)=>{[f.el,f.anchor]=C(f.children,g,v,y,f.el,f.anchor)},H=({el:f,anchor:g},v,y)=>{let w;for(;f&&f!==g;)w=h(f),r(f,v,y),f=w;r(g,v,y)},q=({el:f,anchor:g})=>{let v;for(;f&&f!==g;)v=h(f),i(f),f=v;i(g)},ve=(f,g,v,y,w,A,M,R,N)=>{M=M||g.type==="svg",f==null?E(g,v,y,w,A,M,R,N):K(f,g,w,A,M,R,N)},E=(f,g,v,y,w,A,M,R)=>{let N,T;const{type:W,props:U,shapeFlag:z,transition:G,patchFlag:ce,dirs:Ee}=f;if(f.el&&p!==void 0&&ce===-1)N=f.el=p(f.el);else{if(N=f.el=o(f.type,A,U&&U.is,U),z&8?u(N,f.children):z&16&&D(f.children,N,null,y,w,A&&W!=="foreignObject",M,R),Ee&&zn(f,null,y,"created"),U){for(const Te in U)Te!=="value"&&!qs(Te)&&s(N,Te,null,U[Te],A,f.children,y,w,Je);"value"in U&&s(N,"value",null,U.value),(T=U.onVnodeBeforeMount)&&zt(T,y,f)}S(N,f,f.scopeId,M,y)}Ee&&zn(f,null,y,"beforeMount");const pe=(!w||w&&!w.pendingBranch)&&G&&!G.persisted;pe&&G.beforeEnter(N),r(N,g,v),((T=U&&U.onVnodeMounted)||pe||Ee)&&wt(()=>{T&&zt(T,y,f),pe&&G.enter(N),Ee&&zn(f,null,y,"mounted")},w)},S=(f,g,v,y,w)=>{if(v&&_(f,v),y)for(let A=0;A<y.length;A++)_(f,y[A]);if(w){let A=w.subTree;if(g===A){const M=w.vnode;S(f,M,M.scopeId,M.slotScopeIds,w.parent)}}},D=(f,g,v,y,w,A,M,R,N=0)=>{for(let T=N;T<f.length;T++){const W=f[T]=R?yn(f[T]):Vt(f[T]);b(null,W,g,v,y,w,A,M,R)}},K=(f,g,v,y,w,A,M)=>{const R=g.el=f.el;let{patchFlag:N,dynamicChildren:T,dirs:W}=g;N|=f.patchFlag&16;const U=f.props||Ae,z=g.props||Ae;let G;v&&Wn(v,!1),(G=z.onVnodeBeforeUpdate)&&zt(G,v,g,f),W&&zn(g,f,v,"beforeUpdate"),v&&Wn(v,!0);const ce=w&&g.type!=="foreignObject";if(T?ee(f.dynamicChildren,T,R,v,y,ce,A):M||ze(f,g,R,null,v,y,ce,A,!1),N>0){if(N&16)L(R,g,U,z,v,y,w);else if(N&2&&U.class!==z.class&&s(R,"class",null,z.class,w),N&4&&s(R,"style",U.style,z.style,w),N&8){const Ee=g.dynamicProps;for(let pe=0;pe<Ee.length;pe++){const Te=Ee[pe],I=U[Te],$=z[Te];($!==I||Te==="value")&&s(R,Te,I,$,w,f.children,v,y,Je)}}N&1&&f.children!==g.children&&u(R,g.children)}else!M&&T==null&&L(R,g,U,z,v,y,w);((G=z.onVnodeUpdated)||W)&&wt(()=>{G&&zt(G,v,g,f),W&&zn(g,f,v,"updated")},y)},ee=(f,g,v,y,w,A,M)=>{for(let R=0;R<g.length;R++){const N=f[R],T=g[R],W=N.el&&(N.type===We||!Gn(N,T)||N.shapeFlag&70)?d(N.el):v;b(N,T,W,null,y,w,A,M,!0)}},L=(f,g,v,y,w,A,M)=>{if(v!==y){for(const R in y){if(qs(R))continue;const N=y[R],T=v[R];N!==T&&R!=="value"&&s(f,R,T,N,M,g.children,w,A,Je)}if(v!==Ae)for(const R in v)!qs(R)&&!(R in y)&&s(f,R,v[R],null,M,g.children,w,A,Je);"value"in y&&s(f,"value",v.value,y.value)}},se=(f,g,v,y,w,A,M,R,N)=>{const T=g.el=f?f.el:a(""),W=g.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:z,slotScopeIds:G}=g;G&&(R=R?R.concat(G):G),f==null?(r(T,v,y),r(W,v,y),D(g.children,v,W,w,A,M,R,N)):U>0&&U&64&&z&&f.dynamicChildren?(ee(f.dynamicChildren,z,v,w,A,M,R),(g.key!=null||w&&g===w.subTree)&&Mf(f,g,!0)):ze(f,g,v,W,w,A,M,R,N)},Ce=(f,g,v,y,w,A,M,R,N)=>{g.slotScopeIds=R,f==null?g.shapeFlag&512?w.ctx.activate(g,v,y,M,N):Re(g,v,y,w,A,M,N):fe(f,g,N)},Re=(f,g,v,y,w,A,M)=>{const R=f.component=Cb(f,y,w);if(jo(f)&&(R.ctx.renderer=At),Eb(R),R.asyncDep){if(w&&w.registerDep(R,ge),!f.el){const N=R.subTree=je(xt);F(null,N,g,v)}return}ge(R,f,g,v,w,A,M)},fe=(f,g,v)=>{const y=g.component=f.component;if(Mv(f,g,v))if(y.asyncDep&&!y.asyncResolved){oe(y,g,v);return}else y.next=g,Sv(y.update),y.update();else g.component=f.component,g.el=f.el,y.vnode=g},ge=(f,g,v,y,w,A,M)=>{const R=()=>{if(f.isMounted){let{next:W,bu:U,u:z,parent:G,vnode:ce}=f,Ee=W,pe;Wn(f,!1),W?(W.el=ce.el,oe(f,W,M)):W=ce,U&&Ks(U),(pe=W.props&&W.props.onVnodeBeforeUpdate)&&zt(pe,G,W,ce),Wn(f,!0);const Te=Ta(f),I=f.subTree;f.subTree=Te,b(I,Te,d(I.el),fn(I),f,w,A),W.el=Te.el,Ee===null&&Dv(f,Te.el),z&&wt(z,w),(pe=W.props&&W.props.onVnodeUpdated)&&wt(()=>zt(pe,G,W,ce),w)}else{let W;const{el:U,props:z}=g,{bm:G,m:ce,parent:Ee}=f,pe=ao(g);if(Wn(f,!1),G&&Ks(G),!pe&&(W=z&&z.onVnodeBeforeMount)&&zt(W,Ee,g),Wn(f,!0),U&&$n){const Te=()=>{f.subTree=Ta(f),$n(U,f.subTree,f,w,null)};pe?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{const Te=f.subTree=Ta(f);b(null,Te,v,y,f,w,A),g.el=Te.el}if(ce&&wt(ce,w),!pe&&(W=z&&z.onVnodeMounted)){const Te=g;wt(()=>zt(W,Ee,Te),w)}g.shapeFlag&256&&f.a&&wt(f.a,w),f.isMounted=!0,g=v=y=null}},N=f.effect=new Xl(R,()=>gf(f.update),f.scope),T=f.update=N.run.bind(N);T.id=f.uid,Wn(f,!0),T()},oe=(f,g,v)=>{g.component=f;const y=f.vnode.props;f.vnode=g,f.next=null,rb(f,g.props,y,v),ob(f,g.children,v),ri(),ic(void 0,f.update),ii()},ze=(f,g,v,y,w,A,M,R,N=!1)=>{const T=f&&f.children,W=f?f.shapeFlag:0,U=g.children,{patchFlag:z,shapeFlag:G}=g;if(z>0){if(z&128){$e(T,U,v,y,w,A,M,R,N);return}else if(z&256){bt(T,U,v,y,w,A,M,R,N);return}}G&8?(W&16&&Je(T,w,A),U!==T&&u(v,U)):W&16?G&16?$e(T,U,v,y,w,A,M,R,N):Je(T,w,A,!0):(W&8&&u(v,""),G&16&&D(U,v,y,w,A,M,R,N))},bt=(f,g,v,y,w,A,M,R,N)=>{f=f||Mr,g=g||Mr;const T=f.length,W=g.length,U=Math.min(T,W);let z;for(z=0;z<U;z++){const G=g[z]=N?yn(g[z]):Vt(g[z]);b(f[z],G,v,null,w,A,M,R,N)}T>W?Je(f,w,A,!0,!1,U):D(g,v,y,w,A,M,R,N,U)},$e=(f,g,v,y,w,A,M,R,N)=>{let T=0;const W=g.length;let U=f.length-1,z=W-1;for(;T<=U&&T<=z;){const G=f[T],ce=g[T]=N?yn(g[T]):Vt(g[T]);if(Gn(G,ce))b(G,ce,v,null,w,A,M,R,N);else break;T++}for(;T<=U&&T<=z;){const G=f[U],ce=g[z]=N?yn(g[z]):Vt(g[z]);if(Gn(G,ce))b(G,ce,v,null,w,A,M,R,N);else break;U--,z--}if(T>U){if(T<=z){const G=z+1,ce=G<W?g[G].el:y;for(;T<=z;)b(null,g[T]=N?yn(g[T]):Vt(g[T]),v,ce,w,A,M,R,N),T++}}else if(T>z)for(;T<=U;)ft(f[T],w,A,!0),T++;else{const G=T,ce=T,Ee=new Map;for(T=ce;T<=z;T++){const we=g[T]=N?yn(g[T]):Vt(g[T]);we.key!=null&&Ee.set(we.key,T)}let pe,Te=0;const I=z-ce+1;let $=!1,Y=0;const _e=new Array(I);for(T=0;T<I;T++)_e[T]=0;for(T=G;T<=U;T++){const we=f[T];if(Te>=I){ft(we,w,A,!0);continue}let Be;if(we.key!=null)Be=Ee.get(we.key);else for(pe=ce;pe<=z;pe++)if(_e[pe-ce]===0&&Gn(we,g[pe])){Be=pe;break}Be===void 0?ft(we,w,A,!0):(_e[Be-ce]=T+1,Be>=Y?Y=Be:$=!0,b(we,g[Be],v,null,w,A,M,R,N),Te++)}const Le=$?hb(_e):Mr;for(pe=Le.length-1,T=I-1;T>=0;T--){const we=ce+T,Be=g[we],Ie=we+1<W?g[we+1].el:y;_e[T]===0?b(null,Be,v,Ie,w,A,M,R,N):$&&(pe<0||T!==Le[pe]?ht(Be,v,Ie,2):pe--)}}},ht=(f,g,v,y,w=null)=>{const{el:A,type:M,transition:R,children:N,shapeFlag:T}=f;if(T&6){ht(f.component.subTree,g,v,y);return}if(T&128){f.suspense.move(g,v,y);return}if(T&64){M.move(f,g,v,At);return}if(M===We){r(A,g,v);for(let U=0;U<N.length;U++)ht(N[U],g,v,y);r(f.anchor,g,v);return}if(M===Gs){H(f,g,v);return}if(y!==2&&T&1&&R)if(y===0)R.beforeEnter(A),r(A,g,v),wt(()=>R.enter(A),w);else{const{leave:U,delayLeave:z,afterLeave:G}=R,ce=()=>r(A,g,v),Ee=()=>{U(A,()=>{ce(),G&&G()})};z?z(A,ce,Ee):Ee()}else r(A,g,v)},ft=(f,g,v,y=!1,w=!1)=>{const{type:A,props:M,ref:R,children:N,dynamicChildren:T,shapeFlag:W,patchFlag:U,dirs:z}=f;if(R!=null&&ol(R,null,v,f,!0),W&256){g.ctx.deactivate(f);return}const G=W&1&&z,ce=!ao(f);let Ee;if(ce&&(Ee=M&&M.onVnodeBeforeUnmount)&&zt(Ee,g,f),W&6)bi(f.component,v,y);else{if(W&128){f.suspense.unmount(v,y);return}G&&zn(f,null,g,"beforeUnmount"),W&64?f.type.remove(f,g,v,w,At,y):T&&(A!==We||U>0&&U&64)?Je(T,g,v,!1,!0):(A===We&&U&384||!w&&W&16)&&Je(N,g,v),y&&Tr(f)}(ce&&(Ee=M&&M.onVnodeUnmounted)||G)&&wt(()=>{Ee&&zt(Ee,g,f),G&&zn(f,null,g,"unmounted")},v)},Tr=f=>{const{type:g,el:v,anchor:y,transition:w}=f;if(g===We){vi(v,y);return}if(g===Gs){q(f);return}const A=()=>{i(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:R}=w,N=()=>M(v,A);R?R(f.el,A,N):N()}else A()},vi=(f,g)=>{let v;for(;f!==g;)v=h(f),i(f),f=v;i(g)},bi=(f,g,v)=>{const{bum:y,scope:w,update:A,subTree:M,um:R}=f;y&&Ks(y),w.stop(),A&&(A.active=!1,ft(M,f,g,v)),R&&wt(R,g),wt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Je=(f,g,v,y=!1,w=!1,A=0)=>{for(let M=A;M<f.length;M++)ft(f[M],g,v,y,w)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Ir=(f,g,v)=>{f==null?g._vnode&&ft(g._vnode,null,null,!0):b(g._vnode||null,f,g,null,null,null,v),vf(),g._vnode=f},At={p:b,um:ft,m:ht,r:Tr,mt:Re,mc:D,pc:ze,pbc:ee,n:fn,o:t};let Fn,$n;return e&&([Fn,$n]=e(At)),{render:Ir,hydrate:Fn,createApp:cb(Ir,Fn)}}function Wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mf(t,e,n=!1){const r=t.children,i=e.children;if(Z(r)&&Z(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=yn(i[s]),a.el=o.el),n||Mf(o,a))}}function hb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const fb=t=>t.__isTeleport,pb=Symbol(),We=Symbol(void 0),ac=Symbol(void 0),xt=Symbol(void 0),Gs=Symbol(void 0),Li=[];let rr=null;function ne(t=!1){Li.push(rr=t?null:[])}function gb(){Li.pop(),rr=Li[Li.length-1]||null}let co=1;function $u(t){co+=t}function Df(t){return t.dynamicChildren=co>0?rr||Mr:null,gb(),co>0&&rr&&rr.push(t),t}function Se(t,e,n,r,i,s){return Df(Q(t,e,n,r,i,s,!0))}function Pt(t,e,n,r,i){return Df(je(t,e,n,r,i,!0))}function Yi(t){return t?t.__v_isVNode===!0:!1}function Gn(t,e){return t.type===e.type&&t.key===e.key}const Yo="__vInternal",Lf=({key:t})=>t!=null?t:null,Ys=({ref:t,ref_key:e,ref_for:n})=>t!=null?tt(t)||et(t)||ie(t)?{i:mt,r:t,k:e,f:!!n}:t:null;function Q(t,e=null,n=null,r=0,i=null,s=t===We?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lf(e),ref:e&&Ys(e),scopeId:zo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(lc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),co>0&&!o&&rr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rr.push(l),l}const je=mb;function mb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===pb)&&(t=xt),Yi(t)){const a=cr(t,e,!0);return n&&lc(a,n),a}if(xb(t)&&(t=t.__vccOpts),e){e=_b(e);let{class:a,style:l}=e;a&&!tt(a)&&(e.class=br(a)),qe(l)&&(af(l)&&!Z(l)&&(l=lt({},l)),e.style=ds(l))}const o=tt(t)?1:Lv(t)?128:fb(t)?64:qe(t)?4:ie(t)?2:0;return Q(t,e,n,r,i,o,s,!0)}function _b(t){return t?af(t)||Yo in t?lt({},t):t:null}function cr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Ff(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Lf(a),ref:e&&e.ref?n&&i?Z(i)?i.concat(Ys(e)):[i,Ys(e)]:Ys(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor}}function Xo(t=" ",e=0){return je(ac,null,t,e)}function qt(t="",e=!1){return e?(ne(),Pt(xt,null,t)):je(xt,null,t)}function Vt(t){return t==null||typeof t=="boolean"?je(xt):Z(t)?je(We,null,t.slice()):typeof t=="object"?yn(t):je(ac,null,String(t))}function yn(t){return t.el===null||t.memo?t:cr(t)}function lc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),lc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Yo in e)?e._ctx=mt:i===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[Xo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ff(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=br([e.class,r.class]));else if(i==="style")e.style=ds([e.style,r.style]);else if(Do(i)){const s=e[i],o=r[i];o&&s!==o&&!(Z(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function zt(t,e,n,r=null){Ot(t,e,7,[n,r])}function Xi(t,e,n,r){let i;const s=n&&n[r];if(Z(t)||tt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(qe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function vb(t,e,n={},r,i){if(mt.isCE||mt.parent&&ao(mt.parent)&&mt.parent.isCE)return je("slot",e==="default"?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),ne();const o=s&&$f(s(n)),a=Pt(We,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function $f(t){return t.some(e=>Yi(e)?!(e.type===xt||e.type===We&&!$f(e.children)):!0)?t:null}const al=t=>t?Bf(t)?Jo(t)||t.proxy:al(t.parent):null,uo=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>al(t.parent),$root:t=>al(t.root),$emit:t=>t.emit,$options:t=>xf(t),$forceUpdate:t=>()=>gf(t.update),$nextTick:t=>pf.bind(t.proxy),$watch:t=>Bv.bind(t)}),bb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==Ae&&me(r,e))return o[e]=1,r[e];if(i!==Ae&&me(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&me(c,e))return o[e]=3,s[e];if(n!==Ae&&me(n,e))return o[e]=4,n[e];rl&&(o[e]=0)}}const u=uo[e];let d,h;if(u)return e==="$attrs"&&Rt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ae&&me(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,me(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==Ae&&me(i,e)?(i[e]=n,!0):r!==Ae&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ae&&me(t,o)||e!==Ae&&me(e,o)||(a=s[0])&&me(a,o)||me(r,o)||me(uo,o)||me(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},yb=Of();let wb=0;function Cb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||yb,s={uid:wb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new V_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pf(r,i),emitsOptions:yf(r,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Pv.bind(null,s),t.ce&&t.ce(s),s}let at=null;const cc=()=>at||mt,Vr=t=>{at=t,t.scope.on()},ir=()=>{at&&at.scope.off(),at=null};function Bf(t){return t.vnode.shapeFlag&4}let Ji=!1;function Eb(t,e=!1){Ji=e;const{props:n,children:r}=t.vnode,i=Bf(t);nb(t,n,i,e),sb(t,r);const s=i?Tb(t,e):void 0;return Ji=!1,s}function Tb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=lf(new Proxy(t.ctx,bb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Sb(t):null;Vr(t),ri();const s=xn(r,t,0,[t.props,i]);if(ii(),ir(),Vh(s)){if(s.then(ir,ir),e)return s.then(o=>{Bu(t,o,e)}).catch(o=>{Uo(o,t,0)});t.asyncDep=s}else Bu(t,s,e)}else Uf(t,e)}function Bu(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=df(e)),Uf(t,n)}let Uu;function Uf(t,e,n){const r=t.type;if(!t.render){if(!e&&Uu&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=lt(lt({isCustomElement:s,delimiters:a},o),l);r.render=Uu(i,c)}}t.render=r.render||$t}Vr(t),ri(),Jv(t),ii(),ir()}function Ib(t){return new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}})}function Sb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Ib(t))},slots:t.slots,emit:t.emit,expose:e}}function Jo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(df(lf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in uo)return uo[n](t)}}))}function xb(t){return ie(t)&&"__vccOpts"in t}const de=(t,e)=>hf(t,e,Ji);function O(t,e,n){const r=arguments.length;return r===2?qe(e)&&!Z(e)?Yi(e)?je(t,null,[e]):je(t,e):je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yi(n)&&(n=[n]),je(t,e,n))}const Rb="3.2.33",Pb="http://www.w3.org/2000/svg",Yn=typeof document!="undefined"?document:null,Hu=Yn&&Yn.createElement("template"),Ab={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Yn.createElementNS(Pb,t):Yn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Hu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Hu.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function kb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nb(t,e,n){const r=t.style,i=tt(n);if(n&&!i){for(const s in n)ll(r,s,n[s]);if(e&&!tt(e))for(const s in e)n[s]==null&&ll(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const zu=/\s*!important$/;function ll(t,e,n){if(Z(n))n.forEach(r=>ll(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ob(t,e);zu.test(n)?t.setProperty(ni(r),n.replace(zu,""),"important"):t[r]=n}}const Wu=["Webkit","Moz","ms"],Sa={};function Ob(t,e){const n=Sa[e];if(n)return n;let r=zr(e);if(r!=="filter"&&r in t)return Sa[e]=r;r=Gh(r);for(let i=0;i<Wu.length;i++){const s=Wu[i]+r;if(s in t)return Sa[e]=s}return e}const ju="http://www.w3.org/1999/xlink";function Mb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ju,e.slice(6,e.length)):t.setAttributeNS(ju,e,n);else{const s=M_(e);n==null||s&&!zh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Db(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Hf,Lb]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let cl=0;const Fb=Promise.resolve(),$b=()=>{cl=0},Bb=()=>cl||(Fb.then($b),cl=Hf());function kr(t,e,n,r){t.addEventListener(e,n,r)}function Ub(t,e,n,r){t.removeEventListener(e,n,r)}function Hb(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=zb(e);if(r){const c=s[e]=Wb(r,i);kr(t,a,c,l)}else o&&(Ub(t,a,o,l),s[e]=void 0)}}const Vu=/(?:Once|Passive|Capture)$/;function zb(t){let e;if(Vu.test(t)){e={};let n;for(;n=t.match(Vu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ni(t.slice(2)),e]}function Wb(t,e){const n=r=>{const i=r.timeStamp||Hf();(Lb||i>=n.attached-1)&&Ot(jb(r,n.value),e,5,[r])};return n.value=t,n.attached=Bb(),n}function jb(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const qu=/^on[a-z]/,Vb=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?kb(t,r,i):e==="style"?Nb(t,n,r):Do(e)?Vl(e)||Hb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qb(t,e,r,i))?Db(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mb(t,e,r,i))};function qb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&qu.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qu.test(e)&&tt(n)?!1:e in t}function uc(t){const e=cc();if(!e)return;const n=()=>ul(e.subTree,t(e.proxy));$v(n),yr(()=>{const r=new MutationObserver(n);r.observe(e.subTree.el.parentNode,{childList:!0}),Go(()=>r.disconnect())})}function ul(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ul(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Ku(t.el,e);else if(t.type===We)t.children.forEach(n=>ul(n,e));else if(t.type===Gs){let{el:n,anchor:r}=t;for(;n&&(Ku(n,e),n!==r);)n=n.nextSibling}}function Ku(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const mn="transition",Ci="animation",Qi=(t,{slots:e})=>O(Cf,Kb(t),e);Qi.displayName="Transition";const zf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Qi.props=lt({},Cf.props,zf);const jn=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Gu=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function Kb(t){const e={};for(const L in t)L in zf||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,p=Gb(i),C=p&&p[0],b=p&&p[1],{onBeforeEnter:k,onEnter:F,onEnterCancelled:B,onLeave:H,onLeaveCancelled:q,onBeforeAppear:ve=k,onAppear:E=F,onAppearCancelled:S=B}=e,D=(L,se,Ce)=>{xr(L,se?u:a),xr(L,se?c:o),Ce&&Ce()},K=(L,se)=>{xr(L,_),xr(L,h),se&&se()},ee=L=>(se,Ce)=>{const Re=L?E:F,fe=()=>D(se,L,Ce);jn(Re,[se,fe]),Yu(()=>{xr(se,L?l:s),_n(se,L?u:a),Gu(Re)||Xu(se,r,C,fe)})};return lt(e,{onBeforeEnter(L){jn(k,[L]),_n(L,s),_n(L,o)},onBeforeAppear(L){jn(ve,[L]),_n(L,l),_n(L,c)},onEnter:ee(!1),onAppear:ee(!0),onLeave(L,se){const Ce=()=>K(L,se);_n(L,d),Jb(),_n(L,h),Yu(()=>{xr(L,d),_n(L,_),Gu(H)||Xu(L,r,b,Ce)}),jn(H,[L,Ce])},onEnterCancelled(L){D(L,!1),jn(B,[L])},onAppearCancelled(L){D(L,!0),jn(S,[L])},onLeaveCancelled(L){K(L),jn(q,[L])}})}function Gb(t){if(t==null)return null;if(qe(t))return[xa(t.enter),xa(t.leave)];{const e=xa(t);return[e,e]}}function xa(t){return io(t)}function _n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function xr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Yu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Yb=0;function Xu(t,e,n,r){const i=t._endId=++Yb,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Xb(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=_=>{_.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Xb(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(mn+"Delay"),s=r(mn+"Duration"),o=Ju(i,s),a=r(Ci+"Delay"),l=r(Ci+"Duration"),c=Ju(a,l);let u=null,d=0,h=0;e===mn?o>0&&(u=mn,d=o,h=s.length):e===Ci?c>0&&(u=Ci,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?mn:Ci:null,h=u?u===mn?s.length:l.length:0);const _=u===mn&&/\b(transform|all)(,|$)/.test(n[mn+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:_}}function Ju(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Qu(n)+Qu(t[r])))}function Qu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Jb(){return document.body.offsetHeight}const Zu=t=>{const e=t.props["onUpdate:modelValue"];return Z(e)?n=>Ks(e,n):e};function Qb(t){t.target.composing=!0}function ed(t){const e=t.target;e.composing&&(e.composing=!1,Zb(e,"input"))}function Zb(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ey={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Zu(i);const s=r||i.props&&i.props.type==="number";kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=io(a)),t._assign(a)}),n&&kr(t,"change",()=>{t.value=t.value.trim()}),e||(kr(t,"compositionstart",Qb),kr(t,"compositionend",ed),kr(t,"change",ed))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Zu(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&io(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ty=["ctrl","shift","alt","meta"],ny={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ty.some(n=>t[`${n}Key`]&&!e.includes(n))},ry=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=ny[e[i]];if(s&&s(n,e))return}return t(n,...r)},iy=lt({patchProp:Vb},Ab);let td;function sy(){return td||(td=ub(iy))}const oy=(...t)=>{const e=sy().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=ay(r);if(!i)return;const s=e._component;!ie(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ay(t){return tt(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw si(e)},si=function(t){return new Error("Firebase Database ("+Wf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ly=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(n[u],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ly(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Vf=function(t){const e=jf(t);return dc.encodeByteArray(e,!0)},qf=function(t){return Vf(t).replace(/\./g,"")},dl=function(t){try{return dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){return Kf(void 0,t)}function Kf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uy(n)||(t[n]=Kf(t[n],e[n]));return t}function uy(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function dy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hy(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yf(){return Wf.NODE_ADMIN===!0}function fy(){return typeof indexedDB=="object"}function py(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="FirebaseError";class oi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gy,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?my(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new oi(i,a,r)}}function my(t,e){return t.replace(_y,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _y=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return JSON.parse(t)}function Xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Zi(dl(s[0])||""),n=Zi(dl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},vy=function(t){const e=Xf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},by=function(t){const e=Xf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function fo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(nd(s)&&nd(o)){if(!fo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function nd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function wy(t,e){const n=new Cy(t,e);return n.subscribe.bind(n)}class Cy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ey(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ra),i.error===void 0&&(i.error=Ra),i.complete===void 0&&(i.complete=Ra);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ey(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ra(){}function Qo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zo=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class rd{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Jf(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Qf(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Jf{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Qf(this._transaction.objectStore(e))}}class Qf{constructor(e){this._store=e}index(e){return new id(this._store.index(e))}createIndex(e,n,r){return new id(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Oi(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Oi(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Oi(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Oi(e,"Error clearing IndexedDB object store")}}class id{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Oi(n,"Error reading from IndexedDB")}}function Iy(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new rd(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new rd(s.result),o.oldVersion,o.newVersion,new Jf(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ry(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xy(t){return t===qn?void 0:t}function Ry(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const Ay={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},ky=Pe.INFO,Ny={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Oy=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ny[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fc{constructor(e){this.name=e,this._logLevel=ky,this._logHandler=Oy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ay[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fl="@firebase/app",sd="0.7.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new fc("@firebase/app"),Ly="@firebase/app-compat",Fy="@firebase/analytics-compat",$y="@firebase/analytics",By="@firebase/app-check-compat",Uy="@firebase/app-check",Hy="@firebase/auth",zy="@firebase/auth-compat",Wy="@firebase/database",jy="@firebase/database-compat",Vy="@firebase/functions",qy="@firebase/functions-compat",Ky="@firebase/installations",Gy="@firebase/installations-compat",Yy="@firebase/messaging",Xy="@firebase/messaging-compat",Jy="@firebase/performance",Qy="@firebase/performance-compat",Zy="@firebase/remote-config",e0="@firebase/remote-config-compat",t0="@firebase/storage",n0="@firebase/storage-compat",r0="@firebase/firestore",i0="@firebase/firestore-compat",s0="firebase",o0="9.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="[DEFAULT]",a0={[fl]:"fire-core",[Ly]:"fire-core-compat",[$y]:"fire-analytics",[Fy]:"fire-analytics-compat",[Uy]:"fire-app-check",[By]:"fire-app-check-compat",[Hy]:"fire-auth",[zy]:"fire-auth-compat",[Wy]:"fire-rtdb",[jy]:"fire-rtdb-compat",[Vy]:"fire-fn",[qy]:"fire-fn-compat",[Ky]:"fire-iid",[Gy]:"fire-iid-compat",[Yy]:"fire-fcm",[Xy]:"fire-fcm-compat",[Jy]:"fire-perf",[Qy]:"fire-perf-compat",[Zy]:"fire-rc",[e0]:"fire-rc-compat",[t0]:"fire-gcs",[n0]:"fire-gcs-compat",[r0]:"fire-fst",[i0]:"fire-fst-compat","fire-js":"fire-js",[s0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Map,pl=new Map;function l0(t,e){try{t.container.addComponent(e)}catch(n){pc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(pl.has(e))return pc.debug(`There were multiple attempts to register component ${e}.`),!1;pl.set(e,t);for(const n of po.values())l0(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},dr=new fs("app","Firebase",c0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=o0;function d0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Zf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw dr.create("bad-app-name",{appName:String(r)});const i=po.get(r);if(i){if(fo(t,i.options)&&fo(n,i.config))return i;throw dr.create("duplicate-app",{appName:r})}const s=new Py(r);for(const a of pl.values())s.addComponent(a);const o=new u0(t,n,s);return po.set(r,o),o}function ep(t=Zf){const e=po.get(t);if(!e)throw dr.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let i=(r=a0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pc.warn(a.join(" "));return}Kr(new ur(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="firebase-heartbeat-database",f0=1,es="firebase-heartbeat-store";let Pa=null;function tp(){return Pa||(Pa=Iy(h0,f0,(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}).catch(t=>{throw dr.create("storage-open",{originalErrorMessage:t.message})})),Pa}async function p0(t){try{return(await tp()).transaction(es).objectStore(es).get(np(t))}catch(e){throw dr.create("storage-get",{originalErrorMessage:e.message})}}async function od(t,e){try{const r=(await tp()).transaction(es,"readwrite");return await r.objectStore(es).put(e,np(t)),r.complete}catch(n){throw dr.create("storage-set",{originalErrorMessage:n.message})}}function np(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=1024,m0=30*24*60*60*1e3;class _0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new b0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ad();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=m0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ad(),{heartbeatsToSend:n,unsentEntries:r}=v0(this._heartbeatsCache.heartbeats),i=qf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ad(){return new Date().toISOString().substring(0,10)}function v0(t,e=g0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ld(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ld(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class b0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fy()?py().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await p0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ld(t){return qf(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){Kr(new ur("platform-logger",e=>new My(e),"PRIVATE")),Kr(new ur("heartbeat",e=>new _0(e),"PRIVATE")),Rn(fl,sd,t),Rn(fl,sd,"esm2017"),Rn("fire-js","")}y0("");var w0="firebase",C0="9.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(w0,C0,"app");function mc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E0=rp,ip=new fs("auth","Firebase",rp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new fc("@firebase/auth");function Xs(t,...e){cd.logLevel<=Pe.ERROR&&cd.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw _c(t,...e)}function Gt(t,...e){return _c(t,...e)}function T0(t,e,n){const r=Object.assign(Object.assign({},E0()),{[e]:n});return new fs("auth","Firebase",r).create(e,{appName:t.name})}function _c(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ip.create(t,...e)}function te(t,e,...n){if(!t)throw _c(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xs(e),new Error(e)}function cn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new Map;function rn(t){cn(t instanceof Function,"Expected a class definition");let e=ud.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ud.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e){const n=gc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(fo(s,e!=null?e:{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function S0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function x0(){return dd()==="http:"||dd()==="https:"}function dd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x0()||dy()||"connection"in navigator)?navigator.onLine:!0}function P0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=hc()||Gf()}get(){return R0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new gs(3e4,6e4);function op(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ea(t,e,n,r,i={}){return ap(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ai(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sp.fetch()(cp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ap(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},A0),e);try{const i=new N0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw T0(t,u,c);ln(t,u)}}catch(i){if(i instanceof oi)throw i;ln(t,"network-request-failed")}}async function lp(t,e,n,r,i={}){const s=await ea(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function cp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vc(t.config,i):`${t.config.apiScheme}://${i}`}class N0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),k0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(t,e){return ea(t,"POST","/v1/accounts:delete",e)}async function M0(t,e){return ea(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D0(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=bc(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fi(ka(i.auth_time)),issuedAtTime:Fi(ka(i.iat)),expirationTime:Fi(ka(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ka(t){return Number(t)*1e3}function bc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xs("JWT malformed, contained fewer than 3 sections"),null;try{const i=dl(n);return i?JSON.parse(i):(Xs("Failed to decode base64 JWT payload"),null)}catch(i){return Xs("Caught error parsing JWT payload as JSON",i),null}}function L0(t){const e=bc(t);return te(e,"internal-error"),te(typeof e.exp!="undefined","internal-error"),te(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof oi&&F0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function F0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fi(this.lastLoginAt),this.creationTime=Fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ts(t,M0(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?H0(s.providerUserInfo):[],a=U0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new up(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function B0(t){const e=Ht(t);await go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function H0(t){return t.map(e=>{var{providerId:n}=e,r=mc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(t,e){const n=await ap(t,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=cp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken!="undefined","internal-error"),te(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):L0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await z0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ns;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){te(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new up(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ts(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return D0(this,e)}reload(){return B0(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ts(this,O0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:H,isAnonymous:q,providerData:ve,stsTokenManager:E}=n;te(B&&E,e,"internal-error");const S=ns.fromJSON(this.name,E);te(typeof B=="string",e,"internal-error"),vn(d,e.name),vn(h,e.name),te(typeof H=="boolean",e,"internal-error"),te(typeof q=="boolean",e,"internal-error"),vn(_,e.name),vn(p,e.name),vn(C,e.name),vn(b,e.name),vn(k,e.name),vn(F,e.name);const D=new sr({uid:B,auth:e,email:h,emailVerified:H,displayName:d,isAnonymous:q,photoURL:p,phoneNumber:_,tenantId:C,stsTokenManager:S,createdAt:k,lastLoginAt:F});return ve&&Array.isArray(ve)&&(D.providerData=ve.map(K=>Object.assign({},K))),b&&(D._redirectEventId=b),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new ns;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await go(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dp.type="NONE";const hd=dp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Js(this.userKey,i.apiKey,s),this.fullPersistenceKey=Js("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(rn(hd),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||rn(hd);const o=Js(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=sr._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Fr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Fr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mp(e))return"Blackberry";if(_p(e))return"Webos";if(yc(e))return"Safari";if((e.includes("chrome/")||fp(e))&&!e.includes("edge/"))return"Chrome";if(gp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hp(t=dt()){return/firefox\//i.test(t)}function yc(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fp(t=dt()){return/crios\//i.test(t)}function pp(t=dt()){return/iemobile/i.test(t)}function gp(t=dt()){return/android/i.test(t)}function mp(t=dt()){return/blackberry/i.test(t)}function _p(t=dt()){return/webos/i.test(t)}function ta(t=dt()){return/iphone|ipad|ipod/i.test(t)}function W0(t=dt()){var e;return ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function j0(){return hy()&&document.documentMode===10}function vp(t=dt()){return ta(t)||gp(t)||_p(t)||mp(t)||/windows phone/i.test(t)||pp(t)}function V0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t,e=[]){let n;switch(t){case"Browser":n=fd(dt());break;case"Worker":n=`${fd(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pd(this),this.idTokenSubscription=new pd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ip,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await go(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ht(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function wc(t){return Ht(t)}class pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=wy(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t,e){return lp(t,"POST","/v1/accounts:signInWithIdp",op(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="http://localhost";class hr extends yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}buildRequest(){const e={requestUri:K0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends ms{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends ms{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends ms{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(t,e){return lp(t,"POST","/v1/accounts:signUp",op(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=gd(r);return new Nn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gd(r);return new Nn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(t){var e;const n=wc(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Nn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await G0(n,{returnSecureToken:!0}),i=await Nn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends oi{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new mo(e,n,r,i)}}function Cp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(t,s,e,r):s})}async function X0(t,e,n=!1){const r=await ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ts(t,Cp(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=bc(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),Nn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(t,e,n=!1){const r="signIn",i=await Cp(t,r,e),s=await Nn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Z0(t,e,n,r){return Ht(t).onAuthStateChanged(e,n,r)}const _o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){const t=dt();return yc(t)||ta(t)}const tw=1e3,nw=10;class Tp extends Ep{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ew()&&V0(),this.fallbackToPolling=vp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);j0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tp.type="LOCAL";const rw=Tp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends Ep{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ip.type="SESSION";const Sp=Ip;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await iw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Cc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function ow(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){return typeof Yt().WorkerGlobalScope!="undefined"&&typeof Yt().importScripts=="function"}async function aw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cw(){return xp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="firebaseLocalStorageDb",uw=1,vo="firebaseLocalStorage",Pp="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ra(t,e){return t.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function dw(){const t=indexedDB.deleteDatabase(Rp);return new _s(t).toPromise()}function ml(){const t=indexedDB.open(Rp,uw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vo,{keyPath:Pp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vo)?e(r):(r.close(),await dw(),e(await ml()))})})}async function md(t,e,n){const r=ra(t,!0).put({[Pp]:e,value:n});return new _s(r).toPromise()}async function hw(t,e){const n=ra(t,!1).get(e),r=await new _s(n).toPromise();return r===void 0?null:r.value}function _d(t,e){const n=ra(t,!0).delete(e);return new _s(n).toPromise()}const fw=800,pw=3;class Ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(cw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aw(),!this.activeServiceWorker)return;this.sender=new sw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await md(e,_o,"1"),await _d(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>md(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_d(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ra(i,!1).getAll();return new _s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ap.type="LOCAL";const gw=Ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _w(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mw().appendChild(r)})}function vw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t,e){return e?rn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends yp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yw(t){return Q0(t.auth,new Ec(t),t.bypassAuthState)}function ww(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),J0(n,new Ec(t),t.bypassAuthState)}async function Cw(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),X0(n,new Ec(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yw;case"linkViaPopup":case"linkViaRedirect":return Cw;case"reauthViaPopup":case"reauthViaRedirect":return ww;default:ln(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new gs(2e3,1e4);class Nr extends kp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ew.get())};e()}}Nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="pendingRedirect",Na=new Map;class Iw extends kp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Na.get(this.auth._key());if(!e){try{const r=await Sw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Na.set(this.auth._key(),e)}return this.bypassAuthState||Na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sw(t,e){const n=Rw(e),r=xw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xw(t){return rn(t._redirectPersistence)}function Rw(t){return Js(Tw,t.config.apiKey,t.name)}async function Pw(t,e,n=!1){const r=wc(t),i=bw(r,e),o=await new Iw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=10*60*1e3;class kw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Np(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Aw&&this.cachedEventUids.clear(),this.cachedEventUids.has(vd(e))}saveEventToCache(e){this.cachedEventUids.add(vd(e)),this.lastProcessedEventTime=Date.now()}}function vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Np({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Np(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(t,e={}){return ea(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dw=/^https?/;async function Lw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ow(t);for(const n of e)try{if(Fw(n))return}catch{}ln(t,"unauthorized-domain")}function Fw(t){const e=gl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Dw.test(n))return!1;if(Mw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new gs(3e4,6e4);function bd(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bw(t){return new Promise((e,n)=>{var r,i,s;function o(){bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bd(),n(Gt(t,"network-request-failed"))},timeout:$w.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{const a=vw("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},_w(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qs=null,e})}let Qs=null;function Uw(t){return Qs=Qs||Bw(t),Qs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new gs(5e3,15e3),zw="__/auth/iframe",Ww="emulator/auth/iframe",jw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qw(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vc(e,Ww):`https://${t.config.authDomain}/${zw}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=Vw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ai(r).slice(1)}`}async function Kw(t){const e=await Uw(t),n=Yt().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:qw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},Hw.get());function l(){Yt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yw=500,Xw=600,Jw="_blank",Qw="http://localhost";class yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zw(t,e,n,r=Yw,i=Xw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Gw),{width:r.toString(),height:i.toString(),top:s,left:o}),c=dt().toLowerCase();n&&(a=fp(c)?Jw:n),hp(c)&&(e=e||Qw,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[_,p])=>`${h}${_}=${p},`,"");if(W0(c)&&a!=="_self")return eC(e||"",a),new yd(null);const d=window.open(e||"",a,u);te(d,t,"popup-blocked");try{d.focus()}catch{}return new yd(d)}function eC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="__/auth/handler",nC="emulator/auth/handler";function wd(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof ms){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${rC(t)}?${ai(a).slice(1)}`}function rC({config:t}){return t.emulator?vc(t,nC):`https://${t.authDomain}/${tC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="webStorageSupport";class iC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sp,this._completeRedirectFn=Pw}async _openPopup(e,n,r,i){var s;cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=wd(e,n,r,gl(),i);return Zw(e,o,Cc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),ow(wd(e,n,r,gl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Kw(e),r=new kw(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oa,{type:Oa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Oa];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vp()||yc()||ta()}}const sC=iC;var Cd="@firebase/auth",Ed="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lC(t){Kr(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{te(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),te(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bp(t)},u=new q0(a,l,c);return S0(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new ur("auth-internal",e=>{const n=wc(e.getProvider("auth").getImmediate());return(r=>new oC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Cd,Ed,aC(t)),Rn(Cd,Ed,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t=ep()){const e=gc(t,"auth");return e.isInitialized()?e.getImmediate():I0(t,{popupRedirectResolver:sC,persistence:[gw,rw,Sp]})}lC("Browser");const Td="@firebase/database",Id="0.12.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op="";function uC(t){Op=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dC(e)}}catch{}return new hC},Jn=Mp("localStorage"),_l=Mp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new fc("@firebase/database"),fC=function(){let t=1;return function(){return t++}}(),Dp=function(t){const e=Ty(t),n=new yy;n.update(e);const r=n.digest();return dc.encodeByteArray(r)},vs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=vs.apply(null,r):typeof r=="object"?e+=Xe(r):e+=r,e+=" "}return e};let or=null,Sd=!0;const pC=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Br.logLevel=Pe.VERBOSE,or=Br.log.bind(Br),e&&_l.set("logging_enabled",!0)):typeof t=="function"?or=t:(or=null,_l.remove("logging_enabled"))},ot=function(...t){if(Sd===!0&&(Sd=!1,or===null&&_l.get("logging_enabled")===!0&&pC(!0)),or){const e=vs.apply(null,t);or(e)}},bs=function(t){return function(...e){ot(t,...e)}},vl=function(...t){const e="FIREBASE INTERNAL ERROR: "+vs(...t);Br.error(e)},fr=function(...t){const e=`FIREBASE FATAL ERROR: ${vs(...t)}`;throw Br.error(e),new Error(e)},vt=function(...t){const e="FIREBASE WARNING: "+vs(...t);Br.warn(e)},gC=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gr="[MIN_NAME]",pr="[MAX_NAME]",wr=function(t,e){if(t===e)return 0;if(t===Gr||e===pr)return-1;if(e===Gr||t===pr)return 1;{const n=xd(t),r=xd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},_C=function(t,e){return t===e?0:t<e?-1:1},Ei=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},Ic=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Xe(e[r]),n+=":",n+=Ic(t[e[r]]);return n+="}",n},Lp=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ct(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fp=function(t){P(!Tc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},vC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const wC=new RegExp("^-?(0*)\\d{1,10}$"),CC=-2147483648,EC=2147483647,xd=function(t){if(wC.test(t)){const e=Number(t);if(e>=CC&&e<=EC)return e}return null},li=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},TC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$i=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vt(e)}}class bl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="5",$p="v",Bp="s",Up="r",Hp="f",zp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wp="ls",xC="p",yl="ac",jp="websocket",Vp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function PC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qp(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===jp)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vp)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PC(t)&&(n.ns=t.namespace);const i=[];return ct(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.counters_={}}incrementCounter(e,n=1){Xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={},Da={};function xc(t){const e=t.toString();return Ma[e]||(Ma[e]=new AC),Ma[e]}function kC(t,e){const n=t.toString();return Da[n]||(Da[n]=e()),Da[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&li(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="start",OC="close",MC="pLPCommand",DC="pRTLPCB",Kp="id",Gp="pw",Yp="ser",LC="cb",FC="seg",$C="ts",BC="d",UC="dframe",Xp=1870,Jp=30,HC=Xp-Jp,zC=25e3,WC=3e4;class Or{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=xc(n),this.urlFn=l=>(this.appCheckToken&&(l[yl]=this.appCheckToken),qp(n,Vp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WC)),mC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rc((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rd)this.id=a,this.password=l;else if(o===OC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Rd]="t",r[Yp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[LC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$p]=Sc,this.transportSessionId&&(r[Bp]=this.transportSessionId),this.lastSessionId&&(r[Wp]=this.lastSessionId),this.applicationId&&(r[xC]=this.applicationId),this.appCheckToken&&(r[yl]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&zp.test(location.hostname)&&(r[Up]=Hp);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Or.forceAllow_=!0}static forceDisallow(){Or.forceDisallow_=!0}static isAvailable(){return Or.forceAllow_?!0:!Or.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!vC()&&!bC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vf(n),i=Lp(r,HC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[UC]="t",r[Kp]=e,r[Gp]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fC(),window[MC+this.uniqueCallbackIdentifier]=e,window[DC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rc.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Kp]=this.myID,e[Gp]=this.myPW,e[Yp]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jp+r.length<=Xp;){const o=this.pendingSegs.shift();r=r+"&"+FC+i+"="+o.seg+"&"+$C+i+"="+o.ts+"&"+BC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(zC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=16384,VC=45e3;let bo=null;typeof MozWebSocket!="undefined"?bo=MozWebSocket:typeof WebSocket!="undefined"&&(bo=WebSocket);class Lt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=xc(n),this.connURL=Lt.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[$p]=Sc,typeof location!="undefined"&&location.hostname&&zp.test(location.hostname)&&(s[Up]=Hp),n&&(s[Bp]=n),r&&(s[Wp]=r),i&&(s[yl]=i),qp(e,jp,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jn.set("previous_websocket_failure",!0);try{if(!Yf()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new bo(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bo!==null&&!Lt.forceDisallow_}static previouslyFailed(){return Jn.isInMemoryStorage||Jn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Lp(n,jC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Lt.responsesRequiredToBeHealthy=2;Lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Or,Lt]}initTransports_(e){const n=Lt&&Lt.isAvailable();let r=n&&!Lt.previouslyFailed();if(e.webSocketOnly&&(n||vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Lt];else{const i=this.transports_=[];for(const s of Pc.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=6e4,KC=5e3,GC=10*1024,YC=100*1024,La="t",Pd="d",XC="s",Ad="r",JC="e",kd="o",Nd="a",Od="n",Md="p",QC="h";class ZC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new Pc(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$i(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(La in e){const n=e[La];n===Nd?this.upgradeIfSecondaryHealthy_():n===Ad?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ei("t",e),r=Ei("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Md,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Od,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ei("t",e),r=Ei("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ei(La,e);if(Pd in e){const r=e[Pd];if(n===QC)this.onHandshake_(r);else if(n===Od){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===XC?this.onConnectionShutdown_(r):n===Ad?this.onReset_(r):n===JC?vl("Server Error: "+r):n===kd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sc!==r&&vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$i(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$i(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Md,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Zp{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!hc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yo}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=32,Ld=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new xe("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function On(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function Ac(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function rs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function eg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function Ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof xe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new xe(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function _t(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return _t(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tE(t,e){const n=rs(t,0),r=rs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=wr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function kc(t,e){if(On(t)!==On(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Nt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(On(t)>On(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class nE{constructor(e,n){this.errorPrefix_=n,this.parts_=rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zo(this.parts_[r]);tg(this)}}function rE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zo(e),tg(t)}function iE(t){const e=t.parts_.pop();t.byteLength_-=Zo(e),t.parts_.length>0&&(t.byteLength_-=1)}function tg(t){if(t.byteLength_>Ld)throw new Error(t.errorPrefix_+"has a key path longer than "+Ld+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dd+") or object contains a cycle "+Kn(t))}function Kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends Zp{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Nc}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=1e3,sE=60*5*1e3,oE=3*1e3,Fd=30*1e3,aE=1.3,lE=3e4,cE="server_kill",$d=3;class on extends Qp{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=on.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ti,this.maxReconnectDelay_=sE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Yf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Xe(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new hs,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},oE),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;on.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xt(e,"w")){const r=qr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||by(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vy(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vl("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lE&&(this.reconnectDelay_=Ti),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new ZC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{vt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(cE)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&vt(d),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hl(this.interruptReasons_)&&(this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ic(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new xe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$d&&(this.reconnectDelay_=Fd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$d&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Op.replace(/\./g,"-")]=1,hc()?e["framework.cordova"]=1:Gf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yo.getInstance().currentlyOnline();return hl(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(Gr,e),i=new le(Gr,n);return this.compare(r,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms;class ng extends ia{static get __EMPTY_NODE(){return Ms}static set __EMPTY_NODE(e){Ms=e}compare(e,n){return wr(e.name,n.name)}isDefinedOn(e){throw si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(pr,Ms)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Ms)}toString(){return".key"}}const Ur=new ng;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ze.RED,this.left=i!=null?i:Ct.EMPTY_NODE,this.right=s!=null?s:Ct.EMPTY_NODE}copy(e,n,r,i,s){return new Ze(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ze.RED=!0;Ze.BLACK=!1;class uE{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ze.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new uE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t,e){return wr(t.name,e.name)}function Oc(t,e){return wr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;function hE(t){wl=t}const rg=function(t){return typeof t=="number"?"number:"+Fp(t):"string:"+t},ig=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xt(e,".sv"),"Priority must be a string or number.")}else P(t===wl||t.isEmpty(),"priority of unexpected type.");P(t===wl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bd;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ig(this.priorityNode_)}static set __childrenNodeConstructor(e){Bd=e}static get __childrenNodeConstructor(){return Bd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:ae(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||On(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fp(this.value_):e+=this.value_,this.lazyHash_=Dp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(n),s=Qe.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sg,og;function fE(t){sg=t}function pE(t){og=t}class gE extends ia{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?wr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(pr,new Qe("[PRIORITY-POST]",og))}makePost(e,n){const r=sg(e);return new le(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const He=new gE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=Math.log(2);class _E{constructor(e){const n=s=>parseInt(Math.log(s)/mE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wo=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ze(h,d.node,Ze.BLACK,null,null);{const _=parseInt(u/2,10)+l,p=i(l,_),C=i(_+1,c);return d=t[_],h=n?n(d):d,new Ze(h,d.node,Ze.BLACK,p,C)}},s=function(l){let c=null,u=null,d=t.length;const h=function(p,C){const b=d-p,k=d;d-=p;const F=i(b+1,k),B=t[b],H=n?n(B):B;_(new Ze(H,B.node,C,null,F))},_=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const C=l.nextBitIsOne(),b=Math.pow(2,l.count-(p+1));C?h(b,Ze.BLACK):(h(b,Ze.BLACK),h(b,Ze.RED))}return u},o=new _E(t.length),a=s(o);return new Ct(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa;const Rr={};class sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Rr&&He,"ChildrenNode.ts has not been loaded"),Fa=Fa||new sn({".priority":Rr},{".priority":He}),Fa}get(e){const n=qr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Xt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Ur,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(le.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=wo(r,e.getCompare()):a=Rr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new sn(u,c)}addToIndexes(e,n){const r=ho(this.indexes_,(i,s)=>{const o=qr(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===Rr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(le.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),wo(a,o.getCompare())}else return Rr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new le(e.name,a))),l.insert(e,e.node)}});return new sn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ho(this.indexes_,i=>{if(i===Rr)return i;{const s=n.get(e.name);return s?i.remove(new le(e.name,s)):i}});return new sn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ig(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ii||(Ii=new X(new Ct(Oc),null,sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ii}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ii:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ii:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{P(ae(e)!==".priority"||On(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ne(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(He,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rg(this.getPriority().val())+":"),this.forEachChild(He,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Dp(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new le(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ys?-1:0}withIndex(e){if(e===Ur||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ur||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(He),i=n.getIterator(He);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ur?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vE extends X{constructor(){super(new Ct(Oc),X.EMPTY_NODE,sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const ys=new vE;Object.defineProperties(le,{MIN:{value:new le(Gr,X.EMPTY_NODE)},MAX:{value:new le(pr,ys)}});ng.__EMPTY_NODE=X.EMPTY_NODE;Qe.__childrenNodeConstructor=X;hE(ys);pE(ys);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=!0;function Ye(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,Ye(e))}if(!(t instanceof Array)&&bE){const n=[];let r=!1;if(ct(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ye(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new le(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=wo(n,dE,o=>o.name,Oc);if(r){const o=wo(n,He.getCompare());return new X(s,Ye(e),new sn({".priority":o},{".priority":He}))}else return new X(s,Ye(e),sn.Default)}else{let n=X.EMPTY_NODE;return ct(t,(r,i)=>{if(Xt(t,r)&&r.substring(0,1)!=="."){const s=Ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ye(e))}}fE(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE extends ia{constructor(e){super(),this.indexPath_=e,P(!he(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?wr(e.name,n.name):s}makePost(e,n){const r=Ye(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,ys);return new le(pr,e)}toString(){return rs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE extends ia{compare(e,n){const r=e.node.compareTo(n.node);return r===0?wr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=Ye(e);return new le(n,r)}toString(){return".value"}}const CE=new wE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",EE=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Ud.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ud.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){return{type:"value",snapshotNode:t}}function Yr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function is(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function TE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(is(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Yr(n,r)):o.trackChildChange(ss(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(He,(i,s)=>{n.hasChild(i)||r.trackChildChange(is(i,s))}),n.isLeafNode()||n.forEachChild(He,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ss(i,s,o))}else r.trackChildChange(Yr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.indexedFilter_=new Mc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=os.getStartPost_(e),this.endPost_=os.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new le(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(He,(o,a)=>{s.matches(new le(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.rangedFilter_=new os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new le(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,_)=>d(_,h)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(s,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:i=i.updateImmediateChild(d.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new le(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(u&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(ss(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(is(n,d));const C=a.updateImmediateChild(n,X.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Yr(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(is(c.name,c.node)),s.trackChildChange(Yr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=He}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===He}copy(){const e=new Dc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SE(t){return t.loadsAllData()?new Mc(t.getIndex()):t.hasLimit()?new IE(t):new os(t)}function Hd(t){const e={};if(t.isDefault())return e;let n;return t.index_===He?n="$priority":t.index_===CE?n="$value":t.index_===Ur?n="$key":(P(t.index_ instanceof yE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_&&(e.startAt=Xe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Xe(t.indexStartName_))),t.endSet_&&(e.endAt=Xe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Xe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==He&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Qp{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Co.getListenId_(e,r),a={};this.listens_[o]=a;const l=Hd(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),qr(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Co.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Hd(e._queryParams),r=e._path.toString(),i=new hs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ai(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Zi(a.responseText)}catch{vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(){return{value:null,children:new Map}}function lg(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,Eo());const i=t.children.get(r);e=Ne(e),lg(i,e,n)}}function Cl(t,e,n){t.value!==null?n(e,t.value):RE(t,(r,i)=>{const s=new xe(e.toString()+"/"+r);Cl(i,s,n)})}function RE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ct(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=10*1e3,AE=30*1e3,kE=5*60*1e3;class NE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PE(e);const r=Wd+(AE-Wd)*Math.random();$i(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ct(e,(i,s)=>{s>0&&Xt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$i(this.reportStats_.bind(this),Math.floor(Math.random()*2*kE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ft||(Ft={}));function Lc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $c(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ft.ACK_USER_WRITE,this.source=Lc()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new To(be(),n,this.revert)}}else return P(ae(this.path)===e,"operationForChild called for unrelated child."),new To(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.source=e,this.path=n,this.type=Ft.LISTEN_COMPLETE}operationForChild(e){return he(this.path)?new as(this.source,be()):new as(this.source,Ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ft.OVERWRITE}operationForChild(e){return he(this.path)?new gr(this.source,be(),this.snap.getImmediateChild(e)):new gr(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ft.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new gr(this.source,be(),n.value):new Xr(this.source,be(),n)}else return P(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xr(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ME(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(TE(o.childName,o.snapshotNode))}),Si(t,i,"child_removed",e,r,n),Si(t,i,"child_added",e,r,n),Si(t,i,"child_moved",s,r,n),Si(t,i,"child_changed",e,r,n),Si(t,i,"value",e,r,n),i}function Si(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>LE(t,a,l)),o.forEach(a=>{const l=DE(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function DE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function LE(t,e,n){if(e.childName==null||n.childName==null)throw si("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e){return{eventCache:t,serverCache:e}}function Bi(t,e,n,r){return sa(new Mn(e,n,r),t.serverCache)}function cg(t,e,n,r){return sa(t.eventCache,new Mn(e,n,r))}function Io(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a;const FE=()=>($a||($a=new Ct(_C)),$a);class ke{constructor(e,n=FE()){this.value=e,this.children=n}static fromObject(e){let n=new ke(null);return ct(e,(r,i)=>{n=n.set(new xe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(he(e))return null;{const r=ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ne(e),n);return s!=null?{path:Ue(new xe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Ne(e)):new ke(null)}}set(e,n){if(he(e))return new ke(n,this.children);{const r=ae(e),s=(this.children.get(r)||new ke(null)).set(Ne(e),n),o=this.children.insert(r,s);return new ke(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const i=r.remove(Ne(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ke(null):new ke(this.value,s)}else return this}}get(e){if(he(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Ne(e)):null}}setTree(e,n){if(he(e))return n;{const r=ae(e),s=(this.children.get(r)||new ke(null)).setTree(Ne(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ke(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(he(e))return null;{const s=ae(e),o=this.children.get(s);return o?o.findOnPath_(Ne(e),Ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,r){if(he(e))return this;{this.value&&r(n,this.value);const i=ae(e),s=this.children.get(i);return s?s.foreachOnPath_(Ne(e),Ue(n,i),r):new ke(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new ke(null))}}function Ui(t,e,n){if(he(e))return new Bt(new ke(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=_t(i,e);return s=s.updateChild(o,n),new Bt(t.writeTree_.set(i,s))}else{const i=new ke(n),s=t.writeTree_.setTree(e,i);return new Bt(s)}}}function El(t,e,n){let r=t;return ct(n,(i,s)=>{r=Ui(r,Ue(e,i),s)}),r}function jd(t,e){if(he(e))return Bt.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new Bt(n)}}function Tl(t,e){return Cr(t,e)!=null}function Cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_t(n.path,e)):null}function Vd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(He,(r,i)=>{e.push(new le(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new le(r,i.value))}),e}function Pn(t,e){if(he(e))return t;{const n=Cr(t,e);return n!=null?new Bt(new ke(n)):new Bt(t.writeTree_.subtree(e))}}function Il(t){return t.writeTree_.isEmpty()}function Jr(t,e){return ug(be(),t.writeTree_,e)}function ug(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ug(Ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t,e){return pg(e,t)}function $E(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ui(t.visibleWrites,e,n)),t.lastWriteId=r}function BE(t,e,n,r){P(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=El(t.visibleWrites,e,n),t.lastWriteId=r}function UE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&zE(a,r.path)?i=!1:Nt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return WE(t),!0;if(r.snap)t.visibleWrites=jd(t.visibleWrites,r.path);else{const a=r.children;ct(a,l=>{t.visibleWrites=jd(t.visibleWrites,Ue(r.path,l))})}return!0}else return!1}function zE(t,e){if(t.snap)return Nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Nt(Ue(t.path,n),e))return!0;return!1}function WE(t){t.visibleWrites=dg(t.allWrites,jE,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jE(t){return t.visible}function dg(t,e,n){let r=Bt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Nt(n,o)?(a=_t(n,o),r=Ui(r,a,s.snap)):Nt(o,n)&&(a=_t(o,n),r=Ui(r,be(),s.snap.getChild(a)));else if(s.children){if(Nt(n,o))a=_t(n,o),r=El(r,a,s.children);else if(Nt(o,n))if(a=_t(o,n),he(a))r=El(r,be(),s.children);else{const l=qr(s.children,ae(a));if(l){const c=l.getChild(Ne(a));r=Ui(r,be(),c)}}}else throw si("WriteRecord should have .snap or .children")}}return r}function hg(t,e,n,r,i){if(!r&&!i){const s=Cr(t.visibleWrites,e);if(s!=null)return s;{const o=Pn(t.visibleWrites,e);if(Il(o))return n;if(n==null&&!Tl(o,be()))return null;{const a=n||X.EMPTY_NODE;return Jr(o,a)}}}else{const s=Pn(t.visibleWrites,e);if(!i&&Il(s))return n;if(!i&&n==null&&!Tl(s,be()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Nt(c.path,e)||Nt(e,c.path))},a=dg(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Jr(a,l)}}}function VE(t,e,n){let r=X.EMPTY_NODE;const i=Cr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(He,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pn(t.visibleWrites,e);return n.forEachChild(He,(o,a)=>{const l=Jr(Pn(s,new xe(o)),a);r=r.updateImmediateChild(o,l)}),Vd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pn(t.visibleWrites,e);return Vd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function qE(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ue(e,n);if(Tl(t.visibleWrites,s))return null;{const o=Pn(t.visibleWrites,s);return Il(o)?i.getChild(n):Jr(o,i.getChild(n))}}function KE(t,e,n,r){const i=Ue(e,n),s=Cr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pn(t.visibleWrites,i);return Jr(o,r.getNode().getImmediateChild(n))}else return null}function GE(t,e){return Cr(t.visibleWrites,e)}function YE(t,e,n,r,i,s,o){let a;const l=Pn(t.visibleWrites,e),c=Cr(l,be());if(c!=null)a=c;else if(n!=null)a=Jr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&u.length<i;)d(_,r)!==0&&u.push(_),_=h.getNext();return u}else return[]}function XE(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function So(t,e,n,r){return hg(t.writeTree,t.treePath,e,n,r)}function Bc(t,e){return VE(t.writeTree,t.treePath,e)}function qd(t,e,n,r){return qE(t.writeTree,t.treePath,e,n,r)}function xo(t,e){return GE(t.writeTree,Ue(t.treePath,e))}function JE(t,e,n,r,i,s){return YE(t.writeTree,t.treePath,e,n,r,i,s)}function Uc(t,e,n){return KE(t.writeTree,t.treePath,e,n)}function fg(t,e){return pg(Ue(t.treePath,e),t.writeTree)}function pg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ss(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,is(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Yr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ss(r,e.snapshotNode,i.oldSnap));else throw si("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const gg=new ZE;class Hc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Uc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mr(this.viewCache_),s=JE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){return{filter:t}}function tT(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nT(t,e,n,r,i){const s=new QE;let o,a;if(n.type===Ft.OVERWRITE){const c=n;c.source.fromUser?o=Sl(t,e,c.path,c.snap,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!he(c.path),o=Ro(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Ft.MERGE){const c=n;c.source.fromUser?o=iT(t,e,c.path,c.children,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=xl(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Ft.ACK_USER_WRITE){const c=n;c.revert?o=aT(t,e,c.path,r,i,s):o=sT(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Ft.LISTEN_COMPLETE)o=oT(t,e,n.path,r,s);else throw si("Unknown operation type: "+n.type);const l=s.getChanges();return rT(e,o,l),{viewCache:o,changes:l}}function rT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Io(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ag(Io(e)))}}function mg(t,e,n,r,i,s){const o=e.eventCache;if(xo(r,n)!=null)return e;{let a,l;if(he(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=mr(e),u=c instanceof X?c:X.EMPTY_NODE,d=Bc(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=So(r,mr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ae(n);if(c===".priority"){P(On(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=qd(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ne(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=qd(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Uc(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Bi(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function Ro(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(he(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),_,null)}else{const _=ae(n);if(!l.isCompleteForPath(n)&&On(n)>1)return e;const p=Ne(n),b=l.getNode().getImmediateChild(_).updateChild(p,r);_===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),_,b,p,gg,null)}const d=cg(e,c,l.isFullyInitialized()||he(n),u.filtersNodes()),h=new Hc(i,d,s);return mg(t,d,n,i,h,a)}function Sl(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Hc(i,e,s);if(he(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Bi(e,c,!0,t.filter.filtersNodes());else{const d=ae(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Bi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ne(n),_=a.getNode().getImmediateChild(d);let p;if(he(h))p=r;else{const C=u.getCompleteChild(d);C!=null?Ac(h)===".priority"&&C.getChild(eg(h)).isEmpty()?p=C:p=C.updateChild(h,r):p=X.EMPTY_NODE}if(_.equals(p))l=e;else{const C=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=Bi(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Kd(t,e){return t.eventCache.isCompleteForChild(e)}function iT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Ue(n,l);Kd(e,ae(u))&&(a=Sl(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Ue(n,l);Kd(e,ae(u))||(a=Sl(t,a,u,c,i,s,o))}),a}function Gd(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function xl(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;he(n)?c=r:c=new ke(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),p=Gd(t,_,h);l=Ro(t,l,new xe(d),p,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!_){const p=e.serverCache.getNode().getImmediateChild(d),C=Gd(t,p,h);l=Ro(t,l,new xe(d),C,i,s,o,a)}}),l}function sT(t,e,n,r,i,s,o){if(xo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ro(t,e,n,l.getNode().getChild(n),i,s,a,o);if(he(n)){let c=new ke(null);return l.getNode().forEachChild(Ur,(u,d)=>{c=c.set(new xe(u),d)}),xl(t,e,n,c,i,s,a,o)}else return e}else{let c=new ke(null);return r.foreach((u,d)=>{const h=Ue(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),xl(t,e,n,c,i,s,a,o)}}function oT(t,e,n,r,i){const s=e.serverCache,o=cg(e,s.getNode(),s.isFullyInitialized()||he(n),s.isFiltered());return mg(t,o,n,r,gg,i)}function aT(t,e,n,r,i,s){let o;if(xo(r,n)!=null)return e;{const a=new Hc(r,e,i),l=e.eventCache.getNode();let c;if(he(n)||ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=So(r,mr(e));else{const d=e.serverCache.getNode();P(d instanceof X,"serverChildren would be complete if leaf node"),u=Bc(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=ae(n);let d=Uc(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ne(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,X.EMPTY_NODE,Ne(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=So(r,mr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||xo(r,be())!=null,Bi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Mc(r.getIndex()),s=SE(r);this.processor_=eT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),u=new Mn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Mn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=sa(d,u),this.eventGenerator_=new OE(this.query_)}get query(){return this.query_}}function cT(t){return t.viewCache_.serverCache.getNode()}function uT(t){return Io(t.viewCache_)}function dT(t,e){const n=mr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Yd(t){return t.eventRegistrations_.length===0}function hT(t,e){t.eventRegistrations_.push(e)}function Xd(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Jd(t,e,n,r){e.type===Ft.MERGE&&e.source.queryId!==null&&(P(mr(t.viewCache_),"We should always have a full cache before handling merges"),P(Io(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=nT(t.processor_,i,e,n,r);return tT(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,_g(t,s.changes,s.viewCache.eventCache.getNode(),null)}function fT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(He,(s,o)=>{r.push(Yr(s,o))}),n.isFullyInitialized()&&r.push(ag(n.getNode())),_g(t,r,n.getNode(),e)}function _g(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ME(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;class vg{constructor(){this.views=new Map}}function pT(t){P(!Po,"__referenceConstructor has already been defined"),Po=t}function gT(){return P(Po,"Reference.ts has not been loaded"),Po}function mT(t){return t.views.size===0}function zc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),Jd(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Jd(o,e,n,r));return s}}function bg(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=So(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=Bc(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const c=sa(new Mn(a,l,!1),new Mn(r,i,!1));return new lT(e,c)}return o}function _T(t,e,n,r,i,s){const o=bg(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hT(o,n),fT(o,n)}function vT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Dn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Xd(c,n,r)),Yd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Xd(l,n,r)),Yd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Dn(t)&&s.push(new(gT())(e._repo,e._path)),{removed:s,events:o}}function yg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function An(t,e){let n=null;for(const r of t.views.values())n=n||dT(r,e);return n}function wg(t,e){if(e._queryParams.loadsAllData())return aa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Cg(t,e){return wg(t,e)!=null}function Dn(t){return aa(t)!=null}function aa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;function bT(t){P(!Ao,"__referenceConstructor has already been defined"),Ao=t}function yT(){return P(Ao,"Reference.ts has not been loaded"),Ao}let wT=1;class Qd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=XE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Eg(t,e,n,r,i){return $E(t.pendingWriteTree_,e,n,r,i),i?ci(t,new gr(Lc(),e,n)):[]}function CT(t,e,n,r){BE(t.pendingWriteTree_,e,n,r);const i=ke.fromObject(n);return ci(t,new Xr(Lc(),e,i))}function In(t,e,n=!1){const r=UE(t.pendingWriteTree_,e);if(HE(t.pendingWriteTree_,e)){let s=new ke(null);return r.snap!=null?s=s.set(be(),!0):ct(r.children,o=>{s=s.set(new xe(o),!0)}),ci(t,new To(r.path,s,n))}else return[]}function ws(t,e,n){return ci(t,new gr(Fc(),e,n))}function ET(t,e,n){const r=ke.fromObject(n);return ci(t,new Xr(Fc(),e,r))}function TT(t,e){return ci(t,new as(Fc(),e))}function IT(t,e,n){const r=jc(t,n);if(r){const i=Vc(r),s=i.path,o=i.queryId,a=_t(s,e),l=new as($c(o),a);return qc(t,s,l)}else return[]}function Rl(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||Cg(s,e))){const a=vT(s,e,n,r);mT(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(d,h)=>Dn(h));if(c&&!u){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const h=PT(d);for(let _=0;_<h.length;++_){const p=h[_],C=p.query,b=Sg(t,p);t.listenProvider_.startListening(Hi(C),ko(t,C),b.hashFn,b.onComplete)}}}!u&&l.length>0&&!r&&(c?t.listenProvider_.stopListening(Hi(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(la(d));t.listenProvider_.stopListening(Hi(d),h)})),AT(t,l)}return o}function ST(t,e,n,r){const i=jc(t,r);if(i!=null){const s=Vc(i),o=s.path,a=s.queryId,l=_t(o,e),c=new gr($c(a),l,n);return qc(t,o,c)}else return[]}function xT(t,e,n,r){const i=jc(t,r);if(i){const s=Vc(i),o=s.path,a=s.queryId,l=_t(o,e),c=ke.fromObject(n),u=new Xr($c(a),l,c);return qc(t,o,u)}else return[]}function Zd(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,h)=>{const _=_t(d,r);i=i||An(h,_),s=s||Dn(h)});let o=t.syncPointTree_.get(r);o?(s=s||Dn(o),i=i||An(o,be())):(o=new vg,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((h,_)=>{const p=An(_,be());p&&(i=i.updateImmediateChild(h,p))}));const l=Cg(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=la(e);P(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=kT();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const c=oa(t.pendingWriteTree_,r);let u=_T(o,e,n,c,i,a);if(!l&&!s){const d=wg(o,e);u=u.concat(NT(t,e,d))}return u}function Wc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_t(o,e),c=An(a,l);if(c)return c});return hg(i,e,s,n,!0)}function RT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=_t(c,n);r=r||An(u,d)});let i=t.syncPointTree_.get(n);i?r=r||An(i,be()):(i=new vg,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Mn(r,!0,!1):null,a=oa(t.pendingWriteTree_,e._path),l=bg(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return uT(l)}function ci(t,e){return Tg(e,t.syncPointTree_,null,oa(t.pendingWriteTree_,be()))}function Tg(t,e,n,r){if(he(t.path))return Ig(t,e,n,r);{const i=e.get(be());n==null&&i!=null&&(n=An(i,be()));let s=[];const o=ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=fg(r,o);s=s.concat(Tg(a,l,c,u))}return i&&(s=s.concat(zc(i,t,r,n))),s}}function Ig(t,e,n,r){const i=e.get(be());n==null&&i!=null&&(n=An(i,be()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=fg(r,o),u=t.operationForChild(o);u&&(s=s.concat(Ig(u,a,l,c)))}),i&&(s=s.concat(zc(i,t,r,n))),s}function Sg(t,e){const n=e.query,r=ko(t,n);return{hashFn:()=>(cT(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?IT(t,n._path,r):TT(t,n._path);{const s=yC(i,n);return Rl(t,n,null,s)}}}}function ko(t,e){const n=la(e);return t.queryToTagMap.get(n)}function la(t){return t._path.toString()+"$"+t._queryIdentifier}function jc(t,e){return t.tagToQueryMap.get(e)}function Vc(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function qc(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=oa(t.pendingWriteTree_,e);return zc(r,n,i,null)}function PT(t){return t.fold((e,n,r)=>{if(n&&Dn(n))return[aa(n)];{let i=[];return n&&(i=yg(n)),ct(r,(s,o)=>{i=i.concat(o)}),i}})}function Hi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(yT())(t._repo,t._path):t}function AT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=la(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function kT(){return wT++}function NT(t,e,n){const r=e._path,i=ko(t,e),s=Sg(t,n),o=t.listenProvider_.startListening(Hi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!Dn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!he(c)&&u&&Dn(u))return[aa(u).query];{let h=[];return u&&(h=h.concat(yg(u).map(_=>_.query))),ct(d,(_,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Hi(u),ko(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kc(n)}node(){return this.node_}}class Gc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new Gc(this.syncTree_,n)}node(){return Wc(this.syncTree_,this.path_)}}const OT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},eh=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return MT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return DT(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},MT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},DT=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},xg=function(t,e,n,r){return Yc(e,new Gc(n,t),r)},Rg=function(t,e,n){return Yc(t,new Kc(e),n)};function Yc(t,e,n){const r=t.getPriority().val(),i=eh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=eh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,Ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Qe(i))),o.forEachChild(He,(a,l)=>{const c=Yc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Jc(t,e){let n=e instanceof xe?e:new xe(e),r=t,i=ae(n);for(;i!==null;){const s=qr(r.node.children,i)||{children:{},childCount:0};r=new Xc(i,r,s),n=Ne(n),i=ae(n)}return r}function ui(t){return t.node.value}function Pg(t,e){t.node.value=e,Pl(t)}function Ag(t){return t.node.childCount>0}function LT(t){return ui(t)===void 0&&!Ag(t)}function ca(t,e){ct(t.node.children,(n,r)=>{e(new Xc(n,t,r))})}function kg(t,e,n,r){n&&!r&&e(t),ca(t,i=>{kg(i,e,!0,r)}),n&&r&&e(t)}function FT(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Cs(t){return new xe(t.parent===null?t.name:Cs(t.parent)+"/"+t.name)}function Pl(t){t.parent!==null&&$T(t.parent,t.name,t)}function $T(t,e,n){const r=LT(n),i=Xt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Pl(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=/[\[\].#$\/\u0000-\u001F\u007F]/,UT=/[\[\].#$\u0000-\u001F\u007F]/,Ba=10*1024*1024,Qc=function(t){return typeof t=="string"&&t.length!==0&&!BT.test(t)},Ng=function(t){return typeof t=="string"&&t.length!==0&&!UT.test(t)},HT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ng(t)},zT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Tc(t)||t&&typeof t=="object"&&Xt(t,".sv")},Og=function(t,e,n,r){r&&e===void 0||ua(Qo(t,"value"),e,n)},ua=function(t,e,n){const r=n instanceof xe?new nE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Kn(r)+" with contents = "+e.toString());if(Tc(e))throw new Error(t+"contains "+e.toString()+" "+Kn(r));if(typeof e=="string"&&e.length>Ba/3&&Zo(e)>Ba)throw new Error(t+"contains a string greater than "+Ba+" utf8 bytes "+Kn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ct(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Qc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rE(r,o),ua(t,a,r),iE(r)}),i&&s)throw new Error(t+' contains ".value" child '+Kn(r)+" in addition to actual children.")}},WT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=rs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Qc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tE);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Nt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},jT=function(t,e,n,r){if(r&&e===void 0)return;const i=Qo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ct(e,(o,a)=>{const l=new xe(o);if(ua(i,a,Ue(n,l)),Ac(l)===".priority"&&!zT(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),WT(i,s)},Mg=function(t,e,n,r){if(!(r&&n===void 0)&&!Ng(n))throw new Error(Qo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},VT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mg(t,e,n,r)},Zc=function(t,e){if(ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!HT(n))throw new Error(Qo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function da(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!kc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function eu(t,e,n){da(t,n),Dg(t,r=>kc(r,e))}function Ut(t,e,n){da(t,n),Dg(t,r=>Nt(r,e)||Nt(e,r))}function Dg(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(GT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function GT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();or&&ot("event: "+n.toString()),li(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="repo_interrupt",XT=25;class JT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Eo(),this.transactionQueueTree_=new Xc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QT(t,e,n){if(t.stats_=xc(t.repoInfo_),t.forceRestClient_||TC())t.server_=new Co(t.repoInfo_,(r,i,s,o)=>{th(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>nh(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new on(t.repoInfo_,e,(r,i,s,o)=>{th(t,r,i,s,o)},r=>{nh(t,r)},r=>{ZT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=kC(t.repoInfo_,()=>new NE(t.stats_,t.server_)),t.infoData_=new xE,t.infoSyncTree_=new Qd({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ws(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),tu(t,"connected",!1),t.serverSyncTree_=new Qd({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ut(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Lg(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ha(t){return OT({timestamp:Lg(t)})}function th(t,e,n,r,i){t.dataUpdateCount++;const s=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ho(n,c=>Ye(c));o=xT(t.serverSyncTree_,s,l,i)}else{const l=Ye(n);o=ST(t.serverSyncTree_,s,l,i)}else if(r){const l=ho(n,c=>Ye(c));o=ET(t.serverSyncTree_,s,l)}else{const l=Ye(n);o=ws(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Qr(t,s)),Ut(t.eventQueue_,a,o)}function nh(t,e){tu(t,"connected",e),e===!1&&rI(t)}function ZT(t,e){ct(e,(n,r)=>{tu(t,n,r)})}function tu(t,e,n){const r=new xe("/.info/"+e),i=Ye(n);t.infoData_.updateSnapshot(r,i);const s=ws(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function nu(t){return t.nextWriteId_++}function eI(t,e){const n=RT(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(r=>{const i=Ye(r).withIndex(e._queryParams.getIndex()),s=ws(t.serverSyncTree_,e._path,i);return eu(t.eventQueue_,e._path,s),Promise.resolve(i)},r=>(Es(t,"get for query "+Xe(e)+" failed: "+r),Promise.reject(new Error(r))))}function tI(t,e,n,r,i){Es(t,"set",{path:e.toString(),value:n,priority:r});const s=ha(t),o=Ye(n,r),a=Wc(t.serverSyncTree_,e),l=Rg(o,a,s),c=nu(t),u=Eg(t.serverSyncTree_,e,l,c,!0);da(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const p=h==="ok";p||vt("set at "+e+" failed: "+h);const C=In(t.serverSyncTree_,c,!p);Ut(t.eventQueue_,e,C),Al(t,i,h,_)});const d=iu(t,e);Qr(t,d),Ut(t.eventQueue_,d,[])}function nI(t,e,n,r){Es(t,"update",{path:e.toString(),value:n});let i=!0;const s=ha(t),o={};if(ct(n,(a,l)=>{i=!1,o[a]=xg(Ue(e,a),Ye(l),t.serverSyncTree_,s)}),i)ot("update() called with empty data.  Don't do anything."),Al(t,r,"ok",void 0);else{const a=nu(t),l=CT(t.serverSyncTree_,e,o,a);da(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||vt("update at "+e+" failed: "+c);const h=In(t.serverSyncTree_,a,!d),_=h.length>0?Qr(t,e):e;Ut(t.eventQueue_,_,h),Al(t,r,c,u)}),ct(n,c=>{const u=iu(t,Ue(e,c));Qr(t,u)}),Ut(t.eventQueue_,e,[])}}function rI(t){Es(t,"onDisconnectEvents");const e=ha(t),n=Eo();Cl(t.onDisconnect_,be(),(i,s)=>{const o=xg(i,s,t.serverSyncTree_,e);lg(n,i,o)});let r=[];Cl(n,be(),(i,s)=>{r=r.concat(ws(t.serverSyncTree_,i,s));const o=iu(t,i);Qr(t,o)}),t.onDisconnect_=Eo(),Ut(t.eventQueue_,be(),r)}function iI(t,e,n){let r;ae(e._path)===".info"?r=Zd(t.infoSyncTree_,e,n):r=Zd(t.serverSyncTree_,e,n),eu(t.eventQueue_,e._path,r)}function rh(t,e,n){let r;ae(e._path)===".info"?r=Rl(t.infoSyncTree_,e,n):r=Rl(t.serverSyncTree_,e,n),eu(t.eventQueue_,e._path,r)}function sI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(YT)}function Es(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function Al(t,e,n,r){e&&li(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Fg(t,e,n){return Wc(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function ru(t,e=t.transactionQueueTree_){if(e||fa(t,e),ui(e)){const n=Bg(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oI(t,Cs(e),n)}else Ag(e)&&ca(e,n=>{ru(t,n)})}function oI(t,e,n){const r=n.map(c=>c.currentWriteId),i=Fg(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=_t(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Es(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(In(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();fa(t,Jc(t.transactionQueueTree_,e)),ru(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)li(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{vt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Qr(t,e)}},o)}function Qr(t,e){const n=$g(t,e),r=Cs(n),i=Bg(t,n);return aI(t,i,r),r}function aI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=_t(n,l.path);let u=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(In(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=XT)u=!0,d="maxretry",i=i.concat(In(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Fg(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){ua("transaction failed: Data returned ",_,l.path);let p=Ye(_);typeof _=="object"&&_!=null&&Xt(_,".priority")||(p=p.updatePriority(h.getPriority()));const b=l.currentWriteId,k=ha(t),F=Rg(p,h,k);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=F,l.currentWriteId=nu(t),o.splice(o.indexOf(b),1),i=i.concat(Eg(t.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(In(t.serverSyncTree_,b,!0))}else u=!0,d="nodata",i=i.concat(In(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}fa(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)li(r[a]);ru(t,t.transactionQueueTree_)}function $g(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&ui(r)===void 0;)r=Jc(r,n),e=Ne(e),n=ae(e);return r}function Bg(t,e){const n=[];return Ug(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Ug(t,e,n){const r=ui(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ca(e,i=>{Ug(t,i,n)})}function fa(t,e){const n=ui(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Pg(e,n.length>0?n:void 0)}ca(e,r=>{fa(t,r)})}function iu(t,e){const n=Cs($g(t,e)),r=Jc(t.transactionQueueTree_,e);return FT(r,i=>{Ua(t,i)}),Ua(t,r),kg(r,i=>{Ua(t,i)}),n}function Ua(t,e){const n=ui(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(In(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Pg(e,void 0):n.length=s+1,Ut(t.eventQueue_,Cs(e),i);for(let o=0;o<r.length;o++)li(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const ih=function(t,e){const n=uI(t),r=n.namespace;n.domain==="firebase.com"&&fr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new RC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new xe(n.pathString)}},uI=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=lI(t.substring(u,d)));const h=cI(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class zg{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return he(this._path)?null:Ac(this._path)}get ref(){return new Jt(this._repo,this._path)}get _queryIdentifier(){const e=zd(this._queryParams),n=Ic(e);return n==="{}"?"default":n}get _queryObject(){return zd(this._queryParams)}isEqual(e){if(e=Ht(e),!(e instanceof su))return!1;const n=this._repo===e._repo,r=kc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+eE(this._path)}}class Jt extends su{constructor(e,n){super(e,n,new Dc,!1)}get parent(){const e=eg(this._path);return e===null?null:new Jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),r=ei(this.ref,e);return new Zr(this._node.getChild(n),r,He)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Zr(i,ei(this.ref,r),He)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function nt(t,e){return t=Ht(t),t._checkNotDeleted("ref"),e!==void 0?ei(t._root,e):t._root}function ei(t,e){return t=Ht(t),ae(t._path)===null?VT("child","path",e,!1):Mg("child","path",e,!1),new Jt(t._repo,Ue(t._path,e))}function pa(t,e){t=Ht(t),Zc("push",t._path),Og("push",e,t._path,!0);const n=Lg(t._repo),r=EE(n),i=ei(t,r),s=ei(t,r);let o;return e!=null?o=ou(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Wg(t){return Zc("remove",t._path),ou(t,null)}function ou(t,e){t=Ht(t),Zc("set",t._path),Og("set",e,t._path,!1);const n=new hs;return tI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function di(t,e){jT("update",e,t._path,!1);const n=new hs;return nI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function au(t){return t=Ht(t),eI(t._repo,t).then(e=>new Zr(e,new Jt(t._repo,t._path),t._queryParams.getIndex()))}class lu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Hg("value",this,new Zr(e.snapshotNode,new Jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zg(this,e,n):null}matches(e){return e instanceof lu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class cu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zg(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=ei(new Jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Hg(e.type,this,new Zr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof cu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function hI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{rh(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new dI(n,s||void 0),a=e==="value"?new lu(o):new cu(e,o);return iI(t._repo,t,a),()=>rh(t._repo,t,a)}function No(t,e,n,r){return hI(t,"value",e,n,r)}pT(Jt);bT(Jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="FIREBASE_DATABASE_EMULATOR_HOST",kl={};let pI=!1;function gI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||fr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ih(s,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[fI]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=ih(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new bl(bl.OWNER):new SC(t.name,t.options,e);qT("Invalid Firebase Database URL",o),he(o.path)||fr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=_I(a,t,u,new IC(t.name,n));return new vI(d,t)}function mI(t,e){const n=kl[e];(!n||n[t.key]!==t)&&fr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sI(t),delete n[t.key]}function _I(t,e,n,r){let i=kl[e.name];i||(i={},kl[e.name]=i);let s=i[t.toURLString()];return s&&fr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new JT(t,pI,n,r),i[t.toURLString()]=s,s}class vI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jt(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fr("Cannot call "+e+" on a deleted database.")}}function bI(t=ep(),e){return gc(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t){uC(ps),Kr(new ur("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return gI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Rn(Td,Id,t),Rn(Td,Id,"esm2017")}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yI();const wI={apiKey:"AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",authDomain:"quick-retro.firebaseapp.com",projectId:"quick-retro",storageBucket:"quick-retro.appspot.com",messagingSenderId:"293134428599",appId:"1:293134428599:web:bad71d4fedbda8080ce032",databaseURL:"https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app"},CI=d0(wI),rt=bI(CI),Ls=un({});function EI(t){if(!t)return Ls;const e=nt(rt,`users/${t}/boards`),n={};No(e,r,s);function r(o){const a=o.exists()?Object.values(o.val()):[];for(const l of a){if(n[l])continue;const c=No(nt(rt,`boards/${l}`),i.bind(null,l),s);n[l]=c}for(const l in n)a.includes(l)||(n[l](),delete n[l],delete Ls[l])}function i(o,a){Ls[o]=a.val()}function s(o){console.error(o)}return Ls}function TI(t){const e=un({loading:!0});No(nt(rt,`boards/${t}`),r=>{e.exists=r.exists(),e.loading=!1,e.exists&&Object.entries(r.val()).forEach(([i,s])=>{e[i]=s})},n);function n(r){console.log(r),e.exists=!1,e.loading=!1}return e}function II(t,e){const n=nt(rt,`boards/${t}`);di(n,{cardsHidden:e})}function SI(t,e){const n=nt(rt,`boards/${t}`);di(n,{title:e})}function xI(t,e){const n=nt(rt,`boards/${t}/timer`);di(n,{isRunning:!0,endTime:e})}function RI(t,e){const n=nt(rt,`boards/${t}/timer`);di(n,{isRunning:!1,timeRemaining:e})}function PI(t,e){const n=nt(rt,`boards/${t}/timer`);di(n,{isRunning:!1,timeRemaining:e})}function AI(t){const e=un({isRunning:!1,timeRemaining:420,endTime:0});return No(nt(rt,`boards/${t}/timer`),n=>{if(n.exists()){const r=n.val();e.isRunning=r.isRunning||!1,r.isRunning&&r.endTime?(e.endTime=r.endTime,e.timeRemaining=Math.max(0,Math.floor((r.endTime-Date.now())/1e3))):r.timeRemaining!==void 0&&(e.timeRemaining=r.timeRemaining)}},n=>{console.error("Error fetching timer data:",n)}),e}function kI(t,e,n){const r=nt(rt,`boards/${t}/columns/${e}/cards`);pa(r,n)}function jg(t,e,n){Wg(nt(rt,`boards/${t}/columns/${e}/cards/${n}`))}async function NI(t,e,n,r){const i=nt(rt,`boards/${t}/columns/${e}/cards/${n}`),s=nt(rt,`boards/${t}/columns/${r}/cards`),o=await au(i);pa(s,o.val()),Wg(i)}function sh(t,e,n,r){di(nt(rt,`boards/${t}/columns/${e}/cards/${n}`),r)}async function OI(t,e){const n=nt(rt,"boards"),r=await pa(n,{author:t,cardsHidden:!0,title:"",columns:e.columns.map(i=>wu(yu({},i),{cards:{}}))});if(!!r.key)return await Vg(t,r.key),r.key}async function MI(t,e){const n=nt(rt,`users/${t}/boards`),r=await au(n);if(!r.exists())return;const i=Object.fromEntries(Object.entries(r.val()).filter(([s,o])=>e!==o));await ou(n,i)}async function Vg(t,e){const n=await au(nt(rt,`users/${t}/boards`));if((n.exists()?Object.values(n.val()):[]).includes(e))return;const i=nt(rt,`users/${t}/boards`);await pa(i,e)}function DI(){const t=un({}),e=cC();return Y0(e).catch(n=>{console.error(n)}),Z0(e,n=>{n&&Object.entries(n).forEach(([r,i])=>{t[r]=i})}),t}var Qt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const LI=Fe({props:{text:null},setup(t){return(e,n)=>(ne(),Se("button",null,tn(t.text),1))}});var Zs=Qt(LI,[["__scopeId","data-v-7cb4cbf6"]]);function FI(t,e){const n=t.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+t+" is not a valid value.")}return e===void 0?r:r[e]}var oh={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"};const hi="^\\s*",fi="\\s*$",Qn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Zn="([0-9A-Fa-f])",er="([0-9A-Fa-f]{2})",$I=new RegExp(`${hi}rgb\\s*\\(${Qn},${Qn},${Qn}\\)${fi}`),BI=new RegExp(`${hi}rgba\\s*\\(${Qn},${Qn},${Qn},${Qn}\\)${fi}`),UI=new RegExp(`${hi}#${Zn}${Zn}${Zn}${fi}`),HI=new RegExp(`${hi}#${er}${er}${er}${fi}`),zI=new RegExp(`${hi}#${Zn}${Zn}${Zn}${Zn}${fi}`),WI=new RegExp(`${hi}#${er}${er}${er}${er}${fi}`);function yt(t){return parseInt(t,16)}function _r(t){try{let e;if(e=HI.exec(t))return[yt(e[1]),yt(e[2]),yt(e[3]),1];if(e=$I.exec(t))return[ut(e[1]),ut(e[5]),ut(e[9]),1];if(e=BI.exec(t))return[ut(e[1]),ut(e[5]),ut(e[9]),zi(e[13])];if(e=UI.exec(t))return[yt(e[1]+e[1]),yt(e[2]+e[2]),yt(e[3]+e[3]),1];if(e=WI.exec(t))return[yt(e[1]),yt(e[2]),yt(e[3]),zi(yt(e[4])/255)];if(e=zI.exec(t))return[yt(e[1]+e[1]),yt(e[2]+e[2]),yt(e[3]+e[3]),zi(yt(e[4]+e[4])/255)];if(t in oh)return _r(oh[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(e){throw e}}function jI(t){return t>1?1:t<0?0:t}function Nl(t,e,n,r){return`rgba(${ut(t)}, ${ut(e)}, ${ut(n)}, ${jI(r)})`}function Ha(t,e,n,r,i){return ut((t*e*(1-r)+n*r)/i)}function VI(t,e){Array.isArray(t)||(t=_r(t)),Array.isArray(e)||(e=_r(e));const n=t[3],r=e[3],i=zi(n+r-n*r);return Nl(Ha(t[0],n,e[0],r,i),Ha(t[1],n,e[1],r,i),Ha(t[2],n,e[2],r,i),i)}function za(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:_r(t);return e.alpha?Nl(n,r,i,e.alpha):Nl(n,r,i,s)}function Fs(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:_r(t),{lightness:o=1,alpha:a=1}=e;return qI([n*o,r*o,i*o,s*a])}function zi(t){const e=Math.round(Number(t)*100)/100;return e>1?1:e<0?0:e}function ut(t){const e=Math.round(Number(t));return e>255?255:e<0?0:e}function qI(t){const[e,n,r]=t;return 3 in t?`rgba(${ut(e)}, ${ut(n)}, ${ut(r)}, ${zi(t[3])})`:`rgba(${ut(e)}, ${ut(n)}, ${ut(r)}, 1)`}function gt(t,...e){if(Array.isArray(t))t.forEach(n=>gt(n,...e));else return t(...e)}function KI(t,e){throw new Error(`[naive/${t}]: ${e}`)}function ga(t){return t.some(e=>Yi(e)?!(e.type===xt||e.type===We&&!ga(e.children)):!0)?t:null}function eo(t,e){return t&&ga(t())||e()}function GI(t,e,n){return t&&ga(t(e))||n(e)}function $s(t,e){const n=t&&ga(t());return e(n||null)}function YI(t){let e=0;for(let n=0;n<t.length;++n)t[n]==="&"&&++e;return e}const qg=/\s*,(?![^(]*\))\s*/g,XI=/\s+/g;function JI(t,e){const n=[];return e.split(qg).forEach(r=>{let i=YI(r);if(i){if(i===1){t.forEach(o=>{n.push(r.replace("&",o))});return}}else{t.forEach(o=>{n.push((o&&o+" ")+r)});return}let s=[r];for(;i--;){const o=[];s.forEach(a=>{t.forEach(l=>{o.push(a.replace("&",l))})}),s=o}s.forEach(o=>n.push(o))}),n}function QI(t,e){const n=[];return e.split(qg).forEach(r=>{t.forEach(i=>{n.push((i&&i+" ")+r)})}),n}function ZI(t){let e=[""];return t.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?e=JI(e,n):e=QI(e,n))}),e.join(", ").replace(XI," ")}function ah(t){if(!t)return;const e=t.parentElement;e&&e.removeChild(t)}function ma(t){return document.querySelector(`style[cssr-id="${t}"]`)}function eS(t){const e=document.createElement("style");return e.setAttribute("cssr-id",t),e}function Bs(t){return t?/^\s*@(s|m)/.test(t):!1}const tS=/[A-Z]/g;function Kg(t){return t.replace(tS,e=>"-"+e.toLowerCase())}function nS(t,e="  "){return typeof t=="object"&&t!==null?` {
`+Object.entries(t).map(n=>e+`  ${Kg(n[0])}: ${n[1]};`).join(`
`)+`
`+e+"}":`: ${t};`}function rS(t,e,n){return typeof t=="function"?t({context:e.context,props:n}):t}function lh(t,e,n,r){if(!e)return"";const i=rS(e,n,r);if(!i)return"";if(typeof i=="string")return`${t} {
${i}
}`;const s=Object.keys(i);if(s.length===0)return n.config.keepEmptyBlock?t+` {
}`:"";const o=t?[t+" {"]:[];return s.forEach(a=>{const l=i[a];if(a==="raw"){o.push(`
`+l+`
`);return}a=Kg(a),l!=null&&o.push(`  ${a}${nS(l)}`)}),t&&o.push("}"),o.join(`
`)}function Ol(t,e,n){!t||t.forEach(r=>{if(Array.isArray(r))Ol(r,e,n);else if(typeof r=="function"){const i=r(e);Array.isArray(i)?Ol(i,e,n):i&&n(i)}else r&&n(r)})}function Gg(t,e,n,r,i,s){const o=t.$;let a="";if(!o||typeof o=="string")Bs(o)?a=o:e.push(o);else if(typeof o=="function"){const u=o({context:r.context,props:i});Bs(u)?a=u:e.push(u)}else if(o.before&&o.before(r.context),!o.$||typeof o.$=="string")Bs(o.$)?a=o.$:e.push(o.$);else if(o.$){const u=o.$({context:r.context,props:i});Bs(u)?a=u:e.push(u)}const l=ZI(e),c=lh(l,t.props,r,i);a?(n.push(`${a} {`),s&&c&&s.insertRule(`${a} {
${c}
}
`)):(s&&c&&s.insertRule(c),!s&&c.length&&n.push(c)),t.children&&Ol(t.children,{context:r.context,props:i},u=>{if(typeof u=="string"){const d=lh(l,{raw:u},r,i);s?s.insertRule(d):n.push(d)}else Gg(u,e,n,r,i,s)}),e.pop(),a&&n.push("}"),o&&o.after&&o.after(r.context)}function Yg(t,e,n,r=!1){const i=[];return Gg(t,[],i,e,n,r?t.instance.__styleSheet:void 0),r?"":i.join(`

`)}function Ml(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function iS(t,e,n){const{els:r}=e;if(n===void 0)r.forEach(ah),e.els=[];else{const i=ma(n);i&&r.includes(i)&&(ah(i),e.els=r.filter(s=>s!==i))}}function ch(t,e){t.push(e)}function sS(t,e,n,r,i,s,o,a,l){if(s&&!l){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[n]||(h[n]=!0,Yg(e,t,r,s));return}let c;if(n===void 0&&(c=e.render(r),n=Ml(c)),l){l.adapter(n,c!=null?c:e.render(r));return}const u=ma(n);if(u!==null&&!o)return u;const d=u!=null?u:eS(n);if(c===void 0&&(c=e.render(r)),d.textContent=c,u!==null)return u;if(a){const h=document.head.querySelector(`meta[name="${a}"]`);if(h)return document.head.insertBefore(d,h),ch(e.els,d),d}return i?document.head.insertBefore(d,document.head.querySelector("style, link")):document.head.appendChild(d),ch(e.els,d),d}function oS(t){return Yg(this,this.instance,t)}function aS(t={}){const{id:e,ssr:n,props:r,head:i=!1,silent:s=!1,force:o=!1,anchorMetaName:a}=t;return sS(this.instance,this,e,r,i,s,o,a,n)}function lS(t={}){const{id:e}=t;iS(this.instance,this,e)}const Us=function(t,e,n,r){return{instance:t,$:e,props:n,children:r,els:[],render:oS,mount:aS,unmount:lS}},cS=function(t,e,n,r){return Array.isArray(e)?Us(t,{$:null},null,e):Array.isArray(n)?Us(t,e,null,n):Array.isArray(r)?Us(t,e,n,r):Us(t,e,n,null)};function uS(t={}){let e=null;const n={c:(...r)=>cS(n,...r),use:(r,...i)=>r.install(n,...i),find:ma,context:{},config:t,get __styleSheet(){if(!e){const r=document.createElement("style");return document.head.appendChild(r),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return n}function dS(t,e){if(t===void 0)return!1;if(e){const{context:{ids:n}}=e;return n.has(t)}return ma(t)!==null}function hS(t){let e=".",n="__",r="--",i;if(t){let p=t.blockPrefix;p&&(e=p),p=t.elementPrefix,p&&(n=p),p=t.modifierPrefix,p&&(r=p)}const s={install(p){i=p.c;const C=p.context;C.bem={},C.bem.b=null,C.bem.els=null}};function o(p){let C,b;return{before(k){C=k.bem.b,b=k.bem.els,k.bem.els=null},after(k){k.bem.b=C,k.bem.els=b},$({context:k,props:F}){return p=typeof p=="string"?p:p({context:k,props:F}),k.bem.b=p,`${(F==null?void 0:F.bPrefix)||e}${k.bem.b}`}}}function a(p){let C;return{before(b){C=b.bem.els},after(b){b.bem.els=C},$({context:b,props:k}){return p=typeof p=="string"?p:p({context:b,props:k}),b.bem.els=p.split(",").map(F=>F.trim()),b.bem.els.map(F=>`${(k==null?void 0:k.bPrefix)||e}${b.bem.b}${n}${F}`).join(", ")}}}function l(p){return{$({context:C,props:b}){p=typeof p=="string"?p:p({context:C,props:b});const k=p.split(",").map(H=>H.trim());function F(H){return k.map(q=>`&${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${H!==void 0?`${n}${H}`:""}${r}${q}`).join(", ")}const B=C.bem.els;return B!==null?F(B[0]):F()}}}function c(p){return{$({context:C,props:b}){p=typeof p=="string"?p:p({context:C,props:b});const k=C.bem.els;return`&:not(${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${k!==null&&k.length>0?`${n}${k[0]}`:""}${r}${p})`}}}return Object.assign(s,{cB:(...p)=>i(o(p[0]),p[1],p[2]),cE:(...p)=>i(a(p[0]),p[1],p[2]),cM:(...p)=>i(l(p[0]),p[1],p[2]),cNotM:(...p)=>i(c(p[0]),p[1],p[2])}),s}function to(t,e){return t+(e==="default"?"":e.replace(/^[a-z]/,n=>n.toUpperCase()))}to("abc","def");const fS="n",pS=`.${fS}-`,gS="__",mS="--",Xg=uS(),Jg=hS({blockPrefix:pS,elementPrefix:gS,modifierPrefix:mS});Xg.use(Jg);const{c:re,find:tN}=Xg,{cB:Oe,cE:V,cM:Et,cNotM:xi}=Jg;function uh(t){const e=de(t),n=ue(e.value);return Kt(e,r=>{n.value=r}),typeof t=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){t.set(r)}}}const _S={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function vS(t,e,n){if(t==="mousemoveoutside"){const r=i=>{e.contains(i.target)||n(i)};return{mousemove:r,touchstart:r}}else if(t==="clickoutside"){let r=!1;const i=o=>{r=!e.contains(o.target)},s=o=>{!r||e.contains(o.target)||n(o)};return{mousedown:i,mouseup:s,touchstart:i,touchend:s}}return console.error(`[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`),{}}function Qg(t,e,n){const r=_S[t];let i=r.get(e);i===void 0&&r.set(e,i=new WeakMap);let s=i.get(n);return s===void 0&&i.set(n,s=vS(t,e,n)),s}function bS(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=Qg(t,e,n);return Object.keys(i).forEach(s=>{tr(s,document,i[s],r)}),!0}return!1}function yS(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=Qg(t,e,n);return Object.keys(i).forEach(s=>{Zt(s,document,i[s],r)}),!0}return!1}function wS(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const t=new WeakMap,e=new WeakMap;function n(){t.set(this,!0)}function r(){t.set(this,!0),e.set(this,!0)}function i(E,S,D){const K=E[S];return E[S]=function(){return D.apply(E,arguments),K.apply(E,arguments)},E}function s(E,S){E[S]=Event.prototype[S]}const o=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var E;return(E=o.get(this))!==null&&E!==void 0?E:null}function c(E,S){a!==void 0&&Object.defineProperty(E,"currentTarget",{configurable:!0,enumerable:!0,get:S!=null?S:a.get})}const u={bubble:{},capture:{}},d={};function h(){const E=function(S){const{type:D,eventPhase:K,target:ee,bubbles:L}=S;if(K===2)return;const se=K===1?"capture":"bubble";let Ce=ee;const Re=[];for(;Ce===null&&(Ce=window),Re.push(Ce),Ce!==window;)Ce=Ce.parentNode||null;const fe=u.capture[D],ge=u.bubble[D];if(i(S,"stopPropagation",n),i(S,"stopImmediatePropagation",r),c(S,l),se==="capture"){if(fe===void 0)return;for(let oe=Re.length-1;oe>=0&&!t.has(S);--oe){const ze=Re[oe],bt=fe.get(ze);if(bt!==void 0){o.set(S,ze);for(const $e of bt){if(e.has(S))break;$e(S)}}if(oe===0&&!L&&ge!==void 0){const $e=ge.get(ze);if($e!==void 0)for(const ht of $e){if(e.has(S))break;ht(S)}}}}else if(se==="bubble"){if(ge===void 0)return;for(let oe=0;oe<Re.length&&!t.has(S);++oe){const ze=Re[oe],bt=ge.get(ze);if(bt!==void 0){o.set(S,ze);for(const $e of bt){if(e.has(S))break;$e(S)}}}}s(S,"stopPropagation"),s(S,"stopImmediatePropagation"),c(S)};return E.displayName="evtdUnifiedHandler",E}function _(){const E=function(S){const{type:D,eventPhase:K}=S;if(K!==2)return;const ee=d[D];ee!==void 0&&ee.forEach(L=>L(S))};return E.displayName="evtdUnifiedWindowEventHandler",E}const p=h(),C=_();function b(E,S){const D=u[E];return D[S]===void 0&&(D[S]=new Map,window.addEventListener(S,p,E==="capture")),D[S]}function k(E){return d[E]===void 0&&(d[E]=new Set,window.addEventListener(E,C)),d[E]}function F(E,S){let D=E.get(S);return D===void 0&&E.set(S,D=new Set),D}function B(E,S,D,K){const ee=u[S][D];if(ee!==void 0){const L=ee.get(E);if(L!==void 0&&L.has(K))return!0}return!1}function H(E,S){const D=d[E];return!!(D!==void 0&&D.has(S))}function q(E,S,D,K){let ee;if(typeof K=="object"&&K.once===!0?ee=fe=>{ve(E,S,ee,K),D(fe)}:ee=D,bS(E,S,ee,K))return;const se=K===!0||typeof K=="object"&&K.capture===!0?"capture":"bubble",Ce=b(se,E),Re=F(Ce,S);if(Re.has(ee)||Re.add(ee),S===window){const fe=k(E);fe.has(ee)||fe.add(ee)}}function ve(E,S,D,K){if(yS(E,S,D,K))return;const L=K===!0||typeof K=="object"&&K.capture===!0,se=L?"capture":"bubble",Ce=b(se,E),Re=F(Ce,S);if(S===window&&!B(S,L?"bubble":"capture",E,D)&&H(E,D)){const ge=d[E];ge.delete(D),ge.size===0&&(window.removeEventListener(E,C),d[E]=void 0)}Re.has(D)&&Re.delete(D),Re.size===0&&Ce.delete(S),Ce.size===0&&(window.removeEventListener(E,p,se==="capture"),u[se][E]=void 0)}return{on:q,off:ve}}const{on:tr,off:Zt}=wS();function CS(t,e){return Kt(t,n=>{n!==void 0&&(e.value=n)}),de(()=>t.value===void 0?e.value:t.value)}function ES(){const t=ue(!1);return yr(()=>{t.value=!0}),ec(t)}const TS=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function IS(){return TS}const Zg=Symbol("@css-render/vue3-ssr");function SS(t,e){return`<style cssr-id="${t}">
${e}
</style>`}function xS(t,e){const n=Ve(Zg,null);if(n===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:i}=n;i.has(t)||r!==null&&(i.add(t),r.push(SS(t,e)))}function _a(){const t=Ve(Zg,null);if(t!==null)return{adapter:xS,context:t}}function dh(t,e){console.error(`[vueuc/${t}]: ${e}`)}var ar=[],RS=function(){return ar.some(function(t){return t.activeTargets.length>0})},PS=function(){return ar.some(function(t){return t.skippedTargets.length>0})},hh="ResizeObserver loop completed with undelivered notifications.",AS=function(){var t;typeof ErrorEvent=="function"?t=new ErrorEvent("error",{message:hh}):(t=document.createEvent("Event"),t.initEvent("error",!1,!1),t.message=hh),window.dispatchEvent(t)},ls;(function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(ls||(ls={}));var lr=function(t){return Object.freeze(t)},kS=function(){function t(e,n){this.inlineSize=e,this.blockSize=n,lr(this)}return t}(),em=function(){function t(e,n,r,i){return this.x=e,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,lr(this)}return t.prototype.toJSON=function(){var e=this,n=e.x,r=e.y,i=e.top,s=e.right,o=e.bottom,a=e.left,l=e.width,c=e.height;return{x:n,y:r,top:i,right:s,bottom:o,left:a,width:l,height:c}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),uu=function(t){return t instanceof SVGElement&&"getBBox"in t},tm=function(t){if(uu(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,s=i.offsetWidth,o=i.offsetHeight;return!(s||o||t.getClientRects().length)},fh=function(t){var e,n;if(t instanceof Element)return!0;var r=(n=(e=t)===null||e===void 0?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},NS=function(t){switch(t.tagName){case"INPUT":if(t.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Wi=typeof window!="undefined"?window:{},Hs=new WeakMap,ph=/auto|scroll/,OS=/^tb|vertical/,MS=/msie|trident/i.test(Wi.navigator&&Wi.navigator.userAgent),Wt=function(t){return parseFloat(t||"0")},Hr=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=!1),new kS((n?e:t)||0,(n?t:e)||0)},gh=lr({devicePixelContentBoxSize:Hr(),borderBoxSize:Hr(),contentBoxSize:Hr(),contentRect:new em(0,0,0,0)}),nm=function(t,e){if(e===void 0&&(e=!1),Hs.has(t)&&!e)return Hs.get(t);if(tm(t))return Hs.set(t,gh),gh;var n=getComputedStyle(t),r=uu(t)&&t.ownerSVGElement&&t.getBBox(),i=!MS&&n.boxSizing==="border-box",s=OS.test(n.writingMode||""),o=!r&&ph.test(n.overflowY||""),a=!r&&ph.test(n.overflowX||""),l=r?0:Wt(n.paddingTop),c=r?0:Wt(n.paddingRight),u=r?0:Wt(n.paddingBottom),d=r?0:Wt(n.paddingLeft),h=r?0:Wt(n.borderTopWidth),_=r?0:Wt(n.borderRightWidth),p=r?0:Wt(n.borderBottomWidth),C=r?0:Wt(n.borderLeftWidth),b=d+c,k=l+u,F=C+_,B=h+p,H=a?t.offsetHeight-B-t.clientHeight:0,q=o?t.offsetWidth-F-t.clientWidth:0,ve=i?b+F:0,E=i?k+B:0,S=r?r.width:Wt(n.width)-ve-q,D=r?r.height:Wt(n.height)-E-H,K=S+b+q+F,ee=D+k+H+B,L=lr({devicePixelContentBoxSize:Hr(Math.round(S*devicePixelRatio),Math.round(D*devicePixelRatio),s),borderBoxSize:Hr(K,ee,s),contentBoxSize:Hr(S,D,s),contentRect:new em(d,l,S,D)});return Hs.set(t,L),L},rm=function(t,e,n){var r=nm(t,n),i=r.borderBoxSize,s=r.contentBoxSize,o=r.devicePixelContentBoxSize;switch(e){case ls.DEVICE_PIXEL_CONTENT_BOX:return o;case ls.BORDER_BOX:return i;default:return s}},DS=function(){function t(e){var n=nm(e);this.target=e,this.contentRect=n.contentRect,this.borderBoxSize=lr([n.borderBoxSize]),this.contentBoxSize=lr([n.contentBoxSize]),this.devicePixelContentBoxSize=lr([n.devicePixelContentBoxSize])}return t}(),im=function(t){if(tm(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},LS=function(){var t=1/0,e=[];ar.forEach(function(o){if(o.activeTargets.length!==0){var a=[];o.activeTargets.forEach(function(c){var u=new DS(c.target),d=im(c.target);a.push(u),c.lastReportedSize=rm(c.target,c.observedBox),d<t&&(t=d)}),e.push(function(){o.callback.call(o.observer,a,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var n=0,r=e;n<r.length;n++){var i=r[n];i()}return t},mh=function(t){ar.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(im(i.target)>t?n.activeTargets.push(i):n.skippedTargets.push(i))})})},FS=function(){var t=0;for(mh(t);RS();)t=LS(),mh(t);return PS()&&AS(),t>0},Wa,sm=[],$S=function(){return sm.splice(0).forEach(function(t){return t()})},BS=function(t){if(!Wa){var e=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return $S()}).observe(n,r),Wa=function(){n.textContent=""+(e?e--:e++)}}sm.push(t),Wa()},US=function(t){BS(function(){requestAnimationFrame(t)})},no=0,HS=function(){return!!no},zS=250,WS={attributes:!0,characterData:!0,childList:!0,subtree:!0},_h=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],vh=function(t){return t===void 0&&(t=0),Date.now()+t},ja=!1,jS=function(){function t(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return t.prototype.run=function(e){var n=this;if(e===void 0&&(e=zS),!ja){ja=!0;var r=vh(e);US(function(){var i=!1;try{i=FS()}finally{if(ja=!1,e=r-vh(),!HS())return;i?n.run(1e3):e>0?n.run(e):n.start()}})}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var e=this,n=function(){return e.observer&&e.observer.observe(document.body,WS)};document.body?n():Wi.addEventListener("DOMContentLoaded",n)},t.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),_h.forEach(function(n){return Wi.addEventListener(n,e.listener,!0)}))},t.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),_h.forEach(function(n){return Wi.removeEventListener(n,e.listener,!0)}),this.stopped=!0)},t}(),Dl=new jS,bh=function(t){!no&&t>0&&Dl.start(),no+=t,!no&&Dl.stop()},VS=function(t){return!uu(t)&&!NS(t)&&getComputedStyle(t).display==="inline"},qS=function(){function t(e,n){this.target=e,this.observedBox=n||ls.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e=rm(this.target,this.observedBox,!0);return VS(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),KS=function(){function t(e,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=n}return t}(),zs=new WeakMap,yh=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},Ws=function(){function t(){}return t.connect=function(e,n){var r=new KS(e,n);zs.set(e,r)},t.observe=function(e,n,r){var i=zs.get(e),s=i.observationTargets.length===0;yh(i.observationTargets,n)<0&&(s&&ar.push(i),i.observationTargets.push(new qS(n,r&&r.box)),bh(1),Dl.schedule())},t.unobserve=function(e,n){var r=zs.get(e),i=yh(r.observationTargets,n),s=r.observationTargets.length===1;i>=0&&(s&&ar.splice(ar.indexOf(r),1),r.observationTargets.splice(i,1),bh(-1))},t.disconnect=function(e){var n=this,r=zs.get(e);r.observationTargets.slice().forEach(function(i){return n.unobserve(e,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},t}(),GS=function(){function t(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ws.connect(this,e)}return t.prototype.observe=function(e,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!fh(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ws.observe(this,e,n)},t.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!fh(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ws.unobserve(this,e)},t.prototype.disconnect=function(){Ws.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();class YS{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new GS(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const n of e){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(e,n){this.elHandlersMap.set(e,n),this.observer.observe(e)}unregisterHandler(e){!this.elHandlersMap.has(e)||(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}var wh=new YS,Ll=Fe({name:"ResizeObserver",props:{onResize:Function},setup(t){return{registered:!1,handleResize(e){const{onResize:n}=t;n!==void 0&&n(e)}}},mounted(){const t=this.$el;if(t===void 0){dh("resize-observer","$el does not exist.");return}if(t.nextElementSibling!==t.nextSibling&&t.nodeType===3&&t.nodeValue!==""){dh("resize-observer","$el can not be observed (it may be a text node).");return}t.nextElementSibling!==null&&(wh.registerHandler(t.nextElementSibling,this.handleResize),this.registered=!0)},beforeUnmount(){this.registered&&wh.unregisterHandler(this.$el.nextElementSibling)},render(){return vb(this.$slots,"default")}});const Ch="n-form-item";function XS(t,{defaultSize:e="medium",mergedSize:n,mergedDisabled:r}={}){const i=Ve(Ch,null);Wr(Ch,null);const s=de(n?()=>n(i):()=>{const{size:l}=t;if(l)return l;if(i){const{mergedSize:c}=i;if(c.value!==void 0)return c.value}return e}),o=de(r?()=>r(i):()=>{const{disabled:l}=t;return l!==void 0?l:i?i.disabled.value:!1}),a=de(()=>{const{status:l}=t;return l||(i==null?void 0:i.mergedValidationStatus.value)});return Ko(()=>{i&&i.restoreValidation()}),{mergedSizeRef:s,mergedDisabledRef:o,mergedStatusRef:a,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var JS=typeof global=="object"&&global&&global.Object===Object&&global,om=JS,QS=typeof self=="object"&&self&&self.Object===Object&&self,ZS=om||QS||Function("return this")(),pi=ZS,ex=pi.Symbol,ti=ex,am=Object.prototype,tx=am.hasOwnProperty,nx=am.toString,Ri=ti?ti.toStringTag:void 0;function rx(t){var e=tx.call(t,Ri),n=t[Ri];try{t[Ri]=void 0;var r=!0}catch{}var i=nx.call(t);return r&&(e?t[Ri]=n:delete t[Ri]),i}var ix=Object.prototype,sx=ix.toString;function ox(t){return sx.call(t)}var ax="[object Null]",lx="[object Undefined]",Eh=ti?ti.toStringTag:void 0;function Ts(t){return t==null?t===void 0?lx:ax:Eh&&Eh in Object(t)?rx(t):ox(t)}function gi(t){return t!=null&&typeof t=="object"}var cx="[object Symbol]";function ux(t){return typeof t=="symbol"||gi(t)&&Ts(t)==cx}function dx(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var hx=Array.isArray,Oo=hx,fx=1/0,Th=ti?ti.prototype:void 0,Ih=Th?Th.toString:void 0;function lm(t){if(typeof t=="string")return t;if(Oo(t))return dx(t,lm)+"";if(ux(t))return Ih?Ih.call(t):"";var e=t+"";return e=="0"&&1/t==-fx?"-0":e}function Er(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function cm(t){return t}var px="[object AsyncFunction]",gx="[object Function]",mx="[object GeneratorFunction]",_x="[object Proxy]";function du(t){if(!Er(t))return!1;var e=Ts(t);return e==gx||e==mx||e==px||e==_x}var vx=pi["__core-js_shared__"],Va=vx,Sh=function(){var t=/[^.]+$/.exec(Va&&Va.keys&&Va.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function bx(t){return!!Sh&&Sh in t}var yx=Function.prototype,wx=yx.toString;function Cx(t){if(t!=null){try{return wx.call(t)}catch{}try{return t+""}catch{}}return""}var Ex=/[\\^$.*+?()[\]{}|]/g,Tx=/^\[object .+?Constructor\]$/,Ix=Function.prototype,Sx=Object.prototype,xx=Ix.toString,Rx=Sx.hasOwnProperty,Px=RegExp("^"+xx.call(Rx).replace(Ex,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ax(t){if(!Er(t)||bx(t))return!1;var e=du(t)?Px:Tx;return e.test(Cx(t))}function kx(t,e){return t==null?void 0:t[e]}function hu(t,e){var n=kx(t,e);return Ax(n)?n:void 0}var xh=Object.create,Nx=function(){function t(){}return function(e){if(!Er(e))return{};if(xh)return xh(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),Ox=Nx;function Mx(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Dx(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var Lx=800,Fx=16,$x=Date.now;function Bx(t){var e=0,n=0;return function(){var r=$x(),i=Fx-(r-n);if(n=r,i>0){if(++e>=Lx)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Ux(t){return function(){return t}}var Hx=function(){try{var t=hu(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Mo=Hx,zx=Mo?function(t,e){return Mo(t,"toString",{configurable:!0,enumerable:!1,value:Ux(e),writable:!0})}:cm,Wx=zx,jx=Bx(Wx),Vx=jx,qx=9007199254740991,Kx=/^(?:0|[1-9]\d*)$/;function um(t,e){var n=typeof t;return e=e==null?qx:e,!!e&&(n=="number"||n!="symbol"&&Kx.test(t))&&t>-1&&t%1==0&&t<e}function fu(t,e,n){e=="__proto__"&&Mo?Mo(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function va(t,e){return t===e||t!==t&&e!==e}var Gx=Object.prototype,Yx=Gx.hasOwnProperty;function Xx(t,e,n){var r=t[e];(!(Yx.call(t,e)&&va(r,n))||n===void 0&&!(e in t))&&fu(t,e,n)}function Jx(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?fu(n,a,l):Xx(n,a,l)}return n}var Rh=Math.max;function Qx(t,e,n){return e=Rh(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=Rh(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),Mx(t,this,a)}}function Zx(t,e){return Vx(Qx(t,e,cm),t+"")}var eR=9007199254740991;function dm(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=eR}function pu(t){return t!=null&&dm(t.length)&&!du(t)}function tR(t,e,n){if(!Er(n))return!1;var r=typeof e;return(r=="number"?pu(n)&&um(e,n.length):r=="string"&&e in n)?va(n[e],t):!1}function nR(t){return Zx(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&tR(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var rR=Object.prototype;function hm(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||rR;return t===n}function iR(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var sR="[object Arguments]";function Ph(t){return gi(t)&&Ts(t)==sR}var fm=Object.prototype,oR=fm.hasOwnProperty,aR=fm.propertyIsEnumerable,lR=Ph(function(){return arguments}())?Ph:function(t){return gi(t)&&oR.call(t,"callee")&&!aR.call(t,"callee")},Fl=lR;function cR(){return!1}var pm=typeof It=="object"&&It&&!It.nodeType&&It,Ah=pm&&typeof St=="object"&&St&&!St.nodeType&&St,uR=Ah&&Ah.exports===pm,kh=uR?pi.Buffer:void 0,dR=kh?kh.isBuffer:void 0,hR=dR||cR,gm=hR,fR="[object Arguments]",pR="[object Array]",gR="[object Boolean]",mR="[object Date]",_R="[object Error]",vR="[object Function]",bR="[object Map]",yR="[object Number]",wR="[object Object]",CR="[object RegExp]",ER="[object Set]",TR="[object String]",IR="[object WeakMap]",SR="[object ArrayBuffer]",xR="[object DataView]",RR="[object Float32Array]",PR="[object Float64Array]",AR="[object Int8Array]",kR="[object Int16Array]",NR="[object Int32Array]",OR="[object Uint8Array]",MR="[object Uint8ClampedArray]",DR="[object Uint16Array]",LR="[object Uint32Array]",Me={};Me[RR]=Me[PR]=Me[AR]=Me[kR]=Me[NR]=Me[OR]=Me[MR]=Me[DR]=Me[LR]=!0;Me[fR]=Me[pR]=Me[SR]=Me[gR]=Me[xR]=Me[mR]=Me[_R]=Me[vR]=Me[bR]=Me[yR]=Me[wR]=Me[CR]=Me[ER]=Me[TR]=Me[IR]=!1;function FR(t){return gi(t)&&dm(t.length)&&!!Me[Ts(t)]}function $R(t){return function(e){return t(e)}}var mm=typeof It=="object"&&It&&!It.nodeType&&It,ji=mm&&typeof St=="object"&&St&&!St.nodeType&&St,BR=ji&&ji.exports===mm,qa=BR&&om.process,UR=function(){try{var t=ji&&ji.require&&ji.require("util").types;return t||qa&&qa.binding&&qa.binding("util")}catch{}}(),Nh=UR,Oh=Nh&&Nh.isTypedArray,HR=Oh?$R(Oh):FR,_m=HR,zR=Object.prototype,WR=zR.hasOwnProperty;function jR(t,e){var n=Oo(t),r=!n&&Fl(t),i=!n&&!r&&gm(t),s=!n&&!r&&!i&&_m(t),o=n||r||i||s,a=o?iR(t.length,String):[],l=a.length;for(var c in t)(e||WR.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||um(c,l)))&&a.push(c);return a}function VR(t,e){return function(n){return t(e(n))}}function qR(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var KR=Object.prototype,GR=KR.hasOwnProperty;function YR(t){if(!Er(t))return qR(t);var e=hm(t),n=[];for(var r in t)r=="constructor"&&(e||!GR.call(t,r))||n.push(r);return n}function vm(t){return pu(t)?jR(t,!0):YR(t)}var XR=hu(Object,"create"),cs=XR;function JR(){this.__data__=cs?cs(null):{},this.size=0}function QR(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var ZR="__lodash_hash_undefined__",e1=Object.prototype,t1=e1.hasOwnProperty;function n1(t){var e=this.__data__;if(cs){var n=e[t];return n===ZR?void 0:n}return t1.call(e,t)?e[t]:void 0}var r1=Object.prototype,i1=r1.hasOwnProperty;function s1(t){var e=this.__data__;return cs?e[t]!==void 0:i1.call(e,t)}var o1="__lodash_hash_undefined__";function a1(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=cs&&e===void 0?o1:e,this}function vr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}vr.prototype.clear=JR;vr.prototype.delete=QR;vr.prototype.get=n1;vr.prototype.has=s1;vr.prototype.set=a1;function l1(){this.__data__=[],this.size=0}function ba(t,e){for(var n=t.length;n--;)if(va(t[n][0],e))return n;return-1}var c1=Array.prototype,u1=c1.splice;function d1(t){var e=this.__data__,n=ba(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():u1.call(e,n,1),--this.size,!0}function h1(t){var e=this.__data__,n=ba(e,t);return n<0?void 0:e[n][1]}function f1(t){return ba(this.__data__,t)>-1}function p1(t,e){var n=this.__data__,r=ba(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function hn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}hn.prototype.clear=l1;hn.prototype.delete=d1;hn.prototype.get=h1;hn.prototype.has=f1;hn.prototype.set=p1;var g1=hu(pi,"Map"),bm=g1;function m1(){this.size=0,this.__data__={hash:new vr,map:new(bm||hn),string:new vr}}function _1(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ya(t,e){var n=t.__data__;return _1(e)?n[typeof e=="string"?"string":"hash"]:n.map}function v1(t){var e=ya(this,t).delete(t);return this.size-=e?1:0,e}function b1(t){return ya(this,t).get(t)}function y1(t){return ya(this,t).has(t)}function w1(t,e){var n=ya(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function mi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mi.prototype.clear=m1;mi.prototype.delete=v1;mi.prototype.get=b1;mi.prototype.has=y1;mi.prototype.set=w1;function C1(t){return t==null?"":lm(t)}var E1=VR(Object.getPrototypeOf,Object),ym=E1,T1="[object Object]",I1=Function.prototype,S1=Object.prototype,wm=I1.toString,x1=S1.hasOwnProperty,R1=wm.call(Object);function P1(t){if(!gi(t)||Ts(t)!=T1)return!1;var e=ym(t);if(e===null)return!0;var n=x1.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&wm.call(n)==R1}function A1(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function k1(t,e,n){var r=t.length;return n=n===void 0?r:n,!e&&n>=r?t:A1(t,e,n)}var N1="\\ud800-\\udfff",O1="\\u0300-\\u036f",M1="\\ufe20-\\ufe2f",D1="\\u20d0-\\u20ff",L1=O1+M1+D1,F1="\\ufe0e\\ufe0f",$1="\\u200d",B1=RegExp("["+$1+N1+L1+F1+"]");function Cm(t){return B1.test(t)}function U1(t){return t.split("")}var Em="\\ud800-\\udfff",H1="\\u0300-\\u036f",z1="\\ufe20-\\ufe2f",W1="\\u20d0-\\u20ff",j1=H1+z1+W1,V1="\\ufe0e\\ufe0f",q1="["+Em+"]",$l="["+j1+"]",Bl="\\ud83c[\\udffb-\\udfff]",K1="(?:"+$l+"|"+Bl+")",Tm="[^"+Em+"]",Im="(?:\\ud83c[\\udde6-\\uddff]){2}",Sm="[\\ud800-\\udbff][\\udc00-\\udfff]",G1="\\u200d",xm=K1+"?",Rm="["+V1+"]?",Y1="(?:"+G1+"(?:"+[Tm,Im,Sm].join("|")+")"+Rm+xm+")*",X1=Rm+xm+Y1,J1="(?:"+[Tm+$l+"?",$l,Im,Sm,q1].join("|")+")",Q1=RegExp(Bl+"(?="+Bl+")|"+J1+X1,"g");function Z1(t){return t.match(Q1)||[]}function eP(t){return Cm(t)?Z1(t):U1(t)}function tP(t){return function(e){e=C1(e);var n=Cm(e)?eP(e):void 0,r=n?n[0]:e.charAt(0),i=n?k1(n,1).join(""):e.slice(1);return r[t]()+i}}var nP=tP("toUpperCase"),rP=nP;function iP(){this.__data__=new hn,this.size=0}function sP(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function oP(t){return this.__data__.get(t)}function aP(t){return this.__data__.has(t)}var lP=200;function cP(t,e){var n=this.__data__;if(n instanceof hn){var r=n.__data__;if(!bm||r.length<lP-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new mi(r)}return n.set(t,e),this.size=n.size,this}function _i(t){var e=this.__data__=new hn(t);this.size=e.size}_i.prototype.clear=iP;_i.prototype.delete=sP;_i.prototype.get=oP;_i.prototype.has=aP;_i.prototype.set=cP;var Pm=typeof It=="object"&&It&&!It.nodeType&&It,Mh=Pm&&typeof St=="object"&&St&&!St.nodeType&&St,uP=Mh&&Mh.exports===Pm,Dh=uP?pi.Buffer:void 0,Lh=Dh?Dh.allocUnsafe:void 0;function dP(t,e){if(e)return t.slice();var n=t.length,r=Lh?Lh(n):new t.constructor(n);return t.copy(r),r}var hP=pi.Uint8Array,Fh=hP;function fP(t){var e=new t.constructor(t.byteLength);return new Fh(e).set(new Fh(t)),e}function pP(t,e){var n=e?fP(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function gP(t){return typeof t.constructor=="function"&&!hm(t)?Ox(ym(t)):{}}function mP(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var l=o[t?a:++i];if(n(s[l],l,s)===!1)break}return e}}var _P=mP(),vP=_P;function Ul(t,e,n){(n!==void 0&&!va(t[e],n)||n===void 0&&!(e in t))&&fu(t,e,n)}function bP(t){return gi(t)&&pu(t)}function Hl(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}function yP(t){return Jx(t,vm(t))}function wP(t,e,n,r,i,s,o){var a=Hl(t,n),l=Hl(e,n),c=o.get(l);if(c){Ul(t,n,c);return}var u=s?s(a,l,n+"",t,e,o):void 0,d=u===void 0;if(d){var h=Oo(l),_=!h&&gm(l),p=!h&&!_&&_m(l);u=l,h||_||p?Oo(a)?u=a:bP(a)?u=Dx(a):_?(d=!1,u=dP(l,!0)):p?(d=!1,u=pP(l,!0)):u=[]:P1(l)||Fl(l)?(u=a,Fl(a)?u=yP(a):(!Er(a)||du(a))&&(u=gP(l))):d=!1}d&&(o.set(l,u),i(u,l,r,s,o),o.delete(l)),Ul(t,n,u)}function Am(t,e,n,r,i){t!==e&&vP(e,function(s,o){if(i||(i=new _i),Er(s))wP(t,e,o,n,Am,r,i);else{var a=r?r(Hl(t,o),s,o+"",t,e,i):void 0;a===void 0&&(a=s),Ul(t,o,a)}},vm)}var CP=nR(function(t,e,n){Am(t,e,n)}),js=CP,wa={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"};const{fontSize:EP,fontFamily:TP,lineHeight:IP}=wa;var km=re("body",`
 margin: 0;
 font-size: ${EP};
 font-family: ${TP};
 line-height: ${IP};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[re("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);const Is="n-config-provider",us="naive-ui-style";function Ss(t,e,n,r,i,s){const o=_a();if(n){const c=()=>{const u=s==null?void 0:s.value;n.mount({id:u===void 0?e:u+e,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:us,ssr:o}),km.mount({id:"n-global",head:!0,anchorMetaName:us,ssr:o})};o?c():qo(c)}const a=Ve(Is,null);return de(()=>{var c;const{theme:{common:u,self:d,peers:h={}}={},themeOverrides:_={},builtinThemeOverrides:p={}}=i,{common:C,peers:b}=_,{common:k=void 0,[t]:{common:F=void 0,self:B=void 0,peers:H={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:q=void 0,[t]:ve={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:E,peers:S={}}=ve,D=js({},u||F||k||r.common,q,E,C),K=js((c=d||B||r.self)===null||c===void 0?void 0:c(D),p,ve,_);return{common:D,self:K,peers:js({},r.peers,H,h),peerOverrides:js({},S,b)}})}Ss.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const SP="n";function Nm(t={},e={defaultBordered:!0}){const n=Ve(Is,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:de(()=>{var r,i;const{bordered:s}=t;return s!==void 0?s:(i=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:e.defaultBordered)!==null&&i!==void 0?i:!0}),mergedClsPrefixRef:de(()=>(n==null?void 0:n.mergedClsPrefixRef.value)||SP),namespaceRef:de(()=>n==null?void 0:n.mergedNamespaceRef.value)}}const xP={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)"}};var RP=xP;function Ka(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}function Pi(t){return function(e,n){var r=n||{},i=r.context?String(r.context):"standalone",s;if(i==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=r.width?String(r.width):o;s=t.formattingValues[a]||t.formattingValues[o]}else{var l=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;s=t.values[c]||t.values[l]}var u=t.argumentCallback?t.argumentCallback(e):e;return s[u]}}function PP(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}function Ai(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?kP(a,function(d){return d.test(o)}):AP(a,function(d){return d.test(o)}),c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;var u=e.slice(o.length);return{value:c,rest:u}}}function AP(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function kP(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var NP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},OP=function(t,e,n){var r,i=NP[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},MP=OP,DP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},LP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},FP={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$P={date:Ka({formats:DP,defaultWidth:"full"}),time:Ka({formats:LP,defaultWidth:"full"}),dateTime:Ka({formats:FP,defaultWidth:"full"})},BP=$P,UP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},HP=function(t,e,n,r){return UP[t]},zP=HP,WP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},VP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},qP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},KP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},GP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},YP=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},XP={ordinalNumber:YP,era:Pi({values:WP,defaultWidth:"wide"}),quarter:Pi({values:jP,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Pi({values:VP,defaultWidth:"wide"}),day:Pi({values:qP,defaultWidth:"wide"}),dayPeriod:Pi({values:KP,defaultWidth:"wide",formattingValues:GP,defaultFormattingWidth:"wide"})},JP=XP,QP=/^(\d+)(th|st|nd|rd)?/i,ZP=/\d+/i,eA={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},tA={any:[/^b/i,/^(a|c)/i]},nA={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},rA={any:[/1/i,/2/i,/3/i,/4/i]},iA={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},sA={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},oA={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},aA={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},lA={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},cA={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},uA={ordinalNumber:PP({matchPattern:QP,parsePattern:ZP,valueCallback:function(t){return parseInt(t,10)}}),era:Ai({matchPatterns:eA,defaultMatchWidth:"wide",parsePatterns:tA,defaultParseWidth:"any"}),quarter:Ai({matchPatterns:nA,defaultMatchWidth:"wide",parsePatterns:rA,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Ai({matchPatterns:iA,defaultMatchWidth:"wide",parsePatterns:sA,defaultParseWidth:"any"}),day:Ai({matchPatterns:oA,defaultMatchWidth:"wide",parsePatterns:aA,defaultParseWidth:"any"}),dayPeriod:Ai({matchPatterns:lA,defaultMatchWidth:"any",parsePatterns:cA,defaultParseWidth:"any"})},dA=uA,hA={code:"en-US",formatDistance:MP,formatLong:BP,formatRelative:zP,localize:JP,match:dA,options:{weekStartsOn:0,firstWeekContainsDate:1}},fA=hA;const pA={name:"en-US",locale:fA};var gA=pA;function mA(t){const{mergedLocaleRef:e,mergedDateLocaleRef:n}=Ve(Is,null)||{},r=de(()=>{var s,o;return(o=(s=e==null?void 0:e.value)===null||s===void 0?void 0:s[t])!==null&&o!==void 0?o:RP[t]});return{dateLocaleRef:de(()=>{var s;return(s=n==null?void 0:n.value)!==null&&s!==void 0?s:gA}),localeRef:r}}function gu(t,e,n){if(!e)return;const r=_a(),i=()=>{const s=n==null?void 0:n.value;e.mount({id:s===void 0?t:s+t,head:!0,anchorMetaName:us,props:{bPrefix:s?`.${s}-`:void 0},ssr:r}),km.mount({id:"n-global",head:!0,anchorMetaName:us,ssr:r})};r?i():qo(i)}function Om(t,e,n,r){var i;n||KI("useThemeClass","cssVarsRef is not passed");const s=(i=Ve(Is,null))===null||i===void 0?void 0:i.mergedThemeHashRef,o=ue(""),a=_a();let l;const c=`__${t}`,u=()=>{let d=c;const h=e?e.value:void 0,_=s==null?void 0:s.value;_&&(d+="-"+_),h&&(d+="-"+h);const{themeOverrides:p,builtinThemeOverrides:C}=r;p&&(d+="-"+Ml(JSON.stringify(p))),C&&(d+="-"+Ml(JSON.stringify(C))),o.value=d,l=()=>{const b=n.value;let k="";for(const F in b)k+=`${F}: ${b[F]};`;re(`.${d}`,k).mount({id:d,ssr:a}),l=void 0}};return jr(()=>{u()}),{themeClass:o,onRender:()=>{l==null||l()}}}function _A(t,e){return Fe({name:rP(t),setup(){var n;const r=(n=Ve(Is,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var i;const s=(i=r==null?void 0:r.value)===null||i===void 0?void 0:i[t];return s?s():e}}})}var vA=Fe({name:"Eye",render(){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},O("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),O("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),bA=Fe({name:"EyeOff",render(){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},O("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),O("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),O("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),O("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),O("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),yA=Fe({name:"ChevronDown",render(){return O("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),wA=_A("clear",O("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},O("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},O("g",{fill:"currentColor","fill-rule":"nonzero"},O("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Mm=Fe({name:"BaseIconSwitchTransition",setup(t,{slots:e}){const n=ES();return()=>O(Qi,{name:"icon-switch-transition",appear:n.value},e)}}),CA=Oe("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[re("svg",{height:"1em",width:"1em"})]),mu=Fe({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(t){gu("-base-icon",CA,Bo(t,"clsPrefix"))},render(){return O("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});const{cubicBezierEaseInOut:EA}=wa;function zl({originalTransform:t="",left:e=0,top:n=0,transition:r=`all .3s ${EA} !important`}={}){return[re("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:t+" scale(0.75)",left:e,top:n,opacity:0}),re("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:e,top:n,opacity:1}),re("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:n,transition:r})]}var TA=re([re("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),re("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),re("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),re("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),Oe("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[V("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[zl()]),V("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[V("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),V("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[V("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[V("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),V("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[V("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),V("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[V("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),V("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[zl({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),IA=Fe({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(t){gu("-base-loading",TA,Bo(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:e,strokeWidth:n,stroke:r,scale:i}=this,s=e/i;return O("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},O(Mm,null,{default:()=>this.show?O("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},O("div",{class:`${t}-base-loading__container`},O("div",{class:`${t}-base-loading__container-layer`},O("div",{class:`${t}-base-loading__container-layer-left`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),O("div",{class:`${t}-base-loading__container-layer-patch`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),O("div",{class:`${t}-base-loading__container-layer-right`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e})))))):O("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}});const j={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.52",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},SA=_r(j.neutralBase),Dm=_r(j.neutralInvertBase),xA="rgba("+Dm.slice(0,3).join(", ")+", ";function $h(t){return xA+String(t)+")"}function st(t){const e=Array.from(Dm);return e[3]=Number(t),VI(SA,e)}const RA=Object.assign(Object.assign({name:"common"},wa),{baseColor:j.neutralBase,primaryColor:j.primaryDefault,primaryColorHover:j.primaryHover,primaryColorPressed:j.primaryActive,primaryColorSuppl:j.primarySuppl,infoColor:j.infoDefault,infoColorHover:j.infoHover,infoColorPressed:j.infoActive,infoColorSuppl:j.infoSuppl,successColor:j.successDefault,successColorHover:j.successHover,successColorPressed:j.successActive,successColorSuppl:j.successSuppl,warningColor:j.warningDefault,warningColorHover:j.warningHover,warningColorPressed:j.warningActive,warningColorSuppl:j.warningSuppl,errorColor:j.errorDefault,errorColorHover:j.errorHover,errorColorPressed:j.errorActive,errorColorSuppl:j.errorSuppl,textColorBase:j.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:st(j.alpha4),placeholderColor:st(j.alpha4),placeholderColorDisabled:st(j.alpha5),iconColor:st(j.alpha4),iconColorHover:Fs(st(j.alpha4),{lightness:.75}),iconColorPressed:Fs(st(j.alpha4),{lightness:.9}),iconColorDisabled:st(j.alpha5),opacity1:j.alpha1,opacity2:j.alpha2,opacity3:j.alpha3,opacity4:j.alpha4,opacity5:j.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeColor:st(Number(j.alphaClose)),closeColorHover:st(Number(j.alphaClose)*1.25),closeColorPressed:st(Number(j.alphaClose)*.8),closeColorDisabled:st(j.alpha4),clearColor:st(j.alpha4),clearColorHover:Fs(st(j.alpha4),{lightness:.75}),clearColorPressed:Fs(st(j.alpha4),{lightness:.9}),scrollbarColor:$h(j.alphaScrollbar),scrollbarColorHover:$h(j.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:st(j.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:j.neutralPopover,tableColor:j.neutralCard,cardColor:j.neutralCard,modalColor:j.neutralModal,bodyColor:j.neutralBody,tagColor:"rgb(250, 250, 252)",avatarColor:st(j.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:st(j.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:j.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"});var Lm=RA;const PA=t=>{const{scrollbarColor:e,scrollbarColorHover:n}=t;return{color:e,colorHover:n}},AA={name:"Scrollbar",common:Lm,self:PA};var kA=AA;const{cubicBezierEaseInOut:Bh}=wa;function NA({name:t="fade-in",enterDuration:e="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=Bh,leaveCubicBezier:i=Bh}={}){return[re(`&.${t}-transition-enter-active`,{transition:`all ${e} ${r}!important`}),re(`&.${t}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),re(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0}),re(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`,{opacity:1})]}var OA=Oe("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[re(">",[Oe("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[re("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),re(">",[Oe("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])]),Oe("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 `,[Et("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[re(">",[V("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Et("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[re(">",[V("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Et("disabled",[re(">",[V("scrollbar",{pointerEvents:"none"})])]),re(">",[V("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[NA(),re("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]);const MA=Object.assign(Object.assign({},Ss.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function}),DA=Fe({name:"Scrollbar",props:MA,inheritAttrs:!1,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=Nm(t),r=ue(null),i=ue(null),s=ue(null),o=ue(null),a=ue(null),l=ue(null),c=ue(null),u=ue(null),d=ue(null),h=ue(null),_=ue(null),p=ue(0),C=ue(0),b=ue(!1),k=ue(!1);let F=!1,B=!1,H,q,ve=0,E=0,S=0,D=0;const K=IS(),ee=de(()=>{const{value:I}=u,{value:$}=l,{value:Y}=h;return I===null||$===null||Y===null?0:Math.min(I,Y*I/$+t.size*1.5)}),L=de(()=>`${ee.value}px`),se=de(()=>{const{value:I}=d,{value:$}=c,{value:Y}=_;return I===null||$===null||Y===null?0:Y*I/$+t.size*1.5}),Ce=de(()=>`${se.value}px`),Re=de(()=>{const{value:I}=u,{value:$}=p,{value:Y}=l,{value:_e}=h;if(I===null||Y===null||_e===null)return 0;{const Le=Y-I;return Le?$/Le*(_e-ee.value):0}}),fe=de(()=>`${Re.value}px`),ge=de(()=>{const{value:I}=d,{value:$}=C,{value:Y}=c,{value:_e}=_;if(I===null||Y===null||_e===null)return 0;{const Le=Y-I;return Le?$/Le*(_e-se.value):0}}),oe=de(()=>`${ge.value}px`),ze=de(()=>{const{value:I}=u,{value:$}=l;return I!==null&&$!==null&&$>I}),bt=de(()=>{const{value:I}=d,{value:$}=c;return I!==null&&$!==null&&$>I}),$e=de(()=>{const{container:I}=t;return I?I():i.value}),ht=de(()=>{const{content:I}=t;return I?I():s.value}),ft=M,Tr=I=>{const{onResize:$}=t;$&&$(I),M()},vi=(I,$)=>{if(!t.scrollable)return;if(typeof I=="number"){Je(I,$!=null?$:0,0,!1,"auto");return}const{left:Y,top:_e,index:Le,elSize:we,position:Be,behavior:Ie,el:Mt,debounce:pn=!0}=I;(Y!==void 0||_e!==void 0)&&Je(Y!=null?Y:0,_e!=null?_e:0,0,!1,Ie),Mt!==void 0?Je(0,Mt.offsetTop,Mt.offsetHeight,pn,Ie):Le!==void 0&&we!==void 0?Je(0,Le*we,we,pn,Ie):Be==="bottom"?Je(0,Number.MAX_SAFE_INTEGER,0,!1,Ie):Be==="top"&&Je(0,0,0,!1,Ie)},bi=(I,$)=>{if(!t.scrollable)return;const{value:Y}=$e;!Y||(typeof I=="object"?Y.scrollBy(I):Y.scrollBy(I,$||0))};function Je(I,$,Y,_e,Le){const{value:we}=$e;if(!!we){if(_e){const{scrollTop:Be,offsetHeight:Ie}=we;if($>Be){$+Y<=Be+Ie||we.scrollTo({left:I,top:$+Y-Ie,behavior:Le});return}}we.scrollTo({left:I,top:$,behavior:Le})}}function fn(){f(),g(),M()}function Ir(){At()}function At(){Fn(),$n()}function Fn(){q!==void 0&&window.clearTimeout(q),q=window.setTimeout(()=>{k.value=!1},t.duration)}function $n(){H!==void 0&&window.clearTimeout(H),H=window.setTimeout(()=>{b.value=!1},t.duration)}function f(){H!==void 0&&window.clearTimeout(H),b.value=!0}function g(){q!==void 0&&window.clearTimeout(q),k.value=!0}function v(I){const{onScroll:$}=t;$&&$(I),y()}function y(){const{value:I}=$e;I&&(p.value=I.scrollTop,C.value=I.scrollLeft)}function w(){const{value:I}=ht;I&&(l.value=I.offsetHeight,c.value=I.offsetWidth);const{value:$}=$e;$&&(u.value=$.offsetHeight,d.value=$.offsetWidth);const{value:Y}=a,{value:_e}=o;Y&&(_.value=Y.offsetWidth),_e&&(h.value=_e.offsetHeight)}function A(){const{value:I}=$e;I&&(p.value=I.scrollTop,C.value=I.scrollLeft,u.value=I.offsetHeight,d.value=I.offsetWidth,l.value=I.scrollHeight,c.value=I.scrollWidth);const{value:$}=a,{value:Y}=o;$&&(_.value=$.offsetWidth),Y&&(h.value=Y.offsetHeight)}function M(){!t.scrollable||(t.useUnifiedContainer?A():(w(),y()))}function R(I){var $;return!(!(($=r.value)===null||$===void 0)&&$.contains(I.target))}function N(I){I.preventDefault(),I.stopPropagation(),B=!0,tr("mousemove",window,T,!0),tr("mouseup",window,W,!0),E=C.value,S=I.clientX}function T(I){if(!B)return;H!==void 0&&window.clearTimeout(H),q!==void 0&&window.clearTimeout(q);const{value:$}=d,{value:Y}=c,{value:_e}=se;if($===null||Y===null)return;const we=(I.clientX-S)*(Y-$)/($-_e),Be=Y-$;let Ie=E+we;Ie=Math.min(Be,Ie),Ie=Math.max(Ie,0);const{value:Mt}=$e;if(Mt){Mt.scrollLeft=Ie;const{internalOnUpdateScrollLeft:pn}=t;pn&&pn(Ie)}}function W(I){I.preventDefault(),I.stopPropagation(),Zt("mousemove",window,T,!0),Zt("mouseup",window,W,!0),B=!1,M(),R(I)&&At()}function U(I){I.preventDefault(),I.stopPropagation(),F=!0,tr("mousemove",window,z,!0),tr("mouseup",window,G,!0),ve=p.value,D=I.clientY}function z(I){if(!F)return;H!==void 0&&window.clearTimeout(H),q!==void 0&&window.clearTimeout(q);const{value:$}=u,{value:Y}=l,{value:_e}=ee;if($===null||Y===null)return;const we=(I.clientY-D)*(Y-$)/($-_e),Be=Y-$;let Ie=ve+we;Ie=Math.min(Be,Ie),Ie=Math.max(Ie,0);const{value:Mt}=$e;Mt&&(Mt.scrollTop=Ie)}function G(I){I.preventDefault(),I.stopPropagation(),Zt("mousemove",window,z,!0),Zt("mouseup",window,G,!0),F=!1,M(),R(I)&&At()}jr(()=>{const{value:I}=bt,{value:$}=ze,{value:Y}=e,{value:_e}=a,{value:Le}=o;_e&&(I?_e.classList.remove(`${Y}-scrollbar-rail--disabled`):_e.classList.add(`${Y}-scrollbar-rail--disabled`)),Le&&($?Le.classList.remove(`${Y}-scrollbar-rail--disabled`):Le.classList.add(`${Y}-scrollbar-rail--disabled`))}),yr(()=>{t.container||M()}),Ko(()=>{H!==void 0&&window.clearTimeout(H),q!==void 0&&window.clearTimeout(q),Zt("mousemove",window,z,!0),Zt("mouseup",window,G,!0)});const ce=Ss("Scrollbar","-scrollbar",OA,kA,t,e),Ee=de(()=>{const{common:{cubicBezierEaseInOut:I,scrollbarBorderRadius:$,scrollbarHeight:Y,scrollbarWidth:_e},self:{color:Le,colorHover:we}}=ce.value;return{"--n-scrollbar-bezier":I,"--n-scrollbar-color":Le,"--n-scrollbar-color-hover":we,"--n-scrollbar-border-radius":$,"--n-scrollbar-width":_e,"--n-scrollbar-height":Y}}),pe=n?Om("scrollbar",void 0,Ee,t):void 0;return Object.assign(Object.assign({},{scrollTo:vi,scrollBy:bi,sync:M,syncUnifiedContainer:A,handleMouseEnterWrapper:fn,handleMouseLeaveWrapper:Ir}),{mergedClsPrefix:e,containerScrollTop:p,wrapperRef:r,containerRef:i,contentRef:s,yRailRef:o,xRailRef:a,needYBar:ze,needXBar:bt,yBarSizePx:L,xBarSizePx:Ce,yBarTopPx:fe,xBarLeftPx:oe,isShowXBar:b,isShowYBar:k,isIos:K,handleScroll:v,handleContentResize:ft,handleContainerResize:Tr,handleYScrollMouseDown:U,handleXScrollMouseDown:N,cssVars:n?void 0:Ee,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender})},render(){var t;const{$slots:e,mergedClsPrefix:n,triggerDisplayManually:r}=this;if(!this.scrollable)return(t=e.default)===null||t===void 0?void 0:t.call(e);const i=()=>{var s,o;return(s=this.onRender)===null||s===void 0||s.call(this),O("div",Ff(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(o=e.default)===null||o===void 0?void 0:o.call(e):O("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},O(Ll,{onResize:this.handleContentResize},{default:()=>O("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},e)})),O("div",{ref:"yRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--vertical`,style:this.horizontalRailStyle,"aria-hidden":!0},O(Qi,{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?O("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),O("div",{ref:"xRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--horizontal`,style:this.verticalRailStyle,"aria-hidden":!0},O(Qi,{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?O("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,left:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])};return this.container?i():O(Ll,{onResize:this.handleContainerResize},{default:i})}});var LA=DA;function FA(t,e,n){if(!e)return;const r=_a(),i=de(()=>{const{value:o}=e;if(!o)return;const a=o[t];if(!!a)return a}),s=()=>{jr(()=>{const{value:o}=n,a=`${o}${t}Rtl`;if(dS(a,r))return;const{value:l}=i;!l||l.style.mount({id:a,head:!0,anchorMetaName:us,props:{bPrefix:o?`.${o}-`:void 0},ssr:r})})};return r?s():qo(s),i}var $A=Oe("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[re(">",[V("clear",`
 font-size: var(--n-clear-size);
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 `,[re("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),re("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),V("placeholder",`
 display: flex;
 `),V("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[zl({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Wl=Fe({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return gu("-base-clear",$A,Bo(t,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:t}=this;return O("div",{class:`${t}-base-clear`},O(Mm,null,{default:()=>{var e,n;return this.show?O(mu,{clsPrefix:t,key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},{default:()=>O(wA,null)}):O("div",{key:"icon",class:`${t}-base-clear__placeholder`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}))}}),BA=Fe({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:e}){return()=>{const{clsPrefix:n}=t;return O(IA,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?O(Wl,{clsPrefix:n,show:t.showClear,onClear:t.onClear},{default:()=>O(mu,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>eo(e.default,()=>[O(yA,null)])})}):null})}}}),UA={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const HA=t=>{const{textColor2:e,textColor3:n,textColorDisabled:r,primaryColor:i,primaryColorHover:s,inputColor:o,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:u,errorColor:d,errorColorHover:h,borderRadius:_,lineHeight:p,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:k,fontSizeLarge:F,heightTiny:B,heightSmall:H,heightMedium:q,heightLarge:ve,actionColor:E,clearColor:S,clearColorHover:D,clearColorPressed:K,placeholderColor:ee,placeholderColorDisabled:L,iconColor:se,iconColorDisabled:Ce,iconColorHover:Re,iconColorPressed:fe}=t;return Object.assign(Object.assign({},UA),{countTextColor:n,heightTiny:B,heightSmall:H,heightMedium:q,heightLarge:ve,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:k,fontSizeLarge:F,lineHeight:p,lineHeightTextarea:p,borderRadius:_,iconSize:"16px",groupLabelColor:E,groupLabelTextColor:e,textColor:e,textColorDisabled:r,textDecorationColor:e,caretColor:i,placeholderColor:ee,placeholderColorDisabled:L,color:o,colorDisabled:a,colorFocus:o,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${s}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${s}`,boxShadowFocus:`0 0 0 2px ${za(i,{alpha:.2})}`,loadingColor:i,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${u}`,colorFocusWarning:o,borderFocusWarning:`1px solid ${u}`,boxShadowFocusWarning:`0 0 0 2px ${za(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${h}`,colorFocusError:o,borderFocusError:`1px solid ${h}`,boxShadowFocusError:`0 0 0 2px ${za(d,{alpha:.2})}`,caretColorError:d,clearColor:S,clearColorHover:D,clearColorPressed:K,iconColor:se,iconColorDisabled:Ce,iconColorHover:Re,iconColorPressed:fe,suffixTextColor:e})},zA={name:"Input",common:Lm,self:HA};var WA=zA;const Fm="n-input";function jA(t){let e=0;for(const n of t)e++;return e}function Vs(t){return["",void 0,null].includes(t)}var Uh=Fe({name:"InputWordCount",setup(t,{slots:e}){const{mergedValueRef:n,maxlengthRef:r,mergedClsPrefixRef:i}=Ve(Fm),s=de(()=>{const{value:o}=n;return o===null||Array.isArray(o)?0:jA(o)});return()=>{const{value:o}=r,{value:a}=n;return O("span",{class:`${i.value}-input-word-count`},GI(e.default,{value:a===null||Array.isArray(a)?"":a},()=>[o===void 0?s.value:`${s.value} / ${o}`]))}}}),VA=Oe("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[V("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),V("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),V("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[re("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),re("&::placeholder","color: #0000;"),re("&:-webkit-autofill ~",[V("placeholder","display: none;")])]),Et("round",[xi("textarea","border-radius: calc(var(--n-height) / 2);")]),V("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[re("span",`
 width: 100%;
 display: inline-block;
 `)]),Et("textarea",[V("placeholder","overflow: visible;")]),xi("autosize","width: 100%;"),Et("autosize",[V("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),Oe("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),V("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),V("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[re("+",[V("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),xi("textarea",[V("placeholder","white-space: nowrap;")]),V("eye",`
 transition: color .3s var(--n-bezier);
 `),Et("textarea","width: 100%;",[Oe("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),Et("resizable",[Oe("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),V("textarea",`
 position: static;
 `),V("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),V("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),Et("pair",[V("input-el, placeholder","text-align: center;"),V("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[Oe("icon",`
 color: var(--n-icon-color);
 `),Oe("base-icon",`
 color: var(--n-icon-color);
 `)])]),Et("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[V("border","border: var(--n-border-disabled);"),V("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),V("placeholder","color: var(--n-placeholder-color-disabled);"),V("separator","color: var(--n-text-color-disabled);",[Oe("icon",`
 color: var(--n-icon-color-disabled);
 `),Oe("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),V("suffix, prefix","color: var(--n-text-color-disabled);",[Oe("icon",`
 color: var(--n-icon-color-disabled);
 `),Oe("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),xi("disabled",[V("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[re("&:hover",`
 color: var(--n-icon-color-hover);
 `),re("&:active",`
 color: var(--n-icon-color-pressed);
 `),Oe("icon",[re("&:hover",`
 color: var(--n-icon-color-hover);
 `),re("&:active",`
 color: var(--n-icon-color-pressed);
 `)])]),re("&:hover",[V("state-border","border: var(--n-border-hover);")]),Et("focus","background-color: var(--n-color-focus);",[V("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),V("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),V("state-border",`
 border-color: #0000;
 z-index: 1;
 `),V("prefix","margin-right: 4px;"),V("suffix",`
 margin-left: 4px;
 `),V("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[Oe("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),Oe("base-clear",`
 font-size: var(--n-icon-size);
 `,[V("placeholder",[Oe("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),re(">",[Oe("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),Oe("base-icon",`
 font-size: var(--n-icon-size);
 `)]),Oe("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>Et(`${t}-status`,[xi("disabled",[Oe("base-loading",`
 color: var(--n-loading-color-${t})
 `),V("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),V("state-border",`
 border: var(--n-border-${t});
 `),re("&:hover",[V("state-border",`
 border: var(--n-border-hover-${t});
 `)]),re("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[V("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),Et("focus",`
 background-color: var(--n-color-focus-${t});
 `,[V("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]);const qA=Object.assign(Object.assign({},Ss.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var KA=Fe({name:"Input",props:qA,setup(t){const{mergedClsPrefixRef:e,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Nm(t),s=Ss("Input","-input",VA,WA,t,e),o=ue(null),a=ue(null),l=ue(null),c=ue(null),u=ue(null),d=ue(null),h=ue(null),{localeRef:_}=mA("Input"),p=ue(t.defaultValue),C=Bo(t,"value"),b=CS(C,p),k=XS(t),{mergedSizeRef:F,mergedDisabledRef:B,mergedStatusRef:H}=k,q=ue(!1),ve=ue(!1),E=ue(!1),S=ue(!1);let D=null;const K=de(()=>{const{placeholder:m,pair:x}=t;return x?Array.isArray(m)?m:m===void 0?["",""]:[m,m]:m===void 0?[_.value.placeholder]:[m]}),ee=de(()=>{const{value:m}=E,{value:x}=b,{value:J}=K;return!m&&(Vs(x)||Array.isArray(x)&&Vs(x[0]))&&J[0]}),L=de(()=>{const{value:m}=E,{value:x}=b,{value:J}=K;return!m&&J[1]&&(Vs(x)||Array.isArray(x)&&Vs(x[1]))}),se=uh(()=>t.internalForceFocus||q.value),Ce=uh(()=>{if(B.value||t.readonly||!t.clearable||!se.value&&!ve.value)return!1;const{value:m}=b,{value:x}=se;return t.pair?!!(Array.isArray(m)&&(m[0]||m[1]))&&(ve.value||x):!!m&&(ve.value||x)}),Re=de(()=>{const{showPasswordOn:m}=t;if(m)return m;if(t.showPasswordToggle)return"click"}),fe=ue(!1),ge=de(()=>{const{textDecoration:m}=t;return m?Array.isArray(m)?m.map(x=>({textDecoration:x})):[{textDecoration:m}]:["",""]}),oe=ue(void 0),ze=()=>{var m,x;if(t.type==="textarea"){const{autosize:J}=t;if(J&&(oe.value=(x=(m=h.value)===null||m===void 0?void 0:m.$el)===null||x===void 0?void 0:x.offsetWidth),!a.value||typeof J=="boolean")return;const{paddingTop:Ke,paddingBottom:Ge,lineHeight:it}=window.getComputedStyle(a.value),Bn=Number(Ke.slice(0,-2)),Un=Number(Ge.slice(0,-2)),Hn=Number(it.slice(0,-2)),{value:yi}=l;if(!yi)return;if(J.minRows){const wi=Math.max(J.minRows,1),Ca=`${Bn+Un+Hn*wi}px`;yi.style.minHeight=Ca}if(J.maxRows){const wi=`${Bn+Un+Hn*J.maxRows}px`;yi.style.maxHeight=wi}}},bt=de(()=>{const{maxlength:m}=t;return m===void 0?void 0:Number(m)});yr(()=>{const{value:m}=b;Array.isArray(m)||Ie(m)});const $e=cc().proxy;function ht(m){const{onUpdateValue:x,"onUpdate:value":J,onInput:Ke}=t,{nTriggerFormInput:Ge}=k;x&&gt(x,m),J&&gt(J,m),Ke&&gt(Ke,m),p.value=m,Ge()}function ft(m){const{onChange:x}=t,{nTriggerFormChange:J}=k;x&&gt(x,m),p.value=m,J()}function Tr(m){const{onBlur:x}=t,{nTriggerFormBlur:J}=k;x&&gt(x,m),J()}function vi(m){const{onFocus:x}=t,{nTriggerFormFocus:J}=k;x&&gt(x,m),J()}function bi(m){const{onClear:x}=t;x&&gt(x,m)}function Je(m){const{onInputBlur:x}=t;x&&gt(x,m)}function fn(m){const{onInputFocus:x}=t;x&&gt(x,m)}function Ir(){const{onDeactivate:m}=t;m&&gt(m)}function At(){const{onActivate:m}=t;m&&gt(m)}function Fn(m){const{onClick:x}=t;x&&gt(x,m)}function $n(m){const{onWrapperFocus:x}=t;x&&gt(x,m)}function f(m){const{onWrapperBlur:x}=t;x&&gt(x,m)}function g(){E.value=!0}function v(m){E.value=!1,m.target===d.value?y(m,1):y(m,0)}function y(m,x=0,J="input"){const Ke=m.target.value;if(Ie(Ke),t.type==="textarea"){const{value:it}=h;it&&it.syncUnifiedContainer()}if(D=Ke,E.value)return;const Ge=Ke;if(!t.pair)J==="input"?ht(Ge):ft(Ge);else{let{value:it}=b;Array.isArray(it)?it=[...it]:it=["",""],it[x]=Ge,J==="input"?ht(it):ft(it)}$e.$forceUpdate()}function w(m){Je(m),m.relatedTarget===o.value&&Ir(),m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value)||(S.value=!1),N(m,"blur")}function A(m){fn(m),q.value=!0,S.value=!0,At(),N(m,"focus")}function M(m){t.passivelyActivated&&(f(m),N(m,"blur"))}function R(m){t.passivelyActivated&&(q.value=!0,$n(m),N(m,"focus"))}function N(m,x){m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value||m.relatedTarget===o.value)||(x==="focus"?(vi(m),q.value=!0):x==="blur"&&(Tr(m),q.value=!1))}function T(m,x){y(m,x,"change")}function W(m){Fn(m)}function U(m){bi(m),t.pair?(ht(["",""]),ft(["",""])):(ht(""),ft(""))}function z(m){const{onMousedown:x}=t;x&&x(m);const{tagName:J}=m.target;if(J!=="INPUT"&&J!=="TEXTAREA"){if(t.resizable){const{value:Ke}=o;if(Ke){const{left:Ge,top:it,width:Bn,height:Un}=Ke.getBoundingClientRect(),Hn=14;if(Ge+Bn-Hn<m.clientX&&m.clientY<Ge+Bn&&it+Un-Hn<m.clientY&&m.clientY<it+Un)return}}m.preventDefault(),q.value||Y()}}function G(){var m;ve.value=!0,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseEnterWrapper())}function ce(){var m;ve.value=!1,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseLeaveWrapper())}function Ee(){B.value||Re.value==="click"&&(fe.value=!fe.value)}function pe(m){if(B.value)return;m.preventDefault();const x=Ke=>{Ke.preventDefault(),Zt("mouseup",document,x)};if(tr("mouseup",document,x),Re.value!=="mousedown")return;fe.value=!0;const J=()=>{fe.value=!1,Zt("mouseup",document,J)};tr("mouseup",document,J)}function Te(m){var x;switch((x=t.onKeydown)===null||x===void 0||x.call(t,m),m.code){case"Escape":$();break;case"Enter":case"NumpadEnter":I(m);break}}function I(m){var x,J;if(t.passivelyActivated){const{value:Ke}=S;if(Ke){t.internalDeactivateOnEnter&&$();return}m.preventDefault(),t.type==="textarea"?(x=a.value)===null||x===void 0||x.focus():(J=u.value)===null||J===void 0||J.focus()}}function $(){t.passivelyActivated&&(S.value=!1,pf(()=>{var m;(m=o.value)===null||m===void 0||m.focus()}))}function Y(){var m,x,J;B.value||(t.passivelyActivated?(m=o.value)===null||m===void 0||m.focus():((x=a.value)===null||x===void 0||x.focus(),(J=u.value)===null||J===void 0||J.focus()))}function _e(){var m;!((m=o.value)===null||m===void 0)&&m.contains(document.activeElement)&&document.activeElement.blur()}function Le(){var m,x;(m=a.value)===null||m===void 0||m.select(),(x=u.value)===null||x===void 0||x.select()}function we(){B.value||(a.value?a.value.focus():u.value&&u.value.focus())}function Be(){const{value:m}=o;(m==null?void 0:m.contains(document.activeElement))&&m!==document.activeElement&&$()}function Ie(m){const{type:x,pair:J,autosize:Ke}=t;if(!J&&Ke)if(x==="textarea"){const{value:Ge}=l;Ge&&(Ge.textContent=(m!=null?m:"")+`\r
`)}else{const{value:Ge}=c;Ge&&(m?Ge.textContent=m:Ge.innerHTML="&nbsp;")}}function Mt(){ze()}const pn=ue({top:"0"});function Um(m){var x;const{scrollTop:J}=m.target;pn.value.top=`${-J}px`,(x=h.value)===null||x===void 0||x.syncUnifiedContainer()}let xs=null;jr(()=>{const{autosize:m,type:x}=t;m&&x==="textarea"?xs=Kt(b,J=>{!Array.isArray(J)&&J!==D&&Ie(J)}):xs==null||xs()});let Rs=null;jr(()=>{t.type==="textarea"?Rs=Kt(b,m=>{var x;!Array.isArray(m)&&m!==D&&((x=h.value)===null||x===void 0||x.syncUnifiedContainer())}):Rs==null||Rs()}),Wr(Fm,{mergedValueRef:b,maxlengthRef:bt,mergedClsPrefixRef:e});const Hm={wrapperElRef:o,inputElRef:u,textareaElRef:a,isCompositing:E,focus:Y,blur:_e,select:Le,deactivate:Be,activate:we},zm=FA("Input",i,e),_u=de(()=>{const{value:m}=F,{common:{cubicBezierEaseInOut:x},self:{color:J,borderRadius:Ke,textColor:Ge,caretColor:it,caretColorError:Bn,caretColorWarning:Un,textDecorationColor:Hn,border:yi,borderDisabled:wi,borderHover:Ca,borderFocus:Wm,placeholderColor:jm,placeholderColorDisabled:Vm,lineHeightTextarea:qm,colorDisabled:Km,colorFocus:Gm,textColorDisabled:Ym,boxShadowFocus:Xm,iconSize:Jm,colorFocusWarning:Qm,boxShadowFocusWarning:Zm,borderWarning:e_,borderFocusWarning:t_,borderHoverWarning:n_,colorFocusError:r_,boxShadowFocusError:i_,borderError:s_,borderFocusError:o_,borderHoverError:a_,clearSize:l_,clearColor:c_,clearColorHover:u_,clearColorPressed:d_,iconColor:h_,iconColorDisabled:f_,suffixTextColor:p_,countTextColor:g_,iconColorHover:m_,iconColorPressed:__,loadingColor:v_,loadingColorError:b_,loadingColorWarning:y_,[to("padding",m)]:w_,[to("fontSize",m)]:C_,[to("height",m)]:E_}}=s.value,{left:T_,right:I_}=FI(w_);return{"--n-bezier":x,"--n-count-text-color":g_,"--n-color":J,"--n-font-size":C_,"--n-border-radius":Ke,"--n-height":E_,"--n-padding-left":T_,"--n-padding-right":I_,"--n-text-color":Ge,"--n-caret-color":it,"--n-text-decoration-color":Hn,"--n-border":yi,"--n-border-disabled":wi,"--n-border-hover":Ca,"--n-border-focus":Wm,"--n-placeholder-color":jm,"--n-placeholder-color-disabled":Vm,"--n-icon-size":Jm,"--n-line-height-textarea":qm,"--n-color-disabled":Km,"--n-color-focus":Gm,"--n-text-color-disabled":Ym,"--n-box-shadow-focus":Xm,"--n-loading-color":v_,"--n-caret-color-warning":Un,"--n-color-focus-warning":Qm,"--n-box-shadow-focus-warning":Zm,"--n-border-warning":e_,"--n-border-focus-warning":t_,"--n-border-hover-warning":n_,"--n-loading-color-warning":y_,"--n-caret-color-error":Bn,"--n-color-focus-error":r_,"--n-box-shadow-focus-error":i_,"--n-border-error":s_,"--n-border-focus-error":o_,"--n-border-hover-error":a_,"--n-loading-color-error":b_,"--n-clear-color":c_,"--n-clear-size":l_,"--n-clear-color-hover":u_,"--n-clear-color-pressed":d_,"--n-icon-color":h_,"--n-icon-color-hover":m_,"--n-icon-color-pressed":__,"--n-icon-color-disabled":f_,"--n-suffix-text-color":p_}}),Sr=r?Om("input",de(()=>{const{value:m}=F;return m[0]}),_u,t):void 0;return Object.assign(Object.assign({},Hm),{wrapperElRef:o,inputElRef:u,inputMirrorElRef:c,inputEl2Ref:d,textareaElRef:a,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:zm,uncontrolledValue:p,mergedValue:b,passwordVisible:fe,mergedPlaceholder:K,showPlaceholder1:ee,showPlaceholder2:L,mergedFocus:se,isComposing:E,activated:S,showClearButton:Ce,mergedSize:F,mergedDisabled:B,textDecorationStyle:ge,mergedClsPrefix:e,mergedBordered:n,mergedShowPasswordOn:Re,placeholderStyle:pn,mergedStatus:H,textAreaScrollContainerWidth:oe,handleTextAreaScroll:Um,handleCompositionStart:g,handleCompositionEnd:v,handleInput:y,handleInputBlur:w,handleInputFocus:A,handleWrapperBlur:M,handleWrapperFocus:R,handleMouseEnter:G,handleMouseLeave:ce,handleMouseDown:z,handleChange:T,handleClick:W,handleClear:U,handlePasswordToggleClick:Ee,handlePasswordToggleMousedown:pe,handleWrapperKeyDown:Te,handleTextAreaMirrorResize:Mt,getTextareaScrollContainer:()=>a.value,mergedTheme:s,cssVars:r?void 0:_u,themeClass:Sr==null?void 0:Sr.themeClass,onRender:Sr==null?void 0:Sr.onRender})},render(){const{mergedClsPrefix:t,mergedStatus:e,themeClass:n,onRender:r,$slots:i}=this;return r==null||r(),O("div",{ref:"wrapperElRef",class:[`${t}-input`,n,e&&`${t}-input--${e}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:this.type==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&this.type!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},O("div",{class:`${t}-input-wrapper`},$s(i.prefix,s=>s&&O("div",{class:`${t}-input__prefix`},s)),this.type==="textarea"?O(LA,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{const{textAreaScrollContainerWidth:s}=this,o={width:this.autosize&&s&&`${s}px`};return O(We,null,O("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:`${t}-input__textarea-el`,autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],o],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?O("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,o],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?O(Ll,{onResize:this.handleTextAreaMirrorResize},{default:()=>O("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):O("div",{class:`${t}-input__input`},O("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:`${t}-input__input-el`,style:this.textDecorationStyle[0],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,0),onChange:s=>this.handleChange(s,0)})),this.showPlaceholder1?O("div",{class:`${t}-input__placeholder`},O("span",null,this.mergedPlaceholder[0])):null,this.autosize?O("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&$s(i.suffix,s=>s||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?O("div",{class:`${t}-input__suffix`},[$s(i.clear,o=>(this.clearable||o)&&O(Wl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>o})),this.internalLoadingBeforeSuffix?null:s,this.loading!==void 0?O(BA,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?s:null,this.showCount&&this.type!=="textarea"?O(Uh,null,{default:o=>{var a;return(a=i.count)===null||a===void 0?void 0:a.call(i,o)}}):null,this.mergedShowPasswordOn&&this.type==="password"?O(mu,{clsPrefix:t,class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},{default:()=>this.passwordVisible?eo(i["password-visible-icon"],()=>[O(vA,null)]):eo(i["password-invisible-icon"],()=>[O(bA,null)])}):null]):null)),this.pair?O("span",{class:`${t}-input__separator`},eo(i.separator,()=>[this.separator])):null,this.pair?O("div",{class:`${t}-input-wrapper`},O("div",{class:`${t}-input__input`},O("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,1),onChange:s=>this.handleChange(s,1)}),this.showPlaceholder2?O("div",{class:`${t}-input__placeholder`},O("span",null,this.mergedPlaceholder[1])):null),$s(i.suffix,s=>(this.clearable||s)&&O("div",{class:`${t}-input__suffix`},[this.clearable&&O(Wl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>{var o;return(o=i.clear)===null||o===void 0?void 0:o.call(i)}}),s]))):null,this.mergedBordered?O("div",{class:`${t}-input__border`}):null,this.mergedBordered?O("div",{class:`${t}-input__state-border`}):null,this.showCount&&this.type==="textarea"?O(Uh,null,{default:s=>{var o;return(o=i.count)===null||o===void 0?void 0:o.call(i,s)}}):null)}});const GA={class:"input-container"},$m=Fe({props:{color:null,placeholder:null,initialValue:null,autofocus:{type:Boolean},saveOnBlur:{type:Boolean}},emits:["save","blur"],setup(t,{emit:e}){const{color:n,placeholder:r,initialValue:i="",autofocus:s=!1,saveOnBlur:o=!1}=t;uc(_=>({"5f5f1ad5":t.color}));const a=ue(),l=un({inputText:i,isFocused:!1});function c(){e("save",l.inputText),o||(l.inputText="")}function u(_){_.metaKey&&_.key==="Enter"&&(_.preventDefault(),c())}function d(){l.isFocused=!1,o&&c()}function h(){l.isFocused=!0}return s&&yr(()=>{var _,p;(p=(_=a.value).focus)==null||p.call(_)}),(_,p)=>(ne(),Se("div",GA,[je(De(KA),{class:"input",ref_key:"inputRef",ref:a,value:De(l).inputText,"onUpdate:value":p[0]||(p[0]=C=>De(l).inputText=C),type:"textarea",autosize:"",placeholder:t.placeholder,onKeydown:u,onFocus:h,onBlur:d},null,8,["value","placeholder"]),De(l).isFocused?(ne(),Se("button",{key:0,class:"save-button",onMousedown:p[1]||(p[1]=ry(()=>{},["prevent"])),onClick:c}," save ",32)):qt("",!0)]))}}),YA=Fe({props:{color:null},emits:["delete"],setup(t,{emit:e}){uc(r=>({"4bf68e78":t.color||"white"}));function n(r){r.stopPropagation(),e("delete")}return(r,i)=>(ne(),Se("button",{class:"ghost",onClick:n},"\u2716"))}});var Bm=Qt(YA,[["__scopeId","data-v-85d74088"]]);const XA=Xo("\u2716"),JA=Fe({props:{text:null,color:null,author:null,onDelete:null,id:null,boardId:null,columnId:null},setup(t){const e=t;uc(F=>({"6881a82a":De(r),afea9922:De(k)}));const{author:n,color:r,boardId:i,columnId:s,id:o}=e,a=un({isEditing:!1,isDragged:!1}),l=Ve("user"),c=l.uid===n,u=Ve("board");function d(){!c||(a.isEditing=!0)}function h(F){!(l!=null&&l.uid)||(a.isEditing=!1,sh(i,s,String(o),{text:F}))}function _(F){var B;(B=F.dataTransfer)==null||B.setData("application/json",JSON.stringify({boardId:i,columnId:s,cardId:o,text:e.text})),setTimeout(()=>a.isDragged=!0)}function p(F){a.isDragged=!1}function C(F){console.log("drag over card"),F.preventDefault()}function b(F){var H,q;const B=JSON.parse((q=(H=F.dataTransfer)==null?void 0:H.getData("application/json"))!=null?q:"{}");B.cardId!==o&&(sh(i,s,String(o),{text:e.text+`

--------

`+B.text}),jg(B.boardId,B.columnId,B.cardId))}const k=hf(()=>c?"text":"default");return(F,B)=>{var H;return De(a).isEditing?(ne(),Pt($m,{key:1,"initial-value":e.text,placeholder:"Edit card",color:De(r),autofocus:"","save-on-blur":"",onSave:h},null,8,["initial-value","color"])):(ne(),Se("div",{key:0,class:br(["card",{hidden:!c&&((H=De(u))==null?void 0:H.cardsHidden)}]),draggable:"true",onDragstart:_,onDragend:p,onDragover:C,onClick:d,onDrop:b,style:ds({visibility:De(a).isDragged?"hidden":"visible"})},[je(Bm,{onDelete:B[0]||(B[0]=q=>t.onDelete(String(De(o))))},{default:sc(()=>[XA]),_:1}),Xo(" "+tn(e.text),1)],38))}}});var QA=Qt(JA,[["__scopeId","data-v-1ddf348e"]]);const ZA={key:0,class:"spacer"},ek=Fe({props:{title:null,color:null,boardId:null,columnId:null,cards:null},setup(t){const{columnId:e,boardId:n}=t,r=Ve("user");function i(c){c.trim()!==""&&(!(r!=null&&r.uid)||kI(n,e,{text:c,author:r.uid}))}function s(c){jg(n,e,c)}function o(c){c.preventDefault(),c.dataTransfer&&(c.dataTransfer.dropEffect="move"),c.target&&(c.target.style.height="64px")}function a(c){c.target&&(c.target.style.height="8px")}function l(c){var d,h;c.target&&(c.target.style.height="8px");const u=JSON.parse((h=(d=c.dataTransfer)==null?void 0:d.getData("application/json"))!=null?h:"{}");NI(n,u.columnId,u.cardId,e)}return(c,u)=>(ne(),Se("section",null,[Q("h2",null,tn(t.title),1),Q("div",{class:"card-spacer",onDragover:o,onDragleave:a,onDrop:l},null,32),Q("ul",null,[(ne(!0),Se(We,null,Xi(t.cards,(d,h)=>(ne(),Se("li",null,[(ne(),Pt(QA,{id:h,key:h,author:d.author,text:d.text,color:t.color,onDelete:s,"board-id":t.boardId,"column-id":t.columnId},null,8,["id","author","text","color","board-id","column-id"])),Object.keys(t.cards).length>0?(ne(),Se("div",{key:0,class:"card-spacer",onDragover:o,onDragleave:a,onDrop:l},null,32)):qt("",!0)]))),256))]),Object.keys(t.cards).length>0?(ne(),Se("div",ZA)):qt("",!0),je($m,{color:t.color,placeholder:"Add new card",onSave:i},null,8,["color"])]))}});var tk=Qt(ek,[["__scopeId","data-v-b3ce16e2"]]);const nk={class:"timer-container"},rk={class:"timer-controls"},ik=Fe({setup(t){const n=Ve("boardId"),r=AI(n),i=ue(r.timeRemaining);let s=null;Kt(()=>r.isRunning,h=>{h?a():l()}),Kt(()=>r.timeRemaining,h=>{i.value=h});function o(h){const _=Math.floor(h/60),p=h%60;return`${_}:${p.toString().padStart(2,"0")}`}function a(){s!==null&&clearInterval(s),s=window.setInterval(()=>{i.value>0?i.value--:l()},1e3)}function l(){s!==null&&(clearInterval(s),s=null)}function c(){const h=Date.now()+i.value*1e3;xI(n,h)}function u(){RI(n,i.value)}function d(){PI(n,420)}return Go(()=>{l()}),(h,_)=>(ne(),Se("div",nk,[Q("div",{class:br(["timer-display",{"timer-ending":i.value<=60,"timer-running":De(r).isRunning}])},tn(o(i.value)),3),Q("div",rk,[De(r).isRunning?(ne(),Pt(Zs,{key:1,onClick:u,text:"Stop"})):(ne(),Pt(Zs,{key:0,onClick:c,text:"Start"})),je(Zs,{onClick:d,text:"Reset"})])]))}});var sk=Qt(ik,[["__scopeId","data-v-5d1753b7"]]);const ok={class:"board"},ak={class:"board-header"},lk={class:"timer-wrapper"},ck={class:"options-container"},uk={class:"columns"},dk=Fe({setup(t){const e=Ve("board"),n=Ve("boardId"),r=Ve("user");jr(()=>{r.uid&&Vg(r.uid,n)});function i(){II(n,!e.cardsHidden)}function s(){return e.cardsHidden?"Show all cards":"Hide other cards"}function o(u){u.key==="Enter"&&(u.target.blur(),u.preventDefault())}function a(u){const d=(u==null?void 0:u.target).value.trim();SI(n,d),c.value=d||"Untitled Retro"}function l(){c.value==="Untitled Retro"&&(c.value="")}const c=ue(e.title||"Untitled Retro");return Kt(e,u=>{c.value=u.title||"Untitled Retro"}),(u,d)=>(ne(),Se("div",ok,[Q("div",ak,[Q("div",lk,[je(sk)]),ab(Q("input",{class:br({untitled:c.value==="Untitled Retro"}),"onUpdate:modelValue":d[0]||(d[0]=h=>c.value=h),onKeypress:o,onFocusout:a,onFocusin:l},null,34),[[ey,c.value]]),Q("div",ck,[je(Zs,{onClick:i,text:s()},null,8,["text"])])]),Q("section",uk,[(ne(!0),Se(We,null,Xi(De(e).columns,(h,_)=>{var p;return ne(),Pt(tk,{cards:(p=h.cards)!=null?p:[],"column-id":String(_),"board-id":De(n),key:String(_),title:h.title,color:h.color},null,8,["cards","column-id","board-id","title","color"])}),128))])]))}});var hk=Qt(dk,[["__scopeId","data-v-2afca4f0"]]);const fk={},pk={class:"loader"};function gk(t,e){return ne(),Se("div",pk,"Loading...")}var mk=Qt(fk,[["render",gk],["__scopeId","data-v-840bd5c8"]]);const _k={key:0},vk={key:1},bk={key:1},yk=Fe({props:{boardId:null},setup(t){const{boardId:e}=t,n=TI(e);return Wr("boardId",e),Wr("board",n),(r,i)=>(ne(),Se(We,null,[De(n).loading?qt("",!0):(ne(),Se("main",_k,[De(n).exists?(ne(),Pt(hk,{key:0})):qt("",!0),De(n).exists?qt("",!0):(ne(),Se("div",vk,"Couldn't find board"))])),De(n).loading?(ne(),Se("main",bk,[je(mk)])):qt("",!0)],64))}});var wk=Qt(yk,[["__scopeId","data-v-b2bd279e"]]);const Ck={class:"board__header"},Ek={class:"stack"},Tk={class:"eyebrow"},Ik=Xo(" \u2716 "),Sk={class:"board__preview"},xk={key:0,class:"count"},Rk=Fe({props:{board:null,isTemplate:{type:Boolean}},emits:["delete"],setup(t,{emit:e}){const{board:n,isTemplate:r}=t;function i(l){l.stopPropagation(),e("delete")}const s=de(()=>{var c;let l=0;for(const u of Object.values(n.columns)){const d=Object.keys((c=u.cards)!=null?c:{}).length;d>l&&(l=d)}return l});function o(l){var d;return r?"100%":s.value===0?`${20}%`:`${Object.keys((d=l==null?void 0:l.cards)!=null?d:{}).length/s.value*(100-20)+20}%`}function a(l){var c;return Object.keys((c=l==null?void 0:l.cards)!=null?c:{}).length}return(l,c)=>(ne(),Se("article",{class:br(["board",{template:t.isTemplate}])},[Q("div",Ck,[Q("div",Ek,[Q("p",Tk,tn(t.isTemplate?"Template":"Board"),1),Q("h3",null,tn(t.board.title||"Untitled Retro"),1)]),t.isTemplate?qt("",!0):(ne(),Pt(Bm,{key:0,color:"black",class:"delete",onClick:i},{default:sc(()=>[Ik]),_:1}))]),Q("div",Sk,[(ne(!0),Se(We,null,Xi(t.board.columns,u=>(ne(),Se("div",{class:"column",key:u.title,style:ds({backgroundColor:u.color,height:o(u)})},[Q("span",null,tn(u.title),1),t.isTemplate?qt("",!0):(ne(),Se("span",xk,tn(a(u))+" cards",1))],4))),128))])],2))}});var Hh=Qt(Rk,[["__scopeId","data-v-47e64a55"]]);const Ga=[{title:"Mad Sad Glad",columns:[{title:"Mad",color:"#f44336"},{title:"Sad",color:"#e91e63"},{title:"Glad",color:"#9c27b0"}]},{title:"Start Stop Continue",columns:[{title:"Start",color:"#2196f3"},{title:"Stop",color:"#ff9800"},{title:"Continue",color:"#009688"}]},{title:"Sailboat",columns:[{title:"What is the wind pushing our sails that make us go fast",color:"#f44336"},{title:"What anchors are holding us back",color:"#e91e63"},{title:"What rocks are ahead of us that risk our future",color:"#9c27b0"},{title:"What is our ideal island destination",color:"#673ab7"}]},{title:"The Four L's",columns:[{title:"Liked",color:"#4CAF50"},{title:"Learned",color:"#2196F3"},{title:"Lacked",color:"#FF9800"},{title:"Longed For",color:"#9C27B0"}]},{title:"KALM",columns:[{title:"Keep",color:"#4CAF50"},{title:"Add",color:"#2196F3"},{title:"Less",color:"#FF5722"},{title:"More",color:"#673AB7"}]},{title:"DAKI",columns:[{title:"Drop",color:"#F44336"},{title:"Add",color:"#4CAF50"},{title:"Keep",color:"#2196F3"},{title:"Improve",color:"#FFC107"}]}],Ln=t=>(Av("data-v-04121e98"),t=t(),kv(),t),Pk={class:"page"},Ak={class:"hero card"},kk={class:"badge"},Nk={class:"hero__body"},Ok={class:"stack"},Mk=Ln(()=>Q("p",{class:"eyebrow"},"Structured feedback. Familiar shadcn look.",-1)),Dk=Ln(()=>Q("h1",null,"Run a retro in seconds.",-1)),Lk=Ln(()=>Q("p",{class:"lede"}," Spin up a fresh board from a template or jump back into one of your recent sessions. ",-1)),Fk={class:"hero__actions"},$k=Ln(()=>Q("div",{class:"hero__meta"},[Q("div",{class:"pill"},"Lightweight, collaborative, sharable."),Q("div",{class:"pill pill--soft"},"Automatic previews for every column.")],-1)),Bk={class:"content"},Uk={class:"panel card"},Hk=Ln(()=>Q("div",{class:"section-heading"},[Q("div",{class:"stack"},[Q("p",{class:"eyebrow"},"Templates"),Q("h2",null,"Start a new board")]),Q("p",{class:"muted"},"Pick a layout and we'll handle the rest.")],-1)),zk={class:"card-grid"},Wk={class:"panel card"},jk=Ln(()=>Q("div",{class:"section-heading"},[Q("div",{class:"stack"},[Q("p",{class:"eyebrow"},"Your space"),Q("h2",null,"Your boards")]),Q("p",{class:"muted"},"Keep iterating where your team left off.")],-1)),Vk={key:0,class:"card-grid"},qk={key:1,class:"empty"},Kk=Ln(()=>Q("div",{class:"pill"},"No boards yet",-1)),Gk=Ln(()=>Q("p",{class:"muted"},"Use a template above to create your first retro.",-1)),Yk=[Kk,Gk],Xk=Fe({props:{navigateToBoard:null},setup(t){const{navigateToBoard:e}=t,n=Ve("user"),r=de(()=>EI(n.uid));function i(a){MI(n.uid,a)}function s(){const a=Object.keys(r.value);a.length&&e(a[0])}async function o(a){if(!(n!=null&&n.uid))return;const l=await OI(n.uid,a);l&&e(l)}return(a,l)=>(ne(),Se("div",Pk,[Q("header",Ak,[Q("div",kk,"quick retro "+tn(""),1),Q("div",Nk,[Q("div",Ok,[Mk,Dk,Lk,Q("div",Fk,[De(Ga).length?(ne(),Se("button",{key:0,class:"btn",type:"button",onClick:l[0]||(l[0]=c=>o(De(Ga)[0]))}," Start with classic ")):qt("",!0),Q("button",{class:"btn btn-ghost",type:"button",onClick:s}," View my boards ")])]),$k])]),Q("main",Bk,[Q("section",Uk,[Hk,Q("div",zk,[(ne(!0),Se(We,null,Xi(De(Ga),c=>(ne(),Pt(Hh,{key:c.title,onClick:u=>o(c),board:c,"is-template":!0},null,8,["onClick","board"]))),128))])]),Q("section",Wk,[jk,Object.keys(De(r)).length?(ne(),Se("div",Vk,[(ne(!0),Se(We,null,Xi(De(r),(c,u)=>(ne(),Pt(Hh,{key:u,onClick:d=>t.navigateToBoard(u),onDelete:d=>i(u),board:c,"is-template":!1},null,8,["onClick","onDelete","board"]))),128))])):(ne(),Se("div",qk,Yk))])])]))}});var Jk=Qt(Xk,[["__scopeId","data-v-04121e98"]]);const Qk=Fe({setup(t){const e=ue(window.location.hash.slice(1));function n(i){console.log("navigating to board",i),history.pushState({},"",`#${i}`),e.value=i}addEventListener("popstate",()=>{console.log(window.location.hash.slice(1)),e.value=window.location.hash.slice(1)});const r=DI();return Wr("user",r),(i,s)=>e.value&&e.value.length>0?(ne(),Pt(wk,{key:0,boardId:e.value},null,8,["boardId"])):(ne(),Pt(Jk,{key:1,"navigate-to-board":n}))}});oy(Qk).mount("#app")});export default Zk();
