import{b as a,z as I,q as k,j as e,B as R,G as x,r as d,d as S}from"./app-7bc20a4e.js";import{h as j,u as C,i as g}from"./useTasksStore-7dac92b7.js";import{c as N}from"./datetime-7dece6f7.js";import{S as v}from"./Stack-ea94f1d8.js";import{A as _}from"./ActionIcon-8588dfb6.js";import{c as w}from"./createReactComponent-0bbe300d.js";import{T as A}from"./TextInput-a85403e2.js";import{I as P}from"./IconPlus-7f567d31.js";import{T as p}from"./Text-160f2c95.js";import{I as V}from"./IconX-293e98d7.js";import{T as E}from"./Tooltip-e7859f7c.js";import{D as F}from"./Divider-004ea17b.js";import"./index-d33ca4cd.js";import"./reorder-22208721.js";import"./_baseClone-594d8115.js";import"./InputBase-7a5da2ab.js";import"./Input-e73c8c99.js";import"./create-optional-context-1a5c9a08.js";import"./DirectionProvider-acb021aa.js";import"./use-floating-auto-update-3aa9c973.js";import"./get-style-object-71cabcb5.js";function M(t,f){const[o,c]=a.useState(!1),s=a.useRef(),n=a.useRef();a.useEffect(()=>{n.current=t},[t]);const m=()=>{c(h=>(!h&&!s.current&&(s.current=window.setInterval(n.current,f)),!0))},u=()=>{c(!1),window.clearInterval(s.current),s.current=void 0};return{start:m,stop:u,toggle:()=>{o?u():m()},active:o}}var $=w("player-play-filled","IconPlayerPlayFilled",[["path",{d:"M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),D=w("player-stop-filled","IconPlayerStopFilled",[["path",{d:"M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]);function B(t){const[f,o]=a.useState(""),c=i=>i.minutes===null&&i.timer_start!==null,[s,n]=a.useState(t.time_logs.find(i=>c(i))),m=()=>{if(s){const i=Math.round((I().unix()-s.timer_start)/60);o(j(i))}},u=M(m,1e3);return a.useEffect(()=>{const i=t.time_logs.find(h=>c(h));return n(i),i?(m(),u.start()):(o(""),u.stop()),u.stop},[t.time_logs,s]),{timerValue:f,setTimerValue:o,isTimerRunning:c,runningTimer:s}}const G="_container_1xolz_1",W="_timer_1xolz_14",q="_input_1xolz_24",O="_invalid_1xolz_33",X="_list_1xolz_38",H="_row_1xolz_50",J="_summary_1xolz_67",K="_blink_1xolz_72",Q="_blinkAnimation_1xolz_1",l={container:G,timer:W,input:q,invalid:O,list:X,row:H,delete:"_delete_1xolz_52",summary:J,blink:K,blinkAnimation:Q};function _e({task:t,...f}){const{auth:{user:o}}=k().props,[c,s]=a.useState(0),{timerValue:n,setTimerValue:m,isTimerRunning:u,runningTimer:i}=B(t),{saveTimeLog:h,deleteTimerLog:T,startTimer:y,stopTimer:z}=C();return a.useEffect(()=>{s(t.time_logs.reduce((r,b)=>r+b.minutes,0)),m("")},[t.time_logs]),e.jsx(R,{className:l.container,...f,children:e.jsxs(v,{children:[can("add time log")?e.jsxs(x,{className:l.timer,justify:"space-between",wrap:"nowrap",children:[i?e.jsx(_,{size:32,radius:"xl",variant:"filled",onClick:()=>z(t,i.id),children:e.jsx(D,{style:{width:d(16),height:d(16)}})}):e.jsx(_,{size:32,radius:"xl",variant:"filled",onClick:()=>y(t),children:e.jsx($,{style:{width:d(16),height:d(16)}})}),e.jsx(x,{wrap:"nowrap",gap:5,children:e.jsx(A,{variant:"unstyled",size:"sm",placeholder:"0:00",readOnly:i!==void 0,className:`
                  ${l.input}
                  ${i?l.blink:null}
                  ${g(n)?null:n.length&&l.invalid}
                `,value:n,onChange:r=>{/^(\d|\.|,|:)*$/.test(r.currentTarget.value)&&m(r.currentTarget.value)}})}),e.jsx(_,{size:32,radius:"xl",variant:"filled",onClick:()=>h(t,n),disabled:!g(n)||i,children:e.jsx(P,{style:{width:d(16),height:d(16)},stroke:3})})]}):e.jsx(p,{ml:10,fz:15,fw:500,children:"Time logs"}),t.time_logs.length>0&&can("view time logs")&&e.jsxs(e.Fragment,{children:[e.jsx(v,{className:l.list,gap:5,children:t.time_logs.map(r=>e.jsxs(x,{wrap:"nowrap",justify:"space-between",className:l.row,children:[e.jsx(p,{fz:14,children:e.jsx(S,{href:route("users.edit",r.user_id),children:r.user.name})}),u(r)?e.jsx(p,{fz:14,fw:600,c:"blue",className:l.blink,children:"running"}):e.jsxs(x,{gap:7,children:[can("delete time log")&&r.user_id===o.id&&e.jsx(V,{className:l.delete,stroke:1.5,onClick:()=>T(t,r.id)}),e.jsx(E,{label:N(r.created_at),openDelay:250,withArrow:!0,children:e.jsxs(p,{fz:14,c:"dimmed",children:[j(r.minutes),"h"]})})]})]},r.id))}),e.jsx(F,{my:-5}),e.jsxs(x,{wrap:"nowrap",justify:"space-between",className:l.summary,children:[e.jsx(p,{fz:15,fw:500,children:"Total:"}),e.jsxs(p,{fw:600,children:[j(c),"h"]})]})]})]})})}export{_e as default};