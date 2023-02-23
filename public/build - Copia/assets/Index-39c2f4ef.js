import{_ as x}from"./AuthenticatedLayout-d1ab20ab.js";import{f as r,a as s,u as o,w as a,F as p,o as l,X as _,b as t,l as d,d as c,C as u,t as i}from"./app-bff48df0.js";import"./ApplicationLogo-b17e6453.js";import"./_plugin-vue_export-helper-c27b6911.js";const m=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Projects ",-1),y={class:"py-12"},f={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"flex justify-end m-2 p-2"},b={class:"relative overflow-x-auto"},w={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},k=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"Id"),t("th",{scope:"col",class:"px-6 py-3"},"Name"),t("th",{scope:"col",class:"px-6 py-3"},"Skill"),t("th",{scope:"col",class:"px-6 py-3"},"Image"),t("th",{scope:"col",class:"px-6 py-3"},"Price")])],-1),v={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},N={class:"px-6 py-4"},j={class:"px-6 py-4"},P={class:"px-6 py-4"},B=["src"],I={class:"px-6 py-4"},S={__name:"Index",props:{projects:Object},setup(h){return(n,V)=>(l(),r(p,null,[s(o(_),{title:"Projects"}),s(x,null,{header:a(()=>[m]),default:a(()=>[t("div",y,[t("div",f,[t("div",g,[s(o(d),{href:"/projects/create",class:"px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"},{default:a(()=>[c("New Project")]),_:1})]),t("div",b,[t("table",w,[k,t("tbody",null,[(l(!0),r(p,null,u(h.projects.data,e=>(l(),r("tr",{key:e.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[t("th",v,i(e.id),1),t("td",N,i(e.name),1),t("td",j,i(e.skill.name),1),t("td",P,[t("img",{src:e.image,class:"w-12 h-12 rounded-full"},null,8,B)]),t("td",I,[s(o(d),{href:n.route("projects.edit",e.id),class:"font-medium text-blue-500 hover:text-blue-700 mr-2"},{default:a(()=>[c("Edit")]),_:2},1032,["href"]),s(o(d),{href:n.route("projects.destroy",e.id),method:"delete",as:"button",type:"button",class:"font-medium text-red-500 hover:text-red-700 mr-2"},{default:a(()=>[c("Delete")]),_:2},1032,["href"])])]))),128))])])])])])]),_:1})],64))}};export{S as default};
