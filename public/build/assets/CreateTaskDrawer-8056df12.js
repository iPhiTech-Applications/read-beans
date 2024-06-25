import{q as _,b as j,j as r,r as k,a as c}from"./app-7bc20a4e.js";import{o as C}from"./ConfirmModal-eff3ce29.js";import{c as m,D as S,a as v}from"./TaskDrawer.module-aff5bfa1.js";import{R as D}from"./RichTextEditor-3adf4584.js";import{u as T}from"./useTaskDrawerStore-d418c6e5.js";import{u as w}from"./useForm-2fe29813.js";import{h as N}from"./user-6639b4f0.js";import y from"./LabelsDropdown-4216ee86.js";import{D as A}from"./Drawer-230d5669.js";import{T as F}from"./Text-160f2c95.js";import{T as M}from"./TextInput-a85403e2.js";import{M as P}from"./MultiSelect-1cce7d56.js";import{F as E}from"./Flex-85899ff9.js";import{S as u}from"./Select-ca447afa.js";import{N as R}from"./NumberInput-ca0cf311.js";import{C as h}from"./Checkbox-0f6ed80c.js";import"./file-a40a15db.js";import"./createReactComponent-0bbe300d.js";import"./upper-first-a5ff10ec.js";import"./use-resolved-styles-api-22476df7.js";import"./use-disclosure-c28c9ea4.js";import"./IconCircleX-6c443b41.js";import"./Image-22e73fa0.js";import"./Center-2e9cafcb.js";import"./IconX-293e98d7.js";import"./SimpleGrid-89a2de48.js";import"./get-sorted-breakpoints-b589f481.js";import"./get-base-value-ad2e8cbc.js";import"./pick-calendar-levels-props-4f4fa927.js";import"./use-uncontrolled-0eb68696.js";import"./AccordionChevron-6b09d988.js";import"./clamp-73f6bef2.js";import"./InputBase-7a5da2ab.js";import"./Input-e73c8c99.js";import"./create-optional-context-1a5c9a08.js";import"./Popover-708222d0.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./use-computed-color-scheme-709c2195.js";import"./Tooltip-e7859f7c.js";import"./get-style-object-71cabcb5.js";import"./ColorSwatch-67f719b5.js";import"./ColorPicker-24b46372.js";import"./ActionIcon-8588dfb6.js";import"./route-93322184.js";import"./_baseClone-594d8115.js";import"./index-d33ca4cd.js";import"./index-0b34c5e2.js";import"./Label-7fa5cbc4.js";import"./Combobox-0c9e74c6.js";import"./PillsInput-d3ab7faa.js";import"./Pill-50317cb8.js";import"./CheckIcon-099263f9.js";import"./OptionsDropdown-41d9cb8a.js";import"./ScrollArea-383a5d94.js";import"./get-auto-contrast-value-58024fc4.js";function ze(){const{create:o,closeCreateTask:n}=T(),{usersWithAccessToProject:l,taskGroups:b,labels:g,auth:{user:d}}=_().props,s={group_id:o.group_id?o.group_id.toString():"",assigned_to_user_id:"",name:"",description:"",estimation:"",due_on:"",hidden_from_clients:!1,billable:!0,subscribed_users:[d.id.toString()],labels:[],attachments:[]},[t,f,a]=w("post",route("projects.tasks.store",[route().params.project]),{...s});j.useEffect(()=>{a({...s})},[o.opened]);const i=(e=!1)=>{e||JSON.stringify(t.data)===JSON.stringify(s)&&!t.processing?n():C({type:"danger",title:"Discard changes?",content:"All unsaved changes will be lost.",confirmLabel:"Discard",confirmProps:{color:"red"},onConfirm:()=>n()})},x=e=>{const p=[...t.data.attachments];p.splice(e,1),a("attachments",p)};return r.jsx(A,{opened:o.opened,onClose:i,title:r.jsx(F,{fz:k(28),fw:600,ml:25,my:"sm",children:"Add new task"}),position:"right",size:1e3,overlayProps:{backgroundOpacity:.55,blur:3},transitionProps:{transition:"slide-left",duration:400,timingFunction:"ease"},children:r.jsxs("form",{onSubmit:e=>f(e,{onSuccess:()=>i(!0),forceFormData:!0}),className:m.inner,children:[r.jsxs("div",{className:m.content,children:[r.jsx(M,{label:"Name",placeholder:"Task name",required:!0,"data-autofocus":!0,value:t.data.name,onChange:e=>a("name",e.target.value),error:t.errors.name}),r.jsx(D,{mt:"xl",placeholder:"Task description",height:260,onChange:e=>a("description",e)}),r.jsx(S,{mt:"xl",selected:t.data.attachments,onChange:e=>a("attachments",e),remove:e=>x(e)}),r.jsx(P,{label:"Subscribers",placeholder:"Select subscribers",searchable:!0,mt:"md",value:t.data.subscribed_users,onChange:e=>a("subscribed_users",e),data:l.map(e=>({value:e.id.toString(),label:e.name})),error:t.errors.subscribed_users}),r.jsxs(E,{justify:"space-between",mt:"xl",children:[r.jsx(c,{variant:"transparent",w:100,disabled:t.processing,onClick:i,children:"Cancel"}),r.jsx(c,{type:"submit",w:120,loading:t.processing,children:"Add task"})]})]}),r.jsxs("div",{className:m.sidebar,children:[r.jsx(u,{label:"Task group",placeholder:"Select task group",required:!0,value:t.data.group_id,onChange:e=>a("group_id",e),data:b.map(e=>({value:e.id.toString(),label:e.name})),error:t.errors.group_id}),r.jsx(u,{label:"Assignee",placeholder:"Select assignee",searchable:!0,mt:"md",value:t.data.assigned_to_user_id,onChange:e=>a("assigned_to_user_id",e),data:l.map(e=>({value:e.id.toString(),label:e.name})),error:t.errors.assigned_to_user_id}),r.jsx(v,{clearable:!0,valueFormat:"DD MMM YYYY",minDate:new Date,mt:"md",label:"Due date",placeholder:"Pick task due date",value:t.data.due_on,onChange:e=>a("due_on",e)}),r.jsx(y,{items:g,selected:t.data.labels,onChange:e=>a("labels",e),mt:"md"}),r.jsx(R,{label:"Time estimation",mt:"md",decimalScale:2,fixedDecimalScale:!0,defaultValue:0,min:0,allowNegative:!1,step:.5,suffix:" hours",onChange:e=>a("estimation",e)}),r.jsx(h,{label:"Billable",mt:"xl",checked:t.data.billable,onChange:e=>a("billable",e.currentTarget.checked)}),!N(d,["client"])&&r.jsx(h,{label:"Hidden from clients",mt:"md",checked:t.data.hidden_from_clients,onChange:e=>a("hidden_from_clients",e.currentTarget.checked)})]})]})})}export{ze as CreateTaskDrawer};