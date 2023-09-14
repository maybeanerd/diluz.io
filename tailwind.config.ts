import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          base: {
            light: colors.green[500],
            dark: colors.green[300],
          },
          highlight: { light: colors.green[400], dark: colors.green[400] },
          action: { light: colors.green[500], dark: colors.green[500] },
        },
        background: {
          light: colors.white,
          // This color comes from the naive UI dark theme, we could adjust the theme later on and use any color we want here
          dark: '#101014',
        },
        content: {
          primary: { light: colors.gray[900], dark: colors.gray[200] },
          secondary: {
            light: colors.gray[300],
            dark: colors.gray[700],
          },
        },
      },
    },
  },
  darkMode: 'class',
};
