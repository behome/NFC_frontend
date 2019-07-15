(function(e){
    e.nfc_config = {
        settings:{},
        options:{}
    };
    if (void 0 === e.thisExplorer) {
        var v = navigator.userAgent.toLowerCase(); - 1 < v.indexOf("metasr") && -1 < v.indexOf("se") ? (e.thisExplorer = sogouExplorer, e.nfc_config.settings.explorerType = "sogou") : -1 < v.indexOf("firefox") ? (e.thisExplorer = browser, e.nfc_config.settings.explorerType = "firefox") : (e.thisExplorer = chrome, e.nfc_config.settings.explorerType = "chrome")
    }
    //获取信息的网站
    e.nfc_config.settings.searchWords = "";
    e.nfc_config.settings.commentWords = {};
    e.nfc_config.settings.debug = 0;
    e.nfc_config.settings.browser = 1;
    e.nfc_config.settings.historyFakeReportTime = "";
    e.nfc_config.settings.historyFakeCode = 0;
    e.nfc_config.settings.historyFakeReason = "";
    e.nfc_config.settings.historyWarning = 1;
    //购物网站评论是否预读设置
    e.nfc_config.options.taobao = 2;
    e.nfc_config.options.tmall = 2;
    e.nfc_config.options.jd = 2;
    e.nfc_config.options.dd = 1;
    e.nfc_config.options.amazon = 1;
    e.nfc_config.options.gome = 1;
    e.nfc_config.options.suning = 1;
    e.nfc_status = {
        browser: {},
        extension: {}
    };
    e.thisExplorer.runtime.getManifest && (e.nfc_status.extension = e.thisExplorer.runtime.getManifest());
    "sogou" == e.nfc_config.settings.explorerType ? (v = e.thisExplorer.extension.getURL("manifest.xml"), e.nfc_status.extension.baseURL = v.replace(/manifest.xml/, ""), e.nfc_status.extension.update_url = "") : (v = e.thisExplorer.extension.getURL("manifest.json"), e.nfc_status.extension.baseURL = v.replace(/manifest.json/, ""));
    //评论检测有关变量
    e.nfc_status.extension.preRead = 0;
    e.nfc_status.extension.itemTipShow = 0;
    e.nfc_product = {};
    e.nfc_share = {};
    e.nfc_share.state = 0
    e.nfc_product.websiteId = 0;
    e.nfc_product.webOptionsName = "";
    e.nfc_product.websiteName = "";
    e.nfc_product.classId = 0;
    e.nfc_product.name = "";
    e.nfc_product.sellerId = 0;
    e.nfc_product.itemId = 0;
    e.nfc_product.productId = 0;
    e.nfc_product.sourceId = "";
    e.nfc_product.price = 0;
    e.nfc_product.sales = 0;
    e.nfc_product.grade = 0;
    e.nfc_product.commentNum = 0;
    e.nfc_product.defaultComments = [];
    e.nfc_product.forSendComments = [];
    e.nfc_product.ignoreComments = [];
    e.nfc_product.defaultCommentsIndex = {};
    e.nfc_product.CommentsPreResult = {};
    e.nfc_product.sincereComments = [];
    e.nfc_product.sincereCommentsIndex = {};
    e.nfc_product.sosoComments = [];
    e.nfc_product.sosoCommentsIndex = {};
    e.nfc_product.badComments = [];
    e.nfc_product.badCommentsIndex = {};
    e.nfc_product.normalComments = [];
    e.nfc_product.normalCommentsIndex = {};
    e.nfc_product.doubtComments = [];
    e.nfc_product.doubtCommentsIndex = {};
    e.nfc_product.defaultCommentNum = 0;
    e.nfc_product.sincereCommentNum = 0;
    e.nfc_product.sosoCommentNum = 0;
    e.nfc_product.badCommentNum = 0;
    e.nfc_product.normalCommentNum = 0;
    e.nfc_product.doubtCommentNum = 0;
    e.nfc_product.tryErrorTimes = 0;
    e.nfc_product.similarProducts = [];
    e.nfc_product.commentDoubtful = 0;
    e.nfc_product.commentDoubtfulReason = "";
    e.nfc_product.commentDoubtfulBriefReason = "";
    e.nfc_product.sendFakeReport = 0;
    e.nfc_product.sendProductInspectReport = 0;
    e.nfc_product.historyMem = {};
    e.nfc_product.checkTimes = 0;
    e.nfc_product.repeatCounter = 0;
    e.nfc_product.summaryResult = 100;
    e.nfc_product.preResult = 0;
    e.nfc_share.des = '我发现一个好商品，大家快来看看吧';
    Date.prototype.format = function(a) {
            var b = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds(),
                D: "Sun Mon Tue Wed Thu Fri Sat".split(" ")[this.getDay()],
                n: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[this.getMonth()]
            };
            /(y+)/.test(a) && (a = a.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var d in b)(new RegExp("(" + d + ")")).test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? b[d] : ("00" + b[d]).substr(("" + b[d]).length)));
            return a
    };
    e.nfc_configModule = {
        print_obj: function(a) {
            function b(a, e, g, l) {
                if (l > d) return g + e + ": <Maximum Depth Reached>n";
                if ("object" == typeof a) {
                    var k = null;
                    e = g + e + "：\n";
                    g += "\t";
                    for (var m in a) {
                        try {
                            k = a[m]
                        } catch (n) {
                            k = "<Unable to Evaluate>"
                        }
                        e = "object" == typeof k ? e + b(k, m, g, l + 1) : e + (g + m + ": " + k + "\n")
                    }
                    return e
                }
                return a
            }
            var d = 10;
            console.log("-----------------print_obj starts------------------");
            a = b(a, "Object", " ", 1);
            console.log(a);
            console.log("-----------------print_obj end------------------")
        },
        dateDiff: function(a, b) {
            var d, c, diff;
            var s = /(\d{4})年(\d{1,2})月(\d{1,2})日 (\d{1,2}):(\d{1,2})/i;
            d = s.exec(a);
            c = s.exec(b);
            console.log(b);
            diff = Math.abs(parseInt(d[1]) - parseInt(c[1]));
            if(diff == 0){
                diff = Math.abs(parseInt(d[2]) - parseInt(c[2]));
                if(diff == 0){
                    diff = Math.abs(parseInt(d[3]) - parseInt(c[3]));
                    if(diff <= 2){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        },
        loadConfig: function(a){
            e.thisExplorer.runtime.sendMessage({               
               /* searchWords: 1,
                commentWords: 1,*/
                options: 1
            }, function(b) {
               /* e.com_nfc_config.settings.searchWords = b.searchWords;
                e.com_nfc_status.extension.itemTipShow = b.itemTipShow;*/
                if (0 < b.options.length) try {
                    e.nfc_config.options = JSON.parse(b.options)
                } catch (d) {
                    console.log("Error in parsing options.")
                }
               /* try {
                    e.nfc_config.settings.commentWords = JSON.parse(b.commentWords)
                } catch (d) {
                    console.log("Error in parsing commentWords:" + b.commentWords)
                }*/
                a();
            })
        },
        isPreRead: function(){
            var a = e.nfc_config.options[e.nfc_product.webOptionsName];
            e.nfc_status.extension.preRead = 1 == a ? 1 : 2 == a ? 0 : 1;
            return !0
        },
        analyzeComment: function(){
            if(0 >= e.nfc_product.defaultCommentNum){
                e.nfc_product.sincereCommentNum = 0, e.nfc_product.sosoCommentNum = 0, e.nfc_product.badCommentNum = 0;
            }
            var a, q, h = e.nfc_product.defaultCommentNum;
            //console.log(e.nfc_product.defaultComments);
            for(;h < e.nfc_product.defaultComments.length; h++){
                a = e.nfc_product.defaultComments[h];
                switch(e.nfc_product.websiteId){
                   case 1:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].auctionSku + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 2:
                        q = e.nfc_product.defaultComments[h].firstCmtDate.slice(0, 10) + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].auctionSku + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 3:
                        q = e.nfc_product.defaultComments[h].firstCmtDate.slice(0, 10) + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 6);
                        break;
                    case 4:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 5:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 6:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 7:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 8:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3)
                }
                if(a.firstComment.length > 5){
                    e.nfc_product.forSendComments.push({
                        index: q,
                        comment:a.firstComment,
                        haveappend:a.haveappend,
                        appendDays:a.appendDays,
                        rate:a.rate,
                        havePic:a.havePic
                    }); 
                }else{
                    e.nfc_product.ignoreComments.push({
                        id:q
                    });
                }
               

                
            }
            //console.log(JSON.stringify(e.nfc_product.forSendComments));
            e.thisExplorer.runtime.sendMessage({
                analyze:1,
                forcomment:JSON.stringify(e.nfc_product.forSendComments)
            },function(b){
                //console.log(b.preResult);
               e.nfc_product.CommentsPreResult = JSON.parse(b.preResult);
               for(var index in e.nfc_product.CommentsPreResult){
                    e.nfc_product.defaultCommentsIndex[index] = {};
                    e.nfc_product.defaultCommentsIndex[index].result = e.nfc_product.CommentsPreResult[index];
                    /*e.nfc_product.CommentsPreResult[index]*/
                }
                var h, a;
                for(h = 0; h < e.nfc_product.ignoreComments.length; h++){
                    a = e.nfc_product.ignoreComments[h];
                    e.nfc_product.defaultCommentsIndex[a.id] = {};
                    e.nfc_product.defaultCommentsIndex[a.id].result = 3;
                }

            });
            return !0;
           
        },
        handlePreResult: function(){
            var q;
            var h = e.nfc_product.defaultCommentNum;
             for(;h < e.nfc_product.defaultComments.length; h++){
                a = e.nfc_product.defaultComments[h];
                switch(e.nfc_product.websiteId){
                   case 1:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].auctionSku + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 2:
                        q = e.nfc_product.defaultComments[h].firstCmtDate.slice(0, 10) + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].auctionSku + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 3:
                        q = e.nfc_product.defaultComments[h].firstCmtDate.slice(0, 10) + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 6);
                        break;
                    case 4:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 5:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 6:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 7:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3);
                        break;
                    case 8:
                        q = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + e.nfc_product.defaultComments[h].firstComment.slice(0, 3)
                }
                if(e.nfc_product.CommentsPreResult[q] == 2){
                    e.nfc_product.sincereComments.push(e.nfc_product.defaultComments[h]);
                }else if(e.nfc_product.CommentsPreResult[q] == 1){
                    e.nfc_product.sosoComments.push(e.nfc_product.defaultComments[h]);
                }else if(e.nfc_product.CommentsPreResult[q] == 0){
                    e.nfc_product.badComments.push(e.nfc_product.defaultComments[h]);
                }
                e.nfc_product.defaultCommentNum++;
            }
            e.nfc_product.defaultCommentNum++;
            e.nfc_product.summaryResult = e.nfc_product.sincereComments.length*100/e.nfc_product.defaultCommentNum;
            return !0;
        }
        
    }
})(window);