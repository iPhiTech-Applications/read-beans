import{q as C,b as f,j as r,a as I}from"./app-123ed893.js";import{E as D,A as E}from"./ArchivedItems-ff64d819.js";import{u as G,F}from"./Filters-e1c5c76a.js";import{u as y}from"./useTaskFiltersStore-347f7ed6.js";import{u as S}from"./useTasksStore-12e71cc3.js";import{u as P}from"./usePreferences-0f123cb0.js";import{a as z}from"./useWebSockets-fcdec77b.js";import{M as A}from"./MainLayout-d756ba11.js";import{D as M,C as N}from"./dnd.esm-fd8fd9c2.js";import{CreateTaskDrawer as R}from"./CreateTaskDrawer-fbc52dbe.js";import{EditTaskDrawer as _}from"./EditTaskDrawer-2af37362.js";import W from"./FiltersDrawer-d81d31c2.js";import $ from"./Header-80d05dbc.js";import q from"./CreateTasksGroupModal-04480a5c.js";import B from"./TaskGroup-052655fc.js";import{G as s}from"./Grid-fbf7d7b6.js";import{I as H}from"./IconPlus-fea00f2b.js";import"./use-computed-color-scheme-c3233f71.js";import"./Flex-f0cbbed2.js";import"./Title-1ca1d242.js";import"./Text-7a8e0ced.js";import"./ArchivedTask-02e6597c.js";import"./Label-79df7e30.js";import"./ColorSwatch-d7027f3b.js";import"./task-a2bb2843.js";import"./user-6639b4f0.js";import"./TaskRow.module-427abc78.js";import"./TaskActions-13032766.js";import"./ConfirmModal-4226d1a5.js";import"./index-136d966c.js";import"./Menu-d1d9bfc4.js";import"./use-resolved-styles-api-6ecd5aea.js";import"./Popover-3d4b00cf.js";import"./DirectionProvider-739d2a13.js";import"./use-floating-auto-update-c5e4584a.js";import"./use-uncontrolled-fce7b9fe.js";import"./ActionIcon-4294e0c7.js";import"./IconDots-21feca73.js";import"./createReactComponent-7e1f628b.js";import"./IconArchive-96459c6e.js";import"./Checkbox-98333993.js";import"./get-auto-contrast-value-58024fc4.js";import"./Input-0c5af4bd.js";import"./create-optional-context-f78ae3e4.js";import"./CheckIcon-5474d37b.js";import"./Tooltip-e94bcd90.js";import"./get-style-object-71cabcb5.js";import"./Pill-bab5faf2.js";import"./ArchivedTaskGroup-e9a14a6a.js";import"./TaskGroupActions-f5260c0a.js";import"./EditTasksGroupModal-1d78c8c4.js";import"./useForm-9d1dcdb2.js";import"./TextInput-17962b90.js";import"./InputBase-ad5899ec.js";import"./IconPencil-56deb085.js";import"./TaskGroup.module-8bfe796a.js";import"./reorder-d676a14f.js";import"./_baseClone-c0d3f5ea.js";import"./index-ffe472df.js";import"./FilterButton-0f1182fa.js";import"./IconCheck-32b93f47.js";import"./Stack-055025a3.js";import"./route-002f9c56.js";import"./FlashNotification-b862f807.js";import"./use-disclosure-d59cdd80.js";import"./IconInfoCircle-409ef499.js";import"./IconCircleX-fc7128ba.js";import"./Container-2b0776cc.js";import"./Image-34973361.js";import"./Avatar-4dc21544.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-598e38ee.js";import"./IconUsers-406c3d56.js";import"./ScrollArea-8472fe95.js";import"./EmptyWithIcon-88b1d926.js";import"./datetime-cf4f36e6.js";import"./IconMessage-c104645d.js";import"./Center-5909643e.js";import"./get-sorted-breakpoints-230439b0.js";import"./TaskDrawer.module-2f13d788.js";import"./file-a40a15db.js";import"./IconX-842eed75.js";import"./SimpleGrid-831d9d77.js";import"./get-base-value-ad2e8cbc.js";import"./pick-calendar-levels-props-6c8bc1cb.js";import"./AccordionChevron-aa8a9a56.js";import"./clamp-73f6bef2.js";import"./RichTextEditor-fd7ad1b3.js";import"./ColorPicker-2b245e06.js";import"./useTaskDrawerStore-db985dee.js";import"./LabelsDropdown-2d70473b.js";import"./Combobox-8cde05d4.js";import"./PillsInput-73e8ed46.js";import"./Drawer-1d9f0d69.js";import"./MultiSelect-297ee2d8.js";import"./OptionsDropdown-daf5eb56.js";import"./Select-f4458790.js";import"./NumberInput-c7961359.js";import"./Comments-3ba6d7d7.js";import"./Timer-6cddf347.js";import"./Divider-18293859.js";import"./Breadcrumbs-6a2e8819.js";import"./SearchInput-984a646d.js";import"./IconSearch-8eff4c2e.js";import"./Task-5841e20d.js";import"./TaskCard-83229f81.js";import"./TaskRow-d981e417.js";const L="_viewport_1wdua_2",U={viewport:L};let e=null;const V=()=>{const{project:i,taskGroups:n,groupedTasks:c,openedTask:d}=C().props;e=i;const{groups:a,setGroups:x,reorderGroup:k}=G(),{tasks:l,setTasks:j,addTask:h,reorderTask:g,moveTask:T}=S(),{hasUrlParams:b}=y(),{initProjectWebSocket:v}=z(),{tasksView:p}=P(),u=b();f.useEffect(()=>{x(n),j(c),d&&h(d)},[n,c]),f.useEffect(()=>v(i),[]);const w=({source:o,destination:t})=>{t&&(o.droppableId.includes("tasks")&&t.droppableId.includes("tasks")?o.droppableId===t.droppableId?g(o,t):T(o,t):k(o.index,t.index))};return r.jsxs(r.Fragment,{children:[r.jsx($,{}),can("create task")&&r.jsx(R,{}),r.jsx(_,{}),r.jsxs(s,{columns:12,gutter:50,mt:"xl",className:`${p}-view`,children:[route().params.archived?r.jsx(s.Col,{span:"auto",children:r.jsx(E,{groups:a,tasks:l})}):r.jsx(s.Col,{span:"auto",children:a.length?r.jsx(r.Fragment,{children:r.jsx(M,{onDragEnd:w,children:r.jsx(N,{droppableId:"groups",direction:p==="list"?"vertical":"horizontal",type:"group",children:o=>r.jsx("div",{...o.droppableProps,ref:o.innerRef,children:r.jsxs("div",{className:U.viewport,children:[a.filter(t=>{var m;return!u||u&&((m=l[t.id])==null?void 0:m.length)>0}).map((t,m)=>r.jsx(B,{index:m,group:t,tasks:l[t.id]||[]},t.id)),o.placeholder,!route().params.archived&&can("create task group")&&r.jsxs(I,{leftSection:r.jsx(H,{size:14}),variant:"transparent",size:"sm",mt:14,m:4,radius:"xl",onClick:q,style:{width:"200px"},children:["Add ",p==="list"?"tasks group":"group"]})]})})})})}):r.jsx(D,{title:"No tasks found",subtitle:"or none match your search criteria"})}),p==="list"?r.jsx(s.Col,{span:3,children:r.jsx(F,{})}):r.jsx(W,{})]})]})};V.layout=i=>r.jsx(A,{title:e==null?void 0:e.name,children:i});export{V as default};
