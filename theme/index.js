import {CssBaseline} from '@mui/material';
import {createTheme, StyledEngineProvider, ThemeProvider} from '@mui/material/styles';
import {useMemo} from 'react';
import componentsOverride from './overrides';
import palette from './palette';
import shadows, {customShadows} from './shadows';
import typography from './typography';

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
