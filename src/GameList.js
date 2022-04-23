import React, { Component } from "react"

export default class GameList extends Component {
  state = {
    showGamesPlayed: true
  }

  toggleGames = () => {
    this.setState((oldState) => ({
      showGamesPlayed: !oldState.showGamesPlayed
    }))
  }

  render() {
    const { showGamesPlayed } = this.state

    return (
      <div className="game-list">
        <ol>
          {
            this.props.list.map((user, index) =>
              <li key={index}> Name: {user.name}, Lastname: {user.lastName}, Username: {user.userName}, Played Games {showGamesPlayed && (user.numbGames)}</li>
            )
          }
        </ol>
        <button onClick={this.toggleGames}>{showGamesPlayed ? 'Hide' : 'Show'} games</button>
      </div>
    )
  }
}