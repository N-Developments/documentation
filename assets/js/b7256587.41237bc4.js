"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"Easy Sit/Installation",id:"Easy Sit/Installation",title:"Installation",description:"Installation",source:"@site/docs/Easy Sit/Installation.md",sourceDirName:"Easy Sit",slug:"/Easy Sit/Installation",permalink:"/documentation/docs/intro/docs/Easy Sit/Installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Easy Sit/Installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Showcase",permalink:"/documentation/docs/intro/docs/Easy Sit/Showcase"},next:{title:"Showcase",permalink:"/documentation/docs/intro/docs/Fingerprints/Showcase"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Command And Notification",id:"command-and-notification",level:2},{value:"Discord Webhook Logs",id:"discord-webhook-logs",level:2},{value:"Social Media",id:"social-media",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("li",null,"Download the resource from your ",(0,r.kt)("a",{href:"https://keymaster.fivem.net"},"Keymaster"),"."),(0,r.kt)("li",null,"Unpack the resource ",(0,r.kt)("b",null,(0,r.kt)("i",null,"n_easysit"))," into your desired resources location."),(0,r.kt)("li",null,"Insert ",(0,r.kt)("b",null,"Ace Permission"),". ",(0,r.kt)("i",null,"Select one, steam or license not both.. depends on your server configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="Steam Identifier"',title:'"Steam','Identifier"':!0},'add_ace identifier.steam:xxxxxxxxxxxxx "n_easysit" allow\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="License Identifier"',title:'"License','Identifier"':!0},'add_ace identifier.license:xxxxxxxxxxxxx "n_easysit" allow\n')),(0,r.kt)("li",null,"Start the resource on your ",(0,r.kt)("i",null,"server.cfg")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="server.cfg"',title:'"server.cfg"'},"ensure n_easysit\n")),(0,r.kt)("h2",{id:"command-and-notification"},"Command And Notification"),(0,r.kt)("li",null," Open the configurable file ",(0,r.kt)("b",null,(0,r.kt)("i",null,"n_easysit/config.lua"))," and follow our instructions bellow."),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,"Command"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("i",null,"The name you have to set for example right is /~nchairs , to enable the Creator")))),(0,r.kt)("li",null,(0,r.kt)("b",null,"Notify(msg, typ)"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"The notification function for our system."),(0,r.kt)("li",null,(0,r.kt)("b",null,"msg"),", the message we pass into the function."),(0,r.kt)("li",null,(0,r.kt)("b",null,"typ"),", the type we pass into the function success, warning, error."),(0,r.kt)("li",null,"By default we use txAdmin notification system ",(0,r.kt)("b",null,(0,r.kt)("i",null,"TriggerEvent('txAdmin:receiveDirectMessage', msg, \"N - Easy Sit\")")),", You can change this event into your desired notification system.")))),(0,r.kt)("h2",{id:"discord-webhook-logs"},"Discord Webhook Logs"),(0,r.kt)("li",null,"Open the configurable file and setup the ",(0,r.kt)("b",null,"Discord Bot Logs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="n_easysit/server/logger.lua"',title:'"n_easysit/server/logger.lua"'},'Discord = {\n    botName = \'My Awesome Bot Name\',\n    name = "My Awesome Bot Name",\n    avatar = "https://cdn.discordapp.com/attachments/XXXXXXXXXXXXX/XXXXXXXXXXXXXX/XXXXXXXXXXXXX.png",\n    hook = "https://discord.com/api/webhooks/XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXX"\n}\n')),(0,r.kt)("h2",{id:"social-media"},"Social Media"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/@n-developments"},(0,r.kt)("img",{parentName:"a",src:"https://cdn.discordapp.com/attachments/1103694279488065709/1108792832149438545/yt.jpg",alt:"Youtube",title:"Youtube"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/mVUgnGjXQU"},(0,r.kt)("img",{parentName:"a",src:"https://cdn.discordapp.com/attachments/1103694279488065709/1108792831486742548/discord.jpg",alt:"Discord",title:"Discord"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://nyambura.tebex.io"},(0,r.kt)("img",{parentName:"a",src:"https://cdn.discordapp.com/attachments/1103694279488065709/1108792831851626546/tebex.jpg",alt:"Tebex Store",title:"Tebex Store"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://forum.cfx.re/u/Nyambura"},(0,r.kt)("img",{parentName:"a",src:"https://cdn.discordapp.com/attachments/1103694279488065709/1108792831126028289/cfx.jpg",alt:"CFX",title:"CFX"}))))}p.isMDXComponent=!0}}]);