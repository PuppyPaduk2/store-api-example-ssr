import * as React from 'react';
import { ContextScope } from "store-api";
import { Context } from "store-api-react";
import { Route, Switch } from "react-router-dom";

import { Page } from "./ui/templates/page";
import { PageHome } from "./pages/home";
import { PageJoke } from "./pages/joke";

export const App = (props: { context: ContextScope }) => {
  return (
    <Context value={props.context}>
      <Switch>
        <Route path="/joke">
          <Page>
            <PageJoke />
          </Page>
        </Route>
        <Route path="*">
          <Page>
            <PageHome />
          </Page>
        </Route>
      </Switch>
    </Context>
  );
};