import React from "react";

const UserCard = ({ user }) => {
  return (
    <div class="card">
      <img className="card-img-top" src={user.avatar_url} alt=""></img>
      <div className="card-body">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">
          <div className="text-primary">{user.name}</div>
          <div className="text-primary">{user.location}</div>
          <div className="text-primary">{user.bio}</div>
          <div className="text-info">
            Available for hire: {user.hireable ? "YES" : "NOPE"}
          </div>
          <div className="text-info">Followers {user.followers}</div>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
