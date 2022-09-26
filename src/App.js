import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DragonsList } from "./features/dragons/DragonsList";

import { SingleDragonPage } from "./features/dragons/SingleDragonPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                {/* <SingleDragonPage /> */}
                <DragonsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/dragons/:dragonId" component={SingleDragonPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
