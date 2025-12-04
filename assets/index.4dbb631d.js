var y_=Object.defineProperty,w_=Object.defineProperties;var C_=Object.getOwnPropertyDescriptors;var du=Object.getOwnPropertySymbols;var E_=Object.prototype.hasOwnProperty,T_=Object.prototype.propertyIsEnumerable;var hu=(t,e,n)=>e in t?y_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,fu=(t,e)=>{for(var n in e||(e={}))E_.call(e,n)&&hu(t,n,e[n]);if(du)for(var n of du(e))T_.call(e,n)&&hu(t,n,e[n]);return t},pu=(t,e)=>w_(t,C_(e));var x_=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Uk=x_((xt,It)=>{const I_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};I_();function Fl(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const S_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",R_=Fl(S_);function Mh(t){return!!t||t===""}function Yt(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=tt(r)?k_(r):Yt(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(tt(t))return t;if(qe(t))return t}}const P_=/;(?![^(]*\))/g,A_=/:(.+)/;function k_(t){const e={};return t.split(P_).forEach(n=>{if(n){const r=n.split(A_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function kn(t){let e="";if(tt(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=kn(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sn=t=>tt(t)?t:t==null?"":Q(t)||qe(t)&&(t.toString===$h||!ne(t.toString))?JSON.stringify(t,Dh,2):String(t),Dh=(t,e)=>e&&e.__v_isRef?Dh(t,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Lh(e)?{[`Set(${e.size})`]:[...e.values()]}:qe(e)&&!Q(e)&&!Bh(e)?String(e):e,Pe={},Nr=[],$t=()=>{},N_=()=>!1,O_=/^on[^a-z]/,No=t=>O_.test(t),$l=t=>t.startsWith("onUpdate:"),lt=Object.assign,Bl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},M_=Object.prototype.hasOwnProperty,me=(t,e)=>M_.call(t,e),Q=Array.isArray,Or=t=>Oo(t)==="[object Map]",Lh=t=>Oo(t)==="[object Set]",ne=t=>typeof t=="function",tt=t=>typeof t=="string",Ul=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Fh=t=>qe(t)&&ne(t.then)&&ne(t.catch),$h=Object.prototype.toString,Oo=t=>$h.call(t),D_=t=>Oo(t).slice(8,-1),Bh=t=>Oo(t)==="[object Object]",Hl=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=Fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},L_=/-(\w)/g,Ur=Mo(t=>t.replace(L_,(e,n)=>n?n.toUpperCase():"")),F_=/\B([A-Z])/g,ei=Mo(t=>t.replace(F_,"-$1").toLowerCase()),Uh=Mo(t=>t.charAt(0).toUpperCase()+t.slice(1)),_a=Mo(t=>t?`on${Uh(t)}`:""),ji=(t,e)=>!Object.is(t,e),Vs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},eo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},to=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gu;const $_=()=>gu||(gu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let jt;class B_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&jt&&(this.parent=jt,this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function U_(t,e=jt){e&&e.active&&e.effects.push(t)}const zl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hh=t=>(t.w&Nn)>0,zh=t=>(t.n&Nn)>0,H_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Nn},z_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Hh(i)&&!zh(i)?i.delete(t):e[n++]=i,i.w&=~Nn,i.n&=~Nn}e.length=n}},Wa=new WeakMap;let Ai=0,Nn=1;const ja=30;let Dt;const nr=Symbol(""),Va=Symbol("");class Wl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,U_(this,r)}run(){if(!this.active)return this.fn();let e=Dt,n=In;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,In=!0,Nn=1<<++Ai,Ai<=ja?H_(this):mu(this),this.fn()}finally{Ai<=ja&&z_(this),Nn=1<<--Ai,Dt=this.parent,In=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(mu(this),this.onStop&&this.onStop(),this.active=!1)}}function mu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let In=!0;const Wh=[];function ti(){Wh.push(In),In=!1}function ni(){const t=Wh.pop();In=t===void 0?!0:t}function Rt(t,e,n){if(In&&Dt){let r=Wa.get(t);r||Wa.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=zl()),jh(i)}}function jh(t,e){let n=!1;Ai<=ja?zh(t)||(t.n|=Nn,n=!Hh(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function an(t,e,n,r,i,s){const o=Wa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Hl(n)&&a.push(o.get("length")):(a.push(o.get(nr)),Or(t)&&a.push(o.get(Va)));break;case"delete":Q(t)||(a.push(o.get(nr)),Or(t)&&a.push(o.get(Va)));break;case"set":Or(t)&&a.push(o.get(nr));break}if(a.length===1)a[0]&&qa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);qa(zl(l))}}function qa(t,e){for(const n of Q(t)?t:[...t])(n!==Dt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const W_=Fl("__proto__,__v_isRef,__isVue"),Vh=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ul)),j_=jl(),V_=jl(!1,!0),q_=jl(!0),_u=K_();function K_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ye(this);for(let s=0,o=this.length;s<o;s++)Rt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ye)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ti();const r=ye(this)[e].apply(this,n);return ni(),r}}),t}function jl(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?cv:Xh:e?Yh:Gh).get(r))return r;const o=Q(r);if(!t&&o&&me(_u,i))return Reflect.get(_u,i,s);const a=Reflect.get(r,i,s);return(Ul(i)?Vh.has(i):W_(i))||(t||Rt(r,"get",i),e)?a:et(a)?!o||!Hl(i)?a.value:a:qe(a)?t?Kl(a):un(a):a}}const G_=qh(),Y_=qh(!0);function qh(t=!1){return function(n,r,i,s){let o=n[r];if(Vi(o)&&et(o)&&!et(i))return!1;if(!t&&!Vi(i)&&(Jh(i)||(i=ye(i),o=ye(o)),!Q(n)&&et(o)&&!et(i)))return o.value=i,!0;const a=Q(n)&&Hl(r)?Number(r)<n.length:me(n,r),l=Reflect.set(n,r,i,s);return n===ye(s)&&(a?ji(i,o)&&an(n,"set",r,i):an(n,"add",r,i)),l}}function X_(t,e){const n=me(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&an(t,"delete",e,void 0),r}function J_(t,e){const n=Reflect.has(t,e);return(!Ul(e)||!Vh.has(e))&&Rt(t,"has",e),n}function Q_(t){return Rt(t,"iterate",Q(t)?"length":nr),Reflect.ownKeys(t)}const Kh={get:j_,set:G_,deleteProperty:X_,has:J_,ownKeys:Q_},Z_={get:q_,set(t,e){return!0},deleteProperty(t,e){return!0}},ev=lt({},Kh,{get:V_,set:Y_}),Vl=t=>t,Do=t=>Reflect.getPrototypeOf(t);function Ss(t,e,n=!1,r=!1){t=t.__v_raw;const i=ye(t),s=ye(e);e!==s&&!n&&Rt(i,"get",e),!n&&Rt(i,"get",s);const{has:o}=Do(i),a=r?Vl:n?Yl:qi;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Rs(t,e=!1){const n=this.__v_raw,r=ye(n),i=ye(t);return t!==i&&!e&&Rt(r,"has",t),!e&&Rt(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Ps(t,e=!1){return t=t.__v_raw,!e&&Rt(ye(t),"iterate",nr),Reflect.get(t,"size",t)}function vu(t){t=ye(t);const e=ye(this);return Do(e).has.call(e,t)||(e.add(t),an(e,"add",t,t)),this}function bu(t,e){e=ye(e);const n=ye(this),{has:r,get:i}=Do(n);let s=r.call(n,t);s||(t=ye(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?ji(e,o)&&an(n,"set",t,e):an(n,"add",t,e),this}function yu(t){const e=ye(this),{has:n,get:r}=Do(e);let i=n.call(e,t);i||(t=ye(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&an(e,"delete",t,void 0),s}function wu(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&an(t,"clear",void 0,void 0),n}function As(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ye(o),l=e?Vl:t?Yl:qi;return!t&&Rt(a,"iterate",nr),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function ks(t,e,n){return function(...r){const i=this.__v_raw,s=ye(i),o=Or(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Vl:e?Yl:qi;return!e&&Rt(s,"iterate",l?Va:nr),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function gn(t){return function(...e){return t==="delete"?!1:this}}function tv(){const t={get(s){return Ss(this,s)},get size(){return Ps(this)},has:Rs,add:vu,set:bu,delete:yu,clear:wu,forEach:As(!1,!1)},e={get(s){return Ss(this,s,!1,!0)},get size(){return Ps(this)},has:Rs,add:vu,set:bu,delete:yu,clear:wu,forEach:As(!1,!0)},n={get(s){return Ss(this,s,!0)},get size(){return Ps(this,!0)},has(s){return Rs.call(this,s,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:As(!0,!1)},r={get(s){return Ss(this,s,!0,!0)},get size(){return Ps(this,!0)},has(s){return Rs.call(this,s,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:As(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ks(s,!1,!1),n[s]=ks(s,!0,!1),e[s]=ks(s,!1,!0),r[s]=ks(s,!0,!0)}),[t,n,e,r]}const[nv,rv,iv,sv]=tv();function ql(t,e){const n=e?t?sv:iv:t?rv:nv;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(me(n,i)&&i in r?n:r,i,s)}const ov={get:ql(!1,!1)},av={get:ql(!1,!0)},lv={get:ql(!0,!1)},Gh=new WeakMap,Yh=new WeakMap,Xh=new WeakMap,cv=new WeakMap;function uv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dv(t){return t.__v_skip||!Object.isExtensible(t)?0:uv(D_(t))}function un(t){return Vi(t)?t:Gl(t,!1,Kh,ov,Gh)}function hv(t){return Gl(t,!1,ev,av,Yh)}function Kl(t){return Gl(t,!0,Z_,lv,Xh)}function Gl(t,e,n,r,i){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=dv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Mr(t){return Vi(t)?Mr(t.__v_raw):!!(t&&t.__v_isReactive)}function Vi(t){return!!(t&&t.__v_isReadonly)}function Jh(t){return!!(t&&t.__v_isShallow)}function Qh(t){return Mr(t)||Vi(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Zh(t){return eo(t,"__v_skip",!0),t}const qi=t=>qe(t)?un(t):t,Yl=t=>qe(t)?Kl(t):t;function ef(t){In&&Dt&&(t=ye(t),jh(t.dep||(t.dep=zl())))}function tf(t,e){t=ye(t),t.dep&&qa(t.dep)}function et(t){return!!(t&&t.__v_isRef===!0)}function de(t){return fv(t,!1)}function fv(t,e){return et(t)?t:new pv(t,e)}class pv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:qi(e)}get value(){return ef(this),this._value}set value(e){e=this.__v_isShallow?e:ye(e),ji(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:qi(e),tf(this))}}function Me(t){return et(t)?t.value:t}const gv={get:(t,e,n)=>Me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return et(i)&&!et(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function nf(t){return Mr(t)?t:new Proxy(t,gv)}class mv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Lo(t,e,n){const r=t[e];return et(r)?r:new mv(t,e,n)}class _v{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Wl(e,()=>{this._dirty||(this._dirty=!0,tf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ye(this);return ef(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rf(t,e,n=!1){let r,i;const s=ne(t);return s?(r=t,i=$t):(r=t.get,i=t.set),new _v(r,i,s||!i,n)}function Sn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Fo(s,e,n)}return i}function Ot(t,e,n,r){if(ne(t)){const s=Sn(t,e,n,r);return s&&Fh(s)&&s.catch(o=>{Fo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ot(t[s],e,n,r));return i}function Fo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Sn(l,null,10,[t,o,a]);return}}vv(t,n,i,r)}function vv(t,e,n,r=!0){console.error(t)}let no=!1,Ka=!1;const Tt=[];let Zt=0;const Oi=[];let ki=null,Sr=0;const Mi=[];let bn=null,Rr=0;const sf=Promise.resolve();let Xl=null,Ga=null;function of(t){const e=Xl||sf;return t?e.then(this?t.bind(this):t):e}function bv(t){let e=Zt+1,n=Tt.length;for(;e<n;){const r=e+n>>>1;Ki(Tt[r])<t?e=r+1:n=r}return e}function af(t){(!Tt.length||!Tt.includes(t,no&&t.allowRecurse?Zt+1:Zt))&&t!==Ga&&(t.id==null?Tt.push(t):Tt.splice(bv(t.id),0,t),lf())}function lf(){!no&&!Ka&&(Ka=!0,Xl=sf.then(df))}function yv(t){const e=Tt.indexOf(t);e>Zt&&Tt.splice(e,1)}function cf(t,e,n,r){Q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),lf()}function wv(t){cf(t,ki,Oi,Sr)}function Cv(t){cf(t,bn,Mi,Rr)}function Jl(t,e=null){if(Oi.length){for(Ga=e,ki=[...new Set(Oi)],Oi.length=0,Sr=0;Sr<ki.length;Sr++)ki[Sr]();ki=null,Sr=0,Ga=null,Jl(t,e)}}function uf(t){if(Mi.length){const e=[...new Set(Mi)];if(Mi.length=0,bn){bn.push(...e);return}for(bn=e,bn.sort((n,r)=>Ki(n)-Ki(r)),Rr=0;Rr<bn.length;Rr++)bn[Rr]();bn=null,Rr=0}}const Ki=t=>t.id==null?1/0:t.id;function df(t){Ka=!1,no=!0,Jl(t),Tt.sort((n,r)=>Ki(n)-Ki(r));const e=$t;try{for(Zt=0;Zt<Tt.length;Zt++){const n=Tt[Zt];n&&n.active!==!1&&Sn(n,null,14)}}finally{Zt=0,Tt.length=0,uf(),no=!1,Xl=null,(Tt.length||Oi.length||Mi.length)&&df(t)}}function Ev(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||Pe;h?i=n.map(_=>_.trim()):d&&(i=n.map(to))}let a,l=r[a=_a(e)]||r[a=_a(Ur(e))];!l&&s&&(l=r[a=_a(ei(e))]),l&&Ot(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(c,t,6,i)}}function hf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=hf(c,e,!0);u&&(a=!0,lt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(Q(s)?s.forEach(l=>o[l]=null):lt(o,s),r.set(t,o),o)}function $o(t,e){return!t||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,ei(e))||me(t,e))}let mt=null,ff=null;function ro(t){const e=mt;return mt=t,ff=t&&t.type.__scopeId||null,e}function Ql(t,e=mt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&ku(-1);const s=ro(e),o=t(...i);return ro(s),r._d&&ku(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function va(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:_,ctx:p,inheritAttrs:C}=t;let b,k;const $=ro(t);try{if(n.shapeFlag&4){const H=i||r;b=Vt(u.call(H,H,d,s,_,h,p)),k=l}else{const H=e;b=Vt(H.length>1?H(s,{attrs:l,slots:a,emit:c}):H(s,null)),k=e.props?l:Tv(l)}}catch(H){Di.length=0,Fo(H,t,1),b=We(St)}let B=b;if(k&&C!==!1){const H=Object.keys(k),{shapeFlag:q}=B;H.length&&q&7&&(o&&H.some($l)&&(k=xv(k,o)),B=cr(B,k))}return n.dirs&&(B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),b=B,ro($),b}const Tv=t=>{let e;for(const n in t)(n==="class"||n==="style"||No(n))&&((e||(e={}))[n]=t[n]);return e},xv=(t,e)=>{const n={};for(const r in t)(!$l(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iv(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Cu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!$o(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Cu(r,o,c):!0:!!o;return!1}function Cu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!$o(n,s))return!0}return!1}function Sv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Rv=t=>t.__isSuspense;function Pv(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):Cv(t)}function Hr(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function Ve(t,e,n=!1){const r=at||mt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(r.proxy):e}}function zr(t,e){return Zl(t,null,e)}const Eu={};function qt(t,e,n){return Zl(t,e,n)}function Zl(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Pe){const a=at;let l,c=!1,u=!1;if(et(t)?(l=()=>t.value,c=Jh(t)):Mr(t)?(l=()=>t,r=!0):Q(t)?(u=!0,c=t.some(Mr),l=()=>t.map(k=>{if(et(k))return k.value;if(Mr(k))return Xn(k);if(ne(k))return Sn(k,a,2)})):ne(t)?e?l=()=>Sn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Ot(t,a,3,[h])}:l=$t,e&&r){const k=l;l=()=>Xn(k())}let d,h=k=>{d=b.onStop=()=>{Sn(k,a,4)}};if(Xi)return h=$t,e?n&&Ot(e,a,3,[l(),u?[]:void 0,h]):l(),$t;let _=u?[]:Eu;const p=()=>{if(!!b.active)if(e){const k=b.run();(r||c||(u?k.some(($,B)=>ji($,_[B])):ji(k,_)))&&(d&&d(),Ot(e,a,3,[k,_===Eu?void 0:_,h]),_=k)}else b.run()};p.allowRecurse=!!e;let C;i==="sync"?C=p:i==="post"?C=()=>wt(p,a&&a.suspense):C=()=>{!a||a.isMounted?wv(p):p()};const b=new Wl(l,C);return e?n?p():_=b.run():i==="post"?wt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&Bl(a.scope.effects,b)}}function Av(t,e,n){const r=this.proxy,i=tt(t)?t.includes(".")?pf(r,t):()=>r[t]:t.bind(r,r);let s;ne(e)?s=e:(s=e.handler,n=e);const o=at;Wr(this);const a=Zl(i,s.bind(r),n);return o?Wr(o):ir(),a}function pf(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Xn(t,e){if(!qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),et(t))Xn(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(Lh(t)||Or(t))t.forEach(n=>{Xn(n,e)});else if(Bh(t))for(const n in t)Xn(t[n],e);return t}function kv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ri(()=>{t.isMounted=!0}),zo(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],Nv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},setup(t,{slots:e}){const n=Nf(),r=kv();let i;return()=>{const s=e.default&&_f(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const C of s)if(C.type!==St){o=C;break}}const a=ye(t),{mode:l}=a;if(r.isLeaving)return ba(o);const c=Tu(o);if(!c)return ba(o);const u=Ya(c,a,r,n);Xa(c,u);const d=n.subTree,h=d&&Tu(d);let _=!1;const{getTransitionKey:p}=c.type;if(p){const C=p();i===void 0?i=C:C!==i&&(i=C,_=!0)}if(h&&h.type!==St&&(!Gn(c,h)||_)){const C=Ya(h,a,r,n);if(Xa(h,C),l==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},ba(o);l==="in-out"&&c.type!==St&&(C.delayLeave=(b,k,$)=>{const B=mf(r,h);B[String(h.key)]=h,b._leaveCb=()=>{k(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=$})}return o}}},gf=Nv;function mf(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ya(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:p,onBeforeAppear:C,onAppear:b,onAfterAppear:k,onAppearCancelled:$}=e,B=String(t.key),H=mf(n,t),q=(E,I)=>{E&&Ot(E,r,9,I)},ve={mode:s,persisted:o,beforeEnter(E){let I=a;if(!n.isMounted)if(i)I=C||a;else return;E._leaveCb&&E._leaveCb(!0);const D=H[B];D&&Gn(t,D)&&D.el._leaveCb&&D.el._leaveCb(),q(I,[E])},enter(E){let I=l,D=c,K=u;if(!n.isMounted)if(i)I=b||l,D=k||c,K=$||u;else return;let Z=!1;const L=E._enterCb=re=>{Z||(Z=!0,re?q(K,[E]):q(D,[E]),ve.delayedLeave&&ve.delayedLeave(),E._enterCb=void 0)};I?(I(E,L),I.length<=1&&L()):L()},leave(E,I){const D=String(t.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return I();q(d,[E]);let K=!1;const Z=E._leaveCb=L=>{K||(K=!0,I(),L?q(p,[E]):q(_,[E]),E._leaveCb=void 0,H[D]===t&&delete H[D])};H[D]=t,h?(h(E,Z),h.length<=1&&Z()):Z()},clone(E){return Ya(E,e,n,r)}};return ve}function ba(t){if(Bo(t))return t=cr(t),t.children=null,t}function Tu(t){return Bo(t)?t.children?t.children[0]:void 0:t}function Xa(t,e){t.shapeFlag&6&&t.component?Xa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _f(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===je?(o.patchFlag&128&&i++,r=r.concat(_f(o.children,e,a))):(e||o.type!==St)&&r.push(a!=null?cr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Fe(t){return ne(t)?{setup:t,name:t.name}:t}const io=t=>!!t.type.__asyncLoader,Bo=t=>t.type.__isKeepAlive;function Ov(t,e){vf(t,"a",e)}function Mv(t,e){vf(t,"da",e)}function vf(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Uo(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Bo(i.parent.vnode)&&Dv(r,e,n,i),i=i.parent}}function Dv(t,e,n,r){const i=Uo(e,t,r,!0);ec(()=>{Bl(r[e],i)},n)}function Uo(t,e,n=at,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ti(),Wr(n);const a=Ot(e,n,t,o);return ir(),ni(),a});return r?i.unshift(s):i.push(s),s}}const dn=t=>(e,n=at)=>(!Xi||t==="sp")&&Uo(t,e,n),Ho=dn("bm"),ri=dn("m"),Lv=dn("bu"),Fv=dn("u"),zo=dn("bum"),ec=dn("um"),$v=dn("sp"),Bv=dn("rtg"),Uv=dn("rtc");function Hv(t,e=at){Uo("ec",t,e)}let Ja=!0;function zv(t){const e=yf(t),n=t.proxy,r=t.ctx;Ja=!1,e.beforeCreate&&xu(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:_,updated:p,activated:C,deactivated:b,beforeDestroy:k,beforeUnmount:$,destroyed:B,unmounted:H,render:q,renderTracked:ve,renderTriggered:E,errorCaptured:I,serverPrefetch:D,expose:K,inheritAttrs:Z,components:L,directives:re,filters:Ce}=e;if(c&&Wv(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const ie=o[ge];ne(ie)&&(r[ge]=ie.bind(n))}if(i){const ge=i.call(n,n);qe(ge)&&(t.data=un(ge))}if(Ja=!0,s)for(const ge in s){const ie=s[ge],ze=ne(ie)?ie.bind(n,n):ne(ie.get)?ie.get.bind(n,n):$t,bt=!ne(ie)&&ne(ie.set)?ie.set.bind(n):$t,$e=se({get:ze,set:bt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>$e.value,set:ht=>$e.value=ht})}if(a)for(const ge in a)bf(a[ge],r,n,ge);if(l){const ge=ne(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(ie=>{Hr(ie,ge[ie])})}u&&xu(u,t,"c");function fe(ge,ie){Q(ie)?ie.forEach(ze=>ge(ze.bind(n))):ie&&ge(ie.bind(n))}if(fe(Ho,d),fe(ri,h),fe(Lv,_),fe(Fv,p),fe(Ov,C),fe(Mv,b),fe(Hv,I),fe(Uv,ve),fe(Bv,E),fe(zo,$),fe(ec,H),fe($v,D),Q(K))if(K.length){const ge=t.exposed||(t.exposed={});K.forEach(ie=>{Object.defineProperty(ge,ie,{get:()=>n[ie],set:ze=>n[ie]=ze})})}else t.exposed||(t.exposed={});q&&t.render===$t&&(t.render=q),Z!=null&&(t.inheritAttrs=Z),L&&(t.components=L),re&&(t.directives=re)}function Wv(t,e,n=$t,r=!1){Q(t)&&(t=Qa(t));for(const i in t){const s=t[i];let o;qe(s)?"default"in s?o=Ve(s.from||i,s.default,!0):o=Ve(s.from||i):o=Ve(s),et(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function xu(t,e,n){Ot(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bf(t,e,n,r){const i=r.includes(".")?pf(n,r):()=>n[r];if(tt(t)){const s=e[t];ne(s)&&qt(i,s)}else if(ne(t))qt(i,t.bind(n));else if(qe(t))if(Q(t))t.forEach(s=>bf(s,e,n,r));else{const s=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(s)&&qt(i,s,t)}}function yf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>so(l,c,o,!0)),so(l,e,o)),s.set(e,l),l}function so(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&so(t,s,n,!0),i&&i.forEach(o=>so(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=jv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jv={data:Iu,props:Vn,emits:Vn,methods:Vn,computed:Vn,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Vn,directives:Vn,watch:qv,provide:Iu,inject:Vv};function Iu(t,e){return e?t?function(){return lt(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Vv(t,e){return Vn(Qa(t),Qa(e))}function Qa(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vn(t,e){return t?lt(lt(Object.create(null),t),e):e}function qv(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function Kv(t,e,n,r=!1){const i={},s={};eo(s,Wo,1),t.propsDefaults=Object.create(null),wf(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:hv(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Gv(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ye(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if($o(t.emitsOptions,h))continue;const _=e[h];if(l)if(me(s,h))_!==s[h]&&(s[h]=_,c=!0);else{const p=Ur(h);i[p]=Za(l,a,p,_,t,!1)}else _!==s[h]&&(s[h]=_,c=!0)}}}else{wf(t,e,i,s)&&(c=!0);let u;for(const d in a)(!e||!me(e,d)&&((u=ei(d))===d||!me(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Za(l,a,d,void 0,t,!0)):delete i[d]);if(s!==a)for(const d in s)(!e||!me(e,d)&&!0)&&(delete s[d],c=!0)}c&&an(t,"set","$attrs")}function wf(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(js(l))continue;const c=e[l];let u;i&&me(i,u=Ur(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:$o(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=ye(n),c=a||Pe;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Za(i,l,d,c[d],t,!me(c,d))}}return o}function Za(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Wr(i),r=c[n]=l.call(null,e),ir())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ei(n))&&(r=!0))}return r}function Cf(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=d=>{l=!0;const[h,_]=Cf(d,e,!0);lt(o,h),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,Nr),Nr;if(Q(s))for(let u=0;u<s.length;u++){const d=Ur(s[u]);Su(d)&&(o[d]=Pe)}else if(s)for(const u in s){const d=Ur(u);if(Su(d)){const h=s[u],_=o[d]=Q(h)||ne(h)?{type:h}:h;if(_){const p=Au(Boolean,_.type),C=Au(String,_.type);_[0]=p>-1,_[1]=C<0||p<C,(p>-1||me(_,"default"))&&a.push(d)}}}const c=[o,a];return r.set(t,c),c}function Su(t){return t[0]!=="$"}function Ru(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Pu(t,e){return Ru(t)===Ru(e)}function Au(t,e){return Q(e)?e.findIndex(n=>Pu(n,t)):ne(e)&&Pu(e,t)?0:-1}const Ef=t=>t[0]==="_"||t==="$stable",tc=t=>Q(t)?t.map(Vt):[Vt(t)],Yv=(t,e,n)=>{const r=Ql((...i)=>tc(e(...i)),n);return r._c=!1,r},Tf=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ef(i))continue;const s=t[i];if(ne(s))e[i]=Yv(i,s,r);else if(s!=null){const o=tc(s);e[i]=()=>o}}},xf=(t,e)=>{const n=tc(e);t.slots.default=()=>n},Xv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),eo(e,"_",n)):Tf(e,t.slots={})}else t.slots={},e&&xf(t,e);eo(t.slots,Wo,1)},Jv=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(lt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Tf(e,i)),o=e}else e&&(xf(t,e),o={default:1});if(s)for(const a in i)!Ef(a)&&!(a in o)&&delete i[a]};function Qv(t,e){const n=mt;if(n===null)return t;const r=Vo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Pe]=e[s];ne(o)&&(o={mounted:o,updated:o}),o.deep&&Xn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function zn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(ti(),Ot(l,n,8,[t.el,a,t,e]),ni())}}function If(){return{app:null,config:{isNativeTag:N_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zv=0;function eb(t,e){return function(r,i=null){ne(r)||(r=Object.assign({},r)),i!=null&&!qe(i)&&(i=null);const s=If(),o=new Set;let a=!1;const l=s.app={_uid:Zv++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:bb,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=We(r,i);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Vo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function el(t,e,n,r,i=!1){if(Q(t)){t.forEach((h,_)=>el(h,e&&(Q(e)?e[_]:e),n,r,i));return}if(io(r)&&!i)return;const s=r.shapeFlag&4?Vo(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(tt(c)?(u[c]=null,me(d,c)&&(d[c]=null)):et(c)&&(c.value=null)),ne(l))Sn(l,a,12,[o,u]);else{const h=tt(l),_=et(l);if(h||_){const p=()=>{if(t.f){const C=h?u[l]:l.value;i?Q(C)&&Bl(C,s):Q(C)?C.includes(s)||C.push(s):h?(u[l]=[s],me(d,l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,me(d,l)&&(d[l]=o)):et(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,wt(p,n)):p()}}}const wt=Pv;function tb(t){return nb(t)}function nb(t,e){const n=$_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:_=$t,cloneNode:p,insertStaticContent:C}=t,b=(f,g,v,y=null,w=null,A=null,M=!1,R=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!Gn(f,g)&&(y=fn(f),ft(f,w,A,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:T,ref:W,shapeFlag:U}=g;switch(T){case nc:k(f,g,v,y);break;case St:$(f,g,v,y);break;case ya:f==null&&B(g,v,y,M);break;case je:re(f,g,v,y,w,A,M,R,N);break;default:U&1?ve(f,g,v,y,w,A,M,R,N):U&6?Ce(f,g,v,y,w,A,M,R,N):(U&64||U&128)&&T.process(f,g,v,y,w,A,M,R,N,At)}W!=null&&w&&el(W,f&&f.ref,A,g||f,!g)},k=(f,g,v,y)=>{if(f==null)r(g.el=a(g.children),v,y);else{const w=g.el=f.el;g.children!==f.children&&c(w,g.children)}},$=(f,g,v,y)=>{f==null?r(g.el=l(g.children||""),v,y):g.el=f.el},B=(f,g,v,y)=>{[f.el,f.anchor]=C(f.children,g,v,y,f.el,f.anchor)},H=({el:f,anchor:g},v,y)=>{let w;for(;f&&f!==g;)w=h(f),r(f,v,y),f=w;r(g,v,y)},q=({el:f,anchor:g})=>{let v;for(;f&&f!==g;)v=h(f),i(f),f=v;i(g)},ve=(f,g,v,y,w,A,M,R,N)=>{M=M||g.type==="svg",f==null?E(g,v,y,w,A,M,R,N):K(f,g,w,A,M,R,N)},E=(f,g,v,y,w,A,M,R)=>{let N,T;const{type:W,props:U,shapeFlag:z,transition:G,patchFlag:ue,dirs:Ee}=f;if(f.el&&p!==void 0&&ue===-1)N=f.el=p(f.el);else{if(N=f.el=o(f.type,A,U&&U.is,U),z&8?u(N,f.children):z&16&&D(f.children,N,null,y,w,A&&W!=="foreignObject",M,R),Ee&&zn(f,null,y,"created"),U){for(const Te in U)Te!=="value"&&!js(Te)&&s(N,Te,null,U[Te],A,f.children,y,w,Je);"value"in U&&s(N,"value",null,U.value),(T=U.onVnodeBeforeMount)&&zt(T,y,f)}I(N,f,f.scopeId,M,y)}Ee&&zn(f,null,y,"beforeMount");const pe=(!w||w&&!w.pendingBranch)&&G&&!G.persisted;pe&&G.beforeEnter(N),r(N,g,v),((T=U&&U.onVnodeMounted)||pe||Ee)&&wt(()=>{T&&zt(T,y,f),pe&&G.enter(N),Ee&&zn(f,null,y,"mounted")},w)},I=(f,g,v,y,w)=>{if(v&&_(f,v),y)for(let A=0;A<y.length;A++)_(f,y[A]);if(w){let A=w.subTree;if(g===A){const M=w.vnode;I(f,M,M.scopeId,M.slotScopeIds,w.parent)}}},D=(f,g,v,y,w,A,M,R,N=0)=>{for(let T=N;T<f.length;T++){const W=f[T]=R?yn(f[T]):Vt(f[T]);b(null,W,g,v,y,w,A,M,R)}},K=(f,g,v,y,w,A,M)=>{const R=g.el=f.el;let{patchFlag:N,dynamicChildren:T,dirs:W}=g;N|=f.patchFlag&16;const U=f.props||Pe,z=g.props||Pe;let G;v&&Wn(v,!1),(G=z.onVnodeBeforeUpdate)&&zt(G,v,g,f),W&&zn(g,f,v,"beforeUpdate"),v&&Wn(v,!0);const ue=w&&g.type!=="foreignObject";if(T?Z(f.dynamicChildren,T,R,v,y,ue,A):M||ze(f,g,R,null,v,y,ue,A,!1),N>0){if(N&16)L(R,g,U,z,v,y,w);else if(N&2&&U.class!==z.class&&s(R,"class",null,z.class,w),N&4&&s(R,"style",U.style,z.style,w),N&8){const Ee=g.dynamicProps;for(let pe=0;pe<Ee.length;pe++){const Te=Ee[pe],x=U[Te],F=z[Te];(F!==x||Te==="value")&&s(R,Te,x,F,w,f.children,v,y,Je)}}N&1&&f.children!==g.children&&u(R,g.children)}else!M&&T==null&&L(R,g,U,z,v,y,w);((G=z.onVnodeUpdated)||W)&&wt(()=>{G&&zt(G,v,g,f),W&&zn(g,f,v,"updated")},y)},Z=(f,g,v,y,w,A,M)=>{for(let R=0;R<g.length;R++){const N=f[R],T=g[R],W=N.el&&(N.type===je||!Gn(N,T)||N.shapeFlag&70)?d(N.el):v;b(N,T,W,null,y,w,A,M,!0)}},L=(f,g,v,y,w,A,M)=>{if(v!==y){for(const R in y){if(js(R))continue;const N=y[R],T=v[R];N!==T&&R!=="value"&&s(f,R,T,N,M,g.children,w,A,Je)}if(v!==Pe)for(const R in v)!js(R)&&!(R in y)&&s(f,R,v[R],null,M,g.children,w,A,Je);"value"in y&&s(f,"value",v.value,y.value)}},re=(f,g,v,y,w,A,M,R,N)=>{const T=g.el=f?f.el:a(""),W=g.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:z,slotScopeIds:G}=g;G&&(R=R?R.concat(G):G),f==null?(r(T,v,y),r(W,v,y),D(g.children,v,W,w,A,M,R,N)):U>0&&U&64&&z&&f.dynamicChildren?(Z(f.dynamicChildren,z,v,w,A,M,R),(g.key!=null||w&&g===w.subTree)&&Sf(f,g,!0)):ze(f,g,v,W,w,A,M,R,N)},Ce=(f,g,v,y,w,A,M,R,N)=>{g.slotScopeIds=R,f==null?g.shapeFlag&512?w.ctx.activate(g,v,y,M,N):Se(g,v,y,w,A,M,N):fe(f,g,N)},Se=(f,g,v,y,w,A,M)=>{const R=f.component=fb(f,y,w);if(Bo(f)&&(R.ctx.renderer=At),pb(R),R.asyncDep){if(w&&w.registerDep(R,ge),!f.el){const N=R.subTree=We(St);$(null,N,g,v)}return}ge(R,f,g,v,w,A,M)},fe=(f,g,v)=>{const y=g.component=f.component;if(Iv(f,g,v))if(y.asyncDep&&!y.asyncResolved){ie(y,g,v);return}else y.next=g,yv(y.update),y.update();else g.component=f.component,g.el=f.el,y.vnode=g},ge=(f,g,v,y,w,A,M)=>{const R=()=>{if(f.isMounted){let{next:W,bu:U,u:z,parent:G,vnode:ue}=f,Ee=W,pe;Wn(f,!1),W?(W.el=ue.el,ie(f,W,M)):W=ue,U&&Vs(U),(pe=W.props&&W.props.onVnodeBeforeUpdate)&&zt(pe,G,W,ue),Wn(f,!0);const Te=va(f),x=f.subTree;f.subTree=Te,b(x,Te,d(x.el),fn(x),f,w,A),W.el=Te.el,Ee===null&&Sv(f,Te.el),z&&wt(z,w),(pe=W.props&&W.props.onVnodeUpdated)&&wt(()=>zt(pe,G,W,ue),w)}else{let W;const{el:U,props:z}=g,{bm:G,m:ue,parent:Ee}=f,pe=io(g);if(Wn(f,!1),G&&Vs(G),!pe&&(W=z&&z.onVnodeBeforeMount)&&zt(W,Ee,g),Wn(f,!0),U&&$n){const Te=()=>{f.subTree=va(f),$n(U,f.subTree,f,w,null)};pe?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{const Te=f.subTree=va(f);b(null,Te,v,y,f,w,A),g.el=Te.el}if(ue&&wt(ue,w),!pe&&(W=z&&z.onVnodeMounted)){const Te=g;wt(()=>zt(W,Ee,Te),w)}g.shapeFlag&256&&f.a&&wt(f.a,w),f.isMounted=!0,g=v=y=null}},N=f.effect=new Wl(R,()=>af(f.update),f.scope),T=f.update=N.run.bind(N);T.id=f.uid,Wn(f,!0),T()},ie=(f,g,v)=>{g.component=f;const y=f.vnode.props;f.vnode=g,f.next=null,Gv(f,g.props,y,v),Jv(f,g.children,v),ti(),Jl(void 0,f.update),ni()},ze=(f,g,v,y,w,A,M,R,N=!1)=>{const T=f&&f.children,W=f?f.shapeFlag:0,U=g.children,{patchFlag:z,shapeFlag:G}=g;if(z>0){if(z&128){$e(T,U,v,y,w,A,M,R,N);return}else if(z&256){bt(T,U,v,y,w,A,M,R,N);return}}G&8?(W&16&&Je(T,w,A),U!==T&&u(v,U)):W&16?G&16?$e(T,U,v,y,w,A,M,R,N):Je(T,w,A,!0):(W&8&&u(v,""),G&16&&D(U,v,y,w,A,M,R,N))},bt=(f,g,v,y,w,A,M,R,N)=>{f=f||Nr,g=g||Nr;const T=f.length,W=g.length,U=Math.min(T,W);let z;for(z=0;z<U;z++){const G=g[z]=N?yn(g[z]):Vt(g[z]);b(f[z],G,v,null,w,A,M,R,N)}T>W?Je(f,w,A,!0,!1,U):D(g,v,y,w,A,M,R,N,U)},$e=(f,g,v,y,w,A,M,R,N)=>{let T=0;const W=g.length;let U=f.length-1,z=W-1;for(;T<=U&&T<=z;){const G=f[T],ue=g[T]=N?yn(g[T]):Vt(g[T]);if(Gn(G,ue))b(G,ue,v,null,w,A,M,R,N);else break;T++}for(;T<=U&&T<=z;){const G=f[U],ue=g[z]=N?yn(g[z]):Vt(g[z]);if(Gn(G,ue))b(G,ue,v,null,w,A,M,R,N);else break;U--,z--}if(T>U){if(T<=z){const G=z+1,ue=G<W?g[G].el:y;for(;T<=z;)b(null,g[T]=N?yn(g[T]):Vt(g[T]),v,ue,w,A,M,R,N),T++}}else if(T>z)for(;T<=U;)ft(f[T],w,A,!0),T++;else{const G=T,ue=T,Ee=new Map;for(T=ue;T<=z;T++){const we=g[T]=N?yn(g[T]):Vt(g[T]);we.key!=null&&Ee.set(we.key,T)}let pe,Te=0;const x=z-ue+1;let F=!1,Y=0;const _e=new Array(x);for(T=0;T<x;T++)_e[T]=0;for(T=G;T<=U;T++){const we=f[T];if(Te>=x){ft(we,w,A,!0);continue}let Be;if(we.key!=null)Be=Ee.get(we.key);else for(pe=ue;pe<=z;pe++)if(_e[pe-ue]===0&&Gn(we,g[pe])){Be=pe;break}Be===void 0?ft(we,w,A,!0):(_e[Be-ue]=T+1,Be>=Y?Y=Be:F=!0,b(we,g[Be],v,null,w,A,M,R,N),Te++)}const Le=F?rb(_e):Nr;for(pe=Le.length-1,T=x-1;T>=0;T--){const we=ue+T,Be=g[we],xe=we+1<W?g[we+1].el:y;_e[T]===0?b(null,Be,v,xe,w,A,M,R,N):F&&(pe<0||T!==Le[pe]?ht(Be,v,xe,2):pe--)}}},ht=(f,g,v,y,w=null)=>{const{el:A,type:M,transition:R,children:N,shapeFlag:T}=f;if(T&6){ht(f.component.subTree,g,v,y);return}if(T&128){f.suspense.move(g,v,y);return}if(T&64){M.move(f,g,v,At);return}if(M===je){r(A,g,v);for(let U=0;U<N.length;U++)ht(N[U],g,v,y);r(f.anchor,g,v);return}if(M===ya){H(f,g,v);return}if(y!==2&&T&1&&R)if(y===0)R.beforeEnter(A),r(A,g,v),wt(()=>R.enter(A),w);else{const{leave:U,delayLeave:z,afterLeave:G}=R,ue=()=>r(A,g,v),Ee=()=>{U(A,()=>{ue(),G&&G()})};z?z(A,ue,Ee):Ee()}else r(A,g,v)},ft=(f,g,v,y=!1,w=!1)=>{const{type:A,props:M,ref:R,children:N,dynamicChildren:T,shapeFlag:W,patchFlag:U,dirs:z}=f;if(R!=null&&el(R,null,v,f,!0),W&256){g.ctx.deactivate(f);return}const G=W&1&&z,ue=!io(f);let Ee;if(ue&&(Ee=M&&M.onVnodeBeforeUnmount)&&zt(Ee,g,f),W&6)vi(f.component,v,y);else{if(W&128){f.suspense.unmount(v,y);return}G&&zn(f,null,g,"beforeUnmount"),W&64?f.type.remove(f,g,v,w,At,y):T&&(A!==je||U>0&&U&64)?Je(T,g,v,!1,!0):(A===je&&U&384||!w&&W&16)&&Je(N,g,v),y&&Cr(f)}(ue&&(Ee=M&&M.onVnodeUnmounted)||G)&&wt(()=>{Ee&&zt(Ee,g,f),G&&zn(f,null,g,"unmounted")},v)},Cr=f=>{const{type:g,el:v,anchor:y,transition:w}=f;if(g===je){_i(v,y);return}if(g===ya){q(f);return}const A=()=>{i(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:R}=w,N=()=>M(v,A);R?R(f.el,A,N):N()}else A()},_i=(f,g)=>{let v;for(;f!==g;)v=h(f),i(f),f=v;i(g)},vi=(f,g,v)=>{const{bum:y,scope:w,update:A,subTree:M,um:R}=f;y&&Vs(y),w.stop(),A&&(A.active=!1,ft(M,f,g,v)),R&&wt(R,g),wt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Je=(f,g,v,y=!1,w=!1,A=0)=>{for(let M=A;M<f.length;M++)ft(f[M],g,v,y,w)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Er=(f,g,v)=>{f==null?g._vnode&&ft(g._vnode,null,null,!0):b(g._vnode||null,f,g,null,null,null,v),uf(),g._vnode=f},At={p:b,um:ft,m:ht,r:Cr,mt:Se,mc:D,pc:ze,pbc:Z,n:fn,o:t};let Fn,$n;return e&&([Fn,$n]=e(At)),{render:Er,hydrate:Fn,createApp:eb(Er,Fn)}}function Wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sf(t,e,n=!1){const r=t.children,i=e.children;if(Q(r)&&Q(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=yn(i[s]),a.el=o.el),n||Sf(o,a))}}function rb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const ib=t=>t.__isTeleport,sb=Symbol(),je=Symbol(void 0),nc=Symbol(void 0),St=Symbol(void 0),ya=Symbol(void 0),Di=[];let rr=null;function le(t=!1){Di.push(rr=t?null:[])}function ob(){Di.pop(),rr=Di[Di.length-1]||null}let oo=1;function ku(t){oo+=t}function Rf(t){return t.dynamicChildren=oo>0?rr||Nr:null,ob(),oo>0&&rr&&rr.push(t),t}function De(t,e,n,r,i,s){return Rf(oe(t,e,n,r,i,s,!0))}function Pt(t,e,n,r,i){return Rf(We(t,e,n,r,i,!0))}function Gi(t){return t?t.__v_isVNode===!0:!1}function Gn(t,e){return t.type===e.type&&t.key===e.key}const Wo="__vInternal",Pf=({key:t})=>t!=null?t:null,qs=({ref:t,ref_key:e,ref_for:n})=>t!=null?tt(t)||et(t)||ne(t)?{i:mt,r:t,k:e,f:!!n}:t:null;function oe(t,e=null,n=null,r=0,i=null,s=t===je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pf(e),ref:e&&qs(e),scopeId:ff,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(rc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),oo>0&&!o&&rr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rr.push(l),l}const We=ab;function ab(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===sb)&&(t=St),Gi(t)){const a=cr(t,e,!0);return n&&rc(a,n),a}if(vb(t)&&(t=t.__vccOpts),e){e=lb(e);let{class:a,style:l}=e;a&&!tt(a)&&(e.class=kn(a)),qe(l)&&(Qh(l)&&!Q(l)&&(l=lt({},l)),e.style=Yt(l))}const o=tt(t)?1:Rv(t)?128:ib(t)?64:qe(t)?4:ne(t)?2:0;return oe(t,e,n,r,i,o,s,!0)}function lb(t){return t?Qh(t)||Wo in t?lt({},t):t:null}function cr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Af(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pf(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(qs(e)):[i,qs(e)]:qs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor}}function jo(t=" ",e=0){return We(nc,null,t,e)}function en(t="",e=!1){return e?(le(),Pt(St,null,t)):We(St,null,t)}function Vt(t){return t==null||typeof t=="boolean"?We(St):Q(t)?We(je,null,t.slice()):typeof t=="object"?yn(t):We(nc,null,String(t))}function yn(t){return t.el===null||t.memo?t:cr(t)}function rc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),rc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Wo in e)?e._ctx=mt:i===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[jo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Af(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=kn([e.class,r.class]));else if(i==="style")e.style=Yt([e.style,r.style]);else if(No(i)){const s=e[i],o=r[i];o&&s!==o&&!(Q(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function zt(t,e,n,r=null){Ot(t,e,7,[n,r])}function Yi(t,e,n,r){let i;const s=n&&n[r];if(Q(t)||tt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(qe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function cb(t,e,n={},r,i){if(mt.isCE||mt.parent&&io(mt.parent)&&mt.parent.isCE)return We("slot",e==="default"?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),le();const o=s&&kf(s(n)),a=Pt(je,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function kf(t){return t.some(e=>Gi(e)?!(e.type===St||e.type===je&&!kf(e.children)):!0)?t:null}const tl=t=>t?Of(t)?Vo(t)||t.proxy:tl(t.parent):null,ao=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tl(t.parent),$root:t=>tl(t.root),$emit:t=>t.emit,$options:t=>yf(t),$forceUpdate:t=>()=>af(t.update),$nextTick:t=>of.bind(t.proxy),$watch:t=>Av.bind(t)}),ub={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==Pe&&me(r,e))return o[e]=1,r[e];if(i!==Pe&&me(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&me(c,e))return o[e]=3,s[e];if(n!==Pe&&me(n,e))return o[e]=4,n[e];Ja&&(o[e]=0)}}const u=ao[e];let d,h;if(u)return e==="$attrs"&&Rt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Pe&&me(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,me(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==Pe&&me(i,e)?(i[e]=n,!0):r!==Pe&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Pe&&me(t,o)||e!==Pe&&me(e,o)||(a=s[0])&&me(a,o)||me(r,o)||me(ao,o)||me(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},db=If();let hb=0;function fb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||db,s={uid:hb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new B_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cf(r,i),emitsOptions:hf(r,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ev.bind(null,s),t.ce&&t.ce(s),s}let at=null;const Nf=()=>at||mt,Wr=t=>{at=t,t.scope.on()},ir=()=>{at&&at.scope.off(),at=null};function Of(t){return t.vnode.shapeFlag&4}let Xi=!1;function pb(t,e=!1){Xi=e;const{props:n,children:r}=t.vnode,i=Of(t);Kv(t,n,i,e),Xv(t,r);const s=i?gb(t,e):void 0;return Xi=!1,s}function gb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zh(new Proxy(t.ctx,ub));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?_b(t):null;Wr(t),ti();const s=Sn(r,t,0,[t.props,i]);if(ni(),ir(),Fh(s)){if(s.then(ir,ir),e)return s.then(o=>{Nu(t,o,e)}).catch(o=>{Fo(o,t,0)});t.asyncDep=s}else Nu(t,s,e)}else Mf(t,e)}function Nu(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=nf(e)),Mf(t,n)}let Ou;function Mf(t,e,n){const r=t.type;if(!t.render){if(!e&&Ou&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=lt(lt({isCustomElement:s,delimiters:a},o),l);r.render=Ou(i,c)}}t.render=r.render||$t}Wr(t),ti(),zv(t),ni(),ir()}function mb(t){return new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}})}function _b(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=mb(t))},slots:t.slots,emit:t.emit,expose:e}}function Vo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(nf(Zh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ao)return ao[n](t)}}))}function vb(t){return ne(t)&&"__vccOpts"in t}const se=(t,e)=>rf(t,e,Xi);function O(t,e,n){const r=arguments.length;return r===2?qe(e)&&!Q(e)?Gi(e)?We(t,null,[e]):We(t,e):We(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gi(n)&&(n=[n]),We(t,e,n))}const bb="3.2.33",yb="http://www.w3.org/2000/svg",Yn=typeof document!="undefined"?document:null,Mu=Yn&&Yn.createElement("template"),wb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Yn.createElementNS(yb,t):Yn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Mu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Mu.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Eb(t,e,n){const r=t.style,i=tt(n);if(n&&!i){for(const s in n)nl(r,s,n[s]);if(e&&!tt(e))for(const s in e)n[s]==null&&nl(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Du=/\s*!important$/;function nl(t,e,n){if(Q(n))n.forEach(r=>nl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tb(t,e);Du.test(n)?t.setProperty(ei(r),n.replace(Du,""),"important"):t[r]=n}}const Lu=["Webkit","Moz","ms"],wa={};function Tb(t,e){const n=wa[e];if(n)return n;let r=Ur(e);if(r!=="filter"&&r in t)return wa[e]=r;r=Uh(r);for(let i=0;i<Lu.length;i++){const s=Lu[i]+r;if(s in t)return wa[e]=s}return e}const Fu="http://www.w3.org/1999/xlink";function xb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fu,e.slice(6,e.length)):t.setAttributeNS(Fu,e,n);else{const s=R_(e);n==null||s&&!Mh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Ib(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Mh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Df,Sb]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let rl=0;const Rb=Promise.resolve(),Pb=()=>{rl=0},Ab=()=>rl||(Rb.then(Pb),rl=Df());function Pr(t,e,n,r){t.addEventListener(e,n,r)}function kb(t,e,n,r){t.removeEventListener(e,n,r)}function Nb(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Ob(e);if(r){const c=s[e]=Mb(r,i);Pr(t,a,c,l)}else o&&(kb(t,a,o,l),s[e]=void 0)}}const $u=/(?:Once|Passive|Capture)$/;function Ob(t){let e;if($u.test(t)){e={};let n;for(;n=t.match($u);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ei(t.slice(2)),e]}function Mb(t,e){const n=r=>{const i=r.timeStamp||Df();(Sb||i>=n.attached-1)&&Ot(Db(r,n.value),e,5,[r])};return n.value=t,n.attached=Ab(),n}function Db(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Bu=/^on[a-z]/,Lb=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?Cb(t,r,i):e==="style"?Eb(t,n,r):No(e)?$l(e)||Nb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fb(t,e,r,i))?Ib(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xb(t,e,r,i))};function Fb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Bu.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bu.test(e)&&tt(n)?!1:e in t}const mn="transition",wi="animation",Ji=(t,{slots:e})=>O(gf,$b(t),e);Ji.displayName="Transition";const Lf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ji.props=lt({},gf.props,Lf);const jn=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uu=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function $b(t){const e={};for(const L in t)L in Lf||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,p=Bb(i),C=p&&p[0],b=p&&p[1],{onBeforeEnter:k,onEnter:$,onEnterCancelled:B,onLeave:H,onLeaveCancelled:q,onBeforeAppear:ve=k,onAppear:E=$,onAppearCancelled:I=B}=e,D=(L,re,Ce)=>{xr(L,re?u:a),xr(L,re?c:o),Ce&&Ce()},K=(L,re)=>{xr(L,_),xr(L,h),re&&re()},Z=L=>(re,Ce)=>{const Se=L?E:$,fe=()=>D(re,L,Ce);jn(Se,[re,fe]),Hu(()=>{xr(re,L?l:s),_n(re,L?u:a),Uu(Se)||zu(re,r,C,fe)})};return lt(e,{onBeforeEnter(L){jn(k,[L]),_n(L,s),_n(L,o)},onBeforeAppear(L){jn(ve,[L]),_n(L,l),_n(L,c)},onEnter:Z(!1),onAppear:Z(!0),onLeave(L,re){const Ce=()=>K(L,re);_n(L,d),zb(),_n(L,h),Hu(()=>{xr(L,d),_n(L,_),Uu(H)||zu(L,r,b,Ce)}),jn(H,[L,Ce])},onEnterCancelled(L){D(L,!1),jn(B,[L])},onAppearCancelled(L){D(L,!0),jn(I,[L])},onLeaveCancelled(L){K(L),jn(q,[L])}})}function Bb(t){if(t==null)return null;if(qe(t))return[Ca(t.enter),Ca(t.leave)];{const e=Ca(t);return[e,e]}}function Ca(t){return to(t)}function _n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function xr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Hu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ub=0;function zu(t,e,n,r){const i=t._endId=++Ub,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Hb(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=_=>{_.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Hb(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(mn+"Delay"),s=r(mn+"Duration"),o=Wu(i,s),a=r(wi+"Delay"),l=r(wi+"Duration"),c=Wu(a,l);let u=null,d=0,h=0;e===mn?o>0&&(u=mn,d=o,h=s.length):e===wi?c>0&&(u=wi,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?mn:wi:null,h=u?u===mn?s.length:l.length:0);const _=u===mn&&/\b(transform|all)(,|$)/.test(n[mn+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:_}}function Wu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ju(n)+ju(t[r])))}function ju(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function zb(){return document.body.offsetHeight}const Vu=t=>{const e=t.props["onUpdate:modelValue"];return Q(e)?n=>Vs(e,n):e};function Wb(t){t.target.composing=!0}function qu(t){const e=t.target;e.composing&&(e.composing=!1,jb(e,"input"))}function jb(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Vb={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Vu(i);const s=r||i.props&&i.props.type==="number";Pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=to(a)),t._assign(a)}),n&&Pr(t,"change",()=>{t.value=t.value.trim()}),e||(Pr(t,"compositionstart",Wb),Pr(t,"compositionend",qu),Pr(t,"change",qu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Vu(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&to(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},qb=["ctrl","shift","alt","meta"],Kb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qb.some(n=>t[`${n}Key`]&&!e.includes(n))},Gb=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Kb[e[i]];if(s&&s(n,e))return}return t(n,...r)},Yb=lt({patchProp:Lb},wb);let Ku;function Xb(){return Ku||(Ku=tb(Yb))}const Jb=(...t)=>{const e=Xb().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Qb(r);if(!i)return;const s=e._component;!ne(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Qb(t){return tt(t)?document.querySelector(t):t}/**
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
 */const Ff={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw ii(e)},ii=function(t){return new Error("Firebase Database ("+Ff.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const $f=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(n[u],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($f(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Bf=function(t){const e=$f(t);return ic.encodeByteArray(e,!0)},Uf=function(t){return Bf(t).replace(/\./g,"")},il=function(t){try{return ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ey(t){return Hf(void 0,t)}function Hf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ty(n)||(t[n]=Hf(t[n],e[n]));return t}function ty(t){return t!=="__proto__"}/**
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
 */class us{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function ny(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ry(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wf(){return Ff.NODE_ADMIN===!0}function iy(){return typeof indexedDB=="object"}function sy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const oy="FirebaseError";class si extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oy,Object.setPrototypeOf(this,si.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ay(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new si(i,a,r)}}function ay(t,e){return t.replace(ly,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ly=/\{\$([^}]+)}/g;/**
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
 */const jf=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Qi(il(s[0])||""),n=Qi(il(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},cy=function(t){const e=jf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uy=function(t){const e=jf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function sl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function co(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gu(s)&&Gu(o)){if(!co(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gu(t){return t!==null&&typeof t=="object"}/**
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
 */class dy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function hy(t,e){const n=new fy(t,e);return n.subscribe.bind(n)}class fy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");py(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ea),i.error===void 0&&(i.error=Ea),i.complete===void 0&&(i.complete=Ea);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function py(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ea(){}function qo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const gy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ko=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ni(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Yu{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Vf(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new qf(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Vf{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new qf(this._transaction.objectStore(e))}}class qf{constructor(e){this._store=e}index(e){return new Xu(this._store.index(e))}createIndex(e,n,r){return new Xu(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Ni(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Ni(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Ni(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Ni(e,"Error clearing IndexedDB object store")}}class Xu{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Ni(n,"Error reading from IndexedDB")}}function my(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new Yu(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Yu(s.result),o.oldVersion,o.newVersion,new Vf(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class _y{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new us;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(by(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vy(t){return t===qn?void 0:t}function by(t){return t.instantiationMode==="EAGER"}/**
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
 */class yy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _y(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const wy={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},Cy=Re.INFO,Ey={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},Ty=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ey[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=Cy,this._logHandler=Ty,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}/**
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
 */class xy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Iy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Iy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ol="@firebase/app",Ju="0.7.22";/**
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
 */const ac=new oc("@firebase/app"),Sy="@firebase/app-compat",Ry="@firebase/analytics-compat",Py="@firebase/analytics",Ay="@firebase/app-check-compat",ky="@firebase/app-check",Ny="@firebase/auth",Oy="@firebase/auth-compat",My="@firebase/database",Dy="@firebase/database-compat",Ly="@firebase/functions",Fy="@firebase/functions-compat",$y="@firebase/installations",By="@firebase/installations-compat",Uy="@firebase/messaging",Hy="@firebase/messaging-compat",zy="@firebase/performance",Wy="@firebase/performance-compat",jy="@firebase/remote-config",Vy="@firebase/remote-config-compat",qy="@firebase/storage",Ky="@firebase/storage-compat",Gy="@firebase/firestore",Yy="@firebase/firestore-compat",Xy="firebase",Jy="9.7.0";/**
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
 */const Kf="[DEFAULT]",Qy={[ol]:"fire-core",[Sy]:"fire-core-compat",[Py]:"fire-analytics",[Ry]:"fire-analytics-compat",[ky]:"fire-app-check",[Ay]:"fire-app-check-compat",[Ny]:"fire-auth",[Oy]:"fire-auth-compat",[My]:"fire-rtdb",[Dy]:"fire-rtdb-compat",[Ly]:"fire-fn",[Fy]:"fire-fn-compat",[$y]:"fire-iid",[By]:"fire-iid-compat",[Uy]:"fire-fcm",[Hy]:"fire-fcm-compat",[zy]:"fire-perf",[Wy]:"fire-perf-compat",[jy]:"fire-rc",[Vy]:"fire-rc-compat",[qy]:"fire-gcs",[Ky]:"fire-gcs-compat",[Gy]:"fire-fst",[Yy]:"fire-fst-compat","fire-js":"fire-js",[Xy]:"fire-js-all"};/**
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
 */const uo=new Map,al=new Map;function Zy(t,e){try{t.container.addComponent(e)}catch(n){ac.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(al.has(e))return ac.debug(`There were multiple attempts to register component ${e}.`),!1;al.set(e,t);for(const n of uo.values())Zy(n,t);return!0}function lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const e0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},dr=new ds("app","Firebase",e0);/**
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
 */class t0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=Jy;function n0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Kf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw dr.create("bad-app-name",{appName:String(r)});const i=uo.get(r);if(i){if(co(t,i.options)&&co(n,i.config))return i;throw dr.create("duplicate-app",{appName:r})}const s=new yy(r);for(const a of al.values())s.addComponent(a);const o=new t0(t,n,s);return uo.set(r,o),o}function Gf(t=Kf){const e=uo.get(t);if(!e)throw dr.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let i=(r=Qy[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ac.warn(a.join(" "));return}Vr(new ur(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const r0="firebase-heartbeat-database",i0=1,Zi="firebase-heartbeat-store";let Ta=null;function Yf(){return Ta||(Ta=my(r0,i0,(t,e)=>{switch(e){case 0:t.createObjectStore(Zi)}}).catch(t=>{throw dr.create("storage-open",{originalErrorMessage:t.message})})),Ta}async function s0(t){try{return(await Yf()).transaction(Zi).objectStore(Zi).get(Xf(t))}catch(e){throw dr.create("storage-get",{originalErrorMessage:e.message})}}async function Qu(t,e){try{const r=(await Yf()).transaction(Zi,"readwrite");return await r.objectStore(Zi).put(e,Xf(t)),r.complete}catch(n){throw dr.create("storage-set",{originalErrorMessage:n.message})}}function Xf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const o0=1024,a0=30*24*60*60*1e3;class l0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new u0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=a0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zu(),{heartbeatsToSend:n,unsentEntries:r}=c0(this._heartbeatsCache.heartbeats),i=Uf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zu(){return new Date().toISOString().substring(0,10)}function c0(t,e=o0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ed(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ed(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class u0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iy()?sy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await s0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ed(t){return Uf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function d0(t){Vr(new ur("platform-logger",e=>new xy(e),"PRIVATE")),Vr(new ur("heartbeat",e=>new l0(e),"PRIVATE")),Rn(ol,Ju,t),Rn(ol,Ju,"esm2017"),Rn("fire-js","")}d0("");var h0="firebase",f0="9.7.0";/**
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
 */Rn(h0,f0,"app");function cc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Jf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p0=Jf,Qf=new ds("auth","Firebase",Jf());/**
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
 */const td=new oc("@firebase/auth");function Ks(t,...e){td.logLevel<=Re.ERROR&&td.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw uc(t,...e)}function Kt(t,...e){return uc(t,...e)}function g0(t,e,n){const r=Object.assign(Object.assign({},p0()),{[e]:n});return new ds("auth","Firebase",r).create(e,{appName:t.name})}function uc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qf.create(t,...e)}function ee(t,e,...n){if(!t)throw uc(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ks(e),new Error(e)}function cn(t,e){t||tn(e)}/**
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
 */const nd=new Map;function nn(t){cn(t instanceof Function,"Expected a class definition");let e=nd.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nd.set(t,e),e)}/**
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
 */function m0(t,e){const n=lc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(co(s,e!=null?e:{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function _0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ll(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function v0(){return rd()==="http:"||rd()==="https:"}function rd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function b0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v0()||ny()||"connection"in navigator)?navigator.onLine:!0}function y0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=sc()||zf()}get(){return b0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dc(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const w0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const C0=new fs(3e4,6e4);function ep(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Go(t,e,n,r,i={}){return tp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Zf.fetch()(rp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function tp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},w0),e);try{const i=new E0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xa(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw g0(t,u,c);ln(t,u)}}catch(i){if(i instanceof si)throw i;ln(t,"network-request-failed")}}async function np(t,e,n,r,i={}){const s=await Go(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function rp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dc(t.config,i):`${t.config.apiScheme}://${i}`}class E0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),C0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function T0(t,e){return Go(t,"POST","/v1/accounts:delete",e)}async function x0(t,e){return Go(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Li(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I0(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=hc(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Li(Ia(i.auth_time)),issuedAtTime:Li(Ia(i.iat)),expirationTime:Li(Ia(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ia(t){return Number(t)*1e3}function hc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=il(n);return i?JSON.parse(i):(Ks("Failed to decode base64 JWT payload"),null)}catch(i){return Ks("Caught error parsing JWT payload as JSON",i),null}}function S0(t){const e=hc(t);return ee(e,"internal-error"),ee(typeof e.exp!="undefined","internal-error"),ee(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof si&&R0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function R0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class P0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ip{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(t){var e;const n=t.auth,r=await t.getIdToken(),i=await es(t,x0(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?N0(s.providerUserInfo):[],a=k0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ip(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function A0(t){const e=Ht(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function N0(t){return t.map(e=>{var{providerId:n}=e,r=cc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function O0(t,e){const n=await tp(t,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=rp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken!="undefined","internal-error"),ee(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):S0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await O0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ts;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function vn(t,e){ee(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ip(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return I0(this,e)}reload(){return A0(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await es(this,T0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:H,isAnonymous:q,providerData:ve,stsTokenManager:E}=n;ee(B&&E,e,"internal-error");const I=ts.fromJSON(this.name,E);ee(typeof B=="string",e,"internal-error"),vn(d,e.name),vn(h,e.name),ee(typeof H=="boolean",e,"internal-error"),ee(typeof q=="boolean",e,"internal-error"),vn(_,e.name),vn(p,e.name),vn(C,e.name),vn(b,e.name),vn(k,e.name),vn($,e.name);const D=new sr({uid:B,auth:e,email:h,emailVerified:H,displayName:d,isAnonymous:q,photoURL:p,phoneNumber:_,tenantId:C,stsTokenManager:I,createdAt:k,lastLoginAt:$});return ve&&Array.isArray(ve)&&(D.providerData=ve.map(K=>Object.assign({},K))),b&&(D._redirectEventId=b),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new ts;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ho(s),s}}/**
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
 */class sp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sp.type="NONE";const id=sp;/**
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
 */function Gs(t,e,n){return`firebase:${t}:${e}:${n}`}class Dr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dr(nn(id),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||nn(id);const o=Gs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=sr._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Dr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Dr(s,e,r))}}/**
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
 */function sd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(op(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(up(e))return"Blackberry";if(dp(e))return"Webos";if(fc(e))return"Safari";if((e.includes("chrome/")||ap(e))&&!e.includes("edge/"))return"Chrome";if(cp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function op(t=dt()){return/firefox\//i.test(t)}function fc(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ap(t=dt()){return/crios\//i.test(t)}function lp(t=dt()){return/iemobile/i.test(t)}function cp(t=dt()){return/android/i.test(t)}function up(t=dt()){return/blackberry/i.test(t)}function dp(t=dt()){return/webos/i.test(t)}function Yo(t=dt()){return/iphone|ipad|ipod/i.test(t)}function M0(t=dt()){var e;return Yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function D0(){return ry()&&document.documentMode===10}function hp(t=dt()){return Yo(t)||cp(t)||dp(t)||up(t)||/windows phone/i.test(t)||lp(t)}function L0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fp(t,e=[]){let n;switch(t){case"Browser":n=sd(dt());break;case"Worker":n=`${sd(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class F0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new od(this),this.idTokenSubscription=new od(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ht(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function pc(t){return Ht(t)}class od{constructor(e){this.auth=e,this.observer=null,this.addObserver=hy(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class pp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}/**
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
 */async function Lr(t,e){return np(t,"POST","/v1/accounts:signInWithIdp",ep(t,e))}/**
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
 */const $0="http://localhost";class hr extends pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:$0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
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
 */class gp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ps extends gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends ps{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class En extends ps{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class Tn extends ps{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */async function B0(t,e){return np(t,"POST","/v1/accounts:signUp",ep(t,e))}/**
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
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=ad(r);return new On({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ad(r);return new On({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ad(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function U0(t){var e;const n=pc(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new On({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await B0(n,{returnSecureToken:!0}),i=await On._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class fo extends si{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fo(e,n,r,i)}}function mp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(t,s,e,r):s})}async function H0(t,e,n=!1){const r=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return On._forOperation(t,"link",r)}/**
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
 */async function z0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await es(t,mp(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=hc(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),On._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
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
 */async function W0(t,e,n=!1){const r="signIn",i=await mp(t,r,e),s=await On._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function j0(t,e,n,r){return Ht(t).onAuthStateChanged(e,n,r)}const po="__sak";/**
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
 */class _p{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function V0(){const t=dt();return fc(t)||Yo(t)}const q0=1e3,K0=10;class vp extends _p{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=V0()&&L0(),this.fallbackToPolling=hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);D0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,K0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vp.type="LOCAL";const G0=vp;/**
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
 */class bp extends _p{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bp.type="SESSION";const yp=bp;/**
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
 */function Y0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Y0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
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
 */function gc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class X0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=gc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gt(){return window}function J0(t){Gt().location.href=t}/**
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
 */function wp(){return typeof Gt().WorkerGlobalScope!="undefined"&&typeof Gt().importScripts=="function"}async function Q0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ew(){return wp()?self:null}/**
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
 */const Cp="firebaseLocalStorageDb",tw=1,go="firebaseLocalStorage",Ep="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([go],e?"readwrite":"readonly").objectStore(go)}function nw(){const t=indexedDB.deleteDatabase(Cp);return new gs(t).toPromise()}function cl(){const t=indexedDB.open(Cp,tw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(go,{keyPath:Ep})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(go)?e(r):(r.close(),await nw(),e(await cl()))})})}async function ld(t,e,n){const r=Jo(t,!0).put({[Ep]:e,value:n});return new gs(r).toPromise()}async function rw(t,e){const n=Jo(t,!1).get(e),r=await new gs(n).toPromise();return r===void 0?null:r.value}function cd(t,e){const n=Jo(t,!0).delete(e);return new gs(n).toPromise()}const iw=800,sw=3;class Tp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(ew()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q0(),!this.activeServiceWorker)return;this.sender=new X0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cl();return await ld(e,po,"1"),await cd(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ld(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jo(i,!1).getAll();return new gs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tp.type="LOCAL";const ow=Tp;/**
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
 */function aw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aw().appendChild(r)})}function cw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new fs(3e4,6e4);/**
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
 */function uw(t,e){return e?nn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mc extends pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dw(t){return W0(t.auth,new mc(t),t.bypassAuthState)}function hw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),z0(n,new mc(t),t.bypassAuthState)}async function fw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),H0(n,new mc(t),t.bypassAuthState)}/**
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
 */class xp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dw;case"linkViaPopup":case"linkViaRedirect":return fw;case"reauthViaPopup":case"reauthViaRedirect":return hw;default:ln(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pw=new fs(2e3,1e4);class Ar extends xp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,pw.get())};e()}}Ar.currentPopupAction=null;/**
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
 */const gw="pendingRedirect",Sa=new Map;class mw extends xp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sa.get(this.auth._key());if(!e){try{const r=await _w(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sa.set(this.auth._key(),e)}return this.bypassAuthState||Sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _w(t,e){const n=bw(e),r=vw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vw(t){return nn(t._redirectPersistence)}function bw(t){return Gs(gw,t.config.apiKey,t.name)}async function yw(t,e,n=!1){const r=pc(t),i=uw(r,e),o=await new mw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ww=10*60*1e3;class Cw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ew(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ip(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ww&&this.cachedEventUids.clear(),this.cachedEventUids.has(ud(e))}saveEventToCache(e){this.cachedEventUids.add(ud(e)),this.lastProcessedEventTime=Date.now()}}function ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ip({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ew(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ip(t);default:return!1}}/**
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
 */async function Tw(t,e={}){return Go(t,"GET","/v1/projects",e)}/**
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
 */const xw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iw=/^https?/;async function Sw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tw(t);for(const n of e)try{if(Rw(n))return}catch{}ln(t,"unauthorized-domain")}function Rw(t){const e=ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Iw.test(n))return!1;if(xw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Pw=new fs(3e4,6e4);function dd(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Aw(t){return new Promise((e,n)=>{var r,i,s;function o(){dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dd(),n(Kt(t,"network-request-failed"))},timeout:Pw.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const a=cw("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},lw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ys=null,e})}let Ys=null;function kw(t){return Ys=Ys||Aw(t),Ys}/**
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
 */const Nw=new fs(5e3,15e3),Ow="__/auth/iframe",Mw="emulator/auth/iframe",Dw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fw(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dc(e,Mw):`https://${t.config.authDomain}/${Ow}`,r={apiKey:e.apiKey,appName:t.name,v:hs},i=Lw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oi(r).slice(1)}`}async function $w(t){const e=await kw(t),n=Gt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:Fw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=Gt().setTimeout(()=>{s(o)},Nw.get());function l(){Gt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Bw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uw=500,Hw=600,zw="_blank",Ww="http://localhost";class hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jw(t,e,n,r=Uw,i=Hw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bw),{width:r.toString(),height:i.toString(),top:s,left:o}),c=dt().toLowerCase();n&&(a=ap(c)?zw:n),op(c)&&(e=e||Ww,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[_,p])=>`${h}${_}=${p},`,"");if(M0(c)&&a!=="_self")return Vw(e||"",a),new hd(null);const d=window.open(e||"",a,u);ee(d,t,"popup-blocked");try{d.focus()}catch{}return new hd(d)}function Vw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qw="__/auth/handler",Kw="emulator/auth/handler";function fd(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:i};if(e instanceof gp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof ps){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Gw(t)}?${oi(a).slice(1)}`}function Gw({config:t}){return t.emulator?dc(t,Kw):`https://${t.authDomain}/${qw}`}/**
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
 */const Ra="webStorageSupport";class Yw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yp,this._completeRedirectFn=yw}async _openPopup(e,n,r,i){var s;cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=fd(e,n,r,ll(),i);return jw(e,o,gc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),J0(fd(e,n,r,ll(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $w(e),r=new Cw(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ra,{type:Ra},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ra];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hp()||fc()||Yo()}}const Xw=Yw;var pd="@firebase/auth",gd="0.19.12";/**
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
 */class Jw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zw(t){Vr(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{ee(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fp(t)},u=new F0(a,l,c);return _0(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new ur("auth-internal",e=>{const n=pc(e.getProvider("auth").getImmediate());return(r=>new Jw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(pd,gd,Qw(t)),Rn(pd,gd,"esm2017")}/**
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
 */function eC(t=Gf()){const e=lc(t,"auth");return e.isInitialized()?e.getImmediate():m0(t,{popupRedirectResolver:Xw,persistence:[ow,G0,yp]})}Zw("Browser");const md="@firebase/database",_d="0.12.8";/**
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
 */let Sp="";function tC(t){Sp=t}/**
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
 */class nC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class rC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Rp=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nC(e)}}catch{}return new rC},Jn=Rp("localStorage"),ul=Rp("sessionStorage");/**
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
 */const Fr=new oc("@firebase/database"),iC=function(){let t=1;return function(){return t++}}(),Pp=function(t){const e=gy(t),n=new dy;n.update(e);const r=n.digest();return ic.encodeByteArray(r)},ms=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ms.apply(null,r):typeof r=="object"?e+=Xe(r):e+=r,e+=" "}return e};let or=null,vd=!0;const sC=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Fr.logLevel=Re.VERBOSE,or=Fr.log.bind(Fr),e&&ul.set("logging_enabled",!0)):typeof t=="function"?or=t:(or=null,ul.remove("logging_enabled"))},ot=function(...t){if(vd===!0&&(vd=!1,or===null&&ul.get("logging_enabled")===!0&&sC(!0)),or){const e=ms.apply(null,t);or(e)}},_s=function(t){return function(...e){ot(t,...e)}},dl=function(...t){const e="FIREBASE INTERNAL ERROR: "+ms(...t);Fr.error(e)},fr=function(...t){const e=`FIREBASE FATAL ERROR: ${ms(...t)}`;throw Fr.error(e),new Error(e)},vt=function(...t){const e="FIREBASE WARNING: "+ms(...t);Fr.warn(e)},oC=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_c=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},aC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},qr="[MIN_NAME]",pr="[MAX_NAME]",br=function(t,e){if(t===e)return 0;if(t===qr||e===pr)return-1;if(e===qr||t===pr)return 1;{const n=bd(t),r=bd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},lC=function(t,e){return t===e?0:t<e?-1:1},Ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},vc=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Xe(e[r]),n+=":",n+=vc(t[e[r]]);return n+="}",n},Ap=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ct(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kp=function(t){P(!_c(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},cC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const hC=new RegExp("^-?(0*)\\d{1,10}$"),fC=-2147483648,pC=2147483647,bd=function(t){if(hC.test(t)){const e=Number(t);if(e>=fC&&e<=pC)return e}return null},ai=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},gC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fi=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _C{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vt(e)}}class hl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hl.OWNER="owner";/**
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
 */const bc="5",Np="v",Op="s",Mp="r",Dp="f",Lp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fp="ls",vC="p",fl="ac",$p="websocket",Bp="long_polling";/**
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
 */class bC{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Up(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===$p)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bp)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yC(t)&&(n.ns=t.namespace);const i=[];return ct(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class wC{constructor(){this.counters_={}}incrementCounter(e,n=1){Xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ey(this.counters_)}}/**
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
 */const Pa={},Aa={};function yc(t){const e=t.toString();return Pa[e]||(Pa[e]=new wC),Pa[e]}function CC(t,e){const n=t.toString();return Aa[n]||(Aa[n]=e()),Aa[n]}/**
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
 */class EC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ai(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const yd="start",TC="close",xC="pLPCommand",IC="pRTLPCB",Hp="id",zp="pw",Wp="ser",SC="cb",RC="seg",PC="ts",AC="d",kC="dframe",jp=1870,Vp=30,NC=jp-Vp,OC=25e3,MC=3e4;class kr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_s(e),this.stats_=yc(n),this.urlFn=l=>(this.appCheckToken&&(l[fl]=this.appCheckToken),Up(n,Bp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new EC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(MC)),aC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wc((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yd)this.id=a,this.password=l;else if(o===TC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[yd]="t",r[Wp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[SC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Np]=bc,this.transportSessionId&&(r[Op]=this.transportSessionId),this.lastSessionId&&(r[Fp]=this.lastSessionId),this.applicationId&&(r[vC]=this.applicationId),this.appCheckToken&&(r[fl]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Lp.test(location.hostname)&&(r[Mp]=Dp);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){kr.forceAllow_=!0}static forceDisallow(){kr.forceDisallow_=!0}static isAvailable(){return kr.forceAllow_?!0:!kr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!cC()&&!uC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bf(n),i=Ap(r,NC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[kC]="t",r[Hp]=e,r[zp]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=iC(),window[xC+this.uniqueCallbackIdentifier]=e,window[IC+this.uniqueCallbackIdentifier]=n,this.myIFrame=wc.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hp]=this.myID,e[zp]=this.myPW,e[Wp]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vp+r.length<=jp;){const o=this.pendingSegs.shift();r=r+"&"+RC+i+"="+o.seg+"&"+PC+i+"="+o.ts+"&"+AC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(OC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const DC=16384,LC=45e3;let mo=null;typeof MozWebSocket!="undefined"?mo=MozWebSocket:typeof WebSocket!="undefined"&&(mo=WebSocket);class Lt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_s(this.connId),this.stats_=yc(n),this.connURL=Lt.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[Np]=bc,typeof location!="undefined"&&location.hostname&&Lp.test(location.hostname)&&(s[Mp]=Dp),n&&(s[Op]=n),r&&(s[Fp]=r),i&&(s[fl]=i),Up(e,$p,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jn.set("previous_websocket_failure",!0);try{if(!Wf()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new mo(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&mo!==null&&!Lt.forceDisallow_}static previouslyFailed(){return Jn.isInMemoryStorage||Jn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Qi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ap(n,DC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Lt.responsesRequiredToBeHealthy=2;Lt.healthyTimeout=3e4;/**
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
 */class Cc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[kr,Lt]}initTransports_(e){const n=Lt&&Lt.isAvailable();let r=n&&!Lt.previouslyFailed();if(e.webSocketOnly&&(n||vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Lt];else{const i=this.transports_=[];for(const s of Cc.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const FC=6e4,$C=5e3,BC=10*1024,UC=100*1024,ka="t",wd="d",HC="s",Cd="r",zC="e",Ed="o",Td="a",xd="n",Id="p",WC="h";class jC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_s("c:"+this.id+":"),this.transportManager_=new Cc(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>BC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ka in e){const n=e[ka];n===Td?this.upgradeIfSecondaryHealthy_():n===Cd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ed&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ci("t",e),r=Ci("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Id,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Td,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ci("t",e),r=Ci("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ci(ka,e);if(wd in e){const r=e[wd];if(n===WC)this.onHandshake_(r);else if(n===xd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===HC?this.onConnectionShutdown_(r):n===Cd?this.onReset_(r):n===zC?dl("Server Error: "+r):n===Ed?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bc!==r&&vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(FC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($C))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Id,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qp{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Kp{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class _o extends Kp{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!sc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _o}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sd=32,Rd=768;class Ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new Ie("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mn(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ie(t.pieces_,e)}function Ec(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function VC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ns(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Gp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ie(e,0)}function Ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ie(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function _t(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return _t(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qC(t,e){const n=ns(t,0),r=ns(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=br(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Tc(t,e){if(Mn(t)!==Mn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Nt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mn(t)>Mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class KC{constructor(e,n){this.errorPrefix_=n,this.parts_=ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ko(this.parts_[r]);Yp(this)}}function GC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ko(e),Yp(t)}function YC(t){const e=t.parts_.pop();t.byteLength_-=Ko(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yp(t){if(t.byteLength_>Rd)throw new Error(t.errorPrefix_+"has a key path longer than "+Rd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sd+") or object contains a cycle "+Kn(t))}function Kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class xc extends Kp{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xc}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ei=1e3,XC=60*5*1e3,JC=3*1e3,Pd=30*1e3,QC=1.3,ZC=3e4,eE="server_kill",Ad=3;class on extends qp{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=on.nextPersistentConnectionId_++,this.log_=_s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ei,this.maxReconnectDelay_=XC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Wf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_o.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Xe(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new us,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},JC),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;on.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xt(e,"w")){const r=jr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cy(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dl("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ZC&&(this.reconnectDelay_=Ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new jC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{vt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(eE)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&vt(d),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sl(this.interruptReasons_)&&(this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>vc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ad&&(this.reconnectDelay_=Pd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ad&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Sp.replace(/\./g,"-")]=1,sc()?e["framework.cordova"]=1:zf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_o.getInstance().currentlyOnline();return sl(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
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
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
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
 */class Qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ce(qr,e),i=new ce(qr,n);return this.compare(r,i)!==0}minPost(){return ce.MIN}}/**
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
 */let Ns;class Xp extends Qo{static get __EMPTY_NODE(){return Ns}static set __EMPTY_NODE(e){Ns=e}compare(e,n){return br(e.name,n.name)}isDefinedOn(e){throw ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(pr,Ns)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,Ns)}toString(){return".key"}}const $r=new Xp;/**
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
 */class Os{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ze.RED,this.left=i!=null?i:Ct.EMPTY_NODE,this.right=s!=null?s:Ct.EMPTY_NODE}copy(e,n,r,i,s){return new Ze(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ze.RED=!0;Ze.BLACK=!1;class tE{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ze.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Os(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new tE;/**
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
 */function nE(t,e){return br(t.name,e.name)}function Ic(t,e){return br(t,e)}/**
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
 */let pl;function rE(t){pl=t}const Jp=function(t){return typeof t=="number"?"number:"+kp(t):"string:"+t},Qp=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xt(e,".sv"),"Priority must be a string or number.")}else P(t===pl||t.isEmpty(),"priority of unexpected type.");P(t===pl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let kd;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qp(this.priorityNode_)}static set __childrenNodeConstructor(e){kd=e}static get __childrenNodeConstructor(){return kd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:ae(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kp(this.value_):e+=this.value_,this.lazyHash_=Pp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(n),s=Qe.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Zp,eg;function iE(t){Zp=t}function sE(t){eg=t}class oE extends Qo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?br(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(pr,new Qe("[PRIORITY-POST]",eg))}makePost(e,n){const r=Zp(e);return new ce(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const He=new oE;/**
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
 */const aE=Math.log(2);class lE{constructor(e){const n=s=>parseInt(Math.log(s)/aE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vo=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ze(h,d.node,Ze.BLACK,null,null);{const _=parseInt(u/2,10)+l,p=i(l,_),C=i(_+1,c);return d=t[_],h=n?n(d):d,new Ze(h,d.node,Ze.BLACK,p,C)}},s=function(l){let c=null,u=null,d=t.length;const h=function(p,C){const b=d-p,k=d;d-=p;const $=i(b+1,k),B=t[b],H=n?n(B):B;_(new Ze(H,B.node,C,null,$))},_=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const C=l.nextBitIsOne(),b=Math.pow(2,l.count-(p+1));C?h(b,Ze.BLACK):(h(b,Ze.BLACK),h(b,Ze.RED))}return u},o=new lE(t.length),a=s(o);return new Ct(r||e,a)};/**
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
 */let Na;const Ir={};class rn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Ir&&He,"ChildrenNode.ts has not been loaded"),Na=Na||new rn({".priority":Ir},{".priority":He}),Na}get(e){const n=jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Xt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==$r,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=vo(r,e.getCompare()):a=Ir;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new rn(u,c)}addToIndexes(e,n){const r=lo(this.indexes_,(i,s)=>{const o=jr(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===Ir)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ce.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),vo(a,o.getCompare())}else return Ir;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ce(e.name,a))),l.insert(e,e.node)}});return new rn(r,this.indexSet_)}removeFromIndexes(e,n){const r=lo(this.indexes_,i=>{if(i===Ir)return i;{const s=n.get(e.name);return s?i.remove(new ce(e.name,s)):i}});return new rn(r,this.indexSet_)}}/**
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
 */let Ti;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Qp(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ti||(Ti=new X(new Ct(Ic),null,rn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ti}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ti:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ce(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ti:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{P(ae(e)!==".priority"||Mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ke(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(He,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jp(this.getPriority().val())+":"),this.forEachChild(He,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Pp(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ce(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vs?-1:0}withIndex(e){if(e===$r||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$r||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(He),i=n.getIterator(He);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$r?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cE extends X{constructor(){super(new Ct(Ic),X.EMPTY_NODE,rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const vs=new cE;Object.defineProperties(ce,{MIN:{value:new ce(qr,X.EMPTY_NODE)},MAX:{value:new ce(pr,vs)}});Xp.__EMPTY_NODE=X.EMPTY_NODE;Qe.__childrenNodeConstructor=X;rE(vs);sE(vs);/**
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
 */const uE=!0;function Ye(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,Ye(e))}if(!(t instanceof Array)&&uE){const n=[];let r=!1;if(ct(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ye(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ce(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=vo(n,nE,o=>o.name,Ic);if(r){const o=vo(n,He.getCompare());return new X(s,Ye(e),new rn({".priority":o},{".priority":He}))}else return new X(s,Ye(e),rn.Default)}else{let n=X.EMPTY_NODE;return ct(t,(r,i)=>{if(Xt(t,r)&&r.substring(0,1)!=="."){const s=Ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ye(e))}}iE(Ye);/**
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
 */class dE extends Qo{constructor(e){super(),this.indexPath_=e,P(!he(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?br(e.name,n.name):s}makePost(e,n){const r=Ye(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new ce(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,vs);return new ce(pr,e)}toString(){return ns(this.indexPath_,0).join("/")}}/**
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
 */class hE extends Qo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?br(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const r=Ye(e);return new ce(n,r)}toString(){return".value"}}const fE=new hE;/**
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
 */const Nd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pE=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Nd.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Nd.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function tg(t){return{type:"value",snapshotNode:t}}function Kr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Sc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(rs(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Kr(n,r)):o.trackChildChange(is(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(He,(i,s)=>{n.hasChild(i)||r.trackChildChange(rs(i,s))}),n.isLeafNode()||n.forEachChild(He,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(is(i,s,o))}else r.trackChildChange(Kr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ss{constructor(e){this.indexedFilter_=new Sc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ss.getStartPost_(e),this.endPost_=ss.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new ce(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(He,(o,a)=>{s.matches(new ce(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class mE{constructor(e){this.rangedFilter_=new ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ce(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,_)=>d(_,h)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(s,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:i=i.updateImmediateChild(d.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new ce(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(u&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(is(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(rs(n,d));const C=a.updateImmediateChild(n,X.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Kr(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(rs(c.name,c.node)),s.trackChildChange(Kr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
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
 */class Rc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=He}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===He}copy(){const e=new Rc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _E(t){return t.loadsAllData()?new Sc(t.getIndex()):t.hasLimit()?new mE(t):new ss(t)}function Od(t){const e={};if(t.isDefault())return e;let n;return t.index_===He?n="$priority":t.index_===fE?n="$value":t.index_===$r?n="$key":(P(t.index_ instanceof dE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_&&(e.startAt=Xe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Xe(t.indexStartName_))),t.endSet_&&(e.endAt=Xe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Xe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Md(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==He&&(e.i=t.index_.toString()),e}/**
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
 */class bo extends qp{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=_s("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=bo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Od(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),jr(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=bo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Od(e._queryParams),r=e._path.toString(),i=new us;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qi(a.responseText)}catch{vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class vE{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function yo(){return{value:null,children:new Map}}function ng(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,yo());const i=t.children.get(r);e=ke(e),ng(i,e,n)}}function gl(t,e,n){t.value!==null?n(e,t.value):bE(t,(r,i)=>{const s=new Ie(e.toString()+"/"+r);gl(i,s,n)})}function bE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class yE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ct(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Dd=10*1e3,wE=30*1e3,CE=5*60*1e3;class EE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yE(e);const r=Dd+(wE-Dd)*Math.random();Fi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ct(e,(i,s)=>{s>0&&Xt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*CE))}}/**
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
 */var Ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ft||(Ft={}));function Pc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ac(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class wo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ft.ACK_USER_WRITE,this.source=Pc()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ie(e));return new wo(be(),n,this.revert)}}else return P(ae(this.path)===e,"operationForChild called for unrelated child."),new wo(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class os{constructor(e,n){this.source=e,this.path=n,this.type=Ft.LISTEN_COMPLETE}operationForChild(e){return he(this.path)?new os(this.source,be()):new os(this.source,ke(this.path))}}/**
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
 */class gr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ft.OVERWRITE}operationForChild(e){return he(this.path)?new gr(this.source,be(),this.snap.getImmediateChild(e)):new gr(this.source,ke(this.path),this.snap)}}/**
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
 */class Gr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ft.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Ie(e));return n.isEmpty()?null:n.value?new gr(this.source,be(),n.value):new Gr(this.source,be(),n)}else return P(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gr(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Dn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class TE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(gE(o.childName,o.snapshotNode))}),xi(t,i,"child_removed",e,r,n),xi(t,i,"child_added",e,r,n),xi(t,i,"child_moved",s,r,n),xi(t,i,"child_changed",e,r,n),xi(t,i,"value",e,r,n),i}function xi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>SE(t,a,l)),o.forEach(a=>{const l=IE(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function IE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function SE(t,e,n){if(e.childName==null||n.childName==null)throw ii("Should only compare child_ events.");const r=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Zo(t,e){return{eventCache:t,serverCache:e}}function $i(t,e,n,r){return Zo(new Dn(e,n,r),t.serverCache)}function rg(t,e,n,r){return Zo(t.eventCache,new Dn(e,n,r))}function Co(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Oa;const RE=()=>(Oa||(Oa=new Ct(lC)),Oa);class Ae{constructor(e,n=RE()){this.value=e,this.children=n}static fromObject(e){let n=new Ae(null);return ct(e,(r,i)=>{n=n.set(new Ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(he(e))return null;{const r=ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ke(e),n);return s!=null?{path:Ue(new Ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(ke(e)):new Ae(null)}}set(e,n){if(he(e))return new Ae(n,this.children);{const r=ae(e),s=(this.children.get(r)||new Ae(null)).set(ke(e),n),o=this.children.insert(r,s);return new Ae(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const i=r.remove(ke(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ae(null):new Ae(this.value,s)}else return this}}get(e){if(he(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(ke(e)):null}}setTree(e,n){if(he(e))return n;{const r=ae(e),s=(this.children.get(r)||new Ae(null)).setTree(ke(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ae(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(he(e))return null;{const s=ae(e),o=this.children.get(s);return o?o.findOnPath_(ke(e),Ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,r){if(he(e))return this;{this.value&&r(n,this.value);const i=ae(e),s=this.children.get(i);return s?s.foreachOnPath_(ke(e),Ue(n,i),r):new Ae(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new Ae(null))}}function Bi(t,e,n){if(he(e))return new Bt(new Ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=_t(i,e);return s=s.updateChild(o,n),new Bt(t.writeTree_.set(i,s))}else{const i=new Ae(n),s=t.writeTree_.setTree(e,i);return new Bt(s)}}}function ml(t,e,n){let r=t;return ct(n,(i,s)=>{r=Bi(r,Ue(e,i),s)}),r}function Ld(t,e){if(he(e))return Bt.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new Bt(n)}}function _l(t,e){return yr(t,e)!=null}function yr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_t(n.path,e)):null}function Fd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(He,(r,i)=>{e.push(new ce(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ce(r,i.value))}),e}function Pn(t,e){if(he(e))return t;{const n=yr(t,e);return n!=null?new Bt(new Ae(n)):new Bt(t.writeTree_.subtree(e))}}function vl(t){return t.writeTree_.isEmpty()}function Yr(t,e){return ig(be(),t.writeTree_,e)}function ig(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ig(Ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ue(t,".priority"),r)),n}}/**
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
 */function ea(t,e){return lg(e,t)}function PE(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bi(t.visibleWrites,e,n)),t.lastWriteId=r}function AE(t,e,n,r){P(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ml(t.visibleWrites,e,n),t.lastWriteId=r}function kE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function NE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&OE(a,r.path)?i=!1:Nt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return ME(t),!0;if(r.snap)t.visibleWrites=Ld(t.visibleWrites,r.path);else{const a=r.children;ct(a,l=>{t.visibleWrites=Ld(t.visibleWrites,Ue(r.path,l))})}return!0}else return!1}function OE(t,e){if(t.snap)return Nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Nt(Ue(t.path,n),e))return!0;return!1}function ME(t){t.visibleWrites=sg(t.allWrites,DE,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DE(t){return t.visible}function sg(t,e,n){let r=Bt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Nt(n,o)?(a=_t(n,o),r=Bi(r,a,s.snap)):Nt(o,n)&&(a=_t(o,n),r=Bi(r,be(),s.snap.getChild(a)));else if(s.children){if(Nt(n,o))a=_t(n,o),r=ml(r,a,s.children);else if(Nt(o,n))if(a=_t(o,n),he(a))r=ml(r,be(),s.children);else{const l=jr(s.children,ae(a));if(l){const c=l.getChild(ke(a));r=Bi(r,be(),c)}}}else throw ii("WriteRecord should have .snap or .children")}}return r}function og(t,e,n,r,i){if(!r&&!i){const s=yr(t.visibleWrites,e);if(s!=null)return s;{const o=Pn(t.visibleWrites,e);if(vl(o))return n;if(n==null&&!_l(o,be()))return null;{const a=n||X.EMPTY_NODE;return Yr(o,a)}}}else{const s=Pn(t.visibleWrites,e);if(!i&&vl(s))return n;if(!i&&n==null&&!_l(s,be()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Nt(c.path,e)||Nt(e,c.path))},a=sg(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Yr(a,l)}}}function LE(t,e,n){let r=X.EMPTY_NODE;const i=yr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(He,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pn(t.visibleWrites,e);return n.forEachChild(He,(o,a)=>{const l=Yr(Pn(s,new Ie(o)),a);r=r.updateImmediateChild(o,l)}),Fd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pn(t.visibleWrites,e);return Fd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function FE(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ue(e,n);if(_l(t.visibleWrites,s))return null;{const o=Pn(t.visibleWrites,s);return vl(o)?i.getChild(n):Yr(o,i.getChild(n))}}function $E(t,e,n,r){const i=Ue(e,n),s=yr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pn(t.visibleWrites,i);return Yr(o,r.getNode().getImmediateChild(n))}else return null}function BE(t,e){return yr(t.visibleWrites,e)}function UE(t,e,n,r,i,s,o){let a;const l=Pn(t.visibleWrites,e),c=yr(l,be());if(c!=null)a=c;else if(n!=null)a=Yr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&u.length<i;)d(_,r)!==0&&u.push(_),_=h.getNext();return u}else return[]}function HE(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function Eo(t,e,n,r){return og(t.writeTree,t.treePath,e,n,r)}function Nc(t,e){return LE(t.writeTree,t.treePath,e)}function $d(t,e,n,r){return FE(t.writeTree,t.treePath,e,n,r)}function To(t,e){return BE(t.writeTree,Ue(t.treePath,e))}function zE(t,e,n,r,i,s){return UE(t.writeTree,t.treePath,e,n,r,i,s)}function Oc(t,e,n){return $E(t.writeTree,t.treePath,e,n)}function ag(t,e){return lg(Ue(t.treePath,e),t.writeTree)}function lg(t,e){return{treePath:t,writeTree:e}}/**
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
 */class WE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,is(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,rs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Kr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,is(r,e.snapshotNode,i.oldSnap));else throw ii("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class jE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const cg=new jE;class Mc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Oc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mr(this.viewCache_),s=zE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function VE(t){return{filter:t}}function qE(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KE(t,e,n,r,i){const s=new WE;let o,a;if(n.type===Ft.OVERWRITE){const c=n;c.source.fromUser?o=bl(t,e,c.path,c.snap,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!he(c.path),o=xo(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Ft.MERGE){const c=n;c.source.fromUser?o=YE(t,e,c.path,c.children,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=yl(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Ft.ACK_USER_WRITE){const c=n;c.revert?o=QE(t,e,c.path,r,i,s):o=XE(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Ft.LISTEN_COMPLETE)o=JE(t,e,n.path,r,s);else throw ii("Unknown operation type: "+n.type);const l=s.getChanges();return GE(e,o,l),{viewCache:o,changes:l}}function GE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Co(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(tg(Co(e)))}}function ug(t,e,n,r,i,s){const o=e.eventCache;if(To(r,n)!=null)return e;{let a,l;if(he(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=mr(e),u=c instanceof X?c:X.EMPTY_NODE,d=Nc(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Eo(r,mr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ae(n);if(c===".priority"){P(Mn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=$d(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ke(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=$d(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Oc(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return $i(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function xo(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(he(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),_,null)}else{const _=ae(n);if(!l.isCompleteForPath(n)&&Mn(n)>1)return e;const p=ke(n),b=l.getNode().getImmediateChild(_).updateChild(p,r);_===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),_,b,p,cg,null)}const d=rg(e,c,l.isFullyInitialized()||he(n),u.filtersNodes()),h=new Mc(i,d,s);return ug(t,d,n,i,h,a)}function bl(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Mc(i,e,s);if(he(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=$i(e,c,!0,t.filter.filtersNodes());else{const d=ae(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=$i(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ke(n),_=a.getNode().getImmediateChild(d);let p;if(he(h))p=r;else{const C=u.getCompleteChild(d);C!=null?Ec(h)===".priority"&&C.getChild(Gp(h)).isEmpty()?p=C:p=C.updateChild(h,r):p=X.EMPTY_NODE}if(_.equals(p))l=e;else{const C=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=$i(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Bd(t,e){return t.eventCache.isCompleteForChild(e)}function YE(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Ue(n,l);Bd(e,ae(u))&&(a=bl(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Ue(n,l);Bd(e,ae(u))||(a=bl(t,a,u,c,i,s,o))}),a}function Ud(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function yl(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;he(n)?c=r:c=new Ae(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),p=Ud(t,_,h);l=xo(t,l,new Ie(d),p,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!_){const p=e.serverCache.getNode().getImmediateChild(d),C=Ud(t,p,h);l=xo(t,l,new Ie(d),C,i,s,o,a)}}),l}function XE(t,e,n,r,i,s,o){if(To(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xo(t,e,n,l.getNode().getChild(n),i,s,a,o);if(he(n)){let c=new Ae(null);return l.getNode().forEachChild($r,(u,d)=>{c=c.set(new Ie(u),d)}),yl(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ae(null);return r.foreach((u,d)=>{const h=Ue(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),yl(t,e,n,c,i,s,a,o)}}function JE(t,e,n,r,i){const s=e.serverCache,o=rg(e,s.getNode(),s.isFullyInitialized()||he(n),s.isFiltered());return ug(t,o,n,r,cg,i)}function QE(t,e,n,r,i,s){let o;if(To(r,n)!=null)return e;{const a=new Mc(r,e,i),l=e.eventCache.getNode();let c;if(he(n)||ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Eo(r,mr(e));else{const d=e.serverCache.getNode();P(d instanceof X,"serverChildren would be complete if leaf node"),u=Nc(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=ae(n);let d=Oc(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ke(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,X.EMPTY_NODE,ke(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eo(r,mr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||To(r,be())!=null,$i(e,c,o,t.filter.filtersNodes())}}/**
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
 */class ZE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Sc(r.getIndex()),s=_E(r);this.processor_=VE(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),u=new Dn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Dn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Zo(d,u),this.eventGenerator_=new TE(this.query_)}get query(){return this.query_}}function eT(t){return t.viewCache_.serverCache.getNode()}function tT(t){return Co(t.viewCache_)}function nT(t,e){const n=mr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Hd(t){return t.eventRegistrations_.length===0}function rT(t,e){t.eventRegistrations_.push(e)}function zd(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Wd(t,e,n,r){e.type===Ft.MERGE&&e.source.queryId!==null&&(P(mr(t.viewCache_),"We should always have a full cache before handling merges"),P(Co(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=KE(t.processor_,i,e,n,r);return qE(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,dg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function iT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(He,(s,o)=>{r.push(Kr(s,o))}),n.isFullyInitialized()&&r.push(tg(n.getNode())),dg(t,r,n.getNode(),e)}function dg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return xE(t.eventGenerator_,e,n,i)}/**
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
 */let Io;class hg{constructor(){this.views=new Map}}function sT(t){P(!Io,"__referenceConstructor has already been defined"),Io=t}function oT(){return P(Io,"Reference.ts has not been loaded"),Io}function aT(t){return t.views.size===0}function Dc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),Wd(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Wd(o,e,n,r));return s}}function fg(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Eo(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=Nc(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const c=Zo(new Dn(a,l,!1),new Dn(r,i,!1));return new ZE(e,c)}return o}function lT(t,e,n,r,i,s){const o=fg(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rT(o,n),iT(o,n)}function cT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ln(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(zd(c,n,r)),Hd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(zd(l,n,r)),Hd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ln(t)&&s.push(new(oT())(e._repo,e._path)),{removed:s,events:o}}function pg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function An(t,e){let n=null;for(const r of t.views.values())n=n||nT(r,e);return n}function gg(t,e){if(e._queryParams.loadsAllData())return ta(t);{const r=e._queryIdentifier;return t.views.get(r)}}function mg(t,e){return gg(t,e)!=null}function Ln(t){return ta(t)!=null}function ta(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let So;function uT(t){P(!So,"__referenceConstructor has already been defined"),So=t}function dT(){return P(So,"Reference.ts has not been loaded"),So}let hT=1;class jd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=HE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _g(t,e,n,r,i){return PE(t.pendingWriteTree_,e,n,r,i),i?li(t,new gr(Pc(),e,n)):[]}function fT(t,e,n,r){AE(t.pendingWriteTree_,e,n,r);const i=Ae.fromObject(n);return li(t,new Gr(Pc(),e,i))}function xn(t,e,n=!1){const r=kE(t.pendingWriteTree_,e);if(NE(t.pendingWriteTree_,e)){let s=new Ae(null);return r.snap!=null?s=s.set(be(),!0):ct(r.children,o=>{s=s.set(new Ie(o),!0)}),li(t,new wo(r.path,s,n))}else return[]}function bs(t,e,n){return li(t,new gr(Ac(),e,n))}function pT(t,e,n){const r=Ae.fromObject(n);return li(t,new Gr(Ac(),e,r))}function gT(t,e){return li(t,new os(Ac(),e))}function mT(t,e,n){const r=Fc(t,n);if(r){const i=$c(r),s=i.path,o=i.queryId,a=_t(s,e),l=new os(kc(o),a);return Bc(t,s,l)}else return[]}function wl(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||mg(s,e))){const a=cT(s,e,n,r);aT(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(d,h)=>Ln(h));if(c&&!u){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const h=yT(d);for(let _=0;_<h.length;++_){const p=h[_],C=p.query,b=yg(t,p);t.listenProvider_.startListening(Ui(C),Ro(t,C),b.hashFn,b.onComplete)}}}!u&&l.length>0&&!r&&(c?t.listenProvider_.stopListening(Ui(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(na(d));t.listenProvider_.stopListening(Ui(d),h)})),wT(t,l)}return o}function _T(t,e,n,r){const i=Fc(t,r);if(i!=null){const s=$c(i),o=s.path,a=s.queryId,l=_t(o,e),c=new gr(kc(a),l,n);return Bc(t,o,c)}else return[]}function vT(t,e,n,r){const i=Fc(t,r);if(i){const s=$c(i),o=s.path,a=s.queryId,l=_t(o,e),c=Ae.fromObject(n),u=new Gr(kc(a),l,c);return Bc(t,o,u)}else return[]}function Vd(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,h)=>{const _=_t(d,r);i=i||An(h,_),s=s||Ln(h)});let o=t.syncPointTree_.get(r);o?(s=s||Ln(o),i=i||An(o,be())):(o=new hg,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((h,_)=>{const p=An(_,be());p&&(i=i.updateImmediateChild(h,p))}));const l=mg(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=na(e);P(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=CT();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const c=ea(t.pendingWriteTree_,r);let u=lT(o,e,n,c,i,a);if(!l&&!s){const d=gg(o,e);u=u.concat(ET(t,e,d))}return u}function Lc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_t(o,e),c=An(a,l);if(c)return c});return og(i,e,s,n,!0)}function bT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=_t(c,n);r=r||An(u,d)});let i=t.syncPointTree_.get(n);i?r=r||An(i,be()):(i=new hg,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Dn(r,!0,!1):null,a=ea(t.pendingWriteTree_,e._path),l=fg(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return tT(l)}function li(t,e){return vg(e,t.syncPointTree_,null,ea(t.pendingWriteTree_,be()))}function vg(t,e,n,r){if(he(t.path))return bg(t,e,n,r);{const i=e.get(be());n==null&&i!=null&&(n=An(i,be()));let s=[];const o=ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=ag(r,o);s=s.concat(vg(a,l,c,u))}return i&&(s=s.concat(Dc(i,t,r,n))),s}}function bg(t,e,n,r){const i=e.get(be());n==null&&i!=null&&(n=An(i,be()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ag(r,o),u=t.operationForChild(o);u&&(s=s.concat(bg(u,a,l,c)))}),i&&(s=s.concat(Dc(i,t,r,n))),s}function yg(t,e){const n=e.query,r=Ro(t,n);return{hashFn:()=>(eT(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?mT(t,n._path,r):gT(t,n._path);{const s=dC(i,n);return wl(t,n,null,s)}}}}function Ro(t,e){const n=na(e);return t.queryToTagMap.get(n)}function na(t){return t._path.toString()+"$"+t._queryIdentifier}function Fc(t,e){return t.tagToQueryMap.get(e)}function $c(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ie(t.substr(0,e))}}function Bc(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=ea(t.pendingWriteTree_,e);return Dc(r,n,i,null)}function yT(t){return t.fold((e,n,r)=>{if(n&&Ln(n))return[ta(n)];{let i=[];return n&&(i=pg(n)),ct(r,(s,o)=>{i=i.concat(o)}),i}})}function Ui(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(dT())(t._repo,t._path):t}function wT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=na(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function CT(){return hT++}function ET(t,e,n){const r=e._path,i=Ro(t,e),s=yg(t,n),o=t.listenProvider_.startListening(Ui(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!Ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!he(c)&&u&&Ln(u))return[ta(u).query];{let h=[];return u&&(h=h.concat(pg(u).map(_=>_.query))),ct(d,(_,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ui(u),Ro(t,u))}}return o}/**
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
 */class Uc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Uc(n)}node(){return this.node_}}class Hc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new Hc(this.syncTree_,n)}node(){return Lc(this.syncTree_,this.path_)}}const TT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qd=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return IT(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},IT=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},wg=function(t,e,n,r){return zc(e,new Hc(n,t),r)},Cg=function(t,e,n){return zc(t,new Uc(e),n)};function zc(t,e,n){const r=t.getPriority().val(),i=qd(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=qd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,Ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Qe(i))),o.forEachChild(He,(a,l)=>{const c=zc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Wc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function jc(t,e){let n=e instanceof Ie?e:new Ie(e),r=t,i=ae(n);for(;i!==null;){const s=jr(r.node.children,i)||{children:{},childCount:0};r=new Wc(i,r,s),n=ke(n),i=ae(n)}return r}function ci(t){return t.node.value}function Eg(t,e){t.node.value=e,Cl(t)}function Tg(t){return t.node.childCount>0}function ST(t){return ci(t)===void 0&&!Tg(t)}function ra(t,e){ct(t.node.children,(n,r)=>{e(new Wc(n,t,r))})}function xg(t,e,n,r){n&&!r&&e(t),ra(t,i=>{xg(i,e,!0,r)}),n&&r&&e(t)}function RT(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ys(t){return new Ie(t.parent===null?t.name:ys(t.parent)+"/"+t.name)}function Cl(t){t.parent!==null&&PT(t.parent,t.name,t)}function PT(t,e,n){const r=ST(n),i=Xt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cl(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cl(t))}/**
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
 */const AT=/[\[\].#$\/\u0000-\u001F\u007F]/,kT=/[\[\].#$\u0000-\u001F\u007F]/,Ma=10*1024*1024,Vc=function(t){return typeof t=="string"&&t.length!==0&&!AT.test(t)},Ig=function(t){return typeof t=="string"&&t.length!==0&&!kT.test(t)},NT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ig(t)},OT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!_c(t)||t&&typeof t=="object"&&Xt(t,".sv")},Sg=function(t,e,n,r){r&&e===void 0||ia(qo(t,"value"),e,n)},ia=function(t,e,n){const r=n instanceof Ie?new KC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Kn(r)+" with contents = "+e.toString());if(_c(e))throw new Error(t+"contains "+e.toString()+" "+Kn(r));if(typeof e=="string"&&e.length>Ma/3&&Ko(e)>Ma)throw new Error(t+"contains a string greater than "+Ma+" utf8 bytes "+Kn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ct(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Vc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GC(r,o),ia(t,a,r),YC(r)}),i&&s)throw new Error(t+' contains ".value" child '+Kn(r)+" in addition to actual children.")}},MT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ns(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Vc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(qC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Nt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},DT=function(t,e,n,r){if(r&&e===void 0)return;const i=qo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ct(e,(o,a)=>{const l=new Ie(o);if(ia(i,a,Ue(n,l)),Ec(l)===".priority"&&!OT(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),MT(i,s)},Rg=function(t,e,n,r){if(!(r&&n===void 0)&&!Ig(n))throw new Error(qo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Rg(t,e,n,r)},qc=function(t,e){if(ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!NT(n))throw new Error(qo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $T{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sa(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Tc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Kc(t,e,n){sa(t,n),Pg(t,r=>Tc(r,e))}function Ut(t,e,n){sa(t,n),Pg(t,r=>Nt(r,e)||Nt(e,r))}function Pg(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(BT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function BT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();or&&ot("event: "+n.toString()),ai(r)}}}/**
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
 */const UT="repo_interrupt",HT=25;class zT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $T,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yo(),this.transactionQueueTree_=new Wc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function WT(t,e,n){if(t.stats_=yc(t.repoInfo_),t.forceRestClient_||gC())t.server_=new bo(t.repoInfo_,(r,i,s,o)=>{Kd(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gd(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new on(t.repoInfo_,e,(r,i,s,o)=>{Kd(t,r,i,s,o)},r=>{Gd(t,r)},r=>{jT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=CC(t.repoInfo_,()=>new EE(t.stats_,t.server_)),t.infoData_=new vE,t.infoSyncTree_=new jd({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=bs(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Gc(t,"connected",!1),t.serverSyncTree_=new jd({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ut(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Ag(t){const n=t.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oa(t){return TT({timestamp:Ag(t)})}function Kd(t,e,n,r,i){t.dataUpdateCount++;const s=new Ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=lo(n,c=>Ye(c));o=vT(t.serverSyncTree_,s,l,i)}else{const l=Ye(n);o=_T(t.serverSyncTree_,s,l,i)}else if(r){const l=lo(n,c=>Ye(c));o=pT(t.serverSyncTree_,s,l)}else{const l=Ye(n);o=bs(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Xr(t,s)),Ut(t.eventQueue_,a,o)}function Gd(t,e){Gc(t,"connected",e),e===!1&&GT(t)}function jT(t,e){ct(e,(n,r)=>{Gc(t,n,r)})}function Gc(t,e,n){const r=new Ie("/.info/"+e),i=Ye(n);t.infoData_.updateSnapshot(r,i);const s=bs(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function Yc(t){return t.nextWriteId_++}function VT(t,e){const n=bT(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(r=>{const i=Ye(r).withIndex(e._queryParams.getIndex()),s=bs(t.serverSyncTree_,e._path,i);return Kc(t.eventQueue_,e._path,s),Promise.resolve(i)},r=>(ws(t,"get for query "+Xe(e)+" failed: "+r),Promise.reject(new Error(r))))}function qT(t,e,n,r,i){ws(t,"set",{path:e.toString(),value:n,priority:r});const s=oa(t),o=Ye(n,r),a=Lc(t.serverSyncTree_,e),l=Cg(o,a,s),c=Yc(t),u=_g(t.serverSyncTree_,e,l,c,!0);sa(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const p=h==="ok";p||vt("set at "+e+" failed: "+h);const C=xn(t.serverSyncTree_,c,!p);Ut(t.eventQueue_,e,C),El(t,i,h,_)});const d=Jc(t,e);Xr(t,d),Ut(t.eventQueue_,d,[])}function KT(t,e,n,r){ws(t,"update",{path:e.toString(),value:n});let i=!0;const s=oa(t),o={};if(ct(n,(a,l)=>{i=!1,o[a]=wg(Ue(e,a),Ye(l),t.serverSyncTree_,s)}),i)ot("update() called with empty data.  Don't do anything."),El(t,r,"ok",void 0);else{const a=Yc(t),l=fT(t.serverSyncTree_,e,o,a);sa(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||vt("update at "+e+" failed: "+c);const h=xn(t.serverSyncTree_,a,!d),_=h.length>0?Xr(t,e):e;Ut(t.eventQueue_,_,h),El(t,r,c,u)}),ct(n,c=>{const u=Jc(t,Ue(e,c));Xr(t,u)}),Ut(t.eventQueue_,e,[])}}function GT(t){ws(t,"onDisconnectEvents");const e=oa(t),n=yo();gl(t.onDisconnect_,be(),(i,s)=>{const o=wg(i,s,t.serverSyncTree_,e);ng(n,i,o)});let r=[];gl(n,be(),(i,s)=>{r=r.concat(bs(t.serverSyncTree_,i,s));const o=Jc(t,i);Xr(t,o)}),t.onDisconnect_=yo(),Ut(t.eventQueue_,be(),r)}function YT(t,e,n){let r;ae(e._path)===".info"?r=Vd(t.infoSyncTree_,e,n):r=Vd(t.serverSyncTree_,e,n),Kc(t.eventQueue_,e._path,r)}function Yd(t,e,n){let r;ae(e._path)===".info"?r=wl(t.infoSyncTree_,e,n):r=wl(t.serverSyncTree_,e,n),Kc(t.eventQueue_,e._path,r)}function XT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(UT)}function ws(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function El(t,e,n,r){e&&ai(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function kg(t,e,n){return Lc(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function Xc(t,e=t.transactionQueueTree_){if(e||aa(t,e),ci(e)){const n=Og(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&JT(t,ys(e),n)}else Tg(e)&&ra(e,n=>{Xc(t,n)})}function JT(t,e,n){const r=n.map(c=>c.currentWriteId),i=kg(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=_t(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ws(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(xn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();aa(t,jc(t.transactionQueueTree_,e)),Xc(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ai(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{vt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Xr(t,e)}},o)}function Xr(t,e){const n=Ng(t,e),r=ys(n),i=Og(t,n);return QT(t,i,r),r}function QT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=_t(n,l.path);let u=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(xn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HT)u=!0,d="maxretry",i=i.concat(xn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=kg(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){ia("transaction failed: Data returned ",_,l.path);let p=Ye(_);typeof _=="object"&&_!=null&&Xt(_,".priority")||(p=p.updatePriority(h.getPriority()));const b=l.currentWriteId,k=oa(t),$=Cg(p,h,k);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=$,l.currentWriteId=Yc(t),o.splice(o.indexOf(b),1),i=i.concat(_g(t.serverSyncTree_,l.path,$,l.currentWriteId,l.applyLocally)),i=i.concat(xn(t.serverSyncTree_,b,!0))}else u=!0,d="nodata",i=i.concat(xn(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}aa(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ai(r[a]);Xc(t,t.transactionQueueTree_)}function Ng(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&ci(r)===void 0;)r=jc(r,n),e=ke(e),n=ae(e);return r}function Og(t,e){const n=[];return Mg(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Mg(t,e,n){const r=ci(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ra(e,i=>{Mg(t,i,n)})}function aa(t,e){const n=ci(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Eg(e,n.length>0?n:void 0)}ra(e,r=>{aa(t,r)})}function Jc(t,e){const n=ys(Ng(t,e)),r=jc(t.transactionQueueTree_,e);return RT(r,i=>{Da(t,i)}),Da(t,r),xg(r,i=>{Da(t,i)}),n}function Da(t,e){const n=ci(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Eg(e,void 0):n.length=s+1,Ut(t.eventQueue_,ys(e),i);for(let o=0;o<r.length;o++)ai(r[o])}}/**
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
 */function ZT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ex(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Xd=function(t,e){const n=tx(t),r=n.namespace;n.domain==="firebase.com"&&fr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||oC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ie(n.pathString)}},tx=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=ZT(t.substring(u,d)));const h=ex(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Dg{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class Lg{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Qc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return he(this._path)?null:Ec(this._path)}get ref(){return new Jt(this._repo,this._path)}get _queryIdentifier(){const e=Md(this._queryParams),n=vc(e);return n==="{}"?"default":n}get _queryObject(){return Md(this._queryParams)}isEqual(e){if(e=Ht(e),!(e instanceof Qc))return!1;const n=this._repo===e._repo,r=Tc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+VC(this._path)}}class Jt extends Qc{constructor(e,n){super(e,n,new Rc,!1)}get parent(){const e=Gp(this._path);return e===null?null:new Jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ie(e),r=Qr(this.ref,e);return new Jr(this._node.getChild(n),r,He)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Jr(i,Qr(this.ref,r),He)))}hasChild(e){const n=new Ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function nt(t,e){return t=Ht(t),t._checkNotDeleted("ref"),e!==void 0?Qr(t._root,e):t._root}function Qr(t,e){return t=Ht(t),ae(t._path)===null?LT("child","path",e,!1):Rg("child","path",e,!1),new Jt(t._repo,Ue(t._path,e))}function la(t,e){t=Ht(t),qc("push",t._path),Sg("push",e,t._path,!0);const n=Ag(t._repo),r=pE(n),i=Qr(t,r),s=Qr(t,r);let o;return e!=null?o=Zc(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Fg(t){return qc("remove",t._path),Zc(t,null)}function Zc(t,e){t=Ht(t),qc("set",t._path),Sg("set",e,t._path,!1);const n=new us;return qT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ui(t,e){DT("update",e,t._path,!1);const n=new us;return KT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function eu(t){return t=Ht(t),VT(t._repo,t).then(e=>new Jr(e,new Jt(t._repo,t._path),t._queryParams.getIndex()))}class tu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Dg("value",this,new Jr(e.snapshotNode,new Jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lg(this,e,n):null}matches(e){return e instanceof tu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class nu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lg(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=Qr(new Jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Dg(e.type,this,new Jr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof nu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function rx(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{Yd(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new nx(n,s||void 0),a=e==="value"?new tu(o):new nu(e,o);return YT(t._repo,t,a),()=>Yd(t._repo,t,a)}function Po(t,e,n,r){return rx(t,"value",e,n,r)}sT(Jt);uT(Jt);/**
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
 */const ix="FIREBASE_DATABASE_EMULATOR_HOST",Tl={};let sx=!1;function ox(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||fr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Xd(s,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[ix]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Xd(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new hl(hl.OWNER):new _C(t.name,t.options,e);FT("Invalid Firebase Database URL",o),he(o.path)||fr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=lx(a,t,u,new mC(t.name,n));return new cx(d,t)}function ax(t,e){const n=Tl[e];(!n||n[t.key]!==t)&&fr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),XT(t),delete n[t.key]}function lx(t,e,n,r){let i=Tl[e.name];i||(i={},Tl[e.name]=i);let s=i[t.toURLString()];return s&&fr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new zT(t,sx,n,r),i[t.toURLString()]=s,s}class cx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(WT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jt(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ax(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fr("Cannot call "+e+" on a deleted database.")}}function ux(t=Gf(),e){return lc(t,"database").getImmediate({identifier:e})}/**
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
 */function dx(t){tC(hs),Vr(new ur("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return ox(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Rn(md,_d,t),Rn(md,_d,"esm2017")}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dx();const hx={apiKey:"AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",authDomain:"quick-retro.firebaseapp.com",projectId:"quick-retro",storageBucket:"quick-retro.appspot.com",messagingSenderId:"293134428599",appId:"1:293134428599:web:bad71d4fedbda8080ce032",databaseURL:"https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app"},fx=n0(hx),rt=ux(fx),Ms=un({});function px(t){if(!t)return Ms;const e=nt(rt,`users/${t}/boards`),n={};Po(e,r,s);function r(o){const a=o.exists()?Object.values(o.val()):[];for(const l of a){if(n[l])continue;const c=Po(nt(rt,`boards/${l}`),i.bind(null,l),s);n[l]=c}for(const l in n)a.includes(l)||(n[l](),delete n[l],delete Ms[l])}function i(o,a){Ms[o]=a.val()}function s(o){console.error(o)}return Ms}function gx(t){const e=un({loading:!0});Po(nt(rt,`boards/${t}`),r=>{e.exists=r.exists(),e.loading=!1,e.exists&&Object.entries(r.val()).forEach(([i,s])=>{e[i]=s})},n);function n(r){console.log(r),e.exists=!1,e.loading=!1}return e}function mx(t,e){const n=nt(rt,`boards/${t}`);ui(n,{cardsHidden:e})}function _x(t,e){const n=nt(rt,`boards/${t}`);ui(n,{title:e})}function vx(t,e){const n=nt(rt,`boards/${t}/timer`);ui(n,{isRunning:!0,endTime:e})}function bx(t,e){const n=nt(rt,`boards/${t}/timer`);ui(n,{isRunning:!1,timeRemaining:e})}function yx(t,e){const n=nt(rt,`boards/${t}/timer`);ui(n,{isRunning:!1,timeRemaining:e})}function wx(t){const e=un({isRunning:!1,timeRemaining:420,endTime:0});return Po(nt(rt,`boards/${t}/timer`),n=>{if(n.exists()){const r=n.val();e.isRunning=r.isRunning||!1,r.isRunning&&r.endTime?(e.endTime=r.endTime,e.timeRemaining=Math.max(0,Math.floor((r.endTime-Date.now())/1e3))):r.timeRemaining!==void 0&&(e.timeRemaining=r.timeRemaining)}},n=>{console.error("Error fetching timer data:",n)}),e}function Cx(t,e,n){const r=nt(rt,`boards/${t}/columns/${e}/cards`);la(r,n)}function $g(t,e,n){Fg(nt(rt,`boards/${t}/columns/${e}/cards/${n}`))}async function Ex(t,e,n,r){const i=nt(rt,`boards/${t}/columns/${e}/cards/${n}`),s=nt(rt,`boards/${t}/columns/${r}/cards`),o=await eu(i);la(s,o.val()),Fg(i)}function Jd(t,e,n,r){ui(nt(rt,`boards/${t}/columns/${e}/cards/${n}`),r)}async function Tx(t,e){const n=nt(rt,"boards"),r=await la(n,{author:t,cardsHidden:!0,title:"",columns:e.columns.map(i=>pu(fu({},i),{cards:{}}))});if(!!r.key)return await Bg(t,r.key),r.key}async function xx(t,e){const n=nt(rt,`users/${t}/boards`),r=await eu(n);if(!r.exists())return;const i=Object.fromEntries(Object.entries(r.val()).filter(([s,o])=>e!==o));await Zc(n,i)}async function Bg(t,e){const n=await eu(nt(rt,`users/${t}/boards`));if((n.exists()?Object.values(n.val()):[]).includes(e))return;const i=nt(rt,`users/${t}/boards`);await la(i,e)}function Ix(){const t=un({}),e=eC();return U0(e).catch(n=>{console.error(n)}),j0(e,n=>{n&&Object.entries(n).forEach(([r,i])=>{t[r]=i})}),t}const Sx={class:"inline-flex min-w-[180px] items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-[1px] hover:border-cyan-300/60 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"},Xs=Fe({props:{text:null},setup(t){return(e,n)=>(le(),De("button",Sx,sn(t.text),1))}});function Rx(t,e){const n=t.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+t+" is not a valid value.")}return e===void 0?r:r[e]}var Qd={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"};const di="^\\s*",hi="\\s*$",Qn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Zn="([0-9A-Fa-f])",er="([0-9A-Fa-f]{2})",Px=new RegExp(`${di}rgb\\s*\\(${Qn},${Qn},${Qn}\\)${hi}`),Ax=new RegExp(`${di}rgba\\s*\\(${Qn},${Qn},${Qn},${Qn}\\)${hi}`),kx=new RegExp(`${di}#${Zn}${Zn}${Zn}${hi}`),Nx=new RegExp(`${di}#${er}${er}${er}${hi}`),Ox=new RegExp(`${di}#${Zn}${Zn}${Zn}${Zn}${hi}`),Mx=new RegExp(`${di}#${er}${er}${er}${er}${hi}`);function yt(t){return parseInt(t,16)}function _r(t){try{let e;if(e=Nx.exec(t))return[yt(e[1]),yt(e[2]),yt(e[3]),1];if(e=Px.exec(t))return[ut(e[1]),ut(e[5]),ut(e[9]),1];if(e=Ax.exec(t))return[ut(e[1]),ut(e[5]),ut(e[9]),Hi(e[13])];if(e=kx.exec(t))return[yt(e[1]+e[1]),yt(e[2]+e[2]),yt(e[3]+e[3]),1];if(e=Mx.exec(t))return[yt(e[1]),yt(e[2]),yt(e[3]),Hi(yt(e[4])/255)];if(e=Ox.exec(t))return[yt(e[1]+e[1]),yt(e[2]+e[2]),yt(e[3]+e[3]),Hi(yt(e[4]+e[4])/255)];if(t in Qd)return _r(Qd[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(e){throw e}}function Dx(t){return t>1?1:t<0?0:t}function xl(t,e,n,r){return`rgba(${ut(t)}, ${ut(e)}, ${ut(n)}, ${Dx(r)})`}function La(t,e,n,r,i){return ut((t*e*(1-r)+n*r)/i)}function Lx(t,e){Array.isArray(t)||(t=_r(t)),Array.isArray(e)||(e=_r(e));const n=t[3],r=e[3],i=Hi(n+r-n*r);return xl(La(t[0],n,e[0],r,i),La(t[1],n,e[1],r,i),La(t[2],n,e[2],r,i),i)}function Fa(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:_r(t);return e.alpha?xl(n,r,i,e.alpha):xl(n,r,i,s)}function Ds(t,e){const[n,r,i,s=1]=Array.isArray(t)?t:_r(t),{lightness:o=1,alpha:a=1}=e;return Fx([n*o,r*o,i*o,s*a])}function Hi(t){const e=Math.round(Number(t)*100)/100;return e>1?1:e<0?0:e}function ut(t){const e=Math.round(Number(t));return e>255?255:e<0?0:e}function Fx(t){const[e,n,r]=t;return 3 in t?`rgba(${ut(e)}, ${ut(n)}, ${ut(r)}, ${Hi(t[3])})`:`rgba(${ut(e)}, ${ut(n)}, ${ut(r)}, 1)`}function gt(t,...e){if(Array.isArray(t))t.forEach(n=>gt(n,...e));else return t(...e)}function $x(t,e){throw new Error(`[naive/${t}]: ${e}`)}function ca(t){return t.some(e=>Gi(e)?!(e.type===St||e.type===je&&!ca(e.children)):!0)?t:null}function Js(t,e){return t&&ca(t())||e()}function Bx(t,e,n){return t&&ca(t(e))||n(e)}function Ls(t,e){const n=t&&ca(t());return e(n||null)}function Ux(t){let e=0;for(let n=0;n<t.length;++n)t[n]==="&"&&++e;return e}const Ug=/\s*,(?![^(]*\))\s*/g,Hx=/\s+/g;function zx(t,e){const n=[];return e.split(Ug).forEach(r=>{let i=Ux(r);if(i){if(i===1){t.forEach(o=>{n.push(r.replace("&",o))});return}}else{t.forEach(o=>{n.push((o&&o+" ")+r)});return}let s=[r];for(;i--;){const o=[];s.forEach(a=>{t.forEach(l=>{o.push(a.replace("&",l))})}),s=o}s.forEach(o=>n.push(o))}),n}function Wx(t,e){const n=[];return e.split(Ug).forEach(r=>{t.forEach(i=>{n.push((i&&i+" ")+r)})}),n}function jx(t){let e=[""];return t.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?e=zx(e,n):e=Wx(e,n))}),e.join(", ").replace(Hx," ")}function Zd(t){if(!t)return;const e=t.parentElement;e&&e.removeChild(t)}function ua(t){return document.querySelector(`style[cssr-id="${t}"]`)}function Vx(t){const e=document.createElement("style");return e.setAttribute("cssr-id",t),e}function Fs(t){return t?/^\s*@(s|m)/.test(t):!1}const qx=/[A-Z]/g;function Hg(t){return t.replace(qx,e=>"-"+e.toLowerCase())}function Kx(t,e="  "){return typeof t=="object"&&t!==null?` {
`+Object.entries(t).map(n=>e+`  ${Hg(n[0])}: ${n[1]};`).join(`
`)+`
`+e+"}":`: ${t};`}function Gx(t,e,n){return typeof t=="function"?t({context:e.context,props:n}):t}function eh(t,e,n,r){if(!e)return"";const i=Gx(e,n,r);if(!i)return"";if(typeof i=="string")return`${t} {
${i}
}`;const s=Object.keys(i);if(s.length===0)return n.config.keepEmptyBlock?t+` {
}`:"";const o=t?[t+" {"]:[];return s.forEach(a=>{const l=i[a];if(a==="raw"){o.push(`
`+l+`
`);return}a=Hg(a),l!=null&&o.push(`  ${a}${Kx(l)}`)}),t&&o.push("}"),o.join(`
`)}function Il(t,e,n){!t||t.forEach(r=>{if(Array.isArray(r))Il(r,e,n);else if(typeof r=="function"){const i=r(e);Array.isArray(i)?Il(i,e,n):i&&n(i)}else r&&n(r)})}function zg(t,e,n,r,i,s){const o=t.$;let a="";if(!o||typeof o=="string")Fs(o)?a=o:e.push(o);else if(typeof o=="function"){const u=o({context:r.context,props:i});Fs(u)?a=u:e.push(u)}else if(o.before&&o.before(r.context),!o.$||typeof o.$=="string")Fs(o.$)?a=o.$:e.push(o.$);else if(o.$){const u=o.$({context:r.context,props:i});Fs(u)?a=u:e.push(u)}const l=jx(e),c=eh(l,t.props,r,i);a?(n.push(`${a} {`),s&&c&&s.insertRule(`${a} {
${c}
}
`)):(s&&c&&s.insertRule(c),!s&&c.length&&n.push(c)),t.children&&Il(t.children,{context:r.context,props:i},u=>{if(typeof u=="string"){const d=eh(l,{raw:u},r,i);s?s.insertRule(d):n.push(d)}else zg(u,e,n,r,i,s)}),e.pop(),a&&n.push("}"),o&&o.after&&o.after(r.context)}function Wg(t,e,n,r=!1){const i=[];return zg(t,[],i,e,n,r?t.instance.__styleSheet:void 0),r?"":i.join(`

`)}function Sl(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function Yx(t,e,n){const{els:r}=e;if(n===void 0)r.forEach(Zd),e.els=[];else{const i=ua(n);i&&r.includes(i)&&(Zd(i),e.els=r.filter(s=>s!==i))}}function th(t,e){t.push(e)}function Xx(t,e,n,r,i,s,o,a,l){if(s&&!l){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[n]||(h[n]=!0,Wg(e,t,r,s));return}let c;if(n===void 0&&(c=e.render(r),n=Sl(c)),l){l.adapter(n,c!=null?c:e.render(r));return}const u=ua(n);if(u!==null&&!o)return u;const d=u!=null?u:Vx(n);if(c===void 0&&(c=e.render(r)),d.textContent=c,u!==null)return u;if(a){const h=document.head.querySelector(`meta[name="${a}"]`);if(h)return document.head.insertBefore(d,h),th(e.els,d),d}return i?document.head.insertBefore(d,document.head.querySelector("style, link")):document.head.appendChild(d),th(e.els,d),d}function Jx(t){return Wg(this,this.instance,t)}function Qx(t={}){const{id:e,ssr:n,props:r,head:i=!1,silent:s=!1,force:o=!1,anchorMetaName:a}=t;return Xx(this.instance,this,e,r,i,s,o,a,n)}function Zx(t={}){const{id:e}=t;Yx(this.instance,this,e)}const $s=function(t,e,n,r){return{instance:t,$:e,props:n,children:r,els:[],render:Jx,mount:Qx,unmount:Zx}},eI=function(t,e,n,r){return Array.isArray(e)?$s(t,{$:null},null,e):Array.isArray(n)?$s(t,e,null,n):Array.isArray(r)?$s(t,e,n,r):$s(t,e,n,null)};function tI(t={}){let e=null;const n={c:(...r)=>eI(n,...r),use:(r,...i)=>r.install(n,...i),find:ua,context:{},config:t,get __styleSheet(){if(!e){const r=document.createElement("style");return document.head.appendChild(r),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return n}function nI(t,e){if(t===void 0)return!1;if(e){const{context:{ids:n}}=e;return n.has(t)}return ua(t)!==null}function rI(t){let e=".",n="__",r="--",i;if(t){let p=t.blockPrefix;p&&(e=p),p=t.elementPrefix,p&&(n=p),p=t.modifierPrefix,p&&(r=p)}const s={install(p){i=p.c;const C=p.context;C.bem={},C.bem.b=null,C.bem.els=null}};function o(p){let C,b;return{before(k){C=k.bem.b,b=k.bem.els,k.bem.els=null},after(k){k.bem.b=C,k.bem.els=b},$({context:k,props:$}){return p=typeof p=="string"?p:p({context:k,props:$}),k.bem.b=p,`${($==null?void 0:$.bPrefix)||e}${k.bem.b}`}}}function a(p){let C;return{before(b){C=b.bem.els},after(b){b.bem.els=C},$({context:b,props:k}){return p=typeof p=="string"?p:p({context:b,props:k}),b.bem.els=p.split(",").map($=>$.trim()),b.bem.els.map($=>`${(k==null?void 0:k.bPrefix)||e}${b.bem.b}${n}${$}`).join(", ")}}}function l(p){return{$({context:C,props:b}){p=typeof p=="string"?p:p({context:C,props:b});const k=p.split(",").map(H=>H.trim());function $(H){return k.map(q=>`&${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${H!==void 0?`${n}${H}`:""}${r}${q}`).join(", ")}const B=C.bem.els;return B!==null?$(B[0]):$()}}}function c(p){return{$({context:C,props:b}){p=typeof p=="string"?p:p({context:C,props:b});const k=C.bem.els;return`&:not(${(b==null?void 0:b.bPrefix)||e}${C.bem.b}${k!==null&&k.length>0?`${n}${k[0]}`:""}${r}${p})`}}}return Object.assign(s,{cB:(...p)=>i(o(p[0]),p[1],p[2]),cE:(...p)=>i(a(p[0]),p[1],p[2]),cM:(...p)=>i(l(p[0]),p[1],p[2]),cNotM:(...p)=>i(c(p[0]),p[1],p[2])}),s}function Qs(t,e){return t+(e==="default"?"":e.replace(/^[a-z]/,n=>n.toUpperCase()))}Qs("abc","def");const iI="n",sI=`.${iI}-`,oI="__",aI="--",jg=tI(),Vg=rI({blockPrefix:sI,elementPrefix:oI,modifierPrefix:aI});jg.use(Vg);const{c:te,find:zk}=jg,{cB:Ne,cE:V,cM:Et,cNotM:Ii}=Vg;function nh(t){const e=se(t),n=de(e.value);return qt(e,r=>{n.value=r}),typeof t=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){t.set(r)}}}const lI={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function cI(t,e,n){if(t==="mousemoveoutside"){const r=i=>{e.contains(i.target)||n(i)};return{mousemove:r,touchstart:r}}else if(t==="clickoutside"){let r=!1;const i=o=>{r=!e.contains(o.target)},s=o=>{!r||e.contains(o.target)||n(o)};return{mousedown:i,mouseup:s,touchstart:i,touchend:s}}return console.error(`[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`),{}}function qg(t,e,n){const r=lI[t];let i=r.get(e);i===void 0&&r.set(e,i=new WeakMap);let s=i.get(n);return s===void 0&&i.set(n,s=cI(t,e,n)),s}function uI(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=qg(t,e,n);return Object.keys(i).forEach(s=>{tr(s,document,i[s],r)}),!0}return!1}function dI(t,e,n,r){if(t==="mousemoveoutside"||t==="clickoutside"){const i=qg(t,e,n);return Object.keys(i).forEach(s=>{Qt(s,document,i[s],r)}),!0}return!1}function hI(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const t=new WeakMap,e=new WeakMap;function n(){t.set(this,!0)}function r(){t.set(this,!0),e.set(this,!0)}function i(E,I,D){const K=E[I];return E[I]=function(){return D.apply(E,arguments),K.apply(E,arguments)},E}function s(E,I){E[I]=Event.prototype[I]}const o=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var E;return(E=o.get(this))!==null&&E!==void 0?E:null}function c(E,I){a!==void 0&&Object.defineProperty(E,"currentTarget",{configurable:!0,enumerable:!0,get:I!=null?I:a.get})}const u={bubble:{},capture:{}},d={};function h(){const E=function(I){const{type:D,eventPhase:K,target:Z,bubbles:L}=I;if(K===2)return;const re=K===1?"capture":"bubble";let Ce=Z;const Se=[];for(;Ce===null&&(Ce=window),Se.push(Ce),Ce!==window;)Ce=Ce.parentNode||null;const fe=u.capture[D],ge=u.bubble[D];if(i(I,"stopPropagation",n),i(I,"stopImmediatePropagation",r),c(I,l),re==="capture"){if(fe===void 0)return;for(let ie=Se.length-1;ie>=0&&!t.has(I);--ie){const ze=Se[ie],bt=fe.get(ze);if(bt!==void 0){o.set(I,ze);for(const $e of bt){if(e.has(I))break;$e(I)}}if(ie===0&&!L&&ge!==void 0){const $e=ge.get(ze);if($e!==void 0)for(const ht of $e){if(e.has(I))break;ht(I)}}}}else if(re==="bubble"){if(ge===void 0)return;for(let ie=0;ie<Se.length&&!t.has(I);++ie){const ze=Se[ie],bt=ge.get(ze);if(bt!==void 0){o.set(I,ze);for(const $e of bt){if(e.has(I))break;$e(I)}}}}s(I,"stopPropagation"),s(I,"stopImmediatePropagation"),c(I)};return E.displayName="evtdUnifiedHandler",E}function _(){const E=function(I){const{type:D,eventPhase:K}=I;if(K!==2)return;const Z=d[D];Z!==void 0&&Z.forEach(L=>L(I))};return E.displayName="evtdUnifiedWindowEventHandler",E}const p=h(),C=_();function b(E,I){const D=u[E];return D[I]===void 0&&(D[I]=new Map,window.addEventListener(I,p,E==="capture")),D[I]}function k(E){return d[E]===void 0&&(d[E]=new Set,window.addEventListener(E,C)),d[E]}function $(E,I){let D=E.get(I);return D===void 0&&E.set(I,D=new Set),D}function B(E,I,D,K){const Z=u[I][D];if(Z!==void 0){const L=Z.get(E);if(L!==void 0&&L.has(K))return!0}return!1}function H(E,I){const D=d[E];return!!(D!==void 0&&D.has(I))}function q(E,I,D,K){let Z;if(typeof K=="object"&&K.once===!0?Z=fe=>{ve(E,I,Z,K),D(fe)}:Z=D,uI(E,I,Z,K))return;const re=K===!0||typeof K=="object"&&K.capture===!0?"capture":"bubble",Ce=b(re,E),Se=$(Ce,I);if(Se.has(Z)||Se.add(Z),I===window){const fe=k(E);fe.has(Z)||fe.add(Z)}}function ve(E,I,D,K){if(dI(E,I,D,K))return;const L=K===!0||typeof K=="object"&&K.capture===!0,re=L?"capture":"bubble",Ce=b(re,E),Se=$(Ce,I);if(I===window&&!B(I,L?"bubble":"capture",E,D)&&H(E,D)){const ge=d[E];ge.delete(D),ge.size===0&&(window.removeEventListener(E,C),d[E]=void 0)}Se.has(D)&&Se.delete(D),Se.size===0&&Ce.delete(I),Ce.size===0&&(window.removeEventListener(E,p,re==="capture"),u[re][E]=void 0)}return{on:q,off:ve}}const{on:tr,off:Qt}=hI();function fI(t,e){return qt(t,n=>{n!==void 0&&(e.value=n)}),se(()=>t.value===void 0?e.value:t.value)}function pI(){const t=de(!1);return ri(()=>{t.value=!0}),Kl(t)}const gI=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function mI(){return gI}const Kg=Symbol("@css-render/vue3-ssr");function _I(t,e){return`<style cssr-id="${t}">
${e}
</style>`}function vI(t,e){const n=Ve(Kg,null);if(n===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:i}=n;i.has(t)||r!==null&&(i.add(t),r.push(_I(t,e)))}function da(){const t=Ve(Kg,null);if(t!==null)return{adapter:vI,context:t}}function rh(t,e){console.error(`[vueuc/${t}]: ${e}`)}var ar=[],bI=function(){return ar.some(function(t){return t.activeTargets.length>0})},yI=function(){return ar.some(function(t){return t.skippedTargets.length>0})},ih="ResizeObserver loop completed with undelivered notifications.",wI=function(){var t;typeof ErrorEvent=="function"?t=new ErrorEvent("error",{message:ih}):(t=document.createEvent("Event"),t.initEvent("error",!1,!1),t.message=ih),window.dispatchEvent(t)},as;(function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(as||(as={}));var lr=function(t){return Object.freeze(t)},CI=function(){function t(e,n){this.inlineSize=e,this.blockSize=n,lr(this)}return t}(),Gg=function(){function t(e,n,r,i){return this.x=e,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,lr(this)}return t.prototype.toJSON=function(){var e=this,n=e.x,r=e.y,i=e.top,s=e.right,o=e.bottom,a=e.left,l=e.width,c=e.height;return{x:n,y:r,top:i,right:s,bottom:o,left:a,width:l,height:c}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),ru=function(t){return t instanceof SVGElement&&"getBBox"in t},Yg=function(t){if(ru(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,s=i.offsetWidth,o=i.offsetHeight;return!(s||o||t.getClientRects().length)},sh=function(t){var e,n;if(t instanceof Element)return!0;var r=(n=(e=t)===null||e===void 0?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},EI=function(t){switch(t.tagName){case"INPUT":if(t.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},zi=typeof window!="undefined"?window:{},Bs=new WeakMap,oh=/auto|scroll/,TI=/^tb|vertical/,xI=/msie|trident/i.test(zi.navigator&&zi.navigator.userAgent),Wt=function(t){return parseFloat(t||"0")},Br=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=!1),new CI((n?e:t)||0,(n?t:e)||0)},ah=lr({devicePixelContentBoxSize:Br(),borderBoxSize:Br(),contentBoxSize:Br(),contentRect:new Gg(0,0,0,0)}),Xg=function(t,e){if(e===void 0&&(e=!1),Bs.has(t)&&!e)return Bs.get(t);if(Yg(t))return Bs.set(t,ah),ah;var n=getComputedStyle(t),r=ru(t)&&t.ownerSVGElement&&t.getBBox(),i=!xI&&n.boxSizing==="border-box",s=TI.test(n.writingMode||""),o=!r&&oh.test(n.overflowY||""),a=!r&&oh.test(n.overflowX||""),l=r?0:Wt(n.paddingTop),c=r?0:Wt(n.paddingRight),u=r?0:Wt(n.paddingBottom),d=r?0:Wt(n.paddingLeft),h=r?0:Wt(n.borderTopWidth),_=r?0:Wt(n.borderRightWidth),p=r?0:Wt(n.borderBottomWidth),C=r?0:Wt(n.borderLeftWidth),b=d+c,k=l+u,$=C+_,B=h+p,H=a?t.offsetHeight-B-t.clientHeight:0,q=o?t.offsetWidth-$-t.clientWidth:0,ve=i?b+$:0,E=i?k+B:0,I=r?r.width:Wt(n.width)-ve-q,D=r?r.height:Wt(n.height)-E-H,K=I+b+q+$,Z=D+k+H+B,L=lr({devicePixelContentBoxSize:Br(Math.round(I*devicePixelRatio),Math.round(D*devicePixelRatio),s),borderBoxSize:Br(K,Z,s),contentBoxSize:Br(I,D,s),contentRect:new Gg(d,l,I,D)});return Bs.set(t,L),L},Jg=function(t,e,n){var r=Xg(t,n),i=r.borderBoxSize,s=r.contentBoxSize,o=r.devicePixelContentBoxSize;switch(e){case as.DEVICE_PIXEL_CONTENT_BOX:return o;case as.BORDER_BOX:return i;default:return s}},II=function(){function t(e){var n=Xg(e);this.target=e,this.contentRect=n.contentRect,this.borderBoxSize=lr([n.borderBoxSize]),this.contentBoxSize=lr([n.contentBoxSize]),this.devicePixelContentBoxSize=lr([n.devicePixelContentBoxSize])}return t}(),Qg=function(t){if(Yg(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},SI=function(){var t=1/0,e=[];ar.forEach(function(o){if(o.activeTargets.length!==0){var a=[];o.activeTargets.forEach(function(c){var u=new II(c.target),d=Qg(c.target);a.push(u),c.lastReportedSize=Jg(c.target,c.observedBox),d<t&&(t=d)}),e.push(function(){o.callback.call(o.observer,a,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var n=0,r=e;n<r.length;n++){var i=r[n];i()}return t},lh=function(t){ar.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(Qg(i.target)>t?n.activeTargets.push(i):n.skippedTargets.push(i))})})},RI=function(){var t=0;for(lh(t);bI();)t=SI(),lh(t);return yI()&&wI(),t>0},$a,Zg=[],PI=function(){return Zg.splice(0).forEach(function(t){return t()})},AI=function(t){if(!$a){var e=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return PI()}).observe(n,r),$a=function(){n.textContent=""+(e?e--:e++)}}Zg.push(t),$a()},kI=function(t){AI(function(){requestAnimationFrame(t)})},Zs=0,NI=function(){return!!Zs},OI=250,MI={attributes:!0,characterData:!0,childList:!0,subtree:!0},ch=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],uh=function(t){return t===void 0&&(t=0),Date.now()+t},Ba=!1,DI=function(){function t(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return t.prototype.run=function(e){var n=this;if(e===void 0&&(e=OI),!Ba){Ba=!0;var r=uh(e);kI(function(){var i=!1;try{i=RI()}finally{if(Ba=!1,e=r-uh(),!NI())return;i?n.run(1e3):e>0?n.run(e):n.start()}})}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var e=this,n=function(){return e.observer&&e.observer.observe(document.body,MI)};document.body?n():zi.addEventListener("DOMContentLoaded",n)},t.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),ch.forEach(function(n){return zi.addEventListener(n,e.listener,!0)}))},t.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),ch.forEach(function(n){return zi.removeEventListener(n,e.listener,!0)}),this.stopped=!0)},t}(),Rl=new DI,dh=function(t){!Zs&&t>0&&Rl.start(),Zs+=t,!Zs&&Rl.stop()},LI=function(t){return!ru(t)&&!EI(t)&&getComputedStyle(t).display==="inline"},FI=function(){function t(e,n){this.target=e,this.observedBox=n||as.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e=Jg(this.target,this.observedBox,!0);return LI(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),$I=function(){function t(e,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=n}return t}(),Us=new WeakMap,hh=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},Hs=function(){function t(){}return t.connect=function(e,n){var r=new $I(e,n);Us.set(e,r)},t.observe=function(e,n,r){var i=Us.get(e),s=i.observationTargets.length===0;hh(i.observationTargets,n)<0&&(s&&ar.push(i),i.observationTargets.push(new FI(n,r&&r.box)),dh(1),Rl.schedule())},t.unobserve=function(e,n){var r=Us.get(e),i=hh(r.observationTargets,n),s=r.observationTargets.length===1;i>=0&&(s&&ar.splice(ar.indexOf(r),1),r.observationTargets.splice(i,1),dh(-1))},t.disconnect=function(e){var n=this,r=Us.get(e);r.observationTargets.slice().forEach(function(i){return n.unobserve(e,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},t}(),BI=function(){function t(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Hs.connect(this,e)}return t.prototype.observe=function(e,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!sh(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Hs.observe(this,e,n)},t.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!sh(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Hs.unobserve(this,e)},t.prototype.disconnect=function(){Hs.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();class UI{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new BI(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const n of e){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(e,n){this.elHandlersMap.set(e,n),this.observer.observe(e)}unregisterHandler(e){!this.elHandlersMap.has(e)||(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}var fh=new UI,Pl=Fe({name:"ResizeObserver",props:{onResize:Function},setup(t){return{registered:!1,handleResize(e){const{onResize:n}=t;n!==void 0&&n(e)}}},mounted(){const t=this.$el;if(t===void 0){rh("resize-observer","$el does not exist.");return}if(t.nextElementSibling!==t.nextSibling&&t.nodeType===3&&t.nodeValue!==""){rh("resize-observer","$el can not be observed (it may be a text node).");return}t.nextElementSibling!==null&&(fh.registerHandler(t.nextElementSibling,this.handleResize),this.registered=!0)},beforeUnmount(){this.registered&&fh.unregisterHandler(this.$el.nextElementSibling)},render(){return cb(this.$slots,"default")}});const ph="n-form-item";function HI(t,{defaultSize:e="medium",mergedSize:n,mergedDisabled:r}={}){const i=Ve(ph,null);Hr(ph,null);const s=se(n?()=>n(i):()=>{const{size:l}=t;if(l)return l;if(i){const{mergedSize:c}=i;if(c.value!==void 0)return c.value}return e}),o=se(r?()=>r(i):()=>{const{disabled:l}=t;return l!==void 0?l:i?i.disabled.value:!1}),a=se(()=>{const{status:l}=t;return l||(i==null?void 0:i.mergedValidationStatus.value)});return zo(()=>{i&&i.restoreValidation()}),{mergedSizeRef:s,mergedDisabledRef:o,mergedStatusRef:a,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var zI=typeof global=="object"&&global&&global.Object===Object&&global,em=zI,WI=typeof self=="object"&&self&&self.Object===Object&&self,jI=em||WI||Function("return this")(),fi=jI,VI=fi.Symbol,Zr=VI,tm=Object.prototype,qI=tm.hasOwnProperty,KI=tm.toString,Si=Zr?Zr.toStringTag:void 0;function GI(t){var e=qI.call(t,Si),n=t[Si];try{t[Si]=void 0;var r=!0}catch{}var i=KI.call(t);return r&&(e?t[Si]=n:delete t[Si]),i}var YI=Object.prototype,XI=YI.toString;function JI(t){return XI.call(t)}var QI="[object Null]",ZI="[object Undefined]",gh=Zr?Zr.toStringTag:void 0;function Cs(t){return t==null?t===void 0?ZI:QI:gh&&gh in Object(t)?GI(t):JI(t)}function pi(t){return t!=null&&typeof t=="object"}var eS="[object Symbol]";function tS(t){return typeof t=="symbol"||pi(t)&&Cs(t)==eS}function nS(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var rS=Array.isArray,Ao=rS,iS=1/0,mh=Zr?Zr.prototype:void 0,_h=mh?mh.toString:void 0;function nm(t){if(typeof t=="string")return t;if(Ao(t))return nS(t,nm)+"";if(tS(t))return _h?_h.call(t):"";var e=t+"";return e=="0"&&1/t==-iS?"-0":e}function wr(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function rm(t){return t}var sS="[object AsyncFunction]",oS="[object Function]",aS="[object GeneratorFunction]",lS="[object Proxy]";function iu(t){if(!wr(t))return!1;var e=Cs(t);return e==oS||e==aS||e==sS||e==lS}var cS=fi["__core-js_shared__"],Ua=cS,vh=function(){var t=/[^.]+$/.exec(Ua&&Ua.keys&&Ua.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function uS(t){return!!vh&&vh in t}var dS=Function.prototype,hS=dS.toString;function fS(t){if(t!=null){try{return hS.call(t)}catch{}try{return t+""}catch{}}return""}var pS=/[\\^$.*+?()[\]{}|]/g,gS=/^\[object .+?Constructor\]$/,mS=Function.prototype,_S=Object.prototype,vS=mS.toString,bS=_S.hasOwnProperty,yS=RegExp("^"+vS.call(bS).replace(pS,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function wS(t){if(!wr(t)||uS(t))return!1;var e=iu(t)?yS:gS;return e.test(fS(t))}function CS(t,e){return t==null?void 0:t[e]}function su(t,e){var n=CS(t,e);return wS(n)?n:void 0}var bh=Object.create,ES=function(){function t(){}return function(e){if(!wr(e))return{};if(bh)return bh(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),TS=ES;function xS(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function IS(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var SS=800,RS=16,PS=Date.now;function AS(t){var e=0,n=0;return function(){var r=PS(),i=RS-(r-n);if(n=r,i>0){if(++e>=SS)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function kS(t){return function(){return t}}var NS=function(){try{var t=su(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ko=NS,OS=ko?function(t,e){return ko(t,"toString",{configurable:!0,enumerable:!1,value:kS(e),writable:!0})}:rm,MS=OS,DS=AS(MS),LS=DS,FS=9007199254740991,$S=/^(?:0|[1-9]\d*)$/;function im(t,e){var n=typeof t;return e=e==null?FS:e,!!e&&(n=="number"||n!="symbol"&&$S.test(t))&&t>-1&&t%1==0&&t<e}function ou(t,e,n){e=="__proto__"&&ko?ko(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function ha(t,e){return t===e||t!==t&&e!==e}var BS=Object.prototype,US=BS.hasOwnProperty;function HS(t,e,n){var r=t[e];(!(US.call(t,e)&&ha(r,n))||n===void 0&&!(e in t))&&ou(t,e,n)}function zS(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?ou(n,a,l):HS(n,a,l)}return n}var yh=Math.max;function WS(t,e,n){return e=yh(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=yh(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),xS(t,this,a)}}function jS(t,e){return LS(WS(t,e,rm),t+"")}var VS=9007199254740991;function sm(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=VS}function au(t){return t!=null&&sm(t.length)&&!iu(t)}function qS(t,e,n){if(!wr(n))return!1;var r=typeof e;return(r=="number"?au(n)&&im(e,n.length):r=="string"&&e in n)?ha(n[e],t):!1}function KS(t){return jS(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&qS(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var GS=Object.prototype;function om(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||GS;return t===n}function YS(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var XS="[object Arguments]";function wh(t){return pi(t)&&Cs(t)==XS}var am=Object.prototype,JS=am.hasOwnProperty,QS=am.propertyIsEnumerable,ZS=wh(function(){return arguments}())?wh:function(t){return pi(t)&&JS.call(t,"callee")&&!QS.call(t,"callee")},Al=ZS;function eR(){return!1}var lm=typeof xt=="object"&&xt&&!xt.nodeType&&xt,Ch=lm&&typeof It=="object"&&It&&!It.nodeType&&It,tR=Ch&&Ch.exports===lm,Eh=tR?fi.Buffer:void 0,nR=Eh?Eh.isBuffer:void 0,rR=nR||eR,cm=rR,iR="[object Arguments]",sR="[object Array]",oR="[object Boolean]",aR="[object Date]",lR="[object Error]",cR="[object Function]",uR="[object Map]",dR="[object Number]",hR="[object Object]",fR="[object RegExp]",pR="[object Set]",gR="[object String]",mR="[object WeakMap]",_R="[object ArrayBuffer]",vR="[object DataView]",bR="[object Float32Array]",yR="[object Float64Array]",wR="[object Int8Array]",CR="[object Int16Array]",ER="[object Int32Array]",TR="[object Uint8Array]",xR="[object Uint8ClampedArray]",IR="[object Uint16Array]",SR="[object Uint32Array]",Oe={};Oe[bR]=Oe[yR]=Oe[wR]=Oe[CR]=Oe[ER]=Oe[TR]=Oe[xR]=Oe[IR]=Oe[SR]=!0;Oe[iR]=Oe[sR]=Oe[_R]=Oe[oR]=Oe[vR]=Oe[aR]=Oe[lR]=Oe[cR]=Oe[uR]=Oe[dR]=Oe[hR]=Oe[fR]=Oe[pR]=Oe[gR]=Oe[mR]=!1;function RR(t){return pi(t)&&sm(t.length)&&!!Oe[Cs(t)]}function PR(t){return function(e){return t(e)}}var um=typeof xt=="object"&&xt&&!xt.nodeType&&xt,Wi=um&&typeof It=="object"&&It&&!It.nodeType&&It,AR=Wi&&Wi.exports===um,Ha=AR&&em.process,kR=function(){try{var t=Wi&&Wi.require&&Wi.require("util").types;return t||Ha&&Ha.binding&&Ha.binding("util")}catch{}}(),Th=kR,xh=Th&&Th.isTypedArray,NR=xh?PR(xh):RR,dm=NR,OR=Object.prototype,MR=OR.hasOwnProperty;function DR(t,e){var n=Ao(t),r=!n&&Al(t),i=!n&&!r&&cm(t),s=!n&&!r&&!i&&dm(t),o=n||r||i||s,a=o?YS(t.length,String):[],l=a.length;for(var c in t)(e||MR.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||im(c,l)))&&a.push(c);return a}function LR(t,e){return function(n){return t(e(n))}}function FR(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var $R=Object.prototype,BR=$R.hasOwnProperty;function UR(t){if(!wr(t))return FR(t);var e=om(t),n=[];for(var r in t)r=="constructor"&&(e||!BR.call(t,r))||n.push(r);return n}function hm(t){return au(t)?DR(t,!0):UR(t)}var HR=su(Object,"create"),ls=HR;function zR(){this.__data__=ls?ls(null):{},this.size=0}function WR(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var jR="__lodash_hash_undefined__",VR=Object.prototype,qR=VR.hasOwnProperty;function KR(t){var e=this.__data__;if(ls){var n=e[t];return n===jR?void 0:n}return qR.call(e,t)?e[t]:void 0}var GR=Object.prototype,YR=GR.hasOwnProperty;function XR(t){var e=this.__data__;return ls?e[t]!==void 0:YR.call(e,t)}var JR="__lodash_hash_undefined__";function QR(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ls&&e===void 0?JR:e,this}function vr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}vr.prototype.clear=zR;vr.prototype.delete=WR;vr.prototype.get=KR;vr.prototype.has=XR;vr.prototype.set=QR;function ZR(){this.__data__=[],this.size=0}function fa(t,e){for(var n=t.length;n--;)if(ha(t[n][0],e))return n;return-1}var e1=Array.prototype,t1=e1.splice;function n1(t){var e=this.__data__,n=fa(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():t1.call(e,n,1),--this.size,!0}function r1(t){var e=this.__data__,n=fa(e,t);return n<0?void 0:e[n][1]}function i1(t){return fa(this.__data__,t)>-1}function s1(t,e){var n=this.__data__,r=fa(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function hn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}hn.prototype.clear=ZR;hn.prototype.delete=n1;hn.prototype.get=r1;hn.prototype.has=i1;hn.prototype.set=s1;var o1=su(fi,"Map"),fm=o1;function a1(){this.size=0,this.__data__={hash:new vr,map:new(fm||hn),string:new vr}}function l1(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function pa(t,e){var n=t.__data__;return l1(e)?n[typeof e=="string"?"string":"hash"]:n.map}function c1(t){var e=pa(this,t).delete(t);return this.size-=e?1:0,e}function u1(t){return pa(this,t).get(t)}function d1(t){return pa(this,t).has(t)}function h1(t,e){var n=pa(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function gi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}gi.prototype.clear=a1;gi.prototype.delete=c1;gi.prototype.get=u1;gi.prototype.has=d1;gi.prototype.set=h1;function f1(t){return t==null?"":nm(t)}var p1=LR(Object.getPrototypeOf,Object),pm=p1,g1="[object Object]",m1=Function.prototype,_1=Object.prototype,gm=m1.toString,v1=_1.hasOwnProperty,b1=gm.call(Object);function y1(t){if(!pi(t)||Cs(t)!=g1)return!1;var e=pm(t);if(e===null)return!0;var n=v1.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&gm.call(n)==b1}function w1(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function C1(t,e,n){var r=t.length;return n=n===void 0?r:n,!e&&n>=r?t:w1(t,e,n)}var E1="\\ud800-\\udfff",T1="\\u0300-\\u036f",x1="\\ufe20-\\ufe2f",I1="\\u20d0-\\u20ff",S1=T1+x1+I1,R1="\\ufe0e\\ufe0f",P1="\\u200d",A1=RegExp("["+P1+E1+S1+R1+"]");function mm(t){return A1.test(t)}function k1(t){return t.split("")}var _m="\\ud800-\\udfff",N1="\\u0300-\\u036f",O1="\\ufe20-\\ufe2f",M1="\\u20d0-\\u20ff",D1=N1+O1+M1,L1="\\ufe0e\\ufe0f",F1="["+_m+"]",kl="["+D1+"]",Nl="\\ud83c[\\udffb-\\udfff]",$1="(?:"+kl+"|"+Nl+")",vm="[^"+_m+"]",bm="(?:\\ud83c[\\udde6-\\uddff]){2}",ym="[\\ud800-\\udbff][\\udc00-\\udfff]",B1="\\u200d",wm=$1+"?",Cm="["+L1+"]?",U1="(?:"+B1+"(?:"+[vm,bm,ym].join("|")+")"+Cm+wm+")*",H1=Cm+wm+U1,z1="(?:"+[vm+kl+"?",kl,bm,ym,F1].join("|")+")",W1=RegExp(Nl+"(?="+Nl+")|"+z1+H1,"g");function j1(t){return t.match(W1)||[]}function V1(t){return mm(t)?j1(t):k1(t)}function q1(t){return function(e){e=f1(e);var n=mm(e)?V1(e):void 0,r=n?n[0]:e.charAt(0),i=n?C1(n,1).join(""):e.slice(1);return r[t]()+i}}var K1=q1("toUpperCase"),G1=K1;function Y1(){this.__data__=new hn,this.size=0}function X1(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function J1(t){return this.__data__.get(t)}function Q1(t){return this.__data__.has(t)}var Z1=200;function eP(t,e){var n=this.__data__;if(n instanceof hn){var r=n.__data__;if(!fm||r.length<Z1-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new gi(r)}return n.set(t,e),this.size=n.size,this}function mi(t){var e=this.__data__=new hn(t);this.size=e.size}mi.prototype.clear=Y1;mi.prototype.delete=X1;mi.prototype.get=J1;mi.prototype.has=Q1;mi.prototype.set=eP;var Em=typeof xt=="object"&&xt&&!xt.nodeType&&xt,Ih=Em&&typeof It=="object"&&It&&!It.nodeType&&It,tP=Ih&&Ih.exports===Em,Sh=tP?fi.Buffer:void 0,Rh=Sh?Sh.allocUnsafe:void 0;function nP(t,e){if(e)return t.slice();var n=t.length,r=Rh?Rh(n):new t.constructor(n);return t.copy(r),r}var rP=fi.Uint8Array,Ph=rP;function iP(t){var e=new t.constructor(t.byteLength);return new Ph(e).set(new Ph(t)),e}function sP(t,e){var n=e?iP(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function oP(t){return typeof t.constructor=="function"&&!om(t)?TS(pm(t)):{}}function aP(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var l=o[t?a:++i];if(n(s[l],l,s)===!1)break}return e}}var lP=aP(),cP=lP;function Ol(t,e,n){(n!==void 0&&!ha(t[e],n)||n===void 0&&!(e in t))&&ou(t,e,n)}function uP(t){return pi(t)&&au(t)}function Ml(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}function dP(t){return zS(t,hm(t))}function hP(t,e,n,r,i,s,o){var a=Ml(t,n),l=Ml(e,n),c=o.get(l);if(c){Ol(t,n,c);return}var u=s?s(a,l,n+"",t,e,o):void 0,d=u===void 0;if(d){var h=Ao(l),_=!h&&cm(l),p=!h&&!_&&dm(l);u=l,h||_||p?Ao(a)?u=a:uP(a)?u=IS(a):_?(d=!1,u=nP(l,!0)):p?(d=!1,u=sP(l,!0)):u=[]:y1(l)||Al(l)?(u=a,Al(a)?u=dP(a):(!wr(a)||iu(a))&&(u=oP(l))):d=!1}d&&(o.set(l,u),i(u,l,r,s,o),o.delete(l)),Ol(t,n,u)}function Tm(t,e,n,r,i){t!==e&&cP(e,function(s,o){if(i||(i=new mi),wr(s))hP(t,e,o,n,Tm,r,i);else{var a=r?r(Ml(t,o),s,o+"",t,e,i):void 0;a===void 0&&(a=s),Ol(t,o,a)}},hm)}var fP=KS(function(t,e,n){Tm(t,e,n)}),zs=fP,ga={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"};const{fontSize:pP,fontFamily:gP,lineHeight:mP}=ga;var xm=te("body",`
 margin: 0;
 font-size: ${pP};
 font-family: ${gP};
 line-height: ${mP};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[te("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);const Es="n-config-provider",cs="naive-ui-style";function Ts(t,e,n,r,i,s){const o=da();if(n){const c=()=>{const u=s==null?void 0:s.value;n.mount({id:u===void 0?e:u+e,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:cs,ssr:o}),xm.mount({id:"n-global",head:!0,anchorMetaName:cs,ssr:o})};o?c():Ho(c)}const a=Ve(Es,null);return se(()=>{var c;const{theme:{common:u,self:d,peers:h={}}={},themeOverrides:_={},builtinThemeOverrides:p={}}=i,{common:C,peers:b}=_,{common:k=void 0,[t]:{common:$=void 0,self:B=void 0,peers:H={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:q=void 0,[t]:ve={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:E,peers:I={}}=ve,D=zs({},u||$||k||r.common,q,E,C),K=zs((c=d||B||r.self)===null||c===void 0?void 0:c(D),p,ve,_);return{common:D,self:K,peers:zs({},r.peers,H,h),peerOverrides:zs({},I,b)}})}Ts.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const _P="n";function Im(t={},e={defaultBordered:!0}){const n=Ve(Es,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:se(()=>{var r,i;const{bordered:s}=t;return s!==void 0?s:(i=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:e.defaultBordered)!==null&&i!==void 0?i:!0}),mergedClsPrefixRef:se(()=>(n==null?void 0:n.mergedClsPrefixRef.value)||_P),namespaceRef:se(()=>n==null?void 0:n.mergedNamespaceRef.value)}}const vP={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)"}};var bP=vP;function za(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}function Ri(t){return function(e,n){var r=n||{},i=r.context?String(r.context):"standalone",s;if(i==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=r.width?String(r.width):o;s=t.formattingValues[a]||t.formattingValues[o]}else{var l=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;s=t.values[c]||t.values[l]}var u=t.argumentCallback?t.argumentCallback(e):e;return s[u]}}function yP(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}function Pi(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?CP(a,function(d){return d.test(o)}):wP(a,function(d){return d.test(o)}),c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;var u=e.slice(o.length);return{value:c,rest:u}}}function wP(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function CP(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var EP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},TP=function(t,e,n){var r,i=EP[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},xP=TP,IP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},SP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},RP={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},PP={date:za({formats:IP,defaultWidth:"full"}),time:za({formats:SP,defaultWidth:"full"}),dateTime:za({formats:RP,defaultWidth:"full"})},AP=PP,kP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},NP=function(t,e,n,r){return kP[t]},OP=NP,MP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},DP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},LP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},FP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$P={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},BP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},UP=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},HP={ordinalNumber:UP,era:Ri({values:MP,defaultWidth:"wide"}),quarter:Ri({values:DP,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Ri({values:LP,defaultWidth:"wide"}),day:Ri({values:FP,defaultWidth:"wide"}),dayPeriod:Ri({values:$P,defaultWidth:"wide",formattingValues:BP,defaultFormattingWidth:"wide"})},zP=HP,WP=/^(\d+)(th|st|nd|rd)?/i,jP=/\d+/i,VP={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qP={any:[/^b/i,/^(a|c)/i]},KP={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},GP={any:[/1/i,/2/i,/3/i,/4/i]},YP={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},XP={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},JP={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},QP={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ZP={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},eA={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},tA={ordinalNumber:yP({matchPattern:WP,parsePattern:jP,valueCallback:function(t){return parseInt(t,10)}}),era:Pi({matchPatterns:VP,defaultMatchWidth:"wide",parsePatterns:qP,defaultParseWidth:"any"}),quarter:Pi({matchPatterns:KP,defaultMatchWidth:"wide",parsePatterns:GP,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Pi({matchPatterns:YP,defaultMatchWidth:"wide",parsePatterns:XP,defaultParseWidth:"any"}),day:Pi({matchPatterns:JP,defaultMatchWidth:"wide",parsePatterns:QP,defaultParseWidth:"any"}),dayPeriod:Pi({matchPatterns:ZP,defaultMatchWidth:"any",parsePatterns:eA,defaultParseWidth:"any"})},nA=tA,rA={code:"en-US",formatDistance:xP,formatLong:AP,formatRelative:OP,localize:zP,match:nA,options:{weekStartsOn:0,firstWeekContainsDate:1}},iA=rA;const sA={name:"en-US",locale:iA};var oA=sA;function aA(t){const{mergedLocaleRef:e,mergedDateLocaleRef:n}=Ve(Es,null)||{},r=se(()=>{var s,o;return(o=(s=e==null?void 0:e.value)===null||s===void 0?void 0:s[t])!==null&&o!==void 0?o:bP[t]});return{dateLocaleRef:se(()=>{var s;return(s=n==null?void 0:n.value)!==null&&s!==void 0?s:oA}),localeRef:r}}function lu(t,e,n){if(!e)return;const r=da(),i=()=>{const s=n==null?void 0:n.value;e.mount({id:s===void 0?t:s+t,head:!0,anchorMetaName:cs,props:{bPrefix:s?`.${s}-`:void 0},ssr:r}),xm.mount({id:"n-global",head:!0,anchorMetaName:cs,ssr:r})};r?i():Ho(i)}function Sm(t,e,n,r){var i;n||$x("useThemeClass","cssVarsRef is not passed");const s=(i=Ve(Es,null))===null||i===void 0?void 0:i.mergedThemeHashRef,o=de(""),a=da();let l;const c=`__${t}`,u=()=>{let d=c;const h=e?e.value:void 0,_=s==null?void 0:s.value;_&&(d+="-"+_),h&&(d+="-"+h);const{themeOverrides:p,builtinThemeOverrides:C}=r;p&&(d+="-"+Sl(JSON.stringify(p))),C&&(d+="-"+Sl(JSON.stringify(C))),o.value=d,l=()=>{const b=n.value;let k="";for(const $ in b)k+=`${$}: ${b[$]};`;te(`.${d}`,k).mount({id:d,ssr:a}),l=void 0}};return zr(()=>{u()}),{themeClass:o,onRender:()=>{l==null||l()}}}function lA(t,e){return Fe({name:G1(t),setup(){var n;const r=(n=Ve(Es,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var i;const s=(i=r==null?void 0:r.value)===null||i===void 0?void 0:i[t];return s?s():e}}})}var cA=Fe({name:"Eye",render(){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},O("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),O("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),uA=Fe({name:"EyeOff",render(){return O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},O("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),O("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),O("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),O("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),O("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),dA=Fe({name:"ChevronDown",render(){return O("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),hA=lA("clear",O("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},O("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},O("g",{fill:"currentColor","fill-rule":"nonzero"},O("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Rm=Fe({name:"BaseIconSwitchTransition",setup(t,{slots:e}){const n=pI();return()=>O(Ji,{name:"icon-switch-transition",appear:n.value},e)}}),fA=Ne("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[te("svg",{height:"1em",width:"1em"})]),cu=Fe({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(t){lu("-base-icon",fA,Lo(t,"clsPrefix"))},render(){return O("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});const{cubicBezierEaseInOut:pA}=ga;function Dl({originalTransform:t="",left:e=0,top:n=0,transition:r=`all .3s ${pA} !important`}={}){return[te("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:t+" scale(0.75)",left:e,top:n,opacity:0}),te("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:e,top:n,opacity:1}),te("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:n,transition:r})]}var gA=te([te("@keyframes loading-container-rotate",`
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
 `),Ne("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[V("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Dl()]),V("container",`
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
 `,[Dl({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),mA=Fe({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(t){lu("-base-loading",gA,Lo(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:e,strokeWidth:n,stroke:r,scale:i}=this,s=e/i;return O("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},O(Rm,null,{default:()=>this.show?O("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},O("div",{class:`${t}-base-loading__container`},O("div",{class:`${t}-base-loading__container-layer`},O("div",{class:`${t}-base-loading__container-layer-left`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),O("div",{class:`${t}-base-loading__container-layer-patch`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),O("div",{class:`${t}-base-loading__container-layer-right`},O("svg",{class:`${t}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},O("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:e-n/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e})))))):O("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}});const j={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.52",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},_A=_r(j.neutralBase),Pm=_r(j.neutralInvertBase),vA="rgba("+Pm.slice(0,3).join(", ")+", ";function Ah(t){return vA+String(t)+")"}function st(t){const e=Array.from(Pm);return e[3]=Number(t),Lx(_A,e)}const bA=Object.assign(Object.assign({name:"common"},ga),{baseColor:j.neutralBase,primaryColor:j.primaryDefault,primaryColorHover:j.primaryHover,primaryColorPressed:j.primaryActive,primaryColorSuppl:j.primarySuppl,infoColor:j.infoDefault,infoColorHover:j.infoHover,infoColorPressed:j.infoActive,infoColorSuppl:j.infoSuppl,successColor:j.successDefault,successColorHover:j.successHover,successColorPressed:j.successActive,successColorSuppl:j.successSuppl,warningColor:j.warningDefault,warningColorHover:j.warningHover,warningColorPressed:j.warningActive,warningColorSuppl:j.warningSuppl,errorColor:j.errorDefault,errorColorHover:j.errorHover,errorColorPressed:j.errorActive,errorColorSuppl:j.errorSuppl,textColorBase:j.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:st(j.alpha4),placeholderColor:st(j.alpha4),placeholderColorDisabled:st(j.alpha5),iconColor:st(j.alpha4),iconColorHover:Ds(st(j.alpha4),{lightness:.75}),iconColorPressed:Ds(st(j.alpha4),{lightness:.9}),iconColorDisabled:st(j.alpha5),opacity1:j.alpha1,opacity2:j.alpha2,opacity3:j.alpha3,opacity4:j.alpha4,opacity5:j.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeColor:st(Number(j.alphaClose)),closeColorHover:st(Number(j.alphaClose)*1.25),closeColorPressed:st(Number(j.alphaClose)*.8),closeColorDisabled:st(j.alpha4),clearColor:st(j.alpha4),clearColorHover:Ds(st(j.alpha4),{lightness:.75}),clearColorPressed:Ds(st(j.alpha4),{lightness:.9}),scrollbarColor:Ah(j.alphaScrollbar),scrollbarColorHover:Ah(j.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:st(j.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:j.neutralPopover,tableColor:j.neutralCard,cardColor:j.neutralCard,modalColor:j.neutralModal,bodyColor:j.neutralBody,tagColor:"rgb(250, 250, 252)",avatarColor:st(j.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:st(j.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:j.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"});var Am=bA;const yA=t=>{const{scrollbarColor:e,scrollbarColorHover:n}=t;return{color:e,colorHover:n}},wA={name:"Scrollbar",common:Am,self:yA};var CA=wA;const{cubicBezierEaseInOut:kh}=ga;function EA({name:t="fade-in",enterDuration:e="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=kh,leaveCubicBezier:i=kh}={}){return[te(`&.${t}-transition-enter-active`,{transition:`all ${e} ${r}!important`}),te(`&.${t}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),te(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0}),te(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`,{opacity:1})]}var TA=Ne("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[te(">",[Ne("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[te("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),te(">",[Ne("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])]),Ne("scrollbar-rail",`
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
 `,[EA(),te("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]);const xA=Object.assign(Object.assign({},Ts.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function}),IA=Fe({name:"Scrollbar",props:xA,inheritAttrs:!1,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=Im(t),r=de(null),i=de(null),s=de(null),o=de(null),a=de(null),l=de(null),c=de(null),u=de(null),d=de(null),h=de(null),_=de(null),p=de(0),C=de(0),b=de(!1),k=de(!1);let $=!1,B=!1,H,q,ve=0,E=0,I=0,D=0;const K=mI(),Z=se(()=>{const{value:x}=u,{value:F}=l,{value:Y}=h;return x===null||F===null||Y===null?0:Math.min(x,Y*x/F+t.size*1.5)}),L=se(()=>`${Z.value}px`),re=se(()=>{const{value:x}=d,{value:F}=c,{value:Y}=_;return x===null||F===null||Y===null?0:Y*x/F+t.size*1.5}),Ce=se(()=>`${re.value}px`),Se=se(()=>{const{value:x}=u,{value:F}=p,{value:Y}=l,{value:_e}=h;if(x===null||Y===null||_e===null)return 0;{const Le=Y-x;return Le?F/Le*(_e-Z.value):0}}),fe=se(()=>`${Se.value}px`),ge=se(()=>{const{value:x}=d,{value:F}=C,{value:Y}=c,{value:_e}=_;if(x===null||Y===null||_e===null)return 0;{const Le=Y-x;return Le?F/Le*(_e-re.value):0}}),ie=se(()=>`${ge.value}px`),ze=se(()=>{const{value:x}=u,{value:F}=l;return x!==null&&F!==null&&F>x}),bt=se(()=>{const{value:x}=d,{value:F}=c;return x!==null&&F!==null&&F>x}),$e=se(()=>{const{container:x}=t;return x?x():i.value}),ht=se(()=>{const{content:x}=t;return x?x():s.value}),ft=M,Cr=x=>{const{onResize:F}=t;F&&F(x),M()},_i=(x,F)=>{if(!t.scrollable)return;if(typeof x=="number"){Je(x,F!=null?F:0,0,!1,"auto");return}const{left:Y,top:_e,index:Le,elSize:we,position:Be,behavior:xe,el:Mt,debounce:pn=!0}=x;(Y!==void 0||_e!==void 0)&&Je(Y!=null?Y:0,_e!=null?_e:0,0,!1,xe),Mt!==void 0?Je(0,Mt.offsetTop,Mt.offsetHeight,pn,xe):Le!==void 0&&we!==void 0?Je(0,Le*we,we,pn,xe):Be==="bottom"?Je(0,Number.MAX_SAFE_INTEGER,0,!1,xe):Be==="top"&&Je(0,0,0,!1,xe)},vi=(x,F)=>{if(!t.scrollable)return;const{value:Y}=$e;!Y||(typeof x=="object"?Y.scrollBy(x):Y.scrollBy(x,F||0))};function Je(x,F,Y,_e,Le){const{value:we}=$e;if(!!we){if(_e){const{scrollTop:Be,offsetHeight:xe}=we;if(F>Be){F+Y<=Be+xe||we.scrollTo({left:x,top:F+Y-xe,behavior:Le});return}}we.scrollTo({left:x,top:F,behavior:Le})}}function fn(){f(),g(),M()}function Er(){At()}function At(){Fn(),$n()}function Fn(){q!==void 0&&window.clearTimeout(q),q=window.setTimeout(()=>{k.value=!1},t.duration)}function $n(){H!==void 0&&window.clearTimeout(H),H=window.setTimeout(()=>{b.value=!1},t.duration)}function f(){H!==void 0&&window.clearTimeout(H),b.value=!0}function g(){q!==void 0&&window.clearTimeout(q),k.value=!0}function v(x){const{onScroll:F}=t;F&&F(x),y()}function y(){const{value:x}=$e;x&&(p.value=x.scrollTop,C.value=x.scrollLeft)}function w(){const{value:x}=ht;x&&(l.value=x.offsetHeight,c.value=x.offsetWidth);const{value:F}=$e;F&&(u.value=F.offsetHeight,d.value=F.offsetWidth);const{value:Y}=a,{value:_e}=o;Y&&(_.value=Y.offsetWidth),_e&&(h.value=_e.offsetHeight)}function A(){const{value:x}=$e;x&&(p.value=x.scrollTop,C.value=x.scrollLeft,u.value=x.offsetHeight,d.value=x.offsetWidth,l.value=x.scrollHeight,c.value=x.scrollWidth);const{value:F}=a,{value:Y}=o;F&&(_.value=F.offsetWidth),Y&&(h.value=Y.offsetHeight)}function M(){!t.scrollable||(t.useUnifiedContainer?A():(w(),y()))}function R(x){var F;return!(!((F=r.value)===null||F===void 0)&&F.contains(x.target))}function N(x){x.preventDefault(),x.stopPropagation(),B=!0,tr("mousemove",window,T,!0),tr("mouseup",window,W,!0),E=C.value,I=x.clientX}function T(x){if(!B)return;H!==void 0&&window.clearTimeout(H),q!==void 0&&window.clearTimeout(q);const{value:F}=d,{value:Y}=c,{value:_e}=re;if(F===null||Y===null)return;const we=(x.clientX-I)*(Y-F)/(F-_e),Be=Y-F;let xe=E+we;xe=Math.min(Be,xe),xe=Math.max(xe,0);const{value:Mt}=$e;if(Mt){Mt.scrollLeft=xe;const{internalOnUpdateScrollLeft:pn}=t;pn&&pn(xe)}}function W(x){x.preventDefault(),x.stopPropagation(),Qt("mousemove",window,T,!0),Qt("mouseup",window,W,!0),B=!1,M(),R(x)&&At()}function U(x){x.preventDefault(),x.stopPropagation(),$=!0,tr("mousemove",window,z,!0),tr("mouseup",window,G,!0),ve=p.value,D=x.clientY}function z(x){if(!$)return;H!==void 0&&window.clearTimeout(H),q!==void 0&&window.clearTimeout(q);const{value:F}=u,{value:Y}=l,{value:_e}=Z;if(F===null||Y===null)return;const we=(x.clientY-D)*(Y-F)/(F-_e),Be=Y-F;let xe=ve+we;xe=Math.min(Be,xe),xe=Math.max(xe,0);const{value:Mt}=$e;Mt&&(Mt.scrollTop=xe)}function G(x){x.preventDefault(),x.stopPropagation(),Qt("mousemove",window,z,!0),Qt("mouseup",window,G,!0),$=!1,M(),R(x)&&At()}zr(()=>{const{value:x}=bt,{value:F}=ze,{value:Y}=e,{value:_e}=a,{value:Le}=o;_e&&(x?_e.classList.remove(`${Y}-scrollbar-rail--disabled`):_e.classList.add(`${Y}-scrollbar-rail--disabled`)),Le&&(F?Le.classList.remove(`${Y}-scrollbar-rail--disabled`):Le.classList.add(`${Y}-scrollbar-rail--disabled`))}),ri(()=>{t.container||M()}),zo(()=>{H!==void 0&&window.clearTimeout(H),q!==void 0&&window.clearTimeout(q),Qt("mousemove",window,z,!0),Qt("mouseup",window,G,!0)});const ue=Ts("Scrollbar","-scrollbar",TA,CA,t,e),Ee=se(()=>{const{common:{cubicBezierEaseInOut:x,scrollbarBorderRadius:F,scrollbarHeight:Y,scrollbarWidth:_e},self:{color:Le,colorHover:we}}=ue.value;return{"--n-scrollbar-bezier":x,"--n-scrollbar-color":Le,"--n-scrollbar-color-hover":we,"--n-scrollbar-border-radius":F,"--n-scrollbar-width":_e,"--n-scrollbar-height":Y}}),pe=n?Sm("scrollbar",void 0,Ee,t):void 0;return Object.assign(Object.assign({},{scrollTo:_i,scrollBy:vi,sync:M,syncUnifiedContainer:A,handleMouseEnterWrapper:fn,handleMouseLeaveWrapper:Er}),{mergedClsPrefix:e,containerScrollTop:p,wrapperRef:r,containerRef:i,contentRef:s,yRailRef:o,xRailRef:a,needYBar:ze,needXBar:bt,yBarSizePx:L,xBarSizePx:Ce,yBarTopPx:fe,xBarLeftPx:ie,isShowXBar:b,isShowYBar:k,isIos:K,handleScroll:v,handleContentResize:ft,handleContainerResize:Cr,handleYScrollMouseDown:U,handleXScrollMouseDown:N,cssVars:n?void 0:Ee,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender})},render(){var t;const{$slots:e,mergedClsPrefix:n,triggerDisplayManually:r}=this;if(!this.scrollable)return(t=e.default)===null||t===void 0?void 0:t.call(e);const i=()=>{var s,o;return(s=this.onRender)===null||s===void 0||s.call(this),O("div",Af(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(o=e.default)===null||o===void 0?void 0:o.call(e):O("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},O(Pl,{onResize:this.handleContentResize},{default:()=>O("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},e)})),O("div",{ref:"yRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--vertical`,style:this.horizontalRailStyle,"aria-hidden":!0},O(Ji,{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?O("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),O("div",{ref:"xRailRef",class:`${n}-scrollbar-rail ${n}-scrollbar-rail--horizontal`,style:this.verticalRailStyle,"aria-hidden":!0},O(Ji,{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?O("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,left:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])};return this.container?i():O(Pl,{onResize:this.handleContainerResize},{default:i})}});var SA=IA;function RA(t,e,n){if(!e)return;const r=da(),i=se(()=>{const{value:o}=e;if(!o)return;const a=o[t];if(!!a)return a}),s=()=>{zr(()=>{const{value:o}=n,a=`${o}${t}Rtl`;if(nI(a,r))return;const{value:l}=i;!l||l.style.mount({id:a,head:!0,anchorMetaName:cs,props:{bPrefix:o?`.${o}-`:void 0},ssr:r})})};return r?s():Ho(s),i}var PA=Ne("base-clear",`
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
 `,[Dl({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ll=Fe({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return lu("-base-clear",PA,Lo(t,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:t}=this;return O("div",{class:`${t}-base-clear`},O(Rm,null,{default:()=>{var e,n;return this.show?O(cu,{clsPrefix:t,key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},{default:()=>O(hA,null)}):O("div",{key:"icon",class:`${t}-base-clear__placeholder`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}))}}),AA=Fe({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:e}){return()=>{const{clsPrefix:n}=t;return O(mA,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?O(Ll,{clsPrefix:n,show:t.showClear,onClear:t.onClear},{default:()=>O(cu,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>Js(e.default,()=>[O(dA,null)])})}):null})}}}),kA={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const NA=t=>{const{textColor2:e,textColor3:n,textColorDisabled:r,primaryColor:i,primaryColorHover:s,inputColor:o,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:u,errorColor:d,errorColorHover:h,borderRadius:_,lineHeight:p,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:k,fontSizeLarge:$,heightTiny:B,heightSmall:H,heightMedium:q,heightLarge:ve,actionColor:E,clearColor:I,clearColorHover:D,clearColorPressed:K,placeholderColor:Z,placeholderColorDisabled:L,iconColor:re,iconColorDisabled:Ce,iconColorHover:Se,iconColorPressed:fe}=t;return Object.assign(Object.assign({},kA),{countTextColor:n,heightTiny:B,heightSmall:H,heightMedium:q,heightLarge:ve,fontSizeTiny:C,fontSizeSmall:b,fontSizeMedium:k,fontSizeLarge:$,lineHeight:p,lineHeightTextarea:p,borderRadius:_,iconSize:"16px",groupLabelColor:E,groupLabelTextColor:e,textColor:e,textColorDisabled:r,textDecorationColor:e,caretColor:i,placeholderColor:Z,placeholderColorDisabled:L,color:o,colorDisabled:a,colorFocus:o,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${s}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${s}`,boxShadowFocus:`0 0 0 2px ${Fa(i,{alpha:.2})}`,loadingColor:i,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${u}`,colorFocusWarning:o,borderFocusWarning:`1px solid ${u}`,boxShadowFocusWarning:`0 0 0 2px ${Fa(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${h}`,colorFocusError:o,borderFocusError:`1px solid ${h}`,boxShadowFocusError:`0 0 0 2px ${Fa(d,{alpha:.2})}`,caretColorError:d,clearColor:I,clearColorHover:D,clearColorPressed:K,iconColor:re,iconColorDisabled:Ce,iconColorHover:Se,iconColorPressed:fe,suffixTextColor:e})},OA={name:"Input",common:Am,self:NA};var MA=OA;const km="n-input";function DA(t){let e=0;for(const n of t)e++;return e}function Ws(t){return["",void 0,null].includes(t)}var Nh=Fe({name:"InputWordCount",setup(t,{slots:e}){const{mergedValueRef:n,maxlengthRef:r,mergedClsPrefixRef:i}=Ve(km),s=se(()=>{const{value:o}=n;return o===null||Array.isArray(o)?0:DA(o)});return()=>{const{value:o}=r,{value:a}=n;return O("span",{class:`${i.value}-input-word-count`},Bx(e.default,{value:a===null||Array.isArray(a)?"":a},()=>[o===void 0?s.value:`${s.value} / ${o}`]))}}}),LA=Ne("input",`
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
 `),te("&::placeholder","color: #0000;"),te("&:-webkit-autofill ~",[V("placeholder","display: none;")])]),Et("round",[Ii("textarea","border-radius: calc(var(--n-height) / 2);")]),V("placeholder",`
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
 `)]),Et("textarea",[V("placeholder","overflow: visible;")]),Ii("autosize","width: 100%;"),Et("autosize",[V("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),Ne("input-wrapper",`
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
 `)])]),Ii("textarea",[V("placeholder","white-space: nowrap;")]),V("eye",`
 transition: color .3s var(--n-bezier);
 `),Et("textarea","width: 100%;",[Ne("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),Et("resizable",[Ne("input-wrapper",`
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
 `,[Ne("icon",`
 color: var(--n-icon-color);
 `),Ne("base-icon",`
 color: var(--n-icon-color);
 `)])]),Et("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[V("border","border: var(--n-border-disabled);"),V("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),V("placeholder","color: var(--n-placeholder-color-disabled);"),V("separator","color: var(--n-text-color-disabled);",[Ne("icon",`
 color: var(--n-icon-color-disabled);
 `),Ne("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),V("suffix, prefix","color: var(--n-text-color-disabled);",[Ne("icon",`
 color: var(--n-icon-color-disabled);
 `),Ne("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Ii("disabled",[V("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[te("&:hover",`
 color: var(--n-icon-color-hover);
 `),te("&:active",`
 color: var(--n-icon-color-pressed);
 `),Ne("icon",[te("&:hover",`
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
 `,[Ne("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),Ne("base-clear",`
 font-size: var(--n-icon-size);
 `,[V("placeholder",[Ne("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),te(">",[Ne("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),Ne("base-icon",`
 font-size: var(--n-icon-size);
 `)]),Ne("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>Et(`${t}-status`,[Ii("disabled",[Ne("base-loading",`
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
 `)])])]))]);const FA=Object.assign(Object.assign({},Ts.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var $A=Fe({name:"Input",props:FA,setup(t){const{mergedClsPrefixRef:e,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Im(t),s=Ts("Input","-input",LA,MA,t,e),o=de(null),a=de(null),l=de(null),c=de(null),u=de(null),d=de(null),h=de(null),{localeRef:_}=aA("Input"),p=de(t.defaultValue),C=Lo(t,"value"),b=fI(C,p),k=HI(t),{mergedSizeRef:$,mergedDisabledRef:B,mergedStatusRef:H}=k,q=de(!1),ve=de(!1),E=de(!1),I=de(!1);let D=null;const K=se(()=>{const{placeholder:m,pair:S}=t;return S?Array.isArray(m)?m:m===void 0?["",""]:[m,m]:m===void 0?[_.value.placeholder]:[m]}),Z=se(()=>{const{value:m}=E,{value:S}=b,{value:J}=K;return!m&&(Ws(S)||Array.isArray(S)&&Ws(S[0]))&&J[0]}),L=se(()=>{const{value:m}=E,{value:S}=b,{value:J}=K;return!m&&J[1]&&(Ws(S)||Array.isArray(S)&&Ws(S[1]))}),re=nh(()=>t.internalForceFocus||q.value),Ce=nh(()=>{if(B.value||t.readonly||!t.clearable||!re.value&&!ve.value)return!1;const{value:m}=b,{value:S}=re;return t.pair?!!(Array.isArray(m)&&(m[0]||m[1]))&&(ve.value||S):!!m&&(ve.value||S)}),Se=se(()=>{const{showPasswordOn:m}=t;if(m)return m;if(t.showPasswordToggle)return"click"}),fe=de(!1),ge=se(()=>{const{textDecoration:m}=t;return m?Array.isArray(m)?m.map(S=>({textDecoration:S})):[{textDecoration:m}]:["",""]}),ie=de(void 0),ze=()=>{var m,S;if(t.type==="textarea"){const{autosize:J}=t;if(J&&(ie.value=(S=(m=h.value)===null||m===void 0?void 0:m.$el)===null||S===void 0?void 0:S.offsetWidth),!a.value||typeof J=="boolean")return;const{paddingTop:Ke,paddingBottom:Ge,lineHeight:it}=window.getComputedStyle(a.value),Bn=Number(Ke.slice(0,-2)),Un=Number(Ge.slice(0,-2)),Hn=Number(it.slice(0,-2)),{value:bi}=l;if(!bi)return;if(J.minRows){const yi=Math.max(J.minRows,1),ma=`${Bn+Un+Hn*yi}px`;bi.style.minHeight=ma}if(J.maxRows){const yi=`${Bn+Un+Hn*J.maxRows}px`;bi.style.maxHeight=yi}}},bt=se(()=>{const{maxlength:m}=t;return m===void 0?void 0:Number(m)});ri(()=>{const{value:m}=b;Array.isArray(m)||xe(m)});const $e=Nf().proxy;function ht(m){const{onUpdateValue:S,"onUpdate:value":J,onInput:Ke}=t,{nTriggerFormInput:Ge}=k;S&&gt(S,m),J&&gt(J,m),Ke&&gt(Ke,m),p.value=m,Ge()}function ft(m){const{onChange:S}=t,{nTriggerFormChange:J}=k;S&&gt(S,m),p.value=m,J()}function Cr(m){const{onBlur:S}=t,{nTriggerFormBlur:J}=k;S&&gt(S,m),J()}function _i(m){const{onFocus:S}=t,{nTriggerFormFocus:J}=k;S&&gt(S,m),J()}function vi(m){const{onClear:S}=t;S&&gt(S,m)}function Je(m){const{onInputBlur:S}=t;S&&gt(S,m)}function fn(m){const{onInputFocus:S}=t;S&&gt(S,m)}function Er(){const{onDeactivate:m}=t;m&&gt(m)}function At(){const{onActivate:m}=t;m&&gt(m)}function Fn(m){const{onClick:S}=t;S&&gt(S,m)}function $n(m){const{onWrapperFocus:S}=t;S&&gt(S,m)}function f(m){const{onWrapperBlur:S}=t;S&&gt(S,m)}function g(){E.value=!0}function v(m){E.value=!1,m.target===d.value?y(m,1):y(m,0)}function y(m,S=0,J="input"){const Ke=m.target.value;if(xe(Ke),t.type==="textarea"){const{value:it}=h;it&&it.syncUnifiedContainer()}if(D=Ke,E.value)return;const Ge=Ke;if(!t.pair)J==="input"?ht(Ge):ft(Ge);else{let{value:it}=b;Array.isArray(it)?it=[...it]:it=["",""],it[S]=Ge,J==="input"?ht(it):ft(it)}$e.$forceUpdate()}function w(m){Je(m),m.relatedTarget===o.value&&Er(),m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value)||(I.value=!1),N(m,"blur")}function A(m){fn(m),q.value=!0,I.value=!0,At(),N(m,"focus")}function M(m){t.passivelyActivated&&(f(m),N(m,"blur"))}function R(m){t.passivelyActivated&&(q.value=!0,$n(m),N(m,"focus"))}function N(m,S){m.relatedTarget!==null&&(m.relatedTarget===u.value||m.relatedTarget===d.value||m.relatedTarget===a.value||m.relatedTarget===o.value)||(S==="focus"?(_i(m),q.value=!0):S==="blur"&&(Cr(m),q.value=!1))}function T(m,S){y(m,S,"change")}function W(m){Fn(m)}function U(m){vi(m),t.pair?(ht(["",""]),ft(["",""])):(ht(""),ft(""))}function z(m){const{onMousedown:S}=t;S&&S(m);const{tagName:J}=m.target;if(J!=="INPUT"&&J!=="TEXTAREA"){if(t.resizable){const{value:Ke}=o;if(Ke){const{left:Ge,top:it,width:Bn,height:Un}=Ke.getBoundingClientRect(),Hn=14;if(Ge+Bn-Hn<m.clientX&&m.clientY<Ge+Bn&&it+Un-Hn<m.clientY&&m.clientY<it+Un)return}}m.preventDefault(),q.value||Y()}}function G(){var m;ve.value=!0,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseEnterWrapper())}function ue(){var m;ve.value=!1,t.type==="textarea"&&((m=h.value)===null||m===void 0||m.handleMouseLeaveWrapper())}function Ee(){B.value||Se.value==="click"&&(fe.value=!fe.value)}function pe(m){if(B.value)return;m.preventDefault();const S=Ke=>{Ke.preventDefault(),Qt("mouseup",document,S)};if(tr("mouseup",document,S),Se.value!=="mousedown")return;fe.value=!0;const J=()=>{fe.value=!1,Qt("mouseup",document,J)};tr("mouseup",document,J)}function Te(m){var S;switch((S=t.onKeydown)===null||S===void 0||S.call(t,m),m.code){case"Escape":F();break;case"Enter":case"NumpadEnter":x(m);break}}function x(m){var S,J;if(t.passivelyActivated){const{value:Ke}=I;if(Ke){t.internalDeactivateOnEnter&&F();return}m.preventDefault(),t.type==="textarea"?(S=a.value)===null||S===void 0||S.focus():(J=u.value)===null||J===void 0||J.focus()}}function F(){t.passivelyActivated&&(I.value=!1,of(()=>{var m;(m=o.value)===null||m===void 0||m.focus()}))}function Y(){var m,S,J;B.value||(t.passivelyActivated?(m=o.value)===null||m===void 0||m.focus():((S=a.value)===null||S===void 0||S.focus(),(J=u.value)===null||J===void 0||J.focus()))}function _e(){var m;!((m=o.value)===null||m===void 0)&&m.contains(document.activeElement)&&document.activeElement.blur()}function Le(){var m,S;(m=a.value)===null||m===void 0||m.select(),(S=u.value)===null||S===void 0||S.select()}function we(){B.value||(a.value?a.value.focus():u.value&&u.value.focus())}function Be(){const{value:m}=o;(m==null?void 0:m.contains(document.activeElement))&&m!==document.activeElement&&F()}function xe(m){const{type:S,pair:J,autosize:Ke}=t;if(!J&&Ke)if(S==="textarea"){const{value:Ge}=l;Ge&&(Ge.textContent=(m!=null?m:"")+`\r
`)}else{const{value:Ge}=c;Ge&&(m?Ge.textContent=m:Ge.innerHTML="&nbsp;")}}function Mt(){ze()}const pn=de({top:"0"});function Mm(m){var S;const{scrollTop:J}=m.target;pn.value.top=`${-J}px`,(S=h.value)===null||S===void 0||S.syncUnifiedContainer()}let xs=null;zr(()=>{const{autosize:m,type:S}=t;m&&S==="textarea"?xs=qt(b,J=>{!Array.isArray(J)&&J!==D&&xe(J)}):xs==null||xs()});let Is=null;zr(()=>{t.type==="textarea"?Is=qt(b,m=>{var S;!Array.isArray(m)&&m!==D&&((S=h.value)===null||S===void 0||S.syncUnifiedContainer())}):Is==null||Is()}),Hr(km,{mergedValueRef:b,maxlengthRef:bt,mergedClsPrefixRef:e});const Dm={wrapperElRef:o,inputElRef:u,textareaElRef:a,isCompositing:E,focus:Y,blur:_e,select:Le,deactivate:Be,activate:we},Lm=RA("Input",i,e),uu=se(()=>{const{value:m}=$,{common:{cubicBezierEaseInOut:S},self:{color:J,borderRadius:Ke,textColor:Ge,caretColor:it,caretColorError:Bn,caretColorWarning:Un,textDecorationColor:Hn,border:bi,borderDisabled:yi,borderHover:ma,borderFocus:Fm,placeholderColor:$m,placeholderColorDisabled:Bm,lineHeightTextarea:Um,colorDisabled:Hm,colorFocus:zm,textColorDisabled:Wm,boxShadowFocus:jm,iconSize:Vm,colorFocusWarning:qm,boxShadowFocusWarning:Km,borderWarning:Gm,borderFocusWarning:Ym,borderHoverWarning:Xm,colorFocusError:Jm,boxShadowFocusError:Qm,borderError:Zm,borderFocusError:e_,borderHoverError:t_,clearSize:n_,clearColor:r_,clearColorHover:i_,clearColorPressed:s_,iconColor:o_,iconColorDisabled:a_,suffixTextColor:l_,countTextColor:c_,iconColorHover:u_,iconColorPressed:d_,loadingColor:h_,loadingColorError:f_,loadingColorWarning:p_,[Qs("padding",m)]:g_,[Qs("fontSize",m)]:m_,[Qs("height",m)]:__}}=s.value,{left:v_,right:b_}=Rx(g_);return{"--n-bezier":S,"--n-count-text-color":c_,"--n-color":J,"--n-font-size":m_,"--n-border-radius":Ke,"--n-height":__,"--n-padding-left":v_,"--n-padding-right":b_,"--n-text-color":Ge,"--n-caret-color":it,"--n-text-decoration-color":Hn,"--n-border":bi,"--n-border-disabled":yi,"--n-border-hover":ma,"--n-border-focus":Fm,"--n-placeholder-color":$m,"--n-placeholder-color-disabled":Bm,"--n-icon-size":Vm,"--n-line-height-textarea":Um,"--n-color-disabled":Hm,"--n-color-focus":zm,"--n-text-color-disabled":Wm,"--n-box-shadow-focus":jm,"--n-loading-color":h_,"--n-caret-color-warning":Un,"--n-color-focus-warning":qm,"--n-box-shadow-focus-warning":Km,"--n-border-warning":Gm,"--n-border-focus-warning":Ym,"--n-border-hover-warning":Xm,"--n-loading-color-warning":p_,"--n-caret-color-error":Bn,"--n-color-focus-error":Jm,"--n-box-shadow-focus-error":Qm,"--n-border-error":Zm,"--n-border-focus-error":e_,"--n-border-hover-error":t_,"--n-loading-color-error":f_,"--n-clear-color":r_,"--n-clear-size":n_,"--n-clear-color-hover":i_,"--n-clear-color-pressed":s_,"--n-icon-color":o_,"--n-icon-color-hover":u_,"--n-icon-color-pressed":d_,"--n-icon-color-disabled":a_,"--n-suffix-text-color":l_}}),Tr=r?Sm("input",se(()=>{const{value:m}=$;return m[0]}),uu,t):void 0;return Object.assign(Object.assign({},Dm),{wrapperElRef:o,inputElRef:u,inputMirrorElRef:c,inputEl2Ref:d,textareaElRef:a,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:Lm,uncontrolledValue:p,mergedValue:b,passwordVisible:fe,mergedPlaceholder:K,showPlaceholder1:Z,showPlaceholder2:L,mergedFocus:re,isComposing:E,activated:I,showClearButton:Ce,mergedSize:$,mergedDisabled:B,textDecorationStyle:ge,mergedClsPrefix:e,mergedBordered:n,mergedShowPasswordOn:Se,placeholderStyle:pn,mergedStatus:H,textAreaScrollContainerWidth:ie,handleTextAreaScroll:Mm,handleCompositionStart:g,handleCompositionEnd:v,handleInput:y,handleInputBlur:w,handleInputFocus:A,handleWrapperBlur:M,handleWrapperFocus:R,handleMouseEnter:G,handleMouseLeave:ue,handleMouseDown:z,handleChange:T,handleClick:W,handleClear:U,handlePasswordToggleClick:Ee,handlePasswordToggleMousedown:pe,handleWrapperKeyDown:Te,handleTextAreaMirrorResize:Mt,getTextareaScrollContainer:()=>a.value,mergedTheme:s,cssVars:r?void 0:uu,themeClass:Tr==null?void 0:Tr.themeClass,onRender:Tr==null?void 0:Tr.onRender})},render(){const{mergedClsPrefix:t,mergedStatus:e,themeClass:n,onRender:r,$slots:i}=this;return r==null||r(),O("div",{ref:"wrapperElRef",class:[`${t}-input`,n,e&&`${t}-input--${e}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:this.type==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&this.type!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},O("div",{class:`${t}-input-wrapper`},Ls(i.prefix,s=>s&&O("div",{class:`${t}-input__prefix`},s)),this.type==="textarea"?O(SA,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{const{textAreaScrollContainerWidth:s}=this,o={width:this.autosize&&s&&`${s}px`};return O(je,null,O("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:`${t}-input__textarea-el`,autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],o],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?O("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,o],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?O(Pl,{onResize:this.handleTextAreaMirrorResize},{default:()=>O("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):O("div",{class:`${t}-input__input`},O("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:`${t}-input__input-el`,style:this.textDecorationStyle[0],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,0),onChange:s=>this.handleChange(s,0)})),this.showPlaceholder1?O("div",{class:`${t}-input__placeholder`},O("span",null,this.mergedPlaceholder[0])):null,this.autosize?O("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&Ls(i.suffix,s=>s||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?O("div",{class:`${t}-input__suffix`},[Ls(i.clear,o=>(this.clearable||o)&&O(Ll,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>o})),this.internalLoadingBeforeSuffix?null:s,this.loading!==void 0?O(AA,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?s:null,this.showCount&&this.type!=="textarea"?O(Nh,null,{default:o=>{var a;return(a=i.count)===null||a===void 0?void 0:a.call(i,o)}}):null,this.mergedShowPasswordOn&&this.type==="password"?O(cu,{clsPrefix:t,class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},{default:()=>this.passwordVisible?Js(i["password-visible-icon"],()=>[O(cA,null)]):Js(i["password-invisible-icon"],()=>[O(uA,null)])}):null]):null)),this.pair?O("span",{class:`${t}-input__separator`},Js(i.separator,()=>[this.separator])):null,this.pair?O("div",{class:`${t}-input-wrapper`},O("div",{class:`${t}-input__input`},O("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:s=>this.handleInput(s,1),onChange:s=>this.handleChange(s,1)}),this.showPlaceholder2?O("div",{class:`${t}-input__placeholder`},O("span",null,this.mergedPlaceholder[1])):null),Ls(i.suffix,s=>(this.clearable||s)&&O("div",{class:`${t}-input__suffix`},[this.clearable&&O(Ll,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{default:()=>{var o;return(o=i.clear)===null||o===void 0?void 0:o.call(i)}}),s]))):null,this.mergedBordered?O("div",{class:`${t}-input__border`}):null,this.mergedBordered?O("div",{class:`${t}-input__state-border`}):null,this.showCount&&this.type==="textarea"?O(Nh,null,{default:s=>{var o;return(o=i.count)===null||o===void 0?void 0:o.call(i,s)}}):null)}});const BA={class:"input-container relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-inner shadow-black/40 backdrop-blur"},Nm=Fe({props:{color:null,placeholder:null,initialValue:null,autofocus:{type:Boolean},saveOnBlur:{type:Boolean}},emits:["save","blur"],setup(t,{emit:e}){const{color:n,placeholder:r,initialValue:i="",autofocus:s=!1,saveOnBlur:o=!1}=t,a=de(),l=un({inputText:i,isFocused:!1});function c(){e("save",l.inputText),o||(l.inputText="")}function u(_){_.metaKey&&_.key==="Enter"&&(_.preventDefault(),c())}function d(){l.isFocused=!1,o&&c()}function h(){l.isFocused=!0}return s&&ri(()=>{var _,p;(p=(_=a.value).focus)==null||p.call(_)}),(_,p)=>(le(),De("div",BA,[We(Me($A),{class:"input !bg-transparent !text-white",ref_key:"inputRef",ref:a,value:Me(l).inputText,"onUpdate:value":p[0]||(p[0]=C=>Me(l).inputText=C),type:"textarea",autosize:"",placeholder:t.placeholder,onKeydown:u,onFocus:h,onBlur:d,style:Yt({"--n-border-radius":"16px","--n-color":"transparent","--n-border":"1px solid transparent","--n-border-hover":"1px solid rgba(255,255,255,0.3)","--n-placeholder-color":"rgba(255,255,255,0.55)","--n-text-color":"#fff","--n-box-shadow-focus":"0 10px 40px rgba(0,0,0,0.25)"})},null,8,["value","placeholder","style"]),Me(l).isFocused?(le(),De("button",{key:0,class:"save-button absolute bottom-3 right-3 rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-[1px] hover:opacity-100",style:Yt({backgroundColor:t.color}),onMousedown:p[1]||(p[1]=Gb(()=>{},["prevent"])),onClick:c}," save ",36)):en("",!0)]))}}),Om=Fe({props:{color:null},emits:["delete"],setup(t,{emit:e}){function n(r){r.stopPropagation(),e("delete")}return(r,i)=>(le(),De("button",{onClick:n,class:"absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-sm font-bold text-white opacity-0 shadow-md transition hover:scale-105 hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 group-hover:opacity-100",style:Yt({color:t.color||"white"})}," \u2716 ",4))}}),UA=jo("\u2716"),HA={class:"whitespace-pre-line text-base leading-6"},zA=Fe({props:{text:null,color:null,author:null,onDelete:null,id:null,boardId:null,columnId:null},setup(t){const e=t,{author:n,color:r,boardId:i,columnId:s,id:o}=e,a=un({isEditing:!1,isDragged:!1}),l=Ve("user"),c=l.uid===n,u=Ve("board");function d(){!c||(a.isEditing=!0)}function h($){!(l!=null&&l.uid)||(a.isEditing=!1,Jd(i,s,String(o),{text:$}))}function _($){var B;(B=$.dataTransfer)==null||B.setData("application/json",JSON.stringify({boardId:i,columnId:s,cardId:o,text:e.text})),setTimeout(()=>a.isDragged=!0)}function p($){a.isDragged=!1}function C($){console.log("drag over card"),$.preventDefault()}function b($){var H,q;const B=JSON.parse((q=(H=$.dataTransfer)==null?void 0:H.getData("application/json"))!=null?q:"{}");B.cardId!==o&&(Jd(i,s,String(o),{text:e.text+`

--------

`+B.text}),$g(B.boardId,B.columnId,B.cardId))}const k=rf(()=>c?"text":"default");return($,B)=>{var H;return Me(a).isEditing?(le(),Pt(Nm,{key:1,"initial-value":e.text,placeholder:"Edit card",color:Me(r),autofocus:"","save-on-blur":"",onSave:h},null,8,["initial-value","color"])):(le(),De("div",{key:0,class:kn(["card group relative w-full rounded-2xl border border-white/15 bg-white/10 p-5 text-left text-white shadow-soft backdrop-blur transition duration-150 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-xl",{"opacity-30 blur-[1px]":!c&&((H=Me(u))==null?void 0:H.cardsHidden)}]),draggable:"true",onDragstart:_,onDragend:p,onDragover:C,onClick:d,onDrop:b,style:Yt({backgroundColor:Me(r),cursor:Me(k),visibility:Me(a).isDragged?"hidden":"visible"})},[We(Om,{onDelete:B[0]||(B[0]=q=>t.onDelete(String(Me(o))))},{default:Ql(()=>[UA]),_:1}),oe("div",HA,sn(e.text),1)],38))}}}),WA={class:"flex items-center justify-between gap-2"},jA={class:"flex items-center gap-2"},VA={class:"text-lg font-semibold text-white drop-shadow-sm"},qA={class:"rounded-full bg-black/10 px-3 py-1 text-xs font-medium text-white/80"},KA={class:"flex flex-col gap-3"},GA={class:"list-none"},YA={key:0,class:"h-4"},XA=Fe({props:{title:null,color:null,boardId:null,columnId:null,cards:null},setup(t){const{columnId:e,boardId:n,color:r}=t,i=Ve("user"),s=se(()=>({backgroundColor:`${r}14`,borderColor:`${r}33`}));function o(d){d.trim()!==""&&(!(i!=null&&i.uid)||Cx(n,e,{text:d,author:i.uid}))}function a(d){$g(n,e,d)}function l(d){d.preventDefault(),d.dataTransfer&&(d.dataTransfer.dropEffect="move"),d.target&&(d.target.style.height="64px")}function c(d){d.target&&(d.target.style.height="8px")}function u(d){var _,p;d.target&&(d.target.style.height="8px");const h=JSON.parse((p=(_=d.dataTransfer)==null?void 0:_.getData("application/json"))!=null?p:"{}");Ex(n,h.columnId,h.cardId,e)}return(d,h)=>(le(),De("section",{class:"flex h-full flex-col gap-4 rounded-2xl border bg-white/5 p-4 shadow-lg shadow-black/10 backdrop-blur",style:Yt(Me(s))},[oe("div",WA,[oe("div",jA,[oe("span",{class:"inline-flex h-3 w-3 rounded-full",style:Yt({backgroundColor:t.color})},null,4),oe("h2",VA,sn(t.title),1)]),oe("span",qA,sn(Object.keys(t.cards).length),1)]),oe("div",{class:"h-2 rounded-lg border border-dashed border-white/20 bg-white/5 transition-all",onDragover:l,onDragleave:c,onDrop:u},null,32),oe("ul",KA,[(le(!0),De(je,null,Yi(t.cards,(_,p)=>(le(),De("li",GA,[(le(),Pt(zA,{id:p,key:p,author:_.author,text:_.text,color:t.color,onDelete:a,"board-id":t.boardId,"column-id":t.columnId},null,8,["id","author","text","color","board-id","column-id"])),Object.keys(t.cards).length>0?(le(),De("div",{key:0,class:"h-2 rounded-lg border border-dashed border-white/10 bg-white/5 transition-all",onDragover:l,onDragleave:c,onDrop:u},null,32)):en("",!0)]))),256))]),Object.keys(t.cards).length>0?(le(),De("div",YA)):en("",!0),We(Nm,{color:t.color,placeholder:"Add new card",onSave:o},null,8,["color"])],4))}}),JA={class:"group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white shadow-lg shadow-black/30 backdrop-blur"},QA={key:0,class:"absolute inset-0 animate-ping rounded-full bg-emerald-400/70"},ZA={class:"timer-controls flex max-h-0 flex-wrap justify-center gap-2 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100"},ek=Fe({setup(t){const n=Ve("boardId"),r=wx(n),i=de(r.timeRemaining);let s=null;qt(()=>r.isRunning,h=>{h?a():l()}),qt(()=>r.timeRemaining,h=>{i.value=h});function o(h){const _=Math.floor(h/60),p=h%60;return`${_}:${p.toString().padStart(2,"0")}`}function a(){s!==null&&clearInterval(s),s=window.setInterval(()=>{i.value>0?i.value--:l()},1e3)}function l(){s!==null&&(clearInterval(s),s=null)}function c(){const h=Date.now()+i.value*1e3;vx(n,h)}function u(){bx(n,i.value)}function d(){yx(n,420)}return ec(()=>{l()}),(h,_)=>(le(),De("div",JA,[oe("div",{class:kn(["timer-display flex items-center gap-2 rounded-xl px-3 py-2 text-lg font-semibold tracking-tight",{"text-rose-200":i.value<=60,"text-emerald-200":Me(r).isRunning}])},[oe("span",{class:kn(["relative inline-flex h-2.5 w-2.5 rounded-full",Me(r).isRunning?"bg-emerald-300":"bg-white/60"])},[Me(r).isRunning?(le(),De("span",QA)):en("",!0)],2),jo(" "+sn(o(i.value)),1)],2),oe("div",ZA,[Me(r).isRunning?(le(),Pt(Xs,{key:1,onClick:u,text:"Stop"})):(le(),Pt(Xs,{key:0,onClick:c,text:"Start"})),We(Xs,{onClick:d,text:"Reset"})])]))}}),tk={class:"relative"},nk={class:"relative flex w-full flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"},rk={class:"grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},ik={class:"absolute right-0 top-0 z-20"},sk={class:"flex flex-col items-end gap-3"},ok={class:"rounded-xl border border-white/10 bg-white/10 px-3 py-2 shadow-soft backdrop-blur"},ak={class:"absolute left-0 top-0 z-20"},lk={class:"flex max-w-xs justify-center"},ck=Fe({setup(t){const e=Ve("board"),n=Ve("boardId"),r=Ve("user");zr(()=>{r.uid&&Bg(r.uid,n)});function i(){mx(n,!e.cardsHidden)}function s(){return e.cardsHidden?"Show all cards":"Hide other cards"}function o(u){u.key==="Enter"&&(u.target.blur(),u.preventDefault())}function a(u){const d=(u==null?void 0:u.target).value.trim();_x(n,d),c.value=d||"Untitled Retro"}function l(){c.value==="Untitled Retro"&&(c.value="")}const c=de(e.title||"Untitled Retro");return qt(e,u=>{c.value=u.title||"Untitled Retro"}),(u,d)=>(le(),De("div",tk,[oe("div",nk,[Qv(oe("input",{class:kn(["w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-2xl font-semibold text-white shadow-inner shadow-black/10 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-400 focus:shadow-soft",c.value==="Untitled Retro"?"text-slate-400":"text-white"]),"onUpdate:modelValue":d[0]||(d[0]=h=>c.value=h),onKeypress:o,onFocusout:a,onFocusin:l},null,34),[[Vb,c.value]]),oe("section",rk,[(le(!0),De(je,null,Yi(Me(e).columns,(h,_)=>{var p;return le(),Pt(XA,{cards:(p=h.cards)!=null?p:[],"column-id":String(_),"board-id":Me(n),key:String(_),title:h.title,color:h.color},null,8,["cards","column-id","board-id","title","color"])}),128))])]),oe("section",ik,[oe("div",sk,[oe("div",ok,[We(Xs,{onClick:i,text:s()},null,8,["text"])])])]),oe("section",ak,[oe("div",lk,[We(ek)])])]))}});var uk=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const dk={},hk={class:"loader"};function fk(t,e){return le(),De("div",hk,"Loading...")}var pk=uk(dk,[["render",fk],["__scopeId","data-v-840bd5c8"]]);const gk={key:0,class:"mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10"},mk={key:1,class:"rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-lg text-slate-200 shadow-soft backdrop-blur"},_k={key:1,class:"flex items-center justify-center py-12"},vk=Fe({props:{boardId:null},setup(t){const{boardId:e}=t,n=gx(e);return Hr("boardId",e),Hr("board",n),(r,i)=>(le(),De(je,null,[Me(n).loading?en("",!0):(le(),De("main",gk,[Me(n).exists?(le(),Pt(ck,{key:0})):en("",!0),Me(n).exists?en("",!0):(le(),De("div",mk," Couldn't find board "))])),Me(n).loading?(le(),De("main",_k,[We(pk)])):en("",!0)],64))}}),bk=jo("\u2716"),yk={class:"flex flex-col gap-2"},wk={class:"text-xl font-semibold text-white"},Ck={class:"text-xs uppercase tracking-[0.18em] text-white/70"},Ek={class:"columns flex flex-1 flex-row items-end gap-2"},Tk={class:"truncate"},Oh=Fe({props:{board:null,isTemplate:{type:Boolean}},emits:["delete"],setup(t,{emit:e}){const{board:n,isTemplate:r}=t;function i(a){a.stopPropagation(),e("delete")}const s=se(()=>{var l;let a=0;for(const c of Object.values(n.columns)){console.log(c);const u=Object.keys((l=c.cards)!=null?l:{}).length;u>a&&(a=u)}return a});function o(a){var u;return r?"100%":s.value===0?`${20}%`:`${Object.keys((u=a==null?void 0:a.cards)!=null?u:{}).length/s.value*(100-20)+20}%`}return(a,l)=>(le(),De("div",{class:kn(["board group relative flex h-56 w-full cursor-pointer flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-soft",{template:t.isTemplate}])},[t.isTemplate?en("",!0):(le(),Pt(Om,{key:0,color:"white",onClick:i},{default:Ql(()=>[bk]),_:1})),oe("div",yk,[oe("h3",wk,sn(t.board.title||"Untitled Retro"),1),oe("p",Ck,sn(t.isTemplate?"Template":"Board"),1)]),oe("div",Ek,[(le(!0),De(je,null,Yi(t.board.columns,c=>(le(),De("div",{class:"column flex-1 rounded-lg px-3 py-2 text-xs font-semibold text-white shadow-md",style:Yt([{backgroundColor:c.color},{height:o(c)}])},[oe("div",Tk,sn(c.title),1)],4))),256))])],2))}}),xk=[{title:"Mad Sad Glad",columns:[{title:"Mad",color:"#f44336"},{title:"Sad",color:"#e91e63"},{title:"Glad",color:"#9c27b0"}]},{title:"Start Stop Continue",columns:[{title:"Start",color:"#2196f3"},{title:"Stop",color:"#ff9800"},{title:"Continue",color:"#009688"}]},{title:"Sailboat",columns:[{title:"What is the wind pushing our sails that make us go fast",color:"#f44336"},{title:"What anchors are holding us back",color:"#e91e63"},{title:"What rocks are ahead of us that risk our future",color:"#9c27b0"},{title:"What is our ideal island destination",color:"#673ab7"}]},{title:"The Four L's",columns:[{title:"Liked",color:"#4CAF50"},{title:"Learned",color:"#2196F3"},{title:"Lacked",color:"#FF9800"},{title:"Longed For",color:"#9C27B0"}]},{title:"KALM",columns:[{title:"Keep",color:"#4CAF50"},{title:"Add",color:"#2196F3"},{title:"Less",color:"#FF5722"},{title:"More",color:"#673AB7"}]},{title:"DAKI",columns:[{title:"Drop",color:"#F44336"},{title:"Add",color:"#4CAF50"},{title:"Keep",color:"#2196F3"},{title:"Improve",color:"#FFC107"}]}],Ik={class:"container mx-auto flex max-w-6xl flex-col items-center px-6 py-12"},Sk={class:"w-full rounded-[32px] border border-white/10 bg-white/5 px-8 py-10 shadow-soft backdrop-blur"},Rk={class:"flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between"},Pk=oe("p",{class:"text-sm uppercase tracking-[0.25em] text-cyan-200"},"retro toolkit",-1),Ak={class:"text-3xl font-bold text-white md:text-4xl"},kk=oe("span",{class:"rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-100"}," realtime boards ",-1),Nk={class:"mt-10"},Ok=oe("h2",{class:"text-2xl font-semibold text-white"},"Start a new board",-1),Mk={class:"mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"},Dk={class:"mt-10"},Lk=oe("h2",{class:"text-2xl font-semibold text-white"},"Your boards",-1),Fk={class:"mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"},$k=Fe({props:{navigateToBoard:null},setup(t){const{navigateToBoard:e}=t,n=Ve("user"),r=se(()=>px(n.uid));function i(o){xx(n.uid,o)}async function s(o){if(!(n!=null&&n.uid))return;const a=await Tx(n.uid,o);a&&e(a)}return(o,a)=>(le(),De("div",Ik,[oe("main",Sk,[oe("div",Rk,[oe("div",null,[Pk,oe("h1",Ak," \u{1F680} quick retro "+sn("")+"\u{1F680} ",1)]),kk]),oe("div",Nk,[Ok,oe("section",Mk,[(le(!0),De(je,null,Yi(Me(xk),l=>(le(),Pt(Oh,{onClick:c=>s(l),board:l,"is-template":!0},null,8,["onClick","board"]))),256))])]),oe("div",Dk,[Lk,oe("section",Fk,[(le(!0),De(je,null,Yi(Me(r),(l,c)=>(le(),Pt(Oh,{onClick:u=>t.navigateToBoard(c),onDelete:u=>i(c),board:l,"is-template":!1},null,8,["onClick","onDelete","board"]))),256))])])])]))}}),Bk=Fe({setup(t){const e=de(window.location.hash.slice(1));function n(i){console.log("navigating to board",i),history.pushState({},"",`#${i}`),e.value=i}addEventListener("popstate",()=>{console.log(window.location.hash.slice(1)),e.value=window.location.hash.slice(1)});const r=Ix();return Hr("user",r),(i,s)=>e.value&&e.value.length>0?(le(),Pt(vk,{key:0,boardId:e.value},null,8,["boardId"])):(le(),Pt($k,{key:1,"navigate-to-board":n}))}});Jb(Bk).mount("#app")});export default Uk();
