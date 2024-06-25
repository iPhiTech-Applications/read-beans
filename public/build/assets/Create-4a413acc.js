import{j as r,G as a}from"./app-7bc20a4e.js";import{A as p}from"./ActionButton-135249d1.js";import{B as s}from"./BackButton-6f293b9d.js";import{u as l}from"./useForm-2fe29813.js";import{C as n}from"./ContainerBox-4644941b.js";import{M as c}from"./MainLayout-0d309940.js";import{a as d}from"./route-93322184.js";import{B as u}from"./Breadcrumbs-7c3c5554.js";import{A as x}from"./Anchor-53b71cb6.js";import{G as e}from"./Grid-242c5098.js";import{T as f}from"./Title-ae7f3e37.js";import{T as h}from"./TextInput-a85403e2.js";import{C as j}from"./ColorInput-1a4ee5eb.js";import"./createReactComponent-0bbe300d.js";import"./index-0b34c5e2.js";import"./FlashNotification-5d50b84b.js";import"./use-disclosure-c28c9ea4.js";import"./IconInfoCircle-e415df20.js";import"./IconCircleX-6c443b41.js";import"./useWebSockets-c1296dd7.js";import"./index-d33ca4cd.js";import"./useTasksStore-7dac92b7.js";import"./reorder-22208721.js";import"./_baseClone-594d8115.js";import"./use-computed-color-scheme-709c2195.js";import"./Container-1a960f39.js";import"./Image-22e73fa0.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-2aba97af.js";import"./use-resolved-styles-api-22476df7.js";import"./Popover-708222d0.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./use-uncontrolled-0eb68696.js";import"./Avatar-b949274f.js";import"./Text-160f2c95.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-9e3f25d9.js";import"./IconUsers-0a21c95d.js";import"./ScrollArea-383a5d94.js";import"./EmptyWithIcon-60162588.js";import"./datetime-7dece6f7.js";import"./IconMessage-d88e8f8e.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-8588dfb6.js";import"./Center-2e9cafcb.js";import"./get-sorted-breakpoints-b589f481.js";import"./get-base-value-ad2e8cbc.js";import"./InputBase-7a5da2ab.js";import"./Input-e73c8c99.js";import"./create-optional-context-1a5c9a08.js";import"./ColorPicker-24b46372.js";import"./ColorSwatch-67f719b5.js";import"./clamp-73f6bef2.js";const C=()=>{const[o,m,i]=l("post",route("settings.labels.store"),{name:"",color:""});return r.jsxs(r.Fragment,{children:[r.jsxs(u,{fz:14,mb:30,children:[r.jsx(x,{href:"#",onClick:()=>d("settings.labels.index"),fz:14,children:"Labels"}),r.jsx("div",{children:"Create"})]}),r.jsxs(e,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(e.Col,{span:"auto",children:r.jsx(f,{order:1,children:"Create label"})}),r.jsx(e.Col,{span:"content"})]}),r.jsx(n,{maw:400,children:r.jsxs("form",{onSubmit:m,children:[r.jsx(h,{label:"Name",placeholder:"Label name",required:!0,value:o.data.name,onChange:t=>i("name",t.target.value),error:o.errors.name}),r.jsx(j,{label:"Color",placeholder:"Label color",required:!0,mt:"md",swatches:["#343A40","#E03231","#C2255C","#9C36B5","#6741D9","#3B5BDB","#2771C2","#2A8599","#2B9267","#309E44","#66A810","#F08C00","#E7590D"],swatchesPerRow:7,value:o.data.color,onChange:t=>i("color",t),error:o.errors.color}),r.jsxs(a,{justify:"space-between",mt:"xl",children:[r.jsx(s,{route:"settings.labels.index"}),r.jsx(p,{loading:o.processing,children:"Create"})]})]})})]})};C.layout=o=>r.jsx(c,{title:"Create label",children:o});export{C as default};
