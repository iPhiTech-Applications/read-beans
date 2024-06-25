import{b as n,q as M,z as R,j as r,G as I,r as P}from"./app-7bc20a4e.js";import{c as l,D as A,a as F}from"./TaskDrawer.module-aff5bfa1.js";import{R as Y}from"./RichTextEditor-3adf4584.js";import{u as G}from"./useTaskDrawerStore-d418c6e5.js";import{u as W}from"./useTasksStore-7dac92b7.js";import{a as q}from"./useWebSockets-c1296dd7.js";import{b as H}from"./datetime-7dece6f7.js";import{h as L}from"./user-6639b4f0.js";import U from"./Comments-ea0fc6fa.js";import V from"./LabelsDropdown-4216ee86.js";import J from"./Timer-cba245e8.js";import{D as K}from"./Drawer-230d5669.js";import{C as b}from"./Checkbox-0f6ed80c.js";import{T as m}from"./Text-160f2c95.js";import{B as Q}from"./Breadcrumbs-7c3c5554.js";import{T as X}from"./TextInput-a85403e2.js";import{S as T}from"./Select-ca447afa.js";import{N as Z}from"./NumberInput-ca0cf311.js";import{M as $}from"./MultiSelect-1cce7d56.js";import"./file-a40a15db.js";import"./createReactComponent-0bbe300d.js";import"./upper-first-a5ff10ec.js";import"./use-resolved-styles-api-22476df7.js";import"./use-disclosure-c28c9ea4.js";import"./ConfirmModal-eff3ce29.js";import"./IconCircleX-6c443b41.js";import"./Image-22e73fa0.js";import"./Center-2e9cafcb.js";import"./IconX-293e98d7.js";import"./SimpleGrid-89a2de48.js";import"./get-sorted-breakpoints-b589f481.js";import"./get-base-value-ad2e8cbc.js";import"./pick-calendar-levels-props-4f4fa927.js";import"./use-uncontrolled-0eb68696.js";import"./AccordionChevron-6b09d988.js";import"./clamp-73f6bef2.js";import"./InputBase-7a5da2ab.js";import"./Input-e73c8c99.js";import"./create-optional-context-1a5c9a08.js";import"./Popover-708222d0.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./use-computed-color-scheme-709c2195.js";import"./Tooltip-e7859f7c.js";import"./get-style-object-71cabcb5.js";import"./ColorSwatch-67f719b5.js";import"./ColorPicker-24b46372.js";import"./ActionIcon-8588dfb6.js";import"./route-93322184.js";import"./_baseClone-594d8115.js";import"./index-d33ca4cd.js";import"./reorder-22208721.js";import"./Title-ae7f3e37.js";import"./Flex-85899ff9.js";import"./Stack-ea94f1d8.js";import"./Avatar-b949274f.js";import"./Label-7fa5cbc4.js";import"./Combobox-0c9e74c6.js";import"./PillsInput-d3ab7faa.js";import"./Pill-50317cb8.js";import"./CheckIcon-099263f9.js";import"./IconPlus-7f567d31.js";import"./Divider-004ea17b.js";import"./get-auto-contrast-value-58024fc4.js";import"./OptionsDropdown-41d9cb8a.js";import"./ScrollArea-383a5d94.js";function pt(){var j;const h=n.useRef(null),{edit:a,openEditTask:S,closeEditTask:C}=G(),{initTaskWebSocket:D}=q(),{findTask:v,updateTaskProperty:d,complete:y,deleteAttachment:k,uploadAttachments:w}=W(),{usersWithAccessToProject:c,taskGroups:E,labels:g,openedTask:f,auth:{user:z}}=M().props;n.useEffect(()=>{f&&setTimeout(()=>S(f),50)},[]);const e=v(a.task.id),[i,_]=n.useState({group_id:"",assigned_to_user_id:"",name:"",description:"",estimation:0,due_on:"",hidden_from_clients:!1,billable:!0,subscribed_users:[],labels:[]});n.useEffect(()=>{if(a.opened)return D(e)},[a.opened]),n.useEffect(()=>{var t;a.opened&&(_({group_id:(e==null?void 0:e.group_id)||"",assigned_to_user_id:(e==null?void 0:e.assigned_to_user_id)||"",name:(e==null?void 0:e.name)||"",description:(e==null?void 0:e.description)||"",estimation:(e==null?void 0:e.estimation)||0,due_on:e!=null&&e.due_on?R(e==null?void 0:e.due_on).toDate():"",hidden_from_clients:(e==null?void 0:e.hidden_from_clients)!==void 0?e.hidden_from_clients:!1,billable:(e==null?void 0:e.billable)!==void 0?e.billable:!0,subscribed_users:((e==null?void 0:e.subscribed_users)||[]).map(s=>s.id.toString()),labels:((e==null?void 0:e.labels)||[]).map(s=>s.id)}),(t=h.current)==null||t.setContent((e==null?void 0:e.description)||""))},[a.opened,e]);const o=(t,s)=>{_({...i,[t]:s});const N=["labels","subscribed_users"],O=["name","description"];if(N.includes(t)){const B={labels:s.map(p=>g.find(u=>u.id===p)),subscribed_users:s.map(p=>c.find(u=>u.id.toString()===p))};d(e,t,s,B[t])}else O.includes(t)||d(e,t,s)},x=t=>{i.name.length>0&&d(e,t,i[t])};return r.jsx(K,{opened:a.opened,onClose:C,title:r.jsxs(I,{ml:25,my:"sm",wrap:"nowrap",children:[r.jsx(b,{size:"md",radius:"xl",color:"green",checked:(e==null?void 0:e.completed_at)!==null,onChange:t=>y(e,t.currentTarget.checked),className:can("complete task")?l.checkbox:l.disabledCheckbox}),r.jsxs(m,{fz:P(27),fw:600,lh:1.2,td:(e==null?void 0:e.completed_at)!==null?"line-through":null,children:["#",e==null?void 0:e.number,": ",i.name]})]}),position:"right",size:1e3,overlayProps:{backgroundOpacity:.55,blur:3},transitionProps:{transition:"slide-left",duration:400,timingFunction:"ease"},children:e?r.jsxs(r.Fragment,{children:[r.jsxs(Q,{c:"dark.3",ml:24,mb:"xs",separator:"I",separatorMargin:"sm",styles:{separator:{opacity:.3}},children:[r.jsx(m,{size:"xs",children:e.project.name}),r.jsxs(m,{size:"xs",children:["Task #",e.number]}),r.jsxs(m,{size:"xs",children:["Created by ",e.created_by_user.name," on ",H(e.created_at)]})]}),r.jsxs("form",{className:l.inner,children:[r.jsxs("div",{className:l.content,children:[r.jsx(X,{label:"Name",placeholder:"Task name",value:i.name,onChange:t=>o("name",t.target.value),onBlur:()=>x("name"),error:i.name.length===0,readOnly:!can("edit task")}),r.jsx(Y,{ref:h,mt:"xl",placeholder:"Task description",content:i.description,height:260,onChange:t=>o("description",t),onBlur:()=>x("description"),readOnly:!can("edit task")}),can("edit task")&&r.jsx(A,{mt:"xl",selected:e.attachments,onChange:t=>w(e,t),remove:t=>k(e,t)}),can("view comments")&&r.jsx(U,{task:e})]}),r.jsxs("div",{className:l.sidebar,children:[r.jsx(T,{label:"Task group",placeholder:"Select task group",allowDeselect:!1,value:i.group_id.toString(),onChange:t=>o("group_id",t),data:E.map(t=>({value:t.id.toString(),label:t.name})),readOnly:!can("edit task")}),r.jsx(T,{label:"Assignee",placeholder:"Select assignee",searchable:!0,mt:"md",value:(j=i.assigned_to_user_id)==null?void 0:j.toString(),onChange:t=>o("assigned_to_user_id",t),data:c.map(t=>({value:t.id.toString(),label:t.name})),readOnly:!can("edit task")}),r.jsx(F,{clearable:!0,valueFormat:"DD MMM YYYY",minDate:new Date,mt:"md",label:"Due date",placeholder:"Pick task due date",value:i.due_on,onChange:t=>o("due_on",t),readOnly:!can("edit task")}),r.jsx(V,{items:g,selected:i.labels,onChange:t=>o("labels",t),mt:"md"}),r.jsx(Z,{label:"Time estimation",mt:"md",decimalScale:2,fixedDecimalScale:!0,value:i.estimation,min:0,allowNegative:!1,step:.5,suffix:" hours",onChange:t=>o("estimation",t),readOnly:!can("edit task")}),(can("view time logs")||can("add time log"))&&r.jsx(J,{mt:"xl",task:e}),r.jsx(b,{label:"Billable",mt:"xl",checked:i.billable,onChange:t=>o("billable",t.currentTarget.checked),disabled:!can("edit task")}),!L(z,["client"])&&r.jsx(b,{label:"Hidden from clients",mt:"md",checked:i.hidden_from_clients,onChange:t=>o("hidden_from_clients",t.currentTarget.checked),disabled:!can("edit task")}),r.jsx($,{label:"Subscribers",placeholder:i.subscribed_users.length?null:"Select subscribers",mt:"lg",value:i.subscribed_users,onChange:t=>o("subscribed_users",t),data:c.map(t=>({value:t.id.toString(),label:t.name})),readOnly:!can("edit task")})]})]})]}):r.jsx(r.Fragment,{})})}export{pt as EditTaskDrawer};
