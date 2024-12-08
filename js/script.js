// ページトップボタン設定
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // 条件式：スクロールが100を超えたら、ページトップボタンがfadein2で表示
  if (sc > 100) {
    $("footer p.pagetop").fadein2(500);
    // スクロールが100を超えなければ、トップページボタンがfadeOutする
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

// スクロールすると、下からふわっと出現する設定
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll(".fadein");
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

// タブ選択で、表示切替設定（q&a.html）
$('input[name="tab"]').change(function () {
  $("main article section.tab").hide();
  var id = $(this).attr("id");
  $("." + id).fadein2();
});

// モバイルメニュー上下スライド
// .hmenuをクリックした時
$(".hmenu").click(function () {
  $("nav").slideToggle(500);
  $(this).toggleClass("close");
});

$(".container").click(function () {
  $(".hmenu").removeClass(".close");
});

// タブ選択で、表示切替設定(performance.html）
$('input[name="tabp"]').change(function () {
  $("main article section.tabp").hide();
  var id = $(this).attr("id");
  $("." + id).fadein2();
});
