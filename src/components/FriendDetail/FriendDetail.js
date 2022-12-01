import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const perams = useParams();
  return (
    <div>
      <h1>this is details of a friend {perams.friendId}</h1>
    </div>
  );
};

export default FriendDetail;
