"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{9305:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(7294),o=a(6588),s=(a(6146),a(6493),a(6367)),i=a(7488),l=a(8650),n=a(5600),c=a(9403);const p=JSON.parse('{"data":[{"name":"Kafka Connect ElasticSearch Source","repository_platform":"github","repository_url":"https://github.com/DarioBalinzo/kafka-connect-elasticsearch-source","site_url":"https://www.confluent.io/hub/dariobalinzo/kafka-connect-elasticsearch-source","type":"tool","license":"Apache-2.0","tags":["kafka","connect","elasticsearch","source"]},{"name":"Pytorch Deep Learning","repository_platform":"github","repository_url":"https://github.com/Atcold/pytorch-Deep-Learning","site_url":"https://atcold.github.io/pytorch-Deep-Learning/","type":"learning","license":"Creative Commons","tags":["python","jupyter notebook","deep learning","pytorch"]},{"name":"Snackjob","repository_platform":"github","repository_url":"https://github.com/Schrodinger-Hat/snackjob","site_url":"https://jobs.schrodinger-hat.it/","type":"tool","license":"MIT","tags":["python","flask","javascript","css"]},{"name":"IO App","repository_platform":"github","repository_url":"https://github.com/pagopa/io-app","site_url":"https://io.italia.it","type":"app","license":"EUPL-1.2","tags":["typescript","app","android","ios"]},{"name":"kamaji","repository_platform":"github","repository_url":"https://github.com/clastix/kamaji","site_url":"https://clastix.io/kamaji","type":"tool","license":"Apache-2.0","tags":["kubernetes","multi-tenant","cluster","kubernetes-cluster","k8s","managed-kubernetes","multi-cluster","kubernetes-multitenancy","kubernetes-in-kubernetes","virtual-cluster"]},{"name":"Italiaremote","repository_platform":"github","repository_url":"https://github.com/italiaremote/awesome-italia-remote","site_url":"https://italiaremote.com/companies","type":"community","license":"Undefined","tags":["awesome","remote work"]},{"name":"Daje","repository_platform":"github","repository_url":"https://github.com/Schrodinger-Hat/daje","site_url":"https://github.com/Schrodinger-Hat/daje","type":"tool","license":"GPL-3.0","tags":["dotfiles","go","linux","ansible","dotfiles-manager"]},{"name":"capsule","repository_platform":"github","repository_url":"https://github.com/clastix/capsule","site_url":"https://clastix.io/capsule","type":"tool","license":"Apache-2.0","tags":["kubernetes","operator","kubernetes-operator","multi-tenancy","namespaces","tenant","kubernetes-namespaces","multi-tenant-operator"]},{"name":"Arduino","repository_platform":"github","repository_url":"https://github.com/arduino/Arduino","site_url":"https://www.arduino.cc/en/software/","type":"tool","license":"GPL-2.0","tags":["css","bootstrap","javascript"]},{"name":"Redis","repository_platform":"github","repository_url":"https://github.com/redis/redis","site_url":"https://redis.io","type":"tool","license":"BSD-3-Clause","tags":["c","database"]},{"name":"Bootstrap Italia","repository_platform":"github","repository_url":"https://github.com/italia/bootstrap-italia","site_url":"https://developers.italia.it","type":"library","license":"BSD-3-Clause","tags":["css","bootstrap","javascript"]},{"name":"ImageGoNord","repository_platform":"github","repository_url":"https://github.com/Schrodinger-Hat/ImageGoNord","site_url":"https://ign.schrodinger-hat.it/","type":"tool","license":"MIT","tags":["python","image-processing","vuejs","javascript","cli"]},{"name":"Yamlinc","repository_platform":"github","repository_url":"https://www.github.com/javanile/yamlinc","site_url":"https://www.javanile.org","type":"tool","license":"MIT","tags":["yaml","openapi"]},{"name":"Pyxis","repository_platform":"github","repository_url":"https://github.com/primait/pyxis","type":"library","license":"Undefined","tags":["design system","elm","typescript"]},{"name":"Nuvolaris","repository_platform":"github","repository_url":"https://github.com/nuvolaris/nuvolaris","type":"faas","license":"Apache-2.0","tags":["go","python","serverless","startup"]},{"name":"Youtube-to-Anchorfm","repository_platform":"github","repository_url":"https://github.com/Schrodinger-Hat/youtube-to-anchorfm","site_url":"https://github.com/Schrodinger-Hat/youtube-to-anchorfm","type":"tool","license":"MIT","tags":["javascript","automation","docker","puppeteer","github-action"]}]}');function m(){const[e,t]=(0,r.useState)(null),[a,o]=(0,r.useState)(null),[m,u]=(0,r.useState)(""),[h,d]=(0,r.useState)(!0);(0,r.useEffect)((()=>{t(y(p)),d(!1),f()}),[]);const y=e=>[...e.data||[]].map((e=>(e.date=new Date(e.date),e))),g=()=>{f()},b=e=>{const t=e.target.value;let r={...a};r.global.value=t,o(r),u(t)},f=()=>{o({global:{value:null,matchMode:s.a6.CONTAINS},name:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.STARTS_WITH}]},type:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.STARTS_WITH}]},license:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.STARTS_WITH}]},tags:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.CONTAINS}]}}),u("")},_=r.createElement("div",{className:"flex justify-content-between"},r.createElement(c.z,{type:"button",icon:"pi pi-filter-slash",label:"Clear",className:"p-button-outlined",onClick:g}),r.createElement("span",{className:"p-input-icon-left"},r.createElement("i",{className:"pi pi-search"}),r.createElement(n.o,{value:m,onChange:b,placeholder:"Keyword Search"})));return r.createElement("div",{className:"datatable-filter-demo"},r.createElement("div",{className:"card"},r.createElement(i.w,{value:e,paginator:!0,showGridlines:!0,className:"p-datatable-customers",rows:20,dataKey:"id",filters:a,filterDisplay:"menu",loading:h,responsiveLayout:"scroll",globalFilterFields:["name","repository_platform"],header:_,emptyMessage:"No projects found."},r.createElement(l.s,{field:"name",header:"Name",body:e=>r.createElement(r.Fragment,null,r.createElement("a",{href:e.site_url},e.name)),filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"20em"}}),r.createElement(l.s,{field:"repository_platform",body:e=>r.createElement(r.Fragment,null,r.createElement("a",{href:e.repository_url},e.repository_platform)),header:"Repository Platform",style:{minWidth:"10em"}}),r.createElement(l.s,{field:"type",header:"Type",filter:!0,filterPlaceholder:"Search by type",style:{minWidth:"10em"}}),r.createElement(l.s,{field:"license",header:"License",filter:!0,filterPlaceholder:"Search by license",style:{minWidth:"20em"}}),r.createElement(l.s,{field:"tags",header:"Tags",filter:!0,filterPlaceholder:"Search by tags",style:{minWidth:"55em"},body:e=>e.tags.join(", ")}))))}var u=a(3291);const h="wrapper_m3th",d="form_input_z9lC",y="subscribe_pLww",g="notice_ltfh";function b(){const[e,t]=(0,u.cI)("xoqbqong");return e.succeeded?r.createElement("p",null,"Thanks for joining!"):r.createElement("div",{className:h},r.createElement("form",{onSubmit:t},r.createElement("div",{className:"form-input"},r.createElement("input",{id:"email",type:"email",name:"email",placeholder:"Email Address",className:d,required:!0}),r.createElement(u.p8,{prefix:"Email",field:"email",errors:e.errors}),r.createElement("button",{type:"submit",disabled:e.submitting,className:y},"Subscribe"),r.createElement("div",{className:g},r.createElement("input",{type:"checkbox",name:"subscribe",value:"newsletter",required:!0}),r.createElement("span",null,"I agree to my email address being stored and uses to recieve monthly newsletter.")))))}function f(){return r.createElement(o.Z,{title:"Home",wrapperClassName:"layout",description:"Italia Opensource is a list of open source projects created by Italian companies or developers. The repository intends to give visibility to open source projects and stimulate the community to contribute to growing the ecosystem."},r.createElement("main",{className:"main"},r.createElement("section",{className:"wrapper"},r.createElement("div",{className:"content"},r.createElement("header",null,r.createElement("h1",null,"Italia Opensource")),r.createElement("section",null,r.createElement("p",null,"Italia Opensource is a list of open source projects created by Italian companies or developers.",r.createElement("br",null),"The repository intends to give visibility to open source projects and stimulate the community to contribute to growing the ecosystem."),r.createElement(m,null)))),r.createElement("section",{className:"wrapper"},r.createElement("div",{className:"content"},r.createElement("header",null,r.createElement("h1",null,"Subscribe Us")),r.createElement("section",null,r.createElement("p",null,"The newsletter will be dedicated to keeping you updated on new open source projects in the Italian community and events around the country.")),r.createElement("footer",null,r.createElement(b,null))))))}}}]);