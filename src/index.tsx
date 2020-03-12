import * as React from 'react';
import { render } from 'react-dom';
import { StoreProvider } from "easy-peasy";
import App from "./components/app";

import store from "./store";

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
