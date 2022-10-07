import React, { Suspense, useEffect } from "react";
import { Global } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { authOperations, authSelectors } from "./app/auth";

import { GlobalStyles } from "./styles/GlobalStyles";

import { AppBar } from "./components/appBar";
import { Container } from "./components/container";
import { DragonsList, FavoritesDragonPage } from "./components/dragons";
import { SingleDragonPage } from "./components/dragons";
import { LoginView } from "./components/login";
import { RegisterView } from "./components/register";
import PrivateRoute from "./route/PrivatRoute";
import PublicRoute from "./route/PublicRoute";

const params = { params: { dragonId: "5e9d058759b1ff74a7ad5f8f" } };

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Global styles={GlobalStyles} />
        <Container>
          {isFetchingCurrentUser ? (
            <h1>Показываем React Skeleton</h1>
          ) : (
            <>
              <AppBar />
              <Switch>
                <Suspense fallback={<p>Загружаем...</p>}>
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

                  <PrivateRoute path="/api/dragons/favorites">
                    <FavoritesDragonPage />
                  </PrivateRoute>

                  <PublicRoute path="/register" restricted>
                    <RegisterView />
                  </PublicRoute>

                  <PublicRoute path="/login" restricted>
                    <LoginView />
                  </PublicRoute>
                  <Redirect to="/" />
                </Suspense>
              </Switch>
            </>
          )}
        </Container>
      </div>
    </Router>
  );
}

export default App;
