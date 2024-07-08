import{q as y,z as d,j as e,G as j,a as T,B as k}from"./app-374f8179.js";import{E as D}from"./EmptyWithIcon-8d418a7d.js";import{u as C,l as v}from"./useForm-026f8df8.js";import{C as g}from"./ContainerBox-368f81f0.js";import{M as R}from"./MainLayout-0488b167.js";import{e as S}from"./route-564d43e0.js";import{B as w}from"./Breadcrumbs-5118094f.js";import{T as M}from"./Title-8e6f5e48.js";import{M as x}from"./MultiSelect-cb840792.js";import{D as B}from"./pick-calendar-levels-props-882ad1c7.js";import{D as O}from"./DatePickerInput-1572ec46.js";import{C as b}from"./Checkbox-f4a1160f.js";import{T as t}from"./Table-b2a0497c.js";import{C as F}from"./Center-d0de108e.js";import{I as z}from"./IconClock-ec10e4c6.js";import"./Text-54f93905.js";import"./index-1f185179.js";import"./FlashNotification-c0c57b3f.js";import"./use-disclosure-dc5fd7a6.js";import"./IconInfoCircle-ba104c62.js";import"./createReactComponent-8eeb0f88.js";import"./IconCircleX-9c124521.js";import"./useWebSockets-9a8c1354.js";import"./index-4597ff56.js";import"./useTasksStore-623ae120.js";import"./reorder-1fd24999.js";import"./_baseClone-e732cfdc.js";import"./use-computed-color-scheme-87717321.js";import"./Container-5fe452f5.js";import"./Image-7c728a9b.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-a0964952.js";import"./use-resolved-styles-api-9ab1b421.js";import"./Popover-3f93f166.js";import"./DirectionProvider-7f2be802.js";import"./use-floating-auto-update-94ecc69c.js";import"./use-uncontrolled-c541d6c8.js";import"./Avatar-2c990df2.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-50bd83d5.js";import"./IconUsers-7ba2e0c4.js";import"./ScrollArea-9a506a5f.js";import"./datetime-a3ed528b.js";import"./IconMessage-78bbe09b.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-6bed75e6.js";import"./get-sorted-breakpoints-ad688b72.js";import"./OptionsDropdown-a64bbc14.js";import"./CheckIcon-36b72f38.js";import"./Combobox-a1cc1704.js";import"./Input-cbe427a8.js";import"./create-optional-context-a355ac42.js";import"./InputBase-229a26b3.js";import"./Pill-9cb7cf61.js";import"./PillsInput-69abf6c0.js";import"./AccordionChevron-06419bcc.js";import"./clamp-73f6bef2.js";const E=()=>{var c,h;let{items:s,users:a,dropdowns:n}=y().props;const o=S(),[i,f,m]=C("get",route("reports.logged-time.daily"),{projects:((c=o.projects)==null?void 0:c.map(String))||[],users:((h=o.users)==null?void 0:h.map(String))||[],dateRange:o.dateRange&&o.dateRange[0]&&o.dateRange[1]?[d(o.dateRange[0]).toDate(),d(o.dateRange[1]).toDate()]:[d().subtract(1,"week").toDate(),d().toDate()],completed:o.completed!==void 0?o.completed:!0,billable:o.billable!==void 0?o.billable:!0});return e.jsxs(e.Fragment,{children:[e.jsxs(w,{fz:14,mb:30,children:[e.jsx("div",{children:"Reports"}),e.jsx("div",{children:"Daily logged time"})]}),e.jsx(M,{order:1,mb:20,children:"Daily logged time"}),e.jsx(g,{px:35,py:25,children:e.jsx("form",{onSubmit:f,children:e.jsxs(j,{justify:"space-between",children:[e.jsxs(j,{gap:"xl",children:[e.jsx(x,{placeholder:i.data.projects.length?null:"Select projects",required:!0,w:220,value:i.data.projects,onChange:r=>m("projects",r),data:n.projects,error:i.errors.projects}),e.jsx(x,{placeholder:i.data.users.length?null:"Select users",required:!0,w:220,value:i.data.users,onChange:r=>m("users",r),data:n.users,error:i.errors.users}),e.jsx(B,{settings:{timezone:"utc"},children:e.jsx(O,{type:"range",valueFormat:"MMM D",placeholder:"Pick dates range",clearable:!0,allowSingleDateInRange:!0,miw:200,value:i.data.dateRange,onChange:r=>m("dateRange",r)})}),e.jsx(b,{label:"Billable",checked:i.data.billable,onChange:r=>m("billable",r.currentTarget.checked)}),e.jsx(b,{label:"Completed",checked:i.data.completed,onChange:r=>m("completed",r.currentTarget.checked)})]}),e.jsx(T,{type:"submit",disabled:i.processing,children:"Submit"})]})})}),e.jsx(k,{mt:"xl",children:Object.keys(s).length?e.jsx(g,{px:35,py:15,children:e.jsxs(t,{horizontalSpacing:"xl",verticalSpacing:"md",striped:!0,highlightOnHover:!0,children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"Date"}),Object.keys(a).map(r=>e.jsx(t.Th,{children:a[r].user_name},a[r].user_id))]})}),e.jsxs(t.Tbody,{children:[Object.keys(s).map(r=>e.jsxs(t.Tr,{children:[e.jsx(t.Td,{children:r}),Object.keys(a).map(l=>{var p;return e.jsxs(t.Td,{children:[v.round(((p=s[r][l])==null?void 0:p.total_hours)||0,2).toFixed(2)," h"]},`${r}-${l}`)})]},r)),e.jsxs(t.Tr,{fw:800,children:[e.jsx(t.Td,{align:"right",children:"SUM"}),Object.keys(a).map(r=>e.jsxs(t.Td,{children:[Object.keys(s).reduce((l,p)=>{var u;return l+Number(((u=s[p][r])==null?void 0:u.total_hours)||0)},0).toFixed(2)," ","h"]},r))]})]})]})}):e.jsx(F,{mih:300,children:e.jsx(D,{title:"No logged time found",subtitle:"Try changing selected filters",icon:z})})})]})};E.layout=s=>e.jsx(R,{title:"Logged time sum",children:s});export{E as default};