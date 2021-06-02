import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import styled from 'styled-components';
import SideBar from './Components/SideBar';
import Chat from './Components/Chat';

function App() {
  return (
    <div className="app">
      <Router>
      <div>
        <Header/>
        <AppBody>
          <SideBar/>
          <Switch>
              <Route path="/" exact>
                <Chat/>
              </Route>
            </Switch>
        </AppBody>
      </div>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;

