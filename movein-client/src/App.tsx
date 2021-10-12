import React from "react";
import Auth from "./components/Auth/Auth";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Requirements from "./pages/Requirements";

function App() {
  const isAuth = true;
  const location = useLocation();
  return (
    <div>
      <Switch>
        {isAuth ? (
          <>
            <Route path="/main">
              <MainPage />
            </Route>
            <Route path="/requirements">
              <Requirements />
            </Route>
            <Route path="/apartments">
              <MainPage />
            </Route>
            {/* <Route path="*">
              <Redirect to="/main" />
            </Route> */}
          </>
        ) : (
          <Route path="/" exact>
            <Auth />
          </Route>
        )}

        <Route path="*">
          <Redirect to={isAuth ? "/main" : "/"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
