import React from "react";
import { Switch, Route } from "react-router";
import { EditProvider } from "../context/EditContext";

const Requirements = React.lazy(() => import("../pages/Requirements"));

const EditPrice = React.lazy(
  () => import("../components/Requirements/Price/EditPrice")
);
const EditArea = React.lazy(
  () => import("../components/Requirements/Area/EditArea")
);
const EditRooms = React.lazy(
  () => import("../components/Requirements/Rooms/EditRooms")
);
const EditEssentials = React.lazy(
  () => import("../components/Requirements/Essentials/EditEssentials")
);

const RoutesRequirements: React.FC = () => {
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

export default RoutesRequirements;
