/* Swipeable shoe galleries plus old-hash redirects. No dependencies. */
(function () {
  var aliases = {
    picks: 'rotation',
    classics: 'rotation',
    inflation: 'rotation',
    owned: 'rotation',
    bifl: 'rotation',
    'slot-1': 'everyday',
    slot1: 'everyday',
    'slot-2': 'workout',
    slot2: 'workout',
    'slot-3': 'clean-white',
    slot3: 'clean-white',
    'slot-4': 'dress',
    slot4: 'dress',
    'slot-5': 'boot',
    slot5: 'boot',
    'slot-6': 'wildcard',
    slot6: 'wildcard'
  };
  var raw = (location.hash || '').replace(/^#/, '');
  if (aliases[raw]) {
    history.replaceState(null, '', '#' + aliases[raw]);
  }

  function initGallery(g) {
    var track = g.querySelector('.gallery-track');
    if (!track) return;
    var slides = track.children;
    var n = slides.length;
    var dots = g.querySelector('.gallery-dots');
    var prev = g.querySelector('.gallery-prev');
    var next = g.querySelector('.gallery-next');
    if (n <= 1) {
      g.classList.add('single');
      return;
    }
    var buttons = [];
    for (var i = 0; i < n; i++) {
      (function (i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Image ' + (i + 1) + ' of ' + n);
        if (i === 0) b.setAttribute('aria-current', 'true');
        b.addEventListener('click', function () { go(i); });
        dots.appendChild(b);
        buttons.push(b);
      })(i);
    }
    function index() {
      var w = track.clientWidth || 1;
      return Math.max(0, Math.min(n - 1, Math.round(track.scrollLeft / w)));
    }
    function go(i) {
      i = (i + n) % n;
      track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
    }
    function sync() {
      var i = index();
      for (var j = 0; j < buttons.length; j++) {
        if (j === i) buttons[j].setAttribute('aria-current', 'true');
        else buttons[j].removeAttribute('aria-current');
      }
    }
    track.addEventListener('scroll', sync, { passive: true });
    if (prev) prev.addEventListener('click', function () { go(index() - 1); });
    if (next) next.addEventListener('click', function () { go(index() + 1); });
    window.addEventListener('resize', function () {
      track.scrollTo({ left: index() * track.clientWidth });
    });
  }

  document.querySelectorAll('.gallery').forEach(initGallery);
})();
