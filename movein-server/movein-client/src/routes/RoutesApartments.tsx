import React from "react";
import { Route, Switch } from "react-router";
import { ApartmentsProvider } from "../context/ApartmentsContext";
import { NewApartmentProvider } from "../context/NewApartmentContext";

const Apartments = React.lazy(() => import("../pages/Apartments"));

const NewApartment = React.lazy(
  () => import("../components/Apartments/NewApartment")
);
const ApartmentView = React.lazy(
  () => import("../components/Apartments/NewApartmentPages/ApartmentView")
);

const RoutesApartments: React.FC = () => {
  return (
    <ApartmentsProvider>
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
    </ApartmentsProvider>
  );
};

export default RoutesApartments;
