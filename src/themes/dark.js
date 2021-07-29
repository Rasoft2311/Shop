import { createTheme } from '@material-ui/core/styles';

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['CeraPro','Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#fff',
      dark: '#fff'
    },
    secondary: {
      main: '#000',
      dark: '#000'
    },
    third: {
      main: '#FF0000',
      dark: '#FF0000'
    },
    additional: {
      main: '#00FF00',
      dark: '#00FF00'
    },
    backgroundTransparent: {
      dark: 'rgba(0, 0, 0, 0.7)'
    },
    background: {
      dark: '#000'
    },
    backgroundSecondary: {
      dark: '#fff'
    },
    borderLine: {
      dark: 'rgba(0,0,0,0.2)'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '16px'
        },
        body: {
          minWidth: '320px'
        },
        ul: {
          margin: 0,
          paddingLeft: 0,
          listStyleType: 'none',
        },
        svg: {
          display: 'block'
        }
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '1.85rem'
      },
      h2: {
        fontSize: '1.5rem'
      },
      h3: {
        fontSize: '1.25rem'
      },
      h4: {
        fontSize: '1rem'
      },
      body1: {
        fontSize: '0.875rem'
      },
      body2: {
        fontSize: '0.75rem'
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: '2.5rem'
      }
    },
    MuiIconButton: {
      root: {
        padding: '0',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
  },
  props: {
    MuiLink: {
      underline: 'none'
    },
    MuiButtonBase: {
      disableTouchRipple: true,
      focusRipple: true,
    },
  },
  customVariables: {
    headerHeightDesktop: 80,
    headerHeightMobile: 60,
  }
});