import React from 'react';

/*
Это задание со звёздочкой, его можно не выполнять.

Это необычный вид хока, который называется **inheritance inversion HOC**.

В отличие от обычного, в нём мы используем не композицию,
а наследование от обёрнутого компонента.

ВНИМАНИЕ! Настоятельно не рекомендую использовать этот вид HOC
на практике
*/

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
