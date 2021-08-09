import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import ListComponent from './components/ListComponent';
import PersonComponent from './components/PersonComponent';
import { Grid, Container, Card } from '@material-ui/core';
function App() {
  return (
    <Provider store={store}>

      <Container>
        <Card style={{ padding: "10px" }}>
          <Grid container>
            <Grid item xs={6} >
              <PersonComponent></PersonComponent>
            </Grid>

            <Grid item xs={6}  >
              <ListComponent></ListComponent>

            </Grid>
          </Grid>
        </Card>
      </Container>

    </Provider>
  );
}

export default App;
