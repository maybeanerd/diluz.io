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
        background: { light: colors.gray[200], dark: colors.gray[900] },
        content: { light: colors.gray[900], dark: colors.gray[200] },
      },
    },
  },
  darkMode: 'class',
};
