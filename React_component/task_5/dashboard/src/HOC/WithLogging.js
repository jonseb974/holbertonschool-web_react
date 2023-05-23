import React from 'react';


// Higher-Order-Component (H.O.C) logs when component is unmounted
function WithLogging(WrappedComponent) {
    // Determine the wrapped component name
  const componentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  // Define the hoc
    class HOC extends React.Component {
    componentDidMount() {
        // Log when component is mounted
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
        // Log when component is unmounted
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
        // Render the wrapper component with its props
      return <WrappedComponent {...this.props} />;
    }
  }
  // Set the display name of the HOC for debugging 
  HOC.displayName = `WithLogging(${componentName})`;
  return HOC;
}

export default WithLogging;