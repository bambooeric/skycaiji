/*
 |--------------------------------------------------------------------------
 | SkyCaiji (蓝天采集器)
 |--------------------------------------------------------------------------
 | Copyright (c) 2018 https://www.skycaiji.com All rights reserved.
 |--------------------------------------------------------------------------
 | 使用协议  https://www.skycaiji.com/licenses
 |--------------------------------------------------------------------------
 */
'use strict';var taskOpClass={import_rule:function(ruleImport,ruleName){$('#form_item input[name="rule_import"]').val(ruleImport);$('#btn_import_rule').html('导入规则：'+ruleName+'<a href="javascript:;" class="glyphicon glyphicon-remove delete" style="font-size:12px;margin-left:5px;"></a>');$('#btn_import_rule .delete').bind('click',function(){$('#form_item input[name="rule_import"]').val('');$('#btn_import_rule').html('导入规则 <span class="caret"></span>')});$('#myModal').modal('hide')},import_task:function(id,name){$('#form_item input[name="task_id"]').val(id);$('#btn_import_task').text('导入任务：'+name);$('#myModal').modal('hide')},task_init:function(){$('#form_item select[name="module"]').bind('change',function(){if($(this).val()!='pattern'){$('#btn_import_rule').parents('.input-group-btn').hide()}else{$('#btn_import_rule').parents('.input-group-btn').show()}});$('#form_item select[name="auto"]').bind('change',function(){var val=$(this).val();val=toInt(val);if(val==2){$('#config_task_timer').show()}else{$('#config_task_timer').hide()}
if(val>0){$('#config_task_auto_tips').show()}else{$('#config_task_auto_tips').hide()}});$('select[id^="task_timer_"]').bind('change',function(){var name=$(this).attr('data-name');if(name){var val=$(this).val();val=val?val.join(','):'';$('#form_item [name="'+name+'"]').val(val)}});$('#form_item .btn-rand-single-key').bind('click',function(){var chars='ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';　　var maxPos=chars.length;　　var str='';　　for(var i=0;i<10;i++){　　　　str+=chars.charAt(Math.floor(Math.random()*maxPos));　　}
$('#form_item [name="config[single][key]"]').val(str)});$('#form_item [name="config[proxy]"]').bind('click',function(){var open=!1;var val=$(this).val();if(val=='y'){open=!0}else if($(this).attr('data-global')){open=!0}
if(open){$('#config_proxy').removeClass('box-not-enable')}else{$('#config_proxy').addClass('box-not-enable')}});var downFunc=function(isImg){var type=isImg?'img':'file';$('#form_item [name="config[download_'+type+']"]').bind('click',function(){var open=!1;var val=$(this).val();if(val=='y'){open=!0}else if($(this).attr('data-global')){open=!0}
if(open){$('#config_download_'+type).removeClass('box-not-enable')}else{$('#config_download_'+type).addClass('box-not-enable')}});$('#form_item [name="config['+type+'_name]"]').bind('change',function(){var val=$(this).val();if(val=='custom'){$('#config_'+type+'_name_custom').show()}else{$('#config_'+type+'_name_custom').hide()}});var nameType=isImg?'name':'file';$('#config_'+type+'_name_custom').on('click','.'+nameType+'-custom-path a[data-val]',function(){globalOp.insertAtCaret($('[name="config['+nameType+'_custom_path]"]'),$(this).attr('data-val'))});$('#config_'+type+'_name_custom').on('click','.'+nameType+'-custom-name a[data-val]',function(){globalOp.insertAtCaret($('[name="config['+nameType+'_custom_name]"]'),$(this).attr('data-val'))});$('#form_item [name="config['+type+'_funcs_open]"]').bind('click',function(){if($(this).val()=='n'){$('#config_'+type+'_funcs_open').hide()}else{$('#config_'+type+'_funcs_open').show()}});$('#form_item #add_config_'+type+'_func').bind('click',function(){if(isImg){taskOpClass.add_config_img_func(null)}else{taskOpClass.add_config_file_func(null)}});pluginFuncOp.initHtml('#config_'+type+'_funcs')};downFunc(!0);downFunc(!1);$('#form_item [name="config[img_watermark]"]').bind('click',function(){var open=!1;var val=$(this).val();if(val=='y'){open=!0}else if($(this).attr('data-global')){open=!0}
if(open){$('#config_img_watermark').show()}else{$('#config_img_watermark').hide()}});$('#img_wm_logo_show a').bind('click',function(){var obj=$(this);confirmRight('删除后恢复使用全局设置logo，是否继续？',function(){$('#form_item [name="config[img_wm_logo]"]').val('');taskOpClass.show_img_wm_logo()})})},task_load:function(taskData,fieldList){taskOpClass.task_init();$('#form_item').find('[name^="config"]').each(function(){if($(this).is('input:radio')){if(!$(this).val()){$(this).prop('checked',!0).trigger('click')}}else if($(this).is('select')){$(this).val('').trigger('change')}});if(taskData){$('#form_item select[name="tg_id"]').val(toInt(taskData.tg_id));$('#form_item select[name="module"]').val(taskData.module);$('#form_item select[name="auto"]').val(toInt(taskData.auto)).trigger('change');var task_timer=taskData._task_timer;if(task_timer){var timerNames=['month','day','hour','minute'];for(var i in timerNames){var timerName=timerNames[i];var timerData=task_timer[timerName];if(!timerData||typeof(timerData)!='object'){timerData=[]}
if(timerData.length>0){$('#form_item [name="task_timer['+timerName+']"]').val(timerData.join(','));for(var ii in timerData){$('#task_timer_'+timerName).find('option[value="'+timerData[ii]+'"]').prop('selected','selected')}}else{$('#task_timer_'+timerName).find('option[value=""]').prop('selected','selected')}}}
var task_config=taskData.config;var showConfig=!1;if(task_config){var otherConfig=task_config.other;var singleConfig=task_config.single;delete task_config.other;delete task_config.single;if(otherConfig){$('#form_item').find('[name="config[other][timer_again]"][value="'+toInt(otherConfig.timer_again)+'"]').prop('checked',!0)}
if(singleConfig){singleConfig.open=toInt(singleConfig.open);$('#form_item').find('[name="config[single][open]"][value="'+singleConfig.open+'"]').prop('checked',!0);$('#form_item').find('[name="config[single][always]"][value="'+toInt(singleConfig.always)+'"]').prop('checked',!0);$('#form_item').find('[name="config[single][key]"]').val(singleConfig.key);if(singleConfig.open>0){globalOp.showPanelCollapse('#task_single')}}
for(var i in task_config){if((isObject(task_config[i])&&task_config[i].length>0)||(!isObject(task_config[i])&&task_config[i])){showConfig=!0;break}}
var imgFuncs=isObject(task_config.img_funcs)?task_config.img_funcs:[];var fileFuncs=isObject(task_config.file_funcs)?task_config.file_funcs:[];for(var i in task_config){var ele=$('#form_item').find('[name="config['+i+']"]').eq(0);if(ele.length>0){if(ele.is('input:radio')){$('#form_item').find('[name="config['+i+']"][value="'+task_config[i]+'"]').prop('checked',!0).trigger('click')}else{ele.val(task_config[i]);if(ele.is('select')){ele.trigger('change')}}}}
for(var i in imgFuncs){taskOpClass.add_config_img_func(imgFuncs[i])}
for(var i in fileFuncs){taskOpClass.add_config_file_func(fileFuncs[i])}}
if(taskData._show_config||showConfig){globalOp.showPanelCollapse('#task_config')}
if(fieldList&&fieldList.length>0){$('#config_img_name_custom .name-custom-path-fields').html('');$('#config_img_name_custom .name-custom-name-fields').html('');$('#config_file_name_custom .file-custom-path-fields').html('');$('#config_file_name_custom .file-custom-name-fields').html('');for(var i in fieldList){var fieldHtml='[字段:'+fieldList[i]+']';fieldHtml='<li><a href="javascript:;" data-val="'+fieldHtml+'">'+fieldHtml+'</a></li>';$('#config_img_name_custom .name-custom-path-fields').append(fieldHtml);$('#config_img_name_custom .name-custom-name-fields').append(fieldHtml);$('#config_file_name_custom .file-custom-path-fields').append(fieldHtml);$('#config_file_name_custom .file-custom-name-fields').append(fieldHtml)}}}
taskOpClass.show_img_wm_logo()},show_img_wm_logo:function(){var isGlobal=!1;var imgWmLogo=$('#form_item [name="config[img_wm_logo]"]').val();if(!imgWmLogo){isGlobal=!0;imgWmLogo=$('#img_wm_logo_show').attr('data-global')}
$('#img_wm_logo_show').hide();var imgObj=$('#img_wm_logo_show img');imgObj.attr('src','');if(imgWmLogo){imgWmLogo=window.site_config.root+imgWmLogo;imgObj.attr('src',imgWmLogo+'?'+(new Date().getTime()));if(isGlobal){$('#img_wm_logo_show p.help-block').show();$('#img_wm_logo_show a.glyphicon-remove').hide()}else{$('#img_wm_logo_show p.help-block').hide();$('#img_wm_logo_show a.glyphicon-remove').show()}
$('#img_wm_logo_show').show()}},add_config_img_func:function(funcData){pluginFuncOp.addHtml({funcData:funcData,funcName:'config[img_funcs][{id}][func]',funcParamName:'config[img_funcs][{id}][func_param]',tplId:'config_img_tpl_func',listId:'config_img_funcs',funcId:'config_img_func_{id}'},'downloadImg')},add_config_file_func:function(funcData){pluginFuncOp.addHtml({funcData:funcData,funcName:'config[file_funcs][{id}][func]',funcParamName:'config[file_funcs][{id}][func_param]',tplId:'config_file_tpl_func',listId:'config_file_funcs',funcId:'config_file_func_{id}'},'downloadFile')}}