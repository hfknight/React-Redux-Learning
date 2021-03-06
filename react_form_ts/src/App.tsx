import * as React from 'react';
import './App.css';
import logo from './logo.svg';

import Hello from './components/Hello';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React TS Example</h1>
        </header>
        <div className="mt-3">
        {/* TODO - reference "contact us" form*/}
        <Hello name="Typescript" enthusiasmLevel={6}></Hello>
        </div>
      </div>
    );
  }
}

export default App;
