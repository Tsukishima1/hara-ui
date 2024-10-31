!(function () {
  var ce = Object.defineProperty,
    se = Object.defineProperties;
  var ie = Object.getOwnPropertyDescriptors;
  var M = Object.getOwnPropertySymbols;
  var V = Object.prototype.hasOwnProperty,
    Z = Object.prototype.propertyIsEnumerable;
  var $ = (r, a, e) =>
      a in r
        ? ce(r, a, { enumerable: !0, configurable: !0, writable: !0, value: e })
        : (r[a] = e),
    _ = (r, a) => {
      for (var e in a || (a = {})) V.call(a, e) && $(r, e, a[e]);
      if (M) for (var e of M(a)) Z.call(a, e) && $(r, e, a[e]);
      return r;
    },
    z = (r, a) => se(r, ie(a));
  var w = (r, a) => {
    var e = {};
    for (var n in r) V.call(r, n) && a.indexOf(n) < 0 && (e[n] = r[n]);
    if (r != null && M)
      for (var n of M(r)) a.indexOf(n) < 0 && Z.call(r, n) && (e[n] = r[n]);
    return e;
  };
  (self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
    [210],
    {
      21456: function (r, a, e) {
        'use strict';
        var n;
        e.r(a),
          e.d(a, {
            demos: function () {
              return D;
            },
          });
        var s = e(17061),
          d = e.n(s),
          h = e(17156),
          p = e.n(h),
          m = e(67294),
          x = e(27307),
          C = e(73505),
          D = {
            'tooltip-demo-base': {
              component: m.memo(
                m.lazy(function () {
                  return e.e(31).then(e.bind(e, 2243));
                }),
              ),
              asset: {
                type: 'BLOCK',
                id: 'tooltip-demo-base',
                refAtomIds: ['Tooltip'],
                dependencies: {
                  'index.tsx': { type: 'FILE', value: e(20289).Z },
                  'hara-ui': { type: 'NPM', value: '0.0.4' },
                  react: { type: 'NPM', value: '18.3.1' },
                },
                entry: 'index.tsx',
                title: 'Tooltip \u793A\u4F8B',
              },
              context: { 'hara-ui': C, react: n || (n = e.t(m, 2)) },
              renderOpts: {
                compile: (function () {
                  var B = p()(
                    d()().mark(function N() {
                      var I,
                        R = arguments;
                      return d()().wrap(function (y) {
                        for (;;)
                          switch ((y.prev = y.next)) {
                            case 0:
                              return (
                                (y.next = 2), e.e(19).then(e.bind(e, 4019))
                              );
                            case 2:
                              return y.abrupt(
                                'return',
                                (I = y.sent).default.apply(I, R),
                              );
                            case 3:
                            case 'end':
                              return y.stop();
                          }
                      }, N);
                    }),
                  );
                  function L() {
                    return B.apply(this, arguments);
                  }
                  return L;
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
              return L;
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
              i = t.style,
              v = t.onClick,
              f = t.className;
            return (0, s.jsx)('button', {
              type: 'button',
              className: 'hara-btn '
                .concat(o ? 'hara-btn-' + o : '', ' ')
                .concat(f !== void 0 ? f : ''),
              style: i,
              onClick: v,
              children: c,
            });
          },
          h = d,
          p = e(42122),
          m = e.n(p),
          x = e(70215),
          C = e.n(x),
          D = ['style', 'className'],
          B = function (t) {
            var l = t.style,
              o = t.className,
              c = C()(t, D);
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
          L = B,
          N = e(27424),
          I = e.n(N);
        const R = (u) => u.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
          A = (...u) =>
            u
              .filter((t, l, o) => !!t && t.trim() !== '' && o.indexOf(t) === l)
              .join(' ')
              .trim();
        var y = {
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
        const G = (0, n.forwardRef)((E, S) => {
          var g = E,
            {
              color: u = 'currentColor',
              size: t = 24,
              strokeWidth: l = 2,
              absoluteStrokeWidth: o,
              className: c = '',
              children: i,
              iconNode: v,
            } = g,
            f = w(g, [
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
            _(
              z(_({ ref: S }, y), {
                width: t,
                height: t,
                stroke: u,
                strokeWidth: o ? (Number(l) * 24) / Number(t) : l,
                className: A('lucide', c),
              }),
              f,
            ),
            [
              ...v.map(([T, O]) => (0, n.createElement)(T, O)),
              ...(Array.isArray(i) ? i : [i]),
            ],
          );
        });
        const K = (u, t) => {
          const l = (0, n.forwardRef)((v, i) => {
            var f = v,
              { className: o } = f,
              c = w(f, ['className']);
            return (0, n.createElement)(
              G,
              _({ ref: i, iconNode: t, className: A(`lucide-${R(u)}`, o) }, c),
            );
          });
          return (l.displayName = `${u}`), l;
        };
        const F = K('ChevronsUpDown', [
          ['path', { d: 'm7 15 5 5 5-5', key: '1hf1tw' }],
          ['path', { d: 'm7 9 5-5 5 5', key: 'sgt6xg' }],
        ]);
        const H = K('Check', [
          ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }],
        ]);
        var P = (0, n.createContext)(void 0),
          J = function (t) {
            var l = t.children,
              o = t.className,
              c = t.style,
              i = t.onChange,
              v = (0, n.useRef)(null),
              f = (0, n.useState)(!1),
              S = I()(f, 2),
              E = S[0],
              g = S[1],
              T = (0, n.useState)(),
              O = I()(T, 2),
              k = O[0],
              te = O[1],
              ne = (0, n.useState)(),
              U = I()(ne, 2),
              re = U[0],
              ae = U[1],
              oe = function () {
                g(function (j) {
                  return !j;
                });
              },
              le = function (j, W) {
                te(j), ae(W), g(!1), i && i(j);
              };
            return (
              (0, n.useEffect)(function () {
                var b = function (W) {
                  v.current && !v.current.contains(W.target) && g(!1);
                };
                return (
                  document.addEventListener('mousedown', b),
                  function () {
                    document.removeEventListener('mousedown', b);
                  }
                );
              }, []),
              (0, s.jsx)(P.Provider, {
                value: {
                  isOpen: E,
                  toggleOpen: oe,
                  onSelect: le,
                  selectedValue: k,
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
              o = (0, n.useContext)(P),
              c = (0, n.useRef)(null),
              i = 'hara-select-trigger '.concat(
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
              className: i,
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
              o = (0, n.useContext)(P);
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
              c = (0, n.useContext)(P);
            if (!c)
              throw new Error(
                'SelectItem \u5FC5\u987B\u5728 Select \u4E2D\u4F7F\u7528',
              );
            var i = c.isOpen && c.selectedValue === l;
            return (0, s.jsxs)('div', {
              className: 'hara-select-item '.concat(i ? 'selected' : ''),
              onClick: function () {
                return c.onSelect(l, o);
              },
              children: [o, i && (0, s.jsx)(H, { size: 14 })],
            });
          },
          q = function (t) {
            var l = t.children,
              o = t.content,
              c = t.placement,
              i = c === void 0 ? 'top' : c,
              v = (0, n.useState)(!1),
              f = I()(v, 2),
              S = f[0],
              E = f[1],
              g = function () {
                return E(!0);
              },
              T = function () {
                return E(!1);
              },
              O = 'hara-tooltip-'.concat(i);
            return (0, s.jsxs)('div', {
              className: 'hara-tooltip-wrapper',
              onMouseEnter: g,
              onMouseLeave: T,
              children: [
                l,
                S &&
                  (0, s.jsx)('div', {
                    className: 'hara-tooltip '.concat(O),
                    children: o,
                  }),
              ],
            });
          },
          ee = q;
      },
      27293: function (r, a, e) {
        'use strict';
        e.r(a),
          e.d(a, {
            texts: function () {
              return s;
            },
          });
        var n = e(27307);
        const s = [
          {
            value:
              '\u6587\u5B57\u63D0\u793A\u7EC4\u4EF6\u7528\u4E8E\u5728\u9F20\u6807\u60AC\u505C\u65F6\u663E\u793A\u63D0\u793A\u4FE1\u606F\u3002\u7528\u53CC\u6807\u7B7E\u5305\u88F9\u9700\u8981\u63D0\u793A\u7684\u5185\u5BB9\uFF0C\u901A\u8FC7 ',
            paraId: 0,
            tocIndex: 0,
          },
          { value: 'content', paraId: 0, tocIndex: 0 },
          {
            value: ' \u5C5E\u6027\u8BBE\u7F6E\u63D0\u793A\u6587\u5B57\u3002',
            paraId: 0,
            tocIndex: 0,
          },
          {
            value: `import { Tooltip } from 'hara-ui';
`,
            paraId: 1,
            tocIndex: 1,
          },
          { value: '\u53C2\u6570', paraId: 2, tocIndex: 4 },
          { value: '\u8BF4\u660E', paraId: 2, tocIndex: 4 },
          { value: '\u7C7B\u578B', paraId: 2, tocIndex: 4 },
          { value: '\u9ED8\u8BA4\u503C', paraId: 2, tocIndex: 4 },
          { value: 'content', paraId: 2, tocIndex: 4 },
          { value: '\u63D0\u793A\u6587\u5B57', paraId: 2, tocIndex: 4 },
          { value: 'string', paraId: 2, tocIndex: 4 },
          { value: '-', paraId: 2, tocIndex: 4 },
          { value: 'placement', paraId: 2, tocIndex: 4 },
          { value: '\u663E\u793A\u4F4D\u7F6E', paraId: 2, tocIndex: 4 },
          { value: 'string', paraId: 2, tocIndex: 4 },
          {
            value: '"top" | "bottom" | "left" | "right"',
            paraId: 2,
            tocIndex: 4,
          },
        ];
      },
      20289: function (r, a) {
        'use strict';
        a.Z = `import { Button, Tooltip } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      <Tooltip content="\u63D0\u793A\u6587\u672C" placement="top">
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>
          top
        </Button>
      </Tooltip>
      <Tooltip content="\u63D0\u793A\u6587\u672C" placement="bottom">
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>
          bottom
        </Button>
      </Tooltip>
      <Tooltip content="\u63D0\u793A\u6587\u672C" placement="left">
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>
          left
        </Button>
      </Tooltip>
      <Tooltip content="\u63D0\u793A\u6587\u672C" placement="right">
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>
          right
        </Button>
      </Tooltip>
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
            x;
          if (Object.getOwnPropertySymbols) {
            var C = Object.getOwnPropertySymbols(d);
            for (x = 0; x < C.length; x++)
              (m = C[x]),
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
