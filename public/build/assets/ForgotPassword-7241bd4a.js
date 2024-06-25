import{j as r,G as m,r as a,B as n,a as c}from"./app-7bc20a4e.js";import{C as d}from"./ContainerBox-4644941b.js";import{G as p}from"./GuestLayout-14cbb8d9.js";import{a as u}from"./route-93322184.js";import{u as h}from"./index-0b34c5e2.js";import{T as f}from"./Title-ae7f3e37.js";import{T as i}from"./Text-160f2c95.js";import{A as x,I as j}from"./IconInfoCircle-e415df20.js";import{T as w}from"./TextInput-a85403e2.js";import{A as g}from"./Anchor-53b71cb6.js";import{C as y}from"./Center-2e9cafcb.js";import{c as b}from"./createReactComponent-0bbe300d.js";import"./FlashNotification-5d50b84b.js";import"./use-disclosure-c28c9ea4.js";import"./IconCircleX-6c443b41.js";import"./Container-1a960f39.js";import"./_baseClone-594d8115.js";import"./InputBase-7a5da2ab.js";import"./Input-e73c8c99.js";import"./create-optional-context-1a5c9a08.js";var k=b("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]);const z="_title_1htzz_1",_="_controls_1htzz_7",v="_control_1htzz_7",e={title:z,controls:_,control:v},C=({status:t})=>{const o=h("post",route("auth.forgotPassword.sendLink"),{email:""}),l=s=>{s.preventDefault(),o.clearErrors(),o.submit({preserveScroll:!0})};return r.jsxs(r.Fragment,{children:[r.jsx(f,{className:e.title,ta:"center",children:"Forgot your password?"}),r.jsx(i,{c:"dimmed",fz:"sm",ta:"center",children:"Enter your email to get a reset link"}),r.jsxs(d,{shadow:"md",p:30,mt:"xl",radius:"md",children:[r.jsx(i,{c:"dimmed",fz:"sm",mb:20,children:"Enter your email and we will email you a password reset link that will allow you to choose a new one."}),t&&r.jsx(x,{radius:"md",title:t,icon:r.jsx(j,{}),mb:10,children:"Please read instruction in the email to set a new password for your account."}),r.jsxs("form",{onSubmit:l,children:[r.jsx(w,{label:"Email",placeholder:"Your email",required:!0,onChange:s=>o.setData("email",s.target.value),onBlur:()=>o.validate("email"),error:o.errors.email}),r.jsxs(m,{justify:"space-between",mt:"lg",className:e.controls,children:[r.jsx(g,{c:"dimmed",size:"sm",className:e.control,onClick:()=>u("auth.login.form"),children:r.jsxs(y,{inline:!0,children:[r.jsx(k,{style:{width:a(12),height:a(12)},stroke:1.5}),r.jsx(n,{ml:5,children:"Back to the login"})]})}),r.jsx(c,{type:"submit",className:e.control,disabled:o.processing,children:"Reset password"})]})]})]})]})};C.layout=t=>r.jsx(p,{title:"Forgot Password",children:t});export{C as default};
