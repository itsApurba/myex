!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = {
      exports: {},
      id: r,
      loaded: !1,
    });
    return e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ""), t(0);
})({
  0: function (e, t, n) {
    try {
      (function () {
        "use strict";
        n(625);
      }.call(this));
    } finally {
    }
  },
  625: function (e, t, n) {
    try {
      (function () {
        "use strict";
        chrome.runtime.onMessage.addListener(function (e, t) {
          chrome.tabs.query({}, function (n) {
            n.map(function (n) {
              return t.tab && t.tab.id === n.id
                ? !1
                : (chrome.tabs.sendMessage(n.id, e), !0);
            });
          });
        }),
          chrome.browserAction.onClicked.addListener(function () {
            chrome.tabs.query(
              {
                url: "chrome://newtab/",
                title: "Get Motivated",
              },
              function (e) {
                e.length <= 0
                  ? chrome.tabs.create({
                      url: chrome.extension.getURL("index.html"),
                    })
                  : chrome.tabs.update(e[0].id, {
                      selected: !0,
                    });
              }
            );
          });
      }.call(this));
    } finally {
    }
  },
});
