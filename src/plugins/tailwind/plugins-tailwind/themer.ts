export const themer = (
  colors: Record<
    string,
    {
      light: string;
      dark: string;
    }
  >,
  darkMode: 'class' | 'media'
) => {
  const options: {
    defaultTheme: {
      extend: {
        colors: Record<string, string>;
      };
    };
    themes: [
      {
        name: 'darkTheme';
        selectors?: ['.dark-mode', '[data-theme="dark"]'];
        mediaQuery?: '@media (prefers-color-scheme: dark)';
        extend: {
          colors: Record<string, string>;
        };
      }
    ];
  } = {
    defaultTheme: {
      extend: {
        colors: {},
      },
    },
    themes: [
      {
        name: 'darkTheme',
        extend: {
          colors: {},
        },
      },
    ],
  };

  Object.entries(colors).forEach(([key, value]) => {
    options.defaultTheme.extend.colors[key] = value.light;
    options.themes[0].extend.colors[key] = value.dark;
  });
  options.themes[0].selectors =
    darkMode === 'class' ? ['.dark-mode', '[data-theme="dark"]'] : undefined;
  options.themes[0].mediaQuery =
    darkMode === 'media' ? '@media (prefers-color-scheme: dark)' : undefined;

  return require('tailwindcss-themer')(options);
};
