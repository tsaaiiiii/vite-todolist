import{e as w,r,_ as x,f as y,g as C,o as d,c as g,a as s,w as q,v as $,F as R,h as B,i as F,t as I,j as A}from"./index-97567366.js";import{r as p}from"./request-0c074812.js";const P=n=>p.get("/todos",n),S=(n,o)=>p.post("/todos",n,o),V=(n,o)=>p.delete(`/todos/${n}`,o),j=(n,o)=>p.patch(`/todos/${n}/toggle`,{},o),D=w("counter",()=>{const n=r({headers:{Authorization:localStorage.getItem("userToken"),accept:"application/json"}}),o=r([]);return{getRequest:async()=>{try{const l=await P(n.value);o.value=l.data.todos}catch(l){console.error(l)}},data:o}});const z={class:"todoList"},L={class:"newThing"},M={class:"allBtn"},U={class:"list"},E=["onClick","checked"],G=["onClick"],N={__name:"TodoItem",setup(n){const o=D(),c=r({headers:{Authorization:localStorage.getItem("userToken"),accept:"application/json"}}),l=y(()=>o.data),u=r({todo:{content:""}}),_=r(""),v=t=>{_.value=t},i=()=>{o.getRequest()},h=y(()=>_.value==="Finished"?l.value.filter(t=>t.completed_at!==null):_.value==="Pending"?l.value.filter(t=>t.completed_at===null):l.value);C(i);const f=()=>{k(),u.value.todo.content=""},k=async()=>{try{const t=await S(u.value,c.value);console.log(t),i()}catch(t){console.log(t)}},m=async t=>{try{const e=await V(t,c.value);console.log(e),i()}catch(e){console.log(e)}},T=async t=>{try{const e=await j(t,c.value);console.log(e),i()}catch(e){console.log(e)}};return(t,e)=>(d(),g("div",z,[s("div",L,[q(s("input",{type:"text",class:"todoAdd",placeholder:"What are you doing today？","onUpdate:modelValue":e[0]||(e[0]=a=>u.value.todo.content=a)},null,512),[[$,u.value.todo.content]]),s("input",{type:"button",class:"btn",value:"sent",onClick:f})]),s("div",M,[s("input",{type:"button",class:"all",value:"All",onClick:e[1]||(e[1]=a=>v("All"))}),s("input",{type:"button",class:"finished",value:"Finished",onClick:e[2]||(e[2]=a=>v("Finished"))}),s("input",{type:"button",class:"pending",value:"Pending",onClick:e[3]||(e[3]=a=>v("Pending"))})]),s("ul",U,[(d(!0),g(R,null,B(F(h),a=>(d(),g("li",{key:a.id},[s("p",null,I(a.content),1),s("input",{type:"checkbox",class:"check",value:"✔",onClick:b=>T(a.id),checked:a.completed_at},null,8,E),s("input",{type:"button",class:"delete",value:"✘",onClick:b=>m(a.id)},null,8,G)]))),128))])]))}},W=x(N,[["__scopeId","data-v-065b7ff4"]]);const K={__name:"TodoView",setup(n){return(o,c)=>(d(),A(W))}};export{K as default};
