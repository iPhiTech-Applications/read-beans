import{j as e,c as t,G as i,a,y as c}from"./app-7bc20a4e.js";import{C as d}from"./Container-1a960f39.js";import{T as l}from"./Title-ae7f3e37.js";import{T as m}from"./Text-160f2c95.js";const h="_root_h26wo_1",_="_inner_h26wo_6",g="_image_h26wo_10",p="_content_h26wo_24",x="_title_h26wo_34",j="_description_h26wo_45",o={root:h,inner:_,image:g,content:p,title:x,description:j};function b({status:n}){const r={503:"Service Unavailable",500:"Server Error",404:"Page Not Found",403:"Forbidden"}[n],s={503:"Sorry, we are doing some maintenance. Please check back soon.",500:"Whoops, something went wrong on our servers.",404:"Sorry, the page you are looking for could not be found.",403:"Sorry, you are forbidden from accessing this page."}[n];return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:r}),e.jsx(d,{className:o.root,children:e.jsxs("div",{className:o.inner,children:[e.jsx("div",{className:o.image,children:n}),e.jsxs("div",{className:o.content,children:[e.jsx(l,{className:o.title,children:r}),e.jsx(m,{c:"dimmed",size:"lg",ta:"center",className:o.description,children:s}),e.jsx(i,{justify:"center",children:e.jsx(a,{size:"md",onClick:()=>c.get(route("dashboard")),children:"Take me back to home page"})})]})]})})]})}export{b as default};
