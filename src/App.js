import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import River from './components/River';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Poker Game</p>
        <River />
      </header>
    </div>
  );
}

export default App;
