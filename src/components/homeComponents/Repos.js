import React, { useState, useEffect } from "react";
import Axios from "axios";

const Repos = ({ repoUrl }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repoUrl);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repoUrl]);

  return (
    <ul className="list-group mb-5">
      {repos.map((repo) => (
        <li className="list-group-item" key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.description}</div>
        </li>
      ))}
    </ul>
  );
};

export default Repos;
