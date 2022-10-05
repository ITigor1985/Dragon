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

import { GlobalStyles } from "./styles/GlobalStyles";

import { AppBar } from "./components/appBar";
import { Container } from "./components/container";
import { DragonsList } from "./components/dragons";
import { SingleDragonPage } from "./components/dragons";
import { LoginView } from "./components/login";
import { RegisterView } from "./components/register";

const params = { params: { dragonId: "5e9d058759b1ff74a7ad5f8f" } };

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <div>
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
