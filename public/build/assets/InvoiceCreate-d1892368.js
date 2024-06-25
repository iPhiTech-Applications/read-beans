import{q as E,b as n,k as u,l as P,j as e,G as m,B as g,r as c}from"./app-7bc20a4e.js";import{A as D}from"./ActionButton-135249d1.js";import{B as R}from"./BackButton-6f293b9d.js";import{L as q}from"./Label-7fa5cbc4.js";import{u as L}from"./useForm-2fe29813.js";import{C as b}from"./ContainerBox-4644941b.js";import{m as _}from"./currency-edacadb9.js";import{b as H}from"./datetime-7dece6f7.js";import{a as M,o as U}from"./route-93322184.js";import{B as V}from"./Breadcrumbs-7c3c5554.js";import{A as $}from"./Anchor-53b71cb6.js";import{G as h}from"./Grid-242c5098.js";import{T as w}from"./Title-ae7f3e37.js";import{S as J}from"./SimpleGrid-89a2de48.js";import{T as K}from"./TextInput-a85403e2.js";import{S as O}from"./Select-ca447afa.js";import{M as Q}from"./MultiSelect-1cce7d56.js";import{R as x}from"./Radio-5c63d301.js";import{N as v}from"./NumberInput-ca0cf311.js";import{T as W}from"./Textarea-55bb8b6f.js";import{F as C}from"./Flex-85899ff9.js";import{C as X}from"./Checkbox-0f6ed80c.js";import{S as f}from"./Stack-ea94f1d8.js";import{T as i}from"./Text-160f2c95.js";import{T as Y}from"./Tooltip-e7859f7c.js";import{C as Z}from"./Center-2e9cafcb.js";import{I as ee}from"./IconSearch-095ea681.js";import"./createReactComponent-0bbe300d.js";import"./ColorSwatch-67f719b5.js";import"./index-0b34c5e2.js";import"./_baseClone-594d8115.js";import"./get-sorted-breakpoints-b589f481.js";import"./get-base-value-ad2e8cbc.js";import"./InputBase-7a5da2ab.js";import"./Input-e73c8c99.js";import"./create-optional-context-1a5c9a08.js";import"./use-resolved-styles-api-22476df7.js";import"./OptionsDropdown-41d9cb8a.js";import"./CheckIcon-099263f9.js";import"./ScrollArea-383a5d94.js";import"./DirectionProvider-acb021aa.js";import"./Combobox-0c9e74c6.js";import"./Popover-708222d0.js";import"./use-floating-auto-update-3aa9c973.js";import"./use-uncontrolled-0eb68696.js";import"./Pill-50317cb8.js";import"./PillsInput-d3ab7faa.js";import"./get-auto-contrast-value-58024fc4.js";import"./clamp-73f6bef2.js";import"./get-style-object-71cabcb5.js";const Xe=()=>{const{projects:S,clientCompanies:j,nextNumber:T}=E().props,[d,k]=n.useState([]),[l,N]=n.useState(""),[p,z]=n.useState([]),[B,I]=n.useState(0),[r,F,s]=L("post",route("invoices.store"),{number:T,client_company_id:"",projects:[],tasks:[],type:"hourly",hourly_rate:0,fixed_amount:0,note:""});u(()=>{k(S.filter(a=>a.client_company_id==r.data.client_company_id).map(a=>({value:a.id.toString(),label:a.name})));const t=j.find(a=>r.data.client_company_id===a.id.toString());t.rate&&s("hourly_rate",t.rate/100),N(t.currency)},[r.data.client_company_id]),u(()=>G(),[r.data.projects]),u(()=>{let t=0;r.data.type==="hourly"?p.forEach(a=>{a.tasks.forEach(o=>{r.data.tasks.includes(o.id)&&(t+=Number(o.total_minutes)/60*r.data.hourly_rate*100)})}):t=r.data.fixed_amount,I(t)},[r.data.tasks,r.data.type,r.data.hourly_rate,r.data.fixed_amount]);const G=()=>{r.data.projects.length&&P.get(route("invoices.tasks",{projectIds:r.data.projects})).then(({data:t})=>{z(t.projectTasks);const a=[];t.projectTasks.forEach(o=>{o.tasks.forEach(y=>Number(y.total_minutes)>0&&a.push(y.id))}),s("tasks",[...a])}).catch(t=>console.error("Failed to fetch tasks",t))},A=(t,a)=>{s("tasks",a?[...r.data.tasks,t]:r.data.tasks.filter(o=>o!==t))};return e.jsxs(e.Fragment,{children:[e.jsxs(V,{fz:14,mb:30,children:[e.jsx($,{href:"#",onClick:()=>M("invoices.index"),fz:14,children:"Invoices"}),e.jsx("div",{children:"Create"})]}),e.jsxs(h,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[e.jsx(h.Col,{span:"auto",children:e.jsx(w,{order:1,children:"Create invoice"})}),e.jsx(h.Col,{span:"content"})]}),e.jsxs(J,{cols:2,spacing:"xl",children:[e.jsx(b,{children:e.jsxs("form",{onSubmit:F,children:[e.jsx(K,{label:"Invoice number",placeholder:"Invoice number",required:!0,value:r.data.number,onChange:t=>s("number",t.target.value),error:r.errors.number}),e.jsx(O,{label:"Client company",placeholder:"Select client company",searchable:!0,allowDeselect:!1,mt:"md",required:!0,value:r.data.client_company_id,onChange:t=>s("client_company_id",t),data:j.map(t=>({value:t.id.toString(),label:t.name})),error:r.errors.client_company_id}),e.jsx(Q,{label:"Projects",placeholder:d.length?"Select projects":"Please select client company first",disabled:d.length===0,withAsterisk:!0,mt:"md",value:r.data.projects,onChange:t=>s("projects",t),data:d,error:r.errors.projects}),e.jsx(x.Group,{label:"Payment type",mt:"md",withAsterisk:!0,value:r.data.type,onChange:t=>s("type",t),children:e.jsxs(m,{mt:"xs",children:[e.jsx(x,{value:"hourly",label:"Hourly"}),e.jsx(x,{value:"fixed_amount",label:"Fixed amount"})]})}),r.data.type==="hourly"&&e.jsx(v,{label:"Hourly rate",mt:"md",allowNegative:!1,clampBehavior:"strict",decimalScale:2,fixedDecimalScale:!0,prefix:l.symbol,value:r.data.hourly_rate,onChange:t=>s("hourly_rate",t),error:r.errors.hourly_rate}),r.data.type==="fixed_amount"&&e.jsx(v,{label:"Fixed amount",mt:"md",allowNegative:!1,clampBehavior:"strict",decimalScale:2,fixedDecimalScale:!0,prefix:l.symbol,value:r.data.fixed_amount/100,onChange:t=>s("fixed_amount",t*100),error:r.errors.fixed_amount}),e.jsx(W,{label:"Note",placeholder:"Invoice note",mt:"md",autosize:!0,minRows:4,maxRows:8,value:r.data.note,onChange:t=>s("note",t.target.value)}),e.jsxs(m,{justify:"space-between",mt:"xl",children:[e.jsx(R,{route:"invoices.index"}),e.jsx(D,{loading:r.processing,children:"Create"})]})]})}),e.jsx(b,{children:p.length>0?e.jsxs(e.Fragment,{children:[p.map(t=>e.jsxs(g,{mb:"lg",children:[e.jsx(w,{order:2,mb:"md",children:t.name}),t.tasks.length?t.tasks.map(a=>e.jsxs(C,{justify:"space-between",wrap:"nowrap",children:[e.jsxs(m,{gap:"sm",wrap:"nowrap",align:"self-start",children:[e.jsx(X,{size:"sm",checked:r.data.tasks.includes(a.id),onChange:o=>A(a.id,o.currentTarget.checked)}),e.jsxs(f,{gap:3,children:[e.jsxs(i,{size:"sm",fw:500,onClick:()=>U("projects.tasks.open",[a.project_id,a.id]),children:["#",a.number+": "+a.name]}),e.jsx(m,{wrap:"wrap",style:{rowGap:c(3),columnGap:c(12)},children:a.labels.map(o=>e.jsx(q,{name:o.name,color:o.color},o.id))})]})]}),e.jsxs(f,{gap:3,ml:10,style:{flexShrink:0},children:[r.data.type==="hourly"&&e.jsx(Y,{label:Number(a.total_minutes)===0?"There is no logged time on this task":`Logged time: ${Number(a.total_minutes)/60}h`,openDelay:500,withArrow:!0,children:e.jsx(i,{fw:700,c:Number(a.total_minutes)===0?"red":"",children:_(Number(a.total_minutes)/60*r.data.hourly_rate*100,l.code)})}),e.jsx(i,{size:"xs",c:"dimmed",fw:500,children:H(a.completed_at)})]})]},a.id)):e.jsx(i,{size:"sm",c:"dimmed",children:"No tasks with logged time were found"})]},t.id)),e.jsx(C,{justify:"flex-end",mt:"xl",children:e.jsxs(f,{gap:0,children:[e.jsx(i,{size:"lg",lts:1,fw:600,mb:-5,children:"Total:"}),e.jsx(i,{fw:700,fz:32,children:_(B,l.code)})]})})]}):e.jsx(e.Fragment,{children:e.jsx(Z,{mih:300,children:e.jsxs(g,{align:"center",children:[e.jsx(ee,{style:{width:c(55),height:c(55)},opacity:.5}),e.jsx(i,{fz:24,fw:600,align:"center",children:"No tasks found"}),e.jsx(i,{fz:15,c:"dimmed",children:"Select company and at least one project"})]})})})})]})]})};export{Xe as InvoiceCreate};