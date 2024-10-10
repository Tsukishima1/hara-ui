(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [808],
  {
    56482: function (e, n, t) {
      'use strict';
      var i;
      t.r(n),
        t.d(n, {
          demos: function () {
            return y;
          },
        });
      var a = t(17061),
        r = t.n(a),
        u = t(17156),
        l = t.n(u),
        s = t(67294),
        c = t(32465),
        v = t(86757),
        y = {
          'input-demo-demo': {
            component: s.memo(
              s.lazy(function () {
                return t.e(91).then(t.bind(t, 90118));
              }),
            ),
            asset: {
              type: 'BLOCK',
              id: 'input-demo-demo',
              refAtomIds: ['Input'],
              dependencies: {
                'index.tsx': { type: 'FILE', value: t(77045).Z },
                'hara-ui': { type: 'NPM', value: '0.0.4' },
                react: { type: 'NPM', value: '18.3.1' },
              },
              entry: 'index.tsx',
              title: '\u8F93\u5165\u6846\u793A\u4F8B',
            },
            context: { 'hara-ui': v, react: i || (i = t.t(s, 2)) },
            renderOpts: {
              compile: (function () {
                var x = l()(
                  r()().mark(function E() {
                    var m,
                      M = arguments;
                    return r()().wrap(function (d) {
                      for (;;)
                        switch ((d.prev = d.next)) {
                          case 0:
                            return (d.next = 2), t.e(19).then(t.bind(t, 4019));
                          case 2:
                            return d.abrupt(
                              'return',
                              (m = d.sent).default.apply(m, M),
                            );
                          case 3:
                          case 'end':
                            return d.stop();
                        }
                    }, E);
                  }),
                );
                function P() {
                  return x.apply(this, arguments);
                }
                return P;
              })(),
            },
          },
        };
    },
    86757: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          Button: function () {
            return u;
          },
          Input: function () {
            return P;
          },
          Tooltip: function () {
            return D;
          },
        });
      var i = t(67294),
        a = t(85893),
        r = function (o) {
          var I = o.variant,
            p = I === void 0 ? 'primary' : I,
            f = o.children,
            O = o.style,
            j = o.onClick,
            h = o.className;
          return (0, a.jsx)('button', {
            type: 'button',
            className: 'hara-btn '
              .concat(p ? 'hara-btn-' + p : '', ' ')
              .concat(h !== void 0 ? h : ''),
            style: O,
            onClick: j,
            children: f,
          });
        },
        u = r,
        l = t(42122),
        s = t.n(l),
        c = t(70215),
        v = t.n(c),
        y = ['style', 'className'],
        x = function (o) {
          var I = o.style,
            p = o.className,
            f = v()(o, y);
          return (0, a.jsx)(
            'input',
            s()(
              {
                className: 'hara-input '.concat(p !== void 0 ? p : ''),
                style: I,
              },
              f,
            ),
          );
        },
        P = x,
        E = t(27424),
        m = t.n(E),
        M = function (o) {
          var I = o.children,
            p = o.content,
            f = o.placement,
            O = f === void 0 ? 'top' : f,
            j = (0, i.useState)(!1),
            h = m()(j, 2),
            T = h[0],
            _ = h[1],
            C = function () {
              return _(!0);
            },
            g = function () {
              return _(!1);
            },
            B = 'hara-tooltip-'.concat(O);
          return (0, a.jsxs)('div', {
            className: 'hara-tooltip-wrapper',
            onMouseEnter: C,
            onMouseLeave: g,
            children: [
              I,
              T &&
                (0, a.jsx)('div', {
                  className: 'hara-tooltip '.concat(B),
                  children: p,
                }),
            ],
          });
        },
        D = M;
    },
    54047: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          texts: function () {
            return a;
          },
        });
      var i = t(32465);
      const a = [
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
    77045: function (e, n) {
      'use strict';
      n.Z = `import { Input } from 'hara-ui';
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
    70215: function (e, n, t) {
      var i = t(7071);
      function a(r, u) {
        if (r == null) return {};
        var l = i(r, u),
          s,
          c;
        if (Object.getOwnPropertySymbols) {
          var v = Object.getOwnPropertySymbols(r);
          for (c = 0; c < v.length; c++)
            (s = v[c]),
              !(u.indexOf(s) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(r, s) &&
                (l[s] = r[s]);
        }
        return l;
      }
      (e.exports = a),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7071: function (e) {
      function n(t, i) {
        if (t == null) return {};
        var a = {},
          r = Object.keys(t),
          u,
          l;
        for (l = 0; l < r.length; l++)
          (u = r[l]), !(i.indexOf(u) >= 0) && (a[u] = t[u]);
        return a;
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
]);
