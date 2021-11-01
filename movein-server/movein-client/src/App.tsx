import React, { Suspense, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
//@ts-ignore
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import { EditProvider } from "./context/EditContext";

const MainPage = React.lazy(() => import("./pages/MainPage"));
const Apartment = React.lazy(() => import("./pages/Apartment"));
const Requirements = React.lazy(() => import("./pages/Requirements"));
const EditPrice = React.lazy(
  () => import("./components/Requirements/Price/EditPrice")
);
const EditArea = React.lazy(
  () => import("./components/Requirements/Area/EditArea")
);
const EditRooms = React.lazy(
  () => import("./components/Requirements/Rooms/EditRooms")
);
const EditEssentials = React.lazy(
  () => import("./components/Requirements/Essentials/EditEssentials")
);

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

  const RequirementsRoutes = () => {
    return (
      <EditProvider>
        <Switch>
          <Route path="/requirements/price">
            <EditPrice />
          </Route>
          <Route path="/requirements/area">
            <EditArea />
          </Route>
          <Route path="/requirements/rooms">
            <EditRooms />
          </Route>
          <Route path="/requirements/essentials">
            <EditEssentials />
          </Route>
          <Route path="*">
            <Requirements />
          </Route>
        </Switch>
      </EditProvider>
    );
  };

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
            <Route path="/requirements">{RequirementsRoutes()}</Route>
            <Route exact path="/apartments">
              <Apartment />
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
