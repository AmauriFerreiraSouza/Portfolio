import{_ as x}from"./AuthenticatedLayout-d1ab20ab.js";import{f as r,a as s,u as o,w as a,F as n,o as l,X as u,b as t,l as d,d as c,C as _,t as p}from"./app-bff48df0.js";import"./ApplicationLogo-b17e6453.js";import"./_plugin-vue_export-helper-c27b6911.js";const m=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Skills",-1),f={class:"py-12"},g={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},y={class:"flex justify-end m-2 p-2"},b={class:"relative overflow-x-auto"},w={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},k=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"Id"),t("th",{scope:"col",class:"px-6 py-3"},"Name"),t("th",{scope:"col",class:"px-6 py-3"},"Image"),t("th",{scope:"col",class:"px-6 py-3"},"Actions")])],-1),v={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},N={class:"px-6 py-4"},S={class:"px-6 py-4"},B=["src"],I={class:"px-6 py-4"},F={__name:"Index",props:{skills:Object},setup(h){return(i,V)=>(l(),r(n,null,[s(o(u),{title:"Skills"}),s(x,null,{header:a(()=>[m]),default:a(()=>[t("div",f,[t("div",g,[t("div",y,[s(o(d),{href:"/skills/create",class:"px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"},{default:a(()=>[c("New Skill")]),_:1})]),t("div",b,[t("table",w,[k,t("tbody",null,[(l(!0),r(n,null,_(h.skills.data,e=>(l(),r("tr",{key:e.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[t("th",v,p(e.id),1),t("td",N,p(e.name),1),t("td",S,[t("img",{src:e.image,class:"w-12 h-12 rounded-full"},null,8,B)]),t("td",I,[s(o(d),{href:i.route("skills.edit",e.id),class:"font-medium text-blue-500 hover:text-blue-700 mr-2"},{default:a(()=>[c("Edit")]),_:2},1032,["href"]),s(o(d),{href:i.route("skills.destroy",e.id),method:"delete",as:"button",type:"button",class:"font-medium text-red-500 hover:text-red-700 mr-2"},{default:a(()=>[c("Delete")]),_:2},1032,["href"])])]))),128))])])])])])]),_:1})],64))}};export{F as default};