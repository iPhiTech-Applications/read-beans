import{q as n,j as r,G as c,a as d}from"./app-374f8179.js";import{S as x,A as b}from"./SearchInput-3d633920.js";import{p as j,a as h,T as u,b as f,P as g}from"./table-225d8677.js";import{M as y}from"./MainLayout-0488b167.js";import{a as C,b as a}from"./route-564d43e0.js";import T from"./TableRow-94a44b45.js";import{G as i}from"./Grid-5d8534e5.js";import{I as S}from"./IconPlus-ef57db88.js";import{T as m}from"./Table-b2a0497c.js";import"./use-disclosure-dc5fd7a6.js";import"./Tooltip-0b66e8a5.js";import"./DirectionProvider-7f2be802.js";import"./use-floating-auto-update-94ecc69c.js";import"./get-style-object-71cabcb5.js";import"./ActionIcon-6bed75e6.js";import"./IconArchive-9b9931d8.js";import"./createReactComponent-8eeb0f88.js";import"./TextInput-b134a2d1.js";import"./InputBase-229a26b3.js";import"./Input-cbe427a8.js";import"./create-optional-context-a355ac42.js";import"./IconSearch-28a5e80d.js";import"./IconX-826d5dc3.js";import"./Menu-a0964952.js";import"./use-resolved-styles-api-9ab1b421.js";import"./Popover-3f93f166.js";import"./use-uncontrolled-c541d6c8.js";import"./get-auto-contrast-value-58024fc4.js";import"./Text-54f93905.js";import"./Center-d0de108e.js";import"./FlashNotification-c0c57b3f.js";import"./IconInfoCircle-ba104c62.js";import"./IconCircleX-9c124521.js";import"./useWebSockets-9a8c1354.js";import"./index-4597ff56.js";import"./useTasksStore-623ae120.js";import"./reorder-1fd24999.js";import"./_baseClone-e732cfdc.js";import"./use-computed-color-scheme-87717321.js";import"./Container-5fe452f5.js";import"./Image-7c728a9b.js";import"./user-6639b4f0.js";import"./Avatar-2c990df2.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-50bd83d5.js";import"./IconUsers-7ba2e0c4.js";import"./ScrollArea-9a506a5f.js";import"./EmptyWithIcon-8d418a7d.js";import"./datetime-a3ed528b.js";import"./IconMessage-78bbe09b.js";import"./Title-8e6f5e48.js";import"./get-sorted-breakpoints-ad688b72.js";import"./TableRowActions-1533cbfa.js";import"./index-1f185179.js";import"./ConfirmModal-37455e94.js";import"./IconPencil-71dcb0ee.js";import"./IconDots-1660ad36.js";import"./ColorSwatch-22e4c3d2.js";import"./get-base-value-ad2e8cbc.js";const w=()=>{const{items:t}=n().props,e=j([{label:"Color",sortable:!1},{label:"Name",column:"name"},{label:"Actions",sortable:!1,visible:h("label")}]),p=t.data.length?t.data.map(o=>r.jsx(T,{item:o},o.id)):r.jsx(u,{colSpan:e.length}),s=o=>a({search:o}),l=o=>a(o);return r.jsxs(r.Fragment,{children:[r.jsxs(i,{justify:"space-between",align:"center",children:[r.jsx(i.Col,{span:"content",children:r.jsxs(c,{children:[r.jsx(x,{placeholder:"Search labels",search:s}),r.jsx(b,{})]})}),r.jsx(i.Col,{span:"content",children:can("create label")&&r.jsx(d,{leftSection:r.jsx(S,{size:14}),radius:"xl",onClick:()=>C("settings.labels.create"),children:"Create"})})]}),r.jsx(m.ScrollContainer,{maw:500,my:"lg",children:r.jsxs(m,{verticalSpacing:"sm",children:[r.jsx(f,{columns:e,sort:l}),r.jsx(m.Tbody,{children:p})]})}),r.jsx(g,{current:t.meta.current_page,pages:t.meta.last_page})]})};w.layout=t=>r.jsx(y,{title:"Labels",children:t});export{w as default};
