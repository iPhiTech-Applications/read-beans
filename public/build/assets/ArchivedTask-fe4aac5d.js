import{j as e,G as s,d as i}from"./app-da3294e8.js";import{L as t}from"./Label-724e4c7b.js";import{i as p}from"./task-aac01fdf.js";import{s as l}from"./user-6639b4f0.js";import{c as o}from"./TaskRow.module-427abc78.js";import a from"./TaskActions-443c6435.js";import{F as d}from"./Flex-84a3973b.js";import{C as c}from"./Checkbox-9aca643a.js";import{T as n}from"./Tooltip-96ba30b2.js";import{P as u}from"./Pill-0cf67f81.js";import{T as x}from"./Text-c3ad06ed.js";import"./ColorSwatch-f02f97e4.js";import"./ConfirmModal-080ad1ce.js";import"./index-97bdf101.js";import"./Menu-c66a745a.js";import"./use-resolved-styles-api-e7a781e3.js";import"./Popover-133eaeea.js";import"./DirectionProvider-012afc33.js";import"./use-floating-auto-update-9478cce0.js";import"./use-uncontrolled-d465780e.js";import"./ActionIcon-ab9527a1.js";import"./IconDots-c1e67a25.js";import"./createReactComponent-75a3f308.js";import"./IconArchive-afef4e89.js";import"./get-auto-contrast-value-58024fc4.js";import"./Input-31469c8b.js";import"./create-optional-context-ef0dc93a.js";import"./CheckIcon-7ca0222f.js";import"./get-style-object-71cabcb5.js";function M({task:r}){return e.jsx(d,{className:`${o.task} ${r.completed_at!==null&&o.completed}`,children:e.jsxs(s,{gap:"sm",children:[e.jsx(c,{size:"sm",radius:"xl",color:"green",defaultChecked:r.completed_at!==null,className:o.disabledCheckbox}),r.assigned_to_user&&e.jsx(i,{href:route("users.edit",r.assigned_to_user.id),children:e.jsx(n,{label:r.assigned_to_user.name,openDelay:1e3,withArrow:!0,children:e.jsx(u,{size:"sm",className:o.user,children:l(r.assigned_to_user.name)})})}),e.jsxs(x,{className:o.name,style:{cursor:"default"},size:"sm",fw:500,c:p(r)&&r.completed_at===null?"red":"",children:["#",r.number+": "+r.name]},r.id),e.jsx(s,{gap:12,ml:8,children:r.labels.map(m=>e.jsx(t,{name:m.name,color:m.color},m.id))}),e.jsx(a,{task:r})]})})}export{M as default};
