/*
 |--------------------------------------------------------------------------
 | SkyCaiji (蓝天采集器)
 |--------------------------------------------------------------------------
 | Copyright (c) 2018 https://www.skycaiji.com All rights reserved.
 |--------------------------------------------------------------------------
 | 使用协议  https://www.skycaiji.com/licenses
 |--------------------------------------------------------------------------
 */
'use strict';function SkycaijiCpatternBrowser(){this.consoleId='#skycaiji_console';this.bdNum=0;this.bdNumMax=11;this.htmlTxt='';this.htmlObj=null}
SkycaijiCpatternBrowser.prototype={constructor:SkycaijiCpatternBrowser,init:function(configTips){var $_o=this;$_o.htmlTxt=$('#skycaiji_browser_html').val();$_o.htmlTxt=$_o.htmlTxt?$_o.htmlTxt:'';$_o.htmlTxt=$_o.htmlTxt.replace(/\&gt\;/g,'>').replace(/\&lt\;/g,'<').replace(/\&amp\;/g,'&');$_o.htmlObj=$($_o.htmlTxt);$('#skycaiji_wrapper').attr('skycaiji-console',$($_o.consoleId).prop('outerHTML'));$('#skycaiji_tpl').remove();$('body').append('<textarea id="skycaiji_tpl" style="display:none;"></textarea>');$('#skycaiji_tpl').val($('#skycaiji_wrapper').prop("outerHTML"));$('#skycaiji_wrapper').remove();$('*').removeAttr('onclick').unbind('click').bind('click',function(){var tagName=$(this).prop('tagName').toLowerCase();if(tagName=='body'||tagName=='html'){return!1}
$(this).data('skycaiji-click',$(this).data('skycaiji-click')?0:1);var xpaths={};var listXpaths={};var getXpaths=$_o.get_xpaths(this,!1,!1);var getXpaths1=$_o.get_xpaths(this,!1,!0);var getXpaths2=$_o.get_xpaths(this,!0,!0);var xpathTips=['[精确] ','[正常] ','[模糊] '];if(getXpaths.xpath){xpaths[getXpaths.xpath]=xpathTips[0]+getXpaths.xpath}
if(getXpaths1.xpath){xpaths[getXpaths1.xpath]=xpathTips[1]+getXpaths1.xpath}
if(getXpaths2.xpath){xpaths[getXpaths2.xpath]=xpathTips[2]+getXpaths2.xpath}
if(!getXpaths.listXpath){getXpaths.listXpath=getXpaths1.listXpath;if(!getXpaths.listXpath){getXpaths.listXpath=getXpaths2.listXpath}}
var getListXpaths=[getXpaths.listXpaths,getXpaths1.listXpaths,getXpaths2.listXpaths];for(var i in getListXpaths){if(getListXpaths[i]&&getListXpaths[i].length>0){for(var ii in getListXpaths[i]){if(getListXpaths[i][ii]){listXpaths[getListXpaths[i][ii]]=xpathTips[i]+getListXpaths[i][ii]}}}}
$($_o.consoleId).remove();$('#skycaiji_wrapper').append($('#skycaiji_wrapper').attr('skycaiji-console'));$($_o.consoleId).show();if(getXpaths.xpath){$($_o.consoleId).find('[skycaiji-id="xpath"]').val(getXpaths.xpath);$($_o.consoleId+' [skycaiji-id="xpath"]').parents('.skycaiji-block').eq(0).show();$($_o.consoleId+' [skycaiji-id="box-xpath"]').removeClass('skycaiji-b-c-i');var sltXpaths=$($_o.consoleId+' [skycaiji-id="xpaths"]');var showSlt=!1;for(var i in xpaths){var sltOpt=document.createElement('option');sltOpt.value=i;sltOpt.text=xpaths[i];sltXpaths.append(sltOpt);if(i!=getXpaths.xpath){showSlt=!0}}
if(showSlt){sltXpaths.val(getXpaths.xpath);$($_o.consoleId+' [skycaiji-id="box-xpath"]').addClass('skycaiji-b-c-i');sltXpaths.show()}else{sltXpaths.hide()}
if(!xpaths.listXpath){$_o.show_xpath_ele('show-xpath',getXpaths.xpath,this)}}
if(getXpaths.listXpath){$($_o.consoleId+' [skycaiji-id="listXpath"]').val(getXpaths.listXpath);$($_o.consoleId+' [skycaiji-id="listXpath"]').parents('.skycaiji-block').eq(0).show();$($_o.consoleId+' [skycaiji-id="box-listXpath"]').removeClass('skycaiji-b-c-i');var sltLxs=$($_o.consoleId+' [skycaiji-id="listXpaths"]');var showSlt=!1;for(var i in listXpaths){var sltOpt=document.createElement('option');sltOpt.value=i;sltOpt.text=listXpaths[i];sltLxs.append(sltOpt);if(i!=getXpaths.listXpath){showSlt=!0}}
if(showSlt){sltLxs.val(getXpaths.listXpath);$($_o.consoleId+' [skycaiji-id="box-listXpath"]').addClass('skycaiji-b-c-i');sltLxs.show()}else{sltLxs.hide()}
$_o.show_xpath_ele('show-listXpath',getXpaths.listXpath,this)}else{$($_o.consoleId+' [skycaiji-id="listXpath"]').parents('.skycaiji-block').eq(0).hide()}
return!1});$('*').bind('mouseenter',function(e){$(this).addClass('skycaiji_bg')});$('*').bind('mouseout',function(){$(this).removeClass('skycaiji_bg')});$('body').on('mouseover','#skycaiji_tips',function(){$(this).stop().fadeIn().css('box-shadow','2px 2px 2px #999')});$('body').on('mouseleave','#skycaiji_tips',function(){if($(this).find('.skycaiji-close').length<=0){$(this).fadeOut(3000)}});$('body').on('click','#skycaiji_tips .skycaiji-close',function(){$('#skycaiji_tips').hide()});$('body').on('click',$_o.consoleId+' .skycaiji-close',function(){$($_o.consoleId).hide()});$('body').on('click',$_o.consoleId+' [skycaiji-id="show-xpath"]',function(){$_o.show_xpath_ele('show-xpath',$($_o.consoleId+' [skycaiji-id="xpath"]').val())});$('body').on('click',$_o.consoleId+' [skycaiji-id="show-listXpath"]',function(){$_o.show_xpath_ele('show-listXpath',$($_o.consoleId+' [skycaiji-id="listXpath"]').val())});$('body').on('click',$_o.consoleId+' [skycaiji-id="xpath"]',function(){$_o.copy_val(this)});$('body').on('change',$_o.consoleId+' [skycaiji-id="xpaths"]',function(){var val=$(this).val();if(val){$($_o.consoleId+' [skycaiji-id="xpath"]').val(val);$_o.show_xpath_ele('show-xpath',$($_o.consoleId+' [skycaiji-id="xpath"]').val(),null,1)}});$('body').on('click',$_o.consoleId+' [skycaiji-id="listXpath"]',function(){$_o.copy_val(this)});$('body').on('change',$_o.consoleId+' [skycaiji-id="listXpaths"]',function(){var val=$(this).val();if(val){$($_o.consoleId+' [skycaiji-id="listXpath"]').val(val);$_o.show_xpath_ele('show-listXpath',$($_o.consoleId+' [skycaiji-id="listXpath"]').val(),null,1)}});$('body').on('click',$_o.consoleId+' [skycaiji-id="obj-clear"]',function(){$_o.clear_skycaiji_style();$_o.xpath_btn_status('show-xpath',1);$_o.xpath_btn_status('show-listXpath',1)});$('body').on('click',$_o.consoleId+' [skycaiji-id="obj-parent"]',function(){var xpath=$($_o.consoleId+' [skycaiji-id="xpath"]').val();var csspath=$_o.xpath2csspath(xpath);if($(csspath).parent().length>0){$(csspath).parent().eq(0).click()}else{$_o.tips('没有了',1500)}});$('body').on('click',$_o.consoleId+' [skycaiji-id="obj-child"]',function(){var xpath=$($_o.consoleId+' [skycaiji-id="xpath"]').val();var csspath=$_o.xpath2csspath(xpath);if($(csspath).children().length>0){$(csspath).children().eq(0).click()}else{$_o.tips('没有了',1500)}});$('body').on('click',$_o.consoleId+' [skycaiji-id="obj-prop"]',function(){var xpath=$($_o.consoleId+' [skycaiji-id="xpath"]').val();var csspath=$_o.xpath2csspath(xpath);var props=['outerHtml','innerHtml','text','value'];var propVals={};var curObj=$(csspath).attr('skycaiji-no');curObj=curObj?$_o.htmlObj.find('[skycaiji-no="'+curObj+'"]'):null;if(curObj&&curObj.length>0){for(var i in props){var prop=props[i];var propVal='';if(prop=='innerHtml'||prop=='outerHtml'){if(prop=='innerHtml'){propVal=curObj.html()}else{propVal=curObj.prop('outerHTML')}
propVal=propVal?propVal:'';propVal=propVal.replace(/ skycaiji-no=\"[^\"]*\"/ig,'')}else if(prop=='text'){propVal=curObj.text()}else if(prop=='value'){propVal=curObj.val()}else{propVal=curObj.prop(prop)}
propVal=propVal?propVal:'';propVals[prop]=propVal}
var attrVals=$_o.ele_attrs(curObj);for(var i in attrVals){propVals[i]=attrVals[i]}
if(propVals){var html='';for(var i in propVals){if(propVals[i]){html+='<tr><td width="100px;">'+i+'</td><td><textarea rowspan="2">'+$_o.htmlspecialchars(propVals[i])+'</textarea></td></tr>'}}
if(html){html='<table>'+html+'</table>'}
if(html){$_o.tips(html,3000,'skycaiji_tips_html',1)}else{$_o.tips('没有属性',1500)}}}});$('body').append($('#skycaiji_tpl').val());$('#skycaiji_wrapper').show();var html='所见即所得，已过滤所有脚本！<br>';if(configTips&&typeof(configTips)=='object'){var htmlUnset='';if(configTips.unset&&typeof(configTips.unset)=='object'){for(var i in configTips.unset){htmlUnset+='<li>'+configTips.unset[i]+'</li>'}
htmlUnset=htmlUnset?('建议设置：<ul>'+htmlUnset+'</ul>'):''}
var htmlSetted='';if(configTips.setted&&typeof(configTips.setted)=='object'){for(var i in configTips.setted){htmlSetted+='<li>'+configTips.setted[i]+'</li>'}
htmlSetted=htmlSetted?('已设置：<ul>'+htmlSetted+'</ul>'):''}
html=html+htmlUnset+htmlSetted}
$_o.tips(html,3000,'skycaiji_tips_list')},get_xpaths:function(element,noId,noClass){var $_o=this;var listXpath='';var maxEleNum=1;var xpath=$_o.ele_xpath(element,noId,noClass);xpath=xpath.split('/');var listXpaths=[];for(var i=(xpath.length-1);i>=0;i--){if(!xpath[i]){continue}
var parentXpath=xpath.slice(0,i+1);parentXpath[i]=parentXpath[i].replace(/\[\d+\]/,'');parentXpath=parentXpath.join('/');var subXpath=xpath.slice(i+1);subXpath=subXpath.join('/');var parentCsspath=$_o.xpath2csspath(parentXpath);var subCsspath=$_o.xpath2csspath(subXpath);var eleNum=0;if(subCsspath){var curIndex=-1;$(parentCsspath).each(function(){curIndex++;var curCsspath=parentCsspath+':eq('+curIndex+')>'+subCsspath;eleNum+=$_o.toInt($(curCsspath).length)})}else{eleNum+=$_o.toInt($(parentCsspath).length)}
if(eleNum>maxEleNum){maxEleNum=eleNum;listXpath=parentXpath+(subXpath?('/'+subXpath):'');listXpaths.push(listXpath)}}
return{'xpath':xpath.join('/'),'listXpath':listXpath,'listXpaths':listXpaths}},ele_xpath:function(ele,noId,noClass){var $_o=this;if(!noId&&$(ele).prop('id')){return'//*[@id="'+$(ele).prop('id')+'"]'}
var tagName=$(ele).prop('tagName').toLowerCase();if(tagName=='body'){return'/html/body'}
if(!tagName){return''}
var eleAttrs=$_o.ele_attrs(ele);var eleName='';var eleClass='';if(!noId){eleName=eleAttrs.name?eleAttrs.name:''}
if(!noClass){eleClass=eleAttrs['class']?eleAttrs['class']:''}
var index=0;var nodes=$(ele).parent().children(tagName+(eleClass?$_o.class_attr2css(eleClass):'')+(eleName?('[name="'+eleName+'"]'):''));if(nodes.length>1){index=$(nodes).index(ele);index=$_o.toInt(index)+1}
index=index>0?('['+index+']'):'';eleClass=eleClass?('[@class="'+eleClass+'"]'):'';eleName=eleName?('[@name="'+eleName+'"]'):'';return this.ele_xpath($(ele).parent(),noId,noClass)+'/'+tagName+eleClass+eleName+index},ele_attrs:function(ele){var $_o=this;var attrVals={};if(ele){var scjNo=$(ele).attr('skycaiji-no');if(scjNo){var regTag=new RegExp('(<\\w+[^<>]*?) skycaiji-no="'+scjNo+'"([^<>]*>)');var tagHtml=regTag.exec($_o.htmlTxt);tagHtml=tagHtml?(tagHtml[1]+tagHtml[2]):'';if(tagHtml){$.each($(tagHtml)[0].attributes,function(){if(typeof(attrVals[this.name])=='undefined'||attrVals[this.name]==null){attrVals[this.name]=this.value?this.value:''}})}}}
return attrVals},xpath2csspath:function(xpath){var $_o=this;if(!xpath){return''}
xpath=xpath.replace(/\/\//g,' ');xpath=xpath.replace(/\//g,'>');xpath=xpath.replace(/\[([^@].*?)\]/ig,function(match,match1){match1=$_o.toInt(match1)-1;return':eq('+match1+')'});xpath=xpath.replace(/\@/g,'');xpath=xpath.replace(/^\s+|\s+$/gm,'');xpath=xpath.replace(/\[\s*class\s*\=\s*[\'\"]([^\'\"]*)[\'\"]\s*\]/ig,function(match,match1){return $_o.class_attr2css(match1)});return xpath},class_attr2css:function(classAttr){var cssQuery='';if(classAttr){classAttr=classAttr.replace('/[\s\r\n]+/g',' ').split(' ');for(var i in classAttr){if(classAttr[i]){cssQuery+='.'+classAttr[i]}}}
return cssQuery},show_xpath_ele:function(btnId,xpath,clickObj,isShow){if(!xpath){return}
var $_o=this;xpath=xpath.split('/');var reg=/^((?!(html|body))\w)+$/;var ix=-1;for(var i=(xpath.length-1);i>=0;i--){if(reg.test(xpath[i])){ix=i;break}}
if(!isShow){if(clickObj){isShow=$(clickObj).data('skycaiji-click')}}
if(typeof isShow=='undefined'||isShow==null){isShow=$($_o.consoleId+' [skycaiji-id="'+btnId+'"]').attr('data-val')==1?true:!1}else{isShow=$_o.toInt(isShow);isShow=isShow==1?true:!1}
if(isShow){if($_o.bdNum>=$_o.bdNumMax){$_o.bdNum=0}
$_o.bdNum+=1}
var bdList=(btnId=='show-listXpath'?' skycaiji_bd_list':'');var bdAll='skycaiji_bd';for(var i=1;i<=$_o.bdNumMax;i++){bdAll+=' skycaiji_bd'+i}
if(ix>-1){var parentXpath=xpath.slice(0,ix+1);parentXpath=parentXpath.join('/');var subXpath=xpath.slice(ix+1);subXpath=subXpath.join('/');var parentCsspath=$_o.xpath2csspath(parentXpath);var subCsspath=$_o.xpath2csspath(subXpath);if(subCsspath){var curIndex=-1;$(parentCsspath).each(function(){curIndex++;var curCsspath=parentCsspath+':eq('+curIndex+')>'+subCsspath;$(curCsspath).removeClass(bdAll);$(curCsspath).removeClass('skycaiji_bd_list');if(isShow){$(curCsspath).addClass('skycaiji_bd skycaiji_bd'+$_o.bdNum+bdList)}})}else{$(parentCsspath).removeClass(bdAll);$(parentCsspath).removeClass('skycaiji_bd_list');if(isShow){$(parentCsspath).addClass('skycaiji_bd skycaiji_bd'+$_o.bdNum+bdList)}}}else{var csspath=$_o.xpath2csspath(xpath.join('/'));$(csspath).removeClass(bdAll);$(csspath).removeClass('skycaiji_bd_list');if(isShow){$(csspath).addClass('skycaiji_bd skycaiji_bd'+$_o.bdNum+bdList)}}
if(clickObj){$(clickObj).removeClass('skycaiji_bd_list')}
$_o.xpath_btn_status(btnId,isShow?0:1)},xpath_btn_status:function(btnId,status){$(this.consoleId+' [skycaiji-id="'+btnId+'"]').attr('data-val',status?1:0).text(status?'显示':'取消')},tips:function(msg,time,addClass,close){var $_o=this;time=$_o.toInt(time);time=time>0?time:3000;if(addClass){$('#skycaiji_tips').addClass(addClass)}else{$('#skycaiji_tips').prop('class','')}
if(close){msg='<div class="skycaiji-close">关闭</div>'+msg}
$('#skycaiji_tips').stop().css('opacity','1.0').html(msg).show();if(!close){$('#skycaiji_tips').fadeOut(time)}},clear_skycaiji_style:function(){var $_o=this;$('*').removeClass('skycaiji_bg');$('*').removeClass('skycaiji_bd');for(var i=1;i<=$_o.bdNumMax;i++){$('*').removeClass('skycaiji_bd'+i)}
$('*').removeClass('skycaiji_bd_list')},copy_val:function(obj){var $_o=this;var val=$(obj).val();if(val){$(obj).select();window.document.execCommand('Copy')}
$_o.tips('复制成功！',1500)},htmlspecialchars:function(str){if(str&&typeof(str)=='string'){str=str.replace(/\&/g,'&amp;').replace(/\</g,'&lt;').replace(/\>/g,'&gt;').replace(/\"/g,'&quot;').replace(/\'/g,'&#039;')}
return str},toInt:function(val){val=val?val:0;val=parseInt(val);if(isNaN(val)){val=0}
return val}}
var skycaijiCB=new SkycaijiCpatternBrowser()