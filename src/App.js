import React, { Component } from "react";
import TextInput from "./components/TextInput";

class App extends Component {
  render() {
    return (
      <div style={{ padding: 80, width: 350 }}>
        <TextInput></TextInput>
      </div>
    );
  }
}

export default App;
