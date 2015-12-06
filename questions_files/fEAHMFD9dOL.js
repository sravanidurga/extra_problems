/*!CK:2484021617!*//*1448852589,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["4LsJ8"]); }

__d('BaseUnitCarousel',['DOM','tidyEvent','Animation','Ease','Locale','csx','Event'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=39,p=3;function q(r){'use strict';this.config=r;this.positionProperty=l.isRTL()?'margin-right':'margin-left';var s=r.elements;this.loggedItems={};this.itemWidth=r.item_width;this.visibleCount=r.visible_count;this.visibleIndex=0;this.slideCount=r.slide_count?r.slide_count:p;this.slideAdjust=r.slide_adjust?r.slide_adjust:o;this.carousel=s.node;this.circularCarousel=r.circular_carousel;this.startOffset=r.start_offset;this.position=this.startOffset;this.grid=s.grid;if(this.grid.childElementCount<=2*this.slideCount)this.circularCarousel=false;if(this.circularCarousel){for(var t=0;t<this.slideCount;t++)this.grid.insertBefore(this.grid.lastChild,this.grid.firstChild);this.$BaseUnitCarousel1(this.slideCount);}this.grid.style[this.positionProperty]=this.position+'px';this.grid.style.width=this.itemWidth*this.visibleCount+'px';this.serviceID=s.service_id;this.location=s.location;this.pager=s.pager;this.enableAutoScrolling=r.enable_auto_scrolling;this.enableLargePager=r.enable_large_pager;this.prevPager=s.prev_pager;this.nextPager=s.next_pager;if(this.enableLargePager){i([n.listen(this.nextPager,'click',this.slideLeft.bind(this)),n.listen(this.prevPager,'click',this.slideRight.bind(this))]);}else i([this.pager.subscribe('next',this.slideLeft.bind(this)),this.pager.subscribe('prev',this.slideRight.bind(this))]);this.logImpressions();this.tryLoadMore();this.$BaseUnitCarousel2();}q.prototype.$BaseUnitCarousel1=function(r){'use strict';this.position-=r*this.itemWidth;this.grid.style[this.positionProperty]=this.position+'px';this.visibleIndex+=r;};q.prototype.canSlideLeft=function(){'use strict';return this.visibleIndex+this.visibleCount<this.grid.childElementCount;};q.prototype.canSlideRight=function(){'use strict';return this.visibleIndex>=1;};q.prototype.onXout=function(r,s){'use strict';if(!s)return;if(this.grid.childElementCount===0){h.remove(this.carousel);return;}if(this.grid.childElementCount<=2*this.slideCount&&this.circularCarousel){this.circularCarousel=false;this.position+=this.startOffset;this.grid.style[this.positionProperty]=this.position+'px';}if(this.grid.childElementCount>=this.visibleCount){var t=this.visibleIndex+this.visibleCount,u=this.grid.childElementCount-t;if(u<0)this.slide(-u);}this.$BaseUnitCarousel2();this.logImpressions();this.tryLoadMore();};q.prototype.slide=function(r){'use strict';this.toggleXouts(this.visibleIndex,this.visibleIndex+this.visibleCount,true);var s=this.visibleIndex+r,t=0;if(!this.circularCarousel){if((this.enableAutoScrolling||this.enableLargePager)&&this.visibleIndex===0&&r>0)t=-this.slideAdjust;if(s<=0){s=0;if(this.enableAutoScrolling||this.enableLargePager)t=this.slideAdjust;}}if(s+this.visibleCount>=this.grid.childElementCount)s=this.grid.childElementCount-this.visibleCount;r=s-this.visibleIndex;if(s===this.visibleIndex)return;this.position-=r*this.itemWidth+t;this.visibleIndex=s;var u=Math.abs(r*this.itemWidth);if(this.enableLargePager)this.hidePagerButton();var v=false;if(r>0)v=true;new j(this.grid).to(this.positionProperty,this.position).duration(u).ease(k.sineOut).ondone(this.onSlideDone.bind(this,v)).go();};q.prototype.onSlideDone=function(r){'use strict';if(r||this.circularCarousel)this.logImpressions();if(!this.circularCarousel&&r)this.tryLoadMore();this.$BaseUnitCarousel2();};q.prototype.slideRight=function(){'use strict';if(this.circularCarousel){for(var r=0;r<this.slideCount;r++)this.grid.insertBefore(this.grid.lastChild,this.grid.firstChild);this.$BaseUnitCarousel1(this.slideCount);}this.slide(-this.slideCount);};q.prototype.slideLeft=function(){'use strict';if(this.circularCarousel){for(var r=0;r<this.slideCount;r++)this.grid.appendChild(this.grid.firstChild);this.$BaseUnitCarousel1(-this.slideCount);}this.slide(this.slideCount);};q.prototype.onDone=function(r){'use strict';this.hasReq=false;if(r&&r.payload&&r.payload.items){var s=r.payload.items;if(s){var t=h.find(this.grid,"._34bp");h.insertBefore(t,s);this.$BaseUnitCarousel2();this.logImpressions();this.tryLoadMore();}}};q.prototype.onError=function(){'use strict';this.hasReq=false;};q.prototype.toggleXouts=function(r,s,t){'use strict';};q.prototype.logImpressions=function(){'use strict';};q.prototype.tryLoadMore=function(){'use strict';};q.prototype.hidePagerButton=function(){'use strict';};q.prototype.$BaseUnitCarousel2=function(){'use strict';this.toggleXouts(this.visibleIndex,this.visibleIndex+this.visibleCount-1,false);if(this.enableAutoScrolling)this.updateAutoSlideListener();if(this.enableLargePager){this.updateLargePager();return;}if(this.grid.childElementCount<this.visibleCount){this.pager.setNextEnabled(false);this.pager.setPrevEnabled(false);return;}this.pager.setNextEnabled(this.canSlideLeft());this.pager.setPrevEnabled(this.canSlideRight());};f.exports=q;},null);
__d("XFeedEgoImpressionLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ego\/feed\/logging\/impression\/",{ego_id:{type:"Int",required:true},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true}});},null);
__d("XFeedEgoLoadController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ego\/feed\/load\/",{loading_id:{type:"String",required:true},ids:{type:"IntVector",required:true},service_id:{type:"String",required:true},replace_data:{type:"String",defaultValue:""},location:{type:"String",defaultValue:""},group_size:{type:"Int",defaultValue:1},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true}});},null);
__d('EgoUnitCarousel',['DOM','XFeedEgoImpressionLoggingController','AsyncRequest','Arbiter','XFeedEgoLoadController','csx','BaseUnitCarousel'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p;o=babelHelpers.inherits(q,n);p=o&&o.prototype;function q(r){'use strict';p.constructor.call(this,r);k.subscribe('x-out-ego-suggestions',this.onXout.bind(this));}q.prototype.tryLoadMore=function(){'use strict';if(this.hasReq)return;var r=this.grid.childElementCount-this.visibleIndex-this.visibleCount-1;if(r>7)return;var s=h.scry(this.grid,"._34bp")[0];if(!s)return;var t=s.id,u=[],v=this.grid.childNodes,w=v.length-1,x,y;for(var z=0;z<w;++z){var aa=JSON.parse(v[z].getAttribute('data-ft'));if(aa.ego_id)u.push(aa.ego_id);if(aa.qid&&!x)x=aa.qid;if(aa.mf_story_key&&!y)y=aa.mf_story_key;}var ba=l.getURIBuilder().setString('service_id',this.serviceID).setString('location',this.location).setString('loading_id',t).setIntVector('ids',u).setInt('qid',x).setInt('mf_story_key',y).getURI();new j().setURI(ba).setHandler(this.onDone.bind(this)).setErrorHandler(this.onError.bind(this)).send();this.hasReq=true;};q.prototype.logImpressions=function(){'use strict';var r=this.grid.children,s=r.length,t=this.visibleIndex+Math.min(this.visibleCount,s)-1;if(t===s-1)--t;for(var u=this.visibleIndex;u<=t;++u)this.$EgoUnitCarousel1(r[u]);};q.prototype.$EgoUnitCarousel1=function(r){'use strict';var s=JSON.parse(r.getAttribute('data-ft'));if(!s)return;var t=s.ego_id;if(!t)return;if(this.loggedItems[t])return;var u=i.getURIBuilder().setInt('ego_id',t).setInt('qid',s.qid).setInt('mf_story_key',s.mf_story_key).getURI();new j().setURI(u).send();this.loggedItems[t]=true;};f.exports=q;},null);
__d('legacy:EditSubscriptions',['SubscriptionLevels','EditSubscriptions'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.SubscriptionLevels=c('SubscriptionLevels');b.EditSubscriptions=c('EditSubscriptions');},3);
__d('DynamicFriendListEducation',['Event','Arbiter','AsyncRequest','Dialog','PageTransitionsRegistrar','arrayContains','createArrayFromMixed','removeFromArray'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q,r,s,t,u;function v(){r&&r.hide();s&&s.hide();}function w(z){o(q,z);v();t({accept_tag_education:true});}function x(){v();t({nux_cancel:true});}var y={init:function(z,aa){p=z;q=n(aa).map(String);l.registerHandler(function(){v();p=false;t=undefined;q=[];});},showDialog:function(z,aa,ba){if(p&&m(q,z)){v();i.inform('DynamicFriendListEducation/dialogOpen',{uid:aa,flid:z});t=ba;r=new k().setAsync(new j('/ajax/friends/lists/smart_list_education.php').setMethod('GET').setData({flid:z,uid:aa}).setReadOnly(true)).setHandler(w.bind(this,z)).setCloseHandler(function(){i.inform('DynamicFriendListEducation/dialogClosed',{uid:aa,flid:z});}).setCancelHandler(function(){i.inform('DynamicFriendListEducation/dialogCancel',{uid:aa,flid:z});}).show();}else ba();},showContextualDialog:function(z,aa,ba,ca){if(p&&m(q,z)){v();u=ba;t=ca;new j('/ajax/friends/lists/smart_list_contextual_education.php').setMethod('GET').setData({flid:z,uid:aa}).setReadOnly(true).send();}else ca();},setContextualDialog:function(z,aa,ba,ca){s=z;s.setContext(u);s.show();h.listen(aa,'click',w.bind(this,ca));h.listen(ba,'click',x);}};f.exports=y;},null);
__d('FriendStatus',['Arbiter','AsyncRequest','SubscribeButton','arrayContains','createArrayFromMixed','forEachObject'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(r,s,t){this.id=r;this.update(s,t);}Object.assign(n.prototype,{update:function(r,s){r&&(this.status=r);if(s){this.lists=l(s).map(String);this._informListChange();}},isComplete:function(){return !!this.lists;},addToList:function(r){if(this.lists&&!k(this.lists,r))this.lists.push(r);this._informListChange();},removeFromList:function(r){if(this.lists){var s=this.lists.indexOf(r);s!==-1&&this.lists.splice(s,1);}this._informListChange();},updateList:function(r,s){s?this.addToList(r):this.removeFromList(r);},_informListChange:function(){h.inform('FriendListMembershipChange',{uid:this.id,lists:this.lists});}});Object.assign(n,{ARE_FRIENDS:1,INCOMING_REQUEST:2,OUTGOING_REQUEST:3,CAN_REQUEST:4});var o={},p={};function q(r,s,t){if(!o[t.uid]){o[t.uid]=new n(t.uid,r);}else o[t.uid].update(r);h.inform('FriendRequest/change',{uid:t.uid,status:r});}h.subscribe(['FriendRequest/cancel','FriendRequest/unfriend'],function(r,s){s.profile_id=s.uid;s.connected=false;h.inform(j.UNSUBSCRIBED,s);});h.subscribe(['FriendRequest/cancel','FriendRequest/unfriend','FriendRequest/sendFail'],q.bind(null,n.CAN_REQUEST));h.subscribe(['FriendRequest/confirmFail'],q.bind(null,n.INCOMING_REQUEST));h.subscribe(['FriendRequest/cancelFail','FriendRequest/sent','FriendRequest/sending'],q.bind(null,n.OUTGOING_REQUEST));h.subscribe(['FriendRequest/confirm','FriendRequest/confirming'],q.bind(null,n.ARE_FRIENDS));Object.assign(n,{CLOSE_FRIENDS:null,ACQUAINTANCES:null,getFriend:function(r,s){if(o[r]&&o[r].isComplete()){s(o[r]);}else if(p[r]){p[r].push(s);}else{p[r]=[s];new i().setURI("/ajax/friends/status.php").setData({friend:r}).setHandler(function(t){var u=t.getPayload();setTimeout(n.initFriend.bind(n,r,u.status,u.lists),0);}).send();}},initFriend:function(r,s,t){var u=o[r]||new n(r);u.update(u.status||s,u.lists||t);o[r]=u;p[r]&&p[r].forEach(function(v){v(u);});p[r]=null;},setSpecialLists:function(r){var s=n.CLOSE_FRIENDS===null;n.CLOSE_FRIENDS=r.close+'';n.ACQUAINTANCES=r.acq+'';if(s)m(o,function(t,u){t._informListChange();});}});f.exports=n;},null);
__d('FriendEditLists',['Arbiter','AsyncRequest','CSS','DOMQuery','DynamicFriendListEducation','EditSubscriptions','FriendStatus','MenuDeprecated','Parent','ScrollableArea','URI','$','arrayContains','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v=5,w={},x='/ajax/profile/removefriendconfirm.php',y='/ajax/friends/requests/cancel.php',z='/ajax/choose/',aa='/profile.php',ba,ca,da,ea,fa={profile_browser:43,fbx_top_bar:1,hovercard:5};function ga(ra,sa,ta){var ua=w[ra.id],va=function(wa){var xa={action:ta?'add_list':'del_list',to_friend:ua.id,friendlists:[sa],source:ba};if(wa)Object.assign(xa,wa);ua.updateList(sa,ta);var ya;if(ta&&sa==n.CLOSE_FRIENDS){ya=ja(ra,n.ACQUAINTANCES);if(o.isItemChecked(ya)){o.toggleItem(ya);ga(ra,n.ACQUAINTANCES,false);}}else if(ta&&sa==n.ACQUAINTANCES){ya=ja(ra,n.CLOSE_FRIENDS);if(o.isItemChecked(ya)){o.toggleItem(ya);ga(ra,n.CLOSE_FRIENDS,false);}}var za={flid:sa,uid:ua.id},ab=ta?'FriendListHovercard/add':'FriendListHovercard/remove';h.inform(ab,za);new i().setURI('/ajax/add_friend/action.php').setData(xa).send();};if(ta){l.showDialog(sa,ua.id,va);}else va();}function ha(ra){var sa=k.scry(ra,'input')[0];return sa&&sa.value;}function ia(ra,sa,ta){if(j.hasClass(ta,'async_saving'))return;var ua={uid:sa.id};new i().setURI(y).setMethod('POST').setData({friend:sa.id,cancel_ref:da,floc:ea}).setHandler(h.inform.bind(h,'FriendRequest/cancel',ua)).setErrorHandler(h.inform.bind(h,'FriendRequest/cancelFail',ua)).setStatusElement(ta).send();}function ja(ra,sa){var ta=o.getItems(ra);for(var ua=0;ua<ta.length;ua++)if(ha(ta[ua])==sa)return ta[ua];return null;}function ka(ra,sa){var ta=o.getItems(ra);ta.forEach(function(ua){var va=ha(ua),wa=t(sa.lists,va);if(o.isItemChecked(ua)!==wa)o.toggleItem(ua);});}function la(ra){var sa=o.getItems(ra),ta=!j.hasClass(ra,'followButtonFlyout')&&!j.hasClass(ra,'likeButtonFlyout'),ua=[],va=[],wa=0,xa=0;sa.forEach(function(cb){if(j.hasClass(cb,'neverHide')){j.removeClass(cb,'underShowMore');wa++;}else if(o.isItemChecked(cb)){ua.push(cb);}else if(j.hasClass(cb,'neverShow')||j.hasClass(cb,'FriendListCreateTrigger')||!ta&&j.hasClass(cb,'friendOptionsOnly')){j.addClass(cb,'underShowMore');xa++;}else va.push(cb);});var ya=v-wa,za=ua.concat(va),ab=xa;za.forEach(function(cb){if(j.hasClass(cb,'ShowMoreItem')){ya--;return;}if(ya){j.removeClass(cb,'underShowMore');ya--;}else{j.addClass(cb,'underShowMore');ab=true;}});j.conditionClass(ra,'hasMoreFriendListItems',ab);var bb=k.scry(ra,'.FriendListMenuShowMore');bb.forEach(function(cb){j.removeClass(cb,'FriendListMenuShowMore');});}function ma(ra,sa){j.conditionClass(ra,'FriendListMemorializedUser',sa);}function na(ra,sa){j.conditionClass(ra,'FriendListCannotSuggestFriends',!sa);}function oa(ra,sa){var ta=k.scry(ra,'.FriendListUnfriend')[0],ua=k.scry(ra,'.FriendListCancel')[0],va=k.scry(ra,'.FriendListSuggestFriends')[0],wa=k.scry(ra,'.FriendListFriendship')[0];if(ua)j.conditionShow(ua,sa.status==n.OUTGOING_REQUEST);if(ta){j.conditionShow(ta,sa.id!==undefined&&sa.status===n.ARE_FRIENDS);var xa=k.find(ta,'a');xa.setAttribute('ajaxify',new r(x).addQueryData({uid:sa.id,unref:ca,floc:ea}).toString());}else j.conditionClass(ra,'NoFriendListActionSeparator',!ua||sa.status!=n.OUTGOING_REQUEST);if(va)k.find(va,'a').setAttribute('href',new r(z).addQueryData({type:'suggest_friends',newcomer:sa.id,ref:'profile_others_dropdown'}).toString());if(wa){j.conditionShow(wa,sa.status==n.ARE_FRIENDS);k.find(wa,'a').setAttribute('href',new r(aa).addQueryData({and:sa.id}).toString());}}function pa(ra,sa,ta){var ua=k.scry(ra,'div.FriendListSubscriptionsMenu');if(ua.length!==0)m.init(ra,sa,ta);}h.subscribe('FriendRequest/change',function(ra,sa){for(var ta in w){var ua=u(ta),va=w[ta];if(ua&&va&&va.id==sa.uid){ka(ua,va);oa(ua,va);la(ua);}}});o.subscribe('select',function(ra,sa){if(j.hasClass(sa.item,'ShowMoreItem')&&j.hasClass(sa.menu,'FriendListMenu')){j.addClass(sa.menu,'FriendListMenuShowMore');q.poke(sa.item);}});var qa={init:function(ra,sa,ta,ua,va,wa,xa,ya){ra=s(ra);ba=ta;ca=wa;da=xa;ea=ya;var za=fa[ta]||45;if(!w[ra.id])o.subscribe('select',function(ab,bb){if(k.contains(ra,bb.item))if(p.byClass(bb.item,'FriendListItem')){o.toggleItem(bb.item);var cb=ha(bb.item);ga(ra,cb,o.isItemChecked(bb.item));}else if(p.byClass(bb.item,'FriendListCancel')){ia(ra,w[ra.id],bb.item);}else if(p.byClass(bb.item,'FriendListUnfriend'))h.inform('FriendEditLists/unfriend');});j.addClass(ra,'async_saving');n.getFriend(sa,(function(ab){ma(ra,ua);na(ra,va);ka(ra,ab);oa(ra,ab);w[ra.id]=ab;la(ra);pa(ra,sa,za);j.removeClass(ra,'async_saving');}).bind(this));}};f.exports=b.FriendEditLists||qa;},null);
__d('FriendListFlyoutController',['Event','Arbiter','AsyncRequest','Button','ContextualLayer','CSS','DataStore','Dialog','DOM','DOMQuery','FriendEditLists','FriendStatus','Keys','Layer','LayerHideOnEscape','LayerTabIsolation','MenuDeprecated','Parent','ScrollableArea','Style','TabbableElements','UserAgent_DEPRECATED','cx','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){if(c.__markCompiled)c.__markCompiled();var fa,ga,ha,ia=null,ja=null,ka,la,ma,na,oa,pa,qa=1500,ra,sa=false,ta=['uiButtonConfirm','uiButtonSpecial',"_42gz","_42g-","_4jy2","_51tl","_4jy1"],ua={init:function(yb,zb){ua.init=ea;fa=yb;fa.subscribe('mouseenter',db);fa.subscribe('mouseleave',function(){if(!sa)tb();});fa.subscribe('hide',fb);fa.enableBehavior(w);fa.enableBehavior(v);ra=zb;if(ia)p.setContent(fa.getContent(),[ia,ja]);var ac=function(cc){var dc=y.byClass(cc.getTarget(),'enableFriendListFlyout');if(dc){sa=true;if(ka!==dc){ha&&vb();sb(dc);}}else if(sa)vb();},bc=function(cc){var dc=y.byClass(cc.getTarget(),'enableFriendListFlyout');if(dc)if(ka===dc){clearTimeout(na);}else{ha&&vb();sb(dc);}};h.listen(document.documentElement,{click:ac,mouseover:bc,keydown:function(event){var cc=event.getTarget();if(event.getModifiers().any)return;if(!ha||q.isNodeOfType(cc,['input','textarea']))return;var dc=h.getKeyCode(event),ec;switch(dc){case t.UP:case t.DOWN:var fc=cb();ec=ab(fc);ya(fc[ec+(dc===t.UP?-1:1)]);return false;case t.SPACE:var gc=za(cc);if(gc){va(gc);event.prevent();}break;default:var hc=String.fromCharCode(dc).toLowerCase(),ic=cb();ec=ab(ic);var jc=ec,kc=ic.length;while(~ec&&(jc=++jc%kc)!==ec||!~ec&&++jc<kc){var lc=x.getItemLabel(ic[jc]);if(lc&&lc.charAt(0).toLowerCase()===hc){ya(ic[jc]);return false;}}}}});i.subscribe('FriendEditLists/unfriend',vb);i.subscribe('FriendRequest/cancel',vb);i.subscribe('DynamicFriendListEducation/dialogOpen',function(){pa=true;});i.subscribe('DynamicFriendListEducation/dialogClosed',function(){pa=false;tb();});},initContent:function(yb){p.appendContent(document.body,yb);gb(yb);setTimeout(function(){if(!ia){ia=yb;fa&&p.setContent(fa.getContent(),[ia,ja]);m.show(ia);h.listen(ia,'click',wb);ha&&pb(ka);}else{p.remove(yb);yb=null;}},0);},initNux:function(yb){if(ja)return;ja=yb;fa&&p.setContent(fa.getContent(),[ia,ja]);},show:function(yb){qb(yb);},hide:function(yb){yb===false?vb():tb();},setActiveNode:function(yb){ha&&vb();ka=yb;la=h.listen(yb,'mouseleave',function(){ka=null;la&&la.remove();});},setCloseListener:function(yb,zb){n.set(yb,'flfcloselistener',zb);if(ka!=yb)n.set(yb,'flfcloselistenertimeout',setTimeout(xb.bind(null,yb),qa));},setCloseListenerTimeout:function(yb){qa=yb;}};function va(yb){ca.firefox()&&xa(yb).blur();x.inform('select',{menu:wa(yb),item:yb});}function wa(yb){if(m.hasClass(yb,'uiMenuContainer'))return yb;return y.byClass(yb,'uiMenu');}function xa(yb){return q.find(yb,'a.itemAnchor');}function ya(yb){if(yb&&bb(yb)){x._removeSelected(fa.getContent());m.addClass(yb,'selected');xa(yb).focus();}}function za(yb){return y.byClass(yb,'uiMenuItem');}function ab(yb){if(document.activeElement){var zb=za(document.activeElement);return yb.indexOf(zb);}return -1;}function bb(yb){return !m.hasClass(yb,'disabled')&&aa.get(yb,'display')!=='none'&&aa.get(y.byClass(yb,'uiMenu'),'display')!=='none';}function cb(){return x.getItems(fa.getContent()).filter(bb);}function db(){clearTimeout(na);}function eb(yb){for(var zb=0;zb<ta.length;zb++)if(m.hasClass(yb,ta[zb]))return false;return true;}function fb(){if(ka){if(eb(ka)){m.removeClass(ka,"_52nd");if(m.hasClass(ka,'uiButton')||m.hasClass(ka,"_42fu"))m.removeClass(ka,'selected');}if(n.get(ka,'flfcloselistener')){var yb=ka;n.set(ka,'flfcloselistenertimeout',setTimeout(xb.bind(null,yb),qa));}}ha=false;ob();ka=null;}function gb(yb){var zb=q.scry(yb,'[tabindex="0"]');zb.forEach(function(ac){ac.tabIndex='-1';});zb[0]&&(zb[0].tabIndex='0');}function hb(yb){if(q.isNodeOfType(yb,'label')&&m.hasClass(yb,'uiButton'))yb=k.getInputElement(yb);return yb;}function ib(yb){return n.get(hb(yb),'profileid');}function jb(yb){return n.get(hb(yb),'memorialized')==='true';}function kb(yb){return n.get(hb(yb),'cansuggestfriends')==='true';}function lb(yb){return n.get(hb(yb),'unref');}function mb(yb){return n.get(hb(yb),'cancelref');}function nb(yb){return n.get(hb(yb),'floc');}function ob(){la&&la.remove();la=null;oa&&u.unsubscribe(oa);oa=null;na&&clearTimeout(na);na=null;}function pb(yb){var zb=ib(yb),ac=jb(yb),bc=kb(yb),cc=n.get(yb,'flloc'),dc=lb(yb),ec=mb(yb),fc=nb(yb);r.init(ia,zb,cc,ac,bc,dc,ec,fc);m.conditionClass(ia,'followButtonFlyout',m.hasClass(yb,'profileFollowButton'));m.conditionClass(ia,'friendButtonFlyout',m.hasClass(yb,'FriendRequestFriends')||m.hasClass(yb,'FriendRequestIncoming')||m.hasClass(yb,'FriendRequestOutgoing'));m.conditionClass(ia,'likeButtonFlyout',m.hasClass(yb,'profileLikeButton'));var gc=q.scry(ia,'div.uiScrollableArea')[0];gc&&z.poke(gc);var hc=ba.find(ia)[0];hc&&hc.focus();}function qb(yb){if(!fa||ha)return;fa.setContext(yb);fa.setCausalElement(yb);yb.setAttribute('aria-expanded','true');if(eb(yb)){m.addClass(yb,"_52nd");if(m.hasClass(yb,'uiButton')||m.hasClass(yb,"_42fu"))m.addClass(yb,'selected');}fa.show();ka=yb;ha=true;var zb=null;if(ia){zb='show';pb(yb);}else{zb='init_show';new j().setURI('/ajax/friends/lists/flyout_content.php').setStatusElement(fa.getContent()).send();}ob();la=h.listen(yb,'mouseleave',tb);oa=u.subscribe('show',rb);if(n.get(yb,'flfcloselistener'))clearTimeout(n.remove(yb,'flfcloselistenertimeout'));var ac=ib(yb);s.getFriend(ac,function(bc){if(bc.status==s.ARE_FRIENDS)new j().setURI('/ajax/friends/lists/flyout_log.php').setData({target_id:ib(yb),unref:lb(yb),action:zb}).send();if(!ja)return;if(bc.status==s.OUTGOING_REQUEST){m.show(ja);j.bootstrap('/ajax/friends/lists/nux_flyout.php',null,true);}else m.hide(ja);});if(!ga||yb.id!==ga.id){i.inform('listeditor/close_editor');i.inform('friend-list/close_editor');}ga=yb;}function rb(yb,zb){if(!(zb instanceof l)||!q.contains(ka,zb.getContext()))tb();}function sb(yb){ka=yb;ma=setTimeout(qb.bind(null,yb),ra);la=h.listen(yb,'mouseleave',function(){clearTimeout(ma);ka=null;la&&la.remove();});}function tb(){na=setTimeout(vb,150);}function ub(){var yb=o.getCurrent(),zb=yb&&yb.getBody();return !!(zb&&q.scry(zb,'.friendListDialogTourCarousel')[0]);}function vb(){if(pa||ub())return;sa=false;if(fa){fa.hide();var yb=fa.getCausalElement();yb&&yb.setAttribute('aria-expanded','false');}}function wb(event){var yb=y.byTag(event.getTarget(),'a');if(yb&&m.hasClass(yb,'FriendListActionItem'))tb();}function xb(yb){var zb=n.remove(yb,'flfcloselistener');zb&&zb();}f.exports=b.FriendListFlyoutController||ua;},null);
__d('AddFriendButton',['Event','Animation','Arbiter','AsyncRequest','AsyncResponse','collectDataAttributes','CSS','DOMQuery','FriendListFlyoutController','FriendStatus','ge','goURI','Style','SubscribeButton','URI','XPubcontentChainedSuggestionsController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x={ERROR_ALREADY_ADDED:1431005,init:function(y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma){var na=y.id,oa=null,pa=o.scry(y,'.addButton')[0],qa=o.scry(y,'.addFriendText')[0],ra=o.scry(y,'.outgoingButton')[0],sa=o.scry(y,'.incomingButton')[0],ta=o.scry(y,'.friendButton')[0],ua=o.scry(y.parentNode,'.suggestFriendsButton')[0];function va(cb,db,eb){var fb=new v(pa.getAttribute('ajaxify')),gb=m(y,['ft','gt']);new k().setURI(da).setData({to_friend:z,action:cb,how_found:ba,ref_param:ca,link_data:gb,outgoing_id:ra.id,xids:fb.getQueryData().xids,logging_location:ea,no_flyout_on_click:fa,ego_log_data:ga,http_referer:ia,floc:ka,frefs:la}).setErrorHandler(db).setServerDialogCancelHandler(eb).setRelativeTo(ra).send();if(ja&&cb==='add_friend'){var hb=w.getURIBuilder().setInt('friendid',z).getURI();new k().setURI(hb).send();}j.inform(u.SUBSCRIBED,{profile_id:z.toString(),connected:true,chaining:false});}function wa(cb,db){if(qa){n.hide(qa);}else if(pa){if(ma)n.hide(ma);n.hide(pa);}ra&&n.hide(ra);sa&&n.hide(sa);ta&&n.hide(ta);if(cb){n.show(cb);if(ma&&'Requestable'===db)n.show(ma);}if('Outgoing'==db&&oa!=db&&ha)new i(cb).from('backgroundColor','#FFF8CC').to('backgroundColor','transparent').from('borderColor','#FFE222').to('borderColor',t.get(cb,'borderLeftColor')).duration(2000).go();if('Requestable'==db&&oa!=db)ua&&n.hide(ua);oa&&n.removeClass(y,'fStatus'+oa);oa=db;n.addClass(y,'fStatus'+db);}function xa(cb){if(n.hasClass(cb,'enableFriendListFlyout')){p.show(cb);}else p.hide();}var ya=j.subscribe('FriendRequest/change',function(cb,db){bb();if(db.uid!=z)return;switch(db.status){case q.ARE_FRIENDS:return wa(ta,'Friends');case q.INCOMING_REQUEST:return wa(sa,'Incoming');case q.OUTGOING_REQUEST:return wa(ra,'Outgoing');case q.CAN_REQUEST:return wa(qa?qa:pa,'Requestable');}}),za=j.subscribe('FriendRequest/unfriend',function(cb,db){bb();if(db.uid===z&&db.shouldHideButton===true)n.hide(pa);}),ab;if(aa)ab=j.subscribe('FriendRequest/confirm',function(cb,db){bb();db.uid==z&&s(aa);});pa&&h.listen(pa,'click',function(){j.inform('FriendRequest/sending',{uid:z});if(fa){p.setActiveNode(ra);}else xa(ra);va("add_friend",function(cb){var db=cb.error==x.ERROR_ALREADY_ADDED?'FriendRequest/sent':'FriendRequest/sendFail';j.inform(db,{uid:z});p.hide();l.defaultErrorHandler(cb);},function(cb){j.inform('FriendRequest/sendFail',{uid:z});p.hide();});});function bb(){if(r(na))return;ya&&ya.unsubscribe();ab&&ab.unsubscribe();za&&za.unsubscribe();ya=null;ab=null;za=null;}}};f.exports=x;},null);
__d('FriendButtonIcon',['Arbiter','FriendStatus','Button','arrayContains'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();f.exports={register:function(l,m,n){h.subscribe('FriendListMembershipChange',function(o,p){if(p.uid==n){var q=k(p.lists,i.CLOSE_FRIENDS),r=k(p.lists,i.ACQUAINTANCES);if(q&&!r){j.setIcon(l,m.close);}else if(r&&!q){j.setIcon(l,m.acquaintance);}else j.setIcon(l,m.friend);}});}};},null);
__d("XEgoHideLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ego\/feed\/logging\/xout\/",{ego_id:{type:"Int",required:true},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true},service_id:{type:"String",required:true}});},null);
__d('PymkXout',['Event','DOM','CSS','Arbiter','XEgoHideLoggingController','AsyncSignal'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={init:function(o,p,q){h.listen(p,'click',(function(event){this._logForItem(o);if(q==='pymk_jewel'||q==='pymk_jewel_first_page'){j.hide(o);}else i.remove(o);var r=event.getTarget().getAttribute('data-pymk-id');if(r)k.inform('x-out-ego-suggestions',{id:r});}).bind(this));},_logForItem:function(o){var p=JSON.parse(o.getAttribute('data-ft'));if(!p)return;if(!p.ego_id)return;var q=l.getURIBuilder().setInt('ego_id',p.ego_id).setInt('qid',p.qid).setInt('mf_story_key',p.mf_story_key).setString('service_id','PYMK').getURI();new m(q,{}).send();}};f.exports=n;},null);
__d('FbFeedAttachmentEgoHScroll',['CSS','DOM','Event','csx','debounce','cx','EgoUnitCarousel'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p;o=babelHelpers.inherits(q,n);p=o&&o.prototype;q.prototype.updateAutoSlideListener=function(){'use strict';this.$FbFeedAttachmentEgoHScroll1();if(this.canSlideLeft())this.$FbFeedAttachmentEgoHScroll2('left',this.visibleIndex+this.visibleCount);if(this.canSlideRight())this.$FbFeedAttachmentEgoHScroll2('right',this.visibleIndex-1);};q.prototype.updateLargePager=function(){'use strict';h.removeClass(this.carousel,"_vxr");this.$FbFeedAttachmentEgoHScroll3(true);this.$FbFeedAttachmentEgoHScroll3(false);h.conditionClass(this.carousel,"_vxs",this.canSlideLeft()&&this.canSlideRight());};q.prototype.hidePagerButton=function(){'use strict';h.addClass(this.carousel,"_vxr");};q.prototype.$FbFeedAttachmentEgoHScroll3=function(r){'use strict';var s=r?"_vxt":"_vxu",t=r?"_vxv":"_vxw";if(r?this.canSlideRight():this.canSlideLeft()){h.removeClass(this.carousel,t);h.removeClass(this.carousel,s);}else{h.addClass(this.carousel,t);setTimeout((function(){h.addClass(this.carousel,s);}).bind(this),500);}};q.prototype.$FbFeedAttachmentEgoHScroll1=function(){'use strict';if(this.$FbFeedAttachmentEgoHScroll4)this.$FbFeedAttachmentEgoHScroll4.remove();this.$FbFeedAttachmentEgoHScroll4=null;if(this.$FbFeedAttachmentEgoHScroll5)this.$FbFeedAttachmentEgoHScroll5.remove();this.$FbFeedAttachmentEgoHScroll5=null;if(this.$FbFeedAttachmentEgoHScroll6)this.$FbFeedAttachmentEgoHScroll6.remove();this.$FbFeedAttachmentEgoHScroll6=null;if(this.$FbFeedAttachmentEgoHScroll7)this.$FbFeedAttachmentEgoHScroll7.remove();this.$FbFeedAttachmentEgoHScroll7=null;};q.prototype.$FbFeedAttachmentEgoHScroll2=function(r,s){'use strict';if(isNaN(s)||r!=='left'&&r!=='right')return;if(r==='left'){var t=l(this.slideLeft.bind(this),1000,this);this.$FbFeedAttachmentEgoHScroll4=j.listen(this.grid.children[s],'mouseover',t);this.$FbFeedAttachmentEgoHScroll6=j.listen(this.grid.children[s],'mouseout',function(){t.reset();});}else{var u=l(this.slideRight.bind(this),1000,this);this.$FbFeedAttachmentEgoHScroll5=j.listen(this.grid.children[s],'mouseover',u);this.$FbFeedAttachmentEgoHScroll7=j.listen(this.grid.children[s],'mouseout',function(){u.reset();});}};q.prototype.toggleXouts=function(r,s,t){'use strict';var u=Math.min(r,s),v=Math.max(r,s),w=this.grid.children;u=Math.max(u,0);v=Math.min(v,w.length-1);var x;for(var y=u;y<=v;++y){x=w[y];var z=i.scry(x,"._397t")[0];if(z)if(t){h.hide(z);}else h.show(z);}};function q(){'use strict';o.apply(this,arguments);}f.exports=q;},null);