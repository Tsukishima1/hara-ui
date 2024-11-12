---
title: 深色模式
toc: content
---

# 深色模式

**Hara-UI** 现在支持深色模式，可以通过 `ThemeProvider` 组件来实现。

## Vite

### 创建组件

```tsx | pure
// src/components/ThemeProvider.tsx
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

    // 根据主题设置 data-theme 属性
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

    // 当系统主题变化时自动更新（仅在系统主题模式下）
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
      localStorage.setItem(storageKey, newTheme); // 保存主题到 localStorage
      setTheme(newTheme); // 更新主题
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => { // 该方法用于获取当前主题，以及切换主题
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

### 添加进根布局

将 `ThemeProvider` 组件添加到根布局中。

```tsx | pure
// src/App.tsx
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
```

### 添加切换按钮

:::info{title=待开发}
计划使用组件库中的`DropdownMenu`组件来实现切换按钮，等待开发中 :D
:::

```tsx | pure
// src/components/ThemeSwitch.tsx
import { useTheme } from "./ThemeProvider";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
```

## Next.js

### 安装 next-themes
  
  ```bash
  npm install next-themes
  ```

### 创建组件

```tsx | pure
// src/components/ThemeProvider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### 添加进根布局

将 `ThemeProvider` 组件添加到根布局中。

```tsx | pure
// src/pages/_app.tsx
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
```

### 添加切换按钮

:::info{title=待开发}
计划使用组件库中的`DropdownMenu`组件来实现切换按钮，等待开发中 :D
:::

```tsx | pure
// src/components/ThemeSwitch.tsx
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
```
