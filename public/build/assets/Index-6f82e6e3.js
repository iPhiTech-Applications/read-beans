import{q as n,j as r,G as c,a as d}from"./app-123ed893.js";import{S as x,A as j}from"./SearchInput-984a646d.js";import{p as u,a as h,T as b,b as f,P as g}from"./table-0772ec88.js";import{M as y}from"./MainLayout-d756ba11.js";import{a as T,b as s}from"./route-002f9c56.js";import C from"./TableRow-712ba7b3.js";import{G as i}from"./Grid-fbf7d7b6.js";import{I as S}from"./IconPlus-fea00f2b.js";import{T as m}from"./Table-9ea1e6d9.js";import"./use-disclosure-d59cdd80.js";import"./Tooltip-e94bcd90.js";import"./DirectionProvider-739d2a13.js";import"./use-floating-auto-update-c5e4584a.js";import"./get-style-object-71cabcb5.js";import"./ActionIcon-4294e0c7.js";import"./IconArchive-96459c6e.js";import"./createReactComponent-7e1f628b.js";import"./TextInput-17962b90.js";import"./InputBase-ad5899ec.js";import"./Input-0c5af4bd.js";import"./create-optional-context-f78ae3e4.js";import"./IconSearch-8eff4c2e.js";import"./IconX-842eed75.js";import"./Menu-d1d9bfc4.js";import"./use-resolved-styles-api-6ecd5aea.js";import"./Popover-3d4b00cf.js";import"./use-uncontrolled-fce7b9fe.js";import"./get-auto-contrast-value-58024fc4.js";import"./Text-7a8e0ced.js";import"./Center-5909643e.js";import"./FlashNotification-b862f807.js";import"./IconInfoCircle-409ef499.js";import"./IconCircleX-fc7128ba.js";import"./useWebSockets-fcdec77b.js";import"./index-ffe472df.js";import"./useTasksStore-12e71cc3.js";import"./reorder-d676a14f.js";import"./_baseClone-c0d3f5ea.js";import"./use-computed-color-scheme-c3233f71.js";import"./Container-2b0776cc.js";import"./Image-34973361.js";import"./user-6639b4f0.js";import"./Avatar-4dc21544.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-598e38ee.js";import"./IconUsers-406c3d56.js";import"./ScrollArea-8472fe95.js";import"./EmptyWithIcon-88b1d926.js";import"./datetime-cf4f36e6.js";import"./IconMessage-c104645d.js";import"./Title-1ca1d242.js";import"./get-sorted-breakpoints-230439b0.js";import"./TableRowActions-e2ff1294.js";import"./index-136d966c.js";import"./ConfirmModal-4226d1a5.js";import"./IconPencil-56deb085.js";import"./IconDots-21feca73.js";import"./get-base-value-ad2e8cbc.js";const w=()=>{const{items:o}=n().props,e=u([{label:"Name",column:"name"},{label:"Permissions count",sortable:!1},{label:"Actions",sortable:!1,visible:h("role")}]),p=o.data.length?o.data.map(t=>r.jsx(C,{item:t},t.id)):r.jsx(b,{colSpan:e.length}),a=t=>s({search:t}),l=t=>s(t);return r.jsxs(r.Fragment,{children:[r.jsxs(i,{justify:"space-between",align:"center",children:[r.jsx(i.Col,{span:"content",children:r.jsxs(c,{children:[r.jsx(x,{placeholder:"Search roles",search:a}),r.jsx(j,{})]})}),r.jsx(i.Col,{span:"content",children:can("create role")&&r.jsx(d,{leftSection:r.jsx(S,{size:14}),radius:"xl",onClick:()=>T("settings.roles.create"),children:"Create"})})]}),r.jsx(m.ScrollContainer,{maw:500,my:"lg",children:r.jsxs(m,{verticalSpacing:"sm",children:[r.jsx(f,{columns:e,sort:l}),r.jsx(m.Tbody,{children:p})]})}),r.jsx(g,{current:o.meta.current_page,pages:o.meta.last_page})]})};w.layout=o=>r.jsx(y,{title:"Roles",children:o});export{w as default};
