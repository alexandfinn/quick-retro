var I_=Object.defineProperty,S_=Object.defineProperties;var x_=Object.getOwnPropertyDescriptors;var mu=Object.getOwnPropertySymbols;var R_=Object.prototype.hasOwnProperty,P_=Object.prototype.propertyIsEnumerable;var _u=(t,e,n)=>e in t?I_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,vu=(t,e)=>{for(var n in e||(e={}))R_.call(e,n)&&_u(t,n,e[n]);if(mu)for(var n of mu(e))P_.call(e,n)&&_u(t,n,e[n]);return t},bu=(t,e)=>S_(t,x_(e));var A_=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var kk=A_((It,St)=>{const k_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};k_();function zl(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const N_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",O_=zl(N_);function Uh(t){return!!t||t===""}function us(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=tt(r)?L_(r):us(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(tt(t))return t;if(qe(t))return t}}const M_=/;(?![^(]*\))/g,D_=/:(.+)/;function L_(t){const e={};return t.split(M_).forEach(n=>{if(n){const r=n.split(D_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vr(t){let e="";if(tt(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=vr(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ar=t=>tt(t)?t:t==null?"":Q(t)||qe(t)&&(t.toString===jh||!ne(t.toString))?JSON.stringify(t,Hh,2):String(t),Hh=(t,e)=>e&&e.__v_isRef?Hh(t,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:zh(e)?{[`Set(${e.size})`]:[...e.values()]}:qe(e)&&!Q(e)&&!Vh(e)?String(e):e,Re={},Or=[],$t=()=>{},F_=()=>!1,$_=/^on[^a-z]/,Mo=t=>$_.test(t),Wl=t=>t.startsWith("onUpdate:"),lt=Object.assign,jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},B_=Object.prototype.hasOwnProperty,ge=(t,e)=>B_.call(t,e),Q=Array.isArray,Mr=t=>Do(t)==="[object Map]",zh=t=>Do(t)==="[object Set]",ne=t=>typeof t=="function",tt=t=>typeof t=="string",Vl=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Wh=t=>qe(t)&&ne(t.then)&&ne(t.catch),jh=Object.prototype.toString,Do=t=>jh.call(t),U_=t=>Do(t).slice(8,-1),Vh=t=>Do(t)==="[object Object]",ql=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vs=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},H_=/-(\w)/g,Hr=Lo(t=>t.replace(H_,(e,n)=>n?n.toUpperCase():"")),z_=/\B([A-Z])/g,ti=Lo(t=>t.replace(z_,"-$1").toLowerCase()),qh=Lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ca=Lo(t=>t?`on${qh(t)}`:""),ji=(t,e)=>!Object.is(t,e),qs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},no=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ro=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yu;const W_=()=>yu||(yu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let jt;class j_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&jt&&(this.parent=jt,this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function V_(t,e=jt){e&&e.active&&e.effects.push(t)}const Kl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Kh=t=>(t.w&An)>0,Gh=t=>(t.n&An)>0,q_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=An},K_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Kh(i)&&!Gh(i)?i.delete(t):e[n++]=i,i.w&=~An,i.n&=~An}e.length=n}},Ka=new WeakMap;let Ai=0,An=1;const Ga=30;let Dt;const er=Symbol(""),Ya=Symbol("");class Gl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,V_(this,r)}run(){if(!this.active)return this.fn();let e=Dt,n=In;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,In=!0,An=1<<++Ai,Ai<=Ga?q_(this):wu(this),this.fn()}finally{Ai<=Ga&&K_(this),An=1<<--Ai,Dt=this.parent,In=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(wu(this),this.onStop&&this.onStop(),this.active=!1)}}function wu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let In=!0;const Yh=[];function ni(){Yh.push(In),In=!1}function ri(){const t=Yh.pop();In=t===void 0?!0:t}function Rt(t,e,n){if(In&&Dt){let r=Ka.get(t);r||Ka.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Kl()),Xh(i)}}function Xh(t,e){let n=!1;Ai<=Ga?Gh(t)||(t.n|=An,n=!Kh(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function sn(t,e,n,r,i,s){const o=Ka.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?ql(n)&&a.push(o.get("length")):(a.push(o.get(er)),Mr(t)&&a.push(o.get(Ya)));break;case"delete":Q(t)||(a.push(o.get(er)),Mr(t)&&a.push(o.get(Ya)));break;case"set":Mr(t)&&a.push(o.get(er));break}if(a.length===1)a[0]&&Xa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Xa(Kl(l))}}function Xa(t,e){for(const n of Q(t)?t:[...t])(n!==Dt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const G_=zl("__proto__,__v_isRef,__isVue"),Jh=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Vl)),Y_=Yl(),X_=Yl(!1,!0),J_=Yl(!0),Cu=Q_();function Q_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let s=0,o=this.length;s<o;s++)Rt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(be)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ni();const r=be(this)[e].apply(this,n);return ri(),r}}),t}function Yl(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?pv:nf:e?tf:ef).get(r))return r;const o=Q(r);if(!t&&o&&ge(Cu,i))return Reflect.get(Cu,i,s);const a=Reflect.get(r,i,s);return(Vl(i)?Jh.has(i):G_(i))||(t||Rt(r,"get",i),e)?a:et(a)?!o||!ql(i)?a.value:a:qe(a)?t?Ql(a):ln(a):a}}const Z_=Qh(),ev=Qh(!0);function Qh(t=!1){return function(n,r,i,s){let o=n[r];if(Vi(o)&&et(o)&&!et(i))return!1;if(!t&&!Vi(i)&&(rf(i)||(i=be(i),o=be(o)),!Q(n)&&et(o)&&!et(i)))return o.value=i,!0;const a=Q(n)&&ql(r)?Number(r)<n.length:ge(n,r),l=Reflect.set(n,r,i,s);return n===be(s)&&(a?ji(i,o)&&sn(n,"set",r,i):sn(n,"add",r,i)),l}}function tv(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&sn(t,"delete",e,void 0),r}function nv(t,e){const n=Reflect.has(t,e);return(!Vl(e)||!Jh.has(e))&&Rt(t,"has",e),n}function rv(t){return Rt(t,"iterate",Q(t)?"length":er),Reflect.ownKeys(t)}const Zh={get:Y_,set:Z_,deleteProperty:tv,has:nv,ownKeys:rv},iv={get:J_,set(t,e){return!0},deleteProperty(t,e){return!0}},sv=lt({},Zh,{get:X_,set:ev}),Xl=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function Rs(t,e,n=!1,r=!1){t=t.__v_raw;const i=be(t),s=be(e);e!==s&&!n&&Rt(i,"get",e),!n&&Rt(i,"get",s);const{has:o}=Fo(i),a=r?Xl:n?ec:qi;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Ps(t,e=!1){const n=this.__v_raw,r=be(n),i=be(t);return t!==i&&!e&&Rt(r,"has",t),!e&&Rt(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function As(t,e=!1){return t=t.__v_raw,!e&&Rt(be(t),"iterate",er),Reflect.get(t,"size",t)}function Eu(t){t=be(t);const e=be(this);return Fo(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function Tu(t,e){e=be(e);const n=be(this),{has:r,get:i}=Fo(n);let s=r.call(n,t);s||(t=be(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?ji(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function Iu(t){const e=be(this),{has:n,get:r}=Fo(e);let i=n.call(e,t);i||(t=be(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&sn(e,"delete",t,void 0),s}function Su(){const t=be(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function ks(t,e){return function(r,i){const s=this,o=s.__v_raw,a=be(o),l=e?Xl:t?ec:qi;return!t&&Rt(a,"iterate",er),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Ns(t,e,n){return function(...r){const i=this.__v_raw,s=be(i),o=Mr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Xl:e?ec:qi;return!e&&Rt(s,"iterate",l?Ya:er),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function fn(t){return function(...e){return t==="delete"?!1:this}}function ov(){const t={get(s){return Rs(this,s)},get size(){return As(this)},has:Ps,add:Eu,set:Tu,delete:Iu,clear:Su,forEach:ks(!1,!1)},e={get(s){return Rs(this,s,!1,!0)},get size(){return As(this)},has:Ps,add:Eu,set:Tu,delete:Iu,clear:Su,forEach:ks(!1,!0)},n={get(s){return Rs(this,s,!0)},get size(){return As(this,!0)},has(s){return Ps.call(this,s,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:ks(!0,!1)},r={get(s){return Rs(this,s,!0,!0)},get size(){return As(this,!0)},has(s){return Ps.call(this,s,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ns(s,!1,!1),n[s]=Ns(s,!0,!1),e[s]=Ns(s,!1,!0),r[s]=Ns(s,!0,!0)}),[t,n,e,r]}const[av,lv,cv,uv]=ov();function Jl(t,e){const n=e?t?uv:cv:t?lv:av;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ge(n,i)&&i in r?n:r,i,s)}const dv={get:Jl(!1,!1)},hv={get:Jl(!1,!0)},fv={get:Jl(!0,!1)},ef=new WeakMap,tf=new WeakMap,nf=new WeakMap,pv=new WeakMap;function gv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mv(t){return t.__v_skip||!Object.isExtensible(t)?0:gv(U_(t))}function ln(t){return Vi(t)?t:Zl(t,!1,Zh,dv,ef)}function _v(t){return Zl(t,!1,sv,hv,tf)}function Ql(t){return Zl(t,!0,iv,fv,nf)}function Zl(t,e,n,r,i){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=mv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Dr(t){return Vi(t)?Dr(t.__v_raw):!!(t&&t.__v_isReactive)}function Vi(t){return!!(t&&t.__v_isReadonly)}function rf(t){return!!(t&&t.__v_isShallow)}function sf(t){return Dr(t)||Vi(t)}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function of(t){return no(t,"__v_skip",!0),t}const qi=t=>qe(t)?ln(t):t,ec=t=>qe(t)?Ql(t):t;function af(t){In&&Dt&&(t=be(t),Xh(t.dep||(t.dep=Kl())))}function lf(t,e){t=be(t),t.dep&&Xa(t.dep)}function et(t){return!!(t&&t.__v_isRef===!0)}function le(t){return vv(t,!1)}function vv(t,e){return et(t)?t:new bv(t,e)}class bv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:qi(e)}get value(){return af(this),this._value}set value(e){e=this.__v_isShallow?e:be(e),ji(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:qi(e),lf(this))}}function $e(t){return et(t)?t.value:t}const yv={get:(t,e,n)=>$e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return et(i)&&!et(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function cf(t){return Dr(t)?t:new Proxy(t,yv)}class wv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function $o(t,e,n){const r=t[e];return et(r)?r:new wv(t,e,n)}class Cv{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Gl(e,()=>{this._dirty||(this._dirty=!0,lf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=be(this);return af(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function uf(t,e,n=!1){let r,i;const s=ne(t);return s?(r=t,i=$t):(r=t.get,i=t.set),new Cv(r,i,s||!i,n)}function Sn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Bo(s,e,n)}return i}function Ot(t,e,n,r){if(ne(t)){const s=Sn(t,e,n,r);return s&&Wh(s)&&s.catch(o=>{Bo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ot(t[s],e,n,r));return i}function Bo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Sn(l,null,10,[t,o,a]);return}}Ev(t,n,i,r)}function Ev(t,e,n,r=!0){console.error(t)}let io=!1,Ja=!1;const Tt=[];let Zt=0;const Oi=[];let ki=null,Rr=0;const Mi=[];let _n=null,Pr=0;const df=Promise.resolve();let tc=null,Qa=null;function hf(t){const e=tc||df;return t?e.then(this?t.bind(this):t):e}function Tv(t){let e=Zt+1,n=Tt.length;for(;e<n;){const r=e+n>>>1;Ki(Tt[r])<t?e=r+1:n=r}return e}function ff(t){(!Tt.length||!Tt.includes(t,io&&t.allowRecurse?Zt+1:Zt))&&t!==Qa&&(t.id==null?Tt.push(t):Tt.splice(Tv(t.id),0,t),pf())}function pf(){!io&&!Ja&&(Ja=!0,tc=df.then(_f))}function Iv(t){const e=Tt.indexOf(t);e>Zt&&Tt.splice(e,1)}function gf(t,e,n,r){Q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),pf()}function Sv(t){gf(t,ki,Oi,Rr)}function xv(t){gf(t,_n,Mi,Pr)}function nc(t,e=null){if(Oi.length){for(Qa=e,ki=[...new Set(Oi)],Oi.length=0,Rr=0;Rr<ki.length;Rr++)ki[Rr]();ki=null,Rr=0,Qa=null,nc(t,e)}}function mf(t){if(Mi.length){const e=[...new Set(Mi)];if(Mi.length=0,_n){_n.push(...e);return}for(_n=e,_n.sort((n,r)=>Ki(n)-Ki(r)),Pr=0;Pr<_n.length;Pr++)_n[Pr]();_n=null,Pr=0}}const Ki=t=>t.id==null?1/0:t.id;function _f(t){Ja=!1,io=!0,nc(t),Tt.sort((n,r)=>Ki(n)-Ki(r));const e=$t;try{for(Zt=0;Zt<Tt.length;Zt++){const n=Tt[Zt];n&&n.active!==!1&&Sn(n,null,14)}}finally{Zt=0,Tt.length=0,mf(),io=!1,tc=null,(Tt.length||Oi.length||Mi.length)&&_f(t)}}function Rv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||Re;h?i=n.map(_=>_.trim()):d&&(i=n.map(ro))}let a,l=r[a=Ca(e)]||r[a=Ca(Hr(e))];!l&&s&&(l=r[a=Ca(ti(e))]),l&&Ot(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(c,t,6,i)}}function vf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=vf(c,e,!0);u&&(a=!0,lt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(Q(s)?s.forEach(l=>o[l]=null):lt(o,s),r.set(t,o),o)}function Uo(t,e){return!t||!Mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,ti(e))||ge(t,e))}let mt=null,Ho=null;function so(t){const e=mt;return mt=t,Ho=t&&t.type.__scopeId||null,e}function Pv(t){Ho=t}function Av(){Ho=null}function rc(t,e=mt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Lu(-1);const s=so(e),o=t(...i);return so(s),r._d&&Lu(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ea(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:_,ctx:p,inheritAttrs:C}=t;let b,k;const F=so(t);try{if(n.shapeFlag&4){const H=i||r;b=Vt(u.call(H,H,d,s,_,h,p)),k=l}else{const H=e;b=Vt(H.length>1?H(s,{attrs:l,slots:a,emit:c}):H(s,null)),k=e.props?l:kv(l)}}catch(H){Di.length=0,Bo(H,t,1),b=We(xt)}let B=b;if(k&&C!==!1){const H=Object.keys(k),{shapeFlag:q}=B;H.length&&q&7&&(o&&H.some(Wl)&&(k=Nv(k,o)),B=lr(B,k))}return n.dirs&&(B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),b=B,so(F),b}const kv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mo(n))&&((e||(e={}))[n]=t[n]);return e},Nv=(t,e)=>{const n={};for(const r in t)(!Wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ov(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Uo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?xu(r,o,c):!0:!!o;return!1}function xu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Uo(n,s))return!0}return!1}function Mv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dv=t=>t.__isSuspense;function Lv(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):xv(t)}function zr(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function Ve(t,e,n=!1){const r=at||mt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(r.proxy):e}}function Wr(t,e){return zo(t,null,e)}function Fv(t,e){return zo(t,null,{flush:"post"})}const Ru={};function qt(t,e,n){return zo(t,e,n)}function zo(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Re){const a=at;let l,c=!1,u=!1;if(et(t)?(l=()=>t.value,c=rf(t)):Dr(t)?(l=()=>t,r=!0):Q(t)?(u=!0,c=t.some(Dr),l=()=>t.map(k=>{if(et(k))return k.value;if(Dr(k))return Gn(k);if(ne(k))return Sn(k,a,2)})):ne(t)?e?l=()=>Sn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Ot(t,a,3,[h])}:l=$t,e&&r){const k=l;l=()=>Gn(k())}let d,h=k=>{d=b.onStop=()=>{Sn(k,a,4)}};if(Xi)return h=$t,e?n&&Ot(e,a,3,[l(),u?[]:void 0,h]):l(),$t;let _=u?[]:Ru;const p=()=>{if(!!b.active)if(e){const k=b.run();(r||c||(u?k.some((F,B)=>ji(F,_[B])):ji(k,_)))&&(d&&d(),Ot(e,a,3,[k,_===Ru?void 0:_,h]),_=k)}else b.run()};p.allowRecurse=!!e;let C;i==="sync"?C=p:i==="post"?C=()=>wt(p,a&&a.suspense):C=()=>{!a||a.isMounted?Sv(p):p()};const b=new Gl(l,C);return e?n?p():_=b.run():i==="post"?wt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&jl(a.scope.effects,b)}}function $v(t,e,n){const r=this.proxy,i=tt(t)?t.includes(".")?bf(r,t):()=>r[t]:t.bind(r,r);let s;ne(e)?s=e:(s=e.handler,n=e);const o=at;jr(this);const a=zo(i,s.bind(r),n);return o?jr(o):nr(),a}function bf(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Gn(t,e){if(!qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),et(t))Gn(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)Gn(t[n],e);else if(zh(t)||Mr(t))t.forEach(n=>{Gn(n,e)});else if(Vh(t))for(const n in t)Gn(t[n],e);return t}function Bv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return br(()=>{t.isMounted=!0}),qo(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],Uv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},setup(t,{slots:e}){const n=ac(),r=Bv();let i;return()=>{const s=e.default&&Cf(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const C of s)if(C.type!==xt){o=C;break}}const a=be(t),{mode:l}=a;if(r.isLeaving)return Ta(o);const c=Pu(o);if(!c)return Ta(o);const u=Za(c,a,r,n);el(c,u);const d=n.subTree,h=d&&Pu(d);let _=!1;const{getTransitionKey:p}=c.type;if(p){const C=p();i===void 0?i=C:C!==i&&(i=C,_=!0)}if(h&&h.type!==xt&&(!qn(c,h)||_)){const C=Za(h,a,r,n);if(el(h,C),l==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},Ta(o);l==="in-out"&&c.type!==xt&&(C.delayLeave=(b,k,F)=>{const B=wf(r,h);B[String(h.key)]=h,b._leaveCb=()=>{k(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return o}}},yf=Uv;function wf(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Za(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:p,onBeforeAppear:C,onAppear:b,onAfterAppear:k,onAppearCancelled:F}=e,B=String(t.key),H=wf(n,t),q=(E,S)=>{E&&Ot(E,r,9,S)},_e={mode:s,persisted:o,beforeEnter(E){let S=a;if(!n.isMounted)if(i)S=C||a;else return;E._leaveCb&&E._leaveCb(!0);const D=H[B];D&&qn(t,D)&&D.el._leaveCb&&D.el._leaveCb(),q(S,[E])},enter(E){let S=l,D=c,K=u;if(!n.isMounted)if(i)S=b||l,D=k||c,K=F||u;else return;let Z=!1;const L=E._enterCb=re=>{Z||(Z=!0,re?q(K,[E]):q(D,[E]),_e.delayedLeave&&_e.delayedLeave(),E._enterCb=void 0)};S?(S(E,L),S.length<=1&&L()):L()},leave(E,S){const D=String(t.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return S();q(d,[E]);let K=!1;const Z=E._leaveCb=L=>{K||(K=!0,S(),L?q(p,[E]):q(_,[E]),E._leaveCb=void 0,H[D]===t&&delete H[D])};H[D]=t,h?(h(E,Z),h.length<=1&&Z()):Z()},clone(E){return Za(E,e,n,r)}};return _e}function Ta(t){if(Wo(t))return t=lr(t),t.children=null,t}function Pu(t){return Wo(t)?t.children?t.children[0]:void 0:t}function el(t,e){t.shapeFlag&6&&t.component?el(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cf(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ze?(o.patchFlag&128&&i++,r=r.concat(Cf(o.children,e,a))):(e||o.type!==xt)&&r.push(a!=null?lr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function De(t){return ne(t)?{setup:t,name:t.name}:t}const oo=t=>!!t.type.__asyncLoader,Wo=t=>t.type.__isKeepAlive;function Hv(t,e){Ef(t,"a",e)}function zv(t,e){Ef(t,"da",e)}function Ef(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(jo(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Wo(i.parent.vnode)&&Wv(r,e,n,i),i=i.parent}}function Wv(t,e,n,r){const i=jo(e,t,r,!0);Ko(()=>{jl(r[e],i)},n)}function jo(t,e,n=at,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ni(),jr(n);const a=Ot(e,n,t,o);return nr(),ri(),a});return r?i.unshift(s):i.push(s),s}}const cn=t=>(e,n=at)=>(!Xi||t==="sp")&&jo(t,e,n),Vo=cn("bm"),br=cn("m"),jv=cn("bu"),Vv=cn("u"),qo=cn("bum"),Ko=cn("um"),qv=cn("sp"),Kv=cn("rtg"),Gv=cn("rtc");function Yv(t,e=at){jo("ec",t,e)}let tl=!0;function Xv(t){const e=If(t),n=t.proxy,r=t.ctx;tl=!1,e.beforeCreate&&Au(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:_,updated:p,activated:C,deactivated:b,beforeDestroy:k,beforeUnmount:F,destroyed:B,unmounted:H,render:q,renderTracked:_e,renderTriggered:E,errorCaptured:S,serverPrefetch:D,expose:K,inheritAttrs:Z,components:L,directives:re,filters:we}=e;if(c&&Jv(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ie=o[pe];ne(ie)&&(r[pe]=ie.bind(n))}if(i){const pe=i.call(n,n);qe(pe)&&(t.data=ln(pe))}if(tl=!0,s)for(const pe in s){const ie=s[pe],He=ne(ie)?ie.bind(n,n):ne(ie.get)?ie.get.bind(n,n):$t,bt=!ne(ie)&&ne(ie.set)?ie.set.bind(n):$t,Le=ce({get:He,set:bt});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Le.value,set:ht=>Le.value=ht})}if(a)for(const pe in a)Tf(a[pe],r,n,pe);if(l){const pe=ne(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(ie=>{zr(ie,pe[ie])})}u&&Au(u,t,"c");function he(pe,ie){Q(ie)?ie.forEach(He=>pe(He.bind(n))):ie&&pe(ie.bind(n))}if(he(Vo,d),he(br,h),he(jv,_),he(Vv,p),he(Hv,C),he(zv,b),he(Yv,S),he(Gv,_e),he(Kv,E),he(qo,F),he(Ko,H),he(qv,D),Q(K))if(K.length){const pe=t.exposed||(t.exposed={});K.forEach(ie=>{Object.defineProperty(pe,ie,{get:()=>n[ie],set:He=>n[ie]=He})})}else t.exposed||(t.exposed={});q&&t.render===$t&&(t.render=q),Z!=null&&(t.inheritAttrs=Z),L&&(t.components=L),re&&(t.directives=re)}function Jv(t,e,n=$t,r=!1){Q(t)&&(t=nl(t));for(const i in t){const s=t[i];let o;qe(s)?"default"in s?o=Ve(s.from||i,s.default,!0):o=Ve(s.from||i):o=Ve(s),et(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Au(t,e,n){Ot(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tf(t,e,n,r){const i=r.includes(".")?bf(n,r):()=>n[r];if(tt(t)){const s=e[t];ne(s)&&qt(i,s)}else if(ne(t))qt(i,t.bind(n));else if(qe(t))if(Q(t))t.forEach(s=>Tf(s,e,n,r));else{const s=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(s)&&qt(i,s,t)}}function If(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>ao(l,c,o,!0)),ao(l,e,o)),s.set(e,l),l}function ao(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ao(t,s,n,!0),i&&i.forEach(o=>ao(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Qv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Qv={data:ku,props:Wn,emits:Wn,methods:Wn,computed:Wn,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Wn,directives:Wn,watch:eb,provide:ku,inject:Zv};function ku(t,e){return e?t?function(){return lt(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Zv(t,e){return Wn(nl(t),nl(e))}function nl(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Wn(t,e){return t?lt(lt(Object.create(null),t),e):e}function eb(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function tb(t,e,n,r=!1){const i={},s={};no(s,Go,1),t.propsDefaults=Object.create(null),Sf(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:_v(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function nb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=be(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Uo(t.emitsOptions,h))continue;const _=e[h];if(l)if(ge(s,h))_!==s[h]&&(s[h]=_,c=!0);else{const p=Hr(h);i[p]=rl(l,a,p,_,t,!1)}else _!==s[h]&&(s[h]=_,c=!0)}}}else{Sf(t,e,i,s)&&(c=!0);let u;for(const d in a)(!e||!ge(e,d)&&((u=ti(d))===d||!ge(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=rl(l,a,d,void 0,t,!0)):delete i[d]);if(s!==a)for(const d in s)(!e||!ge(e,d)&&!0)&&(delete s[d],c=!0)}c&&sn(t,"set","$attrs")}function Sf(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vs(l))continue;const c=e[l];let u;i&&ge(i,u=Hr(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Uo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=be(n),c=a||Re;for(let u=0;u<s.length;u++){const d=s[u];n[d]=rl(i,l,d,c[d],t,!ge(c,d))}}return o}function rl(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(jr(i),r=c[n]=l.call(null,e),nr())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ti(n))&&(r=!0))}return r}function xf(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=d=>{l=!0;const[h,_]=xf(d,e,!0);lt(o,h),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,Or),Or;if(Q(s))for(let u=0;u<s.length;u++){const d=Hr(s[u]);Nu(d)&&(o[d]=Re)}else if(s)for(const u in s){const d=Hr(u);if(Nu(d)){const h=s[u],_=o[d]=Q(h)||ne(h)?{type:h}:h;if(_){const p=Du(Boolean,_.type),C=Du(String,_.type);_[0]=p>-1,_[1]=C<0||p<C,(p>-1||ge(_,"default"))&&a.push(d)}}}const c=[o,a];return r.set(t,c),c}function Nu(t){return t[0]!=="$"}function Ou(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Mu(t,e){return Ou(t)===Ou(e)}function Du(t,e){return Q(e)?e.findIndex(n=>Mu(n,t)):ne(e)&&Mu(e,t)?0:-1}const Rf=t=>t[0]==="_"||t==="$stable",ic=t=>Q(t)?t.map(Vt):[Vt(t)],rb=(t,e,n)=>{const r=rc((...i)=>ic(e(...i)),n);return r._c=!1,r},Pf=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Rf(i))continue;const s=t[i];if(ne(s))e[i]=rb(i,s,r);else if(s!=null){const o=ic(s);e[i]=()=>o}}},Af=(t,e)=>{const n=ic(e);t.slots.default=()=>n},ib=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=be(e),no(e,"_",n)):Pf(e,t.slots={})}else t.slots={},e&&Af(t,e);no(t.slots,Go,1)},sb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(lt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Pf(e,i)),o=e}else e&&(Af(t,e),o={default:1});if(s)for(const a in i)!Rf(a)&&!(a in o)&&delete i[a]};function ob(t,e){const n=mt;if(n===null)return t;const r=Xo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Re]=e[s];ne(o)&&(o={mounted:o,updated:o}),o.deep&&Gn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Un(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(ni(),Ot(l,n,8,[t.el,a,t,e]),ri())}}function kf(){return{app:null,config:{isNativeTag:F_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ab=0;function lb(t,e){return function(r,i=null){ne(r)||(r=Object.assign({},r)),i!=null&&!qe(i)&&(i=null);const s=kf(),o=new Set;let a=!1;const l=s.app={_uid:ab++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:xb,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=We(r,i);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Xo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function il(t,e,n,r,i=!1){if(Q(t)){t.forEach((h,_)=>il(h,e&&(Q(e)?e[_]:e),n,r,i));return}if(oo(r)&&!i)return;const s=r.shapeFlag&4?Xo(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(tt(c)?(u[c]=null,ge(d,c)&&(d[c]=null)):et(c)&&(c.value=null)),ne(l))Sn(l,a,12,[o,u]);else{const h=tt(l),_=et(l);if(h||_){const p=()=>{if(t.f){const C=h?u[l]:l.value;i?Q(C)&&jl(C,s):Q(C)?C.includes(s)||C.push(s):h?(u[l]=[s],ge(d,l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ge(d,l)&&(d[l]=o)):et(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,wt(p,n)):p()}}}const wt=Lv;function cb(t){return ub(t)}function ub(t,e){const n=W_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:_=$t,cloneNode:p,insertStaticContent:C}=t,b=(f,g,v,y=null,w=null,A=null,M=!1,R=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!qn(f,g)&&(y=dn(f),ft(f,w,A,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:T,ref:W,shapeFlag:U}=g;switch(T){case sc:k(f,g,v,y);break;case xt:F(f,g,v,y);break;case Ks:f==null&&B(g,v,y,M);break;case ze:re(f,g,v,y,w,A,M,R,N);break;default:U&1?_e(f,g,v,y,w,A,M,R,N):U&6?we(f,g,v,y,w,A,M,R,N):(U&64||U&128)&&T.process(f,g,v,y,w,A,M,R,N,At)}W!=null&&w&&il(W,f&&f.ref,A,g||f,!g)},k=(f,g,v,y)=>{if(f==null)r(g.el=a(g.children),v,y);else{const w=g.el=f.el;g.children!==f.children&&c(w,g.children)}},F=(f,g,v,y)=>{f==null?r(g.el=l(g.children||""),v,y):g.el=f.el},B=(f,g,v,y)=>{[f.el,f.anchor]=C(f.children,g,v,y,f.el,f.anchor)},H=({el:f,anchor:g},v,y)=>{let w;for(;f&&f!==g;)w=h(f),r(f,v,y),f=w;r(g,v,y)},q=({el:f,anchor:g})=>{let v;for(;f&&f!==g;)v=h(f),i(f),f=v;i(g)},_e=(f,g,v,y,w,A,M,R,N)=>{M=M||g.type==="svg",f==null?E(g,v,y,w,A,M,R,N):K(f,g,w,A,M,R,N)},E=(f,g,v,y,w,A,M,R)=>{let N,T;const{type:W,props:U,shapeFlag:z,transition:G,patchFlag:ae,dirs:Ce}=f;if(f.el&&p!==void 0&&ae===-1)N=f.el=p(f.el);else{if(N=f.el=o(f.type,A,U&&U.is,U),z&8?u(N,f.children):z&16&&D(f.children,N,null,y,w,A&&W!=="foreignObject",M,R),Ce&&Un(f,null,y,"created"),U){for(const Ee in U)Ee!=="value"&&!Vs(Ee)&&s(N,Ee,null,U[Ee],A,f.children,y,w,Je);"value"in U&&s(N,"value",null,U.value),(T=U.onVnodeBeforeMount)&&zt(T,y,f)}S(N,f,f.scopeId,M,y)}Ce&&Un(f,null,y,"beforeMount");const fe=(!w||w&&!w.pendingBranch)&&G&&!G.persisted;fe&&G.beforeEnter(N),r(N,g,v),((T=U&&U.onVnodeMounted)||fe||Ce)&&wt(()=>{T&&zt(T,y,f),fe&&G.enter(N),Ce&&Un(f,null,y,"mounted")},w)},S=(f,g,v,y,w)=>{if(v&&_(f,v),y)for(let A=0;A<y.length;A++)_(f,y[A]);if(w){let A=w.subTree;if(g===A){const M=w.vnode;S(f,M,M.scopeId,M.slotScopeIds,w.parent)}}},D=(f,g,v,y,w,A,M,R,N=0)=>{for(let T=N;T<f.length;T++){const W=f[T]=R?vn(f[T]):Vt(f[T]);b(null,W,g,v,y,w,A,M,R)}},K=(f,g,v,y,w,A,M)=>{const R=g.el=f.el;let{patchFlag:N,dynamicChildren:T,dirs:W}=g;N|=f.patchFlag&16;const U=f.props||Re,z=g.props||Re;let G;v&&Hn(v,!1),(G=z.onVnodeBeforeUpdate)&&zt(G,v,g,f),W&&Un(g,f,v,"beforeUpdate"),v&&Hn(v,!0);const ae=w&&g.type!=="foreignObject";if(T?Z(f.dynamicChildren,T,R,v,y,ae,A):M||He(f,g,R,null,v,y,ae,A,!1),N>0){if(N&16)L(R,g,U,z,v,y,w);else if(N&2&&U.class!==z.class&&s(R,"class",null,z.class,w),N&4&&s(R,"style",U.style,z.style,w),N&8){const Ce=g.dynamicProps;for(let fe=0;fe<Ce.length;fe++){const Ee=Ce[fe],I=U[Ee],$=z[Ee];($!==I||Ee==="value")&&s(R,Ee,I,$,w,f.children,v,y,Je)}}N&1&&f.children!==g.children&&u(R,g.children)}else!M&&T==null&&L(R,g,U,z,v,y,w);((G=z.onVnodeUpdated)||W)&&wt(()=>{G&&zt(G,v,g,f),W&&Un(g,f,v,"updated")},y)},Z=(f,g,v,y,w,A,M)=>{for(let R=0;R<g.length;R++){const N=f[R],T=g[R],W=N.el&&(N.type===ze||!qn(N,T)||N.shapeFlag&70)?d(N.el):v;b(N,T,W,null,y,w,A,M,!0)}},L=(f,g,v,y,w,A,M)=>{if(v!==y){for(const R in y){if(Vs(R))continue;const N=y[R],T=v[R];N!==T&&R!=="value"&&s(f,R,T,N,M,g.children,w,A,Je)}if(v!==Re)for(const R in v)!Vs(R)&&!(R in y)&&s(f,R,v[R],null,M,g.children,w,A,Je);"value"in y&&s(f,"value",v.value,y.value)}},re=(f,g,v,y,w,A,M,R,N)=>{const T=g.el=f?f.el:a(""),W=g.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:z,slotScopeIds:G}=g;G&&(R=R?R.concat(G):G),f==null?(r(T,v,y),r(W,v,y),D(g.children,v,W,w,A,M,R,N)):U>0&&U&64&&z&&f.dynamicChildren?(Z(f.dynamicChildren,z,v,w,A,M,R),(g.key!=null||w&&g===w.subTree)&&Nf(f,g,!0)):He(f,g,v,W,w,A,M,R,N)},we=(f,g,v,y,w,A,M,R,N)=>{g.slotScopeIds=R,f==null?g.shapeFlag&512?w.ctx.activate(g,v,y,M,N):Se(g,v,y,w,A,M,N):he(f,g,N)},Se=(f,g,v,y,w,A,M)=>{const R=f.component=wb(f,y,w);if(Wo(f)&&(R.ctx.renderer=At),Cb(R),R.asyncDep){if(w&&w.registerDep(R,pe),!f.el){const N=R.subTree=We(xt);F(null,N,g,v)}return}pe(R,f,g,v,w,A,M)},he=(f,g,v)=>{const y=g.component=f.component;if(Ov(f,g,v))if(y.asyncDep&&!y.asyncResolved){ie(y,g,v);return}else y.next=g,Iv(y.update),y.update();else g.component=f.component,g.el=f.el,y.vnode=g},pe=(f,g,v,y,w,A,M)=>{const R=()=>{if(f.isMounted){let{next:W,bu:U,u:z,parent:G,vnode:ae}=f,Ce=W,fe;Hn(f,!1),W?(W.el=ae.el,ie(f,W,M)):W=ae,U&&qs(U),(fe=W.props&&W.props.onVnodeBeforeUpdate)&&zt(fe,G,W,ae),Hn(f,!0);const Ee=Ea(f),I=f.subTree;f.subTree=Ee,b(I,Ee,d(I.el),dn(I),f,w,A),W.el=Ee.el,Ce===null&&Mv(f,Ee.el),z&&wt(z,w),(fe=W.props&&W.props.onVnodeUpdated)&&wt(()=>zt(fe,G,W,ae),w)}else{let W;const{el:U,props:z}=g,{bm:G,m:ae,parent:Ce}=f,fe=oo(g);if(Hn(f,!1),G&&qs(G),!fe&&(W=z&&z.onVnodeBeforeMount)&&zt(W,Ce,g),Hn(f,!0),U&&Ln){const Ee=()=>{f.subTree=Ea(f),Ln(U,f.subTree,f,w,null)};fe?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Ee()):Ee()}else{const Ee=f.subTree=Ea(f);b(null,Ee,v,y,f,w,A),g.el=Ee.el}if(ae&&wt(ae,w),!fe&&(W=z&&z.onVnodeMounted)){const Ee=g;wt(()=>zt(W,Ce,Ee),w)}g.shapeFlag&256&&f.a&&wt(f.a,w),f.isMounted=!0,g=v=y=null}},N=f.effect=new Gl(R,()=>ff(f.update),f.scope),T=f.update=N.run.bind(N);T.id=f.uid,Hn(f,!0),T()},ie=(f,g,v)=>{g.component=f;const y=f.vnode.props;f.vnode=g,f.next=null,nb(f,g.props,y,v),sb(f,g.children,v),ni(),nc(void 0,f.update),ri()},He=(f,g,v,y,w,A,M,R,N=!1)=>{const T=f&&f.children,W=f?f.shapeFlag:0,U=g.children,{patchFlag:z,shapeFlag:G}=g;if(z>0){if(z&128){Le(T,U,v,y,w,A,M,R,N);return}else if(z&256){bt(T,U,v,y,w,A,M,R,N);return}}G&8?(W&16&&Je(T,w,A),U!==T&&u(v,U)):W&16?G&16?Le(T,U,v,y,w,A,M,R,N):Je(T,w,A,!0):(W&8&&u(v,""),G&16&&D(U,v,y,w,A,M,R,N))},bt=(f,g,v,y,w,A,M,R,N)=>{f=f||Or,g=g||Or;const T=f.length,W=g.length,U=Math.min(T,W);let z;for(z=0;z<U;z++){const G=g[z]=N?vn(g[z]):Vt(g[z]);b(f[z],G,v,null,w,A,M,R,N)}T>W?Je(f,w,A,!0,!1,U):D(g,v,y,w,A,M,R,N,U)},Le=(f,g,v,y,w,A,M,R,N)=>{let T=0;const W=g.length;let U=f.length-1,z=W-1;for(;T<=U&&T<=z;){const G=f[T],ae=g[T]=N?vn(g[T]):Vt(g[T]);if(qn(G,ae))b(G,ae,v,null,w,A,M,R,N);else break;T++}for(;T<=U&&T<=z;){const G=f[U],ae=g[z]=N?vn(g[z]):Vt(g[z]);if(qn(G,ae))b(G,ae,v,null,w,A,M,R,N);else break;U--,z--}if(T>U){if(T<=z){const G=z+1,ae=G<W?g[G].el:y;for(;T<=z;)b(null,g[T]=N?vn(g[T]):Vt(g[T]),v,ae,w,A,M,R,N),T++}}else if(T>z)for(;T<=U;)ft(f[T],w,A,!0),T++;else{const G=T,ae=T,Ce=new Map;for(T=ae;T<=z;T++){const ye=g[T]=N?vn(g[T]):Vt(g[T]);ye.key!=null&&Ce.set(ye.key,T)}let fe,Ee=0;const I=z-ae+1;let $=!1,Y=0;const me=new Array(I);for(T=0;T<I;T++)me[T]=0;for(T=G;T<=U;T++){const ye=f[T];if(Ee>=I){ft(ye,w,A,!0);continue}let Fe;if(ye.key!=null)Fe=Ce.get(ye.key);else for(fe=ae;fe<=z;fe++)if(me[fe-ae]===0&&qn(ye,g[fe])){Fe=fe;break}Fe===void 0?ft(ye,w,A,!0):(me[Fe-ae]=T+1,Fe>=Y?Y=Fe:$=!0,b(ye,g[Fe],v,null,w,A,M,R,N),Ee++)}const Oe=$?db(me):Or;for(fe=Oe.length-1,T=I-1;T>=0;T--){const ye=ae+T,Fe=g[ye],Te=ye+1<W?g[ye+1].el:y;me[T]===0?b(null,Fe,v,Te,w,A,M,R,N):$&&(fe<0||T!==Oe[fe]?ht(Fe,v,Te,2):fe--)}}},ht=(f,g,v,y,w=null)=>{const{el:A,type:M,transition:R,children:N,shapeFlag:T}=f;if(T&6){ht(f.component.subTree,g,v,y);return}if(T&128){f.suspense.move(g,v,y);return}if(T&64){M.move(f,g,v,At);return}if(M===ze){r(A,g,v);for(let U=0;U<N.length;U++)ht(N[U],g,v,y);r(f.anchor,g,v);return}if(M===Ks){H(f,g,v);return}if(y!==2&&T&1&&R)if(y===0)R.beforeEnter(A),r(A,g,v),wt(()=>R.enter(A),w);else{const{leave:U,delayLeave:z,afterLeave:G}=R,ae=()=>r(A,g,v),Ce=()=>{U(A,()=>{ae(),G&&G()})};z?z(A,ae,Ce):Ce()}else r(A,g,v)},ft=(f,g,v,y=!1,w=!1)=>{const{type:A,props:M,ref:R,children:N,dynamicChildren:T,shapeFlag:W,patchFlag:U,dirs:z}=f;if(R!=null&&il(R,null,v,f,!0),W&256){g.ctx.deactivate(f);return}const G=W&1&&z,ae=!oo(f);let Ce;if(ae&&(Ce=M&&M.onVnodeBeforeUnmount)&&zt(Ce,g,f),W&6)vi(f.component,v,y);else{if(W&128){f.suspense.unmount(v,y);return}G&&Un(f,null,g,"beforeUnmount"),W&64?f.type.remove(f,g,v,w,At,y):T&&(A!==ze||U>0&&U&64)?Je(T,g,v,!1,!0):(A===ze&&U&384||!w&&W&16)&&Je(N,g,v),y&&Er(f)}(ae&&(Ce=M&&M.onVnodeUnmounted)||G)&&wt(()=>{Ce&&zt(Ce,g,f),G&&Un(f,null,g,"unmounted")},v)},Er=f=>{const{type:g,el:v,anchor:y,transition:w}=f;if(g===ze){_i(v,y);return}if(g===Ks){q(f);return}const A=()=>{i(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:R}=w,N=()=>M(v,A);R?R(f.el,A,N):N()}else A()},_i=(f,g)=>{let v;for(;f!==g;)v=h(f),i(f),f=v;i(g)},vi=(f,g,v)=>{const{bum:y,scope:w,update:A,subTree:M,um:R}=f;y&&qs(y),w.stop(),A&&(A.active=!1,ft(M,f,g,v)),R&&wt(R,g),wt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Je=(f,g,v,y=!1,w=!1,A=0)=>{for(let M=A;M<f.length;M++)ft(f[M],g,v,y,w)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Tr=(f,g,v)=>{f==null?g._vnode&&ft(g._vnode,null,null,!0):b(g._vnode||null,f,g,null,null,null,v),mf(),g._vnode=f},At={p:b,um:ft,m:ht,r:Er,mt:Se,mc:D,pc:He,pbc:Z,n:dn,o:t};let Dn,Ln;return e&&([Dn,Ln]=e(At)),{render:Tr,hydrate:Dn,createApp:lb(Tr,Dn)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Nf(t,e,n=!1){const r=t.children,i=e.children;if(Q(r)&&Q(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=vn(i[s]),a.el=o.el),n||Nf(o,a))}}function db(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const hb=t=>t.__isTeleport,fb=Symbol(),ze=Symbol(void 0),sc=Symbol(void 0),xt=Symbol(void 0),Ks=Symbol(void 0),Di=[];let tr=null;function de(t=!1){Di.push(tr=t?null:[])}function pb(){Di.pop(),tr=Di[Di.length-1]||null}let lo=1;function Lu(t){lo+=t}function Of(t){return t.dynamicChildren=lo>0?tr||Or:null,pb(),lo>0&&tr&&tr.push(t),t}function Me(t,e,n,r,i,s){return Of(je(t,e,n,r,i,s,!0))}function Pt(t,e,n,r,i){return Of(We(t,e,n,r,i,!0))}function Gi(t){return t?t.__v_isVNode===!0:!1}function qn(t,e){return t.type===e.type&&t.key===e.key}const Go="__vInternal",Mf=({key:t})=>t!=null?t:null,Gs=({ref:t,ref_key:e,ref_for:n})=>t!=null?tt(t)||et(t)||ne(t)?{i:mt,r:t,k:e,f:!!n}:t:null;function je(t,e=null,n=null,r=0,i=null,s=t===ze?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mf(e),ref:e&&Gs(e),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(oc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),lo>0&&!o&&tr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tr.push(l),l}const We=gb;function gb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===fb)&&(t=xt),Gi(t)){const a=lr(t,e,!0);return n&&oc(a,n),a}if(Sb(t)&&(t=t.__vccOpts),e){e=mb(e);let{class:a,style:l}=e;a&&!tt(a)&&(e.class=vr(a)),qe(l)&&(sf(l)&&!Q(l)&&(l=lt({},l)),e.style=us(l))}const o=tt(t)?1:Dv(t)?128:hb(t)?64:qe(t)?4:ne(t)?2:0;return je(t,e,n,r,i,o,s,!0)}function mb(t){return t?sf(t)||Go in t?lt({},t):t:null}function lr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Df(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Mf(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(Gs(e)):[i,Gs(e)]:Gs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&lr(t.ssContent),ssFallback:t.ssFallback&&lr(t.ssFallback),el:t.el,anchor:t.anchor}}function Yo(t=" ",e=0){return We(sc,null,t,e)}function En(t="",e=!1){return e?(de(),Pt(xt,null,t)):We(xt,null,t)}function Vt(t){return t==null||typeof t=="boolean"?We(xt):Q(t)?We(ze,null,t.slice()):typeof t=="object"?vn(t):We(sc,null,String(t))}function vn(t){return t.el===null||t.memo?t:lr(t)}function oc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),oc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Go in e)?e._ctx=mt:i===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[Yo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Df(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=vr([e.class,r.class]));else if(i==="style")e.style=us([e.style,r.style]);else if(Mo(i)){const s=e[i],o=r[i];o&&s!==o&&!(Q(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function zt(t,e,n,r=null){Ot(t,e,7,[n,r])}function Yi(t,e,n,r){let i;const s=n&&n[r];if(Q(t)||tt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(qe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function _b(t,e,n={},r,i){if(mt.isCE||mt.parent&&oo(mt.parent)&&mt.parent.isCE)return We("slot",e==="default"?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),de();const o=s&&Lf(s(n)),a=Pt(ze,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Lf(t){return t.some(e=>Gi(e)?!(e.type===xt||e.type===ze&&!Lf(e.children)):!0)?t:null}const sl=t=>t?Ff(t)?Xo(t)||t.proxy:sl(t.parent):null,co=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sl(t.parent),$root:t=>sl(t.root),$emit:t=>t.emit,$options:t=>If(t),$forceUpdate:t=>()=>ff(t.update),$nextTick:t=>hf.bind(t.proxy),$watch:t=>$v.bind(t)}),vb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==Re&&ge(r,e))return o[e]=1,r[e];if(i!==Re&&ge(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ge(c,e))return o[e]=3,s[e];if(n!==Re&&ge(n,e))return o[e]=4,n[e];tl&&(o[e]=0)}}const u=co[e];let d,h;if(u)return e==="$attrs"&&Rt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Re&&ge(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ge(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==Re&&ge(i,e)?(i[e]=n,!0):r!==Re&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Re&&ge(t,o)||e!==Re&&ge(e,o)||(a=s[0])&&ge(a,o)||ge(r,o)||ge(co,o)||ge(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},bb=kf();let yb=0;function wb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||bb,s={uid:yb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xf(r,i),emitsOptions:vf(r,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Rv.bind(null,s),t.ce&&t.ce(s),s}let at=null;const ac=()=>at||mt,jr=t=>{at=t,t.scope.on()},nr=()=>{at&&at.scope.off(),at=null};function Ff(t){return t.vnode.shapeFlag&4}let Xi=!1;function Cb(t,e=!1){Xi=e;const{props:n,children:r}=t.vnode,i=Ff(t);tb(t,n,i,e),ib(t,r);const s=i?Eb(t,e):void 0;return Xi=!1,s}function Eb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=of(new Proxy(t.ctx,vb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Ib(t):null;jr(t),ni();const s=Sn(r,t,0,[t.props,i]);if(ri(),nr(),Wh(s)){if(s.then(nr,nr),e)return s.then(o=>{Fu(t,o,e)}).catch(o=>{Bo(o,t,0)});t.asyncDep=s}else Fu(t,s,e)}else $f(t,e)}function Fu(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=cf(e)),$f(t,n)}let $u;function $f(t,e,n){const r=t.type;if(!t.render){if(!e&&$u&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=lt(lt({isCustomElement:s,delimiters:a},o),l);r.render=$u(i,c)}}t.render=r.render||$t}jr(t),ni(),Xv(t),ri(),nr()}function Tb(t){return new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}})}function Ib(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Tb(t))},slots:t.slots,emit:t.emit,expose:e}}function Xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cf(of(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)}}))}function Sb(t){return ne(t)&&"__vccOpts"in t}const ce=(t,e)=>uf(t,e,Xi);function O(t,e,n){const r=arguments.length;return r===2?qe(e)&&!Q(e)?Gi(e)?We(t,null,[e]):We(t,e):We(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gi(n)&&(n=[n]),We(t,e,n))}const xb="3.2.33",Rb="http://www.w3.org/2000/svg",Kn=typeof document!="undefined"?document:null,Bu=Kn&&Kn.createElement("template"),Pb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Kn.createElementNS(Rb,t):Kn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Bu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Bu.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ab(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kb(t,e,n){const r=t.style,i=tt(n);if(n&&!i){for(const s in n)ol(r,s,n[s]);if(e&&!tt(e))for(const s in e)n[s]==null&&ol(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Uu=/\s*!important$/;function ol(t,e,n){if(Q(n))n.forEach(r=>ol(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Nb(t,e);Uu.test(n)?t.setProperty(ti(r),n.replace(Uu,""),"important"):t[r]=n}}const Hu=["Webkit","Moz","ms"],Ia={};function Nb(t,e){const n=Ia[e];if(n)return n;let r=Hr(e);if(r!=="filter"&&r in t)return Ia[e]=r;r=qh(r);for(let i=0;i<Hu.length;i++){const s=Hu[i]+r;if(s in t)return Ia[e]=s}return e}const zu="http://www.w3.org/1999/xlink";function Ob(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zu,e.slice(6,e.length)):t.setAttributeNS(zu,e,n);else{const s=O_(e);n==null||s&&!Uh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Mb(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Uh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Bf,Db]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let al=0;const Lb=Promise.resolve(),Fb=()=>{al=0},$b=()=>al||(Lb.then(Fb),al=Bf());function Ar(t,e,n,r){t.addEventListener(e,n,r)}function Bb(t,e,n,r){t.removeEventListener(e,n,r)}function Ub(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Hb(e);if(r){const c=s[e]=zb(r,i);Ar(t,a,c,l)}else o&&(Bb(t,a,o,l),s[e]=void 0)}}const Wu=/(?:Once|Passive|Capture)$/;function Hb(t){let e;if(Wu.test(t)){e={};let n;for(;n=t.match(Wu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ti(t.slice(2)),e]}function zb(t,e){const n=r=>{const i=r.timeStamp||Bf();(Db||i>=n.attached-1)&&Ot(Wb(r,n.value),e,5,[r])};return n.value=t,n.attached=$b(),n}function Wb(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ju=/^on[a-z]/,jb=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?Ab(t,r,i):e==="style"?kb(t,n,r):Mo(e)?Wl(e)||Ub(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vb(t,e,r,i))?Mb(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ob(t,e,r,i))};function Vb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ju.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ju.test(e)&&tt(n)?!1:e in t}function lc(t){const e=ac();if(!e)return;const n=()=>ll(e.subTree,t(e.proxy));Fv(n),br(()=>{const r=new MutationObserver(n);r.observe(e.subTree.el.parentNode,{childList:!0}),Ko(()=>r.disconnect())})}function ll(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ll(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Vu(t.el,e);else if(t.type===ze)t.children.forEach(n=>ll(n,e));else if(t.type===Ks){let{el:n,anchor:r}=t;for(;n&&(Vu(n,e),n!==r);)n=n.nextSibling}}function Vu(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const pn="transition",wi="animation",Ji=(t,{slots:e})=>O(yf,qb(t),e);Ji.displayName="Transition";const Uf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ji.props=lt({},yf.props,Uf);const zn=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},qu=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function qb(t){const e={};for(const L in t)L in Uf||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,p=Kb(i),C=p&&p[0],b=p&&p[1],{onBeforeEnter:k,onEnter:F,onEnterCancelled:B,onLeave:H,onLeaveCancelled:q,onBeforeAppear:_e=k,onAppear:E=F,onAppearCancelled:S=B}=e,D=(L,re,we)=>{Sr(L,re?u:a),Sr(L,re?c:o),we&&we()},K=(L,re)=>{Sr(L,_),Sr(L,h),re&&re()},Z=L=>(re,we)=>{const Se=L?E:F,he=()=>D(re,L,we);zn(Se,[re,he]),Ku(()=>{Sr(re,L?l:s),gn(re,L?u:a),qu(Se)||Gu(re,r,C,he)})};return lt(e,{onBeforeEnter(L){zn(k,[L]),gn(L,s),gn(L,o)},onBeforeAppear(L){zn(_e,[L]),gn(L,l),gn(L,c)},onEnter:Z(!1),onAppear:Z(!0),onLeave(L,re){const we=()=>K(L,re);gn(L,d),Xb(),gn(L,h),Ku(()=>{Sr(L,d),gn(L,_),qu(H)||Gu(L,r,b,we)}),zn(H,[L,we])},onEnterCancelled(L){D(L,!1),zn(B,[L])},onAppearCancelled(L){D(L,!0),zn(S,[L])},onLeaveCancelled(L){K(L),zn(q,[L])}})}function Kb(t){if(t==null)return null;if(qe(t))return[Sa(t.enter),Sa(t.leave)];{const e=Sa(t);return[e,e]}}function Sa(t){return ro(t)}function gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Sr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ku(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Gb=0;function Gu(t,e,n,r){const i=t._endId=++Gb,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Yb(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=_=>{_.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Yb(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(pn+"Delay"),s=r(pn+"Duration"),o=Yu(i,s),a=r(wi+"Delay"),l=r(wi+"Duration"),c=Yu(a,l);let u=null,d=0,h=0;e===pn?o>0&&(u=pn,d=o,h=s.length):e===wi?c>0&&(u=wi,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?pn:wi:null,h=u?u===pn?s.length:l.length:0);const _=u===pn&&/\b(transform|all)(,|$)/.test(n[pn+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:_}}function Yu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Xu(n)+Xu(t[r])))}function Xu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Xb(){return document.body.offsetHeight}const Ju=t=>{const e=t.props["onUpdate:modelValue"];return Q(e)?n=>qs(e,n):e};function Jb(t){t.target.composing=!0}function Qu(t){const e=t.target;e.composing&&(e.composing=!1,Qb(e,"input"))}function Qb(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Zb={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Ju(i);const s=r||i.props&&i.props.type==="number";Ar(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=ro(a)),t._assign(a)}),n&&Ar(t,"change",()=>{t.value=t.value.trim()}),e||(Ar(t,"compositionstart",Jb),Ar(t,"compositionend",Qu),Ar(t,"change",Qu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Ju(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&ro(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ey=["ctrl","shift","alt","meta"],ty={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ey.some(n=>t[`${n}Key`]&&!e.includes(n))},ny=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=ty[e[i]];if(s&&s(n,e))return}return t(n,...r)},ry=lt({patchProp:jb},Pb);let Zu;function iy(){return Zu||(Zu=cb(ry))}const sy=(...t)=>{const e=iy().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=oy(r);if(!i)return;const s=e._component;!ne(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function oy(t){return tt(t)?document.querySelector(t):t}/**
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
 */const Hf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw ii(e)},ii=function(t){return new Error("Firebase Database ("+Hf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const zf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ay=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(n[u],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ay(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wf=function(t){const e=zf(t);return cc.encodeByteArray(e,!0)},jf=function(t){return Wf(t).replace(/\./g,"")},cl=function(t){try{return cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ly(t){return Vf(void 0,t)}function Vf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cy(n)||(t[n]=Vf(t[n],e[n]));return t}function cy(t){return t!=="__proto__"}/**
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
 */class ds{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function uy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dy(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kf(){return Hf.NODE_ADMIN===!0}function hy(){return typeof indexedDB=="object"}function fy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const py="FirebaseError";class si extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=py,Object.setPrototypeOf(this,si.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gy(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new si(i,a,r)}}function gy(t,e){return t.replace(my,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const my=/\{\$([^}]+)}/g;/**
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
 */function Qi(t){return JSON.parse(t)}function Xe(t){return JSON.stringify(t)}/**
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
 */const Gf=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Qi(cl(s[0])||""),n=Qi(cl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},_y=function(t){const e=Gf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vy=function(t){const e=Gf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ul(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ed(s)&&ed(o)){if(!ho(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ed(t){return t!==null&&typeof t=="object"}/**
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
 */function oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class by{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function yy(t,e){const n=new wy(t,e);return n.subscribe.bind(n)}class wy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xa),i.error===void 0&&(i.error=xa),i.complete===void 0&&(i.complete=xa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xa(){}function Jo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Ey=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qo=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ni(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class td{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Yf(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Xf(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Yf{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Xf(this._transaction.objectStore(e))}}class Xf{constructor(e){this._store=e}index(e){return new nd(this._store.index(e))}createIndex(e,n,r){return new nd(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Ni(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Ni(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Ni(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Ni(e,"Error clearing IndexedDB object store")}}class nd{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Ni(n,"Error reading from IndexedDB")}}function Ty(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new td(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new td(s.result),o.oldVersion,o.newVersion,new Yf(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jn="[DEFAULT]";/**
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
 */class Iy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ds;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xy(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sy(t){return t===jn?void 0:t}function xy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ry{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Iy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const Py={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},Ay=xe.INFO,ky={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},Ny=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ky[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=Ay,this._logHandler=Ny,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Py[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}/**
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
 */class Oy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(My(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function My(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dl="@firebase/app",rd="0.7.22";/**
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
 */const hc=new dc("@firebase/app"),Dy="@firebase/app-compat",Ly="@firebase/analytics-compat",Fy="@firebase/analytics",$y="@firebase/app-check-compat",By="@firebase/app-check",Uy="@firebase/auth",Hy="@firebase/auth-compat",zy="@firebase/database",Wy="@firebase/database-compat",jy="@firebase/functions",Vy="@firebase/functions-compat",qy="@firebase/installations",Ky="@firebase/installations-compat",Gy="@firebase/messaging",Yy="@firebase/messaging-compat",Xy="@firebase/performance",Jy="@firebase/performance-compat",Qy="@firebase/remote-config",Zy="@firebase/remote-config-compat",e0="@firebase/storage",t0="@firebase/storage-compat",n0="@firebase/firestore",r0="@firebase/firestore-compat",i0="firebase",s0="9.7.0";/**
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
 */const Jf="[DEFAULT]",o0={[dl]:"fire-core",[Dy]:"fire-core-compat",[Fy]:"fire-analytics",[Ly]:"fire-analytics-compat",[By]:"fire-app-check",[$y]:"fire-app-check-compat",[Uy]:"fire-auth",[Hy]:"fire-auth-compat",[zy]:"fire-rtdb",[Wy]:"fire-rtdb-compat",[jy]:"fire-fn",[Vy]:"fire-fn-compat",[qy]:"fire-iid",[Ky]:"fire-iid-compat",[Gy]:"fire-fcm",[Yy]:"fire-fcm-compat",[Xy]:"fire-perf",[Jy]:"fire-perf-compat",[Qy]:"fire-rc",[Zy]:"fire-rc-compat",[e0]:"fire-gcs",[t0]:"fire-gcs-compat",[n0]:"fire-fst",[r0]:"fire-fst-compat","fire-js":"fire-js",[i0]:"fire-js-all"};/**
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
 */const fo=new Map,hl=new Map;function a0(t,e){try{t.container.addComponent(e)}catch(n){hc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qr(t){const e=t.name;if(hl.has(e))return hc.debug(`There were multiple attempts to register component ${e}.`),!1;hl.set(e,t);for(const n of fo.values())a0(n,t);return!0}function fc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const l0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ur=new hs("app","Firebase",l0);/**
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
 */class c0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=s0;function u0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Jf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ur.create("bad-app-name",{appName:String(r)});const i=fo.get(r);if(i){if(ho(t,i.options)&&ho(n,i.config))return i;throw ur.create("duplicate-app",{appName:r})}const s=new Ry(r);for(const a of hl.values())s.addComponent(a);const o=new c0(t,n,s);return fo.set(r,o),o}function Qf(t=Jf){const e=fo.get(t);if(!e)throw ur.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let i=(r=o0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hc.warn(a.join(" "));return}qr(new cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const d0="firebase-heartbeat-database",h0=1,Zi="firebase-heartbeat-store";let Ra=null;function Zf(){return Ra||(Ra=Ty(d0,h0,(t,e)=>{switch(e){case 0:t.createObjectStore(Zi)}}).catch(t=>{throw ur.create("storage-open",{originalErrorMessage:t.message})})),Ra}async function f0(t){try{return(await Zf()).transaction(Zi).objectStore(Zi).get(ep(t))}catch(e){throw ur.create("storage-get",{originalErrorMessage:e.message})}}async function id(t,e){try{const r=(await Zf()).transaction(Zi,"readwrite");return await r.objectStore(Zi).put(e,ep(t)),r.complete}catch(n){throw ur.create("storage-set",{originalErrorMessage:n.message})}}function ep(t){return`${t.name}!${t.options.appId}`}/**
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
 */const p0=1024,g0=30*24*60*60*1e3;class m0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=g0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sd(),{heartbeatsToSend:n,unsentEntries:r}=_0(this._heartbeatsCache.heartbeats),i=jf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sd(){return new Date().toISOString().substring(0,10)}function _0(t,e=p0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),od(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),od(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class v0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hy()?fy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await f0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function od(t){return jf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function b0(t){qr(new cr("platform-logger",e=>new Oy(e),"PRIVATE")),qr(new cr("heartbeat",e=>new m0(e),"PRIVATE")),xn(dl,rd,t),xn(dl,rd,"esm2017"),xn("fire-js","")}b0("");var y0="firebase",w0="9.7.0";/**
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
 */xn(y0,w0,"app");function pc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function tp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C0=tp,np=new hs("auth","Firebase",tp());/**
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
 */const ad=new dc("@firebase/auth");function Ys(t,...e){ad.logLevel<=xe.ERROR&&ad.error(`Auth (${fs}): ${t}`,...e)}/**
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
 */function on(t,...e){throw gc(t,...e)}function Kt(t,...e){return gc(t,...e)}function E0(t,e,n){const r=Object.assign(Object.assign({},C0()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function gc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return np.create(t,...e)}function ee(t,e,...n){if(!t)throw gc(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ys(e),new Error(e)}function an(t,e){t||en(e)}/**
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
 */const ld=new Map;function tn(t){an(t instanceof Function,"Expected a class definition");let e=ld.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ld.set(t,e),e)}/**
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
 */function T0(t,e){const n=fc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ho(s,e!=null?e:{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function I0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function S0(){return cd()==="http:"||cd()==="https:"}function cd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function x0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S0()||uy()||"connection"in navigator)?navigator.onLine:!0}function R0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=uc()||qf()}get(){return x0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mc(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const P0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const A0=new ps(3e4,6e4);function ip(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zo(t,e,n,r,i={}){return sp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),rp.fetch()(ap(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},P0),e);try{const i=new k0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pa(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw E0(t,u,c);on(t,u)}}catch(i){if(i instanceof si)throw i;on(t,"network-request-failed")}}async function op(t,e,n,r,i={}){const s=await Zo(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ap(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mc(t.config,i):`${t.config.apiScheme}://${i}`}class k0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),A0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function N0(t,e){return Zo(t,"POST","/v1/accounts:delete",e)}async function O0(t,e){return Zo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Li(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M0(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=_c(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Li(Aa(i.auth_time)),issuedAtTime:Li(Aa(i.iat)),expirationTime:Li(Aa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Aa(t){return Number(t)*1e3}function _c(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=cl(n);return i?JSON.parse(i):(Ys("Failed to decode base64 JWT payload"),null)}catch(i){return Ys("Caught error parsing JWT payload as JSON",i),null}}function D0(t){const e=_c(t);return ee(e,"internal-error"),ee(typeof e.exp!="undefined","internal-error"),ee(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof si&&L0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function L0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class F0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(t){var e;const n=t.auth,r=await t.getIdToken(),i=await es(t,O0(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?U0(s.providerUserInfo):[],a=B0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function $0(t){const e=Ht(t);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function U0(t){return t.map(e=>{var{providerId:n}=e,r=pc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function H0(t,e){const n=await sp(t,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ap(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken!="undefined","internal-error"),ee(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):D0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await H0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ts;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
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
 */function mn(t,e){ee(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new F0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return M0(this,e)}reload(){return $0(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await es(this,N0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:H,isAnonymous:q,providerData:_e,stsTokenManager:E}=n;ee(B&&E,e,"internal-error");const S=ts.fromJSON(this.name,E);ee(typeof B=="string",e,"internal-error"),mn(d,e.name),mn(h,e.name),ee(typeof H=="boolean",e,"internal-error"),ee(typeof q=="boolean",e,"internal-error"),mn(_,e.name),mn(p,e.name),mn(C,e.name),mn(b,e.name),mn(k,e.name),mn(F,e.name);const D=new rr({uid:B,auth:e,email:h,emailVerified:H,displayName:d,isAnonymous:q,photoURL:p,phoneNumber:_,tenantId:C,stsTokenManager:S,createdAt:k,lastLoginAt:F});return _e&&Array.isArray(_e)&&(D.providerData=_e.map(K=>Object.assign({},K))),b&&(D._redirectEventId=b),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new ts;i.updateFromServerResponse(n);const s=new rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await po(s),s}}/**
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
 */class cp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cp.type="NONE";const ud=cp;/**
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
 */function Xs(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lr(tn(ud),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||tn(ud);const o=Xs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=rr._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Lr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Lr(s,e,r))}}/**
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
 */function dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(up(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pp(e))return"Blackberry";if(gp(e))return"Webos";if(vc(e))return"Safari";if((e.includes("chrome/")||dp(e))&&!e.includes("edge/"))return"Chrome";if(fp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function up(t=dt()){return/firefox\//i.test(t)}function vc(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dp(t=dt()){return/crios\//i.test(t)}function hp(t=dt()){return/iemobile/i.test(t)}function fp(t=dt()){return/android/i.test(t)}function pp(t=dt()){return/blackberry/i.test(t)}function gp(t=dt()){return/webos/i.test(t)}function ea(t=dt()){return/iphone|ipad|ipod/i.test(t)}function z0(t=dt()){var e;return ea(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W0(){return dy()&&document.documentMode===10}function mp(t=dt()){return ea(t)||fp(t)||gp(t)||pp(t)||/windows phone/i.test(t)||hp(t)}function j0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _p(t,e=[]){let n;switch(t){case"Browser":n=dd(dt());break;case"Worker":n=`${dd(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class V0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hd(this),this.idTokenSubscription=new hd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=np,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ht(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_p(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bc(t){return Ht(t)}class hd{constructor(e){this.auth=e,this.observer=null,this.addObserver=yy(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class vp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}/**
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
 */async function Fr(t,e){return op(t,"POST","/v1/accounts:signInWithIdp",ip(t,e))}/**
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
 */const q0="http://localhost";class dr extends vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
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
 */class bp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gs extends bp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends gs{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class wn extends gs{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */class Cn extends gs{constructor(){super("twitter.com")}static credential(e,n){return dr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
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
 */async function K0(t,e){return op(t,"POST","/v1/accounts:signUp",ip(t,e))}/**
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
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rr._fromIdTokenResponse(e,r,i),o=fd(r);return new kn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fd(r);return new kn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function G0(t){var e;const n=bc(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new kn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await K0(n,{returnSecureToken:!0}),i=await kn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class go extends si{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new go(e,n,r,i)}}function yp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,s,e,r):s})}async function Y0(t,e,n=!1){const r=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",r)}/**
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
 */async function X0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await es(t,yp(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=_c(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),kn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
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
 */async function J0(t,e,n=!1){const r="signIn",i=await yp(t,r,e),s=await kn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Q0(t,e,n,r){return Ht(t).onAuthStateChanged(e,n,r)}const mo="__sak";/**
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
 */class wp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Z0(){const t=dt();return vc(t)||ea(t)}const ew=1e3,tw=10;class Cp extends wp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Z0()&&j0(),this.fallbackToPolling=mp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);W0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cp.type="LOCAL";const nw=Cp;/**
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
 */class Ep extends wp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ep.type="SESSION";const Tp=Ep;/**
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
 */function rw(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await rw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
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
 */function yc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=yc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gt(){return window}function sw(t){Gt().location.href=t}/**
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
 */function Ip(){return typeof Gt().WorkerGlobalScope!="undefined"&&typeof Gt().importScripts=="function"}async function ow(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lw(){return Ip()?self:null}/**
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
 */const Sp="firebaseLocalStorageDb",cw=1,_o="firebaseLocalStorage",xp="fbase_key";class ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(t,e){return t.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function uw(){const t=indexedDB.deleteDatabase(Sp);return new ms(t).toPromise()}function pl(){const t=indexedDB.open(Sp,cw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_o,{keyPath:xp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_o)?e(r):(r.close(),await uw(),e(await pl()))})})}async function pd(t,e,n){const r=na(t,!0).put({[xp]:e,value:n});return new ms(r).toPromise()}async function dw(t,e){const n=na(t,!1).get(e),r=await new ms(n).toPromise();return r===void 0?null:r.value}function gd(t,e){const n=na(t,!0).delete(e);return new ms(n).toPromise()}const hw=800,fw=3;class Rp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ip()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(lw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ow(),!this.activeServiceWorker)return;this.sender=new iw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pl();return await pd(e,mo,"1"),await gd(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=na(i,!1).getAll();return new ms(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rp.type="LOCAL";const pw=Rp;/**
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
 */function gw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gw().appendChild(r)})}function _w(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ps(3e4,6e4);/**
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
 */function vw(t,e){return e?tn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wc extends vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bw(t){return J0(t.auth,new wc(t),t.bypassAuthState)}function yw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),X0(n,new wc(t),t.bypassAuthState)}async function ww(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Y0(n,new wc(t),t.bypassAuthState)}/**
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
 */class Pp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bw;case"linkViaPopup":case"linkViaRedirect":return ww;case"reauthViaPopup":case"reauthViaRedirect":return yw;default:on(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Cw=new ps(2e3,1e4);class kr extends Pp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Cw.get())};e()}}kr.currentPopupAction=null;/**
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
 */const Ew="pendingRedirect",ka=new Map;class Tw extends Pp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await Iw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Iw(t,e){const n=xw(e),r=Sw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Sw(t){return tn(t._redirectPersistence)}function xw(t){return Xs(Ew,t.config.apiKey,t.name)}async function Rw(t,e,n=!1){const r=bc(t),i=vw(r,e),o=await new Tw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Pw=10*60*1e3;class Aw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ap(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pw&&this.cachedEventUids.clear(),this.cachedEventUids.has(md(e))}saveEventToCache(e){this.cachedEventUids.add(md(e)),this.lastProcessedEventTime=Date.now()}}function md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ap({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ap(t);default:return!1}}/**
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
 */async function Nw(t,e={}){return Zo(t,"GET","/v1/projects",e)}/**
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
 */const Ow=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mw=/^https?/;async function Dw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nw(t);for(const n of e)try{if(Lw(n))return}catch{}on(t,"unauthorized-domain")}function Lw(t){const e=fl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Mw.test(n))return!1;if(Ow.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Fw=new ps(3e4,6e4);function _d(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $w(t){return new Promise((e,n)=>{var r,i,s;function o(){_d(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_d(),n(Kt(t,"network-request-failed"))},timeout:Fw.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const a=_w("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},mw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Js=null,e})}let Js=null;function Bw(t){return Js=Js||$w(t),Js}/**
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
 */const Uw=new ps(5e3,15e3),Hw="__/auth/iframe",zw="emulator/auth/iframe",Ww={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vw(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mc(e,zw):`https://${t.config.authDomain}/${Hw}`,r={apiKey:e.apiKey,appName:t.name,v:fs},i=jw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oi(r).slice(1)}`}async function qw(t){const e=await Bw(t),n=Gt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:Vw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ww,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=Gt().setTimeout(()=>{s(o)},Uw.get());function l(){Gt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Kw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gw=500,Yw=600,Xw="_blank",Jw="http://localhost";class vd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qw(t,e,n,r=Gw,i=Yw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Kw),{width:r.toString(),height:i.toString(),top:s,left:o}),c=dt().toLowerCase();n&&(a=dp(c)?Xw:n),up(c)&&(e=e||Jw,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[_,p])=>`${h}${_}=${p},`,"");if(z0(c)&&a!=="_self")return Zw(e||"",a),new vd(null);const d=window.open(e||"",a,u);ee(d,t,"popup-blocked");try{d.focus()}catch{}return new vd(d)}function Zw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const eC="__/auth/handler",tC="emulator/auth/handler";function bd(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:i};if(e instanceof bp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ul(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof gs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${nC(t)}?${oi(a).slice(1)}`}function nC({config:t}){return t.emulator?mc(t,tC):`https://${t.authDomain}/${eC}`}/**
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
 */const Na="webStorageSupport";class rC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tp,this._completeRedirectFn=Rw}async _openPopup(e,n,r,i){var s;an((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=bd(e,n,r,fl(),i);return Qw(e,o,yc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),sw(bd(e,n,r,fl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(an(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qw(e),r=new Aw(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Na,{type:Na},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Na];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Dw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mp()||vc()||ea()}}const iC=rC;var yd="@firebase/auth",wd="0.19.12";/**
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
 */class sC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aC(t){qr(new cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{ee(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_p(t)},u=new V0(a,l,c);return I0(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qr(new cr("auth-internal",e=>{const n=bc(e.getProvider("auth").getImmediate());return(r=>new sC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(yd,wd,oC(t)),xn(yd,wd,"esm2017")}/**
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
 */function lC(t=Qf()){const e=fc(t,"auth");return e.isInitialized()?e.getImmediate():T0(t,{popupRedirectResolver:iC,persistence:[pw,nw,Tp]})}aC("Browser");const Cd="@firebase/database",Ed="0.12.8";/**
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
 */let kp="";function cC(t){kp=t}/**
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
 */class uC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class dC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Np=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uC(e)}}catch{}return new dC},Yn=Np("localStorage"),gl=Np("sessionStorage");/**
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
 */const $r=new dc("@firebase/database"),hC=function(){let t=1;return function(){return t++}}(),Op=function(t){const e=Ey(t),n=new by;n.update(e);const r=n.digest();return cc.encodeByteArray(r)},_s=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=_s.apply(null,r):typeof r=="object"?e+=Xe(r):e+=r,e+=" "}return e};let ir=null,Td=!0;const fC=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?($r.logLevel=xe.VERBOSE,ir=$r.log.bind($r),e&&gl.set("logging_enabled",!0)):typeof t=="function"?ir=t:(ir=null,gl.remove("logging_enabled"))},ot=function(...t){if(Td===!0&&(Td=!1,ir===null&&gl.get("logging_enabled")===!0&&fC(!0)),ir){const e=_s.apply(null,t);ir(e)}},vs=function(t){return function(...e){ot(t,...e)}},ml=function(...t){const e="FIREBASE INTERNAL ERROR: "+_s(...t);$r.error(e)},hr=function(...t){const e=`FIREBASE FATAL ERROR: ${_s(...t)}`;throw $r.error(e),new Error(e)},vt=function(...t){const e="FIREBASE WARNING: "+_s(...t);$r.warn(e)},pC=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Kr="[MIN_NAME]",fr="[MAX_NAME]",yr=function(t,e){if(t===e)return 0;if(t===Kr||e===fr)return-1;if(e===Kr||t===fr)return 1;{const n=Id(t),r=Id(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mC=function(t,e){return t===e?0:t<e?-1:1},Ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},Ec=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Xe(e[r]),n+=":",n+=Ec(t[e[r]]);return n+="}",n},Mp=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ct(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dp=function(t){P(!Cc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},_C=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const yC=new RegExp("^-?(0*)\\d{1,10}$"),wC=-2147483648,CC=2147483647,Id=function(t){if(yC.test(t)){const e=Number(t);if(e>=wC&&e<=CC)return e}return null},ai=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},EC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fi=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class TC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class IC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vt(e)}}class _l{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_l.OWNER="owner";/**
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
 */const Tc="5",Lp="v",Fp="s",$p="r",Bp="f",Up=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hp="ls",SC="p",vl="ac",zp="websocket",Wp="long_polling";/**
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
 */class xC{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function RC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jp(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===zp)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Wp)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RC(t)&&(n.ns=t.namespace);const i=[];return ct(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class PC{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ly(this.counters_)}}/**
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
 */const Oa={},Ma={};function Ic(t){const e=t.toString();return Oa[e]||(Oa[e]=new PC),Oa[e]}function AC(t,e){const n=t.toString();return Ma[n]||(Ma[n]=e()),Ma[n]}/**
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
 */class kC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ai(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Sd="start",NC="close",OC="pLPCommand",MC="pRTLPCB",Vp="id",qp="pw",Kp="ser",DC="cb",LC="seg",FC="ts",$C="d",BC="dframe",Gp=1870,Yp=30,UC=Gp-Yp,HC=25e3,zC=3e4;class Nr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vs(e),this.stats_=Ic(n),this.urlFn=l=>(this.appCheckToken&&(l[vl]=this.appCheckToken),jp(n,Wp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new kC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zC)),gC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sc((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sd)this.id=a,this.password=l;else if(o===NC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Sd]="t",r[Kp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[DC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Lp]=Tc,this.transportSessionId&&(r[Fp]=this.transportSessionId),this.lastSessionId&&(r[Hp]=this.lastSessionId),this.applicationId&&(r[SC]=this.applicationId),this.appCheckToken&&(r[vl]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Up.test(location.hostname)&&(r[$p]=Bp);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nr.forceAllow_=!0}static forceDisallow(){Nr.forceDisallow_=!0}static isAvailable(){return Nr.forceAllow_?!0:!Nr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!_C()&&!vC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Wf(n),i=Mp(r,UC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BC]="t",r[Vp]=e,r[qp]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hC(),window[OC+this.uniqueCallbackIdentifier]=e,window[MC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sc.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vp]=this.myID,e[qp]=this.myPW,e[Kp]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yp+r.length<=Gp;){const o=this.pendingSegs.shift();r=r+"&"+LC+i+"="+o.seg+"&"+FC+i+"="+o.ts+"&"+$C+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(HC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const WC=16384,jC=45e3;let vo=null;typeof MozWebSocket!="undefined"?vo=MozWebSocket:typeof WebSocket!="undefined"&&(vo=WebSocket);class Lt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vs(this.connId),this.stats_=Ic(n),this.connURL=Lt.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[Lp]=Tc,typeof location!="undefined"&&location.hostname&&Up.test(location.hostname)&&(s[$p]=Bp),n&&(s[Fp]=n),r&&(s[Hp]=r),i&&(s[vl]=i),jp(e,zp,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{if(!Kf()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new vo(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vo!==null&&!Lt.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Qi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Mp(n,WC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Lt.responsesRequiredToBeHealthy=2;Lt.healthyTimeout=3e4;/**
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
 */class xc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Nr,Lt]}initTransports_(e){const n=Lt&&Lt.isAvailable();let r=n&&!Lt.previouslyFailed();if(e.webSocketOnly&&(n||vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Lt];else{const i=this.transports_=[];for(const s of xc.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const VC=6e4,qC=5e3,KC=10*1024,GC=100*1024,Da="t",xd="d",YC="s",Rd="r",XC="e",Pd="o",Ad="a",kd="n",Nd="p",JC="h";class QC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vs("c:"+this.id+":"),this.transportManager_=new xc(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Da in e){const n=e[Da];n===Ad?this.upgradeIfSecondaryHealthy_():n===Rd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ci("t",e),r=Ci("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ad,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ci("t",e),r=Ci("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ci(Da,e);if(xd in e){const r=e[xd];if(n===JC)this.onHandshake_(r);else if(n===kd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YC?this.onConnectionShutdown_(r):n===Rd?this.onReset_(r):n===XC?ml("Server Error: "+r):n===Pd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ml("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Tc!==r&&vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(VC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Xp{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Jp{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class bo extends Jp{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!uc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bo}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Od=32,Md=768;class Ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Ie("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nn(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ie(t.pieces_,e)}function Rc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ZC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ns(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ie(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ie(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function _t(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return _t(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function eE(t,e){const n=ns(t,0),r=ns(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=yr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Pc(t,e){if(Nn(t)!==Nn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Nt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Nn(t)>Nn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class tE{constructor(e,n){this.errorPrefix_=n,this.parts_=ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Qo(this.parts_[r]);Zp(this)}}function nE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qo(e),Zp(t)}function rE(t){const e=t.parts_.pop();t.byteLength_-=Qo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zp(t){if(t.byteLength_>Md)throw new Error(t.errorPrefix_+"has a key path longer than "+Md+" bytes ("+t.byteLength_+").");if(t.parts_.length>Od)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Od+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ac extends Jp{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Ac}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ei=1e3,iE=60*5*1e3,sE=3*1e3,Dd=30*1e3,oE=1.3,aE=3e4,lE="server_kill",Ld=3;class rn extends Xp{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=rn.nextPersistentConnectionId_++,this.log_=vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ei,this.maxReconnectDelay_=iE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Kf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ac.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Xe(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ds,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},sE),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;rn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const r=Vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_y(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ml("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aE&&(this.reconnectDelay_=Ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new QC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{vt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(lE)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&vt(d),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ul(this.interruptReasons_)&&(this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ec(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ld&&(this.reconnectDelay_=Dd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ld&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+kp.replace(/\./g,"-")]=1,uc()?e["framework.cordova"]=1:qf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bo.getInstance().currentlyOnline();return ul(this.interruptReasons_)&&e}}rn.nextPersistentConnectionId_=0;rn.nextConnectionId_=0;/**
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
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
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
 */class ra{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Kr,e),i=new oe(Kr,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
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
 */let Os;class eg extends ra{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return yr(e.name,n.name)}isDefinedOn(e){throw ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(fr,Os)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Os)}toString(){return".key"}}const Br=new eg;/**
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
 */class Ms{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ze.RED,this.left=i!=null?i:Ct.EMPTY_NODE,this.right=s!=null?s:Ct.EMPTY_NODE}copy(e,n,r,i,s){return new Ze(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ze.RED=!0;Ze.BLACK=!1;class cE{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ze.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ms(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new cE;/**
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
 */function uE(t,e){return yr(t.name,e.name)}function kc(t,e){return yr(t,e)}/**
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
 */let bl;function dE(t){bl=t}const tg=function(t){return typeof t=="number"?"number:"+Dp(t):"string:"+t},ng=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else P(t===bl||t.isEmpty(),"priority of unexpected type.");P(t===bl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Fd;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ng(this.priorityNode_)}static set __childrenNodeConstructor(e){Fd=e}static get __childrenNodeConstructor(){return Fd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:se(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Nn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dp(this.value_):e+=this.value_,this.lazyHash_=Op(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(n),s=Qe.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let rg,ig;function hE(t){rg=t}function fE(t){ig=t}class pE extends ra{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?yr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(fr,new Qe("[PRIORITY-POST]",ig))}makePost(e,n){const r=rg(e);return new oe(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ue=new pE;/**
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
 */const gE=Math.log(2);class mE{constructor(e){const n=s=>parseInt(Math.log(s)/gE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yo=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ze(h,d.node,Ze.BLACK,null,null);{const _=parseInt(u/2,10)+l,p=i(l,_),C=i(_+1,c);return d=t[_],h=n?n(d):d,new Ze(h,d.node,Ze.BLACK,p,C)}},s=function(l){let c=null,u=null,d=t.length;const h=function(p,C){const b=d-p,k=d;d-=p;const F=i(b+1,k),B=t[b],H=n?n(B):B;_(new Ze(H,B.node,C,null,F))},_=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const C=l.nextBitIsOne(),b=Math.pow(2,l.count-(p+1));C?h(b,Ze.BLACK):(h(b,Ze.BLACK),h(b,Ze.RED))}return u},o=new mE(t.length),a=s(o);return new Ct(r||e,a)};/**
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
 */let La;const xr={};class nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(xr&&Ue,"ChildrenNode.ts has not been loaded"),La=La||new nn({".priority":xr},{".priority":Ue}),La}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Br,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=yo(r,e.getCompare()):a=xr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new nn(u,c)}addToIndexes(e,n){const r=uo(this.indexes_,(i,s)=>{const o=Vr(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===xr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),yo(a,o.getCompare())}else return xr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new nn(r,this.indexSet_)}removeFromIndexes(e,n){const r=uo(this.indexes_,i=>{if(i===xr)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new nn(r,this.indexSet_)}}/**
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
 */let Ti;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ng(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ti||(Ti=new X(new Ct(kc),null,nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ti}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ti:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ti:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{P(se(e)!==".priority"||Nn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ue,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tg(this.getPriority().val())+":"),this.forEachChild(Ue,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Op(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bs?-1:0}withIndex(e){if(e===Br||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Br||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ue),i=n.getIterator(Ue);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Br?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _E extends X{constructor(){super(new Ct(kc),X.EMPTY_NODE,nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const bs=new _E;Object.defineProperties(oe,{MIN:{value:new oe(Kr,X.EMPTY_NODE)},MAX:{value:new oe(fr,bs)}});eg.__EMPTY_NODE=X.EMPTY_NODE;Qe.__childrenNodeConstructor=X;dE(bs);fE(bs);/**
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
 */const vE=!0;function Ye(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,Ye(e))}if(!(t instanceof Array)&&vE){const n=[];let r=!1;if(ct(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ye(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=yo(n,uE,o=>o.name,kc);if(r){const o=yo(n,Ue.getCompare());return new X(s,Ye(e),new nn({".priority":o},{".priority":Ue}))}else return new X(s,Ye(e),nn.Default)}else{let n=X.EMPTY_NODE;return ct(t,(r,i)=>{if(Yt(t,r)&&r.substring(0,1)!=="."){const s=Ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ye(e))}}hE(Ye);/**
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
 */class bE extends ra{constructor(e){super(),this.indexPath_=e,P(!ue(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?yr(e.name,n.name):s}makePost(e,n){const r=Ye(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,bs);return new oe(fr,e)}toString(){return ns(this.indexPath_,0).join("/")}}/**
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
 */class yE extends ra{compare(e,n){const r=e.node.compareTo(n.node);return r===0?yr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=Ye(e);return new oe(n,r)}toString(){return".value"}}const wE=new yE;/**
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
 */const $d="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",CE=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=$d.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$d.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function sg(t){return{type:"value",snapshotNode:t}}function Gr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function EE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Nc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(rs(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gr(n,r)):o.trackChildChange(is(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ue,(i,s)=>{n.hasChild(i)||r.trackChildChange(rs(i,s))}),n.isLeafNode()||n.forEachChild(Ue,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(is(i,s,o))}else r.trackChildChange(Gr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ss{constructor(e){this.indexedFilter_=new Nc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ss.getStartPost_(e),this.endPost_=ss.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(Ue,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class TE{constructor(e){this.rangedFilter_=new ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,_)=>d(_,h)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(s,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:i=i.updateImmediateChild(d.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new oe(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(u&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(is(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(rs(n,d));const C=a.updateImmediateChild(n,X.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Gr(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(rs(c.name,c.node)),s.trackChildChange(Gr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
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
 */class Oc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new Oc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IE(t){return t.loadsAllData()?new Nc(t.getIndex()):t.hasLimit()?new TE(t):new ss(t)}function Bd(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ue?n="$priority":t.index_===wE?n="$value":t.index_===Br?n="$key":(P(t.index_ instanceof bE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_&&(e.startAt=Xe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Xe(t.indexStartName_))),t.endSet_&&(e.endAt=Xe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Xe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ud(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ue&&(e.i=t.index_.toString()),e}/**
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
 */class wo extends Xp{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=vs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=wo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Bd(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Vr(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=wo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Bd(e._queryParams),r=e._path.toString(),i=new ds;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qi(a.responseText)}catch{vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class SE{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Co(){return{value:null,children:new Map}}function og(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Co());const i=t.children.get(r);e=Ae(e),og(i,e,n)}}function yl(t,e,n){t.value!==null?n(e,t.value):xE(t,(r,i)=>{const s=new Ie(e.toString()+"/"+r);yl(i,s,n)})}function xE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class RE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ct(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Hd=10*1e3,PE=30*1e3,AE=5*60*1e3;class kE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new RE(e);const r=Hd+(PE-Hd)*Math.random();Fi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ct(e,(i,s)=>{s>0&&Yt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*AE))}}/**
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
 */var Ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ft||(Ft={}));function Mc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Eo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ft.ACK_USER_WRITE,this.source=Mc()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ie(e));return new Eo(ve(),n,this.revert)}}else return P(se(this.path)===e,"operationForChild called for unrelated child."),new Eo(Ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class os{constructor(e,n){this.source=e,this.path=n,this.type=Ft.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new os(this.source,ve()):new os(this.source,Ae(this.path))}}/**
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
 */class pr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ft.OVERWRITE}operationForChild(e){return ue(this.path)?new pr(this.source,ve(),this.snap.getImmediateChild(e)):new pr(this.source,Ae(this.path),this.snap)}}/**
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
 */class Yr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ft.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Ie(e));return n.isEmpty()?null:n.value?new pr(this.source,ve(),n.value):new Yr(this.source,ve(),n)}else return P(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yr(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class On{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class NE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function OE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(EE(o.childName,o.snapshotNode))}),Ii(t,i,"child_removed",e,r,n),Ii(t,i,"child_added",e,r,n),Ii(t,i,"child_moved",s,r,n),Ii(t,i,"child_changed",e,r,n),Ii(t,i,"value",e,r,n),i}function Ii(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>DE(t,a,l)),o.forEach(a=>{const l=ME(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ME(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function DE(t,e,n){if(e.childName==null||n.childName==null)throw ii("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ia(t,e){return{eventCache:t,serverCache:e}}function $i(t,e,n,r){return ia(new On(e,n,r),t.serverCache)}function ag(t,e,n,r){return ia(t.eventCache,new On(e,n,r))}function To(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Fa;const LE=()=>(Fa||(Fa=new Ct(mC)),Fa);class Pe{constructor(e,n=LE()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return ct(e,(r,i)=>{n=n.set(new Ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(ue(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ae(e),n);return s!=null?{path:Be(new Ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(Ae(e)):new Pe(null)}}set(e,n){if(ue(e))return new Pe(n,this.children);{const r=se(e),s=(this.children.get(r)||new Pe(null)).set(Ae(e),n),o=this.children.insert(r,s);return new Pe(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(Ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Pe(null):new Pe(this.value,s)}else return this}}get(e){if(ue(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(Ae(e)):null}}setTree(e,n){if(ue(e))return n;{const r=se(e),s=(this.children.get(r)||new Pe(null)).setTree(Ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Pe(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ue(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(Ae(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(Ae(e),Be(n,i),r):new Pe(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new Pe(null))}}function Bi(t,e,n){if(ue(e))return new Bt(new Pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=_t(i,e);return s=s.updateChild(o,n),new Bt(t.writeTree_.set(i,s))}else{const i=new Pe(n),s=t.writeTree_.setTree(e,i);return new Bt(s)}}}function wl(t,e,n){let r=t;return ct(n,(i,s)=>{r=Bi(r,Be(e,i),s)}),r}function zd(t,e){if(ue(e))return Bt.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new Bt(n)}}function Cl(t,e){return wr(t,e)!=null}function wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_t(n.path,e)):null}function Wd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ue,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Rn(t,e){if(ue(e))return t;{const n=wr(t,e);return n!=null?new Bt(new Pe(n)):new Bt(t.writeTree_.subtree(e))}}function El(t){return t.writeTree_.isEmpty()}function Xr(t,e){return lg(ve(),t.writeTree_,e)}function lg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=lg(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
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
 */function sa(t,e){return hg(e,t)}function FE(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bi(t.visibleWrites,e,n)),t.lastWriteId=r}function $E(t,e,n,r){P(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=wl(t.visibleWrites,e,n),t.lastWriteId=r}function BE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function UE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&HE(a,r.path)?i=!1:Nt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return zE(t),!0;if(r.snap)t.visibleWrites=zd(t.visibleWrites,r.path);else{const a=r.children;ct(a,l=>{t.visibleWrites=zd(t.visibleWrites,Be(r.path,l))})}return!0}else return!1}function HE(t,e){if(t.snap)return Nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Nt(Be(t.path,n),e))return!0;return!1}function zE(t){t.visibleWrites=cg(t.allWrites,WE,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function WE(t){return t.visible}function cg(t,e,n){let r=Bt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Nt(n,o)?(a=_t(n,o),r=Bi(r,a,s.snap)):Nt(o,n)&&(a=_t(o,n),r=Bi(r,ve(),s.snap.getChild(a)));else if(s.children){if(Nt(n,o))a=_t(n,o),r=wl(r,a,s.children);else if(Nt(o,n))if(a=_t(o,n),ue(a))r=wl(r,ve(),s.children);else{const l=Vr(s.children,se(a));if(l){const c=l.getChild(Ae(a));r=Bi(r,ve(),c)}}}else throw ii("WriteRecord should have .snap or .children")}}return r}function ug(t,e,n,r,i){if(!r&&!i){const s=wr(t.visibleWrites,e);if(s!=null)return s;{const o=Rn(t.visibleWrites,e);if(El(o))return n;if(n==null&&!Cl(o,ve()))return null;{const a=n||X.EMPTY_NODE;return Xr(o,a)}}}else{const s=Rn(t.visibleWrites,e);if(!i&&El(s))return n;if(!i&&n==null&&!Cl(s,ve()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Nt(c.path,e)||Nt(e,c.path))},a=cg(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Xr(a,l)}}}function jE(t,e,n){let r=X.EMPTY_NODE;const i=wr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ue,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rn(t.visibleWrites,e);return n.forEachChild(Ue,(o,a)=>{const l=Xr(Rn(s,new Ie(o)),a);r=r.updateImmediateChild(o,l)}),Wd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rn(t.visibleWrites,e);return Wd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function VE(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(Cl(t.visibleWrites,s))return null;{const o=Rn(t.visibleWrites,s);return El(o)?i.getChild(n):Xr(o,i.getChild(n))}}function qE(t,e,n,r){const i=Be(e,n),s=wr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rn(t.visibleWrites,i);return Xr(o,r.getNode().getImmediateChild(n))}else return null}function KE(t,e){return wr(t.visibleWrites,e)}function GE(t,e,n,r,i,s,o){let a;const l=Rn(t.visibleWrites,e),c=wr(l,ve());if(c!=null)a=c;else if(n!=null)a=Xr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&u.length<i;)d(_,r)!==0&&u.push(_),_=h.getNext();return u}else return[]}function YE(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function Io(t,e,n,r){return ug(t.writeTree,t.treePath,e,n,r)}function Fc(t,e){return jE(t.writeTree,t.treePath,e)}function jd(t,e,n,r){return VE(t.writeTree,t.treePath,e,n,r)}function So(t,e){return KE(t.writeTree,Be(t.treePath,e))}function XE(t,e,n,r,i,s){return GE(t.writeTree,t.treePath,e,n,r,i,s)}function $c(t,e,n){return qE(t.writeTree,t.treePath,e,n)}function dg(t,e){return hg(Be(t.treePath,e),t.writeTree)}function hg(t,e){return{treePath:t,writeTree:e}}/**
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
 */class JE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,is(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,rs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Gr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,is(r,e.snapshotNode,i.oldSnap));else throw ii("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class QE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const fg=new QE;class Bc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new On(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $c(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gr(this.viewCache_),s=XE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function ZE(t){return{filter:t}}function eT(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tT(t,e,n,r,i){const s=new JE;let o,a;if(n.type===Ft.OVERWRITE){const c=n;c.source.fromUser?o=Tl(t,e,c.path,c.snap,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=xo(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Ft.MERGE){const c=n;c.source.fromUser?o=rT(t,e,c.path,c.children,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Il(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Ft.ACK_USER_WRITE){const c=n;c.revert?o=oT(t,e,c.path,r,i,s):o=iT(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Ft.LISTEN_COMPLETE)o=sT(t,e,n.path,r,s);else throw ii("Unknown operation type: "+n.type);const l=s.getChanges();return nT(e,o,l),{viewCache:o,changes:l}}function nT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=To(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(sg(To(e)))}}function pg(t,e,n,r,i,s){const o=e.eventCache;if(So(r,n)!=null)return e;{let a,l;if(ue(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=gr(e),u=c instanceof X?c:X.EMPTY_NODE,d=Fc(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Io(r,gr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=se(n);if(c===".priority"){P(Nn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=jd(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ae(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=jd(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=$c(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return $i(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function xo(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),_,null)}else{const _=se(n);if(!l.isCompleteForPath(n)&&Nn(n)>1)return e;const p=Ae(n),b=l.getNode().getImmediateChild(_).updateChild(p,r);_===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),_,b,p,fg,null)}const d=ag(e,c,l.isFullyInitialized()||ue(n),u.filtersNodes()),h=new Bc(i,d,s);return pg(t,d,n,i,h,a)}function Tl(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Bc(i,e,s);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=$i(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=$i(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ae(n),_=a.getNode().getImmediateChild(d);let p;if(ue(h))p=r;else{const C=u.getCompleteChild(d);C!=null?Rc(h)===".priority"&&C.getChild(Qp(h)).isEmpty()?p=C:p=C.updateChild(h,r):p=X.EMPTY_NODE}if(_.equals(p))l=e;else{const C=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=$i(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Vd(t,e){return t.eventCache.isCompleteForChild(e)}function rT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Be(n,l);Vd(e,se(u))&&(a=Tl(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Be(n,l);Vd(e,se(u))||(a=Tl(t,a,u,c,i,s,o))}),a}function qd(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Il(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(n)?c=r:c=new Pe(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),p=qd(t,_,h);l=xo(t,l,new Ie(d),p,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!_){const p=e.serverCache.getNode().getImmediateChild(d),C=qd(t,p,h);l=xo(t,l,new Ie(d),C,i,s,o,a)}}),l}function iT(t,e,n,r,i,s,o){if(So(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xo(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ue(n)){let c=new Pe(null);return l.getNode().forEachChild(Br,(u,d)=>{c=c.set(new Ie(u),d)}),Il(t,e,n,c,i,s,a,o)}else return e}else{let c=new Pe(null);return r.foreach((u,d)=>{const h=Be(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Il(t,e,n,c,i,s,a,o)}}function sT(t,e,n,r,i){const s=e.serverCache,o=ag(e,s.getNode(),s.isFullyInitialized()||ue(n),s.isFiltered());return pg(t,o,n,r,fg,i)}function oT(t,e,n,r,i,s){let o;if(So(r,n)!=null)return e;{const a=new Bc(r,e,i),l=e.eventCache.getNode();let c;if(ue(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Io(r,gr(e));else{const d=e.serverCache.getNode();P(d instanceof X,"serverChildren would be complete if leaf node"),u=Fc(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=se(n);let d=$c(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ae(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,X.EMPTY_NODE,Ae(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Io(r,gr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||So(r,ve())!=null,$i(e,c,o,t.filter.filtersNodes())}}/**
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
 */class aT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Nc(r.getIndex()),s=IE(r);this.processor_=ZE(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),u=new On(l,o.isFullyInitialized(),i.filtersNodes()),d=new On(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ia(d,u),this.eventGenerator_=new NE(this.query_)}get query(){return this.query_}}function lT(t){return t.viewCache_.serverCache.getNode()}function cT(t){return To(t.viewCache_)}function uT(t,e){const n=gr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Kd(t){return t.eventRegistrations_.length===0}function dT(t,e){t.eventRegistrations_.push(e)}function Gd(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Yd(t,e,n,r){e.type===Ft.MERGE&&e.source.queryId!==null&&(P(gr(t.viewCache_),"We should always have a full cache before handling merges"),P(To(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=tT(t.processor_,i,e,n,r);return eT(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,gg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function hT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ue,(s,o)=>{r.push(Gr(s,o))}),n.isFullyInitialized()&&r.push(sg(n.getNode())),gg(t,r,n.getNode(),e)}function gg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return OE(t.eventGenerator_,e,n,i)}/**
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
 */let Ro;class mg{constructor(){this.views=new Map}}function fT(t){P(!Ro,"__referenceConstructor has already been defined"),Ro=t}function pT(){return P(Ro,"Reference.ts has not been loaded"),Ro}function gT(t){return t.views.size===0}function Uc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),Yd(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Yd(o,e,n,r));return s}}function _g(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Io(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=Fc(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const c=ia(new On(a,l,!1),new On(r,i,!1));return new aT(e,c)}return o}function mT(t,e,n,r,i,s){const o=_g(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),dT(o,n),hT(o,n)}function _T(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Mn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Gd(c,n,r)),Kd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Gd(l,n,r)),Kd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Mn(t)&&s.push(new(pT())(e._repo,e._path)),{removed:s,events:o}}function vg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pn(t,e){let n=null;for(const r of t.views.values())n=n||uT(r,e);return n}function bg(t,e){if(e._queryParams.loadsAllData())return oa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function yg(t,e){return bg(t,e)!=null}function Mn(t){return oa(t)!=null}function oa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Po;function vT(t){P(!Po,"__referenceConstructor has already been defined"),Po=t}function bT(){return P(Po,"Reference.ts has not been loaded"),Po}let yT=1;class Xd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=YE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wg(t,e,n,r,i){return FE(t.pendingWriteTree_,e,n,r,i),i?li(t,new pr(Mc(),e,n)):[]}function wT(t,e,n,r){$E(t.pendingWriteTree_,e,n,r);const i=Pe.fromObject(n);return li(t,new Yr(Mc(),e,i))}function Tn(t,e,n=!1){const r=BE(t.pendingWriteTree_,e);if(UE(t.pendingWriteTree_,e)){let s=new Pe(null);return r.snap!=null?s=s.set(ve(),!0):ct(r.children,o=>{s=s.set(new Ie(o),!0)}),li(t,new Eo(r.path,s,n))}else return[]}function ys(t,e,n){return li(t,new pr(Dc(),e,n))}function CT(t,e,n){const r=Pe.fromObject(n);return li(t,new Yr(Dc(),e,r))}function ET(t,e){return li(t,new os(Dc(),e))}function TT(t,e,n){const r=zc(t,n);if(r){const i=Wc(r),s=i.path,o=i.queryId,a=_t(s,e),l=new os(Lc(o),a);return jc(t,s,l)}else return[]}function Sl(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||yg(s,e))){const a=_T(s,e,n,r);gT(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(d,h)=>Mn(h));if(c&&!u){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const h=RT(d);for(let _=0;_<h.length;++_){const p=h[_],C=p.query,b=Tg(t,p);t.listenProvider_.startListening(Ui(C),Ao(t,C),b.hashFn,b.onComplete)}}}!u&&l.length>0&&!r&&(c?t.listenProvider_.stopListening(Ui(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(aa(d));t.listenProvider_.stopListening(Ui(d),h)})),PT(t,l)}return o}function IT(t,e,n,r){const i=zc(t,r);if(i!=null){const s=Wc(i),o=s.path,a=s.queryId,l=_t(o,e),c=new pr(Lc(a),l,n);return jc(t,o,c)}else return[]}function ST(t,e,n,r){const i=zc(t,r);if(i){const s=Wc(i),o=s.path,a=s.queryId,l=_t(o,e),c=Pe.fromObject(n),u=new Yr(Lc(a),l,c);return jc(t,o,u)}else return[]}function Jd(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,h)=>{const _=_t(d,r);i=i||Pn(h,_),s=s||Mn(h)});let o=t.syncPointTree_.get(r);o?(s=s||Mn(o),i=i||Pn(o,ve())):(o=new mg,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((h,_)=>{const p=Pn(_,ve());p&&(i=i.updateImmediateChild(h,p))}));const l=yg(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=aa(e);P(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=AT();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const c=sa(t.pendingWriteTree_,r);let u=mT(o,e,n,c,i,a);if(!l&&!s){const d=bg(o,e);u=u.concat(kT(t,e,d))}return u}function Hc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_t(o,e),c=Pn(a,l);if(c)return c});return ug(i,e,s,n,!0)}function xT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=_t(c,n);r=r||Pn(u,d)});let i=t.syncPointTree_.get(n);i?r=r||Pn(i,ve()):(i=new mg,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new On(r,!0,!1):null,a=sa(t.pendingWriteTree_,e._path),l=_g(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return cT(l)}function li(t,e){return Cg(e,t.syncPointTree_,null,sa(t.pendingWriteTree_,ve()))}function Cg(t,e,n,r){if(ue(t.path))return Eg(t,e,n,r);{const i=e.get(ve());n==null&&i!=null&&(n=Pn(i,ve()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=dg(r,o);s=s.concat(Cg(a,l,c,u))}return i&&(s=s.concat(Uc(i,t,r,n))),s}}function Eg(t,e,n,r){const i=e.get(ve());n==null&&i!=null&&(n=Pn(i,ve()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dg(r,o),u=t.operationForChild(o);u&&(s=s.concat(Eg(u,a,l,c)))}),i&&(s=s.concat(Uc(i,t,r,n))),s}function Tg(t,e){const n=e.query,r=Ao(t,n);return{hashFn:()=>(lT(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?TT(t,n._path,r):ET(t,n._path);{const s=bC(i,n);return Sl(t,n,null,s)}}}}function Ao(t,e){const n=aa(e);return t.queryToTagMap.get(n)}function aa(t){return t._path.toString()+"$"+t._queryIdentifier}function zc(t,e){return t.tagToQueryMap.get(e)}function Wc(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ie(t.substr(0,e))}}function jc(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=sa(t.pendingWriteTree_,e);return Uc(r,n,i,null)}function RT(t){return t.fold((e,n,r)=>{if(n&&Mn(n))return[oa(n)];{let i=[];return n&&(i=vg(n)),ct(r,(s,o)=>{i=i.concat(o)}),i}})}function Ui(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bT())(t._repo,t._path):t}function PT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=aa(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function AT(){return yT++}function kT(t,e,n){const r=e._path,i=Ao(t,e),s=Tg(t,n),o=t.listenProvider_.startListening(Ui(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!Mn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ue(c)&&u&&Mn(u))return[oa(u).query];{let h=[];return u&&(h=h.concat(vg(u).map(_=>_.query))),ct(d,(_,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ui(u),Ao(t,u))}}return o}/**
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
 */class Vc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vc(n)}node(){return this.node_}}class qc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new qc(this.syncTree_,n)}node(){return Hc(this.syncTree_,this.path_)}}const NT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qd=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return OT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return MT(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},OT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},MT=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Ig=function(t,e,n,r){return Kc(e,new qc(n,t),r)},Sg=function(t,e,n){return Kc(t,new Vc(e),n)};function Kc(t,e,n){const r=t.getPriority().val(),i=Qd(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Qd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,Ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Qe(i))),o.forEachChild(Ue,(a,l)=>{const c=Kc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Gc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Yc(t,e){let n=e instanceof Ie?e:new Ie(e),r=t,i=se(n);for(;i!==null;){const s=Vr(r.node.children,i)||{children:{},childCount:0};r=new Gc(i,r,s),n=Ae(n),i=se(n)}return r}function ci(t){return t.node.value}function xg(t,e){t.node.value=e,xl(t)}function Rg(t){return t.node.childCount>0}function DT(t){return ci(t)===void 0&&!Rg(t)}function la(t,e){ct(t.node.children,(n,r)=>{e(new Gc(n,t,r))})}function Pg(t,e,n,r){n&&!r&&e(t),la(t,i=>{Pg(i,e,!0,r)}),n&&r&&e(t)}function LT(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ws(t){return new Ie(t.parent===null?t.name:ws(t.parent)+"/"+t.name)}function xl(t){t.parent!==null&&FT(t.parent,t.name,t)}function FT(t,e,n){const r=DT(n),i=Yt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xl(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xl(t))}/**
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
 */const $T=/[\[\].#$\/\u0000-\u001F\u007F]/,BT=/[\[\].#$\u0000-\u001F\u007F]/,$a=10*1024*1024,Xc=function(t){return typeof t=="string"&&t.length!==0&&!$T.test(t)},Ag=function(t){return typeof t=="string"&&t.length!==0&&!BT.test(t)},UT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ag(t)},HT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Cc(t)||t&&typeof t=="object"&&Yt(t,".sv")},kg=function(t,e,n,r){r&&e===void 0||ca(Jo(t,"value"),e,n)},ca=function(t,e,n){const r=n instanceof Ie?new tE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(r)+" with contents = "+e.toString());if(Cc(e))throw new Error(t+"contains "+e.toString()+" "+Vn(r));if(typeof e=="string"&&e.length>$a/3&&Qo(e)>$a)throw new Error(t+"contains a string greater than "+$a+" utf8 bytes "+Vn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ct(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Xc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nE(r,o),ca(t,a,r),rE(r)}),i&&s)throw new Error(t+' contains ".value" child '+Vn(r)+" in addition to actual children.")}},zT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ns(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Xc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eE);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Nt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},WT=function(t,e,n,r){if(r&&e===void 0)return;const i=Jo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ct(e,(o,a)=>{const l=new Ie(o);if(ca(i,a,Be(n,l)),Rc(l)===".priority"&&!HT(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),zT(i,s)},Ng=function(t,e,n,r){if(!(r&&n===void 0)&&!Ag(n))throw new Error(Jo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ng(t,e,n,r)},Jc=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},VT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!UT(n))throw new Error(Jo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ua(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Pc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Qc(t,e,n){ua(t,n),Og(t,r=>Pc(r,e))}function Ut(t,e,n){ua(t,n),Og(t,r=>Nt(r,e)||Nt(e,r))}function Og(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(KT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ir&&ot("event: "+n.toString()),ai(r)}}}/**
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
 */const GT="repo_interrupt",YT=25;class XT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Co(),this.transactionQueueTree_=new Gc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JT(t,e,n){if(t.stats_=Ic(t.repoInfo_),t.forceRestClient_||EC())t.server_=new wo(t.repoInfo_,(r,i,s,o)=>{Zd(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>eh(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rn(t.repoInfo_,e,(r,i,s,o)=>{Zd(t,r,i,s,o)},r=>{eh(t,r)},r=>{QT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=AC(t.repoInfo_,()=>new kE(t.stats_,t.server_)),t.infoData_=new SE,t.infoSyncTree_=new Xd({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ys(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zc(t,"connected",!1),t.serverSyncTree_=new Xd({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ut(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Mg(t){const n=t.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function da(t){return NT({timestamp:Mg(t)})}function Zd(t,e,n,r,i){t.dataUpdateCount++;const s=new Ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=uo(n,c=>Ye(c));o=ST(t.serverSyncTree_,s,l,i)}else{const l=Ye(n);o=IT(t.serverSyncTree_,s,l,i)}else if(r){const l=uo(n,c=>Ye(c));o=CT(t.serverSyncTree_,s,l)}else{const l=Ye(n);o=ys(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Jr(t,s)),Ut(t.eventQueue_,a,o)}function eh(t,e){Zc(t,"connected",e),e===!1&&nI(t)}function QT(t,e){ct(e,(n,r)=>{Zc(t,n,r)})}function Zc(t,e,n){const r=new Ie("/.info/"+e),i=Ye(n);t.infoData_.updateSnapshot(r,i);const s=ys(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function eu(t){return t.nextWriteId_++}function ZT(t,e){const n=xT(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(r=>{const i=Ye(r).withIndex(e._queryParams.getIndex()),s=ys(t.serverSyncTree_,e._path,i);return Qc(t.eventQueue_,e._path,s),Promise.resolve(i)},r=>(Cs(t,"get for query "+Xe(e)+" failed: "+r),Promise.reject(new Error(r))))}function eI(t,e,n,r,i){Cs(t,"set",{path:e.toString(),value:n,priority:r});const s=da(t),o=Ye(n,r),a=Hc(t.serverSyncTree_,e),l=Sg(o,a,s),c=eu(t),u=wg(t.serverSyncTree_,e,l,c,!0);ua(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const p=h==="ok";p||vt("set at "+e+" failed: "+h);const C=Tn(t.serverSyncTree_,c,!p);Ut(t.eventQueue_,e,C),Rl(t,i,h,_)});const d=nu(t,e);Jr(t,d),Ut(t.eventQueue_,d,[])}function tI(t,e,n,r){Cs(t,"update",{path:e.toString(),value:n});let i=!0;const s=da(t),o={};if(ct(n,(a,l)=>{i=!1,o[a]=Ig(Be(e,a),Ye(l),t.serverSyncTree_,s)}),i)ot("update() called with empty data.  Don't do anything."),Rl(t,r,"ok",void 0);else{const a=eu(t),l=wT(t.serverSyncTree_,e,o,a);ua(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||vt("update at "+e+" failed: "+c);const h=Tn(t.serverSyncTree_,a,!d),_=h.length>0?Jr(t,e):e;Ut(t.eventQueue_,_,h),Rl(t,r,c,u)}),ct(n,c=>{const u=nu(t,Be(e,c));Jr(t,u)}),Ut(t.eventQueue_,e,[])}}function nI(t){Cs(t,"onDisconnectEvents");const e=da(t),n=Co();yl(t.onDisconnect_,ve(),(i,s)=>{const o=Ig(i,s,t.serverSyncTree_,e);og(n,i,o)});let r=[];yl(n,ve(),(i,s)=>{r=r.concat(ys(t.serverSyncTree_,i,s));const o=nu(t,i);Jr(t,o)}),t.onDisconnect_=Co(),Ut(t.eventQueue_,ve(),r)}function rI(t,e,n){let r;se(e._path)===".info"?r=Jd(t.infoSyncTree_,e,n):r=Jd(t.serverSyncTree_,e,n),Qc(t.eventQueue_,e._path,r)}function th(t,e,n){let r;se(e._path)===".info"?r=Sl(t.infoSyncTree_,e,n):r=Sl(t.serverSyncTree_,e,n),Qc(t.eventQueue_,e._path,r)}function iI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(GT)}function Cs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function Rl(t,e,n,r){e&&ai(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Dg(t,e,n){return Hc(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function tu(t,e=t.transactionQueueTree_){if(e||ha(t,e),ci(e)){const n=Fg(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&sI(t,ws(e),n)}else Rg(e)&&la(e,n=>{tu(t,n)})}function sI(t,e,n){const r=n.map(c=>c.currentWriteId),i=Dg(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=_t(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Cs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Tn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ha(t,Yc(t.transactionQueueTree_,e)),tu(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ai(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{vt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Jr(t,e)}},o)}function Jr(t,e){const n=Lg(t,e),r=ws(n),i=Fg(t,n);return oI(t,i,r),r}function oI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=_t(n,l.path);let u=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Tn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=YT)u=!0,d="maxretry",i=i.concat(Tn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Dg(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){ca("transaction failed: Data returned ",_,l.path);let p=Ye(_);typeof _=="object"&&_!=null&&Yt(_,".priority")||(p=p.updatePriority(h.getPriority()));const b=l.currentWriteId,k=da(t),F=Sg(p,h,k);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=F,l.currentWriteId=eu(t),o.splice(o.indexOf(b),1),i=i.concat(wg(t.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(Tn(t.serverSyncTree_,b,!0))}else u=!0,d="nodata",i=i.concat(Tn(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}ha(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ai(r[a]);tu(t,t.transactionQueueTree_)}function Lg(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&ci(r)===void 0;)r=Yc(r,n),e=Ae(e),n=se(e);return r}function Fg(t,e){const n=[];return $g(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $g(t,e,n){const r=ci(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);la(e,i=>{$g(t,i,n)})}function ha(t,e){const n=ci(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,xg(e,n.length>0?n:void 0)}la(e,r=>{ha(t,r)})}function nu(t,e){const n=ws(Lg(t,e)),r=Yc(t.transactionQueueTree_,e);return LT(r,i=>{Ba(t,i)}),Ba(t,r),Pg(r,i=>{Ba(t,i)}),n}function Ba(t,e){const n=ci(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Tn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?xg(e,void 0):n.length=s+1,Ut(t.eventQueue_,ws(e),i);for(let o=0;o<r.length;o++)ai(r[o])}}/**
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
 */function aI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const nh=function(t,e){const n=cI(t),r=n.namespace;n.domain==="firebase.com"&&hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ie(n.pathString)}},cI=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=aI(t.substring(u,d)));const h=lI(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Bg{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class Ug{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class uI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ru{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ue(this._path)?null:Rc(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=Ud(this._queryParams),n=Ec(e);return n==="{}"?"default":n}get _queryObject(){return Ud(this._queryParams)}isEqual(e){if(e=Ht(e),!(e instanceof ru))return!1;const n=this._repo===e._repo,r=Pc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZC(this._path)}}class Xt extends ru{constructor(e,n){super(e,n,new Oc,!1)}get parent(){const e=Qp(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ie(e),r=Zr(this.ref,e);return new Qr(this._node.getChild(n),r,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Qr(i,Zr(this.ref,r),Ue)))}hasChild(e){const n=new Ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function nt(t,e){return t=Ht(t),t._checkNotDeleted("ref"),e!==void 0?Zr(t._root,e):t._root}function Zr(t,e){return t=Ht(t),se(t._path)===null?jT("child","path",e,!1):Ng("child","path",e,!1),new Xt(t._repo,Be(t._path,e))}function fa(t,e){t=Ht(t),Jc("push",t._path),kg("push",e,t._path,!0);const n=Mg(t._repo),r=CE(n),i=Zr(t,r),s=Zr(t,r);let o;return e!=null?o=iu(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Hg(t){return Jc("remove",t._path),iu(t,null)}function iu(t,e){t=Ht(t),Jc("set",t._path),kg("set",e,t._path,!1);const n=new ds;return eI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ui(t,e){WT("update",e,t._path,!1);const n=new ds;return tI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function su(t){return t=Ht(t),ZT(t._repo,t).then(e=>new Qr(e,new Xt(t._repo,t._path),t._queryParams.getIndex()))}class ou{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Bg("value",this,new Qr(e.snapshotNode,new Xt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ug(this,e,n):null}matches(e){return e instanceof ou?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class au{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ug(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=Zr(new Xt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Bg(e.type,this,new Qr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof au?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function dI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{th(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new uI(n,s||void 0),a=e==="value"?new ou(o):new au(e,o);return rI(t._repo,t,a),()=>th(t._repo,t,a)}function ko(t,e,n,r){return dI(t,"value",e,n,r)}fT(Xt);vT(Xt);/**
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
 */const hI="FIREBASE_DATABASE_EMULATOR_HOST",Pl={};let fI=!1;function pI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=nh(s,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[hI]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=nh(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new _l(_l.OWNER):new IC(t.name,t.options,e);VT("Invalid Firebase Database URL",o),ue(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=mI(a,t,u,new TC(t.name,n));return new _I(d,t)}function gI(t,e){const n=Pl[e];(!n||n[t.key]!==t)&&hr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iI(t),delete n[t.key]}function mI(t,e,n,r){let i=Pl[e.name];i||(i={},Pl[e.name]=i);let s=i[t.toURLString()];return s&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new XT(t,fI,n,r),i[t.toURLString()]=s,s}class _I{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}function vI(t=Qf(),e){return fc(t,"database").getImmediate({identifier:e})}/**
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
 */function bI(t){cC(fs),qr(new cr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return pI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xn(Cd,Ed,t),xn(Cd,Ed,"esm2017")}rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bI();const yI={apiKey:"AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",authDomain:"quick-retro.firebaseapp.com",projectId:"quick-retro",storageBucket:"quick-retro.appspot.com",messagingSenderId:"293134428599",appId:"1:293134428599:web:bad71d4fedbda8080ce032",databaseURL:"https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app"},wI=u0(yI),rt=vI(wI),Ds=ln({});function CI(t){if(!t)return Ds;const e=nt(rt,`users/${t}/boards`),n={};ko(e,r,s);function r(o){const a=o.exists()?Object.values(o.val()):[];for(const l of a){if(n[l])continue;const c=ko(nt(rt,`boards/${l}`),i.bind(null,l),s);n[l]=c}for(const l in n)a.includes(l)||(n[l](),delete n[l],delete Ds[l])}function i(o,a){Ds[o]=a.val()}function s(o){console.error(o)}return Ds}function EI(t){const e=ln({loading:!0});ko(nt(rt,`boards/${t}`),r=>{e.exists=r.exists(),e.loading=!1,e.exists&&Object.entries(r.val()).forEach(([i,s])=>{e[i]=s})},n);function n(r){console.log(r),e.exists=!1,e.loading=!1}return e}function TI(t,e){const n=nt(rt,`boards/${t}`);ui(n,{cardsHidden:e})}function II(t,e){const n=nt(rt,`boards/${t}`);ui(n,{title:e})}function SI(t,e){const n=nt(rt,`boards/${t}/timer`);ui(n,{isRunning:!0,endTime:e})}function xI(t,e){const n=nt(rt,`boards/${t}/timer`);ui(n,{isRunning:!1,timeRemaining:e})}function RI(t,e){const n=nt(rt,`boards/${t}/timer`);ui(n,{isRunning:!1,timeRemaining:e})}function PI(t){const e=ln({isRunning:!1,timeRemaining:420,endTime:0});return ko(nt(rt,`boards/${t}/timer`),n=>{if(n.exists()){const r=n.val();e.isRunning=r.isRunning||!1,r.isRunning&&r.endTime?(e.endTime=r.endTime,e.timeRemaining=Math.max(0,Math.floor((r.endTime-Date.now())/1e3))):r.timeRemaining!==void 0&&(e.timeRemaining=r.timeRemaining)}},n=>{console.error("Error fetching timer data:",n)}),e}function AI(t,e,n){const r=nt(rt,`boards/${t}/columns/${e}/cards`);fa(r,n)}function zg(t,e,n){Hg(nt(rt,`boards/${t}/columns/${e}/cards/${n}`))}async function kI(t,e,n,r){const i=nt(rt,`boards/${t}/columns/${e}/cards/${n}`),s=nt(rt,`boards/${t}/columns/${r}/cards`),o=await su(i);fa(s,o.val()),Hg(i)}function rh(t,e,n,r){ui(nt(rt,`boards/${t}/columns/${e}/cards/${n}`),r)}async function NI(t,e){const n=nt(rt,"boards"),r=await fa(n,{author:t,cardsHidden:!0,title:"",columns:e.columns.map(i=>bu(vu({},i),{cards:{}}))});if(!!r.key)return await Wg(t,r.key),r.key}async function OI(t,e){const n=nt(rt,`users/${t}/boards`),r=await su(n);if(!r.exists())return;const i=Object.fromEntries(Object.entries(r.val()).filter(([s,o])=>e!==o));await iu(n,i)}async function Wg(t,e){const n=await su(nt(rt,`users/${t}/boards`));if((n.exists()?Object.values(n.val()):[]).includes(e))return;const i=nt(rt,`users/${t}/boards`);await fa(i,e)}function MI(){const t=ln({}),e=lC();return G0(e).catch(n=>{console.error(n)}),Q0(e,n=>{n&&Object.entries(n).forEach(([r,i])=>{t[r]=i})}),t}var Jt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const DI=De({props:{text:null},setup(t){return(e,n)=>(de(),Me("button",null,ar(t.text),1))}});var Qs=Jt(DI,[["__scopeId","data-v-7cb4cbf6"]]);function LI(t,e){const n=t.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+t+" is not a valid value.")}return e===void 0?r:r[e]}var ih={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"};const di="^\\s*",hi="\\s*$",Xn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Jn="([0-9A-Fa-f])",Qn="([0-9A-Fa-f]{2})",FI=new RegExp(`${di}rgb\\s*\\(${Xn},${Xn},${Xn}\\)${hi}`),$I=new RegExp(`${di}rgba\\s*\\(${Xn},${Xn},${Xn},${Xn}\\)${hi}`),BI=new RegExp(`${di}#${Jn}${Jn}${Jn}${hi}`),UI=new RegExp(`${di}#${Qn}${Qn}${Qn}${hi}`),HI=new RegExp(`${di}#${Jn}${Jn}${Jn}${Jn}${hi}`),zI=new RegExp(`${di}#${Qn}${Qn}${Qn}${Qn}${hi}`);function yt(t){return parseInt(t,16)}function mr(t){try{let e;if(e=UI.exec(t))return[yt(e[1]),yt(e[2]),yt(e[3]),1];if(e=FI.exec(t))return[ut(e[1]),ut(e[5]),ut(e[9]),1];if(e=$I.exec(t))return[ut(e[1]),ut(e[5]),ut(e[9]),Hi(e[13])];if(e=BI.exec(t))return[yt(e[1]+e[1]),yt(e[2]+e[2]),yt(e[3]+e[3]),1];if(e=zI.exec(t))return[yt(e[1]),yt(e[2]),yt(e[3]),Hi(yt(e[4])/255)];if(e=HI.exec(t))return[yt(e[1]+e[1]),yt(e[2]+e[2]),yt(e[3]+e[3]),Hi(yt(e[4]+e[4])/255)];if(t in ih)return mr(ih[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(e){throw e}}function WI(t){return t>1?1:t<0?0:t}function Al(t,e,n,r){return`rgba(${ut(t)}, ${ut(e)}, ${ut(n)}, ${WI(r)})`}function Ua(t,e,n,r,i){return ut((t*e*(1-r)+n*r)/i)}function jI(t,e){Array.isArray(t)||(t=mr(t)),Array.isArray(e)||(e=mr(e));const n=t[3],r=e[3],i=Hi(n+r-n*r);return Al(Ua(t[0],n,e[0],r,i),Ua(t[1],n,e[1],r,i),Ua(t[2],n,e[2],r,i),i)}function Ha(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:mr(t);return e.alpha?Al(n,r,i,e.alpha):Al(n,r,i,s)}function Ls(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:mr(t),{lightness:o=1,alpha:a=1}=e;return VI([n*o,r*o,i*o,s*a])}function Hi(t){const e=Math.round(Number(t)*100)/100;return e>1?1:e<0?0:e}function ut(t){const e=Math.round(Number(t));return e>255?255:e<0?0:e}function VI(t){const[e,n,r]=t;return 3 in t?`rgba(${ut(e)}, ${ut(n)}, ${ut(r)}, ${Hi(t[3])})`:`rgba(${ut(e)}, ${ut(n)}, ${ut(r)}, 1)`}function gt(t,...e){if(Array.isArray(t))t.forEach(n=>gt(n,...e));else return t(...e)}function qI(t,e){throw new Error(`[naive/${t}]: ${e}`)}function pa(t){return t.some(e=>Gi(e)?!(e.type===xt||e.type===ze&&!pa(e.children)):!0)?t:null}function Zs(t,e){return t&&pa(t())||e()}function KI(t,e,n){return t&&pa(t(e))||n(e)}function Fs(t,e){const n=t&&pa(t());return e(n||null)}function GI(t){let e=0;for(let n=0;n<t.length;++n)t[n]==="&"&&++e;return e}const jg=/\s*,(?![^(]*\))\s*/g,YI=/\s+/g;function XI(t,e){const n=[];return e.split(jg).forEach(r=>{let i=GI(r);if(i){if(i===1){t.forEach(o=>{n.push(r.replace("&",o))});return}}else{t.forEach(o=>{n.push((o&&o+" ")+r)});return}let s=[r];for(;i--;){const o=[];s.forEach(a=>{t.forEach(l=>{o.push(a.replace("&",l))})}),s=o}s.forEach(o=>n.push(o))}),n}function JI(t,e){const n=[];return e.split(jg).forEach(r=>{t.forEach(i=>{n.push((i&&i+" ")+r)})}),n}function QI(t){let e=[""];return t.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?e=XI(e,n):e=JI(e,n))}),e.join(", ").replace(YI," ")}function sh(t){if(!t)return;const e=t.parentElement;e&&e.removeChild(t)}function ga(t){return document.querySelector(`style[cssr-id="${t}"]`)}function ZI(t){const e=document.createElement("style");return e.setAttribute("cssr-id",t),e}function $s(t){return t?/^\s*@(s|m)/.test(t):!1}const eS=/[A-Z]/g;function Vg(t){return t.replace(eS,e=>"-"+e.toLowerCase())}function tS(t,e="  "){return typeof t=="object"&&t!==null?` {
`+Object.entries(t).map(n=>e+`  ${Vg(n[0])}: ${n[1]};`).join(`
`)+`
`+e+"}":`: ${t};`}function nS(t,e,n){return typeof t=="function"?t({context:e.context,props:n}):t}function oh(t,e,n,r){if(!e)return"";const i=nS(e,n,r);if(!i)return"";if(typeof i=="string")return`${t} {
${i}
}`;const s=Object.keys(i);if(s.length===0)return n.config.keepEmptyBlock?t+` {
}`:"";const o=t?[t+" {"]:[];return s.forEach(a=>{const l=i[a];if(a==="raw"){o.push(`
`+l+`
`);return}a=Vg(a),l!=null&&o.push(`  ${a}${tS(l)}`)}),t&&o.push("}"),o.join(`
`)}function kl(t,e,n){!t||t.forEach(r=>{if(Array.isArray(r))kl(r,e,n);else if(typeof r=="function"){const i=r(e);Array.isArray(i)?kl(i,e,n):i&&n(i)}else r&&n(r)})}function qg(t,e,n,r,i,s){const o=t.$;let a="";if(!o||typeof o=="string")$s(o)?a=o:e.push(o);else if(typeof o=="function"){const u=o({context:r.context,props:i});$s(u)?a=u:e.push(u)}else if(o.before&&o.before(r.context),!o.$||typeof o.$=="string")$s(o.$)?a=o.$:e.push(o.$);else if(o.$){const u=o.$({context:r.context,props:i});$s(u)?a=u:e.push(u)}const l=QI(e),c=oh(l,t.props,r,i);a?(n.push(`${a} {`),s&&c&&s.insertRule(`${a} {
${c}
}
`)):(s&&c&&s.insertRule(c),!s&&c.length&&n.push(c)),t.children&&kl(t.children,{context:r.context,props:i},u=>{if(typeof u=="string"){const d=oh(l,{raw:u},r,i);s?s.insertRule(d):n.push(d)}else qg(u,e,n,r,i,s)}),e.pop(),a&&n.push("}"),o&&o.after&&o.after(r.context)}function Kg(t,e,n,r=!1){const i=[];return qg(t,[],i,e,n,r?t.instance.__styleSheet:void 0),r?"":i.join(`

`)}function Nl(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function rS(t,e,n){const{els:r}=e;if(n===void 0)r.forEach(sh),e.els=[];else{const i=ga(n);i&&r.includes(i)&&(sh(i),e.els=r.filter(s=>s!==i))}}function ah(t,e){t.push(e)}function iS(t,e,n,r,i,s,o,a,l){if(s&&!l){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[n]||(h[n]=!0,Kg(e,t,r,s));return}let c;if(n===void 0&&(c=e.render(r),n=Nl(c)),l){l.adapter(n,c!=null?c:e.render(r));return}const u=ga(n);if(u!==null&&!o)return u;const d=u!=null?u:ZI(n);if(c===void 0&&(c=e.render(r)),d.textContent=c,u!==null)return u;if(a){const h=document.head.querySelector(`meta[name="${a}"]`);if(h)return document.head.insertBefore(d,h),ah(e.els,d),d}return i?document.head.insertBefore(d,document.head.querySelector("style, link")):document.head.appendChild(d),ah(e.els,d),d}function sS(t){return Kg(this,this.instance,t)}function oS(t={}){const{id:e,ssr:n,props:r,head:i=!1,silent:s=!1,force:o=!1,anchorMetaName:a}=t;return iS(this.instance,this,e,r,i,s,o,a,n)}function aS(t={}){const{id:e}=t;rS(this.instance,this,e)}const Bs=function(t,e,n,r){return{instance:t,$:e,props:n,children:r,els:[],render:sS,mount:oS,unmount:aS}},lS=function(t,e,n,r){return Array.isArray(e)?Bs(t,{$:null},null,e):Array.isArray(n)?Bs(t,e,null,n):Array.isArray(r)?Bs(t,e,n,r):Bs(t,e,n,null)};function cS(t={}){let e=null;const n={c:(...r)=>lS(n,...r),use:(r,...i)=>r.install(n,...i),find:ga,context:{},config:t,get __styleSheet(){if(!e){const r=document.createElement("style");return document.head.appendChild(r),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return n}function uS(t,e){if(t===void 0)return!1;if(e){const{context:{ids:n}}=e;return n.has(t)}return ga(t)!==null}function dS(t){let e=".",n="__",r="--",i;if(t){let p=t.blockPrefix;p&&(e=p),p=t.elementPrefix,p&&(n=p),p=t.modifierPrefix,p&&(r=p)}const s={install(p){i=p.c;const C=p.context;C.bem={},C.bem.b=null,C.bem.els=null}};function o(p){let C,b;return{before(k){C=k.bem.b,b=k.bem.els,k.bem.els=null},after(k){k.bem.b=C,k.bem.els=b},$({context:k,props:F}){return p=typeof p=="string"?p:p({context:k,props:F}),k.bem.b=p,`${(F==null?void 0:F.bPrefix)||e}${k.bem.b}`}}}function a(p){let C;return{before(b){C=b.bem.els},after(b){b.bem.els=C},$({context:b,props:k}){return p=typeof p=="string"?p:p({context:b,props:k}),b.bem.els=p.split(",").map(F=>F.trim()),b.bem.els.map(F=>`${(k==null?void 0:k.bPrefix)||e}${b.bem.b}${n}${F}`).join(", ")}}}function l(p){return{$({context:C,props:b}){p=typeof p=="string"?p:p({context:C,props:b});const k=p.split(",").map(H=>H.trim());function F(H){return k.map(q=>`&${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${H!==void 0?`${n}${H}`:""}${r}${q}`).join(", ")}const B=C.bem.els;return B!==null?F(B[0]):F()}}}function c(p){return{$({context:C,props:b}){p=typeof p=="string"?p:p({context:C,props:b});const k=C.bem.els;return`&:not(${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${k!==null&&k.length>0?`${n}${k[0]}`:""}${r}${p})`}}}return Object.assign(s,{cB:(...p)=>i(o(p[0]),p[1],p[2]),cE:(...p)=>i(a(p[0]),p[1],p[2]),cM:(...p)=>i(l(p[0]),p[1],p[2]),cNotM:(...p)=>i(c(p[0]),p[1],p[2])}),s}function eo(t,e){return t+(e==="default"?"":e.replace(/^[a-z]/,n=>n.toUpperCase()))}eo("abc","def");const hS="n",fS=`.${hS}-`,pS="__",gS="--",Gg=cS(),Yg=dS({blockPrefix:fS,elementPrefix:pS,modifierPrefix:gS});Gg.use(Yg);const{c:te,find:Ok}=Gg,{cB:ke,cE:V,cM:Et,cNotM:Si}=Yg;function lh(t){const e=ce(t),n=le(e.value);return qt(e,r=>{n.value=r}),typeof t=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){t.set(r)}}}const mS={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function _S(t,e,n){if(t==="mousemoveoutside"){const r=i=>{e.contains(i.target)||n(i)};return{mousemove:r,touchstart:r}}else if(t==="clickoutside"){let r=!1;const i=o=>{r=!e.contains(o.target)},s=o=>{!r||e.contains(o.target)||n(o)};return{mousedown:i,mouseup:s,touchstart:i,touchend:s}}return console.error(`[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`),{}}function Xg(t,e,n){const r=mS[t];let i=r.get(e);i===void 0&&r.set(e,i=new WeakMap);let s=i.get(n);return s===void 0&&i.set(n,s=_S(t,e,n)),s}function vS(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=Xg(t,e,n);return Object.keys(i).forEach(s=>{Zn(s,document,i[s],r)}),!0}return!1}function bS(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=Xg(t,e,n);return Object.keys(i).forEach(s=>{Qt(s,document,i[s],r)}),!0}return!1}function yS(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const t=new WeakMap,e=new WeakMap;function n(){t.set(this,!0)}function r(){t.set(this,!0),e.set(this,!0)}function i(E,S,D){const K=E[S];return E[S]=function(){return D.apply(E,arguments),K.apply(E,arguments)},E}function s(E,S){E[S]=Event.prototype[S]}const o=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var E;return(E=o.get(this))!==null&&E!==void 0?E:null}function c(E,S){a!==void 0&&Object.defineProperty(E,"currentTarget",{configurable:!0,enumerable:!0,get:S!=null?S:a.get})}const u={bubble:{},capture:{}},d={};function h(){const E=function(S){const{type:D,eventPhase:K,target:Z,bubbles:L}=S;if(K===2)return;const re=K===1?"capture":"bubble";let we=Z;const Se=[];for(;we===null&&(we=window),Se.push(we),we!==window;)we=we.parentNode||null;const he=u.capture[D],pe=u.bubble[D];if(i(S,"stopPropagation",n),i(S,"stopImmediatePropagation",r),c(S,l),re==="capture"){if(he===void 0)return;for(let ie=Se.length-1;ie>=0&&!t.has(S);--ie){const He=Se[ie],bt=he.get(He);if(bt!==void 0){o.set(S,He);for(const Le of bt){if(e.has(S))break;Le(S)}}if(ie===0&&!L&&pe!==void 0){const Le=pe.get(He);if(Le!==void 0)for(const ht of Le){if(e.has(S))break;ht(S)}}}}else if(re==="bubble"){if(pe===void 0)return;for(let ie=0;ie<Se.length&&!t.has(S);++ie){const He=Se[ie],bt=pe.get(He);if(bt!==void 0){o.set(S,He);for(const Le of bt){if(e.has(S))break;Le(S)}}}}s(S,"stopPropagation"),s(S,"stopImmediatePropagation"),c(S)};return E.displayName="evtdUnifiedHandler",E}function _(){const E=function(S){const{type:D,eventPhase:K}=S;if(K!==2)return;const Z=d[D];Z!==void 0&&Z.forEach(L=>L(S))};return E.displayName="evtdUnifiedWindowEventHandler",E}const p=h(),C=_();function b(E,S){const D=u[E];return D[S]===void 0&&(D[S]=new Map,window.addEventListener(S,p,E==="capture")),D[S]}function k(E){return d[E]===void 0&&(d[E]=new Set,window.addEventListener(E,C)),d[E]}function F(E,S){let D=E.get(S);return D===void 0&&E.set(S,D=new Set),D}function B(E,S,D,K){const Z=u[S][D];if(Z!==void 0){const L=Z.get(E);if(L!==void 0&&L.has(K))return!0}return!1}function H(E,S){const D=d[E];return!!(D!==void 0&&D.has(S))}function q(E,S,D,K){let Z;if(typeof K=="object"&&K.once===!0?Z=he=>{_e(E,S,Z,K),D(he)}:Z=D,vS(E,S,Z,K))return;const re=K===!0||typeof K=="object"&&K.capture===!0?"capture":"bubble",we=b(re,E),Se=F(we,S);if(Se.has(Z)||Se.add(Z),S===window){const he=k(E);he.has(Z)||he.add(Z)}}function _e(E,S,D,K){if(bS(E,S,D,K))return;const L=K===!0||typeof K=="object"&&K.capture===!0,re=L?"capture":"bubble",we=b(re,E),Se=F(we,S);if(S===window&&!B(S,L?"bubble":"capture",E,D)&&H(E,D)){const pe=d[E];pe.delete(D),pe.size===0&&(window.removeEventListener(E,C),d[E]=void 0)}Se.has(D)&&Se.delete(D),Se.size===0&&we.delete(S),we.size===0&&(window.removeEventListener(E,p,re==="capture"),u[re][E]=void 0)}return{on:q,off:_e}}const{on:Zn,off:Qt}=yS();function wS(t,e){return qt(t,n=>{n!==void 0&&(e.value=n)}),ce(()=>t.value===void 0?e.value:t.value)}function CS(){const t=le(!1);return br(()=>{t.value=!0}),Ql(t)}const ES=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function TS(){return ES}const Jg=Symbol("@css-render/vue3-ssr");function IS(t,e){return`<style cssr-id="${t}">
${e}
</style>`}function SS(t,e){const n=Ve(Jg,null);if(n===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:i}=n;i.has(t)||r!==null&&(i.add(t),r.push(IS(t,e)))}function ma(){const t=Ve(Jg,null);if(t!==null)return{adapter:SS,context:t}}function ch(t,e){console.error(`[vueuc/${t}]: ${e}`)}var sr=[],xS=function(){return sr.some(function(t){return t.activeTargets.length>0})},RS=function(){return sr.some(function(t){return t.skippedTargets.length>0})},uh="ResizeObserver loop completed with undelivered notifications.",PS=function(){var t;typeof ErrorEvent=="function"?t=new ErrorEvent("error",{message:uh}):(t=document.createEvent("Event"),t.initEvent("error",!1,!1),t.message=uh),window.dispatchEvent(t)},as;(function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(as||(as={}));var or=function(t){return Object.freeze(t)},AS=function(){function t(e,n){this.inlineSize=e,this.blockSize=n,or(this)}return t}(),Qg=function(){function t(e,n,r,i){return this.x=e,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,or(this)}return t.prototype.toJSON=function(){var e=this,n=e.x,r=e.y,i=e.top,s=e.right,o=e.bottom,a=e.left,l=e.width,c=e.height;return{x:n,y:r,top:i,right:s,bottom:o,left:a,width:l,height:c}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),lu=function(t){return t instanceof SVGElement&&"getBBox"in t},Zg=function(t){if(lu(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,s=i.offsetWidth,o=i.offsetHeight;return!(s||o||t.getClientRects().length)},dh=function(t){var e,n;if(t instanceof Element)return!0;var r=(n=(e=t)===null||e===void 0?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},kS=function(t){switch(t.tagName){case"INPUT":if(t.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},zi=typeof window!="undefined"?window:{},Us=new WeakMap,hh=/auto|scroll/,NS=/^tb|vertical/,OS=/msie|trident/i.test(zi.navigator&&zi.navigator.userAgent),Wt=function(t){return parseFloat(t||"0")},Ur=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=!1),new AS((n?e:t)||0,(n?t:e)||0)},fh=or({devicePixelContentBoxSize:Ur(),borderBoxSize:Ur(),contentBoxSize:Ur(),contentRect:new Qg(0,0,0,0)}),em=function(t,e){if(e===void 0&&(e=!1),Us.has(t)&&!e)return Us.get(t);if(Zg(t))return Us.set(t,fh),fh;var n=getComputedStyle(t),r=lu(t)&&t.ownerSVGElement&&t.getBBox(),i=!OS&&n.boxSizing==="border-box",s=NS.test(n.writingMode||""),o=!r&&hh.test(n.overflowY||""),a=!r&&hh.test(n.overflowX||""),l=r?0:Wt(n.paddingTop),c=r?0:Wt(n.paddingRight),u=r?0:Wt(n.paddingBottom),d=r?0:Wt(n.paddingLeft),h=r?0:Wt(n.borderTopWidth),_=r?0:Wt(n.borderRightWidth),p=r?0:Wt(n.borderBottomWidth),C=r?0:Wt(n.borderLeftWidth),b=d+c,k=l+u,F=C+_,B=h+p,H=a?t.offsetHeight-B-t.clientHeight:0,q=o?t.offsetWidth-F-t.clientWidth:0,_e=i?b+F:0,E=i?k+B:0,S=r?r.width:Wt(n.width)-_e-q,D=r?r.height:Wt(n.height)-E-H,K=S+b+q+F,Z=D+k+H+B,L=or({devicePixelContentBoxSize:Ur(Math.round(S*devicePixelRatio),Math.round(D*devicePixelRatio),s),borderBoxSize:Ur(K,Z,s),contentBoxSize:Ur(S,D,s),contentRect:new Qg(d,l,S,D)});return Us.set(t,L),L},tm=function(t,e,n){var r=em(t,n),i=r.borderBoxSize,s=r.contentBoxSize,o=r.devicePixelContentBoxSize;switch(e){case as.DEVICE_PIXEL_CONTENT_BOX:return o;case as.BORDER_BOX:return i;default:return s}},MS=function(){function t(e){var n=em(e);this.target=e,this.contentRect=n.contentRect,this.borderBoxSize=or([n.borderBoxSize]),this.contentBoxSize=or([n.contentBoxSize]),this.devicePixelContentBoxSize=or([n.devicePixelContentBoxSize])}return t}(),nm=function(t){if(Zg(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},DS=function(){var t=1/0,e=[];sr.forEach(function(o){if(o.activeTargets.length!==0){var a=[];o.activeTargets.forEach(function(c){var u=new MS(c.target),d=nm(c.target);a.push(u),c.lastReportedSize=tm(c.target,c.observedBox),d<t&&(t=d)}),e.push(function(){o.callback.call(o.observer,a,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var n=0,r=e;n<r.length;n++){var i=r[n];i()}return t},ph=function(t){sr.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(nm(i.target)>t?n.activeTargets.push(i):n.skippedTargets.push(i))})})},LS=function(){var t=0;for(ph(t);xS();)t=DS(),ph(t);return RS()&&PS(),t>0},za,rm=[],FS=function(){return rm.splice(0).forEach(function(t){return t()})},$S=function(t){if(!za){var e=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return FS()}).observe(n,r),za=function(){n.textContent=""+(e?e--:e++)}}rm.push(t),za()},BS=function(t){$S(function(){requestAnimationFrame(t)})},to=0,US=function(){return!!to},HS=250,zS={attributes:!0,characterData:!0,childList:!0,subtree:!0},gh=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],mh=function(t){return t===void 0&&(t=0),Date.now()+t},Wa=!1,WS=function(){function t(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return t.prototype.run=function(e){var n=this;if(e===void 0&&(e=HS),!Wa){Wa=!0;var r=mh(e);BS(function(){var i=!1;try{i=LS()}finally{if(Wa=!1,e=r-mh(),!US())return;i?n.run(1e3):e>0?n.run(e):n.start()}})}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var e=this,n=function(){return e.observer&&e.observer.observe(document.body,zS)};document.body?n():zi.addEventListener("DOMContentLoaded",n)},t.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),gh.forEach(function(n){return zi.addEventListener(n,e.listener,!0)}))},t.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),gh.forEach(function(n){return zi.removeEventListener(n,e.listener,!0)}),this.stopped=!0)},t}(),Ol=new WS,_h=function(t){!to&&t>0&&Ol.start(),to+=t,!to&&Ol.stop()},jS=function(t){return!lu(t)&&!kS(t)&&getComputedStyle(t).display==="inline"},VS=function(){function t(e,n){this.target=e,this.observedBox=n||as.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e=tm(this.target,this.observedBox,!0);return jS(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),qS=function(){function t(e,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=n}return t}(),Hs=new WeakMap,vh=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},zs=function(){function t(){}return t.connect=function(e,n){var r=new qS(e,n);Hs.set(e,r)},t.observe=function(e,n,r){var i=Hs.get(e),s=i.observationTargets.length===0;vh(i.observationTargets,n)<0&&(s&&sr.push(i),i.observationTargets.push(new VS(n,r&&r.box)),_h(1),Ol.schedule())},t.unobserve=function(e,n){var r=Hs.get(e),i=vh(r.observationTargets,n),s=r.observationTargets.length===1;i>=0&&(s&&sr.splice(sr.indexOf(r),1),r.observationTargets.splice(i,1),_h(-1))},t.disconnect=function(e){var n=this,r=Hs.get(e);r.observationTargets.slice().forEach(function(i){return n.unobserve(e,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},t}(),KS=function(){function t(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");zs.connect(this,e)}return t.prototype.observe=function(e,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!dh(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");zs.observe(this,e,n)},t.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!dh(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");zs.unobserve(this,e)},t.prototype.disconnect=function(){zs.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();class GS{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new KS(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const n of e){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(e,n){this.elHandlersMap.set(e,n),this.observer.observe(e)}unregisterHandler(e){!this.elHandlersMap.has(e)||(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}var bh=new GS,Ml=De({name:"ResizeObserver",props:{onResize:Function},setup(t){return{registered:!1,handleResize(e){const{onResize:n}=t;n!==void 0&&n(e)}}},mounted(){const t=this.$el;if(t===void 0){ch("resize-observer","$el does not exist.");return}if(t.nextElementSibling!==t.nextSibling&&t.nodeType===3&&t.nodeValue!==""){ch("resize-observer","$el can not be observed (it may be a text node).");return}t.nextElementSibling!==null&&(bh.registerHandler(t.nextElementSibling,this.handleResize),this.registered=!0)},beforeUnmount(){this.registered&&bh.unregisterHandler(this.$el.nextElementSibling)},render(){return _b(this.$slots,"default")}});const yh="n-form-item";function YS(t,{defaultSize:e="medium",mergedSize:n,mergedDisabled:r}={}){const i=Ve(yh,null);zr(yh,null);const s=ce(n?()=>n(i):()=>{const{size:l}=t;if(l)return l;if(i){const{mergedSize:c}=i;if(c.value!==void 0)return c.value}return e}),o=ce(r?()=>r(i):()=>{const{disabled:l}=t;return l!==void 0?l:i?i.disabled.value:!1}),a=ce(()=>{const{status:l}=t;return l||(i==null?void 0:i.mergedValidationStatus.value)});return qo(()=>{i&&i.restoreValidation()}),{mergedSizeRef:s,mergedDisabledRef:o,mergedStatusRef:a,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var XS=typeof global=="object"&&global&&global.Object===Object&&global,im=XS,JS=typeof self=="object"&&self&&self.Object===Object&&self,QS=im||JS||Function("return this")(),fi=QS,ZS=fi.Symbol,ei=ZS,sm=Object.prototype,ex=sm.hasOwnProperty,tx=sm.toString,xi=ei?ei.toStringTag:void 0;function nx(t){var e=ex.call(t,xi),n=t[xi];try{t[xi]=void 0;var r=!0}catch{}var i=tx.call(t);return r&&(e?t[xi]=n:delete t[xi]),i}var rx=Object.prototype,ix=rx.toString;function sx(t){return ix.call(t)}var ox="[object Null]",ax="[object Undefined]",wh=ei?ei.toStringTag:void 0;function Es(t){return t==null?t===void 0?ax:ox:wh&&wh in Object(t)?nx(t):sx(t)}function pi(t){return t!=null&&typeof t=="object"}var lx="[object Symbol]";function cx(t){return typeof t=="symbol"||pi(t)&&Es(t)==lx}function ux(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var dx=Array.isArray,No=dx,hx=1/0,Ch=ei?ei.prototype:void 0,Eh=Ch?Ch.toString:void 0;function om(t){if(typeof t=="string")return t;if(No(t))return ux(t,om)+"";if(cx(t))return Eh?Eh.call(t):"";var e=t+"";return e=="0"&&1/t==-hx?"-0":e}function Cr(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function am(t){return t}var fx="[object AsyncFunction]",px="[object Function]",gx="[object GeneratorFunction]",mx="[object Proxy]";function cu(t){if(!Cr(t))return!1;var e=Es(t);return e==px||e==gx||e==fx||e==mx}var _x=fi["__core-js_shared__"],ja=_x,Th=function(){var t=/[^.]+$/.exec(ja&&ja.keys&&ja.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function vx(t){return!!Th&&Th in t}var bx=Function.prototype,yx=bx.toString;function wx(t){if(t!=null){try{return yx.call(t)}catch{}try{return t+""}catch{}}return""}var Cx=/[\\^$.*+?()[\]{}|]/g,Ex=/^\[object .+?Constructor\]$/,Tx=Function.prototype,Ix=Object.prototype,Sx=Tx.toString,xx=Ix.hasOwnProperty,Rx=RegExp("^"+Sx.call(xx).replace(Cx,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Px(t){if(!Cr(t)||vx(t))return!1;var e=cu(t)?Rx:Ex;return e.test(wx(t))}function Ax(t,e){return t==null?void 0:t[e]}function uu(t,e){var n=Ax(t,e);return Px(n)?n:void 0}var Ih=Object.create,kx=function(){function t(){}return function(e){if(!Cr(e))return{};if(Ih)return Ih(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),Nx=kx;function Ox(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Mx(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var Dx=800,Lx=16,Fx=Date.now;function $x(t){var e=0,n=0;return function(){var r=Fx(),i=Lx-(r-n);if(n=r,i>0){if(++e>=Dx)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Bx(t){return function(){return t}}var Ux=function(){try{var t=uu(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Oo=Ux,Hx=Oo?function(t,e){return Oo(t,"toString",{configurable:!0,enumerable:!1,value:Bx(e),writable:!0})}:am,zx=Hx,Wx=$x(zx),jx=Wx,Vx=9007199254740991,qx=/^(?:0|[1-9]\d*)$/;function lm(t,e){var n=typeof t;return e=e==null?Vx:e,!!e&&(n=="number"||n!="symbol"&&qx.test(t))&&t>-1&&t%1==0&&t<e}function du(t,e,n){e=="__proto__"&&Oo?Oo(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function _a(t,e){return t===e||t!==t&&e!==e}var Kx=Object.prototype,Gx=Kx.hasOwnProperty;function Yx(t,e,n){var r=t[e];(!(Gx.call(t,e)&&_a(r,n))||n===void 0&&!(e in t))&&du(t,e,n)}function Xx(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?du(n,a,l):Yx(n,a,l)}return n}var Sh=Math.max;function Jx(t,e,n){return e=Sh(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=Sh(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),Ox(t,this,a)}}function Qx(t,e){return jx(Jx(t,e,am),t+"")}var Zx=9007199254740991;function cm(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Zx}function hu(t){return t!=null&&cm(t.length)&&!cu(t)}function eR(t,e,n){if(!Cr(n))return!1;var r=typeof e;return(r=="number"?hu(n)&&lm(e,n.length):r=="string"&&e in n)?_a(n[e],t):!1}function tR(t){return Qx(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&eR(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var nR=Object.prototype;function um(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||nR;return t===n}function rR(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var iR="[object Arguments]";function xh(t){return pi(t)&&Es(t)==iR}var dm=Object.prototype,sR=dm.hasOwnProperty,oR=dm.propertyIsEnumerable,aR=xh(function(){return arguments}())?xh:function(t){return pi(t)&&sR.call(t,"callee")&&!oR.call(t,"callee")},Dl=aR;function lR(){return!1}var hm=typeof It=="object"&&It&&!It.nodeType&&It,Rh=hm&&typeof St=="object"&&St&&!St.nodeType&&St,cR=Rh&&Rh.exports===hm,Ph=cR?fi.Buffer:void 0,uR=Ph?Ph.isBuffer:void 0,dR=uR||lR,fm=dR,hR="[object Arguments]",fR="[object Array]",pR="[object Boolean]",gR="[object Date]",mR="[object Error]",_R="[object Function]",vR="[object Map]",bR="[object Number]",yR="[object Object]",wR="[object RegExp]",CR="[object Set]",ER="[object String]",TR="[object WeakMap]",IR="[object ArrayBuffer]",SR="[object DataView]",xR="[object Float32Array]",RR="[object Float64Array]",PR="[object Int8Array]",AR="[object Int16Array]",kR="[object Int32Array]",NR="[object Uint8Array]",OR="[object Uint8ClampedArray]",MR="[object Uint16Array]",DR="[object Uint32Array]",Ne={};Ne[xR]=Ne[RR]=Ne[PR]=Ne[AR]=Ne[kR]=Ne[NR]=Ne[OR]=Ne[MR]=Ne[DR]=!0;Ne[hR]=Ne[fR]=Ne[IR]=Ne[pR]=Ne[SR]=Ne[gR]=Ne[mR]=Ne[_R]=Ne[vR]=Ne[bR]=Ne[yR]=Ne[wR]=Ne[CR]=Ne[ER]=Ne[TR]=!1;function LR(t){return pi(t)&&cm(t.length)&&!!Ne[Es(t)]}function FR(t){return function(e){return t(e)}}var pm=typeof It=="object"&&It&&!It.nodeType&&It,Wi=pm&&typeof St=="object"&&St&&!St.nodeType&&St,$R=Wi&&Wi.exports===pm,Va=$R&&im.process,BR=function(){try{var t=Wi&&Wi.require&&Wi.require("util").types;return t||Va&&Va.binding&&Va.binding("util")}catch{}}(),Ah=BR,kh=Ah&&Ah.isTypedArray,UR=kh?FR(kh):LR,gm=UR,HR=Object.prototype,zR=HR.hasOwnProperty;function WR(t,e){var n=No(t),r=!n&&Dl(t),i=!n&&!r&&fm(t),s=!n&&!r&&!i&&gm(t),o=n||r||i||s,a=o?rR(t.length,String):[],l=a.length;for(var c in t)(e||zR.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||lm(c,l)))&&a.push(c);return a}function jR(t,e){return function(n){return t(e(n))}}function VR(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var qR=Object.prototype,KR=qR.hasOwnProperty;function GR(t){if(!Cr(t))return VR(t);var e=um(t),n=[];for(var r in t)r=="constructor"&&(e||!KR.call(t,r))||n.push(r);return n}function mm(t){return hu(t)?WR(t,!0):GR(t)}var YR=uu(Object,"create"),ls=YR;function XR(){this.__data__=ls?ls(null):{},this.size=0}function JR(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var QR="__lodash_hash_undefined__",ZR=Object.prototype,e1=ZR.hasOwnProperty;function t1(t){var e=this.__data__;if(ls){var n=e[t];return n===QR?void 0:n}return e1.call(e,t)?e[t]:void 0}var n1=Object.prototype,r1=n1.hasOwnProperty;function i1(t){var e=this.__data__;return ls?e[t]!==void 0:r1.call(e,t)}var s1="__lodash_hash_undefined__";function o1(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ls&&e===void 0?s1:e,this}function _r(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}_r.prototype.clear=XR;_r.prototype.delete=JR;_r.prototype.get=t1;_r.prototype.has=i1;_r.prototype.set=o1;function a1(){this.__data__=[],this.size=0}function va(t,e){for(var n=t.length;n--;)if(_a(t[n][0],e))return n;return-1}var l1=Array.prototype,c1=l1.splice;function u1(t){var e=this.__data__,n=va(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():c1.call(e,n,1),--this.size,!0}function d1(t){var e=this.__data__,n=va(e,t);return n<0?void 0:e[n][1]}function h1(t){return va(this.__data__,t)>-1}function f1(t,e){var n=this.__data__,r=va(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function un(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}un.prototype.clear=a1;un.prototype.delete=u1;un.prototype.get=d1;un.prototype.has=h1;un.prototype.set=f1;var p1=uu(fi,"Map"),_m=p1;function g1(){this.size=0,this.__data__={hash:new _r,map:new(_m||un),string:new _r}}function m1(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ba(t,e){var n=t.__data__;return m1(e)?n[typeof e=="string"?"string":"hash"]:n.map}function _1(t){var e=ba(this,t).delete(t);return this.size-=e?1:0,e}function v1(t){return ba(this,t).get(t)}function b1(t){return ba(this,t).has(t)}function y1(t,e){var n=ba(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function gi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}gi.prototype.clear=g1;gi.prototype.delete=_1;gi.prototype.get=v1;gi.prototype.has=b1;gi.prototype.set=y1;function w1(t){return t==null?"":om(t)}var C1=jR(Object.getPrototypeOf,Object),vm=C1,E1="[object Object]",T1=Function.prototype,I1=Object.prototype,bm=T1.toString,S1=I1.hasOwnProperty,x1=bm.call(Object);function R1(t){if(!pi(t)||Es(t)!=E1)return!1;var e=vm(t);if(e===null)return!0;var n=S1.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&bm.call(n)==x1}function P1(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function A1(t,e,n){var r=t.length;return n=n===void 0?r:n,!e&&n>=r?t:P1(t,e,n)}var k1="\\ud800-\\udfff",N1="\\u0300-\\u036f",O1="\\ufe20-\\ufe2f",M1="\\u20d0-\\u20ff",D1=N1+O1+M1,L1="\\ufe0e\\ufe0f",F1="\\u200d",$1=RegExp("["+F1+k1+D1+L1+"]");function ym(t){return $1.test(t)}function B1(t){return t.split("")}var wm="\\ud800-\\udfff",U1="\\u0300-\\u036f",H1="\\ufe20-\\ufe2f",z1="\\u20d0-\\u20ff",W1=U1+H1+z1,j1="\\ufe0e\\ufe0f",V1="["+wm+"]",Ll="["+W1+"]",Fl="\\ud83c[\\udffb-\\udfff]",q1="(?:"+Ll+"|"+Fl+")",Cm="[^"+wm+"]",Em="(?:\\ud83c[\\udde6-\\uddff]){2}",Tm="[\\ud800-\\udbff][\\udc00-\\udfff]",K1="\\u200d",Im=q1+"?",Sm="["+j1+"]?",G1="(?:"+K1+"(?:"+[Cm,Em,Tm].join("|")+")"+Sm+Im+")*",Y1=Sm+Im+G1,X1="(?:"+[Cm+Ll+"?",Ll,Em,Tm,V1].join("|")+")",J1=RegExp(Fl+"(?="+Fl+")|"+X1+Y1,"g");function Q1(t){return t.match(J1)||[]}function Z1(t){return ym(t)?Q1(t):B1(t)}function eP(t){return function(e){e=w1(e);var n=ym(e)?Z1(e):void 0,r=n?n[0]:e.charAt(0),i=n?A1(n,1).join(""):e.slice(1);return r[t]()+i}}var tP=eP("toUpperCase"),nP=tP;function rP(){this.__data__=new un,this.size=0}function iP(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function sP(t){return this.__data__.get(t)}function oP(t){return this.__data__.has(t)}var aP=200;function lP(t,e){var n=this.__data__;if(n instanceof un){var r=n.__data__;if(!_m||r.length<aP-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new gi(r)}return n.set(t,e),this.size=n.size,this}function mi(t){var e=this.__data__=new un(t);this.size=e.size}mi.prototype.clear=rP;mi.prototype.delete=iP;mi.prototype.get=sP;mi.prototype.has=oP;mi.prototype.set=lP;var xm=typeof It=="object"&&It&&!It.nodeType&&It,Nh=xm&&typeof St=="object"&&St&&!St.nodeType&&St,cP=Nh&&Nh.exports===xm,Oh=cP?fi.Buffer:void 0,Mh=Oh?Oh.allocUnsafe:void 0;function uP(t,e){if(e)return t.slice();var n=t.length,r=Mh?Mh(n):new t.constructor(n);return t.copy(r),r}var dP=fi.Uint8Array,Dh=dP;function hP(t){var e=new t.constructor(t.byteLength);return new Dh(e).set(new Dh(t)),e}function fP(t,e){var n=e?hP(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function pP(t){return typeof t.constructor=="function"&&!um(t)?Nx(vm(t)):{}}function gP(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var l=o[t?a:++i];if(n(s[l],l,s)===!1)break}return e}}var mP=gP(),_P=mP;function $l(t,e,n){(n!==void 0&&!_a(t[e],n)||n===void 0&&!(e in t))&&du(t,e,n)}function vP(t){return pi(t)&&hu(t)}function Bl(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}function bP(t){return Xx(t,mm(t))}function yP(t,e,n,r,i,s,o){var a=Bl(t,n),l=Bl(e,n),c=o.get(l);if(c){$l(t,n,c);return}var u=s?s(a,l,n+"",t,e,o):void 0,d=u===void 0;if(d){var h=No(l),_=!h&&fm(l),p=!h&&!_&&gm(l);u=l,h||_||p?No(a)?u=a:vP(a)?u=Mx(a):_?(d=!1,u=uP(l,!0)):p?(d=!1,u=fP(l,!0)):u=[]:R1(l)||Dl(l)?(u=a,Dl(a)?u=bP(a):(!Cr(a)||cu(a))&&(u=pP(l))):d=!1}d&&(o.set(l,u),i(u,l,r,s,o),o.delete(l)),$l(t,n,u)}function Rm(t,e,n,r,i){t!==e&&_P(e,function(s,o){if(i||(i=new mi),Cr(s))yP(t,e,o,n,Rm,r,i);else{var a=r?r(Bl(t,o),s,o+"",t,e,i):void 0;a===void 0&&(a=s),$l(t,o,a)}},mm)}var wP=tR(function(t,e,n){Rm(t,e,n)}),Ws=wP,ya={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"};const{fontSize:CP,fontFamily:EP,lineHeight:TP}=ya;var Pm=te("body",`
 margin: 0;
 font-size: ${CP};
 font-family: ${EP};
 line-height: ${TP};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[te("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);const Ts="n-config-provider",cs="naive-ui-style";function Is(t,e,n,r,i,s){const o=ma();if(n){const c=()=>{const u=s==null?void 0:s.value;n.mount({id:u===void 0?e:u+e,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:cs,ssr:o}),Pm.mount({id:"n-global",head:!0,anchorMetaName:cs,ssr:o})};o?c():Vo(c)}const a=Ve(Ts,null);return ce(()=>{var c;const{theme:{common:u,self:d,peers:h={}}={},themeOverrides:_={},builtinThemeOverrides:p={}}=i,{common:C,peers:b}=_,{common:k=void 0,[t]:{common:F=void 0,self:B=void 0,peers:H={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:q=void 0,[t]:_e={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:E,peers:S={}}=_e,D=Ws({},u||F||k||r.common,q,E,C),K=Ws((c=d||B||r.self)===null||c===void 0?void 0:c(D),p,_e,_);return{common:D,self:K,peers:Ws({},r.peers,H,h),peerOverrides:Ws({},S,b)}})}Is.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const IP="n";function Am(t={},e={defaultBordered:!0}){const n=Ve(Ts,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:ce(()=>{var r,i;const{bordered:s}=t;return s!==void 0?s:(i=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:e.defaultBordered)!==null&&i!==void 0?i:!0}),mergedClsPrefixRef:ce(()=>(n==null?void 0:n.mergedClsPrefixRef.value)||IP),namespaceRef:ce(()=>n==null?void 0:n.mergedNamespaceRef.value)}}const SP={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)"}};var xP=SP;function qa(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}function Ri(t){return function(e,n){var r=n||{},i=r.context?String(r.context):"standalone",s;if(i==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=r.width?String(r.width):o;s=t.formattingValues[a]||t.formattingValues[o]}else{var l=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;s=t.values[c]||t.values[l]}var u=t.argumentCallback?t.argumentCallback(e):e;return s[u]}}function RP(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}function Pi(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?AP(a,function(d){return d.test(o)}):PP(a,function(d){return d.test(o)}),c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;var u=e.slice(o.length);return{value:c,rest:u}}}function PP(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function AP(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var kP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},NP=function(t,e,n){var r,i=kP[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},OP=NP,MP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},DP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},LP={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},FP={date:qa({formats:MP,defaultWidth:"full"}),time:qa({formats:DP,defaultWidth:"full"}),dateTime:qa({formats:LP,defaultWidth:"full"})},$P=FP,BP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},UP=function(t,e,n,r){return BP[t]},HP=UP,zP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},WP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},jP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},VP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},KP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},GP=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},YP={ordinalNumber:GP,era:Ri({values:zP,defaultWidth:"wide"}),quarter:Ri({values:WP,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Ri({values:jP,defaultWidth:"wide"}),day:Ri({values:VP,defaultWidth:"wide"}),dayPeriod:Ri({values:qP,defaultWidth:"wide",formattingValues:KP,defaultFormattingWidth:"wide"})},XP=YP,JP=/^(\d+)(th|st|nd|rd)?/i,QP=/\d+/i,ZP={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},eA={any:[/^b/i,/^(a|c)/i]},tA={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},nA={any:[/1/i,/2/i,/3/i,/4/i]},rA={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},iA={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},sA={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},oA={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},aA={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},lA={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},cA={ordinalNumber:RP({matchPattern:JP,parsePattern:QP,valueCallback:function(t){return parseInt(t,10)}}),era:Pi({matchPatterns:ZP,defaultMatchWidth:"wide",parsePatterns:eA,defaultParseWidth:"any"}),quarter:Pi({matchPatterns:tA,defaultMatchWidth:"wide",parsePatterns:nA,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Pi({matchPatterns:rA,defaultMatchWidth:"wide",parsePatterns:iA,defaultParseWidth:"any"}),day:Pi({matchPatterns:sA,defaultMatchWidth:"wide",parsePatterns:oA,defaultParseWidth:"any"}),dayPeriod:Pi({matchPatterns:aA,defaultMatchWidth:"any",parsePatterns:lA,defaultParseWidth:"any"})},uA=cA,dA={code:"en-US",formatDistance:OP,formatLong:$P,formatRelative:HP,localize:XP,match:uA,options:{weekStartsOn:0,firstWeekContainsDate:1}},hA=dA;const fA={name:"en-US",locale:hA};var pA=fA;function gA(t){const{mergedLocaleRef:e,mergedDateLocaleRef:n}=Ve(Ts,null)||{},r=ce(()=>{var s,o;return(o=(s=e==null?void 0:e.value)===null||s===void 0?void 0:s[t])!==null&&o!==void 0?o:xP[t]});return{dateLocaleRef:ce(()=>{var s;return(s=n==null?void 0:n.value)!==null&&s!==void 0?s:pA}),localeRef:r}}function fu(t,e,n){if(!e)return;const r=ma(),i=()=>{const s=n==null?void 0:n.value;e.mount({id:s===void 0?t:s+t,head:!0,anchorMetaName:cs,props:{bPrefix:s?`.${s}-`:void 0},ssr:r}),Pm.mount({id:"n-global",head:!0,anchorMetaName:cs,ssr:r})};r?i():Vo(i)}function km(t,e,n,r){var i;n||qI("useThemeClass","cssVarsRef is not passed");const s=(i=Ve(Ts,null))===null||i===void 0?void 0:i.mergedThemeHashRef,o=le(""),a=ma();let l;const c=`__${t}`,u=()=>{let d=c;const h=e?e.value:void 0,_=s==null?void 0:s.value;_&&(d+="-"+_),h&&(d+="-"+h);const{themeOverrides:p,builtinThemeOverrides:C}=r;p&&(d+="-"+Nl(JSON.stringify(p))),C&&(d+="-"+Nl(JSON.stringify(C))),o.value=d,l=()=>{const b=n.value;let k="";for(const F in b)k+=`${F}: ${b[F]};`;te(`.${d}`,k).mount({id:d,ssr:a}),l=void 0}};return Wr(()=>{u()}),{themeClass:o,onRender:()=>{l==null||l()}}}function mA(t,e){return De({name:nP(t),setup(){var n;const r=(n=Ve(Ts,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var i;const s=(i=r==null?void 0:r.value)===null||i===void 0?void 0:i[t];return s?s():e}}})}var _A=De({name:"Eye",render(){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},O("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),O("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),vA=De({name:"EyeOff",render(){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},O("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),O("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),O("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),O("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),O("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),bA=De({name:"ChevronDown",render(){return O("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),yA=mA("clear",O("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},O("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},O("g",{fill:"currentColor","fill-rule":"nonzero"},O("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Nm=De({name:"BaseIconSwitchTransition",setup(t,{slots:e}){const n=CS();return()=>O(Ji,{name:"icon-switch-transition",appear:n.value},e)}}),wA=ke("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[te("svg",{height:"1em",width:"1em"})]),pu=De({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(t){fu("-base-icon",wA,$o(t,"clsPrefix"))},render(){return O("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});const{cubicBezierEaseInOut:CA}=ya;function Ul({originalTransform:t="",left:e=0,top:n=0,transition:r=`all .3s ${CA} !important`}={}){return[te("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:t+" scale(0.75)",left:e,top:n,opacity:0}),te("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:e,top:n,opacity:1}),te("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:n,transition:r})]}var EA=te([te("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),te("@keyframes loading-layer-rotate",`
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
 `),te("@keyframes loading-left-spin",`
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
 `),te("@keyframes loading-right-spin",`
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
 `),ke("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[V("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Ul()]),V("container",`
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
 `,[Ul({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),TA=De({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(t){fu("-base-loading",EA,$o(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:e,strokeWidth:n,stroke:r,scale:i}=this,s=e/i;return O("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},O(Nm,null,{default:()=>this.show?O("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},O("div",{class:`${t}-base-loading__container`},O("div",{class:`${t}-base-loading__container-layer`},O("div",{class:`${t}-base-loading__container-layer-left`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),O("div",{class:`${t}-base-loading__container-layer-patch`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),O("div",{class:`${t}-base-loading__container-layer-right`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e})))))):O("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}});const j={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.52",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},IA=mr(j.neutralBase),Om=mr(j.neutralInvertBase),SA="rgba("+Om.slice(0,3).join(", ")+", ";function Lh(t){return SA+String(t)+")"}function st(t){const e=Array.from(Om);return e[3]=Number(t),jI(IA,e)}const xA=Object.assign(Object.assign({name:"common"},ya),{baseColor:j.neutralBase,primaryColor:j.primaryDefault,primaryColorHover:j.primaryHover,primaryColorPressed:j.primaryActive,primaryColorSuppl:j.primarySuppl,infoColor:j.infoDefault,infoColorHover:j.infoHover,infoColorPressed:j.infoActive,infoColorSuppl:j.infoSuppl,successColor:j.successDefault,successColorHover:j.successHover,successColorPressed:j.successActive,successColorSuppl:j.successSuppl,warningColor:j.warningDefault,warningColorHover:j.warningHover,warningColorPressed:j.warningActive,warningColorSuppl:j.warningSuppl,errorColor:j.errorDefault,errorColorHover:j.errorHover,errorColorPressed:j.errorActive,errorColorSuppl:j.errorSuppl,textColorBase:j.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:st(j.alpha4),placeholderColor:st(j.alpha4),placeholderColorDisabled:st(j.alpha5),iconColor:st(j.alpha4),iconColorHover:Ls(st(j.alpha4),{lightness:.75}),iconColorPressed:Ls(st(j.alpha4),{lightness:.9}),iconColorDisabled:st(j.alpha5),opacity1:j.alpha1,opacity2:j.alpha2,opacity3:j.alpha3,opacity4:j.alpha4,opacity5:j.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeColor:st(Number(j.alphaClose)),closeColorHover:st(Number(j.alphaClose)*1.25),closeColorPressed:st(Number(j.alphaClose)*.8),closeColorDisabled:st(j.alpha4),clearColor:st(j.alpha4),clearColorHover:Ls(st(j.alpha4),{lightness:.75}),clearColorPressed:Ls(st(j.alpha4),{lightness:.9}),scrollbarColor:Lh(j.alphaScrollbar),scrollbarColorHover:Lh(j.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:st(j.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:j.neutralPopover,tableColor:j.neutralCard,cardColor:j.neutralCard,modalColor:j.neutralModal,bodyColor:j.neutralBody,tagColor:"rgb(250, 250, 252)",avatarColor:st(j.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:st(j.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:j.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"});var Mm=xA;const RA=t=>{const{scrollbarColor:e,scrollbarColorHover:n}=t;return{color:e,colorHover:n}},PA={name:"Scrollbar",common:Mm,self:RA};var AA=PA;const{cubicBezierEaseInOut:Fh}=ya;function kA({name:t="fade-in",enterDuration:e="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=Fh,leaveCubicBezier:i=Fh}={}){return[te(`&.${t}-transition-enter-active`,{transition:`all ${e} ${r}!important`}),te(`&.${t}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),te(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0}),te(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`,{opacity:1})]}var NA=ke("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[te(">",[ke("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[te("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),te(">",[ke("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])]),ke("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 `,[Et("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[te(">",[V("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Et("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[te(">",[V("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Et("disabled",[te(">",[V("scrollbar",{pointerEvents:"none"})])]),te(">",[V("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[kA(),te("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]);const OA=Object.assign(Object.assign({},Is.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function}),MA=De({name:"Scrollbar",props:OA,inheritAttrs:!1,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=Am(t),r=le(null),i=le(null),s=le(null),o=le(null),a=le(null),l=le(null),c=le(null),u=le(null),d=le(null),h=le(null),_=le(null),p=le(0),C=le(0),b=le(!1),k=le(!1);let F=!1,B=!1,H,q,_e=0,E=0,S=0,D=0;const K=TS(),Z=ce(()=>{const{value:I}=u,{value:$}=l,{value:Y}=h;return I===null||$===null||Y===null?0:Math.min(I,Y*I/$+t.size*1.5)}),L=ce(()=>`${Z.value}px`),re=ce(()=>{const{value:I}=d,{value:$}=c,{value:Y}=_;return I===null||$===null||Y===null?0:Y*I/$+t.size*1.5}),we=ce(()=>`${re.value}px`),Se=ce(()=>{const{value:I}=u,{value:$}=p,{value:Y}=l,{value:me}=h;if(I===null||Y===null||me===null)return 0;{const Oe=Y-I;return Oe?$/Oe*(me-Z.value):0}}),he=ce(()=>`${Se.value}px`),pe=ce(()=>{const{value:I}=d,{value:$}=C,{value:Y}=c,{value:me}=_;if(I===null||Y===null||me===null)return 0;{const Oe=Y-I;return Oe?$/Oe*(me-re.value):0}}),ie=ce(()=>`${pe.value}px`),He=ce(()=>{const{value:I}=u,{value:$}=l;return I!==null&&$!==null&&$>I}),bt=ce(()=>{const{value:I}=d,{value:$}=c;return I!==null&&$!==null&&$>I}),Le=ce(()=>{const{container:I}=t;return I?I():i.value}),ht=ce(()=>{const{content:I}=t;return I?I():s.value}),ft=M,Er=I=>{const{onResize:$}=t;$&&$(I),M()},_i=(I,$)=>{if(!t.scrollable)return;if(typeof I=="number"){Je(I,$!=null?$:0,0,!1,"auto");return}const{left:Y,top:me,index:Oe,elSize:ye,position:Fe,behavior:Te,el:Mt,debounce:hn=!0}=I;(Y!==void 0||me!==void 0)&&Je(Y!=null?Y:0,me!=null?me:0,0,!1,Te),Mt!==void 0?Je(0,Mt.offsetTop,Mt.offsetHeight,hn,Te):Oe!==void 0&&ye!==void 0?Je(0,Oe*ye,ye,hn,Te):Fe==="bottom"?Je(0,Number.MAX_SAFE_INTEGER,0,!1,Te):Fe==="top"&&Je(0,0,0,!1,Te)},vi=(I,$)=>{if(!t.scrollable)return;const{value:Y}=Le;!Y||(typeof I=="object"?Y.scrollBy(I):Y.scrollBy(I,$||0))};function Je(I,$,Y,me,Oe){const{value:ye}=Le;if(!!ye){if(me){const{scrollTop:Fe,offsetHeight:Te}=ye;if($>Fe){$+Y<=Fe+Te||ye.scrollTo({left:I,top:$+Y-Te,behavior:Oe});return}}ye.scrollTo({left:I,top:$,behavior:Oe})}}function dn(){f(),g(),M()}function Tr(){At()}function At(){Dn(),Ln()}function Dn(){q!==void 0&&window.clearTimeout(q),q=window.setTimeout(()=>{k.value=!1},t.duration)}function Ln(){H!==void 0&&window.clearTimeout(H),H=window.setTimeout(()=>{b.value=!1},t.duration)}function f(){H!==void 0&&window.clearTimeout(H),b.value=!0}function g(){q!==void 0&&window.clearTimeout(q),k.value=!0}function v(I){const{onScroll:$}=t;$&&$(I),y()}function y(){const{value:I}=Le;I&&(p.value=I.scrollTop,C.value=I.scrollLeft)}function w(){const{value:I}=ht;I&&(l.value=I.offsetHeight,c.value=I.offsetWidth);const{value:$}=Le;$&&(u.value=$.offsetHeight,d.value=$.offsetWidth);const{value:Y}=a,{value:me}=o;Y&&(_.value=Y.offsetWidth),me&&(h.value=me.offsetHeight)}function A(){const{value:I}=Le;I&&(p.value=I.scrollTop,C.value=I.scrollLeft,u.value=I.offsetHeight,d.value=I.offsetWidth,l.value=I.scrollHeight,c.value=I.scrollWidth);const{value:$}=a,{value:Y}=o;$&&(_.value=$.offsetWidth),Y&&(h.value=Y.offsetHeight)}function M(){!t.scrollable||(t.useUnifiedContainer?A():(w(),y()))}function R(I){var $;return!(!(($=r.value)===null||$===void 0)&&$.contains(I.target))}function N(I){I.preventDefault(),I.stopPropagation(),B=!0,Zn("mousemove",window,T,!0),Zn("mouseup",window,W,!0),E=C.value,S=I.clientX}function T(I){if(!B)return;H!==void 0&&window.clearTimeout(H),q!==void 0&&window.clearTimeout(q);const{value:$}=d,{value:Y}=c,{value:me}=re;if($===null||Y===null)return;const ye=(I.clientX-S)*(Y-$)/($-me),Fe=Y-$;let Te=E+ye;Te=Math.min(Fe,Te),Te=Math.max(Te,0);const{value:Mt}=Le;if(Mt){Mt.scrollLeft=Te;const{internalOnUpdateScrollLeft:hn}=t;hn&&hn(Te)}}function W(I){I.preventDefault(),I.stopPropagation(),Qt("mousemove",window,T,!0),Qt("mouseup",window,W,!0),B=!1,M(),R(I)&&At()}function U(I){I.preventDefault(),I.stopPropagation(),F=!0,Zn("mousemove",window,z,!0),Zn("mouseup",window,G,!0),_e=p.value,D=I.clientY}function z(I){if(!F)return;H!==void 0&&window.clearTimeout(H),q!==void 0&&window.clearTimeout(q);const{value:$}=u,{value:Y}=l,{value:me}=Z;if($===null||Y===null)return;const ye=(I.clientY-D)*(Y-$)/($-me),Fe=Y-$;let Te=_e+ye;Te=Math.min(Fe,Te),Te=Math.max(Te,0);const{value:Mt}=Le;Mt&&(Mt.scrollTop=Te)}function G(I){I.preventDefault(),I.stopPropagation(),Qt("mousemove",window,z,!0),Qt("mouseup",window,G,!0),F=!1,M(),R(I)&&At()}Wr(()=>{const{value:I}=bt,{value:$}=He,{value:Y}=e,{value:me}=a,{value:Oe}=o;me&&(I?me.classList.remove(`${Y}-scrollbar-rail--disabled`):me.classList.add(`${Y}-scrollbar-rail--disabled`)),Oe&&($?Oe.classList.remove(`${Y}-scrollbar-rail--disabled`):Oe.classList.add(`${Y}-scrollbar-rail--disabled`))}),br(()=>{t.container||M()}),qo(()=>{H!==void 0&&window.clearTimeout(H),q!==void 0&&window.clearTimeout(q),Qt("mousemove",window,z,!0),Qt("mouseup",window,G,!0)});const ae=Is("Scrollbar","-scrollbar",NA,AA,t,e),Ce=ce(()=>{const{common:{cubicBezierEaseInOut:I,scrollbarBorderRadius:$,scrollbarHeight:Y,scrollbarWidth:me},self:{color:Oe,colorHover:ye}}=ae.value;return{"--n-scrollbar-bezier":I,"--n-scrollbar-color":Oe,"--n-scrollbar-color-hover":ye,"--n-scrollbar-border-radius":$,"--n-scrollbar-width":me,"--n-scrollbar-height":Y}}),fe=n?km("scrollbar",void 0,Ce,t):void 0;return Object.assign(Object.assign({},{scrollTo:_i,scrollBy:vi,sync:M,syncUnifiedContainer:A,handleMouseEnterWrapper:dn,handleMouseLeaveWrapper:Tr}),{mergedClsPrefix:e,containerScrollTop:p,wrapperRef:r,containerRef:i,contentRef:s,yRailRef:o,xRailRef:a,needYBar:He,needXBar:bt,yBarSizePx:L,xBarSizePx:we,yBarTopPx:he,xBarLeftPx:ie,isShowXBar:b,isShowYBar:k,isIos:K,handleScroll:v,handleContentResize:ft,handleContainerResize:Er,handleYScrollMouseDown:U,handleXScrollMouseDown:N,cssVars:n?void 0:Ce,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){var t;const{$slots:e,mergedClsPrefix:n,triggerDisplayManually:r}=this;if(!this.scrollable)return(t=e.default)===null||t===void 0?void 0:t.call(e);const i=()=>{var s,o;return(s=this.onRender)===null||s===void 0||s.call(this),O("div",Df(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(o=e.default)===null||o===void 0?void 0:o.call(e):O("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},O(Ml,{onResize:this.handleContentResize},{default:()=>O("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},e)})),O("div",{ref:"yRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--vertical`,style:this.horizontalRailStyle,"aria-hidden":!0},O(Ji,{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?O("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),O("div",{ref:"xRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--horizontal`,style:this.verticalRailStyle,"aria-hidden":!0},O(Ji,{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?O("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,left:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])};return this.container?i():O(Ml,{onResize:this.handleContainerResize},{default:i})}});var DA=MA;function LA(t,e,n){if(!e)return;const r=ma(),i=ce(()=>{const{value:o}=e;if(!o)return;const a=o[t];if(!!a)return a}),s=()=>{Wr(()=>{const{value:o}=n,a=`${o}${t}Rtl`;if(uS(a,r))return;const{value:l}=i;!l||l.style.mount({id:a,head:!0,anchorMetaName:cs,props:{bPrefix:o?`.${o}-`:void 0},ssr:r})})};return r?s():Vo(s),i}var FA=ke("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[te(">",[V("clear",`
 font-size: var(--n-clear-size);
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 `,[te("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),te("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),V("placeholder",`
 display: flex;
 `),V("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ul({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Hl=De({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return fu("-base-clear",FA,$o(t,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:t}=this;return O("div",{class:`${t}-base-clear`},O(Nm,null,{default:()=>{var e,n;return this.show?O(pu,{clsPrefix:t,key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},{default:()=>O(yA,null)}):O("div",{key:"icon",class:`${t}-base-clear__placeholder`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}))}}),$A=De({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:e}){return()=>{const{clsPrefix:n}=t;return O(TA,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?O(Hl,{clsPrefix:n,show:t.showClear,onClear:t.onClear},{default:()=>O(pu,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>Zs(e.default,()=>[O(bA,null)])})}):null})}}}),BA={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const UA=t=>{const{textColor2:e,textColor3:n,textColorDisabled:r,primaryColor:i,primaryColorHover:s,inputColor:o,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:u,errorColor:d,errorColorHover:h,borderRadius:_,lineHeight:p,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:k,fontSizeLarge:F,heightTiny:B,heightSmall:H,heightMedium:q,heightLarge:_e,actionColor:E,clearColor:S,clearColorHover:D,clearColorPressed:K,placeholderColor:Z,placeholderColorDisabled:L,iconColor:re,iconColorDisabled:we,iconColorHover:Se,iconColorPressed:he}=t;return Object.assign(Object.assign({},BA),{countTextColor:n,heightTiny:B,heightSmall:H,heightMedium:q,heightLarge:_e,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:k,fontSizeLarge:F,lineHeight:p,lineHeightTextarea:p,borderRadius:_,iconSize:"16px",groupLabelColor:E,groupLabelTextColor:e,textColor:e,textColorDisabled:r,textDecorationColor:e,caretColor:i,placeholderColor:Z,placeholderColorDisabled:L,color:o,colorDisabled:a,colorFocus:o,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${s}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${s}`,boxShadowFocus:`0 0 0 2px ${Ha(i,{alpha:.2})}`,loadingColor:i,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${u}`,colorFocusWarning:o,borderFocusWarning:`1px solid ${u}`,boxShadowFocusWarning:`0 0 0 2px ${Ha(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${h}`,colorFocusError:o,borderFocusError:`1px solid ${h}`,boxShadowFocusError:`0 0 0 2px ${Ha(d,{alpha:.2})}`,caretColorError:d,clearColor:S,clearColorHover:D,clearColorPressed:K,iconColor:re,iconColorDisabled:we,iconColorHover:Se,iconColorPressed:he,suffixTextColor:e})},HA={name:"Input",common:Mm,self:UA};var zA=HA;const Dm="n-input";function WA(t){let e=0;for(const n of t)e++;return e}function js(t){return["",void 0,null].includes(t)}var $h=De({name:"InputWordCount",setup(t,{slots:e}){const{mergedValueRef:n,maxlengthRef:r,mergedClsPrefixRef:i}=Ve(Dm),s=ce(()=>{const{value:o}=n;return o===null||Array.isArray(o)?0:WA(o)});return()=>{const{value:o}=r,{value:a}=n;return O("span",{class:`${i.value}-input-word-count`},KI(e.default,{value:a===null||Array.isArray(a)?"":a},()=>[o===void 0?s.value:`${s.value} / ${o}`]))}}}),jA=ke("input",`
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
 `,[te("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),te("&::placeholder","color: #0000;"),te("&:-webkit-autofill ~",[V("placeholder","display: none;")])]),Et("round",[Si("textarea","border-radius: calc(var(--n-height) / 2);")]),V("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[te("span",`
 width: 100%;
 display: inline-block;
 `)]),Et("textarea",[V("placeholder","overflow: visible;")]),Si("autosize","width: 100%;"),Et("autosize",[V("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),ke("input-wrapper",`
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
 `,[te("+",[V("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Si("textarea",[V("placeholder","white-space: nowrap;")]),V("eye",`
 transition: color .3s var(--n-bezier);
 `),Et("textarea","width: 100%;",[ke("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),Et("resizable",[ke("input-wrapper",`
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
 `,[ke("icon",`
 color: var(--n-icon-color);
 `),ke("base-icon",`
 color: var(--n-icon-color);
 `)])]),Et("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[V("border","border: var(--n-border-disabled);"),V("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),V("placeholder","color: var(--n-placeholder-color-disabled);"),V("separator","color: var(--n-text-color-disabled);",[ke("icon",`
 color: var(--n-icon-color-disabled);
 `),ke("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),V("suffix, prefix","color: var(--n-text-color-disabled);",[ke("icon",`
 color: var(--n-icon-color-disabled);
 `),ke("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Si("disabled",[V("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[te("&:hover",`
 color: var(--n-icon-color-hover);
 `),te("&:active",`
 color: var(--n-icon-color-pressed);
 `),ke("icon",[te("&:hover",`
 color: var(--n-icon-color-hover);
 `),te("&:active",`
 color: var(--n-icon-color-pressed);
 `)])]),te("&:hover",[V("state-border","border: var(--n-border-hover);")]),Et("focus","background-color: var(--n-color-focus);",[V("state-border",`
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
 `,[ke("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),ke("base-clear",`
 font-size: var(--n-icon-size);
 `,[V("placeholder",[ke("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),te(">",[ke("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),ke("base-icon",`
 font-size: var(--n-icon-size);
 `)]),ke("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>Et(`${t}-status`,[Si("disabled",[ke("base-loading",`
 color: var(--n-loading-color-${t})
 `),V("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),V("state-border",`
 border: var(--n-border-${t});
 `),te("&:hover",[V("state-border",`
 border: var(--n-border-hover-${t});
 `)]),te("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[V("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),Et("focus",`
 background-color: var(--n-color-focus-${t});
 `,[V("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]);const VA=Object.assign(Object.assign({},Is.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var qA=De({name:"Input",props:VA,setup(t){const{mergedClsPrefixRef:e,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Am(t),s=Is("Input","-input",jA,zA,t,e),o=le(null),a=le(null),l=le(null),c=le(null),u=le(null),d=le(null),h=le(null),{localeRef:_}=gA("Input"),p=le(t.defaultValue),C=$o(t,"value"),b=wS(C,p),k=YS(t),{mergedSizeRef:F,mergedDisabledRef:B,mergedStatusRef:H}=k,q=le(!1),_e=le(!1),E=le(!1),S=le(!1);let D=null;const K=ce(()=>{const{placeholder:m,pair:x}=t;return x?Array.isArray(m)?m:m===void 0?["",""]:[m,m]:m===void 0?[_.value.placeholder]:[m]}),Z=ce(()=>{const{value:m}=E,{value:x}=b,{value:J}=K;return!m&&(js(x)||Array.isArray(x)&&js(x[0]))&&J[0]}),L=ce(()=>{const{value:m}=E,{value:x}=b,{value:J}=K;return!m&&J[1]&&(js(x)||Array.isArray(x)&&js(x[1]))}),re=lh(()=>t.internalForceFocus||q.value),we=lh(()=>{if(B.value||t.readonly||!t.clearable||!re.value&&!_e.value)return!1;const{value:m}=b,{value:x}=re;return t.pair?!!(Array.isArray(m)&&(m[0]||m[1]))&&(_e.value||x):!!m&&(_e.value||x)}),Se=ce(()=>{const{showPasswordOn:m}=t;if(m)return m;if(t.showPasswordToggle)return"click"}),he=le(!1),pe=ce(()=>{const{textDecoration:m}=t;return m?Array.isArray(m)?m.map(x=>({textDecoration:x})):[{textDecoration:m}]:["",""]}),ie=le(void 0),He=()=>{var m,x;if(t.type==="textarea"){const{autosize:J}=t;if(J&&(ie.value=(x=(m=h.value)===null||m===void 0?void 0:m.$el)===null||x===void 0?void 0:x.offsetWidth),!a.value||typeof J=="boolean")return;const{paddingTop:Ke,paddingBottom:Ge,lineHeight:it}=window.getComputedStyle(a.value),Fn=Number(Ke.slice(0,-2)),$n=Number(Ge.slice(0,-2)),Bn=Number(it.slice(0,-2)),{value:bi}=l;if(!bi)return;if(J.minRows){const yi=Math.max(J.minRows,1),wa=`${Fn+$n+Bn*yi}px`;bi.style.minHeight=wa}if(J.maxRows){const yi=`${Fn+$n+Bn*J.maxRows}px`;bi.style.maxHeight=yi}}},bt=ce(()=>{const{maxlength:m}=t;return m===void 0?void 0:Number(m)});br(()=>{const{value:m}=b;Array.isArray(m)||Te(m)});const Le=ac().proxy;function ht(m){const{onUpdateValue:x,"onUpdate:value":J,onInput:Ke}=t,{nTriggerFormInput:Ge}=k;x&&gt(x,m),J&&gt(J,m),Ke&&gt(Ke,m),p.value=m,Ge()}function ft(m){const{onChange:x}=t,{nTriggerFormChange:J}=k;x&&gt(x,m),p.value=m,J()}function Er(m){const{onBlur:x}=t,{nTriggerFormBlur:J}=k;x&&gt(x,m),J()}function _i(m){const{onFocus:x}=t,{nTriggerFormFocus:J}=k;x&&gt(x,m),J()}function vi(m){const{onClear:x}=t;x&&gt(x,m)}function Je(m){const{onInputBlur:x}=t;x&&gt(x,m)}function dn(m){const{onInputFocus:x}=t;x&&gt(x,m)}function Tr(){const{onDeactivate:m}=t;m&&gt(m)}function At(){const{onActivate:m}=t;m&&gt(m)}function Dn(m){const{onClick:x}=t;x&&gt(x,m)}function Ln(m){const{onWrapperFocus:x}=t;x&&gt(x,m)}function f(m){const{onWrapperBlur:x}=t;x&&gt(x,m)}function g(){E.value=!0}function v(m){E.value=!1,m.target===d.value?y(m,1):y(m,0)}function y(m,x=0,J="input"){const Ke=m.target.value;if(Te(Ke),t.type==="textarea"){const{value:it}=h;it&&it.syncUnifiedContainer()}if(D=Ke,E.value)return;const Ge=Ke;if(!t.pair)J==="input"?ht(Ge):ft(Ge);else{let{value:it}=b;Array.isArray(it)?it=[...it]:it=["",""],it[x]=Ge,J==="input"?ht(it):ft(it)}Le.$forceUpdate()}function w(m){Je(m),m.relatedTarget===o.value&&Tr(),m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value)||(S.value=!1),N(m,"blur")}function A(m){dn(m),q.value=!0,S.value=!0,At(),N(m,"focus")}function M(m){t.passivelyActivated&&(f(m),N(m,"blur"))}function R(m){t.passivelyActivated&&(q.value=!0,Ln(m),N(m,"focus"))}function N(m,x){m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value||m.relatedTarget===o.value)||(x==="focus"?(_i(m),q.value=!0):x==="blur"&&(Er(m),q.value=!1))}function T(m,x){y(m,x,"change")}function W(m){Dn(m)}function U(m){vi(m),t.pair?(ht(["",""]),ft(["",""])):(ht(""),ft(""))}function z(m){const{onMousedown:x}=t;x&&x(m);const{tagName:J}=m.target;if(J!=="INPUT"&&J!=="TEXTAREA"){if(t.resizable){const{value:Ke}=o;if(Ke){const{left:Ge,top:it,width:Fn,height:$n}=Ke.getBoundingClientRect(),Bn=14;if(Ge+Fn-Bn<m.clientX&&m.clientY<Ge+Fn&&it+$n-Bn<m.clientY&&m.clientY<it+$n)return}}m.preventDefault(),q.value||Y()}}function G(){var m;_e.value=!0,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseEnterWrapper())}function ae(){var m;_e.value=!1,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseLeaveWrapper())}function Ce(){B.value||Se.value==="click"&&(he.value=!he.value)}function fe(m){if(B.value)return;m.preventDefault();const x=Ke=>{Ke.preventDefault(),Qt("mouseup",document,x)};if(Zn("mouseup",document,x),Se.value!=="mousedown")return;he.value=!0;const J=()=>{he.value=!1,Qt("mouseup",document,J)};Zn("mouseup",document,J)}function Ee(m){var x;switch((x=t.onKeydown)===null||x===void 0||x.call(t,m),m.code){case"Escape":$();break;case"Enter":case"NumpadEnter":I(m);break}}function I(m){var x,J;if(t.passivelyActivated){const{value:Ke}=S;if(Ke){t.internalDeactivateOnEnter&&$();return}m.preventDefault(),t.type==="textarea"?(x=a.value)===null||x===void 0||x.focus():(J=u.value)===null||J===void 0||J.focus()}}function $(){t.passivelyActivated&&(S.value=!1,hf(()=>{var m;(m=o.value)===null||m===void 0||m.focus()}))}function Y(){var m,x,J;B.value||(t.passivelyActivated?(m=o.value)===null||m===void 0||m.focus():((x=a.value)===null||x===void 0||x.focus(),(J=u.value)===null||J===void 0||J.focus()))}function me(){var m;!((m=o.value)===null||m===void 0)&&m.contains(document.activeElement)&&document.activeElement.blur()}function Oe(){var m,x;(m=a.value)===null||m===void 0||m.select(),(x=u.value)===null||x===void 0||x.select()}function ye(){B.value||(a.value?a.value.focus():u.value&&u.value.focus())}function Fe(){const{value:m}=o;(m==null?void 0:m.contains(document.activeElement))&&m!==document.activeElement&&$()}function Te(m){const{type:x,pair:J,autosize:Ke}=t;if(!J&&Ke)if(x==="textarea"){const{value:Ge}=l;Ge&&(Ge.textContent=(m!=null?m:"")+`\r
`)}else{const{value:Ge}=c;Ge&&(m?Ge.textContent=m:Ge.innerHTML="&nbsp;")}}function Mt(){He()}const hn=le({top:"0"});function Bm(m){var x;const{scrollTop:J}=m.target;hn.value.top=`${-J}px`,(x=h.value)===null||x===void 0||x.syncUnifiedContainer()}let Ss=null;Wr(()=>{const{autosize:m,type:x}=t;m&&x==="textarea"?Ss=qt(b,J=>{!Array.isArray(J)&&J!==D&&Te(J)}):Ss==null||Ss()});let xs=null;Wr(()=>{t.type==="textarea"?xs=qt(b,m=>{var x;!Array.isArray(m)&&m!==D&&((x=h.value)===null||x===void 0||x.syncUnifiedContainer())}):xs==null||xs()}),zr(Dm,{mergedValueRef:b,maxlengthRef:bt,mergedClsPrefixRef:e});const Um={wrapperElRef:o,inputElRef:u,textareaElRef:a,isCompositing:E,focus:Y,blur:me,select:Oe,deactivate:Fe,activate:ye},Hm=LA("Input",i,e),gu=ce(()=>{const{value:m}=F,{common:{cubicBezierEaseInOut:x},self:{color:J,borderRadius:Ke,textColor:Ge,caretColor:it,caretColorError:Fn,caretColorWarning:$n,textDecorationColor:Bn,border:bi,borderDisabled:yi,borderHover:wa,borderFocus:zm,placeholderColor:Wm,placeholderColorDisabled:jm,lineHeightTextarea:Vm,colorDisabled:qm,colorFocus:Km,textColorDisabled:Gm,boxShadowFocus:Ym,iconSize:Xm,colorFocusWarning:Jm,boxShadowFocusWarning:Qm,borderWarning:Zm,borderFocusWarning:e_,borderHoverWarning:t_,colorFocusError:n_,boxShadowFocusError:r_,borderError:i_,borderFocusError:s_,borderHoverError:o_,clearSize:a_,clearColor:l_,clearColorHover:c_,clearColorPressed:u_,iconColor:d_,iconColorDisabled:h_,suffixTextColor:f_,countTextColor:p_,iconColorHover:g_,iconColorPressed:m_,loadingColor:__,loadingColorError:v_,loadingColorWarning:b_,[eo("padding",m)]:y_,[eo("fontSize",m)]:w_,[eo("height",m)]:C_}}=s.value,{left:E_,right:T_}=LI(y_);return{"--n-bezier":x,"--n-count-text-color":p_,"--n-color":J,"--n-font-size":w_,"--n-border-radius":Ke,"--n-height":C_,"--n-padding-left":E_,"--n-padding-right":T_,"--n-text-color":Ge,"--n-caret-color":it,"--n-text-decoration-color":Bn,"--n-border":bi,"--n-border-disabled":yi,"--n-border-hover":wa,"--n-border-focus":zm,"--n-placeholder-color":Wm,"--n-placeholder-color-disabled":jm,"--n-icon-size":Xm,"--n-line-height-textarea":Vm,"--n-color-disabled":qm,"--n-color-focus":Km,"--n-text-color-disabled":Gm,"--n-box-shadow-focus":Ym,"--n-loading-color":__,"--n-caret-color-warning":$n,"--n-color-focus-warning":Jm,"--n-box-shadow-focus-warning":Qm,"--n-border-warning":Zm,"--n-border-focus-warning":e_,"--n-border-hover-warning":t_,"--n-loading-color-warning":b_,"--n-caret-color-error":Fn,"--n-color-focus-error":n_,"--n-box-shadow-focus-error":r_,"--n-border-error":i_,"--n-border-focus-error":s_,"--n-border-hover-error":o_,"--n-loading-color-error":v_,"--n-clear-color":l_,"--n-clear-size":a_,"--n-clear-color-hover":c_,"--n-clear-color-pressed":u_,"--n-icon-color":d_,"--n-icon-color-hover":g_,"--n-icon-color-pressed":m_,"--n-icon-color-disabled":h_,"--n-suffix-text-color":f_}}),Ir=r?km("input",ce(()=>{const{value:m}=F;return m[0]}),gu,t):void 0;return Object.assign(Object.assign({},Um),{wrapperElRef:o,inputElRef:u,inputMirrorElRef:c,inputEl2Ref:d,textareaElRef:a,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:Hm,uncontrolledValue:p,mergedValue:b,passwordVisible:he,mergedPlaceholder:K,showPlaceholder1:Z,showPlaceholder2:L,mergedFocus:re,isComposing:E,activated:S,showClearButton:we,mergedSize:F,mergedDisabled:B,textDecorationStyle:pe,mergedClsPrefix:e,mergedBordered:n,mergedShowPasswordOn:Se,placeholderStyle:hn,mergedStatus:H,textAreaScrollContainerWidth:ie,handleTextAreaScroll:Bm,handleCompositionStart:g,handleCompositionEnd:v,handleInput:y,handleInputBlur:w,handleInputFocus:A,handleWrapperBlur:M,handleWrapperFocus:R,handleMouseEnter:G,handleMouseLeave:ae,handleMouseDown:z,handleChange:T,handleClick:W,handleClear:U,handlePasswordToggleClick:Ce,handlePasswordToggleMousedown:fe,handleWrapperKeyDown:Ee,handleTextAreaMirrorResize:Mt,getTextareaScrollContainer:()=>a.value,mergedTheme:s,cssVars:r?void 0:gu,themeClass:Ir==null?void 0:Ir.themeClass,onRender:Ir==null?void 0:Ir.onRender})},render(){const{mergedClsPrefix:t,mergedStatus:e,themeClass:n,onRender:r,$slots:i}=this;return r==null||r(),O("div",{ref:"wrapperElRef",class:[`${t}-input`,n,e&&`${t}-input--${e}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:this.type==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&this.type!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},O("div",{class:`${t}-input-wrapper`},Fs(i.prefix,s=>s&&O("div",{class:`${t}-input__prefix`},s)),this.type==="textarea"?O(DA,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{const{textAreaScrollContainerWidth:s}=this,o={width:this.autosize&&s&&`${s}px`};return O(ze,null,O("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:`${t}-input__textarea-el`,autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],o],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?O("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,o],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?O(Ml,{onResize:this.handleTextAreaMirrorResize},{default:()=>O("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):O("div",{class:`${t}-input__input`},O("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:`${t}-input__input-el`,style:this.textDecorationStyle[0],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,0),onChange:s=>this.handleChange(s,0)})),this.showPlaceholder1?O("div",{class:`${t}-input__placeholder`},O("span",null,this.mergedPlaceholder[0])):null,this.autosize?O("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&Fs(i.suffix,s=>s||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?O("div",{class:`${t}-input__suffix`},[Fs(i.clear,o=>(this.clearable||o)&&O(Hl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>o})),this.internalLoadingBeforeSuffix?null:s,this.loading!==void 0?O($A,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?s:null,this.showCount&&this.type!=="textarea"?O($h,null,{default:o=>{var a;return(a=i.count)===null||a===void 0?void 0:a.call(i,o)}}):null,this.mergedShowPasswordOn&&this.type==="password"?O(pu,{clsPrefix:t,class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},{default:()=>this.passwordVisible?Zs(i["password-visible-icon"],()=>[O(_A,null)]):Zs(i["password-invisible-icon"],()=>[O(vA,null)])}):null]):null)),this.pair?O("span",{class:`${t}-input__separator`},Zs(i.separator,()=>[this.separator])):null,this.pair?O("div",{class:`${t}-input-wrapper`},O("div",{class:`${t}-input__input`},O("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,1),onChange:s=>this.handleChange(s,1)}),this.showPlaceholder2?O("div",{class:`${t}-input__placeholder`},O("span",null,this.mergedPlaceholder[1])):null),Fs(i.suffix,s=>(this.clearable||s)&&O("div",{class:`${t}-input__suffix`},[this.clearable&&O(Hl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>{var o;return(o=i.clear)===null||o===void 0?void 0:o.call(i)}}),s]))):null,this.mergedBordered?O("div",{class:`${t}-input__border`}):null,this.mergedBordered?O("div",{class:`${t}-input__state-border`}):null,this.showCount&&this.type==="textarea"?O($h,null,{default:s=>{var o;return(o=i.count)===null||o===void 0?void 0:o.call(i,s)}}):null)}});const KA={class:"input-container"},Lm=De({props:{color:null,placeholder:null,initialValue:null,autofocus:{type:Boolean},saveOnBlur:{type:Boolean}},emits:["save","blur"],setup(t,{emit:e}){const{color:n,placeholder:r,initialValue:i="",autofocus:s=!1,saveOnBlur:o=!1}=t;lc(_=>({"5f5f1ad5":t.color}));const a=le(),l=ln({inputText:i,isFocused:!1});function c(){e("save",l.inputText),o||(l.inputText="")}function u(_){_.metaKey&&_.key==="Enter"&&(_.preventDefault(),c())}function d(){l.isFocused=!1,o&&c()}function h(){l.isFocused=!0}return s&&br(()=>{var _,p;(p=(_=a.value).focus)==null||p.call(_)}),(_,p)=>(de(),Me("div",KA,[We($e(qA),{class:"input",ref_key:"inputRef",ref:a,value:$e(l).inputText,"onUpdate:value":p[0]||(p[0]=C=>$e(l).inputText=C),type:"textarea",autosize:"",placeholder:t.placeholder,onKeydown:u,onFocus:h,onBlur:d},null,8,["value","placeholder"]),$e(l).isFocused?(de(),Me("button",{key:0,class:"save-button",onMousedown:p[1]||(p[1]=ny(()=>{},["prevent"])),onClick:c}," save ",32)):En("",!0)]))}}),GA=De({props:{color:null},emits:["delete"],setup(t,{emit:e}){lc(r=>({"01342c23":t.color||"white"}));function n(r){r.stopPropagation(),e("delete")}return(r,i)=>(de(),Me("button",{onClick:n},"\u2716"))}});var Fm=Jt(GA,[["__scopeId","data-v-34b96e48"]]);const YA=Yo("\u2716"),XA=De({props:{text:null,color:null,author:null,onDelete:null,id:null,boardId:null,columnId:null},setup(t){const e=t;lc(F=>({"6881a82a":$e(r),afea9922:$e(k)}));const{author:n,color:r,boardId:i,columnId:s,id:o}=e,a=ln({isEditing:!1,isDragged:!1}),l=Ve("user"),c=l.uid===n,u=Ve("board");function d(){!c||(a.isEditing=!0)}function h(F){!(l!=null&&l.uid)||(a.isEditing=!1,rh(i,s,String(o),{text:F}))}function _(F){var B;(B=F.dataTransfer)==null||B.setData("application/json",JSON.stringify({boardId:i,columnId:s,cardId:o,text:e.text})),setTimeout(()=>a.isDragged=!0)}function p(F){a.isDragged=!1}function C(F){console.log("drag over card"),F.preventDefault()}function b(F){var H,q;const B=JSON.parse((q=(H=F.dataTransfer)==null?void 0:H.getData("application/json"))!=null?q:"{}");B.cardId!==o&&(rh(i,s,String(o),{text:e.text+`

--------

`+B.text}),zg(B.boardId,B.columnId,B.cardId))}const k=uf(()=>c?"text":"default");return(F,B)=>{var H;return $e(a).isEditing?(de(),Pt(Lm,{key:1,"initial-value":e.text,placeholder:"Edit card",color:$e(r),autofocus:"","save-on-blur":"",onSave:h},null,8,["initial-value","color"])):(de(),Me("div",{key:0,class:vr(["card",{hidden:!c&&((H=$e(u))==null?void 0:H.cardsHidden)}]),draggable:"true",onDragstart:_,onDragend:p,onDragover:C,onClick:d,onDrop:b,style:us({visibility:$e(a).isDragged?"hidden":"visible"})},[We(Fm,{onDelete:B[0]||(B[0]=q=>t.onDelete(String($e(o))))},{default:rc(()=>[YA]),_:1}),Yo(" "+ar(e.text),1)],38))}}});var JA=Jt(XA,[["__scopeId","data-v-1ddf348e"]]);const QA={key:0,class:"spacer"},ZA=De({props:{title:null,color:null,boardId:null,columnId:null,cards:null},setup(t){const{columnId:e,boardId:n}=t,r=Ve("user");function i(c){c.trim()!==""&&(!(r!=null&&r.uid)||AI(n,e,{text:c,author:r.uid}))}function s(c){zg(n,e,c)}function o(c){c.preventDefault(),c.dataTransfer&&(c.dataTransfer.dropEffect="move"),c.target&&(c.target.style.height="64px")}function a(c){c.target&&(c.target.style.height="8px")}function l(c){var d,h;c.target&&(c.target.style.height="8px");const u=JSON.parse((h=(d=c.dataTransfer)==null?void 0:d.getData("application/json"))!=null?h:"{}");kI(n,u.columnId,u.cardId,e)}return(c,u)=>(de(),Me("section",null,[je("h2",null,ar(t.title),1),je("div",{class:"card-spacer",onDragover:o,onDragleave:a,onDrop:l},null,32),je("ul",null,[(de(!0),Me(ze,null,Yi(t.cards,(d,h)=>(de(),Me("li",null,[(de(),Pt(JA,{id:h,key:h,author:d.author,text:d.text,color:t.color,onDelete:s,"board-id":t.boardId,"column-id":t.columnId},null,8,["id","author","text","color","board-id","column-id"])),Object.keys(t.cards).length>0?(de(),Me("div",{key:0,class:"card-spacer",onDragover:o,onDragleave:a,onDrop:l},null,32)):En("",!0)]))),256))]),Object.keys(t.cards).length>0?(de(),Me("div",QA)):En("",!0),We(Lm,{color:t.color,placeholder:"Add new card",onSave:i},null,8,["color"])]))}});var ek=Jt(ZA,[["__scopeId","data-v-b3ce16e2"]]);const tk={class:"timer-container"},nk={class:"timer-controls"},rk=De({setup(t){const n=Ve("boardId"),r=PI(n),i=le(r.timeRemaining);let s=null;qt(()=>r.isRunning,h=>{h?a():l()}),qt(()=>r.timeRemaining,h=>{i.value=h});function o(h){const _=Math.floor(h/60),p=h%60;return`${_}:${p.toString().padStart(2,"0")}`}function a(){s!==null&&clearInterval(s),s=window.setInterval(()=>{i.value>0?i.value--:l()},1e3)}function l(){s!==null&&(clearInterval(s),s=null)}function c(){const h=Date.now()+i.value*1e3;SI(n,h)}function u(){xI(n,i.value)}function d(){RI(n,420)}return Ko(()=>{l()}),(h,_)=>(de(),Me("div",tk,[je("div",{class:vr(["timer-display",{"timer-ending":i.value<=60,"timer-running":$e(r).isRunning}])},ar(o(i.value)),3),je("div",nk,[$e(r).isRunning?(de(),Pt(Qs,{key:1,onClick:u,text:"Stop"})):(de(),Pt(Qs,{key:0,onClick:c,text:"Start"})),We(Qs,{onClick:d,text:"Reset"})])]))}});var ik=Jt(rk,[["__scopeId","data-v-5d1753b7"]]);const sk={class:"board"},ok={class:"board-header"},ak={class:"timer-wrapper"},lk={class:"options-container"},ck={class:"columns"},uk=De({setup(t){const e=Ve("board"),n=Ve("boardId"),r=Ve("user");Wr(()=>{r.uid&&Wg(r.uid,n)});function i(){TI(n,!e.cardsHidden)}function s(){return e.cardsHidden?"Show all cards":"Hide other cards"}function o(u){u.key==="Enter"&&(u.target.blur(),u.preventDefault())}function a(u){const d=(u==null?void 0:u.target).value.trim();II(n,d),c.value=d||"Untitled Retro"}function l(){c.value==="Untitled Retro"&&(c.value="")}const c=le(e.title||"Untitled Retro");return qt(e,u=>{c.value=u.title||"Untitled Retro"}),(u,d)=>(de(),Me("div",sk,[je("div",ok,[je("div",ak,[We(ik)]),ob(je("input",{class:vr({untitled:c.value==="Untitled Retro"}),"onUpdate:modelValue":d[0]||(d[0]=h=>c.value=h),onKeypress:o,onFocusout:a,onFocusin:l},null,34),[[Zb,c.value]]),je("div",lk,[We(Qs,{onClick:i,text:s()},null,8,["text"])])]),je("section",ck,[(de(!0),Me(ze,null,Yi($e(e).columns,(h,_)=>{var p;return de(),Pt(ek,{cards:(p=h.cards)!=null?p:[],"column-id":String(_),"board-id":$e(n),key:String(_),title:h.title,color:h.color},null,8,["cards","column-id","board-id","title","color"])}),128))])]))}});var dk=Jt(uk,[["__scopeId","data-v-2afca4f0"]]);const hk={},fk={class:"loader"};function pk(t,e){return de(),Me("div",fk,"Loading...")}var gk=Jt(hk,[["render",pk],["__scopeId","data-v-840bd5c8"]]);const mk={key:0},_k={key:1},vk={key:1},bk=De({props:{boardId:null},setup(t){const{boardId:e}=t,n=EI(e);return zr("boardId",e),zr("board",n),(r,i)=>(de(),Me(ze,null,[$e(n).loading?En("",!0):(de(),Me("main",mk,[$e(n).exists?(de(),Pt(dk,{key:0})):En("",!0),$e(n).exists?En("",!0):(de(),Me("div",_k,"Couldn't find board"))])),$e(n).loading?(de(),Me("main",vk,[We(gk)])):En("",!0)],64))}});var yk=Jt(bk,[["__scopeId","data-v-b2bd279e"]]);const wk=Yo("\u2716"),Ck={class:"columns"},Ek=De({props:{board:null,isTemplate:{type:Boolean}},emits:["delete"],setup(t,{emit:e}){const{board:n,isTemplate:r}=t;function i(a){a.stopPropagation(),e("delete")}const s=ce(()=>{var l;let a=0;for(const c of Object.values(n.columns)){console.log(c);const u=Object.keys((l=c.cards)!=null?l:{}).length;u>a&&(a=u)}return a});function o(a){var u;return r?"100%":s.value===0?`${20}%`:`${Object.keys((u=a==null?void 0:a.cards)!=null?u:{}).length/s.value*(100-20)+20}%`}return(a,l)=>(de(),Me("div",{class:vr(["board",{template:t.isTemplate}])},[t.isTemplate?En("",!0):(de(),Pt(Fm,{key:0,color:"black",onClick:i},{default:rc(()=>[wk]),_:1})),je("h3",null,ar(t.board.title||"Untitled Retro"),1),je("div",Ck,[(de(!0),Me(ze,null,Yi(t.board.columns,c=>(de(),Me("div",{class:"column",style:us([{backgroundColor:c.color},{height:o(c)}])},ar(c.title),5))),256))])],2))}});var Bh=Jt(Ek,[["__scopeId","data-v-1a1d7aea"]]);const Tk=[{title:"Mad Sad Glad",columns:[{title:"Mad",color:"#f44336"},{title:"Sad",color:"#e91e63"},{title:"Glad",color:"#9c27b0"}]},{title:"Start Stop Continue",columns:[{title:"Start",color:"#2196f3"},{title:"Stop",color:"#ff9800"},{title:"Continue",color:"#009688"}]},{title:"Sailboat",columns:[{title:"What is the wind pushing our sails that make us go fast",color:"#f44336"},{title:"What anchors are holding us back",color:"#e91e63"},{title:"What rocks are ahead of us that risk our future",color:"#9c27b0"},{title:"What is our ideal island destination",color:"#673ab7"}]},{title:"The Four L's",columns:[{title:"Liked",color:"#4CAF50"},{title:"Learned",color:"#2196F3"},{title:"Lacked",color:"#FF9800"},{title:"Longed For",color:"#9C27B0"}]},{title:"KALM",columns:[{title:"Keep",color:"#4CAF50"},{title:"Add",color:"#2196F3"},{title:"Less",color:"#FF5722"},{title:"More",color:"#673AB7"}]},{title:"DAKI",columns:[{title:"Drop",color:"#F44336"},{title:"Add",color:"#4CAF50"},{title:"Keep",color:"#2196F3"},{title:"Improve",color:"#FFC107"}]}],$m=t=>(Pv("data-v-591383d7"),t=t(),Av(),t),Ik={class:"container"},Sk=$m(()=>je("h2",null,"start a new board",-1)),xk=$m(()=>je("h2",null,"your boards",-1)),Rk=De({props:{navigateToBoard:null},setup(t){const{navigateToBoard:e}=t,n=Ve("user"),r=ce(()=>CI(n.uid));function i(o){OI(n.uid,o)}async function s(o){if(!(n!=null&&n.uid))return;const a=await NI(n.uid,o);a&&e(a)}return(o,a)=>(de(),Me("div",Ik,[je("main",null,[je("h1",null,"\u{1F680} quick retro "+ar("")+"\u{1F680}",1),Sk,je("section",null,[(de(!0),Me(ze,null,Yi($e(Tk),l=>(de(),Pt(Bh,{onClick:c=>s(l),board:l,"is-template":!0},null,8,["onClick","board"]))),256))]),xk,je("section",null,[(de(!0),Me(ze,null,Yi($e(r),(l,c)=>(de(),Pt(Bh,{onClick:u=>t.navigateToBoard(c),onDelete:u=>i(c),board:l,"is-template":!1},null,8,["onClick","onDelete","board"]))),256))])])]))}});var Pk=Jt(Rk,[["__scopeId","data-v-591383d7"]]);const Ak=De({setup(t){const e=le(window.location.hash.slice(1));function n(i){console.log("navigating to board",i),history.pushState({},"",`#${i}`),e.value=i}addEventListener("popstate",()=>{console.log(window.location.hash.slice(1)),e.value=window.location.hash.slice(1)});const r=MI();return zr("user",r),(i,s)=>e.value&&e.value.length>0?(de(),Pt(yk,{key:0,boardId:e.value},null,8,["boardId"])):(de(),Pt(Pk,{key:1,"navigate-to-board":n}))}});sy(Ak).mount("#app")});export default kk();
