$(function() {
    window.com_nfc_configModule.loadConfig(showConfig)
});

function showConfig() {
    var a = com_nfc_config.options;
    for (key in a) $("[name='" + key + "']").eq(a[key] - 1).attr("checked", "checked")
}
$("input[type='radio']").change(function() {
    var a = $(this).attr("name"),
        d = $(this).val(),
        c = com_nfc_config.options,
        b = new Date,
        b = b.getFullYear() + "-" + (b.getMonth() + 1) + "-" + b.getDate();
    c[a] = d;
    c.lastSetDate = b;
    a = JSON.stringify(c);
    localStorage.setItem("options", a)
});