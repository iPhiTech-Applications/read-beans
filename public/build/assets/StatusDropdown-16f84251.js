import{j as t,r as e,y as c}from"./app-7bc20a4e.js";import{M as r}from"./Menu-2aba97af.js";import{P as m}from"./Pill-50317cb8.js";import{I as h}from"./IconPlus-7f567d31.js";import{c as p}from"./createReactComponent-0bbe300d.js";import{I as d}from"./IconCheck-3f1ac158.js";import"./use-resolved-styles-api-22476df7.js";import"./Popover-708222d0.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./use-uncontrolled-0eb68696.js";import"./create-optional-context-1a5c9a08.js";var u=p("mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]);function b({invoiceId:o,status:n}){const s=(i,l)=>{c.put(route("invoices.status",i),{status:l})},a=i=>{if(i==="new")return"blue";if(i==="sent")return"yellow";if(i==="paid")return"green"};return t.jsxs(r,{withArrow:!0,shadow:"md",width:120,disabled:!can("change invoice status"),children:[t.jsx(r.Target,{children:t.jsx(m,{size:"sm",fw:600,variant:"default",bg:a(n),c:"white",styles:{label:{cursor:can("change invoice status")?"pointer":"default"},root:{cursor:"pointer"}},children:n})}),t.jsxs(r.Dropdown,{children:[t.jsx(r.Item,{leftSection:t.jsx(h,{style:{width:e(14),height:e(14)}}),onClick:()=>s(o,"new"),children:"New"}),t.jsx(r.Item,{my:5,leftSection:t.jsx(u,{style:{width:e(14),height:e(14)}}),onClick:()=>s(o,"sent"),children:"Sent"}),t.jsx(r.Item,{leftSection:t.jsx(d,{style:{width:e(14),height:e(14)}}),onClick:()=>s(o,"paid"),children:"Paid"})]})]})}export{b as default};
