import { darkTheme } from './dark';

export function getThemeByName(themeName) {
  return themeMap[themeName];
}

const themeMap = {
  dark: darkTheme
};