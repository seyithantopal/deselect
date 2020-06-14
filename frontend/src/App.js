import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import NewStudent from './components/NewStudent';
import Students from './components/Students';
/*import Student from '../../backend/models/studentSchema';*/

function App() {

  const [data, setData] = useState('');

  /*const makeARequest = async () => {
    await axios.get('/hello').then(res => setData(res.data));
  }*/

  /*useEffect(() => {
    makeARequest();
  }, []);*/

  return (
    <Router >
      <Switch>
        <Route path="/" exact component={Students} />
        <Route path="/home" exact component={Students} />
        <Route path="/new/" component={NewStudent} />
      </Switch>
    </Router>
    /*<NewStudent />*/
    /*<Students />*/
  );
}

export default App;
