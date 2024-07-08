import{j as r,G as d,r as o}from"./app-0842237d.js";import{o as i}from"./ConfirmModal-674b71fb.js";import{u as s}from"./index-51272854.js";import u from"./EditTasksGroupModal-e0f9d495.js";import{M as t}from"./Menu-f81784eb.js";import{A as h}from"./ActionIcon-f908f42d.js";import{I as f,a as k}from"./IconDots-a935851c.js";import{I as j}from"./IconPencil-19c34536.js";import{I as v}from"./IconArchive-d0ae841f.js";import"./Text-0f25386e.js";import"./useForm-bb658ce6.js";import"./TextInput-b20d0eac.js";import"./InputBase-60d93754.js";import"./Input-da77b9d4.js";import"./create-optional-context-731c9784.js";import"./Flex-3eec32a1.js";import"./use-resolved-styles-api-6cf44df2.js";import"./Popover-f8e352cc.js";import"./DirectionProvider-8ec7ed91.js";import"./use-floating-auto-update-f3813b40.js";import"./use-uncontrolled-8c49da27.js";import"./createReactComponent-c737850d.js";function B({group:e,...a}){const n=s("delete",route("projects.task-groups.destroy",[e.project_id,e.id])),c=s("post",route("projects.task-groups.restore",[e.project_id,e.id])),p=()=>i({type:"danger",title:"Archive task group",content:"Are you sure you want to archive this task group?",confirmLabel:"Archive",confirmProps:{color:"red"},onConfirm:()=>n.submit({preserveScroll:!0})}),m=()=>i({type:"info",title:"Restore task group",content:"Are you sure you want to restore this task group?",confirmLabel:"Restore",confirmProps:{color:"blue"},onConfirm:()=>c.submit({preserveScroll:!0})}),l=()=>u(e);return r.jsx(d,{gap:0,justify:"flex-end",...a,children:(can("archive task group")&&!route().params.archived||can("restore task group")&&route().params.archived||can("edit task group")&&!route().params.archived)&&r.jsxs(t,{withArrow:!0,position:"bottom-end",withinPortal:!0,shadow:"md",transitionProps:{duration:100,transition:"pop-top-right"},offset:{mainAxis:3,alignmentAxis:5},children:[r.jsx(t.Target,{children:r.jsx(h,{variant:"subtle",color:"gray",children:r.jsx(f,{style:{width:o(20),height:o(20)},stroke:1.5})})}),r.jsxs(t.Dropdown,{children:[can("edit task group")&&!route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(j,{style:{width:o(16),height:o(16)},stroke:1.5}),onClick:l,children:"Edit"}),can("restore task group")&&route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(k,{style:{width:o(16),height:o(16)},stroke:1.5}),color:"blue",onClick:m,children:"Restore"}),can("archive task group")&&!route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(v,{style:{width:o(16),height:o(16)},stroke:1.5}),color:"red",onClick:p,children:"Archive"})]})]})})}export{B as default};