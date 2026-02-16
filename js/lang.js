(() => {
  const toggle = document.querySelector('[data-lang-toggle]');
  const nodes = document.querySelectorAll('[data-i18n],[data-i18n-html]');

  const applyLang = (lang) => {
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
    document.body.classList.toggle('lang-en', lang === 'en');
    nodes.forEach((el) => {
      const zh = el.getAttribute('data-zh');
      const en = el.getAttribute('data-en');
      const useEn = lang === 'en';
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = useEn ? (en || el.innerHTML) : (zh || el.innerHTML);
      } else {
        el.textContent = useEn ? (en || el.textContent) : (zh || el.textContent);
      }
    });
    if (toggle) {
      toggle.textContent = lang === 'en' ? '中文' : 'EN';
    }
    localStorage.setItem('site-lang', lang);
  };

  const init = () => {
    nodes.forEach((el) => {
      if (!el.getAttribute('data-zh')) {
        const value = el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent;
        el.setAttribute('data-zh', value);
      }
    });
    const saved = localStorage.getItem('site-lang') || 'zh';
    applyLang(saved);
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = document.body.classList.contains('lang-en') ? 'zh' : 'en';
        applyLang(next);
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
