import React from "react";
//components
//import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignInPage";

//styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <SignInPage />
      <GlobalStyle />
    </div>
  );
}

export default App;
