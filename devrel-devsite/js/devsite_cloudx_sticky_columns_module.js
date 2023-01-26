(function(_ds){var window=this;var nfa=_ds.ou([":host{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:64px}:host .sticky-column{-webkit-flex-basis:calc(50% - 32px);-ms-flex-preferred-size:calc(50% - 32px);flex-basis:calc(50% - 32px);position:relative}:host .sticky-column.status-unsticky-top{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host .sticky-column.status-sticky .sticky-content{position:fixed}:host .sticky-column.status-unsticky-bottom{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1}:host .sticky-content{overflow:hidden}@media (max-width:1280px){:host{gap:48px}:host .sticky-column{-webkit-flex-basis:calc(50% - 24px);-ms-flex-preferred-size:calc(50% - 24px);flex-basis:calc(50% - 24px)}}@media (max-width:768px){:host{gap:40px}:host .sticky-column{-webkit-flex-basis:calc(50% - 20px);-ms-flex-preferred-size:calc(50% - 20px);flex-basis:calc(50% - 20px)}}:host(.compact){display:block}"]);var ofa=function(a){a.eventHandler.listen(document.body,"devsite-sticky-scroll",a.h.bind(a));a.eventHandler.listen(window,"load",()=>{Y1(a);a.h()});(new ResizeObserver(a.j.bind(a))).observe(a);a.eventHandler.listen(window,"resize",a.j.bind(a))},Y1=function(a){const b=window.innerWidth;(void 0===a.df||!0===a.df)&&768<=b?(a.df=!1,a.classList.remove("compact")):(void 0===a.df||!1===a.df)&&768>b&&(a.df=!0,a.classList.add("compact"));a.df?(a.Oc&&(a.Oc.status="unsticky-top",Z1(a,a.Oc)),a.Pc&&(a.Pc.status=
"unsticky-top",Z1(a,a.Pc))):(a.Oc&&"sticky"===a.Oc.status&&(a.Oc.content.style.width=`${a.Oc.clientWidth}px`),a.Pc&&"sticky"===a.Pc.status&&(a.Pc.content.style.width=`${a.Pc.clientWidth}px`))},$1=function(a,b,c){var d=(null==c?void 0:c.y)||window.scrollY;if(a.df||b.content.offsetHeight===a.offsetHeight&&!b.status)b.status="unsticky-top",b.classList.add(`status-${b.status}`),a.df||(b.oy=!0);else if(a.ip&&a.Wu){const e=b.status,f=a.Wu-b.content.offsetHeight;d=d>a.ip?d>f?"unsticky-bottom":"sticky":"unsticky-top";
e&&d===e||(b.status=d,Z1(a,b,null==c?void 0:c.contentMargin),a.dispatchEvent(new CustomEvent("sticking",{bubbles:!0,detail:{KT:b,status:b.status}})))}},Z1=function(a,b,c){"sticky"===b.status?(c=c||a.Yu,c||(c=(c=document.body.querySelector("devsite-header"))?c.offsetHeight:0),a.Yu=c,b.content.style.top=`${a.Yu+40}px`,b.content.style.width=`${b.offsetWidth}px`):(b.content.style.removeProperty("top"),b.content.style.removeProperty("width"));for(const d of b.classList)d.startsWith("status-")&&b.classList.remove(d);
b.classList.add(`status-${b.status}`)},a2=class extends _ds.Hu{constructor(){super(...arguments);this.eventHandler=new _ds.x;this.stickyOffset=0;this.Pc=this.Oc=null}static get styles(){return nfa}async connectedCallback(){super.connectedCallback();ofa(this);await this.pb;this.Oc=this.shadowRoot.querySelector(".col-left");this.Oc.content=this.Oc.querySelector(".sticky-content");this.Pc=this.shadowRoot.querySelector(".col-right");this.Pc.content=this.Pc.querySelector(".sticky-content");setTimeout(this.j.bind(this),
2E3)}disconnectedCallback(){super.disconnectedCallback();_ds.A(this.eventHandler)}render(){return(0,_ds.O)`
      <div class="sticky-column col-left">
        <div class="sticky-content">
          <slot name="left"></slot>
        </div>
      </div>
      <div class="sticky-column col-right">
        <div class="sticky-content">
          <slot name="right"></slot>
        </div>
      </div>
    `}j(){this.ip=this.offsetTop-40;this.Wu=this.ip+this.offsetHeight;Y1(this);this.h()}async h(a){let b;a=null==(b=a&&a.Ja)?void 0:b.detail;await this.pb;this.Oc&&!this.Oc.oy&&$1(this,this.Oc,a);this.Pc&&!this.Pc.oy&&$1(this,this.Pc,a)}};_ds.u([_ds.D({type:Boolean}),_ds.v("design:type",Number)],a2.prototype,"stickyOffset",void 0);_ds.u([_ds.H(),_ds.v("design:type",Object)],a2.prototype,"df",void 0);_ds.u([_ds.H(),_ds.v("design:type",Object)],a2.prototype,"Oc",void 0);
_ds.u([_ds.H(),_ds.v("design:type",Object)],a2.prototype,"Pc",void 0);_ds.u([_ds.H(),_ds.v("design:type",Object)],a2.prototype,"ip",void 0);_ds.u([_ds.H(),_ds.v("design:type",Object)],a2.prototype,"Wu",void 0);_ds.u([_ds.H(),_ds.v("design:type",Object)],a2.prototype,"Yu",void 0);try{window.customElements.define("cloudx-sticky-columns",a2)}catch(a){console.warn("Unrecognized DevSite custom element - CloudxStickyColumns",a)};})(_ds_www);
