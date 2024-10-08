(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [808],
  {
    56482: function (n, a, t) {
      'use strict';
      var c;
      t.r(a),
        t.d(a, {
          demos: function () {
            return h;
          },
        });
      var o = t(17061),
        r = t.n(o),
        u = t(17156),
        l = t.n(u),
        d = t(67294),
        i = t(32465),
        v = t(52773),
        h = {
          'input-demo-demo': {
            component: d.memo(
              d.lazy(function () {
                return t.e(91).then(t.bind(t, 90118));
              }),
            ),
            asset: {
              type: 'BLOCK',
              id: 'input-demo-demo',
              refAtomIds: ['Input'],
              dependencies: {
                'index.tsx': { type: 'FILE', value: t(77045).Z },
                react: { type: 'NPM', value: '18.3.1' },
                'hara-ui': { type: 'NPM', value: '0.0.2' },
              },
              entry: 'index.tsx',
              title: '\u8F93\u5165\u6846\u793A\u4F8B',
            },
            context: { react: c || (c = t.t(d, 2)), 'hara-ui': v },
            renderOpts: {
              compile: (function () {
                var y = l()(
                  r()().mark(function m() {
                    var e,
                      p = arguments;
                    return r()().wrap(function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (s.next = 2), t.e(19).then(t.bind(t, 4019));
                          case 2:
                            return s.abrupt(
                              'return',
                              (e = s.sent).default.apply(e, p),
                            );
                          case 3:
                          case 'end':
                            return s.stop();
                        }
                    }, m);
                  }),
                );
                function f() {
                  return y.apply(this, arguments);
                }
                return f;
              })(),
            },
          },
        };
    },
    52773: function (n, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          Button: function () {
            return u;
          },
          Input: function () {
            return f;
          },
        });
      var c = t(67294),
        o = t(85893),
        r = function (e) {
          var p = e.variant,
            I = p === void 0 ? 'primary' : p,
            s = e.children,
            x = e.style,
            P = e.onClick;
          return (0, o.jsx)('button', {
            type: 'button',
            className: 'hara-btn '.concat(I ? 'hara-btn-' + I : ''),
            style: x,
            onClick: P,
            children: s,
          });
        },
        u = r,
        l = t(42122),
        d = t.n(l),
        i = t(70215),
        v = t.n(i),
        h = ['type', 'placeholder', 'style', 'className', 'value', 'onChange'],
        y = function (e) {
          var p = e.type,
            I = p === void 0 ? 'text' : p,
            s = e.placeholder,
            x = e.style,
            P = e.className,
            E = e.value,
            M = e.onChange,
            O = v()(e, h);
          return (0, o.jsx)(
            'input',
            d()(
              {
                type: I,
                placeholder: s,
                className: 'hara-input '.concat(P),
                style: x,
                value: E,
                onChange: M,
              },
              O,
            ),
          );
        },
        f = y;
    },
    54047: function (n, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          texts: function () {
            return o;
          },
        });
      var c = t(32465);
      const o = [
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
      a.Z = `import React from 'react';
import { Input } from 'hara-ui';

export default () => {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px'}}>
            <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" />
            <Input type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" />
            <Input type="file"/>
            <Input disabled placeholder='\u88AB\u7981\u7528\u7684\u8F93\u5165\u6846'/>
        </div>
    );
}
`;
    },
    70215: function (n, a, t) {
      var c = t(7071);
      function o(r, u) {
        if (r == null) return {};
        var l = c(r, u),
          d,
          i;
        if (Object.getOwnPropertySymbols) {
          var v = Object.getOwnPropertySymbols(r);
          for (i = 0; i < v.length; i++)
            (d = v[i]),
              !(u.indexOf(d) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(r, d) &&
                (l[d] = r[d]);
        }
        return l;
      }
      (n.exports = o),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    7071: function (n) {
      function a(t, c) {
        if (t == null) return {};
        var o = {},
          r = Object.keys(t),
          u,
          l;
        for (l = 0; l < r.length; l++)
          (u = r[l]), !(c.indexOf(u) >= 0) && (o[u] = t[u]);
        return o;
      }
      (n.exports = a),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
  },
]);
