"use strict";(self.webpackChunkhara_ui=self.webpackChunkhara_ui||[]).push([[210],{21456:function(r,n,t){var a;t.r(n),t.d(n,{demos:function(){return i}});var o=t(17061),d=t.n(o),c=t(17156),s=t.n(c),l=t(67294),h=t(27307),p=t(88850),i={"tooltip-demo-base":{component:l.memo(l.lazy(function(){return t.e(31).then(t.bind(t,2243))})),asset:{type:"BLOCK",id:"tooltip-demo-base",refAtomIds:["Tooltip"],dependencies:{"index.tsx":{type:"FILE",value:t(20289).Z},"hara-ui":{type:"NPM",value:"0.0.15"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Tooltip \u793A\u4F8B"},context:{"hara-ui":p,react:a||(a=t.t(l,2))},renderOpts:{compile:function(){var _=s()(d()().mark(function m(){var u,v=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(19).then(t.bind(t,4019));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,v));case 3:case"end":return e.stop()}},m)}));function I(){return _.apply(this,arguments)}return I}()}}}},27293:function(r,n,t){t.r(n),t.d(n,{texts:function(){return o}});var a=t(27307);const o=[{value:"\u6587\u5B57\u63D0\u793A\u7EC4\u4EF6\u7528\u4E8E\u5728\u9F20\u6807\u60AC\u505C\u65F6\u663E\u793A\u63D0\u793A\u4FE1\u606F\u3002\u7528\u53CC\u6807\u7B7E\u5305\u88F9\u9700\u8981\u63D0\u793A\u7684\u5185\u5BB9\uFF0C\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"content",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u8BBE\u7F6E\u63D0\u793A\u6587\u5B57\u3002",paraId:0,tocIndex:0},{value:`import { Tooltip } from 'hara-ui';
`,paraId:1,tocIndex:4},{value:`<Tooltip content="\u63D0\u793A\u6587\u5B57">
  <span>\u9F20\u6807\u60AC\u505C\u663E\u793A\u63D0\u793A</span>
</Tooltip>
`,paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u5FC5\u9009",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"content",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"\u662F",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"\u6587\u5B57\u5185\u5BB9",paraId:3,tocIndex:6},{value:"placement",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"\u5426",paraId:3,tocIndex:6},{value:'"top" | "bottom" | "left" | "right"',paraId:3,tocIndex:6},{value:"\u663E\u793A\u4F4D\u7F6E",paraId:3,tocIndex:6}]},20289:function(r,n){n.Z=`import { Button, Tooltip } from 'hara-ui';
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
