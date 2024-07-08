import{q as s,j as r,G as a}from"./app-374f8179.js";import{A as l}from"./ActionButton-a099a1e6.js";import{B as n}from"./BackButton-2349a7e6.js";import{u as d}from"./useForm-026f8df8.js";import{C as c}from"./ContainerBox-368f81f0.js";import{M as u}from"./MainLayout-0488b167.js";import{a as x}from"./route-564d43e0.js";import{B as f}from"./Breadcrumbs-5118094f.js";import{A as h}from"./Anchor-6c29c886.js";import{G as e}from"./Grid-5d8534e5.js";import{T as j}from"./Title-8e6f5e48.js";import{T as b}from"./TextInput-b134a2d1.js";import{C}from"./ColorInput-e0498b1c.js";import"./createReactComponent-8eeb0f88.js";import"./index-1f185179.js";import"./FlashNotification-c0c57b3f.js";import"./use-disclosure-dc5fd7a6.js";import"./IconInfoCircle-ba104c62.js";import"./IconCircleX-9c124521.js";import"./useWebSockets-9a8c1354.js";import"./index-4597ff56.js";import"./useTasksStore-623ae120.js";import"./reorder-1fd24999.js";import"./_baseClone-e732cfdc.js";import"./use-computed-color-scheme-87717321.js";import"./Container-5fe452f5.js";import"./Image-7c728a9b.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-a0964952.js";import"./use-resolved-styles-api-9ab1b421.js";import"./Popover-3f93f166.js";import"./DirectionProvider-7f2be802.js";import"./use-floating-auto-update-94ecc69c.js";import"./use-uncontrolled-c541d6c8.js";import"./Avatar-2c990df2.js";import"./Text-54f93905.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-50bd83d5.js";import"./IconUsers-7ba2e0c4.js";import"./ScrollArea-9a506a5f.js";import"./EmptyWithIcon-8d418a7d.js";import"./datetime-a3ed528b.js";import"./IconMessage-78bbe09b.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-6bed75e6.js";import"./Center-d0de108e.js";import"./get-sorted-breakpoints-ad688b72.js";import"./get-base-value-ad2e8cbc.js";import"./InputBase-229a26b3.js";import"./Input-cbe427a8.js";import"./create-optional-context-a355ac42.js";import"./ColorPicker-b49b5d65.js";import"./ColorSwatch-22e4c3d2.js";import"./clamp-73f6bef2.js";const g=()=>{const{item:o}=s().props,[t,p,m]=d("post",route("settings.labels.update",o.id),{_method:"put",name:o.name,color:o.color||""});return r.jsxs(r.Fragment,{children:[r.jsxs(f,{fz:14,mb:30,children:[r.jsx(h,{href:"#",onClick:()=>x("settings.labels.index"),fz:14,children:"Labels"}),r.jsx("div",{children:"Edit"})]}),r.jsxs(e,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(e.Col,{span:"auto",children:r.jsx(j,{order:1,children:"Edit label"})}),r.jsx(e.Col,{span:"content"})]}),r.jsx(c,{maw:400,children:r.jsxs("form",{onSubmit:p,children:[r.jsx(b,{label:"Name",placeholder:"Label name",required:!0,value:t.data.name,onChange:i=>m("name",i.target.value),error:t.errors.name}),r.jsx(C,{label:"Color",placeholder:"Label color",required:!0,mt:"md",swatches:["#343A40","#E03231","#C2255C","#9C36B5","#6741D9","#3B5BDB","#2771C2","#2A8599","#2B9267","#309E44","#66A810","#F08C00","#E7590D"],swatchesPerRow:7,value:t.data.color,onChange:i=>m("color",i),error:t.errors.color}),r.jsxs(a,{justify:"space-between",mt:"xl",children:[r.jsx(n,{route:"settings.labels.index"}),r.jsx(l,{loading:t.processing,children:"Update"})]})]})})]})};g.layout=o=>r.jsx(u,{title:"Edit user",children:o});export{g as default};