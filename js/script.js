// ページトップボタン設定
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // 条件式：スクロールが100を超えたら、ページトップボタンがfadeInで表示
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
    // スクロールが100を超えなければ、トップページボタンがfadeOutする
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});


// スクロールすると、下からふわっと出現する設定
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll("section");
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add("on");
      }
    }
  };
  window.addEventListener("load", scrollAnimationFunc);
  window.addEventListener("scroll", scrollAnimationFunc);
});
