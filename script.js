$(function () {
  // ハンバーガーボタンクリックで実行
  $(".drawer__button").click(function () {
    $(this).toggleClass("active");
    $(".drawer__nav").toggleClass("active");
  });

  $(".drawer__nav__link").click(function () {
    $(".drawer__button").removeClass("active");
    $(".drawer__nav").removeClass("active");
  });

  // ページ内スクロール
  $('a[href^="#"]').click(function () {
    const speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  // function
});

$(function(){
  $('.accordion_one .ac_header').click(function(){
    $(this).next('.ac_inner').slideToggle();
    $(this).toggleClass("open");
  });
});


let accordionDetails = '.js-details';
let accordionSummary = '.js-details-summary';
let accordionContent = '.js-details-content';
let speed = 500;

$(accordionSummary).each(function() {
  $(this).on("click", function(event) {
    // summaryにis-activeクラスを切り替え
    $(this).toggleClass("is-active");
    // デフォルトの挙動を無効化
    event.preventDefault();

    if ($(this).parent($(accordionDetails)).attr("open")) {
      // アコーディオンを閉じるときの処理
      $(this).nextAll($(accordionContent)).slideUp(speed, function() {
        // アニメーションの完了後にopen属性を取り除く
        $(this).parent($(accordionDetails)).removeAttr("open");
        // display:none;を消して、ページ内検索にヒットするようにする
        $(this).show();
      });
    } else {
      // アコーディオンを開くときの処理
      $(accordionSummary).not($(this)).removeClass("is-active");
      $(accordionContent).not($(this).nextAll($(accordionContent))).slideUp(speed, function() {
        // アニメーションの完了後、すでに開いているアコーディオンのopen属性を取り除く
        $(this).parent($(accordionDetails)).removeAttr("open");
        $(this).show();
      });
      // クリックしたアコーディオンを開く
      $(this).parent($(accordionDetails)).attr("open", "true");
      $(this).nextAll($(accordionContent)).hide().slideDown(speed);
    }
  })
});


$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $("#top_ga").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $('.pc_header , .top_sp').addClass("headerColorScroll");
    } else {
      $('.pc_header , .top_sp').removeClass("headerColorScroll");
    }
  });
});




// フェードアップ
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll(".fade-up, .fade-up2, .fade-up3");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


// ページを開いた瞬間
window.addEventListener("load", function() {
  const el = document.querySelectorAll(".fade-up-onload, .fade-up-onload2");
  el.forEach(elm => elm.classList.add("visible"));
});



// フッターが見えたらヘッダー消える
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".pc_header");
  const target = document.querySelector(".page-fotter");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // area7 が見えたらフェードアウト
          header.classList.add("hidden");
        } else {
          // area7 が見えなくなったらフェードイン
          header.classList.remove("hidden");
        }
      });
    },
    { threshold: 0.1 } // 10%見えたら判定
  );

  observer.observe(target);
});
