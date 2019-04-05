import React from 'react'
import {MyProvider} from './Provider'
import Bar from './components/Bar'
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#80cbc4',
    },
    secondary: {
      main: '#8bc34a',
    },
  },
}
);

   function App(props){
  return (
    <MyProvider>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Bar/>
        </div>
      </MuiThemeProvider>
    </MyProvider>
  )
  }

export default App
