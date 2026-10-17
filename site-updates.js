(() => {
  'use strict';
  const STORAGE_KEY = 'melkendorf-site-update-dorfarchiv-2026-10-v1';
  try {
    if (window.localStorage.getItem(STORAGE_KEY) === 'seen') return;
  } catch (_) {
    // Der Hinweis funktioniert auch, falls lokaler Speicher nicht verfügbar ist.
  }
  if (document.getElementById('melkendorf-site-update')) return;
  const style = document.createElement('style');
  style.textContent = "#melkendorf-site-update{position:fixed;z-index:1050;right:22px;bottom:22px;max-width:420px;width:calc(100% - 44px);padding:23px 24px 22px;background:#fffefa;color:#253622;border:1px solid #cad8be;border-top:4px solid #d4af37;border-radius:17px;box-shadow:0 16px 50px rgba(30,61,30,.22);font:inherit;line-height:1.5;transform:translateY(14px);opacity:0;transition:transform .28s ease,opacity .28s ease}\n#melkendorf-site-update.is-visible{transform:translateY(0);opacity:1}\n#melkendorf-site-update .update-kicker{font-size:.76rem;font-weight:800;letter-spacing:.10em;text-transform:uppercase;color:#51733a;margin:0 35px 8px 0}\n#melkendorf-site-update h2{font-size:1.25rem;line-height:1.3;color:#1e3d1e;margin:0 20px 9px 0;font-weight:800}\n#melkendorf-site-update p{font-size:.96rem;line-height:1.55;margin:0 0 16px}\n#melkendorf-site-update .update-link{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:10px 17px;border-radius:10px;text-decoration:none;background:#1e3d1e;color:#fff;font-weight:700;font-size:.93rem}\n#melkendorf-site-update .update-social{font-size:.87rem;line-height:1.45;margin-top:13px}#melkendorf-site-update .update-social a{color:#315a2b;text-decoration:underline;text-underline-offset:2px;font-weight:650}#melkendorf-site-update .update-link:hover,#melkendorf-site-update .update-link:focus-visible{background:#315a2b;color:#fff}\n#melkendorf-site-update .update-close{position:absolute;top:12px;right:12px;display:grid;place-items:center;width:35px;height:35px;border-radius:50%;border:1px solid #d7decf;background:#fff;color:#1e3d1e;cursor:pointer;font-size:1.3rem;line-height:1}\n#melkendorf-site-update .update-close:hover,#melkendorf-site-update .update-close:focus-visible{background:#f0f5eb}\n@media(max-width:600px){#melkendorf-site-update{right:12px;bottom:max(12px,env(safe-area-inset-bottom));width:calc(100% - 24px);padding:19px 19px 18px}#melkendorf-site-update h2{font-size:1.11rem}#melkendorf-site-update p{font-size:.9rem}}\n@media(prefers-reduced-motion:reduce){#melkendorf-site-update{transition:none;transform:none}}";
  document.head.appendChild(style);
  const panel = document.createElement('aside');
  panel.id = 'melkendorf-site-update';
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-labelledby', 'melkendorf-site-update-title');
  panel.innerHTML =
    '<button class="update-close" type="button" aria-label="Neuigkeiten-Hinweis schließen" title="Schließen">×</button>' +
    '<div class="update-kicker">Neu auf unserer Jubiläumswebsite</div>' +
    '<h2 id="melkendorf-site-update-title">Unser Dorfarchiv hat ein Update!</h2>' +
    '<p>Fotos, Dokumente und Erinnerungen an Melkendorf können jetzt über das überarbeitete Formular eingereicht werden. Auch für größere Dateien gibt es einen passenden Weg.</p>' +
    '<a class="update-link" href="/dorfarchiv.html">Dorfarchiv entdecken →</a>' +
    '<div class="update-social">Aktuelles auch auf <a href="https://www.instagram.com/melkendorffeiert/" target="_blank" rel="noopener noreferrer">Instagram</a> und <a href="https://www.facebook.com/share/1CT2fnmQJu/" target="_blank" rel="noopener noreferrer">Facebook</a>.</div>';
  document.body.appendChild(panel);
  panel.querySelector('.update-close').addEventListener('click', () => panel.remove());
  window.requestAnimationFrame(() => panel.classList.add('is-visible'));
  try {
    window.localStorage.setItem(STORAGE_KEY, 'seen');
  } catch (_) {}
})();