import React from "react";

export default function GameList(props) {
  return (
    <div>
      <ol>
        {props.list.map((user, index) => <li key={index}>Name: {user.name} Surname: {user.surName} Username: {user.userName}</li>)}
      </ol>
    </div>
  )
} 