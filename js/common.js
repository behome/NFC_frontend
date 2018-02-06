(function(e){
    e.nfc_config = {
        settings:{},
        options:{}
    };
    if (void 0 === e.thisExplorer) {
        var v = navigator.userAgent.toLowerCase(); - 1 < v.indexOf("metasr") && -1 < v.indexOf("se") ? (e.thisExplorer = sogouExplorer, e.nfc_config.settings.explorerType = "sogou") : -1 < v.indexOf("firefox") ? (e.thisExplorer = browser, e.nfc_config.settings.explorerType = "firefox") : (e.thisExplorer = chrome, e.nfc_config.settings.explorerType = "chrome")
    }
    //获取信息的网站
    e.nfc_config.settings.baseUrl = "http://www.xuanyouwang.com/";
    e.nfc_config.settings.searchWordsUrl = e.nfc_config.settings.baseUrl + "customSearchWords.php";
    e.nfc_config.settings.productRecommendUrl = e.nfc_config.settings.baseUrl + "customRelSearch.php";
    e.nfc_config.settings.checkUpdateUrl = "http://commentanalyzer-10047652.file.myqcloud.com/update.xml";
    e.nfc_config.settings.fakeReportUrl = e.nfc_config.settings.baseUrl + "fakeCmtReportAPI.php";
    e.nfc_config.settings.fakeCheckUrl = e.nfc_config.settings.baseUrl + "fakeCmtSearchAPI.php";
    e.nfc_config.settings.productInspectReportUrl = e.nfc_config.settings.baseUrl + "fakeCmtInspectAPI.php";
    e.nfc_config.settings.searchWords = "";
    e.nfc_config.settings.commentWords = {};
    e.nfc_config.settings.debug = 0;
    e.nfc_config.settings.browser = 1;
    e.nfc_config.settings.detailReport = 1;
    e.nfc_config.settings.detailReportCode = "2017Oct";
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
            var d, c;
            d = a.split("-");
            c = new Date(d[1] + "-" + d[2] + "-" + d[0]);
            d = b.split("-");
            return parseInt(Math.abs(c - new Date(d[1] + "-" + d[2] + "-" + d[0])) / 1E3 / 60 / 60 / 24)
        },
        loadConfig: function(a){
            e.thisExplorer.runtime.sendMessage({               
                searchWords: 1,
                commentWords: 1,
                options: 1,
                tipShow: 1
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
        analyzeCommentData: function() {
            var a,
                b, d, c, f, g, l, k, m, n = "";
            if (0 >= e.nfc_product.defaultCommentNum)
                for (f in e.nfc_product.sincereCommentNum = 0, e.nfc_product.sosoCommentNum = 0, e.nfc_product.badCommentNum = 0, e.nfc_product.normalCommentNum = 0, e.nfc_product.doubtCommentNum = 0, e.nfc_product.defaultComments) e.nfc_product.defaultComments[f].result = 0, e.nfc_product.defaultComments[f].remark = "", e.nfc_product.defaultComments[f].keyword = "";
            var h = e.nfc_product.defaultCommentNum;
            a: for (; h < e.nfc_product.defaultComments.length; h++) {
                a = e.nfc_product.defaultComments[h];
                if (void 0 === a.result) a.result = 0, a.remark = "", a.keyword = "";
                else if (0 < a.result) continue;
                n = "";
                c = a.nick + " " + a.displayRatePic + " " + a.auctionSku;
                m = a.firstComment + "." + a.appendComment + " ";
                m = m.replace(/(\uff0c|\u3002|\uff01|\uff1b|\uff1a|\uff5e|\uff1f|\u3001|"|"|\u2026|\*|\uff08|\uff09|\(|\)|\?|\/|\\)/g, function(a) {
                    var b = "";
                    switch (a) {
                        case "，":
                            b = ",";
                            break;
                        case "。":
                            b = ".";
                            break;
                        case "！":
                            b = "!";
                            break;
                        case "；":
                            b = ";";
                            break;
                        case "：":
                            b = ":";
                            break;
                        case "～":
                            b = "~";
                            break;
                        case "？":
                            b = " ";
                            break;
                        case "?":
                            b = " ";
                            break;
                        case "、":
                            b = "x";
                            break;
                        case "“":
                            b = "";
                            break;
                        case "”":
                            b = "";
                            break;
                        case "（":
                            b = " ";
                            break;
                        case "）":
                            b = " ";
                            break;
                        case "(":
                            b = " ";
                            break;
                        case ")":
                            b = " ";
                            break;
                        case "…":
                            b = ".";
                            break;
                        case "*":
                            b = "n";
                            break;
                        case "/":
                            b = " ";
                            break;
                        case "\\":
                            b = " "
                    }
                    return b
                });
                if (3 > m.length) e.nfc_product.defaultComments[h].result = 4, e.nfc_product.defaultComments[h].remark = "太短了，没什么参考价值";
                else if ((0 <= m.indexOf("没有填写评") || 0 <= m.indexOf("系统默认") || 0 <= m.indexOf("默认评价") || 0 <= m.indexOf("买家未作出评价")) && 1 > a.appendComment.length) e.nfc_product.defaultComments[h].result = 4, e.nfc_product.defaultComments[h].remark = "忽略。";
                else {
                    b = /(\u4e0d(\u8fc7|\u4f46|\u5355|\u5f97\u4e86|\u4e45|\u6127|\u8bba|\u6599|\u5982)|\u6ca1\u60f3\u5230|\u6ca1\u6599\u5230|\u60f3\u4e0d\u5230|\u672a\u6765|\u65e0\u8bba|\u4e0d\u5f97\u4e0d|\u5dee\u4e0d\u591a|(\u6ca1(\u6709)?(?!\u7b2c|\u4e0a|\u524d|\u90a3|\u6628|\u6709)|\u4e0d\u5230)[^\s.,;!:~?()]{0,2}(\u5929|\u5468|\u5206\u949f|\u4e45|\u6b21|\u6708|\u5e74|\u79d2|\u65f6|\u529f\u592b|\u523b)(\u5c31)?|(\u5929|\u5468|\u5206\u949f|\u6b21|\u6708|\u5e74|\u79d2|\u65f6)(\u90fd)?(\u6ca1(\u6709)?|\u4e0d\u5230)\u5c31|\u4e0d\u5e26\u8fd9\u4e48|((?!\u4f46|\u53ea|\u5c31|\u53ef|\u5012|\u82e5|\u8981).|^)\u662f\u4e0d\u662f|\u4e0d\u5f71\u54cd|(\u7740\u6025)?\u51fa\u5dee|\u6ca1\u7406\u7531\u4e0d|\u5c3f\u4e0d\u6e7f|\u4e0d\u9508\u94a2|\u5fcd\u4e0d\u4f4f|\u81f3\u5c11)/g;
                    m = m.replace(b, "");
                    0 < e.nfc_product.commentDoubtful + e.nfc_config.settings.historyFakeCode && -1 < m.indexOf(" ") && (b = /((\u62c5\u5fc3|\u6015|\u6000\u7591|\u7591\u5fc3|\u6ca1|\u4e0d|\u4ee5\u4e3a|\u65e0|\u96f6|\u522b|\u672a|\u5f88\u5c11|\u5c31\u7b97|\u5982(\u679c)?|\u8981\u662f|\u5373\u4f7f|\u4e07\u4e00|\u9664\u975e)[^\s.,;!:~?()]*?)\s+/g, m = m.replace(b, "$1"));
                    for (b = /[\d]{5,}|(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341){5,}/g; null !== (matches = b.exec(m));) {
                        var r = matches[0],
                            p = !0;
                        for (f = 0; f < r.length - 1; f++)
                            if (r[f] != r[f + 1]) {
                                p = !1;
                                break
                            }
                        p || (e.nfc_product.defaultComments[h].result = 10, e.nfc_product.defaultComments[h].remark = "老板，有人在你这里打广告！")
                    }
                    if (0 <= m.indexOf("打个广告") || 0 <= m.indexOf("打个小广告")) e.nfc_product.defaultComments[h].result = 10, e.nfc_product.defaultComments[h].remark = "老板，有人在你这里打广告！";
                    else if (f = 0, b = /([\s.,;!:~?()]|^)(\u7834|\u70c2)[^\s.,;!:~?()]{1,2}[\s.,;!:~?()]/, (matches = b.exec(m)) && 0 > matches[0].indexOf("了")) e.nfc_product.defaultComments[h].result = 6, e.nfc_product.defaultComments[h].remark = "差评！";
                    else {
                        if (0 <= m.indexOf("差!") && 0 > m.indexOf("色差!") && 0 > m.indexOf("误差!") && 0 > m.indexOf("偏差!") && 0 > m.indexOf("没差!") && 0 > m.indexOf("不差!") && 0 > m.indexOf("没有差!") && (b = /(\u4e0d\u6bd4)[^\s.,;!:~?()]*?(\u5dee!)/, result1 = b.test(m), !result1)) {
                            e.nfc_product.defaultComments[h].result = 6;
                            e.nfc_product.defaultComments[h].remark = "差评！";
                            continue
                        }
                        p = m;
                        d = k = 1;
                        var v = 0;
                        l = [];
                        for ((r = e.nfc_config.settings.commentWords) && void 0 !== r.neg || (r = {
                            doubt: "",
                            neg: "",
                            soso: "",
                            praise: ""
                        }); k;) {
                            v++;
                            if (20 < v) break;
                            l = this.findCompositeBadWord(p);
                            g = l[0];
                            p = l[1];
                            g || (g = this.findExpression(p, r.neg + " " + r.soso, " "));
                            if (g) {
                                l = p;
                                k = 0;
                                b = new RegExp("(担心|怕(?!冷|热|黑|是)|怀疑|疑心|本来|原(来|本)|(起|当|最)初|一直|以为|(没|沒)(?!错|事|用|羞|门|脸)|木有|无(?!非|法|关|奈|心|限|锡|效|所|耻)|零(?!食|散)|((?!个|比|和|跟|与|差|区|分|级|类|识|特).|^)别(?!说|提)|不(?!够|穿|好|错)|未(?!来|免)|很少|如(?!大家|今)|((?!主|需|只|概|首|摘|重).|^)要是|只要|即使|万一|估计|除非|空气|雾霾|气温|温度|现在|(白|春|夏|秋|冬|星期|昨|前|明|后|阴|雨|晴)天(?!穿)|环境|社会|家里|晚上|网(?!购|上)|污染|缺水|房子|物流|韵达|顺丰|Ems|EMS|圆通|中通|快递|送货|((?!与|和|比|跟).|^)图片|照(片|相)|(拍|照)(的|得|出来|照)|赠|((?!来|别|能|要).|^)说(?!真|实|明)|想(?!要|象|扔|丢|退)|撞衫|解决|纠正|避|防|祛|省去|消|调和|((?!比|和|跟|与|是|我).|^|((?!比|和|跟|与|是).|^)我)(上(一)?次|(上|前)一个|下次|第一次|以后|将来|之前|此前|前一段|以前|从前|购买前|过去|去年|前(几|两)(次|天)|其(他|它)(?!部分|地方|内容|颜色|型号)|最近|这段时间|近来|这些日子|这些天|这两周|((?!按|照|参考).|^)(平时|平常)|当时|最早|实体|((?!特|个|比|和|跟|与).|^)别(人|家|的)|多家|商店|店里|超市|另(外)?一(家|个))|(皮肤|肤色|((?!要|翻|丢|没|露|笑|嘴).|^)脸|((?!裤|护|绑).|^)腿|((?!裤|山).|^)腰(?!包|带|刀|鼓|果|花|子|围|部)|((?!垫|裤|墙|山|下|针|手|马|跟|板|只|个).|^)脚(?!盆|印|踏|掌)|((?!把|扶|扳|抄|拉|拿|入|洗|新|助|划|下|动|快|到).|^)手(?!机|感|臂|洗)|((?!虫|刺|龙|满|猫|惹|入|傻|顺|转|瞎|一).|^)眼(?!镜)|((?!美).|^)眉|牙(?!刷|膏|线)|((?!刺|扑).|^)鼻(?!烟)|((?!夹|扯|根|搓|梳).|^)(头|白)发|指(?!环|南|针|令|引)|((?!木|银|丑).|^)耳(?!机|环)|痘|颈|((?!护).|^)膝|体型)(?!时)|蚊子|光线|灯光|评价(?!晚|迟)|评论|应该|比(那|某)(些|种)|(我|他|她)是|本人|喜欢|就爱)[^\\s.,;!:~?()]*?(" + g + ")");
                                if (match = b.exec(m)) {
                                    if (k = 1, "如" == match[1] || -1 < match[1].indexOf("要是") ? -1 < match[0].indexOf("的话") ? k = 0 : (b = /(\u5c31|\u4f1a)(\u66f4)?(\u559c\u6b22|\u5b8c\u7f8e|\u6ee1\u610f|\u597d|\u65b9\u4fbf|\u5b8c\u5584|\u7f8e)/, (d = b.test(g)) && (k = 0)) : ("没" == match[1] || "木有" == match[1]) && -1 < match[0].indexOf("就") && (k = 0), k && (b = /\u76ae|\u8138|\u817f|\u8170|\u811a|\u624b|\u773c|\u7259|\u9f3b|\u8033|\u9888|\u819d|\u6307/, result1 = b.test(match[1]))) b = /\u7d27|\u75d2|\u75bc|\u7d27|\u9ebb|\u75db|\u9178|\u677e|\u7d2f|\u52d2|\u96be|\u4e0d\u8212\u670d/, (result1 = b.test(match[0])) ? k = 0 : (b = new RegExp(match[0] + "(紧|痒|疼|紧|麻|痛|酸|松|累|勒|难|不舒服)"), (result1 = b.test(m)) && (k = 0))
                                } else {
                                    d = b = 0;
                                    for (var t = l, u = new RegExp("(本来|原(来|本)|(起|当|最)初|一直|以为|空气|雾霾|气温|温度|现在|环境|社会|家里|晚上|污染|缺水|房子|((?!与|和|比|跟).|^)图片|照片|((?!比|和|跟|与|是|我).|^|((?!比|和|跟|与|是).|^)我)(上(一)?次|(上|前)一个|之前|此前|前一段|以前|从前|购买前|过去|去年|前(几|两)次|其(他|它)(?!部分|地方|内容|颜色|型号)|最近|这段时间|近来|这些日子|这些天|这两周|((?!按|照|参考).|^)(平时|平常)|当时|最早|实体|((?!特|个|比|和|跟|与).|^)别(人|家|的)|多家|商店|店里|超市|另(外)?一(家|个))|(皮肤|肤色|((?!要|翻|丢|没|露|笑|嘴).|^)脸|((?!裤|护|绑).|^)腿|((?!裤|山).|^)腰(?!包|带|刀|鼓|果|花|子|围|部)|((?!垫|裤|墙|山|下|针|手|马|跟|板|只|个).|^)脚(?!盆|印|踏|掌)|((?!把|扶|扳|抄|拉|拿|入|洗|新|助|划|下|动|快|到).|^)手(?!机|感|臂|洗)|((?!虫|刺|龙|满|猫|惹|入|傻|顺|转|瞎|一).|^)眼(?!镜)|((?!美).|^)眉|牙(?!刷|膏|线)|((?!刺|扑).|^)鼻(?!烟)|((?!夹|扯|根|搓|梳).|^)(头|白)发|指(?!环|南|针|令|引)|((?!木|银|丑).|^)耳(?!机|环)|痘|颈|((?!护).|^)膝|体型)(?!时)|蚊子|光线|灯光|评价(?!晚|迟|[\\s,])|评论(?![\\s,]))[^.;!:~?]*?" + g), x = /(\u73b0\u5728|\u4eca\u5929|\u540e|\u8bd5|\u7a7f|\u6234|\u7528|\u5403|\u5c1d|\u6d17|\u5c45\u7136|\u7adf\u7136|\u5efa\u8bae|\u53d1\u73b0|\u4e00\u770b|\u56de\u5bb6|\u5230\u5bb6|\u62ff\u5230|\u53d1\u6765|\u4f53\u9a8c|\u5ba2\u670d|\u539f\u6765(\u5c31)?\u662f|(\u633a|\u5f88|\u975e\u5e38|\u86ee)(\u597d|\u68d2|\u4e0d\u9519)|\u4e0d\u9519|\u8fd8\u53ef\u4ee5|\u8fd8\u884c|\u7ed9|\u8fd9\u4e2a|\u4f46|\u7136\u800c|\u53ef\u662f|\u5374)(.*)/; !d && 4 > b;)
                                        if (b++, match = u.exec(t)) {
                                            var w = x.exec(match[0]);
                                            w ? t = w[5] : (d = k = 1, "," == match[0].charAt(0) && (match[0] = match[0].substr(1)), w = match[0].replace(/,|\s/g, ""), 2 < match[0].length - w.length && (k = 0))
                                        } else k = 0, d = 1
                                } if (!k) {
                                    g = this.findException(g, l);
                                    k = g[0];
                                    g = g[1];
                                    if (0 == k)
                                        if (b = new RegExp("(" + g + ")[^\\s.,;!:~?()]*?(空气|雾霾|社会|房子|缺水|快递(?!袋)|送货|传图|拍照|优惠|蚊子|光线|灯光|评价|评论|气温|温度|现在|(白|春|夏|秋|冬|星期|昨|前|明|后|阴|雨|晴)天|环境|社会|家里|晚上|网(?!购|上)|污染|物流|韵达|顺丰|Ems|EMS|圆通|中通|((?!与|和|比|跟).|^)图片|照(片|相)|(拍|照)(的|得|出来|照)|习惯|的人)"), matches = b.exec(l)) k = 1;
                                        else if (b = /\u6c14\u6124|\u5c31\u662f|\u9057\u61be|\u53ef\u60dc|\u6700\u597d|\u8981\u662f|\u4e0d\u6ee1|\u4e3a\u4ec0\u4e48|\u4e3a\u5565|\u4e3a\u6bdb|\u53ea\u662f|\u6839\u672c|\u4e0d\u80fd|\u552f\u72ec|\u5c31\u4e00\u70b9|\u5410\u69fd|\u4e0d\u662f\u592a\u6ee1\u610f|\u4e0d\u662f\u5f88\u6ee1\u610f|\u7591\u60d1|\u4e0d\u559c\u6b22|\u5efa\u8bae\u5356\u5bb6|\u5efa\u8bae\u5546\u5bb6|\u5931\u671b|\u540e\u6094|\u90c1\u95f7|\u4e0d\u6109\u5feb|\u5f71\u54cd\u5fc3\u60c5|\u4e0d\u5f00\u5fc3|\u8ba8\u538c|\u9ebb\u70e6|\u53ef\u601c|\u60b2\u5267|\u676f\u5177|\u63d0\u9192\u5927\u5bb6|\u63d0\u9192\u5404\u4f4d|\u63d0\u9192\u5356\u5bb6|\u4ecb\u610f\u7684|\u4e0d\u4e00\u6837|\u5947\u602a|\u8ff7\u60d1|\u56f0\u60d1|\u5d29\u6e83|\u8bf7\u89e3\u91ca|\u9119\u89c6|\u6709\u5f85\u63d0|\u6709\u5f85\u6539|\u5982\u679c\u80fd|\u5982\u80fd|\u5c0f\u5efa\u8bae|\u4e0d\u7406|\u7f3a\u70b9/, d = b.test(g), !d && (b = new RegExp("(" + g + ")([^\\s.,;!:~?()]*?)(没(有|了|啦|见|看|发|找|出|事|关)|木有|不(出|见|行|到|得)|消(?!费)|少|轻|缓解|改善|下去|解决|处理|评价|平价|才怪|是多余的|再(说|来)|惊喜|的话|都(难|能|可以|行|满意)|就退|的时候|就会|刚好)"), matches = b.exec(m))) k = 0 <= matches[2].indexOf("外") || 0 <= matches[2].indexOf("还") ? 0 : 1, ("不太" == g || "不大" == g || "不是太" == g || "不是很" == g || "有点不" == g) && 0 <= matches[2].indexOf("满意") ? k = 0 : "有点" == g && -1 < l.indexOf("有点不") ? k = 0 : "有些" == g && -1 < l.indexOf("有些不") && (k = 0);
                                    if (0 == k) {
                                        k = 0;
                                        b = /\u5c0f\u5fc3|\u8981\u52a0\u5f3a|\u4e86\u70b9|\u4e86\u4e9b|\u4e86\u4e00\u4e9b|\u4e86\u4e00\u70b9|\u614e\u91cd|\u4e00\u70b9|\u4e00\u4e9b|\u4e0d\u660e\u663e|\u63d0\u4e2a\u9192|\u4ecb\u610f\u7684|\u4e0d\u4e00\u6837|\u5947\u602a|\u7740\u6025|\u9178\u75db|\u4e0d\u642d|\u62c5\u5fc3|\u53ef\u60dc/;
                                        d = b.test(g);
                                        if (!d && (b = new RegExp("(非常|严重|十分|太|相当|特别|超级|最|极|极度)(" + g + ")"), matches = b.exec(l)))
                                            if (word1 = matches[1] + g, b = new RegExp("(物流|韵达|顺丰|Ems|EMS|圆通|中通|快递|送货|包装|盒|赠品|图片|印刷)[^\\s.,;!:~?()]*?(" + word1 + ")"), result1 = b.test(l)) {
                                                p = p.replace(g, "xxx");
                                                k = 1;
                                                continue
                                            } else {
                                                e.nfc_product.defaultComments[h].result = 6;
                                                e.nfc_product.defaultComments[h].remark = "差评！";
                                                k = 0;
                                                continue a
                                            }
                                        if (0 <= r.neg.indexOf(" " + g + " ")) {
                                            b = new RegExp("(物流|韵达|顺丰|Ems|EMS|圆通|中通|快递|送货|包装|盒|赠品|图片|印刷|耳机|有点|有一点|有些|似乎|好像|可能|虽|难道|不管|不知道|是不是|慢|送|赠)[^s.,;!:~?()]*?(" + g + ")");
                                            if (result1 = b.test(l)) {
                                                f++;
                                                n += g + " ";
                                                e.nfc_product.defaultComments[h].keyword = n;
                                                p = p.replace(g, "xxx");
                                                k = 1;
                                                continue
                                            }
                                            if (l.indexOf(g) != l.lastIndexOf(g)) {
                                                e.nfc_product.defaultComments[h].result = 6;
                                                e.nfc_product.defaultComments[h].remark = "差评！";
                                                k = 0;
                                                continue a
                                            }
                                            b = new RegExp("(担心|怕|怀疑|疑心|开始|本来|以为|没|木|无|别|不|未|有一点|很少|就算|如|要是|万一|估计|除|去|空气|雾霾|天气|环境|照|拍|污染|缺水|房子|技术|解决|处理|纠正|上次|看|帅|好|满意|感动)[^\\s.,;!:~?()]*?(" + g + ")");
                                            if (k = b.test(l)) {
                                                f++;
                                                n += g + " ";
                                                e.nfc_product.defaultComments[h].keyword = n;
                                                p = p.replace(g, "xxx");
                                                k = 1;
                                                continue
                                            }
                                            b = new RegExp("(" + g + ")[^\\s.,;!:~?()]*?(没有|没|消失|消除|减少|减轻|缓解|变轻|改善|解决|建议|处理|评价|平价|才怪|天气|空气|缺水|快递|物流|包装|图片|印刷|盒|小|少|再|说|一样|[?])");
                                            if (result5 = b.test(l)) {
                                                f++;
                                                n += g + " ";
                                                e.nfc_product.defaultComments[h].keyword = n;
                                                p = p.replace(g, "xxx");
                                                k = 1;
                                                continue
                                            }
                                            if (0 <= a.appendComment.indexOf(g)) {
                                                e.nfc_product.defaultComments[h].result = 6;
                                                e.nfc_product.defaultComments[h].remark = "差评！";
                                                k = 0;
                                                continue a
                                            }
                                            if ((word6 = this.findExpression(l, r.praise, " ")) && "好评" != word6 && 0 > g.indexOf(word6)) {
                                                b = new RegExp("(开始|本来|以为|没|木|无|别|不|未|但愿|希望|如|要是|当时|除非|一点|勉强|怎么|很少|就算|如|要是|万一|除|去|空气|雾霾|天气|环境|照|拍|房子|技术|上次|之前|此前|前一段|以前|第一次|前几次|那次|服务|客服|老板|卖家)[^\\s.,;!:~?()]*?(" + word6 + ")");
                                                if (matches = b.exec(l)) {
                                                    g = matches[0];
                                                    p = p.replace(g, "xxx");
                                                    k = 1;
                                                    continue
                                                }
                                                f++;
                                                n += g + " ";
                                                e.nfc_product.defaultComments[h].keyword = n;
                                                p = p.replace(g, "xxx");
                                                k = 1;
                                                continue
                                            }
                                            e.nfc_product.defaultComments[h].result = 6;
                                            e.nfc_product.defaultComments[h].remark = "差评！";
                                            n += g + " ";
                                            e.nfc_product.defaultComments[h].keyword = n;
                                            k = 0;
                                            continue a
                                        }
                                        f++;
                                        n += g + " ";
                                        e.nfc_product.defaultComments[h].keyword = n
                                    }
                                }
                                p = p.replace(g, "xxx");
                                k = 1
                            } else k = 0
                        }
                        if (!f && 5 > m.length) e.nfc_product.defaultComments[h].result = 4, e.nfc_product.defaultComments[h].remark = "太短，没什么参考价值";
                        else {
                            if (6 >= f && 4 > e.nfc_product.websiteId && (d = this.compareStr(a.firstComment, a.appendComment))) {
                                e.nfc_product.defaultComments[h].result = 11;
                                e.nfc_product.defaultComments[h].remark = "追评和初次评价这么像，也太不用心了吧！";
                                e.nfc_product.commentDoubtful = 3;
                                e.nfc_product.commentDoubtfulReason = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + "发布的追评和初评很相似。初评：" + e.nfc_product.defaultComments[h].firstComment + "；追评：" + e.nfc_product.defaultComments[h].appendComment;
                                e.nfc_product.commentDoubtfulBriefReason = e.nfc_product.defaultComments[h].firstCmtDate + e.nfc_product.defaultComments[h].nick + "发布的追评和初评很相似。";
                                continue
                            }
                            p = 0;
                            v = t = d = "";
                            g = 0;
                            l = [{
                                id: h,
                                date: e.nfc_product.defaultComments[h].firstCmtDate
                            }];
                            u = "";
                            k = 0;
                            for (b = h + 1; b < e.nfc_product.defaultComments.length; b++) {
                                if ("无昵称用户" != a.nick && "匿名用户" != a.nick && "无***户(匿名)" != a.nick && "***(匿名)" != a.nick && "亚马逊买家" != a.nick && "亚马逊客户" != a.nick && "Amazon Customer" != a.nick && "Kindle 客户" != a.nick && 2 < a.nick.length && (d = e.nfc_product.defaultComments[b].nick + " " + e.nfc_product.defaultComments[b].displayRatePic + " " + e.nfc_product.defaultComments[b].auctionSku, c == d))
                                    if (d = e.nfc_product.defaultComments[h].firstCmtDate.slice(0, 10), t = e.nfc_product.defaultComments[b].firstCmtDate.slice(0, 10), d != t && t != v && !f) {
                                        u = e.nfc_product.defaultComments[b].firstComment;
                                        if ((4 >= u.length || 0 <= u.indexOf("没有填写评") || 0 <= u.indexOf("系统默认") || 0 <= u.indexOf("默认评价") || 0 <= u.indexOf("买家未作出评价")) && 1 > e.nfc_product.defaultComments[b].appendComment.length) continue;
                                        g++;
                                        v = t;
                                        l.push({
                                            id: b,
                                            date: e.nfc_product.defaultComments[b].firstCmtDate
                                        });
                                        2 < g && (p = 1, 7 <= g && (e.nfc_product.commentDoubtful = 2))
                                    } else if (d == t) {
                                    u = e.nfc_product.defaultComments[b].firstComment;
                                    if ((4 >= u.length || 0 <= u.indexOf("没有填写评") || 0 <= u.indexOf("系统默认") || 0 <= u.indexOf("默认评价") || 0 <= u.indexOf("默认好评") || 0 <= u.indexOf("买家未作出评价")) && 1 > e.nfc_product.defaultComments[b].appendComment.length) continue;
                                    k++;
                                    p = 1;
                                    e.nfc_product.defaultComments[h].result = 7;
                                    e.nfc_product.defaultComments[h].remark = "同一天对同一个款式的商品评价好几次，这样做是不是有点问题呢？";
                                    e.nfc_product.defaultComments[b].result = 7;
                                    e.nfc_product.defaultComments[b].remark = "同一天对同一个款式的商品评价好几次，这样做是不是有点问题呢？";
                                    2 <= k && (e.nfc_product.commentDoubtful = 2, e.nfc_product.commentDoubtfulReason = "买家" + e.nfc_product.defaultComments[h].nick + "于" + d + " 对当前商品（同一款式）发布了" + (k + 1) + "次评价，这样做很像刷单。", e.nfc_product.commentDoubtfulBriefReason = e.nfc_product.commentDoubtfulReason);
                                    continue
                                }
                                10 < m.length && (d = e.nfc_product.defaultComments[b].firstComment + " " + e.nfc_product.defaultComments[b].appendComment, d = this.compareStr(m, d)) && (e.nfc_product.defaultComments[h].nick != e.nfc_product.defaultComments[b].nick ? (d = h, t = b, e.nfc_product.defaultComments[b].firstCmtDate > e.nfc_product.defaultComments[h].firstCmtDate && (d = b, t = h), e.nfc_product.defaultComments[d].result = 8, e.nfc_product.defaultComments[d].remark = "与" + e.nfc_product.defaultComments[t].firstCmtDate + " " + e.nfc_product.defaultComments[t].nick + "发布的评论内容挺像的，这是怎么回事？", e.nfc_product.commentDoubtful = 1, e.nfc_product.commentDoubtfulReason = e.nfc_product.defaultComments[d].firstCmtDate + e.nfc_product.defaultComments[d].nick + "发布的评论与" + e.nfc_product.defaultComments[t].firstCmtDate + e.nfc_product.defaultComments[t].nick + "的评论很相似。前者的评论：" + e.nfc_product.defaultComments[d].firstComment + " " + e.nfc_product.defaultComments[d].appendComment + "；后者的评论：" + e.nfc_product.defaultComments[t].firstComment + " " + e.nfc_product.defaultComments[t].appendComment, e.nfc_product.commentDoubtfulBriefReason = e.nfc_product.defaultComments[d].firstCmtDate + e.nfc_product.defaultComments[d].nick + "发布的评论与" + e.nfc_product.defaultComments[t].firstCmtDate + e.nfc_product.defaultComments[t].nick + "的评论很相似。", d == h && (p = 1)) : (d = e.nfc_product.defaultComments[h].firstCmtDate.slice(0, 10), t = e.nfc_product.defaultComments[b].firstCmtDate.slice(0, 10), d == t ? (e.nfc_product.defaultComments[b].result = 4, e.nfc_product.defaultComments[b].remark = "相同的评论看一个就够了") : (e.nfc_product.defaultComments[h].result = 8, e.nfc_product.defaultComments[h].remark = e.nfc_product.defaultComments[b].firstCmtDate + "该帐号也发表了相似评论，这样做很像托哦。", e.nfc_product.defaultComments[b].result = 8, e.nfc_product.defaultComments[b].remark = e.nfc_product.defaultComments[h].firstCmtDate + "该帐号也发表了相似评论，这样做很像托哦。", p = 1)))
                            }
                            if (2 < g) this.processDupNicks(l);
                            else if (!(0 < p))
                                if (!f && 243 != e.nfc_product.classId && 0 == a.appendDays && 1 < a.appendComment.length) e.nfc_product.defaultComments[h].result = 12, e.nfc_product.defaultComments[h].remark = "当天就追加评价，也太着急了吧！";
                                else {
                                    !f && 140 < a.firstComment.length && 6 != e.nfc_product.websiteId && (e.nfc_product.defaultComments[h].result = 1, e.nfc_product.defaultComments[h].remark = "评价挺用心，但是真是假不好判断。");
                                    if (3 >= f && (g = this.findExpression(m, r.doubt, " "))) {
                                        k = 0;
                                        b = new RegExp("(没|木|无|不|未)[^\\s.,;!:~?()]*?(" + g + ")");
                                        if (d = b.test(m)) k = 1;
                                        else if ("会再来" == g && 0 <= m.indexOf("不会再来")) k = 1;
                                        else if ("一定会" == g && 0 <= m.indexOf("不一定会")) k = 1;
                                        else if ("喜欢的就" == g) {
                                            if (0 <= m.indexOf("最喜欢的就") || 0 <= m.indexOf("不喜欢的就") || 0 <= m.indexOf("不太喜欢的就")) k = 1
                                        } else "保证" == g ? 0 <= m.indexOf("保证了") ? k = 1 : (b = new RegExp("(但愿|希望|能|如|要是|当时)[^\\s.,;!:~()]*?(" + g + ")"), (result1 = b.test(m)) && (k = 1)) : 0 <= g.indexOf("以后") && (b = new RegExp("[^\\s.,;!:~()]+(" + g + ")"), (result1 = b.test(m)) ? k = 1 : (b = new RegExp("(" + g + ")(可以|能|要|必须)"), (result1 = b.test(m)) ? k = 1 : (b = new RegExp("(的话|如|要是|假如).*(" + g + ")"), (result1 = b.test(m)) && (k = 1)))); if (0 == k) {
                                            e.nfc_product.defaultComments[h].result = 9;
                                            e.nfc_product.defaultComments[h].remark = "看起来有点假，不管你信不信，反正我不信";
                                            n += g + " ";
                                            e.nfc_product.defaultComments[h].keyword = n;
                                            continue
                                        }
                                    }
                                    if (6 < f) e.nfc_product.defaultComments[h].result = 6, e.nfc_product.defaultComments[h].remark = "差评！";
                                    else if (f) {
                                        if (0 < e.nfc_product.commentDoubtful + e.nfc_config.settings.historyFakeCode && 140 < m.length && (c = n.replace(/\s/g, ""), 1 >= n.length - c.length && !this.isCredible(n))) {
                                            e.nfc_product.defaultComments[h].result = 1;
                                            e.nfc_product.defaultComments[h].remark = e.nfc_config.settings.historyWarning ? "在有刷单报警的情况下，该评论是真是假不好判断，请提高警惕。" : "该评论是真是假不好判断，建议您提高警惕，不要轻信，谨防上当。";
                                            continue
                                        }
                                        e.nfc_product.defaultComments[h].result = this.getTrueCmtType(m, a.appendComment)
                                    } else 10 < a.appendDays && (-1 < a.firstComment.indexOf("买家未作出评价") || -1 < a.firstComment.indexOf("系统默认好评")) ? (e.nfc_product.defaultComments[h].result = 21, e.nfc_product.defaultComments[h].remark = "追评时间较晚，真实性相对较高。") : (e.nfc_product.defaultComments[h].result = 1, e.nfc_product.defaultComments[h].remark = 0 < e.nfc_product.commentDoubtful + e.nfc_config.settings.historyFakeCode && 0 < e.nfc_config.settings.historyWarning ? "是真是假不好判断，但是因为刚才出现了刷单报警，建议提高警惕，不要轻信。" : "是真是假不好判断，可以参考，但最好保持警惕。")
                                }
                        }
                    }
                }
            }
            e.nfc_product.defaultComments = this.filterSoSoDubious(e.nfc_product.defaultComments, e.nfc_product.commentDoubtful + e.nfc_config.settings.historyFakeCode);
            0 == e.nfc_product.defaultCommentNum && (e.nfc_product.sincereCommentNum = 0, e.nfc_product.sosoCommentNum = 0, e.nfc_product.badCommentNum = 0, e.nfc_product.normalCommentNum = 0, e.nfc_product.doubtCommentNum = 0, e.nfc_product.sincereComments = [], e.nfc_product.sosoComments = [], e.nfc_product.badComments = [], e.nfc_product.normalComments = [], e.nfc_product.doubtComments = [], e.nfc_product.defaultCommentsIndex = {}, e.nfc_product.sincereCommentsIndex = {}, e.nfc_product.sosoCommentsIndex = {}, e.nfc_product.badCommentsIndex = {}, e.nfc_product.normalCommentsIndex = {}, e.nfc_product.doubtCommentsIndex = {});
            for (var q, h = e.nfc_product.defaultCommentNum; h < e.nfc_product.defaultComments.length; h++) {
                switch (e.nfc_product.websiteId) {
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
                void 0 === e.nfc_product.defaultCommentsIndex[q] && (e.nfc_product.defaultCommentsIndex[q] = {}, e.nfc_product.defaultCommentsIndex[q].result = e.nfc_product.defaultComments[h].result, e.nfc_product.defaultCommentsIndex[q].remark = e.nfc_product.defaultComments[h].remark);
                21 == e.nfc_product.defaultComments[h].result ? void 0 === e.nfc_product.sincereCommentsIndex[q] && (e.nfc_product.sincereComments.push(e.nfc_product.defaultComments[h]), e.nfc_product.sincereCommentsIndex[q] = 1) : 22 == e.nfc_product.defaultComments[h].result ? void 0 === e.nfc_product.sosoCommentsIndex[q] && (e.nfc_product.sosoComments.push(e.nfc_product.defaultComments[h]), e.nfc_product.sosoCommentsIndex[q] = 1) : 6 == e.nfc_product.defaultComments[h].result ? void 0 === e.nfc_product.badCommentsIndex[q] && (e.nfc_product.badComments.push(e.nfc_product.defaultComments[h]), e.nfc_product.badCommentsIndex[q] = 1) : 1 == e.nfc_product.defaultComments[h].result || 23 == e.nfc_product.defaultComments[h].result ? void 0 === e.nfc_product.normalCommentsIndex[q] && (e.nfc_product.normalComments.push(e.nfc_product.defaultComments[h]), e.nfc_product.normalCommentsIndex[q] = 1) : 6 < e.nfc_product.defaultComments[h].result && void 0 === e.nfc_product.doubtCommentsIndex[q] && (e.nfc_product.doubtComments.push(e.nfc_product.defaultComments[h]), e.nfc_product.doubtCommentsIndex[q] = 1)
            }
            e.nfc_product.defaultCommentNum = 0 < e.nfc_product.defaultComments.length ? e.nfc_product.defaultComments.length : 0;
            0 < e.nfc_product.commentDoubtful && 0 == e.nfc_product.sendFakeReport && (e.thisExplorer.runtime.sendMessage({
                sendFakeReport: e.nfc_product.commentDoubtful,
                source: e.nfc_product.websiteId,
                id: e.nfc_product.itemId,
                productId: e.nfc_product.productId,
                reason: e.nfc_product.commentDoubtfulBriefReason
            }, function(a) {}), $("#xuanyou_fakeWarning").html(""), $("#xuanyou_fakeWarning").append($("<div>", {
                "class": "xuanyou_introContent"
            }).append($("<span>", {
                text: "警告：这个商品很可能有刷单等评价造假行为。刷单的也有好商品，可以考虑购买，但需要提高警惕，不轻信好评，谨防上当。参考："
            })).append($("<a>", {
                href: "http://www.xuanyouwang.com/help.php?aid=27&zid=210",
                target: "_blank",
                text: "什么情况下这个商品很可能刷单了？"
            })).append($("<div>", {
                "class": "xuanyou_arrowCover"
            }).append($("<div>", {
                "class": "xuanyou_downArrow"
            })))), $("#xuanyou_fakeWarning").show(), $("#xuanyou_fakeWarning .xuanyou_arrowCover").show(), e.nfc_product.sendFakeReport = 1, setTimeout(function() {
                $("#xuanyou_fakeWarning").hide();
                $("#xuanyou_fakeWarning .xuanyou_arrowCover").hide()
            }, 6E3));
            return !0
        },
        findCompositeBadWord: function(a) {
            var b = "",
                d = /(\u504f|((?!\u4e0d).|^)\u592a|((?!\u80dc|\u597d|\u770b|\u5403|\u542c|\u559d|\u7528|\u4e70|\u89c1).|^)\u8fc7(?!\u786c)|\u7565|\u6709\u70b9(\u513f)?|\u6709\u4e9b|\u6709(\u4e00)?\u70b9(\u70b9|\u513f)?|\u6709\u4e00\u4e9b|\u6709\u4e00\u4e22\u4e22|\u7a0d|\u5fae|\u7279)(\u96be(?!\u5f97)|\u5c0f(?!\u809a\u5b50|\u5f97\u610f|\u6ee1\u8db3|\u5de7|\u5fc3|\u6e05\u65b0|\u6027\u611f|\u4e1c\u897f|\u7ec6\u8282|\u73a9|\u793c|\u63d2\u66f2|\u9a84\u50b2)|\u5927(?!\u6c14|\u65b9|\u6750|\u60ca|\u5e74|\u54c1|\u724c|\u5bb6)|\u8584|\u539a|\u5c11(?!\u89c1|\u6709)|\u591a(?!\u60c5|\u5fc3|\u8c22|\u4f59|\u5634|\u6b64|\u6101)|\u957f(?!\u8fdc|\u4e45|\u671f|\u5bff|\u89c1|\u59ff|\u77e5)|\u91cd(?!\u8981|\u5927|\u89c6)|\u77ed|\u7a84|\u9ed1|\u6d45|\u900f(?!\u6c14|\u5f7b|\u4eae|\u660e)|\u767d(?!\u51c0|\u70ed)|\u8f7b(?!\u677e|\u8584|\u4fbf|\u6613|\u5feb|\u5de7|\u67d4|\u76c8|\u800c)|\u5e72|\u6e7f(?!\u6da6)|\u8001(?!\u5b9e|\u6210|\u5230|\u7ec3|\u8fc8)|\u786c(?!\u6717|\u5b9e|\u9aa8|\u6c14)|\u8f6f(?!\u5f31|\u548c|\u7ef5|\u4ef6)|\u80a5(?!\u7f8e|\u7855|\u58ee|\u539a|\u5927|\u6c83)|\u7626|\u7d27(?!\u5f20|\u8feb|\u51d1)|\u677e(?!\u8f6f|\u8106|\u5feb)|\u8d35(?!\u91cd)|\u6162|\u9ad8(?!\u660e|\u5927|\u8c03|\u8d35|\u7ea7|\u6500|\u5f3a|\u5c1a|\u5bff|\u5174|\u77bb|\u6863|\u8d85|\u80fd|\u6df1|\u7aef)|\u7c97|\u7ec6(?!\u5fc3|\u81f4|\u817b|\u5fae|\u5c0f)|\u6241|\u810f|\u4e11|\u6a2a|\u51f6|\u5047|\u75db(?!\u5feb)|\u5751|\u65e7|\u602a|\u5dee|\u70c2(?!\u6f2b)|\u50bb|\u7b28|\u81ed|\u9ec4|\u7ea2(?!\u8336|\u706f|\u8c46|\u7cd6|\u67a3|\u679c|\u82b1|\u65d7|\u85af|\u7ebf|\u7ef3|\u53f6|\u5b9d|\u9152)|\u84dd|\u7eff|\u7070|\u6697|\u6b21|\u76b1|\u9178|\u751c(?!\u7f8e|\u871c)|\u82e6|\u8fa3|\u54b8(?!\u9c7c)|\u4f4e(?!\u8c03|\u4f30)|\u5435|\u8d39(?!\u5fc3)|\u8017|\u968f(?!\u548c)|\u6b6a|\u663e(?!\u6446|\u8d6b|\u76ee|\u7136|\u773c|\u8981|\u8457|\u7626|\u8eab)|\u89c9|\u8fdc(?!\u5927)|\u98d8(?!\u9038|\u7136|\u6447)|\u7a00(?!\u6709|\u7f55|\u5947|\u5c11)|\u6de1(?!\u6cca|\u96c5|\u7136|\u6de1)|\u6cb9|\u77ee|\u6f6e|\u6e23|\u574f|\u7cd9|\u5f31|\u900a)/,
                c = d.exec(a);
            if (c) {
                b = c[0];
                if (c[2] || c[3]) b = c[0].substr(1);
                if ("多" == c[7]) d = new RegExp("(差|问题|毛病|缺点|缺陷)[^\\s.,;!:~?()]*?" + b), (c = d.exec(a)) ? b = c[0] : (a = a.replace(b, "xxx"), b = "");
                else if ("少" == c[7]) {
                    if (d = new RegExp("(买|吃|喝|用|睡)[^\\s.,;!:~?()]*?" + b), c = d.exec(a)) a = a.replace(b, "xxx"), b = ""
                } else if ("大" == c[7]) {
                    if (d = new RegExp("(量|力|胆|优惠|风|霾|雾)[^s.,;!:~?()]*?" + b), c = d.exec(a)) a = a.replace(b, "xxx"),
                    b = ""
                } else if ("高" == c[7]) {
                    if (d = new RegExp("(性价|水平|效率|个子|身高|气温|温度|颜值|血糖|血压|血脂|胆固醇)[^s.,;!:~?()]*?" + b), c = d.exec(a)) a = a.replace(b, "xxx"), b = ""
                } else "细" == c[7] && (d = new RegExp("(心)[^s.,;!:~?()]*?" + b), c = d.exec(a)) && (a = a.replace(b, "xxx"), b = "")
            }
            if (!b && (d = /(\u5f88|\u597d|\u8f83|\u633a|\u771f(\u5fc3)?(?!\u5047)|\u7279\u522b|\u86ee|\u5de8|\u975e\u5e38|\u5341\u5206|\u76f8\u5f53|\u8d85\u7ea7|\u6781|\u8d85|\u8d8a|\u53d8(?!\u8001)|\u786e\u5b9e|\u7684\u786e|\u8fd9\u4e48|\u90a3\u4e48|\u66f4(\u662f)?|((?!\u5bf9|\u4ef7|\u597d|\u8bc4|\u4e0d).|^)\u6bd4(?!\u8f83|\u8fd9|\u4e86)[^\s.,;!:~?()\u4e0d\u6ca1x]+?|\u6ca1.?\u8fc7\u8fd9\u4e48|\u4e0d\u662f\u4e00\u822c\u7684|\u5b9e\u5728\u662f)(\u96be(?!\u5f97)|\u5c0f|\u5927(?!\u65b9|\u6c14|\u54c1|\u724c|\u5bb6)|\u5c11(?!\u89c1|\u6709)|\u591a(?!\u60c5|\u5fc3|\u8c22|\u4f59|\u5634|\u6b64|\u6101)|\u77ed|\u7a84|\u9ed1|\u900f(?!\u6c14|\u5f7b|\u4eae|\u660e)|\u8001(?!\u6210|\u516c|\u5a46|\u7238|\u5988|\u7ec3|\u5b9e|\u5230|\u7ec3|\u8fc8|\u677f)|\u786c(?!\u6717|\u5b9e)|\u80a5(?!\u7f8e|\u7855|\u58ee|\u7682|\u5927|\u6c83|\u8089)|\u7d27(?!\u5f20|\u8feb|\u51d1|\u5b9e|\u5bc6|\u8eab)|\u7a00(?!\u6709|\u7f55|\u5947|\u5c11|\u996d)|\u8d35(?!\u91cd)|\u6162|\u6241(?!\u5e73)|\u810f|\u4e11|\u6a2a|\u51f6|\u5047|\u7c97(\u7cd9|\u5fc3|\u7b28|\u52a3|\u964b|\u9c81|\u4fd7|\u91cd|\u5236)|\u6697|\u75db(?!\u5feb)|\u75bc(?!\u7231)|\u5751|\u65e7|\u602a|((?!\u4e00|\u591a|\u51e0|\u4e0a|\u4e0b|\u90a3|\u8fd9|\u524d|\u6863|\u5c42|\u518d|[\s.,;!:~?()]).|^)\u6b21|\u5dee|\u70c2(?!\u6f2b)|\u7834|\u50bb|\u7b28|\u81ed|\u76b1|\u5783|\u5f31|\u60e8|\u4f4e(?!\u8c03|\u4f30)|\u5435|\u8d39(?!\u5fc3|\u7684)|\u8017|\u5361(?!\u901a|\u54c7)|\u75b2|\u8fa3|\u4e8f|\u7d2f|\u6cb9|\u6050|\u91cd(?!\u8981|\u5927|\u89c6)|\u6e23|\u574f|\u7cd9|\u8584|\u51b2(?!\u6ce1|\u6d17)|\u5f31)([^\s.,;!:~?()]*)/, c = d.exec(a))) {
                var b = c[0],
                    f = c[1],
                    g = c[c.length - 1],
                    b = b.replace(g, "");
                if ("小" == c[5])(d = new RegExp("(噪音|噪声|音|气味|味道|异味|色差|脸|核|房|体积|面积|空间|占地|问题|瑕疵|洞|孔|xxx)[^\\s.,;!:~?()]*?" + c[0]), c = d.exec(a)) ? (a = a.replace(b, "xxx"), b = "") : (-1 < f.indexOf("比") && (d = /\u566a\u97f3|\u566a\u58f0|\u6c14\u5473|\u5473\u9053|\u5f02\u5473|\u8272\u5dee|\u58f0\u97f3|xxx/, result = d.test(f)) && (a = a.replace(b, "xxx"), b = ""), b && (d = new RegExp(b + "(巧|心|清新|仙|店)"), result = d.test(a)) && (a = a.replace(b, "xxx"), b = ""), b && (d = /u\u76d8|U\u76d8|\u4f18\u76d8|\u63a5\u5934/, result = d.test(e.nfc_product.name)) && (a = a.replace(b, "xxx"), b = ""));
                else if ("少" == c[5])
                    if (d = /\u5c11[^\s.,;!:~?()]*?(\u788e|\u7f3a|\u8d39|\u82b1|\u7528|\u6709|\u89c1|\u5931|\u4e70|\u8d2d|\u5973|\u6253|\u94b1|\u8ffd|\u8bc4|\u770b|\u7a7f|xxx)/, result = d.test(a)) a = a.replace(b, "xxx"), b = "";
                    else {
                        if (d = /(\u7ebf\u5934|\u95ee\u9898|\u6bdb\u75c5|\u7f3a\u70b9|\u7f3a\u9677|\u6742\u8d28|\u6bdb|\u5dee|\u574f|xxx)[^\s.,;!:~?()]*?\u5c11/, result = d.test(a)) a = a.replace(b, "xxx"), b = ""
                    } else if ("多" == c[5])
                    if (d = new RegExp("(差|问题|毛病|缺点|缺陷)[^\\s.,;!:~?()]*?" + c[0]), c = d.exec(a)) b = c[0];
                    else if (-1 < f.indexOf("比"))
                    if (-1 < b.indexOf("好多")) d = /(\u54b8|\u8fa3|\u82e6|\u9178|\u5c0f|\u4f4e|\u77ee|\u80d6|\u7626|\u6162|\u6de1|\u8d35|\u5e72|\u6b21|\u5dee|\u70c2|\u8584|\u96be|\u5c11|\u77ed|\u7a84|\u9ed1|\u6d45|\u900f|\u8001|\u786c|\u80a5|\u7d27|\u7a00|\u6241|\u810f|\u4e11|\u5047|\u7c97|\u6697|\u5751|\u65e7|\u602a|\u6b21|\u50bb|\u7b28|\u76b1|\u5f31|\u5361|\u4e8f|\u6cb9)\u597d\u591a/,
                result = d.test(b), result || (a = a.replace(b, "xxx"), b = "");
                else if (d = /\u6bd4([^\\s.,;!:~?()]*?)(\u5f88|\u597d|\u8f83|\u633a|\u7279\u522b|\u86ee|\u975e\u5e38|\u5341\u5206|\u76f8\u5f53|\u8fd9\u4e48|\u90a3\u4e48|\u8bb8)\u591a/, (c = d.exec(b)) && c[1]) {
                    if (d = /\u597d|\u51c9|\u5feb|\u5b9e|\u4fbf|\u6f02|\u5e74|\u7f8e|\u4e0a|\u4f18|\u7cbe|\u7ec6|\u81ea|\u65e9|\u51c0|\u4eae|\u767d|\u9ad8|\u8106|\u9165|\u751c|\u9999|\u7075|\u65b9|\u5e72|\u8212|\u8f6f|\u5730|\u7406|\u7231|\u9002|\u670d|\u6e05|\u957f|\u8d34|\u987a|\u9ecf|\u6d53|\u539a|\u6696|\u5bb9|\u5927|\u5feb|\u4e45|\u723d|\u8d77|\u7701|\u8010|\u5f3a/, result = d.test(c[1])) a = a.replace(b, "xxx"), b = ""
                } else a = a.replace(b, "xxx"), b = "";
                else a = a.replace(b, "xxx"), b = "";
                else if ("低" == c[5])
                    if (d = new RegExp("(价|噪音|噪声|xxx)[^\\s.,;!:~?()]*?" + c[0]), c = d.exec(a)) a = a.replace(b, "xxx"), b = "";
                    else {
                        if (d = /\u4f4e[^\s.,;!:~?()]*?(\u4ef7|\u566a\u97f3|\u566a\u58f0|xxx)/, c = d.exec(a)) a = a.replace(b, "xxx"), b = ""
                    } else if ("大" == c[5])
                    if (d = new RegExp("(差距|差别|误差|相差|色差|气味|异味|味道|噪音|噪声|响声|声音|衣(?!机|柜|橱|架|箱|袋|盆|桶)|裤|鞋(?!柜|盒)|袜|帽|裙|文胸|穿|型|版|号)([^\\s.,;!:~?()]*?)" + b), c = d.exec(a)) b = c[0], -1 < c[2].indexOf("不") || -1 < c[2].indexOf("没") ? (a = a.replace(b, "xxx"), b = "") : "声音" == c[1] && (d = /\u97f3\u7bb1|\u97f3\u54cd|\u8033\u673a|\u7535\u89c6|\u624b\u673a|\u4e50\u5668|\u5587\u53ed|\u6536\u97f3\u673a/, result = d.test(e.nfc_product.name)) && (a = a.replace(b, "xxx"), b = ""), b && (d = /\u5f39\u529b|\u5f39\u6027|\u888b/, result = d.test(c[2])) && (a = a.replace(b, "xxx"), b = "");
                    else if (d = new RegExp(b + "([^\\s.,;!:~?()]*?)(差距|差别|误差|相差|色差|味|噪音|噪声|声音|衣(?!机|柜|橱|架|箱|袋|盆|桶)|裤|鞋(?!柜|盒)|袜|帽|裙|文胸)"), c = d.exec(a)) {
                    var b = c[0],
                        l = c[2];
                    if (-1 < c[1].indexOf("没") || -1 < c[1].indexOf("无") || -1 < c[1].indexOf("木")) a = a.replace(b, "xxx"), b = "";
                    b && -1 < "味|声音|衣|裤|鞋|袜|帽|裙|文胸".indexOf(l) && (d = new RegExp(l + "[^\\s.,;!:~?()]*?(好|香|舒|快|美|动|感|棒|怡|漂亮)"), result = d.test(a)) && (a = a.replace(b, "xxx"), b = "");
                    b && "声音" == l && (d = /\u97f3\u7bb1|\u97f3\u54cd|\u8033\u673a|\u7535\u89c6|\u624b\u673a|\u4e50\u5668|\u5587\u53ed|\u6536\u97f3\u673a/, result = d.test(e.nfc_product.name)) && (a = a.replace(b, "xxx"), b = "")
                } else a = a.replace(b, "xxx"), b = "";
                else if ("重" == c[5]) d = /(\u5473\u9053|\u6c14\u5473|\u5f02\u5473|\u989c\u8272)[^\s.,;!:~?()]*?(\u91cd)/, (c = d.exec(a)) ? b = c[0] : (a = a.replace(b, "xxx"), b = "");
                else if ("黑" == c[5]) {
                    if (d = /\u7852\u9f13|\u58a8|\u9ed1|\u7b14/, result = d.test(e.nfc_product.name)) a = a.replace(b, "xxx"), b = ""
                } else if ("紧" == c[5]) {
                    if (d = /\u652f\u67b6|\u5939\u5b50|\u7d27\u8eab/, result = d.test(e.nfc_product.name)) a = a.replace(b, "xxx"), b = ""
                } else "薄" == c[5] && 0 > f.indexOf("比") && (d = /\u8584|\u819c|\u673a|\u5668|\u5c4f|\u955c|\u5168\u5957|GB/, result = d.test(e.nfc_product.name)) && (a = a.replace(b, "xxx"), b = ""); - 1 < f.indexOf("比") && g && (d = /^(\u4e86)?((\u4e00)?\u70b9|(\u4e00)?\u4e9b|\u8bb8\u591a|\u5f88\u591a|\u597d\u591a|\u4e0d\u5c11|\u4e00|\u4e24)/, result = d.test(g), result || (a = a.replace(b, "xxx"), b = ""))
            }
            if (!b && (d = /(\u5c0f|\u5927|\u8584|\u539a|\u5c11|\u591a|\u957f|\u77ed|\u7a84|\u9ed1|\u6d45|\u900f|\u767d|\u8f7b|\u5e72|\u6e7f|\u8001|\u786c|\u8f6f|\u80a5|\u7d27|\u677e|\u8d35|\u6162|\u9ad8|\u7c97|\u7ec6|\u6241|\u810f|\u4e11|\u6a2a|\u51f6|\u5047|\u75db|\u5751|\u65e7|\u602a|\u5dee|\u70c2|\u50bb|\u7b28|\u81ed|\u9ec4|\u7ea2|\u84dd|\u7eff|\u7070|\u6697|\u6b21|\u76b1|\u9178|\u751c|\u82e6|\u8fa3|\u54b8|\u4f4e|\u5435|\u8d39|\u6b6a|\u7a00|\u6de1|\u6cb9|\u77ee|\u6f6e|\u6e23|\u574f|\u7cd9)(\u70b9|\u4e9b|\u4e00\u70b9|\u4e00\u4e9b)(?!\u8d5e)/, c = d.exec(a)))
                if (b = c[0], "多" == c[1]) d = new RegExp("(差|问题|毛病|缺点|缺陷)[^\\s.,;!:~?()]*?" + b), (c = d.exec(a)) ? b = c[0] : (a = a.replace(b, "xxx"), b = "");
                else if ("少" == c[1]) {
                if (d = new RegExp("(买|吃|喝|用|睡)[^\\s.,;!:~?()]*?" + b), c = d.exec(a)) a = a.replace(b, "xxx"), b = ""
            } else if ("大" == c[1]) {
                if (d = new RegExp("(量|力|胆|优惠|风|霾|雾)[^s.,;!:~?()]*?" + b), c = d.exec(a)) a = a.replace(b, "xxx"), b = ""
            } else if ("高" == c[1]) {
                if (d = new RegExp("(性价|水平|效率|个子|身高|气温|温度|颜值|血糖|血压|血脂|胆固醇)[^s.,;!:~?()]*?" + b), c = d.exec(a)) a = a.replace(b, "xxx"), b = ""
            } else "细" == c[1] && (d = new RegExp("(心)[^s.,;!:~?()]*?" + b), c = d.exec(a)) && (a = a.replace(b, "xxx"), b = "");
            b || (d = /(\u6ca1\u6709|\u4e0d\u5982|\u8d76\u4e0d\u4e0a|\u6728\u6709|\u6ca1|\u4e0d\u50cf|\u8fd8\u662f|\u4e0d\u662f)(\u6211)?(\u4ee5\u524d|\u4e4b\u524d|\u4e0a(\u6b21|\u56de|\u5468|\u6279|\u4e2a|\u4e00)|\u8fc7\u53bb|\u539f(\u6765|\u5148)|\u90a3(\u6b21|\u56de|\u5929|\u79cd)|\u524d|\u7b2c|\u60f3(\u8c61|\u50cf|\u7684)|\u9884|\u671f|\u5ba3|\u5176(\u4ed6|\u5b83)|\u56fe(\u7247|\u4e0a)|\u770b(\u8d77\u6765|\u4e0a\u53bb)|\u5b9e\u4f53|\u8d85\u5e02|\u4ecb\u7ecd|\u7f51\u9875|\u6a21\u7279|\u7ebf\u4e0b|((?!\u7279|\u4e2a).|^)\u522b(\u4eba|\u5bb6|\u7684))[^\s.,;!:~?()]*?(\u597d|\u7075|\u65b9\u4fbf|\u559c|\u5e72\u51c0|\u751c|\u8212|\u8f6f|\u5730\u9053|\u5408\u7406|\u7231|\u9999|\u4fbf\u5b9c|\u65b9\u4fbf|\u7b80\u4fbf|\u9002|\u670d\u5e16|\u8212\u670d|\u4e0a(\u5fc3|\u955c|\u6863)|\u6f02|\u6e05|\u8f7b|\u957f|\u9760|\u7c98|\u8d34|\u987a|\u9ecf|\u6d53|\u539a|\u6696|\u5bb9\u6613(?!\u574f|\u7834|\u70c2)|\u663e(?!\u7b28|\u80d6|\u817f\u7c97)|\u5927|\u5feb|\u5b9e|\u5212|\u7ed9|\u5747)/, (c = d.exec(a)) && (b = c[0]));
            if (!b && (d = /(\u4e0d\u77e5(\u9053)?|\u8bf7\u95ee|\u600e\u4e48(?!\u8fd9)|\u4e3a\u4ec0\u4e48|\u4e3a\u6bdb|\u4e3a\u5565|\u4e3a\u4f55)(\u4e3a(\u4ec0|\u5565|\u6bdb|\u4f55)|\u548b|\u600e|\u4ec0|\u8fd9|\u662f|\u4f1a|[\s.,;!:~?()])/, c = d.exec(a))) {
                b = c[0];
                if ("不知怎" == b || "不知道怎" == b)
                    if (d = /\u4e0d\u77e5(\u9053)?\u600e\u4e48(\u5f62\u5bb9|\u63cf\u8ff0|\u8bf4|\u60f3)/, result = d.test(a)) a = a.replace(b, "xxx"), b = "";
                b && (d = new RegExp(b + "[^s.,;!:~?()]*?(这么|那么|如此|这样|那样)(好|高|喜|爱|美|可|牛|漂|欢|开|乐|爽|痛快|新|赞|便|实|优|棒|中|满|划|轻|方|顺|滋|高|多|舒)"), result = d.test(a)) && (a = a.replace(b, "xxx"), b = "")
            }!b && (d = /(\u53d1\u73b0|\u627e\u5230|\u5b58\u5728|((?!\u8fd8|\u6ca1|\u6728|\u5f88|\u6b21|\u56de|\u6240|[\s.,;!:~?()]).|^)\u6709|\u51fa)[^\s.,;!:~?()]{0,6}(\u95ee\u9898|\u6bdb\u75c5|\u7591\u95ee|\u7f3a\u70b9|\u4e0d\u8db3|\u5f0a\u7aef|\u7f3a\u9677|\u7455\u75b5)/, c = d.exec(a)) && (b = c[0], d = RegExp(b + "([^.;!:~?()]*?)(解|答|回|处理|纠正|改|去(掉|除))"), (c = d.exec(a)) && 0 > c[1].indexOf("不") && 0 > c[1].indexOf("没") && 0 > c[1].indexOf("未") && 0 > c[1].indexOf("木") && (a = a.replace(b, "xxx"), b = ""));
            !b && (d = /(\u5efa\u8bae|\u63d0\u9192)(\u5546\u5bb6|\u5356\u5bb6|\u5e97\u5bb6|\u638c\u67dc|\u8001\u677f|\u5927\u5bb6|\u5404\u4f4d|\u59d0\u59b9|\u670b\u53cb|\u4e70\u5bb6|\u6d88\u8d39\u8005|\u5c0f\u4f19\u4f34|\u4ee5\u540e)([^\s.,;!:~?()]*)/, c = d.exec(a)) && (b = c[0], 0 > b.indexOf("尽量") && 0 > b.indexOf("还是") && 0 > b.indexOf("最好") && (d = /(\u4e70|\u7f51\u8d2d|\u4e0b\u5355|\u62cd|\u5165\u624b|\u5173\u6ce8|\u51fa\u624b|\u8bd5)(?!\u65f6|\u524d|\u540e|\u4e4b|\u5927|\u5c0f|\u7684|\u5f97)/, result = d.test(c[3]))) && (a = a.replace(b, "xxx"), b = "");
            if (!b && (d = /(((?!\u653e|\u52a0|\u6269|\u5f3a|\u76db|\u6258|\u8fdc|\u589e|\u957f|\u91cd|\u58ee|\u559d|\u5439|\u591f|\u903c|\u6837|\u8d5a|\u503c).|^)\u5927(?!\u7684|\u5f97|\u554a|\u55bd|\u54e6)|\u6f0f|((?!\u9676|\u5fc3|\u559d|\u6c89|\u9ebb).|^)\u9189(?!\u7684|\u5f97)|((?!\u707f|\u7eda).|^)\u70c2|((?!\u7a81).|^)\u7834|((?!\u4e45|\u95f4|\u5e74|\u5929|\u6708).|^)\u6ca1\u7528|\u4e0d(?!\u5f97)|((?!\u5b9d|\u5bcc|\u9ad8|\u534e|\u5a07|\u53ef|\u540d|\u73cd|\u5c0a).|^)\u8d35(?!\u7684|\u5f97)|((?!\u5185|\u5fc3|\u80be|\u809d).|^)\u810f|((?!\u8ba1|\u6253|\u5212|\u7ed3|\u76d8|\u4e0a|\u795e|\u9884|\u5408|\u6210).|^)\u7b97(?!\u7684|\u5f97)|((?!\u4e0d|\u679c|\u95f4|\u8bba|\u5224|\u7247|\u63a8|\u81c6|\u8bca).|^)\u65ad|\u788e|\u88c2|((?!\u5230|\u706b|\u71c3|\u7f8e|\u5e05|\u7231|\u9177|\u70ab|\u8d5a).|^)\u7206|((?!\u53d8|\u7f29).|^)\u5c0f(?!\u7684|\u5f97)|\u9ec4(?!\u7684|\u5f97)|((?!\u4e0d|\u591a|\u7ca5).|^)\u5c11(?!\u7684|\u5f97)|((?!\u53d8|\u5e7b|\u7b80|\u8fdb|\u51c0|\u7f8e|\u6c14|\u6c7d|\u5f3a|\u8f6f|\u6587|\u6d88|\u4ee3|\u8303|\u6837|\u4f17|\u5f0f|\u6027).|^)\u5316(?!\u7684|\u5f97)|((?!\u805a).|^)\u7126|\u6241|\u762a|((?!\u6025).|^)\u574f|\u6389|((?!\u6c34|\u6ce5|\u6c99).|^)\u5751|\u51f9|\u964d|((?!\u51fa|\u65f6|\u4ea4).|^)\u5dee|((?!\u4e0d|\u6ca1).|^)\u9519|((?!\u9762|\u9ebb).|^)\u7cca|((?!\u719f|\u901a|\u5254|\u716e|\u70ed|\u5267).|^)\u900f|\u6254|\u6b7b|\u6655|\u4e71|((?!\u95ea).|^)\u778e|\u9ed1(?!\u7684|\u5f97)|\u7eff(?!\u7684|\u5f97)|((?!\u7231).|^)\u75af(?!\u7684|\u5f97)|\u50bb|((?!\u8fd0).|^)\u8f93|((?!\u4f9d|\u7167).|^)\u65e7|((?!\u6293|\u8d76|\u52a0|\u62e7|\u6263|\u5939|\u5173|\u52d2|\u6536|\u4e0a).|^)\u7d27(?!\u7684|\u5f97)|((?!\u5408|\u5316|\u51cf).|^)\u80a5(?!\u7684|\u5f97)|((?!\u7b80).|^)\u77ed(?!\u7684|\u5f97)|((?!\u95f4|\u591f).|^)\u957f(?!\u7684|\u5f97)|((?!\u8f7b).|^)\u8584(?!\u7684|\u5f97)|\u60e8|\u76b1|\u81ed|((?!\u9519).|^)\u602a(?!\u7684|\u5f97)|\u6492|((?!\u8010).|^)\u70e6|\u75db|\u75bc|\u95f7|((?!\u7ec6|\u7f8e).|^)\u817b|\u5410|\u50ac|\u6b6a|\u659c|\u5f2f|\u6563(?!\u7684|\u5f97)|\u5e9f|\u7838|((?!\u79ef|\u53d7|\u5750|\u7ad9|\u8d70|\u73a9).|^)\u7d2f|((?!\u8840|\u964d|\u6c14|\u597d).|^)\u538b(?!\u5f97\u4f4f|\u5f97\u4e0b)|\u9a82|\u9508|((?!\u9178).|^)\u9178|((?!\u8f7b|\u653e|\u5bbd|\u84ec).|^)\u677e|\u4e8f|\u784c|\u998a|\u9709|\u90fd(\u51c9|\u51b7|\u8c22))(\u4e86(?!\u518d)|\u554a|\u5566|\u55bd|\u54e6|\u7684|\u5f97)/, c = d.exec(a)))
                if (b = c[0].substr(-2), -1 < c[1].indexOf("小")) {
                    if (d = /(\u8138|\u6838|\u566a\u97f3|\u566a\u58f0|\u6c14\u5473|\u5473\u9053|\u5f02\u5473|\u8272\u5dee|\u58f0\u97f3|xxx)[^\s.,;!:~?()]*?\u5c0f/, result = d.test(a)) a = a.replace(b, "xxx"), b = ""
                } else if (-1 < c[1].indexOf("少")) {
                if (d = /(\u4e70|\u5403|\u559d|\u7528|\u7761|\u9ed1\u5934)[^\s.,;!:~?()]*?\u5c11/, result = d.test(a)) a = a.replace(b, "xxx"), b = ""
            } else if (-1 < c[1].indexOf("大")) {
                if (d = /(\u5305|\u888b|\u7bb1|\u7a7a\u95f4|\u4f18\u60e0|\u529b\u5ea6|\u5c4f\u5e55|\u5185\u5b58|\u5f00\u9500|\u5929|\u8d5a|\u5e74)[^\s.,;!:~?()]*?\u5927/, result = d.test(a)) a = a.replace(b, "xxx"), b = ""
            } else if (-1 < c[1].indexOf("旧")) {
                if (d = /(\u6bd4)[^\s.,;!:~?()]*?\u65e7/, result = d.test(a)) a = a.replace(b, "xxx"), b = ""
            } else -1 < c[1].indexOf("化") && (d = /(\u5fc3)[^\s.,;!:~?()]*?\u5316/, result = d.test(a)) && (a = a.replace(b, "xxx"), b = "");
            b || (d = /(\u6ca1(\u6709)?|\u4e0d)(\u5bf9\u9f50|\u7528\u5fc3|\u4e0a\u5fc3|\u5bc6\u5c01|\u805a\u62e2|\u7406\u4f1a|\u7406\u776c|\u56de\u590d|\u5904\u7406|\u8d77\u6765|\u642d\u7406|\u53d1\u8d27|\u5f53\u56de\u4e8b|\u660e\u767d|\u8bf4\u6e05\u695a|\u8bf4\u660e|\u542d|\u9001|\u627f\u8ba4|\u8ba4\u8d26|\u5165\u5473|\u670d\u52a1|\u8d77\u4f5c\u7528|\u51fa\u6765|\u5151\u73b0|\u6ce8\u610f|\u5230\u4f4d|\u5f04\u597d|\u505a\u597d)/, (c = d.exec(a)) && (b = c[0]));
            b || (d = /(\u6ca1(\u6709)?|(\u5c11|\u7f3a)\u4e86)[^\s.,;!:~?()]*?(\u4fe1\u606f|\u6807\u724c|\u8d60\u54c1|\u8bf4\u660e|\u89e3\u91ca|\u5305\u88c5|\u888b|\u670d\u52a1|\u6807\u7b7e|\u6298\u6263|\u4f18\u60e0)/, (c = d.exec(a)) && (b = c[0]));
            b || (d = /(\u6613|(\u62c5\u5fc3|\u53ef\u80fd|\u4e5f\u8bb8|\u4f30\u8ba1|\u5e94\u8be5|\u6216\u8bb8)\u4f1a)(\u574f|\u7834|\u70c2|\u76b1|\u6ed1|\u6f0f|\u9189|\u810f|\u65ad|\u788e|\u88c2|\u7206|\u5316|\u9519|\u7cca|\u900f|\u9ed1|\u65e7|\u80a5|\u81ed|\u75db|\u75bc|\u5939|\u6b6a|\u659c|\u6563|\u4e22|\u6389|\u5f00|\u8131|\u677e|\u7d2f|\u751f|\u53d8|\u9178|\u8d77|\u82b1)/, (c = d.exec(a)) && (b = c[0]));
            b || (d = /(\u5c31|\u4f1a|\u7684\u8bdd)(\u66f4)?(\u66f4\u559c\u6b22|\u5b8c\u7f8e|\u66f4\u6ee1\u610f|\u597d|\u66f4\u65b9\u4fbf|\u5b8c\u5584|\u66f4\u7f8e)/, (c = d.exec(a)) && (b = c[0]));
            b || (d = /\u4e0d(\u60f3|\u7231|\u613f(\u610f)?|\u6253\u7b97|\u51c6\u5907)(\u7ee7\u7eed|\u63a5\u7740)?(\u5403|\u7a7f|\u7528|\u6234|\u559d|\u8981)/, (c = d.exec(a)) && (b = c[0]));
            b = b.replace(/[.,;!:~?()]/, "");
            return [b, a]
        },
        findExpression: function(a, b, d, c) {
            if (void 0 === b || 0 >= b.length) return !1;
            c = c || 0;
            var e = b.split(d),
                g, l = [],
                k = [],
                m = "";
            a = a.replace(/[\/.'"\u3010\u3011()\uff08\uff09]+/g, " ");
            for (var n = 0; n < e.length; n++) 2 > e[n].length || (b = e[n].slice(0, 2), void 0 === l[b] ? l[b] = [e[n]] : l[b].push(e[n]));
            for (n = 0; n < a.length - 1; n++)
                if (b = a.slice(n, n + 2), void 0 !== l[b]) {
                    for (var h = 0; h < l[b].length; h++)
                        if (" " == d) {
                            if (0 <= a.indexOf(l[b][h]))
                                if (0 < c) k.push(l[b][h]);
                                else return l[b][h]
                        } else {
                            e = l[b][h].split(" ");
                            g = 1;
                            for (var r = 0; r < e.length; r++)
                                if (0 > a.indexOf(e[r])) {
                                    g = 0;
                                    break
                                }
                            if (g)
                                if (0 < c) k.push(l[b][h]);
                                else return l[b][h]
                        }
                    l[b].length = 0
                }
            if (0 < c) {
                for (r = 0; r < k.length; r++) k[r].length > m.length && (m = k[r]);
                return m
            }
            return !1
        },
        compareStr: function(a, b) {
            if (16 >= a.length || 16 >= b.length) return 0;
            if (a == b) return 1;
            a = a.replace(/\w+/g, "");
            b = b.replace(/\w+/g, "");
            var d = a.split(/\uff0c|\u3002|\uff01|\uff1b|\u2026|[\s,.!;]+/g);
            matchTimes = 0;
            for (var c in d)
                if (phrase = d[c], !(3 >= phrase.length) && 0 <= b.indexOf(phrase) && (matchTimes++, a = a.replace(phrase, ""), b = b.replace(phrase, ""), 3 < matchTimes)) return 1;
            d = b.split(/\uff0c|\u3002|\uff01|\uff1b|\u2026|[\s,.!;]+/g);
            for (c in d)
                if (phrase = d[c], !(3 >= phrase.length) && 0 <= a.indexOf(phrase) && (matchTimes++, a = a.replace(phrase, ""), 3 < matchTimes)) return 1;
            return 0
        },
        findException: function(a, b) {
            var d = 0,
                c, f;
            if (0 > b.indexOf(a) || -1 < e.nfc_product.name.indexOf(a) || -1 < a.indexOf("不") && (c = /\u4e0d((.{1}).*)/, f = c.exec(a)) && (c = f[1], f = f[2], -1 < b.indexOf(c + a) || -1 < b.indexOf(f + a))) return [1, a];
            if ("不好" == a) - 1 < b.indexOf("好不好") ? d = 1 : (c = new RegExp("(很|非常|实在|相当|特别|十分|太|超级)(" + a + ")"), (result1 = c.test(b)) ? d = 0 : (c = /\u597d.{1}\u4e0d\u597d.{1}/, (result1 = c.test(b)) && (d = 1)), 0 == d && (c = /\u4e0d\u597d(\u610f|\u8bf4|\u627e|\u4e5f)/, (result1 = c.test(b)) && (d = 1)));
            else if ("要是" == a) c = /(\u4e3b|\u6982|\u9996|\u9700|\u6458|\u53ea|\u91cd|\u5b9a)\u8981\u662f/, (result1 = c.test(b)) ? d = 1 : (c = new RegExp("(" + a + ")[^\\s.,;!:~?()]*?(介绍|推荐|需要|买|入手|下次|还(要|需|是)|物色|挑选|下单|太|呢|每|人人|都|也|有(\\d+)分|高兴|喜欢|爱(吃|穿|喝|用)?|美|可爱|牛|好看|漂亮|欢喜|开心|乐|爽|痛快|好吃|好喝|好闻|新奇|新鲜|赞|便宜|实惠|优惠|棒|中意|满意|划算|好用|轻便|方便|顺手|((?!就|更|会).|^)好|滋润|高|脆|香|多|舒服|舒适|容易|不错|有效)"), (result1 = c.test(b)) && (d = 1));
            else if ("如果能" == a || "如能" == a) c = new RegExp("(" + a + ")[^.;!?~()]*?(更|就好)"), (result1 = c.test(b)) || (d = 1);
            else if ("不行" == a || "不得了" == a || "要命" == a || "要死" == a || "吓人" == a || "不要不要" == a || "简直不要不要" == a || "无话" == a || "让你想哭" == a || "让人想哭" == a || "想哭" == a || "死了" == a) c = new RegExp("(高兴|喜欢|爱(吃|穿|喝|用)?|美|可爱|牛|漂亮|欢喜|开心|乐|爽|痛快|好(看|吃|喝|闻)|新奇|新鲜|赞|便宜|实惠|优惠|棒|中意|满意|划算|好用|轻便|方便|顺手|好|滋润|高|脆|香|多|舒服|舒适|容易|赚|迷|忙|吓|兴奋|羡慕|帅气|感动|合适)(的|地|得|到)?(" + a + ")"), (result1 = c.test(b)) ? d = 1 : "不得了" == a && (c = /([\s.,;!:~()]|^|\u4e56\u4e56|\u4e86)\u4e0d\u5f97\u4e86([\s.,;!:~()]|\u4e86|\u554a|\u5462|\u5440|\u54c8|\u5566)/, (result1 = c.test(b)) && (d = 1));
            else if ("过分" == a) c = /(\u7ec6\u5fc3|\u8ba4\u771f|\u7f8e|\u53ef\u7231|\u725b|\u597d\u770b|\u6f02\u4eae|\u597d(\u5403|\u559d|\u95fb|\u7528)|\u65b0\u9c9c|\u4fbf\u5b9c|\u60e0|\u5212\u7b97|\u4fbf|\u597d|\u6ecb\u6da6|\u9ad8|\u591a|\u8212\u670d|\u8212\u9002|\u8f7b\u677e|\u4f53\u8d34|\u4ed4\u7ec6)(\u7684|\u5f97|\u5230)?[^\s.;!~,()]*?\u8fc7\u5206/, (result1 = c.test(b)) && (d = 1);
            else if ("有点" == a || "有些" == a || "有一点" == a || "有一些" == a || "有一丢丢" == a || "有那么一点" == a || "有那么一丢丢" == a)
                if (c = new RegExp("((?!比).|^)(" + a + ")(儿|点)?([^\\s.,;!:~()]*?)(效|用|成|好|改|感|惊|吃|惊|意|奇|不(放心|懂|明白)|买|人|朋|消|礼|赠|东西|出|富|弹|活|比|晚|香|甜|酥|脆|(小)?(肚子|得意|满足|巧|心|清新|性感|东西|细节|玩|礼|插曲|骄傲)|过敏|忙|味|特|事|像|眼|超|飘|仙|((?!不|就).|^)是|冰|天|迟|期|肉|胖|症|相信|喜|一|犹|破费|贫|激|动|早|阳|担心|害怕|过分|怕|担忧|顾虑|疑虑|忐忑|偷|嚼|高(端|档)|大气|保|莫名|多|少|大|高|细|热|烫)"), f = c.exec(b))
                    if (5 > f[4].length && "欺负" != f[4] && "塑料" != f[4] && "胶" != f[4] && "臭" != f[4] && "脏" != f[4] && "不" != f[4] && (d = 1), "味" == f[5]) f[4] ? (c = /(\u9178|\u82e6|\u81ed|\u54c8|\u6c14|\u6da9)/, (result2 = c.test(f[4])) && (d = 0)) : d = 0;
                    else if ("感" == f[5]) c = RegExp("(黑|灰|恶|难)"), (result2 = c.test(f[4])) && (d = 0);
            else if ("人" == f[5]) c = RegExp("让|令"), (result2 = c.test(f[4])) && (d = 0);
            else {
                if ("热" == f[5] || "烫" == f[5]) c = /\u6e29|\u70ed|\u58f6|\u676f|\u6696/, (result1 = c.test(e.nfc_product.name)) || (d = 0)
            } else {
                if ("有些" == a || "有一些" == a) c = new RegExp("(其中|比)(" + a + ")"), (result1 = c.test(b)) ? d = 1 : (c = new RegExp("([s.,;!:~()]|^)(" + a + ")"), (result1 = c.test(b)) && (d = 1))
            } else if ("怀疑" == a) {
                if (c = new RegExp("(" + a + ")([^.;!]*?)[\\s,;:~()](但|然而|可|不过|现|看)"), f = c.exec(b)) d = 1, a += f[2]
            } else if ("建议" == a) c = new RegExp("(" + a + ")([^\\s.,;!:~()]*?)(买|网购|下单|拍|多(吃|喝|用)|入手|关注|出手|试)(?!时|前|后|之|大|小)"), (f = c.exec(b)) && 0 > f[2].indexOf("尽量") && 0 > f[2].indexOf("还是") && 0 > f[2].indexOf("最好") && (d = 1), d || (c = new RegExp("(客服|卖家|老板|图片|描述|店家)[^\\s.,;!:~()]*?(" + a + ")"), (result1 = c.test(b)) && (d = 1)), !d && (0 <= b.indexOf("建议的") || 0 <= b.indexOf("的建议")) && (d = 1);
            else if ("不是很" == a || "不太" == a || "不大" == a || "不是太" == a || "不是那么" == a || "不是非常" == a || "不是十分" == a || "不算" == a || "不算太" == a || "不是特别" == a) c = new RegExp("(" + a + ")(的)?(了|熟|懂|重|沉|甜|咸|辣|苦|酸|小|低|矮|胖|瘦|慢|淡|贵|干|次|差|烂|恶|相|确|肯|复|薄|占|难|少|短|窄|黑|浅|透|老|硬|肥|紧|稀|扁|脏|丑|假|粗|暗|痛|疼|坑|旧|怪|次|傻|笨|臭|皱|垃|弱|惨|吵|费|耗|卡|疲|亏|累|油|恐|麻|繁)"), (result1 = c.test(b)) ? d = 1 : (c = new RegExp("(体型|脸|皮肤|肤色|腰)(" + a + ")"), (result1 = c.test(b)) ? d = 1 : "不是很" == a || "不是太" == a || "不是那么" == a || "不是非常" == a || "不是十分" == a || "不是特别" == a ? (c = new RegExp("(" + a + ").+(就是)"), (result1 = c.test(b)) && (d = 1)) : "不大" == a && (c = /(\u5dee\u8ddd|\u5dee\u522b|\u8bef\u5dee|\u76f8\u5dee|\u8272\u5dee|\u6c14\u5473|\u5f02\u5473|\u5473\u9053|\u566a\u97f3|\u566a\u58f0|\u58f0\u97f3|\u5730\u65b9|\u7a7a\u95f4|\u7535|\u529b(\u6c14|\u91cf)|\u6838|\u52a8\u9759|xxx)[^\s.,;!:~?()]*?\u4e0d\u5927/, (result1 = c.test(b)) ? d = 1 : (c = /\u4e0d\u5927(\u4e0d\u5c0f)/, (result1 = c.test(b)) && (d = 1))));
            else if ("不怎么" == a || "没那么" == a) c = new RegExp("(" + a + ")(样|好|灵|方|喜|干|甜|舒|软|地|理|爱|香|便|适|和|服|上|回|漂|清|轻|长|靠|粘|贴|顺|黏|浓|厚|暖|薄|容易(?!坏|破|烂)|显|行|大|快|持|滴)"), (result1 = c.test(b)) ? d = 0 : (d = 1, "不怎么" == a ? a = "怎么" : "没那么" == a && (a = "那么"));
            else if ("异味" == a || "噪音" == a || "噪声" == a || "色差" == a) c = new RegExp("([\\s.,;!:~()]|^)" + a + "|(而且|而|然而|然后|另外|此外|基本上)" + a + "|" + a + "(很|好|较|挺|真(心)?|特别|蛮|非常|十分|相当|超级|极|超|越|变|确实|的确|这么|那么|更(是)?|不是一般的|实在是)?(小|轻|少|低)|(很|好|较|比较|挺|真(心)?|特别|蛮|非常|十分|相当|超级|极|超|越|变|确实|的确|这么|那么|更(是)?|不是一般的|实在是)?(小|轻|少|低)(的)?" + a), (result3 = c.test(b)) ? d = 0 <= b.indexOf(a + "很大") || 0 <= b.indexOf(a + "大") || 0 <= b.indexOf(a + "较大") || 0 <= b.indexOf(a + "比较大") || 0 <= b.indexOf(a + "也很大") || 0 <= b.indexOf(a + "真心大") || 0 <= b.indexOf(a + "有些大") || 0 <= b.indexOf(a + "比较大") ? 0 : 1 : (c = new RegExp("(听|看|闻|感觉)不(到|着)[^\\s.,;!:~?()]*?" + a), (result1 = c.test(b)) && (d = 1));
            else if ("一般" == a)
                if (-1 < b.indexOf("一般般")) d = 0;
                else if (c = new RegExp("([\\s.,;!:~()]|^)" + a + "(?![\\s.,;!:~()]|了|得很|吧|啊|呢|呀|哈|啦)|((而且|而|然而|然后|另外|此外|基本上)" + a + ")"), result3 = c.test(b)) d = 1;
            else {
                0 <= b.indexOf("比一般") || 0 <= b.indexOf("一般的") || b.indexOf("一般都");
                c = new RegExp("(" + a + ")(般)?(了|得很|吧|啊|呢|呀|哈|啦)?([\\s.,;!:~()]|但|而|然)");
                d = (result1 = c.test(b)) ? 0 : 1;
                c = new RegExp("(像|似|仿佛|象|和)[^\\s.,;!:~?()]*?(" + a + ")");
                if (f = c.exec(b)) d = 1, a = f[0];
                c = /(\u633a|\u5f88|\u975e\u5e38|\u5341\u5206|\u592a|\u6bd4\u8f83)(\u4e00\u822c)/;
                (result1 = c.test(b)) && (d = 0)
            } else if ("了些" == a || "了点" == a || "了一些" == a || "了一点" == a || "了许多" == a || "了很多" == a || "了好多" == a || "了不少" == a || "了一丢丢" == a) 0 <= b.indexOf("少" + a) ? (d = 0, c = new RegExp("(黑头|白头发|蚊子|蟑螂|痘痘|死皮|皱纹|黑斑)[^\\s.,;!:~()]*?少" + a), (result1 = c.test(b)) && (d = 1)) : 0 <= b.indexOf("多" + a) ? (d = 0, c = new RegExp("(保障|安全|信心|幸福)[^\\s.,;!:~()]*?多" + a), (result1 = c.test(b)) && (d = 1)) : (c = new RegExp("(舒服|好(看|吃|听|喝|用|写)?|凉快|实惠|便宜|划算|满意|漂亮|年轻|美丽|美|上涨|优惠|精神|胖|买|送|给|放|拿|屯|囤|细腻|自信|进|晚|早|迟|抓|泡|冲|尝|吃|喝|弄|快|净|方便|亮|白|高|实|爱|爽|强|多|用|洁|省(去|掉)?|约|介绍|说|讲|分|上|挺|问|写|提|喷)(" + a + ")"), (result1 = c.test(b)) ? d = 1 : (c = new RegExp("(" + a + "(儿|点)?$)|(" + a + "(儿|点)?[\\s.,;!~()])|(" + a + "(问题|状况|麻烦|缺陷|瑕疵|毛病))"), (result4 = c.test(b)) || (d = 1)));
            else if ("垃圾" == a) c = /(\u6e05\u9664|\u51c0\u5316|\u6e05\u626b|\u5e26\u8d70|\u5e26|\u628a|\u88c5)\u5783\u573e|\u5783\u573e(\u888b|\u7bb1|\u7eb8\u888b)/, (result1 = c.test(b)) && (d = 1);
            else if ("质量差" == a && 0 <= b.indexOf("质量差不多")) d = 1;
            else if ("差评" == a) c = new RegExp("(有|看|发现|读)[^\\s.,;!:~()]*?(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("不是正品" == a && 0 <= b.indexOf("是不是正品")) d = 1;
            else if ("不是新的" == a && 0 <= b.indexOf("是不是新的")) d = 1;
            else if ("二手" == a && 0 <= b.indexOf("二手价")) d = 1;
            else if ("上当" == a) c = new RegExp("(" + a + ")(时|天|日|即|初|今|局|年|前|然|下|务|做|次)"), (result1 = c.test(b)) ? d = 1 : (c = /(\u76d6|\u653e|\u62e7|\u6263|\u52a0|\u586b|\u665a|\u65e9|\u5b89|\u5730|\u9876|\u67dc|\u6d77|\u8857|\u697c|\u8def|\u8eab|\u5929|\u4ee5)\u4e0a\u5f53/, (result1 = c.test(b)) ? d = 1 : (c = /(\u4e0a\u5f53)[^\s.,;!:~()]*?(\u7528|\u4f7f)/, (result1 = c.test(b)) && (d = 1)));
            else if ("很难" == a || "太难" == a) c = new RegExp("(" + a + ")(买|遇|碰|得|忘|相信|为|找|置信)"), (result1 = c.test(b)) && (d = 1);
            else if ("有问题" == a) c = new RegExp("[\\s.,;!:~?()](" + a + ")"), (result1 = c.test(b)) && (d = 1), 0 <= b.indexOf("所有问题") && (d = 1);
            else if ("性价比不" == a) c = new RegExp("(" + a + ")(错|低|是一般的高|要太高)"), (result1 = c.test(b)) && (d = 1);
            else if ("唯一" == a) c = /\u552f\u4e00[^\s.,;!:~?()]*?(\u5c31\u662f|\u6307\u51fa|\u95ee\u9898|\u7f3a\u9677|\u4e0d\u8db3|\u6bdb\u75c5|\u4e0d\u597d|\u4e00\u70b9|\u7f3a\u70b9|\u5f0a\u7aef|\u5f0a\u75c5|\u4e0d\u6ee1\u610f|\u4e0d\u591f\u597d|\u5730\u65b9|\u65b9\u9762|\u9057\u61be|\u7f3a\u61be)/, (result1 = c.test(b)) || (d = 1);
            else if ("只是" == a) c = new RegExp("(" + a + ")(因为|为了|由于)"), (result1 = c.test(b)) ? d = 1 : (c = /[^\s.,;!:~?()]+(\u53ea\u662f)/, (result1 = c.test(b)) ? d = 1 : (c = /(\u53ea\u662f)[^\s.,;!:~?()]*?(\u8bc4|\u5fd9|\u665a|\u8fdf|\u820d\u4e0d\u5f97|\u8fd8|\u8bf4)/, (result1 = c.test(b)) && (d = 1)));
            else if ("就是" == a)
                if (c = new RegExp("[^\\s.,;!:~?()]+(" + a + ")"), result1 = c.test(b)) d = 1;
                else {
                    if (d || (c = /\u5c31\u662f[^\s.;!:~()?]*?\u4e5f(?!\u8bb8)/, (result = c.test(b)) && (d = 1)), c = new RegExp(a + "([^\\s.,;!:~?()]*?)(舒|好|一个|凉|实|便|漂|不一样|棒|出色|厉害|信任|相|很|这|喜|不让|不小心|用(?!起来)|快|我|你|他|她|它|因|和|默|想|说|自己|本人|超|特|值|评|冲|不错|放心|正品|证明|为|那|感|还没用|要|从|现|当|收货|忙|看)"), f = c.exec(b)) f[1] ? (c = /\u8212|\u51c9|\u5b9e|\u4fbf|\u6f02|\u68d2|\u51fa\u8272|\u5389\u5bb3|\u4fe1\u4efb|\u76f8|\u8fd9|\u559c|\u4e0d\u8ba9|\u4e0d\u5c0f\u5fc3|\u7528|\u56e0|\u9ed8|\u81ea\u5df1|\u8d85|\u7279|\u503c|\u8bc4|\u51b2|\u4e0d\u9519|\u653e\u5fc3|\u6b63\u54c1|\u8bc1\u660e|\u8bf4|\u611f|\u8fd8\u6ca1\u7528|\u5fd9/, (result = c.test(f[2])) && (d = 1)) : (d = 1, "感" == f[2] && (d = 0))
                } else if ("不够" == a) c = new RegExp("(" + a + ")(我|我们)?(吃|用|喝|穿)"), (result1 = c.test(b)) && (d = 1),
            c = new RegExp("(吃|用|喝|钱|资金)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("不了" == a) {
                if (c = new RegExp("(少|错|大|差|买|损|害|丢|忘|离|断|停)" + a), f = c.exec(b)) d = 1, "买" == f[1] && (a = "买不了")
            } else if ("算了" == a) c = new RegExp("(划|上|合|盘|折)" + a), (result1 = c.test(b)) && (d = 1);
            else if ("缺点" == a) c = /(\u4f18|\u591a\u4e8e)[^\s.,;!:~?()]*?\u7f3a\u70b9/, (result1 = c.test(b)) && (d = 1);
            else if ("就好" == a) c = new RegExp("(很快|一会儿|马上|分钟|秒钟|小时|一下子|脸|起来|手感|看图|喜欢|满意|(买|下手|下单|拍)(了)?)" + a), (result1 = c.test(b)) && (d = 1);
            else if ("不一样" == a || "不同" == a || "区别" == a || "差别" == a || "出入" == a) - 1 < b.indexOf("就是不一样") || -1 < b.indexOf("x不一样") || -1 < b.indexOf("与众不同") ? d = 1 : (c = new RegExp("(和|相比|与)[^s.,;!:~?()]*?" + a), d = (result1 = c.test(b)) ? 0 : 1);
            else if ("地摊货" == a) c = new RegExp("(甩|比|和|与)" + a), (result1 = c.test(b)) && (d = 1);
            else if ("太大" == a) c = new RegExp("(" + a + ")(方|气)"), (result1 = c.test(b)) ? d = 1 : (c = new RegExp("(" + a + ")+(的)(便宜|福气|惊喜|幸运|运气|好运)"), (result1 = c.test(b)) ? d = 1 : (c = /(\u4f18\u60e0|\u529b\u5ea6|\u5f00\u9500|\u798f\u6c14)[^\s.,;!:~?()]*?\u592a\u5927/, (result = c.test(b)) && (d = 1)));
            else if ("小心" == a || "谨慎" == a || "慎重" == a) c = new RegExp("(卖家|包装|运输|商家|客服|发货|送货|快递|物流|搬|装|运|网购|购物)[^\\s.,;!:~()?]*?" + a), (result1 = c.test(b)) ? d = 1 : "小心" == a && (c = new RegExp("(" + a + ")(机|脏|谨慎|思|愿|心)"), (result1 = c.test(b)) && (d = 1));
            else if ("一点" == a || "一些" == a) - 1 < b.indexOf("一点都不") || -1 < b.indexOf("一点也不") ? (c = /\u4e00\u70b9(\u90fd|\u4e5f)\u4e0d(\u9ebb|\u8ba8|\u7cdf|\u8f9b|\u56f0|\u96be|\u5c0f|\u5c11|\u91cd|\u77ed|\u7a84|\u9ed1|\u6d45|\u900f|\u8001|\u786c|\u80a5|\u7d27|\u7a00|\u8d35|\u6162|\u6241|\u810f|\u4e11|\u6a2a|\u51f6|\u5047|\u7c97|\u6697|\u75db|\u75bc|\u5751|\u65e7|\u602a|\u6b21|\u5dee|\u70c2|\u50bb|\u7b28|\u81ed|\u76b1|\u5783|\u5f31|\u60e8|\u4f4e|\u5435|\u8d39|\u8017|\u5361|\u75b2|\u6de1|\u8fa3|\u4e8f|\u6389|\u624e|\u7d2f|\u6cb9|\u8f93|\u6d6a|\u7ea2|\u675f|\u5360|\u5ec9|\u50cf(?!\u771f|\u76ae)|\u5012|\u5938|\u6bd4|\u900a|\u51b7|\u51c9|\u70ed|\u663e|\u611f|\u89c9|\u78e8|\u784c|\u6253|\u4f1a|\u7528|\u788d|\u52d2|\u82e6|\u9178|\u6da9|\u523a|\u892a|\u540e\u6094|\u9057\u61be|\u81c3|\u677f|\u94bb|xxx)/, (result1 = c.test(b)) ? d = 1 : (d = 0, -1 < b.indexOf("一点都不") ? a = "一点都不" : -1 < b.indexOf("一点也不") && (a = "一点也不"))) : (c = new RegExp("(比|较于|对于)[^\\s.,;!:~()]+?(" + a + ")"), (result1 = c.test(b)) ? (c = new RegExp("(比|较于)[^\\s.,;!:~()]+?(舒服|好(看|吃|喝)?|凉快|实惠|便宜|漂亮|年轻|美丽|美|优惠|精神|细腻|自信|晚|早|迟|快|净|方便|亮|白|高|多|强|出色|爽|软|糯|可爱|厚|实)(" + a + ")"), (result1 = c.test(b)) && (d = 1)) : d = 1);
            else if ("不能" == a) c = new RegExp("(" + a + ")(更(?!差|坏|烂|糟)|再|在|偷懒|比|要求|大意|太|忽视|忽略|小看|上照|拍照|上传|给|够|停|断|离|多|少|(经)?常|放|囤|搁|苦|相信|错过)"), (result1 = c.test(b)) ? d = 1 : 0 <= b.indexOf("欲罢不能") && (d = 1), d || (c = /\u4e0d\u80fd[^\s.,;!:~()]*?(\u5f62\u5bb9|\u63cf\u8ff0|\u904f\u5236|\u6291\u5236|\u5e73\u590d|\u5fc3\u60c5|\u611f\u89c9|\u51b2\u52a8|\u60c5\u7eea|\u5185\u5fc3|\u4f20\u9012|\u8868\u8fbe|\u4f20\u8fbe|\u5fc3\u4e2d|\u559c\u60a6)/, (result1 = c.test(b)) && (d = 1));
            else if ("不爱用" == a || "不敢用" == a) c = new RegExp("(" + a + ")(其他|其它|别)"), (result1 = c.test(b)) && (d = 1);
            else if ("好痛" == a || "很痛" == a) c = new RegExp("(" + a + ")(快)"), (result1 = c.test(b)) && (d = 1);
            else if ("假货" == a || "歪货" == a || "次品" == a) c = new RegExp("(" + a + ")(太多|到处|遍地|横行)"), (result1 = c.test(b)) && (d = 1), c = new RegExp("(到处|经常|哪里|常常|淘宝)[^\\s.,;!:~()]+?(" + a + ")"), (result1 = c.test(b)) && (d = 1), "次品" == a && (c = new RegExp("(上|下|几)(" + a + ")"), (result1 = c.test(b)) && (d = 1));
            else if ("严重" == a) c = new RegExp("(过敏|痘痘)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("太黑" == a) c = new RegExp("(脚|脸|皮肤|肤色)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("后悔" == a) c = new RegExp("(" + a + ")[^\\s.,;!:~()]*?((买|拍)少了|没(有)?多(买|拍)|(买|拍)晚了|没(有)?早(点|一点|些|一些)?(买|拍)|只(买|拍))"), (result1 = c.test(b)) && (d = 1);
            else if ("粗糙" == a) c = new RegExp("(皮肤|脸)[^\\s.,;!:~()]*?(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("不解释" == a) c = new RegExp("(好评|用户)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("假的" == a) c = new RegExp("(请)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("有味" == a) c = new RegExp("(很|非常|极|十分|特别|相当|太|超级|炒鸡|津津)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("不满" == a) c = new RegExp("(" + a + ")(一|二|三|四|五|六|七|八|九|十|两|百|千|万|两|\\d+)"), (result1 = c.test(b)) ? d = 1 : (c = /\u4e0d\u6ee1[^\s.,;!:~()]*?(\u9000|\u6362)/, (result1 = c.test(b)) && (d = 1));
            else if ("小气" == a) c = new RegExp("(" + a + ")(质|场|球|泡)"), (result1 = c.test(b)) && (d = 1);
            else if ("太重" == a) c = new RegExp("(" + a + ")(要|视|大)"), (result1 = c.test(b)) && (d = 1);
            else if ("好细" == a || "很细" == a || "非常细" == a) c = new RegExp("(" + a + ")(心|致|腻)"), (result1 = c.test(b)) && (d = 1);
            else if ("没法" == a || "没办法" == a) c = new RegExp("(" + a + ")(上|拍|挑)"), (result1 = c.test(b)) ? d = 1 : (c = new RegExp("(自己|费钱|花钱)(" + a + ")"), (result1 = c.test(b)) && (d = 1));
            else if ("碎的" == a) c = new RegExp("(易)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("苦的" == a) c = new RegExp("(辛|艰|吃|刻)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("刷的" == a) c = new RegExp("(印|牙|鞋|板|冲|粉|洗|妆)(" + a + ")"), (result1 = c.test(b)) ? d = 1 : (c = /\u5237\u7684[^\s.,;!:~()]*?(\u5e72\u51c0|\u8212\u670d|\u5f7b\u5e95)/, (result1 = c.test(b)) && (d = 1));
            else if ("不起来" == a) c = new RegExp("(想)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("一塌糊涂" == a) c = new RegExp("(帅|好|满意|感动|美|漂亮|可爱)(的|得)(" + a + ")"), (result1 = c.test(b)) && (d = 1);
            else if ("不喜欢" == a || "讨厌" == a) c = new RegExp("(" + a + ")(麻烦|评价|评论|啰嗦|发表|多|废话|刷)"), (f = c.exec(b)) ? (d = 1, a = f[0]) : (c = new RegExp("(" + a + ")[^\\s.,;!:~()]*?(退|换)"), (result1 = c.test(b)) && (d = 1));
            else if ("小了" == a) c = new RegExp("(" + a + ")(好几岁)"), (f = c.exec(b)) && (d = 1);
            else if ("不走" == a) c = new RegExp("(" + a + ")(型|形|样|遍|开|眼|调|色|味|过场|光)"), (f = c.exec(b)) && (d = 1);
            else if ("不掉" == a) c = new RegExp("(" + a + ")(色|队|纸|渣|点|毛|灰|粉|金|银|价|屑|末|墨|帧|侦|页|颜|绒|漆|筒|档|[\\s.,;!:~()])"), (f = c.exec(b)) ? d = 1 : (c = /(\u8fd8|\u4e5f)\u4e0d\u6389/, (f = c.exec(b)) && (d = 1));
            else if ("掉了" == a) c = /(\u5403|\u7528|\u82b1|\u6d6a\u8d39|\u6212|\u559d|\u53bb|\u4e22|\u6254|\u897f)\u6389\u4e86/, (result1 = c.test(b)) && (d = 1);
            else if ("妈的" == a) c = /(\u8001|\u5988|\u6211|\u7ed9|\u7238)\u5988\u7684/, (result1 = c.test(b)) && (d = 1);
            else if ("买小" == a) c = /\u4e70\u5c0f(\u53ef\u7231)/, (result1 = c.test(b)) && (d = 1);
            else if ("不会买" == a) c = /\u4e0d\u4f1a\u4e70(\u5230)/, (result1 = c.test(b)) && (d = 1);
            else if ("将就" == a) c = /\u5c06\u5c31(\u770b)/, (result1 = c.test(b)) && (d = 1);
            else if ("转基因" == a) c = /(\u975e)\u8f6c\u57fa\u56e0/, (result1 = c.test(b)) && (d = 1);
            else if ("吃亏" == a) c = /\u5403\u4e8f[^\s.,;!:~()]*?(\u662f\u798f)/, (result1 = c.test(b)) && (d = 1);
            else if ("不上" == a) c = new RegExp("(" + a + ")(头|班|当|市|图|买|照|相|牙|火)"), (f = c.exec(b)) ? d = 1 : (c = /(\u7528|\u4f7f|\u8d76|\u56fe(\u7247)?|\u7167\u7247)\u4e0d\u4e0a|(\u6bd4)\u4e0d\u4e0a[\s.,;!:~?()]/, (f = c.exec(b)) && (d = 1));
            else if ("不住" == a) c = /(\u5fcd|hold|\u628a\u6301|\u618b|\u7559|\u6536|\u6321|\u5bf9|\u637a)\u4e0d\u4f4f/i, (result1 = c.test(b)) && (d = 1);
            else if ("不对" == a) c = /\u5bf9\u4e0d\u5bf9/, (result1 = c.test(b)) && (d = 1);
            else if ("起泡" == a) c = /\u4e00\u8d77\u6ce1/, (result1 = c.test(b)) && (d = 1);
            else if ("不如" == a) c = /\u5bb6\u4e0d\u5982/, (result1 = c.test(b)) && (d = 1);
            else if ("不开" == a) c = /\u4e0d\u5f00(\u82b1|\u95e8|\u7a8d|\u59cb|\u5b66|\u53c9|\u5200|\u653e|\u6237|\u4f1a|\u8bfe|\u53e3|\u6717|\u76d8|\u660e|\u542f|\u80f6)/, (result1 = c.test(b)) && (d = 1);
            else if ("二手" == a) c = /\u4e8c\u624b\u4e1c/, (result1 = c.test(b)) && (d = 1);
            else if ("过头" == a) c = /\u8fc7\u5934(\u53d1|\u76ae|\u75db|\u6655|\u9876)/, (result1 = c.test(b)) ? d = 1 : (c = /(\u559d|\u7761|\u529b|\u52a8)\u8fc7\u5934/, (result1 = c.test(b)) && (d = 1));
            else if ("没气" == a) c = /\u6ca1\u6c14(\u5473)/, (result1 = c.test(b)) && (d = 1);
            else if ("不下" == a) c = /(\u505c|\u7f16|\u88c5|\u76db|\u653e|\u4e22)\u4e0d\u4e0b/, (result1 = c.test(b)) ? d = 1 : (c = /\u4e0d\u4e0b(\u6765|\u5782|\u964d|\u843d|\u6c34|\u884c|\u6c89|\u8f66|\d|\u4e24|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341)/, (result1 = c.test(b)) && (d = 1));
            else if ("不足" == a) c = /\u4e0d\u8db3(\u4ee5|\u4e24|\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341|\u767e|\u5343|\u4e07|\d|\u9053)/, (result1 = c.test(b)) ? d = 1 : (c = /(\u7761\u7720|\u4f59\u989d|\u4fe1\u5fc3|\u52c7\u6c14)\u4e0d\u8db3/, (result1 = c.test(b)) && (d = 1));
            else if ("毛病" == a) c = /(\u843d\u4e0b|\u7559\u4e0b)[^\s.,;!:~()]*?\u6bdb\u75c5/, (result1 = c.test(b)) && (d = 1);
            else if ("强硬" == a) c = /(\u8d28\u91cf|\u5bf9\u624b|\u54c1\u8d28)[^\s.,;!:~()]*?\u5f3a\u786c/, (result1 = c.test(b)) && (d = 1);
            else if ("嫌疑" == a) c = /(\u62d6|\u6258)\u7684\u5acc\u7591/, (result1 = c.test(b)) && (d = 1);
            else if ("不懂" == a || "不明白" == a || "困难" == a || "疑惑" == a)(c = RegExp(a + "([^.;!:~?()]*?)(答|指导|指点|视频|说明|讲|解|教|回|咨询|请教|询问|服务|耐心)"), (f = c.exec(b)) ? 0 > f[1].indexOf("不") && 0 > f[1].indexOf("没") && 0 > f[1].indexOf("未") && 0 > f[1].indexOf("木") && (d = 1) : (c = RegExp("(答|指导|指点|视频|说明|讲|解|回|耐心)[^s.,;!:~()]*?" + a), (result1 = c.test(b)) && (d = 1)), "不懂" != a || d) ? "困难" != a || d || (c = /(\u9009\u62e9)\u56f0\u96be|\u56f0\u96be\u6237/, (result1 = c.test(b)) && (d = 1)) : (c = /\u4ec0\u4e48\u90fd\u4e0d\u61c2|\u4e0d\u61c2\u884c|\u6211\u4e0d\u61c2/, (result1 = c.test(b)) && (d = 1));
            else if ("无法" == a) c = /\u65e0\u6cd5[^\s.,;!:~()]*?(\u5f62\u5bb9|\u63cf\u8ff0|\u904f\u5236|\u6291\u5236|\u5e73\u590d|\u5fc3\u60c5|\u611f\u89c9|\u51b2\u52a8|\u60c5\u7eea|\u5185\u5fc3|\u4f20\u9012|\u8868\u8fbe|\u4f20\u8fbe|\u5fc3\u4e2d|\u559c\u60a6|\u62b5\u6297|\u81ea\u62d4)/, (result1 = c.test(b)) && (d = 1);
            else if ("感觉不" == a) {
                if (c = new RegExp("(" + a + ")(错|(是|像)假|坏|赖|差|到|需|贵|会|可)"), result1 = c.test(b)) d = 1, a = "感觉"
            } else if ("感觉没" == a) {
                if (c = /\u611f\u89c9\u6ca1[^\s.,;!:~()]*?(\u533a\u522b|\u5dee\u522b|\u4e0d\u540c|\u4e0d\u4e00\u6837|\u95ee\u9898|\u6bdb\u75c5|\u7f3a\u70b9|\u7f3a\u9677|\u4e0d\u8db3|\u8272\u5dee|\u6c14\u5473|\u5f02\u5473|\u5473\u9053|\u566a\u97f3|\u566a\u58f0|\u7455\u75b5|\u9057\u61be|\u7f3a\u61be|\u75d5\u8ff9|\u4e00\u4e2a)/, result1 = c.test(b)) d = 1, a = "感觉"
            } else if ("再也不" == a) c = /\u518d\u4e5f\u4e0d(\u4f1a|\u518d|\u613f)?(\u4e70|\u6765|\u56de|\u7231|\u559c|\u5149\u987e|\u5149\u4e34|\u5173(\u5fc3|\u6ce8)|\u7528|\u5403|\u7a7f|\u6234|\u9a91|\u4f7f|\u559d)(\u8fd9\u4e2a|\u5b83)?(\u4e86|\u5566|[\s.,;!:~()])/, (f = c.exec(b)) ? d = 0 : (d = 1, c = /\u518d\u4e5f\u4e0d.*?[\s.,;!:~()]/, (f = c.exec(b)) && (a = f[0]));
            else if ("没有任何" == a || "没任何" == a || "没有一点" == a || "没一点" == a || "根本没" == a) c = new RegExp("(" + a + ")[^s.,;!:~()]*?(作用|效果|用处|好处|意义|价值|改善|变化|改变|意思|起色|好转|法)"), (f = c.exec(b)) ? d = 0 : (d = 1, c = new RegExp("(" + a + ").*?[s.,;!:~()]"), (f = c.exec(b)) && (a = f[0]));
            else if ("都没有" == a || "都木有" == a) {
                c = /(\u95ee\u9898|\u7455\u75b5|\u7f3a\u9677|\u6bdb\u75c5|\u5473\u9053|(\u6c14|\u5f02|\u81ed|\u76ae|\u9769|\u8165|\u6f06|\u6da9|\u82e6)\u5473|\u566a\u97f3|\u566a\u58f0|\u7f3a\u70b9|\u58f0\u97f3|\u8272\u5dee|\u7ebf\u5934|\u7591\u95ee|\u4e0d\u8db3|\u5f0a\u7aef|\u62b1\u6028|\u6028\u8a00|\u635f(\u574f|\u4f24|\u5931|\u5bb3)|\u75d5\u8ff9|\u7834\u635f|\u6742(\u70b9|\u97f3|\u8d28|\u8272)|(\u9519|\u574f|\u70c2|\u7834|\u4e71|\u810f|\u5dee|\u6b21|\u9ed1|\u8001|\u80a5|\u4e11|\u5047|\u75db|\u65e7|\u602a|\u50bb|\u7b28|\u81ed|\u6c61|\u9178|\u6b6a|\u6f6e|\u6e23|\u7cd9)[^\s.,;!:~()]*?|xxx|[\s.,;!:~()])\u90fd(\u6ca1|\u6728)\u6709/;
                if (f = c.exec(b)) d = 1, a = f[0];
                else if (c = /\u90fd(\u6ca1|\u6728)\u6709([^\s.,;!:~()]*?)(\u5168|\u597d|\u591f|\u4e0a|\u4e0b|\u6765|\u5230|\u9f50)([\s.,;!:~()]|\u5c31)/, f = c.exec(b)) {
                    if (d = 0, -1 < f[2].indexOf("这") || -1 < f[2].indexOf("想")) d = 1
                } else c = /\u90fd(\u6ca1|\u6728)\u6709([\s.,;!:~()]|\u5c31)/, d = (result1 = c.test(b)) ? 0 : 1;
                !d && 0 <= e.nfc_product.name.indexOf("防辐射") && (c = /(\u4fe1\u53f7|\u8f90\u5c04)\u90fd(\u6ca1|\u6728)\u6709/, (result1 = c.test(b)) && (d = 1))
            } else if ("廉价" == a) c = /\u7269\u7f8e\u5ec9\u4ef7|\u5ec9\u4ef7\u7269\u7f8e|\u7269\u5ec9\u4ef7\u7f8e|\u7269\u5ec9\u4ef7\u503c|(\u4ef7\u683c|\u5546\u54c1|\u5b9e\u60e0)\u5ec9\u4ef7/, (f = c.exec(b)) && (d = 1);
            else if ("摆设" == a) c = /\u6446\u8bbe\u8ba1/, (f = c.exec(b)) && (d = 1);
            else if ("个洞" == a) c = /\u4e2a\u6d1e(\u6d1e)/, (f = c.exec(b)) && (d = 1);
            else if ("少发" == a) c = /(\u5f88|\u6781)\u5c11\u53d1/, (f = c.exec(b)) && (d = 1);
            else if ("来气" == a) c = /\u6765\u6c14(\u8d28|\u6e29)/, (f = c.exec(b)) && (d = 1);
            else if ("长毛" == a) c = /\u957f\u6bdb(\u7ed2|\u8863)/, (f = c.exec(b)) && (d = 1);
            else if ("线头" == a) c = /\u7ebf\u5934[^\s.,;!:~()]*?(\u51c0|\u5c11|\u5e73|\u9f50|\u6574|\u6389|\u526a|\u53bb)/, (f = c.exec(b)) && (d = 1);
            else if ("不准" == a) c = /\u4e0d\u51c6(\u5907|\u88c5|\u7528|\u52a8)/, (f = c.exec(b)) && (d = 1);
            else if ("有灰" == a) c = /\u6709\u7070(\u7684|\u8272|\u989c\u8272|\u67a3)/, (f = c.exec(b)) && (d = 1);
            else if ("别买" == a) c = /\u522b\u4e70(\u9519|\u5c11)/, (f = c.exec(b)) ? d = 1 : (c = /(\u5206|\u7279)\u522b\u4e70/, (f = c.exec(b)) && (d = 1));
            else if ("不正" == a) c = /\u4e0d\u6b63(\u597d|\u662f|\u5de7|\u5728|\u503c)/, (f = c.exec(b)) && (d = 1);
            else if ("味道大" == a || "气味大" == a) c = new RegExp(a + "(同|都|概|致)"), (f = c.exec(b)) && (d = 1);
            else if ("不动" == a) c = /\u4e0d\u52a8(\u5fc3|\u4ea7|\u5bb9|\u624b|\u6447|\u7528)/, (f = c.exec(b)) ? d = 1 : (c = /(\u6447|\u6643|\u80cc|\u63d0|\u63a8|\u6253|\u4e5f)\u4e0d\u52a8/, (f = c.exec(b)) && (d = 1));
            else if ("不完" == a) c = /\u4e0d\u5b8c(\u5168|\u5584|\u7f8e|\u6574|\u5907|\u597d)/, (f = c.exec(b)) || (d = 1);
            else if ("不易" == a) c = /\u4e0d\u6613(\u7834|\u635f|\u574f|\u8150|\u70c2|\u53d8|\u78e8|\u51fa|\u88c2|\u80c0|\u81a8|\u6454|\u6ed1|\u5012|\u788e|\u5f2f|\u6298|\u65ad|\u4e22|\u6f0f|\u6cc4|\u6b6a|\u88ab|\u53d7|\u53d1|\u6492|\u6d12|\u8fc7|\u4e86|\u554a|\u5462|\u5440|\u54c8|\u5566|[\s.,;!:~()])/, (f = c.exec(b)) && (d = 1);
            else if ("不出" == a || "不出来" == a) c = /(\u770b|\u542c|\u60f3|\u95fb|\u7167|\u62cd|\u6311|\u627e)\u4e0d\u51fa/, (f = c.exec(b)) ? d = 1 : (c = /\u4e0d\u51fa(\u95e8|\u6237|\u73b0|\u9519|\u56fd|\u540d|\u53bb|\u624b|\u73b0|\u6240|\u6211|\u6c57)/, (f = c.exec(b)) && (d = 1));
            else if ("摩擦" == a) c = /\u6469\u64e6(\u529b|\u963b\u529b)/, (f = c.exec(b)) && (d = 1);
            else if ("起皮" == a) c = /(\u5f97)\u8d77\u76ae/, (f = c.exec(b)) && (d = 1);
            else if ("疯了" == a) c = /(\u8001\u677f|\u5356\u5bb6|\u638c\u67dc|\u5e97\u5bb6|\u73a9|\u7231|\u559c\u6b22|\u9ad8\u5174)[^\s.,;!:~()]*?\u75af\u4e86/, (f = c.exec(b)) && (d = 1);
            else if ("坏了" == a) c = /(\u9ad8\u5174|\u4e50|\u7f8e|\u5fd9|\u7d2f)[^\s.,;!:~()]*?\u574f\u4e86/, (f = c.exec(b)) && (d = 1);
            else if ("屁用" == a) c = /\u5c41\u5c41\u7528/, (f = c.exec(b)) && (d = 1);
            else if ("太高" == a) c = /(\u6027\u4ef7\u6bd4|\u6863\u6b21|\u89c4\u683c)\u592a\u9ad8/, (f = c.exec(b)) && (d = 1);
            else if ("就更好" == a || "就好" == a) c = new RegExp("(起来)" + a), (f = c.exec(b)) && (d = 1);
            else if ("不敢" == a) c = /\u4e0d\u6562(\u76f8\u4fe1|\u60f3\u8c61|\u518d(\u5938|\u8d5e)|\u4e70)/, (f = c.exec(b)) && (d = 1);
            else if ("不再来" == a) c = /\u5931\u4e0d\u518d\u6765/, (f = c.exec(b)) && (d = 1);
            else if ("开叉" == a) c = /\u5f00\u53c9(\u8bbe\u8ba1)/, (result1 = c.test(b)) && (d = 1);
            else if ("黑屏" == a) c = /(\u8bbe\u7f6e)[^\s.,;!:~()]*?\u9ed1\u5c4f/, (f = c.exec(b)) && (d = 1);
            else if ("谁买谁" == a) c = /\u8c01\u4e70\u8c01(\u8d5a|\u53d1\u8d22|\u8d70\u8fd0)/, (f = c.exec(b)) && (d = 1);
            else if ("以为是" == a) c = /\u4ee5\u4e3a\u662f(\u5237|\u5047|\u574f|\u7834|\u70c2)/, (result1 = c.test(b)) && (d = 1);
            else if ("参考" == a) c = /\u53c2\u8003(\u4e00\u4e0b|\u4e0b|\u5427|\u54e6|\u5566|\u554a|\u54c8|[\s.,;!:~()])/, (result1 = c.test(b)) || (d = 1);
            else if ("可惜" == a || "遗憾" == a) c = new RegExp("(" + a + ")[^\\s.,;!:~()]*?(忘|拍|照|传|图|买|错过)"), (result1 = c.test(b)) ? d = 1 : (c = new RegExp("(忘|拍|照|传|图|买|错过)[^\\s.,;!:~()]*?" + a), (result1 = c.test(b)) && (d = 1));
            else if ("麻烦" == a || "烦了" == a) c = new RegExp("(自己|带|嫌|省|免|少|我|因为|由于|主要是)[^\\s.,;!:~()]*?(" + a + ")"), (result1 = c.test(b)) ? d = 1 : (c = /\u70e6(\u4e86)?(\u4f60|\u8001\u677f|\u638c\u67dc|\u5356\u5bb6|\u5e97\u5bb6|\u5ba2\u670d|\u5c31)[^\s.,;!:~()]*?(\u4e86|\u5566|\u6b21|\u6ca1)/, (result1 = c.test(b)) && (d = 1));
            else if ("沙子" == a) 0 <= e.nfc_product.name.indexOf("沙") && (d = 1);
            else if ("破洞" == a) 0 <= e.nfc_product.name.indexOf("洞") && (d = 1);
            else if ("蜗牛" == a) 0 <= e.nfc_product.name.indexOf("蜗") && (d = 1);
            else if ("打不通" == a || "不进去" == a) 0 <= e.nfc_product.name.indexOf("防辐射") && (d = 1);
            else if ("声音大" == a) c = /\u97f3\u7bb1|\u97f3\u54cd|\u8033\u673a|\u7535\u89c6|\u624b\u673a|\u4e50\u5668|\u5587\u53ed|\u6536\u97f3\u673a/, (result1 = c.test(e.nfc_product.name)) && (d = 1);
            else if ("怪味" == a) {
                if (0 <= e.nfc_product.name.indexOf("怪味") || 0 <= e.nfc_product.name.indexOf("麻花")) d = 1
            } else "皱巴巴" == a || "褶皱" == a || "褶子" == a ? (c = /\u71a8\u6597|\u6302\u70eb|\u8936|\u7a97\u5e18|\u906e\u5149/, (result1 = c.test(e.nfc_product.name)) ? d = 1 : (c = new RegExp("(设计|添加|加上)[^\\s.,;!:~()]*?" + a + "|" + a + "[^\\s.,;!:~()]*?(设计|好看|别致|精巧|上档次)"), (result1 = c.test(b)) && (d = 1))) : "特别小" == a && -1 < b.indexOf("特别小清新") && (d = 1);
            return [d, a]
        },
        getTrueCmtType: function(a, b) {
            var d, c, f = e.nfc_config.settings.commentWords;
            b = b.replace(/(\uff0c|\u3002|\uff01|\uff1b|\uff1a|\uff5e|\uff1f|\u3001|"|")/g, ",");
            var g = a.replace(/(\u7269\u6d41|\u97f5\u8fbe|\u987a\u4e30|Ems|EMS|\u5706\u901a|\u4e2d\u901a|\u5feb\u9012|\u9001\u8d27)[^\s,.;!:~?()]*?[\s,.;!:~?()]/g, "");
            if (2 < b.length) {
                b = b.replace("好评", "");
                for (var l = 0, k = 0; !l && 3 > k;)
                    if (k++, c = this.findExpression(b, f.praise, " "))
                        if (d = new RegExp("(开始|本来|一向|以为|没|木|无|不|未|但愿|希望|如|要是|当时|一点|勉强|怎么|很少|就算|看|万一|除|去|空气|雾霾|天气|环境|照|拍|房子|技术|上次|之前|此前|前一段|以前|第一次|前几次|那次|服务|客服|老板|卖家)[^\\s.,;!:~?()]*?(" + c + ")"), d = d.exec(b)) c = d[0], b = b.replace(c, "");
                        else {
                            l = 1;
                            break
                        } else break;
                if (!l && (c = this.findCompositeBadWord(b), (c = c[0]) || (c = this.findExpression(b, f.neg + " " + f.soso, " ")), c)) return 22
            }
            for (var l = 1, k = 0, g = g.replace(/(\u805a\u5212\u7b97|\u597d\u8bc4\u8fd4\u73b0|\u5237\u597d\u8bc4|\u597d\u50cf)/g, ""), m = 0; l && 5 > m;) {
                m++;
                c = this.findExpression(g, f.praise, " ");
                if (!c && (d = /[\s.,;!:~?()](\u597d)[^\s.,;!:~?()]{1,3}[\s.,;!:~?()]/, result2 = d.test(g), !result2)) return f = 22;
                k = 1;
                d = new RegExp("(开始|本来|一向|以为|没|木|无|不|未|但愿|希望|怀疑|如|要是|当时|一点|勉强|怎么|很少|就算|看|万一|除|去|空气|雾霾|天气|环境|照|拍|房子|技术|上次|之前|此前|前一段|以前|第一次|前几次|那次|服务|客服|老板|卖家)[^\\s.,;!:~?()]*?(" + c + ")");
                (d = d.exec(g)) ? (c = d[0], k = 0) : (c = this.findGoodException(c, g), (l = c[0]) && (k = 0), c = c[1]);
                l && (g = g.replace(c, ""))
            }
            return k ? 21 : 22
        },
        filterSoSoDubious: function(a, b) {
            var d = 0,
                c = a.length;
            if (0 >= c) return 0;
            var e = [],
                g, l;
            for (l in a) g = a[l], 21 == g.result ? (d++, void 0 == e[g.keyword] ? e[g.keyword] = 1 : e[g.keyword]++) : (1 == g.result || 23 == g.result) && 19 < g.appendDays && (b ? 60 < g.appendDays ? (a[l].result = 21, a[l].remark = "追评时间这么晚，相对比较可信。") : (a[l].result = 1, a[l].remark = "虽然追评时间比较晚，但在怀疑有刷单的情况下，还是谨慎一点好。") : (a[l].result = 21, a[l].remark = "追评时间比较晚，可信度相对较高。"));
            g = "";
            if (10 < d) {
                var d = Math.round(.6 * d),
                    k;
                for (k in e)
                    if (l = e[k], l >= d) {
                        g = k;
                        break
                    }
                if (g)
                    for (i = 0; i < c; i++) 21 == a[i].result && a[i].keyword == g && (a[i].result = 4, a[i].remark = "为什么大家都这么说？我不信。")
            }
            return a
        }
    }
})(window);