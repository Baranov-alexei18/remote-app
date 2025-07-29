import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Ошибка в ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Произошла ошибка при загрузке компонента.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
