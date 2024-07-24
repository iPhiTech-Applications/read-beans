import{q as g,j as e,G as l}from"./app-123ed893.js";import{A as b}from"./ActionButton-39344ba9.js";import{B as j}from"./BackButton-e18afed3.js";import{u as v}from"./useForm-9d1dcdb2.js";import{C as f}from"./ContainerBox-8c45766b.js";import{M as y}from"./MainLayout-d756ba11.js";import{a as C}from"./route-002f9c56.js";import{B as _}from"./Breadcrumbs-6a2e8819.js";import{A as w}from"./Anchor-f8a41b55.js";import{G as n}from"./Grid-fbf7d7b6.js";import{T as S}from"./Title-1ca1d242.js";import{T as i}from"./TextInput-17962b90.js";import{S as p}from"./Select-f4458790.js";import{M as B}from"./MultiSelect-297ee2d8.js";import{F as s}from"./Fieldset-0e1a6cb4.js";import"./createReactComponent-7e1f628b.js";import"./index-136d966c.js";import"./FlashNotification-b862f807.js";import"./use-disclosure-d59cdd80.js";import"./IconInfoCircle-409ef499.js";import"./IconCircleX-fc7128ba.js";import"./useWebSockets-fcdec77b.js";import"./index-ffe472df.js";import"./useTasksStore-12e71cc3.js";import"./reorder-d676a14f.js";import"./_baseClone-c0d3f5ea.js";import"./use-computed-color-scheme-c3233f71.js";import"./Container-2b0776cc.js";import"./Image-34973361.js";import"./get-style-object-71cabcb5.js";import"./user-6639b4f0.js";import"./Menu-d1d9bfc4.js";import"./use-resolved-styles-api-6ecd5aea.js";import"./Popover-3d4b00cf.js";import"./DirectionProvider-739d2a13.js";import"./use-floating-auto-update-c5e4584a.js";import"./use-uncontrolled-fce7b9fe.js";import"./Avatar-4dc21544.js";import"./Text-7a8e0ced.js";import"./upper-first-a5ff10ec.js";import"./IconLayoutList-598e38ee.js";import"./IconUsers-406c3d56.js";import"./ScrollArea-8472fe95.js";import"./EmptyWithIcon-88b1d926.js";import"./datetime-cf4f36e6.js";import"./IconMessage-c104645d.js";import"./get-auto-contrast-value-58024fc4.js";import"./ActionIcon-4294e0c7.js";import"./Center-5909643e.js";import"./get-sorted-breakpoints-230439b0.js";import"./get-base-value-ad2e8cbc.js";import"./InputBase-ad5899ec.js";import"./Input-0c5af4bd.js";import"./create-optional-context-f78ae3e4.js";import"./OptionsDropdown-daf5eb56.js";import"./CheckIcon-5474d37b.js";import"./Combobox-8cde05d4.js";import"./Pill-bab5faf2.js";import"./PillsInput-73e8ed46.js";const T=()=>{var m,d;const{item:a,dropdowns:{clients:c,countries:u,currencies:h}}=g().props,[r,x,o]=v("post",route("clients.companies.update",a.id),{_method:"put",name:a.name,address:a.address||"",postal_code:a.postal_code||"",city:a.city||"",country_id:a.country_id||"",currency_id:a.currency_id||"",email:a.email||"",phone:a.phone||"",web:a.web||"",iban:a.iban||"",swift:a.swift||"",business_id:a.business_id||"",tax_id:a.tax_id||"",vat:a.vat||"",clients:a.clients.map(t=>t.id.toString())});return e.jsxs(e.Fragment,{children:[e.jsxs(_,{fz:14,mb:30,children:[e.jsx(w,{href:"#",onClick:()=>C("clients.companies.index"),fz:14,children:"Companies"}),e.jsx("div",{children:"Edit"})]}),e.jsxs(n,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[e.jsx(n.Col,{span:"auto",children:e.jsx(S,{order:1,children:"Edit company"})}),e.jsx(n.Col,{span:"content"})]}),e.jsx(f,{maw:600,children:e.jsxs("form",{onSubmit:x,children:[e.jsx(i,{label:"Name",placeholder:"Company name",required:!0,value:r.data.name,onChange:t=>o("name",t.target.value),error:r.errors.name}),e.jsx(p,{label:"Default currency",placeholder:"Select currency",required:!0,mt:"md",searchable:!0,value:(m=r.data.currency_id)==null?void 0:m.toString(),onChange:t=>o("currency_id",t),data:h,error:r.errors.currency_id}),e.jsx(B,{label:"Clients",placeholder:"Select clients",required:!0,mt:"md",value:r.data.clients,onChange:t=>o("clients",t),data:c,error:r.errors.clients}),e.jsxs(s,{legend:"Location",mt:"xl",children:[e.jsx(i,{label:"Address",placeholder:"Address",value:r.data.address,onChange:t=>o("address",t.target.value),error:r.errors.address}),e.jsxs(l,{grow:!0,children:[e.jsx(i,{label:"Postal code",placeholder:"Postal code",mt:"md",value:r.data.postal_code,onChange:t=>o("postal_code",t.target.value),error:r.errors.postal_code}),e.jsx(i,{label:"City",placeholder:"City",mt:"md",value:r.data.city,onChange:t=>o("city",t.target.value),error:r.errors.city})]}),e.jsx(p,{label:"Country",placeholder:"Select country",mt:"md",searchable:!0,value:(d=r.data.country_id)==null?void 0:d.toString(),onChange:t=>o("country_id",t),data:u,error:r.errors.country_id})]}),e.jsxs(s,{legend:"Details",mt:"xl",children:[e.jsx(i,{label:"Business ID",placeholder:"Business ID",value:r.data.business_id,onChange:t=>o("business_id",t.target.value),error:r.errors.business_id}),e.jsx(i,{label:"Tax ID",placeholder:"Tax ID",mt:"md",value:r.data.tax_id,onChange:t=>o("tax_id",t.target.value),error:r.errors.tax_id}),e.jsx(i,{label:"VAT",placeholder:"VAT",mt:"md",value:r.data.vat,onChange:t=>o("vat",t.target.value),error:r.errors.vat})]}),e.jsxs(s,{legend:"Finance",mt:"xl",children:[e.jsx(i,{label:"IBAN",placeholder:"IBAN",value:r.data.iban,onChange:t=>o("iban",t.target.value),error:r.errors.iban}),e.jsx(i,{label:"SWIFT",placeholder:"SWIFT",mt:"md",value:r.data.swift,onChange:t=>o("swift",t.target.value),error:r.errors.swift})]}),e.jsxs(s,{legend:"Contact",mt:"xl",children:[e.jsxs(l,{grow:!0,children:[e.jsx(i,{label:"Email",placeholder:"Email",value:r.data.email,onChange:t=>o("email",t.target.value),error:r.errors.email}),e.jsx(i,{label:"Phone",placeholder:"Phone",value:r.data.phone,onChange:t=>o("phone",t.target.value),error:r.errors.phone})]}),e.jsx(i,{label:"Web",placeholder:"Web",mt:"md",value:r.data.web,onChange:t=>o("web",t.target.value),error:r.errors.web})]}),e.jsxs(l,{justify:"space-between",mt:"xl",children:[e.jsx(j,{route:"clients.companies.index"}),e.jsx(b,{loading:r.processing,children:"Update"})]})]})})]})};T.layout=a=>e.jsx(y,{title:"Edit company",children:a});export{T as default};