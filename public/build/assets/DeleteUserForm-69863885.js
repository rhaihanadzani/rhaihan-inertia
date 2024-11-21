import{m,r as s,c as at,e as le,a as v,j as O,W as it}from"./app-a341da4a.js";import{T as ut,I as st}from"./TextInput-1a2b2c43.js";import{I as ct}from"./InputLabel-22a00cfe.js";import{l as ee,s as W,a as A,u as k,b as fe,o as w,U as x,C as S,t as me,y as L,p as dt,f as Pe,T as ft,c as Le,O as be,d as mt,e as X,q as ne}from"./transition-a5cf9561.js";var $e;let I=($e=m.useId)!=null?$e:function(){let e=ee(),[t,n]=m.useState(e?()=>W.nextId():null);return A(()=>{t===null&&n(W.nextId())},[t]),t!=null?""+t:void 0};function De(e){return W.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ae=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var C=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(C||{}),Fe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Fe||{}),pt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(pt||{});function gt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ae)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ce=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ce||{});function vt(e,t=0){var n;return e===((n=De(e))==null?void 0:n.body)?!1:k(t,{0(){return e.matches(ae)},1(){let r=e;for(;r!==null;){if(r.matches(ae))return!0;r=r.parentElement}return!1}})}var ht=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ht||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let wt=["textarea","input"].join(",");function Et(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,wt))!=null?n:!1}function yt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function J(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?yt(e):e:gt(e);o.length>0&&l.length>1&&(l=l.filter(g=>!o.includes(g))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,d=l.length,h;do{if(c>=d||c+d<=0)return 0;let g=u+c;if(t&16)g=(g+d)%d;else{if(g<0)return 3;if(g>=d)return 1}h=l[g],h==null||h.focus(f),c+=i}while(h!==a.activeElement);return t&6&&Et(h)&&h.select(),2}function Ne(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function bt(){return/Android/gi.test(window.navigator.userAgent)}function $t(){return Ne()||bt()}function z(e,t,n){let r=fe(t);s.useEffect(()=>{function o(a){r.current(a)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Me(e,t,n){let r=fe(t);s.useEffect(()=>{function o(a){r.current(a)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function Tt(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,i){if(!r.current||l.defaultPrevented)return;let u=i(l);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let f=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of f){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(u)||l.composed&&l.composedPath().includes(d))return}return!vt(u,Ce.Loose)&&u.tabIndex!==-1&&l.preventDefault(),t(l,u)}let a=s.useRef(null);z("pointerdown",l=>{var i,u;r.current&&(a.current=((u=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:u[0])||l.target)},!0),z("mousedown",l=>{var i,u;r.current&&(a.current=((u=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:u[0])||l.target)},!0),z("click",l=>{$t()||a.current&&(o(l,()=>a.current),a.current=null)},!0),z("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),Me("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function j(...e){return s.useMemo(()=>De(...e),[...e])}function pe(e,t){let n=s.useRef([]),r=w(e);s.useEffect(()=>{let o=[...n.current];for(let[a,l]of t.entries())if(n.current[a]!==l){let i=r(t,o);return n.current=t,i}},[r,...t])}let xt="div";var Q=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Q||{});function St(e,t){var n;let{features:r=1,...o}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return S({ourProps:a,theirProps:o,slot:{},defaultTag:xt,name:"Hidden"})}let ie=x(St);function Pt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let F=[];Pt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&F[0]!==t.target&&(F.unshift(t.target),F=F.filter(n=>n!=null&&n.isConnected),F.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Lt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&Dt(n)?!1:r}function Dt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var Ae=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ae||{});function Re(e,t,n,r){let o=fe(n);s.useEffect(()=>{e=e??window;function a(l){o.current(l)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Oe(e){let t=w(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,me(()=>{n.current&&t()})}),[t])}var U=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(U||{});function Ft(){let e=s.useRef(0);return Me("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function ke(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Ct="div";var Ie=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ie||{});function Nt(e,t){let n=s.useRef(null),r=L(n,t),{initialFocus:o,containers:a,features:l=30,...i}=e;ee()||(l=1);let u=j(n);Rt({ownerDocument:u},!!(l&16));let f=Ot({ownerDocument:u,container:n,initialFocus:o},!!(l&2));kt({ownerDocument:u,container:n,containers:a,previousActiveElement:f},!!(l&8));let c=Ft(),d=w($=>{let E=n.current;E&&(D=>D())(()=>{k(c.current,{[U.Forwards]:()=>{J(E,C.First,{skipElements:[$.relatedTarget]})},[U.Backwards]:()=>{J(E,C.Last,{skipElements:[$.relatedTarget]})}})})}),h=dt(),g=s.useRef(!1),T={ref:r,onKeyDown($){$.key=="Tab"&&(g.current=!0,h.requestAnimationFrame(()=>{g.current=!1}))},onBlur($){let E=ke(a);n.current instanceof HTMLElement&&E.add(n.current);let D=$.relatedTarget;D instanceof HTMLElement&&D.dataset.headlessuiFocusGuard!=="true"&&(He(E,D)||(g.current?J(n.current,k(c.current,{[U.Forwards]:()=>C.Next,[U.Backwards]:()=>C.Previous})|C.WrapAround,{relativeTo:$.target}):$.target instanceof HTMLElement&&M($.target)))}};return m.createElement(m.Fragment,null,!!(l&4)&&m.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:Q.Focusable}),S({ourProps:T,theirProps:i,defaultTag:Ct,name:"FocusTrap"}),!!(l&4)&&m.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:Q.Focusable}))}let Mt=x(Nt),H=Object.assign(Mt,{features:Ie});function At(e=!0){let t=s.useRef(F.slice());return pe(([n],[r])=>{r===!0&&n===!1&&me(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=F.slice())},[e,F,t]),w(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Rt({ownerDocument:e},t){let n=At(t);pe(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&M(n())},[t]),Oe(()=>{t&&M(n())})}function Ot({ownerDocument:e,container:t,initialFocus:n},r){let o=s.useRef(null),a=Pe();return pe(()=>{if(!r)return;let l=t.current;l&&me(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}n!=null&&n.current?M(n.current):J(l,C.First)===Fe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function kt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=Pe();Re(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let i=ke(n);t.current instanceof HTMLElement&&i.add(t.current);let u=r.current;if(!u)return;let f=l.target;f&&f instanceof HTMLElement?He(i,f)?(r.current=f,M(f)):(l.preventDefault(),l.stopPropagation(),M(u)):M(r.current)},!0)}function He(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Be=s.createContext(!1);function It(){return s.useContext(Be)}function ue(e){return m.createElement(Be.Provider,{value:e.force},e.children)}function Ht(e){let t=It(),n=s.useContext(Ue),r=j(e),[o,a]=s.useState(()=>{if(!t&&n!==null||W.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),o}let Bt=s.Fragment;function Ut(e,t){let n=e,r=s.useRef(null),o=L(ft(c=>{r.current=c}),t),a=j(r),l=Ht(r),[i]=s.useState(()=>{var c;return W.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),u=s.useContext(se),f=ee();return A(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),A(()=>{if(i&&u)return u.register(i)},[u,i]),Oe(()=>{var c;!l||!i||(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))}),f?!l||!i?null:at.createPortal(S({ourProps:{ref:o},theirProps:n,defaultTag:Bt,name:"Portal"}),i):null}let Wt=s.Fragment,Ue=s.createContext(null);function jt(e,t){let{target:n,...r}=e,o={ref:L(t)};return m.createElement(Ue.Provider,{value:n},S({ourProps:o,theirProps:r,defaultTag:Wt,name:"Popover.Group"}))}let se=s.createContext(null);function _t(){let e=s.useContext(se),t=s.useRef([]),n=w(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=w(a=>{let l=t.current.indexOf(a);l!==-1&&t.current.splice(l,1),e&&e.unregister(a)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:a}){return m.createElement(se.Provider,{value:o},a)},[o])]}let Yt=x(Ut),Vt=x(jt),ce=Object.assign(Yt,{Group:Vt});function qt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Gt=typeof Object.is=="function"?Object.is:qt,{useState:Kt,useEffect:Xt,useLayoutEffect:zt,useDebugValue:Jt}=le;function Qt(e,t,n){const r=t(),[{inst:o},a]=Kt({inst:{value:r,getSnapshot:t}});return zt(()=>{o.value=r,o.getSnapshot=t,re(o)&&a({inst:o})},[e,r,t]),Xt(()=>(re(o)&&a({inst:o}),e(()=>{re(o)&&a({inst:o})})),[e]),Jt(r),r}function re(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Gt(n,r)}catch{return!0}}function Zt(e,t,n){return t()}const en=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tn=!en,nn=tn?Zt:Qt,rn="useSyncExternalStore"in le?(e=>e.useSyncExternalStore)(le):nn;function on(e){return rn(e.subscribe,e.getSnapshot,e.getSnapshot)}function ln(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let l=t[o].call(n,...a);l&&(n=l,r.forEach(i=>i()))}}}function an(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,a=e-o;n.style(r,"paddingRight",`${a}px`)}}}function un(){return Ne()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(a=>a()).some(a=>a.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=Le();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let a=(o=window.scrollY)!=null?o:window.pageYOffset,l=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:f}=new URL(u.href),c=e.querySelector(f);c&&!r(c)&&(l=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;a!==u&&window.scrollTo(0,a),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}function sn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function cn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let N=ln(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Le(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:cn(n)},o=[un(),an(),sn()];o.forEach(({before:a})=>a==null?void 0:a(r)),o.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});N.subscribe(()=>{let e=N.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&N.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&N.dispatch("TEARDOWN",n)}});function dn(e,t,n){let r=on(N),o=e?r.get(e):void 0,a=o?o.count>0:!1;return A(()=>{if(!(!e||!t))return N.dispatch("PUSH",e,n),()=>N.dispatch("POP",e,n)},[t,e]),a}let oe=new Map,B=new Map;function Te(e,t=!0){A(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let i=(l=B.get(r))!=null?l:1;if(i===1?B.delete(r):B.set(r,i-1),i!==1)return;let u=oe.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,oe.delete(r))}let a=(n=B.get(r))!=null?n:0;return B.set(r,a+1),a!==0||(oe.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function fn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=s.useRef((r=n==null?void 0:n.current)!=null?r:null),a=j(o),l=w(()=>{var i,u,f;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(o.current)||d.contains((f=(u=o.current)==null?void 0:u.getRootNode())==null?void 0:f.host)||c.some(h=>d.contains(h))||c.push(d));return c});return{resolveContainers:l,contains:w(i=>l().some(u=>u.contains(i))),mainTreeNodeRef:o,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:m.createElement(ie,{features:Q.Hidden,ref:o})},[o,n])}}let ge=s.createContext(()=>{});ge.displayName="StackContext";var de=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(de||{});function mn(){return s.useContext(ge)}function pn({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=mn(),l=w((...i)=>{t==null||t(...i),a(...i)});return A(()=>{let i=o===void 0||o===!0;return i&&l(0,n,r),()=>{i&&l(1,n,r)}},[l,n,r,o]),m.createElement(ge.Provider,{value:l},e)}let We=s.createContext(null);function je(){let e=s.useContext(We);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,je),t}return e}function gn(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=w(a=>(t(l=>[...l,a]),()=>t(l=>{let i=l.slice(),u=i.indexOf(a);return u!==-1&&i.splice(u,1),i}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(We.Provider,{value:o},n.children)},[t])]}let vn="p";function hn(e,t){let n=I(),{id:r=`headlessui-description-${n}`,...o}=e,a=je(),l=L(t);A(()=>a.register(r),[r,a.register]);let i={ref:l,...a.props,id:r};return S({ourProps:i,theirProps:o,slot:a.slot||{},defaultTag:vn,name:a.name||"Description"})}let wn=x(hn),En=Object.assign(wn,{});var yn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(yn||{}),bn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(bn||{});let $n={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Z=s.createContext(null);Z.displayName="DialogContext";function _(e){let t=s.useContext(Z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return t}function Tn(e,t,n=()=>[document.body]){dn(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function xn(e,t){return k(t.type,$n,e,t)}let Sn="div",Pn=be.RenderStrategy|be.Static;function Ln(e,t){let n=I(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:l,role:i="dialog",__demoMode:u=!1,...f}=e,[c,d]=s.useState(0),h=s.useRef(!1);i=function(){return i==="dialog"||i==="alertdialog"?i:(h.current||(h.current=!0,console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let g=mt();o===void 0&&g!==null&&(o=(g&X.Open)===X.Open);let T=s.useRef(null),$=L(T,t),E=j(T),D=e.hasOwnProperty("open")||g!==null,ve=e.hasOwnProperty("onClose");if(!D&&!ve)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!D)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ve)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let y=o?0:1,[Y,_e]=s.useReducer(xn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),R=w(()=>a(!1)),he=w(p=>_e({type:0,id:p})),V=ee()?u?!1:y===0:!1,q=c>1,we=s.useContext(Z)!==null,[Ye,Ve]=_t(),qe={get current(){var p;return(p=Y.panelRef.current)!=null?p:T.current}},{resolveContainers:te,mainTreeNodeRef:G,MainTreeNode:Ge}=fn({portals:Ye,defaultContainers:[qe]}),Ke=q?"parent":"leaf",Ee=g!==null?(g&X.Closing)===X.Closing:!1,Xe=(()=>we||Ee?!1:V)(),ze=s.useCallback(()=>{var p,P;return(P=Array.from((p=E==null?void 0:E.querySelectorAll("body > *"))!=null?p:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(G.current)&&b instanceof HTMLElement))!=null?P:null},[G]);Te(ze,Xe);let Je=(()=>q?!0:V)(),Qe=s.useCallback(()=>{var p,P;return(P=Array.from((p=E==null?void 0:E.querySelectorAll("[data-headlessui-portal]"))!=null?p:[]).find(b=>b.contains(G.current)&&b instanceof HTMLElement))!=null?P:null},[G]);Te(Qe,Je);let Ze=(()=>!(!V||q))();Tt(te,p=>{p.preventDefault(),R()},Ze);let et=(()=>!(q||y!==0))();Re(E==null?void 0:E.defaultView,"keydown",p=>{et&&(p.defaultPrevented||p.key===Ae.Escape&&(p.preventDefault(),p.stopPropagation(),R()))});let tt=(()=>!(Ee||y!==0||we))();Tn(E,tt,te),s.useEffect(()=>{if(y!==0||!T.current)return;let p=new ResizeObserver(P=>{for(let b of P){let K=b.target.getBoundingClientRect();K.x===0&&K.y===0&&K.width===0&&K.height===0&&R()}});return p.observe(T.current),()=>p.disconnect()},[y,T,R]);let[nt,rt]=gn(),ot=s.useMemo(()=>[{dialogState:y,close:R,setTitleId:he},Y],[y,Y,R,he]),ye=s.useMemo(()=>({open:y===0}),[y]),lt={ref:$,id:r,role:i,"aria-modal":y===0?!0:void 0,"aria-labelledby":Y.titleId,"aria-describedby":nt};return m.createElement(pn,{type:"Dialog",enabled:y===0,element:T,onUpdate:w((p,P)=>{P==="Dialog"&&k(p,{[de.Add]:()=>d(b=>b+1),[de.Remove]:()=>d(b=>b-1)})})},m.createElement(ue,{force:!0},m.createElement(ce,null,m.createElement(Z.Provider,{value:ot},m.createElement(ce.Group,{target:T},m.createElement(ue,{force:!1},m.createElement(rt,{slot:ye,name:"Dialog.Description"},m.createElement(H,{initialFocus:l,containers:te,features:V?k(Ke,{parent:H.features.RestoreFocus,leaf:H.features.All&~H.features.FocusLock}):H.features.None},m.createElement(Ve,null,S({ourProps:lt,theirProps:f,slot:ye,defaultTag:Sn,features:Pn,visible:y===0,name:"Dialog"}))))))))),m.createElement(Ge,null))}let Dn="div";function Fn(e,t){let n=I(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:l}]=_("Dialog.Overlay"),i=L(t),u=w(c=>{if(c.target===c.currentTarget){if(Lt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),f=s.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:f,defaultTag:Dn,name:"Dialog.Overlay"})}let Cn="div";function Nn(e,t){let n=I(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},l]=_("Dialog.Backdrop"),i=L(t);s.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let u=s.useMemo(()=>({open:a===0}),[a]);return m.createElement(ue,{force:!0},m.createElement(ce,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:Cn,name:"Dialog.Backdrop"})))}let Mn="div";function An(e,t){let n=I(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},l]=_("Dialog.Panel"),i=L(t,l.panelRef),u=s.useMemo(()=>({open:a===0}),[a]),f=w(c=>{c.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:f},theirProps:o,slot:u,defaultTag:Mn,name:"Dialog.Panel"})}let Rn="h2";function On(e,t){let n=I(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:l}]=_("Dialog.Title"),i=L(t);s.useEffect(()=>(l(r),()=>l(null)),[r,l]);let u=s.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r},theirProps:o,slot:u,defaultTag:Rn,name:"Dialog.Title"})}let kn=x(Ln),In=x(Nn),Hn=x(An),Bn=x(Fn),Un=x(On),xe=Object.assign(kn,{Backdrop:In,Panel:Hn,Overlay:Bn,Title:Un,Description:En});function Se({type:e="submit",className:t="",processing:n,children:r,onClick:o}){return v("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Wn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const a=()=>{r&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return v(ne,{show:t,as:s.Fragment,leave:"duration-200",children:O(xe,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[v(ne.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v("div",{className:"absolute inset-0 bg-gray-500/75"})}),v(ne.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v(xe.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}function jn({type:e="button",className:t="",processing:n,children:r,onClick:o}){return v("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Gn({className:e}){const[t,n]=s.useState(!1),r=s.useRef(),{data:o,setData:a,delete:l,processing:i,reset:u,errors:f}=it({password:""}),c=()=>{n(!0)},d=g=>{g.preventDefault(),l(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>h(),onError:()=>r.current.focus(),onFinish:()=>u()})},h=()=>{n(!1),u()};return O("section",{className:`space-y-6 ${e}`,children:[O("header",{children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v(Se,{onClick:c,children:"Delete Account"}),v(Wn,{show:t,onClose:h,children:O("form",{onSubmit:d,className:"p-6",children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),O("div",{className:"mt-6",children:[v(ct,{for:"password",value:"Password",className:"sr-only"}),v(ut,{id:"password",type:"password",name:"password",ref:r,value:o.password,handleChange:g=>a("password",g.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v(st,{message:f.password,className:"mt-2"})]}),O("div",{className:"mt-6 flex justify-end",children:[v(jn,{onClick:h,children:"Cancel"}),v(Se,{className:"ml-3",processing:i,children:"Delete Account"})]})]})})]})}export{Gn as default};
