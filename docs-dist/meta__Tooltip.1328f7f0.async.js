(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [210],
  {
    21456: function (n, o, t) {
      'use strict';
      var s;
      t.r(o),
        t.d(o, {
          demos: function () {
            return P;
          },
        });
      var a = t(17061),
        r = t.n(a),
        l = t(17156),
        u = t.n(l),
        i = t(67294),
        d = t(27307),
        v = t(86757),
        P = {
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
                react: { type: 'NPM', value: '18.3.1' },
                'hara-ui': { type: 'NPM', value: '0.0.4' },
              },
              entry: 'index.tsx',
              title: 'Tooltip \u793A\u4F8B',
            },
            context: { react: s || (s = t.t(i, 2)), 'hara-ui': v },
            renderOpts: {
              compile: (function () {
                var E = u()(
                  r()().mark(function O() {
                    var I,
                      j = arguments;
                    return r()().wrap(function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            return (c.next = 2), t.e(19).then(t.bind(t, 4019));
                          case 2:
                            return c.abrupt(
                              'return',
                              (I = c.sent).default.apply(I, j),
                            );
                          case 3:
                          case 'end':
                            return c.stop();
                        }
                    }, O);
                  }),
                );
                function M() {
                  return E.apply(this, arguments);
                }
                return M;
              })(),
            },
          },
        };
    },
    86757: function (n, o, t) {
      'use strict';
      t.r(o),
        t.d(o, {
          Button: function () {
            return l;
          },
          Input: function () {
            return M;
          },
          Tooltip: function () {
            return C;
          },
        });
      var s = t(67294),
        a = t(85893),
        r = function (e) {
          var p = e.variant,
            h = p === void 0 ? 'primary' : p,
            m = e.children,
            f = e.style,
            y = e.onClick;
          return (0, a.jsx)('button', {
            type: 'button',
            className: 'hara-btn '.concat(h ? 'hara-btn-' + h : ''),
            style: f,
            onClick: y,
            children: m,
          });
        },
        l = r,
        u = t(42122),
        i = t.n(u),
        d = t(70215),
        v = t.n(d),
        P = ['type', 'placeholder', 'style', 'className', 'value', 'onChange'],
        E = function (e) {
          var p = e.type,
            h = p === void 0 ? 'text' : p,
            m = e.placeholder,
            f = e.style,
            y = e.className,
            x = e.value,
            g = e.onChange,
            T = v()(e, P);
          return (0, a.jsx)(
            'input',
            i()(
              {
                type: h,
                placeholder: m,
                className: 'hara-input '.concat(y),
                style: f,
                value: x,
                onChange: g,
              },
              T,
            ),
          );
        },
        M = E,
        O = t(27424),
        I = t.n(O),
        j = function (e) {
          var p = e.children,
            h = e.content,
            m = e.placement,
            f = m === void 0 ? 'top' : m,
            y = (0, s.useState)(!1),
            x = I()(y, 2),
            g = x[0],
            T = x[1],
            D = function () {
              return T(!0);
            },
            B = function () {
              return T(!1);
            },
            _ = 'hara-tooltip-'.concat(f);
          return (0, a.jsxs)('div', {
            className: 'hara-tooltip-wrapper',
            onMouseEnter: D,
            onMouseLeave: B,
            children: [
              p,
              g &&
                (0, a.jsx)('div', {
                  className: 'hara-tooltip '.concat(_),
                  children: h,
                }),
            ],
          });
        },
        C = j;
    },
    27293: function (n, o, t) {
      'use strict';
      t.r(o),
        t.d(o, {
          texts: function () {
            return a;
          },
        });
      var s = t(27307);
      const a = [
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
    20289: function (n, o) {
      'use strict';
      o.Z = `import React from 'react'
import { Tooltip, Button } from 'hara-ui'

export default () => {
  return (
    <div style={{display:'flex',justifyContent:'center',gap:'1rem'}}>
      <Tooltip content='\u63D0\u793A\u6587\u672C' placement='top'>
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>top</Button>
      </Tooltip>
      <Tooltip content='\u63D0\u793A\u6587\u672C' placement='bottom'>
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>bottom</Button>
      </Tooltip>
      <Tooltip content='\u63D0\u793A\u6587\u672C' placement='left'>
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>left</Button>
      </Tooltip>
      <Tooltip content='\u63D0\u793A\u6587\u672C' placement='right'>
        <Button style={{ backgroundColor: 'whitesmoke', color: 'black' }}>right</Button>
      </Tooltip>
    </div>
  )
}
`;
    },
    70215: function (n, o, t) {
      var s = t(7071);
      function a(r, l) {
        if (r == null) return {};
        var u = s(r, l),
          i,
          d;
        if (Object.getOwnPropertySymbols) {
          var v = Object.getOwnPropertySymbols(r);
          for (d = 0; d < v.length; d++)
            (i = v[d]),
              !(l.indexOf(i) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(r, i) &&
                (u[i] = r[i]);
        }
        return u;
      }
      (n.exports = a),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    7071: function (n) {
      function o(t, s) {
        if (t == null) return {};
        var a = {},
          r = Object.keys(t),
          l,
          u;
        for (u = 0; u < r.length; u++)
          (l = r[u]), !(s.indexOf(l) >= 0) && (a[l] = t[l]);
        return a;
      }
      (n.exports = o),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
  },
]);
