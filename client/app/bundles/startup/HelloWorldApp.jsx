import React from 'react';
import ReactOnRails from 'react-on-rails';

import HelloWorld from '../containers/HelloWorld';
import ReadingList from '../containers/ReadingList';

const HelloWorldApp = (props) => (
  <HelloWorld {...props} />
);

const ReadingListApp = (props) => {
  return <ReadingList {...props} />
};
// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ HelloWorldApp, ReadingListApp });
