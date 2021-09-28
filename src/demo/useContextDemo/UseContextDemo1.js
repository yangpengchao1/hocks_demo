// 使用一个按钮来控制全局的主题色调这个context来控制 界面是白天还是黑夜，根据用户的阅读习惯来适配

import React, { useState, useContext } from "react";

const themes = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  },
};

const ThemeContext = React.createContext({
  theme: themes.light,
  // 这个function帮我们改变环境的颜色
  toggle: () => {},
});

export default function UseContextDemo1() {
  // provider表示在这个之下的所有者，不管有多少级，都可以拿到context，不需要做组件的传递
  //   这里的value就是context的value
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: () => {
          setTheme(theme === themes.light ? themes.dark : themes.light);
        },
      }}
    >
      <Toolbar />
    </ThemeContext.Provider>
  );
}

const Toolbar = () => {
  return <ThemeButton />;
};

const ThemeButton = () => {
  const context = useContext(ThemeContext);
  return (
    <button
      style={{
        fontSize: "32px",
        color: context.theme.foreground,
        background: context.theme.background,
      }}
      onClick={() => {
        context.toggle();
      }}
    >
      Click Me!
    </button>
  );
};
