// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  white: '#fffefa',
  whiteOpacity: {
    50: 'rgba(255, 254, 250, 0.05)',
    100: 'rgba(255, 254, 250, 0.1)',
    200: 'rgba(255, 254, 250, 0.2)',
    300: 'rgba(255, 254, 250, 0.3)',
    400: 'rgba(255, 254, 250, 0.4)',
    500: 'rgba(255, 254, 250, 0.5)',
    600: 'rgba(255, 254, 250, 1)', // Основной тон
    700: 'rgba(255, 254, 250, 0.7)',
    800: 'rgba(255, 254, 250, 0.8)',
    900: 'rgba(255, 254, 250, 0.9)',
  }, // '#fffefa', //(White)
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
  error: {
    base: '#D9534F',
    50: '#fde6e5',
    100: '#fabdbb',
    200: '#f89390',
    300: '#f56966',
    400: '#f2403c',
    500: '#D9534F',
    600: '#b43131',
    700: '#8e2828',
    800: '#671e1e',
    900: '#401515',
},
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
