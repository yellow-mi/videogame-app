import React from "react";

export default function InputForm(props) {
  return (
    <div>
      <h2>Input Form here:</h2>
      <form
      onSubmit={props.onSubmit}
      >
        <label>Name</label>
        <input 
        type="text"
        id="name"
        placeholder="Insert your Name here"
        value={props.user.name}
        onChange={(event) => props.onInputChange(event, this.state.user.name)}
        >
        </input>
        <label>Surname</label>
        <input 
        type="text"
        id="surName"
        placeholder="Insert your Surname here"
        value={props.user.surName}
        onChange={props.onChange}
        >
        </input>
        <label>Username</label>
        <input 
        type="text"
        id="userName"
        placeholder="Insert your Username here"
        value={props.user.userName}
        onChange={props.onChange}
        >
        </input>
        <button type="submit">Click here to submit</button>
      </form>
    </div>
  )
}