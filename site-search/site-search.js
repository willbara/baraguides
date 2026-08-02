/*
 * site-search · header search bar, shared across every page.
 * Matches service NAMES, canonical PILL text, and CATEGORY labels (never
 * prose or verdicts) and jumps to the service's card anchor. Ranking: name
 * matches, then pill matches, then category matches (broadest signal last).
 * Data comes from site-index.js (window.SITE_INDEX), generated
 * by site-search/build_index.py; load that script before this one.
 * All styling lives in style.css (loaded in <head>) so the field is styled on
 * first paint; this script only handles data and dropdown behavior.
 */
(function () {
  var box = document.querySelector('.site-search');
  var input = document.getElementById('site-search-input');
  var results = document.getElementById('site-search-results');
  var INDEX = window.SITE_INDEX;
  if (!box || !input || !results || !INDEX) return;

  // Site root, derived from this script's own src so it works at any page depth.
  var script = document.currentScript || document.querySelector('script[src*="site-search/site-search.js"]');
  var ROOT = script ? script.src.split('site-search/site-search.js')[0] : '';

  // Precomputed lowercase fields; pills joined so multi-word canonical tags
  // ("audited no-logs") match as typed.
  var prepared = INDEX.map(function (e) {
    return {
      entry: e,
      name: e.name.toLowerCase(),
      pills: (e.pills || []).join(' · ').toLowerCase(),
      category: (e.category || '').toLowerCase()
    };
  });

  function close() {
    results.hidden = true;
    results.innerHTML = '';
  }

  function render() {
    var q = input.value.trim().toLowerCase();
    if (!q) { close(); return; }

    // Name matches first (precise intent), then pill matches (browsing by
    // trait), then category matches (broadest signal); original index order
    // within each group.
    var byName = [], byPill = [], byCategory = [];
    prepared.forEach(function (p) {
      if (p.name.indexOf(q) !== -1) byName.push(p.entry);
      else if (p.pills.indexOf(q) !== -1) byPill.push(p.entry);
      else if (p.category.indexOf(q) !== -1) byCategory.push(p.entry);
    });
    var hits = byName.concat(byPill, byCategory);

    results.innerHTML = '';
    if (hits.length === 0) {
      var li = document.createElement('li');
      li.className = 'empty';
      li.textContent = 'no matching services';
      results.appendChild(li);
    } else {
      hits.forEach(function (e) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = ROOT + e.page + '#' + e.anchor;
        a.textContent = e.name + ' ';
        var cat = document.createElement('span');
        cat.className = 'cat';
        cat.textContent = e.category;
        a.appendChild(cat);
        a.addEventListener('click', close);
        li.appendChild(a);
        results.appendChild(li);
      });
    }
    results.hidden = false;
  }

  input.addEventListener('input', render);
  input.addEventListener('focus', render);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { close(); input.blur(); }
  });
  document.addEventListener('click', function (e) {
    if (!box.contains(e.target)) close();
  });
})();
