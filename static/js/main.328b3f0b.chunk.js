(this["webpackJsonpmedisure-frontend"]=this["webpackJsonpmedisure-frontend"]||[]).push([[0],{115:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},130:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(11),i=c.n(n),r=(c(80),c(81),c(82),c(68)),l=c.n(r),o=c(66),d=c.n(o),j=c(67),h=c.n(j),m=c(1),b=(new Date).getFullYear();var u=function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsxs)("div",{className:"row",style:{width:"100%"},children:[Object(m.jsx)("div",{className:"col-4 footer_button_div",children:Object(m.jsx)("button",{className:"footer_buttons",children:"Bank Details"})}),Object(m.jsxs)("div",{className:"col-4 footer_links",children:[Object(m.jsx)("a",{href:"https://wa.me/+919827230041",children:Object(m.jsx)(d.a,{className:"whatsapp_icon",style:{fontSize:"70px"}})}),Object(m.jsx)("a",{href:"tel:9424874278",style:{color:"black"},children:Object(m.jsx)(h.a,{style:{fontSize:"70px"},className:"whatsapp_icon"})}),Object(m.jsx)("a",{style:{color:"black"},href:"mailto:medisureincinerators@gmail.com?Subject=Hello%20Medisure Incinerators",children:Object(m.jsx)(l.a,{style:{fontSize:"70px"},className:"whatsapp_icon"})})]}),Object(m.jsx)("div",{className:"col-4  footer_button_div",children:Object(m.jsx)("button",{className:"footer_buttons",children:"Reach Us"})})]}),Object(m.jsx)("center",{children:Object(m.jsxs)("div",{className:"footer_copyright",children:["Copyright \xa0",Object(m.jsx)("span",{style:{marginTop:"5px"},className:"far fa-copyright"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"#",children:Object(m.jsx)("strong",{children:"\xa0medisureincinerators.in"})})}),Object(m.jsxs)("span",{children:[" \xa0",b," All rights reserved."]})]})})]})},x=(c(88),c(22)),O=c.p+"static/media/bm.1a488d55.png";var f=function(){return Object(m.jsx)("div",{className:"header",id:"headerid",children:Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsxs)(x.Link,{className:"navbar-brand",style:{cursor:"pointer"},to:"homeid",children:[Object(m.jsx)("img",{className:"medisurelogo",src:O,alt:""}),Object(m.jsx)("span",{className:"medisure-brand",children:"Medisure Incinerators"})]}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(m.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(x.Link,{className:"nav-link active",activeClassName:"menu_active","aria-current":"page",to:"homeid",children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(x.Link,{className:"nav-link",offset:-70,activeClassName:"menu_active",to:"aboutid",children:"About"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(x.Link,{className:"nav-link",offset:-70,activeClassName:"menu_active",to:"serviceid",children:"Services"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(x.Link,{className:"nav-link",offset:-70,activeClassName:"menu_active",to:"documentid",children:"Documents"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(x.Link,{className:"nav-link",offset:-70,activeClassName:"menu_active",to:"contactid",children:"Contact"})})]})})]})})})},p=c(29),v=(c(96),c(49)),g=c.n(v),N=c(158),y=c(160),w=c(161),_=c(69),k=c.n(_),C=Object(N.a)((function(e){return{}}));var S=function(){C();var e=a.a.useState(!1),t=Object(p.a)(e,2),c=t[0],n=t[1],i=function(e,t){"clickaway"!==t&&n(!1)},r=Object(s.useState)(""),l=Object(p.a)(r,2),o=l[0],d=l[1],j=Object(s.useState)(""),h=Object(p.a)(j,2),b=h[0],u=h[1],x=Object(s.useState)(""),O=Object(p.a)(x,2),f=O[0],v=O[1],N=Object(s.useState)(""),_=Object(p.a)(N,2),S=_[0],M=_[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsxs)("div",{class:"jumbotron",children:[Object(m.jsx)("h1",{children:"Contact Us "})," "]}),Object(m.jsxs)("form",{className:"my-form",onSubmit:function(e){e.preventDefault(),alert("working");var t={name:o,email:b,phone:f,message:S};console.log(t),g.a.post("http://localhost:1337/form",t).then((function(e){n(!0),d(""),u(""),v(""),M(""),setTimeout((function(){}),3e3)})).catch((function(){alert("check your internet connection!")})),g.a.post("http://localhost:1337/formdatabase",t).then((function(e){})).catch((function(){alert("check your internet connection!")}))},children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("i",{class:"fa fa-user icon",children:"  "}),"   \xa0\xa0",Object(m.jsx)("label",{for:"form-name",children:"Name"}),Object(m.jsx)("input",{name:"name",value:o,onChange:function(e){return d(e.target.value)},type:"name",className:"form-control",id:"form-name",placeholder:"Name",required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("i",{class:"fa fa-envelope icon ",children:"  "})," \xa0\xa0",Object(m.jsx)("label",{for:"form-email",children:"Email"}),Object(m.jsx)("input",{name:"email",value:b,onChange:function(e){return u(e.target.value)},type:"email",className:"form-control",id:"form-email",placeholder:"Email Address",required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("i",{class:"fas fa-phone"}),"\xa0\xa0",Object(m.jsx)("label",{for:"form-subject",children:"Contact Number"}),Object(m.jsx)("input",{name:"phone",value:f,onChange:function(e){return v(e.target.value)},type:"text",className:"form-control",id:"form-subject",placeholder:"Enter Your Contact No.",required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{for:"form-message",children:"Email your Message"}),Object(m.jsx)("textarea",{name:"message",value:S,onChange:function(e){return M(e.target.value)},className:"form-control",id:"form-message",placeholder:"Enter Your Message"})]}),Object(m.jsxs)("button",{className:"btn btn-dark",type:"submit",children:["Send ",Object(m.jsx)("strong",{children:Object(m.jsx)("i",{class:"fas fa-greater-than"})})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})]}),Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("div",{class:"jumbotron",children:Object(m.jsx)("h1",{children:"Our Office"})}),Object(m.jsxs)("div",{class:"panel panel-default",children:[Object(m.jsx)("div",{class:"text-center header",children:"Our Office"}),Object(m.jsxs)("div",{class:"panel-body text-center",children:[Object(m.jsx)("h2",{children:Object(m.jsxs)("i",{class:"far fa-map",children:["  ",Object(m.jsx)("strong",{children:"    Address "}),"   "]})}),Object(m.jsx)("h6",{children:"156/3/2 Bilankheda "}),Object(m.jsx)("h6",{children:"Khandwa"}),Object(m.jsx)("hr",{style:{backgroundColor:"#808080"}}),Object(m.jsx)("h2",{children:Object(m.jsxs)("i",{class:"fas fa-phone-alt",children:["  ",Object(m.jsx)("strong",{children:"    Phone "}),"   "]})}),Object(m.jsx)("h6",{children:Object(m.jsx)("a",{href:"tel:9424874278",style:{color:"black"},children:"+91 9424874278"})}),Object(m.jsx)("h6",{children:Object(m.jsx)("a",{href:"tel:9424524041",style:{color:"black"},children:"+91 9424524041"})}),Object(m.jsx)("hr",{style:{backgroundColor:"#808080"}}),Object(m.jsx)("h2",{children:Object(m.jsxs)("i",{class:"fa fa-envelope icon",children:["  ",Object(m.jsx)("strong",{children:"   Email"}),"   "]})}),Object(m.jsx)("h6",{children:Object(m.jsx)("a",{style:{color:"black"},href:"mailto:medisureincinerators@gmail.com?Subject=Hello%20Medisure Incinerators",children:"medisureincinerators@gmail.com"})}),Object(m.jsx)("hr",{style:{backgroundColor:"#808080"}})]})]})]}),Object(m.jsx)("div",{className:"col-lg-12",children:Object(m.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.864499162353!2d76.14417691494629!3d21.824165685572897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x829598b51b8cbb02!2sMedisure%20Incinerators!5e0!3m2!1sen!2sin!4v1615662709327!5m2!1sen!2sin",style:{width:"100%",height:"350px",allowfullscreen:"",loading:"lazy"}})})]}),Object(m.jsx)(y.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:c,autoHideDuration:6e3,onClose:i,message:"Mail Sent!!",action:Object(m.jsx)(a.a.Fragment,{children:Object(m.jsx)(w.a,{size:"small","aria-label":"close",color:"inherit",onClick:i,children:Object(m.jsx)(k.a,{fontSize:"small"})})})})]})},M=(c(115),c.p+"static/media/homeimgwhite.28275972.jpg"),I=(c(116),c(119),c(120),c.p+"static/media/truck1.e0567e9c.png"),z=c.p+"static/media/expired1.a95842eb.png",E=c.p+"static/media/hl1.22bd9443.png",W=c.p+"static/media/wastecontainer.87efd174.png",A=c.p+"static/media/container.7e962458.png",B=c.p+"static/media/sharps.65bd1428.png",T=c(159);c(121);function D(e){var t=e.cardwcu,c=e.title,s=e.content;return Object(m.jsx)(T.a,{className:"root",children:Object(m.jsxs)("div",{className:"root_container",children:[Object(m.jsx)("img",{className:"root_logo",src:t,alt:""}),Object(m.jsx)("div",{className:"root_title",children:c}),Object(m.jsx)("div",{className:"root_content",children:s})]})})}c(122);c(123);var L=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"col-lg-12 ",id:"about_div"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-lg-5 mb-3",children:Object(m.jsx)("div",{className:"about_image",children:Object(m.jsx)("img",{className:"image2",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeRBQg_da6PT_nK5NWGON9IsJaVoWffxAEA&usqp=CAU"})})}),Object(m.jsx)("div",{className:"col-lg-7 mb-4",children:Object(m.jsxs)("div",{className:"card text",children:[Object(m.jsx)("p",{className:"card-text",children:"Scientific disposal of Biomedical Waste through segregation, collection and treatment in an environmentally sound manner is our mission so as to minimise the adverse impact on health workers and on the environment. Our company has taken an initiative to aid in providing biomedical waste management services to health care facilities of Khandwa, Khargone, and Burhanpur districts."}),Object(m.jsx)("button",{className:"about_readmore",children:"Read More"})]})})]})})]})},F=c.p+"static/media/bmw_rules.0ca50564.pdf",P=(c.p,c.p+"static/media/covid19guidelines.9ada9119.pdf"),H=(c.p,c.p+"static/media/ci.3d184b75.jpg"),R=c.p+"static/media/mih.a6d7af65.jpg",q=c.p+"static/media/sr.f3c1e39b.png",K=(c(124),c(70)),U=c.n(K),G=c(71),J=c.n(G),Y=c.p+"static/media/homeslider1.d147fe0b.jpg",V=c.p+"static/media/homeslider2.8a2c440f.jpg";var Q=function(){var e=0,t=Object(s.useRef)([]),c=function(){for(var e=0;e<t.current.children.length;e++)console.log(e),t.current.children[e].style.zIndex=0,t.current.children[e].style.opacity=0},a=function(s){c(),"auto"===s?(e=e<t.current.children.length-1?e+1:t.current.children.length-1,console.log("next ",e),t.current.children[e].style.zIndex=1,t.current.children[e].style.opacity=1):setTimeout((function(){e=e<t.current.children.length-1?e+1:t.current.children.length-1,console.log("next ",e),t.current.children[e].style.zIndex=1,t.current.children[e].style.opacity=1}),2e3)},n=0;function i(){n=setInterval((function(){c(),e===t.current.children.length-1&&(e=-1),a()}),15e3)}return Object(s.useEffect)((function(){return i(),function(){clearInterval(n)}}),[]),Object(m.jsx)("div",{className:"container1",children:Object(m.jsxs)("div",{className:"carousel",onMouseOver:function(){clearInterval(n)},onMouseOut:function(){i()},children:[Object(m.jsxs)("div",{ref:t,className:"slider",children:[Object(m.jsxs)("section",{className:"slider_section1",children:[Object(m.jsx)("img",{width:"100%",className:"slider_section1_img",height:"100%",src:Y}),Object(m.jsxs)("div",{className:"slider_img_content",children:['..There is no such thing as "away"',Object(m.jsx)("br",{}),"When we throw anything away it must go somewhere.."]})]}),Object(m.jsx)("section",{className:"slider_section2",children:Object(m.jsx)("img",{width:"100%",height:"100%",src:V})})]}),Object(m.jsxs)("div",{className:"controls",children:[Object(m.jsx)(U.a,{style:{color:"white"},onClick:a,className:"next"}),Object(m.jsx)(J.a,{style:{color:"white"},onClick:function(){c(),e=0===e?0:e-1,console.log("back ",e),t.current.children[e].style.zIndex=1,t.current.children[e].style.opacity=1},className:"back"})]})]})})};var X=function(){return Object(m.jsxs)("div",{className:"home",id:"homeid",children:[Object(m.jsxs)("div",{className:"home_image",children:[Object(m.jsx)(Q,{}),Object(m.jsx)("img",{className:"homeimg",style:{zIndex:"-2"},src:M,alt:""})]}),Object(m.jsxs)("div",{className:"home_values",children:[Object(m.jsxs)("div",{className:"page_title",children:["Values",Object(m.jsx)("hr",{className:"titlehr"})]}),Object(m.jsxs)("div",{className:"home_values_content",children:[Object(m.jsx)(D,{cardwcu:R,title:"Entrepreneurial Spirit",content:"Proper Disposal of Waste without any adverse effect on Human health and environment."}),Object(m.jsx)(D,{cardwcu:H,title:"Continual Improvement",content:"We support, trust and value our Members and empower each other to make decisions."}),Object(m.jsx)(D,{cardwcu:q,title:"Social responsibility",content:"To protect the health of all people and environment, we must address the effects of Bio-Medical Waste. The movement to eliminate dangerous waste must move forward in partnership with prescribed authorities."})]})]}),Object(m.jsxs)("div",{className:"about",id:"aboutid",children:[Object(m.jsxs)("div",{className:"page_title",children:["About Us",Object(m.jsx)("hr",{className:"titlehr"})]}),Object(m.jsx)("div",{className:"about_content",children:Object(m.jsx)(L,{})})]}),Object(m.jsxs)("div",{className:"services",id:"serviceid",children:[Object(m.jsxs)("div",{className:"page_title",children:["Our Services",Object(m.jsx)("hr",{className:"titlehr"})]}),Object(m.jsxs)("div",{className:"services_content",children:[Object(m.jsx)(D,{cardwcu:W,title:"Biomedical Waste Service",content:"The bio-medical wastes generated from health care units depend upon a number of factors such as waste management methods, type of health care units, occupancy of healthcare units, specialization of healthcare units..."}),Object(m.jsx)(D,{cardwcu:B,title:"Sharps Waste Service",content:"Sharps waste is a form of medical waste composed of used sharps, which includes any device or object used to puncture or lacerate the skin. Sharps waste is classified as biohazardous waste and must be carefully handled."}),Object(m.jsx)(D,{cardwcu:A,title:"Pharmaceutical Waste Service",content:"Our Medicare services are designed to help hospitals characterize, segregate, transport and properly dispose of these materials, as well as conveniently handle their expired drugs."}),Object(m.jsx)(D,{cardwcu:z,title:"Disposal Of Expired Medicine",content:""}),Object(m.jsx)(D,{cardwcu:I,title:"Medical Waste Pickup",content:""}),Object(m.jsx)(D,{cardwcu:E,title:"Maintaining Healthy Lifestyle",content:""})]})]}),Object(m.jsxs)("div",{className:"documents",id:"documentid",children:[Object(m.jsxs)("div",{className:"page_title",children:["Documents",Object(m.jsx)("hr",{className:"titlehr"})]}),Object(m.jsxs)("div",{className:"documents_content",children:[Object(m.jsx)("div",{className:"documents_content_pdf",children:Object(m.jsx)("a",{href:F,target:"_blank",children:'"BMW Rules"'})}),Object(m.jsx)("div",{className:"documents_content_pdf",children:Object(m.jsx)("a",{href:F,target:"_blank",children:'"Environment Bulletin"'})}),Object(m.jsx)("div",{className:"documents_content_pdf",children:Object(m.jsx)("a",{href:P,target:"_blank",children:'"Covid-19 Guidelines"'})})]})]}),Object(m.jsx)("div",{className:"contact",id:"contactid",children:Object(m.jsx)(S,{})})]})},Z=(c(125),c(126),c(5));var $=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(f,{}),Object(m.jsxs)(Z.d,{children:[Object(m.jsx)(Z.b,{exact:!0,path:"/",component:X}),Object(m.jsx)(Z.a,{to:"/"})]}),Object(m.jsx)(u,{})]})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,163)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))},te=(c(128),c(41));i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(te.a,{children:Object(m.jsx)($,{})})}),document.getElementById("root")),ee()},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},88:function(e,t,c){},96:function(e,t,c){}},[[130,1,2]]]);
//# sourceMappingURL=main.328b3f0b.chunk.js.map