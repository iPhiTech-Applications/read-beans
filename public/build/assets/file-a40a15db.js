const c=e=>["image/jpeg","image/gif","image/png","image/svg","image/webp",".jpeg",".jpg",".gif",".png",".svg",".webp",".bmp"].some(a=>e.type.includes(a)||e.name.includes(a)),w=e=>{const a=[".mp4",".ogg",".webm"],d=[".mp3",".wav",".ogg",".wma"],n=[".pdf"];return[...a,...d,...n].some(t=>e.type.includes(t)||e.name.includes(t))},g=(e,a,d,n)=>{var i=typeof n<"u"?[n,e]:[e],t=new Blob(i,{type:d||"application/octet-stream"});if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(t,a);else{var s=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(t):window.webkitURL.createObjectURL(t),o=document.createElement("a");o.style.display="none",o.href=s,o.setAttribute("download",a),typeof o.download>"u"&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),setTimeout(function(){document.body.removeChild(o),window.URL.revokeObjectURL(s)},200)}};export{w as a,g as d,c as i};