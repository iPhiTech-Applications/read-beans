import{e as z,n as C,N as F,R as d}from"./app-7bc20a4e.js";import{I as r}from"./Input-e73c8c99.js";function O(e,t,p){const s=z(e,t,p),{label:o,description:w,error:c,required:l,classNames:a,styles:n,className:h,unstyled:i,__staticSelector:u,__stylesApiProps:P,errorProps:A,labelProps:f,descriptionProps:B,wrapperProps:N,id:m,size:y,style:S,inputContainer:W,inputWrapperOrder:b,withAsterisk:v,variant:_,vars:j,mod:x,...E}=s,{styleProps:R,rest:k}=C(E),q={label:o,description:w,error:c,required:l,classNames:a,className:h,__staticSelector:u,__stylesApiProps:P||s,errorProps:A,labelProps:f,descriptionProps:B,unstyled:i,styles:n,size:y,style:S,inputContainer:W,inputWrapperOrder:b,withAsterisk:v,variant:_,id:m,mod:x,...N};return{...k,classNames:a,styles:n,unstyled:i,wrapperProps:{...q,...R},inputProps:{required:l,classNames:a,styles:n,unstyled:i,size:y,__staticSelector:u,__stylesApiProps:P||s,error:c,variant:_,id:m}}}const g={__staticSelector:"InputBase",withAria:!0},I=F((e,t)=>{const{inputProps:p,wrapperProps:s,...o}=O("InputBase",g,e);return d.createElement(r.Wrapper,{...s},d.createElement(r,{...p,...o,ref:t}))});I.classes={...r.classes,...r.Wrapper.classes};I.displayName="@mantine/core/InputBase";export{I,O as u};