import{j as r,B as f,r as l,G as m}from"./app-7bc20a4e.js";import{L as d}from"./Label-7fa5cbc4.js";import{u as w,C as e}from"./Combobox-0c9e74c6.js";import{I as c}from"./Input-e73c8c99.js";import{P as x}from"./PillsInput-d3ab7faa.js";import{P as D}from"./Pill-50317cb8.js";import{a as b}from"./CheckIcon-099263f9.js";import"./ColorSwatch-67f719b5.js";import"./Text-160f2c95.js";import"./Popover-708222d0.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./use-uncontrolled-0eb68696.js";import"./create-optional-context-1a5c9a08.js";import"./InputBase-7a5da2ab.js";function T({items:p,selected:n,onChange:a,...u}){const s=w({onDropdownClose:()=>s.resetSelectedOption(),onDropdownOpen:()=>s.updateSelectedOptionIndex("active")}),h=o=>a(n.includes(o)?n.filter(i=>i!==o):[...n,o]),t=o=>a(n.filter(i=>i!==o));return r.jsxs(f,{...u,children:[r.jsx(c.Label,{children:"Labels"}),r.jsxs(e,{store:s,onOptionSubmit:h,withinPortal:!1,disabled:!can("edit task"),children:[r.jsx(e.DropdownTarget,{children:r.jsx(x,{pointer:!0,onClick:()=>s.toggleDropdown(),children:r.jsxs(D.Group,{style:{rowGap:l(3),columnGap:l(12)},children:[n.length>0?n.map(o=>{const i=p.find(j=>j.id===o);return r.jsx(d,{name:i.name,color:i.color,size:11,onRemove:()=>t(i)},i.id)}):r.jsx(c.Placeholder,{children:"Select labels"}),r.jsx(e.EventsTarget,{children:r.jsx(x.Field,{type:"hidden",onBlur:()=>s.closeDropdown(),onKeyDown:o=>{o.key==="Backspace"&&(o.preventDefault(),t(n[n.length-1]))}})})]})})}),r.jsx(e.Dropdown,{children:r.jsx(e.Options,{children:p.map(o=>r.jsx(e.Option,{value:o.id,active:n.includes(o.id),children:r.jsxs(m,{gap:"sm",children:[n.includes(o.id)?r.jsx(b,{size:12}):null,r.jsx(m,{gap:7,children:r.jsx(d,{name:o.name,color:o.color,size:11,onRemove:()=>t(o)})})]})},o.id))})})]})]})}export{T as default};
