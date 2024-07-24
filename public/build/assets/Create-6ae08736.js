import{j as r,G as a}from"./app-123ed893.js";import{A as p}from"./ActionButton-39344ba9.js";import{B as s}from"./BackButton-e18afed3.js";import{u as l}from"./useForm-9d1dcdb2.js";import{C as n}from"./ContainerBox-8c45766b.js";import{M as c}from"./MainLayout-d756ba11.js";import{a as d}from"./route-002f9c56.js";import{B as u}from"./Breadcrumbs-6a2e8819.js";import{A as x}from"./Anchor-f8a41b55.js";import{G as e}from"./Grid-fbf7d7b6.js";import{T as f}from"./Title-1ca1d242.js";import{T as h}from"./TextInput-17962b90.js";import{C as j}from"./ColorInput-4e9d4ced.js";import"./createReactComponent-7e1f628b.js";import"./index-136d966c.js";import"./FlashNotification-b862f807.js";import"./use-disclosure-d59cdd80.js";import"./IconInfoCircle-409ef499.js";import"./IconCircleX-fc7128ba.js";import"./useWebSockets-fcdec77b.js";import"./index-ffe472df.js";import"./useTasksStore-12e71cc3.js";import"./reorder-d676a14f.js";import"./_baseClone-c0d3f5ea.js";import"./use-computed-color-scheme-c3233f71.js";import"./Container-2b0776cc.js";import"./Image-34973361.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-d1d9bfc4.js";import"./use-resolved-styles-api-6ecd5aea.js";import"./Popover-3d4b00cf.js";import"./DirectionProvider-739d2a13.js";import"./use-floating-auto-update-c5e4584a.js";import"./use-uncontrolled-fce7b9fe.js";import"./Avatar-4dc21544.js";import"./Text-7a8e0ced.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-598e38ee.js";import"./IconUsers-406c3d56.js";import"./ScrollArea-8472fe95.js";import"./EmptyWithIcon-88b1d926.js";import"./datetime-cf4f36e6.js";import"./IconMessage-c104645d.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-4294e0c7.js";import"./Center-5909643e.js";import"./get-sorted-breakpoints-230439b0.js";import"./get-base-value-ad2e8cbc.js";import"./InputBase-ad5899ec.js";import"./Input-0c5af4bd.js";import"./create-optional-context-f78ae3e4.js";import"./ColorPicker-2b245e06.js";import"./ColorSwatch-d7027f3b.js";import"./clamp-73f6bef2.js";const C=()=>{const[o,m,i]=l("post",route("settings.labels.store"),{name:"",color:""});return r.jsxs(r.Fragment,{children:[r.jsxs(u,{fz:14,mb:30,children:[r.jsx(x,{href:"#",onClick:()=>d("settings.labels.index"),fz:14,children:"Labels"}),r.jsx("div",{children:"Create"})]}),r.jsxs(e,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(e.Col,{span:"auto",children:r.jsx(f,{order:1,children:"Create label"})}),r.jsx(e.Col,{span:"content"})]}),r.jsx(n,{maw:400,children:r.jsxs("form",{onSubmit:m,children:[r.jsx(h,{label:"Name",placeholder:"Label name",required:!0,value:o.data.name,onChange:t=>i("name",t.target.value),error:o.errors.name}),r.jsx(j,{label:"Color",placeholder:"Label color",required:!0,mt:"md",swatches:["#343A40","#E03231","#C2255C","#9C36B5","#6741D9","#3B5BDB","#2771C2","#2A8599","#2B9267","#309E44","#66A810","#F08C00","#E7590D"],swatchesPerRow:7,value:o.data.color,onChange:t=>i("color",t),error:o.errors.color}),r.jsxs(a,{justify:"space-between",mt:"xl",children:[r.jsx(s,{route:"settings.labels.index"}),r.jsx(p,{loading:o.processing,children:"Create"})]})]})})]})};C.layout=o=>r.jsx(c,{title:"Create label",children:o});export{C as default};