import{q as j,b as s,j as r,G as h}from"./app-0842237d.js";import{A as y}from"./ActionButton-41780f60.js";import{B as b}from"./BackButton-f26d12e9.js";import{u as g}from"./useForm-bb658ce6.js";import{C as _}from"./ContainerBox-2ec7a008.js";import{M as C}from"./MainLayout-b9e5f435.js";import{a as S}from"./route-426ef2aa.js";import{B as v}from"./Breadcrumbs-b9528ea9.js";import{A as w}from"./Anchor-e13e5b65.js";import{G as a}from"./Grid-e548b273.js";import{T as B}from"./Title-a0ed43dd.js";import{T as E}from"./TextInput-b20d0eac.js";import{T}from"./Textarea-9c758268.js";import{S as q}from"./Select-fffeb4d7.js";import{N as A}from"./NumberInput-e5c7b4b0.js";import"./createReactComponent-c737850d.js";import"./index-51272854.js";import"./FlashNotification-80b15f0d.js";import"./use-disclosure-eb93ce5d.js";import"./IconInfoCircle-c4cbed09.js";import"./IconCircleX-2c153941.js";import"./useWebSockets-33e5047c.js";import"./index-791a8db4.js";import"./useTasksStore-2673510b.js";import"./reorder-c78854a4.js";import"./_baseClone-98204728.js";import"./use-computed-color-scheme-7794acad.js";import"./Container-ff5d0a99.js";import"./Image-e655e620.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-f81784eb.js";import"./use-resolved-styles-api-6cf44df2.js";import"./Popover-f8e352cc.js";import"./DirectionProvider-8ec7ed91.js";import"./use-floating-auto-update-f3813b40.js";import"./use-uncontrolled-8c49da27.js";import"./Avatar-5e3d7158.js";import"./Text-0f25386e.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-b2e899c7.js";import"./IconUsers-8fe5a950.js";import"./ScrollArea-6eaed29f.js";import"./EmptyWithIcon-33d678f1.js";import"./datetime-a8debb17.js";import"./IconMessage-fdf47061.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-f908f42d.js";import"./Center-ca7815fd.js";import"./get-sorted-breakpoints-cdc16153.js";import"./get-base-value-ad2e8cbc.js";import"./InputBase-60d93754.js";import"./Input-da77b9d4.js";import"./create-optional-context-731c9784.js";import"./OptionsDropdown-11d3e2a8.js";import"./CheckIcon-5dce244a.js";import"./Combobox-1fa9834a.js";import"./clamp-73f6bef2.js";const G=({dropdowns:{companies:m,currencies:c}})=>{var p;const{item:e}=j().props,[l,d]=s.useState(),[t,u,i]=g("post",route("projects.update",e.id),{_method:"put",name:e.name,description:e.description||"",client_company_id:e.client_company_id||"",rate:e.rate/100||0});return s.useEffect(()=>{var n;let o=(n=c.find(x=>x.client_companies.find(f=>f.id.toString()===t.data.client_company_id)))==null?void 0:n.symbol;o&&d(o)},[t.data.client_company_id]),r.jsxs(r.Fragment,{children:[r.jsxs(v,{fz:14,mb:30,children:[r.jsx(w,{href:"#",onClick:()=>S("projects.index"),fz:14,children:"Projects"}),r.jsx("div",{children:"Edit"})]}),r.jsxs(a,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(a.Col,{span:"auto",children:r.jsx(B,{order:1,children:"Edit project"})}),r.jsx(a.Col,{span:"content"})]}),r.jsx(_,{maw:500,children:r.jsxs("form",{onSubmit:u,children:[r.jsx(E,{label:"Name",placeholder:"Project name",required:!0,mt:"md",value:t.data.name,onChange:o=>i("name",o.target.value),error:t.errors.name}),r.jsx(T,{label:"Description",placeholder:"Project description",mt:"md",autosize:!0,minRows:4,maxRows:8,value:t.data.description,onChange:o=>i("description",o.target.value)}),r.jsx(q,{label:"Company requesting work",placeholder:"Select company",required:!0,mt:"md",value:(p=t.data.client_company_id)==null?void 0:p.toString(),onChange:o=>i("client_company_id",o),data:m,error:t.errors.client_company_id}),r.jsx(A,{label:"Hourly rate",mt:"md",allowNegative:!1,clampBehavior:"strict",decimalScale:2,fixedDecimalScale:!0,prefix:l,value:t.data.rate,onChange:o=>i("rate",o),error:t.errors.rate}),r.jsxs(h,{justify:"space-between",mt:"xl",children:[r.jsx(b,{route:"projects.index"}),r.jsx(y,{loading:t.processing,children:"Update"})]})]})})]})};G.layout=m=>r.jsx(C,{title:"Edit project",children:m});export{G as default};