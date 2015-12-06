/*!CK:793003660!*//*1448917180,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Qthn0"]); }

__d("PluginConnectButtonType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BLUE_BASE:1,WHITE_BASE:2};},null);
__d('transferTextStyles',['Style'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={fontFamily:null,fontSize:null,fontStyle:null,fontWeight:null,lineHeight:null,wordWrap:null};function j(k,l){for(var m in i)if(i.hasOwnProperty(m))i[m]=h.get(k,m);h.apply(l,i);}f.exports=j;},null);
__d('TextMetrics',['DOM','Style','UserAgent','transferTextStyles'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(n){var o=n.clientWidth,p=i.get(n,'-moz-box-sizing')=='border-box';if(p&&j.isBrowser('Firefox < 29'))return o;var q=i.getFloat(n,'paddingLeft')+i.getFloat(n,'paddingRight');return o-q;}function m(n,o){'use strict';this.$TextMetrics1=n;this.$TextMetrics2=!!o;var p='textarea',q='textMetrics';if(this.$TextMetrics2){p='div';q+=' textMetricsInline';}this.$TextMetrics3=h.create(p,{className:q});k(n,this.$TextMetrics3);document.body.appendChild(this.$TextMetrics3);}m.prototype.measure=function(n){'use strict';var o=this.$TextMetrics1,p=this.$TextMetrics3;n=(n||o.value)+'...';if(!this.$TextMetrics2){var q=l(o);i.set(p,'width',Math.max(q,0)+'px');}if(o.nodeName==='TEXTAREA'){p.value=n;}else h.setContent(p,n);return {width:p.scrollWidth,height:p.scrollHeight};};m.prototype.destroy=function(){'use strict';h.remove(this.$TextMetrics3);};f.exports=m;},null);
__d('createIxElement',['DOM','invariant','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l,m){var n='img',o;!(l.sprited||l.uri)?i(0):undefined;if(l.sprited){n=j(n,l.spriteMapCssClass,l.spriteCssClass);o=h.create('i',{className:n});if(m!=null)h.setContent(o,h.create('u',null,m));}else if(l.uri){o=h.create('img',{className:n,src:l.uri});if(m!=null)o.setAttribute('alt',m);if(l.width)o.setAttribute('width',l.width);if(l.height)o.setAttribute('height',l.height);}return o;}f.exports=k;},null);
__d('TypeaheadFacepile',['DOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){}i.render=function(j){var k=[h.create('span',{className:'splitpic leftpic'},[h.create('img',{alt:'',src:j[0]})]),h.create('span',{className:'splitpic'+(j[2]?' toppic':'')},[h.create('img',{alt:'',src:j[1]})])];if(j[2])k.push(h.create('span',{className:'splitpic bottompic'},[h.create('img',{alt:'',src:j[2]})]));return h.create('span',{className:'splitpics clearfix'},k);};f.exports=i;},null);
__d('BasicTypeaheadRenderer',['BadgeHelper','DOM'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=' \u00B7 ';function k(l,m){var n=[];if(l.icon)n.push(i.create('img',{alt:'',src:l.icon}));var o=l.debug_info;if(o)n.push(i.create('span',{className:'debugInfo'},o));if(l.text){var p=[l.text];if(l.is_verified)p.push(h.renderBadge('xsmall','verified'));n.push(i.create('span',{className:'text'},p));}if(l.subtext){var q=[l.subtext];if(l.saved_context){var r=i.create('span',{className:'saved'},[l.saved_context]);q.unshift(r,j);}n.push(i.create('span',{className:'subtext'},q));}var s=i.create('li',{className:l.type||''},n);if(l.text){s.setAttribute('title',l.text);s.setAttribute('aria-label',l.text);}return s;}k.className='basic';f.exports=k;},null);
__d('TypeaheadView',['ArbiterMixin','BasicTypeaheadRenderer','createIxElement','CSS','DOM','Event','ix','Parent','$','emptyFunction','getElementText','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t,u;t=babelHelpers.inherits(v,s(h));u=t&&t.prototype;function v(w,x){'use strict';u.constructor.call(this);this.element=this.content=p(w);Object.assign(this,x);}v.prototype.init=function(){'use strict';this.init=q;this.initializeEvents();this.reset();};v.prototype.initializeEvents=function(){'use strict';m.listen(this.element,{mouseup:this.mouseup.bind(this),mouseover:this.mouseover.bind(this)});};v.prototype.setTypeahead=function(w){'use strict';this.typeahead=w;};v.prototype.setAccessibilityControlElement=function(w){'use strict';this.accessibilityElement=w;};v.prototype.getElement=function(){'use strict';return this.element;};v.prototype.mouseup=function(event){'use strict';if(event.button!=2){this.select(true);event.prevent();}};v.prototype.mouseover=function(event){'use strict';if(this.ignoreMouseover){this.ignoreMouseover=false;return;}if(this.visible)this.highlight(this.getIndex(event));};v.prototype.reset=function(w){'use strict';if(!w)this.disableAutoSelect=false;this.index=-1;this.items=[];this.results=[];this.value='';this.content.innerHTML='';this.inform('reset');return this;};v.prototype.getIndex=function(event){'use strict';return this.items.indexOf(o.byTag(event.getTarget(),'li'));};v.prototype.getSelection=function(){'use strict';var w=this.results[this.index]||null;return this.visible?w:null;};v.prototype.isEmpty=function(){'use strict';return !this.results.length;};v.prototype.isVisible=function(){'use strict';return !!this.visible;};v.prototype.show=function(){'use strict';k.show(this.element);if(this.results&&this.results.length)if(this.autoSelect&&this.accessibilityElement&&this.selected)this.accessibilityElement.setAttribute('aria-activedescendant',l.getID(this.selected));this.accessibilityElement&&this.accessibilityElement.setAttribute('aria-expanded','true');this.visible=true;return this;};v.prototype.hide=function(){'use strict';k.hide(this.element);if(this.accessibilityElement){this.accessibilityElement.setAttribute('aria-expanded','false');this.accessibilityElement.removeAttribute('aria-activedescendant');}this.visible=false;return this;};v.prototype.render=function(w,x){'use strict';this.value=w;if(!x.length){this.accessibilityElement&&this.accessibilityElement.removeAttribute('aria-activedescendant');this.reset(true);return;}var y={results:x,value:w};this.inform('beforeRender',y);x=y.results;var z=this.getDefaultIndex(x);this.results=x;l.setContent(this.content,this.buildResults(x));this.items=this.getItems();this.highlight(z,false);this.inform('render',this.results);};v.prototype.getItems=function(){'use strict';return l.scry(this.content,'li');};v.prototype.buildResults=function(w){'use strict';var x,y=null;if(typeof this.renderer=='function'){x=this.renderer;y=this.renderer.className||'';}else{x=b.TypeaheadRenderers[this.renderer];y=this.renderer;}x=x.bind(this);var z=w.map(function(ba,ca){var da=ba.node||x(ba,ca);da.setAttribute('role','option');return da;}),aa=l.create('ul',{className:y,id:'typeahead_list_'+(this.typeahead?l.getID(this.typeahead):l.getID(this.element))},z);aa.setAttribute('role','listbox');return aa;};v.prototype.showLoadingIndicator=function(){'use strict';var w=j(n('/images/loaders/indicator_blue_small.gif')),x=l.create('li',{className:'typeaheadViewInternalLoading'},w),y=l.create('ul',{role:'listbox'},x);l.setContent(this.content,y);};v.prototype.getDefaultIndex=function(){'use strict';var w=this.autoSelect&&!this.disableAutoSelect;return this.index<0&&!w?-1:0;};v.prototype.next=function(){'use strict';this.highlight(this.index+1);this.inform('next',this.selected);};v.prototype.prev=function(){'use strict';this.highlight(this.index-1);this.inform('prev',this.selected);};v.prototype.getItemText=function(w){'use strict';var x='';if(w){x=w.getAttribute('aria-label');if(!x){x=r(w);w.setAttribute('aria-label',x);}}return x;};v.prototype.setIsViewingSelectedItems=function(w){'use strict';this.viewingSelected=w;return this;};v.prototype.getIsViewingSelectedItems=function(){'use strict';return !!this.viewingSelected;};v.prototype.highlight=function(w,x){'use strict';if(this.selected){k.removeClass(this.selected,'selected');this.selected.setAttribute('aria-selected','false');}if(w>this.items.length-1){w=-1;}else if(w<-1)w=this.items.length-1;if(w>=0&&w<this.items.length){this.selected=this.items[w];k.addClass(this.selected,'selected');this.selected.setAttribute('aria-selected','true');if(this.accessibilityElement)setTimeout((function(){this.accessibilityElement.setAttribute('aria-activedescendant',l.getID(this.selected));}).bind(this),0);}else this.accessibilityElement&&this.accessibilityElement.removeAttribute('aria-activedescendant');this.index=w;this.disableAutoSelect=w==-1;if(x!==false)this.inform('highlight',{index:w,selected:this.results[w],element:this.selected});};v.prototype.select=function(w){'use strict';if(this.headerIndex&&w)return;var x=this.index,y=this.results[x],z=this.element.getAttribute('id');if(y){var aa=(function(ba){this.inform('select',{index:x,clicked:!!w,selected:ba,id:z,query:this.value});this.inform('afterSelect');}).bind(this);if(this.shouldValidateTypeaheadSelection(y)){this.validateTypeaheadSelection(y,aa);}else aa(y);}};v.prototype.shouldValidateTypeaheadSelection=function(w){'use strict';return false;};v.prototype.validateTypeaheadSelection=function(w,x){'use strict';};Object.assign(v.prototype,{events:['highlight','render','reset','select','beforeRender','next','prev'],renderer:i,autoSelect:false,ignoreMouseover:false});f.exports=v;},null);
__d('BucketedTypeaheadView',['DOM','TypeaheadView','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,i);l=k&&k.prototype;m.prototype.render=function(n,o,p){'use strict';var q=o.length>0;for(var r=0;r<o.length;++r)if(o[r].type!=='hashtag')q=false;if(!q)o=this.buildBuckets(n,o);return l.render.call(this,n,o,p);};m.prototype.highlight=function(n,o){'use strict';this.headerIndex=false;if(n==-1&&this.index!==0)n=this.index;while(n>=0&&n<this.items.length&&!this.isHighlightable(this.results[n])){n=n+1;this.headerIndex=true;}l.highlight.call(this,n,o);};m.prototype.buildBuckets=function(n,o){'use strict';if(!this.typeObjects||!o||!o.length)return o;var p=[],q={};for(var r=0;r<o.length;++r){var s=o[r],t=s.render_type||s.type;if(!q.hasOwnProperty(t)){q[t]=p.length;p.push([this.buildBucketHeader(t)]);}s.classNames=s.classNames||t;s.groupIndex=q[t];s.indexInGroup=p[s.groupIndex].length-1;s.globalIndex=r;p[s.groupIndex].push(s);}for(t in this.typeObjects)if(!q.hasOwnProperty(t)&&this.typeObjects[t].show_always){q[t]=p.length;p.push([this.buildBucketHeader(t)]);s=this.buildNoResultsEntry();s.classNames=s.type;s.groupIndex=q[t];s.indexInGroup=p[s.groupIndex].length-1;p[s.groupIndex].push(s);}var u=[];if(this.typeObjectsOrder){for(var v=0;v<this.typeObjectsOrder.length;++v){var w=this.typeObjectsOrder[v];if(q.hasOwnProperty(w))u=u.concat(p[q[w]]);}}else for(var x=0;x<p.length;++x)u=u.concat(p[x]);return u;};m.prototype.buildNoResultsEntry=function(){'use strict';return {uid:'disabled_result',type:'disabled_result',text:j._("No Results")};};m.prototype.buildBucketHeader=function(n){'use strict';var o=this.typeObjects[n];if(o===undefined)throw new Error(n+" is undefined in "+JSON.stringify(this.typeObjects));if(o.markup){o.text=o.markup;delete o.markup;}return this.typeObjects[n];};m.prototype.buildResults=function(n){'use strict';var o=l.buildResults.call(this,n);if(this.typeObjects){return h.create('div',{className:'bucketed'},[o]);}else return o;};m.prototype.isHighlightable=function(n){'use strict';return n.type!='header'&&n.type!='disabled_result';};m.prototype.select=function(n){'use strict';var o=this.results[this.index];if(o&&this.isHighlightable(o))l.select.call(this,n);};m.prototype.updateResults=function(n){'use strict';this.results=n;};m.prototype.normalizeIndex=function(n){'use strict';var o=this.results.length;if(o===0){return -1;}else if(n<-1){return n%o+o+1;}else if(n>=o){return n%o-1;}else return n;};m.prototype.getDefaultIndex=function(n){'use strict';var o=this.autoSelect&&!this.disableAutoSelect;if(this.index<0&&!o)return -1;if(n.length===0)return -1;var p=0;while(!this.isHighlightable(n)&&p<n.length)p++;return p;};m.prototype.prev=function(){'use strict';var n=this.results[this.normalizeIndex(this.index-1)];while(n&&!this.isHighlightable(n)){this.index=this.normalizeIndex(this.index-1);n=this.results[this.normalizeIndex(this.index-1)];}return l.prev.call(this);};m.prototype.next=function(){'use strict';var n=this.results[this.normalizeIndex(this.index+1)];while(n&&!this.isHighlightable(n)){this.index=this.normalizeIndex(this.index+1);n=this.results[this.normalizeIndex(this.index+1)];}return l.next.call(this);};function m(){'use strict';k.apply(this,arguments);}f.exports=m;},null);
__d('ContextualTypeaheadView',['BucketedTypeaheadView','CSS','ContextualLayer','ContextualLayerAutoFlip','ContextualLayerHideOnScroll','DOM','DOMDimensions','Style'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q;p=babelHelpers.inherits(r,h);q=p&&p.prototype;r.prototype.init=function(){'use strict';this.initializeLayer();q.init.call(this);};r.prototype.initializeLayer=function(){'use strict';this.context=this.getContext();this.wrapper=m.create('div');m.appendContent(this.wrapper,this.element);i.addClass(this.element,'uiContextualTypeaheadView');this.layer=new j({context:this.context,position:'below',alignment:this.alignment,causalElement:this.causalElement,permanent:true,shouldSetARIAProperties:false},this.wrapper);this.layer.enableBehavior(l);if(o.isFixed(this.context)||this.autoflip)this.layer.enableBehavior(k);this.subscribe('render',this.renderLayer.bind(this));};r.prototype.show=function(){'use strict';if(this.minWidth){o.set(this.wrapper,'min-width',this.minWidth+'px');}else if(this.width){o.set(this.wrapper,'width',this.width+'px');}else o.set(this.wrapper,'width',n.getElementDimensions(this.context).width+'px');var s=q.show.call(this);this.layer.show();this.inform('show');return s;};r.prototype.hide=function(){'use strict';this.layer.hide();this.inform('hide');return q.hide.call(this);};r.prototype.renderLayer=function(){'use strict';if(!this.isVisible())return;if(this.layer.isShown()){this.layer.updatePosition();}else this.layer.show();};r.prototype.clearText=function(){'use strict';this.layer.getCausalElement().value='';};r.prototype.getContext=function(){'use strict';return this.element.parentNode;};function r(){'use strict';p.apply(this,arguments);}f.exports=r;},null);
__d('TextInputControl',['DOMControl','Event','Input','debounce'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,h);m=l&&l.prototype;function n(o){'use strict';m.constructor.call(this,o);var p=this.getRoot(),q=k(this.update.bind(this),0);i.listen(p,{input:q,keydown:q,paste:q});}n.prototype.setMaxLength=function(o){'use strict';j.setMaxLength(this.getRoot(),o);return this;};n.prototype.getValue=function(){'use strict';return j.getValue(this.getRoot());};n.prototype.isEmpty=function(){'use strict';return j.isEmpty(this.getRoot());};n.prototype.setValue=function(o){'use strict';j.setValue(this.getRoot(),o);this.update();return this;};n.prototype.clear=function(){'use strict';return this.setValue('');};n.prototype.setPlaceholderText=function(o){'use strict';j.setPlaceholder(this.getRoot(),o);return this;};f.exports=n;},null);
__d('TextAreaControl',['Arbiter','ArbiterMixin','CSS','DOMControl','Event','Style','TextInputControl','TextMetrics','classWithMixins','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r,s;function t(v,w){return m.getFloat(v,w)||0;}r=babelHelpers.inherits(u,p(n,q(i)));s=r&&r.prototype;function u(v){'use strict';s.constructor.call(this,v);this.autogrow=j.hasClass(v,'uiTextareaAutogrow');this.autogrowWithPlaceholder=j.hasClass(v,'uiTextareaAutogrowWithPlaceholder');this.width=null;l.listen(v,'focus',this._handleFocus.bind(this));}u.prototype.setAutogrow=function(v){'use strict';this.autogrow=v;return this;};u.prototype.onupdate=function(){'use strict';s.onupdate.call(this);this.updateHeight();};u.prototype.updateHeight=function(){'use strict';if(this.autogrow){var v=this.getRoot();if(!this.metrics)this.metrics=new o(v);if(typeof this.initialHeight==='undefined'){this.isBorderBox=m.get(v,'box-sizing')==='border-box'||m.get(v,'-moz-box-sizing')==='border-box'||m.get(v,'-webkit-box-sizing')==='border-box';this.borderBoxOffset=t(v,'padding-top')+t(v,'padding-bottom')+t(v,'border-top-width')+t(v,'border-bottom-width');this.initialHeight=v.offsetHeight-this.borderBoxOffset;}var w=null;if((!v.value||v.value.length===0)&&this.autogrowWithPlaceholder){w=this.metrics.measure(v.placeholder);}else w=this.metrics.measure();var x=Math.max(this.initialHeight,w.height);if(this.isBorderBox)x+=this.borderBoxOffset;if(this.maxHeight&&x>this.maxHeight){x=this.maxHeight;h.inform('maxHeightExceeded',{textArea:v});}if(x!==this.height){this.height=x;m.set(v,'height',x+'px');h.inform('reflow');this.inform('resize');}}else if(this.metrics){this.metrics.destroy();this.metrics=null;}};u.prototype.resetHeight=function(){'use strict';this.height=-1;this.update();};u.prototype.setMaxHeight=function(v){'use strict';this.maxHeight=v;};u.prototype.setAutogrowWithPlaceholder=function(v){'use strict';this.autogrowWithPlacedholder=v;};u.prototype._handleFocus=function(){'use strict';this.width=null;};u.getInstance=function(v){'use strict';return k.getInstance(v)||new u(v);};f.exports=u;},null);
__d('Typeahead',['ArbiterMixin','BehaviorsMixin','DataStore','DOM','Event','Parent','Run','Style','emptyFunction','ge','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s,t;s=babelHelpers.inherits(u,r(h,i));t=s&&s.prototype;function u(v,w,x,y){'use strict';t.constructor.call(this);this.args={data:v,view:w,core:x};j.set(y,'Typeahead',this);this.element=y;}u.prototype.init=function(v){'use strict';this.init=p;this.getCore();this.getView().setAccessibilityControlElement(this.getCore().getElement());this.proxyEvents();this.initBehaviors(v||[]);this.inform('init',this);this.data.bootstrap();this.core.focus();};u.prototype.getData=function(){'use strict';if(!this.data){var v=this.args.data;this.data=v;this.data.init();}return this.data;};u.prototype.getView=function(){'use strict';if(!this.view){var v=this.args.view,w=v.node||q(v.node_id);if(!w){w=k.create('div',{className:'uiTypeaheadView'});k.appendContent(this.element,w);}if(typeof v.ctor==='string'){this.view=new window[v.ctor](w,v.options||{});}else this.view=new v.ctor(w,v.options||{});this.view.init();this.view.setTypeahead(this.element);}return this.view;};u.prototype.getCore=function(){'use strict';if(!this.core){var v=this.args.core;if(typeof v.ctor==='string'){this.core=new window[v.ctor](v.options||{});}else this.core=new v.ctor(v.options||{});this.core.init(this.getData(),this.getView(),this.getElement());}return this.core;};u.prototype.getElement=function(){'use strict';return this.element;};u.prototype.setHeight=function(v){'use strict';if(v!=='auto')v=v+'px';o.set(this.element,'height',v);};u.prototype.swapData=function(v){'use strict';return this.$Typeahead1(v,true);};u.prototype.swapDataNoCoreReset=function(v){'use strict';return this.$Typeahead1(v,false);};u.prototype.$Typeahead1=function(v,w){'use strict';var x=this.core;this.data=this.args.data=v;v.init();if(x){x.data=v;x.initData();if(w)x.reset();this.proxyEvents();}v.bootstrap();return v;};u.prototype.proxyEvents=function(){'use strict';[this.data,this.view,this.core].forEach(function(v){v.subscribe(v.events,this.inform.bind(this));},this);};u.prototype.initBehaviors=function(v){'use strict';v.forEach(function(w){if(typeof w==='string'){if(b.TypeaheadBehaviors&&b.TypeaheadBehaviors[w]){b.TypeaheadBehaviors[w](this);}else n.onLoad((function(){if(b.TypeaheadBehaviors)(b.TypeaheadBehaviors[w]||p)(this);}).bind(this));}else this.enableBehavior(w);},this);};u.getInstance=function(v){'use strict';var w=m.byClass(v,'uiTypeahead');return w?j.get(w,'Typeahead'):null;};u.initNow=function(v,w,x){'use strict';if(x)x.init(v);v.init(w);};u.init=function(v,w,x,y){'use strict';if(!k.isNodeOfType(v,['input','textarea']))v=k.scry(v,'input')[0]||k.scry(v,'textarea')[0];var z=false;try{z=document.activeElement===v;}catch(aa){}if(z){u.initNow(w,x,y);}else var ba=l.listen(v,'focus',function(){u.initNow(w,x,y);ba.remove();});};f.exports=u;},null);
__d('StickyPlaceholderInput',['Event','CSS','DOM','Input','Parent','emptyFunction','getElementText'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();function o(s){return l.byClass(s,'uiStickyPlaceholderInput');}function p(s){return j.scry(s,'.placeholder')[0];}function q(s){s=s||window.event;var t=s.target||s.srcElement;if(j.isNodeOfType(t,['input','textarea'])){var u=o(t);if(u)setTimeout(function(){i.conditionClass(u,'uiStickyPlaceholderEmptyInput',!t.value.length);},0);}}var r={init:function(){r.init=m;h.listen(document.documentElement,{keydown:q,paste:q,focusout:q});},registerInput:function(s){r.init();var t=s.getAttribute('placeholder')||'';if(t.length)if(document.activeElement===s){var u=h.listen(s,'blur',function(){r.manipulateInput(s,t);u.remove();});}else r.manipulateInput(s,t);},manipulateInput:function(s,t){var u=j.create('div',{className:'placeholder','aria-hidden':'true'},t),v=j.create('div',{className:'uiStickyPlaceholderInput'},u);if(j.isNodeOfType(s,'textarea'))i.addClass(v,'uiStickyPlaceholderTextarea');h.listen(u,'click',function(){s.focus();});if(s.value===t)s.value='';s.setAttribute('placeholder','');j.replace(s,v);j.appendContent(v,s);i.conditionClass(v,'uiStickyPlaceholderEmptyInput',!s.value.length);},setPlaceholderText:function(s,t){var u=o(s);if(!u){k.setPlaceholder(s,t);}else{var v=p(u);v&&j.setContent(v,t);}},getPlaceholderText:function(s){var t=o(s),u=p(t);return u&&n(u);},update:function(s){var t=o(s);if(t)i.conditionClass(t,'uiStickyPlaceholderEmptyInput',!s.value.length);},getVisibleText:function(s){var t=o(s);if(i.hasClass(t,'uiStickyPlaceholderEmptyInput')){var u=p(t);return u&&n(u);}else return s.value;}};f.exports=r;},null);
__d('TypeaheadCore',['Arbiter','ArbiterMixin','CSS','DOM','Event','Focus','Input','InputSelection','Keys','StickyPlaceholderInput','UserAgent_DEPRECATED','bind','emptyFunction','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w;v=babelHelpers.inherits(x,u(i));w=v&&v.prototype;function x(y){'use strict';w.constructor.call(this);Object.assign(this,y);}x.prototype.init=function(y,z,aa){'use strict';this.init=t;this.data=y;this.view=z;this.root=aa;this.initInput();this.inputWrap=k.find(aa,'div.wrap');this.hiddenInput=k.find(aa,'input.hiddenInput');this.value='';this.nextQuery=null;this.selectedText=null;if(this.setValueOnSelect&&j.hasClass(this.inputWrap,'selected'))this.selectedText=this.getValue();this.initView();this.initData();this.initEvents();this.initToggle();this._exclusions=[];};x.prototype.initInput=function(){'use strict';this.element=k.find(this.root,'.textInput');var y=k.scry(this.element,'input')[0];if(y)this.element=y;};x.prototype.initView=function(){'use strict';this.view.subscribe('highlight',m.set.bind(null,this.element));this.view.subscribe('select',(function(y,z){this.select(z.selected);}).bind(this));this.view.subscribe('afterSelect',(function(){this.afterSelect();}).bind(this));};x.prototype.initData=function(){'use strict';this.data.subscribe('notify',(function(y,z){if(this.root.id==z.rootid&&!this.element.disabled&&z.value==this.getValue())this.view.render(z.value,z.results,z.isAsync);}).bind(this));this.data.subscribe('respond',(function(y,z){if(z.forceDisplay||z.value==this.getValue()&&!this.element.disabled&&(this.element.getAttribute('singlestate')!=='true'||z.nullState))this.view.render(z.value,z.results,z.isAsync);}).bind(this));this.data.subscribe('activity',(function(y,z){this.fetching=z.activity;if(!this.fetching)this.nextQuery&&this.performQuery();if(this.loading!=this.fetching){this.loading=this.fetching;this.inform('loading',{loading:this.loading});}}).bind(this));};x.prototype.initEvents=function(){'use strict';l.listen(this.view.getElement(),{mouseup:this.viewMouseup.bind(this),mousedown:this.viewMousedown.bind(this)});var y={blur:s(this,'blur'),focus:s(this,'focus'),click:s(this,'click'),keyup:s(this,'keyup'),keydown:s(this,'keydown'),keypress:s(this,'keypress')};if(r.firefox())y.input=y.keyup;l.listen(this.element,y);};x.prototype.initToggle=function(){'use strict';this.subscribe('blur',this.view.hide.bind(this.view));this.subscribe('focus',this.view.show.bind(this.view));};x.prototype.viewMousedown=function(){'use strict';this.selecting=true;};x.prototype.viewMouseup=function(){'use strict';this.selecting=false;};x.prototype.blur=function(){'use strict';if(this.selecting){this.selecting=false;return;}this.inform('blur');};x.prototype.click=function(){'use strict';var y=o.get(this.element);if(y.start==y.end)this.element.select();this.inform('click');};x.prototype.focus=function(){'use strict';this.checkValue();this.inform('focus');};x.prototype.keyup=function(){'use strict';if(this.resetOnKeyup&&!this.getValue())this.view.reset();this.checkValue();if(this.getValue().length===0)this.inform('change',null);};x.prototype.keydown=function(event){'use strict';if(!this.view.isVisible()||this.view.isEmpty()){setTimeout(this.checkValue.bind(this),0);return;}switch(l.getKeyCode(event)){case p.TAB:this.handleTab(event);return;case p.UP:this.view.prev();break;case p.DOWN:this.view.next();break;case p.ESC:this.view.reset();break;default:setTimeout(this.checkValue.bind(this),0);return;}event.kill();};x.prototype.keypress=function(event){'use strict';if(this.view.getSelection()&&l.getKeyCode(event)==p.RETURN){this.view.select();event.kill();}};x.prototype.handleTab=function(event){'use strict';if(this.preventFocusChangeOnTab)if(this.view.getSelection()){event.kill();}else event.prevent();this.view.select();};x.prototype.select=function(y){'use strict';if(y&&this.setValueOnSelect){var z=y.orig_text||y.text;this.setValue(z);this.setHiddenValue(y.uid);this.selectedText=z;j.addClass(this.inputWrap,'selected');}};x.prototype.afterSelect=function(){'use strict';this.keepFocused?m.set(this.element):this.element.blur();if(!this.noResetAfterSelect)this.resetOnSelect?this.reset():this.view.reset();};x.prototype.unselect=function(){'use strict';if(this.setValueOnSelect){this.selectedText=null;j.removeClass(this.inputWrap,'selected');}this.setHiddenValue();this.inform('unselect',this);};x.prototype.setEnabled=function(y){'use strict';var z=y===false;this.element.disabled=z;j.conditionClass(this.root,'uiTypeaheadDisabled',z);};x.prototype.reset=function(){'use strict';this.unselect();this.setValue();!this.keepFocused&&n.reset(this.element);this.view.reset();this.inform('reset');};x.prototype.getElement=function(){'use strict';return this.element;};x.prototype.setExclusions=function(y){'use strict';this._exclusions=y.map(String);};x.prototype.getExclusions=function(){'use strict';return this._exclusions;};x.prototype.setValue=function(y){'use strict';this.value=this.nextQuery=y||'';n.setValue(this.element,this.value);q.update(this.element);this.inform('change',y);};x.prototype.setHiddenValue=function(y){'use strict';this.hiddenInput.value=y||y===0?y:'';h.inform('Form/change',{node:this.hiddenInput});};x.prototype.getValue=function(){'use strict';return n.getValue(this.element);};x.prototype.getHiddenValue=function(){'use strict';return this.hiddenInput.value||'';};x.prototype.checkValue=function(){'use strict';var y=this.getValue();if(y==this.value)return;if(this.selectedText&&this.selectedText!=y)this.unselect();var z=Date.now(),aa=z-this.time;this.time=z;this.value=this.nextQuery=y;this.performQuery(aa);};x.prototype.performQuery=function(y){'use strict';if(this.selectedText)return;y=y||0;if(this.fetching&&y<this.queryTimeout){this.data.query(this.nextQuery,true,this._exclusions,y);}else{this.data.query(this.nextQuery,false,this._exclusions,y);this.nextQuery=null;}};x.prototype.updateHeight=function(){'use strict';};Object.assign(x.prototype,{events:['blur','focus','click','unselect','loading'],keepFocused:true,resetOnSelect:false,resetOnKeyup:true,setValueOnSelect:false,noResetAfterSelect:false,queryTimeout:250,preventFocusChangeOnTab:false});f.exports=x;},null);
__d('PluginFlyout',['Arbiter','Button','CSS','DOM','DOMEvent','DOMEventListener','Focus','Form','Plugin','TextAreaControl','csx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=h.SUBSCRIBE_NEW,t=h.subscribe,u=h.inform,v=function(x,y){return m.add(x,'click',y);};function w(x,y,z){var aa=this,ba=t(p.CONNECT,function(event,ca){h.unsubscribe(ba);aa.init(x,y,z);aa.connect(event,ca);},s);t(p.DIALOG,function(){aa.init(x,y,z);aa.toggle();},s);}Object.assign(w.prototype,{init:function(x,y,z){if(this.initialized)return;this.initialized=true;k.appendContent(x,JSON.parse(z));var aa=k.find(x,'form'),ba=k.find(aa,"._56zw"),ca=k.find(aa,"._56zx"),da=k.find(aa,"._42x4"),ea=q.getInstance(da);m.add(da,'keyup',function(ia){i.setEnabled(ba,!!ea.getValue());});m.add(window,'keydown',function(ia){if(ia.keyCode===27)ga();});m.add(aa,'submit',function(ia){new l(ia).kill();o.bootstrap(aa);});var fa=y==='tiny'?k.find(document.body,'.pluginPostFlyoutPrompt'):null;this.flyout=x;this.form=aa;this.post_button=ba;this.prompt=fa;var ga=this.hide.bind(this),ha=this.show.bind(this);v(ca,function(ia){new l(ia).kill();ga();});if(fa)v(fa,function(ia){new l(ia).kill();ha();});t(p.CONNECT,this.connect.bind(this),s);t(p.DISCONNECT,function(){ga();},s);t(w.SUCCESS,function(){ga();if(fa)j.hide(fa);},s);t(p.ERROR,function(event,ia){if(ia.action!=='comment')return;k.setContent(k.find(aa,"._56zy"),ia.content);j.hide(ba);},s);},connect:function(event,x){if(x.crossFrame)return;if(this.prompt)j.show(this.prompt);if(!x.story_fbid)this.show();},show:function(){this.shown=true;j.show(this.flyout);j.show(this.post_button);var x=k.scry(this.form,"._5jjo");if(x){n.set(x[0]);}else n.set(this.form.comment);u(w.SHOW);},hide:function(){this.shown=false;j.hide(this.flyout);u(w.HIDE);},toggle:function(){if(this.shown){this.hide();}else this.show();}});Object.assign(w,{SUCCESS:'platform/plugins/flyout/success',SHOW:'platform/plugins/flyout/show',HIDE:'platform/plugins/flyout/hide',success:function(){u(w.SUCCESS);}});f.exports=w;},null);
__d('PluginConnectButton',['Arbiter','CSS','DOM','DOMDimensions','DOMEvent','DOMEventListener','Focus','Form','PlatformWidgetEndpoint','Plugin','PluginConnectButtonType','PluginFlyout','PluginOptin','Style','URI','csx','cx','getElementPosition'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){if(c.__markCompiled)c.__markCompiled();var z=h.SUBSCRIBE_NEW,aa=h.subscribe,ba=function(da,ea){return m.add(da,'click',ea);};function ca(da){this.config=da;this.busy=false;var ea=j.find(da.form,'.pluginConnectButton');this.buttons=ea;this.node_connected=j.find(ea,'.pluginConnectButtonConnected');this.node_disconnected=j.find(ea,'.pluginConnectButtonDisconnected');var fa=(function(ha){new l(ha).kill();if(!this.busy){this.submit();this.busy=this.canpersonalize;}}).bind(this);ba(this.node_disconnected,fa);if(da.buttontype===r.BLUE_BASE){ba(j.find(ea,'.pluginButtonX button'),fa);}else if(da.buttontype===r.WHITE_BASE)ba(this.node_connected,fa);ba(this.node_connected,function(ha){return h.inform(q.DIALOG,ha);});var ga=this.update.bind(this);aa(q.CONNECT,ga,z);aa(q.DISCONNECT,ga,z);aa(q.ERROR,this.error.bind(this),z);aa('Connect.Unsafe.xd/reposition',this.flip.bind(this));aa(s.HIDE,this.hideFlyout.bind(this));if(da.autosubmit)setTimeout(this.submit.bind(this),0);}Object.assign(ca.prototype,{update:function(da,event){this.busy=false;var ea=this.config;if(event.identifier!==ea.identifier)return;var fa=da===q.CONNECT,ga=p.plugins(ea.plugin);ga+='/'+(!fa?'connect':'disconnect');i[fa?'show':'hide'](this.node_connected);i[fa?'hide':'show'](this.node_disconnected);try{if(document.activeElement.nodeName.toLowerCase()==='button'){var ia=fa?this.node_connected:this.node_disconnected,ja=j.find(ia,'button');ja.disabled=false;n.set(ja);}}catch(ha){}ea.connected=fa;ea.form.setAttribute('action',ga);ea.form.setAttribute('ajaxify',ga);},error:function(event,da){this.busy=false;if(da.action in {connect:1,disconnect:1}){j.setContent(this.buttons,da.content);var ea=j.scry(this.buttons,'.confirmButton');if(ea.length===1)n.set(ea[0]);}},submit:function(){if(!this.config.canpersonalize)return this.login();o.bootstrap(this.config.form);this.fireStateToggle();},fireStateToggle:function(){var da=this.config;if(da.connected){q.disconnect(da.identifier);}else q.connect(da.identifier);},login:function(){var da=this.config.plugin;new t(da,v.getRequestURI().getQueryData().api_key).addReturnParams({act:'connect'}).addLoginParams({social_plugin_action:this.config.pluginaction}).start();},flip:function(da,ea){var fa=j.scry(document.body,"._4xn8");if(fa.length===0){return;}else fa=fa[0];var ga=j.scry(this.config.form,'.pluginConnectButtonConnected .pluginButtonIcon'),ha=u.get(ga[0],'display')!=='none'?ga[0]:ga[1],ia=j.find(document.body,'.pluginConnectButtonLayoutRoot'),ja;if(ea.type==='reposition'){i.addClass(ia,"_1f8a");u.set(ia,'padding-left',450-ia.offsetWidth+'px');i.removeClass(ia,"_1f8b");ja=y(ha).x+k.getElementDimensions(ha).width/2-6;}else{i.addClass(ia,"_1f8b");u.set(ia,'padding-left','0px');i.removeClass(ia,"_1f8a");ja=6;}u.set(fa,'left',ja+'px');},hideFlyout:function(){n.set(this.connected?this.node_disconnected:this.node_connected);}});f.exports=ca;},null);
__d('PluginConnection',['Arbiter','CSS','Plugin'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=function(){};Object.assign(k.prototype,{init:function(l,m,n,event){event=event||j.CONNECT;this.identifier=l;this.element=m;this.css=n;h.subscribe([j.CONNECT,j.DISCONNECT],function(o,p){if(l===p.href)i[o===event?'addClass':'removeClass'](m,n);return true;});return this;},connected:function(){return i.hasClass(this.element,this.css);},connect:function(){return h.inform(j.CONNECT,{href:this.identifier},h.BEHAVIOR_STATE);},disconnect:function(){return h.inform(j.DISCONNECT,{href:this.identifier},h.BEHAVIOR_STATE);},toggle:function(){return this.connected()?this.disconnect():this.connect();}});k.init=function(l){for(var m,n=0;n<l.length;n++){m=new k();m.init.apply(m,l[n]);}};f.exports=k;},null);
__d('TypeaheadBestName',['FamilyMentionsData','TokenizeUtil'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k){'use strict';this._typeahead=k;}j.prototype.enable=function(){'use strict';var k=this._typeahead.getView(),l=this._getAvailableAlternateNameFields();this._subscription=k.subscribe('beforeRender',(function(m,n){var o=n.value;for(var p=0;p<n.results.length;++p){var q=n.results[p],r=this._getNameToDisplay(q,o,l);if(r!==null){q.text=r;if(q.hasOwnProperty('default_name')&&q.text!==q.default_name){q.subtext=q.default_name;}else q.subtext=null;}}}).bind(this));};j.prototype.disable=function(){'use strict';this._typeahead.getView().unsubscribe(this._subscription);this._subscription=null;};j.prototype._getNameToDisplay=function(k,l,m){'use strict';if(k.hasOwnProperty('default_name')&&i.isQueryMatch(l,k.default_name))return k.default_name;for(var n=0;n<m.length;n++){var o=k[m[n]];if(o==undefined)continue;for(var p=0;p<o.length;p++){var q=o[p];if(i.isQueryMatch(l,q))return q;}}if(k.hasOwnProperty('default_name'))return k.default_name;return null;};j.prototype._getAvailableAlternateNameFields=function(){'use strict';var k=['alternate_names'];if(h.allowFamilyNames)k.push('family_names');return k;};Object.assign(j.prototype,{_subscription:null});f.exports=j;},null);
__d('legacy:BestNameTypeaheadBehavior',['TypeaheadBestName'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.buildBestAvailableNames=function(i){i.enableBehavior(h);};},3);
__d('CompactTypeaheadRenderer',['BadgeHelper','DOM','TypeaheadFacepile','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(n,o){var p=[];if(n.xhp)return i.create('li',{className:'raw'},n.xhp);var q=n.photos||n.photo;if(q){if(q instanceof Array){q=j.render(q);}else q=i.create('img',{alt:'',src:q});p.push(q);}var r=n.debug_info;if(r)p.push(i.create('span',{className:'debugInfo'},r));if(n.text){var s=[n.text];if(n.is_verified){s.push(h.renderBadge('xsmall','verified'));}else if(n.is_work_user){s.push(h.renderBadge('xsmall','work'));}else if(n.is_trending_hashtag)s.push(h.renderBadge('xsmall','trending'));p.push(i.create('span',{className:'text'},s));}var t=n.subtext,u=n.category;if(t||u){var v=[];t&&v.push(t);t&&u&&v.push(" \u00b7 ");u&&v.push(u);p.push(i.create('span',{className:'subtext'},v));}var w=i.create('li',{className:n.type||''},p);if(n.text){w.setAttribute('title',n.text);w.setAttribute('aria-label',n.text);}return w;}m.className='compact';f.exports=m;},null);