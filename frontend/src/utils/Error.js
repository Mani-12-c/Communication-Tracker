import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>hehe</h1>;
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  