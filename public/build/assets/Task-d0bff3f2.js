import{j as o,G as t,r as i}from"./app-374f8179.js";import{L as h}from"./Label-566a57b0.js";import{m as x}from"./currency-edacadb9.js";import{b as u}from"./datetime-a3ed528b.js";import{o as f}from"./route-564d43e0.js";import{F as b}from"./Flex-25d97275.js";import{C as j}from"./Checkbox-f4a1160f.js";import{S as a}from"./Stack-df36a12b.js";import{T as m}from"./Text-54f93905.js";import{T as _}from"./Tooltip-0b66e8a5.js";import"./ColorSwatch-22e4c3d2.js";import"./_baseClone-e732cfdc.js";import"./get-auto-contrast-value-58024fc4.js";import"./Input-cbe427a8.js";import"./create-optional-context-a355ac42.js";import"./use-uncontrolled-c541d6c8.js";import"./CheckIcon-36b72f38.js";import"./DirectionProvider-7f2be802.js";import"./use-floating-auto-update-94ecc69c.js";import"./get-style-object-71cabcb5.js";const w="_checkbox_t4izb_1",g="_task_t4izb_5",N="_name_t4izb_17",s={checkbox:w,task:g,name:N};function K({task:e,selectedTasks:n,toggleTask:c,currency:p,type:l,hourlyRate:d}){return o.jsxs(b,{className:s.task,justify:"space-between",wrap:"nowrap",children:[o.jsxs(t,{gap:"sm",wrap:"nowrap",align:"self-start",children:[o.jsx(j,{size:"sm",className:s.checkbox,checked:n.includes(e.id),onChange:r=>c(e.id,r.currentTarget.checked)}),o.jsxs(a,{gap:3,children:[o.jsxs(m,{className:s.name,size:"sm",fw:500,onClick:()=>f("projects.tasks.open",[e.project_id,e.id]),children:["#",e.number+": "+e.name]}),o.jsx(t,{wrap:"wrap",style:{rowGap:i(3),columnGap:i(12)},children:e.labels.map(r=>o.jsx(h,{name:r.name,color:r.color},r.id))})]})]}),o.jsxs(a,{gap:3,ml:10,style:{flexShrink:0},children:[l==="hourly"&&o.jsx(_,{label:Number(e.total_minutes)===0?"There is no logged time on this task":`Logged time: ${Number(e.total_minutes)/60}h`,openDelay:500,withArrow:!0,children:o.jsx(m,{fw:700,c:Number(e.total_minutes)===0?"red.7":"",children:x(Number(e.total_minutes)/60*d,p.code)})}),o.jsx(m,{size:"xs",c:"dimmed",fw:500,children:u(e.completed_at)})]})]})}export{K as default};