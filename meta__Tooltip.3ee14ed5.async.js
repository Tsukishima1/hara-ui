"use strict";(self.webpackChunkhara_ui=self.webpackChunkhara_ui||[]).push([[4210],{21456:function(l,t,n){var o;n.r(t),n.d(t,{demos:function(){return p}});var e=n(17061),u=n.n(e),i=n(17156),c=n.n(i),r=n(67294),v=n(27307),_=n(11045),p={"tooltip-demo-base":{component:r.memo(r.lazy(function(){return n.e(31).then(n.bind(n,2243))})),asset:{type:"BLOCK",id:"tooltip-demo-base",refAtomIds:["Tooltip"],dependencies:{"index.tsx":{type:"FILE",value:n(20289).Z},"hara-ui":{type:"NPM",value:"0.0.18"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Tooltip \u793A\u4F8B"},context:{"hara-ui":_,react:o||(o=n.t(r,2))},renderOpts:{compile:function(){var s=c()(u()().mark(function I(){var d,h=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(7335).then(n.bind(n,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,h));case 3:case"end":return a.stop()}},I)}));function m(){return s.apply(this,arguments)}return m}()}}}},27293:function(l,t,n){n.r(t),n.d(t,{texts:function(){return e}});var o=n(27307);const e=[{value:"\u6587\u5B57\u63D0\u793A\u7EC4\u4EF6\u7528\u4E8E\u5728\u9F20\u6807\u60AC\u505C\u65F6\u663E\u793A\u63D0\u793A\u4FE1\u606F\u3002\u7528\u53CC\u6807\u7B7E\u5305\u88F9\u9700\u8981\u63D0\u793A\u7684\u5185\u5BB9\uFF0C\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"content",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u8BBE\u7F6E\u63D0\u793A\u6587\u5B57\u3002",paraId:0,tocIndex:0},{value:`import { Tooltip } from 'hara-ui';
`,paraId:1,tocIndex:4},{value:`<Tooltip content="\u63D0\u793A\u6587\u5B57">
  <span>\u9F20\u6807\u60AC\u505C\u663E\u793A\u63D0\u793A</span>
</Tooltip>
`,paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u5FC5\u9009",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"content",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"\u662F",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"\u6587\u5B57\u5185\u5BB9",paraId:3,tocIndex:6},{value:"placement",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"\u5426",paraId:3,tocIndex:6},{value:'"top" | "bottom" | "left" | "right"',paraId:3,tocIndex:6},{value:"\u663E\u793A\u4F4D\u7F6E",paraId:3,tocIndex:6}]},20289:function(l,t){t.Z=`import { Button, Tooltip } from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <>
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
    </>
  );
};
`}}]);
