import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

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
	const store = createStore(combinedReducer, 
														initialState, 
														compose(applyMiddleware(thunk), 
															      window.devToolsExtension ? window.devToolsExtension() : f => f)
													 )
  return store;
  //return applyMiddleware(middleware,)(createStore)(combinedReducer, initialState);
};
