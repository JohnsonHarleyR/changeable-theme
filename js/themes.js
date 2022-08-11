
export const getUnlockedThemesForDropdown = () => {
  let types = Themes.types;
  let options = [];
  types.forEach(t => {
    let theme = Themes[`${t}`];
    if (theme.isUnlocked) {
      options.push({
        text: theme.name,
        value: t,
      });
    }
  });
  return options;
}

export const setTheme = (type) => {
  let root = Themes[`${type}`].root;
  let style = document.documentElement.style;

  // change root variables
  style.setProperty('--header-bg-color', root.headerBgColor);
  style.setProperty('--header-text-color', root.headerTextColor);
}


export const Themes = {
  types: [
    'default',
    'test',
  ],
  default: {
    name: 'Original',
    isUnlocked: true,
    root: {
      headerBgColor: 'rgba(2, 91, 135, 0.95);',
      headerTextColor: '#C9F4F3',
    },
  },
  test: {
    name: 'Test',
    isUnlocked: false,
    root: {
      headerBgColor: 'rgba(50, 255, 46, 0.95)',
      headerTextColor: '#F2F3D3',
    },
  },
}