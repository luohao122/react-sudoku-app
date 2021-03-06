import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import { Content, Title, Card, Grid, Numbers, NewGameButton } from "components";
import { register } from "core";
import { GlobalStyles, theme } from "styles";
import reportWebVitals from "./reportWebVitals";
import { storeConfig } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <Content data-cy='content'>
            <Title data-cy='title'>Sudoku</Title>
            <Card data-cy='card'>
              <NewGameButton />
              <Grid />
              <Numbers />
            </Card>
          </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
