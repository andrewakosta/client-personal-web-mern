import React from "react";
import Admin from "./pages/admin";
import SingIn from "./pages/admin/SignIn";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <div>
        <h1>App.js</h1>
        <Admin />
        <SingIn />
        <Home />
        <Contact />
      </div>
    </>
  );
}

export default App;
