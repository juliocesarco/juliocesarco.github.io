(function(_ds){var window=this;var loa=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="loading" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Loading</div><div class="devsite-snackbar-action"><devsite-spinner single-color="#ffffff"></devsite-spinner></div></div></div>')},moa=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="signin-state-changed" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Your signed in state has changed.</div><button class="devsite-snackbar-action devsite-snackbar-action--reload">Reload</button><button class="devsite-snackbar-action devsite-snackbar-action--dismiss">OK</button></div></div>')},
noa=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="refresh" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">A new version is available</div><button class="devsite-snackbar-action">Refresh</button></div></div>')},ooa=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Something went wrong. Please try again.</div><button class="devsite-snackbar-action">Retry</button></div></div>')},
poa=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="copied-to-clipboard" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Copied to clipboard</div></div></div>')},qoa=function(a){a=a||{};a=a.Xw;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Google uses cookies to deliver its servicios, to personalize ads, and to analyze traffic. You can adjust your privacidad controls anytime in your <a href="//myaccount.google.com/intro/data-and-personalization">Google settings</a>.</div><a href="'+
((a?_ds.W(_ds.pw(a)):"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.Q)(a+'More details</a><button class="devsite-snackbar-action">OK</button></div></div>')},f8=function(a){a=a||{};a=a.Xw;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">This site uses cookies from Google to deliver its servicios and to analyze traffic.</div><a href="'+((a?_ds.W(_ds.pw(a)):
"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.Q)(a+'More details</a><button class="devsite-snackbar-action">OK</button></div></div>')},roa=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="support-attachment-error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Unsupported file type.</div><button class="devsite-snackbar-action">OK</button></div></div>')},soa=function(a){const b=a.message,
c=a.link,d=a.fH;a='<div class="devsite-snackbar-snack" type="'+_ds.W(a.fJ)+'" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+_ds.R(b)+'</div><button class="devsite-snackbar-action">';a=a+'No, thanks</button><a href="'+(_ds.W(_ds.pw(c))+'" class="devsite-snackbar-link button" target="_blank">');a=d?a+_ds.R(d):a+"OK";return(0,_ds.Q)(a+"</a></div></div>")},toa=function(a){const b=a.Hy,c=a.link,d=a.Fe,e=a.Wi;a='<div class="devsite-snackbar-snack" type="custom" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+
_ds.R(a.message)+"</div>";e&&(a+='<button class="devsite-snackbar-action">OK</button>');a+=(_ds.Rv(c)&&_ds.Rv(b)?'<a href="'+_ds.W(_ds.pw(c))+'"'+(d?' target="_blank"':"")+' class="devsite-snackbar-link button">'+_ds.R(b)+"</a>":"")+"</div></div>";return(0,_ds.Q)(a)};var i8=function(a,b,c=null,d=!1){b&&(_ds.og(b,_ds.Zf,()=>{_ds.cj(b);a.m=null;if(c)g8(a,c,d);else{const e=a.h.length?a.h.shift():null;null!==e&&h8(a,e)}}),b.removeAttribute("show"))},j8=function(a,b,c=!1){a.appendChild(b);window.requestAnimationFrame(()=>{g8(a,b,c)})},k8=function(a){i8(a,a.querySelector('*[type^="cookie-notification"]'))},l8=function(a){i8(a,a.querySelector('*[type^="support-attachment-error"]'))},m8=function(a){i8(a,a.querySelector('*[type^="signin-state-changed"]'))},h8=function(a,
b){switch(b){case "loading":a.showLoading();break;case "refresh":uoa(a);break;case "error":a.showError();break;case "copied-to-clipboard":var c=_ds.J(poa);j8(a,c,!0);break;case "cookie-notification":voa(a);break;case "support-attachment-error":woa(a);break;case "signin-state-changed":xoa(a)}if(null==b?0:b.startsWith("notification-")){c=a.getAttribute(`${b}-message`);const d=a.getAttribute(`${b}-link`),e=a.getAttribute(`${b}-link-txt`);n8(a,b,c,d,e,a.hasAttribute(`${b}-store-key`))}},uoa=function(a){const b=
_ds.J(noa);_ds.pg(b.querySelector(".devsite-snackbar-action"),"click",()=>{_ds.Ui().location.reload()});j8(a,b)},voa=function(a){if(a.storage.isAvailable()&&!a.storage.get("devsite-eu-cookie")){var b=f8;if(a.hasAttribute("data-cookie-notice"))switch(Number(a.getAttribute("data-cookie-notice"))){case 2:b=qoa;break;default:b=f8}if(a.hasAttribute("data-cookie-policy")){const c=a.getAttribute("data-cookie-policy");b=_ds.J(b,{Xw:c})}else b=_ds.J(b);_ds.og(b.querySelector(".devsite-snackbar-action"),"click",
()=>{a.storage.isAvailable()&&a.storage.set("devsite-eu-cookie","1");k8(a)});j8(a,b)}else b=a.h.length?a.h.shift():null,null!==b&&h8(a,b)},woa=function(a){const b=_ds.J(roa);j8(a,b);_ds.og(b.querySelector(".devsite-snackbar-action"),"click",()=>{l8(a)})},xoa=function(a){m8(a);const b=_ds.J(moa);j8(a,b,!1);_ds.pg(b.querySelector(".devsite-snackbar-action--reload"),"click",async()=>{await (await _ds.r()).reload();m8(a)});_ds.pg(b.querySelector(".devsite-snackbar-action--dismiss"),"click",async()=>{await (await _ds.r()).reload();
m8(a)})},g8=function(a,b,c=!1){window.clearTimeout(a.ea);a.m?i8(a,a.m,b,c):(a.m=b,window.requestAnimationFrame(()=>{b.setAttribute("show","")}),c&&(a.ea=window.setTimeout(()=>{a.removeAttribute("type");i8(a,b)},5E3)))},n8=function(a,b,c,d,e,f){if(c&&d){const g="devsite-notification"+d;if(!f||a.storage.isAvailable()&&!a.storage.get(g)){b=_ds.J(soa,{fJ:b,message:c,link:d,fH:e});j8(a,b);const h=new _ds.x(b);h.listen(b,"click",k=>{k.stopPropagation();if(k.target.classList.contains("devsite-snackbar-link")||
k.target.classList.contains("devsite-snackbar-action"))f&&a.storage.isAvailable()&&a.storage.set(g,"1"),a.o(),_ds.A(h)})}}},o8=class extends _ds.Th{constructor(){super();this.h=[];this.ea=-1;this.m=null;this.eventHandler=new _ds.x(this);this.storage=new _ds.An}static get observedAttributes(){return["type"]}connectedCallback(){this.eventHandler.listen(document.body,"devsite-show-custom-snackbar-msg",this.oa);this.eventHandler.listen(document.body,"devsite-show-notification-snackbar-msg",this.ra);this.eventHandler.listen(document.body,
"devsite-hide-notification-snackbar-msg",this.o)}disconnectedCallback(){_ds.A(this.eventHandler)}oa(a){this.setAttribute("type","custom");var b;if(a=null==(b=a.Ja)?void 0:b.detail){b=!!a.showClose;var c=!0;a.href&&(c=(new URL(a.href)).origin!==document.location.origin);var d=_ds.J(toa,{message:a.msg,Hy:a.linkText,link:a.href,Fe:c,Wi:b});b&&_ds.og(d.querySelector(".devsite-snackbar-action"),"click",()=>{i8(this,d)});j8(this,d,!b)}}attributeChangedCallback(a,b,c){if("type"===a){switch(b){case "loading":this.hideLoading();
break;case "refresh":i8(this,this.querySelector('*[type^="refresh"]'));break;case "error":i8(this,this.querySelector('*[type^="error"]'));break;case "copied-to-clipboard":i8(this,this.querySelector('*[type^="copied-to-clipboard"]'));break;case "cookie-notification":k8(this);break;case "support-attachment-error":l8(this);break;case "signin-state-changed":m8(this);break;case "custom":i8(this,this.querySelector('*[type^="custom"]'))}null!=b&&b.startsWith("notification-")&&this.o();if(c){let d;if(null==
(d=c)?0:d.includes(",")){let e;this.h=null==(e=c)?void 0:e.split(",");c=`${this.h.shift()}`}h8(this,c)}}}showLoading(){if(!this.querySelector('*[type^="loading"]')){var a=_ds.J(loa);j8(this,a)}}hideLoading(){i8(this,this.querySelector('*[type^="loading"]'))}showError(){const a=_ds.J(ooa);_ds.pg(a.querySelector(".devsite-snackbar-action"),"click",()=>{_ds.Ui().location.reload()});j8(this,a)}ra(a){let b;(a=null==(b=a.Ja)?void 0:b.detail)&&n8(this,"notification-custom",a.msg,a.href,a.Hy,!0)}o(){i8(this,
this.querySelector('*[type^="notification"]'))}};o8.prototype.attributeChangedCallback=o8.prototype.attributeChangedCallback;o8.prototype.disconnectedCallback=o8.prototype.disconnectedCallback;o8.prototype.connectedCallback=o8.prototype.connectedCallback;try{window.customElements.define("devsite-snackbar",o8)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteSnackBar",a)};})(_ds_www);
