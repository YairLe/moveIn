import React from "react";
import Auth from "./components/Auth/Auth";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Requirements from "./pages/Requirements";
import EditPrice from "./components/Requirements/Price/EditPrice";
import { EditProvider } from "./context/EditContext";
import EditArea from "./components/Requirements/Area/EditArea";
import EditRooms from "./components/Requirements/Rooms/EditRooms";
import EditEssentials from "./components/Requirements/Essentials/EditEssentials";

function App() {
  const isAuth = true;

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
            <Redirect to="/requirements" />
          </Route>
        </Switch>
      </EditProvider>
    );
  };

  return (
    <Switch>
      {isAuth ? (
        <Switch>
          <Route exact path="/main">
            <MainPage />
          </Route>
          <Route path="/requirements">{RequirementsRoutes()}</Route>
          <Route exact path="/apartments">
            <MainPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      ) : (
        <Route path="/">
          <Auth />
        </Route>
      )}

      <Route exact path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
