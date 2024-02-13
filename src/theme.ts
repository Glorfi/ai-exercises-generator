// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  background: '#fffefa', //(White)
  primary: '#1d345a', // (Navy Blue)
  secondary: {
    base: '#0066a2',
    50: '#daf8ff',
    100: '#aee4ff',
    200: '#7ed0ff',
    300: '#4dbdff',
    400: '#23aafe',
    500: '#0f90e5',
    600: '#0070b3',
    700: '#005081',
    800: '#003050',
    900: '#001120',
  }, // (Dark Cyan)
  highlight: '#09abd2', //  (Light Cyan)
};

const breakboints = {
  breakpoints: {
    base: '0px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export const theme = extendTheme({ colors, breakboints });
