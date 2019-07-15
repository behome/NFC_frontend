
window.thisExplorer.runtime.onInstalled.addListener(function(a){
	 void 0 === localStorage.options && saveInit(window.nfc_config.options);
});
window.thisExplorer.runtime.onConnect.addListener(function(port){
    console.assert(port.name == "knock");
    var b = {};
    port.onMessage.addListener(function(msg){
         $.ajax({
             data: {
                websiteId: msg.websiteId,
                itemId: msg.itemId,
                sellerId: msg.sellerId
            },
            dataType:"json",
            type:"POST",
            url:"http://47.93.243.101:80/infer/index/",
            cache:false,
            success: function(a){
                b.preReadResult = a ? a : "";
                port.postMessage(b);
            },
            error: function(a, c, e){

            }
        });
         return !0;
    });
    return !0;
});
window.thisExplorer.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	var b = {};

	request.options && (sender = localStorage.options, b.options = void 0 === sender ? "" : sender, void 0 === request.searchWords && void 0 === request.commentWords && sendResponse(b));
    if(request.analyze){
        if(request.forcomment.length > 0){
             $.ajax({
             data: {
                comments:request.forcomment
            },
            dataType:"text",
            type:"POST",
            url:"http://47.93.243.101:80/infer/comAnaly/",
            cache: false,
            async:true,
            success: function(a , e){
                //console.log(a);
                b.preResult = a ? a : "";
                sendResponse(b);
            },
            error: function(a, c, e){
                sendResponse(b);
            }
        });
        } 
    }
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

function gck(a, c, d, b) {
    for (var e = (new Date).format("yyyyMMdd"), e = parseInt(e), f = 0, h = /\d/g, g; null !== (g = h.exec(a + "1" + c + "2" + d + "3" + b));) g = parseInt(g[0]), f += g;
    return f * (e + 20170701 - 365)
}

function test() {};
