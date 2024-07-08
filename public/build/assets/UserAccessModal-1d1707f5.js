import{f as R,e as F,h as M,R as _,B as P,i as U,r as h,s as C,al as S,j as s,b as c,l as E,a as A}from"./app-0842237d.js";import{u as B}from"./useForm-bb658ce6.js";import{h as f}from"./user-6639b4f0.js";import{T as N}from"./Text-0f25386e.js";import{M as g}from"./MultiSelect-b18d0e84.js";import{F as q}from"./Flex-3eec32a1.js";import"./index-51272854.js";import"./use-resolved-styles-api-6cf44df2.js";import"./OptionsDropdown-11d3e2a8.js";import"./CheckIcon-5dce244a.js";import"./ScrollArea-6eaed29f.js";import"./DirectionProvider-8ec7ed91.js";import"./Combobox-1fa9834a.js";import"./Popover-f8e352cc.js";import"./use-floating-auto-update-f3813b40.js";import"./use-uncontrolled-8c49da27.js";import"./Input-da77b9d4.js";import"./create-optional-context-731c9784.js";import"./InputBase-60d93754.js";import"./Pill-0610b8f5.js";import"./PillsInput-ce9d654a.js";var j={root:"m-18320242","skeleton-fade":"m-299c329c"};const T={visible:!0,animate:!0},V=U((t,{width:r,height:a,radius:l,circle:i})=>({root:{"--skeleton-height":h(a),"--skeleton-width":i?h(a):h(r),"--skeleton-radius":i?"1000px":l===void 0?void 0:C(l)}})),n=R((t,r)=>{const a=F("Skeleton",T,t),{classNames:l,className:i,style:m,styles:d,unstyled:o,vars:u,width:p,height:x,circle:e,visible:v,radius:$,animate:b,mod:w,...y}=a,k=M({name:"Skeleton",classes:j,props:a,className:i,style:m,classNames:l,styles:d,unstyled:o,vars:u,varsResolver:V});return _.createElement(P,{ref:r,...k("root"),mod:[{visible:v,animate:b},w],...y})});n.classes=j;n.displayName="@mantine/core/Skeleton";function z({item:t}){const[r,a]=c.useState(!0),[l,i]=c.useState([]),[m,d]=c.useState([]),[o,u,p]=B("post",route("projects.user_access",t.id),{users:t.users_with_access.filter(e=>!f(e,["admin","client"])).map(e=>e.id.toString()),clients:t.users_with_access.filter(e=>f(e,["client"])&&e.reason!=="company owner").map(e=>e.id.toString())}),x=e=>{u(e,{onSuccess:()=>S.closeAll(),preserveScroll:!0})};return c.useEffect(()=>{E.get(route("dropdown.values",["users","clients"])).then(({data:e})=>{i([...e.users]),d([...e.clients])}).catch(()=>alert("Something went wrong, failed to load dropdown values")).finally(()=>a(!1))},[o.data]),s.jsxs("form",{onSubmit:x,children:[r?s.jsxs(s.Fragment,{children:[s.jsx(n,{height:10,width:50,mt:8,radius:"xl"}),s.jsx(n,{height:25,mt:10,radius:"xl"}),s.jsx(n,{height:10,width:50,mt:25,radius:"xl"}),s.jsx(n,{height:25,mt:10,radius:"xl"})]}):s.jsxs(s.Fragment,{children:[s.jsx(g,{label:"Users",placeholder:"Select users",searchable:!0,value:r?[]:o.data.users,onChange:e=>p("users",e),data:l,error:o.errors.users}),s.jsx(g,{label:"Clients",placeholder:"Select clients",searchable:!0,mt:"md",value:r?[]:o.data.clients,onChange:e=>p("clients",e),data:m,error:o.errors.clients})]}),s.jsx(q,{justify:"flex-end",mt:"xl",children:s.jsx(A,{type:"submit",w:100,disabled:r,loading:o.processing,children:"Save"})})]})}const O=t=>{S.open({title:s.jsx(N,{size:"xl",fw:700,mb:-10,children:"User access"}),centered:!0,padding:"xl",overlayProps:{backgroundOpacity:.55,blur:3},children:s.jsx(z,{item:t})})},ce=O;export{ce as default};