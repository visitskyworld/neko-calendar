import React from 'react';

import { FallBackComponent } from './FallBackComponent';

type Children = {
  children?: React.ReactNode;
};

export class ErrorBoundary extends React.Component<Children> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError)
      return <FallBackComponent message={'Oops, something is wrong!'} />;

    return this.props.children;
  }
}
