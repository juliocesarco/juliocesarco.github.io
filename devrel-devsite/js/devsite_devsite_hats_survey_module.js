(function(_ds){var window=this;var U5=function(a,b,c){return a.h.then(function(d){const e=d[b];if(!e)throw Error("Method not found: "+b);return e.apply(d,c)})},Ika=class{constructor(a){this.h=a;a.then((0,_ds.he)(function(){},this),()=>{},this)}},Jka=function(a,b,c){const d=Array(arguments.length-2);for(var e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=V5(a,b).then(function(f){return f.apply(null,d)});return new Ika(e)},W5={},V5=function(a,b){var c=W5[b];if(c)return c;c=(c=_ds.ae(b))?_ds.zl(c):(new _ds.vl(function(d,e){const f=
(new _ds.Hi(document)).createElement("SCRIPT");f.async=!0;_ds.ld(f,_ds.Cd(_ds.Rc(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){const d=_ds.ae(b);if(!d)throw Error("Failed to load "+b+" from "+a);return d});return W5[b]=c};var Kka=class{constructor(a){this.h=a}o(a){_ds.Dl(U5(this.h,"requestSurvey",arguments),()=>{},this)}m(a){_ds.Dl(U5(this.h,"presentSurvey",arguments),()=>{},this)}j(a){_ds.Dl(U5(this.h,"dismissSurvey",arguments),()=>{},this)}},X5=_ds.Og("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");_ds.Dl(V5(X5,"help.service.Lazy.create"),()=>{});var Y5=function(){return"devsite-hats-survey"},b6=function(){if(Z5){let a;null==(a=$5)||a.j({surveyMetadata:{sessionId:Z5}});return a6.promise}return Promise.resolve()},Lka=async function(a){var b=await _ds.r();const c=_ds.t(b.getConfig(),18);var d=a.getAttribute("listnr-id");d?(b={locale:b.getLocale()||"es",apiKey:c},d=Jka(X5,"help.service.Lazy.create",d,{apiKey:b.apiKey||b.apiKey,environment:b.environment||b.environment,helpCenterPath:b.helpCenterPath||b.helpCenterPath,locale:b.locale||b.locale||
"es".replace(/-/g,"_"),nonce:b.nonce||b.nonce,productData:b.productData||b.productData,receiverUri:b.receiverUri||b.receiverUri,renderApiUri:b.renderApiUri||b.renderApiUri,theme:b.theme||b.theme,window:b.window||b.window}),$5=new Kka(d),a.h=$5):console.warn('<devsite-hats-survey> missing attribute "listnr-id"')},Mka=function(a,b){let c;null==(c=a.h)||c.m({productData:{customData:{pageUrl:_ds.Dj().toString()}},surveyData:b,colorScheme:1,authuser:0,customZIndex:1E4,listener:{surveyPrompted:d=>{Z5=d.sessionId||
null;a6=new _ds.Xl;c6=a6.h},surveyClosed:()=>{Z5=d6=null;c6()}}})},f6=class extends _ds.Th{constructor(a){super();this.h=null;a&&(this.h=$5=a)}async connectedCallback(){d6=this;const a=this.getAttribute("hats-id");a&&a!==e6&&(await b6(),this.h||await Lka(this),e6=a,await this.Qo(a))}disconnectedCallback(){d6=null;_ds.Wl(Nka,document.body,"devsite-page-changed",()=>{d6||(b6(),e6=null)})}async Qo(a){await _ds.r();let b;null==(b=this.h)||b.o({triggerId:a,callback:c=>{c.surveyData&&Mka(this,c.surveyData)},
authuser:0,enableTestingMode:!1})}};f6.prototype.renderSurvey=f6.prototype.Qo;f6.prototype.disconnectedCallback=f6.prototype.disconnectedCallback;f6.prototype.connectedCallback=f6.prototype.connectedCallback;f6.closeCurrentSurvey=b6;f6.getTagName=Y5;var e6=null,Z5=null,d6=null,a6=new _ds.Xl,c6=a6.h,Nka=new _ds.x,$5=void 0;try{window.customElements.define(Y5(),f6)}catch(a){console.warn("devsite.app.customElement.DevsiteHatsSurvey",a)};})(_ds_www);