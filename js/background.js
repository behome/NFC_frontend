
window.thisExplorer.runtime.onInstalled.addListener(function(a){
	 void 0 === localStorage.options && saveInit(window.com_nfc_config.options);
});

window.thisExplorer.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	var b = {};

	request.options && (sender = localStorage.options, b.options = void 0 === sender ? "" : sender, void 0 === request.searchWords && void 0 === request.commentWords && sendResponse(b));
    if (request.searchWords || request.commentWords) {
        var e = (new Date).format("yyyy-MM-dd");
        c = localStorage.lastCheckKeywordsDate;
        if (void 0 === c || c < e) localStorage.lastCheckKeywordsDate = e, checkKeywordsUpdate();
        request.searchWords && (b.searchWords = localStorage.searchWords ? localStorage.searchWords : "", (!b.searchWords || "[]" == b.searchWords || 10 > b.searchWords.length) && updateSearchWords());
        request.commentWords && (b.commentWords = localStorage.commentWords ? localStorage.commentWords : "", (!b.commentWords || "null" == b.commentWords || 10 > b.commentWords.length) && updateCommentWords());
        request.tipShow && (e > (localStorage.viewItemsDate ? localStorage.viewItemsDate : "") ? (b.itemTipShow = 0, localStorage.viewItemsDate = e) : b.itemTipShow = 1);
        sendResponse(b)
    }
    request.checkFakeReviews && $.ajax({
        dataType: "text",
        url: request.checkFakeReviews,
        data: {
            from: 1,
            source: request.source,
            itemId: request.itemId,
            productId: request.productId,
            ck: gck(1, request.source, request.itemId, request.productId)
        },
        success: function(a) {
            b.result = a ? a : "";
            sendResponse(b)
        },
        error: function(a, c, e) {
            b.result = "";
            sendResponse(b)
        }
    });
    request.sendProductReport && $.ajax({
        data: {
            from: 1,
            source: request.source,
            id: request.id,
            name: request.name,
            code: request.code,
            totalCount: request.totalCount,
            doubtfulCount: request.doubtfulCount,
            fakeComment: request.fakeComment,
            ck: gck(1, request.source, request.id, request.fakeComment),
            reason: request.reason,
            productId: request.productId,
            sourceId: request.sourceId,
            htime: request.historyFakeReportTime,
            hcode: request.historyFakeCode,
            hreason: request.historyFakeReason
        },
        dataType: "text",
        type: "POST",
        url: window.nfc_config.settings.productInspectReportUrl,
        cache: !1,
        success: function(a) {
            b.result = "数据已发送。";
            sendResponse(b)
        },
        error: function(a, c, e) {
            b.result = "发送失败。status = " + c + ", message= " + e;
            sendResponse(b)
        }
    });
    if(request.getData){
         if (0 > request.url.indexOf("http"))
            if (-1 < request.url.indexOf("//")) request.url = request.url.replace(/\/\//, "http://");
            else return sendResponse(b), !0;
        $.ajax({
            dataType: "text",
            url: request.url,
            cache: !1,
            success: function(a) {
                b.returnedData = a ? a : "";
                sendResponse(b)
            },
            error: function(a, c, e) {
                b.returnedData = "";
                sendResponse(b)
            }
        })
    }
     return !0;
});

//检查关键字是否需要更新
function checkKeywordsUpdate() {
    $.ajax({
        dataType: "json",
        data: {
            type: 1,
            from: 1,
            t: window.nfc_config.settings.debug
        },
        url: window.nfc_config.settings.searchWordsUrl,
        success: function(a) {
            var c = localStorage.lastUpdateSearchClassTime;
            if (void 0 === c) updateSearchWords();
            else {
                var d = !1,
                    b;
                for (b in a.scUpdateTime)
                    if (a.scUpdateTime[b] > c) {
                        d = !0;
                        break
                    }
                d && updateSearchWords()
            }
            c = localStorage.lastUpdateCmtWordTime;
            void 0 === c ? updateCommentWords() : c < a.cwUpdateTime && updateCommentWords()
        }
    })
}

function updateSearchWords() {
    $.ajax({
        dataType: "text",
        data: {
            type: 2
        },
        url: window.nfc_config.settings.searchWordsUrl,
        success: function(a) {
            localStorage.setItem("searchWords", a);
            a = (new Date).format("yyyy-MM-dd hh:mm:ss");
            localStorage.setItem("lastUpdateSearchClassTime", a)
        }
    })
}

function updateCommentWords() {
    $.ajax({
        dataType: "text",
        data: {
            type: 3
        },
        url: window.nfc_config.settings.searchWordsUrl,
        success: function(a) {
            localStorage.setItem("commentWords", a);
            a = (new Date).format("yyyy-MM-dd hh:mm:ss");
            localStorage.setItem("lastUpdateCmtWordTime", a)
        }
    })
}

function gck(a, c, d, b) {
    for (var e = (new Date).format("yyyyMMdd"), e = parseInt(e), f = 0, h = /\d/g, g; null !== (g = h.exec(a + "1" + c + "2" + d + "3" + b));) g = parseInt(g[0]), f += g;
    return f * (e + 20170701 - 365)
}

function test() {};
