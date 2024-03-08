import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Outlet context={[currentUser, setCurrentUser]} />
    </>
  );
}

export default App;
