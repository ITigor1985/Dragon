import React, { useEffect } from "react";
import { Global } from "@emotion/react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { authOperations } from "./app/auth";
import AppBar from "./components/appBar/AppBar";
import { Container } from "./components/container/Container";
import { DragonsList } from "./features/dragons/DragonsList";

import { SingleDragonPage } from "./features/dragons/SingleDragonPage";
import LoginView from "./features/login/LoginView";
import RegisterView from "./features/register/RegisterView";
import { GlobalStyles } from "./styles/GlobalStyles";

const params = { params: { dragonId: "5e9d058759b1ff74a7ad5f8f" } };

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Global styles={GlobalStyles} />
        <Container>
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

            <Route
              exact
              path="/dragons/:dragonId"
              component={SingleDragonPage}
            />
            <Route path="/register" component={RegisterView} />
            <Route path="/login" component={LoginView} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
