import './App.css';
import {AppBar, Container, Grid, TextField, Typography} from '@material-ui/core'
import Form from './components/form'
import UserList from './components/list'
import {store} from './actions/store'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>

    <Container max-width="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
        Test
        </Typography>
      </AppBar>
      <Grid container item alignItems="center" justify="space-between" style={{minHeight:'80vh'}} direction="column">
        <div/>
        <Form/>
        <UserList/>
        <div/>
      </Grid>
    </Container>
    </Provider>
  );
}

export default App;
