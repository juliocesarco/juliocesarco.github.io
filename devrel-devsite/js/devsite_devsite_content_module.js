(function(_ds){var window=this;var D4=function(a){return!a.classList.contains("material-icons")},xja=async function(a,b){await DevsiteApp.whenReady();const c=_ds.Dj();var d=DevsiteApp.getInsecureHost();b=b.Ja;if(b.origin===c.origin||!d||b.origin===d){try{var e=_ds.Nf(_ds.Um,b.data)}catch(g){return}d=_ds.Jf(e,1);if(4===d)qja(a,b);else{var f=e.getName();if(f&&(f=a.querySelector(`devsite-iframe iframe[name="${f}"]`)))switch(d){case 5:rja(e,f);break;case 8:sja(b,e,c);break;case 1:tja(b,e,c);break;case 6:case 7:uja(d,c,e);break;case 9:vja(a,
e);break;case 10:wja(e,c)}}}},E4=function(a){a.o=a.querySelector(".devsite-article-body");a.o&&(yja(a),a.ea=[]);a.h&&a.h.disconnect();a.m.clear();zja(a);if(!document.body.hasAttribute("appearance")){var b=[...a.querySelectorAll("picture > source.devsite-dark-theme")];for(var c of b){b=c.closest("picture");const d=b.querySelector("img");b.querySelectorAll("source:not(.devsite-dark-theme)").length?c.remove():b&&d&&b.replaceWith(d)}}c=Array.from(a.querySelectorAll(".devsite-nav-title, .devsite-page-title, td > code, th > code"));
"docs"===document.body.getAttribute("layout")&&a.o&&(b=Array.from(a.o.querySelectorAll("h1, h2, h3, h4, h5, h6")),c.push(...b));a.m.clear();a.m=new Set(c);if(_ds.Dj().hash){c=new _ds.IS;for(const d of a.m)_ds.HS(c,d,D4)}else Aja(a,a.m);a.dispatchEvent(new CustomEvent("devsite-content-updated",{bubbles:!0}))},zja=function(a){Array.from(a.getElementsByTagName("table")).forEach(b=>{if(!b.parentNode.classList.contains("devsite-table-wrapper")){var c=document.createElement("div");c.classList.add("devsite-table-wrapper");
b.classList.contains("full-width")&&(c.classList.add("devsite-full-width-table"),b.classList.remove("full-width"));_ds.aj(c,b);c.appendChild(b)}})},qja=async function(a,b){const c=Bja(a,b.source);if(c){const e=_ds.Ei();c.setAttribute("name",e);var d=_ds.Vm(3);d=_ds.Ub(d,2,e);(b=b.source)&&b.postMessage(_ds.Of(d),"*");(b=document.body.getAttribute("appearance"))&&F4(c,b);a.ea.push(c)}},rja=async function(a,b){const c=_ds.Si().y,d=a.Sd();a=_ds.Ff(a,3);b=_ds.kj(b);d&&b.setAttribute("width",`${d}px`);
a&&b.setAttribute("height",`${a}px`);window.requestAnimationFrame(()=>{window.scrollTo(_ds.Si().x,c)})},sja=async function(a,b,c){b=_ds.Wm(_ds.Vm(8),_ds.t(b,8));c=_ds.Ub(b,6,c.toString());(a=a.source)&&a.postMessage(_ds.Of(c),"*")},tja=async function(a,b,c){b=_ds.Wm(_ds.Vm(2),_ds.t(b,8));c=_ds.Ub(b,7,`${c.search}${c.hash}`);(a=a.source)&&a.postMessage(_ds.Of(c),"*")},uja=async function(a,b,c){const d=c.getTitle();b=new URL(c.getUrl(),b.origin);b=`${window.location.origin}${window.location.pathname}${b.search}${b.hash}`;
6===a?window.history.pushState({},d,b):window.history.replaceState({},d,b)},vja=async function(a,b){const c=_ds.t(b,9);let d;try{d=JSON.parse(_ds.t(b,10))}catch(e){console.warn("Event data from Framebox is not valid JSON.",a);return}"analyticsEvent"===c?a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:d,bubbles:!0})):"cloudtrackEvent"===c?a.dispatchEvent(new CustomEvent("devsite-analytics-observation-cloudtrack",{detail:{eventData:d},bubbles:!0})):"devsite-apix"===c&&a.dispatchEvent(new CustomEvent("devsite-apix-observation",
{detail:d,bubbles:!0}))},wja=async function(a,b){if(a=a.getUrl()){const c=new URL(a,b.origin);a.startsWith("#")||b.origin===c.origin&&b.pathname===c.pathname&&b.search===c.search?DevsiteApp.scrollToAnchor(c.hash,!0):DevsiteApp.fetchPage(c.href)}},Bja=function(a,b){let c;Array.from(a.querySelectorAll("devsite-iframe iframe")).forEach(d=>{_ds.mj(d)===b&&(c=d)});return c},F4=function(a,b){var c=_ds.Vm(12);b=_ds.Ub(c,12,b);a&&a.contentWindow&&(a=a.contentWindow)&&a.postMessage(_ds.Of(b),"*")},yja=function(a){"full"===
document.body.getAttribute("layout")&&(a=a.o.querySelectorAll('h1[tabindex="0"],h2[tabindex="0"],h3[tabindex="0"],h4[tabindex="0"],h5[tabindex="0"],h6[tabindex="0"]'))&&Array.from(a).forEach(b=>{b.removeAttribute("tabindex")})},Aja=function(a,b){a.h&&b.forEach(c=>{a.h.observe(c)})},G4=class extends _ds.Th{constructor(){super();this.oa=new _ds.x;this.ra=new _ds.x;this.m=new Set;this.ea=[];this.h=null;"IntersectionObserver"in window&&(this.h=new IntersectionObserver(a=>{for(const b of a)b.isIntersecting&&
(a=b.target,_ds.HS(new _ds.IS,a,D4),this.m.delete(a),this.h.unobserve(a))},{rootMargin:"100%"}))}connectedCallback(){this.oa.listen(window,"message",a=>xja(this,a));this.oa.listen(document.body,"devsite-appearance-updated",a=>{if((a=a.Ja.detail.preference)&&this.ea.length)for(const b of this.ea)F4(b,a)});E4(this)}disconnectedCallback(){this.h&&this.h.disconnect();this.m.clear();_ds.A(this.oa);_ds.A(this.ra)}jc(a){a&&([".devsite-article",".devsite-content-data","devsite-content-footer","devsite-notification"].forEach(b=>
{_ds.Sh(this,this.querySelector(b),a.querySelector(b))}),E4(this))}};G4.prototype.updateContent=G4.prototype.jc;G4.prototype.disconnectedCallback=G4.prototype.disconnectedCallback;G4.prototype.connectedCallback=G4.prototype.connectedCallback;try{window.customElements.define("devsite-content",G4)}catch(a){console.warn("devsite.app.customElement.DevsiteContent",a)};})(_ds_www);
