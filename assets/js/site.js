// Menu mobile, sous-menus et envoi du formulaire de contact. Aucun traceur.
(function () {
  var boutonMenu = document.querySelector('.entete__menu-bouton');
  var nav = document.getElementById('menu-principal');
  var deroulants = document.querySelectorAll('.nav__deroulant');

  function fermerSousMenus(sauf) {
    deroulants.forEach(function (b) { if (b !== sauf) b.setAttribute('aria-expanded', 'false'); });
  }

  if (boutonMenu && nav) {
    boutonMenu.addEventListener('click', function () {
      var ouvert = boutonMenu.getAttribute('aria-expanded') === 'true';
      boutonMenu.setAttribute('aria-expanded', String(!ouvert));
      nav.classList.toggle('est-ouvert', !ouvert);
    });
  }

  deroulants.forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var ouvert = b.getAttribute('aria-expanded') === 'true';
      fermerSousMenus(b);
      b.setAttribute('aria-expanded', String(!ouvert));
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav__item--parent')) fermerSousMenus();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var ouvert = document.querySelector('.nav__deroulant[aria-expanded="true"]');
    if (ouvert) { ouvert.setAttribute('aria-expanded', 'false'); ouvert.focus(); return; }
    if (nav && nav.classList.contains('est-ouvert')) { boutonMenu.click(); boutonMenu.focus(); }
  });

  // Formulaire Web3Forms : envoi sans quitter la page
  var form = document.querySelector('form.formulaire[action*="web3forms"]');
  if (form && window.fetch) {
    var statut = form.querySelector('.formulaire__statut');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bouton = form.querySelector('button[type="submit"]');
      bouton.disabled = true;
      statut.textContent = 'Envoi en cours…';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            statut.textContent = form.getAttribute('data-merci') || 'Message envoyé.';
          } else {
            statut.textContent = "Le message n'a pas pu être envoyé. Écrivez-nous directement à songo.education@gmail.com.";
          }
        })
        .catch(function () {
          statut.textContent = "Le message n'a pas pu être envoyé (connexion interrompue). Réessayez ou écrivez-nous à songo.education@gmail.com.";
        })
        .then(function () { bouton.disabled = false; });
    });
  }
})();

// ---------------------------------------------------------------
// Vidéo d'accueil : bouton pause, et vidéo figée si l'appareil
// demande moins d'animations.
// ---------------------------------------------------------------
(function () {
  var video = document.querySelector('.bandeau__video');
  var bouton = document.querySelector('.bandeau__pause');
  if (!video || !bouton) return;
  function etat(enPause) {
    bouton.setAttribute('aria-pressed', String(enPause));
    bouton.setAttribute('aria-label', enPause ? 'Lire la vidéo' : 'Mettre la vidéo en pause');
  }
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay'); video.pause(); etat(true);
  }
  bouton.addEventListener('click', function () {
    if (video.paused) { video.play(); etat(false); } else { video.pause(); etat(true); }
  });
})();

