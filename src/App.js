import React from 'react'
import {MyProvider, MyContext} from './Provider'
import Bar from './components/Bar/Bar'
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import SideBar from './components/SideBar/SideBar';
import TodosTable from './components/Main/TodosTable';
import Alert from './components/Alert'
import Typography from '@material-ui/core/Typography';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#496'
    },
    secondary: {
      main: '#d44',
    },
    spacing:{
      unit: '3px'
    }
  },
}
);

   function App(props){
  // const [isSideOpen, setIsSideOpen] = useState(true);
  const table = (arr) => {
    return (arr.length === 0 ) ? (<Typography  variant="h5" align = 'center' style = {{padding: 50, color: '#666'}}>
              Нет задач
            </Typography>) : <TodosTable/> 
  }

  return (
    <MyProvider>
      <MuiThemeProvider theme={theme}>
        <MyContext.Consumer>
          {
            ({openSnack , setOpenSnack, todos})=>(
              <div className="App">    
              <Alert openSnack = {openSnack} setOpenSnack={setOpenSnack}>
                    <div>Нажмите отмена</div>
                  </Alert>
           
    
                <Bar />
                <SideBar/>
                {table(todos)}
              </div>
          )
      }
      
        </MyContext.Consumer>
      </MuiThemeProvider>
    </MyProvider>
  )
  }

export default App
