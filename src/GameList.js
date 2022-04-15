import React from "react";

export default function GameList(props) {
  return (
    <div className="game-list">
      <ol>
        {
          props.list.map((user, index) =>
            <li key={index}> Name: {user.name}, Lastname: {user.lastName}, Username: {user.userName}, Played Games {props.showGamesPlayed &&  (user.numbGames)}</li>
          )
        }
      </ol>
      <button onClick={props.hideGames}>Hide games</button>
    </div>
  )
}