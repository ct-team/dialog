﻿!function(a,b,c){var h,m,q,y,z,A,B,C,D,d=b.ActiveXObject&&!b.XMLHttpRequest,e=function(){},f=0,g=/^url:/,j=b.document,k="JDG"+ +new Date,l='<table class="ui_border"><tbody><tr><td class="ui_lt"></td><td class="ui_t"></td><td class="ui_rt"></td></tr><tr><td class="ui_l"></td><td class="ui_c"><div class="ui_inner"><table class="ui_dialog"><tbody><tr><td colspan="2"><div class="ui_title_bar"><div class="ui_title" unselectable="on"></div><div class="ui_title_buttons"><a class="ui_min" href="javascript:void(0);" title="最小化"><b class="ui_min_b"></b></a><a class="ui_max" href="javascript:void(0);" title="最大化"><b class="ui_max_b"></b></a><a class="ui_res" href="javascript:void(0);" title="还原"><b class="ui_res_b"></b><b class="ui_res_t"></b></a><a class="ui_close" href="javascript:void(0);" title="关闭">×</a></div></div></td></tr><tr><td class="ui_icon"></td><td class="ui_main"><div class="ui_content"></div></td></tr><tr><td colspan="2"><div class="ui_buttons"></div></td></tr></tbody></table></div></td><td class="ui_r"></td></tr><tr><td class="ui_lb"></td><td class="ui_b"></td><td class="ui_rb"></td></tr></tbody></table>',n=function(a,b,c){return"http://static.tcy365.com/cdn/dialog/1.3/"}(j.getElementsByTagName("script"),0),o=function(a){if(m)for(var e,b=m.split("&"),c=0,d=b.length;d>c;c++)if(e=b[c].split("="),a===e[0])return e[1];return null},p=o("skin")||"default",r=function(a){try{q=a["top"].document,q.getElementsByTagName}catch(b){return q=a.document,a}return"true"===o("self")||q.getElementsByTagName("frameset").length>0?(q=a.document,a):a["top"]}(b),s=q.documentElement,t="BackCompat"===q.compatMode,u=a(q),v=a(r),w=a(q.getElementsByTagName("html")[0]);try{q.execCommand("BackgroundImageCache",!1,!0)}catch(x){}!function(a){if(!a){var b=q.getElementsByTagName("head")[0],c=q.createElement("link");c.href=n+"skins/"+p+".css",c.type="text/css",c.rel="stylesheet",c.id="lhgdialoglink",b.insertBefore(c,b.firstChild)}}(q.getElementById("lhgdialoglink")),d&&function(a){"fixed"!==w.css(a)&&w.css({zoom:1,backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"})}("backgroundAttachment"),y={set:function(a){r.lhgdialog.zIndex=a},get:function(){return r.lhgdialog.zIndex},init:function(){"undefined"==typeof r.lhgdialog&&(r.lhgdialog={},r.lhgdialog.zIndex=1976)}},z={set:function(a,b){return r.lhgdialog.list[a]=b,b},get:function(a){return r.lhgdialog.list[a]?r.lhgdialog.list[a]:!1},getAll:function(){return r.lhgdialog.list},init:function(){"undefined"==typeof r.lhgdialog.list&&(r.lhgdialog.list={})}},y.init(),z.init(),A=function(a){var b,d,e;a=a||{},d=A.setting,d.zIndex=y.get();for(e in d)a[e]===c&&(a[e]=d[e]);return a.id=a.id||k+f,(b=z.get(a.id))?b._showFlag=b.show():(a.button=a.button||[],a.ok&&a.button.push({id:"ok",name:a.okVal,callback:a.ok,focus:a.focus}),a.cancel&&a.button.push({id:"cancel",name:a.cancelVal,callback:a.cancel}),y.set(a.zIndex),f++,z.set(a.id,new A.fn._init(a)))},A.fn=A.prototype={constructor:A,_init:function(a){var d,c=this,e=a.content,f=g.test(e);return c.opener=b,c.config=a,c.DOM=d=c.DOM||c._getDOM(),c.closed=!1,c.data=a.data,a.icon&&!f?(a.min=!1,a.max=!1,d.icon[0].style.display="",d.icon[0].innerHTML='<img src="'+a.path+"skins/icons/"+a.icon+'" class="ui_icon_bg"/>'):d.icon[0].style.display="none",d.wrap.addClass(a.skin),d.rb[0].style.cursor=a.resize?"se-resize":"auto",d.title[0].style.cursor=a.drag?"move":"auto",d.max[0].style.display=a.max?"inline-block":"none",d.min[0].style.display=a.min?"inline-block":"none",d.close[0].style.display=a.cancel===!1?"none":"inline-block",d.content[0].style.padding=a.padding,c.button.apply(c,a.button),c.title(a.title).content(e,!0,f).size(a.width,a.height).position(a.left,a.top).time(a.time)[a.show?"show":"hide"](!0).zindex(1),a.focus&&c.focus(),a.lock&&c.lock(),c._ie6PngFix()._addEvent(),a.maxState&&c.max(),h=null,!f&&a.init&&a.init.call(c,b),c},button:function(){for(var i,j,l,m,n,b=this,c=b.DOM,d=c.buttons[0],e="ui_state_highlight",f=b._listeners=b._listeners||{},g=[].slice.call(arguments),h=0;h<g.length;h++)i=g[h],j=i.name,l=i.id||j,m=!f[l],n=m?q.createElement("input"):f[l].elem,n.type="button",f[l]||(f[l]={}),j&&(n.value=j),i.callback&&(f[l].callback=i.callback),i.focus&&(b._focus&&b._focus.removeClass(e),b._focus=a(n).addClass(e),b.focus()),n[k+"callback"]=l,n.disabled=!!i.disabled,m&&(f[l].elem=n,d.appendChild(n));return d.style.display=g.length?"":"none",b._ie6SelectFix(),b},title:function(a){if(a===c)return this;var b=this.DOM,d=b.border,e=b.title[0];return a===!1?(e.style.display="none",e.innerHTML="",d.addClass("ui_state_tips")):(e.style.display="",e.innerHTML=a,d.removeClass("ui_state_tips")),this},content:function(a,b,d){if(a===c)return this;var e=this,f=e.DOM,g=f.wrap[0],h=g.offsetWidth,i=g.offsetHeight,j=parseInt(g.style.left),k=parseInt(g.style.top),l=g.style.width,m=f.content,n=A.setting.content;return d?(m[0].innerHTML=n,e._iframe(a.split("url:")[1])):m.html(a),b||(h=g.offsetWidth-h,i=g.offsetHeight-i,j-=h/2,k-=i/2,g.style.left=Math.max(j,0)+"px",g.style.top=Math.max(k,0)+"px",l&&"auto"!==l&&(g.style.width=g.offsetWidth+"px"),e._autoPositionType()),e._ie6SelectFix(),e},size:function(a,b){var c=this,d=c.DOM,e=d.wrap[0],f=d.main[0].style;return e.style.width="auto","number"==typeof a&&(a+="px"),"number"==typeof b&&(b+="px"),f.width=a,f.height=b,"auto"!==a&&(e.style.width=e.offsetWidth+"px"),c._ie6SelectFix(),c},position:function(a,b){var e=this,f=e.config,g=e.DOM.wrap[0],h=g.style,i=d?!1:f.fixed,j=d&&f.fixed,k=v.scrollLeft(),l=v.scrollTop(),m=i?0:k,n=i?0:l,o=v.width(),p=v.height(),q=g.offsetWidth,r=g.offsetHeight;return(a||0===a)&&(e._left=-1!==a.toString().indexOf("%")?a:null,a=e._toNumber(a,o-q),"number"==typeof a&&(a=j?a+=k:a+m,a=Math.max(a,m)+"px"),h.left=a),(b||0===b)&&(e._top=-1!==b.toString().indexOf("%")?b:null,b=e._toNumber(b,p-r),"number"==typeof b&&(b=j?b+=l:b+n,b=Math.max(b,n)+"px"),h.top=b),a!==c&&b!==c&&e._autoPositionType(),e},time:function(a,b){var c=this,d=c._timer;return d&&clearTimeout(d),b&&b.call(c),a&&(c._timer=setTimeout(function(){c._click("cancel")},1e3*a)),c},show:function(a){return this.DOM.wrap[0].style.visibility="visible",this.DOM.border.addClass("ui_state_visible"),!a&&this._lock&&this.lock(),this._showFlag="show",this},hide:function(){return this.DOM.wrap[0].style.visibility="hidden",this.DOM.border.removeClass("ui_state_visible"),this.unlock("hide"),this._showFlag="hide",this},zindex:function(a){var e,f,b=this,c=b.DOM,d=b._load;if(A.focus=b.config.id,1!=a&&z.get(b.config.id)&&z.get(b.config.id).DOM.wrap[0].style.zIndex==y.get())return b;y.set(y.get()+10),e=y.get(),c.wrap[0].style.zIndex=e;for(f in z.getAll())z.get(f).DOM.border.removeClass("ui_state_focus"),z.get(f)._load&&(z.get(f)._load.style.display="");return c.border.addClass("ui_state_focus"),d&&d.style.zIndex&&(d.style.display="none"),b},focus:function(){try{elemFocus=this._focus&&this._focus[0]||this.DOM.close[0],elemFocus&&elemFocus.focus()}catch(a){}return this},lock:function(){var c,b=this,e=y.get()-1,f=b.config,g=a("#ldg_lockmask",q)[0],h=g?g.style:"",i=d?"absolute":"fixed";return g||(c='<iframe src="javascript:\'\'" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>',g=q.createElement("div"),g.id="ldg_lockmask",g.style.cssText="position:"+i+";left:0;top:0;width:100%;height:100%;overflow:hidden;",a(g).css({opacity:f.opacity,background:f.opacityColor}),h=g.style,d&&(g.innerHTML=c),q.body.appendChild(g)),"absolute"===i&&(h.width=v.width(),h.height=v.height(),h.top=v.scrollTop(),h.left=v.scrollLeft(),b._setFixed(g)),h.zIndex=e,h.display="",b.DOM.border.addClass("ui_state_lock"),b._lock=!0,b},unlock:function(b){var g,h,c=this,d=c.config,e=a("#ldg_lockmask",q)[0],f={id:0,zindex:0};if(e&&c._lock){for(h in z.getAll())d.id!=h&&z.get(h)._lock&&(g=parseInt(z.get(h).DOM.wrap[0].style.zIndex),g>f.zindex&&(f.zindex=g,f.id=h));0!=f.id?e.style.zIndex=f.zindex-1:e.style.display="none",c.DOM.border.removeClass("ui_state_lock")}return"hide"!=b&&(c._lock=!1),c},close:function(){var h,i,j,c=this,d=c.DOM,e=d.wrap,f=z.getAll(),g=c.config.close;if(c.time(),c.iframe){if("function"==typeof g&&g.call(c,c.iframe.contentWindow,b)===!1)return c;a(c.iframe).unbind("load",c._fmLoad).attr("src","javascript:''").remove(),d.content.removeClass("ui_state_full"),c._frmTimer&&clearTimeout(c._frmTimer)}else if("function"==typeof g&&g.call(c,b)===!1)return c;c.unlock(),c._maxState&&(w.removeClass("ui_lock_scroll"),d.res[0].style.display="none"),c._removeEvent(),delete f[c.config.id],h=0,i=0;for(j in z.getAll())h<parseInt(z.get(j).DOM.wrap[0].style.zIndex)&&(h=parseInt(z.get(j).DOM.wrap[0].style.zIndex),i=j);return 0!=i?(A.focus=i,z.get(A.focus).zindex()):A.focus=null,e.remove(),c.closed=!0,c},max:function(){var b,a=this,c=a.DOM,e=c.wrap[0].style,f=c.main[0].style,g=c.rb[0].style,h=c.title[0].style,i=a.config,j=v.scrollTop(),k=v.scrollLeft();return a._maxState?(w.removeClass("ui_lock_scroll"),a):(w.addClass("ui_lock_scroll"),a._minState&&a.min(),a._or={t:e.top,l:e.left,w:f.width,h:f.height,d:i.drag,r:i.resize,rc:g.cursor,tc:h.cursor},e.top=j+"px",e.left=k+"px",b=a._maxSize(),a.size(b.w,b.h)._setAbsolute(),d&&t&&(e.width=v.width()+"px"),i.drag=!1,i.resize=!1,g.cursor="auto",h.cursor="auto",c.max[0].style.display="none",i.max&&(c.res[0].style.display="inline-block"),a._maxState=!0,a)},min:function(){var a=this,b=a.DOM,c=b.main[0].style,d=b.buttons[0].style,e=b.dialog[0].style,f=b.rb[0].style.cursor,g=a.config.resize;return a._minState?(c.display="",d.display=a._minRz.btn,e.width="",g=a._minRz,f.cursor=a._minRz.rzs?"se-resize":"auto",delete a._minRz,a._minState=!1):(a._maxState&&a.max(),a._minRz={rzs:g,btn:d.display},c.display="none",d.display="none",e.width=c.width,f.cursor="auto",g=!1,a._minState=!0),a._ie6SelectFix(),a},get:function(a,b){return z.get(a)?1===b?z.get(a):z.get(a).iwin||null:null},reload:function(c,d,e){c=c||b;try{c.location.href=d?d:c.location.href}catch(f){d=this.iframe.src,a(this.iframe).attr("src",d)}return e&&e.call(this),this},_iframe:function(b){var e,f,g,h,i,j,k,t,u,v,c=this,l=c.DOM.content,m=c.config,o=c._load=a(".ui_loading",l[0])[0],p="position:absolute;left:-9999em;border:none 0;background:transparent;width:1px;height:1px; overflow:hidden;",s="width:100%;height:100%;border:none 0;";m.cache===!1&&(t=(new Date).getTime(),u=b.replace(/([?&])_=[^&]*/,"$1_="+t),b=u+(u===b?(/\?/.test(b)?"&":"?")+"_="+t:"")),e=c.iframe=q.createElement("iframe"),e.name=m.id,e.id=m.id,e.style.cssText=p,e.setAttribute("frameborder",0,0),f=a(e),l[0].appendChild(e),c._frmTimer=setTimeout(function(){f.attr("src",b),f.bind("load",function(){setTimeout(v,1)}),c.iframe.api=c},1),v=c._fmLoad=function(){l.addClass("ui_state_full");var b=c.DOM,p=(b.lt[0].offsetHeight,b.main[0].style);o.style.cssText="display:none;position:absolute;background:#FFF;opacity:0;filter:alpha(opacity=0);z-index:1;width:"+p.width+";height:"+p.height+";";try{g=c.iwin=e.contentWindow,h=a(g.document),i=a(g.document.body)}catch(q){return e.style.cssText=s,void 0}j="auto"===m.width?h.width()+(d?0:parseInt(i.css("marginLeft"))):m.width,k="auto"===m.height?i.height():m.height,c._maxState||c.size(j,k).position(m.left,m.top),setTimeout(function(){e.style.cssText=s},0),o.style.width=p.width,o.style.height=p.height,m.init&&m.init.call(c,g,r)}},_getDOM:function(){var d,e,f,g,h,b=q.createElement("div"),c=q.body;for(b.style.cssText="position:absolute;left:0;top:0;visibility:hidden;",b.innerHTML=l,e=0,f={wrap:a(b)},g=b.getElementsByTagName("*"),h=g.length;h>e;e++)d=g[e].className.split("ui_")[1],d&&(f[d]=a(g[e]));return c.insertBefore(b,c.firstChild),f},_toNumber:function(a,b){return"number"==typeof a?a:(-1!==a.indexOf("%")&&(a=parseInt(b*a.split("%")[0]/100)),a)},_maxSize:function(){var e,f,a=this,b=a.DOM,c=b.wrap[0],d=b.main[0];return e=v.width()-c.offsetWidth+d.offsetWidth,f=v.height()-c.offsetHeight+d.offsetHeight,{w:e,h:f}},_ie6PngFix:function(){if(d)for(var b,c,e,f,a=0,g=A.setting.path+"/skins/",h=this.DOM.wrap[0].getElementsByTagName("*");a<h.length;a++)b=h[a],c=b.currentStyle["png"],c&&(e=g+c,f=b.runtimeStyle,f.backgroundImage="none",f.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e+"',sizingMethod='scale')");return this},_ie6SelectFix:d?function(){var a=this.DOM.wrap,b=a[0],c=c+"iframeMask",d=a[c],e=b.offsetWidth,f=b.offsetHeight;e+="px",f+="px",d?(d.style.width=e,d.style.height=f):(d=b.appendChild(q.createElement("iframe")),a[c]=d,d.src="javascript:''",d.style.cssText="position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:"+e+";height:"+f)}:e,_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]()},_setFixed:function(a){var c,e,f,g,h,b=a?a.style:this.DOM.wrap[0].style;d?(c=v.scrollLeft(),e=v.scrollTop(),f=parseInt(b.left)-c,g=parseInt(b.top)-e,h=t?"this.ownerDocument.body":"this.ownerDocument.documentElement",this._setAbsolute(),b.setExpression("left",h+".scrollLeft +"+f),b.setExpression("top",h+".scrollTop +"+g)):b.position="fixed"},_setAbsolute:function(){var a=this.DOM.wrap[0].style;d&&(a.removeExpression("left"),a.removeExpression("top")),a.position="absolute"},_click:function(a){var c=this,d=c._listeners[a]&&c._listeners[a].callback;return"function"!=typeof d||d.call(c,b)!==!1?c.close():c},_reset:function(){var e,m,c=!!b.ActiveXObject,f=this,g=v.width(),h=v.height(),i=f._winSize||g*h,j=f._lockDocW||g,k=f._left,l=f._top;c&&(f._lock&&d&&a("#ldg_lockmask",q).css({width:g+"px",height:h+17+"px"}),newWidth=f._lockDocW=g,e=f._winSize=g*h,i===e)||(f._maxState&&(m=f._maxSize(),f.size(m.w,m.h)),c&&17===Math.abs(j-newWidth)||(k||l)&&f.position(k,l))},_addEvent:function(){var a,b=this,c=b.config,d=b.DOM;b._winResize=function(){a&&clearTimeout(a),a=setTimeout(function(){b._reset()},140)},v.bind("resize",b._winResize),d.wrap.bind("click",function(a){var e,c=a.target;return c.disabled?!1:c===d.close[0]?(b._click("cancel"),!1):c===d.max[0]||c===d.res[0]||c===d.max_b[0]||c===d.res_b[0]||c===d.res_t[0]?(b.max(),!1):c===d.min[0]||c===d.min_b[0]?(b.min(),!1):(e=c[k+"callback"],e&&b._click(e),void 0)}).bind("mousedown",function(a){b.zindex();var e=a.target;return c.drag!==!1&&e===d.title[0]||c.resize!==!1&&e===d.rb[0]?(B(a),!1):void 0}),c.max&&d.title.bind("dblclick",function(){return b.max(),!1})},_removeEvent:function(){var a=this,b=a.DOM;b.wrap.unbind(),b.title.unbind(),v.unbind("resize",a._winResize)}},A.fn._init.prototype=A.fn,A.focus=null,A.list={},A.zIndex=1976,A.setting={content:'<div class="ui_loading"><span>loading...</span></div>',title:"视窗 ",button:null,ok:null,cancel:null,init:null,close:null,okVal:"确定",cancelVal:"取消",skin:"",esc:!0,show:!0,width:"auto",height:"auto",icon:null,path:n,lock:!1,opacity:.5,opacityColor:"#000000",focus:!0,parent:null,padding:"10px",fixed:!1,left:"50%",top:"38.2%",maxState:!1,max:!0,min:!0,zIndex:1976,resize:!0,drag:!0,cache:!0,data:null,extendDrag:!1},C="setCapture"in s,D="onlosecapture"in s,A.dragEvent={onstart:e,start:function(a){var b=A.dragEvent;return u.bind("mousemove",b.move).bind("mouseup",b.end),b._sClientX=a.clientX,b._sClientY=a.clientY,b.onstart(a.clientX,a.clientY),!1},onmove:e,move:function(a){var b=A.dragEvent;return b.onmove(a.clientX-b._sClientX,a.clientY-b._sClientY),!1},onend:e,end:function(a){var b=A.dragEvent;return u.unbind("mousemove",b.move).unbind("mouseup",b.end),b.onend(a.clientX,a.clientY),!1}},B=function(b){var c,e,f,g,h,i,j=z.get(A.focus),k=j.config,l=j.DOM,m=l.wrap[0],n=l.title,o=l.main[0],p=A.dragEvent,s="getSelection"in r?function(){r.getSelection().removeAllRanges()}:function(){try{q.selection.empty()}catch(a){}};p.onstart=function(){i?(e=o.offsetWidth,f=o.offsetHeight):(g=m.offsetLeft,h=m.offsetTop),u.bind("dblclick",p.end),!d&&D?n.bind("losecapture",p.end):v.bind("blur",p.end),C&&n[0].setCapture(),l.border.addClass("ui_state_drag"),j.zindex()},p.onmove=function(b,d){var l,n,p,q,r,t;i?(l=m.style,n=o.style,p=b+e,q=d+f,l.width="auto",k.width=n.width=Math.max(0,p)+"px",l.width=m.offsetWidth+"px",k.height=n.height=Math.max(0,q)+"px",j._load&&a(j._load).css({width:n.width,height:n.height})):(n=m.style,r=b+g,t=d+h,k.left=Math.max(c.minX,Math.min(c.maxX,r)),k.top=Math.max(c.minY,Math.min(c.maxY,t)),n.left=k.left+"px",n.top=k.top+"px"),s()},p.onend=function(){u.unbind("dblclick",p.end),!d&&D?n.unbind("losecapture",p.end):v.unbind("blur",p.end),C&&n[0].releaseCapture(),d&&j._autoPositionType(),l.border.removeClass("ui_state_drag")},i=b.target===l.rb[0]?!0:!1,c=function(a){var b=m.offsetWidth,c=n[0].offsetHeight||20,d=v.width(),e=v.height(),f=a?0:v.scrollLeft(),g=a?0:v.scrollTop();return maxX=d-b+f,maxY=e-c+g,{minX:f,minY:g,maxX:maxX,maxY:maxY}}("fixed"===m.style.position),p.start(b)},a(function(){var a=new Image;a.src=n+"skins/icons/loading.gif",A.setting.extendDrag&&function(a){var b=q.createElement("div"),c=b.style,e=d?"absolute":"fixed";b.id="ldg_dragmask",c.cssText="display:none;position:"+e+";left:0;top:0;width:100%;height:100%;"+"cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF;pointer-events:none;",q.body.appendChild(b),a._start=a.start,a._end=a.end,a.start=function(){var b=z.get(A.focus),d=b.DOM.main[0],f=b.iframe;a._start.apply(this,arguments),c.display="block",c.zIndex=y.get()+3,"absolute"===e&&(c.width=v.width()+"px",c.height=v.height()+"px",c.left=u.scrollLeft()+"px",c.top=u.scrollTop()+"px"),f&&d.offsetWidth*d.offsetHeight>307200&&(d.style.visibility="hidden")},a.end=function(){var b=z.get(A.focus);a._end.apply(this,arguments),c.display="none",b&&(b.DOM.main[0].style.visibility="visible")}}(A.dragEvent)}),a.fn.dialog=function(){var a=arguments;return this.bind("click",function(){return A.apply(this,a),!1}),this},b.lhgdialog=a.dialog=A,b.G_list=z}(this.jQuery||this.lhgcore,this),function(a,b){var d=function(){return b.setting.zIndex};b.closeAll=function(){for(var b in G_list.getAll())!function(b){a.dialog.list[b].close()}(b)},b.alert=function(a,c,e){return b({title:"警告",id:"Alert",zIndex:d(),icon:"alert.gif",fixed:!0,lock:!0,content:a,ok:!0,resize:!1,close:c,parent:e||null})},b.confirm=function(a,c,e,f){return b({title:"确认",id:"confirm.gif",zIndex:d(),icon:"confirm.gif",fixed:!0,lock:!0,content:a,resize:!1,parent:f||null,ok:function(a){return c.call(this,a)},cancel:function(a){return e&&e.call(this,a)}})},b.prompt=function(a,c,e,f){e=e||"";var g;return b({title:"提问",id:"Prompt",zIndex:d(),icon:"prompt.gif",fixed:!0,lock:!0,parent:f||null,content:['<div style="margin-bottom:5px;font-size:12px">',a,"</div>","<div>",'<input value="',e,'" style="width:18em;padding:6px 4px" />',"</div>"].join(""),init:function(){g=this.DOM.content[0].getElementsByTagName("input")[0],g.select(),g.focus()},ok:function(a){return c&&c.call(this,g.value,a)},cancel:!0})},b.tips=function(a,c,d,e,f){var g=!0,h=d?function(){this.DOM.icon[0].innerHTML='<img src="'+this.config.path+"skins/icons/"+d+'" class="ui_icon_bg"/>',this.DOM.icon[0].style.display=""}:function(){this.DOM.icon[0].style.display="none"};return e===!0&&(g=!0),b({id:"Tips",title:!1,cancel:!1,close:f,fixed:!0,lock:g,resize:!1}).content(a).time(c||1.5,h)}}(this.jQuery||this.lhgcore,this.lhgdialog);