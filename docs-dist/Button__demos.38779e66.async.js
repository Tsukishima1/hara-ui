'use strict';
(self.webpackChunkhara_ui = self.webpackChunkhara_ui || []).push([
  [570],
  {
    59363: function (a, r, n) {
      n.r(r);
      var t = n(86757),
        e = n(67294),
        u = n(85893);
      r.default = function () {
        return (0, u.jsxs)('div', {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
          },
          children: [
            (0, u.jsx)(t.Button, {
              variant: 'primary',
              children: '\u9ED8\u8BA4\u6309\u94AE',
            }),
            (0, u.jsx)(t.Button, {
              variant: 'ghost',
              children: '\u5E7D\u7075\u6309\u94AE',
            }),
            (0, u.jsx)(t.Button, {
              style: { color: 'skyblue', backgroundColor: 'whitesmoke' },
              children: '\u81EA\u5B9A\u4E49\u6837\u5F0F',
            }),
            (0, u.jsx)(t.Button, {
              onClick: function () {
                return alert('\u70B9\u51FB\u4E8B\u4EF6');
              },
              children: '\u70B9\u51FB\u4E8B\u4EF6',
            }),
          ],
        });
      };
    },
  },
]);
