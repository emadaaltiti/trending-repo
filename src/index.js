import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import ReduxThunk from "redux-thunk";
import { Provider as ProviderRedux } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";
import MainPage from "./containers/Views/MainPage";
import "./index.scss";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  persistedReducer,
  {},
  composeSetup(applyMiddleware(ReduxThunk))
);
const persistor = persistStore(store);
function PrivateRoute(props) {
  return (
    <Switch>
      <Route
        exact
        path="/trending"
        name="Trending"
        render={() => <MainPage {...props} />}
      />
      <Route
        exact
        path="/developers"
        name="Trending"
        render={() => <MainPage {...props} />}
      />
      <Redirect to="/trending" />
    </Switch>
  );
}

ReactDOM.render(
  <ProviderRedux store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <PrivateRoute />
      </HashRouter>
    </PersistGate>
  </ProviderRedux>,
  document.getElementById("root")
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
console.clear();
