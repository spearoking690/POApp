import{b as a,f as n,g as d,i as h,j as m}from"./chunk-MBM5QKYF.js";import{i as c}from"./chunk-OYAVQN5W.js";var u=":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}",f=u,g=":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}",w=g,S=(()=>{let i=class{constructor(e){a(this,e),this.ionSegmentViewScroll=m(this,"ionSegmentViewScroll",7),this.scrollEndTimeout=null,this.isTouching=!1,this.disabled=!1,this.isManualScroll=void 0}handleScroll(e){var t;let{scrollLeft:r,scrollWidth:s,clientWidth:o}=e.target,l=r/(s-o);this.ionSegmentViewScroll.emit({scrollRatio:l,isManualScroll:(t=this.isManualScroll)!==null&&t!==void 0?t:!0}),this.resetScrollEndTimeout()}handleScrollStart(){this.scrollEndTimeout&&(clearTimeout(this.scrollEndTimeout),this.scrollEndTimeout=null),this.isTouching=!0}handleTouchEnd(){this.isTouching=!1}resetScrollEndTimeout(){this.scrollEndTimeout&&(clearTimeout(this.scrollEndTimeout),this.scrollEndTimeout=null),this.scrollEndTimeout=setTimeout(()=>{this.checkForScrollEnd()},100)}checkForScrollEnd(){this.isTouching||(this.isManualScroll=void 0)}setContent(e,t=!0){return c(this,null,function*(){let s=this.getSegmentContents().findIndex(l=>l.id===e);if(s===-1)return;this.isManualScroll=!1,this.resetScrollEndTimeout();let o=this.el.offsetWidth;this.el.scrollTo({top:0,left:s*o,behavior:t?"smooth":"instant"})})}getSegmentContents(){return Array.from(this.el.querySelectorAll("ion-segment-content"))}render(){let{disabled:e,isManualScroll:t}=this;return n(d,{key:"fa528d2d9ae0f00fc3067defe2a047dce77c814a",class:{"segment-view-disabled":e,"segment-view-scroll-disabled":t===!1}},n("slot",{key:"74dc8b4d073caeff1bab272d11b9ea3e1a215954"}))}get el(){return h(this)}};return i.style={ios:f,md:w},i})();export{S as ion_segment_view};
