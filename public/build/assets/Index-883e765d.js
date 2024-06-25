import{q as m,j as r,G as e,a as s}from"./app-7bc20a4e.js";import{S as a,A as c}from"./SearchInput-f47d9967.js";import{E as n}from"./EmptyWithIcon-60162588.js";import{M as l}from"./MainLayout-0d309940.js";import{a as j,b as x}from"./route-93322184.js";import d from"./ProjectCard-398c05bf.js";import{G as i}from"./Grid-242c5098.js";import{I as h}from"./IconPlus-7f567d31.js";import{F as f}from"./Flex-85899ff9.js";import{C as u}from"./Center-2e9cafcb.js";import{I as y}from"./IconSearch-095ea681.js";import"./use-disclosure-c28c9ea4.js";import"./Tooltip-e7859f7c.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./get-style-object-71cabcb5.js";import"./ActionIcon-8588dfb6.js";import"./IconArchive-1e4e7788.js";import"./createReactComponent-0bbe300d.js";import"./TextInput-a85403e2.js";import"./InputBase-7a5da2ab.js";import"./Input-e73c8c99.js";import"./create-optional-context-1a5c9a08.js";import"./IconX-293e98d7.js";import"./Text-160f2c95.js";import"./FlashNotification-5d50b84b.js";import"./IconInfoCircle-e415df20.js";import"./IconCircleX-6c443b41.js";import"./useWebSockets-c1296dd7.js";import"./index-d33ca4cd.js";import"./useTasksStore-7dac92b7.js";import"./reorder-22208721.js";import"./_baseClone-594d8115.js";import"./use-computed-color-scheme-709c2195.js";import"./Container-1a960f39.js";import"./Image-22e73fa0.js";import"./user-6639b4f0.js";import"./Menu-2aba97af.js";import"./use-resolved-styles-api-22476df7.js";import"./Popover-708222d0.js";import"./use-uncontrolled-0eb68696.js";import"./Avatar-b949274f.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-9e3f25d9.js";import"./IconUsers-0a21c95d.js";import"./ScrollArea-383a5d94.js";import"./datetime-7dece6f7.js";import"./IconMessage-d88e8f8e.js";import"./get-auto-contrast-value-58024fc4.js";import"./Title-ae7f3e37.js";import"./get-sorted-breakpoints-b589f481.js";import"./FavoriteToggle-d7fae1e5.js";import"./index-0b34c5e2.js";import"./IconStarFilled-5c8e98fb.js";import"./IconStar-ef74a8d4.js";import"./ProjectCardActions-ab8dcf38.js";import"./ConfirmModal-eff3ce29.js";import"./useForm-2fe29813.js";import"./UserAccessModal-9355502c.js";import"./MultiSelect-1cce7d56.js";import"./OptionsDropdown-41d9cb8a.js";import"./CheckIcon-099263f9.js";import"./Combobox-0c9e74c6.js";import"./Pill-50317cb8.js";import"./PillsInput-d3ab7faa.js";import"./IconDots-bdbde084.js";import"./IconPencil-c11b0641.js";import"./Card-c6822a5e.js";import"./get-base-value-ad2e8cbc.js";const C=()=>{const{items:t}=m().props,p=o=>x({search:o});return r.jsxs(r.Fragment,{children:[r.jsxs(i,{justify:"space-between",align:"center",children:[r.jsx(i.Col,{span:"content",children:r.jsxs(e,{children:[r.jsx(a,{placeholder:"Search projects",search:p}),r.jsx(c,{})]})}),r.jsx(i.Col,{span:"content",children:can("create project")&&r.jsx(s,{leftSection:r.jsx(h,{size:14}),radius:"xl",onClick:()=>j("projects.create"),children:"Create"})})]}),t.length?r.jsx(f,{mt:"xl",gap:"lg",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:t.map(o=>r.jsx(d,{item:o},o.id))}):r.jsx(u,{mih:400,children:r.jsx(n,{title:"No projects found",subtitle:"or you do not have access to any of them",icon:y})})]})};C.layout=t=>r.jsx(l,{title:"Projects",children:t});export{C as default};