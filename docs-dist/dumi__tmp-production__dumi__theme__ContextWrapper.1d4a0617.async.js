'use strict';
(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [923],
  {
    26520: function (P, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return j;
          },
        });
      var g = e(27424),
        y = e.n(g),
        a = e(67294),
        r = e(4681),
        C = e(38024),
        x = e(64236),
        o = null,
        s = e(90482),
        T = e(85893),
        u = {},
        l = {
          name: 'hara-ui',
          description: 'A react library developed with dumi',
          version: '0.0.4',
          license: 'MIT',
          authors: ['https://github.com/Tsukishima1'],
        },
        i = 'browser',
        d = void 0,
        m = {
          footer:
            'Copyright \xA9 2024 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
          prefersColor: { default: 'light', switch: !0 },
          nprogress: !0,
          lastUpdated: !0,
          name: 'Hara-UI',
          thumbBackground: !1,
        },
        v = !0;
      function j() {
        var E = (0, r.pC)(),
          A = (0, a.useState)(!1),
          c = y()(A, 2),
          f = c[0],
          h = c[1],
          p = (0, a.useRef)(r.m8.location.pathname);
        (0, a.useEffect)(function () {
          return r.m8.listen(function (t) {
            t.location.pathname !== p.current &&
              ((p.current = t.location.pathname),
              document.documentElement.scrollTo(0, 0));
          });
        }, []);
        var D = a.useMemo(
          function () {
            var t = {
              pkg: l,
              historyType: i,
              entryExports: u,
              demos: null,
              components: o,
              locales: s.k,
              loading: f,
              setLoading: h,
              hostname: d,
              themeConfig: m,
              _2_level_nav_available: v,
            };
            return (
              Object.defineProperty(t, 'demos', {
                get: function () {
                  return (
                    (0, C.Kp)(
                      !1,
                      '`demos` return empty in latest version, please use `useDemo` instead.',
                    ),
                    {}
                  );
                },
              }),
              t
            );
          },
          [l, i, u, o, s.k, f, h, d, m, v],
        );
        return (0, T.jsx)(x.D.Provider, { value: D, children: E });
      }
    },
  },
]);
