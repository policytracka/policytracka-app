import {useState, useEffect} from 'react';
import * as React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import { Box, ThemeProvider, createTheme } from '@mui/system';


type Props = {}
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
const card1 = (
    <React.Fragment>
         <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 4,
            borderRadius: 2,
            p: 2,
            minWidth: 250,
            maxWidth: 700,
          }}
        >
            <div className="gallery-img">
                      <Zoom>
                        <img
                        src='../src/assets/wordcloud.png'
                        alt="Zoom-images"
                        width="500"/>
                        </Zoom>
                 </div>
        </Box>
    </React.Fragment>
);
const Card = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
     {card1}
    </ThemeProvider>
  );
}
export default Card