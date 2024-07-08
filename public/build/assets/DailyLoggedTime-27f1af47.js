import{q as y,w as d,j as e,G as j,a as T,B as k}from"./app-0842237d.js";import{E as D}from"./EmptyWithIcon-33d678f1.js";import{u as C,l as v}from"./useForm-bb658ce6.js";import{C as g}from"./ContainerBox-2ec7a008.js";import{M as R}from"./MainLayout-b9e5f435.js";import{e as S}from"./route-426ef2aa.js";import{B as w}from"./Breadcrumbs-b9528ea9.js";import{T as M}from"./Title-a0ed43dd.js";import{M as x}from"./MultiSelect-b18d0e84.js";import{D as B}from"./pick-calendar-levels-props-956c10da.js";import{D as O}from"./DatePickerInput-0fa6e4dd.js";import{C as b}from"./Checkbox-9fb90898.js";import{T as t}from"./Table-92ee78f1.js";import{C as F}from"./Center-ca7815fd.js";import{I as E}from"./IconClock-0f82f80a.js";import"./Text-0f25386e.js";import"./index-51272854.js";import"./FlashNotification-80b15f0d.js";import"./use-disclosure-eb93ce5d.js";import"./IconInfoCircle-c4cbed09.js";import"./createReactComponent-c737850d.js";import"./IconCircleX-2c153941.js";import"./useWebSockets-33e5047c.js";import"./index-791a8db4.js";import"./useTasksStore-2673510b.js";import"./reorder-c78854a4.js";import"./_baseClone-98204728.js";import"./use-computed-color-scheme-7794acad.js";import"./Container-ff5d0a99.js";import"./Image-e655e620.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-f81784eb.js";import"./use-resolved-styles-api-6cf44df2.js";import"./Popover-f8e352cc.js";import"./DirectionProvider-8ec7ed91.js";import"./use-floating-auto-update-f3813b40.js";import"./use-uncontrolled-8c49da27.js";import"./Avatar-5e3d7158.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-b2e899c7.js";import"./IconUsers-8fe5a950.js";import"./ScrollArea-6eaed29f.js";import"./datetime-a8debb17.js";import"./IconMessage-fdf47061.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-f908f42d.js";import"./get-sorted-breakpoints-cdc16153.js";import"./OptionsDropdown-11d3e2a8.js";import"./CheckIcon-5dce244a.js";import"./Combobox-1fa9834a.js";import"./Input-da77b9d4.js";import"./create-optional-context-731c9784.js";import"./InputBase-60d93754.js";import"./Pill-0610b8f5.js";import"./PillsInput-ce9d654a.js";import"./AccordionChevron-dfcd26d9.js";import"./clamp-73f6bef2.js";const P=()=>{var c,h;let{items:s,users:a,dropdowns:n}=y().props;const o=S(),[i,f,m]=C("get",route("reports.logged-time.daily"),{projects:((c=o.projects)==null?void 0:c.map(String))||[],users:((h=o.users)==null?void 0:h.map(String))||[],dateRange:o.dateRange&&o.dateRange[0]&&o.dateRange[1]?[d(o.dateRange[0]).toDate(),d(o.dateRange[1]).toDate()]:[d().subtract(1,"week").toDate(),d().toDate()],completed:o.completed!==void 0?o.completed:!0,billable:o.billable!==void 0?o.billable:!0});return e.jsxs(e.Fragment,{children:[e.jsxs(w,{fz:14,mb:30,children:[e.jsx("div",{children:"Reports"}),e.jsx("div",{children:"Daily logged time"})]}),e.jsx(M,{order:1,mb:20,children:"Daily logged time"}),e.jsx(g,{px:35,py:25,children:e.jsx("form",{onSubmit:f,children:e.jsxs(j,{justify:"space-between",children:[e.jsxs(j,{gap:"xl",children:[e.jsx(x,{placeholder:i.data.projects.length?null:"Select projects",required:!0,w:220,value:i.data.projects,onChange:r=>m("projects",r),data:n.projects,error:i.errors.projects}),e.jsx(x,{placeholder:i.data.users.length?null:"Select users",required:!0,w:220,value:i.data.users,onChange:r=>m("users",r),data:n.users,error:i.errors.users}),e.jsx(B,{settings:{timezone:"utc"},children:e.jsx(O,{type:"range",valueFormat:"MMM D",placeholder:"Pick dates range",clearable:!0,allowSingleDateInRange:!0,miw:200,value:i.data.dateRange,onChange:r=>m("dateRange",r)})}),e.jsx(b,{label:"Billable",checked:i.data.billable,onChange:r=>m("billable",r.currentTarget.checked)}),e.jsx(b,{label:"Completed",checked:i.data.completed,onChange:r=>m("completed",r.currentTarget.checked)})]}),e.jsx(T,{type:"submit",disabled:i.processing,children:"Submit"})]})})}),e.jsx(k,{mt:"xl",children:Object.keys(s).length?e.jsx(g,{px:35,py:15,children:e.jsxs(t,{horizontalSpacing:"xl",verticalSpacing:"md",striped:!0,highlightOnHover:!0,children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"Date"}),Object.keys(a).map(r=>e.jsx(t.Th,{children:a[r].user_name},a[r].user_id))]})}),e.jsxs(t.Tbody,{children:[Object.keys(s).map(r=>e.jsxs(t.Tr,{children:[e.jsx(t.Td,{children:r}),Object.keys(a).map(l=>{var p;return e.jsxs(t.Td,{children:[v.round(((p=s[r][l])==null?void 0:p.total_hours)||0,2).toFixed(2)," h"]},`${r}-${l}`)})]},r)),e.jsxs(t.Tr,{fw:800,children:[e.jsx(t.Td,{align:"right",children:"SUM"}),Object.keys(a).map(r=>e.jsxs(t.Td,{children:[Object.keys(s).reduce((l,p)=>{var u;return l+Number(((u=s[p][r])==null?void 0:u.total_hours)||0)},0).toFixed(2)," ","h"]},r))]})]})]})}):e.jsx(F,{mih:300,children:e.jsx(D,{title:"No logged time found",subtitle:"Try changing selected filters",icon:E})})})]})};P.layout=s=>e.jsx(R,{title:"Logged time sum",children:s});export{P as default};