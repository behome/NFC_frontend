(function(e){
    e.nfc_config = {
        settings:{},
        options:{}
    };
    if (void 0 === e.thisExplorer) {
        var v = navigator.userAgent.toLowerCase(); - 1 < v.indexOf("metasr") && -1 < v.indexOf("se") ? (e.thisExplorer = sogouExplorer, e.nfc_config.settings.explorerType = "sogou") : -1 < v.indexOf("firefox") ? (e.thisExplorer = browser, e.nfc_config.settings.explorerType = "firefox") : (e.thisExplorer = chrome, e.nfc_config.settings.explorerType = "chrome")
    }
    //购物网站评论是否预读设置
    e.nfc_config.options.taobao = 2;
    e.nfc_config.options.tmall = 2;
    e.nfc_config.options.jd = 2;
    e.nfc_config.options.No1 = 2;
    e.nfc_config.options.dd = 1;
    e.nfc_config.options.amazon = 1;
    e.nfc_config.options.gome = 1;
    e.nfc_config.options.suning = 1;
    e.nfc_config.classIdArray = [0, 233, 234, 235, 240, 242, 243, 239, 236, 237, 238, 245, 241, 244];
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
    e.nfc_product.defaultCommentsIndex = {};
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
    e.nfc_product.checkTimes = 0;
    e.nfc_product.repeatCounter = 0;
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
        loadConfig: function(a){
            e.thisExplorer.runtime.sendMessage({               
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
        }
    }
})(window);