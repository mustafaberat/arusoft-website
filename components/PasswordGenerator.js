import React from "react";

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specials = [
  "+",
  "-",
  "&&",
  "||",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
  '"',
  "\\",
];

let NEXT_NUMBER_COUNTER = 97;

class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.setPassword = this.setPassword.bind(this);
  }

  setPassword(event) {
    let oldPassword = event.target.value;
    let newPassword = "";

    for (var i = 0; i < oldPassword.length; i++) {
      let char = oldPassword.charAt(i);
      if (/^\d+$/.test(char)) {
        //   NUMBER
        newPassword +=
          numbers[
            (numbers.indexOf(char) + NEXT_NUMBER_COUNTER) % numbers.length
          ] +
          specials[
            (numbers.indexOf(char) + NEXT_NUMBER_COUNTER) % specials.length
          ];
      } else if (char.match(/[a-z]/i)) {
        //LETTER
        newPassword +=
          letters[
            (letters.indexOf(char) + NEXT_NUMBER_COUNTER) % letters.length
          ] +
          specials[
            (letters.indexOf(char) + NEXT_NUMBER_COUNTER) % specials.length
          ];
      } else {
        //SPECIAL
        newPassword +=
          specials[
            (specials.indexOf(char) + NEXT_NUMBER_COUNTER) % specials.length
          ] +
          numbers[
            (specials.indexOf(char) + NEXT_NUMBER_COUNTER) % numbers.length
          ];
      }

      console.log(char, "\t ", newPassword);
    }

    this.setState({ input: newPassword });
  }

  render() {
    return (
      <div className="passwordGeneratorDiv">
        <div className="passwordInputDiv">
          <input
            className="password-input"
            type="password"
            id="password"
            name="password"
            onChange={this.setPassword}
          />
        </div>
        <div className="passwordResultDiv">
          <p className="passwordP" value={this.state.input}>
            {this.state.input}
          </p>
        </div>
        <div style={{ marginBottom: "20px" }}></div>
      </div>
    );
  }
}

export default PasswordGenerator;
