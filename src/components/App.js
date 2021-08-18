import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  rootRoute,
  detectorRoute,
  mutantsListRoute,
  mutantsNewRoute,
  detectorResultRoute,
  mutantsNewOkRoute,
} from "Constants/routes";

import MutantContextProvider from "Contexts/MutantContextProvider";

import Layout from "Components/Layout/Layout";
import MutantList from "Components/Mutant/MutantList/MutantList";
import DetectorHome from "Components/Detector/DetectorHome/DetectorHome";
import DetectorResult from "Components/Detector/DetectorResult/DetectorResult";
import MutantNew from "Components/Mutant/MutantNew/MutantNew";
import MutantNewOk from "Components/Mutant/MutantNewOk/MutantNewOk";

const App = () => {
  return (
    <MutantContextProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path={rootRoute} component={DetectorHome}></Route>
            <Route exact path={detectorRoute} component={DetectorHome}></Route>
            <Route
              exact
              path={detectorResultRoute}
              component={DetectorResult}
            ></Route>
            <Route exact path={mutantsListRoute} component={MutantList}></Route>
            <Route exact path={mutantsNewRoute} component={MutantNew}></Route>
            <Route
              exact
              path={mutantsNewOkRoute}
              component={MutantNewOk}
            ></Route>
          </Switch>
        </Layout>
      </Router>
    </MutantContextProvider>
  );
};

export default App;
