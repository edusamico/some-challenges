import { createContext, useState, useEffect }  from 'react'

export const themes = {
    dark: "",
    light: "white-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
})

export const ThemeContextWrapper = (props) => {
  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = () => {
    setTheme(theme == themes.dark ? themes.light : themes.dark);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}