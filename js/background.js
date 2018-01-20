
window.thisExplorer.runtime.onInstalled.addListener(function(a){
	 void 0 === localStorage.options && saveInit(window.com_nfc_config.options);
});

window.thisExplorer.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	var b = {};

	request.options && (sender = localStorage.options, b.options = void 0 === sender ? "" : sender, sendResponse(b));
   /* if (a.searchWords || a.commentWords) {
        var e = (new Date).format("yyyy-MM-dd");
        c = localStorage.lastCheckKeywordsDate;
        if (void 0 === c || c < e) localStorage.lastCheckKeywordsDate = e, checkKeywordsUpdate();
        a.searchWords && (b.searchWords = localStorage.searchWords ? localStorage.searchWords : "", (!b.searchWords || "[]" == b.searchWords || 10 > b.searchWords.length) && updateSearchWords());
        a.commentWords && (b.commentWords = localStorage.commentWords ? localStorage.commentWords : "", (!b.commentWords || "null" == b.commentWords || 10 > b.commentWords.length) && updateCommentWords());
        a.tipShow && (e > (localStorage.viewItemsDate ? localStorage.viewItemsDate : "") ? (b.itemTipShow = 0, localStorage.viewItemsDate = e) : b.itemTipShow = 1);
        d(b)
    }
    b.options = localStorage.options;
    sendResponse(b);*/
    return !0;
});


chrome.contextMenus.create({
	title: '翻译选中的单词： %s', // %s表示选中的文字
	contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
	onclick: queryWord

	/*function(params)
	{
		// 注意不能使用location.href，因为location是属于background的window对象
		chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
	}*/
});
function queryWord(info, tab){
	// alert("右键点击生效!"+info.selectionText);
	var xmlhttp;
	var apiURL = 'http://fanyi.youdao.com/openapi.do?keyfrom=chenqiushi&key=835334021&type=data&doctype=json&version=1.1&q='+info.selectionText;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var resultObj = JSON.parse(xmlhttp.responseText);
            if(resultObj.errorCode == 0){
                if(resultObj.basic){
                    alert(resultObj.translation + ' ['+resultObj.basic.phonetic+']'+' '+resultObj.basic.explains);
                }else{
                    alert(resultObj.translation);
                }
            }
            if(resultObj.errorCode == 20){
            	alert("要翻译的文本过长！")
            }
            if(resultObj.errorCode == 30){
            	alert("无法进行有效的翻译！")
            }
            if(resultObj.errorCode == 40){
            	alert("不支持该类型的语言！")
            }
            if(resultObj.errorCode == 50){
            	alert("无效的key！")
            }
        }
    }
    xmlhttp.open("GET", apiURL, true);
    xmlhttp.send();
}

function saveInit(a){
	var c = new Date,
        c = c.getFullYear() + "-" + (c.getMonth() + 1) + "-" + c.getDate();
    a.lastSetDate = c;
    a = JSON.stringify(a);
    localStorage.setItem("options", a);
    return !0
}
