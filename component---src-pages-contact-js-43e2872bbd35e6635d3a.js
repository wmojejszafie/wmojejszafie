(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"Cuy+":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),o=n("7oih"),r=n("VUD3"),c=n("S7Tf"),l=n("9Hrx"),s=n("wTIg"),u=n("qKvR"),h=Object(s.a)("form",{target:"e1yepzzx0"})("max-width:",(function(e){return e.theme.sizes.maxWidthCentered}),";margin:0 auto;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;input,textarea{font-family:inherit;font-size:inherit;background:",(function(e){return e.theme.colors.tertiary}),";color:",(function(e){return e.theme.colors.text}),";border-radius:2px;padding:1em;&::-webkit-input-placeholder{color:gray;}&::-moz-placeholder{color:gray;}&:-ms-input-placeholder{color:gray;}&:-moz-placeholder{color:gray;}&:required{box-shadow:none;}}&::before{content:'';background:black;height:100%;width:100%;position:fixed;top:0;left:0;z-index:1;transition:0.2s all;opacity:",(function(e){return e.overlay?".8":"0"}),";visibility:",(function(e){return e.overlay?"visible":"hidden"}),";}"),m=Object(s.a)("input",{target:"e1yepzzx1"})("margin:0 0 1em 0;width:100%;@media (min-width:",(function(e){return e.theme.responsive.small}),"){width:49%;}"),d=Object(s.a)("input",{target:"e1yepzzx2"})("margin:0 0 1em 0;width:100%;@media (min-width:",(function(e){return e.theme.responsive.small}),"){width:49%;}"),p=Object(s.a)("textarea",{target:"e1yepzzx3"})({name:"ipqq7p",styles:"width:100%;margin:0 0 1em 0;line-height:1.6;min-height:250px;resize:vertical;"}),g=Object(s.a)("input",{target:"e1yepzzx4"})("background:",(function(e){return e.theme.colors.text})," !important;color:white !important;cursor:pointer;transition:0.2s;&:hover{background:",(function(e){return e.theme.colors.highlight})," !important;}"),b=Object(s.a)("div",{target:"e1yepzzx5"})("background:white;padding:2em;border-radius:2px;position:fixed;min-width:75%;top:50%;left:50%;transform:translate(-50%,-50%);margin:0 auto;z-index:99;display:flex;flex-flow:column;align-items:flex-start;transition:0.2s all;opacity:",(function(e){return e.visible?"1":"0"}),";visibility:",(function(e){return e.visible?"visible":"hidden"}),";@media screen and (min-width:",(function(e){return e.theme.responsive.small}),"){min-width:inherit;max-width:400px;}p{line-height:1.6;margin:0 0 2em 0;}"),f=Object(s.a)("div",{target:"e1yepzzx6"})("background:",(function(e){return e.theme.colors.text}),";font-size:1em;display:inline-block;margin:0 auto;border:none;outline:none;cursor:pointer;color:white;padding:1em;border-radius:2px;text-decoration:none;transition:0.2s;z-index:99;&:focus{outline:none;}&:hover{background:",(function(e){return e.theme.colors.highlight}),";}"),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleInputChange=function(e){var t,i=e.target,a=i.value,o=i.name;n.setState(((t={})[o]=a,t))},n.handleSubmit=function(e){var t;fetch("/?no-cache=1",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":"contact"},n.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then(n.handleSuccess).catch((function(e){return alert(e)})),e.preventDefault()},n.handleSuccess=function(){n.setState({name:"",email:"",message:"",showModal:!0})},n.closeModal=function(){n.setState({showModal:!1})},n.state={name:"",email:"",message:"",showModal:!1},n}return Object(l.a)(t,e),t.prototype.render=function(){return Object(u.c)(h,{name:"contact",onSubmit:this.handleSubmit,"data-netlify":"true","data-netlify-honeypot":"bot",overlay:this.state.showModal,onClick:this.closeModal},Object(u.c)("input",{type:"hidden",name:"form-name",value:"contact"}),Object(u.c)("p",{hidden:!0},Object(u.c)("label",null,"Don’t fill this out:"," ",Object(u.c)("input",{name:"bot",onChange:this.handleInputChange}))),Object(u.c)(m,{name:"name",type:"text",placeholder:"Full Name",value:this.state.name,onChange:this.handleInputChange,required:!0}),Object(u.c)(d,{name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleInputChange,required:!0}),Object(u.c)(p,{name:"message",type:"text",placeholder:"Message",value:this.state.message,onChange:this.handleInputChange,required:!0}),Object(u.c)(g,{name:"submit",type:"submit",value:"Send"}),Object(u.c)(b,{visible:this.state.showModal},Object(u.c)("p",null,"Thank you for reaching out. I will get back to you as soon as possible."),Object(u.c)(f,{onClick:this.closeModal},"Okay")))},t}(a.a.Component),y=n("EYWl");t.default=function(e){e.data;return Object(u.c)(o.a,null,Object(u.c)(y.a,{title:"Contact",description:"Contact description goes here"}),Object(u.c)(r.a,null,Object(u.c)(c.a,null,"Contact"),Object(u.c)(w,null)))}},S7Tf:function(e,t,n){"use strict";var i=n("wTIg"),a=(n("q1tI"),n("qKvR")),o=Object(i.a)("h1",{target:"e1omg7p30"})("font-size:",(function(e){return e.small?"2em":"3em"}),";font-weight:600;text-align:center;margin:0 0 3rem 0;margin:",(function(e){return e.small?"1rem 0 4rem 0":"0 0 3rem 0"}),";line-height:1.2;span{margin:0 0 0 0.25em;}a{transition:all 0.2s;color:",(function(e){return e.theme.colors.text}),";&:hover{color:",(function(e){return e.theme.colors.highlight}),";}}");t.a=function(e){return Object(a.c)(o,{small:e.small},e.children)}}}]);
//# sourceMappingURL=component---src-pages-contact-js-43e2872bbd35e6635d3a.js.map