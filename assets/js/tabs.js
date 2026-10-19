(function () {
  var list = document.querySelector('.tabs[role="tablist"]');
  if (!list) return;
  var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
  var picks = document.getElementById('panel-picks');
  picks.setAttribute('role', 'tabpanel');
  picks.setAttribute('tabindex', '0');
  list.hidden = false;

  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  function fromHash() {
    var h = location.hash.slice(1);
    if (h === 'rich') { location.replace('rich.html'); return; }
    var t = tabs.filter(function (x) { return x.dataset.hash === h; })[0];
    if (t) {
      select(t);
      document.getElementById('rotation').scrollIntoView();
    }
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      history.replaceState(null, '', '#' + t.dataset.hash);
    });
    t.addEventListener('keydown', function (e) {
      var j = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (j === undefined) return;
      e.preventDefault();
      var next = tabs[(j + tabs.length) % tabs.length];
      select(next, true);
      history.replaceState(null, '', '#' + next.dataset.hash);
    });
  });
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
