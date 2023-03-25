import {useState, useEffect} from 'react';
import * as React from 'react';
import ImageZoom from "react-image-zooom";
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
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 250,
            maxWidth: 700,
          }}
        >
            <div className="gallery-img">
                      <ImageZoom
                        src='../src/assets/wordcloud.png'
                        alt="Zoom-images"
                        zoom="300"
                      />
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