// ---------------------------------------------------------------
// Diaporama « Ils nous ont fait confiance »
// ---------------------------------------------------------------
document.querySelectorAll('[data-diaporama]').forEach(function (d) {
  var piste = d.querySelector('.diaporama__piste');
  var diapos = d.querySelectorAll('.diapo');
  var points = d.querySelectorAll('.diaporama__point');
  var lecture = d.querySelector('[data-lecture]');
  var intervalle = parseInt(d.getAttribute('data-intervalle'), 10) || 5000;
  var reduit = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var actif = !reduit, minuteur = null, courant = 0;

  function parPage() { return Math.max(1, Math.round(piste.clientWidth / diapos[0].getBoundingClientRect().width)); }
  function aller(i) {
    var max = Math.max(0, diapos.length - parPage());
    courant = i > max ? 0 : (i < 0 ? max : i);
    piste.scrollTo({ left: diapos[courant].offsetLeft - piste.offsetLeft, behavior: reduit ? 'auto' : 'smooth' });
    points.forEach(function (p, n) { p.setAttribute('aria-current', String(n === courant)); });
  }
  function demarrer() { arreter(); if (actif) minuteur = setInterval(function () { aller(courant + 1); }, intervalle); }
  function arreter() { if (minuteur) clearInterval(minuteur); minuteur = null; }

  d.querySelector('[data-precedent]').addEventListener('click', function () { aller(courant - 1); demarrer(); });
  d.querySelector('[data-suivant]').addEventListener('click', function () { aller(courant + 1); demarrer(); });
  points.forEach(function (p, n) { p.addEventListener('click', function () { aller(n); demarrer(); }); });
  lecture.addEventListener('click', function () {
    actif = !actif;
    lecture.setAttribute('aria-pressed', String(!actif));
    lecture.textContent = actif ? '❚❚' : '▶';
    lecture.setAttribute('aria-label', actif ? 'Arrêter le défilement automatique' : 'Reprendre le défilement automatique');
    demarrer();
  });
  d.addEventListener('mouseenter', arreter);
  d.addEventListener('mouseleave', demarrer);
  d.addEventListener('focusin', arreter);
  d.addEventListener('focusout', demarrer);
  piste.addEventListener('scroll', function () {
    var l = piste.scrollLeft, best = 0;
    diapos.forEach(function (s, n) { if (Math.abs(s.offsetLeft - piste.offsetLeft - l) < Math.abs(diapos[best].offsetLeft - piste.offsetLeft - l)) best = n; });
    courant = best;
    points.forEach(function (p, n) { p.setAttribute('aria-current', String(n === courant)); });
  }, { passive: true });
  if (lecture && reduit) { lecture.textContent = '▶'; lecture.setAttribute('aria-pressed', 'true'); }
  aller(0); demarrer();
});

// ---------------------------------------------------------------
// Agrandissement des photos au clic (articles, galeries, pages)
// ---------------------------------------------------------------
(function () {
  var images = Array.prototype.slice.call(document.querySelectorAll('.prose img, .galerie img, .valeur__image, .organigramme, .membre__photo, .projet__image, .article__couverture img'))
    .filter(function (img) { return !img.closest('a'); });
  if (!images.length || typeof HTMLDialogElement === 'undefined') return;

  var dlg = document.createElement('dialog');
  dlg.className = 'visionneuse';
  dlg.setAttribute('aria-label', 'Photo agrandie');
  dlg.innerHTML = '<div class="visionneuse__cadre"><img alt=""><p class="visionneuse__legende"></p></div>' +
    '<button type="button" class="visionneuse__bouton visionneuse__fermer" aria-label="Fermer">×</button>' +
    '<button type="button" class="visionneuse__bouton visionneuse__prec" aria-label="Photo précédente">‹</button>' +
    '<button type="button" class="visionneuse__bouton visionneuse__suiv" aria-label="Photo suivante">›</button>';
  document.body.appendChild(dlg);
  var grande = dlg.querySelector('img'), legende = dlg.querySelector('.visionneuse__legende'), courant = 0, declencheur = null;

  function afficher(i) {
    courant = (i + images.length) % images.length;
    var src = images[courant];
    grande.src = src.currentSrc || src.src;
    grande.alt = src.alt;
    legende.textContent = src.alt || '';
    var plusieurs = images.length > 1;
    dlg.querySelector('.visionneuse__prec').hidden = !plusieurs;
    dlg.querySelector('.visionneuse__suiv').hidden = !plusieurs;
  }
  images.forEach(function (img, i) {
    img.classList.add('agrandissable');
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Agrandir la photo' + (img.alt ? ' : ' + img.alt : ''));
    function ouvrir() { declencheur = img; afficher(i); dlg.showModal(); }
    img.addEventListener('click', ouvrir);
    img.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ouvrir(); } });
  });
  dlg.querySelector('.visionneuse__fermer').addEventListener('click', function () { dlg.close(); });
  dlg.querySelector('.visionneuse__prec').addEventListener('click', function () { afficher(courant - 1); });
  dlg.querySelector('.visionneuse__suiv').addEventListener('click', function () { afficher(courant + 1); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.classList.contains('visionneuse__cadre')) dlg.close(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') afficher(courant - 1);
    if (e.key === 'ArrowRight') afficher(courant + 1);
  });
  dlg.addEventListener('close', function () { if (declencheur) declencheur.focus(); });
})();
