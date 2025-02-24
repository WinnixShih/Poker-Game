import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import River from './components/poker/River';
// import Reverse from './components/Reverse.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Game 1</h3>
        <p>High Hand</p>
        <River />
      </header>
      {/* <Reverse /> */}
    </div>
  );
}

export default App;
