(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self,m=function(a,b){a=a.split(".");var c=d;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===b?c[e]&&c[e]!==Object.prototype[e]?c=c[e]:c=c[e]={}:c[e]=b},n=function(a){return a};var p=new Map([]);p.set("devsite-a11y-announce",{src:"/devrel-devsite/js/devsite_devsite_a11y_announce_module.js"});p.set("devsite-analytics-scope",{src:"/devrel-devsite/js/devsite_devsite_analytics_scope_module.js"});p.set("devsite-anselm",{src:"/devrel-devsite/js/devsite_devsite_anselm_module.js"});p.set("devsite-api-getstarted",{src:"/devrel-devsite/js/devsite_devsite_api_getstarted_module.js"});p.set("devsite-apix",{src:"/devrel-devsite/js/devsite_devsite_apix_module.js"});p.set("devsite-apix-index",{src:"/devrel-devsite/js/devsite_devsite_apix_index_module.js"});
p.set("devsite-apix-snippets",{src:"/devrel-devsite/js/devsite_devsite_apix_snippets_module.js"});p.set("devsite-appearance-selector",{src:"/devrel-devsite/js/devsite_devsite_appearance_selector_module.js"});p.set("devsite-author-page-insights",{src:"/devrel-devsite/js/devsite_devsite_author_page_insights_module.js"});p.set("devsite-badger",{src:"/devrel-devsite/js/devsite_devsite_badger_module.js"});p.set("devsite-badge-awarded",{src:"/devrel-devsite/js/devsite_devsite_badge_awarded_module.js"});p.set("devsite-badge-awarder",{src:"/devrel-devsite/js/devsite_devsite_badge_awarder_module.js"});
p.set("devsite-badge-redeemer",{src:"/devrel-devsite/js/devsite_devsite_badge_redeemer_module.js"});p.set("devsite-carousel",{src:"/devrel-devsite/js/devsite_devsite_carousel_module.js"});p.set("devsite-catalog",{src:"/devrel-devsite/js/devsite_devsite_catalog_module.js"});p.set("devsite-catalog-body-badges",{src:"/devrel-devsite/js/devsite_devsite_catalog_body_badges_module.js"});p.set("devsite-chart",{src:"/devrel-devsite/js/devsite_devsite_chart_module.js"});p.set("devsite-checkbox",{src:"/devrel-devsite/js/devsite_devsite_checkbox_module.js"});
p.set("devsite-code",{src:"/devrel-devsite/js/devsite_devsite_code_module.js"});p.set("devsite-content",{src:"/devrel-devsite/js/devsite_devsite_content_module.js"});p.set("devsite-codelab-catalog",{src:"/devrel-devsite/js/devsite_devsite_codelab_catalog_module.js"});p.set("devsite-countdown",{src:"/devrel-devsite/js/devsite_devsite_countdown_module.js"});p.set("devsite-credentials-dialog",{src:"/devrel-devsite/js/devsite_devsite_credentials_dialog_module.js"});p.set("devsite-cse",{src:"/devrel-devsite/js/devsite_devsite_cse_module.js"});
p.set("devsite-device",{src:"/devrel-devsite/js/devsite_devsite_device_module.js"});p.set("devsite-devprofile",{src:"/devrel-devsite/js/devsite_devsite_devprofile_module.js"});p.set("devsite-dialog",{src:"/devrel-devsite/js/devsite_devsite_dialog_module.js"});p.set("devsite-dropdown-list",{src:"/devrel-devsite/js/devsite_devsite_dropdown_list_module.js"});p.set("devsite-dynamic-content",{src:"/devrel-devsite/js/devsite_devsite_dynamic_content_module.js"});p.set("devsite-dynamic-hero",{src:"/devrel-devsite/js/devsite_devsite_dynamic_hero_module.js"});
p.set("devsite-edit-profile",{src:"/devrel-devsite/js/devsite_devsite_edit_profile_module.js"});p.set("devsite-expandable",{src:"/devrel-devsite/js/devsite_devsite_expandable_module.js"});p.set("devsite-extradory",{src:"/devrel-devsite/js/devsite_devsite_extradory_module.js"});p.set("devsite-fast-track-profile-creator",{src:"/devrel-devsite/js/devsite_devsite_fast_track_profile_creator_module.js"});p.set("devsite-feature-tooltip",{src:"/devrel-devsite/js/devsite_devsite_feature_tooltip_module.js"});p.set("devsite-feedback",{src:"/devrel-devsite/js/devsite_devsite_feedback_module.js"});
p.set("devsite-filter",{src:"/devrel-devsite/js/devsite_devsite_filter_module.js"});p.set("devsite-footer-linkboxes",{src:"/devrel-devsite/js/devsite_devsite_footer_linkboxes_module.js"});p.set("devsite-footer-promos",{src:"/devrel-devsite/js/devsite_devsite_footer_promos_module.js"});p.set("devsite-footer-utility",{src:"/devrel-devsite/js/devsite_devsite_footer_utility_module.js"});p.set("devsite-fully-clickable",{src:"/devrel-devsite/js/devsite_devsite_fully_clickable_module.js"});p.set("devsite-googler-buttons",{src:"/devrel-devsite/js/devsite_devsite_googler_buttons_module.js"});
p.set("devsite-hats-survey",{src:"/devrel-devsite/js/devsite_devsite_hats_survey_module.js"});p.set("devsite-heading-link",{src:"/devrel-devsite/js/devsite_devsite_heading_link_module.js"});p.set("devsite-iframe",{src:"/devrel-devsite/js/devsite_devsite_iframe_module.js"});p.set("devsite-info-popout",{src:"/devrel-devsite/js/devsite_devsite_info_popout_module.js"});p.set("devsite-jump-to",{src:"/devrel-devsite/js/devsite_devsite_jump_to_module.js"});p.set("devsite-jsfiddle-button",{src:"/devrel-devsite/js/devsite_devsite_jsfiddle_button_module.js"});
p.set("devsite-language-selector",{src:"/devrel-devsite/js/devsite_devsite_language_selector_module.js"});p.set("devsite-lightbox",{src:"/devrel-devsite/js/devsite_devsite_lightbox_module.js"});p.set("devsite-mathjax",{src:"/devrel-devsite/js/devsite_devsite_mathjax_module.js"});p.set("devsite-mdc",{src:"/devrel-devsite/js/devsite_devsite_mdc_module.js"});p.set("devsite-my-community",{src:"/devrel-devsite/js/devsite_devsite_my_community_module.js"});p.set("devsite-mwc",{src:"/devrel-devsite/js/devsite_devsite_mwc_module.js"});
p.set("devsite-multiple-choice",{src:"/devrel-devsite/js/devsite_devsite_multiple_choice_module.js"});p.set("devsite-nav-buttons",{src:"/devrel-devsite/js/devsite_devsite_nav_buttons_module.js"});p.set("devsite-notification",{src:"/devrel-devsite/js/devsite_devsite_notification_module.js"});p.set("devsite-pagination",{src:"/devrel-devsite/js/devsite_devsite_pagination_module.js"});p.set("devsite-panel",{src:"/devrel-devsite/js/devsite_devsite_panel_module.js"});p.set("devsite-playlist",{src:"/devrel-devsite/js/devsite_devsite_playlist_module.js"});
p.set("devsite-playlist-earnable-badges",{src:"/devrel-devsite/js/devsite_devsite_playlist_earnable_badges_module.js"});p.set("devsite-playlist-summary",{src:"/devrel-devsite/js/devsite_devsite_playlist_summary_module.js"});p.set("devsite-product-catalog",{src:"/devrel-devsite/js/devsite_devsite_product_catalog_module.js"});p.set("devsite-profile-card",{src:"/devrel-devsite/js/devsite_devsite_profile_card_module.js"});p.set("devsite-progress",{src:"/devrel-devsite/js/devsite_devsite_progress_module.js"});p.set("devsite-quiz",{src:"/devrel-devsite/js/devsite_devsite_quiz_module.js"});
p.set("devsite-recommendations",{src:"/devrel-devsite/js/devsite_devsite_recommendations_module.js"});p.set("devsite-recommendations-dropdown",{src:"/devrel-devsite/js/devsite_devsite_recommendations_dropdown_module.js"});p.set("devsite-recommendations-sidebar",{src:"/devrel-devsite/js/devsite_devsite_recommendations_sidebar_module.js"});p.set("devsite-recommended-content",{src:"/devrel-devsite/js/devsite_devsite_recommended_content_module.js"});p.set("devsite-reference-results",{src:"/devrel-devsite/js/devsite_devsite_reference_results_module.js"});
p.set("devsite-related-entities",{src:"/devrel-devsite/js/devsite_devsite_related_entities_module.js"});p.set("devsite-rich-tooltip",{src:"/devrel-devsite/js/devsite_devsite_rich_tooltip_module.js"});p.set("devsite-search",{src:"/devrel-devsite/js/devsite_devsite_search_module.js"});p.set("devsite-select",{src:"/devrel-devsite/js/devsite_devsite_select_module.js"});p.set("devsite-shell",{src:"/devrel-devsite/js/devsite_devsite_shell_module.js"});p.set("devsite-shell-activate-button",{src:"/devrel-devsite/js/devsite_devsite_shell_activate_button_module.js"});
p.set("devsite-sitemask",{src:"/devrel-devsite/js/devsite_devsite_sitemask_module.js"});p.set("devsite-snackbar",{src:"/devrel-devsite/js/devsite_devsite_snackbar_module.js"});p.set("devsite-sort",{src:"/devrel-devsite/js/devsite_devsite_sort_module.js"});p.set("devsite-spinner",{src:"/devrel-devsite/js/devsite_devsite_spinner_module.js"});p.set("devsite-support-form",{src:"/devrel-devsite/js/devsite_devsite_support_form_module.js"});p.set("devsite-tabs",{src:"/devrel-devsite/js/devsite_devsite_tabs_module.js"});p.set("devsite-toc",{src:"/devrel-devsite/js/devsite_devsite_toc_module.js"});
p.set("devsite-topic",{src:"/devrel-devsite/js/devsite_devsite_topic_module.js"});p.set("devsite-tooltip",{src:"/devrel-devsite/js/devsite_devsite_tooltip_module.js"});p.set("devsite-tracking-question",{src:"/devrel-devsite/js/devsite_devsite_tracking_question_module.js"});p.set("devsite-user",{src:"/devrel-devsite/js/devsite_devsite_user_module.js"});p.set("devsite-var",{src:"/devrel-devsite/js/devsite_devsite_var_module.js"});p.set("devsite-version-selector",{src:"/devrel-devsite/js/devsite_devsite_version_selector_module.js"});
p.set("devsite-video",{src:"/devrel-devsite/js/devsite_devsite_video_module.js"});p.set("devsite-visibility-analytics",{src:"/devrel-devsite/js/devsite_devsite_visibility_analytics_module.js"});p.set("devsite-vplus",{src:"/devrel-devsite/js/devsite_devsite_vplus_module.js"});p.set("devsite-wall-acknowledgement",{src:"/devrel-devsite/js/devsite_devsite_wall_acknowledgement_module.js"});p.set("devsite-youtube",{src:"/devrel-devsite/js/devsite_devsite_youtube_module.js"});p.set("google-codelab",{src:"/devrel-devsite/js/devsite_google_codelab_module.js"});
p.set("google-codelab-about",{src:"/devrel-devsite/js/devsite_google_codelab_about_module.js"});p.set("google-codelab-analytics",{src:"/devrel-devsite/js/devsite_google_codelab_analytics_module.js"});p.set("google-codelab-step",{src:"/devrel-devsite/js/devsite_google_codelab_step_module.js"});p.set("google-codelab-survey",{src:"/devrel-devsite/js/devsite_google_codelab_survey_module.js"});p.set("cloud-mdc-rich-tooltip",{src:"/devrel-devsite/js/devsite_cloud_mdc_rich_tooltip_module.js"});p.set("cloud-shell-button",{src:"/devrel-devsite/js/devsite_cloud_shell_button_module.js"});
p.set("cloud-shell-pane",{src:"/devrel-devsite/js/devsite_cloud_shell_pane_module.js"});p.set("cloudx-additional-tabs",{src:"/devrel-devsite/js/devsite_cloudx_additional_tabs_module.js"});p.set("cloudx-boq-frame",{src:"/devrel-devsite/js/devsite_cloudx_boq_frame_module.js"});p.set("cloudx-button-code",{src:"/devrel-devsite/js/devsite_cloudx_button_code_module.js"});p.set("cloudx-carousel",{src:"/devrel-devsite/js/devsite_cloudx_carousel_module.js"});p.set("cloudx-catalog-innovators",{src:"/devrel-devsite/js/devsite_cloudx_catalog_innovators_module.js"});
p.set("cloudx-chat",{src:"/devrel-devsite/js/devsite_cloudx_chat_module.js"});p.set("cloudx-chrome-policies",{src:"/devrel-devsite/js/devsite_cloudx_chrome_policies_module.js"});p.set("cloudx-collapse",{src:"/devrel-devsite/js/devsite_cloudx_collapse_module.js"});p.set("cloudx-compliance",{src:"/devrel-devsite/js/devsite_cloudx_compliance_module.js"});p.set("cloudx-content-switcher",{src:"/devrel-devsite/js/devsite_cloudx_content_switcher_module.js"});p.set("cloudx-cookie-banner",{src:"/devrel-devsite/js/devsite_cloudx_cookie_banner_module.js"});
p.set("cloudx-cookie-settings",{src:"/devrel-devsite/js/devsite_cloudx_cookie_settings_module.js"});p.set("cloudx-demo",{src:"/devrel-devsite/js/devsite_cloudx_demo_module.js"});p.set("cloudx-experiments",{src:"/devrel-devsite/js/devsite_cloudx_experiments_module.js"});p.set("cloudx-experiment-ids",{src:"/devrel-devsite/js/devsite_cloudx_experiment_ids_module.js"});p.set("cloudx-form",{src:"/devrel-devsite/js/devsite_cloudx_form_module.js"});p.set("cloudx-free-trial-eligible-content",{src:"/devrel-devsite/js/devsite_cloudx_free_trial_eligible_content_module.js"});
p.set("cloudx-free-trial-eligible-store",{src:"/devrel-devsite/js/devsite_cloudx_free_trial_eligible_store_module.js"});p.set("cloudx-gallery",{src:"/devrel-devsite/js/devsite_cloudx_gallery_module.js"});p.set("cloudx-jump-menu",{src:"/devrel-devsite/js/devsite_cloudx_jump_menu_module.js"});p.set("cloudx-logo-switcher",{src:"/devrel-devsite/js/devsite_cloudx_logo_switcher_module.js"});p.set("cloudx-maps-platform",{src:"/devrel-devsite/js/devsite_cloudx_maps_platform_module.js"});p.set("cloudx-munchkin",{src:"/devrel-devsite/js/devsite_cloudx_munchkin_module.js"});
p.set("cloudx-popup",{src:"/devrel-devsite/js/devsite_cloudx_popup_module.js"});p.set("cloudx-pricing-controls",{src:"/devrel-devsite/js/devsite_cloudx_pricing_controls_module.js"});p.set("cloudx-pricing-instance",{src:"/devrel-devsite/js/devsite_cloudx_pricing_instance_module.js"});p.set("cloudx-pricing-socket",{src:"/devrel-devsite/js/devsite_cloudx_pricing_socket_module.js"});p.set("cloudx-pricing-table",{src:"/devrel-devsite/js/devsite_cloudx_pricing_table_module.js"});p.set("cloudx-print",{src:"/devrel-devsite/js/devsite_cloudx_print_module.js"});
p.set("cloudx-recaptcha",{src:"/devrel-devsite/js/devsite_cloudx_recaptcha_module.js"});p.set("cloudx-select-dropdown",{src:"/devrel-devsite/js/devsite_cloudx_select_dropdown_module.js"});p.set("cloudx-share-links",{src:"/devrel-devsite/js/devsite_cloudx_share_links_module.js"});p.set("cloudx-sticky-columns",{src:"/devrel-devsite/js/devsite_cloudx_sticky_columns_module.js"});p.set("cloudx-switch",{src:"/devrel-devsite/js/devsite_cloudx_switch_module.js"});p.set("cloudx-table",{src:"/devrel-devsite/js/devsite_cloudx_table_module.js"});
p.set("cloudx-tabs",{src:"/devrel-devsite/js/devsite_cloudx_tabs_module.js"});p.set("cloudx-tabs-nav",{src:"/devrel-devsite/js/devsite_cloudx_tabs_nav_module.js"});p.set("cloudx-tags",{src:"/devrel-devsite/js/devsite_cloudx_tags_module.js"});p.set("cloudx-track",{src:"/devrel-devsite/js/devsite_cloudx_track_module.js"});p.set("cloudx-user",{src:"/devrel-devsite/js/devsite_cloudx_user_module.js"});p.set("cloudx-utils-init",{src:"/devrel-devsite/js/devsite_cloudx_utils_init_module.js"});p.set("devsite-analytics",{src:"/devrel-devsite/js/devsite_devsite_analytics_module.js"});
p.set("devsite-bookmark",{src:"/devrel-devsite/js/devsite_devsite_bookmark_module.js"});p.set("devsite-book-nav",{src:"/devrel-devsite/js/devsite_devsite_book_nav_module.js"});p.set("devsite-header",{src:"/devrel-devsite/js/devsite_devsite_header_module.js"});p.set("devsite-thumb-rating",{src:"/devrel-devsite/js/devsite_devsite_thumb_rating_module.js"});p.set("devsite-selector",{src:"/devrel-devsite/js/devsite_devsite_selector_module.js"});p.set("goog-split-pane",{src:"/devrel-devsite/js/devsite_goog_split_pane_module.js"});
m("DevsiteAppAuthorizedElements",p);m("DevsiteAppTenantCustomized",!0);var r={uc:0,tc:1,Vb:6,Tb:8,cc:12,dc:14,ec:17,jc:18,lc:21,nc:25,pa:37,oc:38,Ca:40,lb:45,X:47,C:50,O:52,K:62,Sa:63,Nb:66,Db:70,F:73,rb:74,Z:75,Kb:76,Oa:77,Qa:80,L:81,fb:82,Ka:83,Bb:85,ga:87,Fa:89,Fb:90,Ga:91,Pa:92,V:93,rc:94,Ja:95,U:96,Ob:97,G:98,I:99,mc:100,Ba:101,La:102,Jb:103,qc:104,ka:105,W:106,za:107,na:108,xb:109,ha:110,wa:111,pc:112,Lb:113,oa:114,S:115,ra:116,jb:117,eb:118,Ha:119,Eb:120,Zb:121,Mb:122,hc:123,Ub:124,Za:125,sb:126,Aa:127,ac:128,nb:129,ob:130,ua:131,Xa:132,H:133,Ta:134,Da:135,kb:136,
J:137,sc:138,ub:139,Xb:140,Sb:141,mb:142,bb:143,vb:144,R:145,qb:146,Ua:147,ab:148,Gb:149,ma:150,fa:151,Va:152,ta:154,Y:155,kc:156,ic:157,Ra:158,sa:159,M:160,aa:161,la:162,Yb:163,Ib:164,qa:165,da:166,Pb:167,ea:168,Ya:169,Wa:170,Ia:171,ya:172,Hb:173,pb:174,yb:175,zb:176,tb:177,Ab:178,Wb:179,fc:180,ba:181,ja:182,T:183,D:184,Cb:185,Ma:186,gb:187,ca:188,ia:189,ib:190,N:191,P:192,cb:193,Qb:194,Ea:195,wb:196,xa:197,Rb:198,bc:199,hb:200,va:201,Na:202};var t={},u=null;var aa="undefined"!==typeof Uint8Array;const v="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function w(a,b){if(v)return a[v]|=b;if(void 0!==a.m)return a.m|=b;Object.defineProperties(a,{m:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function x(a){let b;v?b=a[v]:b=a.m;return null==b?0:b}function y(a,b){v?a[v]=b:void 0!==a.m?a.m=b:Object.defineProperties(a,{m:{value:b,configurable:!0,writable:!0,enumerable:!1}})}function z(a){w(a,1);return a};var A={};function B(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let C;var D;const E=[];y(E,23);D=Object.freeze(E);var F=function(a){if(x(a.h)&2)throw Error("Cannot mutate an immutable Message");};function G(a){var b=a.length;(b=b?a[b-1]:void 0)&&B(b)?b.g=1:a.push({g:1})};var H=function(a){const b=a.l+a.j;return a.i||(a.i=a.h[b]={})},I=function(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:c&&a.i&&(c=a.i[b],null!=c)?c:a.h[b+a.j]},J=function(a,b,c,e){a.o&&(a.o=void 0);b>=a.l||e?H(a)[b]=c:(a.h[b+a.j]=c,(a=a.i)&&b in a&&delete a[b])};
function K(a,b,c,e){let f=I(a,b,!1);Array.isArray(f)||(f=D);const g=x(f);g&1||z(f);if(e)g&2||w(f,2),c&1||Object.freeze(f);else{e=!(c&2);const h=g&2;c&1||!h?e&&g&16&&!h&&(a=f,v?a[v]&&(a[v]&=-17):void 0!==a.m&&(a.m&=-17)):(f=z(Array.prototype.slice.call(f)),J(a,b,f,!1))}return f}
function L(a,b){var c=!!(x(a.h)&2);let e=K(a,b,1,c);var f=x(e);if(!(f&4)){Object.isFrozen(e)&&(e=z(e.slice()),J(a,b,e,!1));let g=0,h=0;for(;g<e.length;g++){const k=e[g];null!=k&&(e[h++]=k)}h<g&&(e.length=h);w(e,5);c&&(w(e,2),Object.freeze(e))}!c&&(f&2||Object.isFrozen(e))&&(e=Array.prototype.slice.call(e),w(e,5),c=e,null==c?c=D:(f=x(c),1!==(f&1)&&(Object.isFrozen(c)&&(c=Array.prototype.slice.call(c)),y(c,f|1))),F(a),J(a,b,c,!1));return e}function ba(a){F(a);J(a,2,"es")}
var M=function(a,b){a=I(a,b);return null==a?"":a},N=function(a,b){a=I(a,b);a=null==a?a:!!a;return null==a?!1:a};let O;function ca(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(x(a)&128))return a=Array.prototype.slice.call(a),G(a),a}else if(aa&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!u){u={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=c.concat(e[f].split(""));t[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===u[k]&&(u[k]=h)}}}b=t[b];
c=Array(Math.floor(a.length/3));e=b[64]||"";for(f=g=0;g<a.length-2;g+=3){var l=a[g],q=a[g+1];k=a[g+2];h=b[l>>2];l=b[(l&3)<<4|q>>4];q=b[(q&15)<<2|k>>6];k=b[k&63];c[f++]=""+h+l+q+k}h=0;k=e;switch(a.length-g){case 2:h=a[g+1],k=b[(h&15)<<2]||e;case 1:a=a[g],c[f]=""+b[a>>2]+b[(a&3)<<4|h>>4]+k+e}return c.join("")}}return a};function da(a,b,c,e){if(null!=a){if(Array.isArray(a))a=fa(a,b,c,void 0!==e);else if(B(a)){const f={};for(let g in a)f[g]=da(a[g],b,c,e);a=f}else a=b(a,e);return a}}function fa(a,b,c,e){const f=x(a);e=e?!!(f&16):void 0;a=Array.prototype.slice.call(a);for(let g=0;g<a.length;g++)a[g]=da(a[g],b,c,e);c(f,a);return a}function ha(a){return a.B===A?a.toJSON():ca(a)}function ia(a,b){a&128&&G(b)};var ka=function(){var a=P.h;C=!0;try{return JSON.stringify(a.toJSON(),ja)}finally{C=!1}},Q=class{constructor(a){var b=la;null==a&&(a=O);O=void 0;var c=this.constructor.h||0,e=0<c,f=this.constructor.i,g=!1;if(null==a){a=f?[f]:[];var h=48;var k=!0;e&&(c=0,h|=128);y(a,h)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();let l=h=w(a,0);if(k=0!==(16&l))(g=0!==(32&l))||(l|=32);if(e)if(128&l)c=0;else{if(0<a.length){const q=a[a.length-1];if(B(q)&&"g"in q){c=0;l|=128;delete q.g;let ea=!0;
for(let Na in q){ea=!1;break}ea&&a.pop()}}}else if(128&l)throw Error();h!==l&&y(a,l)}this.j=(f?0:-1)-c;this.h=a;a:{f=this.h.length;c=f-1;if(f&&(f=this.h[c],B(f))){this.i=f;this.l=c-this.j;break a}this.l=Number.MAX_VALUE}if(!e&&this.i&&"g"in this.i)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(b){e=k&&!g&&!0;k=this.l;let l;for(g=0;g<b.length;g++)c=b[g],c<k?(c+=this.j,(f=a[c])?ma(f,e):a[c]=D):(l||(l=H(this)),(f=l[c])?ma(f,e):l[c]=D)}}toJSON(){const a=this.h;
return C?a:fa(a,ha,ia)}};function ma(a,b){if(Array.isArray(a)){var c=x(a),e=1;!b||c&2||(e|=16);(c&e)!==e&&y(a,c|e)}}Q.prototype.B=A;Q.prototype.toString=function(){return this.h.toString()};function ja(a,b){return ca(b)};var oa=function(){var a=`${GoogleDevelopersObject}`.replace("\n","");var b=na;if(null==a||""==a)b=new b;else{a=JSON.parse(a);if(!Array.isArray(a))throw Error(void 0);w(a,16);O=a;b=new b(a);O=void 0}return b},na=class extends Q{getTenantId(){var a=I(this,1);return null==a?0:a}getLocale(){return M(this,2)}getInsecureHost(){return M(this,7)}},la=[10,12,13,21,22];var R;var S=class{constructor(a,b){this.h=b===pa?a:""}toString(){return this.h+""}},pa={};var qa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),ra=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var e=a[c].indexOf("="),f=null;if(0<=e){var g=a[c].substring(0,e);f=a[c].substring(e+1)}else g=a[c];b(g,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var T=function(a){this.l=this.v=this.j="";this.u=null;this.o=this.s="";this.h=!1;if(a instanceof T){this.h=a.h;sa(this,a.j);this.v=a.v;this.l=a.l;ta(this,a.u);this.s=a.s;var b=a.i;var c=new U;c.j=b.j;b.h&&(c.h=new Map(b.h),c.i=b.i);ua(this,c);this.o=a.o}else a&&(b=String(a).match(qa))?(this.h=!1,sa(this,b[1]||"",!0),this.v=V(b[2]||""),this.l=V(b[3]||"",!0),ta(this,b[4]),this.s=V(b[5]||"",!0),ua(this,b[6]||"",!0),this.o=V(b[7]||"")):(this.h=!1,this.i=new U(null,this.h))};
T.prototype.toString=function(){var a=[],b=this.j;b&&a.push(W(b,va,!0),":");var c=this.l;if(c||"file"==b)a.push("//"),(b=this.v)&&a.push(W(b,va,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,null!=c&&a.push(":",String(c));if(c=this.s)this.l&&"/"!=c.charAt(0)&&a.push("/"),a.push(W(c,"/"==c.charAt(0)?wa:xa,!0));(c=this.i.toString())&&a.push("?",c);(c=this.o)&&a.push("#",W(c,ya));return a.join("")};
var sa=function(a,b,c){a.j=c?V(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))},ta=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.u=b}else a.u=null},ua=function(a,b,c){b instanceof U?(a.i=b,za(a.i,a.h)):(c||(b=W(b,Aa)),a.i=new U(b,a.h))},Ba=function(a){return a instanceof T?new T(a):new T(a)},V=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},W=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Ca),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,
"%$1")),a):null},Ca=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},va=/[#\/\?@]/g,xa=/[#\?:]/g,wa=/[#\?]/g,Aa=/[#\?@]/g,ya=/#/g,U=function(a,b){this.i=this.h=null;this.j=a||null;this.l=!!b},X=function(a){a.h||(a.h=new Map,a.i=0,a.j&&ra(a.j,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))};U.prototype.add=function(a,b){X(this);this.j=null;a=Y(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i+=1;return this};
var Da=function(a,b){X(a);b=Y(a,b);a.h.has(b)&&(a.j=null,a.i-=a.h.get(b).length,a.h.delete(b))},Ea=function(a,b){X(a);b=Y(a,b);return a.h.has(b)};U.prototype.forEach=function(a,b){X(this);this.h.forEach(function(c,e){c.forEach(function(f){a.call(b,f,e,this)},this)},this)};var Fa=function(a,b){X(a);let c=[];if("string"===typeof b)Ea(a,b)&&(c=c.concat(a.h.get(Y(a,b))));else for(a=Array.from(a.h.values()),b=0;b<a.length;b++)c=c.concat(a[b]);return c};
U.prototype.set=function(a,b){X(this);this.j=null;a=Y(this,a);Ea(this,a)&&(this.i-=this.h.get(a).length);this.h.set(a,[b]);this.i+=1;return this};U.prototype.get=function(a,b){if(!a)return b;a=Fa(this,a);return 0<a.length?String(a[0]):b};
U.prototype.toString=function(){if(this.j)return this.j;if(!this.h)return"";const a=[],b=Array.from(this.h.keys());for(var c=0;c<b.length;c++){var e=b[c];const g=encodeURIComponent(String(e)),h=Fa(this,e);for(e=0;e<h.length;e++){var f=g;""!==h[e]&&(f+="="+encodeURIComponent(String(h[e])));a.push(f)}}return this.j=a.join("&")};
var Y=function(a,b){b=String(b);a.l&&(b=b.toLowerCase());return b},za=function(a,b){b&&!a.l&&(X(a),a.j=null,a.h.forEach(function(c,e){var f=e.toLowerCase();if(e!=f&&(Da(this,e),Da(this,f),0<c.length)){this.j=null;e=this.h;var g=e.set;f=Y(this,f);var h=c.length;if(0<h){const k=Array(h);for(let l=0;l<h;l++)k[l]=c[l];h=k}else h=[];g.call(e,f,h);this.i+=c.length}},a));a.l=b};/*

 SPDX-License-Identifier: Apache-2.0
*/
const Ga={};function Ha(a,b){var c=Ga[a];if(void 0!==c&&(!c.A||Date.now()<=c.A+3E5))return c.p;c=new Promise((f,g)=>{b.onload=()=>f(b);b.onerror=h=>{b.parentNode&&b.parentNode.removeChild(b);g(h)};document.head.appendChild(b)});const e={A:0,p:c};c.catch(()=>e.A=+new Date);Ga[a]=e;return c}
var Ia=function(a){a=Ba(a);const b=document.createElement("script");var c=a.toString();c=null===c?"null":void 0===c?"undefined":c;if(void 0===R){var e=null;var f=d.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch(k){d.console&&d.console.error(k.message)}R=e}else R=e}c=(e=R)?e.createScriptURL(c):c;c=new S(c,pa);b.src=c instanceof S&&c.constructor===S?c.h:"type_error:TrustedResourceUrl";var g;let h;(g=(c=null==(h=(g=(b.ownerDocument&&
b.ownerDocument.defaultView||window).document).querySelector)?void 0:h.call(g,"script[nonce]"))?c.nonce||c.getAttribute("nonce")||"":"")&&b.setAttribute("nonce",g);return Ha(a.toString(),b)};class Ja{constructor(){this.promise=new Promise(a=>{this.h=a})}};var Z=function(a="Devsite has failed to load."){throw Error(a);},La=async function(){var a=P;const b=new Ja;m("__devsiteAppReadyResolver",b.h);m("__devsiteAppReadyPromise",b.promise);m("DevsiteApp.whenReady",()=>b.promise);if(L(a.h,12).length)try{await Promise.all(L(a.h,12).map(f=>{f=Ba(f);const g=document.createElement("link");g.setAttribute("rel","stylesheet");g.setAttribute("type","text/css");g.setAttribute("href",f.toString());return Ha(f.toString(),g)}))}catch(f){Z(`Failed to load Devsite App dependencies: ${f.message}`)}const c=
d.DevsiteAppTenantCustomized?M(a.h,6):M(a.h,5);try{await Ia(`${c}${Ka(a)}`)}catch(f){if("es"!==a.h.getLocale()){ba(a.h);try{await Ia(`${c}${M(a.h,4)}`)}catch(g){Z(`Failed to load Devsite App binary: ${g.message}`)}}else Z(`Failed to load Devsite App binary: ${f.message}`)}const e=document;if("complete"!==e.readyState&&"interactive"!==e.readyState){const f=new Ja;e.addEventListener("readystatechange",()=>{"interactive"!==e.readyState&&"complete"!==e.readyState||f.h()});await f.promise}},Ka=function(a){const b=
a.h.getLocale();a=M(a.h,4);return b&&"es"!==b?a.replace(/\.js$/,`__${b.toLowerCase().replace("-","_")}.js`):a};
const P=new class{constructor(){this.i=null;this.h=new na;this.j=[];this.l=a=>{this.j.push(a)};this.s=()=>{this.o()};if(d.__globalAppLoader)return d.__globalAppLoader;try{this.h=oa()}catch(a){Z("GoogleDevelopersObject missing or invalid")}GoogleDevelopersObject=null;m("__globalAppLoader",this);m("DevsiteApp.hasFlagAccess",a=>this.hasFlagAccess(a));m("DevsiteApp.hasMendelFlagAccess",(a,b)=>this.hasMendelFlagAccess(a,b))}o(){var a=document.querySelector("devsite-content");a&&(window.removeEventListener("message",
this.l),a.removeEventListener("devsite-content-updated",this.s));a=window;for(const b of this.j)a.dispatchEvent(b);this.j=[]}getEnv(){if(N(this.h,11))return"PROD";const a=document.location.hostname;return a.endsWith("test.devsite.corp.google.com")||a.endsWith("test.devsite-v2-staging.googleplex.com")?"TEST":a.endsWith(".devsite.corp.google.com")||a.endsWith("devsite-v2-staging.googleplex.com")?"STAGE":"DEV"}hasFlagAccess(a){a:{var b=this.getEnv();var c=this.h;c=K(c,13,0,!!(x(c.h)&2));var e=new URL(document.location.toString());
e=new T(e.href);const f=Object.keys(r);if("PROD"!==b)for(const g of f)if(r[g]===a&&(b=e.i.get(g),void 0!==b)){a="true"===b;break a}a=Array.from(c).includes(a)}return a}hasMendelFlagAccess(a,b){a:{var c=this.getEnv();var e=L(this.h,22);var f=new URL(document.location.toString());f=new T(f.href);a=a+"__"+b;if("PROD"!==c&&(c=f.i.get(a),void 0!==c)){e="true"===c;break a}e=Array.from(e).includes(a)}return e}},Ma=document.querySelector("devsite-content");
Ma&&(window.addEventListener("message",P.l),Ma.addEventListener("devsite-content-updated",P.o.bind(P)));(async function(){const a=window;if("WeakMap"in a&&"performance"in a&&"now"in a.performance)return P.i||(P.i=La()),P.i})().then(()=>{N(P.h,9)?(d.DevsiteAppFrameboxInit||Z("Failed to load Devsite App binary"),DevsiteAppFrameboxInit(ka(),d.DevsiteAppAuthorizedElements)):(d.DevsiteAppInit||Z("Failed to load Devsite App binary"),DevsiteAppInit(ka(),d.DevsiteAppAuthorizedElements))});}).call(this);
