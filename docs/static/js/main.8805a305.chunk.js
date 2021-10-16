(this["webpackJsonptime-tracking-dashboard"]=this["webpackJsonptime-tracking-dashboard"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"title":"Work","timeframes":{"daily":{"current":5,"previous":7},"weekly":{"current":32,"previous":36},"monthly":{"current":103,"previous":128}}},{"title":"Play","timeframes":{"daily":{"current":1,"previous":2},"weekly":{"current":10,"previous":8},"monthly":{"current":23,"previous":29}}},{"title":"Study","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":4,"previous":7},"monthly":{"current":13,"previous":19}}},{"title":"Exercise","timeframes":{"daily":{"current":1,"previous":1},"weekly":{"current":4,"previous":5},"monthly":{"current":11,"previous":18}}},{"title":"Social","timeframes":{"daily":{"current":1,"previous":3},"weekly":{"current":5,"previous":10},"monthly":{"current":21,"previous":23}}},{"title":"Self Care","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":2,"previous":2},"monthly":{"current":7,"previous":11}}}]')},11:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var i=r(2),c=r.n(i),s=r(4),l=r.n(s),n=r(5),a=r(0),o=function(e){var t=e.title,r=e.time,i=e.lastWeek,c=e.decoration,s=e.color;return Object(a.jsxs)("div",{className:"card__container",children:[Object(a.jsx)("div",{className:"card__decoration",style:{backgroundColor:s},children:Object(a.jsx)("img",{src:c,alt:"background"})}),Object(a.jsxs)("div",{className:"card__main",children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("svg",{width:"21",height:"5",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z",fill:"#BBC0FF",fillRule:"evenodd"})})}),Object(a.jsxs)("h1",{children:[r,"hrs"]}),Object(a.jsxs)("p",{children:["Last week - ",i,"hrs"]})]})]})},d=r.p+"static/media/image-jeremy.71cd41f1.png",m=function(e){var t=e.onClick,r=e.moment;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"user-card__main",children:[Object(a.jsx)("img",{src:d,alt:"user"}),Object(a.jsx)("h2",{children:"Report for"}),Object(a.jsx)("h1",{children:"Jeremy Robson"})]}),Object(a.jsxs)("div",{className:"user-card__secondary",children:[Object(a.jsx)("p",{style:{color:"daily"===r?"hsl(0, 0%, 93%)":"hsl(236, 100%, 87%)"},onClick:function(){return t("daily")},children:"Daily"}),Object(a.jsx)("p",{style:{color:"weekly"===r?"hsl(0, 0%, 93%)":"hsl(236, 100%, 87%)"},onClick:function(){return t("weekly")},children:"Weekly"}),Object(a.jsx)("p",{style:{color:"monthly"===r?"hsl(0, 0%, 93%)":"hsl(236, 100%, 87%)"},onClick:function(){return t("monthly")},children:"Monthly"})]})]})},u=r.p+"static/media/icon-work.a3f124e5.svg",j=r.p+"static/media/icon-play.e8d4e569.svg",h=r.p+"static/media/icon-study.1f0a65e4.svg",p=r.p+"static/media/icon-exercise.3e7b0282.svg",y=r.p+"static/media/icon-social.64be0c18.svg",v=r.p+"static/media/icon-self-care.a161aff5.svg",b=r(1);var f=function(){var e=Object(i.useState)("weekly"),t=Object(n.a)(e,2),r=t[0],c=t[1],s=function(e,t){return"daily"===t?b[e].timeframes.daily.current:"weekly"===t?b[e].timeframes.weekly.current:b[e].timeframes.monthly.current},l=function(e,t){return"daily"===t?b[e].timeframes.daily.previous:"weekly"===t?b[e].timeframes.weekly.previous:b[e].timeframes.monthly.previous};return Object(a.jsxs)("div",{className:"app__main",children:[Object(a.jsx)("div",{className:"app__user-card-container",children:Object(a.jsx)(m,{onClick:function(e){c(e)},moment:r})}),Object(a.jsxs)("div",{className:"app__card-container",children:[Object(a.jsx)(o,{title:b[0].title,time:s(0,r),lastWeek:l(0,r),decoration:u,color:"hsl(15, 100%, 70%)"}),Object(a.jsx)(o,{title:b[1].title,time:s(1,r),lastWeek:l(1,r),decoration:j,color:"hsl(195, 74%, 62%)"}),Object(a.jsx)(o,{title:b[2].title,time:s(2,r),lastWeek:l(2,r),decoration:h,color:"hsl(348, 100%, 68%)"}),Object(a.jsx)(o,{title:b[3].title,time:s(3,r),lastWeek:l(3,r),decoration:p,color:"hsl(145, 58%, 55%)"}),Object(a.jsx)(o,{title:b[4].title,time:s(4,r),lastWeek:l(4,r),decoration:y,color:"hsl(264, 64%, 52%)"}),Object(a.jsx)(o,{title:b[5].title,time:s(5,r),lastWeek:l(5,r),decoration:v,color:"hsl(43, 84%, 65%)"})]})]})};r(11);l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8805a305.chunk.js.map