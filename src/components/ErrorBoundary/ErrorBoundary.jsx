import Router from "next/router";
import React, { Component } from "react";
import Error from "./Error";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error({ error, errorInfo });
  }

  resetError = () => {
    this.setState({ isError: false });
  };

  render() {
    if (this.state.isError) {
      return (
        <Error
          title="Error Occurred!"
          subTitle="Error Occurred!. Please try again later."
          butonText="Refresh"
          onClick={() => Router.reload()}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
