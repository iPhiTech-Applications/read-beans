import{j as e}from"./app-374f8179.js";import{T as o}from"./TableRowActions-1533cbfa.js";import{T as t}from"./Table-b2a0497c.js";import{C as i}from"./ColorSwatch-22e4c3d2.js";import{T as s}from"./Text-54f93905.js";import"./route-564d43e0.js";import"./_baseClone-e732cfdc.js";import"./index-1f185179.js";import"./ConfirmModal-37455e94.js";import"./ActionIcon-6bed75e6.js";import"./IconPencil-71dcb0ee.js";import"./createReactComponent-8eeb0f88.js";import"./Menu-a0964952.js";import"./use-resolved-styles-api-9ab1b421.js";import"./Popover-3f93f166.js";import"./DirectionProvider-7f2be802.js";import"./use-floating-auto-update-94ecc69c.js";import"./use-uncontrolled-c541d6c8.js";import"./IconDots-1660ad36.js";import"./IconArchive-9b9931d8.js";import"./ScrollArea-9a506a5f.js";function C({item:r}){return e.jsxs(t.Tr,{children:[e.jsx(t.Td,{w:80,children:e.jsx(i,{color:r.color})}),e.jsx(t.Td,{children:e.jsx(s,{fz:"sm",children:r.name})}),(can("edit label")||can("archive label")||can("restore label"))&&e.jsx(t.Td,{w:100,children:e.jsx(o,{item:r,editRoute:"settings.labels.edit",editPermission:"edit label",archivePermission:"archive label",restorePermission:"restore label",archive:{route:"settings.labels.destroy",title:"Archive label",content:"Are you sure you want to archive this label?",confirmLabel:"Archive"},restore:{route:"settings.labels.restore",title:"Restore label",content:"Are you sure you want to restore this label?",confirmLabel:"Restore"}})})]},r.id)}export{C as default};