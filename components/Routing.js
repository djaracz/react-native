import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { BasicComponent } from './BasicComponent';
import { GraphQL } from './GraphQL';

export const BASIC_KEY = 'basic';
export const GRAPH_QL_KEY = 'graphQL';

export const Routing = () => (
  <Router>
    <Stack key="root">
      <Scene key={BASIC_KEY} component={BasicComponent} title="Basic Component" initial/>
      <Scene key={GRAPH_QL_KEY} component={GraphQL} title="GraphQL" />
    </Stack>
  </Router>
);
