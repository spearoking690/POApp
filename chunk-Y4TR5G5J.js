import{n as s}from"./chunk-RACYT2UM.js";import"./chunk-6QSKDU45.js";import{c as n}from"./chunk-EQKTRDAQ.js";import"./chunk-CVTP67B6.js";import"./chunk-XDLFVO2Q.js";import"./chunk-OBXDPQ3V.js";import"./chunk-3VH6S6PX.js";import"./chunk-MCRJI3T3.js";import{c as b}from"./chunk-PAWARGFM.js";import{b as l,f as i,g as d,i as m,k as h}from"./chunk-MBM5QKYF.js";import"./chunk-OYAVQN5W.js";var p=".sc-ion-select-modal-ionic-h{height:100%}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(container){display:none}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-ionic{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-ionic{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-ionic{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}",u=p,f='.sc-ion-select-modal-ios-h{height:100%}ion-item.sc-ion-select-modal-ios{--inner-padding-end:0}ion-radio.sc-ion-select-modal-ios::after{bottom:0;position:absolute;width:calc(100% - 0.9375rem - 16px);border-width:0px 0px 0.55px 0px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));content:""}ion-radio.sc-ion-select-modal-ios::after{inset-inline-start:calc(0.9375rem + 16px)}',k=f,g=".sc-ion-select-modal-md-h{height:100%}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(container){display:none}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}",v=g,F=(()=>{let c=class{constructor(o){l(this,o),this.header=void 0,this.multiple=void 0,this.options=[]}closeModal(){let o=this.el.closest("ion-modal");o&&o.dismiss()}findOptionFromEvent(o){let{options:e}=this;return e.find(t=>t.value===o.target.value)}getValues(o){let{multiple:e,options:t}=this;if(e)return t.filter(a=>a.checked).map(a=>a.value);let r=o?this.findOptionFromEvent(o):null;return r?r.value:void 0}callOptionHandler(o){let e=this.findOptionFromEvent(o),t=this.getValues(o);e!=null&&e.handler&&s(e.handler,t)}setChecked(o){let{multiple:e}=this,t=this.findOptionFromEvent(o);e&&t&&(t.checked=o.detail.checked)}renderRadioOptions(){let o=this.options.filter(e=>e.checked).map(e=>e.value)[0];return i("ion-radio-group",{value:o,onIonChange:e=>this.callOptionHandler(e)},this.options.map(e=>i("ion-item",{lines:"none",class:Object.assign({"item-radio-checked":e.value===o},n(e.cssClass))},i("ion-radio",{value:e.value,disabled:e.disabled,justify:"start",labelPlacement:"end",onClick:()=>this.closeModal(),onKeyUp:t=>{t.key===" "&&this.closeModal()}},e.text))))}renderCheckboxOptions(){return this.options.map(o=>i("ion-item",{class:Object.assign({"item-checkbox-checked":o.checked},n(o.cssClass))},i("ion-checkbox",{value:o.value,disabled:o.disabled,checked:o.checked,justify:"start",labelPlacement:"end",onIonChange:e=>{this.setChecked(e),this.callOptionHandler(e),h(this)}},o.text)))}render(){return i(d,{key:"885198a9f21884e3bfb9bf0af53e0ee3ae37b231",class:b(this)},i("ion-header",{key:"d8b63726869747ac711e4fda78a50ce46f72970c"},i("ion-toolbar",{key:"9ab2a4c1480dd74eeae38d7b580a2e87fb71270e"},this.header!==void 0&&i("ion-title",{key:"87a7034385ef57f55cefdd0371dbb66a64827290"},this.header),i("ion-buttons",{key:"0a35424ea13ca002abc9a43b6138730254f187d0",slot:"end"},i("ion-button",{key:"238bf40b47128d9aa995d14d9ff9ebcae4f79492",onClick:()=>this.closeModal()},"Close")))),i("ion-content",{key:"4a256f3381f8cabbc7194337b8ae4aa1c3ab1066"},i("ion-list",{key:"acd38fc52024632176467ed6a84106a454021544"},this.multiple===!0?this.renderCheckboxOptions():this.renderRadioOptions())))}get el(){return m(this)}};return c.style={ionic:u,ios:k,md:v},c})();export{F as ion_select_modal};
