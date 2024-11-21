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
