import React, { useState, useContext } from "react";
import Axios from "axios";
import UserCard from "./homeComponents/UserCard";
import Repos from "./homeComponents/Repos";
import { Redirect } from "react-router-dom";
import GithubContext from "../context/GithubContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const context = useContext(GithubContext);
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (err) {
      alert(err);
    }
  };
  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }
  return (
    <div className="container">
      <div class="jumbotron text-center">
        <h1 class="display-4">Welcome To My Website!{context.user.email}</h1>
        <p class="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          necessitatibus perspiciatis cum vitae, modi hic?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          quibusdam.
        </p>
      </div>
      <div class="input-group mb-3">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          class="form-control"
          type="text"
          placeholder="Find By Name..."
        />
        <div class="input-group-append">
          <button onClick={fetchDetails} class="btn btn-success" type="button">
            Search
          </button>
        </div>
      </div>
      {user ? (
        <div className="row mt-3">
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <UserCard user={user} />
          </div>
          <div className="col-sm-6 col-md-8 col-lg-8 col-xl-8">
            <Repos repoUrl={user.repos_url} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
