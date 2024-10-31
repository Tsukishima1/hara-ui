!(function () {
  var ce = Object.defineProperty,
    se = Object.defineProperties;
  var ue = Object.getOwnPropertyDescriptors;
  var _ = Object.getOwnPropertySymbols;
  var k = Object.prototype.hasOwnProperty,
    Z = Object.prototype.propertyIsEnumerable;
  var V = (r, a, e) =>
      a in r
        ? ce(r, a, { enumerable: !0, configurable: !0, writable: !0, value: e })
        : (r[a] = e),
    T = (r, a) => {
      for (var e in a || (a = {})) k.call(a, e) && V(r, e, a[e]);
      if (_) for (var e of _(a)) Z.call(a, e) && V(r, e, a[e]);
      return r;
    },
    z = (r, a) => se(r, ue(a));
  var U = (r, a) => {
    var e = {};
    for (var n in r) k.call(r, n) && a.indexOf(n) < 0 && (e[n] = r[n]);
    if (r != null && _)
      for (var n of _(r)) a.indexOf(n) < 0 && Z.call(r, n) && (e[n] = r[n]);
    return e;
  };
  (self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
    [808],
    {
      56482: function (r, a, e) {
        'use strict';
        var n;
        e.r(a),
          e.d(a, {
            demos: function () {
              return L;
            },
          });
        var s = e(17061),
          d = e.n(s),
          h = e(17156),
          p = e.n(h),
          m = e(67294),
          y = e(32465),
          S = e(73505),
          L = {
            'input-demo-demo': {
              component: m.memo(
                m.lazy(function () {
                  return e.e(91).then(e.bind(e, 90118));
                }),
              ),
              asset: {
                type: 'BLOCK',
                id: 'input-demo-demo',
                refAtomIds: ['Input'],
                dependencies: {
                  'index.tsx': { type: 'FILE', value: e(77045).Z },
                  'hara-ui': { type: 'NPM', value: '0.0.4' },
                  react: { type: 'NPM', value: '18.3.1' },
                },
                entry: 'index.tsx',
                title: '\u8F93\u5165\u6846\u793A\u4F8B',
              },
              context: { 'hara-ui': S, react: n || (n = e.t(m, 2)) },
              renderOpts: {
                compile: (function () {
                  var N = p()(
                    d()().mark(function R() {
                      var g,
                        A = arguments;
                      return d()().wrap(function (I) {
                        for (;;)
                          switch ((I.prev = I.next)) {
                            case 0:
                              return (
                                (I.next = 2), e.e(19).then(e.bind(e, 4019))
                              );
                            case 2:
                              return I.abrupt(
                                'return',
                                (g = I.sent).default.apply(g, A),
                              );
                            case 3:
                            case 'end':
                              return I.stop();
                          }
                      }, R);
                    }),
                  );
                  function b() {
                    return N.apply(this, arguments);
                  }
                  return b;
                })(),
              },
            },
          };
      },
      73505: function (r, a, e) {
        'use strict';
        e.r(a),
          e.d(a, {
            Button: function () {
              return h;
            },
            Input: function () {
              return b;
            },
            Select: function () {
              return J;
            },
            SelectContent: function () {
              return X;
            },
            SelectItem: function () {
              return Y;
            },
            SelectTrigger: function () {
              return Q;
            },
            Tooltip: function () {
              return ee;
            },
          });
        var n = e(67294),
          s = e(85893),
          d = function (t) {
            var l = t.variant,
              o = l === void 0 ? 'primary' : l,
              c = t.children,
              u = t.style,
              v = t.onClick,
              f = t.className;
            return (0, s.jsx)('button', {
              type: 'button',
              className: 'hara-btn '
                .concat(o ? 'hara-btn-' + o : '', ' ')
                .concat(f !== void 0 ? f : ''),
              style: u,
              onClick: v,
              children: c,
            });
          },
          h = d,
          p = e(42122),
          m = e.n(p),
          y = e(70215),
          S = e.n(y),
          L = ['style', 'className'],
          N = function (t) {
            var l = t.style,
              o = t.className,
              c = S()(t, L);
            return (0, s.jsx)(
              'input',
              m()(
                {
                  className: 'hara-input '.concat(o !== void 0 ? o : ''),
                  style: l,
                },
                c,
              ),
            );
          },
          b = N,
          R = e(27424),
          g = e.n(R);
        const A = (i) => i.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
          B = (...i) =>
            i
              .filter((t, l, o) => !!t && t.trim() !== '' && o.indexOf(t) === l)
              .join(' ')
              .trim();
        var I = {
          xmlns: 'http://www.w3.org/2000/svg',
          width: 24,
          height: 24,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        };
        const G = (0, n.forwardRef)((E, C) => {
          var x = E,
            {
              color: i = 'currentColor',
              size: t = 24,
              strokeWidth: l = 2,
              absoluteStrokeWidth: o,
              className: c = '',
              children: u,
              iconNode: v,
            } = x,
            f = U(x, [
              'color',
              'size',
              'strokeWidth',
              'absoluteStrokeWidth',
              'className',
              'children',
              'iconNode',
            ]);
          return (0, n.createElement)(
            'svg',
            T(
              z(T({ ref: C }, I), {
                width: t,
                height: t,
                stroke: i,
                strokeWidth: o ? (Number(l) * 24) / Number(t) : l,
                className: B('lucide', c),
              }),
              f,
            ),
            [
              ...v.map(([j, O]) => (0, n.createElement)(j, O)),
              ...(Array.isArray(u) ? u : [u]),
            ],
          );
        });
        const w = (i, t) => {
          const l = (0, n.forwardRef)((v, u) => {
            var f = v,
              { className: o } = f,
              c = U(f, ['className']);
            return (0, n.createElement)(
              G,
              T({ ref: u, iconNode: t, className: B(`lucide-${A(i)}`, o) }, c),
            );
          });
          return (l.displayName = `${i}`), l;
        };
        const F = w('ChevronsUpDown', [
          ['path', { d: 'm7 15 5 5 5-5', key: '1hf1tw' }],
          ['path', { d: 'm7 9 5-5 5 5', key: 'sgt6xg' }],
        ]);
        const H = w('Check', [
          ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }],
        ]);
        var M = (0, n.createContext)(void 0),
          J = function (t) {
            var l = t.children,
              o = t.className,
              c = t.style,
              u = t.onChange,
              v = (0, n.useRef)(null),
              f = (0, n.useState)(!1),
              C = g()(f, 2),
              E = C[0],
              x = C[1],
              j = (0, n.useState)(),
              O = g()(j, 2),
              W = O[0],
              te = O[1],
              ne = (0, n.useState)(),
              $ = g()(ne, 2),
              re = $[0],
              ae = $[1],
              oe = function () {
                x(function (P) {
                  return !P;
                });
              },
              le = function (P, K) {
                te(P), ae(K), x(!1), u && u(P);
              };
            return (
              (0, n.useEffect)(function () {
                var D = function (K) {
                  v.current && !v.current.contains(K.target) && x(!1);
                };
                return (
                  document.addEventListener('mousedown', D),
                  function () {
                    document.removeEventListener('mousedown', D);
                  }
                );
              }, []),
              (0, s.jsx)(M.Provider, {
                value: {
                  isOpen: E,
                  toggleOpen: oe,
                  onSelect: le,
                  selectedValue: W,
                  selectedLabel: re,
                },
                children: (0, s.jsx)('div', {
                  ref: v,
                  className: 'hara-select '.concat(o !== void 0 ? o : ''),
                  style: c,
                  children: l,
                }),
              })
            );
          },
          Q = function (t) {
            var l = t.children,
              o = (0, n.useContext)(M),
              c = (0, n.useRef)(null),
              u = 'hara-select-trigger '.concat(
                o != null && o.isOpen ? 'focused' : '',
              );
            if (!o)
              throw new Error(
                'SelectTrigger \u5FC5\u987B\u5728 Select \u4E2D\u4F7F\u7528',
              );
            var v = function () {
              o.toggleOpen(), c.current && c.current.focus();
            };
            return (0, s.jsxs)('button', {
              type: 'button',
              className: u,
              onClick: v,
              ref: c,
              children: [
                o.selectedLabel || l,
                (0, s.jsx)(F, { size: 14, className: 'hara-select-chevrons' }),
              ],
            });
          },
          X = function (t) {
            var l = t.children,
              o = (0, n.useContext)(M);
            if (!o)
              throw new Error(
                'SelectContent \u5FC5\u987B\u5728 Select \u4E2D\u4F7F\u7528',
              );
            return o.isOpen
              ? (0, s.jsx)('div', {
                  className: 'hara-select-content',
                  children: l,
                })
              : null;
          },
          Y = function (t) {
            var l = t.value,
              o = t.children,
              c = (0, n.useContext)(M);
            if (!c)
              throw new Error(
                'SelectItem \u5FC5\u987B\u5728 Select \u4E2D\u4F7F\u7528',
              );
            var u = c.isOpen && c.selectedValue === l;
            return (0, s.jsxs)('div', {
              className: 'hara-select-item '.concat(u ? 'selected' : ''),
              onClick: function () {
                return c.onSelect(l, o);
              },
              children: [o, u && (0, s.jsx)(H, { size: 14 })],
            });
          },
          q = function (t) {
            var l = t.children,
              o = t.content,
              c = t.placement,
              u = c === void 0 ? 'top' : c,
              v = (0, n.useState)(!1),
              f = g()(v, 2),
              C = f[0],
              E = f[1],
              x = function () {
                return E(!0);
              },
              j = function () {
                return E(!1);
              },
              O = 'hara-tooltip-'.concat(u);
            return (0, s.jsxs)('div', {
              className: 'hara-tooltip-wrapper',
              onMouseEnter: x,
              onMouseLeave: j,
              children: [
                l,
                C &&
                  (0, s.jsx)('div', {
                    className: 'hara-tooltip '.concat(O),
                    children: o,
                  }),
              ],
            });
          },
          ee = q;
      },
      54047: function (r, a, e) {
        'use strict';
        e.r(a),
          e.d(a, {
            texts: function () {
              return s;
            },
          });
        var n = e(32465);
        const s = [
          {
            value: '\u8BE5\u7EC4\u4EF6\u5C01\u88C5\u4E86\u539F\u751F\u7684',
            paraId: 0,
            tocIndex: 0,
          },
          { value: 'input', paraId: 0, tocIndex: 0 },
          {
            value:
              '\u6807\u7B7E\uFF0C\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u6837\u5F0F\u548C\u529F\u80FD\u3002',
            paraId: 0,
            tocIndex: 0,
          },
          {
            value:
              '\u8F93\u5165\u6846\u7EC4\u4EF6\u7528\u4E8E\u63A5\u6536\u7528\u6237\u8F93\u5165\u7684\u6587\u672C\u4FE1\u606F\u3002',
            paraId: 1,
            tocIndex: 0,
          },
          {
            value: `import { Input } from 'hara-ui';
`,
            paraId: 2,
            tocIndex: 1,
          },
          { value: '\u53C2\u6570', paraId: 3, tocIndex: 4 },
          { value: '\u8BF4\u660E', paraId: 3, tocIndex: 4 },
          { value: '\u7C7B\u578B', paraId: 3, tocIndex: 4 },
          { value: '\u9ED8\u8BA4\u503C', paraId: 3, tocIndex: 4 },
          { value: 'style', paraId: 3, tocIndex: 4 },
          { value: '\u81EA\u5B9A\u4E49\u6837\u5F0F', paraId: 3, tocIndex: 4 },
          { value: 'React.CSSProperties', paraId: 3, tocIndex: 4 },
          { value: '-', paraId: 3, tocIndex: 4 },
          { value: 'className', paraId: 3, tocIndex: 4 },
          { value: '\u81EA\u5B9A\u4E49\u7C7B\u540D', paraId: 3, tocIndex: 4 },
          { value: 'string', paraId: 3, tocIndex: 4 },
          { value: '-', paraId: 3, tocIndex: 4 },
        ];
      },
      77045: function (r, a) {
        'use strict';
        a.Z = `import { Input } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" />
      <Input type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" />
      <Input type="file" />
      <Input disabled placeholder="\u88AB\u7981\u7528\u7684\u8F93\u5165\u6846" />
    </div>
  );
};
`;
      },
      70215: function (r, a, e) {
        var n = e(7071);
        function s(d, h) {
          if (d == null) return {};
          var p = n(d, h),
            m,
            y;
          if (Object.getOwnPropertySymbols) {
            var S = Object.getOwnPropertySymbols(d);
            for (y = 0; y < S.length; y++)
              (m = S[y]),
                !(h.indexOf(m) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(d, m) &&
                  (p[m] = d[m]);
          }
          return p;
        }
        (r.exports = s),
          (r.exports.__esModule = !0),
          (r.exports.default = r.exports);
      },
      7071: function (r) {
        function a(e, n) {
          if (e == null) return {};
          var s = {},
            d = Object.keys(e),
            h,
            p;
          for (p = 0; p < d.length; p++)
            (h = d[p]), !(n.indexOf(h) >= 0) && (s[h] = e[h]);
          return s;
        }
        (r.exports = a),
          (r.exports.__esModule = !0),
          (r.exports.default = r.exports);
      },
    },
  ]);
})();
