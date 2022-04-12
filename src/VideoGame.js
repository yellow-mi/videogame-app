import React, { Component } from "react";
import InputForm from "./InputForm";
import GameList from "./GameList";

class VideoGame extends Component {
  state = {
    user: {
      name: '',
      surName: '',
      userName: ''
    },
    userList: []
  }
  
  onInputChange = (event, inputField) => {
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          inputField: event.target.value
        }
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState((prevState) => ({
      userList: [
        ...prevState.userList,
        this.state.user
      ]
    }))

    this.initUser()
  }

  initUser = () => {
    this.setState(() => ({
      user: {
        name: '',
        surName: '',
        userName: ''
      }
    }))
  }

  render() {
      return (
        <div>
          <h1>This is the place where the state will be managed.</h1>
          <InputForm
            user={this.state.user}
            onChange={this.onInputChange}
            onSubmit={this.handleSubmit}
          />
          <GameList list={this.state.userList} />
        </div>
      )
    }
  }

export default VideoGame