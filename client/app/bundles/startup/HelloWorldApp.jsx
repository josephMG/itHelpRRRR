import React from 'react';
import ReactOnRails from 'react-on-rails';

import { Provider } from 'react-redux';

import HelloWorld from '../containers/HelloWorld';
import ReadingList from '../containers/ReadingList';

import SharedReduxStore from '../stores/SharedReduxStore';
import ReadingListContainer from '../containers/ReadingListContainer';

const HelloWorldApp = (props) => (
  <HelloWorld {...props} />
);

const ReadingListApp = (props, _railsContext) => {
  const store = ReactOnRails.getStore('SharedReduxStore');
  const reactComponent = (
    <Provider store={store}>
			<ReadingListContainer />
    </Provider>
  );
  return reactComponent;
};
// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ HelloWorldApp, ReadingListApp });
ReactOnRails.registerStore({
	SharedReduxStore,
});
