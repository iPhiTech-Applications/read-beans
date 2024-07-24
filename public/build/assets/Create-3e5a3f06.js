import{j as r,G as l}from"./app-123ed893.js";import{A as d}from"./ActionButton-39344ba9.js";import{B as u}from"./BackButton-e18afed3.js";import{u as c}from"./useForm-9d1dcdb2.js";import{u as h}from"./useRoles-3859a6fe.js";import{C as x}from"./ContainerBox-8c45766b.js";import{M as f}from"./MainLayout-d756ba11.js";import{a as j}from"./route-002f9c56.js";import{g}from"./user-6639b4f0.js";import{B as b}from"./Breadcrumbs-6a2e8819.js";import{A as m}from"./Anchor-f8a41b55.js";import{G as a}from"./Grid-fbf7d7b6.js";import{T as v}from"./Title-1ca1d242.js";import{A as C}from"./Avatar-4dc21544.js";import{F as w}from"./FileInput-d036affc.js";import{T as B}from"./Text-7a8e0ced.js";import{T as i}from"./TextInput-17962b90.js";import{M as _}from"./MultiSelect-297ee2d8.js";import{N as y}from"./NumberInput-c7961359.js";import{D as U}from"./Divider-18293859.js";import{P as n}from"./PasswordInput-f8efb2ff.js";import"./createReactComponent-7e1f628b.js";import"./index-136d966c.js";import"./FlashNotification-b862f807.js";import"./use-disclosure-d59cdd80.js";import"./IconInfoCircle-409ef499.js";import"./IconCircleX-fc7128ba.js";import"./useWebSockets-fcdec77b.js";import"./index-ffe472df.js";import"./useTasksStore-12e71cc3.js";import"./reorder-d676a14f.js";import"./_baseClone-c0d3f5ea.js";import"./use-computed-color-scheme-c3233f71.js";import"./Container-2b0776cc.js";import"./Image-34973361.js";import"./get-style-object-71cabcb5.js";import"./Menu-d1d9bfc4.js";import"./use-resolved-styles-api-6ecd5aea.js";import"./Popover-3d4b00cf.js";import"./DirectionProvider-739d2a13.js";import"./use-floating-auto-update-c5e4584a.js";import"./use-uncontrolled-fce7b9fe.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-598e38ee.js";import"./IconUsers-406c3d56.js";import"./ScrollArea-8472fe95.js";import"./EmptyWithIcon-88b1d926.js";import"./datetime-cf4f36e6.js";import"./IconMessage-c104645d.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-4294e0c7.js";import"./Center-5909643e.js";import"./get-sorted-breakpoints-230439b0.js";import"./get-base-value-ad2e8cbc.js";import"./Input-0c5af4bd.js";import"./create-optional-context-f78ae3e4.js";import"./InputBase-ad5899ec.js";import"./OptionsDropdown-daf5eb56.js";import"./CheckIcon-5474d37b.js";import"./Combobox-8cde05d4.js";import"./Pill-bab5faf2.js";import"./PillsInput-73e8ed46.js";import"./clamp-73f6bef2.js";const T=()=>{const{getDropdownValues:s}=h(),[e,p,t]=c("post",route("users.store"),{avatar:null,job_title:"",name:"",phone:"",rate:0,email:"",password:"",password_confirmation:"",roles:[]});return r.jsxs(r.Fragment,{children:[r.jsxs(b,{fz:14,mb:30,children:[r.jsx(m,{href:"#",onClick:()=>j("users.index"),fz:14,children:"Users"}),r.jsx("div",{children:"Create"})]}),r.jsxs(a,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(a.Col,{span:"auto",children:r.jsx(v,{order:1,children:"Create user"})}),r.jsx(a.Col,{span:"content"})]}),r.jsx(x,{maw:600,children:r.jsxs("form",{onSubmit:o=>p(o,{forceFormData:!0}),children:[r.jsxs(a,{justify:"flex-start",align:"flex-start",gutter:"lg",children:[r.jsx(a.Col,{span:"content",children:r.jsx(C,{src:e.data.avatar!==null?URL.createObjectURL(e.data.avatar):null,size:120,color:"blue",children:g(e.data.name)})}),r.jsxs(a.Col,{span:"auto",children:[r.jsx(w,{label:"Profile image",placeholder:"Choose image",accept:"image/png,image/jpeg",onChange:o=>t("avatar",o),clearable:!0,error:e.errors.avatar}),r.jsxs(B,{size:"xs",c:"dimmed",mt:"sm",children:["If no image is uploaded we will try to fetch it via"," ",r.jsx(m,{href:"https://unavatar.io",target:"_blank",opacity:.6,children:"unavatar.io"})," ","service."]})]})]}),r.jsx(i,{label:"Name",placeholder:"User full name",required:!0,mt:"md",value:e.data.name,onChange:o=>t("name",o.target.value),error:e.errors.name}),r.jsx(i,{label:"Job title",placeholder:"e.g. Frontend Developer",required:!0,mt:"md",value:e.data.job_title,onChange:o=>t("job_title",o.target.value),error:e.errors.job_title}),r.jsx(_,{label:"Roles",placeholder:"Select role",required:!0,mt:"md",value:e.data.roles,onChange:o=>t("roles",o),data:s({except:["client"]}),error:e.errors.roles}),r.jsxs(l,{grow:!0,mt:"md",children:[r.jsx(i,{label:"Phone",placeholder:"Users phone number",value:e.data.phone,onChange:o=>t("phone",o.target.value),error:e.errors.phone}),r.jsx(y,{label:"Hourly rate",allowNegative:!1,clampBehavior:"strict",decimalScale:2,fixedDecimalScale:!0,prefix:"$",value:e.data.rate,onChange:o=>t("rate",o),error:e.errors.rate})]}),r.jsx(U,{mt:"xl",mb:"md",label:"Login credentials",labelPosition:"center"}),r.jsx(i,{label:"Email",placeholder:"User email",required:!0,value:e.data.email,onChange:o=>t("email",o.target.value),onBlur:()=>e.validate("email"),error:e.errors.email}),r.jsx(n,{label:"Password",placeholder:"User password",required:!0,mt:"md",value:e.data.password,onChange:o=>t("password",o.target.value),error:e.errors.password}),r.jsx(n,{label:"Confirm password",placeholder:"Confirm password",required:!0,mt:"md",value:e.data.password_confirmation,onChange:o=>t("password_confirmation",o.target.value),error:e.errors.password_confirmation}),r.jsxs(l,{justify:"space-between",mt:"xl",children:[r.jsx(u,{route:"users.index"}),r.jsx(d,{loading:e.processing,children:"Create"})]})]})})]})};T.layout=s=>r.jsx(f,{title:"Create user",children:s});export{T as default};