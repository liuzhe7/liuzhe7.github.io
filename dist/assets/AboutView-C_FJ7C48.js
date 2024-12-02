import{_ as d,o as i,c as a,a as n,b as l,t as p,F as _,r as u,w as g,d as m}from"./index-tMNgzBSW.js";const h={class:"user-avatar"},k={class:"image-container"},v=["src","alt"],b={class:"name-container"},f={key:0,class:"avatar-name"},w={class:"description-container"},y={key:0,class:"avatar-description"},x={__name:"UserAvatar",props:{src:{type:String,default:""},alt:{type:String,default:""},name:{type:String,default:""},description:{type:String,default:""}},setup(s){const t=s;return(r,c)=>(i(),a("div",h,[n("div",k,[t.src?(i(),a("img",{key:0,src:t.src,alt:t.alt,class:"avatar-img"},null,8,v)):l("",!0)]),n("div",b,[t.name?(i(),a("span",f,p(t.name),1)):l("",!0)]),n("div",w,[t.description?(i(),a("p",y,p(t.description),1)):l("",!0)])]))}},$=d(x,[["__scopeId","data-v-521adbd0"]]),C={class:"card-link"},I=["onClick"],S=["src","alt"],j={__name:"CardLink",props:{cards:{type:Array,required:!0}},setup(s){const t=s,r=e=>{e.link!==""&&(c(e.link)?window.open(`mailto:${e.link}`,"_blank","noopener,noreferrer"):window.open(e.link,"_blank","noopener,noreferrer"))},c=e=>typeof e=="string"&&e.includes("@");return(e,F)=>(i(),a("div",C,[(i(!0),a(_,null,u(t.cards,o=>(i(),a("div",{key:o.id,class:"card"},[n("div",{class:"image-container",onClick:g(J=>r(o),["prevent"])},[n("img",{src:o.img,alt:o.title,class:"card-image"},null,8,S)],8,I)]))),128))]))}},z=d(j,[["__scopeId","data-v-2cbb3d35"]]),A={class:"home-view"},V={class:"avatar-container"},L={class:"card-link-container"},N="Zhe Liu",B="/guap.jpeg",D="I am a software developer, mainly using Golang, Python and JavaScript. I'm a badminton enthusiast and play badminton more than twice a week. I'm a fan of anime, manga and related subcultures, but not a hardcore one.",E={__name:"AboutView",setup(s){const t=[{id:1,img:"/bilibili.png",title:"bilibili",link:"https://space.bilibili.com/319717159/"},{id:2,img:"/github.png",title:"github",link:"https://github.com/liuzhe7"},{id:3,img:"/redbook.png",title:"red book",link:"https://www.xiaohongshu.com/user/profile/5c21f0f7000000000700be21"},{id:4,img:"/instagram.png",title:"instagram",link:"https://www.instagram.com/liuzhe719/profilecard/?igsh=cDNmcmMwZnllcjhw"},{id:5,img:"/gmail.png",title:"gmail",link:"zhixizhixizhixi@gmail.com"},{id:6,img:"/weChat.png",title:"wechat",link:"weixin://contacts/profile/Jeodncjwodkjdirjemcm"}];return(r,c)=>(i(),a("div",A,[n("div",V,[m($,{name:N,src:B,alt:"avatar",description:D})]),n("div",L,[m(z,{cards:t})])]))}},U=d(E,[["__scopeId","data-v-a6c879a9"]]);export{U as default};
