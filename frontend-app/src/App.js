import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <body class="App">
        <header>Header</header>
        <div class="App-body">
          <main class="App-content">Main Content</main>
          <nav class="App-nav">
            <h1>Navigation</h1>
              <ul>
                <li>Shows</li>
                <li>Event Calendar</li>
                <li>Resources</li>
                <li>Products</li>
                <li>Equipment</li>
                <li>Customers</li>
              </ul>
          </nav>
          <aside class="App-sidebar">Sidebar</aside>
        </div>
        <footer>Footer</footer>
      </body>
    );
  }
  
}

export default App;
