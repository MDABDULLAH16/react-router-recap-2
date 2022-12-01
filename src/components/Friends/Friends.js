import { useEffect, useState } from "react";
import React from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h1>hello friends {friend.length}</h1>
      {friend.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
