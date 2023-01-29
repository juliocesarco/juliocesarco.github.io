(function(_ds){var window=this;var D1=function(a,b,c){const d=Math.floor(Math.random()*(b-a+1)+a);return c&&Array.isArray(c)&&c.includes(d)||Number.isInteger(c)&&c===d?D1(a,b,c):d},E1=function(){return new Promise(a=>{setTimeout(a,500)})},Lea=_ds.ou(['.cws-button--high-emphasis:active .mdc-elevation-overlay,.cws-button--high-emphasis:hover .mdc-elevation-overlay{opacity:0}.cws-button--align-left,.cws-button__set .cws-button+.cws-button--align-left{margin-left:-13px}.cws-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:16px;font-weight:500;letter-spacing:normal;line-height:20px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-radius:4px;border-style:solid;border-width:1px;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:48px;min-width:auto;padding:13px 24px 12px;position:relative;text-align:left;text-decoration:none;text-transform:none;-webkit-transition:background-color .2s,box-shadow .2s,color .2s;transition:background-color .2s,box-shadow .2s,color .2s;vertical-align:inherit}.cws-button:focus{outline:0;text-decoration:none;-webkit-transition:none;transition:none}.cws-button[disabled],.cws-button[disabled]:active,.cws-button[disabled]:focus,.cws-button[disabled]:hover{border-color:transparent;box-shadow:none;cursor:default}.cws-button--high-emphasis{background-color:#1a73e8;border-color:transparent;color:#fff}.cws-button--high-emphasis[disabled],.cws-button--high-emphasis[disabled]:active,.cws-button--high-emphasis[disabled]:focus,.cws-button--high-emphasis[disabled]:hover{background-color:#f8f9fa;color:#9aa0a6}.cws-button--high-emphasis:active,.cws-button--high-emphasis:focus,.cws-button--high-emphasis:hover{background-color:#185abc;color:#fff}.cws-button--high-emphasis:hover{box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);border:1px solid #185abc}.cws-button--high-emphasis:focus{box-shadow:inset 0 0 0 1px #185abc,inset 0 0 0 2px #fff}.cws-button--high-emphasis:active{box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);border:1px solid #185abc}.cws-button--medium-emphasis{background-color:#fff;border-color:#dadce0;color:#1a73e8;z-index:1}.cws-button--medium-emphasis[disabled],.cws-button--medium-emphasis[disabled]:active,.cws-button--medium-emphasis[disabled]:focus,.cws-button--medium-emphasis[disabled]:hover{background-color:#f8f9fa;border-color:#dadce0;color:#9aa0a6}.cws-button--medium-emphasis[disabled]:active:after,.cws-button--medium-emphasis[disabled]:after,.cws-button--medium-emphasis[disabled]:focus:after,.cws-button--medium-emphasis[disabled]:hover:after{content:none}.cws-button--medium-emphasis:active,.cws-button--medium-emphasis:focus,.cws-button--medium-emphasis:hover{background-color:#fff;border-color:#1a73e8;color:#174ea6}.cws-button--medium-emphasis:active:after,.cws-button--medium-emphasis:focus:after,.cws-button--medium-emphasis:hover:after{background-color:#1a73e8;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:-1}.cws-button--medium-emphasis:hover:after{opacity:.04}.cws-button--medium-emphasis:focus{box-shadow:inset 0 0 0 1px #1a73e8}.cws-button--medium-emphasis:focus:after{opacity:.12}.cws-button--medium-emphasis:active{box-shadow:none}.cws-button--medium-emphasis:active:after{opacity:.1}.cws-button--medium-emphasis.cws-button--reversed:not(:hover):not(:focus):not(:active):not([disabled]){background-color:transparent;border-color:#fff;color:#fff}.cws-button--medium-emphasis.cws-button--reversed[disabled],.cws-button--medium-emphasis.cws-button--reversed[disabled]:active,.cws-button--medium-emphasis.cws-button--reversed[disabled]:focus,.cws-button--medium-emphasis.cws-button--reversed[disabled]:hover{background-color:transparent}.cws-button--low-emphasis{background-color:transparent;border-color:transparent;color:#1a73e8;padding-left:12px;padding-right:12px;z-index:1}.cws-button--low-emphasis[disabled],.cws-button--low-emphasis[disabled]:active,.cws-button--low-emphasis[disabled]:focus,.cws-button--low-emphasis[disabled]:hover{background-color:transparent;border-color:transparent;color:#9aa0a6}.cws-button--low-emphasis[disabled]:active:after,.cws-button--low-emphasis[disabled]:after,.cws-button--low-emphasis[disabled]:focus:after,.cws-button--low-emphasis[disabled]:hover:after{content:none}.cws-button--low-emphasis:active,.cws-button--low-emphasis:focus,.cws-button--low-emphasis:hover{background-color:transparent;color:#174ea6}.cws-button--low-emphasis:active:after,.cws-button--low-emphasis:focus:after,.cws-button--low-emphasis:hover:after{background-color:#1a73e8;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:-1}.cws-button--low-emphasis.cws-button--reversed-alternate:active,.cws-button--low-emphasis.cws-button--reversed-alternate:focus,.cws-button--low-emphasis.cws-button--reversed-alternate:hover,.cws-button--low-emphasis.cws-button--reversed:active,.cws-button--low-emphasis.cws-button--reversed:focus,.cws-button--low-emphasis.cws-button--reversed:hover,.cws-button--support{background-color:#fff}.cws-button--low-emphasis:hover:after{opacity:.04}.cws-button--low-emphasis:focus{border-color:#1a73e8;box-shadow:inset 0 0 0 1px #1a73e8}.cws-button--low-emphasis:focus:after{opacity:.12}.cws-button--low-emphasis:active:after{opacity:.1}.cws-button--low-emphasis.cws-button--icon-left{padding-left:8px;padding-right:12px}.cws-button--low-emphasis.cws-button--icon-right{padding-left:12px;padding-right:8px}.cws-button--low-emphasis.cws-button--reversed:not(:hover):not(:focus):not(:active):not([disabled]){color:#8ab4f8}.cws-button--low-emphasis.cws-button--reversed-alternate:not(:hover):not(:focus):not(:active):not([disabled]){color:#fff}.cws-button--support{border-color:#dadce0;color:#202124;z-index:1}.cws-button--support[disabled],.cws-button--support[disabled]:active,.cws-button--support[disabled]:focus,.cws-button--support[disabled]:hover{background-color:#f8f9fa;border-color:#dadce0;color:#9aa0a6}.cws-button--support[disabled]:active:after,.cws-button--support[disabled]:after,.cws-button--support[disabled]:focus:after,.cws-button--support[disabled]:hover:after{content:none}.cws-button--support:active,.cws-button--support:focus,.cws-button--support:hover{background-color:#fff;border-color:#202124;color:#202124}.cws-button--support:active:after,.cws-button--support:focus:after,.cws-button--support:hover:after{background-color:#202124;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:-1}.cws-button--support:hover:after{opacity:.04}.cws-button--support:focus{box-shadow:inset 0 0 0 1px #202124}.cws-button--support:focus:after{opacity:.12}.cws-button--support:active{box-shadow:none}.cws-button--support:active:after{opacity:.1}.cws-button--tonal{background-color:#e8f0fe;border-color:transparent;color:#1967d2}.cws-button--tonal[disabled],.cws-button--tonal[disabled]:active,.cws-button--tonal[disabled]:focus,.cws-button--tonal[disabled]:hover{background-color:#f8f9fa;border-color:transparent;color:#9aa0a6}.cws-button--tonal[disabled]:active:after,.cws-button--tonal[disabled]:after,.cws-button--tonal[disabled]:focus:after,.cws-button--tonal[disabled]:hover:after{content:none}.cws-button--tonal:active,.cws-button--tonal:focus,.cws-button--tonal:hover{background-color:#e8f0fe;color:#174ea6}.cws-button--tonal:active:after,.cws-button--tonal:focus:after,.cws-button--tonal:hover:after{background-color:#1967d2;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:0}.cws-button--tonal:hover{box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);border:1px solid transparent}.cws-button--tonal:hover .mdc-elevation-overlay{opacity:0}.cws-button--tonal:hover:after{opacity:.04}.cws-button--tonal:focus{border:1px solid #1a73e8;box-shadow:inset 0 0 0 1px #1a73e8}.cws-button--tonal:focus:after{opacity:.12}.cws-button--tonal:active{box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);border:1px solid transparent}.cws-button--tonal:active .mdc-elevation-overlay{opacity:0}.cws-button--tonal:active:after{opacity:.1}.cws-button--icon{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}.cws-button--icon svg{fill:currentColor;height:18px;width:18px}.cws-button--icon-left{padding-left:12px;padding-right:16px}.cws-button--icon-left .cws-button--icon{margin-right:8px}.cws-button--icon-right{padding-left:16px;padding-right:12px}.cws-button--icon-right .cws-button--icon{margin-left:8px}.cws-button--full-width{width:100%}.cws-button+.cws-button{margin-left:16px}@media (max-width:450px){.cws-button{width:100%}}.cws-button__set{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:16px}.cws-button__set .cws-button+.cws-button:not(.cws-button--align-left){margin-left:0}.cws-button__set .cws-button--align-left{margin-right:16px}.cws-button__set--with-margin{margin-top:24px}.cws-button__set--centered{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .logo-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}:host .logo-container .logo-wrapper{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:120px;position:relative;text-align:center}:host .logo-container .logo-wrapper picture{position:absolute;-webkit-transition-duration:.5s;transition-duration:.5s}:host .logo-container .logo-wrapper img{max-height:50px;max-width:124px}:host .logo-container .logo-wrapper.transition picture{opacity:0}:host .logo-container .logo-wrapper.transition picture.new{-webkit-animation:.5s ease-out fadeInFromNone;animation:.5s ease-out fadeInFromNone;opacity:0;margin-top:15px}@-webkit-keyframes fadeInFromNone{0%{opacity:0;margin-top:15px}to{opacity:1;margin-top:0}}@keyframes fadeInFromNone{0%{opacity:0;margin-top:15px}to{opacity:1;margin-top:0}}@media (max-width:600px){:host .logo-container .logo-wrapper{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%}:host .logo-container .logo-wrapper img{max-height:45px;max-width:100px}}']);var F1=function(a){const b=a.visible,c={connected:a.element.isConnected,display:"none"!==a.style.getPropertyValue("display"),opacity:Mea(a),overflow:Nea(a),position:a.isIntersecting};a.visible=Object.values(c).every(d=>!0===d);a.visible!==b&&a.element.dispatchEvent(new CustomEvent("element-visible",{detail:{isVisible:a.visible}}))},Mea=function(a){const b=a.style.getPropertyValue("visibility");a=a.style.getPropertyValue("opacity");return"hidden"!==b&&(!a||0<Number(a))},Nea=function(a){const b=a.style.getPropertyValue("overflow"),
c=a.element.offsetWidth;a=a.element.offsetHeight;return!("hidden"===b&&(0===c||0===a))},Oea=class{constructor(a){this.isIntersecting=this.visible=!1;this.element=a.element;this.style=window.getComputedStyle(this.element);this.threshold=a.threshold||0;this.viewport=a.viewport||null;this.element.LJ=this;this.m=new MutationObserver(b=>{for(const c of b)c.attributeName&&F1(this)});this.m.observe(this.element,{attributes:!0,attributeFilter:["style"]});this.j=new MutationObserver(b=>{for(const c of b)if(c.addedNodes)for(const d of c.addedNodes)d===
this.element&&F1(this)});this.j.observe(document.body,{childList:!0});this.h=new IntersectionObserver(b=>{for(const c of b)c.target===this.element&&(this.isIntersecting=c.isIntersecting,F1(this))},{root:this.viewport,threshold:this.threshold});this.h.observe(this.element)}destroy(){this.m.disconnect();this.j.disconnect();this.h.disconnect();delete this.element.LJ;this.element=document.createElement("div")}isVisible(){return this.visible}getElement(){return this.element}};var Pea={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0},Qea=function(a){a.h.push(...a.querySelectorAll("picture"));const b=a.shadowRoot.querySelector(".logo-container");let c=0;for(const d of a.h)if(8>c){const e=document.createElement("div");e.classList.add("logo-wrapper");e.dataset.contains=String(c++);e.appendChild(d.cloneNode(!0));b.appendChild(e)}a.m=[...a.shadowRoot.querySelectorAll(".logo-container .logo-wrapper")]},G1=function(a){!a.m||8>=a.h.length||setInterval(async()=>{const b=a.m[a.o=D1(0,7,
a.o)],c=Rea(a),d=a.h[c].cloneNode(!0);d.classList.add("new");b.dataset.contains&&(a.j[Number(b.dataset.contains)]=!1);b.dataset.contains=String(c);a.j[c]=!0;b.classList.add("transition");for(await E1();b.firstChild;)b.removeChild(b.firstChild);b.appendChild(d);d.classList.add("new");await E1();b.classList.remove("transition");d.classList.remove("new")},2800)},Rea=function(a){const b=Object.keys(a.j).filter(c=>!0===a.j[Number(c)]).map(c=>Number(c));return D1(0,a.h.length-1,b)},H1=class extends _ds.Hu{constructor(){super(...arguments);
this.eventHandler=new _ds.x;this.h=[];this.j=Pea;this.m=[];this.o=-1;this.startOnVisible=!1}static get styles(){return[Lea,_ds.QI]}async connectedCallback(){super.connectedCallback();await this.pb;Qea(this);if(this.startOnVisible){const a=new Oea({element:this});_ds.Wl(this.eventHandler,this,"element-visible",b=>{let c;if(null==(c=b.Ja.detail)?0:c.isVisible)a.destroy(),G1(this)})}else G1(this)}render(){return(0,_ds.O)`
      <div class="logo-container"></div>
    `}};_ds.u([_ds.D({type:String}),_ds.v("design:type",Boolean)],H1.prototype,"startOnVisible",void 0);try{window.customElements.define("cloudx-logo-switcher",H1)}catch(a){console.warn("CloudxLogoSwitcher",a)};})(_ds_www);