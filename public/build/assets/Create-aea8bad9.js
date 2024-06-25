import{q as c,j as r,G as p}from"./app-7bc20a4e.js";import{A as u}from"./ActionButton-135249d1.js";import{B as x}from"./BackButton-6f293b9d.js";import{u as j}from"./useForm-2fe29813.js";import{C as f}from"./ContainerBox-4644941b.js";import{M as h}from"./MainLayout-0d309940.js";import{a as C}from"./route-93322184.js";import{B as g}from"./Breadcrumbs-7c3c5554.js";import{A as b}from"./Anchor-53b71cb6.js";import{G as m}from"./Grid-242c5098.js";import{T as a}from"./Title-ae7f3e37.js";import{T as B}from"./TextInput-a85403e2.js";import{F as y}from"./Fieldset-b9843fbd.js";import{C as n}from"./Chip-5c28d4b8.js";import"./createReactComponent-0bbe300d.js";import"./index-0b34c5e2.js";import"./FlashNotification-5d50b84b.js";import"./use-disclosure-c28c9ea4.js";import"./IconInfoCircle-e415df20.js";import"./IconCircleX-6c443b41.js";import"./useWebSockets-c1296dd7.js";import"./index-d33ca4cd.js";import"./useTasksStore-7dac92b7.js";import"./reorder-22208721.js";import"./_baseClone-594d8115.js";import"./use-computed-color-scheme-709c2195.js";import"./Container-1a960f39.js";import"./Image-22e73fa0.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-2aba97af.js";import"./use-resolved-styles-api-22476df7.js";import"./Popover-708222d0.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./use-uncontrolled-0eb68696.js";import"./Avatar-b949274f.js";import"./Text-160f2c95.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-9e3f25d9.js";import"./IconUsers-0a21c95d.js";import"./ScrollArea-383a5d94.js";import"./EmptyWithIcon-60162588.js";import"./datetime-7dece6f7.js";import"./IconMessage-d88e8f8e.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-8588dfb6.js";import"./Center-2e9cafcb.js";import"./get-sorted-breakpoints-b589f481.js";import"./get-base-value-ad2e8cbc.js";import"./InputBase-7a5da2ab.js";import"./Input-e73c8c99.js";import"./create-optional-context-1a5c9a08.js";import"./CheckIcon-099263f9.js";const G=()=>{const{allPermissionsGrouped:e}=c().props,[o,l,s]=j("post",route("settings.roles.store"),{name:"",permissions:[]}),d=t=>{o.data.permissions.includes(t)?s("permissions",o.data.permissions.filter(i=>i!==t)):s("permissions",[...o.data.permissions,t])};return r.jsxs(r.Fragment,{children:[r.jsxs(g,{fz:14,mb:30,children:[r.jsx(b,{href:"#",onClick:()=>C("settings.roles.index"),fz:14,children:"Roles"}),r.jsx("div",{children:"Create"})]}),r.jsxs(m,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(m.Col,{span:"auto",children:r.jsx(a,{order:1,children:"Create role"})}),r.jsx(m.Col,{span:"content"})]}),r.jsx(f,{maw:700,children:r.jsxs("form",{onSubmit:l,children:[r.jsx(B,{label:"Name",placeholder:"Role name",required:!0,value:o.data.name,onChange:t=>s("name",t.target.value),error:o.errors.name}),r.jsx(a,{order:3,mt:"xl",children:"Permissions"}),Object.keys(e).map(t=>r.jsx(y,{legend:t,tt:"capitalize",mt:"sm",children:r.jsx(n.Group,{multiple:!0,children:r.jsx(p,{justify:"start",gap:"sm",children:e[t].map(i=>r.jsx(n,{radius:"sm",checked:o.data.permissions.includes(i),onClick:()=>d(i),children:i},i))})})},t)),r.jsxs(p,{justify:"space-between",mt:"xl",children:[r.jsx(x,{route:"settings.roles.index"}),r.jsx(u,{loading:o.processing,children:"Create"})]})]})})]})};G.layout=e=>r.jsx(h,{title:"Create role",children:e});export{G as default};
