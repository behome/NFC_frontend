(function(e){
    e.com_nfc_config = {
        settings:{},
        options:{}
    };
    if (void 0 === e.thisExplorer) {
        var v = navigator.userAgent.toLowerCase(); - 1 < v.indexOf("metasr") && -1 < v.indexOf("se") ? (e.thisExplorer = sogouExplorer, e.com_nfc_config.settings.explorerType = "sogou") : -1 < v.indexOf("firefox") ? (e.thisExplorer = browser, e.com_nfc_config.settings.explorerType = "firefox") : (e.thisExplorer = chrome, e.com_nfc_config.settings.explorerType = "chrome")
    }
    e.com_nfc_config.options.taobao = 2;
    e.com_nfc_config.options.tmall = 2;
    e.com_nfc_config.options.jd = 2;
    e.com_nfc_config.options.No1 = 2;
    e.com_nfc_config.options.dd = 1;
    e.com_nfc_config.options.amazon = 1;
    e.com_nfc_config.options.gome = 1;
    e.com_nfc_config.options.suning = 1;
    e.com_nfc_config.classIdArray = [0, 233, 234, 235, 240, 242, 243, 239, 236, 237, 238, 245, 241, 244];
    e.com_nfc_status = {
        browser: {},
        extension: {}
    };
    e.thisExplorer.runtime.getManifest && (e.com_nfc_status.extension = e.thisExplorer.runtime.getManifest());
    "sogou" == e.com_nfc_config.settings.explorerType ? (v = e.thisExplorer.extension.getURL("manifest.xml"), e.com_nfc_status.extension.baseURL = v.replace(/manifest.xml/, ""), e.com_nfc_status.extension.update_url = "") : (v = e.thisExplorer.extension.getURL("manifest.json"), e.com_nfc_status.extension.baseURL = v.replace(/manifest.json/, ""));
    e.com_nfc_configModule = {
        loadConfig: function(a){
            e.thisExplorer.runtime.sendMessage({               
                options: 1
            }, function(b) {
               /* e.com_nfc_config.settings.searchWords = b.searchWords;
                e.com_nfc_status.extension.itemTipShow = b.itemTipShow;*/
                if (0 < b.options.length) try {
                    e.com_nfc_config.options = JSON.parse(b.options)
                } catch (d) {
                    console.log("Error in parsing options.")
                }
                try {
                    e.com_nfc_config.settings.commentWords = JSON.parse(b.commentWords)
                } catch (d) {
                    console.log("Error in parsing commentWords:" + b.commentWords)
                }
                a();
            })
        }
    }
})(window);