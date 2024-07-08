import{q as A,b as n,k as u,l as E,j as e,G as y,B as g,r as b}from"./app-0842237d.js";import{A as G}from"./ActionButton-41780f60.js";import{B as P}from"./BackButton-f26d12e9.js";import{u as R}from"./useForm-bb658ce6.js";import{C as _}from"./ContainerBox-2ec7a008.js";import{M as D}from"./MainLayout-b9e5f435.js";import{m as M}from"./currency-edacadb9.js";import{a as q}from"./route-426ef2aa.js";import H from"./Task-73c71235.js";import{B as L}from"./Breadcrumbs-b9528ea9.js";import{A as U}from"./Anchor-e13e5b65.js";import{G as h}from"./Grid-e548b273.js";import{T as v}from"./Title-a0ed43dd.js";import{F as k}from"./Flex-3eec32a1.js";import{T as V}from"./TextInput-b20d0eac.js";import{S as J}from"./Select-fffeb4d7.js";import{M as K}from"./MultiSelect-b18d0e84.js";import{R as x}from"./Radio-c3b027dc.js";import{N as C}from"./NumberInput-e5c7b4b0.js";import{T as O}from"./Textarea-9c758268.js";import{T as s}from"./Text-0f25386e.js";import{S as Q}from"./Stack-1638e70e.js";import{C as W}from"./Center-ca7815fd.js";import{I as X}from"./IconSearch-646771d6.js";import"./createReactComponent-c737850d.js";import"./index-51272854.js";import"./FlashNotification-80b15f0d.js";import"./use-disclosure-eb93ce5d.js";import"./IconInfoCircle-c4cbed09.js";import"./IconCircleX-2c153941.js";import"./useWebSockets-33e5047c.js";import"./index-791a8db4.js";import"./useTasksStore-2673510b.js";import"./reorder-c78854a4.js";import"./_baseClone-98204728.js";import"./use-computed-color-scheme-7794acad.js";import"./Container-ff5d0a99.js";import"./Image-e655e620.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-f81784eb.js";import"./use-resolved-styles-api-6cf44df2.js";import"./Popover-f8e352cc.js";import"./DirectionProvider-8ec7ed91.js";import"./use-floating-auto-update-f3813b40.js";import"./use-uncontrolled-8c49da27.js";import"./Avatar-5e3d7158.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-b2e899c7.js";import"./IconUsers-8fe5a950.js";import"./ScrollArea-6eaed29f.js";import"./EmptyWithIcon-33d678f1.js";import"./datetime-a8debb17.js";import"./IconMessage-fdf47061.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-f908f42d.js";import"./get-sorted-breakpoints-cdc16153.js";import"./Label-91d5cf89.js";import"./ColorSwatch-3b36ccc9.js";import"./Checkbox-9fb90898.js";import"./Input-da77b9d4.js";import"./create-optional-context-731c9784.js";import"./CheckIcon-5dce244a.js";import"./Tooltip-0fe109d8.js";import"./get-base-value-ad2e8cbc.js";import"./InputBase-60d93754.js";import"./OptionsDropdown-11d3e2a8.js";import"./Combobox-1fa9834a.js";import"./Pill-0610b8f5.js";import"./PillsInput-ce9d654a.js";import"./clamp-73f6bef2.js";const Y=()=>{const{projects:m,clientCompanies:f,nextNumber:S}=A().props,[c,w]=n.useState([]),[l,T]=n.useState(""),[p,B]=n.useState([]),[F,I]=n.useState(0),[t,N,o]=R("post",route("invoices.store"),{number:S,client_company_id:"",projects:[],tasks:[],type:"hourly",hourly_rate:0,fixed_amount:0,note:""});u(()=>{w(m.filter(a=>a.client_company_id==t.data.client_company_id).map(a=>({value:a.id.toString(),label:a.name})));const r=f.find(a=>t.data.client_company_id===a.id.toString());T(r.currency),o("projects",[])},[t.data.client_company_id]),u(()=>{t.data.projects.length&&E.get(route("invoices.tasks",{projectIds:t.data.projects})).then(({data:r})=>{B(r.projectTasks);const a=[];r.projectTasks.forEach(d=>{d.tasks.forEach(j=>Number(j.total_minutes)>0&&a.push(j.id))});const i=m.find(d=>t.data.projects[0]===d.id.toString());o({...t.data,tasks:[...a],hourly_rate:i?i.rate:0})}).catch(r=>console.error("Failed to fetch tasks",r))},[t.data.projects]),u(()=>{let r=0;t.data.type==="hourly"?p.forEach(a=>{a.tasks.forEach(i=>{t.data.tasks.includes(i.id)&&(r+=Number(i.total_minutes)/60*t.data.hourly_rate)})}):r=t.data.fixed_amount,I(r)},[t.data.tasks,t.data.type,t.data.hourly_rate,t.data.fixed_amount]);const z=(r,a)=>{o("tasks",a?[...t.data.tasks,r]:t.data.tasks.filter(i=>i!==r))};return e.jsxs(e.Fragment,{children:[e.jsxs(L,{fz:14,mb:30,children:[e.jsx(U,{href:"#",onClick:()=>q("invoices.index"),fz:14,children:"Invoices"}),e.jsx("div",{children:"Create"})]}),e.jsxs(h,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[e.jsx(h.Col,{span:"auto",children:e.jsx(v,{order:1,children:"Create invoice"})}),e.jsx(h.Col,{span:"content"})]}),e.jsxs(k,{gap:"xl",align:"flex-start",direction:"row",wrap:"nowrap",children:[e.jsx(_,{miw:"440",children:e.jsxs("form",{onSubmit:N,children:[e.jsx(V,{label:"Invoice number",placeholder:"Invoice number",required:!0,value:t.data.number,onChange:r=>o("number",r.target.value),error:t.errors.number}),e.jsx(J,{label:"Client company",placeholder:"Select client company",searchable:!0,allowDeselect:!1,mt:"md",required:!0,value:t.data.client_company_id,onChange:r=>o("client_company_id",r),data:f.map(r=>({value:r.id.toString(),label:r.name})),error:t.errors.client_company_id}),e.jsx(K,{label:"Projects",placeholder:c.length?"Select projects":"Please select client company first",disabled:c.length===0,withAsterisk:!0,mt:"md",value:t.data.projects,onChange:r=>o("projects",r),data:c,error:t.errors.projects}),e.jsx(x.Group,{label:"Payment type",mt:"md",withAsterisk:!0,value:t.data.type,onChange:r=>o("type",r),children:e.jsxs(y,{mt:"xs",children:[e.jsx(x,{value:"hourly",label:"Hourly"}),e.jsx(x,{value:"fixed_amount",label:"Fixed amount"})]})}),t.data.type==="hourly"&&e.jsx(C,{label:"Hourly rate",mt:"md",allowNegative:!1,clampBehavior:"strict",decimalScale:2,fixedDecimalScale:!0,prefix:l.symbol,value:t.data.hourly_rate/100,onChange:r=>o("hourly_rate",r*100),error:t.errors.hourly_rate}),t.data.type==="fixed_amount"&&e.jsx(C,{label:"Fixed amount",mt:"md",allowNegative:!1,clampBehavior:"strict",decimalScale:2,fixedDecimalScale:!0,prefix:l.symbol,value:t.data.fixed_amount/100,onChange:r=>o("fixed_amount",r*100),error:t.errors.fixed_amount}),e.jsx(O,{label:"Note",placeholder:"Invoice note",mt:"md",autosize:!0,minRows:4,maxRows:8,value:t.data.note,onChange:r=>o("note",r.target.value)}),e.jsxs(y,{justify:"space-between",mt:30,children:[e.jsx(P,{route:"invoices.index"}),e.jsx(G,{loading:t.processing,children:"Create"})]})]})}),e.jsx(_,{style:{flexGrow:1},children:p.length>0?e.jsxs(e.Fragment,{children:[p.map(r=>e.jsxs(g,{mb:"lg",children:[e.jsx(v,{order:2,mb:"md",children:r.name}),r.tasks.length?r.tasks.map(a=>e.jsx(H,{task:a,selectedTasks:t.data.tasks,toggleTask:z,currency:l,type:t.data.type,hourlyRate:t.data.hourly_rate},a.id)):e.jsx(s,{size:"sm",c:"dimmed",children:"No tasks with logged time were found"})]},r.id)),e.jsx(k,{justify:"flex-end",mt:"xl",children:e.jsxs(Q,{gap:0,children:[e.jsx(s,{size:"lg",lts:1,fw:600,mb:-5,children:"Total:"}),e.jsx(s,{fw:700,fz:32,children:M(F,l.code)})]})})]}):e.jsx(e.Fragment,{children:e.jsx(W,{mih:300,children:e.jsxs(g,{align:"center",children:[e.jsx(X,{style:{width:b(55),height:b(55)},opacity:.5}),e.jsx(s,{fz:24,fw:600,align:"center",children:"No tasks found"}),e.jsx(s,{fz:15,c:"dimmed",children:"Select company and at least one project"})]})})})})]})]})};Y.layout=m=>e.jsx(D,{title:"Create invoice",children:m});export{Y as default};