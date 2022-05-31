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
  const [themeState, setTheme] = useState(themes.dark);

  const howChangeTheme = () => {
    setTheme(themeState === themes.dark ? themes.light : themes.dark);
  }

  useEffect(() => {
    switch (themeState) {
      case themes.light:
        document.body.classList.add('white-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-content');
        break;
    }
  }, [themeState]);

  return (
    <ThemeContext.Provider value={{ theme: themeState, changeTheme: howChangeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}