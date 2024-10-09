(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [808],
  {
    56482: function (n, a, t) {
      'use strict';
      var d;
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
        s = t(67294),
        c = t(32465),
        v = t(86757),
        E = {
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
            context: { 'hara-ui': v, react: d || (d = t.t(s, 2)) },
            renderOpts: {
              compile: (function () {
                var M = l()(
                  o()().mark(function j() {
                    var m,
                      D = arguments;
                    return o()().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (i.next = 2), t.e(19).then(t.bind(t, 4019));
                          case 2:
                            return i.abrupt(
                              'return',
                              (m = i.sent).default.apply(m, D),
                            );
                          case 3:
                          case 'end':
                            return i.stop();
                        }
                    }, j);
                  }),
                );
                function O() {
                  return M.apply(this, arguments);
                }
                return O;
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
            return O;
          },
          Tooltip: function () {
            return C;
          },
        });
      var d = t(67294),
        r = t(85893),
        o = function (e) {
          var p = e.variant,
            h = p === void 0 ? 'primary' : p,
            I = e.children,
            f = e.style,
            y = e.onClick;
          return (0, r.jsx)('button', {
            type: 'button',
            className: 'hara-btn '.concat(h ? 'hara-btn-' + h : ''),
            style: f,
            onClick: y,
            children: I,
          });
        },
        u = o,
        l = t(42122),
        s = t.n(l),
        c = t(70215),
        v = t.n(c),
        E = ['type', 'placeholder', 'style', 'className', 'value', 'onChange'],
        M = function (e) {
          var p = e.type,
            h = p === void 0 ? 'text' : p,
            I = e.placeholder,
            f = e.style,
            y = e.className,
            x = e.value,
            _ = e.onChange,
            P = v()(e, E);
          return (0, r.jsx)(
            'input',
            s()(
              {
                type: h,
                placeholder: I,
                className: 'hara-input '.concat(y),
                style: f,
                value: x,
                onChange: _,
              },
              P,
            ),
          );
        },
        O = M,
        j = t(27424),
        m = t.n(j),
        D = function (e) {
          var p = e.children,
            h = e.content,
            I = e.placement,
            f = I === void 0 ? 'top' : I,
            y = (0, d.useState)(!1),
            x = m()(y, 2),
            _ = x[0],
            P = x[1],
            T = function () {
              return P(!0);
            },
            g = function () {
              return P(!1);
            },
            B = 'hara-tooltip-'.concat(f);
          return (0, r.jsxs)('div', {
            className: 'hara-tooltip-wrapper',
            onMouseEnter: T,
            onMouseLeave: g,
            children: [
              p,
              _ &&
                (0, r.jsx)('div', {
                  className: 'hara-tooltip '.concat(B),
                  children: h,
                }),
            ],
          });
        },
        C = D;
    },
    54047: function (n, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          texts: function () {
            return r;
          },
        });
      var d = t(32465);
      const r = [
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
    77045: function (n, a) {
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
    70215: function (n, a, t) {
      var d = t(7071);
      function r(o, u) {
        if (o == null) return {};
        var l = d(o, u),
          s,
          c;
        if (Object.getOwnPropertySymbols) {
          var v = Object.getOwnPropertySymbols(o);
          for (c = 0; c < v.length; c++)
            (s = v[c]),
              !(u.indexOf(s) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(o, s) &&
                (l[s] = o[s]);
        }
        return l;
      }
      (n.exports = r),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    7071: function (n) {
      function a(t, d) {
        if (t == null) return {};
        var r = {},
          o = Object.keys(t),
          u,
          l;
        for (l = 0; l < o.length; l++)
          (u = o[l]), !(d.indexOf(u) >= 0) && (r[u] = t[u]);
        return r;
      }
      (n.exports = a),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
  },
]);
