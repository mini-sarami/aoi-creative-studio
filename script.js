/* ==========================================================================
   AOI Creative Studio — script.js
   ※ このサイトは架空のスタジオを紹介するデモサイトです。
   ========================================================================== */

(function () {
  'use strict';

  // CSS側で「JS有効時のみ」の演出を適用するためのフラグ
  document.documentElement.classList.add('js');

  /* ---------- モバイルメニューの開閉 ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // メニュー内リンクをクリックしたら閉じる
  nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Escapeキーでも閉じる
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  /* ---------- ヘッダーにスクロール時の影を付ける ---------- */
  function handleScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- スクロール時のふわっと表示 ---------- */
  var revealTargets = document.querySelectorAll('[data-reveal]');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- 画像が読み込めない場合のフォールバック ---------- */
  document.querySelectorAll('.media-frame img').forEach(function (img) {
    var frame = img.closest('.media-frame');
    var markAsBroken = function () {
      frame.classList.add('is-broken');
    };
    if (img.complete && img.naturalWidth === 0) {
      markAsBroken();
    } else {
      img.addEventListener('error', markAsBroken);
    }
  });

  /* ---------- お問い合わせフォーム（ダミー送信） ---------- */
  var form = document.getElementById('contact-form');
  var success = document.getElementById('form-success');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // ダミーのため実際には送信しない

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var button = form.querySelector('button[type="submit"]');
    button.disabled = true;

    // 送信処理の雰囲気だけ再現して完了メッセージを表示
    window.setTimeout(function () {
      form.reset();
      button.disabled = false;
      success.hidden = false;
      success.focus();
    }, 500);
  });

  /* ---------- コピーライトの年を自動更新 ---------- */
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
