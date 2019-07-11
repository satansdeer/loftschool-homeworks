import React from 'react';

export const withRedBackground = WrappedComponent =>
  class Enhancer extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      if (!elementsTree || elementsTree.type !== 'button') {
        return elementsTree;
      }
      const props = { ...elementsTree.props, style: { background: 'red' } };
      return React.cloneElement(
        elementsTree,
        props,
        elementsTree.props.children
      );
    }
  };
