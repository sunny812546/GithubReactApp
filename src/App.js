import React, { useState } from "react";
import GithubContext from "./context/GithubContext";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import PageNotFound from "./components/PageNotFound";
import Footer from "./layout/Footer";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config/firebaseConfig";
//init firebase
firebase.initializeApp(firebaseConfig);
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <GithubContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </GithubContext.Provider>
    </Router>
  );
};

export default App;
