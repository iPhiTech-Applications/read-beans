import{v as K,e as A,R as C,b as D,w as F,x as J,j as p,z as V,r as T,l as Z}from"./app-7bc20a4e.js";import{T as $}from"./TableRowActions-a977ab5c.js";import{m as I}from"./currency-edacadb9.js";import{b as R,t as G}from"./datetime-7dece6f7.js";import{d as X}from"./file-a40a15db.js";import{a as Q}from"./route-93322184.js";import Y from"./StatusDropdown-16f84251.js";import{T as g}from"./Table-3421d2ac.js";import{T as w}from"./Text-160f2c95.js";import{A as _}from"./Anchor-53b71cb6.js";import{c as O,u as k}from"./Menu-2aba97af.js";import{P as L}from"./Popover-708222d0.js";import{u as q}from"./use-disclosure-c28c9ea4.js";import{c as S}from"./createReactComponent-0bbe300d.js";import{T as ee}from"./Tooltip-e7859f7c.js";import{A as H}from"./ActionIcon-8588dfb6.js";import"./index-0b34c5e2.js";import"./ConfirmModal-eff3ce29.js";import"./IconPencil-c11b0641.js";import"./IconDots-bdbde084.js";import"./IconArchive-1e4e7788.js";import"./_baseClone-594d8115.js";import"./Pill-50317cb8.js";import"./create-optional-context-1a5c9a08.js";import"./IconPlus-7f567d31.js";import"./IconCheck-3f1ac158.js";import"./ScrollArea-383a5d94.js";import"./DirectionProvider-acb021aa.js";import"./use-resolved-styles-api-22476df7.js";import"./use-uncontrolled-0eb68696.js";import"./use-floating-auto-update-3aa9c973.js";import"./get-style-object-71cabcb5.js";const[te,B]=K("HoverCard component was not found in the tree"),ne={};function U(h){const{children:M,onMouseEnter:y,onMouseLeave:a,...n}=A("HoverCardDropdown",ne,h),o=B(),d=O(y,o.openDropdown),s=O(a,o.closeDropdown);return C.createElement(L.Dropdown,{onMouseEnter:d,onMouseLeave:s,...n},M)}U.displayName="@mantine/core/HoverCardDropdown";const oe={refProp:"ref"},W=D.forwardRef((h,M)=>{const{children:y,refProp:a,eventPropsWrapperName:n,...o}=A("HoverCardTarget",oe,h);if(!F(y))throw new Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const d=B(),s=O(y.props.onMouseEnter,d.openDropdown),m=O(y.props.onMouseLeave,d.closeDropdown),i={onMouseEnter:s,onMouseLeave:m};return C.createElement(L.Target,{refProp:a,ref:M,...o},D.cloneElement(y,n?{[n]:i}:i))});W.displayName="@mantine/core/HoverCardTarget";const re={openDelay:0,closeDelay:150,initiallyOpened:!1};function x(h){const{children:M,onOpen:y,onClose:a,openDelay:n,closeDelay:o,initiallyOpened:d,...s}=A("HoverCard",re,h),[m,{open:i,close:l}]=q(d,{onClose:a,onOpen:y}),{openDropdown:r,closeDropdown:t}=k({open:i,close:l,openDelay:n,closeDelay:o});return C.createElement(te,{value:{openDropdown:r,closeDropdown:t}},C.createElement(L,{...s,opened:m,__staticSelector:"HoverCard"},M))}x.displayName="@mantine/core/HoverCard";x.Target=W;x.Dropdown=U;x.extend=h=>h;var ie=S("file-download","IconFileDownload",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M12 17v-6",key:"svg-2"}],["path",{d:"M9.5 14.5l2.5 2.5l2.5 -2.5",key:"svg-3"}]]),le=S("notes-off","IconNotesOff",[["path",{d:"M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14",key:"svg-0"}],["path",{d:"M11 7h4",key:"svg-1"}],["path",{d:"M9 11h2",key:"svg-2"}],["path",{d:"M9 15h4",key:"svg-3"}],["path",{d:"M3 3l18 18",key:"svg-4"}]]),de=S("notes","IconNotes",[["path",{d:"M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M9 7l6 0",key:"svg-1"}],["path",{d:"M9 11l6 0",key:"svg-2"}],["path",{d:"M9 15l4 0",key:"svg-3"}]]),se=S("printer","IconPrinter",[["path",{d:"M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2",key:"svg-0"}],["path",{d:"M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4",key:"svg-1"}],["path",{d:"M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z",key:"svg-2"}]]),z={exports:{}};(function(h,M){(function(a,n){h.exports=n()})(window,function(){return function(y){var a={};function n(o){if(a[o])return a[o].exports;var d=a[o]={i:o,l:!1,exports:{}};return y[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}return n.m=y,n.c=a,n.d=function(o,d,s){n.o(o,d)||Object.defineProperty(o,d,{enumerable:!0,get:s})},n.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,d){if(d&1&&(o=n(o)),d&8||d&4&&typeof o=="object"&&o&&o.__esModule)return o;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:o}),d&2&&typeof o!="string")for(var m in o)n.d(s,m,(function(i){return o[i]}).bind(null,m));return s},n.n=function(o){var d=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(d,"a",d),d},n.o=function(o,d){return Object.prototype.hasOwnProperty.call(o,d)},n.p="",n(n.s=0)}({"./src/index.js":function(y,a,n){n.r(a),n("./src/sass/index.scss");var o=n("./src/js/init.js"),d=o.default.init;typeof window<"u"&&(window.printJS=d),a.default=d},"./src/js/browser.js":function(y,a,n){n.r(a);var o={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!o.isIE()&&!!window.StyleMedia},isChrome:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!s.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};a.default=o},"./src/js/functions.js":function(y,a,n){n.r(a),n.d(a,"addWrapper",function(){return m}),n.d(a,"capitalizePrint",function(){return i}),n.d(a,"collectStyles",function(){return l}),n.d(a,"addHeader",function(){return t}),n.d(a,"cleanUp",function(){return u}),n.d(a,"isRawHTML",function(){return v});var o=n("./src/js/modal.js"),d=n("./src/js/browser.js");function s(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(f){return typeof f}:s=function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},s(e)}function m(e,c){var f="font-family:"+c.font+" !important; font-size: "+c.font_size+" !important; width:100%;";return'<div style="'+f+'">'+e+"</div>"}function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function l(e,c){for(var f=document.defaultView||window,E="",b=f.getComputedStyle(e,""),j=0;j<b.length;j++)(c.targetStyles.indexOf("*")!==-1||c.targetStyle.indexOf(b[j])!==-1||r(c.targetStyles,b[j]))&&b.getPropertyValue(b[j])&&(E+=b[j]+":"+b.getPropertyValue(b[j])+";");return E+="max-width: "+c.maxWidth+"px !important; font-size: "+c.font_size+" !important;",E}function r(e,c){for(var f=0;f<e.length;f++)if(s(c)==="object"&&c.indexOf(e[f])!==-1)return!0;return!1}function t(e,c){var f=document.createElement("div");if(v(c.header))f.innerHTML=c.header;else{var E=document.createElement("h1"),b=document.createTextNode(c.header);E.appendChild(b),E.setAttribute("style",c.headerStyle),f.appendChild(E)}e.insertBefore(f,e.childNodes[0])}function u(e){e.showModal&&o.default.close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable);var c="mouseover";(d.default.isChrome()||d.default.isFirefox())&&(c="focus");var f=function E(){window.removeEventListener(c,E),e.onPrintDialogClose();var b=document.getElementById(e.frameId);b&&b.remove()};window.addEventListener(c,f)}function v(e){var c=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return c.test(e)}},"./src/js/html.js":function(y,a,n){n.r(a);var o=n("./src/js/functions.js"),d=n("./src/js/print.js");function s(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(t){return typeof t}:s=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(l)}a.default={print:function(r,t){var u=i(r.printable)?r.printable:document.getElementById(r.printable);if(!u){window.console.error("Invalid HTML element id: "+r.printable);return}r.printableElement=m(u,r),r.header&&Object(o.addHeader)(r.printableElement,r),d.default.send(r,t)}};function m(l,r){for(var t=l.cloneNode(),u=Array.prototype.slice.call(l.childNodes),v=0;v<u.length;v++)if(r.ignoreElements.indexOf(u[v].id)===-1){var e=m(u[v],r);t.appendChild(e)}switch(r.scanStyles&&l.nodeType===1&&t.setAttribute("style",Object(o.collectStyles)(l,r)),l.tagName){case"SELECT":t.value=l.value;break;case"CANVAS":t.getContext("2d").drawImage(l,0,0);break}return t}function i(l){return s(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(y,a,n){n.r(a);var o=n("./src/js/functions.js"),d=n("./src/js/print.js"),s=n("./src/js/browser.js");a.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(r){var t=document.createElement("img");if(t.setAttribute("style",i.imageStyle),t.src=r,s.default.isFirefox()){var u=t.src;t.src=u}var v=document.createElement("div");v.appendChild(t),i.printableElement.appendChild(v)}),i.header&&Object(o.addHeader)(i.printableElement,i),d.default.send(i,l)}}},"./src/js/init.js":function(y,a,n){n.r(a);var o=n("./src/js/browser.js"),d=n("./src/js/modal.js"),s=n("./src/js/pdf.js"),m=n("./src/js/html.js"),i=n("./src/js/raw-html.js"),l=n("./src/js/image.js"),r=n("./src/js/json.js");function t(v){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(c){return typeof c}:t=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},t(v)}var u=["pdf","html","image","json","raw-html"];a.default={init:function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(N){throw N},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},c=arguments[0];if(c===void 0)throw new Error("printJS expects at least 1 attribute.");switch(t(c)){case"string":e.printable=encodeURI(c),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":e.printable=c.printable,e.fallbackPrintable=typeof c.fallbackPrintable<"u"?c.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable;for(var f in e)f==="printable"||f==="fallbackPrintable"||(e[f]=typeof c[f]<"u"?c[f]:e[f]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+t(c))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||typeof e.type!="string"||u.indexOf(e.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&d.default.show(e),e.onLoadingStart&&e.onLoadingStart();var E=document.getElementById(e.frameId);E&&E.parentNode.removeChild(E);var b=document.createElement("iframe");switch(o.default.isFirefox()?b.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):b.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),b.setAttribute("id",e.frameId),e.type!=="pdf"&&(b.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach(function(P){b.srcdoc+='<link rel="stylesheet" href="'+P+'">'})),b.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(o.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var j=window.open(e.fallbackPrintable,"_blank");j.focus(),e.onIncompatibleBrowser()}catch(P){e.onError(P)}finally{e.showModal&&d.default.close(),e.onLoadingEnd&&e.onLoadingEnd()}else s.default.print(e,b);break;case"image":l.default.print(e,b);break;case"html":m.default.print(e,b);break;case"raw-html":i.default.print(e,b);break;case"json":r.default.print(e,b);break}}}},"./src/js/json.js":function(y,a,n){n.r(a);var o=n("./src/js/functions.js"),d=n("./src/js/print.js");function s(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(r){return typeof r}:s=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},s(i)}a.default={print:function(l,r){if(s(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(t){return{field:s(t)==="object"?t.field:t,displayName:s(t)==="object"?t.displayName:t,columnSize:s(t)==="object"&&t.columnSize?t.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(o.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=m(l),d.default.send(l,r)}};function m(i){var l=i.printable,r=i.properties,t='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(t+="<thead>"),t+="<tr>";for(var u=0;u<r.length;u++)t+='<th style="width:'+r[u].columnSize+";"+i.gridHeaderStyle+'">'+Object(o.capitalizePrint)(r[u].displayName)+"</th>";t+="</tr>",i.repeatTableHeader&&(t+="</thead>"),t+="<tbody>";for(var v=0;v<l.length;v++){t+="<tr>";for(var e=0;e<r.length;e++){var c=l[v],f=r[e].field.split(".");if(f.length>1)for(var E=0;E<f.length;E++)c=c[f[E]];else c=c[r[e].field];t+='<td style="width:'+r[e].columnSize+i.gridStyle+'">'+c+"</td>"}t+="</tr>"}return t+="</tbody></table>",t}},"./src/js/modal.js":function(y,a,n){n.r(a);var o={show:function(s){var m="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",m),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),l.appendChild(r);var t=document.createElement("span");t.setAttribute("class","printSpinner"),l.appendChild(t);var u=document.createTextNode(s.modalMessage);l.appendChild(u),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){o.close()})},close:function(){var s=document.getElementById("printJS-Modal");s&&s.parentNode.removeChild(s)}};a.default=o},"./src/js/pdf.js":function(y,a,n){n.r(a);var o=n("./src/js/print.js"),d=n("./src/js/functions.js");a.default={print:function(i,l){if(i.base64){var r=Uint8Array.from(atob(i.printable),function(u){return u.charCodeAt(0)});s(i,l,r);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var t=new window.XMLHttpRequest;t.responseType="arraybuffer",t.addEventListener("error",function(){Object(d.cleanUp)(i),i.onError(t.statusText,t)}),t.addEventListener("load",function(){if([200,201].indexOf(t.status)===-1){Object(d.cleanUp)(i),i.onError(t.statusText,t);return}s(i,l,t.response)}),t.open("GET",i.printable,!0),t.send()}};function s(m,i,l){var r=new window.Blob([l],{type:"application/pdf"});r=window.URL.createObjectURL(r),i.setAttribute("src",r),o.default.send(m,i)}},"./src/js/print.js":function(y,a,n){n.r(a);var o=n("./src/js/browser.js"),d=n("./src/js/functions.js"),s={send:function(t,u){document.getElementsByTagName("body")[0].appendChild(u);var v=document.getElementById(t.frameId);v.onload=function(){if(t.type==="pdf"){o.default.isFirefox()?setTimeout(function(){return m(v,t)},1e3):m(v,t);return}var e=v.contentWindow||v.contentDocument;if(e.document&&(e=e.document),e.body.appendChild(t.printableElement),t.type!=="pdf"&&t.style){var c=document.createElement("style");c.innerHTML=t.style,e.head.appendChild(c)}var f=e.getElementsByTagName("img");f.length>0?i(Array.from(f)).then(function(){return m(v,t)}):m(v,t)}}};function m(r,t){try{if(r.focus(),o.default.isEdge()||o.default.isIE())try{r.contentWindow.document.execCommand("print",!1,null)}catch{r.contentWindow.print()}else r.contentWindow.print()}catch(u){t.onError(u)}finally{o.default.isFirefox()&&(r.style.visibility="hidden",r.style.left="-1px"),Object(d.cleanUp)(t)}}function i(r){var t=r.map(function(u){if(u.src&&u.src!==window.location.href)return l(u)});return Promise.all(t)}function l(r){return new Promise(function(t){var u=function v(){!r||typeof r.naturalWidth>"u"||r.naturalWidth===0||!r.complete?setTimeout(v,500):t()};u()})}a.default=s},"./src/js/raw-html.js":function(y,a,n){n.r(a);var o=n("./src/js/print.js");a.default={print:function(s,m){s.printableElement=document.createElement("div"),s.printableElement.setAttribute("style","width:100%"),s.printableElement.innerHTML=s.printable,o.default.send(s,m)}}},"./src/sass/index.scss":function(y,a,n){},0:function(y,a,n){y.exports=n("./src/index.js")}}).default})})(z);var ae=z.exports;const ce=J(ae);function Je({item:h}){const[M,y]=D.useState(!1),a=()=>{Z.get(route("invoices.download",h.id),{responseType:"blob"}).then(({data:o})=>{X(o,h.filename.slice(5),"application/pdf")})},n=()=>{ce({printable:route("invoices.pdf",h.id),type:"pdf",onLoadingStart:()=>y(!0),onLoadingEnd:()=>setTimeout(()=>y(!1),500)})};return p.jsxs(g.Tr,{children:[p.jsx(g.Td,{children:p.jsx(w,{fz:"md",fw:700,children:h.number})}),p.jsx(g.Td,{children:p.jsx(w,{fz:"sm",children:p.jsx(Y,{invoiceId:h.id,status:h.status})})}),p.jsxs(g.Td,{children:[p.jsx(_,{onClick:()=>Q("clients.companies.edit",h.client_company.id),children:p.jsx(w,{fz:"md",fw:600,children:h.client_company.name})}),p.jsx(w,{fz:"xs",c:"dimmed",children:"Client company"})]}),p.jsx(g.Td,{children:h.note?p.jsxs(x,{width:280,shadow:"md",withArrow:!0,children:[p.jsx(x.Target,{children:p.jsx(de,{})}),p.jsx(x.Dropdown,{children:p.jsx(w,{size:"sm",children:h.note})})]}):p.jsx(le,{opacity:.3})}),p.jsx(g.Td,{children:p.jsx(w,{fz:"sm",children:I(h.amount,h.client_company.currency.code)})}),p.jsx(g.Td,{children:p.jsx(w,{fz:"sm",children:I(h.amount_with_tax,h.client_company.currency.code)})}),p.jsx(g.Td,{children:p.jsx(w,{fz:"sm",c:V().isAfter(h.due_date)&&h.status!=="paid"?"red":"inherit",children:R(h.due_date)})}),p.jsx(g.Td,{children:p.jsx(ee,{label:G(h.created_at),openDelay:500,withArrow:!0,children:p.jsx(w,{fz:"sm",component:"span",inline:!0,children:R(h.created_at)})})}),(can("edit invoice")||can("archive invoice")||can("restore invoice"))&&p.jsx(g.Td,{children:p.jsxs($,{item:h,editRoute:"invoices.edit",editPermission:"edit invoice",archivePermission:"archive invoice",restorePermission:"restore invoice",archive:{route:"invoices.destroy",title:"Archive invoice",content:"Are you sure you want to archive this invoice?",confirmLabel:"Archive"},restore:{route:"invoices.restore",title:"Restore invoice",content:"Are you sure you want to restore this invoice?",confirmLabel:"Restore"},children:[can("download invoice")&&p.jsx(H,{variant:"subtle",color:"blue",onClick:()=>a(),children:p.jsx(ie,{style:{width:T(16),height:T(16)},stroke:1.5})}),can("print invoice")&&p.jsx(H,{variant:"subtle",color:"blue",loading:M,onClick:()=>n(),children:p.jsx(se,{style:{width:T(16),height:T(16)},stroke:1.5})})]})})]},h.id)}export{Je as default};
