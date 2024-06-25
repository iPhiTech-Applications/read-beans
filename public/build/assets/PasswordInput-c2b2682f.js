import{R as t,f as i1,e as a1,m as r1,h as n1,n as l1,F as c1,i as p1,o as E}from"./app-7bc20a4e.js";import{u as d1}from"./use-resolved-styles-api-22476df7.js";import{A as u1}from"./ActionIcon-8588dfb6.js";import{I as M}from"./Input-e73c8c99.js";import{I as C1}from"./InputBase-7a5da2ab.js";import{u as m1}from"./use-uncontrolled-0eb68696.js";const f1=({reveal:i})=>t.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},t.createElement("path",{d:i?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}));var m={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};const v1={visibilityToggleIcon:f1},h1=p1((i,{size:a})=>({root:{"--psi-icon-size":E(a,"psi-icon-size"),"--psi-button-size":E(a,"psi-button-size")}})),V=i1((i,a)=>{const n=a1("PasswordInput",v1,i),{classNames:f,className:x,style:z,styles:v,unstyled:r,vars:R,required:h,error:l,leftSection:w,disabled:c,id:D,variant:y,inputContainer:L,description:N,label:Z,size:I,errorProps:_,descriptionProps:A,labelProps:W,withAsterisk:k,inputWrapperOrder:F,wrapperProps:K,radius:S,rightSection:q,rightSectionWidth:O,rightSectionPointerEvents:U,leftSectionWidth:j,visible:G,defaultVisible:H,onVisibilityChange:J,visibilityToggleIcon:Q,visibilityToggleButtonProps:e,rightSectionProps:T,leftSectionProps:X,leftSectionPointerEvents:Y,mod:$,...B}=n,p=r1(D),[d,e1]=m1({value:G,defaultValue:H,finalValue:!1,onChange:J}),g=()=>e1(!d),u=n1({name:"PasswordInput",classes:m,props:n,className:x,style:z,classNames:f,styles:v,unstyled:r,vars:R,varsResolver:h1}),{resolvedClassNames:C,resolvedStyles:P}=d1({classNames:f,styles:v,props:n}),{styleProps:t1,rest:b}=l1(B),s1=Q,o1=t.createElement(u1,{...u("visibilityToggle"),disabled:c,radius:S,"aria-hidden":!e,tabIndex:-1,...e,variant:"subtle",color:"gray",unstyled:r,onMouseDown:s=>{var o;s.preventDefault(),(o=e==null?void 0:e.onMouseDown)==null||o.call(e,s),g()},onKeyDown:s=>{var o;(o=e==null?void 0:e.onKeyDown)==null||o.call(e,s),s.key===" "&&(s.preventDefault(),g())}},t.createElement(s1,{reveal:d}));return t.createElement(M.Wrapper,{required:h,id:p,label:Z,error:l,description:N,size:I,classNames:C,styles:P,__staticSelector:"PasswordInput",errorProps:_,descriptionProps:A,unstyled:r,withAsterisk:k,inputWrapperOrder:F,inputContainer:L,variant:y,labelProps:{...W,htmlFor:p},mod:$,...u("root"),...t1,...K},t.createElement(M,{component:"div",error:l,leftSection:w,size:I,classNames:{...C,input:c1(m.input,C.input)},styles:P,radius:S,disabled:c,__staticSelector:"PasswordInput",rightSectionWidth:O,rightSection:q??o1,variant:y,unstyled:r,leftSectionWidth:j,rightSectionPointerEvents:U||"all",rightSectionProps:T,leftSectionProps:X,leftSectionPointerEvents:Y,withAria:!1},t.createElement("input",{required:h,"data-invalid":!!l||void 0,"data-with-left-section":!!w||void 0,...u("innerInput"),disabled:c,id:p,ref:a,...b,autoComplete:b.autoComplete||"off",type:d?"text":"password"})))});V.classes={...C1.classes,...m};V.displayName="@mantine/core/PasswordInput";export{V as P};
