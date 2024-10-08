'use strict';
(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [91],
  {
    90118: function (a, n, e) {
      e.r(n);
      var l = e(67294),
        t = e(52773),
        u = e(85893);
      n.default = function () {
        return (0, u.jsxs)('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          },
          children: [
            (0, u.jsx)(t.Input, {
              placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
            }),
            (0, u.jsx)(t.Input, {
              type: 'password',
              placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
            }),
            (0, u.jsx)(t.Input, { type: 'file' }),
            (0, u.jsx)(t.Input, {
              disabled: !0,
              placeholder: '\u88AB\u7981\u7528\u7684\u8F93\u5165\u6846',
            }),
          ],
        });
      };
    },
  },
]);
