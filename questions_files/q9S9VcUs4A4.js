/*!CK:3395157838!*//*1448383751,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CIwde"]); }

__d('SavedForLaterDashboardClickLogger',['Banzai','DOMQuery','Event','CSS','guid','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={init:function(o,p,q,r){m(j.listen(o,'click',function(s){h.post(p,{collection_item_id:q,surface:'save_dashboard',mechanism:r,event_id:l()},{delay:0,retry:true});}));},initForLikeButton:function(o,p,q,r){m(j.listen(o,'click',function(s){if(!k.hasClass(s.target.parentElement,'PageLikedButton'))h.post(p,{collection_item_id:q,surface:'save_dashboard',mechanism:r});}));},initBySelector:function(o,p,q,r,s){var t=i.scry(o,p);t.forEach(function(u){n.init(u,q,r,s);});}};f.exports=n;},null);
__d('SavedForLaterDashboardHeader',['arrayContains','cx','DataStore','Parent'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='saved_for_later_dashboard_header',m="fb_content";function n(o,p){'use strict';this.headerItems=p;var q=k.byClass(o,m);j.set(q,l,this);}n.update=function(o,p,q){'use strict';var r=k.byClass(o,m),s=j.get(r,l);if(s)for(var t in s.headerItems){var u=s.headerItems[t];if(h(p,t))u.increment();if(h(q,t))u.decrement();}};f.exports=n;},null);
__d('SavedForLaterDashboardNUX',['DataStore','DOM','Event','Parent','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n='saved_for_later_dashboard_nux',o="fb_content";function p(q,r,s){'use strict';this.nuxElement=s;m([j.listen(q,'click',this.remove.bind(this)),j.listen(r,'click',this.remove.bind(this))]);var t=k.byClass(s,o);h.set(t,n,this);}p.prototype.remove=function(){'use strict';i.remove(this.nuxElement);};p.dismiss=function(q){'use strict';var r=k.byClass(q,o),s=h.get(r,n);s&&s.remove();};f.exports=p;},null);
__d("XSavedForLaterDashboardFragmentController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/saved\/more\/",{collection_token:{type:"String",required:true},cursor:{type:"String"},target_id:{type:"String",required:true}});},null);
__d('SavedForLaterDashboardHeaderItem',['AsyncRequest','CSS','DOM','Event','LoadingIndicator.react','PageTransitions','React','ReactDOM','SavedForLaterDashboardNUX','XSavedForLaterDashboardFragmentController','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t="_5wch",u="_5uqs",v="_5uqu",w="_5x-b",x='saved_loading_indicator';function y(z,aa,ba,ca){'use strict';this.collectionId=ba;this.count=ca;var da=j.scry(z,'span.'+v);this.headerItemCountElement=null;if(da.length===1)this.headerItemCountElement=da[0];var ea=j.find(document,'div.'+t);s(k.listen(z,'click',function(fa){if(fa.isRightClick()||fa.isMiddleClick())return;p.dismiss(ea);var ga=m.getCurrentURI().getUnqualifiedURI(),ha=m.getCurrentURI().getUnqualifiedURI();ha.addQueryData({collection_token:aa});m.rewriteCurrentURI(ga,ha);j.scry(document,'a.'+u).forEach(function(ja){i.removeClass(ja,u);});i.addClass(z,u);o.render(n.createElement('div',{className:w,id:x},n.createElement(l,{size:'large',color:'white'})),ea);var ia=q.getURIBuilder().setString('collection_token',aa).setString('target_id',ea.firstChild.id).getURI();new h(ia).send();fa.preventDefault();}));}y.prototype.getCollectionId=function(){'use strict';return this.collectionId;};y.prototype.increment=function(){'use strict';this.$SavedForLaterDashboardHeaderItem1(this.$SavedForLaterDashboardHeaderItem2()+1);};y.prototype.decrement=function(){'use strict';this.$SavedForLaterDashboardHeaderItem1(this.$SavedForLaterDashboardHeaderItem2()-1);};y.prototype.$SavedForLaterDashboardHeaderItem2=function(){'use strict';return this.count;};y.prototype.$SavedForLaterDashboardHeaderItem1=function(z){'use strict';if(z<0)z=0;if(this.headerItemCountElement!==null)j.setContent(this.headerItemCountElement,z);this.count=z;};f.exports=y;},null);
__d('SavedForLaterDashboardRemoveButton',['DOM','Event','Parent','SavedForLaterDashboardHeader','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n="_5wcf";function o(p,q){'use strict';m(i.listen(p,'click',function(r){var s=j.byClass(p,n);k.update(s,q.increment,q.decrement);s&&h.replace(s,q.markup);}));}f.exports=o;},null);