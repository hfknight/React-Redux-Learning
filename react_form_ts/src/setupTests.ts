import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './App';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });