(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [461],
  {
    14361: function (n, a, t) {
      'use strict';
      var s;
      t.r(a),
        t.d(a, {
          demos: function () {
            return E;
          },
        });
      var r = t(17061),
        o = t.n(r),
        u = t(17156),
        l = t.n(u),
        d = t(67294),
        c = t(4497),
        p = t(86757),
        E = {
          'button-demo-base': {
            component: d.memo(
              d.lazy(function () {
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
            context: { 'hara-ui': p, react: s || (s = t.t(d, 2)) },
            renderOpts: {
              compile: (function () {
                var M = l()(
                  o()().mark(function O() {
                    var m,
                      j = arguments;
                    return o()().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (i.next = 2), t.e(19).then(t.bind(t, 4019));
                          case 2:
                            return i.abrupt(
                              'return',
                              (m = i.sent).default.apply(m, j),
                            );
                          case 3:
                          case 'end':
                            return i.stop();
                        }
                    }, O);
                  }),
                );
                function B() {
                  return M.apply(this, arguments);
                }
                return B;
              })(),
            },
          },
        };
    },
    86757: function (n, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          Button: function () {
            return u;
          },
          Input: function () {
            return B;
          },
          Tooltip: function () {
            return D;
          },
        });
      var s = t(67294),
        r = t(85893),
        o = function (e) {
          var v = e.variant,
            h = v === void 0 ? 'primary' : v,
            I = e.children,
            y = e.style,
            f = e.onClick;
          return (0, r.jsx)('button', {
            type: 'button',
            className: 'hara-btn '.concat(h ? 'hara-btn-' + h : ''),
            style: y,
            onClick: f,
            children: I,
          });
        },
        u = o,
        l = t(42122),
        d = t.n(l),
        c = t(70215),
        p = t.n(c),
        E = ['type', 'placeholder', 'style', 'className', 'value', 'onChange'],
        M = function (e) {
          var v = e.type,
            h = v === void 0 ? 'text' : v,
            I = e.placeholder,
            y = e.style,
            f = e.className,
            x = e.value,
            C = e.onChange,
            P = p()(e, E);
          return (0, r.jsx)(
            'input',
            d()(
              {
                type: h,
                placeholder: I,
                className: 'hara-input '.concat(f),
                style: y,
                value: x,
                onChange: C,
              },
              P,
            ),
          );
        },
        B = M,
        O = t(27424),
        m = t.n(O),
        j = function (e) {
          var v = e.children,
            h = e.content,
            I = e.placement,
            y = I === void 0 ? 'top' : I,
            f = (0, s.useState)(!1),
            x = m()(f, 2),
            C = x[0],
            P = x[1],
            _ = function () {
              return P(!0);
            },
            T = function () {
              return P(!1);
            },
            g = 'hara-tooltip-'.concat(y);
          return (0, r.jsxs)('div', {
            className: 'hara-tooltip-wrapper',
            onMouseEnter: _,
            onMouseLeave: T,
            children: [
              v,
              C &&
                (0, r.jsx)('div', {
                  className: 'hara-tooltip '.concat(g),
                  children: h,
                }),
            ],
          });
        },
        D = j;
    },
    73120: function (n, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          texts: function () {
            return r;
          },
        });
      var s = t(4497);
      const r = [
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
    40565: function (n, a) {
      'use strict';
      a.Z = `import { Button } from 'hara-ui';
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
    70215: function (n, a, t) {
      var s = t(7071);
      function r(o, u) {
        if (o == null) return {};
        var l = s(o, u),
          d,
          c;
        if (Object.getOwnPropertySymbols) {
          var p = Object.getOwnPropertySymbols(o);
          for (c = 0; c < p.length; c++)
            (d = p[c]),
              !(u.indexOf(d) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(o, d) &&
                (l[d] = o[d]);
        }
        return l;
      }
      (n.exports = r),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    7071: function (n) {
      function a(t, s) {
        if (t == null) return {};
        var r = {},
          o = Object.keys(t),
          u,
          l;
        for (l = 0; l < o.length; l++)
          (u = o[l]), !(s.indexOf(u) >= 0) && (r[u] = t[u]);
        return r;
      }
      (n.exports = a),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
  },
]);
