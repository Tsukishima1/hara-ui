"use strict";(self.webpackChunkhara_ui=self.webpackChunkhara_ui||[]).push([[35],{15028:function(r,n,e){e.r(n),e.d(n,{demos:function(){return o}});var a=e(67294),t=e(35325),o={}},44401:function(r,n,e){e.r(n),e.d(n,{demos:function(){return o}});var a=e(67294),t=e(26211),o={}},11171:function(r,n,e){e.r(n),e.d(n,{demos:function(){return o}});var a=e(67294),t=e(68537),o={}},47295:function(r,n,e){e.r(n),e.d(n,{texts:function(){return t}});var a=e(35325);const t=[{value:"Hara-UI",paraId:0,tocIndex:0},{value:" \u73B0\u5728\u652F\u6301\u6DF1\u8272\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"ThemeProvider",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u6765\u5B9E\u73B0\u3002",paraId:0,tocIndex:0},{value:`// src/components/ThemeProvider.tsx
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system"; 

type ThemeProviderProps = {
  children: React.ReactNode; 
  defaultTheme?: Theme; 
  storageKey?: string; 
};

type ThemeProviderState = { 
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = { 
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "haraui-theme", 
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // \u6839\u636E\u4E3B\u9898\u8BBE\u7F6E data-theme \u5C5E\u6027
    const applyTheme = (currentTheme: Theme) => {
      if (currentTheme === "system") {
        const systemTheme = 
          window.matchMedia("(prefers-color-scheme: dark)")
                .matches ? "dark" : "light";
        root.setAttribute("data-theme", systemTheme);
      } else {
        root.setAttribute("data-theme", currentTheme);
      }
    };

    applyTheme(theme);

    // \u5F53\u7CFB\u7EDF\u4E3B\u9898\u53D8\u5316\u65F6\u81EA\u52A8\u66F4\u65B0\uFF08\u4EC5\u5728\u7CFB\u7EDF\u4E3B\u9898\u6A21\u5F0F\u4E0B\uFF09
    if (theme === "system") {
      const systemThemeListener = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? "dark" : "light");
      };
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", systemThemeListener);

      return () => {
        mediaQuery.removeEventListener("change", systemThemeListener);
      };
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme); // \u4FDD\u5B58\u4E3B\u9898\u5230 localStorage
      setTheme(newTheme); // \u66F4\u65B0\u4E3B\u9898
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => { // \u8BE5\u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u4E3B\u9898\uFF0C\u4EE5\u53CA\u5207\u6362\u4E3B\u9898
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
`,paraId:1,tocIndex:2},{value:"\u5C06 ",paraId:2,tocIndex:3},{value:"ThemeProvider",paraId:2,tocIndex:3},{value:" \u7EC4\u4EF6\u6DFB\u52A0\u5230\u6839\u5E03\u5C40\u4E2D\u3002",paraId:2,tocIndex:3},{value:`// src/App.tsx
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="haraui-theme">
      <div className="App">
        {/* ... */}
      </div>
    </ThemeProvider>
  );
}

export default App;
`,paraId:3,tocIndex:3},{value:"\u8BA1\u5212\u4F7F\u7528\u7EC4\u4EF6\u5E93\u4E2D\u7684",paraId:4},{value:"DropdownMenu",paraId:4},{value:"\u7EC4\u4EF6\u6765\u5B9E\u73B0\u5207\u6362\u6309\u94AE\uFF0C\u7B49\u5F85\u5F00\u53D1\u4E2D :D",paraId:4},{value:`// src/components/ThemeSwitch.tsx
import { useTheme } from "./ThemeProvider";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
`,paraId:5},{value:`npm install next-themes
`,paraId:6,tocIndex:6},{value:`// src/components/ThemeProvider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
`,paraId:7,tocIndex:7},{value:"\u5C06 ",paraId:8,tocIndex:8},{value:"ThemeProvider",paraId:8,tocIndex:8},{value:" \u7EC4\u4EF6\u6DFB\u52A0\u5230\u6839\u5E03\u5C40\u4E2D\u3002",paraId:8,tocIndex:8},{value:`// src/pages/_app.tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
`,paraId:9,tocIndex:8},{value:"\u8BA1\u5212\u4F7F\u7528\u7EC4\u4EF6\u5E93\u4E2D\u7684",paraId:10},{value:"DropdownMenu",paraId:10},{value:"\u7EC4\u4EF6\u6765\u5B9E\u73B0\u5207\u6362\u6309\u94AE\uFF0C\u7B49\u5F85\u5F00\u53D1\u4E2D :D",paraId:10},{value:`// src/components/ThemeSwitch.tsx
"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  )
}
`,paraId:11}]},9978:function(r,n,e){e.r(n),e.d(n,{texts:function(){return t}});var a=e(26211);const t=[{value:"\u8FD9\u662F\u4E00\u4E2A\u9762\u5411 React \u4F7F\u7528\u7684 UI \u7EC4\u4EF6\u5E93\uFF0C\u5229\u7528 Dumi \u8FDB\u884C\u642D\u5EFA~",paraId:0,tocIndex:1},{value:"\u5199\u8FD9\u4E2A\u9879\u76EE\u7684\u521D\u8877\u662F\u7814\u7A76\u5404\u5F0F\u5404\u6837\u7EC4\u4EF6\u7684\u8BDE\u751F\u8FC7\u7A0B\uFF0C\u53C2\u8003\u6211\u6700\u559C\u6B22\u7684\u4E00\u4E2A\u7EC4\u4EF6\u5E93",paraId:1,tocIndex:1},{value:"ShadcnUI",paraId:1,tocIndex:1},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u521B\u9020\u4E00\u4E2A\u7B26\u5408\u81EA\u5DF1\u5BA1\u7F8E\u7684\u7EC4\u4EF6\u5E93\uFF01",paraId:1,tocIndex:1},{value:"\u8FD9\u662F\u6211\u521B\u5EFA\u8BE5\u7EC4\u4EF6\u5E93\u7684\u4E00\u4E9B\u5C0F\u5FC3\u5F97!! \u{1F449} ",paraId:2,tocIndex:1},{value:"\u7EC4\u4EF6\u5E93\u642D\u5EFA\u5C0F\u8BB0\u{1F425}",paraId:2,tocIndex:1},{value:"\u975E\u5E38\u611F\u8C22\u4F60\u80FD\u770B\u5230\u8FD9\u4E9B\u8BDD\uFF0C\u4E5F\u611F\u8C22\u4F60\u5BF9 HaraUI \u7684\u652F\u6301\u2014\u2014\u{1F603}",paraId:3,tocIndex:1},{value:`npm install hara-ui
`,paraId:4,tocIndex:3},{value:`import { Button } from 'hara-ui';
`,paraId:5,tocIndex:4}]},51446:function(r,n,e){e.r(n),e.d(n,{texts:function(){return t}});var a=e(68537);const t=[]}}]);
