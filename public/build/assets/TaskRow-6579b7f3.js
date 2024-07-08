import{j as a,G as i,r as o,d as p}from"./app-374f8179.js";import{L as d}from"./Label-566a57b0.js";import{u as g}from"./useTaskDrawerStore-f9735c76.js";import{u}from"./useTasksStore-623ae120.js";import{i as h}from"./task-8c247610.js";import{s as f}from"./user-6639b4f0.js";import{P as x}from"./dnd.esm-97fb9e0d.js";import j from"./TaskActions-bc3b9f75.js";import{c as r}from"./TaskRow.module-427abc78.js";import{F as _}from"./Flex-25d97275.js";import{c as w}from"./createReactComponent-8eeb0f88.js";import{C as b}from"./Checkbox-f4a1160f.js";import{T}from"./Tooltip-0b66e8a5.js";import{P as y}from"./Pill-9cb7cf61.js";import{T as k}from"./Text-54f93905.js";var v=w("grip-vertical","IconGripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);function M({task:e,index:m}){const{complete:n}=u(),{openEditTask:c}=g();return a.jsx(x,{draggableId:"task-"+e.id,index:m,children:(t,l)=>a.jsx(_,{...t.draggableProps,ref:t.innerRef,className:`${r.task} ${l.isDragging&&r.itemDragging} ${e.completed_at!==null&&r.completed}`,wrap:"nowrap",children:a.jsxs(i,{gap:"sm",wrap:"nowrap",children:[a.jsx("div",{...t.dragHandleProps,children:a.jsx(v,{style:{width:o(18),height:o(18),display:can("reorder task")?"inline":"none"},stroke:1.5,className:r.dragHandle})}),a.jsx(b,{size:"sm",radius:"xl",color:"green",checked:e.completed_at!==null,onChange:s=>n(e,s.currentTarget.checked),className:can("complete task")?r.checkbox:r.disabledCheckbox}),e.assigned_to_user&&a.jsx(p,{href:route("users.edit",e.assigned_to_user.id),children:a.jsx(T,{label:e.assigned_to_user.name,openDelay:1e3,withArrow:!0,children:a.jsx(y,{size:"sm",className:r.user,children:f(e.assigned_to_user.name)})})}),a.jsxs(k,{className:r.name,size:"sm",fw:500,truncate:"end",c:h(e)&&e.completed_at===null?"red.7":"",onClick:()=>c(e),children:["#",e.number+": "+e.name]}),a.jsx(i,{wrap:"wrap",style:{rowGap:o(3),columnGap:o(12)},children:e.labels.map(s=>a.jsx(d,{name:s.name,color:s.color},s.id))}),(can("archive task")||can("restore task"))&&a.jsx(j,{task:e,className:r.actions})]})})})}const L=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{v as I,M as T,L as a};