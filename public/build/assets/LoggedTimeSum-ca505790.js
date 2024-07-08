import{q as C,z as p,j as e,G as x,a as k,B as v}from"./app-374f8179.js";import{E as R}from"./EmptyWithIcon-8d418a7d.js";import{u as S}from"./useForm-026f8df8.js";import{C as g}from"./ContainerBox-368f81f0.js";import{M as D}from"./MainLayout-0488b167.js";import{m as M}from"./currency-edacadb9.js";import{e as B}from"./route-564d43e0.js";import{r as P}from"./round-c73b2ee7.js";import{B as L}from"./Breadcrumbs-5118094f.js";import{T as z}from"./Title-8e6f5e48.js";import{M as f}from"./MultiSelect-cb840792.js";import{D as E}from"./pick-calendar-levels-props-882ad1c7.js";import{D as F}from"./DatePickerInput-1572ec46.js";import{C as b}from"./Checkbox-f4a1160f.js";import{T as q}from"./Text-54f93905.js";import{T as o}from"./Table-b2a0497c.js";import{C as I}from"./Center-d0de108e.js";import{I as O}from"./IconClock-ec10e4c6.js";import"./index-1f185179.js";import"./FlashNotification-c0c57b3f.js";import"./use-disclosure-dc5fd7a6.js";import"./IconInfoCircle-ba104c62.js";import"./createReactComponent-8eeb0f88.js";import"./IconCircleX-9c124521.js";import"./useWebSockets-9a8c1354.js";import"./index-4597ff56.js";import"./useTasksStore-623ae120.js";import"./reorder-1fd24999.js";import"./_baseClone-e732cfdc.js";import"./use-computed-color-scheme-87717321.js";import"./Container-5fe452f5.js";import"./Image-7c728a9b.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-a0964952.js";import"./use-resolved-styles-api-9ab1b421.js";import"./Popover-3f93f166.js";import"./DirectionProvider-7f2be802.js";import"./use-floating-auto-update-94ecc69c.js";import"./use-uncontrolled-c541d6c8.js";import"./Avatar-2c990df2.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-50bd83d5.js";import"./IconUsers-7ba2e0c4.js";import"./ScrollArea-9a506a5f.js";import"./datetime-a3ed528b.js";import"./IconMessage-78bbe09b.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-6bed75e6.js";import"./get-sorted-breakpoints-ad688b72.js";import"./OptionsDropdown-a64bbc14.js";import"./CheckIcon-36b72f38.js";import"./Combobox-a1cc1704.js";import"./Input-cbe427a8.js";import"./create-optional-context-a355ac42.js";import"./InputBase-229a26b3.js";import"./Pill-9cb7cf61.js";import"./PillsInput-69abf6c0.js";import"./AccordionChevron-06419bcc.js";import"./clamp-73f6bef2.js";const U=()=>{var u,h;let{projects:a,clientCompanies:T,dropdowns:d}=C().props;const i=B(),[s,_,l]=S("get",route("reports.logged-time.sum"),{projects:((u=i.projects)==null?void 0:u.map(String))||[],users:((h=i.users)==null?void 0:h.map(String))||[],dateRange:i.dateRange&&i.dateRange[0]&&i.dateRange[1]?[p(i.dateRange[0]).toDate(),p(i.dateRange[1]).toDate()]:[p().subtract(1,"week").toDate(),p().toDate()],completed:i.completed!==void 0?i.completed:!0,billable:i.billable!==void 0?i.billable:!0}),n=(t,r)=>{var j;const m=(j=T.find(y=>y.id===r))==null?void 0:j.currency;return M(t,m==null?void 0:m.code,m==null?void 0:m.decimals)},c=t=>t.total_hours*t.project_rate-t.total_hours*t.user_rate;return e.jsxs(e.Fragment,{children:[e.jsxs(L,{fz:14,mb:30,children:[e.jsx("div",{children:"Reports"}),e.jsx("div",{children:"Logged time sum"})]}),e.jsx(z,{order:1,mb:20,children:"Logged time sum"}),e.jsx(g,{px:35,py:25,children:e.jsx("form",{onSubmit:_,children:e.jsxs(x,{justify:"space-between",children:[e.jsxs(x,{gap:"xl",children:[e.jsx(f,{placeholder:s.data.projects.length?null:"Select projects",required:!0,w:220,value:s.data.projects,onChange:t=>l("projects",t),data:d.projects,error:s.errors.projects}),e.jsx(f,{placeholder:s.data.users.length?null:"Select users",required:!0,w:220,value:s.data.users,onChange:t=>l("users",t),data:d.users,error:s.errors.users}),e.jsx(E,{settings:{timezone:"utc"},children:e.jsx(F,{type:"range",valueFormat:"MMM D",placeholder:"Pick dates range",clearable:!0,allowSingleDateInRange:!0,miw:200,value:s.data.dateRange,onChange:t=>l("dateRange",t)})}),e.jsx(b,{label:"Billable",checked:s.data.billable,onChange:t=>l("billable",t.currentTarget.checked)}),e.jsx(b,{label:"Completed",checked:s.data.completed,onChange:t=>l("completed",t.currentTarget.checked)})]}),e.jsx(k,{type:"submit",disabled:s.processing,children:"Submit"})]})})}),e.jsx(v,{mt:"xl",children:Object.keys(a).length?Object.keys(a).map(t=>e.jsxs(g,{px:35,py:15,my:25,children:[e.jsx(q,{fz:20,fw:600,children:a[t][0].project_name}),e.jsxs(o,{horizontalSpacing:"xl",verticalSpacing:"md",striped:!0,highlightOnHover:!0,children:[e.jsx(o.Thead,{children:e.jsxs(o.Tr,{children:[e.jsx(o.Th,{children:"User"}),e.jsx(o.Th,{children:"Logged time"}),e.jsx(o.Th,{children:"Project rate"}),e.jsx(o.Th,{children:"User rate"}),e.jsx(o.Th,{children:"Expense"}),e.jsx(o.Th,{children:"Profit"})]})}),e.jsx(o.Tbody,{children:a[t].map(r=>e.jsxs(o.Tr,{children:[e.jsx(o.Td,{children:r.user_name}),e.jsxs(o.Td,{children:[P(r.total_hours,2).toFixed(2)," h"]}),e.jsx(o.Td,{children:n(r.project_rate,r.client_company_id)}),e.jsx(o.Td,{opacity:r.user_rate===0?.3:1,children:n(r.user_rate,r.client_company_id)}),e.jsx(o.Td,{opacity:r.user_rate===0?.3:1,children:n(r.total_hours*r.user_rate,r.client_company_id)}),e.jsx(o.Td,{c:c(r)<0?"red.7":"green.7",children:n(c(r),r.client_company_id)})]},r.user_id))})]})]},t)):e.jsx(I,{mih:300,children:e.jsx(R,{title:"No logged time found",subtitle:"Try changing selected filters",icon:O})})})]})};U.layout=a=>e.jsx(D,{title:"Logged time sum",children:a});export{U as default};