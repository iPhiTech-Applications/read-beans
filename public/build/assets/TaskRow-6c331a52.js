import{j as a,G as i,r as o,d as p}from"./app-7bc20a4e.js";import{L as d}from"./Label-7fa5cbc4.js";import{u as g}from"./useTaskDrawerStore-d418c6e5.js";import{u}from"./useTasksStore-7dac92b7.js";import{i as h}from"./task-41c82952.js";import{s as f}from"./user-6639b4f0.js";import{P as x}from"./dnd.esm-d88851b4.js";import j from"./TaskActions-112d5178.js";import{c as r}from"./TaskRow.module-427abc78.js";import{F as _}from"./Flex-85899ff9.js";import{c as w}from"./createReactComponent-0bbe300d.js";import{C as b}from"./Checkbox-0f6ed80c.js";import{T}from"./Tooltip-e7859f7c.js";import{P as y}from"./Pill-50317cb8.js";import{T as k}from"./Text-160f2c95.js";var v=w("grip-vertical","IconGripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);function M({task:e,index:m}){const{complete:n}=u(),{openEditTask:c}=g();return a.jsx(x,{draggableId:"task-"+e.id,index:m,children:(t,l)=>a.jsx(_,{...t.draggableProps,ref:t.innerRef,className:`${r.task} ${l.isDragging&&r.itemDragging} ${e.completed_at!==null&&r.completed}`,wrap:"nowrap",children:a.jsxs(i,{gap:"sm",wrap:"nowrap",children:[a.jsx("div",{...t.dragHandleProps,children:a.jsx(v,{style:{width:o(18),height:o(18),display:can("reorder task")?"inline":"none"},stroke:1.5,className:r.dragHandle})}),a.jsx(b,{size:"sm",radius:"xl",color:"green",checked:e.completed_at!==null,onChange:s=>n(e,s.currentTarget.checked),className:can("complete task")?r.checkbox:r.disabledCheckbox}),e.assigned_to_user&&a.jsx(p,{href:route("users.edit",e.assigned_to_user.id),children:a.jsx(T,{label:e.assigned_to_user.name,openDelay:1e3,withArrow:!0,children:a.jsx(y,{size:"sm",className:r.user,children:f(e.assigned_to_user.name)})})}),a.jsxs(k,{className:r.name,size:"sm",fw:500,truncate:"end",c:h(e)&&e.completed_at===null?"red.7":"",onClick:()=>c(e),children:["#",e.number+": "+e.name]}),a.jsx(i,{wrap:"wrap",style:{rowGap:o(3),columnGap:o(12)},children:e.labels.map(s=>a.jsx(d,{name:s.name,color:s.color},s.id))}),(can("archive task")||can("restore task"))&&a.jsx(j,{task:e,className:r.actions})]})})})}const L=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{v as I,M as T,L as a};
