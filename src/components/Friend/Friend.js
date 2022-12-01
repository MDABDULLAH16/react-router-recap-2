import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;

  const navigate = useNavigate();

  const showFriendDetail = () => {
    navigate("/friend/" + id);
  };

  return (
    <div>
      <h1>name: {name}</h1>
      <Link to={"/friend/" + id}>Show me</Link>
      <button onClick={showFriendDetail}>
        userName: {username} id: {id}
      </button>
    </div>
  );
};

export default Friend;
