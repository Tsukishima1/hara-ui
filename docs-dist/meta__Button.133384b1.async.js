!(function () {
  var ce = Object.defineProperty,
    ue = Object.defineProperties;
  var se = Object.getOwnPropertyDescriptors;
  var _ = Object.getOwnPropertySymbols;
  var V = Object.prototype.hasOwnProperty,
    Z = Object.prototype.propertyIsEnumerable;
  var $ = (a, r, e) =>
      r in a
        ? ce(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e })
        : (a[r] = e),
    D = (a, r) => {
      for (var e in r || (r = {})) V.call(r, e) && $(a, e, r[e]);
      if (_) for (var e of _(r)) Z.call(r, e) && $(a, e, r[e]);
      return a;
    },
    z = (a, r) => ue(a, se(r));
  var U = (a, r) => {
    var e = {};
    for (var n in a) V.call(a, n) && r.indexOf(n) < 0 && (e[n] = a[n]);
    if (a != null && _)
      for (var n of _(a)) r.indexOf(n) < 0 && Z.call(a, n) && (e[n] = a[n]);
    return e;
  };
  (self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
    [461],
    {
      14361: function (a, r, e) {
        'use strict';
        var n;
        e.r(r),
          e.d(r, {
            demos: function () {
              return T;
            },
          });
        var u = e(17061),
          d = e.n(u),
          h = e(17156),
          p = e.n(h),
          m = e(67294),
          y = e(4497),
          C = e(73505),
          T = {
            'button-demo-base': {
              component: m.memo(
                m.lazy(function () {
                  return e.e(570).then(e.bind(e, 59363));
                }),
              ),
              asset: {
                type: 'BLOCK',
                id: 'button-demo-base',
                refAtomIds: ['Button'],
                dependencies: {
                  'index.tsx': { type: 'FILE', value: e(40565).Z },
                  'hara-ui': { type: 'NPM', value: '0.0.4' },
                  react: { type: 'NPM', value: '18.3.1' },
                },
                entry: 'index.tsx',
                title: '\u6309\u94AE\u793A\u4F8B',
              },
              context: { 'hara-ui': C, react: n || (n = e.t(m, 2)) },
              renderOpts: {
                compile: (function () {
                  var L = p()(
                    d()().mark(function N() {
                      var g,
                        R = arguments;
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
                                (g = I.sent).default.apply(g, R),
                              );
                            case 3:
                            case 'end':
                              return I.stop();
                          }
                      }, N);
                    }),
                  );
                  function b() {
                    return L.apply(this, arguments);
                  }
                  return b;
                })(),
              },
            },
          };
      },
      73505: function (a, r, e) {
        'use strict';
        e.r(r),
          e.d(r, {
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
          u = e(85893),
          d = function (t) {
            var l = t.variant,
              o = l === void 0 ? 'primary' : l,
              c = t.children,
              s = t.style,
              v = t.onClick,
              f = t.className;
            return (0, u.jsx)('button', {
              type: 'button',
              className: 'hara-btn '
                .concat(o ? 'hara-btn-' + o : '', ' ')
                .concat(f !== void 0 ? f : ''),
              style: s,
              onClick: v,
              children: c,
            });
          },
          h = d,
          p = e(42122),
          m = e.n(p),
          y = e(70215),
          C = e.n(y),
          T = ['style', 'className'],
          L = function (t) {
            var l = t.style,
              o = t.className,
              c = C()(t, T);
            return (0, u.jsx)(
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
          b = L,
          N = e(27424),
          g = e.n(N);
        const R = (i) => i.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
          A = (...i) =>
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
        const G = (0, n.forwardRef)((O, S) => {
          var x = O,
            {
              color: i = 'currentColor',
              size: t = 24,
              strokeWidth: l = 2,
              absoluteStrokeWidth: o,
              className: c = '',
              children: s,
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
            D(
              z(D({ ref: S }, I), {
                width: t,
                height: t,
                stroke: i,
                strokeWidth: o ? (Number(l) * 24) / Number(t) : l,
                className: A('lucide', c),
              }),
              f,
            ),
            [
              ...v.map(([j, E]) => (0, n.createElement)(j, E)),
              ...(Array.isArray(s) ? s : [s]),
            ],
          );
        });
        const w = (i, t) => {
          const l = (0, n.forwardRef)((v, s) => {
            var f = v,
              { className: o } = f,
              c = U(f, ['className']);
            return (0, n.createElement)(
              G,
              D({ ref: s, iconNode: t, className: A(`lucide-${R(i)}`, o) }, c),
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
              s = t.onChange,
              v = (0, n.useRef)(null),
              f = (0, n.useState)(!1),
              S = g()(f, 2),
              O = S[0],
              x = S[1],
              j = (0, n.useState)(),
              E = g()(j, 2),
              W = E[0],
              te = E[1],
              ne = (0, n.useState)(),
              k = g()(ne, 2),
              ae = k[0],
              re = k[1],
              oe = function () {
                x(function (P) {
                  return !P;
                });
              },
              le = function (P, K) {
                te(P), re(K), x(!1), s && s(P);
              };
            return (
              (0, n.useEffect)(function () {
                var B = function (K) {
                  v.current && !v.current.contains(K.target) && x(!1);
                };
                return (
                  document.addEventListener('mousedown', B),
                  function () {
                    document.removeEventListener('mousedown', B);
                  }
                );
              }, []),
              (0, u.jsx)(M.Provider, {
                value: {
                  isOpen: O,
                  toggleOpen: oe,
                  onSelect: le,
                  selectedValue: W,
                  selectedLabel: ae,
                },
                children: (0, u.jsx)('div', {
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
              s = 'hara-select-trigger '.concat(
                o != null && o.isOpen ? 'focused' : '',
              );
            if (!o)
              throw new Error(
                'SelectTrigger \u5FC5\u987B\u5728 Select \u4E2D\u4F7F\u7528',
              );
            var v = function () {
              o.toggleOpen(), c.current && c.current.focus();
            };
            return (0, u.jsxs)('button', {
              type: 'button',
              className: s,
              onClick: v,
              ref: c,
              children: [
                o.selectedLabel || l,
                (0, u.jsx)(F, { size: 14, className: 'hara-select-chevrons' }),
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
              ? (0, u.jsx)('div', {
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
            var s = c.isOpen && c.selectedValue === l;
            return (0, u.jsxs)('div', {
              className: 'hara-select-item '.concat(s ? 'selected' : ''),
              onClick: function () {
                return c.onSelect(l, o);
              },
              children: [o, s && (0, u.jsx)(H, { size: 14 })],
            });
          },
          q = function (t) {
            var l = t.children,
              o = t.content,
              c = t.placement,
              s = c === void 0 ? 'top' : c,
              v = (0, n.useState)(!1),
              f = g()(v, 2),
              S = f[0],
              O = f[1],
              x = function () {
                return O(!0);
              },
              j = function () {
                return O(!1);
              },
              E = 'hara-tooltip-'.concat(s);
            return (0, u.jsxs)('div', {
              className: 'hara-tooltip-wrapper',
              onMouseEnter: x,
              onMouseLeave: j,
              children: [
                l,
                S &&
                  (0, u.jsx)('div', {
                    className: 'hara-tooltip '.concat(E),
                    children: o,
                  }),
              ],
            });
          },
          ee = q;
      },
      73120: function (a, r, e) {
        'use strict';
        e.r(r),
          e.d(r, {
            texts: function () {
              return u;
            },
          });
        var n = e(4497);
        const u = [
          {
            value:
              '\u6309\u94AE\u7EC4\u4EF6\u7528\u4E8E\u89E6\u53D1\u4E00\u4E2A\u52A8\u4F5C\u6216\u4E8B\u4EF6\uFF0C\u5982\u63D0\u4EA4\u4E00\u4E2A\u8868\u5355\u3001\u6253\u5F00\u4E00\u4E2A\u5BF9\u8BDD\u6846\u3001\u53D6\u6D88\u4E00\u4E2A\u52A8\u4F5C\u6216\u6267\u884C\u4E00\u4E2A\u5220\u9664\u64CD\u4F5C\u3002',
            paraId: 0,
            tocIndex: 0,
          },
          {
            value: `import { Button } from 'hara-ui';
`,
            paraId: 1,
            tocIndex: 1,
          },
          { value: '\u53C2\u6570', paraId: 2, tocIndex: 4 },
          { value: '\u8BF4\u660E', paraId: 2, tocIndex: 4 },
          { value: '\u7C7B\u578B', paraId: 2, tocIndex: 4 },
          { value: '\u9ED8\u8BA4\u503C', paraId: 2, tocIndex: 4 },
          { value: 'type', paraId: 2, tocIndex: 4 },
          { value: '\u6309\u94AE\u7C7B\u578B', paraId: 2, tocIndex: 4 },
          { value: '"primary" | "default"', paraId: 2, tocIndex: 4 },
          { value: 'default', paraId: 2, tocIndex: 4 },
          { value: 'style', paraId: 2, tocIndex: 4 },
          { value: '\u81EA\u5B9A\u4E49\u6837\u5F0F', paraId: 2, tocIndex: 4 },
          { value: 'React.CSSProperties', paraId: 2, tocIndex: 4 },
          { value: '-', paraId: 2, tocIndex: 4 },
          { value: 'className', paraId: 2, tocIndex: 4 },
          { value: '\u81EA\u5B9A\u4E49\u7C7B\u540D', paraId: 2, tocIndex: 4 },
          { value: 'string', paraId: 2, tocIndex: 4 },
          { value: '-', paraId: 2, tocIndex: 4 },
          { value: 'onClick', paraId: 2, tocIndex: 4 },
          { value: '\u70B9\u51FB\u4E8B\u4EF6', paraId: 2, tocIndex: 4 },
          {
            value: '(event: React.MouseEvent<HTMLButtonElement>) => void;',
            paraId: 2,
            tocIndex: 4,
          },
          { value: '-', paraId: 2, tocIndex: 4 },
        ];
      },
      40565: function (a, r) {
        'use strict';
        r.Z = `import { Button } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <Button variant="primary">\u9ED8\u8BA4\u6309\u94AE</Button>
      <Button variant="ghost">\u5E7D\u7075\u6309\u94AE</Button>
      <Button style={{ color: 'skyblue', backgroundColor: 'whitesmoke' }}>
        \u81EA\u5B9A\u4E49\u6837\u5F0F
      </Button>
      <Button onClick={() => alert('\u70B9\u51FB\u4E8B\u4EF6')}>\u70B9\u51FB\u4E8B\u4EF6</Button>
    </div>
  );
};
`;
      },
      70215: function (a, r, e) {
        var n = e(7071);
        function u(d, h) {
          if (d == null) return {};
          var p = n(d, h),
            m,
            y;
          if (Object.getOwnPropertySymbols) {
            var C = Object.getOwnPropertySymbols(d);
            for (y = 0; y < C.length; y++)
              (m = C[y]),
                !(h.indexOf(m) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(d, m) &&
                  (p[m] = d[m]);
          }
          return p;
        }
        (a.exports = u),
          (a.exports.__esModule = !0),
          (a.exports.default = a.exports);
      },
      7071: function (a) {
        function r(e, n) {
          if (e == null) return {};
          var u = {},
            d = Object.keys(e),
            h,
            p;
          for (p = 0; p < d.length; p++)
            (h = d[p]), !(n.indexOf(h) >= 0) && (u[h] = e[h]);
          return u;
        }
        (a.exports = r),
          (a.exports.__esModule = !0),
          (a.exports.default = a.exports);
      },
    },
  ]);
})();
