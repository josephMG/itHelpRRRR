import { combineReducers, applyMiddleware, createStore } from 'redux';
import middleware from 'redux-thunk';

import reducers from '../reducers';
import { initialStates } from '../reducers';

/*
 *  Export a function that takes the props and returns a Redux store
 *  This is used so that 2 components can have the same store.
 */
export default (props, railsContext) => {
  const combinedReducer = combineReducers(reducers);
  const newProps = { ...props, railsContext };
  const { $$readingListState } = initialStates;
  const initialState = {
    $$readingListStore: $$readingListState.merge({
      ...props,
			railsContext
    }),
  };
  return applyMiddleware(middleware)(createStore)(combinedReducer, initialState);
};
