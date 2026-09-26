import{q as a,E as y,y as e,F as b,G as p}from"./index-XXsy5zoc.js";import{c as w,f,d as g,e as i}from"./DashboardLayout-B5U2E0uJ.js";import{L as k}from"./loader-circle-ChN-KVqd.js";import{D as j}from"./download-CCO3HIMp.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=a("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=a("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=a("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);function L({type:o,data:d,title:x,label:h="Export Report"}){const[n,c]=y.useState(!1),l=async s=>{c(!0);try{const t=await b.export(o,s,d,x),m=window.URL.createObjectURL(new Blob([t.data])),r=document.createElement("a");r.href=m;const u=s==="pdf"?"pdf":"xlsx";r.setAttribute("download",`sentinex-${o}-${Date.now()}.${u}`),document.body.appendChild(r),r.click(),r.remove(),p.success(`${s.toUpperCase()} report generated successfully`)}catch(t){console.error("Export failed:",t),p.error(`Failed to generate ${s.toUpperCase()} report`)}finally{c(!1)}};return e.jsxs(w,{children:[e.jsx(f,{asChild:!0,children:e.jsxs("button",{disabled:n,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all disabled:opacity-50",children:[n?e.jsx(k,{className:"w-4 h-4 animate-spin"}):e.jsx(j,{className:"w-4 h-4"}),h,e.jsx(D,{className:"w-3 h-3 opacity-50"})]})}),e.jsxs(g,{align:"end",className:"glass-card border-white/5 bg-background/95 backdrop-blur-xl",children:[e.jsxs(i,{onClick:()=>l("pdf"),className:"flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary",children:[e.jsx(E,{className:"w-4 h-4"}),e.jsx("span",{children:"Download PDF"})]}),e.jsxs(i,{onClick:()=>l("excel"),className:"flex items-center gap-2 cursor-pointer focus:bg-primary/10 focus:text-primary",children:[e.jsx(M,{className:"w-4 h-4"}),e.jsx("span",{children:"Download Excel"})]})]})]})}export{L as E};
