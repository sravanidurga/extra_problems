/*!CK:3760808356!*//*1448853075,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LGUul"]); }

__d("PhotoWarningScreenConfig",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={GraphicEvents:{GRAPHIC_PHOTO_SHOWN_NO_WARNING:"GRAPHIC_PHOTO_SHOWN_NO_WARNING",GRAPHIC_PHOTO_SHOWN_WITH_WARNING:"GRAPHIC_PHOTO_SHOWN_WITH_WARNING",GRAPHIC_PHOTO_WARNING_DISMISSED:"GRAPHIC_PHOTO_WARNING_DISMISSED"},Types:{GRAPHIC:"graphic",OBJECTIONABLE:"objectionable"}};},null);
__d('Facepile.react',['joinClasses','Link.react','Pixelz.react','React','List.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o={small:24,medium:32,large:50},p=k.createClass({displayName:'Facepile',propTypes:{className:n.string,onFaceClick:n.func,onComponentDidMount:n.func,profiles:n.arrayOf(n.shape({URL:n.string,name:n.string.isRequired,uniqueID:n.number.isRequired,profilePicURI:n.string.isRequired})).isRequired,size:n.oneOf(['small','medium','large']).isRequired},_onFaceClick:function(q,r){if(this.props.onFaceClick)this.props.onFaceClick(q,r);},componentDidMount:function(){if(this.props.onComponentDidMount)this.props.onComponentDidMount();},renderFace:function(q,r){var s=o[this.props.size];return (k.createElement('li',{className:"_43q7",key:q.uniqueID,onClick:this._onFaceClick.bind(this,q,r)},k.createElement(i,{href:q.URL,'aria-label':q.name,'data-hover':'tooltip',className:"_2rt_",'data-tooltip-alignh':'left'},k.createElement(j,{src:q.profilePicURI,width:s,height:s,className:'img'}))));},render:function(){var q=h(this.props.className,"_43qm"+(this.props.size=='small'?' '+"_43q9":'')+(this.props.size=='medium'?' '+"_43qc":'')+(this.props.size=='large'?' '+"_43qf":''));return (k.createElement('div',{className:q},k.createElement(l,{className:'uiFacepile/list',direction:'horizontal',spacing:'none',border:'none'},this.props.profiles.map(this.renderFace))));}});f.exports=p;},null);
__d('tickerPhoteSnowLiftOpenStatus',['ArbiterMixin'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='CheckIsOpen',j={registerOpenChecker:function(k){return j.subscribe(i,function(l,m){if(k())m.is_Open=true;});},checkIsOpen:function(){var k={is_Open:false};j.inform(i,k);return k.is_Open;}};Object.assign(j,h);f.exports=j;},null);
__d('ImageUtils',['UserAgent_DEPRECATED'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={hasLoaded:function(j){if(j.naturalWidth!==undefined){return j.complete&&j.width!==0;}else if(j.height==20&&j.width==20&&j.complete){return false;}else if(j.complete===undefined&&h.webkit()<500){var k=new Image();k.src=j.src;return k.complete;}return j.complete;}};f.exports=i;},null);
__d('PhotoMultiPhotosThumb',['Event','Style'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=1200,k={init:function(l,m){var n=null,o=0;function p(r){o=r;m.forEach(function(s,t){i.set(s,'opacity',t===r?1:0);});}function q(){p((o+1)%m.length);n=setTimeout(q,j);}h.listen(l,'mouseenter',function(){if(n)return;o=0;q();});h.listen(l,'mouseleave',function(){p(0);window.clearTimeout(n);n=null;});}};f.exports=k;},null);
__d('PhotoEverstoreLogger',['Event','AsyncRequest','ImageUtils'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={BATCH_WINDOW_MS:500,storedLog:[]};function l(){}Object.assign(l,{_log:function(n){k.storedLog.push(n);if(k.storedLog.length==1)setTimeout(m,k.BATCH_WINDOW_MS);},logImmediately:function(n){l._log(n);},registerForLogging:function(n){var o=document.getElementById(n);if(o!=null)if(j.hasLoaded(o)){l._log(o.src);}else h.listen(o,'load',function(event){l._log(o.src);});}});function m(){var n=k.storedLog;k.storedLog=[];var o=JSON.stringify(n);new i().setURI('/ajax/photos/logging/everstore_logging.php').setData({loggedUrls:o}).setMethod('POST').setOption('suppressErrorHandlerWarning',true).setOption('suppressErrorAlerts',true).send();}f.exports=l;},null);
__d('PhotoSessionLog',['AsyncRequest','Run','URI','Vector'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(){}Object.assign(l,{UNKNOWN:0,ESC:1,X:2,OUTSIDE:3,UNLOAD:4,NAVIGATE:5,AGGREGATE:6,LEAVE:7,PERMALINK:0,SNOWLIFT:6,SNOWDOWN:13,AGGREGATION_COUNT:20,set:null,time:null,views:0,fbidList:[],details:{},width:0,height:0,first:false,last:false,logIds:false,version:null,source:null,buttonLikes:0,pagingAction:'',cycle:false,endOfRelevant:false,relevantCount:0,initLogging:function(m){this.set=null;this.time=new Date();this.views=0;this.hiResLoads=0;this.fullScreenViews={};this.first=true;this.last=false;this.logIds=false;this.eid='';this.version=m;this.buttonLikes=0;this.pagingAction='';this.cycle=false;this.endOfRelevant=false;this.relevantCount=0;this.panoramaClicks=0;this.panoramaImpressions=0;if(m===l.SNOWLIFT){var n=k.getViewportDimensions();this.width=n.x;this.height=n.y;}},setLogFbids:function(m){this.logIds=m;},setEid:function(m){this.eid=m;},setPhotoSet:function(m){this.set=m;},addButtonLike:function(){this.buttonLikes++;},setPagingAction:function(m){this.pagingAction=m;},setCycle:function(m){this.cycle=m;},setEndOfRelevant:function(m){this.endOfRelevant=m;},setRelevantCount:function(m){this.relevantCount=m;},setEndMetrics:function(m){this.endMetrics=m;},setSource:function(m){this.source=m;},addPanoramaClick:function(){this.panoramaClicks++;},addPanoramaImpression:function(){this.panoramaImpressions++;},addPhotoView:function(m,n,o){if(this.logIds&&this.views>=this.AGGREGATION_COUNT)this.logPhotoViews(this.AGGREGATE);this.views++;if(m)this.fbidList.push([m.fbid,m.owner,Date.now()]);if(n)this.hiResLoads++;if(o)this.fullScreenViews[m.fbid]=true;},logEnterFullScreen:function(m){this.fullScreenViews[m]=true;},addDetailData:function(m,n){if(!this.details[m])this.details[m]={t:n.num_tags,l:n.has_location,c:n.has_caption,cm:n.comment_count,lk:n.like_count,w:n.width,h:n.height,ad:'{}',p:this.pagingAction};},updateAdData:function(m,n){if(this.details[m])this.details[m].ad=JSON.stringify(n);},logPhotoViews:function(m){if(!this.views)return;if(m!=this.AGGREGATE)this.last=true;var n={set:this.set,time:new Date()-this.time,fbids:this.logIds?this.fbidList:[],details:this.logIds?this.details:{},eid:this.eid,first:this.first,last:this.last,close:m?m:this.UNKNOWN,button_likes:this.buttonLikes,version:this.version,endmetric:this.endMetrics,cycle:this.cycle,end_relev:this.endOfRelevant,relev_count:this.relevantCount,source:this.source,panorama_clicks:this.panoramaClicks,panorama_impressions:this.panoramaImpressions};if(this.version===l.SNOWLIFT){var o=k.getViewportDimensions();n.width=o.x||this.width;n.height=o.y||this.height;if(this.hiResLoads>0)n.hires_loads=this.hiResLoads;if(this.last){var p=Object.keys(this.fullScreenViews).length;if(p>0)n.fullscreen=p;}}var q=new j('/ajax/photos/logging/session_logging.php').setSubdomain('www');new h().setAllowCrossPageTransition(true).setURI(q).setOption('asynchronous_DEPRECATED',m!=l.UNLOAD).setOption('suppressErrorHandlerWarning',true).setData(n).send();this.views=0;this.hiResLoads=0;this.fbidList=[];this.details={};this.first=false;this.buttonLikes=0;if(this.last){this.set=null;this.logIds=false;this.fullScreenViews={};}}});i.onUnload(function(){l.logPhotoViews(l.UNLOAD);});i.onLeave(function(){l.logPhotoViews(l.LEAVE);});f.exports=l;},null);
__d('PhotoViewerImage',['PhotoEverstoreLogger','URI','Vector'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l){'use strict';this._hiResDimensions=l.hiResDimensions&&j.deserialize(l.hiResDimensions);this._normalDimensions=l.normalDimensions&&j.deserialize(l.normalDimensions);this._info=l.info;this._video=l.video;this._shouldLog=l.everstoreLogThis;this._hiResSrc=l.hiResSrc;this._normalSrc=l.normalSrc;this._thumbSrc=l.thumbSrc;this._isInverted=false;this._data=l;}k.prototype.getURIString=function(){'use strict';return new i(this._info.permalink).getUnqualifiedURI().toString();};k.prototype.hasHiResDimensions=function(){'use strict';return !!this._hiResDimensions;};k.prototype.getHiResDimensions=function(){'use strict';return this._hiResDimensions;};k.prototype.getNormalDimensions=function(){'use strict';return this._normalDimensions;};k.prototype.getHiResSrc=function(){'use strict';return this._hiResSrc;};k.prototype.getNormalSrc=function(){'use strict';return this._normalSrc;};k.prototype.getThumbSrc=function(){'use strict';return this._thumbSrc;};k.prototype.getInfo=function(){'use strict';return this._info;};k.prototype.getPermalink=function(){'use strict';return this._info.permalink;};k.prototype.getHighestResSrc=function(){'use strict';return this._hiResSrc||this._normalSrc;};k.prototype.preload=function(l){'use strict';var m;if(this.getHighestResSrc())if(l&&!this._resource){this._resource=new Image();this._resource.src=this.getHighestResSrc();m=this._resource.src;if(this._shouldLog)h.logImmediately(this._resource.src);}else if(!l&&!this._small){this._small=new Image();this._small.src=this._normalSrc||this._hiResSrc;m=this._small.src;if(this._shouldLog)h.logImmediately(this._small.src);}return m;};k.prototype.setNormalDimensions=function(l,m){'use strict';this._normalDimensions=new j(l,m);};k.prototype.setHiResDimensions=function(l,m){'use strict';this._hiResDimensions=new j(l,m);};k.prototype.invertDimensions=function(){'use strict';if(this.hasHiResDimensions())this._hiResDimensions=new j(this._hiResDimensions.y,this._hiResDimensions.x);this._normalDimensions=new j(this._normalDimensions.y,this._normalDimensions.x);this._isInverted=!this._isInverted;};k.prototype.copy=function(){'use strict';return new k(this._data);};f.exports=k;},null);
__d('PhotosConst',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={VIEWER_PERMALINK:0,VIEWER_SNOWLIFT:6,VIEWER_VAULTBOX:8,VIEWER_SNOWFLAKE:14,VIEWER_COMPOSER:16,VIEWER_CAROUSEL:19,VIEWER_PERMALINK_STRING:'permalink',VIEWER_SNOWLIFT_STRING:'snowlift',VIEWER_VAULTBOX_STRING:'vaultbox',VIEWER_CAROUSEL_STRING:'carousel',BULK_EDITOR:3,BULK_EDITOR_REACT:15,EDITOR_MODAL:17,FLASH_UPLOADER:4,HTML5_UPLOADER:10,SIZE_NORMAL:'n',PIC_NORMAL_FBX_SIZE:180,ALBUM_NAME_MAXLEN:65};f.exports=h;},null);
__d('PhotosUtils',['Vector'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){}Object.assign(i,{getNearestBox:function(j,k){var l=Infinity,m=null;for(var n in j){var o=j[n];if(o.contains(k)){var p=k.distanceTo(o.getCenter());if(p<l){l=p;m=n;}}}return m;},absoluteToNormalizedPosition:function(j,k){var l=h.getElementPosition(j),m=h.getElementDimensions(j),n=k.sub(l).mul(100/m.x,100/m.y);n.domain='pure';return n;},normalizedToAbsolutePosition:function(j,k){var l=h.getElementPosition(j),m=h.getElementDimensions(j),n=k.mul(m.x/100,m.y/100).add(l);n.domain='document';return n;},isFacebox:function(j){return j.match(/^face:/);},isTag:function(j){return j.match(/^tag:/);}});f.exports=i;},null);
__d('PhotoPermalinkURI',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isValid:function(i){return h.parse(i)!==null;},parse:function(i){if(this.isValidLegacy(i)){var j=i.getQueryData();if(j.fbid)return {photo_id:j.fbid,set_token:j.set};if(j.id&&j.pid)return {photo_id:j.id+':'+j.pid,set_token:j.set};return null;}var k=i.getPath();if(k[k.length-1]==='/')k=k.substring(0,k.length-1);var l=k.split('/');if(l.length>=3&&l[2]==='photos')if(l.length===4&&/^\d+$/.exec(l[3])!==null){return {photo_id:l[3],set_token:null};}else if(l.length===5&&/^\d+$/.exec(l[4])!==null)return {photo_id:l[4],set_token:l[3]};return null;},isValidLegacy:function(i){var j=i.getPath();if(j[j.length-1]==='/')j=j.substring(0,j.length-1);if(j==='/photo.php'||j==='/force_photo/photo.php'||j==='/photo'||j==='/force_photo/photo/index.php'||j==='/photo/index.php'||j==='/force_photo/photo'||j==='/video.php'||j==='/video/video.php')return true;return false;}};f.exports=h;},null);
__d('VideoPermalinkURI',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isValid:function(i){return h.parse(i)!==null;},parse:function(i){if(this.isValidLegacy(i)){var j=i.getQueryData();if(j.v)return {video_id:j.v,set_token:j.set};return null;}var k=i.getPath();if(k[k.length-1]==='/')k=k.substring(0,k.length-1);var l=k.split('/');if(l.length>=3&&l[2]==='videos')if(l.length===4&&/^\d+$/.exec(l[3])!==null){return {video_id:l[3],set_token:null};}else if(l.length===5&&/^\d+$/.exec(l[4])!==null)return {video_id:l[4],set_token:l[3]};return null;},isValidLegacy:function(i){var j=i.getPath();if(j[j.length-1]==='/')j=j.substring(0,j.length-1);if(j==='/photo.php'||j==='/force_photo/photo.php'||j==='/photo'||j==='/force_photo/photo/index.php'||j==='/photo/index.php'||j==='/force_photo/photo'||j==='/video.php'||j==='/video/video.php')return true;return false;}};f.exports=h;},null);
__d('PhotoStreamCache',['DOM','HTML','PhotoEverstoreLogger','PhotosConst','PhotoViewerImage','Rect','UIPagelet','URI','Vector','createArrayFromMixed','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();function s(){'use strict';}s.prototype.init=function(t,u,v,w,x){'use strict';this.version=t;this.pageletName=u;this.pageletRootID=v;this.tagSuggestionMode=x;this.bufferSize=s.BUFFER_SIZE;this.fullBucketSize=s.FULL_BUCKET_SIZE;this.initError=false;this.isActive=true;this.usesOpaqueCursor=false;this.usesNonCircularPhotoSet=false;this.reachedLeftEnd=false;this.reachedRightEnd=false;this.leftLock=false;this.rightLock=false;this.useAjaxPipe=true;this.logger=w;this.viewAsUser=null;this.reset();};s.prototype.setViewAs=function(t){'use strict';this.viewAsUser=t;};s.prototype.isInViewAsMode=function(){'use strict';return !!this.viewAsUser;};s.prototype.getViewAsUserId=function(){'use strict';return this.viewAsUser;};s.prototype.getUsesOpaqueCursor=function(){'use strict';return this.usesOpaqueCursor;};s.prototype.isNonCircularPhotoSet=function(){'use strict';return this.usesNonCircularPhotoSet;};s.prototype.setReachedLeftEnd=function(){'use strict';this.reachedLeftEnd=true;};s.prototype.setReachedRightEnd=function(){'use strict';this.reachedRightEnd=true;};s.prototype.hasReachedLeftEnd=function(){'use strict';return this.reachedLeftEnd;};s.prototype.hasReachedRightEnd=function(){'use strict';return this.reachedRightEnd;};s.prototype.nonCircularPhotoSetCanPage=function(t){'use strict';if(!this.isNonCircularPhotoSet())return true;if(t<0)return this.getCursorPos()||!this.hasReachedLeftEnd();if(t>0)return this.getLength()-1!=this.getCursorPos()||!this.hasReachedRightEnd();return true;};s.prototype.setUseAjaxPipe=function(t){'use strict';this.useAjaxPipe=t;};s.prototype.reset=function(){'use strict';this.cache={image:{},extra:{},html:{}};this.fbidList=[];this.loaded=false;this.allLoaded=false;this.permalinkMap={};this.position=0;this.totalCount=null;this.firstCursor=null;this.firstCursorIndex=null;this.firstOpaqueCursor=null;};s.prototype.waitForInitData=function(){'use strict';this.fbidList.push(s.INIT_PLACEHOLDER);};s.prototype.destroy=function(){'use strict';this.reset();this.isActive=false;};s.prototype.isLoaded=function(){'use strict';return this.loaded;};s.prototype.canPage=function(){'use strict';if(!this.isLoaded())return false;if(this.totalCount!==null)return this.totalCount>1;if(this.usesNonCircularPhotoSet)return true;return this.getLength()>1;};s.prototype.errorInCurrent=function(){'use strict';if(this.initError){return true;}else if(!this.isLoaded())return false;return this.checkErrorAt(this.getCursor());};s.prototype.getLength=function(){'use strict';return this.fbidList.length;};s.prototype.getPhotoSet=function(){'use strict';return this.photoSetQuery.set;};s.prototype.getPhotoSetQuery=function(){'use strict';return this.photoSetQuery;};s.prototype.getCurrentImageData=function(){'use strict';return this.getImageData(this.getCursor());};s.prototype.addViewAsToURI=function(t){'use strict';var u=new o(t);if(this.isInViewAsMode())u.addQueryData({viewas:this.getViewAsUserId()});return u;};s.prototype.getOpaqueCursor=function(t){'use strict';if(this.getImageData(t)){if(this.version===k.VIEWER_VAULTBOX)return this.getImageData(t).getInfo().opaquecursor;return this.getImageData(t).info.opaquecursor;}if(t==this.firstCursor)return this.firstOpaqueCursor;return null;};s.prototype.getImageData=function(t){'use strict';var u=this.getCacheContent(t,s.IMAGE_DATA);if(u)u.info.permalink=this.addViewAsToURI(u.info.permalink);return u;};s.prototype.getCurrentHtml=function(){'use strict';return this.getCacheContent(this.getCursor(),s.HTML);};s.prototype.getCurrentExtraData=function(){'use strict';return this.getCacheContent(this.getCursor(),s.EXTRA);};s.prototype.getCacheContent=function(t,u){'use strict';if(!t||t===s.ERROR_ID||t===s.INIT_PLACEHOLDER)return null;return this.cache[u][t];};s.prototype.getCursorPos=function(){'use strict';return this.position;};s.prototype.getCursor=function(){'use strict';if(this.position>=0&&this.position<this.getLength())return this.fbidList[this.position];return null;};s.prototype.getCursorAt=function(t){'use strict';return this.fbidList[t];};s.prototype.getCursorForURI=function(t){'use strict';return this.permalinkMap[t];};s.prototype.calculatePositionForMovement=function(t){'use strict';var u=this.position+t;if(this.allLoaded){var v=this.getLength();u=(v+u%v)%v;}return u;};s.prototype.isValidMovement=function(t){'use strict';if(!this.isLoaded()||!this.canPage())return false;var u=this.calculatePositionForMovement(t);return this.getCursor()>0||u>=0&&u<this.getLength();};s.prototype.moveCursor=function(t){'use strict';if(!this.isValidMovement(t))return;this.position=this.calculatePositionForMovement(t);if(t!==0)this.loadMoreIfNeccessary(t>0);};s.prototype.checkErrorAt=function(t){'use strict';if(!this.isLoaded())return false;if(t===s.ERROR_ID)return true;return false;};s.prototype.getRelativeMovement=function(t){'use strict';for(var u=0;u<this.getLength();u++)if(this.fbidList[u]==t)return u-this.position;return null;};s.prototype.preloadImages=function(t){'use strict';var u,v,w=this.getLength(),x=this.cache.image,y=s.BUFFER_SIZE;if(w>y*2){u=(this.position+w-y%w)%w;v=(this.position+y)%w;}else{u=0;v=w-1;}while(u!=v){var z,aa=this.fbidList[u],ba=t&&t(x[aa]);if(this.version===k.VIEWER_VAULTBOX){z=x[aa]&&x[aa].preload(ba);}else if(x[aa]&&x[aa].url)if(ba&&!x[aa].resource){x[aa].resource=new Image();x[aa].resource.src=x[aa].url;z=x[aa].url;if(x[aa].everstoreLogThis===true)j.logImmediately(x[aa].resource.src);}else if(!ba&&!x[aa].small){x[aa].small=new Image();x[aa].small.src=x[aa].smallurl||x[aa].url;z=x[aa].small.src;if(x[aa].everstoreLogThis===true)j.logImmediately(x[aa].small.src);}if(this.logger&&z)this.logger.log(z);u=(u+1)%w;}};s.prototype.loadMoreIfNeccessary=function(t){'use strict';if(this.allLoaded||t&&this.rightLock||!t&&this.leftLock)return;var u=t?1:-1,v=this.position+this.bufferSize*u;if(v<0&&!this.checkErrorAt(this.getEndCursor(false))){this.leftLock=true;this.fetch(this.fullBucketSize,false);}else if(v>this.getLength()&&!this.checkErrorAt(this.getEndCursor(true))){this.rightLock=true;this.fetch(this.fullBucketSize,true);}};s.prototype.getEndCursor=function(t){'use strict';return t?this.fbidList[this.getLength()-1]:this.fbidList[0];};s.prototype.calculateRelativeIndex=function(t,u,v){'use strict';if(!this.totalCount)return null;var w=this.fbidList.indexOf(u),x=this.fbidList.indexOf(v);if(w===-1||x===-1)return null;var y=x-w;return (t+y+this.totalCount)%this.totalCount;};s.prototype.calculateDistance=function(t,u){'use strict';var v=this.fbidList.indexOf(t),w=this.fbidList.indexOf(u);if(v===-1||w===-1)return null;return (w-v+this.getLength())%this.getLength();};s.prototype.fetch=function(t,u){'use strict';var v=this.getEndCursor(u),w=babelHelpers._extends({cursor:v,version:this.version,end:this.getEndCursor(!u),fetchSize:u?t:-1*t,relevant_count:this.relevantCount,opaqueCursor:this.getOpaqueCursor(v),tagSuggestionMode:this.tagSuggestionMode},this.photoSetQuery);if(this.isInViewAsMode())w.viewas=this.getViewAsUserId();if(this.totalCount&&this.firstCursorIndex!==null){w.total=this.totalCount;w.cursorIndex=this.calculateRelativeIndex(this.firstCursorIndex,this.firstCursor,v);}var x=r(this.pageletRootID);if(!x){x=h.create('div',{id:this.pageletRootID});h.appendContent(document.body,x);}n.loadFromEndpoint(this.pageletName,x,w,{usePipe:this.useAjaxPipe,automatic:true,jsNonblock:true,crossPage:true});if(!this.useAjaxPipe)this.setUseAjaxPipe(true);};s.prototype.storeToCache=function(t){'use strict';var u={};if(!this.isActive)return u;if('error' in t){this.processErrorResult(t.error);u.error=true;return u;}if('init' in t){this.processInitResult(t.init);u.init={logids:t.init.logids,fbid:t.init.fbid,loggedin:t.init.loggedin,fromad:t.init.fromad,withinbusiness:t.init.withinbusiness,eid:t.init.eid};}if('image' in t){this.processImageResult(t.image);u.image=true;}if('data' in t){this.processDataResult(t.data);u.data=true;}return u;};s.prototype.processInitResult=function(t){'use strict';if(this.loaded)return;this.usesOpaqueCursor=t.usesopaquecursor;this.usesNonCircularPhotoSet=t.isnoncircularphotoset;this.loaded=true;this.photoSetQuery=t.query;if(t.bufferSize)this.bufferSize=t.bufferSize;if(t.fullBucketSize)this.fullBucketSize=t.fullBucketSize;if(this.fbidList.length===0){this.fbidList.push(t.fbid);this.rightLock=true;}else{var u=this.fbidList.indexOf(s.INIT_PLACEHOLDER);if(u!=-1)this.fbidList[u]=t.fbid;}this.firstCursor=t.fbid;this.firstOpaqueCursor=t.opaquecursor;if('initIndex' in t&&'totalCount' in t){this.firstCursorIndex=t.initIndex;this.totalCount=t.totalCount;}if(this.version==k.VIEWER_PERMALINK){var v=t.initialBucketSize?t.initialBucketSize:s.INIT_BUCKET_SIZE;this.fetch(v,true);}};s.prototype.processImageResult=function(t){'use strict';for(var u in t){if(u===this.firstCursor&&t[u].everstoreLogThis)j.logImmediately(t[u].url);if(this.version===k.VIEWER_VAULTBOX){var v=t[u];this.cache.image[u]=new l(v);this.permalinkMap[this.cache.image[u].getURIString()]=u;}else{this.cache.image[u]=t[u];if(t[u].dimensions)this.cache.image[u].dimensions=p.deserialize(t[u].dimensions);if(t[u].originalDimensions)this.cache.image[u].originalDimensions=p.deserialize(t[u].originalDimensions);if(t[u].smalldims)this.cache.image[u].smalldims=p.deserialize(t[u].smalldims);this.permalinkMap[new o(t[u].info.permalink).getUnqualifiedURI().toString()]=u;}}};s.prototype.attachToFbidsList=function(t,u,v){'use strict';if(this.allLoaded)return;if(u===-1){for(var w=t.length-1;w>=0;w--){this.fbidList.unshift(t[w]);this.position++;}this.leftLock=false;}else{for(var x=0;x<t.length;x++)this.fbidList.push(t[x]);this.rightLock=false;}if(v)this.setAllLoaded();};s.prototype.setAllLoaded=function(){'use strict';this.allLoaded=true;if(this.getCursor()===null)this.position=this.calculatePositionForMovement(0);};s.prototype.processDataResult=function(t){'use strict';for(var u in t){if(!this.cache.html[u])this.cache.html[u]={};for(var v in t[u].html){var w=t[u].html[v];if(typeof w==='string')w=i(w).getRootNode();this.cache.html[u][v]=q(w.childNodes);}if(!('extra' in t[u])){this.cache.extra[u]=null;continue;}this.cache.extra[u]={tagRects:{}};if(!Array.isArray(t[u].extra.tagRects))for(var x in t[u].extra.tagRects)if(t[u].extra.tagRects[x])this.cache.extra[u].tagRects[x]=m.deserialize(t[u].extra.tagRects[x]);Object.keys(t[u].extra).forEach((function(y){if(y=='tagRects')return;this.cache.extra[u][y]=t[u].extra[y];}).bind(this));}};s.prototype.processErrorResult=function(t){'use strict';if(!this.isLoaded()){this.initError=true;return;}var u=t.side,v=[s.ERROR_ID];this.attachToFbidsList(v,u);};s.prototype.setTotalCount=function(t){'use strict';this.totalCount=t;};s.prototype.setFirstCursorIndex=function(t){'use strict';this.firstCursorIndex=t;};Object.assign(s,{ERROR:'error',HTML:'html',IMAGE_DATA:'image',EXTRA:'extra',BUFFER_SIZE:3,INIT_BUCKET_SIZE:4,FULL_BUCKET_SIZE:12,ERROR_ID:-1,INIT_PLACEHOLDER:1});f.exports=s;},null);
__d('PhotoViewer',['Bootloader','CSS','DOM','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(){'use strict';this.image=null;this.root=null;this.stream=null;}l.prototype.getEventString=function(m){'use strict';var n=this.getEventPrefix();if(n)return n+'.'+m;return null;};l.prototype.getImage=function(){'use strict';return this.image;};l.prototype.getPosition=function(){'use strict';return this.stream?this.stream.getCursor():null;};l.prototype.getRoot=function(){'use strict';return this.root;};l.prototype.hiliteAllBoxes=function(){'use strict';j.scry(this.stageWrapper,'div.tagsWrapper div.faceBox').forEach(function(m){i.addClass(m,'otherActive');});};l.bootstrap=function(m,n){'use strict';h.loadModules(["PhotoSnowlift"],function(o){o.bootstrap(m,n);});};Object.assign(l.prototype,{getEventPrefix:k.thatReturnsNull,getSourceString:k.thatReturnsNull,getVersionConst:k.thatReturnsNull,getViewerSource:k.thatReturnsNull,getViewerSet:k.thatReturnsNull});f.exports=l;},null);
__d("XGraphicPhotoWarningLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/graphic_photo\/logging\/",{event:{type:"Enum",required:true,enumType:1}});},null);
__d('PhotoWarningScreen',['AsyncRequest','CSS','cx','Event','PhotoWarningScreenConfig','XGraphicPhotoWarningLoggingController'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o){'use strict';k.listen(o.seePhotoButton,'click',function(){i.hide(o.warningOverlay);i.removeClass(o.innerContent,"_1t6v");if(o.warningType===l.Types.GRAPHIC)n.logGraphic(l.GraphicEvents.GRAPHIC_PHOTO_WARNING_DISMISSED);});}n.logGraphic=function(event){var o=m.getURIBuilder().setEnum('event',event).getURI();new h(o).setAllowCrossPageTransition(true).send();};f.exports=n;},null);
__d('PhotoWarningScreenMixin',['CSS','DOM','csx','cx','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=l,n={getGraphicWarningContainer:m,getGraphicWarningHiddenContent:m,_graphicWarningMarkup:null,_graphicWarningOverlay:null,_graphicWarningHiddenContentWrapper:null,initGraphicWarningDOM:function(o){this._graphicWarningMarkup=o;this._graphicWarningOverlay=i.scry(o,"._1t6w").pop();this._graphicWarningHiddenContentWrapper=i.scry(o,"._1t6x").pop();},showGraphicWarning:function(){this._graphicWarningOverlay&&h.show(this._graphicWarningOverlay);if(this.getGraphicWarningContainer().contains(this._graphicWarningMarkup))return;if(this._graphicWarningHiddenContentWrapper){this.getGraphicWarningContainer().replaceChild(this._graphicWarningMarkup,this.getGraphicWarningHiddenContent());h.addClass(this._graphicWarningHiddenContentWrapper,"_1t6v");this._graphicWarningHiddenContentWrapper.appendChild(this.getGraphicWarningHiddenContent());}},hideGraphicWarning:function(){if(!this.getGraphicWarningContainer().contains(this._graphicWarningMarkup))return;this.getGraphicWarningContainer().replaceChild(this.getGraphicWarningHiddenContent(),this._graphicWarningMarkup);}};f.exports=n;},null);
__d('PhotoTagSearchPivotLogger',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={};h.subscribe(h.SHUTDOWN,function(){Object.keys(i).forEach(function(m){var n=i[m];Object.keys(n).forEach(function(o){h.post('photo_tag_search_pivot',{source:m,action:o,count:n[o]});});});});var j=/^(perm:)?tag:/,k,l={logImpression:function(m,n){var o=m in i?i[m]:i[m]={};o[n]=n in o?o[n]+1:1;},logImageImpression:function(m,n,o){if(k!==n){if(o.some(function(p){return j.test(p);}))this.logImpression(m,'image_impression');k=n;}},logPivotImpression:function(m,n){if(j.test(n))this.logImpression(m,'pivot_impression');},logShowMorePhotos:function(){this.logImpression('photoset','show_more_photos');},logHideMorePhotos:function(){this.logImpression('photoset','hide_more_photos');},logSuggestMorePhotos:function(){this.logImpression('photoset','suggest_more_photos');},logMorePhotosNavigation:function(m){h.post('photo_tag_search_pivot',{source:'photoset',action:'more_photos_search',query:m,count:1});}};f.exports=l;},null);
__d('Spotlight',['Arbiter','ArbiterMixin','DOM','JSXDOM','Layer','LayerAutoFocus','LayerTabIsolation','ModalLayer','Vector','classWithMixins','csx','cx','joinClasses','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w;v=babelHelpers.inherits(x,q(l,u(i)));w=v&&v.prototype;function x(z,aa){'use strict';w.constructor.call(this,z,aa);this.stageMinSize=new p(0,0);this.stagePadding=new p(0,0);}x.prototype._buildWrapper=function(z,aa){'use strict';var ba=t("_n8 _3qx",z.rootClassName);return (k.div({className:ba},k.div({className:"_n9"},aa)));};x.prototype._getDefaultBehaviors=function(){'use strict';return w._getDefaultBehaviors.call(this).concat([y,m,n,o]);};x.prototype.getContentRoot=function(){'use strict';if(!this._content)this._content=j.find(this.getRoot(),"div._n3");return this._content;};x.prototype.configure=function(z){'use strict';if(z.stageMinSize)this.stageMinSize=z.stageMinSize;if(z.stagePadding)this.stagePadding=z.stagePadding;};x.prototype.onContentLoaded=function(){'use strict';this.inform('content-load');};x.prototype.updatePermalink=function(z){'use strict';this.inform('permalinkchange',z);};Object.assign(x.prototype,{stageMinSize:null,stagePadding:null});function y(z){'use strict';this._layer=z;}y.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe(['show','hide'],function(z,aa){if(z==='show'){h.inform('layer_shown',{type:'Spotlight'});}else h.inform('layer_hidden',{type:'Spotlight'});});};y.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};Object.assign(y.prototype,{_subscription:null});f.exports=x;},null);
__d("XPhotosSnowliftProfilePicXOutAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/profilepic\/xout\/",{});},null);
__d("XPushRegisterServiceWorkerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/push\/register\/service_worker\/",{});},null);