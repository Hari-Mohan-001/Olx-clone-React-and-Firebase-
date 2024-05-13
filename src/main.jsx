import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./Context/Context.jsx";
import ViewPost from "./Context/ViewPostContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <ViewPost>
          <App />
        </ViewPost>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
