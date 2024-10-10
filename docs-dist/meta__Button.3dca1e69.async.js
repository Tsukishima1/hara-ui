(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [461],
  {
    14361: function (n, e, t) {
      'use strict';
      var d;
      t.r(e),
        t.d(e, {
          demos: function () {
            return y;
          },
        });
      var a = t(17061),
        r = t.n(a),
        u = t(17156),
        l = t.n(u),
        s = t(67294),
        c = t(4497),
        p = t(86757),
        y = {
          'button-demo-base': {
            component: s.memo(
              s.lazy(function () {
                return t.e(570).then(t.bind(t, 59363));
              }),
            ),
            asset: {
              type: 'BLOCK',
              id: 'button-demo-base',
              refAtomIds: ['Button'],
              dependencies: {
                'index.tsx': { type: 'FILE', value: t(40565).Z },
                'hara-ui': { type: 'NPM', value: '0.0.4' },
                react: { type: 'NPM', value: '18.3.1' },
              },
              entry: 'index.tsx',
              title: '\u6309\u94AE\u793A\u4F8B',
            },
            context: { 'hara-ui': p, react: d || (d = t.t(s, 2)) },
            renderOpts: {
              compile: (function () {
                var x = l()(
                  r()().mark(function E() {
                    var m,
                      M = arguments;
                    return r()().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (i.next = 2), t.e(19).then(t.bind(t, 4019));
                          case 2:
                            return i.abrupt(
                              'return',
                              (m = i.sent).default.apply(m, M),
                            );
                          case 3:
                          case 'end':
                            return i.stop();
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
    86757: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          Button: function () {
            return u;
          },
          Input: function () {
            return P;
          },
          Tooltip: function () {
            return j;
          },
        });
      var d = t(67294),
        a = t(85893),
        r = function (o) {
          var I = o.variant,
            v = I === void 0 ? 'primary' : I,
            f = o.children,
            B = o.style,
            O = o.onClick,
            h = o.className;
          return (0, a.jsx)('button', {
            type: 'button',
            className: 'hara-btn '
              .concat(v ? 'hara-btn-' + v : '', ' ')
              .concat(h !== void 0 ? h : ''),
            style: B,
            onClick: O,
            children: f,
          });
        },
        u = r,
        l = t(42122),
        s = t.n(l),
        c = t(70215),
        p = t.n(c),
        y = ['style', 'className'],
        x = function (o) {
          var I = o.style,
            v = o.className,
            f = p()(o, y);
          return (0, a.jsx)(
            'input',
            s()(
              {
                className: 'hara-input '.concat(v !== void 0 ? v : ''),
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
            v = o.content,
            f = o.placement,
            B = f === void 0 ? 'top' : f,
            O = (0, d.useState)(!1),
            h = m()(O, 2),
            T = h[0],
            D = h[1],
            _ = function () {
              return D(!0);
            },
            C = function () {
              return D(!1);
            },
            g = 'hara-tooltip-'.concat(B);
          return (0, a.jsxs)('div', {
            className: 'hara-tooltip-wrapper',
            onMouseEnter: _,
            onMouseLeave: C,
            children: [
              I,
              T &&
                (0, a.jsx)('div', {
                  className: 'hara-tooltip '.concat(g),
                  children: v,
                }),
            ],
          });
        },
        j = M;
    },
    73120: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          texts: function () {
            return a;
          },
        });
      var d = t(4497);
      const a = [
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
    40565: function (n, e) {
      'use strict';
      e.Z = `import { Button } from 'hara-ui';
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
    70215: function (n, e, t) {
      var d = t(7071);
      function a(r, u) {
        if (r == null) return {};
        var l = d(r, u),
          s,
          c;
        if (Object.getOwnPropertySymbols) {
          var p = Object.getOwnPropertySymbols(r);
          for (c = 0; c < p.length; c++)
            (s = p[c]),
              !(u.indexOf(s) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(r, s) &&
                (l[s] = r[s]);
        }
        return l;
      }
      (n.exports = a),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    7071: function (n) {
      function e(t, d) {
        if (t == null) return {};
        var a = {},
          r = Object.keys(t),
          u,
          l;
        for (l = 0; l < r.length; l++)
          (u = r[l]), !(d.indexOf(u) >= 0) && (a[u] = t[u]);
        return a;
      }
      (n.exports = e),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
  },
]);
