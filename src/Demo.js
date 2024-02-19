import React, { Component } from "react";
import Example from "./Example";

class Demo extends Component {
  myExample = React.createRef();

  state = {
    name: "ANITHA",
    job: "SOFTWARE DEVELOPER",
  };

  newState = () => {
    this.setState({ name: "SEKHAR" });
  };

  handleClick = () => {
    this.myExample.current.myFunction();
  };

  render() {
    const { name, job } = this.state;

    return (
      <>
        <h1>
          MY NAME IS {name}...I AM WORKING AS {job}
        </h1>
        <button onClick={this.newState}>click here to change name</button>
        <Example text="Random Text..." />
        <button onClick={this.handleClick}>Call Function</button>
        <Example ref={this.myExample} />
      </>
    );
  }
}

export default Demo;
