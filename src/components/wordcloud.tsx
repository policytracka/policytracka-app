import * as React from 'react';
import './wordcloud.css'
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});
const wordcloud = (
    <React.Fragment>
         <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 500,
            maxWidth: 1000,
          }}
        >
        <img src='./wordcloud.png'></img>
        </Box>
    </React.Fragment>
);
export default function WordCloud() {
    return (
      <ThemeProvider theme={theme}>
       {wordcloud}
      </ThemeProvider>
    );
  }