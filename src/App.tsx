import Home from 'pages/Home';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import './styles.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <title>neovision21</title>
        <Switch>
          <Route exact={true} path={'/home'} component={Home} />
          <Route exact={true} path={'/'} component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default hot(App);
