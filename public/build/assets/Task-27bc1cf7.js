import{j as o,G as t,r as i}from"./app-7bc20a4e.js";import{L as h}from"./Label-7fa5cbc4.js";import{m as x}from"./currency-edacadb9.js";import{b as u}from"./datetime-7dece6f7.js";import{o as f}from"./route-93322184.js";import{F as b}from"./Flex-85899ff9.js";import{C as j}from"./Checkbox-0f6ed80c.js";import{S as a}from"./Stack-ea94f1d8.js";import{T as m}from"./Text-160f2c95.js";import{T as _}from"./Tooltip-e7859f7c.js";import"./ColorSwatch-67f719b5.js";import"./_baseClone-594d8115.js";import"./get-auto-contrast-value-58024fc4.js";import"./Input-e73c8c99.js";import"./create-optional-context-1a5c9a08.js";import"./use-uncontrolled-0eb68696.js";import"./CheckIcon-099263f9.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./get-style-object-71cabcb5.js";const w="_checkbox_t4izb_1",g="_task_t4izb_5",N="_name_t4izb_17",s={checkbox:w,task:g,name:N};function K({task:e,selectedTasks:n,toggleTask:c,currency:p,type:l,hourlyRate:d}){return o.jsxs(b,{className:s.task,justify:"space-between",wrap:"nowrap",children:[o.jsxs(t,{gap:"sm",wrap:"nowrap",align:"self-start",children:[o.jsx(j,{size:"sm",className:s.checkbox,checked:n.includes(e.id),onChange:r=>c(e.id,r.currentTarget.checked)}),o.jsxs(a,{gap:3,children:[o.jsxs(m,{className:s.name,size:"sm",fw:500,onClick:()=>f("projects.tasks.open",[e.project_id,e.id]),children:["#",e.number+": "+e.name]}),o.jsx(t,{wrap:"wrap",style:{rowGap:i(3),columnGap:i(12)},children:e.labels.map(r=>o.jsx(h,{name:r.name,color:r.color},r.id))})]})]}),o.jsxs(a,{gap:3,ml:10,style:{flexShrink:0},children:[l==="hourly"&&o.jsx(_,{label:Number(e.total_minutes)===0?"There is no logged time on this task":`Logged time: ${Number(e.total_minutes)/60}h`,openDelay:500,withArrow:!0,children:o.jsx(m,{fw:700,c:Number(e.total_minutes)===0?"red.7":"",children:x(Number(e.total_minutes)/60*d,p.code)})}),o.jsx(m,{size:"xs",c:"dimmed",fw:500,children:u(e.completed_at)})]})]})}export{K as default};