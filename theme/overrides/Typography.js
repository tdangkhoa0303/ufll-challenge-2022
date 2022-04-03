export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#FFFFFF'
        },
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(1)
        }
      }
    }
  };
}
