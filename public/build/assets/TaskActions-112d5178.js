import{j as r,G as l,r as o}from"./app-7bc20a4e.js";import{o as s}from"./ConfirmModal-eff3ce29.js";import{u as i}from"./index-0b34c5e2.js";import{M as t}from"./Menu-2aba97af.js";import{A as h}from"./ActionIcon-8588dfb6.js";import{I as d,a as u}from"./IconDots-bdbde084.js";import{I as f}from"./IconArchive-1e4e7788.js";import"./Text-160f2c95.js";import"./use-resolved-styles-api-22476df7.js";import"./Popover-708222d0.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./use-uncontrolled-0eb68696.js";import"./createReactComponent-0bbe300d.js";function S({task:e,...n}){const a=i("delete",route("projects.tasks.destroy",[e.project_id,e.id])),c=i("post",route("projects.tasks.restore",[e.project_id,e.id])),m=()=>s({type:"danger",title:"Archive task",content:"Are you sure you want to archive this task?",confirmLabel:"Archive",confirmProps:{color:"red"},onConfirm:()=>a.submit({preserveScroll:!0})}),p=()=>s({type:"info",title:"Restore task",content:"Are you sure you want to restore this task?",confirmLabel:"Restore",confirmProps:{color:"blue"},onConfirm:()=>c.submit({preserveScroll:!0})});return r.jsx(l,{gap:0,justify:"flex-end",...n,children:(can("archive task")&&!route().params.archived||can("restore task")&&route().params.archived)&&r.jsxs(t,{withArrow:!0,position:"bottom-end",withinPortal:!0,shadow:"md",transitionProps:{duration:100,transition:"pop-top-right"},offset:{mainAxis:3,alignmentAxis:5},children:[r.jsx(t.Target,{children:r.jsx(h,{variant:"subtle",color:"gray",children:r.jsx(d,{style:{width:o(20),height:o(20)},stroke:1.5})})}),r.jsxs(t.Dropdown,{children:[can("restore task")&&route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(u,{style:{width:o(16),height:o(16)},stroke:1.5}),color:"blue",onClick:p,children:"Restore"}),can("archive task")&&!route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(f,{style:{width:o(16),height:o(16)},stroke:1.5}),color:"red",onClick:m,children:"Archive"})]})]})})}export{S as default};