function createMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const myMiddleware = createMiddleware();
myMiddleware.withExtraArgument = createMiddleware;

export default myMiddleware;
