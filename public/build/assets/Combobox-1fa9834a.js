import{f as S,e as w,h as J,R as h,B as I,i as Q,o as L,x as me,b,a0 as pe,z,a2 as F,m as fe,Y as j,r as xe}from"./app-0842237d.js";import{P as $}from"./Popover-f8e352cc.js";import{I as he}from"./Input-da77b9d4.js";import{u as Ce}from"./use-uncontrolled-8c49da27.js";var O={dropdown:"m-88b62a41",options:"m-b2821a6e",option:"m-92253aa5",search:"m-985517d8",empty:"m-2530cd1d",header:"m-858f94bd",footer:"m-82b967cb",group:"m-254f3e4f",groupLabel:"m-2bb2e9e5",chevron:"m-2943220b",optionsDropdownOption:"m-390b5f4",optionsDropdownCheckIcon:"m-8ee53fc2"};const ye={error:null},ge=Q((s,{size:e})=>({chevron:{"--combobox-chevron-size":L(e,"combobox-chevron-size")}})),q=S((s,e)=>{const o=w("ComboboxChevron",ye,s),{size:t,error:a,style:c,className:r,classNames:l,styles:n,unstyled:i,vars:m,mod:d,...p}=o,y=J({name:"ComboboxChevron",classes:O,props:o,style:c,className:r,classNames:l,styles:n,unstyled:i,vars:m,varsResolver:ge,rootSelector:"chevron"});return h.createElement(I,{component:"svg",...p,...y("chevron"),size:t,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",mod:["combobox-chevron",{error:a},d],ref:e},h.createElement("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))});q.classes=O;q.displayName="@mantine/core/ComboboxChevron";const[ve,A]=me("Combobox component was not found in tree"),W=b.forwardRef(({size:s,onMouseDown:e,onClick:o,onClear:t,...a},c)=>h.createElement(pe,{ref:c,size:s||"sm",variant:"transparent",tabIndex:-1,"aria-hidden":!0,...a,onMouseDown:r=>{r.preventDefault(),e==null||e(r)},onClick:r=>{t(),o==null||o(r)}}));W.displayName="@mantine/core/ComboboxClearButton";const we={},K=S((s,e)=>{const{classNames:o,styles:t,className:a,style:c,hidden:r,...l}=w("ComboboxDropdown",we,s),n=A();return h.createElement($.Dropdown,{...l,ref:e,role:"presentation","data-hidden":r||void 0,...n.getStyles("dropdown",{className:a,style:c,classNames:o,styles:t})})});K.classes=O;K.displayName="@mantine/core/ComboboxDropdown";const Ee={refProp:"ref"},X=S((s,e)=>{const{children:o,refProp:t}=w("ComboboxDropdownTarget",Ee,s);if(A(),!z(o))throw new Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return h.createElement($.Target,{ref:e,refProp:t},o)});X.displayName="@mantine/core/ComboboxDropdownTarget";const Se={},_=S((s,e)=>{const{classNames:o,className:t,style:a,styles:c,vars:r,...l}=w("ComboboxEmpty",Se,s),n=A();return h.createElement(I,{ref:e,...n.getStyles("empty",{className:t,classNames:o,styles:c,style:a}),...l})});_.classes=O;_.displayName="@mantine/core/ComboboxEmpty";function B({onKeyDown:s,withKeyboardNavigation:e,withAriaAttributes:o,withExpandedAttribute:t,targetType:a,autoComplete:c}){const r=A(),[l,n]=b.useState(null),i=d=>{if(s==null||s(d),!r.readOnly&&e){if(d.nativeEvent.code==="ArrowDown"&&(d.preventDefault(),r.store.dropdownOpened?n(r.store.selectNextOption()):(r.store.openDropdown("keyboard"),n(r.store.selectActiveOption()))),d.nativeEvent.code==="ArrowUp"&&(d.preventDefault(),r.store.dropdownOpened?n(r.store.selectPreviousOption()):(r.store.openDropdown("keyboard"),n(r.store.selectActiveOption()))),d.nativeEvent.code==="Enter"||d.nativeEvent.code==="NumpadEnter"){const p=r.store.getSelectedOptionIndex();r.store.dropdownOpened&&p!==-1?(d.preventDefault(),r.store.clickSelectedOption()):a==="button"&&(d.preventDefault(),r.store.openDropdown("keyboard"))}d.nativeEvent.code==="Escape"&&r.store.closeDropdown("keyboard"),d.nativeEvent.code==="Space"&&a==="button"&&(d.preventDefault(),r.store.toggleDropdown("keyboard"))}};return{...o?{"aria-haspopup":"listbox","aria-expanded":t&&!!(r.store.listId&&r.store.dropdownOpened)||void 0,"aria-controls":r.store.listId,"aria-activedescendant":r.store.dropdownOpened&&l||void 0,autoComplete:c,"data-expanded":r.store.dropdownOpened||void 0,"data-mantine-stop-propagation":r.store.dropdownOpened||void 0}:{},onKeyDown:i}}const Oe={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},ee=S((s,e)=>{const{children:o,refProp:t,withKeyboardNavigation:a,withAriaAttributes:c,withExpandedAttribute:r,targetType:l,autoComplete:n,...i}=w("ComboboxEventsTarget",Oe,s);if(!z(o))throw new Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const m=A(),d=B({targetType:l,withAriaAttributes:c,withKeyboardNavigation:a,withExpandedAttribute:r,onKeyDown:o.props.onKeyDown,autoComplete:n});return b.cloneElement(o,{...d,...i,[t]:F(e,m.store.targetRef,o==null?void 0:o.ref)})});ee.displayName="@mantine/core/ComboboxEventsTarget";const Ae={},H=S((s,e)=>{const{classNames:o,className:t,style:a,styles:c,vars:r,...l}=w("ComboboxFooter",Ae,s),n=A();return h.createElement(I,{ref:e,...n.getStyles("footer",{className:t,classNames:o,style:a,styles:c}),...l})});H.classes=O;H.displayName="@mantine/core/ComboboxFooter";const Ne={},V=S((s,e)=>{const{classNames:o,className:t,style:a,styles:c,vars:r,children:l,label:n,...i}=w("ComboboxGroup",Ne,s),m=A();return h.createElement(I,{ref:e,...m.getStyles("group",{className:t,classNames:o,style:a,styles:c}),...i},n&&h.createElement("div",{...m.getStyles("groupLabel",{classNames:o,styles:c})},n),l)});V.classes=O;V.displayName="@mantine/core/ComboboxGroup";const Te={},G=S((s,e)=>{const{classNames:o,className:t,style:a,styles:c,vars:r,...l}=w("ComboboxHeader",Te,s),n=A();return h.createElement(I,{ref:e,...n.getStyles("header",{className:t,classNames:o,style:a,styles:c}),...l})});G.classes=O;G.displayName="@mantine/core/ComboboxHeader";const Pe={},U=S((s,e)=>{const o=w("ComboboxOption",Pe,s),{classNames:t,className:a,style:c,styles:r,vars:l,onClick:n,id:i,active:m,onMouseDown:d,onMouseOver:p,disabled:y,selected:N,mod:k,...P}=o,g=A(),D=b.useId(),T=i||D;return h.createElement(I,{...g.getStyles("option",{className:a,classNames:t,styles:r,style:c}),...P,ref:e,id:T,mod:["combobox-option",{"combobox-active":m,"combobox-disabled":y,"combobox-selected":N},k],role:"option",onClick:f=>{var R;y?f.preventDefault():((R=g.onOptionSubmit)==null||R.call(g,o.value,o),n==null||n(f))},onMouseDown:f=>{f.preventDefault(),d==null||d(f)},onMouseOver:f=>{g.resetSelectionOnOptionHover&&g.store.resetSelectedOption(),p==null||p(f)}})});U.classes=O;U.displayName="@mantine/core/ComboboxOption";const Ie={},Z=S((s,e)=>{const o=w("ComboboxOptions",Ie,s),{classNames:t,className:a,style:c,styles:r,id:l,onMouseDown:n,labelledBy:i,...m}=o,d=A(),p=fe(l);return b.useEffect(()=>{d.store.setListId(p)},[p]),h.createElement(I,{ref:e,...d.getStyles("options",{className:a,style:c,classNames:t,styles:r}),...m,id:p,role:"listbox","aria-labelledby":i,onMouseDown:y=>{y.preventDefault(),n==null||n(y)}})});Z.classes=O;Z.displayName="@mantine/core/ComboboxOptions";const ke={withAriaAttributes:!0,withKeyboardNavigation:!0},M=S((s,e)=>{const o=w("ComboboxSearch",ke,s),{classNames:t,styles:a,unstyled:c,vars:r,withAriaAttributes:l,onKeyDown:n,withKeyboardNavigation:i,size:m,...d}=o,p=A(),y=p.getStyles("search"),N=B({targetType:"input",withAriaAttributes:l,withKeyboardNavigation:i,withExpandedAttribute:!1,onKeyDown:n,autoComplete:"off"});return h.createElement(he,{ref:F(e,p.store.searchRef),classNames:[{input:y.className},t],styles:[{input:y.style},a],size:m||p.size,...N,...d,__staticSelector:"Combobox"})});M.classes=O;M.displayName="@mantine/core/ComboboxSearch";const De={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},te=S((s,e)=>{const{children:o,refProp:t,withKeyboardNavigation:a,withAriaAttributes:c,withExpandedAttribute:r,targetType:l,autoComplete:n,...i}=w("ComboboxTarget",De,s);if(!z(o))throw new Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const m=A(),d=B({targetType:l,withAriaAttributes:c,withKeyboardNavigation:a,withExpandedAttribute:r,onKeyDown:o.props.onKeyDown,autoComplete:n}),p=b.cloneElement(o,{...d,...i});return h.createElement($.Target,{ref:F(e,m.store.targetRef)},p)});te.displayName="@mantine/core/ComboboxTarget";function Re(s,e,o){for(let t=s-1;t>=0;t-=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t;if(o){for(let t=e.length-1;t>-1;t-=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t}return s}function $e(s,e,o){for(let t=s+1;t<e.length;t+=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t;if(o){for(let t=0;t<e.length;t+=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t}return s}function Le(s){for(let e=0;e<s.length;e+=1)if(!s[e].hasAttribute("data-combobox-disabled"))return e;return-1}function ze({defaultOpened:s,opened:e,onOpenedChange:o,onDropdownClose:t,onDropdownOpen:a,loop:c=!0,scrollBehavior:r="instant"}={}){const[l,n]=Ce({value:e,defaultValue:s,finalValue:!1,onChange:o}),i=b.useRef(null),m=b.useRef(-1),d=b.useRef(null),p=b.useRef(null),y=b.useRef(-1),N=b.useRef(-1),k=b.useRef(-1),P=b.useCallback((u="unknown")=>{l||(n(!0),a==null||a(u))},[n,a,l]),g=b.useCallback((u="unknown")=>{l&&(n(!1),t==null||t(u))},[n,t,l]),D=b.useCallback((u="unknown")=>{l?g(u):P(u)},[g,P,l]),T=b.useCallback(()=>{const u=document.querySelector(`#${i.current} [data-combobox-selected]`);u==null||u.removeAttribute("data-combobox-selected"),u==null||u.removeAttribute("aria-selected")},[]),f=b.useCallback(u=>{const v=document.getElementById(i.current),x=v==null?void 0:v.querySelectorAll("[data-combobox-option]");if(!x)return null;const E=u>=x.length?0:u<0?x.length-1:u;return m.current=E,x!=null&&x[E]&&!x[E].hasAttribute("data-combobox-disabled")?(T(),x[E].setAttribute("data-combobox-selected","true"),x[E].setAttribute("aria-selected","true"),x[E].scrollIntoView({block:"nearest",behavior:r}),x[E].id):null},[r,T]),R=b.useCallback(()=>{const u=document.querySelector(`#${i.current} [data-combobox-active]`);if(u){const v=document.querySelectorAll(`#${i.current} [data-combobox-option]`),x=Array.from(v).findIndex(E=>E===u);return f(x)}return f(0)},[f]),oe=b.useCallback(()=>f($e(m.current,document.querySelectorAll(`#${i.current} [data-combobox-option]`),c)),[f,c]),re=b.useCallback(()=>f(Re(m.current,document.querySelectorAll(`#${i.current} [data-combobox-option]`),c)),[f,c]),se=b.useCallback(()=>f(Le(document.querySelectorAll(`#${i.current} [data-combobox-option]`))),[f]),ne=b.useCallback((u="selected",v)=>{k.current=window.setTimeout(()=>{var Y;const x=document.querySelectorAll(`#${i.current} [data-combobox-option]`),E=Array.from(x).findIndex(ue=>ue.hasAttribute(`data-combobox-${u}`));m.current=E,v!=null&&v.scrollIntoView&&((Y=x[E])==null||Y.scrollIntoView({block:"nearest",behavior:r}))},0)},[]),ae=b.useCallback(()=>{m.current=-1,T()},[T]),ce=b.useCallback(()=>{const u=document.querySelectorAll(`#${i.current} [data-combobox-option]`),v=u==null?void 0:u[m.current];v==null||v.click()},[]),le=b.useCallback(u=>{i.current=u},[]),ie=b.useCallback(()=>{y.current=window.setTimeout(()=>d.current.focus(),0)},[]),de=b.useCallback(()=>{N.current=window.setTimeout(()=>p.current.focus(),0)},[]),be=b.useCallback(()=>m.current,[]);return b.useEffect(()=>()=>{window.clearTimeout(y.current),window.clearTimeout(N.current),window.clearTimeout(k.current)},[]),{dropdownOpened:l,openDropdown:P,closeDropdown:g,toggleDropdown:D,selectedOptionIndex:m.current,getSelectedOptionIndex:be,selectOption:f,selectFirstOption:se,selectActiveOption:R,selectNextOption:oe,selectPreviousOption:re,resetSelectedOption:ae,updateSelectedOptionIndex:ne,listId:i.current,setListId:le,clickSelectedOption:ce,searchRef:d,focusSearchInput:ie,targetRef:p,focusTarget:de}}const Fe={keepMounted:!0,withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0}},qe=Q((s,{size:e,dropdownPadding:o})=>({options:{"--combobox-option-fz":j(e),"--combobox-option-padding":L(e,"combobox-option-padding")},dropdown:{"--combobox-padding":o===void 0?void 0:xe(o),"--combobox-option-fz":j(e),"--combobox-option-padding":L(e,"combobox-option-padding")}}));function C(s){const e=w("Combobox",Fe,s),{classNames:o,styles:t,unstyled:a,children:c,store:r,vars:l,onOptionSubmit:n,onClose:i,size:m,dropdownPadding:d,resetSelectionOnOptionHover:p,__staticSelector:y,readOnly:N,...k}=e,P=ze(),g=r||P,D=J({name:y||"Combobox",classes:O,props:e,classNames:o,styles:t,unstyled:a,vars:l,varsResolver:qe}),T=()=>{i==null||i(),g.closeDropdown()};return h.createElement(ve,{value:{getStyles:D,store:g,onOptionSubmit:n,size:m,resetSelectionOnOptionHover:p,readOnly:N}},h.createElement($,{opened:g.dropdownOpened,...k,onClose:T,withRoles:!1,unstyled:a},c))}const Ke=s=>s;C.extend=Ke;C.classes=O;C.displayName="@mantine/core/Combobox";C.Target=te;C.Dropdown=K;C.Options=Z;C.Option=U;C.Search=M;C.Empty=_;C.Chevron=q;C.Footer=H;C.Header=G;C.EventsTarget=ee;C.DropdownTarget=X;C.Group=V;C.ClearButton=W;export{C,O as c,ze as u};