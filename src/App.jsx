import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

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
