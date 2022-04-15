import React from "react";

export default function GameForm(props) {
  return (
    <div className="game-form">
      <form onSubmit={props.onSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Insert your name"
          id="name"
          name="name"
          value={props.user.name}
          onChange={(event) => props.onInputChange(event, 'name')}
        />
        <label htmlFor="lastName">Lastname: </label>
        <input
          type="text"
          placeholder="Insert your lastname"
          id="lastname"
          name="lastname"
          value={props.user.lastName}
          onChange={(e) => props.onInputChange(e, 'lastName')}
        />
        <label htmlFor="userName">Username: </label>
        <input
          type="text"
          placeholder="Insert your username"
          id="username"
          name="username"
          value={props.user.userName}
          onChange={(e) => props.onInputChange(e, 'userName')}
        />
        <label htmlFor="numbGames">Numb of Games: </label>
        <input
          type="number"
          placeholder="Insert the number of games"
          id="numbgames"
          name="numbgames"
          value={props.user.numbGames}
          onChange={(e) => props.onInputChange(e, 'numbGames')}
        />
        <button type="submit" disabled={!props.inputIsValid}>add user</button>
      </form>
    </div>
  )
}