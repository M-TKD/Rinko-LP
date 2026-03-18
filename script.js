/* ===== RINKO LP スクリプト ===== */

// LINEリンクURL（全CTAで共通管理）
// ここを実際のLINE URLに変更してください
const LINE_URL = 'https://lin.ee/XXXXXXX';

// ===== LINEリンクを全CTAに適用 =====
document.querySelectorAll('a[href="https://lin.ee/XXXXXXX"]').forEach(el => {
  el.href = LINE_URL;
});

// ===== スティッキーCTA 表示制御 =====
const stickyCta = document.getElementById('stickyCta');
const SHOW_AFTER_PX = 300; // ヒーロー画像を過ぎたら表示

function handleScroll() {
  if (window.scrollY > SHOW_AFTER_PX) {
    stickyCta.classList.add('visible');
  } else {
    stickyCta.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
// 初期チェック
handleScroll();

// ===== フェードインアニメーション =====
const fadeEls = document.querySelectorAll('.fade-in');

if (fadeEls.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeEls.forEach(el => observer.observe(el));
}

// ===== CTAクリックのGoogle Analytics トラッキング（オプション） =====
// GA4を導入する場合はここにトラッキングコードを追加
// document.querySelectorAll('.btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     gtag('event', 'cta_click', { event_category: 'conversion', event_label: btn.className });
//   });
// });
