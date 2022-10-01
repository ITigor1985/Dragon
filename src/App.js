import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppBar from "./components/appBar/AppBar";
import { DragonsList } from "./features/dragons/DragonsList";

import { SingleDragonPage } from "./features/dragons/SingleDragonPage";
import LoginView from "./features/login/LoginView";
import RegisterView from "./features/register/RegisterView";

const params = { params: { dragonId: "5e9d058759b1ff74a7ad5f8f" } };

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <SingleDragonPage match={params} />
                <DragonsList />
              </React.Fragment>
            )}
          />

          <Route exact path="/dragons/:dragonId" component={SingleDragonPage} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
