import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Pages/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { userContext } from "./context/userContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <userContext.Provider value={{name:'Jay',salary:'25000'}}>
          <App />
        </userContext.Provider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
