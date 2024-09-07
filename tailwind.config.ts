import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        base: {
          light: colors.green[500],
          dark: colors.green[300],
        },
        highlight: { light: colors.green[400], dark: colors.green[400] },
        action: { light: colors.green[500], dark: colors.green[500] },
        content: {
          primary: { light: colors.gray[900], dark: colors.gray[200] },
          secondary: {
            light: colors.gray[300],
            dark: colors.gray[800],
          },
        },
      },
    },
  },
};
