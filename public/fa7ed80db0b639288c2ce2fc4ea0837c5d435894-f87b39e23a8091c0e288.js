(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"41Hj":function(t,e,n){"use strict";n.d(e,"d",(function(){return q})),n.d(e,"a",(function(){return W})),n.d(e,"b",(function(){return J})),n.d(e,"e",(function(){return D}));n("zTd8"),n("HxIe");var o,r,a,i,c,s,l,p=n("wx14"),u=n("zLVn"),g=n("q1tI"),d=n.n(g),f=n("/MKj"),m=n("AeFk"),b=n("MzQr"),h=n("5oic"),y=n("jBtN"),x=n("+8GM"),w=n("z/o8"),v=n("Haw6"),j=n("DvzM"),O=n("kbOB"),k=n("g42v"),N=n("9eSz"),T=n.n(N),P=function(){return"undefined"!=typeof window},C=function(){return o||P()&&(o=window.gsap)&&o.registerPlugin&&o},S=function(t){return"string"==typeof t},z=function(t){return"function"==typeof t},F=function(t,e){var n="x"===e?"Width":"Height",o="scroll"+n,r="client"+n;return t===a||t===i||t===c?Math.max(i[o],c[o])-(a["inner"+n]||i[r]||c[r]):t[o]-t["offset"+n]},X=function(t,e){var n="scroll"+("x"===e?"Left":"Top");return t===a&&(null!=t.pageXOffset?n="page"+e.toUpperCase()+"Offset":t=null!=i[n]?i:c),function(){return t[n]}},Y=function(t,e){if(!(t=s(t)[0])||!t.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=t.getBoundingClientRect(),o=!e||e===a||e===c,r=o?{top:i.clientTop-(a.pageYOffset||i.scrollTop||c.scrollTop||0),left:i.clientLeft-(a.pageXOffset||i.scrollLeft||c.scrollLeft||0)}:e.getBoundingClientRect(),l={x:n.left-r.left,y:n.top-r.top};return!o&&e&&(l.x+=X(e,"x")(),l.y+=X(e,"y")()),l},A=function(t,e,n,o,r){return isNaN(t)||"object"==typeof t?S(t)&&"="===t.charAt(1)?parseFloat(t.substr(2))*("-"===t.charAt(0)?-1:1)+o-r:"max"===t?F(e,n)-r:Math.min(F(e,n),Y(t,e)[n]-r):parseFloat(t)-r},I=function(){o=C(),P()&&o&&document.body&&(a=window,c=document.body,i=document.documentElement,s=o.utils.toArray,o.config({autoKillThreshold:7}),l=o.config(),r=1)},M={version:"3.9.1",name:"scrollTo",rawVars:1,register:function(t){o=t,I()},init:function(t,e,n,i,c){r||I();var s=o.getProperty(t,"scrollSnapType");this.isWin=t===a,this.target=t,this.tween=n,e=function(t,e,n,o){if(z(t)&&(t=t(e,n,o)),"object"!=typeof t)return S(t)&&"max"!==t&&"="!==t.charAt(1)?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var r,a={};for(r in t)a[r]="onAutoKill"!==r&&z(t[r])?t[r](e,n,o):t[r];return a}(e,i,t,c),this.vars=e,this.autoKill=!!e.autoKill,this.getX=X(t,"x"),this.getY=X(t,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),s&&"none"!==s&&(this.snap=1,this.snapInline=t.style.scrollSnapType,t.style.scrollSnapType="none"),null!=e.x?(this.add(this,"x",this.x,A(e.x,t,"x",this.x,e.offsetX||0),i,c),this._props.push("scrollTo_x")):this.skipX=1,null!=e.y?(this.add(this,"y",this.y,A(e.y,t,"y",this.y,e.offsetY||0),i,c),this._props.push("scrollTo_y")):this.skipY=1},render:function(t,e){for(var n,o,r,i,c,s=e._pt,p=e.target,u=e.tween,g=e.autoKill,d=e.xPrev,f=e.yPrev,m=e.isWin,b=e.snap,h=e.snapInline;s;)s.r(t,s.d),s=s._next;n=m||!e.skipX?e.getX():d,r=(o=m||!e.skipY?e.getY():f)-f,i=n-d,c=l.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),g&&(!e.skipX&&(i>c||i<-c)&&n<F(p,"x")&&(e.skipX=1),!e.skipY&&(r>c||r<-c)&&o<F(p,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(u.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(u,e.vars.onAutoKillParams||[]))),m?a.scrollTo(e.skipX?n:e.x,e.skipY?o:e.y):(e.skipY||(p.scrollTop=e.y),e.skipX||(p.scrollLeft=e.x)),!b||1!==t&&0!==t||(o=p.scrollTop,n=p.scrollLeft,h?p.style.scrollSnapType=h:p.style.removeProperty("scroll-snap-type"),p.scrollTop=o+1,p.scrollLeft=n+1,p.scrollTop=o,p.scrollLeft=n),e.xPrev=e.x,e.yPrev=e.y},kill:function(t){var e="scrollTo"===t;(e||"scrollTo_x"===t)&&(this.skipX=1),(e||"scrollTo_y"===t)&&(this.skipY=1)}};M.max=F,M.getOffset=Y,M.buildGetter=X,C()&&o.registerPlugin(M);var q=function(t){var e=t.data,n=t.className,o=Object(u.a)(t,["data","className"]),r=Object(f.c)(),a=Object(g.useRef)(),i=Object(g.useRef)(),c=Object(g.useRef)();Object(g.useEffect)((function(){b.a.WrappedComponent.container=a.current,w.b.registerPlugin(v.a);w.b.timeline({scrollTrigger:{trigger:i.current,start:"top-=25 0",endTrigger:".form-cont",end:"-60px top",pin:!0,pinSpacing:!1,toggleClass:{targets:"body"}}});v.a.create({trigger:".never-settle-cont",start:"top-=180 0",endTrigger:".form-cont",end:"-60px top",toggleClass:{targets:"body",className:"logo-small"}}),w.b.fromTo(".hero-img",{opacity:1,scale:1.5,transformOrigin:"center bottom"},{opacity:1,scale:1,ease:"Power4.out",transformOrigin:"center bottom",scrollTrigger:{scroller:window.scroller,trigger:".hero-img",start:"top-=300px top",scrub:!0}}),v.a.create({trigger:".header-bg",start:"top 0",endTrigger:".form-cont",end:"-60px top",pin:!0,pinSpacing:!1}),v.a.create({trigger:".button-cont",start:"top 0",endTrigger:".form-cont",end:"-60px top",pin:!0,pinSpacing:!1,toggleClass:{targets:"body",className:"button-small"}}),v.a.create({trigger:".form-cont",start:"top bottom",toggleClass:{targets:"body",className:"isform"}})}),[]);return Object(m.c)(d.a.Fragment,null,Object(m.c)("section",Object(p.a)({className:n,ref:a},o,{css:function(){var t=i.current?130/i.current.clientWidth:.2;return Object(m.b)(".feature-cont{display:flex;justify-content:space-between;align-items:top;}.left-cont{z-index:2;width:calc(100vw - 100vh * 0.6);position:relative;min-width:50vw;svg{width:auto;}.logo-cont{margin:25px 0 50px 25px;width:95%;.civica-logo{transition:all 0.7s cubic-bezier(0.71, 0.01, 0.45, 1.01);transform-origin:left top;.logo-small &,.isform &{margin-top:-5px!important;transform:scale(",t,");}}}.never-settle-cont{position:absolute;top:50%;margin-left:25px;transform:translateY(-50%);h2{width:25vw;max-width:375px;margin-bottom:20px;}}.button-cont{position:absolute;bottom:25px;padding-right:25px;width:100%;text-align:right;.label{transition:all 0.7s cubic-bezier(0.71, 0.01, 0.45, 1.01);.button-small &,.isform &{transform:scale(0.6);transform-origin:right center;}}}}.img-area{overflow:hidden;height:100vh;z-index:10;width:calc(100vh * 0.6);max-width:50vw;min-width:35vw;.hero-img{width:100%;height:100%;}}.sentence-grid{padding:180px 40px 180px 40px;position:relative;.quate01{width:12vw;}.sentence-content{width:62vw;margin:160px auto 80px auto;",h.b.Func.getPcSpVwValue("margin-top",50,!0)," ",h.b.Func.getPcSpVwValue("margin-bottom",30,!0)," .unknown{}.header-know-your{}.sentence-p{margin-top:60px;}}.quate02-cont{text-align:right;}.quate02{transform-origin:center center;width:12vw;transform:rotate(180deg);}}.form-cont{background-color:",y.a.keyColor2,";padding-top:150px;.gatsby-image-wrapper{margin:0 auto;width:850px;max-width:80vw;}}.header-bg{position:absolute;z-index:1;background-color:#fff;width:100vw;height:60px;}.button-cont2{margin-top:30px;text-align:center;padding-bottom:5px;button{background:none;border:1px solid #000;cursor:pointer;padding:12px 25px 10px 25px;}}.stripe-img{}","")},"data-categoryname":"Index","data-categoryslug":"index","data-type":"page"}),Object(m.c)("div",{className:"header-bg"}),Object(m.c)("div",{className:"feature-cont"},Object(m.c)("div",{className:"left-cont"},Object(m.c)("div",{className:"logo-cont",ref:i},Object(m.c)("h1",{className:"civica-logo"},Object(m.c)(j.a,null))),Object(m.c)("div",{className:"never-settle-cont"},Object(m.c)("h2",null,Object(m.c)(O.l,null)),Object(m.c)(h.a.P,{styles:{fontPc:{fontSize:24,lineHeight:32,fontFace:"sansserif"}}},"Discover a new kind of community at CIVICA",Object(m.c)("br",null),"Previewing Fall 2022")),Object(m.c)("div",{className:"button-cont",onClick:function(){var t,e;t=window.Scrollbar,e=document.querySelector(".form-cont"),console.log("top ---",e.getBoundingClientRect().top,t.scrollTop),t.scrollTo(0,t.scrollTop+e.getBoundingClientRect().top,600,{callback:function(){return console.log("done!")}})}},Object(m.c)(O.a,null,"Register For",Object(m.c)("br",null),"Preview Opportunity"," "))),Object(m.c)("div",{className:"img-area"},Object(m.c)(T.a,{className:"hero-img",imgClassName:"photo",ref:c,fluid:e.acf.hero_rendering.localFile.childImageSharp.fluid}))),Object(m.c)("div",{className:"sentence-grid"},Object(m.c)(O.d,{className:"quate01"}),Object(m.c)("div",{class:"sentence-content"},Object(m.c)(O.b,{className:"header-know-your"}),Object(m.c)(h.a.P,{className:"unknown",styles:{fontPc:{fontSize:22,lineHeight:22,fontFace:"sansserif"}}},"~Unknown"),Object(m.c)(h.a.P,{className:"sentence-p",styles:{fontPc:{fontSize:28,lineHeight:40,fontFace:"sansserif"}}},"A bold addition to the Downtown Seattle skyline, CIVICA is a 57-story tower of refined, trailblazing design. With exceptional finishes and 360-degree views of sky, mountain and water, the residences beckon pioneering spirits to create home on your own terms. Built around your lifestyle, the elegantly conceived and functional amenity spaces—complete with an indoor pool, multiple relaxation lounges, and a resident fitness center, just to name a few—are made for forging fresh connections, too. Stake your claim to better.")),Object(m.c)("div",{class:"quate02-cont"},Object(m.c)(O.d,{className:"quate02"}))),Object(m.c)("div",{className:"stripe-img"},Object(m.c)(h.a.Image,{src:"stripe.jpg"})),Object(m.c)("div",{id:"form",className:"form-cont"},Object(m.c)(h.a.Image,{src:"form.jpg"}),Object(m.c)("div",{className:"button-cont2"},Object(m.c)("button",{onClick:function(){r(Object(x.d)({element:k.r,props:Object.assign({},o)}))}},Object(m.c)(h.a.P,{styles:{fontPc:{fontSize:32,lineHeight:32,fontFace:"sansserif"}}},"Submit"))))))},K=n("dI71"),B=n("lTJg"),L=n("6+t1"),V=n("nSJE");var H={name:"8t8w7a",styles:"&:last-child{display:none;}"},R={name:"13udsys",styles:"height:100%"},_=(g.PureComponent,n("Mbqs")),W=function(t){function e(e){return t.call(this,e)||this}return Object(K.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.feature,n=(t.body,t.className),o=Object(u.a)(t,["feature","body","className"]);return Object(m.c)("section",Object(p.a)({className:n,css:_.Mixin.containerCss(!0)},o,{"data-categoryname":"About","data-categoryslug":"about","data-type":"page"}),Object(m.c)("section",null,y.b.getFeatureLayoutCard(e)))},e}(g.PureComponent),E=n("kXKH"),J=function(t){function e(e){return t.call(this,e)||this}return Object(K.a)(e,t),e.prototype.render=function(){var t=this.props,e=(t.feature,t.className),n=t.body,o=Object(u.a)(t,["feature","className","body"]);return Object(m.c)("section",Object(p.a)({className:e,ref:this.container,css:_.Mixin.containerCss(!0)},o,{"data-categoryname":"Contact","data-categoryslug":"contact","data-type":"page"}),Object(m.c)("section",null,Object(m.c)(E.BodyElement,{body:n})))},e}(g.PureComponent),D=function(t){function e(e){var n;return(n=t.call(this,e)||this).contCss=function(t){return Object(m.b)("margin:0 auto;",h.b.Func.getPcSpVwValue("margin-top",350,275,!0),";",h.d.Mq.moreTab,"{width:55vw;}",h.d.Mq.lessPab,"{width:88vw;}","")},n}return Object(K.a)(e,t),e.prototype.render=function(){var t=this.props,e=(t.feature,t.className),n=t.body,o=Object(u.a)(t,["feature","className","body"]);return Object(m.c)("section",Object(p.a)({className:e,ref:this.container,css:h.d.Mixin.containerCss(!0)},o,{"data-categoryname":"Policy","data-categoryslug":"policy","data-type":"category"}),Object(m.c)("section",{css:this.contCss},Object(m.c)(h.c.BodyElement,{body:n})))},e}(g.PureComponent)}}]);
//# sourceMappingURL=fa7ed80db0b639288c2ce2fc4ea0837c5d435894-f87b39e23a8091c0e288.js.map