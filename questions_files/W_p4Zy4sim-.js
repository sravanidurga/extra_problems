/*!CK:1568237735!*//*1442806725,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Pj81K"]); }

__d('ChatSidebarSheetChatReconnectMsg.react',['ChannelConstants','Link.react','ReactComponentWithPureRenderMixin','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n=k.createClass({displayName:'ChatSidebarSheetChatReconnectMsg',mixins:[j],propTypes:{msecs:m.number,onManuallyConnectClick:m.func},render:function(){var o=this.props.msecs;if(o==null||false===navigator.onLine){return (k.createElement('div',null,l._("Unable to connect to chat. Check your Internet connection.")));}else if(o>h.WARNING_COUNTDOWN_THRESHOLD_MSEC){return (k.createElement('div',null,l._("Unable to connect to chat. {try-again-link}",[l.param('try-again-link',k.createElement(i,{className:'fbChatReconnectLink',onClick:this.props.onManuallyConnectClick},l._("Try again")))])));}else if(o>1000){return (k.createElement('div',null,l._("Unable to connect to chat. Reconnecting in {seconds}",[l.param('seconds',Math.floor(o/1000))])));}else return (k.createElement('div',null,l._("Unable to connect to chat. Reconnecting...")));}});f.exports=n;},null);