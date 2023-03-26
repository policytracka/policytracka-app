import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Treemap from '../../charts/Treemap';
import data from '../../data';
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
            p: 3,
            minWidth: 250,
            maxWidth: 1400,
          }}
        >
          <Box>
          {<Treemap data={data} height={700} width={1300} />}
          </Box>
        </Box>
    </React.Fragment>
);
const TreeMapCard = (props: Props) => {
  return (
   
    <ThemeProvider theme={theme}>
       <div className='shadow-xl'>
     {card1}
    </div>
    </ThemeProvider>
  );
}

export default TreeMapCard