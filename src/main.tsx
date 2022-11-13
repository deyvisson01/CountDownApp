import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import RouterApp from "./Routes";
import {store} from './store/store'
import theme from "./styles/theme";
import GlobalStyles from './styles/globals'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterApp />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
