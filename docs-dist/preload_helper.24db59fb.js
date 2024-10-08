!(function () {
  'use strict';
  var t = '/'.replace(/([^/])$/, '$1/'),
    e = location.pathname,
    n = e.startsWith(t) && decodeURI('/'.concat(e.slice(t.length)));
  if (n) {
    var a = document,
      c = a.head,
      r = a.createElement.bind(a),
      i = (function (t, e, n) {
        var a,
          c =
            e.r[t] ||
            (null ===
              (a = Object.entries(e.r).find(function (e) {
                var n = e[0];
                return new RegExp(
                  '^'.concat(
                    n.replace(/\/:[^/]+/g, '/[^/]+').replace('/*', '/.+'),
                    '$',
                  ),
                ).test(t);
              })) || void 0 === a
              ? void 0
              : a[1]);
        return null == c
          ? void 0
          : c.map(function (t) {
              var a = e.f[t][1],
                c = e.f[t][0];
              return {
                type: c.split('.').pop(),
                url: ''.concat(n.publicPath).concat(c),
                attrs: [['data-'.concat(e.b), ''.concat(e.p, ':').concat(a)]],
              };
            });
      })(
        n,
        {
          p: 'hara-ui',
          b: 'webpack',
          f: [
            [
              'nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css',
              9,
            ],
            ['nm__dumi__dist__client__pages__Demo__index.93915c33.async.js', 9],
            ['nm__dumi__dist__client__pages__404.09bb6124.async.js', 65],
            ['180.cf3152ca.chunk.css', 180],
            [
              'nm__dumi-theme-chakra__dist__layouts__DemoLayout__index.52a10d22.async.js',
              242,
            ],
            [
              'nm__dumi-theme-chakra__dist__layouts__GlobalLayout__index.161c9c89.chunk.css',
              359,
            ],
            ['427.6b31bd08.async.js', 427],
            ['Button__index.md.99743307.async.js', 544],
            ['Input__index.md.e2df86a5.async.js', 636],
            [
              'dumi__tmp-production__dumi__theme__ContextWrapper.52296411.async.js',
              923,
            ],
            ['docs__index.md.45eb4cd3.async.js', 935],
            ['docs__guide.md.a5aaf3f2.async.js', 937],
            [
              'nm__dumi-theme-chakra__dist__layouts__DocLayout__index.9a9fe7b9.async.js',
              958,
            ],
          ],
          r: {
            '/*': [2, 3, 12, 5, 6, 9],
            '/': [10, 3, 12, 5, 6, 9],
            '/guide': [11, 3, 12, 5, 6, 9],
            '/~demos/:id': [0, 1, 4, 5, 6, 9],
            '/components/button': [7, 3, 12, 5, 6, 9],
            '/components/input': [8, 3, 12, 5, 6, 9],
          },
        },
        { publicPath: '/' },
      );
    null == i ||
      i.forEach(function (t) {
        var e,
          n = t.type,
          a = t.url;
        if ('js' === n) ((e = r('script')).src = a), (e.async = !0);
        else {
          if ('css' !== n) return;
          ((e = r('link')).href = a), (e.rel = 'preload'), (e.as = 'style');
        }
        t.attrs.forEach(function (t) {
          e.setAttribute(t[0], t[1] || '');
        }),
          c.appendChild(e);
      });
  }
})();
