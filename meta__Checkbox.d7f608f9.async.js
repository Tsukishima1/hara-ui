"use strict";(self.webpackChunkhara_ui=self.webpackChunkhara_ui||[]).push([[4059],{93175:function(u,n,e){var d;e.r(n),e.d(n,{demos:function(){return v}});var l=e(15009),o=e.n(l),h=e(99289),i=e.n(h),t=e(67294),_=e(97987),p=e(21205),v={"checkbox-demo-demo":{component:t.memo(t.lazy(function(){return e.e(9709).then(e.bind(e,12003))})),asset:{type:"BLOCK",id:"checkbox-demo-demo",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:e(32085).Z},"hara-ui":{type:"NPM",value:"0.0.18"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Checkbox \u793A\u4F8B"},context:{"hara-ui":p,react:d||(d=e.t(t,2))},renderOpts:{compile:function(){var c=i()(o()().mark(function I(){var r,m=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,m));case 3:case"end":return a.stop()}},I)}));function s(){return c.apply(this,arguments)}return s}()}},"checkbox-demo-disabled":{component:t.memo(t.lazy(function(){return e.e(9709).then(e.bind(e,30585))})),asset:{type:"BLOCK",id:"checkbox-demo-disabled",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:e(24506).Z},"hara-ui":{type:"NPM",value:"0.0.18"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"hara-ui":p,react:d||(d=e.t(t,2))},renderOpts:{compile:function(){var c=i()(o()().mark(function I(){var r,m=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,m));case 3:case"end":return a.stop()}},I)}));function s(){return c.apply(this,arguments)}return s}()}}}},30074:function(u,n,e){e.r(n),e.d(n,{texts:function(){return l}});var d=e(97987);const l=[{value:"\u590D\u9009\u6846\u7EC4\u4EF6\u7528\u4E8E\u5C55\u793A\u591A\u9009\u9879\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u9009\u9879\u3002",paraId:0,tocIndex:0},{value:"\u8BE5\u7EC4\u4EF6\u540C\u6837\u652F\u6301\u53D7\u63A7\u548C\u975E\u53D7\u63A7\u4E24\u79CD\u6A21\u5F0F\uFF0C\u8BE6\u60C5\u8BF7\u9605\u8BFB ",paraId:1,tocIndex:0},{value:"Switch",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u63CF\u8FF0\u3002",paraId:1,tocIndex:0},{value:`import { Checkbox } from 'hara-ui';
`,paraId:2,tocIndex:4},{value:`<Checkbox />
`,paraId:3,tocIndex:5},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u5FC5\u9009",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"\u63CF\u8FF0",paraId:4,tocIndex:7},{value:"id",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"\u5426",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"\u7528\u4E8E\u5173\u8054 label \u5143\u7D20\u7684 id",paraId:4,tocIndex:7},{value:"defaultChecked",paraId:4,tocIndex:7},{value:"boolean",paraId:4,tocIndex:7},{value:"\u5426",paraId:4,tocIndex:7},{value:"false",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:7},{value:"checked",paraId:4,tocIndex:7},{value:"boolean",paraId:4,tocIndex:7},{value:"\u5426",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:7},{value:"onCheckedChange",paraId:4,tocIndex:7},{value:"(checked: boolean) => void",paraId:4,tocIndex:7},{value:"\u5426",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"\u72B6\u6001\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:4,tocIndex:7},{value:"style",paraId:4,tocIndex:7},{value:"React.CSSProperties",paraId:4,tocIndex:7},{value:"\u5426",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:7},{value:"className",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"\u5426",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:7}]},24506:function(u,n){n.Z=`import { Checkbox } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox id="terms" disabled />
      <label htmlFor="terms">\u540C\u610F\u6211\u4EEC\u7684\u670D\u52A1\u6761\u6B3E\u548C\u9690\u79C1\u653F\u7B56</label>
    </div>
  );
}
`},32085:function(u,n){n.Z=`import { Checkbox } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox id="terms" />
      <label htmlFor="terms">\u540C\u610F\u6211\u4EEC\u7684\u670D\u52A1\u6761\u6B3E\u548C\u9690\u79C1\u653F\u7B56</label>
    </div>
  );
};
`}}]);
