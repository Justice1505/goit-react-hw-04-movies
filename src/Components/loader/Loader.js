import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  render() {
    return (
      <Loader type="Audio" color="rgb(133, 5, 48)" height={100} width={70} />
    );
  }
}
