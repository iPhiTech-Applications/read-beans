import{b as n}from"./app-7bc20a4e.js";function f({value:r,defaultValue:o,finalValue:s,onChange:t=()=>{}}){const[c,l]=n.useState(o!==void 0?o:s),u=(e,...d)=>{l(e),t==null||t(e,...d)};return r!==void 0?[r,t,!0]:[c,u,!1]}export{f as u};
