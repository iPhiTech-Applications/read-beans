import{q as c,j as t,G as l,U as d}from"./app-374f8179.js";import{E as f}from"./EmptyWithIcon-8d418a7d.js";import{N as x,M as j}from"./MainLayout-0488b167.js";import{u as h}from"./useWebSockets-9a8c1354.js";import{C as u}from"./ContainerBox-368f81f0.js";import{d as g,a as y}from"./datetime-a3ed528b.js";import{r as _}from"./route-564d43e0.js";import{G as s}from"./Grid-5d8534e5.js";import{T as b}from"./Title-8e6f5e48.js";import{S as n}from"./Stack-df36a12b.js";import{T as e}from"./Text-54f93905.js";import{C as N}from"./Center-d0de108e.js";import{I as C}from"./IconMessage-78bbe09b.js";import"./FlashNotification-c0c57b3f.js";import"./use-disclosure-dc5fd7a6.js";import"./IconInfoCircle-ba104c62.js";import"./createReactComponent-8eeb0f88.js";import"./IconCircleX-9c124521.js";import"./use-computed-color-scheme-87717321.js";import"./Container-5fe452f5.js";import"./Image-7c728a9b.js";import"./index-4597ff56.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-a0964952.js";import"./use-resolved-styles-api-9ab1b421.js";import"./Popover-3f93f166.js";import"./DirectionProvider-7f2be802.js";import"./use-floating-auto-update-94ecc69c.js";import"./use-uncontrolled-c541d6c8.js";import"./Avatar-2c990df2.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-50bd83d5.js";import"./IconUsers-7ba2e0c4.js";import"./ScrollArea-9a506a5f.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-6bed75e6.js";import"./get-sorted-breakpoints-ad688b72.js";import"./useTasksStore-623ae120.js";import"./reorder-1fd24999.js";import"./_baseClone-e732cfdc.js";import"./get-base-value-ad2e8cbc.js";const w="_notification_w4fj7_1",k={notification:w},T=()=>{const{groups:r}=c().props,{markAsRead:m}=h(),a=Object.keys(r),p=i=>{i.read_at===null&&m(i),_(i.link)};return t.jsxs(t.Fragment,{children:[t.jsxs(s,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[t.jsx(s.Col,{span:"auto",children:t.jsx(b,{order:1,children:"Notifications"})}),t.jsx(s.Col,{span:"content"})]}),t.jsx(u,{maw:550,children:a.length?t.jsx(n,{gap:20,children:a.map(i=>t.jsxs("div",{children:[t.jsxs(l,{justify:"space-between",align:"center",mb:10,children:[t.jsx(e,{fz:21,fw:600,children:i}),t.jsxs("div",{children:[t.jsx(e,{fz:14,fw:500,align:"right",children:g(r[i][0].created_at)}),t.jsx(e,{fz:11,c:"dimmed",mt:-2,children:y(r[i][0].created_at)})]})]}),t.jsx(n,{gap:14,children:r[i].map(o=>t.jsx(d,{onClick:()=>p(o),opacity:o.read_at?.5:1,className:k.notification,children:t.jsx(x,{title:o.title,subtitle:o.subtitle,datetime:o.created_at,read:o.read_at!==null})},o.id))})]},i))}):t.jsx(N,{mih:160,children:t.jsx(f,{title:"No notifications",subtitle:"List of recent notifications",icon:C})})})]})};T.layout=r=>t.jsx(j,{title:"Notifications",children:r});export{T as default};
