// Importing React and ReactDOM to render the app
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the main App component
import App from "./App";

// Getting the root div element from index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
