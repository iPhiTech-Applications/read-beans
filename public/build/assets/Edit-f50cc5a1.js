import{q as u,j as r,G as m}from"./app-123ed893.js";import{A as c}from"./ActionButton-39344ba9.js";import{B as h}from"./BackButton-e18afed3.js";import{u as x}from"./useForm-9d1dcdb2.js";import{u as f}from"./useRoles-3859a6fe.js";import{C as j}from"./ContainerBox-8c45766b.js";import{M as g}from"./MainLayout-d756ba11.js";import{a as b}from"./route-002f9c56.js";import{g as v}from"./user-6639b4f0.js";import{B as w}from"./Breadcrumbs-6a2e8819.js";import{A as l}from"./Anchor-f8a41b55.js";import{G as i}from"./Grid-fbf7d7b6.js";import{T as C}from"./Title-1ca1d242.js";import{A as _}from"./Avatar-4dc21544.js";import{F as B}from"./FileInput-d036affc.js";import{T as U}from"./Text-7a8e0ced.js";import{T as s}from"./TextInput-17962b90.js";import{M as y}from"./MultiSelect-297ee2d8.js";import{N as T}from"./NumberInput-c7961359.js";import{D as A}from"./Divider-18293859.js";import{P as p}from"./PasswordInput-f8efb2ff.js";import"./createReactComponent-7e1f628b.js";import"./index-136d966c.js";import"./FlashNotification-b862f807.js";import"./use-disclosure-d59cdd80.js";import"./IconInfoCircle-409ef499.js";import"./IconCircleX-fc7128ba.js";import"./useWebSockets-fcdec77b.js";import"./index-ffe472df.js";import"./useTasksStore-12e71cc3.js";import"./reorder-d676a14f.js";import"./_baseClone-c0d3f5ea.js";import"./use-computed-color-scheme-c3233f71.js";import"./Container-2b0776cc.js";import"./Image-34973361.js";import"./get-style-object-71cabcb5.js";import"./Menu-d1d9bfc4.js";import"./use-resolved-styles-api-6ecd5aea.js";import"./Popover-3d4b00cf.js";import"./DirectionProvider-739d2a13.js";import"./use-floating-auto-update-c5e4584a.js";import"./use-uncontrolled-fce7b9fe.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-598e38ee.js";import"./IconUsers-406c3d56.js";import"./ScrollArea-8472fe95.js";import"./EmptyWithIcon-88b1d926.js";import"./datetime-cf4f36e6.js";import"./IconMessage-c104645d.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-4294e0c7.js";import"./Center-5909643e.js";import"./get-sorted-breakpoints-230439b0.js";import"./get-base-value-ad2e8cbc.js";import"./Input-0c5af4bd.js";import"./create-optional-context-f78ae3e4.js";import"./InputBase-ad5899ec.js";import"./OptionsDropdown-daf5eb56.js";import"./CheckIcon-5474d37b.js";import"./Combobox-8cde05d4.js";import"./Pill-bab5faf2.js";import"./PillsInput-73e8ed46.js";import"./clamp-73f6bef2.js";const D=()=>{const{item:o}=u().props,{getDropdownValues:n}=f(),[e,d,a]=x("post",route("users.update",o.id),{_method:"put",avatar:null,job_title:o.job_title,name:o.name,phone:o.phone||"",rate:o.rate/100,email:o.email,password:"",password_confirmation:"",roles:o.roles});return r.jsxs(r.Fragment,{children:[r.jsxs(w,{fz:14,mb:30,children:[r.jsx(l,{href:"#",onClick:()=>b("users.index"),fz:14,children:"Users"}),r.jsx("div",{children:"Edit"})]}),r.jsxs(i,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(i.Col,{span:"auto",children:r.jsx(C,{order:1,children:"Edit user"})}),r.jsx(i.Col,{span:"content"})]}),r.jsx(j,{maw:600,children:r.jsxs("form",{onSubmit:t=>d(t,{forceFormData:!0}),children:[r.jsxs(i,{justify:"flex-start",align:"flex-start",gutter:"lg",children:[r.jsx(i.Col,{span:"content",children:r.jsx(_,{src:e.data.avatar===null?o.avatar:URL.createObjectURL(e.data.avatar),size:120,color:"blue",children:v(e.data.name)})}),r.jsxs(i.Col,{span:"auto",children:[r.jsx(B,{label:"Profile image",placeholder:"Choose image",accept:"image/png,image/jpeg",onChange:t=>a("avatar",t),clearable:!0,error:e.errors.avatar}),r.jsxs(U,{size:"xs",c:"dimmed",mt:"sm",children:["If no image is uploaded we will try to fetch it via"," ",r.jsx(l,{href:"https://unavatar.io",target:"_blank",opacity:.6,children:"unavatar.io"})," ","service."]})]})]}),r.jsx(s,{label:"Name",placeholder:"User full name",required:!0,mt:"md",value:e.data.name,onChange:t=>a("name",t.target.value),error:e.errors.name}),r.jsx(s,{label:"Job title",placeholder:"e.g. Frontend Developer",required:!0,mt:"md",value:e.data.job_title,onChange:t=>a("job_title",t.target.value),error:e.errors.job_title}),r.jsx(y,{label:"Roles",placeholder:"Select role",required:!0,mt:"md",value:e.data.roles,onChange:t=>a("roles",t),data:n({except:["client"]}),error:e.errors.roles}),r.jsxs(m,{grow:!0,mt:"md",children:[r.jsx(s,{label:"Phone",placeholder:"Users phone number",value:e.data.phone,onChange:t=>a("phone",t.target.value),error:e.errors.phone}),r.jsx(T,{label:"Hourly rate",allowNegative:!1,clampBehavior:"strict",decimalScale:2,fixedDecimalScale:!0,prefix:"$",value:e.data.rate,onChange:t=>a("rate",t),error:e.errors.rate})]}),r.jsx(A,{mt:"xl",mb:"md",label:"Login credentials",labelPosition:"center"}),r.jsx(s,{label:"Email",placeholder:"User email",required:!0,value:e.data.email,onChange:t=>a("email",t.target.value),onBlur:()=>e.validate("email"),error:e.errors.email}),r.jsx(p,{label:"Password",placeholder:"User password",mt:"md",value:e.data.password,onChange:t=>a("password",t.target.value),error:e.errors.password}),r.jsx(p,{label:"Confirm password",placeholder:"Confirm password",mt:"md",value:e.data.password_confirmation,onChange:t=>a("password_confirmation",t.target.value),error:e.errors.password_confirmation}),r.jsxs(m,{justify:"space-between",mt:"xl",children:[r.jsx(h,{route:"users.index"}),r.jsx(c,{loading:e.processing,children:"Update"})]})]})})]})};D.layout=o=>r.jsx(g,{title:"Edit user",children:o});export{D as default};