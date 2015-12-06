/*!CK:2328353936!*//*1448250909,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["rca\/B"]); }

__d("TakeoverSurveyBrowseTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PHOTO:"browse_type_photo",VIDEO:"browse_type_video",BLENDED_ENTITIES:"browse_type_keyword_entities",STORY:"browse_type_story"};},null);
__d("XBrowseLoggerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/browse\/logger\/",{data:{type:"HackType",required:true}});},null);
__d('BrowseLogger',['AsyncRequest','Banzai','mapObject','Run','XBrowseLoggerController'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m='browse',n='browse_aggr',o=null,p={},q={},r=function(aa){if(aa==null)return 'undefined';var ba=aa.tagName.toLowerCase(),ca=aa.id,da=aa.className;if(ca)ba+='#'+ca;if(da)ba+='.'+da;return ba;};function s(){o=null;p={};q={};}function t(aa){return Object.assign(aa,{clientSessionID:o});}function u(aa){i.post(m,t(aa));}function v(aa){var ba=l.getURIBuilder().setHackType('data',t(aa)).getURI();new h().setURI(ba).send();}function w(){if(o===null)return;q.aggregated=p;i.post(n,t(q));s();}function x(aa){p[aa]=(p[aa]||0)+1;}function y(aa){Object.assign(q,aa);}k.onUnload(w);var z={newSession:function(){w();o=Math.random().toString();if(!q.start_time)q.start_time=Math.round(Date.now()/1000);},logResultClick:function(aa,ba,ca,da,ea){var fa=arguments.length<=5||arguments[5]===undefined?null:arguments[5],ga={action:'result_click',click_type:aa.ct||'result',section:aa.section||'unknown',id:aa.id||0,path:aa.path||'unknown',rank:aa.rank||0,referrer:aa.referrer||'unknown',result_type:aa.result_type||'unknown',session_id:aa.session_id||0,query_time:aa.query_time||null,abtest_version:aa.abtest_version||'NONE',abtest_params:aa.abtest_params||null,typeahead_sid:aa.typeahead_sid||'',result_title:aa.result_title||'unknown',result_href:aa.result_href||'unknown',result_semantic:aa.result_semantic||'unknown',type:aa.experience_type||'unknown',click_action:ca||null,sub_id:aa.sub_id||null,owner_id:aa.owner_id||null,browse_location:aa.browse_location||'unknown',query_data:aa.query_data||'unknown',is_headline:aa.is_headline||false,qid:ba.qid||0,mf_story_key:ba.mf_story_key||0,module:aa.module||'NONE',view:aa.view||null,clicked_href:ea||null,bt_key:fa};if(ba.tn)ga.tn=ba.tn;if(aa.cst)ga.click_subtype=aa.cst;x('result_click_'+ga.click_type);y({path:ga.path,referrer:ga.referrer,result_type:ga.result_type,session_id:ga.session_id,abtest_version:ga.abtest_version,abtest_params:ga.abtest_params,typeahead_sid:ga.typeahead_sid});if(fa){v(ga);}else u(ga);if(!aa.id&&aa.browse_location!=='browse_location:mf_trending'&&!fa)u({action:'logging_error',click_action:ca,click_type:ga.click_type,attributes:JSON.stringify(aa),element:j({srcElement:da.srcElement,target:da.target,toElement:da.toElement},r),event:{button:da.button,clientX:da.clientX,clientY:da.clientY,ctrlKey:da.ctrlKey,layerX:da.layerX,layerY:da.layerY,offsetX:da.offsetX,offsetY:da.offsetY,pageX:da.pageX,pageY:da.pageY,screenX:da.screenX,screenY:da.screenY,shiftKey:da.shiftKey,type:da.type,x:da.x,y:da.y}});},logControlsClick:function(aa,ba){var ca={action:'controls_click',click_type:ba,path:aa.path||'unknown',referrer:aa.referrer||'unknown',session_id:aa.session_id||0,query_time:aa.query_time,filter_name:aa.name||'unknown',typeahead_sid:aa.typeahead_sid||'',result_type:aa.result_type||'unknown',type:aa.experience_type||'unknown'};if(aa.cst)ca.click_subtype=aa.cst;x('controls_click_'+ba);y({path:ca.path,referrer:ca.referrer,session_id:ca.session_id,typeahead_sid:ca.typeahead_sid});u(ca);},logResultHover:function(aa,ba){var ca=arguments.length<=2||arguments[2]===undefined?null:arguments[2],da={action:'result_hover',id:aa.id||0,path:aa.path||'unknown',rank:aa.rank||null,result_type:aa.result_type||'unknown',session_id:aa.session_id||0,query_time:aa.query_time||null,time_elapsed:ba||null,typeahead_sid:aa.typeahead_sid||0,type:aa.experience_type||'unknown',module:aa.module||'NONE',view:aa.view||null,bt_key:ca};x('result_hover');y({path:da.path,session_id:da.session_id,typeahead_sid:da.typeahead_sid});if(ca){v(da);}else u(da);},logScroll:function(aa,ba,ca,da){var ea={action:'scroll',encoded_query:aa,fragments:ba,position:ca,session_id:da||0};u(ea);},logNUXStep:function(aa){var ba={action:'nux_step',step:aa};u(ba);},logDisambiguationImpression:function(aa,ba,ca,da,ea){var fa={action:'disambiguation_imp',ids:da,name:aa,path:ca,type:ba,typeahead_sid:ea};u(fa);},logDisambiguationClick:function(aa,ba,ca,da,ea,fa){var ga={action:'disambiguation_clk',id:ea,index:da,name:aa,path:ca,type:ba,typeahead_sid:fa};u(ga);},logDYMLinkClick:function(aa,ba,ca,da){var ea={action:'dym_click',path:aa.path||'unknown',referrer:aa.referrer||'unknown',session_id:aa.session_id||0,query_time:aa.query_time,abtest_version:aa.abtest_version||'NONE',abtest_params:aa.abtest_params,typeahead_sid:aa.typeahead_sid||'',type:aa.experience_type||'unknown',click_action:ca,sub_id:aa.sub_id,owner_id:aa.owner_id,browse_location:aa.browse_location||'unknown',query_data:aa.query_data||'unknown',module:aa.module||'NONE',view:aa.view,dym_confidence:aa.dym_confidence||'NONE',dym_query:aa.dym_query||'',dym_correction:aa.dym_correction||'',dym_clicked:aa.dym_clicked||''};u(ea);}};f.exports=z;},null);
__d('BrowseClickLogger',['Event','BrowseLogger','BrowseClientEventLogger','collectDataAttributes','DOMQuery'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(o,p){var q=o.target,r=k(q,['bt','ft','gt'],['data-bt-key']);r.gt.click_type=r.ft.tn;j.logClick(r.gt);if(l.scry(q,'^.recourse-link').length>0){if(p==='left_click')i.logDYMLinkClick(r.bt,r.ft,p,o);}else i.logResultClick(r.bt,r.ft,p,o,q.href,r.normal['data-bt-key']);}var n={init:function(o){h.listen(o,'mousedown',(function(p){var q=p.button===2||p.which===3?'right_click':'left_click';if(p.shiftKey)q+='_shift';if(p.altKey)q+='_alt';if(p.metaKey||p.ctrlKey)q+='_ctrl';m(p,q);}).bind(this));}};f.exports=n;},null);
__d('NodeHighlighter',['DOM','TokenizeUtil','concatMap','createArrayFromMixed','escapeRegex','getElementText','isTextNode'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={};function p(s,t){var u=m(s).split(t),v=u.map(function(w){if(t.test(w))return q(w);return w||'';});return u.length>1?v:null;}function q(s){var t=h.create('span',{'class':'highlightNode',className:'highlightNode'},s);return t;}var r={getTextNodes:function(s){if(this.isLeafNode(s)||this.isStopNode(s)){return s;}else if(this.isDiscardNode(s))return [];return j(this.getTextNodes.bind(this),k(s.childNodes));},getHighlightCandidates:function(){return [];},isLeafNode:function(s){return n(s);},isStopNode:function(s){return false;},isDiscardNode:function(s){return false;},createSegmentedRegex:function(s){var t=i.getPunctuation();s=this.escapeAndAddBidirectionalCharsToTokens(s);s=s.map(function(u){u=u.split(/\s+/).join('(?:'+t+'|\\s)+');return u;});return '(^|\\s|'+t+')('+s.join('|')+')(?=(?:$|\\s|'+t+'))';},createNonSegmentedRegex:function(s){return '('+s.map(l).join('|')+')';},escapeAndAddBidirectionalCharsToTokens:function(s){var t='[\\u200E\\u200F\\u202A\\u202B\\u202C\\u202D\\u202E]*';return s.map(function(u){return t+String(u).split('').map(l).join(t)+t;});},createRegex:function(s){s=s.filter(function(z){return z;});if(!s||s.length===0)return new RegExp(null);var t=s.join('|');if(o[t])return o[t];var u=/[\u0E00-\u109F\u2000-\uFFFF]/,v=[],w=[];s.forEach(function(z){if(u.test(z)){w.push(z);}else v.push(z);});var x='';if(v.length){x+=this.createSegmentedRegex(v);x+=w.length?'|':'';}if(w.length)x+=this.createNonSegmentedRegex(w);var y=new RegExp(x,'i');o[t]=y;return y;},searchNodes:function(s,t){return h.scry(s,t);},highlight:function(s,t){t=t.filter(function(w){return w;});if(!t||t.length===0||!s)return;var u=j((function(w){return j(this.getTextNodes.bind(this),this.searchNodes(s,w));}).bind(this),this.getHighlightCandidates()),v=this.createRegex(t);u.forEach((function(w){var x=p(w,v);if(x)if(this.isStopNode(w)){h.setContent(w,x);}else h.replace(w,x);}).bind(this));}};f.exports=r;},null);
__d('SearchCommentHighlighter',['Arbiter','CSS','NodeHighlighter','Parent','UFIUIEvents','csx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n='data-highlight-tokens',o=babelHelpers._extends({},j,{_enableCommentHighlighting:function(){if(this._subscription)return;this._subscription=h.subscribe(l.Changed,(function(p,q){var r=q.form;return this._highlightComments(r);}).bind(this));h.subscribeOnce('pre_page_transition',(function(){return this._disableCommentHighlighting();}).bind(this));},_disableCommentHighlighting:function(){this._subscription.unsubscribe();this._subscription=null;},_highlightComments:function(p){var q=this._getHighlightTokens(p);if(q)j.highlight.call(this,p,q);},_getHighlightTokens:function(p){var q=k.byAttribute(p,n);return q?JSON.parse(q.getAttribute(n)):null;},isDiscardNode:function(p){return i.hasClass(p,'highlightNode');},getHighlightCandidates:function(){return [".UFICommentContent"];},highlight:function(p,q){if(!p.setAttribute)return;p.setAttribute(n,JSON.stringify(q));this._enableCommentHighlighting();}});f.exports=o;},null);
__d('TakeoverSurveyConstants',['keyMirrorRecursive'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports={CardTypes:h({MEGAPHONE:'',INITIAL:'',SPECIFIC_PERSON_PAGE:'',SPECIFIC_PHOTO_VIDEO:'',SPECIFIC_POST:'',SET_OF_POSTS:'',OTHER:'',STORY:''}),ActionTypes:h({UPDATE_CARD_TYPE:'',UPDATE_SELECTED_CARD_TYPE:'',UPDATE_QUESTION_NUMBER:'',UPDATE_ANSWERS:'',FINISH_SURVEY:'',ADD_MODULE:'',CLEAR_MODULES:'',UNMOUNT_MODULE:'',INITIAL_LOAD:'',ADD_SCROLLING:'',END_OF_RESULTS:''}),Constants:{NUMBER_OF_STORIES:6}};},null);
__d('TakeoverSurveyDispatcher',['ReactDispatcher'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=new h();},null);
__d('TakeoverSurveyActions',['TakeoverSurveyConstants','TakeoverSurveyDispatcher'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.ActionTypes,k={updateCardType:function(l){i.dispatch({action:{actionType:j.UPDATE_CARD_TYPE,value:l}});},updateSelectedCardType:function(l){i.dispatch({action:{actionType:j.UPDATE_SELECTED_CARD_TYPE,value:l}});},saveAnswer:function(l,m,n){i.dispatch({action:{actionType:j.UPDATE_ANSWERS,value:l,number:n,checkedValue:m}});},updateQuestionNumber:function(l){i.dispatch({action:{actionType:j.UPDATE_QUESTION_NUMBER,value:l}});},finishSurvey:function(){i.dispatch({action:{actionType:j.FINISH_SURVEY}});},addModule:function(l){i.dispatch({action:{actionType:j.ADD_MODULE,value:l}});},clearModules:function(){i.dispatch({action:{actionType:j.CLEAR_MODULES}});},unmountModule:function(){i.dispatch({action:{actionType:j.UNMOUNT_MODULE}});},initialize:function(l,m,n,o){i.dispatch({action:{actionType:j.INITIAL_LOAD,value:{numberOfQuestions:l,text:m,query:n,browseSid:o}}});},addScrolling:function(l){i.dispatch({action:{actionType:j.ADD_SCROLLING,value:l}});},endOfResults:function(){i.dispatch({action:{actionType:j.END_OF_RESULTS}});}};f.exports=k;},null);
__d('TakeoverSurveyUtils',['TakeoverSurveyConstants'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h.CardTypes,j={hasMultipleQuestions:function(k){return k===i.SET_OF_POSTS||k===i.SPECIFIC_POST||k===i.OTHER||k===i.STORY;},getMultipleQuestionCardType:function(k){return k===i.OTHER?i.OTHER:i.STORY;}};f.exports=j;},null);
__d("XRatingsTakeoverSurveyController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/search\/ratings\/takeover_survey\/",{});},null);
__d('TakeoverSurveyStore',['AsyncRequest','CSS','DOM','FluxStore','HTML','TakeoverSurveyBrowseTypes','TakeoverSurveyConstants','TakeoverSurveyDispatcher','TakeoverSurveyUtils','XRatingsTakeoverSurveyController','cx','getElementText'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t,u,v=n.ActionTypes,w=n.CardTypes,x=n.Constants;t=babelHelpers.inherits(y,k);u=t&&t.prototype;function y(z){'use strict';u.constructor.call(this,z);this.$TakeoverSurveyStore1=null;this.$TakeoverSurveyStore2=[];this.$TakeoverSurveyStore3=false;this.$TakeoverSurveyStore4={SPECIFIC_PERSON_PAGE:null,SPECIFIC_PHOTO_VIDEO:null,STORY:[],OTHER:[]};this.$TakeoverSurveyStore5=false;this.$TakeoverSurveyStore6=0;this.$TakeoverSurveyStore7=null;this.$TakeoverSurveyStore8=0;this.$TakeoverSurveyStore9=null;this.$TakeoverSurveyStore10=null;this.$TakeoverSurveyStore11=null;this.$TakeoverSurveyStore12=[];this.$TakeoverSurveyStore13=true;this.$TakeoverSurveyStore14=false;this.$TakeoverSurveyStore15=null;this.$TakeoverSurveyStore16=null;this.$TakeoverSurveyStore17=null;this.$TakeoverSurveyStore18=null;this.$TakeoverSurveyStore19=null;this.$TakeoverSurveyStore20={};}y.prototype.getCardType=function(){'use strict';return this.$TakeoverSurveyStore1;};y.prototype.getAnswers=function(){'use strict';return this.$TakeoverSurveyStore2;};y.prototype.getQuestionNumber=function(){'use strict';return this.$TakeoverSurveyStore8;};y.prototype.getFinishedSurvey=function(){'use strict';return this.$TakeoverSurveyStore3;};y.prototype.getModules=function(){'use strict';return this.$TakeoverSurveyStore4;};y.prototype.getDisplayModule=function(){'use strict';return this.$TakeoverSurveyStore5;};y.prototype.getQuestion=function(){'use strict';return this.$TakeoverSurveyStore18;};y.prototype.getOptions=function(){'use strict';return this.$TakeoverSurveyStore19;};y.prototype.getFinishText=function(){'use strict';return this.$TakeoverSurveyStore15;};y.prototype.getMegaphoneTitle=function(){'use strict';return this.$TakeoverSurveyStore16;};y.prototype.getMegaphoneText=function(){'use strict';return this.$TakeoverSurveyStore17;};y.prototype.getNumberOfQuestions=function(){'use strict';return this.$TakeoverSurveyStore6;};y.prototype.getModules=function(){'use strict';return this.$TakeoverSurveyStore4;};y.prototype.getAllModules=function(){'use strict';return this.$TakeoverSurveyStore12;};y.prototype.getAll=function(){'use strict';return {cardType:this.getCardType(),answers:this.getAnswers(),questionNumber:this.getQuestionNumber(),finishedSurvey:this.getFinishedSurvey(),displayModule:this.getDisplayModule(),question:this.getQuestion(),options:this.getOptions(),finishText:this.getFinishText(),megaphoneTitle:this.getMegaphoneTitle(),megaphoneText:this.getMegaphoneText(),numberOfQuestions:this.getNumberOfQuestions(),modules:this.getModules(),allModules:this.getAllModules()};};y.prototype.finishSurveyAndLog=function(){'use strict';this.$TakeoverSurveyStore3=true;if(!this.$TakeoverSurveyStore2)return;var z=q.getURIBuilder().getURI();this.$TakeoverSurveyStore2.forEach((function(aa){var ba=j.create('div',null,new l(aa.rating)),ca=s(ba);new h().setURI(z).setData({desired_module:this.$TakeoverSurveyStore11,query:this.$TakeoverSurveyStore9,browse_sid:this.$TakeoverSurveyStore10,browse_type:aa.element?aa.element.type:null,rating:ca}).send();}).bind(this));};y.prototype.__onDispatch=function(z){'use strict';var aa=z.action,ba=true;switch(aa.actionType){case v.UPDATE_CARD_TYPE:this.$TakeoverSurveyStore1=aa.value;this.$TakeoverSurveyStore18=this.$TakeoverSurveyStore20.questions[aa.value];this.$TakeoverSurveyStore19=this.$TakeoverSurveyStore20.options[aa.value];break;case v.UPDATE_SELECTED_CARD_TYPE:this.$TakeoverSurveyStore11=aa.value;break;case v.UPDATE_QUESTION_NUMBER:this.$TakeoverSurveyStore8=aa.value;break;case v.UPDATE_ANSWERS:var ca={module:this.$TakeoverSurveyStore1,rating:aa.value,checkedValue:aa.checkedValue};if(this.$TakeoverSurveyStore1!=null&&p.hasMultipleQuestions(this.$TakeoverSurveyStore1)){var da=p.getMultipleQuestionCardType(this.$TakeoverSurveyStore1);if(aa.number!=null){var ea=this.$TakeoverSurveyStore4[da];this.$TakeoverSurveyStore2[aa.number]=babelHelpers._extends({},ca,{element:ea[aa.number]});this.$TakeoverSurveyStore8=aa.number+1;if(ea[this.$TakeoverSurveyStore8]==null&&this.$TakeoverSurveyStore14)this.finishSurveyAndLog();}}else this.$TakeoverSurveyStore2.push(babelHelpers._extends({},ca,{element:this.$TakeoverSurveyStore4[this.$TakeoverSurveyStore1]}));break;case v.FINISH_SURVEY:this.finishSurveyAndLog();break;case v.ADD_MODULE:i.addClass(aa.value.element,"_2x53");if(!this.$TakeoverSurveyStore5&&!this.finishedSurvey)this.$TakeoverSurveyStore5=true;var fa={element:aa.value.element,role:aa.value.moduleRole,type:aa.value.moduleType};if(aa.value.moduleType===m.STORY){if(this.$TakeoverSurveyStore4[w.STORY].length>=x.NUMBER_OF_STORIES)break;if(this.$TakeoverSurveyStore7&&this.$TakeoverSurveyStore7.getInitialized())this.$TakeoverSurveyStore7.addModulePosition(fa.element,w.STORY);this.$TakeoverSurveyStore4[w.STORY].push(fa);this.$TakeoverSurveyStore4[w.OTHER].push(fa);}else if(aa.value.moduleType===m.PHOTO||aa.value.moduleType===m.VIDEO){this.$TakeoverSurveyStore4[w.SPECIFIC_PHOTO_VIDEO]=fa;this.$TakeoverSurveyStore4[w.OTHER].push(fa);}else if(aa.value.moduleType===m.BLENDED_ENTITIES){this.$TakeoverSurveyStore4[w.SPECIFIC_PERSON_PAGE]=fa;this.$TakeoverSurveyStore4[w.OTHER].push(fa);}break;case v.CLEAR_MODULES:this.$TakeoverSurveyStore4={SPECIFIC_PERSON_PAGE:null,SPECIFIC_PHOTO_VIDEO:null,STORY:[],OTHER:[]};this.$TakeoverSurveyStore2=[];this.$TakeoverSurveyStore8=0;if(!this.$TakeoverSurveyStore3)this.$TakeoverSurveyStore1=w.MEGAPHONE;break;case v.UNMOUNT_MODULE:ba=false;this.$TakeoverSurveyStore5=false;break;case v.INITIAL_LOAD:this.$TakeoverSurveyStore20=aa.value.text;this.$TakeoverSurveyStore15=aa.value.text.finish;this.$TakeoverSurveyStore16=aa.value.text.megaphoneTitle;this.$TakeoverSurveyStore17=aa.value.text.megaphoneText;this.$TakeoverSurveyStore6=aa.value.numberOfQuestions;this.$TakeoverSurveyStore1=n.CardTypes.MEGAPHONE;this.$TakeoverSurveyStore9=aa.value.query;this.$TakeoverSurveyStore10=aa.value.browseSid;break;case v.ADD_SCROLLING:this.$TakeoverSurveyStore7=aa.value;break;case v.END_OF_RESULTS:this.$TakeoverSurveyStore14=true;break;default:ba=false;break;}ba&&this.__emitChange();};f.exports=new y(o);},null);
__d('TakeoverSurveyInitializer',['TakeoverSurveyActions','TakeoverSurveyConstants','TakeoverSurveyDispatcher','TakeoverSurveyStore'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={init:function(m,n,o,p){var q=j.register(function(r){if(r.actionType!==i.ActionTypes.INITIAL_LOAD)return;j.waitFor(k.getDispatchToken());});h.initialize(m,n,o,p);j.unregister(q);}};f.exports=l;},null);
__d('FbFeedHighlighter',['CSS','NodeHighlighter','SearchCommentHighlighter','csx','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m="_58cn",n=babelHelpers._extends({},i,{getHighlightCandidates:function(){return ["._5pbw","._5pbx","._6m6","._6m7","._59tj","._5b-_","._5b_0","._4_j6",".commentBody","._g2z","._6lc","._6s_"];},isStopNode:function(o){return h.hasClass(o,m);},isDiscardNode:function(o){return h.hasClass(o,'text_exposed_link');},highlight:function(o,p){i.highlight.call(this,o,p);j.highlight(o,p);}});f.exports=n;},null);