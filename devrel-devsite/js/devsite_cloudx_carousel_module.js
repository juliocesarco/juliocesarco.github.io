(function(_ds){var window=this;var Faa=new Map([["arrowsOnHover","cloud-carousel--arrows-on-hover"],["bleedLeft","cloud-carousel--bleed-left"],["bleedRight","cloud-carousel--bleed-right"],["isSimple","cloud-carousel--simple"],["isThreeUp","cloud-carousel--3up"],["isMarginTight","cloud-carousel--margin-tight"],["isFeatured","cloud-carousel--featured"]]),Gaa="onpointermove"in window?"pointerenter":"mouseenter",mW=function(a){a.h=a.slideData.length?a.slideData.map((c,d)=>{const {carouselSlideDate:e,carouselSlideDescription:f,carouselSlideCtaLink:g,
carouselSlideCtaText:h,carouselSlideImage:k,carouselSlideLinkNewTab:l,carouselSlideLocation:p,carouselSlideTrackName:q=h,carouselSlideTrackMetadataEventDetail:y=g,carouselSlideTrackMetadataPosition:B,carouselSlideTrackType:z="carousel slide item",carouselSlideTrackMetadataChildHeadline:E=f,carouselSlideTrackMetadataChildIndex:F=d+1,carouselSlideTrackMetadataChildTotal:N=a.slideData.length}=c;c=e||p;var K={backgroundImage:`url(${k})`};const P=l?"_blank":"_self",{Qt:Da,Tu:S}=lW(a,d);d=(0,_ds.O)`
        <div class="${"cloud-carousel__slide-image"}"
            style="${(0,_ds.WH)(K)}"></div>`;K=(0,_ds.O)`
        <div class="${"cloud-carousel__slide-date"}">${e}</div>`;const fa=(0,_ds.O)`
        <div class="${"cloud-carousel__slide-location"}">${p}</div>`;K=(0,_ds.O)`
        <div class="${"cloud-body-text cloud-carousel__slide-metadata"}">
          <p class="${"cloud-body-text__title"}">
            ${e?K:""}
            ${p?fa:""}
          </p>
        </div>`;return(0,_ds.O)`
        <div
          aria-labelledby="${_ds.QH(a.hideNuggets?void 0:Da)}"
          class="${"cloud-carousel__slide"}"
          id="${S}"
          role="tabpanel"
          tabindex="0"
        >
          ${k?d:""}
          <div class="${"cloud-carousel__slide-body"}">
            <h2 class="${"cloud-headline3"}">
              ${f}
            </h2>
            ${c?K:""}
            <a
              class="${"cloud-button cloud-button--flat"}"
              href="${g}"
              rel="noopener"
              target="${P}"
              track-type="${z}"
              track-name="${q}"
              track-metadata-eventdetail="${y}"
              track-metadata-position="${null!=B?B:_ds.sr}"
              track-metadata-child_headline="${E}"
              track-metadata-child_index="${F}"
              track-metadata-child_total="${N}">
              ${h}
              <i class="${"material-icons notranslate cloud-button__icon cloud-button__icon--external"}" aria-hidden="true">
                arrow_forward
              </i>
            </a>
          </div>
        </div>`}):[...a.querySelectorAll(".cloud-carousel__slide")];a.ea=a.h.length-1;const b=a.querySelector(".cloud-carousel__slide");if(b){const c=_ds.xm(b).right;a.slideX=b.getBoundingClientRect().width+c}},Haa=function(a){a.oa.listen(document.body,"devsite-sticky-resize",()=>{mW(a);nW(a);a.o()})},nW=function(a){for(const b of a.Da)b.removeAttribute("visually-hidden")},Iaa=function(a){a.h.forEach((b,c)=>{if(b instanceof Element){var {Qt:d,Tu:e}=lW(a,c);a.hideNuggets||b.setAttribute("aria-labelledby",
`${d}`);b.setAttribute("role","tabpanel");"true"===a.tabbable?b.setAttribute("tabindex","0"):b.setAttribute("tabindex","-1");b.id=e}})},Kaa=async function(a){await DevsiteApp.whenReady();document.body.hasAttribute("touch")||(Jaa(a),_ds.Wl(a.oa,a,[Gaa,"focusin"],()=>{clearInterval(a.Ga)}))},lW=function(a,b){return{Qt:`${a.j}${"-control"}${b}`,Tu:`${a.j}${"-slide"}${b}`}},oW=function(a){const b=a.slideX*a.position;return 0<a.touchMoveX?b+a.touchStartX-a.touchMoveX:b},Jaa=function(a){a.Ga=setInterval(()=>
void a.m(),3500)},Laa=function(a){if(a.hideNuggets)return(0,_ds.O)``;const b=[];a.h.forEach((c,d)=>{c=d===a.position;const {Qt:e,Tu:f}=lW(a,d);b.push((0,_ds.O)`
          <button class="${"cloud-carousel__nugget"}"
            ?active="${c}"
            aria-controls="${f}"
            aria-label="${"Slide"} ${d+1}"
            aria-selected="${c}"
            data-index="${d}"
            id="${e}"
            role="tab"
            tabindex="${_ds.QH(c?void 0:"-1")}"
            @keydown=${a.Fa}
            @click=${()=>{nW(a);a.position=d}}>
          </button>`)});return(0,_ds.O)`
        <div
          aria-label="${"Choose slide to display"}"
          class="${"cloud-carousel__nuggets"}"
          role="tablist">
          ${b}
        </div>`},pW=function(a){const b=["cloud-carousel__controls"],c=0===a.position,d=a.position===a.ea,e=`${a.j}${"-items"}`;a.hideNuggets&&b.push("cloud-carousel__controls--hide-nuggets");return(0,_ds.O)`
        <div class="${b.join(" ")}">
          <button
            aria-controls="${e}"
            aria-label="${"Previous slide"}"
            class="${"cloud-carousel__arrow left-arrow"}"
            @click=${a.xa}
            ?disabled=${c}
          >
            <i class="material-icons">keyboard_arrow_left</i>
          </button>
          <button
            aria-controls="${e}"
            aria-label="${"Next slide"}"
            class="${"cloud-carousel__arrow right-arrow"}"
            @click=${a.m}
            ?disabled=${d}
          >
            <i class="material-icons">keyboard_arrow_right</i>
          </button>
        </div>`},qW=function(a){return(0,_ds.O)`
        <div class="${"cloud-carousel__slide-deck-container"}">
          <div
            aria-live="${a.autoRotate?"off":"polite"}"
            class="${"cloud-carousel__slide-deck"}"
            id="${a.j}${"-items"}"
            style="${(0,_ds.WH)({transform:`translateX(-${oW(a)}px)`})}"
            @touchstart=${a.La}
            @touchmove=${a.Ma}
            @touchend=${a.Ha}
            @transitionend=${a.o}
          >
            ${a.h}
          </div>
        </div>`},Maa=class extends _ds.Hu{static get properties(){return{autoRotate:{type:Boolean,Ea:"auto-rotate"},arrowsOnHover:{type:Boolean,Ea:"arrows-on-hover"},bleedLeft:{type:Boolean,Ea:"bleed-left"},bleedRight:{type:Boolean,Ea:"bleed-right"},bottomControls:{type:Boolean,Ea:"bottom-controls"},hideNuggets:{type:Boolean,Ea:"hide-nuggets"},isFeatured:{type:Boolean,Ea:"is-featured"},isSimple:{type:Boolean,Ea:"is-simple"},isThreeUp:{type:Boolean,Ea:"is-three-up"},isMarginTight:{type:Boolean,Ea:"is-margin-tight"},
tabbable:{type:String,Ea:"tabbable"},position:{type:Number,Oa:!0},label:{type:String},slideData:{type:Array,Ea:"slide-data"},slideX:{type:Number,Oa:!0},touchMoveX:{type:Number},touchStartX:{type:Number}}}constructor(){super();this.isMarginTight=this.isThreeUp=this.isSimple=this.isFeatured=this.hideNuggets=this.bottomControls=this.bleedRight=this.bleedLeft=this.arrowsOnHover=this.autoRotate=!1;this.position=0;this.tabbable="true";this.label="";this.slideData=[];this.touchStartX=this.touchMoveX=this.slideX=
0;this.oa=new _ds.x;this.j="";this.h=[];this.Da=[];this.ea=0;this.Ga=null;this.ya=this.Aa=!1}connectedCallback(){super.connectedCallback();var a=this.querySelector(".cloud-carousel");a&&(a.hasAttribute("aria-label")&&this.setAttribute("label",a.getAttribute("aria-label")),a.querySelector(".cloud-carousel__controls--hide-nuggets")&&(this.setAttribute("hide-nuggets",""),a.classList.remove("cloud-carousel__controls--hide-nuggets")),a.classList.contains("cloud-carousel--autorotate")&&(this.setAttribute("auto-rotate",
""),a.classList.remove("cloud-carousel--autorotate")),a.classList.contains("cloud-carousel--simple")&&(this.setAttribute("is-simple",""),a.classList.remove("cloud-carousel--simple")),a.classList.contains("cloud-carousel--3up")&&(this.setAttribute("is-three-up",""),a.classList.remove("cloud-carousel--3up")),a.classList.contains("cloud-carousel--margin-tight")&&(this.setAttribute("is-margin-tight",""),a.classList.remove("cloud-carousel--margin-tight")),a.classList.contains("cloud-carousel--arrows-on-hover")&&
(this.setAttribute("arrows-on-hover",""),a.classList.remove("cloud-carousel--arrows-on-hover")),a.classList.contains("cloud-carousel--bleed-left")&&(this.setAttribute("bleed-left",""),a.classList.remove("cloud-carousel--bleed-left")),a.classList.contains("cloud-carousel--bleed-right")&&(this.setAttribute("bleed-right",""),a.classList.remove("cloud-carousel--bleed-right")),a.classList.remove("cloud-carousel"));a=1;let b=`${"carousel"}${a}`;for(;document.getElementById(b);)b=`${"carousel"}${a++}`;this.j=
this.id=b;mW(this);Haa(this);this.ya&&(nW(this),this.o())}disconnectedCallback(){super.disconnectedCallback();_ds.A(this.oa)}hb(){return this}eb(){this.Da=[...this.querySelectorAll(".cloud-carousel__slide")];Iaa(this);this.o();this.autoRotate&&Kaa(this)}xa(){nW(this);this.position=Math.max(0,this.position-1)}m(){nW(this);this.position=Math.min(this.ea,this.position+1);this.autoRotate&&this.position===this.ea&&clearInterval(this.Ga)}Fa(a){switch(a.key){case "ArrowRight":this.m();break;case "ArrowLeft":this.xa()}this.querySelector(`[data-index="${this.position}"]`).focus()}La(a){a=
a.touches&&a.touches[0]&&a.touches[0].clientX;null!==a&&(nW(this),this.Aa=!0,this.touchMoveX=this.touchStartX=a)}Ma(a){a=a.touches&&a.touches[0]&&a.touches[0].clientX;null!==a&&(this.touchMoveX=a)}Ha(){const a=this.slideX*this.position,b=oW(this);Math.abs(a-b)>.2*this.slideX&&("right"===(a<b?"right":"left")?this.m():this.xa());this.Aa=!1;this.touchMoveX=this.touchStartX=0}o(){const a=this.querySelector(".cloud-carousel__slide-deck-container").getBoundingClientRect();this.Da.forEach((b,c)=>{if(this.isThreeUp){c=
b.getBoundingClientRect();const d=c.right;c=c.left<a.right&&d>a.left}else c=this.position===c;c||b.setAttribute("visually-hidden","")})}render(){if(!this.ya)for(this.ya=!0;this.Wc.firstChild;)this.Wc.removeChild(this.Wc.firstChild);const a=[];this.Aa&&a.push("cloud-carousel--no-transition");for(const [c,d]of Faa)this[c]&&a.push(d);let b;b=this.bottomControls?(0,_ds.O)`${qW(this)} ${pW(this)}`:(0,_ds.O)`${pW(this)} ${qW(this)}`;return(0,_ds.O)`
        <div
          class="${a.join(" ")}"
          role="group"
          aria-roledescription="carousel"
          aria-label="${this.label}"
        >
          ${b}
          ${Laa(this)}
        </div>`}updated(a){a.has("slideData")&&mW(this)}};try{window.customElements.define("cloudx-carousel",Maa)}catch(a){console.warn("devsite.app.customElement.CloudxCarousel",a)};})(_ds_www);
