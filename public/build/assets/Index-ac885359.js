import{q as n,j as t,G as c,a as u}from"./app-0842237d.js";import{S as d,A as x}from"./SearchInput-4f986030.js";import{p as b,a as h,T as j,b as f,P as g}from"./table-649723e6.js";import{M as y}from"./MainLayout-b9e5f435.js";import{a as T,b as a}from"./route-426ef2aa.js";import v from"./TableRow-2eb6a065.js";import{G as i}from"./Grid-e548b273.js";import{I as C}from"./IconPlus-5c519c74.js";import{T as m}from"./Table-92ee78f1.js";import"./use-disclosure-eb93ce5d.js";import"./Tooltip-0fe109d8.js";import"./DirectionProvider-8ec7ed91.js";import"./use-floating-auto-update-f3813b40.js";import"./get-style-object-71cabcb5.js";import"./ActionIcon-f908f42d.js";import"./IconArchive-d0ae841f.js";import"./createReactComponent-c737850d.js";import"./TextInput-b20d0eac.js";import"./InputBase-60d93754.js";import"./Input-da77b9d4.js";import"./create-optional-context-731c9784.js";import"./IconSearch-646771d6.js";import"./IconX-fad75c2c.js";import"./Menu-f81784eb.js";import"./use-resolved-styles-api-6cf44df2.js";import"./Popover-f8e352cc.js";import"./use-uncontrolled-8c49da27.js";import"./get-auto-contrast-value-58024fc4.js";import"./Text-0f25386e.js";import"./Center-ca7815fd.js";import"./FlashNotification-80b15f0d.js";import"./IconInfoCircle-c4cbed09.js";import"./IconCircleX-2c153941.js";import"./useWebSockets-33e5047c.js";import"./index-791a8db4.js";import"./useTasksStore-2673510b.js";import"./reorder-c78854a4.js";import"./_baseClone-98204728.js";import"./use-computed-color-scheme-7794acad.js";import"./Container-ff5d0a99.js";import"./Image-e655e620.js";import"./user-6639b4f0.js";import"./Avatar-5e3d7158.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-b2e899c7.js";import"./IconUsers-8fe5a950.js";import"./ScrollArea-6eaed29f.js";import"./EmptyWithIcon-33d678f1.js";import"./datetime-a8debb17.js";import"./IconMessage-fdf47061.js";import"./Title-a0ed43dd.js";import"./get-sorted-breakpoints-cdc16153.js";import"./TableRowActions-bbc57dbc.js";import"./index-51272854.js";import"./ConfirmModal-674b71fb.js";import"./IconPencil-19c34536.js";import"./IconDots-a935851c.js";import"./currency-edacadb9.js";import"./file-a40a15db.js";import"./StatusDropdown-5eb00dae.js";import"./Pill-0610b8f5.js";import"./IconCheck-c8919a1d.js";import"./Anchor-e13e5b65.js";import"./HoverCard-4bb3379a.js";import"./get-base-value-ad2e8cbc.js";const S=()=>{const{items:o}=n().props,e=b([{label:"Number",column:"number"},{label:"Status",column:"status"},{label:"Company",column:"name"},{label:"Note",column:"note"},{label:"Total",column:"amount"},{label:"Total with tax",column:"amount_with_tax"},{label:"Payment due",column:"due_date"},{label:"Created",column:"created_at"},{label:"Actions",sortable:!1,visible:h("invoice")}]);let p=o.data.length?o.data.map(r=>t.jsx(v,{item:r},r.id)):t.jsx(j,{colSpan:e.length});const s=r=>a({search:r}),l=r=>a(r);return t.jsxs(t.Fragment,{children:[t.jsxs(i,{justify:"space-between",align:"center",children:[t.jsx(i.Col,{span:"content",children:t.jsxs(c,{children:[t.jsx(d,{placeholder:"Search invoices",search:s}),t.jsx(x,{})]})}),t.jsx(i.Col,{span:"content",children:can("create invoice")&&t.jsx(u,{leftSection:t.jsx(C,{size:14}),radius:"xl",onClick:()=>T("invoices.create"),children:"Create"})})]}),t.jsx(m.ScrollContainer,{miw:800,my:"lg",children:t.jsxs(m,{verticalSpacing:"sm",children:[t.jsx(f,{columns:e,sort:l}),t.jsx(m.Tbody,{children:p})]})}),t.jsx(g,{current:o.meta.current_page,pages:o.meta.last_page})]})};S.layout=o=>t.jsx(y,{title:"Invoices",children:o});export{S as default};