import React from 'react'
import {MyProvider} from './Provider'
import Bar from './components/Bar/Bar'
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import SideBar from './components/SideBar/SideBar';
import TodosTable from './components/Main/TodosTable';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#444'
    },
    secondary: {
      main: '#b71010',
    },
    spacing:{
      unit: '3px'
    }
  },
}
);

   function App(props){
  // const [isSideOpen, setIsSideOpen] = useState(true);


  return (
    <MyProvider>
      <MuiThemeProvider theme={theme}>
        <div className="App">
           <Bar />
           <SideBar/>
           <TodosTable/>
        </div>
      </MuiThemeProvider>
    </MyProvider>
  )
  }

export default App
