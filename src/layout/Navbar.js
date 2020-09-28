import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../context/GithubContext";
const Navbar = () => {
  const context = useContext(GithubContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav
        class="navbar navbar-expand-sm    mb-3"
        style={{ backgroundColor: "#202020" }}
      >
        <div class="container">
          <Link class="text-white navbar-brand" to="/">
            GitHub App
            {context.user?.email ? (
              <>
                <i> Hola!!!</i>
                <b> {context.user.email}</b>
              </>
            ) : (
              ""
            )}
          </Link>

          <button
            class="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-expanded="false"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              {context.user ? (
                <>
                  <li class="nav-item">
                    <Link
                      onClick={() => {
                        context.setUser(null);
                      }}
                      class="text-white nav-link"
                    >
                      SignOut
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link class="text-white nav-link" to="/signin">
                      SignIn
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="text-white nav-link" to="/signup">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
