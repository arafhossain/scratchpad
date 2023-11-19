import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  componentDidMount() {
    let clearInput = () => {
      this.setState({ text: "" });
    };
    const input = document.getElementById("textArea");
    let timeout = null;
    input.addEventListener("keyup", function (e) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        clearInput();
      }, 5000);
    });
  }
  onInputChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <textarea
        id="textArea"
        rows={30}
        cols={100}
        value={this.state.text}
        onChange={this.onInputChange}
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "14px",
          outline: "none",
          WebkitBoxShadow: "none",
          boxShadow: "none",
          resize: "none",
          border: "none",
          marginTop: "15px",
        }}
      />
    );
  }
}
