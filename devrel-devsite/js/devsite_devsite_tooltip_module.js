(function(_ds){var window=this;var epa=function(a){return(0,_ds.Q)('<span class="devsite-tooltip-msg">'+_ds.R(a.GJ)+"</span>")};var fpa=["dl.google.com"],gpa="abc.xyz admob.com android.com blogger.com blogspot.com chrome.com chromium.org domains.google doubleclick.com feedburner.com g.co ggpht.com gmail.com gmodules.com goo.gl google.com google.org googleapis.com googleapps.com googlecode.com googledrive.com googlemail.com googlesource.com googlesyndication.com googletagmanager.com googleusercontent.com gv.com keyhole.com madewithcode.com panoramio.com urchin.com withgoogle.com youtu.be youtube.com ytimg.com".split(" "),hpa=
function(a){const b=Array.from(document.querySelectorAll(".devsite-article-body [title]"));for(const c of b){let d;c.setAttribute("data-title",null!=(d=c.getAttribute("title"))?d:"");c.removeAttribute("title")}if(a.hasAttribute("blocked-link")){a=Array.from(document.getElementsByTagName("a"));for(const c of a)if(a=c.getAttribute("href")){const d=(new URL(a,document.location.origin)).hostname.replace("www.","");!fpa.some(e=>-1!==d.indexOf(e))&&gpa.some(e=>-1!==d.indexOf(e))&&(c.setAttribute("data-title",
"This link may not be accessible in your region."),c.removeAttribute("title"))}}},ipa=function(a){a.eventHandler.listen(document.body,"devsite-content-updated",()=>{a.o.Za()});a.eventHandler.listen(document.body,"onpointermove"in window?"pointermove":"mousemove",b=>{if(b=b.Ja.composedPath()){var c=!1,d=null;for(d of b)if(_ds.Dr()(d)&&(c=H8(d)),c)break;d&&c?I8(a,d):J8(a)}});a.eventHandler.listen(document.body,"focusin",b=>{b=b.target;const c=b.firstElementChild;(b.classList.contains("devsite-nav-title")&&
c?H8(c):H8(b))?I8(a,b):J8(a)});a.eventHandler.listen(document.body,["devsite-sticky-scroll","devsite-sticky-resize"],()=>{J8(a)})},J8=function(a){if(a.h){a.h=null;var b=a.m;a.m=null;b&&(_ds.og(b,_ds.Zf,()=>{_ds.cj(b);_ds.$i(b)}),window.setTimeout(()=>{_ds.cj(b);_ds.$i(b)},1E3),b.style.opacity="0")}},H8=function(a){return a.hasAttribute("no-tooltip")?!1:a.hasAttribute("data-title")||a.hasAttribute("data-tooltip")||a.hasAttribute("tooltip")&&a.clientWidth<a.scrollWidth},I8=function(a,b){if(a.h!==b){J8(a);
var c,d=b.getAttribute("data-tooltip")||b.getAttribute("data-title")||(null!=(c=b.textContent)?c:"").trim(),e=_ds.J(epa,{GJ:d});e.style.opacity="0";document.body.appendChild(e);d=_ds.Qi(window);var f=_ds.om(b),g=_ds.om(e),h=_ds.im(b);c=h.y+f.height;c+g.height+8>d.height&&(c=h.y-g.height-16);f=h.x+f.width/2-g.width/2;g.width>d.width?f=0:(f=Math.max(f,8),d=d.width-(f+g.width+8),0>d&&(f=f+d-8));e.style.top=`${c}px`;e.style.left=`${f}px`;a.h=b;a.m=e;window.requestAnimationFrame(()=>{e.style.opacity="1"})}},
jpa=class extends _ds.AD{constructor(){super();this.eventHandler=new _ds.x;this.m=this.h=null;this.o=new _ds.Rl(()=>void hpa(this),250)}connectedCallback(){document.body.hasAttribute("touch")?_ds.cj(this):(ipa(this),this.o.Za())}disconnectedCallback(){super.disconnectedCallback();_ds.A(this.eventHandler)}};try{window.customElements.define("devsite-tooltip",jpa)}catch(a){console.warn("devsite.app.customElement.DevsiteTooltip",a)};})(_ds_www);
