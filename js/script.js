// Finders In Germany — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Mark current page's nav link active
  var here = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here) a.classList.add('active');
  });

  // Persisted checklists: any <ul class="checklist" data-storage-key="...">
  document.querySelectorAll('.checklist[data-storage-key]').forEach(function (list) {
    var key = 'fig-' + list.getAttribute('data-storage-key');
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { saved = {}; }

    var boxes = list.querySelectorAll('input[type="checkbox"]');
    boxes.forEach(function (box) {
      if (saved[box.id]) box.checked = true;
      box.addEventListener('change', function () {
        saved[box.id] = box.checked;
        localStorage.setItem(key, JSON.stringify(saved));
        updateProgress(list);
      });
    });
    updateProgress(list);
  });

  function updateProgress(list) {
    var boxes = list.querySelectorAll('input[type="checkbox"]');
    var checked = list.querySelectorAll('input[type="checkbox"]:checked').length;
    var progressEl = document.querySelector('[data-progress-for="' + list.getAttribute('data-storage-key') + '"]');
    if (progressEl) {
      progressEl.textContent = checked + ' of ' + boxes.length + ' complete';
    }
  }

  // Contact form: no backend on GitHub Pages, so show a friendly inline confirmation
  var contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.querySelector('#form-note');
      if (note) {
        note.textContent = 'Thanks — this demo form doesn\'t send yet. Connect it to Formspree, Getform, or a mailto: link to go live.';
        note.style.display = 'block';
      }
    });
  }
});
