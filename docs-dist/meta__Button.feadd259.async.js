(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [461],
  {
    14361: function (n, a, t) {
      'use strict';
      var c;
      t.r(a),
        t.d(a, {
          demos: function () {
            return y;
          },
        });
      var o = t(17061),
        r = t.n(o),
        u = t(17156),
        l = t.n(u),
        d = t(67294),
        i = t(4497),
        p = t(52773),
        y = {
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
                react: { type: 'NPM', value: '18.3.1' },
                'hara-ui': { type: 'NPM', value: '0.0.2' },
              },
              entry: 'index.tsx',
              title: '\u6309\u94AE\u793A\u4F8B',
            },
            context: { react: c || (c = t.t(d, 2)), 'hara-ui': p },
            renderOpts: {
              compile: (function () {
                var h = l()(
                  r()().mark(function m() {
                    var e,
                      v = arguments;
                    return r()().wrap(function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (s.next = 2), t.e(19).then(t.bind(t, 4019));
                          case 2:
                            return s.abrupt(
                              'return',
                              (e = s.sent).default.apply(e, v),
                            );
                          case 3:
                          case 'end':
                            return s.stop();
                        }
                    }, m);
                  }),
                );
                function f() {
                  return h.apply(this, arguments);
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
          var v = e.variant,
            I = v === void 0 ? 'primary' : v,
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
        p = t.n(i),
        y = ['type', 'placeholder', 'style', 'className', 'value', 'onChange'],
        h = function (e) {
          var v = e.type,
            I = v === void 0 ? 'text' : v,
            s = e.placeholder,
            x = e.style,
            P = e.className,
            E = e.value,
            M = e.onChange,
            B = p()(e, y);
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
              B,
            ),
          );
        },
        f = h;
    },
    73120: function (n, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          texts: function () {
            return o;
          },
        });
      var c = t(4497);
      const o = [
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
      a.Z = `import React from 'react';
import { Button } from 'hara-ui';

export default () => {

  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'5px'}}>
      <Button variant="primary">\u9ED8\u8BA4\u6309\u94AE</Button>
      <Button variant="ghost">\u5E7D\u7075\u6309\u94AE</Button>
      <Button style={{color:'skyblue',backgroundColor:'whitesmoke'}}>\u81EA\u5B9A\u4E49\u6837\u5F0F</Button>
      <Button onClick={() => alert('\u70B9\u51FB\u4E8B\u4EF6')}>\u70B9\u51FB\u4E8B\u4EF6</Button>
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
          var p = Object.getOwnPropertySymbols(r);
          for (i = 0; i < p.length; i++)
            (d = p[i]),
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
