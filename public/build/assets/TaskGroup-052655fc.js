import{j as r,G as g,r as t}from"./app-123ed893.js";import{u as h}from"./useTaskDrawerStore-db985dee.js";import{P as x,C as f}from"./dnd.esm-fd8fd9c2.js";import j from"./Task-5841e20d.js";import u from"./TaskGroupActions-f5260c0a.js";import{c as i}from"./TaskGroup.module-8bfe796a.js";import{I as k}from"./TaskRow-d981e417.js";import{T}from"./Text-7a8e0ced.js";import{T as b}from"./Tooltip-e94bcd90.js";import{A as D}from"./ActionIcon-4294e0c7.js";import{I as w}from"./IconPlus-fea00f2b.js";import"./route-002f9c56.js";import"./_baseClone-c0d3f5ea.js";import"./index-ffe472df.js";import"./usePreferences-0f123cb0.js";import"./TaskCard-83229f81.js";import"./Label-79df7e30.js";import"./ColorSwatch-d7027f3b.js";import"./task-a2bb2843.js";import"./user-6639b4f0.js";import"./TaskActions-13032766.js";import"./ConfirmModal-4226d1a5.js";import"./index-136d966c.js";import"./Menu-d1d9bfc4.js";import"./use-resolved-styles-api-6ecd5aea.js";import"./Popover-3d4b00cf.js";import"./DirectionProvider-739d2a13.js";import"./use-floating-auto-update-c5e4584a.js";import"./use-uncontrolled-fce7b9fe.js";import"./IconDots-21feca73.js";import"./createReactComponent-7e1f628b.js";import"./IconArchive-96459c6e.js";import"./use-computed-color-scheme-c3233f71.js";import"./Avatar-4dc21544.js";import"./EditTasksGroupModal-1d78c8c4.js";import"./useForm-9d1dcdb2.js";import"./TextInput-17962b90.js";import"./InputBase-ad5899ec.js";import"./Input-0c5af4bd.js";import"./create-optional-context-f78ae3e4.js";import"./Flex-f0cbbed2.js";import"./IconPencil-56deb085.js";import"./useTasksStore-12e71cc3.js";import"./reorder-d676a14f.js";import"./TaskRow.module-427abc78.js";import"./Checkbox-98333993.js";import"./get-auto-contrast-value-58024fc4.js";import"./CheckIcon-5474d37b.js";import"./Pill-bab5faf2.js";import"./get-style-object-71cabcb5.js";function Tr({group:o,tasks:m,...p}){const{openCreateTask:l}=h();return r.jsx(x,{draggableId:o.id.toString(),...p,children:(s,n)=>r.jsxs("div",{className:`${i.row} ${n.isDragging&&i.itemDragging}`,ref:s.innerRef,...s.draggableProps,children:[r.jsxs("div",{className:i.group,children:[r.jsxs(g,{children:[r.jsx("div",{...s.dragHandleProps,className:i.dragHandle,children:r.jsx(k,{style:{width:t(18),height:t(18),display:can("reorder task group")&&!route().params.archived?"inline":"none"},stroke:1.5})}),r.jsx(T,{size:"xl",fw:700,children:o.name}),r.jsx(u,{group:o,className:i.actions})]}),!route().params.archived&&can("create task")&&r.jsx(b,{label:"Add task",openDelay:1e3,withArrow:!0,children:r.jsx(D,{variant:"filled",size:"md",radius:"xl",onClick:()=>l(o.id),children:r.jsx(w,{style:{width:t(18),height:t(18)},stroke:2})})})]}),r.jsx(f,{droppableId:`group-${o.id}-tasks`,type:"task",children:(a,c)=>r.jsxs("div",{ref:a.innerRef,...a.droppableProps,className:c.isDraggingOver?"isDraggingOver":"",children:[m.map((e,d)=>r.jsx(j,{task:e,index:d},e.id)),r.jsx("div",{className:i.placeholder,children:a.placeholder})]})})]})})}export{Tr as default};
