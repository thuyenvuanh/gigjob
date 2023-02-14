import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./constants/firebaseConfig";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);
const auth = firebase.auth(app);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
