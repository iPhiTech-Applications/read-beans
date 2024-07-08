import{q as s,j as r,G as a}from"./app-0842237d.js";import{A as l}from"./ActionButton-41780f60.js";import{B as n}from"./BackButton-f26d12e9.js";import{u as d}from"./useForm-bb658ce6.js";import{C as c}from"./ContainerBox-2ec7a008.js";import{M as u}from"./MainLayout-b9e5f435.js";import{a as x}from"./route-426ef2aa.js";import{B as f}from"./Breadcrumbs-b9528ea9.js";import{A as h}from"./Anchor-e13e5b65.js";import{G as e}from"./Grid-e548b273.js";import{T as j}from"./Title-a0ed43dd.js";import{T as b}from"./TextInput-b20d0eac.js";import{C}from"./ColorInput-c2fcf15d.js";import"./createReactComponent-c737850d.js";import"./index-51272854.js";import"./FlashNotification-80b15f0d.js";import"./use-disclosure-eb93ce5d.js";import"./IconInfoCircle-c4cbed09.js";import"./IconCircleX-2c153941.js";import"./useWebSockets-33e5047c.js";import"./index-791a8db4.js";import"./useTasksStore-2673510b.js";import"./reorder-c78854a4.js";import"./_baseClone-98204728.js";import"./use-computed-color-scheme-7794acad.js";import"./Container-ff5d0a99.js";import"./Image-e655e620.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-f81784eb.js";import"./use-resolved-styles-api-6cf44df2.js";import"./Popover-f8e352cc.js";import"./DirectionProvider-8ec7ed91.js";import"./use-floating-auto-update-f3813b40.js";import"./use-uncontrolled-8c49da27.js";import"./Avatar-5e3d7158.js";import"./Text-0f25386e.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-b2e899c7.js";import"./IconUsers-8fe5a950.js";import"./ScrollArea-6eaed29f.js";import"./EmptyWithIcon-33d678f1.js";import"./datetime-a8debb17.js";import"./IconMessage-fdf47061.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-f908f42d.js";import"./Center-ca7815fd.js";import"./get-sorted-breakpoints-cdc16153.js";import"./get-base-value-ad2e8cbc.js";import"./InputBase-60d93754.js";import"./Input-da77b9d4.js";import"./create-optional-context-731c9784.js";import"./ColorPicker-c2794357.js";import"./ColorSwatch-3b36ccc9.js";import"./clamp-73f6bef2.js";const g=()=>{const{item:o}=s().props,[t,p,m]=d("post",route("settings.labels.update",o.id),{_method:"put",name:o.name,color:o.color||""});return r.jsxs(r.Fragment,{children:[r.jsxs(f,{fz:14,mb:30,children:[r.jsx(h,{href:"#",onClick:()=>x("settings.labels.index"),fz:14,children:"Labels"}),r.jsx("div",{children:"Edit"})]}),r.jsxs(e,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(e.Col,{span:"auto",children:r.jsx(j,{order:1,children:"Edit label"})}),r.jsx(e.Col,{span:"content"})]}),r.jsx(c,{maw:400,children:r.jsxs("form",{onSubmit:p,children:[r.jsx(b,{label:"Name",placeholder:"Label name",required:!0,value:t.data.name,onChange:i=>m("name",i.target.value),error:t.errors.name}),r.jsx(C,{label:"Color",placeholder:"Label color",required:!0,mt:"md",swatches:["#343A40","#E03231","#C2255C","#9C36B5","#6741D9","#3B5BDB","#2771C2","#2A8599","#2B9267","#309E44","#66A810","#F08C00","#E7590D"],swatchesPerRow:7,value:t.data.color,onChange:i=>m("color",i),error:t.errors.color}),r.jsxs(a,{justify:"space-between",mt:"xl",children:[r.jsx(n,{route:"settings.labels.index"}),r.jsx(l,{loading:t.processing,children:"Update"})]})]})})]})};g.layout=o=>r.jsx(u,{title:"Edit user",children:o});export{g as default};
