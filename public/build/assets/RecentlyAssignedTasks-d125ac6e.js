import{j as r,B as n,G as t}from"./app-7bc20a4e.js";import{C as p}from"./Card-1ad92e34.js";import{E as l}from"./EmptyWithIcon-60162588.js";import{T as c}from"./TaskGroupLabel-6fba2233.js";import{b as d,a as h}from"./datetime-7dece6f7.js";import{a as x}from"./route-93322184.js";import{T as f}from"./Title-ae7f3e37.js";import{D as j}from"./Divider-004ea17b.js";import{S as u}from"./ScrollArea-383a5d94.js";import{S as a}from"./Stack-ea94f1d8.js";import{T as e}from"./Text-160f2c95.js";import{T as m}from"./Tooltip-e7859f7c.js";import{C as _}from"./Center-2e9cafcb.js";import{I as g}from"./IconSearch-095ea681.js";import"./Card-c6822a5e.js";import"./use-computed-color-scheme-709c2195.js";import"./Pill-50317cb8.js";import"./create-optional-context-1a5c9a08.js";import"./_baseClone-594d8115.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./get-style-object-71cabcb5.js";import"./createReactComponent-0bbe300d.js";const T="_task_hpx6s_1",k="_link_hpx6s_12",w="_due_hpx6s_16",o={task:T,link:k,due:w};function O({tasks:i}){return r.jsxs(p,{bg:"none",children:[r.jsx(f,{order:3,ml:15,children:"Recently assigned tasks"}),r.jsx(j,{my:14}),i.length>0?r.jsx(u,{h:300,scrollbarSize:7,children:r.jsx(a,{gap:10,children:i.map(s=>r.jsx(n,{className:o.task,children:r.jsxs(t,{wrap:"nowrap",justify:"space-between",children:[r.jsxs(a,{gap:3,children:[r.jsx(e,{fz:13,fw:600,onClick:()=>x("projects.tasks.open",[s.project_id,s.id]),className:o.link,children:s.name}),r.jsxs(t,{children:[r.jsx(m,{label:"Task group",openDelay:500,withArrow:!0,children:r.jsx(c,{children:s.task_group.name})}),r.jsx(e,{fz:11,c:"dimmed",children:s.project.name})]})]}),r.jsx(m,{label:d(s.assigned_at),openDelay:500,withArrow:!0,children:r.jsx(e,{fz:11,fw:700,className:o.due,children:h(s.assigned_at)})})]})},s.id))})}):r.jsx(_,{my:30,children:r.jsx(l,{title:"No tasks",subtitle:"You have no assigned tasks",icon:g})})]})}export{O as default};
