import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

// Custom theme KVPs
const upperTheme = {
  bcNavy50: '#F2F6F6',
  bcPurple: 'purple',
  bodyFontFamily: poppins.style.fontFamily,
};

const muiTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

// Add upper key value pairs into the MUI theme
// Both are accessible from within any styled template literal block
// Available from theme object
const theme = {
  ...muiTheme,
  ...upperTheme,
};


export default theme;
