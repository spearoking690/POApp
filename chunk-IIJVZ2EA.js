import{a as se}from"./chunk-JE3FXFC3.js";import{f as Oe,g as Le}from"./chunk-56JUEHCE.js";import{a as re}from"./chunk-HC6MZPB3.js";import{c as G,e as Te,f as ne,i as Me,j as ie,k as Pe}from"./chunk-M2HK37HO.js";import"./chunk-HU6UQ5WL.js";import{g as xe,h as Se,j as ve,k as Ae,l as oe,o as De,p as $,q as Ce,s as Ee,t as Z}from"./chunk-RACYT2UM.js";import{a as m}from"./chunk-FERD25SW.js";import{a as be}from"./chunk-BH3GBUQZ.js";import{a as ye,b as ke,c as we}from"./chunk-6QSKDU45.js";import{c as Be}from"./chunk-EQKTRDAQ.js";import{a as ge}from"./chunk-WMEG6PAA.js";import{a as U}from"./chunk-CVTP67B6.js";import{c as me,d as ue,h as _,i as H,m as W}from"./chunk-XDLFVO2Q.js";import{a as te}from"./chunk-5OMUW5VI.js";import"./chunk-OBXDPQ3V.js";import"./chunk-3VH6S6PX.js";import{a as N}from"./chunk-MCRJI3T3.js";import{a as de,c as K}from"./chunk-PAWARGFM.js";import{b as Ye,d as ae,f as q,g as Ie,i as Re,j as R}from"./chunk-MBM5QKYF.js";import{i as I}from"./chunk-OYAVQN5W.js";var z=function(e){return e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",e}(z||{}),he={getEngine(){let e=ge();if(e!=null&&e.isPluginAvailable("StatusBar"))return e.Plugins.StatusBar},setStyle(e){let t=this.getEngine();t&&t.setStyle(e)},getStyle:function(){return I(this,null,function*(){let e=this.getEngine();if(!e)return z.Default;let{style:t}=yield e.getInfo();return t})}},le=(e,t)=>{if(t===1)return 0;let o=1/(1-t),i=-(t*o);return e*o+i},Ne=()=>{!N||N.innerWidth>=768||he.setStyle({style:z.Dark})},ce=(e=z.Default)=>{!N||N.innerWidth>=768||he.setStyle({style:e})},He=(e,t)=>I(void 0,null,function*(){typeof e.canDismiss!="function"||!(yield e.canDismiss(void 0,$))||(t.isRunning()?t.onFinish(()=>{e.dismiss(void 0,"handler")},{oneTimeCallback:!0}):e.dismiss(void 0,"handler"))}),pe=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,J={MIN_PRESENTING_SCALE:.915},ze=(e,t,o,i)=>{let n=e.offsetHeight,a=!1,s=!1,d=null,l=null,p=.2,f=!0,g=0,u=()=>d&&G(d)?d.scrollY:!0,C=te({el:e,gestureName:"modalSwipeToClose",gesturePriority:Ce,direction:"y",threshold:10,canStart:E=>{let S=E.event.target;return S===null||!S.closest?!0:(d=ne(S),d?(G(d)?l=_(d).querySelector(".inner-scroll"):l=d,!!!d.querySelector("ion-refresher")&&l.scrollTop===0):S.closest("ion-footer")===null)},onStart:E=>{let{deltaY:S}=E;f=u(),s=e.canDismiss!==void 0&&e.canDismiss!==!0,S>0&&d&&ie(d),t.progressStart(!0,a?1:0)},onMove:E=>{let{deltaY:S}=E;S>0&&d&&ie(d);let P=E.deltaY/n,w=P>=0&&s,v=w?p:.9999,B=w?pe(P/v):P,T=W(1e-4,B,v);t.progressStep(T),T>=.5&&g<.5?ce(o):T<.5&&g>=.5&&Ne(),g=T},onEnd:E=>{let S=E.velocityY,P=E.deltaY/n,w=P>=0&&s,v=w?p:.9999,B=w?pe(P/v):P,T=W(1e-4,B,v),j=(E.deltaY+S*1e3)/n,O=!w&&j>=.5,F=O?-.001:.001;O?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),F+=re([0,0],[.32,.72],[0,1],[1,1],T)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),F+=re([0,0],[1,0],[.68,.28],[1,1],T)[0]);let Q=_e(O?P*n:(1-T)*n,S);a=O,C.enable(!1),d&&Pe(d,f),t.onFinish(()=>{O||C.enable(!0)}).progressEnd(O?1:0,F,Q),w&&T>v/4?He(e,t):O&&i()}});return C},_e=(e,t)=>W(400,e/Math.abs(t*1.1),500),We=e=>{let{currentBreakpoint:t,backdropBreakpoint:o,expandToScroll:i}=e,r=o===void 0||o<t,n=r?`calc(var(--backdrop-opacity) * ${t})`:"0",a=m("backdropAnimation").fromTo("opacity",0,n);r&&a.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);let s=m("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-t*100}%)`}]),d=i?void 0:m("contentAnimation").keyframes([{offset:0,opacity:1,maxHeight:`${(1-t)*100}%`},{offset:1,opacity:1,maxHeight:`${t*100}%`}]);return{wrapperAnimation:s,backdropAnimation:a,contentAnimation:d}},$e=e=>{let{currentBreakpoint:t,backdropBreakpoint:o}=e,i=`calc(var(--backdrop-opacity) * ${le(t,o)})`,r=[{offset:0,opacity:i},{offset:1,opacity:0}],n=[{offset:0,opacity:i},{offset:o,opacity:0},{offset:1,opacity:0}],a=m("backdropAnimation").keyframes(o!==0?n:r);return{wrapperAnimation:m("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-t*100}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},je=()=>{let e=m().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t=m().fromTo("transform","translateY(100vh)","translateY(0vh)");return{backdropAnimation:e,wrapperAnimation:t,contentAnimation:void 0}},qe=(e,t)=>{let{presentingEl:o,currentBreakpoint:i,expandToScroll:r}=t,n=_(e),{wrapperAnimation:a,backdropAnimation:s,contentAnimation:d}=i!==void 0?We(t):je();s.addElement(n.querySelector("ion-backdrop")),a.addElement(n.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}),!r&&(d==null||d.addElement(e.querySelector(".ion-page")));let l=m("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation([a]).beforeAddWrite(()=>{if(r)return;let p=e.querySelector("ion-footer"),f=e.shadowRoot.querySelector("ion-footer");if(p&&!f){let g=p.clientHeight,u=p.cloneNode(!0);e.shadowRoot.appendChild(u),p.style.setProperty("display","none"),p.setAttribute("aria-hidden","true"),e.querySelector(".ion-page").style.setProperty("padding-bottom",`${g}px`)}});if(d&&l.addAnimation(d),o){let p=window.innerWidth<768,f=o.tagName==="ION-MODAL"&&o.presentingElement!==void 0,g=_(o),u=m().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),k=document.body;if(p){let M=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",c=f?"-10px":M,x=J.MIN_PRESENTING_SCALE,C=`translateY(${c}) scale(${x})`;u.afterStyles({transform:C}).beforeAddWrite(()=>k.style.setProperty("background-color","black")).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:C,borderRadius:"10px 10px 0 0"}]),l.addAnimation(u)}else if(l.addAnimation(s),!f)a.fromTo("opacity","0","1");else{let c=`translateY(-10px) scale(${f?J.MIN_PRESENTING_SCALE:1})`;u.afterStyles({transform:c}).addElement(g.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:c}]);let x=m().afterStyles({transform:c}).addElement(g.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:c}]);l.addAnimation([u,x])}}else l.addAnimation(s);return l},Ve=()=>{let e=m().fromTo("opacity","var(--backdrop-opacity)",0),t=m().fromTo("transform","translateY(0vh)","translateY(100vh)");return{backdropAnimation:e,wrapperAnimation:t}},Fe=(e,t,o=500)=>{let{presentingEl:i,currentBreakpoint:r,expandToScroll:n}=t,a=_(e),{wrapperAnimation:s,backdropAnimation:d}=r!==void 0?$e(t):Ve();d.addElement(a.querySelector("ion-backdrop")),s.addElement(a.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});let l=m("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(s).beforeAddWrite(()=>{if(n)return;let p=e.querySelector("ion-footer");if(p){let f=e.shadowRoot.querySelector("ion-footer");p.style.removeProperty("display"),p.removeAttribute("aria-hidden"),f.style.setProperty("display","none"),f.setAttribute("aria-hidden","true"),e.querySelector(".ion-page").style.removeProperty("padding-bottom")}});if(i){let p=window.innerWidth<768,f=i.tagName==="ION-MODAL"&&i.presentingElement!==void 0,g=_(i),u=m().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(M=>{if(M!==1)return;i.style.setProperty("overflow",""),Array.from(k.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(x=>x.presentingElement!==void 0).length<=1&&k.style.setProperty("background-color","")}),k=document.body;if(p){let M=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",c=f?"-10px":M,x=J.MIN_PRESENTING_SCALE,C=`translateY(${c}) scale(${x})`;u.addElement(i).keyframes([{offset:0,filter:"contrast(0.85)",transform:C,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),l.addAnimation(u)}else if(l.addAnimation(d),!f)s.fromTo("opacity","1","0");else{let c=`translateY(-10px) scale(${f?J.MIN_PRESENTING_SCALE:1})`;u.addElement(g.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);let x=m().addElement(g.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([u,x])}}else l.addAnimation(d);return l},Ue=()=>{let e=m().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t=m().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return{backdropAnimation:e,wrapperAnimation:t,contentAnimation:void 0}},Ze=(e,t)=>{let{currentBreakpoint:o,expandToScroll:i}=t,r=_(e),{wrapperAnimation:n,backdropAnimation:a,contentAnimation:s}=o!==void 0?We(t):Ue();a.addElement(r.querySelector("ion-backdrop")),n.addElement(r.querySelector(".modal-wrapper")),i&&(s==null||s.addElement(e.querySelector(".ion-page")));let d=m().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,n]).beforeAddWrite(()=>{if(i)return;let l=e.querySelector("ion-footer"),p=e.shadowRoot.querySelector("ion-footer");if(l&&!p){let f=l.clientHeight,g=l.cloneNode(!0);e.shadowRoot.appendChild(g),l.style.setProperty("display","none"),l.setAttribute("aria-hidden","true"),e.querySelector(".ion-page").style.setProperty("padding-bottom",`${f}px`)}});return s&&d.addAnimation(s),d},Je=()=>{let e=m().fromTo("opacity","var(--backdrop-opacity)",0),t=m().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return{backdropAnimation:e,wrapperAnimation:t}},Qe=(e,t)=>{let{currentBreakpoint:o,expandToScroll:i}=t,r=_(e),{wrapperAnimation:n,backdropAnimation:a}=o!==void 0?$e(t):Je();return a.addElement(r.querySelector("ion-backdrop")),n.addElement(r.querySelector(".modal-wrapper")),m().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,n]).beforeAddWrite(()=>{if(i)return;let d=e.querySelector("ion-footer");if(d){let l=e.shadowRoot.querySelector("ion-footer");d.style.removeProperty("display"),d.removeAttribute("aria-hidden"),l.style.setProperty("display","none"),l.setAttribute("aria-hidden","true"),e.querySelector(".ion-page").style.removeProperty("padding-bottom")}})},Xe=(e,t,o,i,r,n,a=[],s,d,l,p)=>{let f=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}],g=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-r,opacity:0},{offset:1,opacity:0}],u={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:r!==0?g:f,CONTENT_KEYFRAMES:[{offset:0,maxHeight:"100%"},{offset:1,maxHeight:"0%"}]},k=e.querySelector("ion-content"),M=o.clientHeight,c=i,x=0,C=!1,E=.95,S=a[a.length-1],P=a[0],w=n.childAnimations.find(h=>h.id==="wrapperAnimation"),v=n.childAnimations.find(h=>h.id==="backdropAnimation"),B=n.childAnimations.find(h=>h.id==="contentAnimation"),T=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove(Z)},j=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add(Z)},O=h=>{let b=e.querySelector("ion-footer");if(!b)return;let y=o.nextElementSibling,A=h==="original"?y:b,L=h==="original"?b:y;L.style.removeProperty("display"),L.removeAttribute("aria-hidden");let Y=e.querySelector(".ion-page");if(h==="original")Y.style.removeProperty("padding-bottom");else{let D=L.clientHeight;Y.style.setProperty("padding-bottom",`${D}px`)}A.style.setProperty("display","none"),A.setAttribute("aria-hidden","true")};w&&v&&(w.keyframes([...u.WRAPPER_KEYFRAMES]),v.keyframes([...u.BACKDROP_KEYFRAMES]),B==null||B.keyframes([...u.CONTENT_KEYFRAMES]),n.progressStart(!0,1-c),c>r?T():j()),k&&c!==S&&s&&(k.scrollY=!1);let F=h=>{let b=ne(h.event.target);if(c=d(),!s&&b)return(G(b)?_(b).querySelector(".inner-scroll"):b).scrollTop===0;if(c===1&&b){let y=G(b)?_(b).querySelector(".inner-scroll"):b;return!!!b.querySelector("ion-refresher")&&y.scrollTop===0}return!0},Q=h=>{C=e.canDismiss!==void 0&&e.canDismiss!==!0&&P===0,s||O("original"),h.deltaY>0&&k&&(k.scrollY=!1),H(()=>{e.focus()}),n.progressStart(!0,1-c)},Ge=h=>{if(!s&&h.deltaY<=0)return;h.deltaY>0&&k&&(k.scrollY=!1);let b=1-c,y=a.length>1?1-a[1]:void 0,A=b+h.deltaY/M,L=y!==void 0&&A>=y&&C,Y=L?E:.9999,D=L&&y!==void 0?y+pe((A-y)/(Y-y)):A;x=W(1e-4,D,Y),n.progressStep(x)},Ke=h=>{let b=h.velocityY,y=(h.deltaY+b*350)/M,A=c-y,L=a.reduce((Y,D)=>Math.abs(D-A)<Math.abs(Y-A)?D:Y);fe({breakpoint:L,breakpointOffset:x,canDismiss:C,animated:!0})},fe=h=>{let{breakpoint:b,canDismiss:y,breakpointOffset:A,animated:L}=h,Y=y&&b===0,D=Y?c:b,X=D!==0;return c=0,w&&v&&(w.keyframes([{offset:0,transform:`translateY(${A*100}%)`},{offset:1,transform:`translateY(${(1-D)*100}%)`}]),v.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${le(1-A,r)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${le(D,r)})`}]),B&&B.keyframes([{offset:0,maxHeight:`${(1-A)*100}%`},{offset:1,maxHeight:`${D*100}%`}]),n.progressStep(0)),V.enable(!1),!s&&X&&O("cloned"),Y?He(e,n):X||l(),k&&(D===a[a.length-1]||!s)&&(k.scrollY=!0),new Promise(ee=>{n.onFinish(()=>{X?w&&v?H(()=>{w.keyframes([...u.WRAPPER_KEYFRAMES]),v.keyframes([...u.BACKDROP_KEYFRAMES]),B==null||B.keyframes([...u.CONTENT_KEYFRAMES]),n.progressStart(!0,1-D),c=D,p(c),c>r?T():j(),V.enable(!0),ee()}):(V.enable(!0),ee()):ee()},{oneTimeCallback:!0}).progressEnd(1,0,L?500:0)})},V=te({el:o,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:F,onStart:Q,onMove:Ge,onEnd:Ke});return{gesture:V,moveSheetToBreakpoint:fe}},et=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer ion-toolbar:first-of-type{padding-top:6px}',tt=et,ot=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}',nt=ot,it=class{constructor(e){Ye(this,e),this.didPresent=R(this,"ionModalDidPresent",7),this.willPresent=R(this,"ionModalWillPresent",7),this.willDismiss=R(this,"ionModalWillDismiss",7),this.didDismiss=R(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=R(this,"ionBreakpointDidChange",7),this.didPresentShorthand=R(this,"didPresent",7),this.willPresentShorthand=R(this,"willPresent",7),this.willDismissShorthand=R(this,"willDismiss",7),this.didDismissShorthand=R(this,"didDismiss",7),this.ionMount=R(this,"ionMount",7),this.lockController=be(),this.triggerController=Ee(),this.coreDelegate=we(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{let{sheetTransition:t,handleBehavior:o}=this;o!=="cycle"||t!==void 0||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{let{sheetTransition:t}=this;t===void 0&&this.dismiss(void 0,De)},this.onLifecycle=t=>{let o=this.usersElement,i=rt[t.type];if(o&&i){let r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(r)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.expandToScroll=!0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.focusTrap=!0,this.canDismiss=!0}onIsOpenChange(e,t){e===!0&&t===!1?this.present():e===!1&&t===!0&&this.dismiss()}triggerChanged(){let{trigger:e,el:t,triggerController:o}=this;e&&o.addClickListener(t,e)}breakpointsChanged(e){e!==void 0&&(this.sortedBreakpoints=e.sort((t,o)=>t-o))}connectedCallback(){let{el:e}=this;xe(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){var e;let{breakpoints:t,initialBreakpoint:o,el:i,htmlAttributes:r}=this,n=this.isSheetModal=t!==void 0&&o!==void 0,a=["aria-label","role"];this.inheritedAttributes=ue(i,a),r!==void 0&&a.forEach(s=>{r[s]&&(this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{[s]:r[s]}),delete r[s])}),n&&(this.currentBreakpoint=this.initialBreakpoint),t!==void 0&&o!==void 0&&!t.includes(o)&&U("Your breakpoints array must include the initialBreakpoint value."),!((e=this.htmlAttributes)===null||e===void 0)&&e.id||Se(this.el)}componentDidLoad(){this.isOpen===!0&&H(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.triggerChanged()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};let t=this.el.parentNode,o=this.inline=t!==null&&!this.hasController,i=this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate;return{inline:o,delegate:i}}checkCanDismiss(e,t){return I(this,null,function*(){let{canDismiss:o}=this;return typeof o=="function"?o(e,t):o})}present(){return I(this,null,function*(){let e=yield this.lockController.lock();if(this.presented){e();return}let{presentingElement:t,el:o}=this;this.currentBreakpoint=this.initialBreakpoint;let{inline:i,delegate:r}=this.getDelegate(!0);this.ionMount.emit(),this.usersElement=yield ye(r,o,this.component,["ion-page"],this.componentProps,i),me(o)?yield Le(this.usersElement):this.keepContentsMounted||(yield Oe()),ae(()=>this.el.classList.add("show-modal"));let n=t!==void 0;n&&K(this)==="ios"&&(this.statusBarStyle=yield he.getStyle(),Ne()),yield ve(this,"modalEnter",qe,Ze,{presentingEl:t,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint,expandToScroll:this.expandToScroll}),typeof window<"u"&&(this.keyboardOpenCallback=()=>{this.gesture&&(this.gesture.enable(!1),H(()=>{this.gesture&&this.gesture.enable(!0)}))},window.addEventListener(se,this.keyboardOpenCallback)),this.isSheetModal?this.initSheetGesture():n&&this.initSwipeToClose(),e()})}initSwipeToClose(){var e;if(K(this)!=="ios")return;let{el:t}=this,o=this.leaveAnimation||de.get("modalLeave",Fe),i=this.animation=o(t,{presentingEl:this.presentingElement,expandToScroll:this.expandToScroll});if(!Te(t)){Me(t);return}let n=(e=this.statusBarStyle)!==null&&e!==void 0?e:z.Default;this.gesture=ze(t,i,n,()=>{this.gestureAnimationDismissing=!0,ce(this.statusBarStyle),this.animation.onFinish(()=>I(this,null,function*(){yield this.dismiss(void 0,$),this.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){let{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:o}=this;if(!e||t===void 0)return;let i=this.enterAnimation||de.get("modalEnter",qe),r=this.animation=i(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:o,expandToScroll:this.expandToScroll});r.progressStart(!0,1);let{gesture:n,moveSheetToBreakpoint:a}=Xe(this.el,this.backdropEl,e,t,o,r,this.sortedBreakpoints,this.expandToScroll,()=>{var s;return(s=this.currentBreakpoint)!==null&&s!==void 0?s:0},()=>this.sheetOnDismiss(),s=>{this.currentBreakpoint!==s&&(this.currentBreakpoint=s,this.ionBreakpointDidChange.emit({breakpoint:s}))});this.gesture=n,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){this.gestureAnimationDismissing=!0,this.animation.onFinish(()=>I(this,null,function*(){this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),yield this.dismiss(void 0,$),this.gestureAnimationDismissing=!1}))}dismiss(e,t){return I(this,null,function*(){var o;if(this.gestureAnimationDismissing&&t!==$)return!1;let i=yield this.lockController.lock();if(t!=="handler"&&!(yield this.checkCanDismiss(e,t)))return i(),!1;let{presentingElement:r}=this;r!==void 0&&K(this)==="ios"&&ce(this.statusBarStyle),typeof window<"u"&&this.keyboardOpenCallback&&(window.removeEventListener(se,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0);let a=yield Ae(this,e,t,"modalLeave",Fe,Qe,{presentingEl:r,currentBreakpoint:(o=this.currentBreakpoint)!==null&&o!==void 0?o:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint,expandToScroll:this.expandToScroll});if(a){let{delegate:s}=this.getDelegate();yield ke(s,this.usersElement),ae(()=>this.el.classList.remove("show-modal")),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy()}return this.currentBreakpoint=void 0,this.animation=void 0,i(),a})}onDidDismiss(){return oe(this.el,"ionModalDidDismiss")}onWillDismiss(){return oe(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){return I(this,null,function*(){if(!this.isSheetModal){U("setCurrentBreakpoint is only supported on sheet modals.");return}if(!this.breakpoints.includes(e)){U(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);return}let{currentBreakpoint:t,moveSheetToBreakpoint:o,canDismiss:i,breakpoints:r,animated:n}=this;t!==e&&o&&(this.sheetTransition=o({breakpoint:e,breakpointOffset:1-t,canDismiss:i!==void 0&&i!==!0&&r[0]===0,animated:n}),yield this.sheetTransition,this.sheetTransition=void 0)})}getCurrentBreakpoint(){return I(this,null,function*(){return this.currentBreakpoint})}moveToNextBreakpoint(){return I(this,null,function*(){let{breakpoints:e,currentBreakpoint:t}=this;if(!e||t==null)return!1;let o=e.filter(a=>a!==0),r=(o.indexOf(t)+1)%o.length,n=o[r];return yield this.setCurrentBreakpoint(n),!0})}render(){let{handle:e,isSheetModal:t,presentingElement:o,htmlAttributes:i,handleBehavior:r,inheritedAttributes:n,focusTrap:a,expandToScroll:s}=this,d=e!==!1&&t,l=K(this),p=o!==void 0&&l==="ios",f=r==="cycle";return q(Ie,Object.assign({key:"e661562f9e4126136cee337e4ab8ca69ac80faae","no-router":!0,tabindex:"-1"},i,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[l]:!0,"modal-default":!p&&!t,"modal-card":p,"modal-sheet":t,"modal-no-expand-scroll":t&&!s,"overlay-hidden":!0,[Z]:a===!1},Be(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),q("ion-backdrop",{key:"9221692e0e111f99e80239ca44faaaed9b288425",ref:g=>this.backdropEl=g,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),l==="ios"&&q("div",{key:"20def7088d31e5eb13c3f2404c514cd8b74cd966",class:"modal-shadow"}),q("div",Object.assign({key:"b11229330571d4ff7b9136dfdddcd7d759ada876",role:"dialog"},n,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:g=>this.wrapperEl=g}),d&&q("button",{key:"95b2a62477dfbc063a91910f0d37357388cfd914",class:"modal-handle",tabIndex:f?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:f?this.onHandleClick:void 0,part:"handle"}),q("slot",{key:"fba17dfdbdffbfd8992f473f633d172c5124dc19"})))}get el(){return Re(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},rt={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};it.style={ios:tt,md:nt};export{it as ion_modal};
