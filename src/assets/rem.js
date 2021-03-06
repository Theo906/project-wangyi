/*****
 *  移动端适配
 */

;
(function(win){
  var doc = win.document;
  var docEl = doc.documentElement;
  var metaEl = doc.querySelector('meta[name="viewport"]');
  var tid;

  metaEl.setAttribute("content", "initial-scale=.5, maximum-scale=.5, minimum-scale=.5, user-scalable=no viewport-fit=cover")
  // 设备像素比
  var devicePixelRatio = win.devicePixelRatio;

  function refreshRem(){
    var width = docEl.getBoundingClientRect().width;
    var ua = navigator.userAgent.toLowerCase();

    // 不是ipad，普通手机执行
    if (!/ipad/.test(ua)) {
      if (width / 2 > 750) {
        width = 750 * dpr
      }
      var rem = width / 10;//37.5

      docEl.style.fontSize = rem + "px";
    }
  }

  refreshRem();

  win.addEventListener("resize", function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300)
  }, false);
  
  win.addEventListener("pageshow", function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300)
    }
  }, false);

})(window)