import React, { PureComponent } from 'react';
import './App.css';
import Card from '../Card';
import Todo from '../Todo';

class App extends PureComponent {
  render() {
    return (
      <main className="main">
        <div className="main__cell">
          <Card title="Список дел">
            <Todo />
          </Card>
        </div>
      </main>
    );
  }
}

export default App;
