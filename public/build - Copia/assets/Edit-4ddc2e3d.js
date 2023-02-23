import{v,f as n,a as s,u as t,w as d,F as b,o as u,X as x,b as o,e as y,i as w,B as V,C as $,n as h,d as N,O as S,t as U}from"./app-bff48df0.js";import{_ as B}from"./AuthenticatedLayout-d1ab20ab.js";import{_ as r,a as p,b as c}from"./TextInput-df88f7f5.js";import{_ as C}from"./PrimaryButton-6f8ee7c2.js";import"./ApplicationLogo-b17e6453.js";import"./_plugin-vue_export-helper-c27b6911.js";const E=o("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Edit Projects ",-1),O={class:"py-12"},D={class:"max-w-md mx-auto sm:px-6 lg:px-8 bg-white"},F=["onSubmit"],I=["value"],L={class:"mt-4"},M={class:"flex items-center justify-end mt-4"},q={__name:"Edit",props:{skills:Array,project:Object},setup(_){var f,g,j;const i=_,e=v({name:(f=i.project)==null?void 0:f.name,image:null,skill_id:(g=i.project)==null?void 0:g.skill_id,project_url:(j=i.project)==null?void 0:j.project_url}),k=()=>{S.post(`/projects/${i.project.id}`,{_method:"put",name:e.name,image:e.image,skill_id:e.skill_id,project_url:e.project_url})};return(m,a)=>(u(),n(b,null,[s(t(x),{title:"New Project"}),s(B,null,{header:d(()=>[E]),default:d(()=>[o("div",O,[o("div",D,[o("form",{class:"p-4",onSubmit:y(k,["prevent"])},[o("div",null,[s(r,{for:"skill_id",value:"Skill"}),w(o("select",{"onUpdate:modelValue":a[0]||(a[0]=l=>t(e).skill_id=l),id:"skill_id",name:"skill_id",class:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"},[(u(!0),n(b,null,$(_.skills,l=>(u(),n("option",{key:l.id,value:l.id},U(l.name),9,I))),128))],512),[[V,t(e).skill_id]])]),o("div",null,[s(r,{for:"name",value:"Name"}),s(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(e).name,"onUpdate:modelValue":a[1]||(a[1]=l=>t(e).name=l),autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(c,{class:"mt-2",message:m.$page.props.errors.name},null,8,["message"])]),o("div",null,[s(r,{for:"project_url",value:"URL"}),s(p,{id:"project_url",type:"text",class:"mt-1 block w-full",modelValue:t(e).project_url,"onUpdate:modelValue":a[2]||(a[2]=l=>t(e).project_url=l),autocomplete:"project_url"},null,8,["modelValue"]),s(c,{class:"mt-2",message:m.$page.props.errors.project_url},null,8,["message"])]),o("div",L,[s(r,{for:"image",value:"Image"}),s(p,{id:"image",type:"file",class:"mt-1 block w-full",onInput:a[3]||(a[3]=l=>t(e).image=l.target.files[0])}),s(c,{class:"mt-2",message:m.$page.props.errors.image},null,8,["message"])]),o("div",M,[s(C,{class:h(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:d(()=>[N(" Update ")]),_:1},8,["class","disabled"])])],40,F)])])]),_:1})],64))}};export{q as default};
