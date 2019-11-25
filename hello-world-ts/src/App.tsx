import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  render() {
    const logoOptions = {
      alt: "logo",
      className: "App-logo",
      src: logo
    };
    const title = "こんにちは React";
    const targets = ["Hello", "Kanae", "Yukina"];

    return (
      <div className="App">
        <header className="App-header">
          {
            // コメント
          }
          <img {...logoOptions} />
          { title && <p>{title}</p>}
          { targets.map(target => (
            <p>Hello, {targets}!</p>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
