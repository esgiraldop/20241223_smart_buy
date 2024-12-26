import {TextStyle} from 'react-native'; // Import for accurate typing

export const theme = {
  colors: {
    background: '#F5F5F5', // Light Gray for a clean look
    backgroundLighter: '#E6EE9C', // Light Lime
    borderColor: '#AFB42B', // Olive Green
    accent: '#FFEB3B', // Bright Yellow
    backgroundLight: '#CDDC39', // Lime Green
    textPrimary: '#212121', // Dark Gray for readability
    textSecondary: '#757575', // Muted Gray for secondary text
    textDark: '#000', // Black
    error: '#D72A2A', // Red for errors
    success: '#4BB543', // Green for success
    warning: '#FBC02D', // Golden Yellow for warnings
    transparentDark: '#00000080', // Semi-transparent black
    transparent: '#00000000', // Fully transparent
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 30,
      fontWeight: '700' as TextStyle['fontWeight'], // Explicitly typed
      fontFamily: 'Raleway',
    },
    h2: {
      fontSize: 25,
      fontWeight: '700' as TextStyle['fontWeight'], // Explicitly typed
      fontFamily: 'Raleway',
    },
    h3: {
      fontSize: 20,
      fontWeight: '700' as TextStyle['fontWeight'], // Explicitly typed
      fontFamily: 'Roboto',
    },
    h4: {
      fontSize: 18,
      fontWeight: '700' as TextStyle['fontWeight'], // Explicitly typed
      fontFamily: 'Roboto',
    },
    body1: {
      fontSize: 16,
      fontWeight: '400' as TextStyle['fontWeight'], // Explicitly typed
      fontFamily: 'Roboto',
    },
    body2: {
      fontSize: 14,
      fontWeight: '400' as TextStyle['fontWeight'], // Explicitly typed
      fontFamily: 'Roboto',
    },
    bold: {
      fontFamily: 'Roboto',
      fontWeight: 'bold' as TextStyle['fontWeight'], // Explicitly typed
    },
    italic: {
      fontFamily: 'Roboto',
      fontStyle: 'italic',
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    huge: 45,
  },
};
