import{a as J,b as Q}from"./chunk-YMI2B6JE.js";import{g as R,h as _,j as W,k as F,l as I,m as k,n as j,p as N,q,r as U,s as K}from"./chunk-RACYT2UM.js";import{a as p}from"./chunk-FERD25SW.js";import{a as L}from"./chunk-BH3GBUQZ.js";import"./chunk-6QSKDU45.js";import{b as V,c as X}from"./chunk-EQKTRDAQ.js";import{a as x}from"./chunk-CVTP67B6.js";import{h as b,i as G}from"./chunk-XDLFVO2Q.js";import{a as z}from"./chunk-5OMUW5VI.js";import"./chunk-OBXDPQ3V.js";import"./chunk-3VH6S6PX.js";import{a as P}from"./chunk-MCRJI3T3.js";import{a as M,c as T}from"./chunk-PAWARGFM.js";import{b as Z,f as l,g as tt,i as et,j as h}from"./chunk-MBM5QKYF.js";import{i as y}from"./chunk-OYAVQN5W.js";function at(t,e,i,o){let n;if(i==="md"?n=t==="top"?8:-8:n=t==="top"?10:-10,e&&P){dt(e,o);let s=e.getBoundingClientRect();return t==="top"?n+=s.bottom:t==="bottom"&&(n-=P.innerHeight-s.top),{top:`${n}px`,bottom:`${n}px`}}else return{top:`calc(${n}px + var(--ion-safe-area-top, 0px))`,bottom:`calc(${n}px - var(--ion-safe-area-bottom, 0px))`}}function dt(t,e){t.offsetParent===null&&x("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.",e)}var Y=(t,e)=>Math.floor(t/2-e/2),lt=(t,e)=>{let i=p(),o=p(),{position:n,top:s,bottom:a}=e,r=b(t).querySelector(".toast-wrapper");switch(o.addElement(r),n){case"top":o.fromTo("transform","translateY(-100%)",`translateY(${s})`);break;case"middle":let u=Y(t.clientHeight,r.clientHeight);r.style.top=`${u}px`,o.fromTo("opacity",.01,1);break;default:o.fromTo("transform","translateY(100%)",`translateY(${a})`);break}return i.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(o)},ct=(t,e)=>{let i=p(),o=p(),{position:n,top:s,bottom:a}=e,r=b(t).querySelector(".toast-wrapper");switch(o.addElement(r),n){case"top":o.fromTo("transform",`translateY(${s})`,"translateY(-100%)");break;case"middle":o.fromTo("opacity",.99,0);break;default:o.fromTo("transform",`translateY(${a})`,"translateY(100%)");break}return i.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},pt=(t,e)=>{let i=p(),o=p(),{position:n,top:s,bottom:a}=e,r=b(t).querySelector(".toast-wrapper");switch(o.addElement(r),n){case"top":r.style.setProperty("transform",`translateY(${s})`),o.fromTo("opacity",.01,1);break;case"middle":let u=Y(t.clientHeight,r.clientHeight);r.style.top=`${u}px`,o.fromTo("opacity",.01,1);break;default:r.style.setProperty("transform",`translateY(${a})`),o.fromTo("opacity",.01,1);break}return i.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(o)},ht=t=>{let e=p(),i=p(),n=b(t).querySelector(".toast-wrapper");return i.addElement(n).fromTo("opacity",.99,0),e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i)},ut=(t,e,i)=>{let o=b(t).querySelector(".toast-wrapper"),n=t.clientHeight,s=o.getBoundingClientRect(),a=0,d=.5,r=t.position==="middle"?.5:0,u=t.position==="top"?-1:1,m=Y(n,s.height),O=[{offset:0,transform:`translateY(-${m+s.height}px)`},{offset:.5,transform:"translateY(0px)"},{offset:1,transform:`translateY(${m+s.height}px)`}],c=p("toast-swipe-to-dismiss-animation").addElement(o).duration(100);switch(t.position){case"middle":a=n+s.height,c.keyframes(O),c.progressStart(!0,.5);break;case"top":a=s.bottom,c.keyframes([{offset:0,transform:`translateY(${e.top})`},{offset:1,transform:"translateY(-100%)"}]),c.progressStart(!0,0);break;case"bottom":default:a=n-s.top,c.keyframes([{offset:0,transform:`translateY(${e.bottom})`},{offset:1,transform:"translateY(100%)"}]),c.progressStart(!0,0);break}let $=f=>f*u/a,C=z({el:o,gestureName:"toast-swipe-to-dismiss",gesturePriority:q,direction:"y",onMove:f=>{let v=r+$(f.deltaY);c.progressStep(v)},onEnd:f=>{let v=f.velocityY,E=(f.deltaY+v*1e3)/a*u;C.enable(!1);let g=!0,S=1,w=0,A=0;if(t.position==="middle"){g=E>=d/2||E<=-d/2,S=1,w=0;let D=o.getBoundingClientRect(),H=D.top-m,nt=`${H}px`,it=f.deltaY<=0?-1:1,B=(m+D.height)*it,st=g?`${B}px`:"0px",rt=[{offset:0,transform:`translateY(${nt})`},{offset:1,transform:`translateY(${st})`}];c.keyframes(rt),A=B-H}else g=E>=d,S=g?1:0,w=$(f.deltaY),A=(g?1-w:w)*a;let ot=Math.min(Math.abs(A)/Math.abs(v),200);c.onFinish(()=>{g?(i(),c.destroy()):(t.position==="middle"?c.keyframes(O).progressStart(!0,.5):c.progressStart(!0,0),C.enable(!0))},{oneTimeCallback:!0}).progressEnd(S,w,ot)}});return C},mt=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-radius:14px;--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-middle{opacity:0.01}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",ft=mt,gt=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, var(--ion-background-color-step-800, #333333));--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-50, var(--ion-text-color-step-950, #f2f2f2));--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, var(--ion-text-color-step-900, #e6e6e6))}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}",bt=gt,xt=class{constructor(t){Z(this,t),this.didPresent=h(this,"ionToastDidPresent",7),this.willPresent=h(this,"ionToastWillPresent",7),this.willDismiss=h(this,"ionToastWillDismiss",7),this.didDismiss=h(this,"ionToastDidDismiss",7),this.didPresentShorthand=h(this,"didPresent",7),this.willPresentShorthand=h(this,"willPresent",7),this.willDismissShorthand=h(this,"willDismiss",7),this.didDismissShorthand=h(this,"didDismiss",7),this.delegateController=U(this),this.lockController=L(),this.triggerController=K(),this.customHTMLEnabled=M.get("innerHTMLTemplatesEnabled",Q),this.presented=!1,this.dispatchCancelHandler=e=>{let i=e.detail.role;if(k(i)){let o=this.getButtons().find(n=>n.role==="cancel");this.callButtonHandler(o)}},this.createSwipeGesture=e=>{(this.gesture=ut(this.el,e,()=>{this.dismiss(void 0,N)})).enable(!0)},this.destroySwipeGesture=()=>{let{gesture:e}=this;e!==void 0&&(e.destroy(),this.gesture=void 0)},this.prefersSwipeGesture=()=>{let{swipeGesture:e}=this;return e==="vertical"},this.revealContentToScreenReader=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=M.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.positionAnchor=void 0,this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.swipeGesture=void 0,this.isOpen=!1,this.trigger=void 0}swipeGestureChanged(){this.destroySwipeGesture(),this.presented&&this.prefersSwipeGesture()&&this.createSwipeGesture(this.lastPresentedPosition)}onIsOpenChange(t,e){t===!0&&e===!1?this.present():t===!1&&e===!0&&this.dismiss()}triggerChanged(){let{trigger:t,el:e,triggerController:i}=this;t&&i.addClickListener(e,t)}connectedCallback(){R(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){var t;!((t=this.htmlAttributes)===null||t===void 0)&&t.id||_(this.el)}componentDidLoad(){this.isOpen===!0&&G(()=>this.present()),this.triggerChanged()}present(){return y(this,null,function*(){let t=yield this.lockController.lock();yield this.delegateController.attachViewToDom();let{el:e,position:i}=this,o=this.getAnchorElement(),n=at(i,o,T(this),e);this.lastPresentedPosition=n,yield W(this,"toastEnter",lt,pt,{position:i,top:n.top,bottom:n.bottom}),this.revealContentToScreenReader=!0,this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(void 0,"timeout"),this.duration)),this.prefersSwipeGesture()&&this.createSwipeGesture(n),t()})}dismiss(t,e){return y(this,null,function*(){var i,o;let n=yield this.lockController.lock(),{durationTimeout:s,position:a,lastPresentedPosition:d}=this;s&&clearTimeout(s);let r=yield F(this,t,e,"toastLeave",ct,ht,{position:a,top:(i=d==null?void 0:d.top)!==null&&i!==void 0?i:"",bottom:(o=d==null?void 0:d.bottom)!==null&&o!==void 0?o:""});return r&&(this.delegateController.removeViewFromDom(),this.revealContentToScreenReader=!1),this.lastPresentedPosition=void 0,this.destroySwipeGesture(),n(),r})}onDidDismiss(){return I(this.el,"ionToastDidDismiss")}onWillDismiss(){return I(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(e=>typeof e=="string"?{text:e}:e):[]}getAnchorElement(){let{position:t,positionAnchor:e,el:i}=this;if(e!==void 0){if(t==="middle"&&e!==void 0){x('The positionAnchor property is ignored when using position="middle".',this.el);return}if(typeof e=="string"){let o=document.getElementById(e);if(o===null){x(`An anchor element with an ID of "${e}" was not found in the DOM.`,i);return}return o}if(e instanceof HTMLElement)return e;x("Invalid positionAnchor value:",e,i)}}buttonClick(t){return y(this,null,function*(){let e=t.role;return k(e)?this.dismiss(void 0,e):(yield this.callButtonHandler(t))?this.dismiss(void 0,e):Promise.resolve()})}callButtonHandler(t){return y(this,null,function*(){if(t!=null&&t.handler)try{if((yield j(t.handler))===!1)return!1}catch(e){console.error(e)}return!0})}renderButtons(t,e){if(t.length===0)return;let i=T(this),o={"toast-button-group":!0,[`toast-button-group-${e}`]:!0};return l("div",{class:o},t.map(n=>l("button",Object.assign({},n.htmlAttributes,{type:"button",class:wt(n),tabIndex:0,onClick:()=>this.buttonClick(n),part:yt(n)}),l("div",{class:"toast-button-inner"},n.icon&&l("ion-icon",{"aria-hidden":"true",icon:n.icon,slot:n.text===void 0?"icon-only":void 0,class:"toast-button-icon"}),n.text),i==="md"&&l("ion-ripple-effect",{type:n.icon!==void 0&&n.text===void 0?"unbounded":"bounded"}))))}renderToastMessage(t,e=null){let{customHTMLEnabled:i,message:o}=this;return i?l("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message",innerHTML:J(o)}):l("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message"},o)}renderHeader(t,e=null){return l("div",{key:t,class:"toast-header","aria-hidden":e,part:"header"},this.header)}render(){let{layout:t,el:e,revealContentToScreenReader:i,header:o,message:n}=this,s=this.getButtons(),a=s.filter(m=>m.side==="start"),d=s.filter(m=>m.side!=="start"),r=T(this),u={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${t}`]:!0};return t==="stacked"&&a.length>0&&d.length>0&&x("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",e),l(tt,Object.assign({key:"34036afc0701173d51c9c11ea4a2e1d65685ba41",tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:V(this.color,Object.assign(Object.assign({[r]:!0},X(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),l("div",{key:"d927e43957f47888ce4e64f1e99c935d55757af7",class:u},l("div",{key:"ca43bc42478181acdf8cdea6601a85fa95d12216",class:"toast-container",part:"container"},this.renderButtons(a,"start"),this.icon!==void 0&&l("ion-icon",{key:"fdd6fb8f6e947ed002bd2e63fdc8ec7e764f4a7d",class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),l("div",{key:"37c16c81ee3e4304379dfbcabdffe73db73e4653",class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!i&&o!==void 0&&this.renderHeader("oldHeader","true"),!i&&n!==void 0&&this.renderToastMessage("oldMessage","true"),i&&o!==void 0&&this.renderHeader("header"),i&&n!==void 0&&this.renderToastMessage("header")),this.renderButtons(d,"end"))))}get el(){return et(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},wt=t=>({"toast-button":!0,"toast-button-icon-only":t.icon!==void 0&&t.text===void 0,[`toast-button-${t.role}`]:t.role!==void 0,"ion-focusable":!0,"ion-activatable":!0}),yt=t=>k(t.role)?"button cancel":"button";xt.style={ios:ft,md:bt};export{xt as ion_toast};
