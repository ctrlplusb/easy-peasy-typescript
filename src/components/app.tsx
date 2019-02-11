import React, { Component } from "react";
import Todos from "./todos";
import Notification from "./notification";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Easy Peasy + Typescript</h1>
        <p>
          This is a demonstration of how to utilise the Typescript integration
          of <a href="https://github.com/ctrlplusb/easy-peasy">Easy Peasy</a>.
        </p>
        <Todos />
        <Notification />
      </div>
    );
  }
}

export default App;
