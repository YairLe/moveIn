import React, { Suspense, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
//@ts-ignore
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import RoutesApartments from "./routes/RoutesApartments";
import RoutesRequirements from "./routes/RoutesRequirements";
const MainPage = React.lazy(() => import("./pages/MainPage"));

function App() {
  const [cookies, removeCookie] = useCookies(["login", "token"]);
  const [isAuth, setIsAuth] = useState<boolean>(
    cookies.login ? cookies.login.loggedIn : false
  );
  const calculateRemainingTime: Function = () => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = cookies.login.expires;
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
  };

  useEffect(() => {
    if (cookies.login && cookies.login.loggedIn) {
      const timeLeft = calculateRemainingTime();
      setIsAuth(true);
      setTimeout(() => {
        setIsAuth(false);
        removeCookie("login", "token");
      }, timeLeft);
    }
  }, [cookies]);

  return (
    <Switch>
      <Suspense
        fallback={
          <div>
            <LoadingSpinner />
          </div>
        }
      >
        {isAuth ? (
          <Switch>
            <Route exact path="/main">
              <MainPage />
            </Route>
            <Route path="/requirements">
              <RoutesRequirements />
            </Route>
            <Route path="/apartments">
              <RoutesApartments />
            </Route>
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
            <Route path="*">
              <Redirect to="/main" />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/main">
              <Auth />
            </Route>
            <Route path="*">
              <Redirect to="/main" />
            </Route>
          </Switch>
        )}
      </Suspense>
    </Switch>
  );
}

export default App;
