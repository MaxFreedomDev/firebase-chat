import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import AppRouter from "./components/app-router";
import { Context } from "./index";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/loader/loader";

const App: React.FC = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader height={""} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
