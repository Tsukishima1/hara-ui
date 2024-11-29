"use strict";(self.webpackChunkhara_ui=self.webpackChunkhara_ui||[]).push([[9148],{38708:function(u,n,a){var t;a.r(n),a.d(n,{demos:function(){return h}});var o=a(17061),l=a.n(o),c=a(17156),m=a.n(c),r=a(67294),D=a(58833),I=a(11045),h={"calendar-demo-demo":{component:r.memo(r.lazy(function(){return a.e(9621).then(a.bind(a,91051))})),asset:{type:"BLOCK",id:"calendar-demo-demo",refAtomIds:["Calendar"],dependencies:{"index.tsx":{type:"FILE",value:a(86356).Z},"hara-ui":{type:"NPM",value:"0.0.18"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Calendar \u793A\u4F8B"},context:{"hara-ui":I,react:t||(t=a.t(r,2))},renderOpts:{compile:function(){var s=m()(l()().mark(function i(){var d,v=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(7335).then(a.bind(a,37335));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,v));case 3:case"end":return e.stop()}},i)}));function p(){return s.apply(this,arguments)}return p}()}},"calendar-demo-withdropdown":{component:r.memo(r.lazy(function(){return a.e(9621).then(a.bind(a,82703))})),asset:{type:"BLOCK",id:"calendar-demo-withdropdown",refAtomIds:["Calendar"],dependencies:{"index.tsx":{type:"FILE",value:a(77201).Z},"hara-ui":{type:"NPM",value:"0.0.18"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Calendar \u793A\u4F8B"},context:{"hara-ui":I,react:t||(t=a.t(r,2))},renderOpts:{compile:function(){var s=m()(l()().mark(function i(){var d,v=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(7335).then(a.bind(a,37335));case 2:return e.abrupt("return",(d=e.sent).default.apply(d,v));case 3:case"end":return e.stop()}},i)}));function p(){return s.apply(this,arguments)}return p}()}}}},33806:function(u,n,a){a.r(n),a.d(n,{texts:function(){return o}});var t=a(58833);const o=[{value:"\u7528\u4E8E\u5C55\u793A\u65E5\u671F\u7684\u65E5\u5386\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u4E86",paraId:0,tocIndex:0},{value:"react-day-picker",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u5355\u9009\u65E5\u671F\u3002",paraId:0,tocIndex:0},{value:`import { Calendar } from 'hara-ui';
`,paraId:1,tocIndex:4},{value:`<Calendar mode="single" selected="{date}" onSelect="{setDate}" />
`,paraId:2,tocIndex:5},{value:"\u76EE\u524D\u53EA\u652F\u6301\u4F7F\u7528\u5355\u9009\u65E5\u671F\u4EE5\u53CA\u4EE5\u4E0B\u53C2\u6570\u8BBE\u7F6E\uFF0C\u5176\u4ED6\u6A21\u5F0F\u6682\u4E0D\u652F\u6301\uFF0C\u5176\u4E2D",paraId:3},{value:"mode='single'",paraId:3},{value:"\u5FC5\u586B\uFF0C\u5426\u5219\u4E4B\u540E\u7684",paraId:3},{value:"selected",paraId:3},{value:"\u548C",paraId:3},{value:"onSelect",paraId:3},{value:"\u5E76\u4E0D\u751F\u6548\u3002",paraId:3},{value:"\u5C5E\u6027",paraId:4},{value:"\u7C7B\u578B",paraId:4},{value:"\u5FC5\u9009",paraId:4},{value:"\u9ED8\u8BA4\u503C",paraId:4},{value:"\u63CF\u8FF0",paraId:4},{value:"mode",paraId:4},{value:"'single'",paraId:4},{value:"\u662F",paraId:4},{value:"'single'",paraId:4},{value:"\u65E5\u5386\u6A21\u5F0F\uFF0C",paraId:4},{value:"single",paraId:4},{value:" \u4E3A\u5355\u9009",paraId:4},{value:"selected",paraId:4},{value:"Date",paraId:4},{value:"\u5426",paraId:4},{value:"-",paraId:4},{value:"\u7ED1\u5B9A\u72B6\u6001\u4E2D\u7684\u65E5\u671F\u503C",paraId:4},{value:"onSelect",paraId:4},{value:"React.SetStateAction",paraId:4},{value:"\u5426",paraId:4},{value:"-",paraId:4},{value:"\u7ED1\u5B9A\u72B6\u6001\u4E2D\u7684\u66F4\u65B0\u51FD\u6570",paraId:4},{value:"withDropdown",paraId:4},{value:"boolean",paraId:4},{value:"\u5426",paraId:4},{value:"false",paraId:4},{value:"\u662F\u5426\u663E\u793A\u5E74\u6708\u9009\u62E9\u5668",paraId:4},{value:"className",paraId:4},{value:"string",paraId:4},{value:"\u5426",paraId:4},{value:"-",paraId:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4},{value:"style",paraId:4},{value:"React.CSSProperties",paraId:4},{value:"\u5426",paraId:4},{value:"-",paraId:4},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4}]},86356:function(u,n){n.Z=`import { Calendar } from 'hara-ui';
import React from 'react';

export default () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} />
      <p style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
        \u60A8\u9009\u62E9\u7684\u65E5\u671F\uFF1A{date?.toLocaleDateString()}
      </p>
    </div>
  );
};
`},77201:function(u,n){n.Z=`import { Calendar } from 'hara-ui';
import React from 'react';

export default () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        withDropdown={true}
      />
      <p style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
        \u60A8\u9009\u62E9\u7684\u65E5\u671F\uFF1A{date?.toLocaleDateString()}
      </p>
    </div>
  );
};
`}}]);
