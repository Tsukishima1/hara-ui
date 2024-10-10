(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [210],
  {
    21456: function (n, e, t) {
      'use strict';
      var s;
      t.r(e),
        t.d(e, {
          demos: function () {
            return I;
          },
        });
      var o = t(17061),
        a = t.n(o),
        l = t(17156),
        u = t.n(l),
        i = t(67294),
        d = t(27307),
        v = t(86757),
        I = {
          'tooltip-demo-base': {
            component: i.memo(
              i.lazy(function () {
                return t.e(31).then(t.bind(t, 2243));
              }),
            ),
            asset: {
              type: 'BLOCK',
              id: 'tooltip-demo-base',
              refAtomIds: ['Tooltip'],
              dependencies: {
                'index.tsx': { type: 'FILE', value: t(20289).Z },
                'hara-ui': { type: 'NPM', value: '0.0.4' },
                react: { type: 'NPM', value: '18.3.1' },
              },
              entry: 'index.tsx',
              title: 'Tooltip \u793A\u4F8B',
            },
            context: { 'hara-ui': v, react: s || (s = t.t(i, 2)) },
            renderOpts: {
              compile: (function () {
                var x = u()(
                  a()().mark(function P() {
                    var y,
                      E = arguments;
                    return a()().wrap(function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            return (c.next = 2), t.e(19).then(t.bind(t, 4019));
                          case 2:
                            return c.abrupt(
                              'return',
                              (y = c.sent).default.apply(y, E),
                            );
                          case 3:
                          case 'end':
                            return c.stop();
                        }
                    }, P);
                  }),
                );
                function T() {
                  return x.apply(this, arguments);
                }
                return T;
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
            return l;
          },
          Input: function () {
            return T;
          },
          Tooltip: function () {
            return j;
          },
        });
      var s = t(67294),
        o = t(85893),
        a = function (r) {
          var m = r.variant,
            p = m === void 0 ? 'primary' : m,
            h = r.children,
            M = r.style,
            O = r.onClick,
            f = r.className;
          return (0, o.jsx)('button', {
            type: 'button',
            className: 'hara-btn '
              .concat(p ? 'hara-btn-' + p : '', ' ')
              .concat(f !== void 0 ? f : ''),
            style: M,
            onClick: O,
            children: h,
          });
        },
        l = a,
        u = t(42122),
        i = t.n(u),
        d = t(70215),
        v = t.n(d),
        I = ['style', 'className'],
        x = function (r) {
          var m = r.style,
            p = r.className,
            h = v()(r, I);
          return (0, o.jsx)(
            'input',
            i()(
              {
                className: 'hara-input '.concat(p !== void 0 ? p : ''),
                style: m,
              },
              h,
            ),
          );
        },
        T = x,
        P = t(27424),
        y = t.n(P),
        E = function (r) {
          var m = r.children,
            p = r.content,
            h = r.placement,
            M = h === void 0 ? 'top' : h,
            O = (0, s.useState)(!1),
            f = y()(O, 2),
            B = f[0],
            D = f[1],
            _ = function () {
              return D(!0);
            },
            g = function () {
              return D(!1);
            },
            C = 'hara-tooltip-'.concat(M);
          return (0, o.jsxs)('div', {
            className: 'hara-tooltip-wrapper',
            onMouseEnter: _,
            onMouseLeave: g,
            children: [
              m,
              B &&
                (0, o.jsx)('div', {
                  className: 'hara-tooltip '.concat(C),
                  children: p,
                }),
            ],
          });
        },
        j = E;
    },
    27293: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          texts: function () {
            return o;
          },
        });
      var s = t(27307);
      const o = [
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
    20289: function (n, e) {
      'use strict';
      e.Z = `import { Button, Tooltip } from 'hara-ui';
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
    70215: function (n, e, t) {
      var s = t(7071);
      function o(a, l) {
        if (a == null) return {};
        var u = s(a, l),
          i,
          d;
        if (Object.getOwnPropertySymbols) {
          var v = Object.getOwnPropertySymbols(a);
          for (d = 0; d < v.length; d++)
            (i = v[d]),
              !(l.indexOf(i) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(a, i) &&
                (u[i] = a[i]);
        }
        return u;
      }
      (n.exports = o),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    7071: function (n) {
      function e(t, s) {
        if (t == null) return {};
        var o = {},
          a = Object.keys(t),
          l,
          u;
        for (u = 0; u < a.length; u++)
          (l = a[u]), !(s.indexOf(l) >= 0) && (o[l] = t[l]);
        return o;
      }
      (n.exports = e),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
  },
]);
