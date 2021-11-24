import React, { Suspense, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
//@ts-ignore
import { Redirect, Route, Switch } from "react-router-dom";
import NewApartment from "./components/Apartments/NewApartment";
import ApartmentView from "./components/Apartments/NewApartmentPages/ApartmentView";
import Auth from "./components/Auth/Auth";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import { EditProvider } from "./context/EditContext";
import { NewApartmentProvider } from "./context/NewApartmentContext";

const MainPage = React.lazy(() => import("./pages/MainPage"));
const Apartments = React.lazy(() => import("./pages/Apartments"));
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

  const ApartmentsRoutes = () => (
    <Switch>
      <Route path="/apartments/newapartment">
        <NewApartmentProvider>
          <NewApartment />
        </NewApartmentProvider>
      </Route>
      <Route path="/apartments/:apartmentId">
        <NewApartmentProvider>
          <ApartmentView />
        </NewApartmentProvider>
      </Route>
      <Route path="*">
        <Apartments />
      </Route>
    </Switch>
  );

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
            <Route path="/apartments">{ApartmentsRoutes()}</Route>
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
